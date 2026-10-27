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
    <section className="py-20 md:py-28 bg-[#171C56] text-white relative overflow-hidden" aria-labelledby="journal-cta-heading">
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, #EDC455 0%, transparent 50%)",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionEyebrow theme="gold" className="justify-center mb-4 text-[#EDC455]">
            LAND ADVISORY & ACQUISITIONS
          </SectionEyebrow>

          <h2
            id="journal-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-semibold tracking-tight leading-[1.18]"
          >
            <span className="text-white">Looking to Acquire or Verify</span> <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#EDC455]">Clear-Title</span> Land in North Bangalore?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
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
              variant="inverted"
              href="/tiiger-trail/"
              withArrow
              className="w-full sm:w-auto"
            >
              Discover Tiiger Trail
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-xs text-[#F6F6F4]/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EDC455]" />
              <span>30-Year Encumbrance Search</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#EDC455]" />
              <span>Physical Podi & Boundary Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EDC455]" />
              <span>Complete Mutation Guarantee</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
