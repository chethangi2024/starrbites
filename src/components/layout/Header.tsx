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
      setIsScrolled(window.scrollY > 30);
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

  // Approved 6-item navigation: Home, About Us, Tiiger Trail, NRI, Blog, Contact Us
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Tiiger Trail", href: "/tiiger-trail/", isFlagship: true },
    { label: "NRI", href: "/nri/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact Us", href: "/contact-us/" },
  ];

  // Homepage and Tiiger Trail have dark hero sections at top
  const isDarkHeroPage =
    pathname === "/" ||
    pathname === "/tiiger-trail" ||
    pathname === "/tiiger-trail/";
  const isDarkTransparent = isDarkHeroPage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isDarkTransparent
            ? "bg-gradient-to-b from-[#292D30]/80 via-[#354B5D]/30 to-transparent py-5 sm:py-6"
            : isScrolled
            ? "bg-[#F5F1E9]/98 backdrop-blur-md border-b border-[#DDD7CC] py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(53,75,93,0.06)]"
            : "bg-[#F5F1E9]/95 backdrop-blur-md border-b border-[#DDD7CC] py-4 sm:py-4.5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo - Preserve original logo colors */}
          <Link
            href="/"
            className="relative flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B80]"
            aria-label="Starrbites Home"
          >
            <div className="relative h-[38px] sm:h-[44px] w-[135px] sm:w-[155px] transition-transform duration-300 group-hover:opacity-90">
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
                sizes="(max-width: 640px) 135px, 155px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9"
          >
            {navItems.map((item) => {
              const normalizedHref = item.href.replace(/\/$/, "");
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname === normalizedHref;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-[13.5px] xl:text-[14px] tracking-[0.03em] transition-colors duration-200 py-1.5 ${
                    isDarkTransparent
                      ? isActive
                        ? "text-[#FFFFFF] font-semibold"
                        : "text-[#FFFFFF]/90 hover:text-[#FFFFFF] font-medium"
                      : isActive
                      ? "text-[#526B80] font-semibold"
                      : "text-[#292D30] hover:text-[#526B80] font-medium"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.isFlagship && (
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          isDarkTransparent ? "bg-[#D4C3A6]" : "bg-[#A98556]"
                        }`}
                        title="Flagship Project"
                      />
                    )}
                  </span>
                  {/* Active Navigation Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                        isDarkTransparent ? "bg-[#D4C3A6]" : "bg-[#526B80]"
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
                  variant={isDarkTransparent ? "onDark" : "primary"}
                  size="sm"
                  onClick={onOpenEnquiry}
                >
                  Start a Conversation
                </Button>
              ) : (
                <Button
                  variant={isDarkTransparent ? "onDark" : "primary"}
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
                  ? "text-[#FFFFFF] hover:bg-[#FFFFFF]/10 focus-visible:ring-[#D4C3A6]"
                  : "text-[#292D30] hover:bg-[#EAE5DA] focus-visible:ring-[#526B80]"
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
        className={`fixed inset-0 z-40 bg-[#292D30] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-10 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#A98556]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#D4C3A6] uppercase font-mono">
              Menu Navigation
            </span>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const normalizedHref = item.href.replace(/\/$/, "");
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname === normalizedHref;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-serif transition-colors flex items-center justify-between border-b pb-3.5 ${
                    isActive
                      ? "text-[#D4C3A6] border-[#A98556]"
                      : "text-[#FFFFFF] hover:text-[#D4C3A6] border-[#FFFFFF]/15"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isFlagship && (
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#526B80] text-[#FFFFFF] px-2 py-0.5 rounded-[2px]">
                      Flagship
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Contact Quick Actions */}
        <div className="pt-6 border-t border-[#FFFFFF]/15 space-y-4">
          <p className="text-xs text-[#D4C3A6] uppercase tracking-widest font-semibold font-mono">
            Corporate Enquiries
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+919740806357"
              className="text-sm font-medium text-[#FFFFFF] flex items-center gap-2 hover:text-[#D4C3A6]"
            >
              <PhoneCall className="w-4 h-4 text-[#A98556]" />
              <span>+91 97408 06357</span>
            </a>
            <a
              href="tel:+918861197979"
              className="text-sm font-medium text-[#FFFFFF] flex items-center gap-2 hover:text-[#D4C3A6]"
            >
              <PhoneCall className="w-4 h-4 text-[#A98556]" />
              <span>+91 88611 97979</span>
            </a>
          </div>

          <Button
            variant="onDark"
            className="w-full justify-center mt-2"
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
