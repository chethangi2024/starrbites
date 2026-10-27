"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".nri-process-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    {
      num: "01",
      title: "Initial Enquiry",
      summary:
        "The prospective buyer shares their background, specific project interests, and preferred communication channel (Email, WhatsApp, or scheduled video call).",
      action: "Direct inquiry submission",
    },
    {
      num: "02",
      title: "Project Information",
      summary:
        "Our Bengaluru team responds with verified project dossiers, survey demarcations, available documentation summaries, and regional location context.",
      action: "Information & dossier sharing",
    },
    {
      num: "03",
      title: "Questions & Due Diligence",
      summary:
        "The buyer reviews the materials at their own pace and engages their independent Indian legal, tax, and financial counselors to scrutinize documents and confirm eligibility.",
      action: "Independent counsel examination",
    },
    {
      num: "04",
      title: "Next Steps",
      summary:
        "Any subsequent discussion, in-person family site tour, documentation scheduling, or transaction step is customized to the specific project and the verified requirements of the buyer.",
      action: "Customized coordination",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="mb-4">
            Structured Workflow
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
            Understanding the Process{" "}
            <span className="italic font-light text-[#555555]">
              from Abroad
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Our international coordination process is deliberate and unpressured. We
            provide the facts, share the documentation, and respect the time needed to
            conduct independent verification.
          </p>
        </div>

        {/* 4-Stage Process Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="nri-process-card bg-[#F6F6F4] p-8 rounded-sm border border-[#E7E7E7] hover:border-[#EDC455] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E7E7]">
                  <span className="text-2xl font-serif font-light text-[#EDC455] group-hover:text-[#C88218] transition-colors">
                    {stage.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#555555] font-semibold">
                    Stage
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#171C56] mb-3 group-hover:text-[#C88218] transition-colors">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {stage.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E7E7]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#171C56] font-semibold mb-0.5">
                  Milestone Focus
                </span>
                <span className="text-xs text-[#242424] font-medium">
                  {stage.action}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Workflow Note */}
        <div className="p-4 bg-[#F6F6F4] border border-[#E7E7E7] rounded-sm text-center">
          <p className="text-xs text-[#555555] font-light">
            * Each transaction is individualized; timelines and formal documentation requirements depend upon project category and individual buyer residency classification.
          </p>
        </div>
      </Container>
    </section>
  );
}
