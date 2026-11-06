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
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Manifesto & Context (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Methodical Guidance
            </SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
              An Informed Way to{" "}
              <span className="italic font-light text-[#55534F]">
                Explore from Abroad
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed mb-6">
              Acquiring land in India while residing overseas requires clear
              information, verifiable facts, and unhurried decision-making. We have
              structured our advisory process to prioritize transparency over haste.
            </p>

            <div className="p-6 bg-[#F5F1E9] border-l-4 border-[#354B5D] rounded-sm">
              <span className="inline-block px-2 py-0.5 bg-[#A98556]/20 text-[10px] uppercase tracking-[0.16em] text-[#354B5D] font-semibold mb-2 rounded-xs">
                Custom Circumstances
              </span>
              <p className="text-xs text-[#292D30] font-normal leading-relaxed">
                Because foreign exchange regulations (FEMA) and property categories
                depend on individual residency status and specific project titles,
                our process is structured to accommodate each buyer&apos;s unique profile.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Sequential Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {explorePillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-[#F5F1E9] p-8 sm:p-10 rounded-sm border border-[#DDD7CC] hover:border-[#354B5D] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
                >
                  <div className="flex sm:flex-col items-center gap-3 shrink-0">
                    <span className="text-xl font-serif font-semibold bg-[#A98556]/20 text-[#354B5D] px-3 py-1 rounded-[2px]">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#354B5D]/10 border border-[#354B5D]/20 flex items-center justify-center text-[#354B5D]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#292D30]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#55534F] font-light leading-relaxed">
                      {item.description}
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
