"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUp, Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function NriCta() {
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

  const handleScrollToForm = () => {
    const el = document.getElementById("nri-enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="nri-cta"
      className="py-24 sm:py-32 bg-[#0099FF] text-[#242424] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDFBFF]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="standard">
        <div
          ref={cardRef}
          className="relative z-10 text-center max-w-[760px] mx-auto"
        >
          <SectionEyebrow theme="charcoal" className="justify-center mb-4">
            Start a Conversation
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-normal leading-[1.18] mb-6">
            <span className="text-[#242424]">Explore Land Stewardship with</span>{" "}
            <span className="italic font-light text-[#242424] bg-[#EDC455] px-2.5 py-0.5 rounded-sm box-decoration-clone">
              Complete Confidence
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#242424] font-normal leading-relaxed mb-10">
            Whether you are evaluating documented plots at Tiiger Trail or seeking a
            clarifying discussion on Bangalore&apos;s growth corridors, our advisory team
            is here to assist your enquiry with transparency and care.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
            <Button
              variant="gold"
              size="lg"
              onClick={handleScrollToForm}
              className="gap-2"
            >
              Start an Enquiry <ArrowUp className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="https://tiigertrail.com/"
              isExternal
              withArrow
            >
              Explore Tiiger Trail Website
            </Button>
          </div>

          {/* Direct Corporate Channels */}
          <div className="pt-10 border-t border-[#242424]/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-[720px] mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#242424] font-semibold mb-1">
                  International Advisory
                </span>
                <a
                  href="tel:+919740806357"
                  className="text-xs sm:text-sm font-medium text-[#242424] hover:underline transition-colors block"
                >
                  +91 97408 06357
                </a>
                <a
                  href="tel:+918861197979"
                  className="text-xs sm:text-sm font-medium text-[#242424] hover:underline transition-colors block"
                >
                  +91 88611 97979
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#242424] font-semibold mb-1">
                  Bengaluru Office
                </span>
                <p className="text-xs text-[#242424]/90 font-normal leading-relaxed">
                  HIG Dollars Colony, RMV 2nd Stage, Bengaluru - 560094
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#EDC455] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#242424]" />
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#242424] font-semibold mb-1">
                  Coordination Hours
                </span>
                <p className="text-xs text-[#242424] font-normal">
                  9:00 AM – 7:00 PM IST
                  <span className="block text-[#242424]/85 font-light">
                    7 Days a Week (IST)
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
