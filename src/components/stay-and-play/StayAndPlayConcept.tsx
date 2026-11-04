"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

const CONCEPT_THEMES = [
  {
    number: "01",
    theme: "Recreation",
    subtitle: "Focus on Active Recreation",
    description:
      "The 'Play' dimension of the development is rooted in active engagement and outdoor vitality. Rather than treating recreation as an afterthought, the project concept places movement, open-air activity, and purposeful recreational zones at the heart of the experience.",
    editorialNote: "Concept Theme • Active Engagement",
  },
  {
    number: "02",
    theme: "Leisure",
    subtitle: "Relationship with Leisure Stays & Time Away",
    description:
      "The 'Stay' dimension addresses the need for restorative time away from city schedules. The concept is shaped around comfortable, unhurried leisure stays—allowing individuals and families to enjoy extended weekends and retreats in a composed, hospitality-led environment.",
    editorialNote: "Concept Theme • Restorative Stays",
  },
  {
    number: "03",
    theme: "Community",
    subtitle: "Thoughtfully Planned Shared Spaces",
    description:
      "Connecting stay and recreation is a commitment to shared community environments. Common spaces and circulation zones are conceived to encourage natural interaction among like-minded visitors and owners while preserving privacy, order, and spatial clarity.",
    editorialNote: "Concept Theme • Shared Belonging",
  },
];

export function StayAndPlayConcept() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-concept-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
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
      className="py-24 sm:py-32 bg-[#F3F6FA] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="stay-and-play-concept-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            02 / THE DEVELOPMENT CONCEPT
          </SectionEyebrow>
          <h2
            id="stay-and-play-concept-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
          >
            Designed Around the Idea of{" "}
            <span className="italic font-normal text-[#0099FF]">Staying and Playing</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Stay and Play is guided by three interconnected editorial themes that define the
            character and purpose of the destination.
          </p>
        </div>

        {/* Three Editorial Theme Panels (Pure Typography & Numbering — No Facility Icons) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CONCEPT_THEMES.map((item) => (
            <article
              key={item.number}
              className="sap-concept-card bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E2E6EC]">
                  <span className="font-mono text-sm font-semibold tracking-[0.2em] text-[#0099FF] uppercase">
                    THEME {item.number}
                  </span>
                  <span className="inline-block px-2.5 py-0.5 bg-[#EDC455]/35 text-[#242424] font-mono text-[10px] uppercase tracking-widest font-semibold rounded-[2px]">
                    {item.theme}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold mb-2">
                  {item.theme}
                </h3>

                <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#4A4A4A] mb-5">
                  {item.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E2E6EC] flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#4A4A4A]">
                  {item.editorialNote}
                </span>
                <span className="w-8 h-[2px] bg-[#EDC455]" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

