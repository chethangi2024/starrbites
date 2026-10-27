"use client";

import React from "react";
import Image from "next/image";
import { Globe, Video, FileCheck, UserCheck, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface NriSectionProps {
  onOpenEnquiry?: () => void;
}

export function NriSection({ onOpenEnquiry }: NriSectionProps) {
  const pillars = [
    {
      icon: Video,
      title: "Virtual Site Inspections",
      text: "High-definition video walkthroughs and live interactive coordinates for remote evaluation.",
    },
    {
      icon: FileCheck,
      title: "Mutation & Title Verification",
      text: "Complete lineage documentation, encumbrance certificates, and government mutation verification.",
    },
    {
      icon: Globe,
      title: "FEMA-Compliant Guidance",
      text: "Responsible regulatory guidance on bank routing (NRE/NRO) and compliant property acquisition.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Relationship Manager",
      text: "Single point of contact across US, UK, Middle East, and APAC time zones for total clarity.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F6F4] relative border-t border-b border-[#E7E7E7]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Badge (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E7E7E7] rounded-[2px] shadow-lg">
              <Image
                src="/images/stock/editorial/editorial-leadership-space.jpg"
                alt="Executive consultation space for NRI advisory"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171C56]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-sm border-l-2 border-[#EDC455]">
                <p className="text-xs font-semibold text-[#171C56] uppercase tracking-wider">
                  Global Advisory Desk
                </p>
                <p className="text-xs text-[#555555] mt-1">
                  Serving Non-Resident Indians across 14+ countries with certified transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Services (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <SectionEyebrow theme="navy">Global Indian Investors</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.16]">
              A clearer way to explore land opportunities in India,{" "}
              <span className="italic font-normal text-[#8B6C20]">wherever you are.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-[620px]">
              Purchasing land from abroad requires complete trust, transparent title deeds, and
              frictionless legal coordination. Starrbites provides a structured, remote-first
              experience built around verifiable facts.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E7E7E7] rounded-[2px] space-y-2 hover:border-[#EDC455] transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#C88218]" />
                    <h4 className="text-sm font-semibold text-[#171C56]">{p.title}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed font-light">{p.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="md" href="/nri/">
                Explore NRI Advisory Services
              </Button>
              {onOpenEnquiry ? (
                <Button variant="secondary" size="md" onClick={onOpenEnquiry}>
                  Book Virtual Consultation
                </Button>
              ) : (
                <Button variant="secondary" size="md" href="/contact-us/">
                  Book Virtual Consultation
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
