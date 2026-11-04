"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

const EXPLORE_LINKS = [
  {
    label: "Explore All Projects",
    href: "/projects/",
    description: "View the complete Starrbites development portfolio.",
  },
  {
    label: "Discover Tiiger Trail",
    href: "/tiiger-trail/",
    description: "Explore our flagship plotted nature and farm-resort destination near Lepakshi.",
  },
  {
    label: "About Starrbites",
    href: "/about-us/",
    description: "Learn about our leadership, philosophy, and development standards.",
  },
  {
    label: "Contact Us",
    href: "/contact-us/",
    description: "Connect directly with our Dollars Colony headquarters in Bengaluru.",
  },
];

export function StayAndPlayExploreMore() {
  return (
    <section
      className="py-20 sm:py-24 bg-[#FDFBFF] text-[#242424]"
      aria-labelledby="stay-and-play-explore-heading"
    >
      <Container size="wide">
        <div className="mb-10 sm:mb-12">
          <SectionEyebrow theme="charcoal" className="mb-3">
            07 / CONTINUE EXPLORING
          </SectionEyebrow>
          <h2
            id="stay-and-play-explore-heading"
            className="text-2xl sm:text-3xl font-serif text-[#242424] font-semibold"
          >
            Explore More from Starrbites
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPLORE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-[#F3F6FA] border border-[#E2E6EC] hover:border-[#0099FF] p-6 rounded-[2px] flex flex-col justify-between transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF]"
            >
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#242424] group-hover:text-[#007ACC] transition-colors mb-2 flex items-center justify-between gap-2">
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#0099FF] shrink-0 transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#E2E6EC] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                  Starrbites
                </span>
                <span className="w-5 h-[2px] bg-[#EDC455] group-hover:w-8 group-hover:bg-[#0099FF] transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

