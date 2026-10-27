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
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Planning Philosophy
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
            Guiding Principles Behind{" "}
            <span className="italic font-light text-[#555555]">
              Tiiger Trail
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
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
              className="flagship-principle-card bg-[#F6F6F4] p-8 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E7E7]">
                  <span className="text-2xl font-serif font-light text-[#EDC455] group-hover:text-[#C88218] transition-colors">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#555555] font-semibold">
                    Core Standard
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#171C56] mb-2 group-hover:text-[#C88218] transition-colors">
                  {pillar.title}
                </h3>

                <h4 className="text-xs font-semibold text-[#C88218] mb-4">
                  {pillar.headline}
                </h4>

                <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#171C56] font-semibold mb-0.5">
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
        <div className="p-4 bg-[#F6F6F4] border border-[#E7E7E7] rounded-sm text-center">
          <p className="text-xs text-[#555555] font-light">
            * Planning philosophy outlines our development commitments; physical amenities and phased infrastructure are delivered in alignment with approved project schedules.
          </p>
        </div>
      </Container>
    </section>
  );
}
