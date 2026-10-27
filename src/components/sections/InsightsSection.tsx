"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function InsightsSection() {
  const articles = [
    {
      title: "Property Registration Will Not Give You Ownership in 2025",
      slug: "/blog/property-registration-will-not-give-you-ownership-in-2025/",
      category: "Legal Due Diligence",
      readTime: "4 min read",
      date: "November 2025",
      excerpt:
        "Why registration is merely a fiscal record of transaction—and how khata, RTC, and revenue mutation constitute true title security.",
      image: "/images/blog/property-registration-will-not-give-you-ownership-in-2025.webp",
    },
    {
      title: "How to Safely Verify Farmland Before Buying: Step-by-Step Guide",
      slug: "/blog/how-to-safely-verify-farmland-before-buying-2025/",
      category: "Legal Due Diligence",
      readTime: "6 min read",
      date: "November 2025",
      excerpt:
        "The complete checklist for land investors: genealogical trees, encumbrance certificates (EC), land conversion, and survey sketches.",
      image: "/images/blog/how-to-safely-verify-farmland-before-buying-2025.webp",
    },
    {
      title: "How Land Mutation Rules Are Changing Farmland Investment in India",
      slug: "/blog/how-2025-farmland-mutation-rules-are-changing/",
      category: "Legal Due Diligence",
      readTime: "7 min read",
      date: "November 2025",
      excerpt:
        "Understanding e-swathu, RTC digital linking, and revenue department clearances that safeguard your countryside land holding.",
      image: "/images/blog/how-2025-farmland-mutation-rules-are-changing.webp",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-[720px]">
            <SectionEyebrow theme="navy" className="mb-4">
              Knowledge & Research
            </SectionEyebrow>
            <h2
              id="insights-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18]"
            >
              Insights & Journal
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-light mt-3 leading-relaxed">
              Curated perspectives on land documentation, legal due diligence, and infrastructure
              growth corridors for informed investors.
            </p>
          </div>

          <Button variant="secondary" href="/blog/" withArrow>
            View All Insights
          </Button>
        </div>

        {/* 3 Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#EDC455] hover:shadow-lg"
            >
              <div>
                {/* Image */}
                <Link
                  href={art.slug}
                  className="block relative aspect-[16/10] w-full overflow-hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#171C56] rounded-[2px]">
                    {art.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#555555]">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8B6C20]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#171C56] font-semibold leading-snug group-hover:text-[#8B6C20] transition-colors">
                    <Link href={art.slug}>{art.title}</Link>
                  </h3>

                  <p className="text-sm text-[#555555] font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={art.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171C56] group-hover:text-[#8B6C20] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
