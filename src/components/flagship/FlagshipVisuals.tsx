"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function FlagshipVisuals() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".flagship-visual-card");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visuals = [
    {
      title: "Expansive Horizon & Rolling Meadows",
      category: "Conceptual Landscape Character",
      image: "/images/stock/landscapes/landscape-rolling-countryside.jpg",
      caption: "Vast open skies and gentle agrarian meadows characteristic of the Lepakshi countryside.",
    },
    {
      title: "Atmospheric Foothills & Morning Mist",
      category: "Environmental Microclimate",
      image: "/images/stock/landscapes/landscape-foggy-green-hills.jpg",
      caption: "Peaceful morning atmosphere and pristine air away from Bengaluru's urban center.",
    },
    {
      title: "Indoor-Outdoor Architectural Harmony",
      category: "Farmhouse Design Vision",
      image: "/images/stock/architecture/architecture-estate-overlook.jpg",
      caption: "Inspiration for private farm retreats integrating shaded verandas and natural stone.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="visuals"
      className="py-24 sm:py-32 bg-[#F6F6F4] border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="navy" className="mb-4">
              Visual Narrative
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15]">
              The Mood & Spirit of{" "}
              <span className="italic font-light text-[#8B6C20]">
                Tiiger Trail
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            <p>
              A visual exploration of the open landscapes, natural light, and
              unhurried pastoral setting that inspire our flagship plotted
              destination.
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Visual Gallery */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visuals.map((item, idx) => (
            <div
              key={idx}
              className="flagship-visual-card bg-white rounded-sm border border-[#E7E7E7] overflow-hidden shadow-sm hover:shadow-md hover:border-[#EDC455]/80 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAEAEA]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#171C56]/85 backdrop-blur-sm px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider text-white font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-normal text-[#171C56] mb-2 group-hover:text-[#8B6C20] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Architectural Disclaimer Note */}
        <div className="p-6 bg-white border border-[#E7E7E7] rounded-sm text-center max-w-[840px] mx-auto">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#C88218] font-semibold block mb-1">
            Visual Transparency Notice
          </span>
          <p className="text-xs text-[#555555] font-light leading-relaxed">
            The imagery above reflects the architectural and ecological vision
            guiding the development. Authentic site survey maps, topographical
            drawings, and physical site visit arrangements are available on request
            from the Starrbites corporate office.
          </p>
        </div>
      </Container>
    </section>
  );
}
