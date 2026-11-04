"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Landmark, Navigation, Building2, Factory } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipLocation() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
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

  const corridorDrivers = [
    {
      icon: Navigation,
      title: "NH-44 National Highway Axis",
      description:
        "Direct arterial multi-lane connectivity connecting Bengaluru to the northern industrial corridors and international transit infrastructure.",
    },
    {
      icon: Building2,
      title: "National Academy (NACIN)",
      description:
        "Premier national training academy of customs, indirect taxes, and narcotics, driving institutional prestige and civic presence in the region.",
    },
    {
      icon: Factory,
      title: "Aerospace & Defence Corridor",
      description:
        "The designated Lepakshi industrial belt and Bharat Electronics Limited (BEL) advanced research zone fueling regional economic growth.",
    },
    {
      icon: Landmark,
      title: "Lepakshi Cultural Heritage",
      description:
        "Rich historical setting renowned for 16th-century Vijayanagara architecture, ancient temple monuments, and tranquil countryside culture.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="location"
      className="py-24 sm:py-32 bg-[#0099FF] text-[#242424] border-b border-[#242424]/15"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Regional Setting & Growth Axis
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.15] mb-6">
            The North Bangalore &{" "}
            <span className="italic font-light text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">
              Lepakshi Corridor
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed">
            Positioned along the vibrant Karnataka–Andhra Pradesh border corridor off
            the NH-44 highway, Tiiger Trail benefits from both rural serenity and
            state-backed institutional investments.
          </p>
        </div>

        {/* Featured Visual & Institutional Card */}
        <div
          ref={cardRef}
          className="bg-[#FDFBFF] border border-[#242424]/15 rounded-sm overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 mb-12"
        >
          {/* Left: Aerial Landscape View (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full">
            <Image
              src="/images/stock/landscapes/landscape-aerial-countryside.jpg"
              alt="Aerial countryside topography showcasing road networks and regional landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FDFBFF]/95 backdrop-blur-md rounded-sm border-l-4 border-[#0099FF]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#242424] font-semibold block mb-0.5">
                Topographical Scale
              </span>
              <p className="text-xs text-[#4A4A4A] font-medium leading-snug">
                Expansive countryside landscape anchored by major highway infrastructure.
              </p>
            </div>
          </div>

          {/* Right: Regional Drivers Grid (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#242424] mb-3">
                Strategic Regional Anchors
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed mb-8">
                The corridor surrounding Tiiger Trail is supported by planned government
                infrastructure, research hubs, and national transit networks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {corridorDrivers.map((driver, idx) => {
                  const Icon = driver.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="w-8 h-8 rounded-sm bg-[#0099FF]/15 flex items-center justify-center text-[#242424] border border-[#0099FF]/30">
                        <Icon className="w-4 h-4 text-[#242424]" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#242424]">
                        {driver.title}
                      </h4>
                      <p className="text-xs text-[#4A4A4A] font-light leading-relaxed">
                        {driver.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E2E6EC] text-xs text-[#4A4A4A] font-light">
              * Location positioning verified against official revenue maps and national highway corridor documentation.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
