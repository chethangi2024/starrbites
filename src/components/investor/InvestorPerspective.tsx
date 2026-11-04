"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

const PRINCIPLES = [
  {
    number: "01",
    title: "Purposeful Planning",
    subtitle: "Clear Development Concepts",
    description:
      "Every development is conceived around a defined long-term purpose—whether shaping an authentic nature-led plotted retreat or an active recreational community destination. We design spaces that remain functional, enduring, and contextually grounded.",
  },
  {
    number: "02",
    title: "Strategic Perspective",
    subtitle: "Disciplined Corridor Evaluation",
    description:
      "We evaluate land opportunities and emerging regional corridors with a multi-year outlook. By identifying infrastructure-backed growth axes, Starrbites focuses on developments positioned for sustained relevance.",
  },
  {
    number: "03",
    title: "Transparency and Trust",
    subtitle: "Documented Clarity",
    description:
      "Our business conduct prioritises verifiable information. From historical title scrutiny and revenue records to clear spatial boundaries, we ensure that stakeholders engage with full legal and statutory visibility.",
  },
  {
    number: "04",
    title: "Lasting Value",
    subtitle: "Responsible Stewardship",
    description:
      "We focus on responsible planning, environmentally conscious land integration, and disciplined community governance. Creating lasting value means shaping developments that future generations are proud to own and inhabit.",
  },
];

export function InvestorPerspective() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".investor-principle-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="investor-business-perspective"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FDFBFF] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="investor-perspective-heading"
    >
      <Container size="wide">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-20 gap-8 pb-10 border-b border-[#E2E6EC]">
          <div className="max-w-2xl">
            <SectionEyebrow theme="charcoal" className="mb-4">
              01 / OUR BUSINESS PERSPECTIVE
            </SectionEyebrow>
            <h2
              id="investor-perspective-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
            >
              A Thoughtful Approach to{" "}
              <span className="italic font-normal text-[#0099FF]">Real Estate Development</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light max-w-md leading-relaxed">
            Starrbites operates on four foundational principles that guide how we select land,
            structure partnerships, and develop destinations across our corporate portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRINCIPLES.map((item) => (
            <article
              key={item.number}
              className="investor-principle-card bg-[#F3F6FA] border border-[#E2E6EC] border-t-2 border-t-[#0099FF] p-8 rounded-[2px] flex flex-col justify-between hover:border-[#0099FF] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E6EC]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0099FF] font-semibold">
                    PRINCIPLE {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#EDC455] group-hover:bg-[#0099FF] transition-colors" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#4A4A4A] block mb-2">
                  {item.subtitle}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif text-[#242424] font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E6EC] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                  Starrbites Corporate
                </span>
                <span className="w-6 h-[2px] bg-[#EDC455] group-hover:w-10 group-hover:bg-[#0099FF] transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

