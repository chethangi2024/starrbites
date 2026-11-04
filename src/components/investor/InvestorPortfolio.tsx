"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Layers, Clock, Check } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function InvestorPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".investor-project-panel",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F3F6FA] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="investor-portfolio-heading"
    >
      <Container size="wide">
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            02 / OUR DEVELOPMENT PORTFOLIO
          </SectionEyebrow>
          <h2
            id="investor-portfolio-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
          >
            Projects Across Distinct{" "}
            <span className="italic font-normal text-[#0099FF]">Development Concepts</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Starrbites focuses on developments with distinct ownership profiles and spatial
            programs, united by our rigorous standard of site diligence and long-term planning.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Project 01 — Tiiger Trail */}
          <article className="investor-project-panel bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
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
                  Flagship Development • Phase I Active
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FDFBFF]/95 backdrop-blur-sm border-l-4 border-[#0099FF] rounded-[2px] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242424]">
                  <MapPin className="w-3.5 h-3.5 text-[#0099FF] shrink-0" />
                  <span>Near Lepakshi, off NH-44 (Karnataka–AP Growth Corridor)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs uppercase tracking-[0.16em] bg-[#0099FF]/15 text-[#242424] px-3 py-1 rounded-[2px] font-semibold mb-3">
                    Plotted Nature &amp; Farm-Resort Development
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#242424] font-semibold leading-tight">
                    Tiiger Trail
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-[#4A4A4A] mt-1">
                    Near Lepakshi, off NH-44 (Karnataka–AP Growth Corridor)
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
                  Tiiger Trail is a thoughtfully planned plotted development created for buyers
                  interested in countryside ownership, nature-led surroundings, and the freedom to
                  shape a personal retreat. Positioned along the North Bangalore–Lepakshi corridor,
                  the development features verified title records, plantation avenues, and farmhouse
                  concepts by Mayan Designs.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#E2E6EC]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#0099FF]/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#242424]" />
                    </div>
                    <span className="text-sm text-[#242424]">
                      Certified land titles with parent deed scrutiny and mutation documentation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#0099FF]/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#242424]" />
                    </div>
                    <span className="text-sm text-[#242424]">
                      Highway connectivity along the emerging North Bangalore NH-44 growth axis
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E2E6EC] flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md" href="/tiiger-trail/" withArrow>
                  Explore Tiiger Trail
                </Button>
                <Button
                  variant="outlined"
                  size="md"
                  href="https://tiigertrail.com/"
                  isExternal
                  withArrow
                >
                  Visit Tiiger Trail Website
                </Button>
              </div>
            </div>
          </article>

          {/* Project 02 — Stay and Play */}
          <article className="investor-project-panel bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#EDC455] rounded-[2px] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#242424] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#0099FF_1px,transparent_1px),linear-gradient(to_bottom,#0099FF_1px,transparent_1px)] [background-size:32px_32px]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] uppercase tracking-[0.16em] bg-[#0099FF] text-[#242424] px-3 py-1 rounded-[2px] font-semibold shadow-sm">
                  Portfolio Development • Concept Stage
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
                  Detailed specifications, site disclosures, and master-plan documentation are being
                  compiled prior to formal public release.
                </p>
              </div>

              <div className="relative z-10 p-4 bg-[#FDFBFF]/95 backdrop-blur-sm border-l-4 border-[#EDC455] rounded-[2px] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242424]">
                  <Clock className="w-3.5 h-3.5 text-[#242424] shrink-0" />
                  <span>Detailed Specifications &amp; Master Plan Being Prepared</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs uppercase tracking-[0.16em] bg-[#EDC455]/35 text-[#242424] px-3 py-1 rounded-[2px] font-semibold mb-3">
                    Recreational &amp; Hospitality-Led Development
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#242424] font-semibold leading-tight">
                    Stay and Play
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-[#4A4A4A] mt-1">
                    Active Recreation, Leisure Stays &amp; Planned Community Spaces
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
                  Stay and Play is a distinct development in the Starrbites portfolio conceived
                  around active recreation, leisure stays, and thoughtfully planned community
                  spaces. Detailed project specifications and master-plan documentation are
                  currently being prepared for formal release.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#E2E6EC]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#EDC455]/40 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#242424]" />
                    </div>
                    <span className="text-sm text-[#242424]">
                      Conceived around active recreation and leisure stays in an unhurried setting
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#EDC455]/40 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#242424]" />
                    </div>
                    <span className="text-sm text-[#242424]">
                      Official project dossier and master-plan documentation currently in preparation
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E2E6EC] flex flex-wrap items-center gap-4">
                <Button variant="gold" size="md" href="/projects/stay-and-play/" withArrow>
                  Explore Stay and Play
                </Button>
                <span className="text-xs text-[#4A4A4A] font-medium py-2">
                  View dedicated project detail page and register interest
                </span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
