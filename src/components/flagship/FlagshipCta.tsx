"use client";

import React, { useEffect, useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface FlagshipCtaProps {
  onOpenEnquiry?: () => void;
}

export function FlagshipCta({ onOpenEnquiry }: FlagshipCtaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
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
      id="flagship-cta"
      className="py-24 sm:py-32 bg-[#354B5D] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle light radial background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFFFFF]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="standard">
        <div
          ref={cardRef}
          className="relative z-10 text-center max-w-[760px] mx-auto"
        >
          <SectionEyebrow theme="gold" className="justify-center mb-4">
            Take the Next Step
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FFFFFF] font-normal leading-[1.18] mb-6">
            <span className="text-[#FFFFFF]">Explore Tiiger Trail or</span>{" "}
            <span className="italic font-light text-[#A98556]">
              Speak to Our Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFFFFF]/85 font-light leading-relaxed mb-10">
            Discover detailed project specifications, architectural concepts, and
            planned amenities on the dedicated Tiiger Trail project website, or
            arrange a personal consultation with the Starrbites advisory desk in
            Bengaluru.
          </p>

          {/* Two Clear Paths */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
            <Button
              variant="gold"
              size="lg"
              href="https://tiigertrail.com/"
              isExternal
              withArrow
            >
              Explore tiigertrail.com
            </Button>

            <Button
              variant="inverted"
              size="lg"
              onClick={onOpenEnquiry}
            >
              Speak to Our Team
            </Button>
          </div>

          {/* Verified Corporate Contact Details */}
          <div className="pt-10 border-t border-[#FFFFFF]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-[720px] mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-3.5 h-3.5 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#A98556] font-semibold mb-1">
                  Telephone Inquiries
                </span>
                <a
                  href="tel:+919740806357"
                  className="text-xs sm:text-sm font-medium text-[#FFFFFF] hover:text-[#A98556] transition-colors block"
                >
                  +91 97408 06357
                </a>
                <a
                  href="tel:+918861197979"
                  className="text-xs sm:text-sm font-medium text-[#FFFFFF] hover:text-[#A98556] transition-colors block"
                >
                  +91 88611 97979
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#A98556] font-semibold mb-1">
                  Corporate Office
                </span>
                <p className="text-xs text-[#FFFFFF]/85 font-normal leading-relaxed">
                  HIG Dollars Colony, RMV 2nd Stage, Bengaluru - 560094
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#292D30] border border-[#A98556]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#A98556]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#A98556] font-semibold mb-1">
                  Advisory Hours
                </span>
                <p className="text-xs text-[#FFFFFF] font-normal">
                  9:00 AM – 7:00 PM IST
                  <span className="block text-[#FFFFFF]/75 font-light">
                    Monday to Sunday
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
