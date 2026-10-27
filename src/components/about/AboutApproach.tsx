"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const stepItems = gsap.utils.toArray<HTMLElement>(".approach-step-card");
      stepItems.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: "01",
      phase: "Discovery & Analysis",
      title: "Strategic Corridor Selection",
      description:
        "We identify regional land pockets situated along high-speed transportation corridors (such as the NH-44 North Bangalore corridor) that benefit from government-backed infrastructure, aerospace hubs, and long-term economic expansion.",
      deliverable: "Corridor connectivity and accessibility audit",
    },
    {
      step: "02",
      phase: "Legal Due Diligence",
      title: "Title & Mutation Scrutiny",
      description:
        "Our legal advisory partners conduct rigorous multi-decade parent deed verifications, revenue survey map inspections, encumbrance tracking, and boundary validations to ensure unencumbered, clear ownership before any development.",
      deliverable: "Independent legal opinion and title verification",
    },
    {
      step: "03",
      phase: "Spatial Architecture",
      title: "Topography-Led Master Planning",
      description:
        "Rather than imposing rigid grids, we design master plans that respect natural drainage patterns, mature flora, and gentle contours. Plotted enclaves are complemented by planned plantation avenues and generous community buffers.",
      deliverable: "Master plan layout with natural zoning",
    },
    {
      step: "04",
      phase: "Client Stewardship",
      title: "Transparent Buyer Facilitation",
      description:
        "From physical site walkthroughs and virtual 360° tours for NRI buyers to transparent paperwork handover and ongoing layout stewardship, our client experience team provides clear guidance through every milestone.",
      deliverable: "Seamless documentation and continuous advisory",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Our Methodology
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
            A Disciplined, Intentional Approach to{" "}
            <span className="italic font-light text-[#555555]">
              Land Development
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Our development process combines analytical corridor assessment with
            uncompromising title diligence and sensitive spatial design, ensuring
            peace of mind for every landowner.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((item) => (
            <div
              key={item.step}
              className="approach-step-card bg-[#F6F6F4] p-8 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E7E7]">
                  <span className="text-2xl font-serif font-light text-[#EDC455] group-hover:text-[#C88218] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#555555] font-medium">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#171C56] mb-3 group-hover:text-[#C88218] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#171C56] font-semibold mb-1">
                  Focus Outcome
                </span>
                <span className="text-xs text-[#242424] font-medium">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
