"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Compass, ShieldCheck, Trees, Layers } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface AboutFlagshipProps {
  onScheduleVisit?: (topic?: string) => void;
}

export function AboutFlagship({ onScheduleVisit }: AboutFlagshipProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
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
      id="flagship-connection"
      className="py-24 sm:py-32 bg-[#FDFBFF] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        <div
          ref={cardRef}
          className="bg-[#242424] text-[#FDFBFF] border-t-4 border-[#0099FF] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl"
        >
          {/* Left Column: Image Feature (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
              alt="Tiiger Trail natural countryside landscape"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 via-transparent to-transparent lg:hidden" />

            {/* Inset Badge */}
            <div className="absolute top-6 left-6 bg-[#FDFBFF]/95 backdrop-blur-md px-4 py-2 rounded-sm border-l-4 border-[#0099FF] shadow-md">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#242424] font-bold">
                Starrbites Portfolio
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Connection (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <SectionEyebrow theme="gold" className="mb-4">
                Our Projects in Practice
              </SectionEyebrow>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FDFBFF] leading-tight mb-6">
                <span className="text-[#FDFBFF]">
                  Tiiger Trail &amp; Our Expanding Development Portfolio
                </span>
              </h2>

              <p className="text-[#FDFBFF]/90 text-base sm:text-lg font-light leading-relaxed mb-6">
                Our development principles are best understood through the projects we bring forward.{" "}
                <strong className="font-medium text-[#FDFBFF]">Tiiger Trail</strong> serves as our
                flagship plotted nature destination near Lepakshi along the NH-44 North Bangalore
                corridor, combining countryside surroundings with documented title and mutation
                records.
              </p>

              {/* Second Project Portfolio Note */}
              <div className="p-5 bg-[#FDFBFF]/5 border-l-4 border-[#EDC455] rounded-sm mb-8 flex items-start gap-3.5">
                <Layers className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#EDC455] font-semibold block mb-1">
                    Second Portfolio Project • Stay and Play
                  </span>
                  <p className="text-xs sm:text-sm text-[#FDFBFF]/85 font-light leading-relaxed">
                    Alongside Tiiger Trail, Starrbites is advancing{" "}
                    <strong className="font-medium text-[#FDFBFF]">Stay and Play</strong>, a
                    distinct recreational and hospitality-oriented development. Official site
                    coordinates, approved renderings, and project specifications will be published
                    upon formal documentation release.
                  </p>
                </div>
              </div>

              {/* Verified Pillars for Flagship Tiiger Trail */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-8 border-y border-[#FDFBFF]/15 mb-8">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FDFBFF] font-semibold mb-1">
                      North Bangalore Axis
                    </h4>
                    <p className="text-xs text-[#FDFBFF]/85 font-normal">
                      Tiiger Trail off NH-44 near Lepakshi growth corridor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FDFBFF] font-semibold mb-1">
                      Documented Titles
                    </h4>
                    <p className="text-xs text-[#FDFBFF]/85 font-normal">
                      Parent deed scrutiny &amp; individual mutation records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trees className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FDFBFF] font-semibold mb-1">
                      Distinct Formats
                    </h4>
                    <p className="text-xs text-[#FDFBFF]/85 font-normal">
                      Plotted nature estates &amp; planned recreational living
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="md"
                href="/tiiger-trail/"
                withArrow
              >
                Explore Tiiger Trail
              </Button>

              <Button
                variant="inverted"
                size="md"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Visit tiigertrail.com
              </Button>

              {onScheduleVisit && (
                <Button
                  variant="inverted"
                  size="md"
                  onClick={() =>
                    onScheduleVisit("Stay and Play — Upcoming Project Enquiry")
                  }
                >
                  Enquire About Stay and Play
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
