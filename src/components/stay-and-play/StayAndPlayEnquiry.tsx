"use client";

import React, { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface StayAndPlayEnquiryProps {
  onRegisterInterest: () => void;
}

export function StayAndPlayEnquiry({ onRegisterInterest }: StayAndPlayEnquiryProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sap-enquiry-panel",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
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
      aria-labelledby="stay-and-play-enquiry-heading"
    >
      <Container size="wide">
        <div className="sap-enquiry-panel bg-[#242424] text-[#FDFBFF] border-t-4 border-[#0099FF] rounded-[2px] p-8 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FDFBFF 1px, transparent 1px), linear-gradient(to bottom, #FDFBFF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SectionEyebrow theme="gold">
                06 / STAY AND PLAY ENQUIRY
              </SectionEyebrow>

              <h2
                id="stay-and-play-enquiry-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FDFBFF] font-normal leading-[1.15]"
              >
                Be Among the First to Know
              </h2>

              <p className="text-base sm:text-lg text-[#FDFBFF]/85 font-light leading-relaxed max-w-2xl">
                Register your interest with the Starrbites advisory desk to request official
                project information, master-plan documentation, and location details for{" "}
                <strong className="font-medium text-[#FDFBFF]">Stay and Play</strong> when they
                become available.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={onRegisterInterest}
                withArrow
                className="w-full justify-center"
              >
                Register Your Interest
              </Button>

              <div className="pt-3 border-t border-[#FDFBFF]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#FDFBFF]/75">
                <span>Direct Advisory Desk:</span>
                <a
                  href="tel:+919740806357"
                  className="inline-flex items-center gap-1.5 text-[#EDC455] hover:text-[#FDFBFF] transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 97408 06357</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

