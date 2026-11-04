"use client";

import React, { useEffect, useRef } from "react";
import { Scale, FileSearch, Landmark, AlertCircle } from "lucide-react";
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
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const verificationAreas = [
    {
      icon: Scale,
      title: "Title & Parent Deed Lineage",
      summary:
        "We recommend having independent legal advocates examine multi-decade parent deed chains, mutation history, and encumbrance certificates (Form 15 & 16) to establish uninterrupted ownership validity.",
      keyCheck: "Minimum 30-year title flow verification",
    },
    {
      icon: FileSearch,
      title: "Survey & Revenue Map Alignment",
      summary:
        "Ensure the on-ground plot boundaries correspond precisely with government survey records (Akarbandh, Tippani, and RTC records), preventing future boundary disputes or encroachment issues.",
      keyCheck: "Physical survey vs. revenue map congruence",
    },
    {
      icon: Landmark,
      title: "Transaction Costs & Taxation",
      summary:
        "Understand all financial commitments upfront: prevailing Karnataka/AP stamp duty, registration charges, mutation filing fees, and applicable withholding tax (TDS) under Indian income tax statutes.",
      keyCheck: "Statutory registration & stamp duty audit",
    },
    {
      icon: AlertCircle,
      title: "FEMA Regulations & Legal Eligibility",
      summary:
        "Confirm your individual eligibility under the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) master directions governing real estate acquisitions by NRIs and OCIs.",
      keyCheck: "RBI/FEMA residency classification check",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="due-diligence"
      className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Buyer Due Diligence
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            Transparency, Governance &{" "}
            <span className="italic font-light text-[#242424] border-b-2 border-[#EDC455] pb-0.5">
              Independent Scrutiny
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
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
                className="bg-[#FDFBFF] p-8 rounded-sm border border-[#E2E6EC] hover:border-[#0099FF] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#0099FF]/15 border border-[#0099FF]/30 flex items-center justify-center text-[#242424] mb-6">
                    <Icon className="w-5 h-5 text-[#242424]" />
                  </div>

                  <h3 className="text-lg font-serif font-normal text-[#242424] mb-3">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                    {area.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E6EC]">
                  <span className="block text-[10px] uppercase tracking-wider text-[#4A4A4A] font-semibold mb-0.5">
                    Essential Verification
                  </span>
                  <span className="text-xs text-[#242424] font-medium">
                    {area.keyCheck}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Educational Legal Disclaimer Box */}
        <div className="p-6 sm:p-8 bg-[#FDFBFF] border-l-4 border-[#0099FF] border-y border-r border-[#E2E6EC] rounded-sm max-w-[880px] mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-5 h-5 text-[#242424]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#242424]">
                General Educational Disclosure
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                Starrbites provides factual project documentation and coordination
                assistance to prospective buyers. The information presented on this
                website is for general educational purposes only and must not be
                construed as legal, tax, or investment advice. Overseas buyers are
                strongly advised to retain their own independent advocates, chartered
                accountants, and FEMA specialists licensed in India prior to entering into
                any binding real estate transaction.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
