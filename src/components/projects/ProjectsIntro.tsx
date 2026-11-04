"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function ProjectsIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 82%",
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
      id="portfolio-introduction"
      className="py-20 sm:py-28 bg-[#FDFBFF] border-b border-[#E2E6EC]"
      aria-labelledby="portfolio-intro-heading"
    >
      <Container size="wide">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column: Section Heading & Core Premise (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <SectionEyebrow theme="charcoal">Portfolio Overview</SectionEyebrow>

            <h2
              id="portfolio-intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
            >
              Two Distinct Developments,{" "}
              <span className="italic font-normal text-[#242424] border-b-2 border-[#EDC455] pb-0.5">
                Unified by Disciplined Planning.
              </span>
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-[#242424] font-semibold border-l-4 border-[#0099FF] pl-4 py-0.5">
              Individual project identities • Shared corporate standards
            </p>
          </div>

          {/* Right Column: Editorial Explanation & Dual-Project Context (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
            <p>
              Starrbites approaches real-estate development by matching each location to the
              ownership format and experience it is best suited to support. Rather than repeating a
              single template across every site, our portfolio brings forward two distinct
              developments designed for different buyer priorities and ways of living.
            </p>
            <p>
              <strong className="font-semibold text-[#242424]">Tiiger Trail</strong> is conceived
              for buyers seeking plotted countryside ownership, open natural surroundings, and the
              freedom to establish a private farm retreat along the North Bangalore–Lepakshi
              corridor.{" "}
              <strong className="font-semibold text-[#242424]">Stay and Play</strong> is conceived
              as a separate recreational and hospitality-oriented development centered on active
              leisure, retreat stays, and planned community spaces.
            </p>

            {/* Shared Standards Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E2E6EC]">
              <div className="bg-[#F3F6FA] p-6 rounded-[2px] border-t-2 border-[#0099FF]">
                <h3 className="text-base font-serif font-semibold text-[#242424] mb-2">
                  Distinct Project Identities
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                  Each project is planned around its own regional setting, intended use, and buyer
                  audience—whether quiet countryside land stewardship or active recreational
                  living.
                </p>
              </div>

              <div className="bg-[#F3F6FA] p-6 rounded-[2px] border-t-2 border-[#EDC455]">
                <h3 className="text-base font-serif font-semibold text-[#242424] mb-2">
                  Shared Development Discipline
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                  Both developments are governed by Starrbites&apos; core standards: careful
                  corridor evaluation, parent deed and mutation verification, purposeful site
                  planning, and clear buyer communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

