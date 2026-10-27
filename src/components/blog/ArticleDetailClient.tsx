"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Share2,
  Check,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { EnquiryModal } from "../sections/EnquiryModal";
import { JournalCta } from "./JournalCta";
import { Article } from "@/lib/articles";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
  prevArticle?: Article;
  nextArticle?: Article;
}

export function ArticleDetailClient({
  article,
  relatedArticles,
  prevArticle,
  nextArticle,
}: ArticleDetailClientProps) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState(`Article Advisory: ${article.title}`);
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [readingProgress, setReadingProgress] = useState(0);

  // Scrollspy & Reading Progress
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check active heading
      if (article.headings && article.headings.length > 0) {
        const headingElements = article.headings
          .map((h) => document.getElementById(h.id))
          .filter((el): el is HTMLElement => el !== null);

        let currentActive = "";
        for (const el of headingElements) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            currentActive = el.id;
          }
        }
        if (currentActive) {
          setActiveHeadingId(currentActive);
        } else if (headingElements[0]) {
          setActiveHeadingId(headingElements[0].id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.headings]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenEnquiry = (topic = `Article Advisory: ${article.title}`) => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  return (
    <>
      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#EDC455] z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry(`Consultation via ${article.title}`)} />

      <main className="flex-1 bg-white pt-28 sm:pt-36 pb-20">
        {/* Article Breadcrumbs & Back Navigation */}
        <div className="border-b border-[#E7E7E7] bg-[#F6F6F4] py-4">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-1.5 font-medium text-[#171C56] hover:text-[#8B6C20] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>The Starrbites Journal</span>
                </Link>
                <ChevronRight className="w-3 h-3 text-[#555555]" />
                <span className="text-[#555555] hidden sm:inline">{article.category}</span>
                <ChevronRight className="w-3 h-3 text-[#555555] hidden sm:inline" />
                <span className="text-[#171C56] font-medium truncate max-w-[240px] sm:max-w-md">
                  {article.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E7E7E7] rounded-[2px] text-xs text-[#171C56] hover:border-[#171C56] transition-colors cursor-pointer"
                  title="Copy article link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1E6B47]" />
                      <span className="text-[#1E6B47] font-medium">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#555555]" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Article Header Section */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-white" aria-label="Article Headline">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-[#171C56]/5 text-[#171C56] border border-[#171C56]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-[2px] mb-6">
                {article.category}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#171C56] font-semibold leading-[1.2] tracking-tight">
                {article.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#555555] font-light leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author and Date Bar */}
              <div className="mt-8 pt-6 border-t border-[#E7E7E7] flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#171C56] text-[#EDC455] flex items-center justify-center font-serif text-base font-semibold shadow-sm">
                    CN
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#171C56]">{article.author}</div>
                    <div className="text-xs text-[#555555]">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-[#555555]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#8B6C20]" />
                    {article.formattedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#8B6C20]" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Image */}
        <section className="pb-12 sm:pb-16">
          <Container size="wide">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[#E7E7E7] shadow-lg">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <p className="text-xs text-[#555555] mt-3 text-center italic">
                Official documentation and verified land advisory intelligence from Starrbites Developments.
              </p>
            </div>
          </Container>
        </section>

        {/* Main Content Layout: Sticky TOC + Article Body */}
        <section className="pb-20">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              {/* Left Column: Sticky Table of Contents & Counsel Box */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="lg:sticky lg:top-28 space-y-8">
                  {/* Table of Contents */}
                  {article.headings && article.headings.length > 0 && (
                    <nav
                      aria-label="Table of Contents"
                      className="bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] p-6"
                    >
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E7E7E7]">
                        <BookOpen className="w-4 h-4 text-[#8B6C20]" />
                        <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#171C56]">
                          Table of Contents
                        </h2>
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#555555]">
                        {article.headings.map((h) => {
                          const isActive = activeHeadingId === h.id;
                          return (
                            <li
                              key={h.id}
                              className={h.level === 3 ? "pl-3 border-l border-[#E7E7E7]" : ""}
                            >
                              <a
                                href={`#${h.id}`}
                                className={`block transition-colors leading-relaxed ${
                                  isActive
                                    ? "text-[#171C56] font-semibold pl-1 border-l-2 border-[#EDC455]"
                                    : "hover:text-[#171C56]"
                                }`}
                              >
                                {h.text}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  )}

                  {/* Title Advisory Callout */}
                  <div className="bg-[#171C56] text-white p-6 rounded-[2px] relative overflow-hidden">
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EDC455]">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Land Counsel</span>
                      </div>
                      <h3 className="text-base font-serif font-semibold text-white leading-snug">
                        Need Legal Verification on Your Land?
                      </h3>
                      <p className="text-xs text-white/90 font-light leading-relaxed">
                        Our title diligence team verifies 30-year encumbrances, RTC mutation chains,
                        and podi survey records.
                      </p>
                      <button
                        onClick={() => handleOpenEnquiry(`Title Verification: ${article.title}`)}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#EDC455] text-[#171C56] text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:bg-white transition-colors cursor-pointer"
                      >
                        <span>Schedule Due Diligence</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Column: Article Body Content */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div
                  className="article-body max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />

                {/* Article Footer & Share Bar */}
                <div className="mt-14 pt-8 border-t border-[#E7E7E7] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#555555]">
                    Published in{" "}
                    <span className="font-semibold text-[#171C56]">{article.category}</span> on{" "}
                    {article.formattedDate}
                  </div>

                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] text-xs font-medium text-[#171C56] hover:border-[#171C56] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#1E6B47]" />
                        <span className="text-[#1E6B47]">Copied URL</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-[#8B6C20]" />
                        <span>Share Dissertation</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Adjacent Navigation (Prev / Next) */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevArticle && (
                    <Link
                      href={`/blog/${prevArticle.slug}/`}
                      className="p-5 border border-[#E7E7E7] bg-[#F6F6F4] rounded-[2px] hover:border-[#EDC455] transition-all group"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-[#555555] mb-1 flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous Article</span>
                      </div>
                      <div className="text-sm font-serif font-semibold text-[#171C56] group-hover:text-[#8B6C20] transition-colors line-clamp-2">
                        {prevArticle.title}
                      </div>
                    </Link>
                  )}

                  {nextArticle && (
                    <Link
                      href={`/blog/${nextArticle.slug}/`}
                      className="p-5 border border-[#E7E7E7] bg-[#F6F6F4] rounded-[2px] hover:border-[#EDC455] transition-all group sm:text-right"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-[#555555] mb-1 flex items-center gap-1 sm:justify-end">
                        <span>Next Article</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="text-sm font-serif font-semibold text-[#171C56] group-hover:text-[#8B6C20] transition-colors line-clamp-2">
                        {nextArticle.title}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Articles Section */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="py-20 bg-[#F6F6F4] border-t border-[#E7E7E7]">
            <Container size="wide">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#EDC455]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171C56]">
                      Further Intelligence
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#171C56] font-semibold">
                    Related Articles & Legal Guides
                  </h2>
                </div>

                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171C56] hover:text-[#8B6C20] transition-colors"
                >
                  <span>Explore All Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.slug}
                    className="group flex flex-col justify-between bg-white border border-[#E7E7E7] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#EDC455] hover:shadow-lg"
                  >
                    <div>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="block relative aspect-[16/10] w-full overflow-hidden bg-[#171C56]/5"
                        tabIndex={-1}
                      >
                        <Image
                          src={rel.featuredImage}
                          alt={rel.featuredImageAlt}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-[#171C56]/90 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-[2px]">
                          {rel.category}
                        </div>
                      </Link>

                      <div className="p-6 space-y-2.5">
                        <div className="flex items-center gap-3 text-xs text-[#555555]">
                          <span>{rel.formattedDate}</span>
                          <span>•</span>
                          <span>{rel.readTime}</span>
                        </div>

                        <h3 className="text-lg font-serif text-[#171C56] font-semibold leading-snug group-hover:text-[#8B6C20] transition-colors line-clamp-2">
                          <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                        </h3>

                        <p className="text-xs text-[#555555] font-light leading-relaxed line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-[#F6F6F4]">
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171C56] group-hover:text-[#8B6C20] transition-colors"
                      >
                        <span>Read Guide</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Corporate Restrained CTA */}
        <JournalCta onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Shared Master Corporate Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultTopic={modalTopic}
      />
    </>
  );
}
