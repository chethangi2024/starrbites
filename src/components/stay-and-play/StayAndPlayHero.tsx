"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Layers, Clock, FileText } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface StayAndPlayHeroProps {
  onRegisterInterest: () => void;
}

export function StayAndPlayHero({ onRegisterInterest }: StayAndPlayHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.12 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.55"
        )
        .fromTo(
          blueprintRef.current,
          { opacity: 0, scale: 0.98, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.95 },
          "-=0.65"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToConcept = () => {
    const el = document.getElementById("stay-and-play-introduction");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0099FF] text-[#242424] border-b border-[#242424]/15 overflow-hidden"
      aria-labelledby="stay-and-play-hero-heading"
    >
      {/* Subtle architectural coordinate pattern */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Breadcrumb context */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#242424]/80">
          <Link href="/projects/" className="hover:underline font-semibold text-[#242424]">
            Our Projects
          </Link>
          <span>/</span>
          <span className="text-[#242424]">Stay and Play</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Project Editorial Hero (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-5">
              <div className="inline-flex items-center gap-3 bg-[#FDFBFF]/95 backdrop-blur-sm px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm">
                <SectionEyebrow theme="charcoal" line={false}>
                  A STARRBITES DEVELOPMENT
                </SectionEyebrow>
              </div>
            </div>

            <h1
              id="stay-and-play-hero-heading"
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-medium text-[#242424] leading-[1.08] tracking-[-0.02em] mb-4"
            >
              Stay and Play
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#242424] bg-[#EDC455] px-3.5 py-1 rounded-[2px] inline-block w-fit mb-6 shadow-sm">
              A Different Way to Experience Leisure and Living.
            </p>

            <div ref={copyRef} className="space-y-6 max-w-[640px]">
              <p className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed">
                Stay and Play is a distinct development in the Starrbites portfolio, conceived
                around active recreation, leisure stays, and thoughtfully planned community spaces.
                Designed as a purposeful retreat environment, the project brings together time away
                and shared experiences under Starrbites&apos; disciplined planning standards.
              </p>

              {/* Primary Enquiry CTA + Secondary Scroll */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={onRegisterInterest}
                  withArrow
                >
                  Register Your Interest
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleScrollToConcept}
                  className="gap-2"
                >
                  <span>Explore the Concept</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Status Strip */}
              <div className="pt-8 mt-4 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#242424] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#0099FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Project Category
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Recreational &amp; Hospitality-Led Development
                    </span>
                  </div>
                </div>

                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#EDC455]/35 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Documentation Status
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Master Plan &amp; Dossier in Preparation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Architectural Blueprint / Coordinate-Frame Visual (5 Cols) */}
          <div ref={blueprintRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-[2px] overflow-hidden shadow-2xl border-2 border-[#FDFBFF] bg-[#242424] p-6 sm:p-8 flex flex-col justify-between">
              {/* Architectural Blueprint Coordinate Grid */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0099FF_1px,transparent_1px),linear-gradient(to_bottom,#0099FF_1px,transparent_1px)] [background-size:32px_32px]"
                aria-hidden="true"
              />
              {/* Subtle Architectural Framing Lines */}
              <div
                className="absolute inset-6 border border-[#EDC455]/30 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Coordinate Header */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#FDFBFF]/15">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] bg-[#EDC455] text-[#242424] px-3 py-1 rounded-[2px] font-semibold">
                  STARRBITES PORTFOLIO • REF 02
                </span>
                <span className="font-mono text-[11px] text-[#FDFBFF]/80 uppercase tracking-wider">
                  CONCEPT FRAME
                </span>
              </div>

              {/* Center Architectural Blueprint Representation */}
              <div className="relative z-10 my-auto py-8 px-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-[2px] bg-[#0099FF]/20 border border-[#0099FF] flex items-center justify-center mx-auto">
                  <Layers className="w-7 h-7 text-[#EDC455]" />
                </div>

                <div className="inline-block px-3 py-1 bg-[#FDFBFF]/10 border border-[#EDC455]/50 rounded-[2px]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#EDC455] font-semibold">
                    Official Project Visuals &amp; Master Plan in Preparation
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-[#FDFBFF] font-normal leading-snug">
                  Architectural Blueprint &amp; Spatial Planning Preview
                </h2>

                <p className="text-xs sm:text-sm text-[#FDFBFF]/80 font-light leading-relaxed max-w-xs mx-auto">
                  In accordance with Starrbites&apos; commitment to factual presentation, official
                  master-plan illustrations and site photography will be published here once
                  formally released.
                </p>
              </div>

              {/* Bottom Caption Box */}
              <div className="relative z-10 p-4 bg-[#FDFBFF]/95 backdrop-blur-md border-l-4 border-[#0099FF] rounded-[2px] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242424]">
                  <Clock className="w-3.5 h-3.5 text-[#0099FF] shrink-0" />
                  <span>Official Project Visuals &amp; Master Plan in Preparation</span>
                </div>
                <p className="text-[11px] text-[#4A4A4A] mt-1">
                  Register your interest to receive the official project dossier upon release.
                </p>
              </div>
            </div>

            {/* Decorative Gold Offset Frame */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#EDC455] -z-10 rounded-[2px] hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

