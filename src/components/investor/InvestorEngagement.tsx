"use client";

import React, { useEffect, useRef } from "react";
import { Handshake, Users, Globe2, Building2 } from "lucide-react";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

interface InvestorEngagementProps {
  onSelectTopic: (topic: string) => void;
}

const ENGAGEMENT_CHANNELS = [
  {
    icon: Users,
    title: "Investment Enquiries",
    subtitle: "Portfolio Overview & Development Strategy",
    description:
      "For individual and institutional investors seeking factual information about Starrbites, our current destinations, and our long-term real-estate development strategy.",
    topic: "General Corporate Consultation",
    ctaText: "Discuss Portfolio",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    subtitle: "Collaborative Project Execution",
    description:
      "For design firms, hospitality operators, infrastructure specialists, and corporate professionals interested in exploring collaborative participation in upcoming developments.",
    topic: "Strategic & Land Development Partnerships",
    ctaText: "Explore Collaboration",
  },
  {
    icon: Building2,
    title: "Landowner Partnerships",
    subtitle: "Joint Development & Monetisation",
    description:
      "For landholders and estate owners with strategic parcels along growth corridors who seek disciplined joint development, master planning, and transparent project delivery.",
    topic: "Strategic & Land Development Partnerships",
    ctaText: "Discuss Land Partnership",
  },
  {
    icon: Globe2,
    title: "NRI & Global Stakeholders",
    subtitle: "Remote Advisory & Due Diligence",
    description:
      "For non-resident Indians and global families requiring verified title documentation, transparent spatial guidance, and dedicated remote acquisition facilitation in Bangalore.",
    topic: "NRI Investment & Remote Due Diligence",
    ctaText: "Connect with NRI Desk",
  },
];

export function InvestorEngagement({ onSelectTopic }: InvestorEngagementProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".investor-engagement-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      aria-labelledby="investor-engagement-heading"
    >
      <Container size="wide">
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            04 / INVESTOR AND PARTNERSHIP ENGAGEMENT
          </SectionEyebrow>
          <h2
            id="investor-engagement-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#242424] font-semibold leading-[1.15] tracking-tight"
          >
            Let&apos;s Explore Opportunities{" "}
            <span className="italic font-normal text-[#0099FF]">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light mt-4 leading-relaxed">
            Starrbites maintains direct, structured communication channels for distinct stakeholder
            groups. Select the relevant advisory desk below to begin a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENGAGEMENT_CHANNELS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="investor-engagement-card bg-[#FDFBFF] border border-[#E2E6EC] border-t-4 border-t-[#0099FF] rounded-[2px] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-[2px] bg-[#0099FF]/15 flex items-center justify-center text-[#0099FF]">
                      <Icon className="w-6 h-6 text-[#242424]" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#4A4A4A] block">
                        Channel
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#242424] font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#0099FF] font-semibold mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2E6EC] flex items-center justify-between">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onSelectTopic(item.topic)}
                    withArrow
                  >
                    {item.ctaText}
                  </Button>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#4A4A4A]">
                    Advisory Desk
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

