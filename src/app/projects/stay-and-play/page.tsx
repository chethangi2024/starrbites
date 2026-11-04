"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StayAndPlayHero } from "@/components/stay-and-play/StayAndPlayHero";
import { StayAndPlayIntro } from "@/components/stay-and-play/StayAndPlayIntro";
import { StayAndPlayConcept } from "@/components/stay-and-play/StayAndPlayConcept";
import { StayAndPlayPhilosophy } from "@/components/stay-and-play/StayAndPlayPhilosophy";
import { StayAndPlayInfo } from "@/components/stay-and-play/StayAndPlayInfo";
import { StayAndPlayVisuals } from "@/components/stay-and-play/StayAndPlayVisuals";
import { StayAndPlayEnquiry } from "@/components/stay-and-play/StayAndPlayEnquiry";
import { StayAndPlayExploreMore } from "@/components/stay-and-play/StayAndPlayExploreMore";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function StayAndPlayPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState(
    "Stay and Play — Upcoming Project Enquiry"
  );

  const handleOpenEnquiry = (
    topic = "Stay and Play — Upcoming Project Enquiry"
  ) => {
    setModalTopic(topic);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <>
      {/* Shared Corporate Header */}
      <Header
        onOpenEnquiry={() =>
          handleOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
        }
      />

      <main className="flex-1">
        {/* Section 01: Project Hero */}
        <StayAndPlayHero
          onRegisterInterest={() =>
            handleOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
          }
        />

        {/* Section 02: Project Introduction */}
        <StayAndPlayIntro />

        {/* Section 03: The Development Concept */}
        <StayAndPlayConcept />

        {/* Section 04: Planning and Development Philosophy */}
        <StayAndPlayPhilosophy />

        {/* Section 05: Project Information */}
        <StayAndPlayInfo
          onRegisterInterest={() =>
            handleOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
          }
        />

        {/* Section 06: Visual Gallery / Master Plan */}
        <StayAndPlayVisuals />

        {/* Section 07: Stay and Play Enquiry */}
        <StayAndPlayEnquiry
          onRegisterInterest={() =>
            handleOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
          }
        />

        {/* Section 08: Explore More from Starrbites */}
        <StayAndPlayExploreMore />
      </main>

      {/* Shared Corporate Footer */}
      <Footer />

      {/* Shared Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        defaultTopic={modalTopic}
      />
    </>
  );
}

