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
      gsap.fromTo(
        ".flagship-visual-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visuals = [
    {
      image: "/images/stock/landscapes/landscape-rolling-countryside.jpg",
      title: "Expansive Countryside Setting",
      category: "Landscape Context",
      caption: "Open skies, gentle undulating horizons, and clean air away from urban density.",
    },
    {
      image: "/images/stock/architecture/architecture-minimalist-pavilion.jpg",
      title: "Planned Farmhouse Typologies",
      category: "Architectural Direction",
      caption: "Low-profile residential pavilion concepts designed in collaboration with Mayan Designs.",
    },
    {
      image: "/images/stock/landscapes/landscape-golden-hour-retreat.jpg",
      title: "Pastoral Atmosphere",
      category: "Retreat Living",
      caption: "Inspiration for private farm retreats integrating shaded verandas and natural stone.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="visuals"
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Visual Narrative
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15]">
              The Mood &amp; Spirit of{" "}
              <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
                Tiiger Trail
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-[#55534F] font-light leading-relaxed">
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
              className="flagship-visual-card bg-[#FFFFFF] rounded-sm border border-[#DDD7CC] overflow-hidden shadow-sm hover:shadow-md hover:border-[#354B5D] transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#DDD7CC]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#292D30]/90 backdrop-blur-sm px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider text-[#A98556] font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-normal text-[#292D30] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#55534F] font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Architectural Disclaimer Note */}
        <div className="p-6 bg-[#FFFFFF] border border-[#DDD7CC] rounded-sm text-center max-w-[840px] mx-auto">
          <span className="inline-block px-2 py-0.5 bg-[#A98556]/20 text-[10px] uppercase tracking-[0.16em] text-[#354B5D] font-semibold mb-2 rounded-xs">
            Visual Transparency Notice
          </span>
          <p className="text-xs text-[#55534F] font-light leading-relaxed">
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
