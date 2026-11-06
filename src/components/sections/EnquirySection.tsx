"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Tiiger Trail — Flagship Project",
    message: "",
    consent: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields (Name, Email, and Phone).");
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage("Please accept the communication consent to proceed.");
      return;
    }

    try {
      const response = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.interest,
          message: formData.message,
          sourcePage: "Homepage Enquiry Section",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please contact our Bangalore office directly.");
    }
  };

  return (
    <section
      id="enquiry-section"
      className="py-24 sm:py-32 bg-[#F5F1E9] relative border-t border-[#DDD7CC]"
      aria-labelledby="enquiry-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionEyebrow theme="slate" className="mb-4">
                Corporate Enquiries
              </SectionEyebrow>
              <h2
                id="enquiry-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292D30] font-semibold tracking-tight leading-[1.16]"
              >
                Let&apos;s discuss what you&apos;re looking to build for the future.
              </h2>
              <p className="text-base sm:text-lg text-[#55534F] font-light mt-4 leading-relaxed">
                Whether you are exploring plots at Tiiger Trail, inquiring about future developments,
                or discussing strategic partnerships, our Bengaluru advisory team is here to assist you.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-6 pt-4 border-t border-[#DDD7CC]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EAE5DA] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#354B5D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292D30]">Headquarters Office</h4>
                  <p className="text-xs sm:text-sm text-[#55534F] mt-1 leading-relaxed">
                    No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bengaluru -
                    560094, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EAE5DA] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#354B5D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292D30]">Direct Telephone</h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm text-[#292D30] font-medium">
                    <a href="tel:+919740806357" className="hover:text-[#526B80] transition-colors">
                      +91 97408 06357
                    </a>
                    <a href="tel:+918861197979" className="hover:text-[#526B80] transition-colors">
                      +91 88611 97979
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EAE5DA] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#354B5D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292D30]">Official Email</h4>
                  <a
                    href="mailto:contact@starrbites.com"
                    className="text-xs sm:text-sm text-[#292D30] font-medium hover:text-[#526B80] transition-colors block mt-1"
                  >
                    contact@starrbites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EAE5DA] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#354B5D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292D30]">Advisory Availability</h4>
                  <p className="text-xs sm:text-sm text-[#55534F] mt-1">
                    9:00 AM – 7:00 PM IST • Monday through Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DDD7CC] p-8 sm:p-12 rounded-[2px] shadow-sm">
            {status === "success" ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm sm:text-base text-[#55534F] max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received by Starrbites. Our relationship manager will review
                  your requirements regarding{" "}
                  <span className="font-semibold text-[#292D30]">{formData.interest}</span> and
                  contact you directly within 24 business hours.
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        interest: "Tiiger Trail — Flagship Project",
                        message: "",
                        consent: true,
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-[#292D30] font-semibold">
                    Request an Advisory Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55534F] mt-1">
                    Complete this brief request and an advisor will arrange your consultation or site
                    tour.
                  </p>
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2 rounded-[2px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2">
                      Full Name <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sunil Sharma"
                      className="w-full px-4 py-3.5 bg-[#F5F1E9] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2">
                      Phone Number <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 bg-[#F5F1E9] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2">
                      Email Address <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3.5 bg-[#F5F1E9] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2">
                      Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3.5 border border-[#DDD7CC] text-sm text-[#292D30] bg-[#F5F1E9] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                    >
                      <option value="Tiiger Trail — Flagship Project">
                        Tiiger Trail — Flagship Plotted Development
                      </option>
                      <option value="General Corporate & Portfolio Enquiry">
                        General Corporate &amp; Portfolio Matters
                      </option>
                      <option value="Strategic & Land Development Partnerships">
                        Strategic &amp; Land Development Partnerships
                      </option>
                      <option value="NRI Advisory & Remote Purchase">
                        NRI Advisory &amp; Documentation Guidance
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-2">
                    Message or Specific Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, timeline, or preferred site visit dates..."
                    className="w-full px-4 py-3.5 bg-[#F5F1E9] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="section-consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-[#354B5D]"
                  />
                  <label htmlFor="section-consent" className="text-xs text-[#55534F] leading-snug">
                    I consent to being contacted by Starrbites regarding my enquiry. We maintain
                    absolute confidentiality and never share contact details.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto justify-center"
                >
                  {status === "submitting" ? (
                    <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap">
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>Transmitting Request...</span>
                    </span>
                  ) : (
                    "Submit Consultation Request"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
