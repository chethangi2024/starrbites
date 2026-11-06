"use client";

import React, { useEffect, useRef } from "react";
import { FileCheck, Shield, Scale, Eye } from "lucide-react";
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
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustCheckpoints = [
    {
      icon: FileCheck,
      title: "30-Year Title Search",
      description:
        "Comprehensive scrutiny of parent deeds, encumbrance history, revenue flow, and legal inheritance documentation conducted by high court advocates.",
    },
    {
      icon: Shield,
      title: "Individual RTC & Mutation",
      description:
        "Every plot is delivered with clear individual mutation filings, certified revenue records (RTC), and precise survey demarcation.",
    },
    {
      icon: Scale,
      title: "Statutory & Conversion Compliance",
      description:
        "Adherence to state land laws, regional master-plan zoning regulations, and applicable agricultural conversion frameworks.",
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
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Sanctity &amp; Governance
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Documentary Transparency &amp;{" "}
            <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
              Due Diligence
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
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
                className="bg-[#FFFFFF] p-8 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#354B5D]/10 border border-[#354B5D]/20 flex items-center justify-center text-[#354B5D] mb-6">
                    <Icon className="w-5 h-5 text-[#354B5D]" />
                  </div>

                  <h3 className="text-lg font-serif font-normal text-[#292D30] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55534F] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD7CC] flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#292D30] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#A98556]" />
                  Verified Procedure
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer & Confirmation Flag */}
        <div className="p-6 bg-[#FFFFFF] border border-[#DDD7CC] rounded-sm max-w-[880px] mx-auto text-center">
          <span className="inline-block px-2 py-0.5 bg-[#A98556]/20 text-[10px] uppercase tracking-[0.16em] text-[#354B5D] font-semibold mb-2 rounded-xs">
            Buyer Advisory Notice
          </span>
          <p className="text-xs text-[#55534F] font-light leading-relaxed">
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
