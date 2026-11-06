"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  ChevronRight,
  BookOpen,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { EnquiryModal } from "@/components/sections/EnquiryModal";
import { JournalCta } from "@/components/blog/JournalCta";
import { Article } from "@/lib/articles";

interface ArticleDetailClientProps {
  article: Article;
  relatedArticles: Article[];
  prevArticle: Article | null;
  nextArticle: Article | null;
}

export function ArticleDetailClient({
  article,
  relatedArticles,
  prevArticle,
  nextArticle,
}: ArticleDetailClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("");

  // Reading Progress & ScrollSpy Observer
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active TOC Item
  useEffect(() => {
    if (!article.headings || article.headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0% -60% 0%",
        threshold: 0,
      }
    );

    article.headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article.headings]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleOpenEnquiry = (topic?: string) => {
    setModalTopic(topic || `Article Enquiry: ${article.title}`);
    setIsEnquiryModalOpen(true);
  };

  return (
    <>
      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#354B5D] z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry(`Consultation via ${article.title}`)} />

      <main className="flex-1 bg-[#FFFFFF] pt-28 sm:pt-36 pb-20">
        {/* Article Breadcrumbs & Back Navigation */}
        <div className="border-b border-[#DDD7CC] bg-[#F5F1E9] py-4">
          <Container size="wide">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#55534F]">
              <div className="flex items-center gap-2">
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 font-medium text-[#292D30] hover:text-[#526B80] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">The Starrbites Journal</span>
                </Link>
                <ChevronRight className="w-3 h-3 text-[#55534F] shrink-0" />
                <span className="text-[#55534F] hidden sm:inline whitespace-nowrap">{article.category}</span>
                <ChevronRight className="w-3 h-3 text-[#55534F] hidden sm:inline shrink-0" />
                <span className="text-[#292D30] font-medium truncate max-w-[240px] sm:max-w-md">
                  {article.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] text-xs text-[#292D30] hover:border-[#354B5D] transition-colors cursor-pointer whitespace-nowrap flex-nowrap shrink-0"
                  title="Copy article link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1E6B47] shrink-0" />
                      <span className="text-[#1E6B47] font-medium whitespace-nowrap">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#55534F] shrink-0" />
                      <span className="whitespace-nowrap">Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Article Header Section */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#FFFFFF]" aria-label="Article Headline">
          <Container size="wide">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-[#354B5D]/10 text-[#354B5D] border border-[#354B5D]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-[2px] mb-6">
                {article.category}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292D30] font-semibold leading-[1.2] tracking-tight">
                {article.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#55534F] font-light leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author and Date Bar */}
              <div className="mt-8 pt-6 border-t border-[#DDD7CC] flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#354B5D] text-[#FFFFFF] flex items-center justify-center font-serif text-base font-semibold shadow-sm">
                    CN
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#292D30]">{article.author}</div>
                    <div className="text-xs text-[#55534F]">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-[#55534F]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#354B5D]" />
                    {article.formattedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#354B5D]" />
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
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[#DDD7CC] shadow-lg">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <p className="text-xs text-[#55534F] mt-3 text-center italic">
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
                      className="bg-[#F5F1E9] border border-[#DDD7CC] rounded-[2px] p-6"
                    >
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#DDD7CC]">
                        <BookOpen className="w-4 h-4 text-[#292D30]" />
                        <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#292D30]">
                          Table of Contents
                        </h2>
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#55534F]">
                        {article.headings.map((h) => {
                          const isActive = activeHeadingId === h.id;
                          return (
                            <li
                              key={h.id}
                              className={h.level === 3 ? "pl-3 border-l border-[#DDD7CC]" : ""}
                            >
                              <a
                                href={`#${h.id}`}
                                className={`block transition-colors leading-relaxed ${
                                  isActive
                                    ? "text-[#292D30] font-semibold pl-2 border-l-2 border-[#354B5D]"
                                    : "hover:text-[#292D30]"
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
                  <div className="bg-[#292D30] text-[#FFFFFF] p-6 rounded-[2px] border-t-4 border-[#A98556] relative overflow-hidden">
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A98556]">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Land Counsel</span>
                      </div>
                      <h3 className="text-base font-serif font-semibold text-[#FFFFFF] leading-snug">
                        Need Legal Verification on Your Land?
                      </h3>
                      <p className="text-xs text-[#FFFFFF]/85 font-light leading-relaxed">
                        Our title diligence team verifies 30-year encumbrances, RTC mutation chains,
                        and podi survey records.
                      </p>
                      <button
                        onClick={() => handleOpenEnquiry(`Title Verification: ${article.title}`)}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F5F1E9] text-[#354B5D] border border-[#F5F1E9] text-xs font-semibold uppercase tracking-[0.05em] rounded-[2px] hover:bg-[#FFFFFF] hover:text-[#292D30] transition-all cursor-pointer whitespace-nowrap flex-nowrap shrink-0"
                      >
                        <span className="whitespace-nowrap">Schedule Due Diligence</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
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
                <div className="mt-14 pt-8 border-t border-[#DDD7CC] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#55534F]">
                    Published in{" "}
                    <span className="font-semibold text-[#292D30]">{article.category}</span> on{" "}
                    {article.formattedDate}
                  </div>

                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#F5F1E9] border border-[#DDD7CC] rounded-[2px] text-xs font-medium text-[#292D30] hover:border-[#354B5D] transition-colors cursor-pointer whitespace-nowrap flex-nowrap shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#1E6B47] shrink-0" />
                        <span className="text-[#1E6B47] whitespace-nowrap">Copied URL</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-[#292D30] shrink-0" />
                        <span className="whitespace-nowrap">Share Dissertation</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Adjacent Navigation (Prev / Next) */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevArticle && (
                    <Link
                      href={`/blog/${prevArticle.slug}/`}
                      className="p-5 border border-[#DDD7CC] bg-[#F5F1E9] rounded-[2px] hover:border-[#354B5D] transition-all group"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-1 flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform shrink-0" />
                        <span className="whitespace-nowrap">Previous Article</span>
                      </div>
                      <div className="text-sm font-serif font-semibold text-[#292D30] group-hover:underline decoration-[#354B5D] transition-colors line-clamp-2">
                        {prevArticle.title}
                      </div>
                    </Link>
                  )}

                  {nextArticle && (
                    <Link
                      href={`/blog/${nextArticle.slug}/`}
                      className="p-5 border border-[#DDD7CC] bg-[#F5F1E9] rounded-[2px] hover:border-[#354B5D] transition-all group sm:text-right"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-1 flex items-center gap-1 sm:justify-end">
                        <span className="whitespace-nowrap">Next Article</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                      <div className="text-sm font-serif font-semibold text-[#292D30] group-hover:underline decoration-[#354B5D] transition-colors line-clamp-2">
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
          <section className="py-20 bg-[#F5F1E9] border-t border-[#DDD7CC]">
            <Container size="wide">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#A98556]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#354B5D]">
                      Further Intelligence
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#292D30] font-semibold">
                    Related Articles &amp; Legal Guides
                  </h2>
                </div>

                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 text-xs font-semibold uppercase tracking-wider text-[#526B80] hover:text-[#354B5D] transition-colors"
                >
                  <span className="whitespace-nowrap">Explore All Insights</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.slug}
                    className="group flex flex-col justify-between bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#354B5D] hover:shadow-lg"
                  >
                    <div>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="block relative aspect-[16/10] w-full overflow-hidden bg-[#354B5D]/5"
                        tabIndex={-1}
                      >
                        <Image
                          src={rel.featuredImage}
                          alt={rel.featuredImageAlt}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-[#292D30]/90 backdrop-blur-sm text-[#A98556] px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-[2px]">
                          {rel.category}
                        </div>
                      </Link>

                      <div className="p-6 space-y-2.5">
                        <div className="flex items-center gap-3 text-xs text-[#55534F]">
                          <span>{rel.formattedDate}</span>
                          <span>•</span>
                          <span>{rel.readTime}</span>
                        </div>

                        <h3 className="text-lg font-serif text-[#292D30] font-semibold leading-snug group-hover:underline decoration-[#354B5D] transition-colors line-clamp-2">
                          <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                        </h3>

                        <p className="text-xs text-[#55534F] font-light leading-relaxed line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-[#DDD7CC]/60">
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 text-xs font-semibold uppercase tracking-wider text-[#526B80] hover:text-[#354B5D] transition-colors"
                      >
                        <span className="whitespace-nowrap">Read Guide</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
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
