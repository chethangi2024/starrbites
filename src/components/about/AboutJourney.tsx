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
      gsap.fromTo(
        ".journey-milestone-row",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      phase: "Phase 01",
      badge: "Foundational Practice",
      title: "Interior Architecture & Spatial Execution",
      summary:
        "Starrbites commenced operations delivering interior design, spatial planning, and turnkey execution for residential and commercial spaces across Bengaluru.",
      focus: "Spatial design, execution craftsmanship & client advisory",
    },
    {
      phase: "Phase 02",
      badge: "Institutional Growth",
      title: "Real Estate Operations & Land Due Diligence",
      summary:
        "Building capability in regional land evaluation, title searches, survey compliance, and agricultural land conversion advisory in Karnataka and border corridors.",
      focus: "Land acquisition advisory & statutory documentation",
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
      title: "Tiiger Trail Phase I & Expanding Pipeline",
      summary:
        "Advancing our flagship plotted nature destination, Tiiger Trail, along the NH-44 North Bangalore–Lepakshi corridor while developing our pipeline of countryside retreats.",
      focus: "Flagship execution & portfolio growth",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Evolution &amp; Milestones
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15]">
              Our Evolutionary Journey
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
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
            className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-[#354B5D]/25 -translate-x-1/2"
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
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#FFFFFF] border-2 border-[#354B5D] shadow-sm z-10 mt-1.5 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#A98556]" />
                  </div>

                  {/* Content Card (Half Width on Desktop) */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-12 lg:pl-16 text-left" : "md:pr-12 lg:pr-16 md:text-right"
                    }`}
                  >
                    <div className="bg-[#F5F1E9] p-6 sm:p-8 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] transition-colors duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2.5 ${
                          isEven ? "justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="text-xs uppercase tracking-[0.16em] bg-[#A98556]/20 text-[#354B5D] px-2 py-0.5 rounded-[2px] font-semibold">
                          {item.phase}
                        </span>
                        <span className="text-[#55534F] text-xs">•</span>
                        <span className="text-xs uppercase tracking-wider text-[#55534F] font-medium">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#292D30] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#55534F] font-light leading-relaxed mb-4 text-left">
                        {item.summary}
                      </p>

                      <div
                        className={`pt-3 border-t border-[#DDD7CC] text-xs font-medium text-[#292D30] ${
                          isEven ? "text-left" : "md:text-right text-left"
                        }`}
                      >
                        <span className="font-semibold text-[#354B5D]">Core Competency:</span>{" "}
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
          <p className="text-xs text-[#55534F] font-light">
            * Milestone chronology structured around verified corporate ventures in the Starrbites PRD.
          </p>
        </div>
      </Container>
    </section>
  );
}
