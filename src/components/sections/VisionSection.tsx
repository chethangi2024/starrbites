"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
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
      className="py-24 sm:py-36 bg-[#171C56] text-white relative overflow-hidden"
      aria-labelledby="vision-heading"
    >
      {/* Subtle texture backdrop */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/stock/textures/editorial-refined-glass-stone.jpg"
          alt="Architectural texture"
          fill
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div ref={contentRef} className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <SectionEyebrow theme="gold" className="justify-center mb-4">
              Purpose & Direction
            </SectionEyebrow>
            <h2
              id="vision-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-semibold tracking-tight"
            >
              <span className="text-white">Our Vision & Mission</span>
            </h2>
          </div>

          {/* Split Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative">
            {/* Center Divider Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/15 -translate-x-1/2" />

            {/* Vision Column */}
            <div className="space-y-6 md:pr-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#EDC455] font-semibold">
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-snug">
                <span className="text-white">To become a globally trusted land development brand from India.</span>
              </h3>
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                Known for creating premium land destinations that shape sustainable communities,
                foster emotional well-being, and generate enduring, generational value for
                families worldwide.
              </p>
            </div>

            {/* Mission Column */}
            <div className="space-y-6 md:pl-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#EDC455]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#EDC455] font-semibold">
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-snug">
                <span className="text-white">To develop thoughtfully planned land destinations with absolute integrity.</span>
              </h3>
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                Combining transparent documentation, purposeful architectural design, and
                meaningful ownership opportunities that empower modern investors to build with
                uncompromised confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
