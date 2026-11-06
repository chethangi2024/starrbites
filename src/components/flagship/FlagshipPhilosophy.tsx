"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".flagship-principle-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const planningPillars = [
    {
      num: "01",
      title: "Harmonious Contours",
      headline: "Working with Natural Topography",
      description:
        "Rather than grading the land flat into monotonous plots, Tiiger Trail embraces natural drainage lines, gentle slopes, and existing rock outcrops to preserve countryside texture.",
      focus: "Natural water retention & contour preservation",
    },
    {
      num: "02",
      title: "Generous Scale",
      headline: "Low-Density Farmstead Plots",
      description:
        "Every plot is generously sized to support a personal farmhouse, private fruit orchard, and natural tree cover—ensuring expansive views and true spatial privacy.",
      focus: "Spacious acreage & low built-up coverage",
    },
    {
      num: "03",
      title: "Enduring Form",
      headline: "Architectural Stewardship",
      description:
        "Developed in partnership with Mayan Designs, farmhouse concept typologies celebrate local stone, timber pergolas, and vernacular rooflines that harmonize with the regional climate.",
      focus: "Vernacular materials & climate-responsive design",
    },
    {
      num: "04",
      title: "Clear Boundaries",
      headline: "Total Legal Certainty",
      description:
        "From individual survey demarcations to clear mutation filings and independent legal scrutiny, we provide prospective buyers with full transparency before any commitment is undertaken.",
      focus: "Vetted parent deeds & individual RTCs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="planning-philosophy"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Planning Philosophy
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Guiding Principles Behind{" "}
            <span className="italic font-light text-[#55534F]">
              Tiiger Trail
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
            Our planning methodology rejects short-term commercial compromises in
            favour of environmental sensitivity, legal clarity, and lasting spatial
            elegance.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {planningPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="flagship-principle-card bg-[#F5F1E9] p-8 rounded-sm border border-[#DDD7CC] border-t-4 border-t-[#354B5D] hover:border-[#354B5D] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD7CC]">
                  <span className="text-lg font-serif font-medium text-[#354B5D] bg-[#A98556]/20 px-2.5 py-0.5 rounded-sm">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#55534F] font-semibold">
                    Core Standard
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#292D30] mb-2">
                  {pillar.title}
                </h3>

                <h4 className="text-xs font-semibold text-[#292D30] border-l-2 border-[#A98556] pl-2.5 mb-4">
                  {pillar.headline}
                </h4>

                <p className="text-sm text-[#55534F] font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDD7CC]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#55534F] font-semibold mb-0.5">
                  Design Benchmark
                </span>
                <span className="text-xs text-[#292D30] font-medium">
                  {pillar.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
