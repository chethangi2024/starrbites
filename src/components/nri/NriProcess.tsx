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
      gsap.fromTo(
        ".nri-process-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    {
      num: "01",
      title: "Initial Enquiry & Remote Briefing",
      summary:
        "Connect with our Bengaluru corporate desk via video conference or phone. We discuss project concepts, regional location dynamics, and your family's objectives.",
      action: "Project presentation & corridor overview",
    },
    {
      num: "02",
      title: "Documentation & Virtual Review",
      summary:
        "We share verified parent deeds, survey maps, RTC documentation, and master-plan drawings for independent legal examination by your counsel.",
      action: "Digital dossier access & video walkthrough",
    },
    {
      num: "03",
      title: "Representative Site Visit",
      summary:
        "If you are unable to travel immediately, trusted family members or appointed advocates in India are welcomed for an on-ground physical inspection.",
      action: "Physical site tour & boundary review",
    },
    {
      num: "04",
      title: "Formalisation & Registry",
      summary:
        "Structured agreements, statutory registration via Power of Attorney (PoA) or in-person visit, followed by individual mutation and khata execution.",
      action: "Clear execution & title handover",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Structured Workflow
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Understanding the Process{" "}
            <span className="italic font-light text-[#55534F]">
              from Abroad
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
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
              className="nri-process-card bg-[#F5F1E9] p-8 rounded-sm border border-[#DDD7CC] border-t-4 border-t-[#354B5D] hover:border-[#354B5D] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD7CC]">
                  <span className="text-lg font-serif font-medium text-[#354B5D] bg-[#A98556]/20 px-2.5 py-0.5 rounded-sm">
                    {stage.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#55534F] font-semibold">
                    Stage
                  </span>
                </div>

                <h3 className="text-xl font-serif font-normal text-[#292D30] mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#55534F] font-light leading-relaxed mb-6">
                  {stage.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDD7CC]/80">
                <span className="block text-[10px] uppercase tracking-wider text-[#55534F] font-semibold mb-0.5">
                  Milestone Focus
                </span>
                <span className="text-xs text-[#292D30] font-medium">
                  {stage.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
