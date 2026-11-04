"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, User } from "lucide-react";
import { Container } from "../ui/Container";
import { Article } from "@/lib/articles";

interface FeaturedArticleSpotlightProps {
  article: Article;
}

export function FeaturedArticleSpotlight({ article }: FeaturedArticleSpotlightProps) {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBFF] border-b border-[#E2E6EC]" aria-label="Featured Article">
      <Container size="wide">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-[2px] bg-[#EDC455]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#242424]">
            Featured Intelligence
          </span>
        </div>

        <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#F3F6FA] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] p-6 sm:p-8 md:p-12 transition-all duration-300 hover:border-[#0099FF] hover:shadow-xl">
          {/* Visual Column */}
          <div className="lg:col-span-7 overflow-hidden rounded-[2px] relative aspect-[16/10] w-full">
            <Link href={`/blog/${article.slug}/`} className="block w-full h-full relative" tabIndex={-1}>
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4 bg-[#242424]/90 backdrop-blur-md text-[#EDC455] text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-[2px]">
                {article.category}
              </div>
            </Link>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#4A4A4A]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#242424]" />
                  {article.formattedDate}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#242424]" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#242424] font-semibold leading-[1.22] group-hover:underline decoration-[#0099FF] underline-offset-4 transition-colors">
                <Link href={`/blog/${article.slug}/`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2E6EC] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0099FF] text-[#242424] flex items-center justify-center font-serif text-sm font-semibold">
                  CN
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#242424]">{article.author}</div>
                  <div className="text-[11px] text-[#4A4A4A]">{article.authorRole}</div>
                </div>
              </div>

              <Link
                href={`/blog/${article.slug}/`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#0099FF] border border-[#0099FF] px-4 py-2.5 rounded-[2px] transition-all duration-300 hover:bg-[#EDC455] hover:border-[#EDC455]"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
