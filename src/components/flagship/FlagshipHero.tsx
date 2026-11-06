"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Compass, ShieldCheck, Trees } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface FlagshipHeroProps {
  onOpenEnquiry?: () => void;
}

export function FlagshipHero({ onOpenEnquiry }: FlagshipHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-16 bg-[#292D30] text-[#FFFFFF] overflow-hidden"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
          alt="Tiiger Trail countryside landscape near Lepakshi"
          fill
          priority
          className="object-cover object-center brightness-[0.3] contrast-[1.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#292D30]/95 via-[#292D30]/75 to-[#292D30]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292D30] via-transparent to-black/40" />
      </div>

      <Container size="wide" className="relative z-10 my-auto">
        <div className="max-w-[820px]">
          <SectionEyebrow theme="gold" className="mb-4 sm:mb-6">
            A Starrbites Flagship Development
          </SectionEyebrow>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] mb-6 sm:mb-8"
          >
            Where Nature and <br />
            <span className="italic font-light text-[#A98556]">
              Soul Meet
            </span>
          </h1>

          <div ref={copyRef}>
            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/85 font-light leading-relaxed max-w-[680px] mb-8 sm:mb-10">
              Tiiger Trail is a curated countryside and plotted nature retreat along the North
              Bangalore–Lepakshi corridor off NH-44. Conceived for quiet retreats, personal
              farmhouses, and verified long-term land ownership.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Visit tiigertrail.com
              </Button>
              <Button
                variant="inverted"
                size="lg"
                onClick={onOpenEnquiry}
              >
                Speak to Our Team
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Verified Project Spec Bar at Bottom */}
      <div ref={statsRef} className="relative z-10 border-t border-[#FFFFFF]/15 pt-8 mt-12 sm:mt-16">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#354B5D] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Compass className="w-4 h-4 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#A98556] font-semibold mb-1">
                  Regional Axis
                </span>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/85 font-normal">
                  North Bangalore / Lepakshi Corridor (Off NH-44)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#354B5D] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Trees className="w-4 h-4 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#A98556] font-semibold mb-1">
                  Destination Character
                </span>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/85 font-normal">
                  Low-Density Countryside &amp; Plantation Avenues
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#354B5D] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#A98556] font-semibold mb-1">
                  Documentary Sanctity
                </span>
                <p className="text-xs sm:text-sm text-[#FFFFFF]/85 font-normal">
                  Clear Titles, Vetted RTCs &amp; Individual Mutation
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
