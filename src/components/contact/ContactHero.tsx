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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#0099FF] text-[#242424] overflow-hidden border-b border-[#242424]/15">
      {/* Background Subtle Gradient & Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle at 85% 20%, #FDFBFF 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#242424 1px, transparent 1px), linear-gradient(90deg, #242424 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          <SectionEyebrow theme="charcoal" className="mb-5">
            LET&apos;S START A CONVERSATION
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-[#242424]">
            Every Meaningful Journey <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">Starts With</span> a Conversation.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#242424] font-normal leading-relaxed max-w-2xl">
            Whether you&apos;re exploring a land destination, seeking project information, or
            looking to connect with Starrbites, our team is here to help you take the next step.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#EDC455] text-[#242424] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-300 hover:bg-[#E0B33B] cursor-pointer shadow-md"
            >
              <span>Send an Enquiry</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://tiigertrail.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FDFBFF] border border-[#242424] text-[#242424] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-300 hover:bg-[#242424] hover:text-[#FDFBFF]"
            >
              <span>Explore Tiiger Trail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Editorial Markers */}
          <div className="mt-14 pt-8 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">Dollars Colony Headquarters, Bangalore</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">Direct Title & Due Diligence Advisory</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#242424]" />
              </div>
              <span className="text-[#242424] font-medium">Advisory Desk: 9:00 AM – 7:00 PM (7 Days)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
