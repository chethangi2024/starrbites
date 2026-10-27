"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, FileCheck, Scale, Eye } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustCheckpoints = [
    {
      icon: Scale,
      title: "Independent Title Scrutiny",
      description:
        "Every land parcel undergoes exhaustive multi-decade legal scrutiny by principal legal advocates to verify unencumbered lineage and lawful ownership flow.",
    },
    {
      icon: FileCheck,
      title: "Revenue Map & RTC Vetting",
      description:
        "Survey boundaries and village revenue maps (Tippani & Akarbandh) are cross-verified to guarantee exact acreage and eliminate boundary discrepancies.",
    },
    {
      icon: ShieldCheck,
      title: "Individual Mutation Support",
      description:
        "Post-registration, our legal operations team assists buyers through the formal mutation process to ensure revenue records reflect the buyer's name.",
    },
    {
      icon: Eye,
      title: "Pre-Purchase Document Inspection",
      description:
        "Prospective buyers and their independent legal advisors are provided unrestricted access to inspect parent deed dossiers before executing agreements.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="py-24 sm:py-32 bg-[#F6F6F4] border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Sanctity & Governance
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
            Documentary Transparency &{" "}
            <span className="italic font-light text-[#8B6C20]">
              Due Diligence
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            We adhere to rigorous legal diligence standards. We believe confidence is
            built on verifiable public records, clear boundaries, and uncompromising
            procedural honesty.
          </p>
        </div>

        {/* 4 Checkpoint Grid */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {trustCheckpoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#F6F6F4] border border-[#E7E7E7] flex items-center justify-center text-[#171C56] mb-6">
                    <Icon className="w-5 h-5 text-[#C88218]" />
                  </div>

                  <h3 className="text-lg font-serif font-normal text-[#171C56] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E7E7] text-[11px] uppercase tracking-wider text-[#C88218] font-semibold">
                  Verified Procedure
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer & Confirmation Flag */}
        <div className="p-6 bg-white border border-[#E7E7E7] rounded-sm max-w-[880px] mx-auto text-center">
          <span className="block text-[11px] uppercase tracking-[0.16em] text-[#C88218] font-semibold mb-1">
            Buyer Advisory Notice
          </span>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            Project documentation, parent title certificates, and phase-specific
            statutory approvals are available for inspection at our registered
            corporate office in Bengaluru. Starrbites encourages all prospective buyers
            to conduct independent legal verification through their chosen counsel.
          </p>
        </div>
      </Container>
    </section>
  );
}
