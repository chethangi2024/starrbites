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
    <section className="py-16 md:py-24 bg-white border-b border-[#E7E7E7]" aria-label="Featured Article">
      <Container size="wide">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-[2px] bg-[#EDC455]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171C56]">
            Featured Intelligence
          </span>
        </div>

        <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] p-6 sm:p-8 md:p-12 transition-all duration-300 hover:border-[#EDC455] hover:shadow-xl">
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
              <div className="absolute top-4 left-4 bg-[#171C56]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-[2px]">
                {article.category}
              </div>
            </Link>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#555555]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6C20]" />
                  {article.formattedDate}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8B6C20]" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#171C56] font-semibold leading-[1.22] group-hover:text-[#8B6C20] transition-colors">
                <Link href={`/blog/${article.slug}/`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-[#444444] font-light leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7E7E7] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#171C56] text-[#EDC455] flex items-center justify-center font-serif text-sm font-semibold">
                  CN
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171C56]">{article.author}</div>
                  <div className="text-[11px] text-[#555555]">{article.authorRole}</div>
                </div>
              </div>

              <Link
                href={`/blog/${article.slug}/`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171C56] bg-white border border-[#171C56]/20 px-4 py-2.5 rounded-[2px] transition-all duration-300 hover:bg-[#171C56] hover:text-[#EDC455] hover:border-[#171C56]"
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
