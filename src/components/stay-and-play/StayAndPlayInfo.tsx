"use client";

import React, { useEffect, useRef } from "react";
import { FileText, Clock } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface StayAndPlayInfoProps {
  onRegisterInterest: () => void;
}

const PROJECT_INFO_ITEMS = [
  {
    label: "Project Name",
    value: "Stay and Play",
    status: "Confirmed",
  },
  {
    label: "Developer",
    value: "Starrbites",
    status: "Confirmed",
  },
  {
    label: "Project Category",
    value: "Recreational & Hospitality-Led Development",
    status: "Confirmed",
  },
  {
    label: "Project Concept",
    value: "Active recreation, leisure stays and thoughtfully planned community spaces",
    status: "Confirmed",
  },
  {
    label: "Location",
    value: "Details to be announced following official confirmation",
    status: "Pending Release",
  },
  {
    label: "Master Plan",
    value: "In preparation",
    status: "In Preparation",
  },
  {
    label: "Project Specifications",
    value: "Subject to official release",
    status: "Pending Release",
  },
];

export function StayAndPlayInfo({ onRegisterInterest }: StayAndPlayInfoProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-info-panel",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F3F6FA] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="stay-and-play-info-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Advisory Note (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionEyebrow theme="charcoal">
              04 / PROJECT INFORMATION
            </SectionEyebrow>

            <h2
              id="stay-and-play-info-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
            >
              Project Information
            </h2>

            <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
              Starrbites publishes project specifications only when backed by completed planning
              records and official documentation. Below is a clear summary of confirmed project
              details and items currently being prepared for formal release.
            </p>

            <div className="p-6 bg-[#FDFBFF] border border-[#E2E6EC] border-l-4 border-l-[#0099FF] rounded-[2px] shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#242424] font-semibold">
                <FileText className="w-4 h-4 text-[#0099FF] shrink-0" />
                <span>Official Release Updates</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                Interested buyers and partners may register their details with our advisory desk to
                receive the official project brief, location disclosure, and master-plan overview as
                soon as they are released.
              </p>
              <Button variant="primary" size="sm" onClick={onRegisterInterest} withArrow>
                Request Release Updates
              </Button>
            </div>
          </div>

          {/* Right Column: Structured Project Information Ledger (7 Cols) */}
          <div className="lg:col-span-7 sap-info-panel bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] shadow-md overflow-hidden">
            <div className="px-6 sm:px-8 py-5 bg-[#242424] text-[#FDFBFF] flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#EDC455] font-semibold">
                STARRBITES PORTFOLIO DOSSIER • STAY AND PLAY
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FDFBFF]/80">
                <Clock className="w-3.5 h-3.5 text-[#0099FF]" />
                <span>Verified Summary</span>
              </span>
            </div>

            <dl className="divide-y divide-[#E2E6EC]">
              {PROJECT_INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="px-6 sm:px-8 py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start sm:items-center hover:bg-[#F3F6FA]/60 transition-colors"
                >
                  <dt className="sm:col-span-4 text-xs font-mono uppercase tracking-wider text-[#4A4A4A] font-semibold">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-sm sm:text-base font-serif text-[#242424] font-medium">
                      {item.value}
                    </span>
                    <span
                      className={`inline-block w-fit text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-[2px] font-semibold shrink-0 ${
                        item.status === "Confirmed"
                          ? "bg-[#0099FF]/15 text-[#242424]"
                          : "bg-[#EDC455]/35 text-[#242424]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

