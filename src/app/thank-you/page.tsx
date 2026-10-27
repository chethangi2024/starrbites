"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowUpRight, Phone, Compass, BookOpen, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function ThankYouPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-1 bg-[#F6F6F4] pt-36 pb-24">
        <Container size="wide">
          <div className="max-w-3xl mx-auto">
            {/* Confirmation Card */}
            <div className="bg-white border border-[#E7E7E7] rounded-[2px] p-8 sm:p-14 md:p-16 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#171C56]/5 text-[#171C56] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9 text-[#EDC455]" />
              </div>

              <SectionEyebrow theme="navy" className="justify-center mb-3">
                ENQUIRY CATALOGUED
              </SectionEyebrow>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.2]">
                Thank You for Contacting Starrbites
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-xl mx-auto">
                Your communication has been received by our client services team at our Dollars Colony
                headquarters in Bengaluru.
              </p>

              {/* Next Steps Box */}
              <div className="mt-10 p-6 bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] text-left">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#171C56] mb-4">
                  What to Expect Next
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-[#4A4A4A]">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#171C56] text-[#EDC455] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong>Requirement Triage:</strong> Your details are assigned to the relevant
                      land acquisition, legal due diligence, or client relationship specialist.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#171C56] text-[#EDC455] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong>Dossier Preparation:</strong> We prepare customized project brochures, site
                      layouts, or title documentation relevant to your inquiry.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#171C56] text-[#EDC455] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong>Direct Connection:</strong> A representative reaches out through your
                      indicated contact channel (telephone, WhatsApp, or email) to address your questions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgent Direct Channel */}
              <div className="mt-8 pt-6 border-t border-[#F0F0EF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555]">
                <span>Need urgent assistance or an immediate site briefing?</span>
                <a
                  href="tel:+919740806357"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#171C56] hover:text-[#8B6C20] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EDC455]" />
                  <span>Call +91 97408 06357</span>
                </a>
              </div>
            </div>

            {/* Quick Exploration Grid */}
            <div className="mt-12">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-[#555555] font-medium">
                  While you wait, explore the website
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Link
                  href="/"
                  className="bg-white border border-[#E7E7E7] rounded-[2px] p-5 hover:border-[#EDC455] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Building2 className="w-4 h-4 text-[#EDC455]" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#555555] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#171C56] group-hover:text-[#8B6C20] transition-colors">
                    Corporate Homepage
                  </h3>
                  <p className="text-xs text-[#555555] mt-1 font-light">
                    Learn about Starrbites’ land development ethos.
                  </p>
                </Link>

                <Link
                  href="/tiiger-trail/"
                  className="bg-white border border-[#E7E7E7] rounded-[2px] p-5 hover:border-[#EDC455] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Compass className="w-4 h-4 text-[#EDC455]" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#555555] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#171C56] group-hover:text-[#8B6C20] transition-colors">
                    Tiiger Trail Flagship
                  </h3>
                  <p className="text-xs text-[#555555] mt-1 font-light">
                    Explore farm-resort plotted living off NH-44.
                  </p>
                </Link>

                <Link
                  href="/blog/"
                  className="bg-white border border-[#E7E7E7] rounded-[2px] p-5 hover:border-[#EDC455] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-4 h-4 text-[#EDC455]" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#555555] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#171C56] group-hover:text-[#8B6C20] transition-colors">
                    The Starrbites Journal
                  </h3>
                  <p className="text-xs text-[#555555] mt-1 font-light">
                    Read 10 dissertations on land titles and mutation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultTopic="Follow-up Consultation"
      />
    </>
  );
}
