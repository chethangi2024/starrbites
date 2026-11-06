"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Shield, Globe, BookOpen } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ContactExploreStarrbites() {
  const cards = [
    {
      title: "Our Vision & Leadership",
      eyebrow: "ABOUT STARRBITES",
      description:
        "Learn about our founding philosophy, 30-year due diligence standards, and the multidisciplinary team.",
      href: "/about-us/",
      icon: Compass,
    },
    {
      title: "Tiiger Trail Flagship",
      eyebrow: "FLAGSHIP DESTINATION",
      description:
        "Explore our gated farm-resort plotted destination along the North Bangalore NH-44 high-growth corridor.",
      href: "/tiiger-trail/",
      icon: Shield,
    },
    {
      title: "NRI Land Advisory Desk",
      eyebrow: "GLOBAL INVESTORS",
      description:
        "Remote purchase frameworks, legal verification protocols, and transparent title stewardship from abroad.",
      href: "/nri/",
      icon: Globe,
    },
    {
      title: "The Starrbites Journal",
      eyebrow: "RESEARCH & PERSPECTIVES",
      description:
        "Read 10 verified dissertations on mutation laws, property registration reforms, and STRR growth corridors.",
      href: "/blog/",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#354B5D] text-[#FFFFFF] relative overflow-hidden" aria-labelledby="explore-starrbites-heading">
      {/* Background Subtle Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, #FFFFFF 0%, transparent 50%)",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-3xl mb-14">
          <SectionEyebrow theme="gold" className="mb-4">
            DISCOVER STARRBITES
          </SectionEyebrow>

          <h2
            id="explore-starrbites-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-[#FFFFFF] leading-[1.2]"
          >
            Explore Our Developments &amp; Advisory Services
          </h2>

          <p className="mt-4 text-base text-[#FFFFFF]/85 font-light leading-relaxed">
            Discover our flagship countryside retreat, our cross-border advisory desk for global
            Indians, and our research monographs on Karnataka property law.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-[#FFFFFF] border border-[#DDD7CC] border-t-4 border-t-[#A98556] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#354B5D] bg-[#A98556]/20 px-2 py-0.5 rounded-xs">
                      {card.eyebrow}
                    </span>
                    <Icon className="w-4 h-4 text-[#354B5D]" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#292D30] leading-snug mb-3">
                    <span className="text-[#292D30] group-hover:underline decoration-[#354B5D] underline-offset-4">{card.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55534F] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DDD7CC] flex items-center justify-between text-xs text-[#292D30] font-semibold uppercase tracking-wider">
                  <span>Explore</span>
                  <span className="w-5 h-5 rounded-full bg-[#354B5D]/10 flex items-center justify-center group-hover:bg-[#526B80] group-hover:text-[#FFFFFF] transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#292D30] group-hover:text-[#FFFFFF] shrink-0" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
