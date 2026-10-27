"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Heart, Sun, Globe2 } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const audiences = [
    {
      id: "investors",
      icon: ShieldCheck,
      tag: "Capital Appreciation",
      title: "Smart Investors",
      subtitle: "Strategic corridor positioning with transparent legal title mutations.",
      body: "For investors seeking wealth preservation in inflation-resistant, tangible assets. We focus strictly on emerging infrastructure corridors—such as the Lepakshi-NH44 industrial belt—ensuring capital appreciation driven by genuine regional expansion.",
      image: "/images/stock/architecture/architecture-minimalist-pavilion.jpg",
      highlight: "100% Certified Mutation & Clear Deed Lineage",
    },
    {
      id: "second-home",
      icon: Heart,
      tag: "Sanctuary & Leisure",
      title: "Second-Home Seekers",
      subtitle: "A peaceful weekend haven away from the congestion of Bengaluru.",
      body: "Escape the velocity of urban life to slow down and create lasting family memories. Our plots offer expansive space to craft a bespoke farmhouse, private gardens, and an authentic weekend sanctuary surrounded by open horizons.",
      image: "/images/stock/landscapes/landscape-golden-hour-retreat.jpg",
      highlight: "Pre-Designed Villa Blueprints by Mayan Designs",
    },
    {
      id: "nature-lovers",
      icon: Sun,
      tag: "Restorative Living",
      title: "Nature-Led Buyers",
      subtitle: "Wide-open skies, fresh air, and a deep, revitalizing bond with the earth.",
      body: "Immerse yourself in clean countryside air, native vegetation, and serene starlit nights. Designed for wellness-conscious individuals and families seeking an active outdoor lifestyle rooted in balance and natural quiet.",
      image: "/images/stock/landscapes/landscape-rolling-countryside.jpg",
      highlight: "Organic Farming Infrastructure & Plantation Avenues",
    },
    {
      id: "nri-buyers",
      icon: Globe2,
      tag: "Global Ownership",
      title: "NRI & Global Buyers",
      subtitle: "Seamless remote exploration with complete legal and advisory support.",
      body: "For overseas Indians looking to anchor a generational asset back home. We provide comprehensive due diligence, virtual video site inspections, and clear guidance aligned with FEMA regulations.",
      image: "/images/stock/editorial/editorial-leadership-space.jpg",
      highlight: "End-to-End Remote Acquisition Support",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-labelledby="audience-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <SectionEyebrow theme="navy" className="mb-4">
            Curated Ownership
          </SectionEyebrow>
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18]"
          >
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-light mt-4 leading-relaxed">
            Every buyer comes to Starrbites with a unique aspiration. We design land destinations
            tailored to your distinct life chapter and investment horizon.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 border-b border-[#E7E7E7] mb-12 scrollbar-none">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-[2px] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#171C56] text-white shadow-sm"
                    : "bg-[#F6F6F4] text-[#555555] hover:text-[#171C56] hover:bg-[#EEEEEC]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isSelected ? "text-[#EDC455]" : "text-[#555555]"}`}
                />
                <span>{aud.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Profile Detailed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F6F6F4] border border-[#E7E7E7] p-8 sm:p-12 rounded-[2px]">
          {/* Text Specification (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#8B6C20] bg-[#EDC455]/20 px-3 py-1 rounded-[2px]">
                {audiences[activeTab].tag}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#171C56] font-semibold">
              {audiences[activeTab].title}
            </h3>

            <p className="text-base sm:text-lg text-[#171C56] font-medium leading-relaxed">
              {audiences[activeTab].subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              {audiences[activeTab].body}
            </p>

            <div className="pt-4 border-t border-[#E7E7E7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-semibold text-[#171C56] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EDC455]" />
                {audiences[activeTab].highlight}
              </div>

              <Button variant="secondary" size="sm" href="/tiiger-trail/" withArrow>
                Explore Matching Opportunities
              </Button>
            </div>
          </div>

          {/* Contextual Image (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-[#E7E7E7] rounded-[2px] shadow-md">
              <Image
                src={audiences[activeTab].image}
                alt={audiences[activeTab].title}
                fill
                className="object-cover object-center transition-all duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
