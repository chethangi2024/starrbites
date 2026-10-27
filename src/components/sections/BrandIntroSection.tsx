"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function BrandIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textColRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textColRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        imageColRef.current,
        { scale: 1.05, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageColRef.current,
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
      id="brand-intro"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (7 Cols) */}
          <div ref={textColRef} className="lg:col-span-7 space-y-6 sm:space-y-8">
            <SectionEyebrow theme="navy">About Starrbites</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18] text-balance">
              Land is more than an asset. <br />
              <span className="italic font-normal text-[#8B6C20]">
                It is the beginning of something lasting.
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-[620px]">
              <p>
                Starrbites is a Bangalore-based land development firm focused on creating
                high-potential plotted communities that bring together thoughtful spatial design,
                rigorous legal transparency, and future-ready infrastructure.
              </p>
              <p>
                With deep roots in spatial design, planning, and real estate execution, we believe
                true land stewardship considers the complete ownership journey. We shape spaces
                designed to endure across generations.
              </p>
            </div>

            {/* Architectural Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E7E7E7]">
              <div>
                <span className="block text-2xl font-serif text-[#171C56] font-bold">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#555555] font-medium mt-1 block">
                  Clear Titled Mutation
                </span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-[#171C56] font-bold">Bengaluru</span>
                <span className="text-xs uppercase tracking-wider text-[#555555] font-medium mt-1 block">
                  Design & Ops Hub
                </span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-[#171C56] font-bold">Nature-Led</span>
                <span className="text-xs uppercase tracking-wider text-[#555555] font-medium mt-1 block">
                  Sustainable Horizons
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="secondary" href="/about-us/" withArrow>
                Discover Our Heritage
              </Button>
            </div>
          </div>

          {/* Right Image Composition (5 Cols) */}
          <div className="lg:col-span-5">
            <div
              ref={imageColRef}
              className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-[#E7E7E7] rounded-[2px] shadow-[0_16px_40px_rgba(23,28,86,0.06)]"
            >
              <Image
                src="/images/stock/architecture/architecture-modern-facade.jpg"
                alt="Contemporary architecture with landscaped outdoor grounds"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171C56]/30 via-transparent to-transparent pointer-events-none" />
              {/* Subtle architectural badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm border-l-2 border-[#EDC455] text-xs text-[#242424]">
                <p className="font-semibold text-[#171C56]">Architectural Stewardship</p>
                <p className="text-[#555555] mt-0.5">Balancing natural ecology with modern built form.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
