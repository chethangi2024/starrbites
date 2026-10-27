"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutAudience } from "@/components/about/AboutAudience";
import { AboutFlagship } from "@/components/about/AboutFlagship";
import { AboutCta } from "@/components/about/AboutCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function AboutUsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Corporate Leadership & Philosophy Consultation");

  const handleOpenEnquiry = (topic = "Corporate Leadership & Philosophy Consultation") => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("General Corporate Advisory")} />

      <main className="flex-1">
        {/* Section 01: Editorial Introduction */}
        <AboutHero />

        {/* Section 02: Our Story & Leadership */}
        <AboutStory />

        {/* Section 03: Our Philosophy (Four Principles) */}
        <AboutPhilosophy />

        {/* Section 04: Our Approach (Four-Phase Development Methodology) */}
        <AboutApproach />

        {/* Section 05: Vision and Mission */}
        <AboutVision />

        {/* Section 06: Our Journey (Verified Milestones Timeline) */}
        <AboutJourney />

        {/* Section 07: Who We Serve (Four Curated Audiences) */}
        <AboutAudience />

        {/* Section 08: Flagship Project Connection (Tiiger Trail) */}
        <AboutFlagship onScheduleVisit={() => handleOpenEnquiry("Tiiger Trail Site Tour")} />

        {/* Section 09: Corporate Enquiry CTA */}
        <AboutCta onOpenEnquiry={() => handleOpenEnquiry("Corporate Leadership & Philosophy Consultation")} />
      </main>

      {/* Section 10: Master Corporate Footer */}
      <Footer />

      {/* Shared Interactive Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultTopic={modalTopic}
      />
    </>
  );
}
