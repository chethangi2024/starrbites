"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoGrid } from "@/components/contact/ContactInfoGrid";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactNextSteps } from "@/components/contact/ContactNextSteps";
import { ContactExploreStarrbites } from "@/components/contact/ContactExploreStarrbites";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function ContactUsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Corporate Contact Consultation");

  const handleOpenEnquiry = (topic = "Corporate Contact Consultation") => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Shared Global Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry("Header Advisory Consultation")} />

      <main className="flex-1">
        {/* Section 1: Editorial Contact Hero */}
        <ContactHero />

        {/* Section 2: Contact Information & Headquarters Directory */}
        <ContactInfoGrid />

        {/* Section 3: High-Converting Enquiry Form */}
        <ContactFormSection />

        {/* Section 4: What Happens Next Protocol */}
        <ContactNextSteps />

        {/* Section 5: Explore Starrbites Closing Grid */}
        <ContactExploreStarrbites />
      </main>

      {/* Shared Master Corporate Footer */}
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
