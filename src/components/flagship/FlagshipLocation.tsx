"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Compass, Landmark, Plane, ShieldCheck } from "lucide-react";
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
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corridorDrivers = [
    {
      icon: Compass,
      title: "NH-44 Highway Access",
      description:
        "Direct vehicular connectivity along India's premier north-south expressway corridor connecting Bengaluru to Hyderabad.",
    },
    {
      icon: Landmark,
      title: "National Institutions (NACIN & BEL)",
      description:
        "In close proximity to the National Academy of Customs, Indirect Taxes & Narcotics and Bharat Electronics Limited facilities.",
    },
    {
      icon: Plane,
      title: "Kempegowda Int'l Airport Access",
      description:
        "Seamless transit connection to Bengaluru International Airport via the signal-free NH-44 elevated expressway corridor.",
    },
    {
      icon: ShieldCheck,
      title: "Border Corridor Momentum",
      description:
        "Benefiting from interstate industrial zones, tourism corridors, and expanding civic investments between Karnataka and Andhra Pradesh.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="location"
      className="py-24 sm:py-32 bg-[#354B5D] text-[#FFFFFF] border-b border-[#FFFFFF]/15"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="gold" className="mb-4">
            Regional Setting &amp; Growth Axis
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FFFFFF] font-normal leading-[1.15] mb-6">
            The North Bangalore &amp;{" "}
            <span className="italic font-light text-[#A98556]">
              Lepakshi Corridor
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFFFFF]/85 font-light leading-relaxed">
            Positioned along the vibrant Karnataka–Andhra Pradesh border corridor off
            the NH-44 highway, Tiiger Trail benefits from both rural serenity and
            state-backed institutional investments.
          </p>
        </div>

        {/* Featured Visual & Institutional Card */}
        <div
          ref={cardRef}
          className="bg-[#FFFFFF] text-[#292D30] border border-[#DDD7CC] rounded-sm overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 mb-12"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FFFFFF]/95 backdrop-blur-md rounded-sm border-l-4 border-[#A98556]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#354B5D] font-semibold block mb-0.5">
                Topographical Scale
              </span>
              <p className="text-xs text-[#55534F] font-medium leading-snug">
                Expansive countryside landscape anchored by major highway infrastructure.
              </p>
            </div>
          </div>

          {/* Right: Regional Drivers Grid (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-normal text-[#292D30] mb-3">
                Strategic Regional Anchors
              </h3>
              <p className="text-xs sm:text-sm text-[#55534F] font-light leading-relaxed mb-8">
                The corridor surrounding Tiiger Trail is supported by planned government
                infrastructure, research hubs, and national transit networks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {corridorDrivers.map((driver, idx) => {
                  const Icon = driver.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="w-8 h-8 rounded-sm bg-[#354B5D]/10 flex items-center justify-center text-[#354B5D] border border-[#354B5D]/20">
                        <Icon className="w-4 h-4 text-[#354B5D]" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#292D30]">
                        {driver.title}
                      </h4>
                      <p className="text-xs text-[#55534F] font-light leading-relaxed">
                        {driver.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#DDD7CC] text-xs text-[#55534F] font-light">
              * Location positioning verified against official revenue maps and national highway corridor documentation.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
