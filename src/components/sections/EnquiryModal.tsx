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

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Unable to transmit your enquiry. Please verify your details or call our office."
        );
        return;
      }

      setStatus("success");
      setReferenceId(data.referenceId || "");
    } catch {
      setStatus("error");
      setErrorMessage("Network connection error. Please try again or call our office directly.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292D30]/75 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#F5F1E9] border-t-4 border-[#526B80] border-x border-b border-[#DDD7CC] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-[3px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#77736C] hover:text-[#292D30] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B80] rounded-[2px]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 mb-2 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              id="enquiry-modal-title"
              className="text-2xl font-serif text-[#292D30] font-semibold"
            >
              Conversation Request Received
            </h3>
            <p className="text-sm text-[#55534F] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-[#292D30]">{formData.name}</span>. Our
              advisory team will review your inquiry regarding{" "}
              <span className="font-medium text-[#292D30]">{activeTopic}</span> and connect with
              you shortly within 24 business hours.
            </p>
            {referenceId && (
              <div className="inline-block bg-[#EAE5DA] border border-[#DDD7CC] px-4 py-2 rounded-[2px] text-xs text-[#292D30]">
                Reference ID: <span className="font-mono font-semibold text-[#354B5D]">{referenceId}</span>
              </div>
            )}
            <div className="pt-4 flex flex-col gap-2.5">
              <Button variant="primary" onClick={onClose} className="w-full justify-center">
                Close Window
              </Button>
              <a
                href="tel:+919740806357"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap text-xs font-semibold text-[#354B5D] py-2 hover:text-[#526B80] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A98556] shrink-0" />
                <span className="whitespace-nowrap">Call Directly: +91 97408 06357</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase bg-[#EAE5DA] text-[#354B5D] px-2.5 py-1 rounded-[2px] inline-block mb-2 font-mono">
                Direct Consultation
              </span>
              <h3
                id="enquiry-modal-title"
                className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold"
              >
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-[#55534F] mt-1.5 leading-relaxed">
                Connect with our Bengaluru advisory desk regarding Tiiger Trail or corporate
                partnership opportunities.
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-1.5">
                  Full Name <span className="text-[#B3261E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sunil Sharma"
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-1.5">
                    Email Address <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-1.5">
                    Phone Number <span className="text-[#B3261E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={activeTopic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2.5 border border-[#DDD7CC] text-sm text-[#292D30] bg-[#FFFFFF] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                >
                  <option value="Tiiger Trail — Flagship Project">
                    Tiiger Trail — Flagship Plotted Development (Lepakshi Corridor)
                  </option>
                  <option value="General Corporate Consultation">
                    General Corporate Advisory
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292D30] mb-1.5">
                  Brief Note or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific requirements or preferred site visit dates..."
                  className="w-full px-4 py-2.5 bg-[#FFFFFF] border border-[#DDD7CC] text-sm text-[#292D30] focus:outline-none focus:border-[#526B80] transition-colors rounded-[2px]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#354B5D]"
                />
                <label htmlFor="modal-consent" className="text-xs text-[#55534F] leading-snug">
                  I consent to being contacted by Starrbites regarding my enquiry. We maintain
                  absolute confidentiality and never share your details.
                </label>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === "submitting"}
              className="w-full justify-center mt-2"
            >
              {status === "submitting" ? (
                <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap">
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                  <span>Transmitting Request...</span>
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
