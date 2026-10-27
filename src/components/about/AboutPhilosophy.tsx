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
        "Every hectare under our care is planned with meticulous attention to natural contouring, plantation avenues, circulation hierarchy, and future communal life. We avoid arbitrary plot demarcations in favour of cohesive, long-term spatial harmony.",
      metric: "Holistic master-planning",
    },
    {
      num: "02",
      title: "Strategic Perspective",
      headline: "Evaluating location, accessibility, surrounding development, and long-term relevance.",
      description:
        "We identify growth vectors anchored by high-speed expressways, regional infrastructure, and institutional investments. Our focus centers on corridors that compound in value over decades, not speculative short-term volatility.",
      metric: "High-growth corridor curation",
    },
    {
      num: "03",
      title: "Transparency and Trust",
      headline: "Clear communication, documentation, and responsible customer guidance.",
      description:
        "Land ownership demands absolute legal sanctity. From title histories to mutation clearances, agricultural compliance, and registration procedures, we provide buyers with complete documentary scrutiny before any commitment.",
      metric: "Complete documentary sanctity",
    },
    {
      num: "04",
      title: "Lasting Value",
      headline: "Creating opportunities that consider lifestyle, ownership, and future possibilities.",
      description:
        "We measure our success not by immediate sales velocity, but by the generational utility of the land. Whether cherished as a weekend sanctuary, an organic retreat, or a multi-generational family asset, value is cultivated to endure.",
      metric: "Intergenerational utility",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="py-24 sm:py-32 bg-[#F6F6F4] border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="navy" className="mb-4">
              Core Principles
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15]">
              The Four Pillars That Shape{" "}
              <span className="italic font-light text-[#8B6C20]">
                Every Destination
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            <p>
              These documented principles serve as the non-negotiable benchmark for
              every location we select, every master plan we design, and every buyer
              relationship we steward.
            </p>
          </div>
        </div>

        {/* Editorial Layout: Alternating Staggered Rows with Visual Accent */}
        <div ref={cardsRef} className="space-y-8 sm:space-y-12">
          {principles.map((item, idx) => (
            <div
              key={item.num}
              className="philosophy-editorial-item bg-white border border-[#E7E7E7] p-8 sm:p-12 rounded-sm shadow-sm hover:border-[#EDC455]/80 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Number & Principle Title (4 cols) */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E7E7E7] pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[#EDC455]">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C88218] font-semibold">
                    Principle
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#171C56] mb-3">
                  {item.title}
                </h3>
                <div className="inline-block bg-[#F6F6F4] px-3 py-1 text-[11px] uppercase tracking-wider text-[#171C56] font-medium rounded-sm">
                  {item.metric}
                </div>
              </div>

              {/* Right Column: Statement & In-depth Elaboration (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-serif text-[#171C56] font-medium leading-snug mb-4">
                  “{item.headline}”
                </h4>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tactile Material Accent Strip */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-white border border-[#E7E7E7] rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
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
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#C88218] font-semibold">
              Authentic Stewardship
            </span>
            <p className="text-base sm:text-lg font-serif text-[#171C56] leading-relaxed">
              “True luxury in land is not found in superficial embellishments. It is
              found in clean air, fertile soil, unquestioned legal ownership, and the
              thoughtful space to build a personal legacy.”
            </p>
            <span className="block text-xs text-[#555555] font-light pt-2">
              — Starrbites Corporate Stewardship Charter
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
