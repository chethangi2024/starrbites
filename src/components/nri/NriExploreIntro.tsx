"use client";

import React, { useEffect, useRef } from "react";
import { Compass, FileText, Users } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriExploreIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const explorePillars = [
    {
      num: "01",
      icon: Compass,
      title: "Understand the Project and Its Regional Setting",
      description:
        "Begin by examining the location fundamentals: proximity to high-speed transportation corridors (such as the NH-44 North Bangalore axis), surrounding economic infrastructure, and natural topographical context. We provide detailed regional overviews and geographic context tailored for remote evaluation.",
    },
    {
      num: "02",
      icon: FileText,
      title: "Request Verified Project and Title Documentation",
      description:
        "Before any financial conversation, prospective buyers can request available title documents, survey blueprints, boundary maps, and mutation filings. We provide direct digital dossiers so your family and independent legal representatives can examine the paperwork with full transparency.",
    },
    {
      num: "03",
      icon: Users,
      title: "Consult with the Team and Qualified Independent Advisors",
      description:
        "Every overseas buyer operates within distinct legal and tax jurisdictions (NRI, OCI, or PIO status). We encourage thorough discussions with our Bengaluru advisory team alongside your independent Indian legal, tax, and financial counselors to confirm individual eligibility and procedural clarity.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="informed-exploration"
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Manifesto & Context (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <SectionEyebrow theme="navy" className="mb-4">
              Methodical Guidance
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
              An Informed Way to{" "}
              <span className="italic font-light text-[#555555]">
                Explore from Abroad
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed mb-6">
              Acquiring land in India while residing overseas requires clear
              information, verifiable facts, and unhurried decision-making. We have
              structured our advisory process to prioritize transparency over haste.
            </p>

            <div className="p-6 bg-[#F6F6F4] border-l-4 border-[#171C56] rounded-sm">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-[#C88218] font-semibold mb-1">
                Custom Circumstances
              </span>
              <p className="text-xs text-[#242424] font-normal leading-relaxed">
                Because foreign exchange regulations (FEMA) and property categories
                depend on individual residency status and specific project titles,
                our process is structured to accommodate each buyer's unique profile.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Structured Ideas (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {explorePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-[#F6F6F4] p-8 sm:p-10 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-sm bg-white border border-[#E7E7E7] flex items-center justify-center text-[#171C56] shrink-0 group-hover:border-[#EDC455] transition-colors">
                    <Icon className="w-6 h-6 text-[#C88218]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-xs font-serif text-[#EDC455] font-semibold tracking-wider">
                        Step {pillar.num}
                      </span>
                      <span className="text-[#E7E7E7]">•</span>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#555555] font-medium">
                        Fundamental Review
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#171C56] mb-3 group-hover:text-[#C88218] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#555555] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
