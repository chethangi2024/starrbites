"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedArticleSpotlight } from "@/components/blog/FeaturedArticleSpotlight";
import { JournalArticleGrid } from "@/components/blog/JournalArticleGrid";
import { JournalCta } from "@/components/blog/JournalCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";
import { getAllArticles, getFeaturedArticle, getCategories } from "@/lib/articles";

export default function BlogListingPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Journal Advisory Enquiry");

  const articles = getAllArticles();
  const featuredArticle = getFeaturedArticle();
  const categories = getCategories();

  const handleOpenEnquiry = (topic = "Journal Advisory Enquiry") => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("General Land Advisory Enquiry")} />

      <main className="flex-1">
        {/* Section A: Editorial Journal Hero */}
        <BlogHero />

        {/* Section B: Featured Article Spotlight */}
        <FeaturedArticleSpotlight article={featuredArticle} />

        {/* Section C & D: Article Collection with Category Filters */}
        <JournalArticleGrid articles={articles} categories={categories} />

        {/* Section E: Corporate Restrained CTA */}
        <JournalCta onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Section F: Master Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultTopic={modalTopic}
      />
    </>
  );
}
