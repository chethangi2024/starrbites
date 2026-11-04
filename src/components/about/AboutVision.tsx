"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const visionBoxRef = useRef<HTMLDivElement>(null);
  const missionBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        visionBoxRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionBoxRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        missionBoxRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionBoxRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="py-24 sm:py-32 bg-[#0099FF] text-[#242424] relative overflow-hidden"
    >
      {/* Decorative hairline grid watermark */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Eyebrow */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 bg-[#FDFBFF] px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] mb-4 shadow-sm">
            <SectionEyebrow theme="charcoal" line={false} className="justify-center">
              Direction & Purpose
            </SectionEyebrow>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-[1.15] text-[#242424] mb-4">
            Our Vision &amp; Mission
          </h2>
          <p className="text-sm sm:text-base text-[#242424] font-normal leading-relaxed">
            The long-term commitments guiding how Starrbites selects locations, plans projects, and
            serves buyers across its development portfolio.
          </p>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Box 1: Vision */}
          <div
            ref={visionBoxRef}
            className="bg-[#FDFBFF] border-t-4 border-[#EDC455] p-8 sm:p-12 rounded-sm flex flex-col justify-between shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal leading-[1.3] text-[#242424] mb-6">
                “To become a globally trusted land development brand from India, known
                for creating premium land destinations that shape communities and
                generate lasting value.”
              </h3>
            </div>
            <div className="pt-6 border-t border-[#E2E6EC] text-xs text-[#4A4A4A] font-normal flex items-center justify-between">
              <span>Long-Term Brand Direction</span>
              <span className="bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                Corporate Vision
              </span>
            </div>
          </div>

          {/* Box 2: Mission */}
          <div
            ref={missionBoxRef}
            className="bg-[#FDFBFF] border-t-4 border-[#EDC455] p-8 sm:p-12 rounded-sm flex flex-col justify-between shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal leading-[1.3] text-[#242424] mb-6">
                “To develop thoughtfully planned land projects that combine
                transparency, purposeful design, and meaningful opportunities for
                modern buyers.”
              </h3>
            </div>
            <div className="pt-6 border-t border-[#E2E6EC] text-xs text-[#4A4A4A] font-normal flex items-center justify-between">
              <span>Development Practice &amp; Portfolio Standard</span>
              <span className="bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                Corporate Mission
              </span>
            </div>
          </div>
        </div>

        {/* Governance Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#242424] font-semibold">
            Approved Corporate Commitments from Starrbites PRD — Subject to Final Executive Confirmation
          </p>
        </div>
      </Container>
    </section>
  );
}
