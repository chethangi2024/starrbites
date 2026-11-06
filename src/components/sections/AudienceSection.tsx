"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Heart, Sun, Globe2 } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const audiences = [
    {
      id: "investors",
      icon: ShieldCheck,
      tag: "Considered Land Ownership",
      title: "Smart Investors",
      subtitle: "Evaluating corridor fundamentals and documented title clarity across projects.",
      body: "For buyers interested in understanding tangible land ownership and long-term regional relevance. Across our project portfolio, we focus on highway connectivity, surrounding infrastructure activity, and verified parent deed and mutation records.",
      image: "/images/stock/architecture/architecture-minimalist-pavilion.jpg",
      highlight: "Verified Parent Deeds & Mutation Documentation",
    },
    {
      id: "second-home",
      icon: Heart,
      tag: "Retreat & Leisure",
      title: "Second-Home Seekers",
      subtitle: "Thoughtfully planned destinations away from urban density.",
      body: "Whether envisioning a private countryside farmhouse at Tiiger Trail or exploring tranquil retreat living, our developments are planned for families and individuals seeking space and nature outside the city.",
      image: "/images/stock/landscapes/landscape-golden-hour-retreat.jpg",
      highlight: "Planned Estate Layouts & Retreat Concepts",
    },
    {
      id: "nature-lovers",
      icon: Sun,
      tag: "Outdoor Connection",
      title: "Nature-Led Buyers",
      subtitle: "Open skies, generous plot boundaries, and landscape-sensitive planning.",
      body: "Designed for buyers who value low-density layouts, plantation avenues, and a closer everyday relationship with the outdoors—supported by organized site access and long-term layout stewardship.",
      image: "/images/stock/landscapes/landscape-rolling-countryside.jpg",
      highlight: "Low-Density Master Planning & Green Buffers",
    },
    {
      id: "nri-buyers",
      icon: Globe2,
      tag: "Overseas Guidance",
      title: "NRI & Global Buyers",
      subtitle: "Clear information and structured coordination when exploring from abroad.",
      body: "For overseas Indian buyers evaluating land and real-estate opportunities in India. Our Bengaluru advisory desk assists with initial consultations, digital document review, virtual walkthrough coordination, and procedural guidance.",
      image: "/images/stock/editorial/editorial-leadership-space.jpg",
      highlight: "Structured Remote Advisory & Document Review",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F5F1E9] relative overflow-hidden"
      aria-labelledby="audience-heading"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-14 sm:mb-16">
          <SectionEyebrow theme="slate" className="mb-4">
            Curated Ownership
          </SectionEyebrow>
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292D30] font-semibold tracking-tight leading-[1.18]"
          >
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-[#55534F] font-light mt-4 leading-relaxed">
            Every buyer approaches real-estate and land ownership with a distinct objective. Our
            development portfolio is planned to serve four primary buyer profiles.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 border-b border-[#DDD7CC] mb-12 scrollbar-none">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-[2px] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap flex-nowrap shrink-0 transition-all duration-200 cursor-pointer leading-none ${
                  isSelected
                    ? "bg-[#354B5D] text-[#FFFFFF] shadow-sm"
                    : "bg-[#EAE5DA] text-[#55534F] hover:text-[#292D30] hover:bg-[#DDD7CC]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#D4C3A6]" : "text-[#77736C]"}`}
                />
                <span className="whitespace-nowrap">{aud.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Profile Detailed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#FFFFFF] border border-[#DDD7CC] p-8 sm:p-12 rounded-[2px] shadow-sm">
          {/* Text Specification (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#354B5D] bg-[#EAE5DA] border-l-2 border-[#526B80] px-3 py-1 rounded-[2px]">
                {audiences[activeTab].tag}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#292D30] font-semibold">
              {audiences[activeTab].title}
            </h3>

            <p className="text-base sm:text-lg text-[#292D30] font-medium leading-relaxed">
              {audiences[activeTab].subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
              {audiences[activeTab].body}
            </p>

            <div className="pt-4 border-t border-[#DDD7CC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-semibold text-[#292D30] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A98556]" />
                {audiences[activeTab].highlight}
              </div>

              <Button variant="primary" size="sm" href="/tiiger-trail/" withArrow>
                Explore Tiiger Trail
              </Button>
            </div>
          </div>

          {/* Contextual Image (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-[#DDD7CC] rounded-[2px] shadow-md">
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
