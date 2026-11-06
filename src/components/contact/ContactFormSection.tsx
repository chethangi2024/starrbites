"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
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
    consent: true,
    website_hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validate = (): boolean => {
    const errors: FieldErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full legal name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (formData.phone.trim()) {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        errors.phone = "Please enter a valid telephone number.";
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please share a brief description of your inquiry (minimum 10 characters).";
    }

    if (!formData.consent) {
      errors.consent = "You must acknowledge communication consent to proceed.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website_hp) {
      setStatus("success");
      setReferenceId("SB-LEAD-" + Math.floor(100000 + Math.random() * 900000));
      return;
    }

    if (!validate()) {
      setStatus("error");
      setErrorMessage("Please review the highlighted fields below.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : undefined,
          project: formData.enquiryType,
          message: formData.message,
          sourcePage: "Corporate Contact Page (/contact-us/)",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setReferenceId(data.leadId || "SB-LEAD-" + Math.floor(100000 + Math.random() * 900000));
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to register your enquiry. Please verify details.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network communication failed. Please contact our Dollars Colony office directly.");
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
      consent: true,
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
      className="py-20 md:py-28 bg-[#FFFFFF] relative scroll-mt-24"
      aria-labelledby="contact-form-heading"
    >
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow theme="charcoal" className="justify-center mb-3">
              DIRECT INQUIRY CHANNEL
            </SectionEyebrow>
            <h2
              id="contact-form-heading"
              className="text-3xl sm:text-4xl font-serif text-[#292D30] font-semibold tracking-tight leading-[1.2]"
            >
              Submit Your Details &amp; Requirements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
              Every submission is catalogued in our advisory ledger and reviewed by a dedicated
              land specialist or partnership executive.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#F5F1E9] border border-[#DDD7CC] border-t-4 border-t-[#354B5D] rounded-[2px] p-8 sm:p-12 md:p-16 shadow-sm">
            {status === "success" ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#A98556]/20 text-[#354B5D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 bg-[#354B5D] text-xs font-semibold uppercase tracking-widest text-[#FFFFFF] rounded-xs">
                    Enquiry Catalogued
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm sm:text-base text-[#55534F] max-w-md mx-auto leading-relaxed">
                    Your enquiry has been received and routed to the appropriate advisory desk.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="inline-block bg-[#FFFFFF] border border-[#DDD7CC] px-6 py-4 rounded-[2px] shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-[#55534F] mb-1">
                    Tracking Reference ID
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-semibold text-[#292D30] tracking-wider">
                    {referenceId}
                  </div>
                </div>

                <p className="text-xs text-[#55534F] max-w-sm mx-auto">
                  Please retain this reference number for any follow-up correspondence regarding
                  your enquiry.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFFFFF] border border-[#354B5D] text-[#354B5D] text-xs font-semibold uppercase tracking-[0.05em] rounded-[2px] hover:bg-[#354B5D] hover:text-[#FFFFFF] transition-colors cursor-pointer whitespace-nowrap flex-nowrap"
                  >
                    <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">Submit Another Inquiry</span>
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
                  <label htmlFor="contact_hp">Leave empty</label>
                  <input
                    type="text"
                    id="contact_hp"
                    name="contact_hp"
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
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2"
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
                      className={`w-full bg-[#FFFFFF] border px-4 py-3 text-sm text-[#292D30] rounded-[2px] outline-none transition-all ${
                        fieldErrors.fullName
                          ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                          : "border-[#D1CEC4] focus:border-[#354B5D] focus:ring-1 focus:ring-[#354B5D]"
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
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2"
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
                      className={`w-full bg-[#FFFFFF] border px-4 py-3 text-sm text-[#292D30] rounded-[2px] outline-none transition-all ${
                        fieldErrors.email
                          ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                          : "border-[#D1CEC4] focus:border-[#354B5D] focus:ring-1 focus:ring-[#354B5D]"
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
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2"
                    >
                      Telephone / WhatsApp <span className="text-[#55534F] font-normal lowercase">(optional)</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country Dial Code"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="bg-[#FFFFFF] border border-[#D1CEC4] px-3 py-3 text-sm text-[#292D30] rounded-[2px] outline-none focus:border-[#354B5D]"
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
                        className={`flex-1 bg-[#FFFFFF] border px-4 py-3 text-sm text-[#292D30] rounded-[2px] outline-none transition-all ${
                          fieldErrors.phone
                            ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                            : "border-[#D1CEC4] focus:border-[#354B5D] focus:ring-1 focus:ring-[#354B5D]"
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
                      className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2"
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
                      className="w-full bg-[#FFFFFF] border border-[#D1CEC4] px-4 py-3 text-sm text-[#292D30] rounded-[2px] outline-none focus:border-[#354B5D] focus:ring-1 focus:ring-[#354B5D] cursor-pointer"
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
                    className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2"
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
                    className={`w-full bg-[#FFFFFF] border p-4 text-sm text-[#292D30] rounded-[2px] outline-none transition-all leading-relaxed ${
                      fieldErrors.message
                        ? "border-[#B3261E] focus:ring-1 focus:ring-[#B3261E]"
                        : "border-[#D1CEC4] focus:border-[#354B5D] focus:ring-1 focus:ring-[#354B5D]"
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
                      className="mt-1 w-4 h-4 rounded-[2px] border-[#D1CEC4] accent-[#354B5D] text-[#354B5D] focus:ring-[#354B5D] cursor-pointer"
                    />
                    <span className="text-xs text-[#55534F] leading-relaxed">
                      I agree to be contacted by Starrbites Developments regarding this enquiry and
                      acknowledge that my details are processed strictly in accordance with the{" "}
                      <span className="text-[#292D30] font-medium underline">
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
                  <div className="flex items-center gap-2 text-xs text-[#55534F]">
                    <div className="w-5 h-5 rounded-full bg-[#A98556]/20 flex items-center justify-center">
                      <Shield className="w-3 h-3 text-[#354B5D]" />
                    </div>
                    <span>Confidential &amp; Direct Advisory Communication</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-11 text-xs font-semibold uppercase tracking-[0.05em] rounded-[2px] whitespace-nowrap flex-nowrap transition-all duration-200 ${
                      status === "submitting"
                        ? "bg-[#354B5D]/70 text-[#FFFFFF] cursor-not-allowed"
                        : "bg-[#354B5D] text-[#FFFFFF] hover:bg-[#526B80] cursor-pointer shadow-md hover:-translate-y-[1px]"
                    }`}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span className="whitespace-nowrap">Cataloguing Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span className="whitespace-nowrap">Submit Corporate Enquiry</span>
                        <Send className="w-3.5 h-3.5 shrink-0" />
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
