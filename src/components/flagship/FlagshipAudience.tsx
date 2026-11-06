"use client";

import React, { useEffect, useRef } from "react";
import { Compass, ShieldCheck, Trees, Globe } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipAudience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".flagship-audience-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      icon: Compass,
      title: "Strategic Land Investors",
      subtitle: "Corridor Growth & Capital Preservation",
      description:
        "Buyers looking to participate in the proven long-term value creation along the NH-44 highway axis, supported by documented mutation records and high legal scrutiny.",
      points: [
        "Regional infrastructure connectivity (NH-44 / Lepakshi)",
        "30-year parent title scrutiny and individual mutation",
        "Clear demarcation and boundary governance",
      ],
    },
    {
      icon: Trees,
      title: "Weekend & Farm Retreat Seekers",
      subtitle: "Personal Sanctuaries Away from the City",
      description:
        "Professionals and families in Bengaluru desiring an accessible, peaceful countryside retreat where they can build a curated farmhouse and plant organic orchards.",
      points: [
        "Spacious plot footprints for private retreats",
        "Gated community safety and organized access",
        "Scenic rolling countryside surroundings",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Nature & Wellness Enthusiasts",
      subtitle: "Low-Density, Landscape-Led Living",
      description:
        "Individuals who prioritize expansive outdoor surroundings, unpolluted skies, indigenous tree cover, and a lifestyle that reconnects with the natural earth.",
      points: [
        "Contour-sensitive site planning and water retention",
        "Plantation avenues and native botanical buffer zones",
        "Clean pastoral air and tranquil setting",
      ],
    },
    {
      icon: Globe,
      title: "NRI & Remote Buyers",
      subtitle: "Remote Diligence & Virtual Onboarding",
      description:
        "Overseas Indians seeking transparent, well-documented land assets in India with clear verification protocols, digital dossiers, and structured consultation.",
      points: [
        "Digital access to verified legal dossiers",
        "Virtual site walkthrough coordination",
        "Dedicated advisory assistance from Bengaluru",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="audiences"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Audience Relevance
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Who Might Consider{" "}
            <span className="italic font-light text-[#55534F]">
              Tiiger Trail?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
            Tiiger Trail is intentionally developed for buyers with distinct long-term
            objectives, united by a desire for transparent ownership, environmental
            peace, and purposeful land stewardship.
          </p>
        </div>

        {/* 2x2 Distinct Layout Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flagship-audience-card bg-[#F5F1E9] p-8 sm:p-10 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#354B5D]/10 border border-[#354B5D]/20 flex items-center justify-center text-[#354B5D] group-hover:bg-[#354B5D] group-hover:text-[#FFFFFF] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-normal text-[#292D30]">
                        {item.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-[#55534F] font-medium block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#55534F] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DDD7CC]">
                  <span className="block text-[11px] uppercase tracking-wider text-[#292D30] font-semibold mb-3">
                    Project Alignment
                  </span>
                  <ul className="space-y-2 text-xs text-[#292D30] font-normal">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A98556]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
