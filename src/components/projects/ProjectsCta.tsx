"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface ProjectsCtaProps {
  onOpenEnquiry: (topic?: string) => void;
}

export function ProjectsCta({ onOpenEnquiry }: ProjectsCtaProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGSAP();

    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-cta-panel",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="projects-cta-heading"
      className="py-24 md:py-32 bg-[#FDFBFF] text-[#242424]"
    >
      <Container>
        <div className="projects-cta-panel bg-[#242424] text-[#FDFBFF] rounded-sm p-10 md:p-16 lg:p-20 relative overflow-hidden border border-[#242424] shadow-[0_24px_60px_rgba(36,36,36,0.12)]">
          {/* Subtle Architectural Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FDFBFF 1px, transparent 1px), linear-gradient(to bottom, #FDFBFF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          {/* Top Gold Accent Rule */}
          <div className="w-16 h-[2px] bg-[#EDC455] mb-8 relative z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#EDC455] block mb-4">
                04 / Portfolio Advisory & Enquiries
              </span>
              <h2
                id="projects-cta-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDFBFF] leading-[1.15] font-normal mb-6"
              >
                Explore a Starrbites Development
              </h2>
              <p className="font-sans text-[#FDFBFF]/85 text-base md:text-lg leading-relaxed max-w-2xl">
                Whether you are evaluating farmland ownership at{" "}
                <strong className="text-[#FDFBFF] font-medium">Tiiger Trail</strong>, registering early interest in{" "}
                <strong className="text-[#FDFBFF] font-medium">Stay and Play</strong>, or initiating a broader development or landowner partnership enquiry, our advisory team will connect you with the right project documentation and consultation desk.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <Button
                variant="gold"
                size="lg"
                onClick={() => onOpenEnquiry("General Corporate Consultation")}
                className="w-full justify-center group"
              >
                <MessageSquare className="mr-2.5 w-4 h-4" />
                <span>Discuss a Project or Enquiry</span>
              </Button>

              <Button
                variant="outlined"
                size="lg"
                onClick={() =>
                  onOpenEnquiry("Stay and Play — Upcoming Project Enquiry")
                }
                className="w-full justify-center border-[#FDFBFF]/30 text-[#FDFBFF] hover:bg-[#FDFBFF] hover:text-[#242424]"
              >
                <span>Register Interest in Stay and Play</span>
              </Button>

              <div className="pt-3 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#FDFBFF]/70 border-t border-[#FDFBFF]/15 mt-2">
                <span>Prefer direct correspondence?</span>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-1.5 text-[#EDC455] hover:text-[#FDFBFF] transition-colors font-medium"
                >
                  <span>Contact Office</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
