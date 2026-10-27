"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ContactHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#171C56] text-white overflow-hidden">
      {/* Background Subtle Gradient & Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 85% 20%, #EDC455 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <SectionEyebrow theme="gold" className="mb-5 text-[#EDC455]">
            LET&apos;S START A CONVERSATION
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-white">
            Every Meaningful Journey <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#EDC455]">Starts With</span> a Conversation.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
            Whether you&apos;re exploring a land destination, seeking project information, or
            looking to connect with Starrbites, our team is here to help you take the next step.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#EDC455] text-[#171C56] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-300 hover:bg-white cursor-pointer shadow-md"
            >
              <span>Send an Enquiry</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://tiigertrail.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/25 text-white text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-300 hover:border-[#EDC455] hover:text-[#EDC455]"
            >
              <span>Explore Tiiger Trail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Editorial Markers */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">Dollars Colony Headquarters, Bangalore</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">Direct Title & Due Diligence Advisory</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#EDC455] shrink-0" />
              <span className="text-white/90 font-light">Advisory Desk: 9:00 AM – 7:00 PM (7 Days)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
