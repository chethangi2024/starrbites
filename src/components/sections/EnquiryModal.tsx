"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, Phone } from "lucide-react";
import { Button } from "../ui/Button";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  defaultTopic = "Tiiger Trail — Flagship Project",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: null as string | null,
    message: "",
    consent: true,
    website_hp: "",
  });

  const activeTopic = formData.topic ?? defaultTopic;

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Phone).");
      return;
    }

    const cleanDigits = formData.phone.replace(/\D/g, "");
    if (cleanDigits.length < 6) {
      setStatus("error");
      setErrorMessage("Please provide a valid telephone number (minimum 6 digits).");
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage("Please accept the consent checkbox to proceed.");
      return;
    }

    const payload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      enquiryType: activeTopic,
      message:
        formData.message.trim() ||
        `Consultation request regarding: ${activeTopic}`,
      consent: formData.consent,
      website_hp: formData.website_hp,
    };

    try {
      const res = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setReferenceId(data.referenceId || "");
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Unable to submit at this moment. Please contact us directly by telephone."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit at this moment. Please contact us directly by telephone.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#242424]/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#FDFBFF] border-t-4 border-[#0099FF] border-x border-b border-[#E2E6EC] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-[2px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#4A4A4A] hover:text-[#242424] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              id="enquiry-modal-title"
              className="text-2xl font-serif text-[#242424] font-semibold"
            >
              Conversation Request Received
            </h3>
            <p className="text-sm text-[#4A4A4A] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-[#242424]">{formData.name}</span>. Our
              advisory team will review your inquiry regarding{" "}
              <span className="font-medium text-[#242424]">{activeTopic}</span> and connect with
              you shortly within 24 business hours.
            </p>
            {referenceId && (
              <div className="inline-block bg-[#F3F6FA] border border-[#E2E6EC] px-4 py-2 rounded-[2px] text-xs text-[#242424]">
                Reference ID: <span className="font-mono font-semibold">{referenceId}</span>
              </div>
            )}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="primary" onClick={onClose} className="w-full justify-center">
                Close Window
              </Button>
              <a
                href="tel:+919740806357"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#242424] py-2 hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-[#0099FF]" />
                Call Directly: +91 97408 06357
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] inline-block mb-1.5">
                Direct Consultation
              </span>
              <h3
                id="enquiry-modal-title"
                className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold"
              >
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1.5">
                Discuss Tiiger Trail, register interest in Stay and Play, or connect with our team
                on corporate and partnership enquiries.
              </p>
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 rounded-[2px]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-4">
              {/* Honeypot Anti-Spam (Hidden) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="modal_website_hp">Leave this empty</label>
                <input
                  type="text"
                  id="modal_website_hp"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Full Name <span className="text-[#B3261E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sunil Sharma"
                  className="w-full px-4 py-3 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                    Email Address <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                    Phone Number <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={activeTopic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 border border-[#C8D0DA] text-sm text-[#242424] bg-[#FDFBFF] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                >
                  <option value="Tiiger Trail — Flagship Project">
                    Tiiger Trail — Flagship Plotted Development (Lepakshi Corridor)
                  </option>
                  <option value="Stay and Play — Upcoming Project Enquiry">
                    Stay and Play — Upcoming Project Enquiry
                  </option>
                  <option value="General Corporate Consultation">
                    General Corporate &amp; Portfolio Consultation
                  </option>
                  <option value="Strategic & Land Development Partnerships">
                    Strategic &amp; Land Development Partnerships
                  </option>
                  <option value="NRI Investment & Remote Due Diligence">
                    NRI Advisory &amp; Remote Due Diligence
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Brief Note or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific requirements or preferred site visit dates..."
                  className="w-full px-4 py-3 bg-[#FDFBFF] border border-[#C8D0DA] text-sm text-[#242424] focus:outline-none focus:border-[#0099FF] transition-colors rounded-[2px]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#0099FF]"
                />
                <label htmlFor="modal-consent" className="text-xs text-[#4A4A4A] leading-snug">
                  I consent to being contacted by Starrbites regarding my enquiry. We never share
                  your contact details.
                </label>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={status === "submitting"}
              className="w-full justify-center py-3.5 mt-2"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Request...
                </span>
              ) : (
                "Submit Request"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
