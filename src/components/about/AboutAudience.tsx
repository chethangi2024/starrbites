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
      gsap.fromTo(
        ".audience-quadrant-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const audiences = [
    {
      num: "01",
      title: "Smart Investors",
      profile: "Documented Land Ownership",
      description:
        "Buyers evaluating regional growth fundamentals, corridor connectivity, and transparent title documentation for enduring capital preservation.",
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
        "Professionals and families looking for a dedicated retreat away from Bengaluru—whether crafting a personal farmhouse at Tiiger Trail or exploring quiet countryside acreage.",
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
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Who We Serve
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Designed for Considered{" "}
            <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
              Land Ownership
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
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
              className="audience-quadrant-card bg-[#FFFFFF] p-8 sm:p-10 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD7CC]">
                  <span className="text-2xl font-serif font-semibold bg-[#A98556]/20 text-[#354B5D] px-3 py-1 rounded-[2px]">
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] bg-[#354B5D]/10 text-[#354B5D] px-2.5 py-1 rounded-[2px] font-semibold">
                    {item.profile}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-normal text-[#292D30] mb-4 group-hover:text-[#354B5D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#55534F] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-[#DDD7CC]">
                <span className="block text-[11px] uppercase tracking-wider text-[#292D30] font-semibold mb-3">
                  Tailored Considerations
                </span>
                <ul className="space-y-2 text-xs text-[#292D30] font-medium">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A98556]" />
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
