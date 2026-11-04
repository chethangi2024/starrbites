"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion } from "@/lib/animations";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection(_?: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.08, opacity: 0.8 },
        { scale: 1.0, opacity: 1, duration: 1.6, ease: "power2.out" }
      )
        .fromTo(
          ".hero-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=1.1"
        )
        .fromTo(
          headlineRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          leadRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          actionsRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("brand-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0099FF] pt-28 pb-16"
      aria-label="Welcome to Starrbites"
    >
      {/* Background Image Container with Sky Blue Brand Overlay */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        <Image
          src="/images/stock/architecture/hero-contemporary-villa.jpg"
          alt="Contemporary luxury estate architecture at twilight"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
          sizes="100vw"
        />
        {/* Multilayer Sky Blue Gradients for Crisp Charcoal Text Contrast (5.17:1) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0099FF] via-[#0099FF]/90 to-[#0099FF]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0099FF]/95 via-[#0099FF]/85 to-[#0099FF]/65" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 text-[#242424] mt-10 sm:mt-14">
        <div className="max-w-[880px]">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 bg-[#FDFBFF]/90 backdrop-blur-sm px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm">
              <SectionEyebrow theme="charcoal" line={false}>
                STARRBITES REAL ESTATE DEVELOPMENTS
              </SectionEyebrow>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#242424] font-medium tracking-tight leading-[1.08] mb-6 sm:mb-8 text-balance"
          >
            <span className="text-[#242424]">Building Land.</span> <br />
            <span className="italic font-normal text-[#242424] bg-[#EDC455] px-4 py-0.5 rounded-[2px] inline-block mt-2 shadow-sm">
              Creating Legacy.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={leadRef}
            className="text-base sm:text-lg md:text-xl text-[#242424] max-w-[680px] font-normal leading-relaxed mb-10 sm:mb-12 text-balance"
          >
            Starrbites is a Bangalore-based real-estate development company creating thoughtfully
            planned destinations and projects built on strategic location selection, clear
            documentation, and lasting ownership value.
          </p>

          {/* Actions */}
          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Button
              variant="gold"
              size="lg"
              onClick={handleScrollDown}
              className="group"
            >
              <span>Discover Starrbites</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#flagship-project"
            >
              Explore Our Projects
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#242424] hover:text-[#242424]/80 transition-colors focus:outline-none"
        aria-label="Scroll to company introduction"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
