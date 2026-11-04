"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "../ui/Button";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export function Header({ onOpenEnquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Our Projects", href: "/projects/" },
    { label: "Investor Relations", href: "/investor-relations/" },
    { label: "Tiiger Trail", href: "/tiiger-trail/", isFlagship: true },
    { label: "NRI", href: "/nri/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
  ];

  // Tiiger Trail has a dark charcoal cinematic hero before scroll; Homepage has a Sky Blue / Cloudy White hero.
  const isDarkHeroPage = pathname === "/tiiger-trail" || pathname === "/tiiger-trail/";
  const isDarkTransparent = isDarkHeroPage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isDarkTransparent
            ? "bg-gradient-to-b from-[#242424]/80 via-[#242424]/40 to-transparent py-5 sm:py-6"
            : isScrolled
            ? "bg-[#FDFBFF]/98 backdrop-blur-md border-b border-[#E2E6EC] py-4 sm:py-4.5 shadow-[0_4px_24px_rgba(36,36,36,0.06)]"
            : "bg-[#FDFBFF]/95 backdrop-blur-md border-b border-[#E2E6EC] py-4.5 sm:py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF]"
            aria-label="Starrbites Home"
          >
            <div className="relative h-[38px] sm:h-[46px] w-[130px] sm:w-[155px] transition-transform duration-300 group-hover:opacity-90">
              <Image
                src={
                  isDarkTransparent
                    ? "/images/brand/Starrbites White Logos.png"
                    : "/images/brand/Starrbites Logos.png"
                }
                alt="Starrbites - Land Development & Plotted Communities"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 130px, 155px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8"
          >
            {navItems.map((item) => {
              const normalizedHref = item.href.replace(/\/$/, "");
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname === normalizedHref ||
                    (normalizedHref === "/projects" && pathname.startsWith("/projects/"));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-[13px] xl:text-[14px] tracking-[0.04em] transition-colors duration-200 py-1.5 ${
                    isDarkTransparent
                      ? isActive
                        ? "text-[#EDC455] font-semibold"
                        : "text-[#FDFBFF]/90 hover:text-[#FDFBFF] font-medium"
                      : isActive
                      ? "text-[#242424] font-semibold"
                      : "text-[#242424] hover:text-[#007ACC] font-medium"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.isFlagship && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[#EDC455]"
                        title="Flagship Project"
                      />
                    )}
                  </span>
                  {/* Sky Blue Active Navigation Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] ${
                        isDarkTransparent ? "bg-[#EDC455]" : "bg-[#0099FF]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              {onOpenEnquiry ? (
                <Button
                  variant={isDarkTransparent ? "gold" : "primary"}
                  size="sm"
                  onClick={onOpenEnquiry}
                >
                  Start a Conversation
                </Button>
              ) : (
                <Button
                  variant={isDarkTransparent ? "gold" : "primary"}
                  size="sm"
                  href="/contact-us/"
                >
                  Start a Conversation
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 ${
                isDarkTransparent
                  ? "text-[#FDFBFF] hover:bg-[#FDFBFF]/10 focus-visible:ring-[#EDC455]"
                  : "text-[#242424] hover:bg-[#F3F6FA] focus-visible:ring-[#0099FF]"
              }`}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#242424] text-[#FDFBFF] flex flex-col justify-between p-6 sm:p-10 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#0099FF]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#EDC455] uppercase">
              Menu Navigation
            </span>
          </div>
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => {
              const normalizedHref = item.href.replace(/\/$/, "");
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname === normalizedHref ||
                    (normalizedHref === "/projects" && pathname.startsWith("/projects/"));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-serif transition-colors flex items-center justify-between border-b pb-4 ${
                    isActive
                      ? "text-[#EDC455] border-[#0099FF]"
                      : "text-[#FDFBFF] hover:text-[#EDC455] border-[#FDFBFF]/15"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isFlagship && (
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase bg-[#EDC455] text-[#242424] px-2.5 py-1 rounded-[2px]">
                      Flagship
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Contact Quick Actions */}
        <div className="pt-8 border-t border-[#FDFBFF]/15 space-y-4">
          <p className="text-xs text-[#FDFBFF]/85 uppercase tracking-widest font-semibold">
            Corporate Enquiries
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+919740806357"
              className="text-sm font-medium text-[#FDFBFF] flex items-center gap-2 hover:text-[#EDC455]"
            >
              <PhoneCall className="w-4 h-4 text-[#EDC455]" />
              <span>+91 97408 06357</span>
            </a>
            <a
              href="tel:+918861197979"
              className="text-sm font-medium text-[#FDFBFF] flex items-center gap-2 hover:text-[#EDC455]"
            >
              <PhoneCall className="w-4 h-4 text-[#EDC455]" />
              <span>+91 88611 97979</span>
            </a>
          </div>

          <Button
            variant="gold"
            className="w-full justify-center mt-3"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (onOpenEnquiry) onOpenEnquiry();
            }}
            href={onOpenEnquiry ? undefined : "/contact-us/"}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </>
  );
}
