"use client";

import React from "react";
import { ArrowDown, Compass, ShieldCheck, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";

export function ContactHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#354B5D] text-[#FFFFFF] overflow-hidden border-b border-[#FFFFFF]/15">
      {/* Background Subtle Gradient & Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 85% 20%, #FFFFFF 0%, transparent 45%)",
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
          <SectionEyebrow theme="gold" className="mb-5">
            LET&apos;S START A CONVERSATION
          </SectionEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.12] text-[#FFFFFF]">
            Every Meaningful Journey <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#A98556]">Starts With</span> a Conversation.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#FFFFFF]/85 font-light leading-relaxed max-w-2xl">
            Whether you&apos;re exploring a land destination, seeking project information, or
            looking to connect with Starrbites, our team is here to help you take the next step.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={scrollToForm}
            >
              <span>Send an Enquiry</span>
              <ArrowDown className="w-4 h-4 shrink-0" />
            </Button>

            <Button
              variant="inverted"
              size="lg"
              href="https://tiigertrail.com/"
              isExternal
              withArrow
            >
              Explore Tiiger Trail
            </Button>
          </div>

          {/* Editorial Markers */}
          <div className="mt-14 pt-8 border-t border-[#FFFFFF]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">Dollars Colony Headquarters, Bangalore</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">Direct Title &amp; Due Diligence Advisory</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#A98556]" />
              </div>
              <span className="text-[#FFFFFF] font-medium">Advisory Desk: 9:00 AM – 7:00 PM (7 Days)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
