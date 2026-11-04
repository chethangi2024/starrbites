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
      await new Promise((resolve) => setTimeout(resolve, 850));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please contact our Bangalore office directly.");
    }
  };

  return (
    <section
      id="enquiry-section"
      className="py-24 sm:py-32 bg-[#F3F6FA] relative border-t border-[#E2E6EC]"
      aria-labelledby="enquiry-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionEyebrow theme="charcoal" className="mb-4">
                Corporate Enquiries
              </SectionEyebrow>
              <h2
                id="enquiry-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.16]"
              >
                Let&apos;s discuss what you&apos;re looking to build for the future.
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
                Whether you are exploring plots at Tiiger Trail, registering interest in Stay and
                Play, or discussing corporate and development partnerships, our Bengaluru advisory
                team is here to assist you.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-6 pt-4 border-t border-[#E2E6EC]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#0099FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#242424]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242424]">Headquarters Office</h4>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1 leading-relaxed">
                    No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bengaluru -
                    560094, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EDC455]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#242424]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242424]">Direct Telephone</h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm text-[#242424] font-medium">
                    <a href="tel:+919740806357" className="hover:text-[#007ACC] transition-colors">
                      +91 97408 06357
                    </a>
                    <a href="tel:+918861197979" className="hover:text-[#007ACC] transition-colors">
                      +91 88611 97979
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#0099FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#242424]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242424]">Official Email</h4>
                  <a
                    href="mailto:contact@starrbites.com"
                    className="text-xs sm:text-sm text-[#242424] font-medium hover:text-[#007ACC] transition-colors block mt-1"
                  >
                    contact@starrbites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#EDC455]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#242424]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#242424]">Advisory Availability</h4>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1">
                    9:00 AM – 7:00 PM IST • Monday through Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FDFBFF] border border-[#E2E6EC] p-8 sm:p-12 rounded-[2px] shadow-sm">
            {status === "success" ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm sm:text-base text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received by Starrbites. Our relationship manager will review
                  your requirements regarding{" "}
                  <span className="font-semibold text-[#242424]">{formData.interest}</span> and
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
                  <h3 className="text-2xl font-serif text-[#242424] font-semibold">
                    Request an Advisory Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1">
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                      Full Name <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sunil Sharma"
                      className="w-full px-4 py-3.5 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                      Phone Number <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                      Email Address <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3.5 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                      Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3.5 border border-[#C8D0DA] text-sm text-[#242424] bg-[#FDFBFF] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                    >
                      <option value="Tiiger Trail — Flagship Project">
                        Tiiger Trail — Flagship Plotted Development
                      </option>
                      <option value="Stay and Play — Upcoming Project Enquiry">
                        Stay and Play — Upcoming Project Enquiry
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-2">
                    Message or Specific Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, timeline, or preferred site visit dates..."
                    className="w-full px-4 py-3.5 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="section-consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-[#0099FF]"
                  />
                  <label htmlFor="section-consent" className="text-xs text-[#4A4A4A] leading-snug">
                    I consent to being contacted by Starrbites regarding my enquiry. We maintain
                    absolute confidentiality and never share contact details.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-10 py-4 justify-center"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Request...
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
