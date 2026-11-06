"use client";

import React, { useEffect, useRef } from "react";
import { FileCheck, Shield, BookOpen, Scale } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriDueDiligence() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardGridRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardGridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const verificationAreas = [
    {
      icon: FileCheck,
      title: "Title Scrutiny & Flow of Title",
      summary:
        "Verifying the uninterrupted historical chain of ownership across at least 30 years, confirming clear succession, registered sale deeds, and encumbrance certificates (EC).",
      keyCheck: "Nil encumbrance certificates & unbroken deed trace",
    },
    {
      icon: BookOpen,
      title: "Revenue Records & Mutation (RTC)",
      summary:
        "Ensuring the vendor or development entity is accurately reflected in official revenue mutation registers and state electronic khata/RTC systems.",
      keyCheck: "Pahani / RTC continuity & mutation entry certification",
    },
    {
      icon: Shield,
      title: "Zoning & Statutory Compliance",
      summary:
        "Reviewing regional master plans, agricultural or conversion permissions, local planning approvals, and layout sanction demarcations for statutory integrity.",
      keyCheck: "Conforming regional land usage & surveyed boundaries",
    },
    {
      icon: Scale,
      title: "FEMA & Regulatory Framework",
      summary:
        "Understanding Foreign Exchange Management Act guidelines regarding acquisition of immovable property in India by NRIs, OCIs, and foreign nationals.",
      keyCheck: "Adherence to RBI & FEMA banking repatriation channels",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="due-diligence"
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Buyer Due Diligence
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Transparency, Governance &amp;{" "}
            <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
              Independent Scrutiny
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
            Acquiring real estate across borders requires meticulous documentary
            verification. We strongly advise every overseas buyer to approach land
            acquisition with systematic legal and regulatory diligence.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          ref={cardGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {verificationAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#354B5D]/10 border border-[#354B5D]/20 flex items-center justify-center text-[#354B5D] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-serif font-normal text-[#292D30] mb-3">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55534F] font-light leading-relaxed mb-6">
                    {area.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD7CC]">
                  <span className="block text-[10px] uppercase tracking-wider text-[#55534F] font-semibold mb-0.5">
                    Essential Verification
                  </span>
                  <span className="text-xs text-[#292D30] font-medium">
                    {area.keyCheck}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Educational Legal Disclaimer Box */}
        <div className="p-6 sm:p-8 bg-[#FFFFFF] border-l-4 border-[#354B5D] border-y border-r border-[#DDD7CC] rounded-sm max-w-[880px] mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-sm bg-[#A98556]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-5 h-5 text-[#354B5D]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#292D30]">
                General Educational Disclosure
              </h4>
              <p className="text-xs sm:text-sm text-[#55534F] font-light leading-relaxed">
                Starrbites provides factual project documentation and coordination
                assistance to prospective buyers. The information presented on this
                website is for general educational purposes only and must not be
                construed as legal, tax, or investment advice. Overseas buyers are
                strongly advised to retain independent legal advocates and tax
                consultants licensed in India to verify statutory regulations prior to
                executing binding agreements.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
