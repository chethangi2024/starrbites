"use client";

import React, { useEffect, useRef } from "react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-entry",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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
      era: "Origins",
      title: "Spatial Design & Execution Foundation",
      description:
        "Starrbites originated with an uncompromising focus on interior design, spatial planning, and high-quality physical execution across commercial and residential spaces in Bangalore.",
    },
    {
      era: "Evolution",
      title: "Land Due Diligence & Strategic Advisory",
      description:
        "Building an in-house legal and acquisition advisory framework to evaluate land titles, agricultural mutations, and regional infrastructure growth vectors.",
    },
    {
      era: "Transformation",
      title: "Curated Plotted Destinations",
      description:
        "Transitioning into developer of curated physical land holdings, prioritizing transparent titles, planned gated perimeters, and sustainable countryside community models.",
    },
    {
      era: "Present Horizon",
      title: "Tiiger Trail & Expanding Project Portfolio",
      description:
        "Advancing Tiiger Trail along the NH-44 North Bangalore–Lepakshi corridor while expanding the Starrbites portfolio with distinct developments including Stay and Play.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FDFBFF] relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-[720px]">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Our Journey
            </SectionEyebrow>
            <h2
              id="journey-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.18]"
            >
              The Evolution of Our Craft
            </h2>
            <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
              From our foundations in spatial design and real estate execution to the development of
              signature land destinations, our path has always been guided by architectural rigor and
              verified trust.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-xs uppercase tracking-widest bg-[#EDC455]/30 text-[#242424] px-3 py-1 rounded-[2px] font-semibold">
              Verified Milestones
            </span>
            <span className="block text-sm text-[#4A4A4A] mt-2">Bangalore, Karnataka</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div
          ref={timelineRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="timeline-entry flex flex-col justify-between p-8 bg-[#F3F6FA] border-t-4 border-[#0099FF] rounded-[2px] hover:border-[#EDC455] transition-colors duration-300"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] inline-block mb-3">
                  {m.era}
                </span>
                <h3 className="text-xl font-serif text-[#242424] font-semibold mb-4 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E2E6EC] flex items-center justify-between text-xs text-[#4A4A4A] font-medium">
                <span>Phase {idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#0099FF]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
