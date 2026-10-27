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

export function HeroSection({ onExploreClick }: HeroSectionProps) {
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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1238] pt-24 pb-16"
      aria-label="Welcome to Starrbites"
    >
      {/* Background Image Container */}
      <div ref={bgImageRef} className="absolute inset-0 z-0">
        <Image
          src="/images/stock/architecture/hero-contemporary-villa.jpg"
          alt="Contemporary luxury estate architecture at twilight"
          fill
          priority
          className="object-cover object-center brightness-[0.72] contrast-[1.05]"
          sizes="100vw"
        />
        {/* Multilayer Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1238]/95 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1238]/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 text-white mt-12 sm:mt-16">
        <div className="max-w-[880px]">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-6 sm:mb-8">
            <SectionEyebrow theme="gold">
              THOUGHTFULLY PLANNED LAND DESTINATIONS
            </SectionEyebrow>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-medium tracking-tight leading-[1.08] mb-6 sm:mb-8 text-balance"
          >
            <span className="text-white">Building Land.</span> <br />
            <span className="italic font-normal text-[#EDC455]">Creating Legacy.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={leadRef}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-[680px] font-light leading-relaxed mb-10 sm:mb-12 text-balance"
          >
            Thoughtfully planned land destinations shaped by purposeful development, considered
            investment potential, and a vision for lasting value.
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
              variant="inverted"
              size="lg"
              href="#flagship-project"
            >
              Explore Tiiger Trail
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-[#EDC455] transition-colors focus:outline-none"
        aria-label="Scroll to company introduction"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
