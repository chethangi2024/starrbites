"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".flagship-principle-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const planningPillars = [
    {
      num: "01",
      title: "Thoughtful Land Planning",
      headline: "Respecting the Terrain Over Rigid Grids",
      description:
        "Every plot within Tiiger Trail is delineated to follow the natural contours of the land. We avoid invasive earth-cutting in favour of organic circulation and open sightlines that celebrate the countryside.",
      focus: "Contour-sensitive plotted layouts",
    },
    {
      num: "02",
      title: "Consideration of the Natural Setting",
      headline: "Preserving Ecosystem Integrity",
      description:
        "We plan generous plantation avenues, native tree buffers, and low-density boundaries. The layout is designed to allow soil, greenery, and wildlife habitats to flourish in mutual balance.",
      focus: "Native vegetation & ecological buffers",
    },
    {
      num: "03",
      title: "Long-Term Perspective",
      headline: "Designed for Generational Permanence",
      description:
        "We approach land development with a multi-decade lens. Plotted parcels are prepared to accommodate family farmhouses, private organic farming, or quiet personal sanctuaries that retain enduring worth.",
      focus: "Enduring lifestyle & asset utility",
    },
    {
      num: "04",
      title: "Transparent Buyer Communication",
      headline: "Complete Disclosure at Every Stage",
      description:
        "From individual survey demarcations to clear mutation filings and independent legal scrutiny, we provide prospective buyers with full transparency before any commitment is undertaken.",
      focus: "Vetted parent deeds & individual RTCs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="planning-philosophy"
      className="py-24 sm:py-32 bg-[#FDFBFF] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Planning Philosophy
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            Guiding Principles Behind{" "}
            <span className="italic font-light text-[#4A4A4A]">
              Tiiger Trail
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
            Our planning methodology rejects short-term commercial compromises in
            favour of environmental sensitivity, legal clarity, and lasting spatial
            elegance.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {planningPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="flagship-principle-card bg-[#F3F6FA] p-8 rounded-sm border border-[#E2E6EC] border-t-4 border-t-[#0099FF] hover:border-[#0099FF] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2E6EC]">
                  <span className="text-lg font-serif font-medium text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#4A4A4A] font-semibold">
                    Core Standard
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#242424] mb-2">
                  {pillar.title}
                </h3>

                <h4 className="text-xs font-semibold text-[#242424] border-l-2 border-[#EDC455] pl-2.5 mb-4">
                  {pillar.headline}
                </h4>

                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E6EC]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#4A4A4A] font-semibold mb-0.5">
                  Design Benchmark
                </span>
                <span className="text-xs text-[#242424] font-medium">
                  {pillar.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Disclaimer */}
        <div className="p-4 bg-[#F3F6FA] border border-[#E2E6EC] rounded-sm text-center">
          <p className="text-xs text-[#4A4A4A] font-light">
            * Planning philosophy outlines our development commitments; physical amenities and phased infrastructure are delivered in alignment with approved project schedules.
          </p>
        </div>
      </Container>
    </section>
  );
}
