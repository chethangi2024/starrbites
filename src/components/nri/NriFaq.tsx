"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function NriFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I request information about a Starrbites project while living abroad?",
      answer:
        "You can initiate an enquiry directly through our online form above, contact our desk via WhatsApp, or email our corporate office in Bengaluru. An advisor will promptly provide available project documentation and coordinate discussions aligned with your international time zone.",
    },
    {
      question: "What project documentation can I request for remote evaluation?",
      answer:
        "Prospective buyers may request available title search dossiers, survey demarcation maps, revenue records (such as RTC documents and mutation filings), and layout plans. We provide transparent digital access so that your family or legal counsel can examine the details thoroughly.",
    },
    {
      question: "Can I arrange a virtual briefing or a physical site visit for family in India?",
      answer:
        "Yes. We regularly facilitate virtual video briefings for clients residing overseas. Furthermore, if you have family members, trusted representatives, or independent legal counsel in Bengaluru, our team can coordinate an accompanied, in-person site walkthrough on their behalf.",
    },
    {
      question: "What essential checkpoints should I verify before proceeding with a purchase?",
      answer:
        "We advise verifying that physical boundary markers match government revenue survey maps, that multi-decade title flows are free from encumbrance, and that you have a clear understanding of all statutory transaction costs (stamp duty, registration charges, and applicable taxes) for your residency status.",
    },
    {
      question: "Who should I consult regarding legal, tax, and FEMA-related questions?",
      answer:
        "Because foreign exchange rules (FEMA) and tax obligations depend upon your specific residency classification (NRI, OCI, or foreign national) and international tax residency, we strongly recommend retaining independent legal advocates and chartered accountants licensed in India to provide authoritative advice tailored to your circumstances.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#F6F6F4] border-b border-[#E7E7E7]"
    >
      <Container size="standard">
        {/* Section Header */}
        <div className="max-w-[720px] mx-auto text-center mb-16 sm:mb-20">
          <SectionEyebrow theme="navy" className="justify-center mb-4">
            Frequently Asked Questions
          </SectionEyebrow>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-4">
            Guidance for Overseas Buyers
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Clear, factual answers to common questions regarding remote diligence,
            documentation access, and international coordination.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-[840px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-[#E7E7E7] rounded-sm overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171C56]"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-[#171C56] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#171C56] text-[#EDC455]"
                        : "bg-[#F6F6F4] text-[#171C56]"
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
                    className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 text-sm sm:text-base text-[#555555] font-light leading-relaxed border-t border-[#E7E7E7]/60 animate-in fade-in duration-300"
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
          <p className="text-xs text-[#555555] font-light">
            Have a question not addressed here? Contact our desk directly at{" "}
            <a
              href="mailto:contact@starrbites.com"
              className="text-[#171C56] font-medium underline hover:text-[#C88218]"
            >
              contact@starrbites.com
            </a>{" "}
            or telephone{" "}
            <a
              href="tel:+919740806357"
              className="text-[#171C56] font-medium underline hover:text-[#C88218]"
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
