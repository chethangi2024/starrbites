"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsIntro } from "@/components/projects/ProjectsIntro";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { ProjectsApproach } from "@/components/projects/ProjectsApproach";
import { ProjectsCta } from "@/components/projects/ProjectsCta";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function ProjectsPage() {
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
      {/* Global Shared Header */}
      <Header
        onOpenEnquiry={() =>
          handleOpenEnquiry("General Corporate Consultation")
        }
      />

      <main className="flex-1">
        {/* Section 01: Portfolio Hero */}
        <ProjectsHero
          onOpenEnquiry={() =>
            handleOpenEnquiry("General Corporate Consultation")
          }
        />

        {/* Section 02: Portfolio Introduction */}
        <ProjectsIntro />

        {/* Section 03: Project Showcase (Tiiger Trail & Stay and Play) */}
        <ProjectsShowcase
          onEnquireStayAndPlay={() =>
            handleOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
          }
        />

        {/* Section 04: Our Development Approach */}
        <ProjectsApproach />

        {/* Section 05: Portfolio Enquiry CTA */}
        <ProjectsCta onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Shared Corporate Footer */}
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
