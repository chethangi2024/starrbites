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
  Layers,
  Clock,
  FileText,
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
  ];

  const stayAndPlayNotes = [
    "Distinct recreational and hospitality-oriented development in the Starrbites portfolio",
    "Official site coordinates, master plan, and statutory specifications pending formal release",
    "Dedicated project showcase planned for publication at /projects/stay-and-play/",
  ];

  const handleStayAndPlayEnquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry("Stay and Play — Upcoming Project Enquiry");
      return;
    }
    const enquiryEl = document.getElementById("enquiry-section");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="flagship-project"
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#242424] text-[#FDFBFF] relative overflow-hidden"
      aria-labelledby="flagship-heading"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
          alt="Rolling green countryside representing Starrbites land developments"
          fill
          className="object-cover object-center brightness-[0.38] contrast-[1.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242424]/95 via-[#242424]/90 to-[#242424]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-[#242424]/85" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-[780px] mb-14 sm:mb-16 space-y-5">
          <SectionEyebrow theme="gold">OUR DEVELOPMENT PORTFOLIO</SectionEyebrow>

          <h2
            id="flagship-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FDFBFF] font-semibold tracking-tight leading-[1.12]"
          >
            <span className="text-[#FDFBFF]">Distinct Projects,</span>{" "}
            <span className="italic font-normal text-[#EDC455]">
              One Standard of Planning
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FDFBFF]/90 font-light leading-relaxed">
            Starrbites develops thoughtfully planned projects shaped around clear documentation,
            strategic regional corridors, and enduring lifestyle relevance—spanning our flagship
            plotted estate, <strong className="font-medium text-[#FDFBFF]">Tiiger Trail</strong>,
            and our upcoming development,{" "}
            <strong className="font-medium text-[#FDFBFF]">Stay and Play</strong>.
          </p>
        </div>

        {/* Two-Project Showcase Grid (Preserving 12-Col Structure) */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Project 01: Tiiger Trail (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FDFBFF] text-[#242424] border-t-4 border-[#0099FF] rounded-[2px] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Approved Project Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#242424]">
                <Image
                  src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
                  alt="Tiiger Trail — Plotted nature and farm-resort destination near Lepakshi"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/75 via-[#242424]/20 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-widest bg-[#EDC455] text-[#242424] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                    Flagship Project • Phase I Active
                  </span>
                  <span className="text-[11px] bg-[#FDFBFF]/95 text-[#242424] px-2.5 py-1 rounded-[2px] font-semibold">
                    Plotted Nature &amp; Farm Retreat
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-[#FDFBFF] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#EDC455] shrink-0" />
                  <span>Near Lepakshi, off NH-44 (Karnataka–AP Growth Corridor)</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7 sm:p-9 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#4A4A4A] font-semibold block mb-1">
                    Project 01 • Plotted Nature &amp; Farm-Resort Development
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold leading-snug">
                    Tiiger Trail —{" "}
                    <span className="italic font-normal text-[#4A4A4A]">
                      Where Nature and Soul Meet
                    </span>
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                  A thoughtfully planned plotted development envisioned for those who seek a closer
                  connection with nature, the freedom to create a personal countryside retreat, and
                  documented long-term land ownership along the North Bangalore–Lepakshi corridor.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#E2E6EC]">
                  {tiigerTrailFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#0099FF]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#242424]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#242424] font-normal leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Verified Pillars Mini-Row */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E2E6EC]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">Clear Titles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">NH-44 Axis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trees className="w-4 h-4 text-[#0099FF] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">Farm Retreat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 01 CTAs */}
            <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-4 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F3F6FA]">
              <Button variant="primary" size="md" href="/tiiger-trail/" withArrow>
                Explore Tiiger Trail
              </Button>
              <a
                href="https://tiigertrail.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#242424] hover:text-[#007ACC] py-2 px-3 border border-[#C8D0DA] bg-[#FDFBFF] rounded-[2px] transition-colors"
              >
                <span>Visit tiigertrail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project 02: Stay and Play (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FDFBFF] text-[#242424] border-t-4 border-[#EDC455] rounded-[2px] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div>
              {/* Architectural Blueprint Placeholder Header (No unrelated stock photo substituted) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#242424] flex flex-col justify-between p-6 border-b border-[#E2E6EC]">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0099FF_1px,transparent_1px),linear-gradient(to_bottom,#0099FF_1px,transparent_1px)] [background-size:32px_32px]"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-widest bg-[#0099FF] text-[#242424] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                    Portfolio Development • Upcoming Release
                  </span>
                  <span className="text-[11px] bg-[#FDFBFF]/15 text-[#FDFBFF] border border-[#FDFBFF]/25 px-2.5 py-1 rounded-[2px] font-medium">
                    Recreational &amp; Hospitality Concept
                  </span>
                </div>

                <div className="relative z-10 my-auto py-4 text-center max-w-md mx-auto">
                  <div className="w-10 h-10 rounded-[2px] bg-[#EDC455]/20 border border-[#EDC455] flex items-center justify-center mx-auto mb-2.5">
                    <Layers className="w-5 h-5 text-[#EDC455]" />
                  </div>
                  <p className="text-sm font-serif text-[#FDFBFF] font-medium">
                    Stay and Play — Official Visuals &amp; Master Plan in Preparation
                  </p>
                  <p className="text-[11px] text-[#FDFBFF]/75 font-light mt-1">
                    Verified project renderings and approved site photography will be published upon
                    formal documentation release.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-xs text-[#FDFBFF]/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#EDC455] shrink-0" />
                  <span>Location &amp; Corridor Details Subject to Official Release</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7 sm:p-9 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#4A4A4A] font-semibold block mb-1">
                    Project 02 • Recreational &amp; Hospitality-Led Development
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold leading-snug">
                    Stay and Play —{" "}
                    <span className="italic font-normal text-[#4A4A4A]">
                      Active Leisure &amp; Retreat Living
                    </span>
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                  A distinct project in the Starrbites development portfolio conceived to bring
                  together leisure stays, active recreational experiences, and thoughtfully planned
                  community spaces. Detailed specifications and approved project documentation are
                  being prepared for release.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#E2E6EC]">
                  {stayAndPlayNotes.map((note, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#EDC455]/35 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#242424]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#242424] font-normal leading-snug">
                        {note}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Transparency Status Row */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E2E6EC]">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">Distinct Project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">Dossier Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#242424] shrink-0" />
                    <span className="text-[11px] font-semibold text-[#242424]">Upcoming Page</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 02 CTAs (Non-navigating placeholder + Enquiry trigger) */}
            <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-4 border-t border-[#E2E6EC] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F3F6FA]">
              <Button variant="gold" size="md" onClick={handleStayAndPlayEnquiry}>
                Request Project Updates
              </Button>
              <span
                className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[#4A4A4A] py-2 px-3 border border-[#E2E6EC] bg-[#FDFBFF] rounded-[2px] select-none"
                title="Dedicated project route /projects/stay-and-play/ is scheduled for Phase 4 release"
              >
                <Clock className="w-3.5 h-3.5 text-[#0099FF]" />
                <span>Project Page Coming Soon</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
