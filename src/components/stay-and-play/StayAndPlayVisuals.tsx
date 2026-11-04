"use client";

import React, { useEffect, useRef } from "react";
import { Layers, Clock } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export interface StayAndPlayVisualAsset {
  src: string;
  alt: string;
  caption: string;
}

interface StayAndPlayVisualsProps {
  /**
   * Ready to accept approved project visuals when released without redesigning the page.
   * While empty/undefined, renders the single architectural blueprint coordinate-frame preview.
   */
  approvedVisuals?: StayAndPlayVisualAsset[];
}

export function StayAndPlayVisuals({ approvedVisuals = [] }: StayAndPlayVisualsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-visual-frame",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="py-24 sm:py-32 bg-[#FDFBFF] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="stay-and-play-visuals-heading"
    >
      <Container size="wide">
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <SectionEyebrow theme="charcoal" className="mb-4">
            05 / VISUAL GALLERY &amp; MASTER PLAN
          </SectionEyebrow>
          <h2
            id="stay-and-play-visuals-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
          >
            The Vision Taking{" "}
            <span className="italic font-normal text-[#0099FF]">Shape</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Official architectural renderings, master-plan illustrations, and site photographs for
            Stay and Play are currently in preparation.
          </p>
        </div>

        {/* Single Refined Architectural Blueprint Coordinate-Frame Visual (No repeated placeholders or stock photos) */}
        {approvedVisuals.length === 0 && (
          <div className="sap-visual-frame bg-[#242424] text-[#FDFBFF] border-t-4 border-[#EDC455] rounded-[2px] shadow-xl overflow-hidden relative p-8 sm:p-14 lg:p-20">
            {/* Blueprint Coordinate Grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0099FF_1px,transparent_1px),linear-gradient(to_bottom,#0099FF_1px,transparent_1px)] [background-size:36px_36px]"
              aria-hidden="true"
            />

            {/* Architectural Inner Frame */}
            <div
              className="absolute inset-4 sm:inset-8 border border-[#FDFBFF]/15 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 py-6 sm:py-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0099FF] text-[#242424] font-mono text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px]">
                <Layers className="w-3.5 h-3.5" />
                <span>Official Project Visuals &amp; Master Plan in Preparation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FDFBFF] font-normal leading-snug">
                Master-Plan Layout &amp; Architectural Renderings Under Preparation
              </h3>

              <p className="text-sm sm:text-base text-[#FDFBFF]/85 font-light leading-relaxed max-w-2xl mx-auto">
                Starrbites does not use unrelated stock photography or speculative illustrations to
                represent an unannounced master plan. Once our planning and design teams finalize
                the official visual documentation for Stay and Play, verified spatial plans and
                site perspectives will be published directly in this section.
              </p>

              {/* Coordinate Frame Status Bar */}
              <div className="pt-6 mt-6 border-t border-[#FDFBFF]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 bg-[#FDFBFF]/5 border border-[#FDFBFF]/15 rounded-[2px]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#EDC455] block mb-1">
                    DOCUMENT 01
                  </span>
                  <span className="text-xs sm:text-sm font-serif text-[#FDFBFF] font-medium block">
                    Master-Plan Illustrations
                  </span>
                  <span className="text-[11px] text-[#FDFBFF]/70 flex items-center gap-1.5 mt-1">
                    <Clock className="w-3 h-3 text-[#0099FF]" /> In preparation
                  </span>
                </div>

                <div className="p-4 bg-[#FDFBFF]/5 border border-[#FDFBFF]/15 rounded-[2px]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#EDC455] block mb-1">
                    DOCUMENT 02
                  </span>
                  <span className="text-xs sm:text-sm font-serif text-[#FDFBFF] font-medium block">
                    Architectural Renderings
                  </span>
                  <span className="text-[11px] text-[#FDFBFF]/70 flex items-center gap-1.5 mt-1">
                    <Clock className="w-3 h-3 text-[#0099FF]" /> In preparation
                  </span>
                </div>

                <div className="p-4 bg-[#FDFBFF]/5 border border-[#FDFBFF]/15 rounded-[2px]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#EDC455] block mb-1">
                    DOCUMENT 03
                  </span>
                  <span className="text-xs sm:text-sm font-serif text-[#FDFBFF] font-medium block">
                    Verified Site Photographs
                  </span>
                  <span className="text-[11px] text-[#FDFBFF]/70 flex items-center gap-1.5 mt-1">
                    <Clock className="w-3 h-3 text-[#0099FF]" /> Pending official release
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

