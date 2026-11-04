"use client";

import React from "react";
import { AlertCircle, ShieldAlert } from "lucide-react";
import { Container } from "../ui/Container";

export function InvestorImportantInfo() {
  return (
    <section
      className="py-16 sm:py-20 bg-[#FDFBFF] text-[#242424] border-b border-[#E2E6EC]"
      aria-labelledby="investor-important-info-heading"
    >
      <Container size="wide">
        <div className="max-w-4xl mx-auto bg-[#F3F6FA] border border-[#C8D0DA] border-l-4 border-l-[#EDC455] p-8 sm:p-10 rounded-[2px] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-[2px] bg-[#EDC455]/30 flex items-center justify-center text-[#242424]">
              <ShieldAlert className="w-4 h-4 text-[#242424]" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A] block">
                05 / STATUTORY &amp; ADVISORY DISCLOSURE
              </span>
              <h2
                id="investor-important-info-heading"
                className="text-xl sm:text-2xl font-serif text-[#242424] font-semibold"
              >
                Clarity Before Commitment
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
            <p className="p-4 bg-[#FDFBFF] border border-[#E2E6EC] rounded-[2px] text-xs sm:text-sm text-[#242424] font-normal leading-relaxed">
              &ldquo;Project information, specifications, approvals, commercial terms and
              availability may vary by development and are subject to official documentation and
              confirmation. Visitors should independently review relevant legal, statutory and
              project documents before making any property or investment decision. Nothing on this
              page should be interpreted as a guarantee of returns, appreciation, income or
              investment performance.&rdquo;
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#4A4A4A] pt-2">
              <AlertCircle className="w-4 h-4 text-[#0099FF] shrink-0 mt-0.5" />
              <span>
                Starrbites Developments provides documentation packs, parent title deeds, and
                regulatory records exclusively through certified channels. This page does not
                constitute a public financial offer, securities prospectus, or collective investment
                solicitation.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

