"use client";

import React, { useEffect, useRef } from "react";
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
        "Thoughtful consideration of how every project is organized, accessed, and experienced—ensuring site layouts respect natural contours and practical long-term use.",
    },
    {
      num: "02",
      title: "Strategic Perspective",
      description:
        "Evaluating regional connectivity, highway axes, surrounding civic and industrial activity, and long-term relevance before selecting any development corridor.",
    },
    {
      num: "03",
      title: "Transparency and Trust",
      description:
        "Clear communication, verified parent deed and mutation documentation, accurate boundary records, and responsible buyer guidance at every stage.",
    },
    {
      num: "04",
      title: "Lasting Value",
      description:
        "Developing destinations that balance immediate lifestyle utility with enduring ownership relevance for individuals, families, and long-term investors.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F3F6FA] relative border-t border-b border-[#E2E6EC]"
      aria-labelledby="philosophy-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Development Philosophy
          </SectionEyebrow>
          <h2
            id="philosophy-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.18]"
          >
            The Principles Behind Every Starrbites Project
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Across our development portfolio, four core principles govern how we evaluate land,
            structure documentation, and plan each destination.
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
              className="principle-item relative flex flex-col justify-between p-8 bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] transition-all duration-300 hover:border-[#0099FF] hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EDF0F5]">
                  <span className="text-2xl font-serif text-[#242424] font-bold">
                    {item.num}
                  </span>
                  <span className="w-8 h-[2px] bg-[#EDC455]" />
                </div>
                <h3 className="text-xl font-serif text-[#242424] font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent footer element */}
              <div className="pt-6 mt-8 border-t border-[#EDF0F5] flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#242424] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0099FF]" />
                <span>Pillar {idx + 1} • Starrbites Core</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
