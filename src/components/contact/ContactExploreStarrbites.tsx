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
    <section className="py-20 md:py-28 bg-[#171C56] text-white relative overflow-hidden" aria-labelledby="explore-starrbites-heading">
      {/* Background Subtle Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, #EDC455 0%, transparent 50%)",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-3xl mb-14">
          <SectionEyebrow theme="gold" className="mb-3 text-[#EDC455]">
            DISCOVER THE ECOSYSTEM
          </SectionEyebrow>
          <h2
            id="explore-starrbites-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white leading-[1.2]"
          >
            <span className="text-white">Explore the Wider Starrbites Portfolio</span>
          </h2>
          <p className="mt-4 text-base text-white/90 font-light leading-relaxed">
            Delve deeper into our flagship destinations, cross-border investor advisory, and
            curated research compendiums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-[#0F1238]/80 border border-white/15 rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#0F1238] hover:border-[#EDC455]/50 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#EDC455]">
                      {card.eyebrow}
                    </span>
                    <Icon className="w-4 h-4 text-white/80 group-hover:text-[#EDC455] transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-white leading-snug group-hover:text-[#EDC455] transition-colors mb-3">
                    <span className="text-white group-hover:text-[#EDC455]">{card.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EDC455] font-semibold uppercase tracking-wider">
                  <span>Explore Route</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
