"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, Filter } from "lucide-react";
import { Container } from "../ui/Container";
import { Article } from "@/lib/articles";

interface JournalArticleGridProps {
  articles: Article[];
  categories: string[];
}

export function JournalArticleGrid({ articles, categories }: JournalArticleGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") {
      return articles;
    }
    return articles.filter((a) => a.category === selectedCategory);
  }, [articles, selectedCategory]);

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = articles.filter((a) => a.category === cat).length;
      }
    });
    return counts;
  }, [articles, categories]);

  return (
    <section className="py-20 md:py-28 bg-[#F3F6FA]" aria-labelledby="all-articles-heading">
      <Container size="wide">
        {/* Section Header & Filter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-[#E2E6EC]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#EDC455]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#242424]">
                Editorial Archive
              </span>
            </div>
            <h2
              id="all-articles-heading"
              className="text-3xl sm:text-4xl font-serif text-[#242424] font-semibold tracking-tight"
            >
              The Research Collection
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4A4A4A] font-light">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}{" "}
              {selectedCategory !== "All" && `in ${selectedCategory}`}
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
                  className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-[2px] transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0099FF] text-[#242424] shadow-md"
                      : "bg-[#FDFBFF] text-[#4A4A4A] border border-[#E2E6EC] hover:border-[#0099FF] hover:text-[#242424]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#EDC455] text-[#242424] font-bold"
                        : "bg-[#F3F6FA] text-[#4A4A4A]"
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
              className="group flex flex-col justify-between bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#0099FF] hover:shadow-lg"
            >
              <div>
                {/* Article Image */}
                <Link
                  href={`/blog/${article.slug}/`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-[#0099FF]/5"
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
                  <div className="absolute top-3 left-3 bg-[#242424]/90 backdrop-blur-sm text-[#EDC455] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-[2px]">
                    {article.category}
                  </div>
                </Link>

                {/* Article Metadata & Excerpt */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#4A4A4A]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#242424]" />
                      {article.formattedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#242424]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#242424] font-semibold leading-snug group-hover:underline decoration-[#0099FF] underline-offset-4 transition-colors line-clamp-2">
                    <Link href={`/blog/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#F3F6FA] flex items-center justify-between">
                <span className="text-xs text-[#4A4A4A] font-medium">By {article.author}</span>
                <Link
                  href={`/blog/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#242424] transition-colors"
                >
                  <span>Read Article</span>
                  <span className="w-5 h-5 rounded-full bg-[#0099FF]/20 flex items-center justify-center group-hover:bg-[#EDC455] transition-colors">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
