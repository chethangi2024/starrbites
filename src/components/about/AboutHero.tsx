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
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#F5F1E9] border-b border-[#DDD7CC] overflow-hidden"
    >
      {/* Subtle architectural background texture accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none bg-[radial-gradient(#354B5D_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionEyebrow theme="charcoal" className="mb-4 sm:mb-6">
              About Starrbites
            </SectionEyebrow>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-normal text-[#292D30] leading-[1.08] tracking-[-0.02em] mb-6 sm:mb-8"
            >
              Building Land. <br />
              <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5 inline-block mt-1">
                Creating Legacy.
              </span>
            </h1>

            <div
              ref={copyRef}
              className="space-y-5 text-base sm:text-lg text-[#55534F] font-light leading-relaxed max-w-[620px]"
            >
              <p>
                Starrbites is a Bangalore-based real-estate development company focused on
                conceiving and delivering thoughtfully planned projects that combine strategic
                location evaluation, purposeful site planning, transparent documentation, and
                long-term ownership value.
              </p>
              <p className="text-sm sm:text-base text-[#292D30] font-normal border-l-4 border-[#354B5D] pl-4 sm:pl-5">
                Across our development portfolio—anchored by our flagship plotted nature development,{" "}
                <strong className="font-semibold text-[#292D30]">Tiiger Trail</strong>—we approach every
                project with design discipline and documented legal clarity.
              </p>
            </div>

            {/* Quick Editorial Anchors */}
            <div className="mt-8 sm:mt-10 pt-8 border-t border-[#DDD7CC] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-[#A98556]/20 text-[#354B5D] px-2 py-0.5 rounded-[2px] font-semibold mb-1.5">
                  Headquarters
                </span>
                <span className="block text-sm font-semibold text-[#292D30]">
                  Bengaluru, India
                </span>
              </div>
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-[#354B5D]/10 text-[#354B5D] px-2 py-0.5 rounded-[2px] font-semibold mb-1.5">
                  Flagship Estate
                </span>
                <span className="block text-sm font-semibold text-[#292D30]">
                  Tiiger Trail Destination
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-[#A98556]/20 text-[#354B5D] px-2 py-0.5 rounded-[2px] font-semibold mb-1.5">
                  Core Discipline
                </span>
                <span className="block text-sm font-semibold text-[#292D30]">
                  Planned Land Stewardship
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Framing (5 cols) */}
          <div className="lg:col-span-5 relative" ref={imageWrapperRef}>
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl border border-[#DDD7CC]">
              <Image
                src="/images/stock/architecture/architecture-modern-facade.jpg"
                alt="Starrbites land development and contemporary architectural planning"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset Brand Caption */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FFFFFF]/95 backdrop-blur-md border-l-4 border-[#A98556] shadow-lg">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#354B5D] font-semibold mb-0.5">
                  Design &amp; Spatial Intent
                </span>
                <p className="text-xs text-[#55534F] font-medium leading-snug">
                  Harmonizing natural topography with long-term infrastructure.
                </p>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#A98556] -z-10 rounded-sm hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
