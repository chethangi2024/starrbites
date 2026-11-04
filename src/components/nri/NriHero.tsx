"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ShieldCheck, Video, FileSearch } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToForm = () => {
    const el = document.getElementById("nri-enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0099FF] text-[#242424] border-b border-[#242424]/15 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionEyebrow theme="charcoal" className="mb-4 sm:mb-6">
              Starrbites | For Global Indians
            </SectionEyebrow>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-normal text-[#242424] leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8"
            >
              Closer to Your Roots. <br />
              <span className="italic font-light text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">
                Clearer About Your Next Step.
              </span>
            </h1>

            <p
              ref={copyRef}
              className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed max-w-[620px] mb-8 sm:mb-10"
            >
              Explore Starrbites&apos; approach to thoughtfully planned land
              destinations, wherever life takes you. Our Bengaluru advisory team can
              help you understand available project documentation, coordinate remote
              site reviews, and guide your enquiry from abroad.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={handleScrollToForm}
                className="gap-2"
              >
                Start an Enquiry <ArrowDown className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Explore Tiiger Trail
              </Button>
            </div>

            {/* Remote Advisory Badges */}
            <div className="pt-8 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                  <FileSearch className="w-4 h-4 text-[#242424]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#242424]">
                    Digital Due Diligence
                  </span>
                  <span className="text-xs text-[#242424]/85 font-normal">
                    Direct access to survey & title dossiers
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-4 h-4 text-[#242424]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#242424]">
                    Virtual Site Consultations
                  </span>
                  <span className="text-xs text-[#242424]/85 font-normal">
                    Live walkthroughs & remote briefing
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#242424]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#242424]">
                    Independent Counsel
                  </span>
                  <span className="text-xs text-[#242424]/85 font-normal">
                    Guidance on buyer legal verification
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Framing (5 cols) */}
          <div ref={imageRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl border-2 border-[#FDFBFF]">
              <Image
                src="/images/stock/architecture/architecture-minimalist-pavilion.jpg"
                alt="Contemporary minimalist architecture and serene landscape representing luxury retreat living"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/55 via-transparent to-transparent pointer-events-none" />

              {/* Inset Photo Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FDFBFF]/95 backdrop-blur-md border-l-4 border-[#0099FF] shadow-lg rounded-sm">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#242424] font-semibold mb-0.5">
                  Global Perspective
                </span>
                <p className="text-xs text-[#4A4A4A] font-medium leading-snug">
                  Securing enduring land legacy in India with complete transparency and peace of mind.
                </p>
              </div>
            </div>

            {/* Offset Decorative Gold Hairline Frame */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#EDC455] -z-10 rounded-sm hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
