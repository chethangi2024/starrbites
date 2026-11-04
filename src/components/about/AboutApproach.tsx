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
      title: "Corridor Selection",
      description:
        "We evaluate regional land corridors situated along major transportation axes (such as the NH-44 North Bangalore–Lepakshi corridor), assessing highway access, surrounding civic and industrial activity, and long-term regional relevance.",
      deliverable: "Corridor connectivity and location evaluation",
    },
    {
      step: "02",
      phase: "Legal Due Diligence",
      title: "Title Diligence",
      description:
        "Our legal and acquisition specialists examine parent deeds, revenue records, encumbrance histories, mutation status, and survey boundaries to verify clear ownership documentation prior to project development.",
      deliverable: "Documented title and mutation verification",
    },
    {
      step: "03",
      phase: "Spatial Architecture",
      title: "Master Planning",
      description:
        "Rather than imposing arbitrary plot grids, we plan layouts that respect site topography, internal access roads, green buffers, and the specific lifestyle or recreational purpose of each development.",
      deliverable: "Purpose-built site layout and zoning",
    },
    {
      step: "04",
      phase: "Client Stewardship",
      title: "Transparent Buyer Facilitation",
      description:
        "From on-site visits and remote video consultations—where available for overseas buyers—to clear documentation review and registration guidance, our Bengaluru team supports buyers at every stage.",
      deliverable: "Clear documentation access and buyer guidance",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="py-24 sm:py-32 bg-[#FDFBFF] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Our Methodology
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            A Disciplined, Intentional Approach to{" "}
            <span className="italic font-light text-[#4A4A4A]">
              Land Development
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
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
              className="approach-step-card bg-[#F3F6FA] p-8 rounded-sm border-t-4 border-[#0099FF] border-x border-b border-[#E2E6EC] hover:border-[#EDC455] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2E6EC]">
                  <span className="text-xl font-serif font-semibold bg-[#EDC455]/40 text-[#242424] px-2.5 py-0.5 rounded-[2px]">
                    {item.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#4A4A4A] font-semibold">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#242424] mb-3 group-hover:text-[#007ACC] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E6EC]">
                <span className="block text-[10px] uppercase tracking-wider text-[#242424] font-semibold mb-1">
                  Focus Outcome
                </span>
                <span className="text-xs text-[#4A4A4A] font-medium">
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
