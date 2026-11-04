"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".journey-milestone-row");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      phase: "Phase 01",
      badge: "Foundational Roots",
      title: "Spatial Design & Interiors Foundation",
      summary:
        "The inception of our design practice in Bengaluru, grounded in architectural spatial planning, interior execution standards, and material discipline.",
      focus: "Spatial design integrity & precision execution",
    },
    {
      phase: "Phase 02",
      badge: "Portfolio Expansion",
      title: "Commercial & Development Advisory",
      summary:
        "Broadening operational capabilities through project advisory, regional site evaluations, and commercial spatial planning across key Karnataka growth zones.",
      focus: "Cross-functional advisory & site feasibility",
    },
    {
      phase: "Phase 03",
      badge: "Strategic Transition",
      title: "Land Stewardship & Plotted Living",
      summary:
        "Identifying widespread title ambiguities and uninspired layouts in the regional land sector, Starrbites formalized its plotted development vertical focused on transparent, curated living destinations.",
      focus: "Legal due diligence & master-planned communities",
    },
    {
      phase: "Phase 04",
      badge: "Portfolio Horizon",
      title: "Tiiger Trail Phase I & Multi-Project Growth",
      summary:
        "Advancing our flagship plotted nature destination, Tiiger Trail, along the NH-44 North Bangalore–Lepakshi corridor while expanding our real-estate development portfolio with Stay and Play.",
      focus: "Flagship execution & portfolio expansion",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-24 sm:py-32 bg-[#FDFBFF] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Evolution & Milestones
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15]">
              Our Evolutionary Journey
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
            <p>
              A purposeful transition from interior architecture and spatial planning
              to curated plotted developments and enduring regional stewardship.
            </p>
          </div>
        </div>

        {/* Refined Vertical Timeline */}
        <div ref={timelineRef} className="relative max-w-[960px] mx-auto">
          {/* Central Vertical Guide Line (Desktop) */}
          <div
            className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-[#0099FF]/35 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.phase}
                  className={`journey-milestone-row relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#FDFBFF] border-2 border-[#0099FF] shadow-sm z-10 mt-1.5 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#EDC455]" />
                  </div>

                  {/* Content Card (Half Width on Desktop) */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-12 lg:pl-16 text-left" : "md:pr-12 lg:pr-16 md:text-right"
                    }`}
                  >
                    <div className="bg-[#F3F6FA] p-6 sm:p-8 rounded-sm border border-[#E2E6EC] hover:border-[#0099FF] transition-colors duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2.5 ${
                          isEven ? "justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="text-xs uppercase tracking-[0.16em] bg-[#EDC455]/40 text-[#242424] px-2 py-0.5 rounded-[2px] font-semibold">
                          {item.phase}
                        </span>
                        <span className="text-[#4A4A4A] text-xs">•</span>
                        <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#242424] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-4 text-left">
                        {item.summary}
                      </p>

                      <div
                        className={`pt-3 border-t border-[#E2E6EC] text-xs font-medium text-[#242424] ${
                          isEven ? "text-left" : "md:text-right text-left"
                        }`}
                      >
                        <span className="font-semibold text-[#007ACC]">Core Competency:</span>{" "}
                        {item.focus}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-[#4A4A4A] font-light">
            * Milestone chronology structured around verified corporate ventures in the PRD; specific calendar years pending client archives confirmation.
          </p>
        </div>
      </Container>
    </section>
  );
}
