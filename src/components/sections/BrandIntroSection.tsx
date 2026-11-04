"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
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
      className="py-24 sm:py-32 bg-[#FDFBFF] relative overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (7 Cols) */}
          <div ref={textColRef} className="lg:col-span-7 space-y-6 sm:space-y-8">
            <SectionEyebrow theme="charcoal">About Starrbites</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#242424] font-semibold tracking-tight leading-[1.18] text-balance">
              Land is more than an asset. <br />
              <span className="italic font-normal text-[#242424] border-b-2 border-[#EDC455] pb-0.5">
                It is the beginning of something lasting.
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-[620px]">
              <p>
                Starrbites is a Bangalore-based real-estate development company dedicated to
                conceiving and delivering thoughtfully planned land and lifestyle destinations.
                Drawing on our roots in spatial design, project planning, and legal due diligence,
                we approach development with a focus on how land is acquired, organized, and
                experienced over time.
              </p>
              <p>
                Rather than treating plots as isolated transactions, we evaluate infrastructure
                corridors, verify parent deeds and mutation records, and plan cohesive layouts built
                for long-term relevance. Today, our growing project portfolio includes{" "}
                <strong className="font-semibold text-[#242424]">Tiiger Trail</strong> along the
                North Bangalore–Lepakshi corridor and{" "}
                <strong className="font-semibold text-[#242424]">Stay and Play</strong>, a distinct
                recreational living development.
              </p>
            </div>

            {/* Corporate Positioning Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E2E6EC]">
              <div className="border-l-2 border-[#0099FF] pl-4">
                <span className="block text-xl sm:text-2xl font-serif text-[#242424] font-bold">
                  Bengaluru
                </span>
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium mt-1 block">
                  Corporate Headquarters
                </span>
              </div>
              <div className="border-l-2 border-[#EDC455] pl-4">
                <span className="block text-xl sm:text-2xl font-serif text-[#242424] font-bold">
                  Multi-Project
                </span>
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium mt-1 block">
                  Development Portfolio
                </span>
              </div>
              <div className="border-l-2 border-[#0099FF] pl-4">
                <span className="block text-xl sm:text-2xl font-serif text-[#242424] font-bold">
                  Title Clarity
                </span>
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium mt-1 block">
                  Documented Due Diligence
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="primary" href="/about-us/" withArrow>
                About Starrbites
              </Button>
            </div>
          </div>

          {/* Right Image Composition (5 Cols) */}
          <div className="lg:col-span-5">
            <div
              ref={imageColRef}
              className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-[#E2E6EC] rounded-[2px] shadow-[0_16px_40px_rgba(0,153,255,0.08)]"
            >
              <Image
                src="/images/stock/architecture/architecture-modern-facade.jpg"
                alt="Contemporary architecture with landscaped outdoor grounds"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/40 via-transparent to-transparent pointer-events-none" />
              {/* Subtle architectural badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FDFBFF]/95 backdrop-blur-sm border-l-4 border-[#0099FF] text-xs text-[#242424] shadow-md">
                <p className="font-semibold text-[#242424]">Architectural Stewardship</p>
                <p className="text-[#4A4A4A] mt-0.5">Balancing natural ecology with modern built form.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
