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
      gsap.fromTo(
        ".approach-step-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: "01",
      phase: "Corridor Analysis",
      title: "Strategic Land Sourcing",
      description:
        "We identify growth trajectories, infrastructure investments, highway corridors, and civic expansions before shortlisting any parcel.",
      deliverable: "Comprehensive corridor feasibility report",
    },
    {
      step: "02",
      phase: "Legal Due Diligence",
      title: "Document Scrutiny & Title Search",
      description:
        "30-year parent deed tracing, encumbrance certificates (EC), RTC land records, and mutation verification conducted by high court advocates.",
      deliverable: "Complete documented legal opinion & verified records",
    },
    {
      step: "03",
      phase: "Spatial Design",
      title: "Master Planning & Ecology",
      description:
        "Low-density estate layout, plantation avenue alignment, water retention planning, and harmonious architectural farmhouse typologies.",
      deliverable: "Ecological master plan & architectural blueprints",
    },
    {
      step: "04",
      phase: "Stewardship",
      title: "Clear Delivery & Governance",
      description:
        "Individual mutation execution, transparent registry handover, gated estate boundaries, and professional property maintenance setup.",
      deliverable: "Individual ownership documents & community charter",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Our Methodology
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            A Disciplined, Intentional Approach to{" "}
            <span className="italic font-light text-[#55534F]">
              Land Development
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
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
              className="approach-step-card bg-[#F5F1E9] p-8 rounded-sm border-t-4 border-[#354B5D] border-x border-b border-[#DDD7CC] hover:border-[#A98556] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD7CC]">
                  <span className="text-xl font-serif font-semibold bg-[#A98556]/20 text-[#354B5D] px-2.5 py-0.5 rounded-[2px]">
                    {item.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#55534F] font-semibold">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#292D30] mb-3 group-hover:text-[#354B5D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#55534F] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDD7CC]">
                <span className="block text-[10px] uppercase tracking-wider text-[#292D30] font-semibold mb-1">
                  Focus Outcome
                </span>
                <span className="text-xs text-[#55534F] font-medium">
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
