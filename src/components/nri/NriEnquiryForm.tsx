"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Shield } from "lucide-react";
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
      errors.consent = "You must provide consent for our team to contact you regarding your enquiry.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website_hp) {
      // Honeypot hit: silently exit
      setStatus("success");
      setReferenceId("SB-NRI-" + Math.floor(100000 + Math.random() * 900000));
      return;
    }

    if (!validate()) {
      setStatus("error");
      setServerMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          project: `NRI Enquiry: ${formData.investmentInterest} (Resident: ${formData.countryOfResidence}, Channel: ${formData.preferredContactMethod})`,
          message: formData.notes || "NRI Advisory Consultation Request",
          sourcePage: "NRI Advisory Page (/nri/)",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setReferenceId(data.leadId || "SB-NRI-" + Math.floor(100000 + Math.random() * 900000));
        setServerMessage(
          "Thank you for contacting Starrbites. Our Bengaluru NRI advisory team will review your request and reach out via your preferred channel within 24 business hours."
        );
      } else {
        setStatus("error");
        setServerMessage(
          data.error || "We could not register your enquiry. Please verify your entries or contact us directly."
        );
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
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC] scroll-mt-24"
    >
      <Container size="standard">
        <div className="bg-[#F5F1E9] border border-[#DDD7CC] border-t-4 border-t-[#354B5D] rounded-sm p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Form Header */}
          <div className="max-w-[680px] mb-10 sm:mb-12">
            <SectionEyebrow theme="charcoal" className="mb-3">
              Direct Advisory Channel
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292D30] font-normal leading-tight mb-4">
              Connect with the Starrbites NRI Advisory Desk
            </h2>

            <p className="text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
              Complete the enquiry details below to receive verified project
              dossiers, schedule virtual walkthroughs, or arrange a personal
              consultation.
            </p>
          </div>

          {/* Success State View */}
          {status === "success" ? (
            <div className="bg-[#FFFFFF] border-2 border-[#354B5D] p-8 sm:p-12 rounded-sm text-center max-w-[620px] mx-auto space-y-5 animate-in fade-in duration-500">
              <div className="w-14 h-14 rounded-full bg-[#A98556]/20 text-[#354B5D] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8 text-[#354B5D]" />
              </div>

              <span className="inline-block px-2.5 py-0.5 bg-[#354B5D] text-xs uppercase tracking-[0.2em] text-[#FFFFFF] font-bold rounded-xs">
                Enquiry Successfully Registered
              </span>

              <h3 className="text-2xl font-serif text-[#292D30] font-normal">
                Thank You, {formData.fullName}
              </h3>

              <div className="inline-block bg-[#F5F1E9] px-4 py-1.5 rounded-sm border border-[#DDD7CC] text-xs font-mono text-[#292D30]">
                Reference ID: <span className="font-bold">{referenceId}</span>
              </div>

              <p className="text-sm text-[#55534F] font-light leading-relaxed">
                {serverMessage}
              </p>

              <div className="pt-6 border-t border-[#DDD7CC] text-xs text-[#55534F] space-y-2">
                <p>
                  Urgent consultation needed? You can also reach our Bengaluru desk directly:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-[#292D30] font-semibold">
                  <a href="tel:+919740806357" className="hover:text-[#A98556] transition-colors">
                    +91 97408 06357
                  </a>
                  <span>•</span>
                  <a href="tel:+918861197979" className="hover:text-[#A98556] transition-colors">
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
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Full Name <span className="text-[#B91C1C]">*</span>
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
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#292D30] rounded-sm transition-colors focus:outline-none focus:border-[#354B5D] ${
                      fieldErrors.fullName ? "border-red-500" : "border-[#D1CEC4]"
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
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Email Address <span className="text-[#B91C1C]">*</span>
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
                    placeholder="anand.sharma@example.com"
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#292D30] rounded-sm transition-colors focus:outline-none focus:border-[#354B5D] ${
                      fieldErrors.email ? "border-red-500" : "border-[#D1CEC4]"
                    }`}
                  />
                  {fieldErrors.email && (
                    <span className="block text-[11px] text-red-600 mt-1 font-medium">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Contact Number (with Country Code) & Country of Residence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Contact Telephone <span className="text-[#B91C1C]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-[140px] px-3 py-3 bg-[#FFFFFF] border border-[#D1CEC4] text-xs text-[#292D30] rounded-sm focus:outline-none focus:border-[#354B5D]"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.country}
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
                      placeholder="415 555 2671"
                      className={`flex-1 px-4 py-3 bg-[#FFFFFF] border text-sm text-[#292D30] rounded-sm transition-colors focus:outline-none focus:border-[#354B5D] ${
                        fieldErrors.phone ? "border-red-500" : "border-[#D1CEC4]"
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
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Country of Residence <span className="text-[#B91C1C]">*</span>
                  </label>
                  <select
                    id="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1CEC4] text-sm text-[#292D30] rounded-sm focus:outline-none focus:border-[#354B5D]"
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
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Investment Interest <span className="text-[#B91C1C]">*</span>
                  </label>
                  <select
                    id="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={(e) => setFormData({ ...formData, investmentInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1CEC4] text-sm text-[#292D30] rounded-sm focus:outline-none focus:border-[#354B5D]"
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
                    className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                  >
                    Preferred Contact Channel <span className="text-[#B91C1C]">*</span>
                  </label>
                  <select
                    id="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1CEC4] text-sm text-[#292D30] rounded-sm focus:outline-none focus:border-[#354B5D]"
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
                  className="block text-xs uppercase tracking-wider text-[#292D30] font-semibold mb-2"
                >
                  Specific Questions or Preferences (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your preferred plot size, intended use (personal retreat, long-term asset), or suitable time window for a remote video consultation..."
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1CEC4] text-sm text-[#292D30] rounded-sm focus:outline-none focus:border-[#354B5D] resize-y"
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
                    className="w-4 h-4 mt-0.5 rounded border-[#D1CEC4] accent-[#354B5D] text-[#354B5D] focus:ring-[#354B5D]"
                  />
                  <span className="text-xs text-[#55534F] font-light leading-relaxed">
                    I consent to having Starrbites Developments contact me via my
                    preferred communication channel to provide project documentation and
                    coordinate my enquiry in accordance with the{" "}
                    <Link href="/privacy-policy/" className="underline text-[#292D30] font-medium hover:text-[#A98556]">
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
                  className="w-full sm:w-auto min-w-[200px] justify-center"
                >
                  {status === "submitting" ? (
                    <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap">
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>Routing Enquiry...</span>
                    </span>
                  ) : (
                    "Submit NRI Enquiry"
                  )}
                </Button>

                <div className="flex items-center gap-2 text-xs text-[#55534F] font-light">
                  <div className="w-5 h-5 rounded-full bg-[#A98556]/20 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-[#354B5D]" />
                  </div>
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
