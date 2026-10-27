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
      className="py-24 sm:py-32 bg-[#171C56] text-white relative overflow-hidden"
    >
      {/* Decorative hairline grid watermark */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EDC455_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Eyebrow */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
          <SectionEyebrow theme="gold" className="justify-center mb-4">
            Direction & Purpose
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] text-white mb-4">
            <span className="text-white">Our Vision & Mission</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
            The enduring compass guiding our land acquisitions, community master plans,
            and commitment to generational value.
          </p>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Box 1: Vision */}
          <div
            ref={visionBoxRef}
            className="bg-[#0F1238]/80 backdrop-blur-sm border border-white/15 p-8 sm:p-12 rounded-sm flex flex-col justify-between hover:border-[#EDC455]/50 transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#EDC455] font-semibold">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal leading-[1.3] text-white mb-6">
                <span className="text-white">
                  “To become a globally trusted land development brand from India, known
                  for creating premium land destinations that shape communities and
                  generate lasting value.”
                </span>
              </h3>
            </div>
            <div className="pt-6 border-t border-white/15 text-xs text-white/80 font-normal flex items-center justify-between">
              <span>Aspiration & Global Standard</span>
              <span className="text-[#EDC455] font-semibold">Starrbites 2030</span>
            </div>
          </div>

          {/* Box 2: Mission */}
          <div
            ref={missionBoxRef}
            className="bg-[#0F1238]/80 backdrop-blur-sm border border-white/15 p-8 sm:p-12 rounded-sm flex flex-col justify-between hover:border-[#EDC455]/50 transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#EDC455] font-semibold">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal leading-[1.3] text-white mb-6">
                <span className="text-white">
                  “To develop thoughtfully planned land projects that combine
                  transparency, purposeful design, and meaningful opportunities for
                  modern buyers.”
                </span>
              </h3>
            </div>
            <div className="pt-6 border-t border-white/15 text-xs text-white/80 font-normal flex items-center justify-between">
              <span>Daily Practice & Stewardship</span>
              <span className="text-[#EDC455] font-semibold">Active Execution</span>
            </div>
          </div>
        </div>

        {/* Governance Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/75 font-normal">
            Approved Corporate Commitments from Starrbites PRD — Subject to Final Executive Confirmation
          </p>
        </div>
      </Container>
    </section>
  );
}
