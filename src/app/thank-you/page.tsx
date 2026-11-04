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

      <main className="flex-1 bg-[#F3F6FA] pt-36 pb-24">
        <Container size="wide">
          <div className="max-w-3xl mx-auto">
            {/* Confirmation Card */}
            <div className="bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] p-8 sm:p-14 md:p-16 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#EDC455] text-[#242424] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9 text-[#242424]" />
              </div>

              <SectionEyebrow theme="charcoal" className="justify-center mb-3">
                ENQUIRY CATALOGUED
              </SectionEyebrow>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.2]">
                Thank You for Contacting Starrbites
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-xl mx-auto">
                Your communication has been received by our client services team at our Dollars Colony
                headquarters in Bengaluru.
              </p>

              {/* Next Steps Box */}
              <div className="mt-10 p-6 bg-[#F3F6FA] border border-[#E2E6EC] rounded-[2px] text-left">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#242424] mb-4">
                  What to Expect Next
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-[#4A4A4A]">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0099FF] text-[#242424] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong className="text-[#242424]">Requirement Triage:</strong> Your details are assigned to the relevant
                      land acquisition, legal due diligence, or client relationship specialist.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0099FF] text-[#242424] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong className="text-[#242424]">Dossier Preparation:</strong> We prepare customized project brochures, site
                      layouts, or title documentation relevant to your inquiry.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0099FF] text-[#242424] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p className="font-light leading-relaxed">
                      <strong className="text-[#242424]">Direct Connection:</strong> A representative reaches out through your
                      indicated contact channel (telephone, WhatsApp, or email) to address your questions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgent Direct Channel */}
              <div className="mt-8 pt-6 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A4A4A]">
                <span>Need urgent assistance or an immediate site briefing?</span>
                <a
                  href="tel:+919740806357"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#242424] hover:underline transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#242424]" />
                  <span>Call +91 97408 06357</span>
                </a>
              </div>
            </div>

            {/* Quick Exploration Grid */}
            <div className="mt-12">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium">
                  While you wait, explore the website
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Link
                  href="/"
                  className="bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] p-5 hover:border-[#0099FF] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-sm bg-[#0099FF]/15 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-[#242424]" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A4A4A] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#242424] group-hover:underline transition-colors">
                    Corporate Homepage
                  </h3>
                  <p className="text-xs text-[#4A4A4A] mt-1 font-light">
                    Learn about Starrbites’ land development ethos.
                  </p>
                </Link>

                <Link
                  href="/tiiger-trail/"
                  className="bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] p-5 hover:border-[#0099FF] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-sm bg-[#EDC455]/30 flex items-center justify-center">
                      <Compass className="w-4 h-4 text-[#242424]" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A4A4A] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#242424] group-hover:underline transition-colors">
                    Tiiger Trail Flagship
                  </h3>
                  <p className="text-xs text-[#4A4A4A] mt-1 font-light">
                    Explore farm-resort plotted living off NH-44.
                  </p>
                </Link>

                <Link
                  href="/blog/"
                  className="bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] p-5 hover:border-[#0099FF] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-sm bg-[#0099FF]/15 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-[#242424]" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A4A4A] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-[#242424] group-hover:underline transition-colors">
                    The Starrbites Journal
                  </h3>
                  <p className="text-xs text-[#4A4A4A] mt-1 font-light">
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
