"use client";

import React from "react";
import Image from "next/image";
import { Globe, Video, FileCheck, UserCheck } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

interface NriSectionProps {
  onOpenEnquiry?: () => void;
}

export function NriSection({ onOpenEnquiry }: NriSectionProps) {
  const pillars = [
    {
      icon: Video,
      title: "Virtual Site Consultations",
      text: "Remote video briefings and virtual walkthrough coordination, where available, for overseas buyers.",
    },
    {
      icon: FileCheck,
      title: "Documentation Guidance",
      text: "Structured access to available parent deeds, survey maps, and mutation records for independent review.",
    },
    {
      icon: Globe,
      title: "Regulatory & Process Clarity",
      text: "Practical guidance on purchase steps and coordination with qualified legal and tax advisors.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Advisory Point",
      text: "Direct communication with our Bengaluru team scheduled around international time zones.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#EAE5DA] relative border-t border-b border-[#DDD7CC]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Advisory Badge (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#DDD7CC] rounded-[2px] shadow-lg">
              <Image
                src="/images/stock/editorial/editorial-leadership-space.jpg"
                alt="Executive consultation space for NRI advisory"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#FFFFFF]/95 backdrop-blur-sm border-l-4 border-[#354B5D] shadow-sm">
                <p className="text-xs font-semibold text-[#292D30] uppercase tracking-wider">
                  NRI &amp; Overseas Buyer Desk
                </p>
                <p className="text-xs text-[#55534F] mt-1">
                  Dedicated remote documentation review and consultation support from Bengaluru.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Services (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <SectionEyebrow theme="slate">NRI Investment Guidance</SectionEyebrow>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292D30] font-semibold tracking-tight leading-[1.16]">
              A clearer way to explore land opportunities in India,{" "}
              <span className="italic font-normal text-[#292D30] border-b-2 border-[#A98556]">
                wherever you are.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed max-w-[620px]">
              Evaluating land from abroad requires clear information, verifiable documentation, and
              unhurried coordination. Distinct from domestic transactions, our NRI desk helps overseas
              Indian buyers review project records and understand each step of the acquisition process.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] space-y-2 hover:border-[#526B80] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-[2px] bg-[#EAE5DA] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#354B5D]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#292D30]">{p.title}</h4>
                    <p className="text-xs text-[#55534F] leading-relaxed font-light">{p.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="md" href="/nri/" withArrow>
                Explore NRI Services
              </Button>
              {onOpenEnquiry ? (
                <Button variant="secondary" size="md" onClick={onOpenEnquiry}>
                  Book Consultation
                </Button>
              ) : (
                <Button variant="secondary" size="md" href="/contact-us/">
                  Book Consultation
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
