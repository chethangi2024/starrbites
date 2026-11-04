"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".philosophy-editorial-item");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      num: "01",
      title: "Purposeful Planning",
      headline: "Thoughtful consideration of how land is organised and experienced.",
      description:
        "Whether planning a countryside plotted retreat or a recreational community, we pay close attention to natural contours, internal road hierarchy, green buffers, and shared spaces. We avoid arbitrary subdivision in favour of layouts that remain functional and welcoming over time.",
      metric: "Cohesive site planning",
    },
    {
      num: "02",
      title: "Strategic Perspective",
      headline: "Evaluating location, accessibility, surrounding development, and long-term relevance.",
      description:
        "Before committing to any site, we study highway connectivity, regional employment and institutional drivers, and civic infrastructure plans. This perspective ensures each project is situated in a corridor with practical accessibility and long-term relevance.",
      metric: "Corridor evaluation",
    },
    {
      num: "03",
      title: "Transparency and Trust",
      headline: "Clear communication, documentation, and responsible customer guidance.",
      description:
        "Real-estate ownership requires clear documentation. Across our projects, our legal and acquisition teams review parent deeds, survey boundaries, and mutation records so buyers and their independent advisors can verify every detail prior to purchase.",
      metric: "Documented due diligence",
    },
    {
      num: "04",
      title: "Lasting Value",
      headline: "Creating opportunities that consider lifestyle, ownership, and future possibilities.",
      description:
        "We measure a development by how well it serves its owners years after handover. By combining clear title records with considered site planning, we create projects intended to hold lasting personal and family significance.",
      metric: "Enduring ownership utility",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Core Principles
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15]">
              The Four Pillars That Shape{" "}
              <span className="italic font-light text-[#242424] border-b-2 border-[#EDC455]">
                Every Destination
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
            <p>
              These documented principles serve as the non-negotiable benchmark for
              every location we select, every master plan we design, and every buyer
              relationship we steward.
            </p>
          </div>
        </div>

        {/* Editorial Layout: Alternating Staggered Rows with Visual Accent */}
        <div ref={cardsRef} className="space-y-8 sm:space-y-12">
          {principles.map((item) => (
            <div
              key={item.num}
              className="philosophy-editorial-item bg-[#FDFBFF] border border-[#E2E6EC] p-8 sm:p-12 rounded-sm shadow-sm hover:border-[#0099FF] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Number & Principle Title (4 cols) */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E2E6EC] pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl font-serif font-semibold bg-[#EDC455]/40 text-[#242424] px-3 py-1 rounded-[2px]">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#242424] font-semibold">
                    Principle
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#242424] mb-3">
                  {item.title}
                </h3>
                <div className="inline-block bg-[#E6F4FF] px-3 py-1 text-[11px] uppercase tracking-wider text-[#242424] font-semibold rounded-sm">
                  {item.metric}
                </div>
              </div>

              {/* Right Column: Statement & In-depth Elaboration (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-serif text-[#242424] font-medium leading-snug mb-4">
                  “{item.headline}”
                </h4>
                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tactile Material Accent Strip */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[#FDFBFF] border-l-4 border-[#0099FF] border-y border-r border-[#E2E6EC] rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 relative aspect-[4/3] rounded-sm overflow-hidden hidden md:block">
            <Image
              src="/images/stock/textures/editorial-stone-light-shadow.jpg"
              alt="Tactile stone texture and sunlight"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
          <div className="md:col-span-9 space-y-2">
            <span className="inline-block text-[11px] uppercase tracking-[0.18em] bg-[#EDC455]/35 text-[#242424] px-2.5 py-0.5 rounded-[2px] font-semibold">
              Authentic Stewardship
            </span>
            <p className="text-base sm:text-lg font-serif text-[#242424] leading-relaxed">
              “Lasting quality in real-estate development is not found in superficial
              embellishments. It is found in clear documentation, thoughtful site planning, and
              spaces designed for meaningful long-term use.”
            </p>
            <span className="block text-xs text-[#4A4A4A] font-light pt-2">
              — Starrbites Development Charter
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
