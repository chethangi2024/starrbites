"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Compass, ShieldCheck, Trees } from "lucide-react";
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
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        <div
          ref={cardRef}
          className="bg-[#292D30] text-[#FFFFFF] border-t-4 border-[#A98556] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/85 via-transparent to-transparent lg:hidden" />

            {/* Inset Badge */}
            <div className="absolute top-6 left-6 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-sm border-l-4 border-[#A98556] shadow-md">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#354B5D] font-bold">
                Flagship Estate
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Connection (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <SectionEyebrow theme="gold" className="mb-4">
                Our Projects in Practice
              </SectionEyebrow>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FFFFFF] leading-tight mb-6">
                <span>Tiiger Trail —</span>{" "}
                <span className="italic font-normal text-[#A98556]">
                  Where Nature and Soul Meet
                </span>
              </h2>

              <p className="text-[#FFFFFF]/85 text-base sm:text-lg font-light leading-relaxed mb-8">
                Our development principles are best understood through the projects we bring forward.{" "}
                <strong className="font-medium text-[#FFFFFF]">Tiiger Trail</strong> serves as our
                flagship plotted nature destination near Lepakshi along the NH-44 North Bangalore
                growth corridor, combining countryside tranquility with certified titles and
                comprehensive due diligence.
              </p>

              {/* Verified Pillars for Flagship Tiiger Trail */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-8 border-y border-[#FFFFFF]/15 mb-8">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#A98556] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold mb-1">
                      North Bangalore Axis
                    </h4>
                    <p className="text-xs text-[#FFFFFF]/85 font-normal">
                      Positioned off NH-44 near Lepakshi growth corridor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#A98556] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold mb-1">
                      Documented Titles
                    </h4>
                    <p className="text-xs text-[#FFFFFF]/85 font-normal">
                      30-year parent deed scrutiny &amp; mutation records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trees className="w-5 h-5 text-[#A98556] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FFFFFF] font-semibold mb-1">
                      Farm Retreat
                    </h4>
                    <p className="text-xs text-[#FFFFFF]/85 font-normal">
                      Gated estate layout with curated farmhouse models
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
                    onScheduleVisit("Tiiger Trail — Flagship Project")
                  }
                >
                  Schedule Site Tour
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
