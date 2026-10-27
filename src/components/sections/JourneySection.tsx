"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
      title: "Tiiger Trail Phase I & Legacy Focus",
      description:
        "Establishing Tiiger Trail as our flagship nature-led estate near Lepakshi along the NH-44 corridor, creating lasting lifestyle sanctuaries for modern and global investors.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-[720px]">
            <SectionEyebrow theme="navy" className="mb-4">
              Our Journey
            </SectionEyebrow>
            <h2
              id="journey-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18]"
            >
              The Evolution of Our Craft
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light mt-4 leading-relaxed">
              From our foundations in spatial design and real estate execution to the development of
              signature land destinations, our path has always been guided by architectural rigor and
              verified trust.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-xs uppercase tracking-widest text-[#8B6C20] font-semibold">
              Verified Milestones
            </span>
            <span className="block text-sm text-[#555555] mt-1">Bangalore, Karnataka</span>
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
              className="timeline-entry flex flex-col justify-between p-8 bg-[#F6F6F4] border-t-2 border-[#171C56] rounded-[2px] hover:border-[#EDC455] transition-colors duration-300"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C88218] block mb-3">
                  {m.era}
                </span>
                <h3 className="text-xl font-serif text-[#171C56] font-semibold mb-4 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E7E7E7] flex items-center justify-between text-xs text-[#555555]">
                <span>Phase {idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#171C56]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
