import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface ContactEnquiryPayload {
  fullName: string;
  email: string;
  countryCode?: string;
  phone?: string;
  enquiryType: string;
  message: string;
  consent: boolean;
  website_hp?: string; // Honeypot spam trap
}

// In-memory rate limiting store (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

const VALID_ENQUIRY_TYPES = [
  "General Enquiry",
  "Tiiger Trail (Flagship Destination)",
  "NRI Land Advisory",
  "Business & Land Acquisition Partnership",
  "Other",
];

export async function POST(req: NextRequest) {
  try {
    // 0. Rate limiting by IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();
    const timestamps = rateLimitMap.get(clientIp) || [];
    const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          error:
            "Too many requests received from this connection. Please wait a few minutes before submitting again or call our Dollars Colony office directly.",
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactEnquiryPayload;

    // 1. Anti-spam honeypot verification
    if (body.website_hp && body.website_hp.trim().length > 0) {
      return NextResponse.json(
        { error: "Automated submission detected and rejected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "A valid email address is required.";
    }

    if (body.phone && body.phone.trim().length > 0) {
      const cleanDigits = body.phone.replace(/\D/g, "");
      if (cleanDigits.length < 6) {
        errors.phone = "If provided, telephone number must contain at least 6 digits.";
      }
    }

    if (!body.enquiryType || !VALID_ENQUIRY_TYPES.includes(body.enquiryType.trim())) {
      errors.enquiryType = "Please select a valid enquiry classification.";
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters detailing your requirement.";
    }

    if (!body.consent) {
      errors.consent = "Consent to receive communication is required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Validation failed. Please correct the highlighted fields.",
          details: errors,
        },
        { status: 400 }
      );
    }

    // 3. Sanitized payload construction
    const referenceId = `STB-${Date.now().toString(36).toUpperCase()}`;
    const formattedPhone = body.phone?.trim()
      ? `${(body.countryCode || "").trim()} ${body.phone.trim()}`.trim()
      : undefined;

    const sanitizedEnquiry = {
      referenceId,
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: formattedPhone || "Not provided",
      enquiryType: body.enquiryType.trim(),
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
      sourcePage: "/contact-us/",
    };

    // 4. Persistence & Delivery
    let deliveryStatus = "persisted_to_local_ledger";
    let dispatchedToWebhook = false;

    // Check webhook configuration
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sanitizedEnquiry),
          signal: AbortSignal.timeout(6000), // 6-second timeout boundary
        });

        if (response.ok) {
          dispatchedToWebhook = true;
          deliveryStatus = "delivered_to_crm";
        } else {
          console.warn(`[CRM Webhook] Endpoint responded with HTTP ${response.status}`);
        }
      } catch (webhookErr) {
        console.warn("[CRM Webhook] External dispatch failed or timed out:", webhookErr);
      }
    } else {
      // In production cloud environments, file-based logging is ephemeral.
      if (process.env.NODE_ENV === "production") {
        console.warn(
          "[LEAD_STORAGE_ALERT] Neither CONTACT_WEBHOOK_URL nor CRM_WEBHOOK_URL is configured in environment. In serverless/ephemeral hosting, leads must be routed to a persistent CRM webhook."
        );
      }
    }

    // Secure local ledger persistence (fallback / local development audit)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const ledgerPath = path.join(dataDir, "contact-enquiries.jsonl");
      fs.appendFileSync(ledgerPath, JSON.stringify(sanitizedEnquiry) + "\n", "utf8");
    } catch (fsErr) {
      console.error("[Local Ledger] File append failed:", fsErr);
      if (!dispatchedToWebhook) {
        throw new Error("Persistence boundary failure: both webhook and local ledger unavailable.");
      }
    }

    // Privacy-conscious logging (no PII in stdout)
    console.info(`[Contact Enquiry Accepted] Ref: ${referenceId} | Status: ${deliveryStatus}`);

    // Periodic cleanup of rate-limit map to prevent memory leaks
    if (rateLimitMap.size > 1000) {
      for (const [key, times] of rateLimitMap.entries()) {
        const fresh = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
        if (fresh.length === 0) {
          rateLimitMap.delete(key);
        } else {
          rateLimitMap.set(key, fresh);
        }
      }
    }

    // Record rate-limit hit on success
    validTimestamps.push(now);
    rateLimitMap.set(clientIp, validTimestamps);

    return NextResponse.json(
      {
        success: true,
        referenceId,
        deliveryStatus,
        message:
          "Your enquiry has been received and catalogued by the Starrbites Corporate Advisory Desk. A senior representative will review your requirement and follow up via your preferred channel.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Corporate contact enquiry error:", err);
    return NextResponse.json(
      {
        error:
          "Unable to catalogue your enquiry at this moment due to a delivery destination error. Please reach out to our Dollars Colony headquarters directly at +91 97408 06357 or contact@starrbites.com.",
      },
      { status: 500 }
    );
  }
}
