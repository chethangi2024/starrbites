"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Phone, Mail, Shield } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";

interface FormState {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  countryOfResidence: string;
  investmentInterest: string;
  preferredContactMethod: string;
  notes: string;
  consent: boolean;
  website_hp: string; // Honeypot
}

export function NriEnquiryForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    countryOfResidence: "United States",
    investmentInterest: "Tiiger Trail — Flagship Plotted Estate",
    preferredContactMethod: "WhatsApp",
    notes: "",
    consent: true,
    website_hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const countryCodes = [
    { code: "+1", country: "USA / Canada (+1)" },
    { code: "+44", country: "United Kingdom (+44)" },
    { code: "+971", country: "UAE (+971)" },
    { code: "+65", country: "Singapore (+65)" },
    { code: "+61", country: "Australia (+61)" },
    { code: "+966", country: "Saudi Arabia (+966)" },
    { code: "+974", country: "Qatar (+974)" },
    { code: "+968", country: "Oman (+968)" },
    { code: "+965", country: "Kuwait (+965)" },
    { code: "+49", country: "Germany (+49)" },
    { code: "+91", country: "India (+91)" },
    { code: "+81", country: "Japan (+81)" },
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Singapore",
    "Australia",
    "Canada",
    "Qatar",
    "Saudi Arabia",
    "Germany",
    "Oman",
    "Kuwait",
    "Other",
  ];

  const interests = [
    "Tiiger Trail — Flagship Plotted Estate",
    "Strategic Bangalore Land Asset",
    "Weekend Countryside Retreat",
    "General Land Portfolio Consultation",
  ];

  const contactMethods = [
    "WhatsApp",
    "Email",
    "Phone Call",
    "Scheduled Video Consultation",
  ];

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full legal name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Please provide a valid contact telephone number.";
    }

    if (!formData.countryOfResidence) {
      errors.countryOfResidence = "Please select your current country of residence.";
    }

    if (!formData.consent) {
      errors.consent = "You must provide consent to be contacted regarding your enquiry.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMessage("");

    if (!validate()) {
      setStatus("error");
      setServerMessage("Please correct the errors indicated above.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/nri-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setReferenceId(data.referenceId || "CONFIRMED");
        setServerMessage(data.message);
      } else {
        setStatus("error");
        setServerMessage(
          data.error || "Unable to process enquiry. Please try again or telephone us directly."
        );
        if (data.details) {
          setFieldErrors(data.details);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "A network communication error occurred. Please verify your connection or contact our advisory desk by telephone."
      );
    }
  };

  return (
    <section
      id="nri-enquiry-form"
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7] scroll-mt-24"
    >
      <Container size="standard">
        <div className="bg-[#F6F6F4] border border-[#E7E7E7] rounded-sm p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Form Header */}
          <div className="max-w-[680px] mb-10 sm:mb-12">
            <SectionEyebrow theme="navy" className="mb-3">
              Direct Advisory Channel
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#171C56] font-normal leading-tight mb-4">
              Connect with the Starrbites NRI Advisory Desk
            </h2>

            <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              Complete the enquiry details below to receive verified project
              dossiers, schedule virtual walkthroughs, or arrange a personal
              consultation.
            </p>
          </div>

          {/* Success State View */}
          {status === "success" ? (
            <div className="bg-white border border-[#EDC455] p-8 sm:p-12 rounded-sm text-center max-w-[620px] mx-auto space-y-5 animate-in fade-in duration-500">
              <div className="w-14 h-14 rounded-full bg-[#EDC455]/20 text-[#171C56] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8 text-[#C88218]" />
              </div>

              <span className="block text-xs uppercase tracking-[0.2em] text-[#C88218] font-bold">
                Enquiry Successfully Registered
              </span>

              <h3 className="text-2xl font-serif text-[#171C56] font-normal">
                Thank You, {formData.fullName}
              </h3>

              <div className="inline-block bg-[#F6F6F4] px-4 py-1.5 rounded-sm border border-[#E7E7E7] text-xs font-mono text-[#171C56]">
                Reference ID: <span className="font-bold">{referenceId}</span>
              </div>

              <p className="text-sm text-[#555555] font-light leading-relaxed">
                {serverMessage}
              </p>

              <div className="pt-6 border-t border-[#E7E7E7] text-xs text-[#555555] space-y-2">
                <p>
                  Urgent consultation needed? You can also reach our Bengaluru desk directly:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-[#171C56] font-semibold">
                  <a href="tel:+919740806357" className="hover:text-[#C88218] transition-colors">
                    +91 97408 06357
                  </a>
                  <span>•</span>
                  <a href="tel:+8861197979" className="hover:text-[#C88218] transition-colors">
                    +91 88611 97979
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      fullName: "",
                      email: "",
                      countryCode: "+1",
                      phone: "",
                      countryOfResidence: "United States",
                      investmentInterest: "Tiiger Trail — Flagship Plotted Estate",
                      preferredContactMethod: "WhatsApp",
                      notes: "",
                      consent: true,
                      website_hp: "",
                    });
                  }}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Spam Honeypot Trap (Hidden from users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Leave this empty</label>
                <input
                  id="website_hp"
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Server Alert Message on Error */}
              {status === "error" && serverMessage && (
                <div
                  role="alert"
                  className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Submission Notice</span>
                    <span>{serverMessage}</span>
                  </div>
                </div>
              )}

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Full Name <span className="text-[#C88218]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: "" });
                    }}
                    placeholder="e.g. Anand Sharma"
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#171C56] ${
                      fieldErrors.fullName ? "border-red-500" : "border-[#E7E7E7]"
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <span className="block text-[11px] text-red-600 mt-1 font-medium">
                      {fieldErrors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Email Address <span className="text-[#C88218]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                    }}
                    placeholder="e.g. anand.sharma@example.com"
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#242424] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#171C56] ${
                      fieldErrors.email ? "border-red-500" : "border-[#E7E7E7]"
                    }`}
                  />
                  {fieldErrors.email && (
                    <span className="block text-[11px] text-red-600 mt-1 font-medium">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone with Country Code & Country of Residence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Telephone / WhatsApp <span className="text-[#C88218]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      aria-label="Country Calling Code"
                      className="w-[140px] px-3 py-3 bg-white border border-[#E7E7E7] text-xs text-[#242424] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#171C56]"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.country}
                        </option>
                      ))}
                    </select>

                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
                      }}
                      placeholder="e.g. 555-0199"
                      className={`flex-1 px-4 py-3 bg-white border text-sm text-[#242424] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#171C56] ${
                        fieldErrors.phone ? "border-red-500" : "border-[#E7E7E7]"
                      }`}
                    />
                  </div>
                  {fieldErrors.phone && (
                    <span className="block text-[11px] text-red-600 mt-1 font-medium">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="countryOfResidence"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Country of Residence <span className="text-[#C88218]">*</span>
                  </label>
                  <select
                    id="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E7E7E7] text-sm text-[#242424] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#171C56]"
                  >
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Investment Interest & Preferred Contact Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="investmentInterest"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Investment Interest <span className="text-[#C88218]">*</span>
                  </label>
                  <select
                    id="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={(e) => setFormData({ ...formData, investmentInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E7E7E7] text-sm text-[#242424] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#171C56]"
                  >
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferredContactMethod"
                    className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                  >
                    Preferred Contact Channel <span className="text-[#C88218]">*</span>
                  </label>
                  <select
                    id="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E7E7E7] text-sm text-[#242424] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#171C56]"
                  >
                    {contactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-wider text-[#171C56] font-semibold mb-2"
                >
                  Specific Questions or Preferences{" "}
                  <span className="text-xs text-[#555555] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your intended timeline, location priorities, or questions for our legal/advisory desk."
                  className="w-full px-4 py-3 bg-white border border-[#E7E7E7] text-sm text-[#242424] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#171C56] resize-y"
                />
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData({ ...formData, consent: e.target.checked });
                      if (fieldErrors.consent) setFieldErrors({ ...fieldErrors, consent: "" });
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-[#E7E7E7] text-[#171C56] focus:ring-[#171C56]"
                  />
                  <span className="text-xs text-[#555555] font-light leading-relaxed">
                    I consent to having Starrbites Developments contact me via my
                    preferred communication channel to provide project documentation and
                    coordinate my enquiry in accordance with the{" "}
                    <Link href="/privacy-policy/" className="underline hover:text-[#171C56]">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {fieldErrors.consent && (
                  <span className="block text-[11px] text-red-600 mt-1 font-medium">
                    {fieldErrors.consent}
                  </span>
                )}
              </div>

              {/* Submit Button & Assurance */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={status === "submitting"}
                  className="min-w-[200px] justify-center"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Routing Enquiry...
                    </span>
                  ) : (
                    "Submit NRI Enquiry"
                  )}
                </Button>

                <div className="flex items-center gap-2 text-xs text-[#555555] font-light">
                  <Shield className="w-4 h-4 text-[#C88218]" />
                  <span>Strict privacy. No unsolicited third-party sharing.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
