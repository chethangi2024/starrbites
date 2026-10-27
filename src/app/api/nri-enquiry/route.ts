import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface NriEnquiryPayload {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  countryOfResidence: string;
  investmentInterest: string;
  preferredContactMethod: string;
  notes?: string;
  consent: boolean;
  website_hp?: string; // Honeypot spam trap
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as NriEnquiryPayload;

    // 1. Anti-spam honeypot verification
    if (body.website_hp && body.website_hp.trim().length > 0) {
      return NextResponse.json(
        { error: "Spam submission rejected." },
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

    if (!body.phone || body.phone.replace(/\D/g, "").length < 6) {
      errors.phone = "A valid telephone number is required.";
    }

    if (!body.countryOfResidence || body.countryOfResidence.trim().length === 0) {
      errors.countryOfResidence = "Please select or specify your country of residence.";
    }

    if (!body.investmentInterest || body.investmentInterest.trim().length === 0) {
      errors.investmentInterest = "Please select an investment interest.";
    }

    if (!body.preferredContactMethod || body.preferredContactMethod.trim().length === 0) {
      errors.preferredContactMethod = "Please indicate your preferred contact channel.";
    }

    if (!body.consent) {
      errors.consent = "Consent to be contacted is required to process your enquiry.";
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
    const sanitizedEnquiry = {
      id: `NRI-${Date.now().toString(36).toUpperCase()}`,
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: `${(body.countryCode || "").trim()} ${body.phone.trim()}`.trim(),
      countryOfResidence: body.countryOfResidence.trim(),
      investmentInterest: body.investmentInterest.trim(),
      preferredContactMethod: body.preferredContactMethod.trim(),
      notes: body.notes ? body.notes.trim() : "",
      submittedAt: new Date().toISOString(),
    };

    // 4. Persistence & Delivery
    let deliveryStatus = "persisted_to_local_ledger";
    let dispatchedToWebhook = false;

    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL || process.env.NRI_WEBHOOK_URL;
    if (crmWebhookUrl) {
      try {
        const response = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sanitizedEnquiry),
          signal: AbortSignal.timeout(6000), // 6-second timeout boundary
        });

        if (response.ok) {
          dispatchedToWebhook = true;
          deliveryStatus = "delivered_to_crm";
        } else {
          console.warn(`[NRI Webhook] Endpoint responded with HTTP ${response.status}`);
        }
      } catch (webhookErr) {
        console.warn("[NRI Webhook] External dispatch failed or timed out:", webhookErr);
      }
    } else {
      if (process.env.NODE_ENV === "production") {
        console.warn(
          "[NRI_STORAGE_ALERT] Neither CRM_WEBHOOK_URL nor NRI_WEBHOOK_URL is configured in environment. In cloud hosting, leads must be piped to a persistent CRM webhook."
        );
      }
    }

    // Secure local ledger persistence (fallback / local development audit)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const ledgerPath = path.join(dataDir, "nri-enquiries.jsonl");
      fs.appendFileSync(ledgerPath, JSON.stringify(sanitizedEnquiry) + "\n", "utf8");
    } catch (fsErr) {
      console.error("[NRI Local Ledger] File append failed:", fsErr);
      if (!dispatchedToWebhook) {
        throw new Error("Persistence boundary failure: both webhook and local ledger unavailable.");
      }
    }

    // Privacy-conscious logging (no PII in stdout)
    console.info(`[NRI Enquiry Accepted] Ref: ${sanitizedEnquiry.id} | Status: ${deliveryStatus}`);

    // 5. Successful server response
    return NextResponse.json(
      {
        success: true,
        referenceId: sanitizedEnquiry.id,
        deliveryStatus,
        message:
          "Your enquiry has been received by the Starrbites NRI Advisory Desk. A senior advisor will contact you via your preferred communication method within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("NRI enquiry server error:", err);
    return NextResponse.json(
      {
        error:
          "Unable to process your enquiry at this moment. Please contact our Bengaluru advisory team directly by telephone.",
      },
      { status: 500 }
    );
  }
}
