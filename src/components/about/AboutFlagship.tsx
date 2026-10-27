"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, Trees } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface AboutFlagshipProps {
  onScheduleVisit?: () => void;
}

export function AboutFlagship({ onScheduleVisit }: AboutFlagshipProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
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
      ref={sectionRef}
      id="flagship-connection"
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        <div
          ref={cardRef}
          className="bg-[#171C56] text-white rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl"
        >
          {/* Left Column: Image Feature (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
              alt="Tiiger Trail natural countryside landscape"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171C56]/80 via-transparent to-transparent lg:hidden" />

            {/* Inset Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-sm shadow-md">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#171C56] font-bold">
                Signature Flagship
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Connection (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <SectionEyebrow theme="gold" className="mb-4">
                Flagship Realization
              </SectionEyebrow>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight mb-6">
                <span className="text-white">Tiiger Trail — The Physical Expression of Our Vision</span>
              </h2>

              <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed mb-8">
                Tiiger Trail represents Starrbites’ land philosophy translated into a
                living reality. Positioned near the heritage enclave of Lepakshi along
                the high-growth North Bangalore corridor, it brings together peaceful
                countryside living, planned resort amenities, and unquestioned legal
                sanctity.
              </p>

              {/* Verified Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-8 border-y border-white/10 mb-8">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                      North Bangalore Axis
                    </h4>
                    <p className="text-xs text-white/85 font-normal">
                      NH-44 connectivity & aerospace growth corridor
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                      Certified Titles
                    </h4>
                    <p className="text-xs text-white/85 font-normal">
                      Clear individual mutation records & legal diligence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trees className="w-5 h-5 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">
                      Curated Living
                    </h4>
                    <p className="text-xs text-white/85 font-normal">
                      Plantation avenues, wellness amenities & retreat spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="md"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Visit Tiiger Trail Website
              </Button>

              {onScheduleVisit && (
                <Button
                  variant="inverted"
                  size="md"
                  onClick={onScheduleVisit}
                >
                  Schedule Site Tour
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
