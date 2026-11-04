"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
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
      className="py-24 sm:py-36 bg-[#0099FF] text-[#242424] relative overflow-hidden"
      aria-labelledby="vision-heading"
    >
      {/* Subtle texture backdrop */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
        <Image
          src="/images/stock/textures/editorial-refined-glass-stone.jpg"
          alt="Architectural texture"
          fill
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div ref={contentRef} className="max-w-[1140px] mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 bg-[#FDFBFF] px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] mb-4 shadow-sm">
              <SectionEyebrow theme="charcoal" line={false} className="justify-center">
                Corporate Direction
              </SectionEyebrow>
            </div>
            <h2
              id="vision-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight"
            >
              Our Vision &amp; Mission
            </h2>
            <p className="text-base sm:text-lg text-[#242424] font-normal max-w-[680px] mx-auto mt-4 leading-relaxed">
              Guiding every project we plan, acquire, and steward across our growing real-estate
              development portfolio.
            </p>
          </div>

          {/* Split Vision & Mission on Cloudy White Reading Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Vision Column */}
            <div className="bg-[#FDFBFF] p-8 sm:p-12 rounded-[2px] border-t-4 border-[#EDC455] shadow-lg space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] bg-[#EDC455]/30 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold leading-snug">
                To become a globally trusted land development brand from India, known for creating
                premium land destinations that shape communities and generate lasting value.
              </h3>
              <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed pt-2 border-t border-[#E2E6EC]">
                Our long-term perspective focuses on building institutional credibility across
                distinct regional developments that serve families, lifestyle buyers, and investors.
              </p>
            </div>

            {/* Mission Column */}
            <div className="bg-[#FDFBFF] p-8 sm:p-12 rounded-[2px] border-t-4 border-[#EDC455] shadow-lg space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] bg-[#EDC455]/30 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold leading-snug">
                To develop thoughtfully planned land projects that combine transparency, purposeful
                design, and meaningful opportunities for modern buyers.
              </h3>
              <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed pt-2 border-t border-[#E2E6EC]">
                Across every Starrbites development, we pair documented legal due diligence with
                disciplined site planning so buyers can evaluate each opportunity with clarity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
