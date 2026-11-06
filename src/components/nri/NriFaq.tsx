"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function NriFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can Non-Resident Indians (NRIs) legally buy land in India?",
      answer:
        "Under Reserve Bank of India (RBI) and Foreign Exchange Management Act (FEMA) regulations, NRIs and OCIs can purchase residential and commercial immovable property in India without special permission. However, general regulations prohibit NRIs from directly purchasing agricultural land or plantation property unless specific statutory conversion or permission processes have been satisfied. Because individual title classifications and state laws differ, we advise discussing specific project classifications with qualified legal counsel.",
    },
    {
      question: "Can I complete the purchase without travelling to India?",
      answer:
        "Yes, many overseas buyers formalize purchases by executing a specific registered Power of Attorney (PoA) in favor of a trusted family member or appointed legal counsel in India. The PoA must typically be notarized and adjudicated by the Indian consulate/embassy in your country of residence before registration in India. We coordinate closely with your legal representative throughout this process.",
    },
    {
      question: "What documents will Starrbites provide for legal verification?",
      answer:
        "We provide comprehensive documentation dossiers for independent advocate scrutiny. This includes 30-year parent deed traces, registered title flow documents, latest Encumbrance Certificates (Form 15), certified revenue records (RTC / Pahani), mutation entries, official village survey maps, and boundary demarcation sketches.",
    },
    {
      question: "How are funds remitted for property purchases in India?",
      answer:
        "In accordance with RBI regulations, payments for immovable property in India by NRIs/OCIs must be remitted from abroad through normal banking channels (NRE or FCNR accounts) or drawn from funds held in an NRO account in India. No cash transactions or foreign currency payments are permitted.",
    },
    {
      question: "How do you coordinate remote site inspections and consultations?",
      answer:
        "We organize structured live video walkthroughs of the project site, coordinate drone perspective footage, and share high-resolution aerial layout maps. Additionally, we welcome any appointed family members or advocates in India to tour the location physically on your behalf.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#F5F1E9] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-[760px] mb-16 sm:mb-20">
          <SectionEyebrow theme="charcoal" className="mb-4">
            Common Clarifications
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
            Frequently Asked Questions{" "}
            <span className="italic font-light text-[#55534F]">
              by Global Buyers
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
            Essential information regarding legal frameworks, documentation, remote
            representation, and banking channels for overseas investors.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-[920px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className={`bg-[#FFFFFF] border rounded-sm overflow-hidden transition-all duration-200 shadow-sm ${
                  isOpen ? "border-[#354B5D]" : "border-[#DDD7CC]"
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#354B5D]"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-[#292D30] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#354B5D] text-[#FFFFFF]"
                        : "bg-[#F5F1E9] text-[#292D30]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 text-sm sm:text-base text-[#55534F] font-light leading-relaxed border-t border-[#DDD7CC]/60 animate-in fade-in duration-300"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Advisory Help Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#55534F] font-light">
            Have a question not addressed here? Contact our desk directly at{" "}
            <a
              href="mailto:contact@starrbites.com"
              className="text-[#354B5D] font-medium underline hover:text-[#A98556]"
            >
              contact@starrbites.com
            </a>{" "}
            or telephone{" "}
            <a
              href="tel:+919740806357"
              className="text-[#354B5D] font-medium underline hover:text-[#A98556]"
            >
              +91 97408 06357
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
