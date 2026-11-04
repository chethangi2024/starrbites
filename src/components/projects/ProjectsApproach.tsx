"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

const APPROACH_STAGES = [
  {
    step: "01",
    title: "Corridor Selection",
    subtitle: "Strategic Growth Geography",
    description:
      "Every Starrbites project begins with disciplined corridor analysis—identifying regions backed by highway connectivity, emerging regional infrastructure, and natural terrain character that support genuine long-term land utility.",
  },
  {
    step: "02",
    title: "Title Diligence",
    subtitle: "Documented Legal Clarity",
    description:
      "Before a project is brought into our portfolio, land parcels undergo rigorous multi-decade title verification, revenue record scrutiny, and statutory compliance checks to ensure unencumbered, verifiable ownership.",
  },
  {
    step: "03",
    title: "Master Planning",
    subtitle: "Terrain-First Architecture",
    description:
      "Layouts are engineered around natural topography, watershed contours, and native tree cover. Internal road networks, utilities, and shared leisure zones are planned to remain functional and resilient across decades.",
  },
  {
    step: "04",
    title: "Transparent Buyer Facilitation",
    subtitle: "Structured Acquisition & Support",
    description:
      "From initial document review and physical or virtual site walkthroughs to registration coordination, our advisory process is structured for clarity—serving both resident buyers and global NRI families.",
  },
];

export function ProjectsApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGSAP();

    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-approach-header",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      const cards = gsap.utils.toArray(".projects-approach-card");
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-approach-grid",
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="projects-approach-heading"
      className="py-24 md:py-32 bg-[#F2F9FF] text-[#242424] border-b border-[#DCEBFA] relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #242424 1px, transparent 1px), linear-gradient(to bottom, #242424 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="projects-approach-header flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 gap-8 pb-10 border-b border-[#DCEBFA]">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0099FF] block mb-4 font-medium">
              03 / Our Development Approach
            </span>
            <h2
              id="projects-approach-heading"
              className="font-serif text-3xl md:text-5xl text-[#242424] leading-[1.15] font-normal"
            >
              How Starrbites Shapes{" "}
              <span className="italic text-[#0099FF]">Every Destination.</span>
            </h2>
          </div>
          <p className="font-sans text-[#4A4A4A] text-base md:text-lg max-w-md leading-relaxed">
            Whether developing a nature-first farm-resort corridor or an upcoming recreational destination, every project in our portfolio follows four non-negotiable development stages.
          </p>
        </div>

        {/* 4-Stage Portfolio Grid */}
        <div className="projects-approach-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {APPROACH_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="projects-approach-card bg-[#FDFBFF] border border-[#DCEBFA] p-8 md:p-9 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-[#0099FF] hover:shadow-[0_12px_35px_rgba(0,153,255,0.07)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#DCEBFA]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0099FF] font-semibold">
                    Stage {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#EDC455] group-hover:bg-[#0099FF] transition-colors" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A] block mb-2">
                  {stage.subtitle}
                </span>

                <h3 className="font-serif text-2xl text-[#242424] mb-4 font-normal group-hover:text-[#0099FF] transition-colors">
                  {stage.title}
                </h3>

                <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DCEBFA]/60 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                  Portfolio Standard
                </span>
                <span className="w-6 h-[2px] bg-[#EDC455] group-hover:w-10 group-hover:bg-[#0099FF] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Contextual Links Bar */}
        <div className="mt-14 pt-8 border-t border-[#DCEBFA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-sans text-sm text-[#4A4A4A]">
            Evaluating a Starrbites development from abroad or seeking deeper corporate governance context?
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#242424] hover:text-[#0099FF] transition-colors font-medium group"
            >
              <span>About Starrbites</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0099FF] transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/nri/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#242424] hover:text-[#0099FF] transition-colors font-medium group"
            >
              <span>NRI Acquisition Desk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0099FF] transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
