"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Clock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EnquiryModal } from "@/components/sections/EnquiryModal";

export default function PrivacyPolicyPage() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-1 bg-[#FFFFFF] pt-36 pb-24">
        {/* Editorial Legal Header */}
        <section className="border-b border-[#DDD7CC] pb-14 bg-[#F5F1E9]">
          <Container size="wide">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 text-xs text-[#292D30] hover:text-[#526B80] font-medium transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Return to Homepage</span>
                </Link>
              </div>

              <SectionEyebrow theme="navy" className="mb-3">
                GOVERNANCE & DATA PROTECTION
              </SectionEyebrow>

              <h1 className="text-4xl sm:text-5xl font-serif text-[#292D30] font-semibold tracking-tight leading-[1.18]">
                Starrbites Privacy Policy
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#55534F]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#A98556]" />
                  Last Updated: October 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#A98556]" />
                  Direct Client Advisory Commitment
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Legal Body Section */}
        <section className="pt-16">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl">
              {/* Quick Summary Sidebar */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <div className="bg-[#F5F1E9] border border-[#DDD7CC] border-t-4 border-t-[#354B5D] rounded-[2px] p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#292D30]">
                      <FileText className="w-4 h-4 text-[#A98556]" />
                      <span>Summary Highlights</span>
                    </div>
                    <ul className="space-y-3 text-xs text-[#55534F] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A98556] shrink-0 mt-1.5" />
                        <span>We collect only information submitted directly via inquiry forms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A98556] shrink-0 mt-1.5" />
                        <span>Data is used solely for property advisory, project briefings, and due diligence follow-up.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A98556] shrink-0 mt-1.5" />
                        <span>We never sell or distribute client contacts to external marketing brokers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A98556] shrink-0 mt-1.5" />
                        <span>You retain the right to request review, correction, or deletion of your records.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#354B5D] text-[#FFFFFF] p-6 rounded-[2px] border-t-4 border-[#A98556] space-y-3">
                    <h3 className="text-sm font-serif font-semibold text-[#FFFFFF]">
                      Privacy Inquiries
                    </h3>
                    <p className="text-xs text-[#FFFFFF]/80 font-light leading-relaxed">
                      For any questions regarding personal data or to request record deletion:
                    </p>
                    <a
                      href="mailto:contact@starrbites.com"
                      className="text-xs text-[#A98556] underline block hover:text-white transition-colors"
                    >
                      contact@starrbites.com
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Policy Content */}
              <article className="lg:col-span-8 order-1 lg:order-2 space-y-12 text-[#55534F] leading-relaxed font-light">
                {/* 1. Introduction */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    1. Introduction & Organizational Scope
                  </h2>
                  <p>
                    Starrbites Developments (&ldquo;Starrbites&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a
                    Bangalore-based land development and plotted estate firm headquartered at No. 194, 3rd Main,
                    13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bengaluru, Karnataka 560094, India.
                  </p>
                  <p>
                    This Privacy Policy describes our practices concerning the collection, storage, use,
                    and protection of personal information gathered through our official corporate website
                    (starrbites.com) and associated direct advisory contact channels. We conduct our
                    business with transparency, confidentiality, and respect for client privacy.
                  </p>
                </div>

                {/* 2. Information Collected */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    2. Information We Collect
                  </h2>
                  <p>
                    We collect personal information that you voluntarily choose to provide when interacting
                    with our advisory desk, submitting consultation requests, or inquiring about specific
                    land developments such as Tiiger Trail. This information includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-[#55534F]">
                    <li>
                      <strong className="text-[#292D30]">Contact Identifiers:</strong> Your full name, email address, telephone and/or
                      WhatsApp number, and international country code.
                    </li>
                    <li>
                      <strong className="text-[#292D30]">Geographic & Residency Information:</strong> Your declared country and city
                      of residence, relevant for cross-border NRI title frameworks and time-zone coordination.
                    </li>
                    <li>
                      <strong className="text-[#292D30]">Investment & Project Interests:</strong> Project preferences (e.g., Tiiger
                      Trail, plotted farmland, joint ventures), investment horizon, and preferred contact channel.
                    </li>
                    <li>
                      <strong className="text-[#292D30]">Specific Inquiries & Messages:</strong> Any details, requirements, or title
                      queries included in your submitted message text.
                    </li>
                    <li>
                      <strong className="text-[#292D30]">Technical Web Logs:</strong> Standard web server access logs (including IP
                      addresses, browser user-agent strings, referring URLs, and access timestamps) recorded
                      automatically to ensure operational stability, rate limiting, and spam prevention.
                    </li>
                  </ul>
                </div>

                {/* 3. Purpose of Processing */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    3. How We Use Your Information
                  </h2>
                  <p>
                    Starrbites uses personal information strictly for legitimate commercial, advisory, and
                    administrative purposes, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-[#55534F]">
                    <li>Directly responding to your inquiries regarding land availability, layouts, and master plans.</li>
                    <li>Transmitting verified title dossiers, mutation process guidelines, and project brochures.</li>
                    <li>Scheduling private site inspections, video consultations, and in-person meetings at our Dollars Colony office.</li>
                    <li>Facilitating specialized NRI advisory briefings concerning FEMA compliance and remote registration.</li>
                    <li>Monitoring our communication channels against automated spam, abusive submissions, and security threats.</li>
                  </ul>
                </div>

                {/* 4. Information Sharing & Third Parties */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    4. Information Sharing & Disclosure Policy
                  </h2>
                  <p>
                    <strong className="text-[#292D30]">We do not sell, rent, monetize, or lease personal information to third-party marketing companies, brokers, or data aggregators.</strong>
                  </p>
                  <p>
                    Your information is accessed strictly on a need-to-know basis by authorized Starrbites
                    partners, legal counsel, and client relationship managers. Where external service
                    providers are utilized (such as encrypted cloud infrastructure, authenticated CRM
                    webhooks, or telecommunication dispatch providers), they are bound by strict
                    confidentiality standards and are permitted to process information solely to provide
                    services to Starrbites.
                  </p>
                </div>

                {/* 5. Data Storage, Security & Retention */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    5. Data Storage, Security & Retention Practices
                  </h2>
                  <p>
                    All form submissions on this website are transmitted using Secure Sockets Layer /
                    Transport Layer Security (HTTPS/TLS) encryption. While no digital transmission over the
                    Internet can be guaranteed to be entirely invulnerable, we apply appropriate technical
                    and administrative safeguards to prevent unauthorized access, alteration, or disclosure.
                  </p>
                  <p>
                    We retain personal inquiry data for the duration required to fulfill the commercial and
                    advisory purpose for which it was collected, to maintain an accurate audit history of
                    our client communications, or until you explicitly request the removal of your contact
                    record.
                  </p>
                </div>

                {/* 6. Cookies and Tracking */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    6. Cookies & Tracking Technologies
                  </h2>
                  <p>
                    Our website uses essential functional cookies necessary for page navigation, session
                    security, and user preference retention. We do not use third-party behavioral advertising
                    cookies or cross-site tracking trackers.
                  </p>
                </div>

                {/* 7. User Rights & Contact */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-semibold text-[#292D30]">
                    7. Your Rights & Privacy Requests
                  </h2>
                  <p>
                    You have the right to request a summary of the personal information we hold regarding
                    your communications, request the correction of any inaccurate details, or request that
                    we cease sending advisory communications and delete your contact details from our active
                    advisory database.
                  </p>
                  <p>
                    To exercise any of these rights, please contact our administrative desk:
                  </p>
                  <div className="p-6 bg-[#F5F1E9] border border-[#DDD7CC] border-l-4 border-l-[#354B5D] rounded-[2px] space-y-2 text-sm">
                    <div className="font-semibold text-[#292D30]">Starrbites Developments — Privacy Desk</div>
                    <div>Email: <a href="mailto:contact@starrbites.com" className="text-[#354B5D] font-medium underline">contact@starrbites.com</a></div>
                    <div>Telephone: <a href="tel:+919740806357" className="text-[#354B5D] font-medium underline">+91 97408 06357</a></div>
                    <div className="text-xs text-[#55534F] pt-1">
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
        defaultTopic="Privacy Policy Inquiry"
      />
    </>
  );
}
