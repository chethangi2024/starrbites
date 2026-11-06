"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { isReducedMotion, registerGSAP } from "@/lib/animations";

export function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        teamRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: "Sunil Yadav",
      role: "Founder",
      image: "/images/team/sunil-yadav.png",
      description:
        "Guiding Starrbites' core vision toward curated, design-forward land destinations and long-term land stewardship.",
    },
    {
      name: "Ashish Bhartiya",
      role: "General Manager",
      image: "/images/team/ashish-bhartiya.png",
      description:
        "Leading operational execution, cross-functional project planning, and corporate stakeholder relationships.",
    },
    {
      name: "Ashok",
      role: "Land Acquiring & Legal",
      image: "/images/team/ashok-land-legal.png",
      description:
        "Specializing in strategic land acquisition, documentation verification, mutation compliance, and title vetting.",
    },
    {
      name: "K P Rupesh Kumar",
      role: "Principal Advocate",
      image: "/images/team/rupesh-kumar.png",
      description:
        "Overseeing comprehensive legal due diligence, title scrutiny, parent deed scrutiny, and statutory advisory.",
    },
    {
      name: "Chethan",
      role: "Digital & CRM",
      image: "/images/team/chethan-digital-crm.png",
      description:
        "Directing client experience, digital operations, virtual site advisory, and transparent buyer communication.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#DDD7CC]"
    >
      <Container size="wide">
        {/* Narrative Split */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#DDD7CC]"
        >
          {/* Left: Section Header & Origin Perspective (5 cols) */}
          <div className="lg:col-span-5">
            <SectionEyebrow theme="charcoal" className="mb-4">
              Our Story &amp; Leadership
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#292D30] font-normal leading-[1.15] mb-6">
              Rooted in Design Thinking,{" "}
              <span className="italic font-light text-[#292D30] border-b-2 border-[#A98556] pb-0.5">
                Structured for Long-Term Development.
              </span>
            </h2>
            <p className="text-sm font-semibold tracking-wide uppercase text-[#292D30] border-l-4 border-[#A98556] pl-4">
              From spatial execution roots to signature real-estate development.
            </p>
          </div>

          {/* Right: Narrative Context (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#55534F] font-light leading-relaxed">
            <p>
              Starrbites was founded on a straightforward premise: that real-estate and land
              development in India should combine rigorous spatial planning, verifiable title
              documentation, and clear buyer communication.
            </p>
            <p>
              With professional foundations in interior design, spatial execution, and property
              advisory in Bengaluru, our team observed that plotted and regional developments were
              frequently marketed as raw parcels without cohesive site planning or transparent
              documentary review. Starrbites evolved into a dedicated development company to
              address these gaps methodically.
            </p>
            <p className="text-sm sm:text-base text-[#292D30] font-normal bg-[#F5F1E9] p-6 rounded-sm border-l-4 border-[#354B5D]">
              Today, Starrbites is advancing our flagship plotted nature development,{" "}
              <strong className="font-semibold text-[#292D30]">Tiiger Trail</strong> along the
              North Bangalore–Lepakshi growth corridor, setting a new benchmark for countryside
              living with certified titles and cohesive master planning.
            </p>
          </div>
        </div>

        {/* Leadership & Advisory Team */}
        <div ref={teamRef} className="pt-20" id="leadership">
          <div className="max-w-[720px] mb-12 sm:mb-16">
            <SectionEyebrow theme="charcoal" className="mb-3">
              Leadership &amp; Advisory
            </SectionEyebrow>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#292D30] font-normal leading-tight mb-4">
              Guided by Experience and Integrity
            </h3>
            <p className="text-[#55534F] text-sm sm:text-base font-light leading-relaxed">
              Our multidisciplinary team brings together land acquisition specialists,
              legal advocates, project planners, and customer advisors to ensure
              uncompromising diligence across every development.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-[#F5F1E9] rounded-sm border border-[#DDD7CC] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#354B5D] hover:-translate-y-1 flex flex-col"
              >
                {/* Photo Aspect Ratio 1:1 */}
                <div className="relative aspect-square w-full bg-[#DDD7CC] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Starrbites`}
                    fill
                    className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292D30]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                  <div>
                    <h4 className="text-base font-semibold text-[#292D30] mb-1.5 group-hover:text-[#354B5D] transition-colors">
                      {member.name}
                    </h4>
                    <span className="inline-block text-[11px] uppercase tracking-[0.14em] bg-[#A98556]/20 text-[#354B5D] px-2 py-0.5 rounded-[2px] font-semibold mb-3">
                      {member.role}
                    </span>
                    <p className="text-xs text-[#55534F] font-light leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
