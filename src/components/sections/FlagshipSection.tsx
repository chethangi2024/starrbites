"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Compass, Trees, Check } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "Certified land titles with transparent parent deed records & independent mutation",
    "Prime positioning along the Karnataka–AP industrial & aerospace growth corridor",
    "Gated estate with wide plantation avenues, organic farm infrastructure & dedicated water",
    "Pre-planned vernacular farmhouse design models envisioned by Mayan Designs",
  ];

  return (
    <section
      id="flagship-project"
      ref={sectionRef}
      className="py-24 sm:py-36 bg-[#0F1238] text-white relative overflow-hidden"
      aria-labelledby="flagship-heading"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stock/landscapes/landscape-rolling-countryside.jpg"
          alt="Rolling green countryside and open horizon at Tiiger Trail"
          fill
          className="object-cover object-center brightness-[0.45] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1238]/95 via-[#0F1238]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1238] via-transparent to-[#0F1238]/80" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <SectionEyebrow theme="gold">OUR FLAGSHIP DEVELOPMENT</SectionEyebrow>

            <h2
              id="flagship-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-semibold tracking-tight leading-[1.12]"
            >
              <span className="text-white">Tiiger Trail —</span> <br />
              <span className="italic font-normal text-[#EDC455]">
                Where Nature and Soul Meet
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-[620px]">
              A signature countryside nature estate thoughtfully planned for those who seek a
              restorative connection with the earth, the freedom to craft a private retreat, and
              the enduring security of tangible land ownership.
            </p>

            {/* Core Feature Bullet Points */}
            <div className="space-y-3.5 pt-2 max-w-[600px]">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#EDC455]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#EDC455]" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 font-light leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="gold" size="lg" href="/tiiger-trail/">
                Discover Tiiger Trail
              </Button>
              <Button
                variant="inverted"
                size="lg"
                href="https://tiigertrail.com/"
                isExternal
                withArrow
              >
                Visit Dedicated Project Site
              </Button>
            </div>
          </div>

          {/* Right Column: Key Specifications Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div
              ref={cardRef}
              className="bg-[#0A0D28]/85 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-[2px] shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <span className="text-xs uppercase tracking-widest text-[#EDC455] font-semibold">
                  Phase I • Currently Active
                </span>
                <span className="text-xs text-white/85">Karnataka–AP Axis</span>
              </div>

              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-base font-semibold">
                      <span className="text-white">Clear Title Guarantee</span>
                    </h4>
                    <p className="text-white/85 text-xs sm:text-sm mt-1 leading-relaxed">
                      100% verified survey documents, clear lineage, and legal compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Compass className="w-6 h-6 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-base font-semibold">
                      <span className="text-white">Strategic Growth Belt</span>
                    </h4>
                    <p className="text-white/85 text-xs sm:text-sm mt-1 leading-relaxed">
                      Near NACIN, Lepakshi Aerospace Park, and upcoming BEL industrial corridor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Trees className="w-6 h-6 text-[#EDC455] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-base font-semibold">
                      <span className="text-white">Curated Farmhouse Living</span>
                    </h4>
                    <p className="text-white/85 text-xs sm:text-sm mt-1 leading-relaxed">
                      Spacious parcels crafted for private weekend villas and family retreats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                <span>Managed by Starrbites</span>
                <a
                  href="https://tiigertrail.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDC455] hover:text-[#FFE672] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  tiigertrail.com <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
