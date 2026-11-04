"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InvestorHero } from "@/components/investor/InvestorHero";
import { InvestorPerspective } from "@/components/investor/InvestorPerspective";
import { InvestorPortfolio } from "@/components/investor/InvestorPortfolio";
import { InvestorApproach } from "@/components/investor/InvestorApproach";
import { InvestorEngagement } from "@/components/investor/InvestorEngagement";
import { InvestorImportantInfo } from "@/components/investor/InvestorImportantInfo";
import { InvestorCta } from "@/components/investor/InvestorCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function InvestorRelationsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState(
    "General Corporate Consultation"
  );

  const handleOpenEnquiry = (
    topic = "General Corporate Consultation"
  ) => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      <Header
        onOpenEnquiry={() =>
          handleOpenEnquiry("General Corporate Consultation")
        }
      />

      <main className="flex-1">
        {/* Section 01: Investor Relations Hero */}
        <InvestorHero
          onStartEnquiry={() =>
            handleOpenEnquiry("General Corporate Consultation")
          }
        />

        {/* Section 02: Our Business Perspective */}
        <InvestorPerspective />

        {/* Section 03: Our Development Portfolio */}
        <InvestorPortfolio />

        {/* Section 04: Our Development Approach */}
        <InvestorApproach />

        {/* Section 05: Investor and Partnership Engagement */}
        <InvestorEngagement
          onSelectTopic={(topic) => handleOpenEnquiry(topic)}
        />

        {/* Section 06: Important Information */}
        <InvestorImportantInfo />

        {/* Section 07: Investor Relations Enquiry CTA */}
        <InvestorCta
          onOpenEnquiry={() =>
            handleOpenEnquiry("General Corporate Consultation")
          }
        />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultTopic={modalTopic}
      />
    </>
  );
}

