"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        narrativeRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: narrativeRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
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
      id="project-story"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative (6 cols) */}
          <div ref={narrativeRef} className="lg:col-span-6 space-y-6">
            <SectionEyebrow theme="charcoal">The Project Story</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.14]">
              Where Nature and Purpose{" "}
              <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
                Find Common Ground
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
              In an era defined by urban densification, high-rise isolation, and
              frenetic city rhythms, Tiiger Trail was conceived as an intentional
              counterpoint. It is Starrbites’ inaugural plotted retreat—a physical
              manifestation of our belief that true luxury is measured in space,
              tranquility, and enduring land ownership.
            </p>

            <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
              Situated within the serene countryside of the Lepakshi corridor, the
              destination is crafted for families, nature enthusiasts, and thoughtful
              investors who desire more than a plot of land. Here, landowners gain
              the freedom to cultivate private farmhouses, plant organic orchards, or
              simply retreat into an unhurried landscape.
            </p>

            {/* Editorial Inset Box */}
            <div className="p-6 bg-[#F5F1E9] border-l-4 border-[#354B5D] rounded-sm">
              <span className="inline-block px-2 py-0.5 bg-[#A98556]/20 text-[10px] uppercase tracking-[0.16em] text-[#354B5D] font-semibold mb-2 rounded-xs">
                The Starrbites Difference
              </span>
              <p className="text-sm text-[#292D30] font-normal leading-relaxed">
                Every plot within Tiiger Trail is supported by clear title vetting,
                individual mutation documentation, and planned infrastructure designed
                to age gracefully alongside the surrounding environment.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Visual (6 cols) */}
          <div ref={imageRef} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-sm overflow-hidden shadow-xl border border-[#DDD7CC]">
              <Image
                src="/images/stock/landscapes/landscape-golden-hour-retreat.jpg"
                alt="Countryside retreat in golden sunlight amid mature greenery"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/45 via-transparent to-transparent pointer-events-none" />

              {/* Inset Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-[#FFFFFF]/95 backdrop-blur-md border-l-4 border-[#A98556] shadow-lg rounded-sm">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#354B5D] font-semibold mb-0.5">
                  Countryside Living
                </span>
                <p className="text-xs text-[#55534F] font-medium leading-snug">
                  Designed for quiet family retreats, wellness immersion, and natural privacy.
                </p>
              </div>
            </div>

            {/* Subtle Offset Frame Accent */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full border border-[#A98556]/70 -z-10 rounded-sm hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
