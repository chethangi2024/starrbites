"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}

export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Animate elements on scroll entry with graceful fallback
 */
export function animateOnScroll(
  target: HTMLElement | string,
  vars: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) {
  if (typeof window === "undefined") return;
  registerGSAP();

  if (isReducedMotion()) {
    gsap.set(target, { opacity: 1, y: 0, x: 0, scale: 1 });
    return;
  }

  return gsap.to(target, {
    ...vars,
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      once: true,
      ...triggerOptions,
    },
  });
}
