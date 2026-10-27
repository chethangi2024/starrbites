"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlagshipHero } from "@/components/flagship/FlagshipHero";
import { FlagshipStory } from "@/components/flagship/FlagshipStory";
import { FlagshipLocation } from "@/components/flagship/FlagshipLocation";
import { FlagshipPhilosophy } from "@/components/flagship/FlagshipPhilosophy";
import { FlagshipVisuals } from "@/components/flagship/FlagshipVisuals";
import { FlagshipAudience } from "@/components/flagship/FlagshipAudience";
import { FlagshipTrust } from "@/components/flagship/FlagshipTrust";
import { FlagshipCta } from "@/components/flagship/FlagshipCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function TiigerTrailPage() {
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
      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("Tiiger Trail — Flagship Project")} />

      <main className="flex-1">
        {/* Section 01: Cinematic Project Hero */}
        <FlagshipHero onOpenEnquiry={() => handleOpenEnquiry("Tiiger Trail — Flagship Project")} />

        {/* Section 02: The Project Story */}
        <FlagshipStory />

        {/* Section 03: Location and Setting */}
        <FlagshipLocation />

        {/* Section 04: Planning Philosophy */}
        <FlagshipPhilosophy />

        {/* Section 05: Approved Project Visuals (Conceptual Showcase) */}
        <FlagshipVisuals />

        {/* Section 06: Who Might Consider Tiiger Trail */}
        <FlagshipAudience />

        {/* Section 07: Trust and Buyer Information */}
        <FlagshipTrust />

        {/* Section 08: Final Project CTA */}
        <FlagshipCta onOpenEnquiry={() => handleOpenEnquiry("Tiiger Trail — Flagship Project")} />
      </main>

      {/* Section 09: Master Corporate Footer */}
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
