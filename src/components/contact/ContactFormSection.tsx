"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Shield,
  Phone,
  RotateCcw,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  enquiryType: string;
  message: string;
  consent: boolean;
  website_hp: string;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
  consent?: string;
}

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
  { code: "+61", country: "Australia" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
];

const ENQUIRY_OPTIONS = [
  "General Enquiry",
  "Tiiger Trail (Flagship Destination)",
  "NRI Land Advisory",
  "Business & Land Acquisition Partnership",
  "Other",
];

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
    consent: false,
    website_hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim()) {
      const cleanDigits = formData.phone.replace(/\D/g, "");
      if (cleanDigits.length < 6) {
        errors.phone = "If provided, phone number must be at least 6 digits.";
      }
    }

    if (!formData.enquiryType || !ENQUIRY_OPTIONS.includes(formData.enquiryType)) {
      errors.enquiryType = "Please select a valid enquiry classification.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please provide brief details of your enquiry (minimum 10 characters).";
    }

    if (!formData.consent) {
      errors.consent = "Your consent is required to process this communication.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorKey = Object.keys(fieldErrors)[0];
      if (firstErrorKey) {
        const errorElement = document.getElementById(firstErrorKey);
        if (errorElement) errorElement.focus();
      }
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setReferenceId(data.referenceId || `STB-${Date.now().toString(36).toUpperCase()}`);
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Unable to process your enquiry at this moment. Please telephone our Dollars Colony desk directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network communication error occurred. Please verify your connection or contact our office directly at +91 97408 06357."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      enquiryType: "General Enquiry",
      message: "",
      consent: false,
      website_hp: "",
    });
    setFieldErrors({});
    setStatus("idle");
    setErrorMessage("");
    setReferenceId("");
  };

  return (
    <section
      id="contact-form"
      className="py-20 md:py-28 bg-white relative scroll-mt-24"
      aria-labelledby="contact-form-heading"
    >
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow theme="navy" className="justify-center mb-3">
              DIRECT INQUIRY CHANNEL
            </SectionEyebrow>
            <h2
              id="contact-form-heading"
              className="text-3xl sm:text-4xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.2]"
            >
              Submit Your Details & Requirements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              Every submission is catalogued in our advisory ledger and reviewed by a dedicated
              land specialist or partnership executive.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] p-8 sm:p-12 md:p-16 shadow-sm">
            {status === "success" ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8B6C20]">
                    Enquiry Catalogued
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#171C56] font-semibold">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] max-w-md mx-auto leading-relaxed">
                    Your enquiry has been received and routed to the appropriate advisory desk.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="inline-block bg-white border border-[#E7E7E7] px-6 py-4 rounded-[2px] shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-[#555555] mb-1">
                    Tracking Reference ID
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-semibold text-[#171C56] tracking-wider">
                    {referenceId}
                  </div>
                </div>

                <p className="text-xs text-[#555555] max-w-sm mx-auto">
                  Please retain this reference number for any follow-up correspondence regarding
                  your enquiry.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#171C56]/20 text-[#171C56] text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#171C56] hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                {/* Error Banner */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-[2px] text-xs sm:text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-semibold">Submission Incomplete</div>
                      <div>{errorMessage}</div>
                      <div className="text-xs text-red-700 pt-1">
                        Direct Desk:{" "}
                        <a href="tel:+919740806357" className="underline font-medium">
                          +91 97408 06357
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Honeypot Anti-Spam (Hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-2"
                    >
                      Full Name <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: "" });
                      }}
                      placeholder="e.g. Anand Vardhan"
                      aria-invalid={!!fieldErrors.fullName}
                      aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#242424] rounded-[2px] outline-none transition-all ${
                        fieldErrors.fullName
                          ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                          : "border-[#E7E7E7] focus:border-[#EDC455] focus:ring-1 focus:ring-[#EDC455]"
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p id="fullName-error" className="text-xs text-[#B3261E] mt-1.5">
                        {fieldErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-2"
                    >
                      Email Address <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                      }}
                      placeholder="e.g. anand@domain.com"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      className={`w-full bg-white border px-4 py-3 text-sm text-[#242424] rounded-[2px] outline-none transition-all ${
                        fieldErrors.email
                          ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                          : "border-[#E7E7E7] focus:border-[#EDC455] focus:ring-1 focus:ring-[#EDC455]"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-xs text-[#B3261E] mt-1.5">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number & Enquiry Classification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-2"
                    >
                      Telephone / WhatsApp <span className="text-[#555555] font-normal lowercase">(optional)</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country Dial Code"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="bg-white border border-[#E7E7E7] px-3 py-3 text-sm text-[#171C56] rounded-[2px] outline-none focus:border-[#EDC455]"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code} ({c.country})
                          </option>
                        ))}
                      </select>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
                        }}
                        placeholder="e.g. 98765 43210"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                        className={`flex-1 bg-white border px-4 py-3 text-sm text-[#242424] rounded-[2px] outline-none transition-all ${
                          fieldErrors.phone
                            ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                            : "border-[#E7E7E7] focus:border-[#EDC455] focus:ring-1 focus:ring-[#EDC455]"
                        }`}
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p id="phone-error" className="text-xs text-[#B3261E] mt-1.5">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-2"
                    >
                      Enquiry Classification <span className="text-[#B3261E]">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => {
                        setFormData({ ...formData, enquiryType: e.target.value });
                        if (fieldErrors.enquiryType)
                          setFieldErrors({ ...fieldErrors, enquiryType: "" });
                      }}
                      className="w-full bg-white border border-[#E7E7E7] px-4 py-3 text-sm text-[#171C56] rounded-[2px] outline-none focus:border-[#EDC455] focus:ring-1 focus:ring-[#EDC455] cursor-pointer"
                    >
                      {ENQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.enquiryType && (
                      <p className="text-xs text-[#B3261E] mt-1.5">{fieldErrors.enquiryType}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Message / Specific Requirements */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-2"
                  >
                    Your Message / Specific Requirements <span className="text-[#B3261E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
                    }}
                    placeholder="Please describe your interest, preferred plot dimensions, timeline, or specific due diligence questions..."
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    className={`w-full bg-white border p-4 text-sm text-[#242424] rounded-[2px] outline-none transition-all leading-relaxed ${
                      fieldErrors.message
                        ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                        : "border-[#E7E7E7] focus:border-[#EDC455] focus:ring-1 focus:ring-[#EDC455]"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-xs text-[#B3261E] mt-1.5">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Consent & Privacy Notice */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (fieldErrors.consent) setFieldErrors({ ...fieldErrors, consent: "" });
                      }}
                      className="mt-1 w-4 h-4 rounded-[2px] border-[#E7E7E7] text-[#171C56] focus:ring-[#EDC455] cursor-pointer"
                    />
                    <span className="text-xs text-[#555555] leading-relaxed">
                      I agree to be contacted by Starrbites Developments regarding this enquiry and
                      acknowledge that my details are processed strictly in accordance with the{" "}
                      <span className="text-[#171C56] font-medium underline">
                        Starrbites Privacy Commitment
                      </span>
                      . Starrbites does not share contact information with external marketing brokers.
                    </span>
                  </label>
                  {fieldErrors.consent && (
                    <p className="text-xs text-[#B3261E] mt-1.5">{fieldErrors.consent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#555555]">
                    <Shield className="w-3.5 h-3.5 text-[#EDC455]" />
                    <span>Confidential & Direct Advisory Communication</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-300 ${
                      status === "submitting"
                        ? "bg-[#171C56]/70 text-white cursor-not-allowed"
                        : "bg-[#171C56] text-[#EDC455] hover:bg-[#EDC455] hover:text-[#171C56] cursor-pointer shadow-md"
                    }`}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Cataloguing Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Corporate Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
