"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-editorial-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      num: "01",
      pillar: "Purposeful Planning",
      headline: "How Every Destination is Conceived",
      description:
        "Every Starrbites project begins with site-responsive land organization. Rather than imposing uniform grid blocks, we evaluate natural contours, solar orientation, internal road hierarchy, and green buffers to ensure spaces remain functional, tranquil, and sustainable decades from today.",
      focus: "Master planning, topography respect & circulation design",
    },
    {
      num: "02",
      pillar: "Strategic Perspective",
      headline: "Corridor Selection & Long-Term Growth",
      description:
        "We identify land in corridors benefiting from documented economic drivers, civic infrastructure, and expressway connectivity—such as the North Bangalore–Lepakshi corridor off NH-44. We evaluate regional trends before acquiring or recommending any site.",
      focus: "Highway connectivity, regional economic drivers & corridor study",
    },
    {
      num: "03",
      pillar: "Transparency & Trust",
      headline: "Documentary Clarity & Verification",
      description:
        "Land ownership is only as secure as its legal foundation. We conduct rigorous legal due diligence tracing parent deeds across 30 years, revenue mutations, RTC continuity, encumbrance certificates (EC), and boundary surveys. We encourage independent advocate verification.",
      focus: "30-year title search, RTC & mutation verification, EC clearance",
    },
    {
      num: "04",
      pillar: "Lasting Value",
      headline: "Enduring Utility & Stewardship",
      description:
        "Real-estate development should create assets that endure. Whether conceived for immediate retreat living, organic plantation cultivation, or long-term family wealth preservation, our projects balance tangible utility with documented security.",
      focus: "Lifestyle utility, capital appreciation & multi-generational value",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Development Philosophy
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15]">
            The Principles That Govern{" "}
            <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
              Every Decision We Make.
            </span>
          </h2>
          <p className="text-[#55534F] text-base sm:text-lg font-light mt-5 leading-relaxed">
            Our philosophy is built on four non-negotiable pillars. These are not marketing
            aspirations—they are operational standards that determine which parcels we acquire, how
            we structure documents, and how we plan our communities.
          </p>
        </div>

        {/* 4 Editorial Principles */}
        <div ref={itemsRef} className="space-y-6 sm:space-y-8">
          {principles.map((item) => (
            <div
              key={item.num}
              className="philosophy-editorial-item bg-[#FFFFFF] border border-[#DDD7CC] p-8 sm:p-12 rounded-sm shadow-sm hover:border-[#354B5D] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Number & Pillar (4 cols) */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#DDD7CC] pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-2xl sm:text-3xl font-serif font-semibold bg-[#A98556]/20 text-[#354B5D] px-3 py-1 rounded-[2px]">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#354B5D] font-semibold">
                    Core Standard
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#292D30] mb-3">
                  {item.pillar}
                </h3>
                <div className="inline-block bg-[#354B5D]/10 px-3 py-1 text-[11px] uppercase tracking-wider text-[#354B5D] font-semibold rounded-sm">
                  {item.focus}
                </div>
              </div>

              {/* Right Column: Narrative (8 cols) */}
              <div className="lg:col-span-8 space-y-3">
                <h4 className="text-lg sm:text-xl font-serif text-[#292D30] font-medium leading-snug mb-4">
                  {item.headline}
                </h4>
                <p className="text-[#55534F] text-sm sm:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Commitment Callout */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[#FFFFFF] border-l-4 border-[#354B5D] border-y border-r border-[#DDD7CC] rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <span className="inline-block text-[11px] uppercase tracking-[0.18em] bg-[#A98556]/20 text-[#354B5D] px-2.5 py-0.5 rounded-[2px] font-semibold mb-2">
              Our Development Promise
            </span>
            <p className="text-base sm:text-lg font-serif text-[#292D30] leading-relaxed">
              We never market or develop land without completed 30-year title tracing, certified
              revenue records, clear conversion or agricultural mutation documentation, and
              verified physical boundaries.
            </p>
          </div>
          <div className="md:col-span-4 text-left md:text-right">
            <span className="text-xs uppercase tracking-widest text-[#55534F] block">
              Bengaluru Corporate Office
            </span>
            <span className="text-sm font-semibold text-[#292D30] block mt-1">
              Documented Land Due Diligence
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
