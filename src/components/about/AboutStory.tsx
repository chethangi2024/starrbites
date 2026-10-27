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
      className="py-24 sm:py-32 bg-white border-b border-[#E7E7E7]"
    >
      <Container size="wide">
        {/* Narrative Split */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#E7E7E7]"
        >
          {/* Left: Section Header & Origin Perspective (5 cols) */}
          <div className="lg:col-span-5">
            <SectionEyebrow theme="navy" className="mb-4">
              Our Story & Heritage
            </SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171C56] font-normal leading-[1.15] mb-6">
              Rooted in Design Thinking,{" "}
              <span className="italic font-light text-[#8B6C20]">
                Committed to Stewardship.
              </span>
            </h2>
            <p className="text-sm font-medium tracking-wide uppercase text-[#C88218] border-l-2 border-[#EDC455] pl-4">
              From spatial planning discipline to curated land destinations.
            </p>
          </div>

          {/* Right: Narrative Context (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            <p>
              Starrbites was established with a singular conviction: that land
              ownership in India could be approached with the same spatial care,
              design integrity, and institutional transparency that characterizes
              world-class property developments.
            </p>
            <p>
              Drawing on a professional foundation in interior architecture, spatial
              execution, and strategic real-estate advisory, our leadership
              recognized a critical gap in the regional market. While urban apartment
              developments focused heavily on concrete density, land and plotted
              opportunities often suffered from opaque documentation, arbitrary
              layouts, and a lack of enduring infrastructure.
            </p>
            <p className="text-sm sm:text-base text-[#242424] font-normal bg-[#F6F6F4] p-6 rounded-sm border-l-4 border-[#171C56]">
              By combining rigorous legal scrutiny, environmental sensitivity, and
              master-planned foresight, Starrbites creates destinations that protect
              capital, nurture personal well-being, and stand the test of time.
            </p>
          </div>
        </div>

        {/* Leadership & Advisory Team */}
        <div ref={teamRef} className="pt-20" id="leadership">
          <div className="max-w-[720px] mb-12 sm:mb-16">
            <SectionEyebrow theme="navy" className="mb-3">
              Leadership & Advisory
            </SectionEyebrow>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#171C56] font-normal leading-tight mb-4">
              Guided by Experience and Integrity
            </h3>
            <p className="text-[#555555] text-sm sm:text-base font-light leading-relaxed">
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
                className="group bg-[#F6F6F4] rounded-sm border border-[#E7E7E7] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#EDC455]/60 hover:-translate-y-1 flex flex-col"
              >
                {/* Photo Aspect Ratio 1:1 */}
                <div className="relative aspect-square w-full bg-[#EAEAEA] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Starrbites`}
                    fill
                    className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171C56]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-base font-semibold text-[#171C56] mb-0.5 group-hover:text-[#C88218] transition-colors">
                      {member.name}
                    </h4>
                    <span className="block text-xs uppercase tracking-[0.14em] text-[#C88218] font-medium mb-3">
                      {member.role}
                    </span>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">
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
