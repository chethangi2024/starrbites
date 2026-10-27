"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".principle-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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
      title: "Purposeful Planning",
      description:
        "Thoughtful consideration of how land is configured, naturally ventilated, accessed, and inhabited—ensuring each plot honors its surrounding topography.",
    },
    {
      num: "02",
      title: "Strategic Perspective",
      description:
        "Evaluating micro-locations, highway connectivity, industrial expansion zones, and upcoming infrastructure corridors for genuine long-term relevance.",
    },
    {
      num: "03",
      title: "Transparency & Trust",
      description:
        "Rigorous verification of parent deeds, government mutation clearances, certified boundary surveys, and candid buyer advisory at every touchpoint.",
    },
    {
      num: "04",
      title: "Lasting Value",
      description:
        "Creating tangible, inflation-resilient land assets that simultaneously enrich present weekend living and establish an enduring legacy for your family.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F6F6F4] relative border-t border-b border-[#E7E7E7]"
      aria-labelledby="philosophy-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Development Principles
          </SectionEyebrow>
          <h2
            id="philosophy-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18]"
          >
            The Principles Behind Our Stewardship
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-light mt-4 leading-relaxed">
            Every destination we develop is grounded in four foundational pillars designed to
            protect your investment and elevate your living experience.
          </p>
        </div>

        {/* 4 Editorial Principles Layout */}
        <div
          ref={itemsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {principles.map((item, idx) => (
            <div
              key={item.num}
              className="principle-item relative flex flex-col justify-between p-8 bg-white border border-[#E7E7E7] rounded-[2px] transition-all duration-300 hover:border-[#EDC455] hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0F0EF]">
                  <span className="text-2xl font-serif text-[#171C56] font-bold">
                    {item.num}
                  </span>
                  <span className="w-8 h-[1px] bg-[#EDC455]" />
                </div>
                <h3 className="text-xl font-serif text-[#171C56] font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent footer element */}
              <div className="pt-6 mt-8 border-t border-[#F0F0EF] text-[11px] uppercase tracking-wider text-[#8B6C20] font-medium">
                Pillar {idx + 1} • Starrbites Core
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
