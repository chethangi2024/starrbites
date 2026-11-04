"use client";

import React, { useEffect, useRef } from "react";
import { TrendingUp, Home, Leaf, Globe } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipAudience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".flagship-audience-card");
      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
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
      icon: TrendingUp,
      title: "Smart Investors",
      subtitle: "Capital Preservation & Corridor Foresight",
      description:
        "For investors seeking titled land assets situated along an expanding industrial and highway axis, anchored by verifiable public infrastructure rather than speculative marketing promises.",
      points: [
        "Positioned on the NH-44 high-speed transit corridor",
        "Clear mutation records and transparent legal histories",
        "Disciplined land curation with zero ambiguous encumbrances",
      ],
    },
    {
      icon: Home,
      title: "Second-Home Seekers",
      subtitle: "Personal Family Sanctuaries & Retreats",
      description:
        "For families seeking a tranquil haven away from Bengaluru’s traffic and noise, providing ample plot space to build a custom farmhouse, plant gardens, and create lasting memories.",
      points: [
        "Spacious plot dimensions for private retreats",
        "Peaceful agrarian surroundings with unhurried living",
        "Managed estate perimeter and planned access roads",
      ],
    },
    {
      icon: Leaf,
      title: "Nature-Led Buyers",
      subtitle: "Ecological Immersion & Living Land",
      description:
        "For individuals who value clean air, night-sky stargazing, plantation avenues, and the therapeutic practice of tending to private orchards or weekend organic gardens.",
      points: [
        "Low-density layout preserving native flora",
        "Rich agricultural soil suitable for horticulture",
        "Unobstructed countryside vistas and pure atmosphere",
      ],
    },
    {
      icon: Globe,
      title: "NRI & Global Buyers",
      subtitle: "Remote Diligence & Ancestral Connection",
      description:
        "For Non-Resident Indians looking to establish a secure land asset in South India, supported by digital documentation verification, virtual updates, and full FEMA compliance guidance.",
      points: [
        "Complete digital access to title search papers",
        "Dedicated virtual video tours and site progress reports",
        "Transparent banking and FEMA-compliant paperwork",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="audiences"
      className="py-24 sm:py-32 bg-[#FDFBFF] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Audience Relevance
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            Who Might Consider{" "}
            <span className="italic font-light text-[#4A4A4A]">
              Tiiger Trail?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
            Tiiger Trail is intentionally developed for buyers with distinct long-term
            objectives, united by a desire for transparent ownership, environmental
            peace, and purposeful land stewardship.
          </p>
        </div>

        {/* 2x2 Distinct Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flagship-audience-card bg-[#F3F6FA] p-8 sm:p-10 rounded-sm border border-[#E2E6EC] hover:border-[#0099FF] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#0099FF]/15 border border-[#0099FF]/30 flex items-center justify-center text-[#242424] group-hover:bg-[#0099FF] transition-colors">
                      <Icon className="w-5 h-5 text-[#242424]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-normal text-[#242424]">
                        {item.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2E6EC]">
                  <span className="block text-[11px] uppercase tracking-wider text-[#242424] font-semibold mb-3">
                    Project Alignment
                  </span>
                  <ul className="space-y-2 text-xs text-[#242424] font-normal">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455]" />
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
