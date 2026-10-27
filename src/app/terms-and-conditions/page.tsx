"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Clock, ShieldAlert, FileCheck, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function TermsAndConditionsPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-1 bg-white pt-36 pb-24">
        {/* Editorial Legal Header */}
        <section className="border-b border-[#E7E7E7] pb-14 bg-[#F6F6F4]">
          <Container size="wide">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs text-[#171C56] hover:text-[#8B6C20] font-medium transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Homepage</span>
                </Link>
              </div>

              <SectionEyebrow theme="navy" className="mb-3">
                TERMS OF USE & PROPERTY DISCLAIMERS
              </SectionEyebrow>

              <h1 className="text-4xl sm:text-5xl font-serif text-[#171C56] font-semibold tracking-tight leading-[1.18]">
                Terms & Conditions
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#555555]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#EDC455]" />
                  Last Updated: October 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#EDC455]" />
                  Governing Use of starrbites.com
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Legal Body Section */}
        <section className="pt-16">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl">
              {/* Summary Sidebar */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <div className="bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171C56]">
                      <ShieldAlert className="w-4 h-4 text-[#EDC455]" />
                      <span>Key Disclaimers</span>
                    </div>
                    <ul className="space-y-3 text-xs text-[#555555] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455] shrink-0 mt-1.5" />
                        <span>Website content is informational and does not replace formal legal deeds or conveyances.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455] shrink-0 mt-1.5" />
                        <span>Submitting an inquiry does not constitute a property reservation, booking, or contract to sell.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455] shrink-0 mt-1.5" />
                        <span>Architectural renders represent conceptual design intent and may vary in actual execution.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EDC455] shrink-0 mt-1.5" />
                        <span>Land values and appreciation depend on macro factors; no fixed returns are guaranteed.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#171C56] text-white p-6 rounded-[2px] space-y-3">
                    <h3 className="text-sm font-serif font-semibold text-white">
                      Legal Notice
                    </h3>
                    <p className="text-xs text-[#F6F6F4]/80 font-light leading-relaxed">
                      Parties interested in land acquisition are strongly advised to engage independent legal
                      counsel to review physical revenue records and encumbrance certificates prior to executing
                      formal agreements.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Main Terms Content */}
              <article className="lg:col-span-8 order-1 lg:order-2 space-y-12 text-[#2D2D2D] leading-relaxed font-light">
                {/* 1. Introduction */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the corporate
                    website of Starrbites Developments (&ldquo;Starrbites&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                    accessible at starrbites.com.
                  </p>
                  <p>
                    By browsing, accessing, or utilizing any portion of this website, you acknowledge that you
                    have read, understood, and agreed to be bound by these Terms. If you do not agree with these
                    Terms, you should discontinue use of the website immediately.
                  </p>
                </div>

                {/* 2. Informational Purpose */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    2. Nature of Website Content & Informational Purpose
                  </h2>
                  <p>
                    All content presented on this website—including project descriptions, master layout concepts,
                    amenity lists, location maps, infrastructure analyses, and articles published in The
                    Starrbites Journal—is provided solely for general informational and educational guidance.
                  </p>
                  <p>
                    <strong>No Legal Advice:</strong> While Starrbites places primary emphasis on rigorous due
                    diligence and title transparency, materials on this website do not constitute formal legal,
                    financial, or investment advice and cannot substitute for an individualized title search
                    conducted by a qualified property attorney.
                  </p>
                </div>

                {/* 3. Real Estate & Statutory Disclaimers */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    3. Property Approvals, Titling & Statutory Compliance
                  </h2>
                  <p>
                    Land transactions and plotted developments are subject to state-specific statutory frameworks
                    (including the Karnataka Land Revenue Act, municipal zoning regulations, and local planning
                    authority guidelines).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-[#333333]">
                    <li>
                      <strong>Statutory Documentation:</strong> Specific approvals, conversion orders, podi survey
                      sketches, and revenue mutation entries (Dakhil Kharij / RTC) are verified on an individual
                      project and parcel basis. Reference to titling standards on this website does not replace
                      the formal verification of certified revenue extracts.
                    </li>
                    <li>
                      <strong>No Implied Warranties:</strong> While we endeavor to ensure all posted details are
                      accurate and up-to-date, we make no representations or warranties, express or implied,
                      regarding the absolute completeness or timeliness of every published piece of data.
                    </li>
                  </ul>
                </div>

                {/* 4. Investment & Appreciation Disclaimers */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    4. Investment, Appreciation & Agricultural Returns
                  </h2>
                  <p>
                    Any discussion regarding regional infrastructure growth (such as the Satellite Town Ring Road,
                    NH-44 expansions, industrial corridors, or Bangalore airport connectivity) reflects observed
                    market trends and publicly reported government master plans.
                  </p>
                  <p>
                    <strong>No Guaranteed Returns:</strong> Land investments and agricultural holdings carry
                    inherent market and environmental risks. Starrbites makes NO representation, projection, or
                    guarantee of capital appreciation, future resale prices, rental yields, or agricultural harvest
                    income. All prospective buyers must evaluate investments according to their own risk tolerance.
                  </p>
                </div>

                {/* 5. Visual Representations */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    5. Visual Representations, Renders & Conceptual Media
                  </h2>
                  <p>
                    Photographs, computer-generated architectural renders, virtual walkthroughs, and conceptual
                    illustrations displayed across the website (including depictions of Tiiger Trail farm-resort
                    amenities, landscaping, and club facilities) are artistic impressions created to illustrate
                    design intent.
                  </p>
                  <p>
                    Actual physical execution, boundary contours, planting maturity, and amenity features may
                    vary based on site conditions, statutory guidelines, and engineering determinations.
                  </p>
                </div>

                {/* 6. Non-Binding Nature */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    6. Non-Binding Nature of Website Inquiries
                  </h2>
                  <p>
                    Submitting an inquiry through our contact forms, telephoning our advisory desk, or receiving
                    a project brochure does <strong>NOT</strong> constitute a property reservation, allotment,
                    booking, transaction, or binding contract to sell.
                  </p>
                  <p>
                    A legally binding transaction occurs only upon the mutual execution of formal, written
                    agreements for sale, payment of agreed statutory stamp duty, and the registration of conveyance
                    deeds before the competent sub-registrar.
                  </p>
                </div>

                {/* 7. Intellectual Property */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    7. Intellectual Property Rights
                  </h2>
                  <p>
                    The website, its underlying architecture, visual design, logos, trademarks, original
                    dissertations in The Starrbites Journal, and graphic assets are the exclusive intellectual
                    property of Starrbites Developments. You may not copy, reproduce, scrape, republish, or
                    distribute any content without our prior written authorization.
                  </p>
                </div>

                {/* 8. Third-Party Links */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    8. External Links & Third-Party Platforms
                  </h2>
                  <p>
                    Our website may contain links to external sites (such as tiigertrail.com, news publications,
                    or official government portals). These links are provided for informational convenience.
                    Starrbites does not control and is not responsible for the availability, accuracy, or
                    privacy policies of external websites.
                  </p>
                </div>

                {/* 9. Governing Law */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    9. Governing Law & Jurisdiction
                  </h2>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the Republic of India.
                    Any legal proceedings arising out of or in connection with the use of this website shall be
                    subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
                  </p>
                  <p className="text-xs text-[#555555] italic">
                    Note: These provisions represent standard corporate terms and remain subject to periodic
                    review and updates by Starrbites legal counsel.
                  </p>
                </div>

                {/* 10. Contact */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#171C56]">
                    10. Inquiries & Official Notices
                  </h2>
                  <div className="p-6 bg-[#F6F6F4] border border-[#E7E7E7] rounded-[2px] space-y-2 text-sm">
                    <div className="font-semibold text-[#171C56]">Starrbites Developments — Corporate Office</div>
                    <div>Email: <a href="mailto:contact@starrbites.com" className="text-[#8B6C20] underline">contact@starrbites.com</a></div>
                    <div>Telephone: <a href="tel:+919740806357" className="text-[#8B6C20] underline">+91 97408 06357</a></div>
                    <div className="text-xs text-[#555555] pt-1">
                      No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bengaluru - 560094, Karnataka, India
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultTopic="Terms & Conditions Inquiry"
      />
    </>
  );
}
