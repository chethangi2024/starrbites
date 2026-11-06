"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { FileCheck, Users, MessageSquare } from "lucide-react";

export function ContactNextSteps() {
  const steps = [
    {
      num: "01",
      icon: FileCheck,
      title: "Catalogue & Reference",
      description:
        "Your requirement is assigned an individual tracking reference and catalogued in our central corporate ledger at our Dollars Colony office.",
    },
    {
      num: "02",
      icon: Users,
      title: "Specialist Review",
      description:
        "The appropriate land development, legal due diligence, or client relationship lead reviews your inquiry details and gathers relevant dossiers.",
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Contextual Follow-up",
      description:
        "A senior representative connects via your preferred channel with verified project documentation, title frameworks, or private meeting arrangements.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F1E9] border-t border-[#DDD7CC]" aria-labelledby="next-steps-heading">
      <Container size="wide">
        <div className="max-w-3xl mb-14">
          <SectionEyebrow theme="charcoal" className="mb-3">
            TRANSPARENT CLIENT PROTOCOL
          </SectionEyebrow>
          <h2
            id="next-steps-heading"
            className="text-3xl sm:text-4xl font-serif text-[#292D30] font-semibold tracking-tight"
          >
            What Happens After Your Enquiry Is Received
          </h2>
          <p className="mt-3 text-base text-[#55534F] font-light leading-relaxed">
            A discreet and structured engagement process designed around thorough documentation,
            clear communication, and direct access to decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FFFFFF] border border-[#DDD7CC] border-t-4 border-t-[#354B5D] rounded-[2px] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#354B5D] hover:shadow-md relative overflow-hidden"
              >
                {/* Number Badge */}
                <span className="inline-block w-fit text-sm font-serif font-bold text-[#354B5D] bg-[#A98556]/20 px-2.5 py-0.5 rounded-sm mb-6">
                  {step.num}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#354B5D]/10 text-[#354B5D] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#354B5D]" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-[#292D30]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#55534F] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DDD7CC] text-[11px] uppercase tracking-wider text-[#55534F]">
                  Stage {step.num} Protocol
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
