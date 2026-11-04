"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

const DEVELOPMENT_STAGES = [
  {
    step: "01",
    title: "Corridor Selection",
    subtitle: "Accessibility & Regional Character",
    description:
      "For a recreational and leisure-stay concept, location evaluation focuses on regional road connectivity, travel convenience from urban centres, and a setting suited to outdoor activity and retreat living.",
  },
  {
    step: "02",
    title: "Title Diligence",
    subtitle: "Multi-Decade Legal Verification",
    description:
      "Consistent with Starrbites' corporate mandate, land parcels are evaluated through structured legal review of historical title chains, revenue records, and ownership documentation prior to formal release.",
  },
  {
    step: "03",
    title: "Master Planning",
    subtitle: "Balancing Activity & Rest",
    description:
      "Spatial planning for Stay and Play is oriented around clear zoning—separating active recreational areas from quiet leisure-stay zones while linking them through cohesive community spaces.",
  },
  {
    step: "04",
    title: "Transparent Buyer Facilitation",
    subtitle: "Clear Documentation & Advisory",
    description:
      "Prospective participants are guided through verified project information, clear documentation checklists, and direct consultations with our Bengaluru advisory desk at every step.",
  },
];

export function StayAndPlayPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-stage-card",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      aria-labelledby="stay-and-play-philosophy-heading"
    >
      <Container size="wide">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-20 gap-8 pb-10 border-b border-[#E2E6EC]">
          <div className="max-w-2xl">
            <SectionEyebrow theme="charcoal" className="mb-4">
              03 / PLANNING AND DEVELOPMENT PHILOSOPHY
            </SectionEyebrow>
            <h2
              id="stay-and-play-philosophy-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
            >
              A Considered Approach to{" "}
              <span className="italic font-normal text-[#0099FF]">Development</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light max-w-md leading-relaxed">
            Stay and Play is guided by the same four-stage development framework that governs every
            project in the Starrbites portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DEVELOPMENT_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="sap-stage-card bg-[#F3F6FA] border border-[#E2E6EC] p-8 rounded-[2px] flex flex-col justify-between hover:border-[#0099FF] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E6EC]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0099FF] font-semibold">
                    STAGE {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#EDC455] group-hover:bg-[#0099FF] transition-colors" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4A4A4A] block mb-2">
                  {stage.subtitle}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif text-[#242424] font-semibold mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E6EC] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                  Starrbites Standard
                </span>
                <span className="w-6 h-[2px] bg-[#EDC455] group-hover:w-10 group-hover:bg-[#0099FF] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

