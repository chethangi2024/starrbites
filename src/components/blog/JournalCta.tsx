"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Compass } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface JournalCtaProps {
  onOpenEnquiry?: (topic?: string) => void;
}

export function JournalCta({ onOpenEnquiry }: JournalCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-[#0099FF] text-[#242424] relative overflow-hidden" aria-labelledby="journal-cta-heading">
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, #FDFBFF 0%, transparent 50%)",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionEyebrow theme="charcoal" className="justify-center mb-4">
            LAND ADVISORY & ACQUISITIONS
          </SectionEyebrow>

          <h2
            id="journal-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.18]"
          >
            <span className="text-[#242424]">Looking to Acquire or Verify</span> <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">Clear-Title</span> Land in North Bangalore?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#242424] font-normal leading-relaxed max-w-2xl mx-auto">
            Starrbites delivers institutional-grade due diligence, 100% verified mutation records,
            and managed countryside estates along Bangalore’s highest-growth infrastructure belts.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              onClick={() => onOpenEnquiry && onOpenEnquiry("Editorial Journal Advisory Enquiry")}
              className="w-full sm:w-auto"
            >
              Request Advisory Consultation
            </Button>
            <Button
              variant="secondary"
              href="/tiiger-trail/"
              withArrow
              className="w-full sm:w-auto"
            >
              Discover Tiiger Trail
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#242424]/20 flex flex-wrap justify-center items-center gap-8 text-xs text-[#242424] font-medium">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-[#EDC455] flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <span>30-Year Encumbrance Search</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-[#EDC455] flex items-center justify-center">
                <Compass className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <span>Physical Podi & Boundary Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-[#EDC455] flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <span>Complete Mutation Guarantee</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
