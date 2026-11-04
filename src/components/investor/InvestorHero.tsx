"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Layers, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface InvestorHeroProps {
  onStartEnquiry: () => void;
}

export function InvestorHero({ onStartEnquiry }: InvestorHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.12 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.55"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.98, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.95 },
          "-=0.65"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToPerspective = () => {
    const el = document.getElementById("investor-business-perspective");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0099FF] text-[#242424] border-b border-[#242424]/15 overflow-hidden"
      aria-labelledby="investor-hero-heading"
    >
      <div
        className="absolute inset-0 opacity-12 pointer-events-none bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-5">
              <div className="inline-flex items-center gap-3 bg-[#FDFBFF]/95 backdrop-blur-sm px-4 py-1.5 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm">
                <SectionEyebrow theme="charcoal" line={false}>
                  INVESTOR RELATIONS
                </SectionEyebrow>
              </div>
            </div>

            <h1
              id="investor-hero-heading"
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-serif font-medium text-[#242424] leading-[1.08] tracking-[-0.02em] mb-6 text-balance"
            >
              Building Relationships Around{" "}
              <span className="italic font-normal text-[#242424] bg-[#EDC455] px-3.5 py-0.5 rounded-[2px] inline-block mt-1 shadow-sm">
                Long-Term Development.
              </span>
            </h1>

            <div ref={copyRef} className="space-y-6 max-w-[640px]">
              <p className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed">
                Starrbites is a Bangalore-based real-estate development company building a growing
                portfolio of thoughtfully planned land and lifestyle destinations. We welcome
                conversations with investors, landowners, and strategic partners who wish to
                understand our development approach, regional diligence, and portfolio vision.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={onStartEnquiry}
                  withArrow
                >
                  Start an Investor Enquiry
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleScrollToPerspective}
                  className="gap-2"
                >
                  <span>Our Business Perspective</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Highlights strip */}
              <div className="pt-8 mt-4 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#242424] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#0099FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Corporate Focus
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Land &amp; Lifestyle Destinations
                    </span>
                  </div>
                </div>

                <div className="bg-[#FDFBFF]/95 p-4 rounded-[2px] border-l-4 border-[#EDC455] shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#EDC455]/35 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#242424]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#4A4A4A] font-semibold">
                      Advisory Standard
                    </span>
                    <span className="block text-sm font-serif font-semibold text-[#242424] mt-0.5">
                      Factual &amp; Documented Engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-[2px] overflow-hidden shadow-2xl border-2 border-[#FDFBFF] bg-[#242424]">
              <Image
                src="/images/stock/editorial/editorial-leadership-space.jpg"
                alt="Starrbites corporate advisory and executive consultation space"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 via-[#242424]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#FDFBFF]/95 backdrop-blur-md border-l-4 border-[#0099FF] shadow-lg rounded-[2px]">
                <span className="inline-block text-[10px] uppercase tracking-[0.18em] bg-[#EDC455]/40 text-[#242424] px-2 py-0.5 rounded-[2px] font-semibold mb-1.5">
                  Corporate Advisory Desk
                </span>
                <p className="text-xs sm:text-sm text-[#242424] font-medium leading-snug">
                  Bengaluru Headquarters • RMV 2nd Stage, HIG Dollars Colony. Facilitating structured consultations for investors and partners.
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#EDC455] -z-10 rounded-[2px] hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

