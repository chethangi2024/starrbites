"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Trees,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface FlagshipSectionProps {
  onOpenEnquiry?: (topic?: string) => void;
}

export function FlagshipSection({ onOpenEnquiry }: FlagshipSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tiigerTrailFeatures = [
    "Certified land titles with parent deed records & individual mutation documentation",
    "Positioned along the NH-44 North Bangalore–Lepakshi growth corridor near NACIN & BEL",
    "Gated estate layout with plantation avenues & farmhouse design models by Mayan Designs",
    "Underground infrastructure provisions with 24/7 security and dedicated property management",
  ];

  const estateStandards = [
    {
      title: "Documented Due Diligence",
      desc: "30-year title tracing, EC clearance, and revenue records verified by leading legal advocates.",
    },
    {
      title: "Ecological Integration",
      desc: "Native plantation buffers, natural water catchment retention, and low-density footprint.",
    },
    {
      title: "Strategic Highway Axis",
      desc: "Direct access off National Highway 44, positioned in Bangalore's primary northern growth corridor.",
    },
    {
      title: "Architectural Vision",
      desc: "Curated farmhouse typologies designed in collaboration with Mayan Designs for harmonious living.",
    },
  ];

  return (
    <section
      id="flagship-project"
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#354B5D] text-[#FFFFFF] relative overflow-hidden"
      aria-labelledby="flagship-heading"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
          alt="Rolling green countryside representing Starrbites land developments"
          fill
          className="object-cover object-center brightness-[0.25] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#292D30]/95 via-[#354B5D]/90 to-[#292D30]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292D30] via-transparent to-[#354B5D]/85" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-[780px] mb-14 sm:mb-16 space-y-5">
          <SectionEyebrow theme="champagne">OUR FLAGSHIP DEVELOPMENT</SectionEyebrow>

          <h2
            id="flagship-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-semibold tracking-tight leading-[1.12]"
          >
            <span>Tiiger Trail —</span>{" "}
            <span className="italic font-normal text-[#D4C3A6]">
              Where Nature and Soul Meet
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#EAE5DA] font-light leading-relaxed">
            Starrbites conceives thoughtfully planned destinations shaped around clear
            documentation, strategic regional corridors, and enduring lifestyle relevance. Our
            flagship plotted estate, <strong className="font-medium text-[#FFFFFF]">Tiiger Trail</strong>,
            exemplifies this standard.
          </p>
        </div>

        {/* Master Showcase Grid (12-Col Structure) */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Main Showcase Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] text-[#292D30] border-t-4 border-[#526B80] rounded-[2px] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Approved Project Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#292D30]">
                <Image
                  src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
                  alt="Tiiger Trail — Plotted nature and farm-resort destination near Lepakshi"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/85 via-[#292D30]/25 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-widest bg-[#354B5D] text-[#FFFFFF] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                    Flagship Project • Phase I Active
                  </span>
                  <span className="text-[11px] bg-[#F5F1E9] text-[#292D30] px-2.5 py-1 rounded-[2px] font-semibold border border-[#DDD7CC]">
                    Plotted Nature &amp; Farm Retreat
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-[#FFFFFF] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D4C3A6] shrink-0" />
                  <span>Near Lepakshi, off NH-44 (Karnataka–AP Growth Corridor)</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7 sm:p-9 space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#55534F] font-semibold block mb-1">
                    Signature Development • North Bangalore Axis
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold leading-snug">
                    A Curated Countryside Sanctuary for Discerning Landowners
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
                  A thoughtfully planned plotted development envisioned for those who seek a closer
                  connection with nature, the freedom to create a personal countryside retreat, and
                  documented long-term land ownership along the thriving North Bangalore–Lepakshi
                  corridor.
                </p>

                <div className="space-y-3 pt-3 border-t border-[#DDD7CC]">
                  {tiigerTrailFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#526B80]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#354B5D]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#292D30] font-normal leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Verified Pillars Mini-Row */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#DDD7CC]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#526B80] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#292D30]">Clear Titles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#526B80] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#292D30]">NH-44 Axis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trees className="w-4 h-4 text-[#526B80] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#292D30]">Farm Retreat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase CTAs */}
            <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-4 border-t border-[#DDD7CC] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F5F1E9]">
              <Button variant="primary" size="md" href="/tiiger-trail/" withArrow>
                Explore Tiiger Trail
              </Button>
              <a
                href="https://tiigertrail.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap flex-nowrap text-xs font-semibold text-[#292D30] hover:text-[#526B80] py-2 px-3 border border-[#DDD7CC] bg-[#FFFFFF] rounded-[2px] transition-colors shrink-0"
              >
                <span className="whitespace-nowrap">Visit tiigertrail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A98556] shrink-0" />
              </a>
            </div>
          </div>

          {/* Standards & Highlights Column (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] text-[#292D30] border-t-4 border-[#354B5D] rounded-[2px] shadow-2xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Sparkles className="w-4 h-4 text-[#A98556]" />
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#354B5D] font-semibold">
                  The Starrbites Planning Standard
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold leading-snug mb-4">
                Setting New Benchmarks for Countryside Land
              </h3>

              <p className="text-sm text-[#55534F] font-light leading-relaxed mb-6">
                Every square foot of Tiiger Trail is shaped by our uncompromising principles of legal
                due diligence, civil master planning, and long-term asset security.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#DDD7CC]">
                {estateStandards.map((std, idx) => (
                  <div key={idx} className="p-4 bg-[#F5F1E9] rounded-[2px] border border-[#DDD7CC]">
                    <h4 className="text-xs uppercase tracking-wider text-[#354B5D] font-semibold mb-1">
                      {std.title}
                    </h4>
                    <p className="text-xs text-[#55534F] font-light leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DDD7CC] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (onOpenEnquiry) {
                    onOpenEnquiry("Tiiger Trail — Flagship Project");
                  } else {
                    const el = document.getElementById("enquiry-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Schedule a Site Tour
              </Button>
              <Button variant="secondary" size="md" href="/contact-us/">
                Contact Advisors
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
