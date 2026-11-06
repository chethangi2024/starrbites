"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps = {}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    registerGSAP();

    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Stage 1 to 6 Carefully Choreographed Entrance Sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stage 1: Background Reveal (slow atmospheric scale settle)
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.12, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 2.0, ease: "power2.out" }
      )
        // Overlay gradient smooth reveal
        .fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 },
          "-=1.6"
        )
        // Stage 2: Brand Eyebrow fade and move into position
        .fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=1.1"
        )
        // Stage 3: Main Heading staggered reveal
        .fromTo(
          headlineLine1Ref.current,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          headlineLine2Ref.current,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.7"
        )
        // Stage 4: Supporting Description fade in with subtle upward movement
        .fromTo(
          leadRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          "-=0.6"
        )
        // Stage 5: CTA Buttons reveal with subtle stagger
        .fromTo(
          actionsRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          "-=0.5"
        )
        // Stage 6: Supporting Visual Details (Scroll indicator)
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.3"
        );

      // Restrained Parallax depth on scroll
      gsap.to(bgImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const nextSection = document.getElementById("brand-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#292D30] pt-32 pb-20"
      aria-label="Welcome to Starrbites"
    >
      {/* Background Architectural Canvas with Refined Parallax Depth */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/stock/architecture/hero-contemporary-villa.jpg"
          alt="Contemporary estate architecture at twilight"
          fill
          priority
          className="object-cover object-center brightness-[0.45] contrast-[1.05]"
          sizes="100vw"
        />
      </div>

      {/* Multilayer Deep Slate Overlay & Vignette */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        {/* Vertical gradient: Deep Slate top, Charcoal bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#292D30]/85 via-[#354B5D]/65 to-[#292D30]/90" />
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(41,45,48,0.7)_100%)]" />
        {/* Architectural horizontal guide line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4C3A6]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 text-[#FFFFFF] mt-6 sm:mt-10">
        <div className="max-w-[920px]">
          {/* Stage 2: Eyebrow Badge */}
          <div ref={eyebrowRef} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 bg-[#FFFFFF]/10 backdrop-blur-md px-4 py-1.5 rounded-[2px] border border-[#DDD7CC]/20 border-l-4 border-l-[#A98556] shadow-sm">
              <SectionEyebrow theme="champagne" line={false}>
                STARRBITES REAL ESTATE DEVELOPMENTS
              </SectionEyebrow>
            </div>
          </div>

          {/* Stage 3: Main Heading with Staggered Kinetic Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-serif text-[#FFFFFF] font-medium tracking-tight leading-[1.1] mb-6 sm:mb-8 text-balance">
            <span ref={headlineLine1Ref} className="block text-[#FFFFFF]">
              Building Land.
            </span>
            <span
              ref={headlineLine2Ref}
              className="inline-block italic font-normal text-[#D4C3A6] mt-1 sm:mt-2"
            >
              Creating Legacy.
            </span>
          </h1>

          {/* Stage 4: Supporting Narrative */}
          <p
            ref={leadRef}
            className="text-base sm:text-lg md:text-xl text-[#EAE5DA] max-w-[680px] font-light leading-relaxed mb-10 sm:mb-12 text-balance"
          >
            Starrbites is a Bangalore-based real-estate development company creating thoughtfully
            planned destinations built on strategic growth corridors, uncompromising legal title
            scrutiny, and enduring generational value.
          </p>

          {/* Stage 5: Action CTAs */}
          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Button
              variant="onDark"
              size="lg"
              onClick={handleScrollDown}
              withArrow
            >
              Discover Starrbites
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/tiiger-trail/"
              withArrow
            >
              Explore Tiiger Trail
            </Button>
          </div>
        </div>
      </Container>

      {/* Stage 6: Subtle Animated Scroll Indicator */}
      <button
        ref={scrollIndicatorRef}
        onClick={handleScrollDown}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#EAE5DA] hover:text-[#FFFFFF] transition-colors focus:outline-none cursor-pointer group"
        aria-label="Scroll to company introduction"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono font-medium opacity-80 group-hover:opacity-100">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-[#DDD7CC]/40 flex items-start justify-center p-1 group-hover:border-[#D4C3A6] transition-colors">
          <span className="w-1 h-2 rounded-full bg-[#D4C3A6] animate-bounce" />
        </div>
      </button>
    </section>
  );
}
