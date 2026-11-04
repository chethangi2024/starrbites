"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { BookOpen, ShieldCheck, MapPin, Feather } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#0099FF] text-[#242424] overflow-hidden border-b border-[#242424]/15">
      {/* Background Subtle Gradient & Grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #FDFBFF 0%, transparent 45%)",
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "linear-gradient(#242424 1px, transparent 1px), linear-gradient(90deg, #242424 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <SectionEyebrow theme="charcoal" className="mb-5">
            THE STARRBITES JOURNAL
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-[#242424]">
            <span className="text-[#242424]">Perspectives on Land,</span> <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">Place</span> and Possibility.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#242424] font-normal leading-relaxed max-w-2xl">
            A curated compendium of legal due diligence, title verification doctrines,
            managed farmland stewardship, and regional infrastructure intelligence for discerning landholders.
          </p>

          {/* Editorial Markers */}
          <div className="mt-12 pt-8 border-t border-[#242424]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">10 Dissertations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">Title & Mutation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">North Bangalore & STRR</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <Feather className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">By Chethan N</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
