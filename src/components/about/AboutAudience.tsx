"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutAudience() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".audience-quadrant-card");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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

  const audiences = [
    {
      num: "01",
      title: "Smart Investors",
      profile: "Strategic Land Asset Allocation",
      description:
        "Investors seeking genuine real estate security through titled land assets positioned along high-growth industrial and highway corridors, supported by clear documentation and transparent title histories.",
      points: [
        "Infrastructure-anchored growth corridors",
        "Clear mutation and unencumbered titles",
        "Disciplined entry valuations",
      ],
    },
    {
      num: "02",
      title: "Second-Home Seekers",
      profile: "Personal Weekend & Family Retreats",
      description:
        "Urban professionals and families seeking a serene sanctuary within comfortable driving distance of Bengaluru, combining countryside tranquility with managed estate infrastructure.",
      points: [
        "Expansive private plot boundaries",
        "Managed community maintenance",
        "Restful natural landscape surroundings",
      ],
    },
    {
      num: "03",
      title: "Nature-Led Buyers",
      profile: "Ecological Living & Open Horizons",
      description:
        "Individuals prioritizing fresh air, open skies, organic plantation avenues, and a daily connection with nature that conventional urban high-rises cannot deliver.",
      points: [
        "Low-density plotted layouts",
        "Native flora and biodiversity",
        "Unobstructed countryside vistas",
      ],
    },
    {
      num: "04",
      title: "NRI & Global Buyers",
      profile: "Remote Transparency & Confidence",
      description:
        "Non-Resident Indians and global citizens looking for transparent, remote-facilitated land investments with comprehensive legal scrutiny, digital video tours, and FEMA compliance support.",
      points: [
        "Remote digital documentation scrutiny",
        "Virtual walkthroughs and regular updates",
        "FEMA-compliant procedural assistance",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="audiences"
      className="py-24 sm:py-32 bg-[#F6F6F4] border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Who We Serve
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
            Designed for Considered{" "}
            <span className="italic font-light text-[#8B6C20]">
              Land Ownership
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Our developments cater to discerning individuals and families with
            distinct motivations, united by a shared appreciation for quality,
            transparency, and lasting land stewardship.
          </p>
        </div>

        {/* 2x2 Luxury Quadrant Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((item) => (
            <div
              key={item.num}
              className="audience-quadrant-card bg-white p-8 sm:p-10 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E7E7]">
                  <span className="text-3xl font-serif font-light text-[#EDC455] group-hover:text-[#C88218] transition-colors">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#C88218] font-semibold">
                    {item.profile}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-[#171C56] mb-4 group-hover:text-[#C88218] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-[#E7E7E7]">
                <span className="block text-[11px] uppercase tracking-wider text-[#171C56] font-semibold mb-3">
                  Tailored Considerations
                </span>
                <ul className="space-y-2 text-xs text-[#242424] font-medium">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
