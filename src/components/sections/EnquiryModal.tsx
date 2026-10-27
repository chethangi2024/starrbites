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
    topic: defaultTopic,
    message: "",
    consent: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Phone).");
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage("Please accept the consent checkbox to proceed.");
      return;
    }

    try {
      // Simulate real verification & submission delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit at this moment. Please contact us directly by telephone.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white border border-[#E7E7E7] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-[2px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#555555] hover:text-[#171C56] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171C56]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              id="enquiry-modal-title"
              className="text-2xl font-serif text-[#171C56] font-semibold"
            >
              Conversation Request Received
            </h3>
            <p className="text-sm text-[#555555] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-[#242424]">{formData.name}</span>. Our
              advisory team will review your inquiry regarding{" "}
              <span className="font-medium text-[#242424]">{formData.topic}</span> and connect with
              you shortly within 24 business hours.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="primary" onClick={onClose} className="w-full justify-center">
                Close Window
              </Button>
              <a
                href="tel:+919740806357"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#171C56] py-2 hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-[#EDC455]" />
                Call Directly: +91 97408 06357
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#8B6C20] inline-block mb-1">
                Direct Consultation
              </span>
              <h3
                id="enquiry-modal-title"
                className="text-2xl sm:text-3xl font-serif text-[#171C56] font-semibold"
              >
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-1.5">
                Discuss land development, request a site tour of Tiiger Trail, or schedule an NRI
                consultation.
              </p>
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 rounded-[2px]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sunil Sharma"
                  className="w-full px-4 py-3 border border-[#E7E7E7] text-sm text-[#242424] focus:outline-none focus:border-[#171C56] transition-colors rounded-[2px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 border border-[#E7E7E7] text-sm text-[#242424] focus:outline-none focus:border-[#171C56] transition-colors rounded-[2px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-[#E7E7E7] text-sm text-[#242424] focus:outline-none focus:border-[#171C56] transition-colors rounded-[2px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E7E7E7] text-sm text-[#242424] bg-white focus:outline-none focus:border-[#171C56] transition-colors rounded-[2px]"
                >
                  <option value="Tiiger Trail — Flagship Project">
                    Tiiger Trail — Flagship Project (Lepakshi Corridor)
                  </option>
                  <option value="Land Investment Consultation">
                    Land Investment & Due Diligence Consultation
                  </option>
                  <option value="NRI Advisory & Remote Purchase">
                    NRI Advisory & Remote Purchase Support
                  </option>
                  <option value="Corporate Partnership">Corporate Partnership Enquiry</option>
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
                  className="w-full px-4 py-3 border border-[#E7E7E7] text-sm text-[#242424] focus:outline-none focus:border-[#171C56] transition-colors rounded-[2px]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#171C56]"
                />
                <label htmlFor="modal-consent" className="text-xs text-[#555555] leading-snug">
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
