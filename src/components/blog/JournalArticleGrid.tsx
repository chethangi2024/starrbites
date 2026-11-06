"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Container } from "../ui/Container";
import { Article } from "@/lib/articles";

interface JournalArticleGridProps {
  articles: Article[];
}

export function JournalArticleGrid({ articles }: JournalArticleGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Perspectives");

  // Extract unique categories
  const categories = [
    "All Perspectives",
    ...Array.from(new Set(articles.map((a) => a.category))),
  ];

  const filteredArticles =
    selectedCategory === "All Perspectives"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const categoryCounts = categories.reduce<Record<string, number>>((acc, cat) => {
    if (cat === "All Perspectives") {
      acc[cat] = articles.length;
    } else {
      acc[cat] = articles.filter((a) => a.category === cat).length;
    }
    return acc;
  }, {});

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]" id="articles-directory">
      <Container size="wide">
        {/* Category Filter and Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#DDD7CC]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#A98556]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#354B5D]">
                Curated Dossiers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#292D30] font-semibold tracking-tight">
              All Research Papers &amp; Articles
            </h2>
            <p className="text-sm sm:text-base text-[#55534F] font-light mt-2 max-w-xl">
              Filter our catalog of strategic guides by core subject matter.
            </p>
          </div>

          {/* Accessible Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by category">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-[2px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap shrink-0 leading-none ${
                    isActive
                      ? "bg-[#354B5D] text-[#FFFFFF] shadow-sm"
                      : "bg-[#FFFFFF] text-[#55534F] border border-[#DDD7CC] hover:border-[#354B5D] hover:text-[#292D30]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#A98556] text-[#354B5D] font-bold"
                        : "bg-[#F5F1E9] text-[#55534F]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Responsive Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#F5F1E9] border border-[#DDD7CC] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#354B5D] hover:shadow-lg"
            >
              <div>
                {/* Article Image */}
                <Link
                  href={`/blog/${article.slug}/`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-[#354B5D]/5"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#292D30]/90 backdrop-blur-sm text-[#A98556] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-[2px]">
                    {article.category}
                  </div>
                </Link>

                {/* Article Metadata & Excerpt */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#55534F]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#354B5D]" />
                      {article.formattedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#354B5D]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#292D30] font-semibold leading-snug group-hover:underline decoration-[#354B5D] underline-offset-4 transition-colors line-clamp-2">
                    <Link href={`/blog/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#55534F] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#DDD7CC]/60 flex items-center justify-between">
                <span className="text-xs text-[#55534F] font-light">
                  By {article.author}
                </span>

                <Link
                  href={`/blog/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 text-xs font-semibold uppercase tracking-wider text-[#526B80] group-hover:text-[#354B5D] transition-colors"
                >
                  <span className="whitespace-nowrap">Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
