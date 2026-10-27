"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { BookOpen, ShieldCheck, MapPin, Feather } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#171C56] text-white overflow-hidden">
      {/* Background Subtle Gradient & Grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #EDC455 0%, transparent 40%)",
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <SectionEyebrow theme="gold" className="mb-5 text-[#EDC455]">
            THE STARRBITES JOURNAL
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-white">
            <span className="text-white">Perspectives on Land,</span> <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#EDC455]">Place</span> and Possibility.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
            A curated compendium of legal due diligence, title verification doctrines,
            managed farmland stewardship, and regional infrastructure intelligence for discerning landholders.
          </p>

          {/* Editorial Markers */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">10 Dissertations</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">Title & Mutation</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">North Bangalore & STRR</span>
            </div>
            <div className="flex items-center gap-3">
              <Feather className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">By Chethan N</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
