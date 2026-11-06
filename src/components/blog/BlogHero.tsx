"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { BookOpen, ShieldCheck, MapPin, Feather } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#354B5D] text-[#FFFFFF] overflow-hidden border-b border-[#FFFFFF]/15">
      {/* Background Accent Gradient */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #FFFFFF 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <SectionEyebrow theme="gold" className="mb-4">
            Starrbites Journal &amp; Research
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-[#FFFFFF]">
            <span>Perspectives on Land,</span> <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#A98556]">Place</span> and Possibility.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#FFFFFF]/85 font-normal leading-relaxed max-w-2xl">
            Ten comprehensive monographs on legal due diligence, Karnataka land mutation, regional
            corridors, and the architectural principles behind enduring land stewardship.
          </p>

          {/* Quick Stats Pill Row */}
          <div className="mt-12 pt-8 border-t border-[#FFFFFF]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">10 Dissertations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">Title &amp; Mutation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">North Bangalore &amp; STRR</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <Feather className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">By Chethan N</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
