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
      profile: "Corridor & Title Evaluation",
      description:
        "Buyers evaluating tangible land and real-estate assets positioned along established highway and industrial axes, backed by parent deed scrutiny and verified mutation documentation.",
      points: [
        "Regional highway and infrastructure corridors",
        "Documented mutation and parent deed review",
        "Long-term ownership fundamentals",
      ],
    },
    {
      num: "02",
      title: "Second-Home Seekers",
      profile: "Countryside & Recreational Retreats",
      description:
        "Professionals and families looking for a dedicated retreat away from Bengaluru—whether crafting a personal farmhouse at Tiiger Trail or exploring leisure-led living through Stay and Play.",
      points: [
        "Generous plot boundaries and open layouts",
        "Organized internal access and site planning",
        "Accessible regional driving corridors",
      ],
    },
    {
      num: "03",
      title: "Nature-Led Buyers",
      profile: "Open Horizons & Low-Density Living",
      description:
        "Individuals who value clean air, tree-lined avenues, and a quieter connection with the outdoors that conventional high-density urban developments rarely offer.",
      points: [
        "Low-density master-planned layouts",
        "Plantation avenues and natural topography",
        "Open countryside surroundings",
      ],
    },
    {
      num: "04",
      title: "NRI & Global Buyers",
      profile: "Remote Documentation & Advisory",
      description:
        "Overseas Indian buyers seeking clear information, digital access to available project records, virtual walkthrough coordination, and structured purchase guidance from our Bengaluru team.",
      points: [
        "Digital access to available title dossiers",
        "Virtual site walkthrough coordination",
        "Guidance on applicable regulatory procedures",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="audiences"
      className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Who We Serve
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            Designed for Considered{" "}
            <span className="italic font-light text-[#242424] border-b-2 border-[#EDC455]">
              Land Ownership
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
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
              className="audience-quadrant-card bg-[#FDFBFF] p-8 sm:p-10 rounded-sm border border-[#E2E6EC] hover:border-[#0099FF] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2E6EC]">
                  <span className="text-2xl font-serif font-semibold bg-[#EDC455]/40 text-[#242424] px-3 py-1 rounded-[2px]">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] bg-[#E6F4FF] text-[#242424] px-2.5 py-1 rounded-[2px] font-semibold">
                    {item.profile}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-[#242424] mb-4 group-hover:text-[#007ACC] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-[#E2E6EC]">
                <span className="block text-[11px] uppercase tracking-wider text-[#242424] font-semibold mb-3">
                  Tailored Considerations
                </span>
                <ul className="space-y-2 text-xs text-[#242424] font-medium">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF]" />
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
