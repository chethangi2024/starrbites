"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, ShieldCheck, FileText } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriFlagshipFeature() {
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
      id="flagship-feature"
      className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E6EC]"
    >
      <Container size="wide">
        <div
          ref={cardRef}
          className="bg-[#242424] text-[#FDFBFF] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border-t-4 border-[#0099FF]"
        >
          {/* Left Column: Landscape Visual (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
              alt="Conceptual rolling countryside landscape illustrating the natural setting of Tiiger Trail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 via-transparent to-transparent lg:hidden" />

            <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#FDFBFF]/95 backdrop-blur-md rounded-sm border-l-4 border-[#0099FF] text-left">
              <span className="text-[10px] uppercase tracking-wider text-[#242424] font-semibold block mb-0.5">
                Conceptual Landscape Context
              </span>
              <p className="text-[11px] text-[#4A4A4A] font-medium leading-snug">
                Peaceful agrarian setting characteristic of the Lepakshi countryside.
              </p>
            </div>
          </div>

          {/* Right Column: Project Intro for NRIs (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <SectionEyebrow theme="gold" className="mb-4">
                The Flagship Project
              </SectionEyebrow>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FDFBFF] font-normal leading-[1.15] mb-6">
                <span className="text-[#FDFBFF]">Tiiger Trail — A Nature-Led Destination</span>
              </h2>

              <p className="text-[#FDFBFF]/90 text-base sm:text-lg font-light leading-relaxed mb-6">
                For global Indians looking to maintain a meaningful connection with the
                soil of their homeland, Tiiger Trail offers a thoughtfully planned
                plotted retreat. Situated near Lepakshi off the NH-44 highway, the
                project pairs rural tranquility with documented land sanctity.
              </p>

              {/* 3 Verified Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-6 border-y border-[#FDFBFF]/15 mb-8">
                <div>
                  <div className="w-8 h-8 rounded-sm bg-[#0099FF] flex items-center justify-center mb-3">
                    <Compass className="w-4 h-4 text-[#242424]" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-[#EDC455] font-semibold mb-1">
                    North Bangalore Axis
                  </h4>
                  <p className="text-xs text-[#FDFBFF]/85 font-normal">
                    Direct access via the multi-lane NH-44 highway corridor
                  </p>
                </div>

                <div>
                  <div className="w-8 h-8 rounded-sm bg-[#EDC455] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#242424]" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-[#EDC455] font-semibold mb-1">
                    Clear Title Dossiers
                  </h4>
                  <p className="text-xs text-[#FDFBFF]/85 font-normal">
                    Multi-decade parent deeds & individual mutation vetting
                  </p>
                </div>

                <div>
                  <div className="w-8 h-8 rounded-sm bg-[#0099FF] flex items-center justify-center mb-3">
                    <FileText className="w-4 h-4 text-[#242424]" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-[#EDC455] font-semibold mb-1">
                    Remote Advisory
                  </h4>
                  <p className="text-xs text-[#FDFBFF]/85 font-normal">
                    Digital paperwork sharing and video tour facilitation
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Button
                variant="gold"
                size="md"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Explore Tiiger Trail Project Website
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
