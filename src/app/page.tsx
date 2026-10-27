"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { VisionSection } from "@/components/sections/VisionSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { NriSection } from "@/components/sections/NriSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function HomePage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Tiiger Trail — Flagship Project");

  const handleOpenEnquiry = (topic = "Tiiger Trail — Flagship Project") => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Global Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("General Corporate Consultation")} />

      <main className="flex-1">
        {/* Section 01: Cinematic Hero */}
        <HeroSection onExploreClick={() => handleOpenEnquiry("Tiiger Trail — Flagship Project")} />

        {/* Section 02: Brand Introduction */}
        <BrandIntroSection />

        {/* Section 03: Philosophy and Principles */}
        <PhilosophySection />

        {/* Section 04: Flagship Project — Tiiger Trail */}
        <FlagshipSection />

        {/* Section 05: Our Journey */}
        <JourneySection />

        {/* Section 06: Vision and Mission */}
        <VisionSection />

        {/* Section 07: Who We Serve */}
        <AudienceSection />

        {/* Section 08: NRI Investment */}
        <NriSection onOpenEnquiry={() => handleOpenEnquiry("NRI Investment & Remote Due Diligence")} />

        {/* Section 09: Insights and Journal */}
        <InsightsSection />

        {/* Section 10: Corporate Enquiry */}
        <EnquirySection />
      </main>

      {/* Section 11: Master Corporate Footer */}
      <Footer />

      {/* Global Interactive Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultTopic={modalTopic}
      />
    </>
  );
}
