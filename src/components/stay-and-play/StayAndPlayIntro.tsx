"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function StayAndPlayIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-intro-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
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

  const focusPoints = [
    {
      index: "01",
      title: "Active Recreation",
      summary:
        "Shaped for individuals and families who value movement, outdoor engagement, and purposeful recreational settings as part of their time away.",
    },
    {
      index: "02",
      title: "Leisure Stays",
      summary:
        "Conceived around unhurried leisure stays—creating a welcoming environment where residents and guests can step back from urban routines.",
    },
    {
      index: "03",
      title: "Planned Community Spaces",
      summary:
        "Organized with thoughtful spatial proportions so shared areas foster connection while respecting calm, order, and long-term usability.",
    },
    {
      index: "04",
      title: "A Distinct Portfolio Identity",
      summary:
        "Complements our nature-led plotted estate, Tiiger Trail, by introducing a dedicated recreational and hospitality-led format within the Starrbites portfolio.",
    },
  ];

  return (
    <section
      id="stay-and-play-introduction"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FDFBFF] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="stay-and-play-intro-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Narrative (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 sap-intro-reveal">
            <SectionEyebrow theme="charcoal">
              01 / PROJECT INTRODUCTION
            </SectionEyebrow>

            <h2
              id="stay-and-play-intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
            >
              A Development Built Around{" "}
              <span className="italic font-normal text-[#0099FF]">Experiences</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
              Within the Starrbites development portfolio, <strong className="font-semibold text-[#242424]">Stay and Play</strong> represents a distinct direction—one centered on how people spend restorative time together through active recreation, leisure stays, and thoughtfully planned community spaces.
            </p>

            <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
              Where traditional land developments focus solely on plot boundaries, Stay and Play is conceived around the rhythm of an active retreat. Every aspect of the layout is being planned to balance engaging outdoor activity with calm, well-proportioned spaces for rest and gathering.
            </p>

            <div className="p-5 bg-[#F3F6FA] border-l-4 border-[#EDC455] rounded-[2px]">
              <p className="text-xs sm:text-sm text-[#242424] font-normal leading-relaxed">
                <strong className="font-semibold">Transparent Presentation:</strong> Detailed project specifications, verified site coordinates, and master-plan documentation are currently being prepared for formal release. No unverified facility lists or speculative figures are published ahead of official confirmation.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Grounded Pillars (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sap-intro-reveal">
            {focusPoints.map((point) => (
              <div
                key={point.index}
                className="bg-[#F3F6FA] border border-[#E2E6EC] border-t-2 border-t-[#0099FF] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between hover:border-[#0099FF] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E6EC]">
                    <span className="font-mono text-xs font-semibold text-[#0099FF] tracking-widest">
                      PILLAR {point.index}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#EDC455]" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#242424] mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                    {point.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

