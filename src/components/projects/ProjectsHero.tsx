"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Layers, Compass } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface ProjectsHeroProps {
  onOpenEnquiry?: () => void;
}

export function ProjectsHero({ onOpenEnquiry }: ProjectsHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.95, delay: 0.15 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.55"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.97, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0 },
          "-=0.65"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToShowcase = () => {
    const el = document.getElementById("project-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0099FF] text-[#242424] border-b border-[#242424]/15 overflow-hidden"
      aria-labelledby="projects-hero-heading"
    >
      {/* Subtle architectural coordinate pattern */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Portfolio Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-3 bg-[#FDFBFF]/95 backdrop-blur-sm px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm">
                <SectionEyebrow theme="charcoal" line={false}>
                  OUR PROJECTS
                </SectionEyebrow>
              </div>
            </div>

            <h1
              id="projects-hero-heading"
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-medium text-[#242424] leading-[1.08] tracking-[-0.02em] mb-6 sm:mb-8 text-balance"
            >
              Developments Shaped{" "}
              <span className="italic font-normal text-[#242424] bg-[#EDC455] px-3.5 py-0.5 rounded-[2px] inline-block mt-1 shadow-sm">
                Around Purpose.
              </span>
            </h1>

            <div ref={copyRef} className="space-y-6 max-w-[640px]">
              <p className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed">
                Starrbites develops distinct land and lifestyle destinations through considered
                site planning, documented legal due diligence, and a long-term development
                perspective. Each project in our portfolio is conceived around a clear ownership
                purpose and regional context.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={handleScrollToShowcase}
                  className="gap-2"
                >
                  <span>Explore Our Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>

                {onOpenEnquiry && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={onOpenEnquiry}
                  >
                    Discuss an Enquiry
                  </Button>
                )}
              </div>

              {/* Quick Portfolio Summary Strip */}
              <div className="pt-8 mt-4 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#242424] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#0099FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Project 01 • Flagship
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Tiiger Trail
                    </span>
                    <span className="block text-xs text-[#4A4A4A] mt-0.5">
                      Plotted Nature &amp; Farm-Resort Development
                    </span>
                  </div>
                </div>

                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#EDC455]/35 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Project 02 • Portfolio
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Stay and Play
                    </span>
                    <span className="block text-xs text-[#4A4A4A] mt-0.5">
                      Recreational &amp; Hospitality-Led Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Introduction to the Portfolio (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-[2px] overflow-hidden shadow-2xl border-2 border-[#FDFBFF] bg-[#242424]">
              <Image
                src="/images/stock/architecture/architecture-estate-overlook.jpg"
                alt="Architectural perspective representing Starrbites thoughtfully planned developments"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/75 via-[#242424]/15 to-transparent pointer-events-none" />

              {/* Inset Portfolio Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#FDFBFF]/95 backdrop-blur-md border-l-4 border-[#0099FF] shadow-lg rounded-[2px]">
                <span className="inline-block text-[10px] uppercase tracking-[0.18em] bg-[#EDC455]/40 text-[#242424] px-2 py-0.5 rounded-[2px] font-semibold mb-1.5">
                  Starrbites Development Portfolio
                </span>
                <p className="text-xs sm:text-sm text-[#242424] font-medium leading-snug">
                  Two distinct developments guided by one disciplined standard of corridor
                  selection, title clarity, and site planning.
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

