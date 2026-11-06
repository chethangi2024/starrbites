"use client";

import React, { useEffect, useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface AboutCtaProps {
  onOpenEnquiry?: () => void;
}

export function AboutCta({ onOpenEnquiry }: AboutCtaProps) {
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
      id="corporate-enquiry"
      className="py-24 sm:py-32 bg-[#F5F1E9] relative"
    >
      <Container size="standard">
        <div
          ref={cardRef}
          className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-sm p-8 sm:p-14 lg:p-16 shadow-sm text-center relative overflow-hidden"
        >
          {/* Navy & Gold top accent border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#354B5D] via-[#A98556] to-[#354B5D]" />

          <SectionEyebrow theme="charcoal" className="justify-center mb-4">
            Start a Conversation
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.18] max-w-[700px] mx-auto mb-6">
            Connect with the Starrbites Advisory Team
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed max-w-[620px] mx-auto mb-10">
            Whether you are requesting project documentation for Tiiger Trail, exploring our strategic
            pipeline, or discussing corporate partnerships, our Bengaluru office is ready to assist you.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEnquiry}
            >
              Request a Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact-us/"
            >
              Contact Corporate Office
            </Button>
          </div>

          {/* Direct Verified Contact Coordinates */}
          <div className="pt-10 border-t border-[#DDD7CC] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-[760px] mx-auto">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#354B5D] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#55534F] font-semibold mb-1">
                  Telephone Advisory
                </span>
                <a
                  href="tel:+919740806357"
                  className="text-xs sm:text-sm font-medium text-[#292D30] hover:text-[#A98556] transition-colors block"
                >
                  +91 97408 06357
                </a>
                <a
                  href="tel:+918861197979"
                  className="text-xs sm:text-sm font-medium text-[#292D30] hover:text-[#A98556] transition-colors block"
                >
                  +91 88611 97979
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#354B5D] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#55534F] font-semibold mb-1">
                  Registered Office
                </span>
                <p className="text-xs text-[#292D30] font-normal leading-relaxed">
                  HIG Dollars Colony, RMV 2nd Stage, Bengaluru - 560094
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#354B5D] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#55534F] font-semibold mb-1">
                  Consultation Hours
                </span>
                <p className="text-xs text-[#292D30] font-normal">
                  9:00 AM – 7:00 PM IST
                  <span className="block text-[#55534F] font-light">
                    7 Days a Week
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
