"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ContactInfoGrid() {
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+194,+3rd+Main,+13th+Cross,+RMV+2nd+Stage,+HIG+Dollars+Colony,+Bengaluru+560094";

  return (
    <section className="py-20 md:py-28 bg-[#F5F1E9] border-b border-[#DDD7CC]" aria-label="Contact Information">
      <Container size="wide">
        <div className="max-w-3xl mb-14">
          <SectionEyebrow theme="charcoal" className="mb-3">
            VERIFIED DIRECTORY
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292D30] font-semibold tracking-tight">
            Corporate Headquarters &amp; Advisory Channels
          </h2>
          <p className="mt-3 text-base text-[#55534F] font-light leading-relaxed">
            Reach our leadership and land acquisition specialists directly via phone, official email,
            or at our registered Bengaluru office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Channels Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1: Registered Office Address */}
            <div className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#354B5D] hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#354B5D]/10 text-[#354B5D] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#354B5D]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#292D30]">
                    Headquarters Office
                  </h3>
                </div>
                <address className="not-italic text-sm text-[#55534F] font-light leading-relaxed">
                  No. 194, 3rd Main, 13th Cross,
                  <br />
                  RMV 2nd Stage, HIG Dollars Colony,
                  <br />
                  Bengaluru - 560094, Karnataka, India
                </address>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDD7CC]">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap flex-nowrap shrink-0 text-xs font-semibold uppercase tracking-wider text-[#292D30] hover:text-[#526B80] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Get Directions on Map</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            {/* Card 2: Direct Telephones */}
            <div className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#354B5D] hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#A98556]/20 text-[#354B5D] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#354B5D]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#292D30]">
                    Direct Telephone
                  </h3>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-0.5">
                      Primary Inquiries
                    </div>
                    <a
                      href="tel:+919740806357"
                      className="text-[#292D30] font-medium hover:text-[#A98556] transition-colors"
                    >
                      +91 97408 06357
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-0.5">
                      Advisory &amp; Projects
                    </div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+918861197979"
                        className="text-[#292D30] font-medium hover:text-[#A98556] transition-colors"
                      >
                        +91 88611 97979
                      </a>
                      <a
                        href="tel:+918867497979"
                        className="text-[#292D30] font-medium hover:text-[#A98556] transition-colors"
                      >
                        +91 88674 97979
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDD7CC] text-xs text-[#55534F]">
                Available on WhatsApp for NRI &amp; interstate clients
              </div>
            </div>

            {/* Card 3: Official Email */}
            <div className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#354B5D] hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#354B5D]/10 text-[#354B5D] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#354B5D]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#292D30]">
                    Official Correspondence
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-0.5">
                      General &amp; Title Inquiries
                    </div>
                    <a
                      href="mailto:contact@starrbites.com"
                      className="text-sm text-[#292D30] font-medium hover:text-[#A98556] transition-colors"
                    >
                      contact@starrbites.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-0.5">
                      Client Services &amp; CRM
                    </div>
                    <a
                      href="mailto:info@starrbites.com"
                      className="text-sm text-[#292D30] font-medium hover:text-[#A98556] transition-colors"
                    >
                      info@starrbites.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDD7CC] text-xs text-[#55534F]">
                Monitored by the executive advisory desk
              </div>
            </div>

            {/* Card 4: Hours & Verified Socials */}
            <div className="bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#354B5D] hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#A98556]/20 text-[#354B5D] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#354B5D]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#292D30]">
                    Advisory Availability
                  </h3>
                </div>
                <div className="space-y-1.5 text-sm text-[#55534F]">
                  <div className="font-medium text-[#292D30]">9:00 AM – 7:00 PM IST</div>
                  <div className="text-xs text-[#55534F] font-light">
                    Monday through Sunday • 7 Days a Week
                  </div>
                  <div className="text-xs text-[#55534F] pt-2">
                    In-person office meetings arranged by appointment.
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-4 border-t border-[#DDD7CC]">
                <div className="text-[11px] uppercase tracking-wider text-[#55534F] mb-2.5">
                  Verified Social Channels
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/starrbites.tiigertrail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#292D30] hover:border-[#354B5D] transition-colors px-2.5 py-1.5 bg-[#F5F1E9] rounded-[2px] border border-[#DDD7CC]"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-[#292D30]"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/starrbites.tiigertrail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#292D30] hover:border-[#354B5D] transition-colors px-2.5 py-1.5 bg-[#F5F1E9] rounded-[2px] border border-[#DDD7CC]"
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-[#292D30] fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DDD7CC] rounded-[2px] overflow-hidden shadow-sm h-full flex flex-col">
            <div className="p-6 border-b border-[#DDD7CC] bg-[#FFFFFF]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif font-semibold text-[#292D30]">
                    Dollars Colony Location
                  </h3>
                  <p className="text-xs text-[#55534F] font-light mt-0.5">
                    RMV 2nd Stage, North-Central Bengaluru
                  </p>
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFFFFF] bg-[#354B5D] px-3 py-1.5 rounded-[2px] font-semibold inline-flex items-center gap-1 whitespace-nowrap flex-nowrap shrink-0 hover:bg-[#526B80] transition-colors"
                >
                  <span className="whitespace-nowrap">Open Full Map</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#DDD7CC]">
              <iframe
                title="Starrbites Headquarters Location - Dollars Colony, Bengaluru"
                src="https://maps.google.com/maps?q=13.0326,77.5750+(Starrbites+Developments,+Dollars+Colony)&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[105%]"
              />
            </div>

            <div className="p-5 text-xs text-[#55534F] bg-[#F5F1E9] border-t border-[#DDD7CC] flex items-center justify-between">
              <span>Proximate to Bellary Road &amp; NH-44 Airport Corridor</span>
              <span className="font-semibold text-[#292D30]">PIN: 560094</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
