"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

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
          imageWrapperRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1 },
          "-=0.7"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#F6F6F4] border-b border-[#E7E7E7] overflow-hidden"
    >
      {/* Subtle architectural background texture accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-3 pointer-events-none bg-[radial-gradient(#171C56_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionEyebrow theme="navy" className="mb-4 sm:mb-6">
              About Starrbites
            </SectionEyebrow>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-normal text-[#171C56] leading-[1.08] tracking-[-0.02em] mb-6 sm:mb-8"
            >
              Building Land. <br />
              <span className="italic font-light text-[#8B6C20]">
                Creating Legacy.
              </span>
            </h1>

            <div
              ref={copyRef}
              className="space-y-5 text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-[620px]"
            >
              <p>
                Starrbites is a Bangalore-based land development firm focused on
                curating plotted destinations that combine strategic location
                foresight, purposeful master planning, transparent documentation, and
                enduring ownership value.
              </p>
              <p className="text-sm sm:text-base text-[#242424] font-normal border-l-2 border-[#EDC455] pl-4 sm:pl-5">
                We believe land is far more than a financial transaction. When
                approached with intentional design and legal discipline, it becomes the
                quiet foundation for personal freedom, wellness, and generational
                heritage.
              </p>
            </div>

            {/* Quick Editorial Anchors */}
            <div className="mt-8 sm:mt-10 pt-8 border-t border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#8B6C20] font-semibold mb-1">
                  Headquarters
                </span>
                <span className="text-sm font-medium text-[#171C56]">
                  Bengaluru, India
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#8B6C20] font-semibold mb-1">
                  Flagship Destination
                </span>
                <span className="text-sm font-medium text-[#171C56]">
                  Tiiger Trail (Lepakshi)
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#8B6C20] font-semibold mb-1">
                  Core Discipline
                </span>
                <span className="text-sm font-medium text-[#171C56]">
                  Curated Plotted Living
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Framing (5 cols) */}
          <div className="lg:col-span-5 relative" ref={imageWrapperRef}>
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl border border-white/80">
              <Image
                src="/images/stock/architecture/architecture-modern-facade.jpg"
                alt="Starrbites land development and contemporary architectural planning"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171C56]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset Brand Caption */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md border border-[#E7E7E7] shadow-lg">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#C88218] font-semibold mb-0.5">
                  Design & Spatial Intent
                </span>
                <p className="text-xs text-[#171C56] font-medium leading-snug">
                  Harmonizing natural topography with long-term infrastructure.
                </p>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#EDC455]/40 -z-10 rounded-sm hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
