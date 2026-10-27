"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Trees, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface FlagshipHeroProps {
  onOpenEnquiry: () => void;
}

export function FlagshipHero({ onOpenEnquiry }: FlagshipHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.2 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
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
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-16 bg-[#171C56] text-white overflow-hidden"
    >
      {/* Background Image with Deep Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/landscapes/landscape-foggy-green-hills.jpg"
          alt="Tiiger Trail nature landscape - misty hills and countryside"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Layered cinematic gradients for readable high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171C56]/90 via-[#171C56]/70 to-[#171C56]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171C56] via-transparent to-black/40" />
      </div>

      {/* Main Content Area */}
      <Container size="wide" className="relative z-10 my-auto">
        <div className="max-w-[880px]">
          <SectionEyebrow theme="gold" className="mb-4 sm:mb-6">
            The Starrbites Flagship
          </SectionEyebrow>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-[-0.02em] text-white mb-6 sm:mb-8"
          >
            Space to Grow. <br />
            <span className="italic font-light text-[#EDC455]">
              Land to Belong.
            </span>
          </h1>

          <p
            ref={copyRef}
            className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-[680px] mb-8 sm:mb-10"
          >
            Tiiger Trail is Starrbites’ signature plotted destination near the
            heritage enclave of Lepakshi along the North Bangalore infrastructure
            corridor. Designed for those who seek peaceful countryside living,
            rigorous title diligence, and a vision for lasting generational value.
          </p>

          {/* Dual CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Button
              variant="gold"
              size="lg"
              href="https://tiigertrail.com/"
              isExternal
              withArrow
            >
              Discover Tiiger Trail
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
      </Container>

      {/* Verified Project Spec Bar at Bottom */}
      <div ref={statsRef} className="relative z-10 border-t border-white/15 pt-8 mt-12 sm:mt-16">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-1">
                  Regional Axis
                </span>
                <p className="text-xs sm:text-sm text-white/80 font-normal">
                  North Bangalore / Lepakshi Corridor (Off NH-44)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Trees className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-1">
                  Destination Character
                </span>
                <p className="text-xs sm:text-sm text-white/80 font-normal">
                  Low-Density Countryside & Plantation Avenues
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-1">
                  Documentary Sanctity
                </span>
                <p className="text-xs sm:text-sm text-white/80 font-normal">
                  Clear Titles, Vetted RTCs & Individual Mutation
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
