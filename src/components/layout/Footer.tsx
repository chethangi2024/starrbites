import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#171C56] text-white pt-20 pb-12 border-t border-[#171C56]">
      <Container size="wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block relative h-[48px] w-[160px] mb-6">
                <Image
                  src="/images/brand/Starrbites White Logos.png"
                  alt="Starrbites"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                />
              </Link>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-[420px] font-light mb-6">
                Starrbites is a Bangalore-based land development firm dedicated to creating
                curated plotted destinations that combine strategic location foresight,
                purposeful spatial planning, and enduring legacy value.
              </p>
              <div className="flex items-center gap-3 text-xs tracking-widest text-[#EDC455] font-semibold uppercase">
                <span className="w-6 h-[1px] bg-[#EDC455]" />
                Building Land. Creating Legacy.
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/85">
              Flagship Project:{" "}
              <a
                href="https://tiigertrail.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDC455] hover:underline inline-flex items-center gap-1 font-medium ml-1"
              >
                Tiiger Trail — Phase I <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm text-white/80 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-white transition-colors">
                  About Starrbites
                </Link>
              </li>
              <li>
                <Link href="/tiiger-trail/" className="hover:text-white transition-colors">
                  Tiiger Trail Flagship
                </Link>
              </li>
              <li>
                <Link href="/nri/" className="hover:text-white transition-colors">
                  NRI Land Advisory
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors">
                  Insights & Journal
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Insights & Perspectives (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-6">
              Selected Topics
            </h4>
            <ul className="space-y-3.5 text-sm text-white/80 font-normal">
              <li>
                <Link
                  href="/blog/property-registration-will-not-give-you-ownership-in-2025/"
                  className="hover:text-white transition-colors"
                >
                  Land Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-safely-verify-farmland-before-buying-2025/"
                  className="hover:text-white transition-colors"
                >
                  Verification Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-2025-farmland-mutation-rules-are-changing/"
                  className="hover:text-white transition-colors"
                >
                  Mutation Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns/"
                  className="hover:text-white transition-colors"
                >
                  Growth Corridors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#EDC455] font-semibold mb-6">
              Headquarters
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EDC455] shrink-0 mt-0.5" />
                <span>
                  No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony,
                  Bengaluru - 560094, Karnataka, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EDC455] shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919740806357" className="hover:text-white transition-colors">
                    +91 97408 06357
                  </a>
                  <a href="tel:+918861197979" className="hover:text-white transition-colors">
                    +91 88611 97979
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EDC455] shrink-0" />
                <a
                  href="mailto:contact@starrbites.com"
                  className="hover:text-white transition-colors"
                >
                  contact@starrbites.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/85">
                <Clock className="w-4 h-4 text-[#EDC455] shrink-0" />
                <span>9:00 AM – 7:00 PM • 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/85">
          <div>
            © 2026 Starrbites Developments. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/50">•</span>
            <Link href="/terms-and-conditions/" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/50">•</span>
            <span className="text-white/85">Bangalore, Karnataka</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
