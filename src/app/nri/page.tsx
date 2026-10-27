"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NriHero } from "@/components/nri/NriHero";
import { NriExploreIntro } from "@/components/nri/NriExploreIntro";
import { NriFlagshipFeature } from "@/components/nri/NriFlagshipFeature";
import { NriProcess } from "@/components/nri/NriProcess";
import { NriDueDiligence } from "@/components/nri/NriDueDiligence";
import { NriEnquiryForm } from "@/components/nri/NriEnquiryForm";
import { NriFaq } from "@/components/nri/NriFaq";
import { NriCta } from "@/components/nri/NriCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function NriPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("NRI Investment & Remote Due Diligence");

  const handleOpenEnquiry = (topic = "NRI Investment & Remote Due Diligence") => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Global Shared Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("NRI Investment & Remote Due Diligence")} />

      <main className="flex-1">
        {/* Section 01: Premium NRI Hero */}
        <NriHero />

        {/* Section 02: An Informed Way to Explore */}
        <NriExploreIntro />

        {/* Section 03: Explore the Flagship Project (Tiiger Trail) */}
        <NriFlagshipFeature />

        {/* Section 04: Understanding the Process from Abroad */}
        <NriProcess />

        {/* Section 05: Transparency and Due Diligence */}
        <NriDueDiligence />

        {/* Section 06: Tailored Enquiry Experience (Real Form & Endpoint) */}
        <NriEnquiryForm />

        {/* Section 07: Frequently Asked Questions (Accessible Accordion) */}
        <NriFaq />

        {/* Section 08: Final CTA */}
        <NriCta />
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
