"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Compass,
  Trees,
  Layers,
  FileText,
  Clock,
  Check,
} from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface ProjectsShowcaseProps {
  onEnquireStayAndPlay?: () => void;
}

export function ProjectsShowcase({}: ProjectsShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".project-portfolio-panel");
      panels.forEach((panel, idx) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: idx * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tiigerTrailHighlights = [
    "Documented land titles with parent deed scrutiny and individual mutation records",
    "Situated near Lepakshi along the NH-44 North Bangalore–Andhra Pradesh corridor",
    "Gated estate perimeter, plantation avenues, and farmhouse concepts by Mayan Designs",
  ];

  const stayAndPlayHighlights = [
    "Distinct portfolio development conceived around active recreation and leisure stays",
    "Thoughtfully planned community spaces designed for shared and retreat experiences",
    "Detailed project specifications and master-plan documentation currently in preparation",
  ];

  return (
    <section
      ref={sectionRef}
      id="project-showcase"
      className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E6EC]"
      aria-labelledby="project-showcase-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Starrbites Developments
          </SectionEyebrow>
          <h2
            id="project-showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
          >
            Our Project Portfolio
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Explore our current and upcoming developments. Each project is presented with verified
            information and direct access to our Bengaluru advisory team.
          </p>
        </div>

        {/* Editorial Project Panels */}
        <div ref={cardsContainerRef} className="space-y-12 sm:space-y-16">
          {/* Project 01 — Tiiger Trail */}
          <article
            className="project-portfolio-panel bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            aria-labelledby="project-tiiger-trail-title"
          >
            {/* Left Visual Column (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#242424] overflow-hidden">
              <Image
                src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
                alt="Tiiger Trail — Plotted Nature and Farm-Resort Development near Lepakshi"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 via-[#242424]/20 to-transparent" />

              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] uppercase tracking-[0.16em] bg-[#EDC455] text-[#242424] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                  Project 01 • Flagship Development
                </span>
                <span className="text-[11px] bg-[#FDFBFF]/95 text-[#242424] px-2.5 py-1 rounded-[2px] font-semibold">
                  Phase I Active
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FDFBFF]/95 backdrop-blur-sm border-l-4 border-[#0099FF] rounded-[2px] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242424]">
                  <MapPin className="w-3.5 h-3.5 text-[#0099FF] shrink-0" />
                  <span>Near Lepakshi, off NH-44 (Karnataka–AP Growth Corridor)</span>
                </div>
                <p className="text-[11px] text-[#4A4A4A] mt-1">
                  Conceptual countryside landscape representation • North Bangalore–AP Axis
                </p>
              </div>
            </div>

            {/* Right Editorial Details Column (7 Cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs uppercase tracking-[0.16em] bg-[#0099FF]/15 text-[#242424] px-3 py-1 rounded-[2px] font-semibold mb-3">
                    Plotted Nature &amp; Farm-Resort Development
                  </span>
                  <h3
                    id="project-tiiger-trail-title"
                    className="text-3xl sm:text-4xl font-serif text-[#242424] font-semibold leading-tight"
                  >
                    Tiiger Trail
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-[#4A4A4A] mt-1">
                    Where Nature and Soul Meet — Near Lepakshi, off NH-44 (Karnataka–AP Growth
                    Corridor)
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
                  Tiiger Trail is a thoughtfully planned plotted development created for buyers
                  interested in countryside ownership, nature-led surroundings, and the freedom to
                  shape a personal retreat. Positioned along the NH-44 highway corridor near
                  Lepakshi, the project combines open green horizons with verified title and
                  mutation documentation.
                </p>

                {/* Key Verified Highlights */}
                <div className="space-y-3 pt-4 border-t border-[#E2E6EC]">
                  {tiigerTrailHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#0099FF]/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#242424]" />
                      </div>
                      <span className="text-sm text-[#242424] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Attribute Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2E6EC]">
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      Verified Title Records
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      NH-44 Growth Axis
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <Trees className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      Countryside Retreat
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 01 CTAs */}
              <div className="pt-8 mt-8 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="primary" size="md" href="/tiiger-trail/" withArrow>
                  Explore Tiiger Trail
                </Button>

                <a
                  href="https://tiigertrail.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#242424] bg-[#FDFBFF] border border-[#242424] hover:bg-[#EDC455] hover:border-[#EDC455] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF]"
                >
                  <span>Visit Tiiger Trail Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

          {/* Project 02 — Stay and Play */}
          <article
            className="project-portfolio-panel bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#EDC455] rounded-[2px] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            aria-labelledby="project-stay-and-play-title"
          >
            {/* Left Blueprint Coordinate Frame Column (5 Cols — No unrelated stock photo substituted) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#242424] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0099FF_1px,transparent_1px),linear-gradient(to_bottom,#0099FF_1px,transparent_1px)] [background-size:32px_32px]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] uppercase tracking-[0.16em] bg-[#0099FF] text-[#242424] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                  Project 02 • Portfolio Development
                </span>
                <span className="text-[11px] bg-[#FDFBFF]/15 text-[#FDFBFF] border border-[#FDFBFF]/25 px-2.5 py-1 rounded-[2px] font-medium">
                  Documentation in Preparation
                </span>
              </div>

              <div className="relative z-10 my-auto py-8 text-center max-w-sm mx-auto space-y-3">
                <div className="w-12 h-12 rounded-[2px] bg-[#EDC455]/20 border border-[#EDC455] flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6 text-[#EDC455]" />
                </div>
                <p className="text-base sm:text-lg font-serif text-[#FDFBFF] font-medium">
                  Stay and Play — Official Visuals &amp; Master Plan in Preparation
                </p>
                <p className="text-xs text-[#FDFBFF]/80 font-light leading-relaxed">
                  Approved architectural renderings, verified location coordinates, and official
                  master-plan illustrations will be published upon formal release.
                </p>
              </div>

              <div className="relative z-10 p-4 bg-[#FDFBFF]/95 backdrop-blur-sm border-l-4 border-[#EDC455] rounded-[2px] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242424]">
                  <Clock className="w-3.5 h-3.5 text-[#242424] shrink-0" />
                  <span>Detailed Specifications &amp; Master Plan Being Prepared</span>
                </div>
                <p className="text-[11px] text-[#4A4A4A] mt-1">
                  Architectural blueprint coordinate preview • Register for release updates
                </p>
              </div>
            </div>

            {/* Right Editorial Details Column (7 Cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs uppercase tracking-[0.16em] bg-[#EDC455]/35 text-[#242424] px-3 py-1 rounded-[2px] font-semibold mb-3">
                    Recreational &amp; Hospitality-Led Development
                  </span>
                  <h3
                    id="project-stay-and-play-title"
                    className="text-3xl sm:text-4xl font-serif text-[#242424] font-semibold leading-tight"
                  >
                    Stay and Play
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-[#4A4A4A] mt-1">
                    Active Recreation, Leisure Stays &amp; Planned Community Spaces
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
                  Stay and Play is a distinct development in the Starrbites portfolio conceived
                  around active recreation, leisure stays, and thoughtfully planned community
                  spaces. Detailed project specifications, verified location details, and
                  master-plan documentation are currently being prepared for formal release.
                </p>

                {/* Key Verified Notes */}
                <div className="space-y-3 pt-4 border-t border-[#E2E6EC]">
                  {stayAndPlayHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#EDC455]/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#242424]" />
                      </div>
                      <span className="text-sm text-[#242424] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2E6EC]">
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      Recreational Concept
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      Specs in Preparation
                    </span>
                  </div>
                  <div className="p-3.5 bg-[#F3F6FA] rounded-[2px] flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-xs font-semibold text-[#242424]">
                      Advisory Registration
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 02 CTA (Navigates to dedicated project detail page /projects/stay-and-play/) */}
              <div className="pt-8 mt-8 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Button variant="gold" size="md" href="/projects/stay-and-play/" withArrow>
                  Explore Stay and Play
                </Button>

                <span className="inline-flex items-center gap-2 text-xs text-[#4A4A4A] font-medium py-2">
                  <Clock className="w-3.5 h-3.5 text-[#0099FF] shrink-0" />
                  <span>View concept overview &amp; register interest for official release</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

