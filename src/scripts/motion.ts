import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __starrbitesMotion?: {
      stopScroll: () => void;
      startScroll: () => void;
    };
  }
}

function initMotion() {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lenis: Lenis | null = null;
  let tickerCallback: ((time: number) => void) | null = null;
  let heroIntroTl: gsap.core.Timeline | null = null;

  const homeHero = document.querySelector<HTMLElement>('[data-home-hero]');
  const heroStage1 = homeHero?.querySelector<HTMLElement>('[data-hero-stage-1]') ?? null;
  const heroStage2 = homeHero?.querySelector<HTMLElement>('[data-hero-stage-2]') ?? null;
  const heroWelcome = homeHero?.querySelector<HTMLElement>('[data-hero-welcome]') ?? null;
  const heroStar = homeHero?.querySelector<HTMLElement>('[data-hero-star]') ?? null;
  const heroLetters = homeHero
    ? Array.from(homeHero.querySelectorAll<HTMLElement>('[data-hero-letter]'))
    : [];
  const heroWord1Letters = homeHero
    ? Array.from(homeHero.querySelectorAll<HTMLElement>('[data-hero-word="1"] [data-hero-letter]'))
    : [];
  const heroWord2Letters = homeHero
    ? Array.from(homeHero.querySelectorAll<HTMLElement>('[data-hero-word="2"] [data-hero-letter]'))
    : [];
  const heroScrollCue = homeHero?.querySelector<HTMLElement>('[data-hero-scroll-cue]') ?? null;

  const revealGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-group]'));
  const allReveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const standaloneReveals = allReveals.filter((el) => !el.closest('[data-reveal-group]'));
  const scaleReveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-scale]'));

  const teardown = () => {
    if (heroIntroTl) {
      heroIntroTl.kill();
      heroIntroTl = null;
    }
    if (tickerCallback) {
      gsap.ticker.remove(tickerCallback);
      tickerCallback = null;
    }
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Clear hero inline styles cleanly (important when toggling prefers-reduced-motion)
    [heroStage1, heroStage2, heroWelcome, heroStar, heroScrollCue, ...heroLetters].forEach((el) => {
      if (el) {
        gsap.set(el, { clearProps: 'opacity,transform,pointerEvents' });
      }
    });

    allReveals.forEach((el) => {
      gsap.set(el, { clearProps: 'opacity,transform' });
    });
    scaleReveals.forEach((el) => {
      const target = el.querySelector<HTMLElement>('img, .media-slot__placeholder') ?? el;
      gsap.set(target, { clearProps: 'opacity,transform' });
    });
  };

  const setup = () => {
    teardown();

    if (reducedMotionQuery.matches) {
      return;
    }

    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    tickerCallback = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Home two-stage pinned hero (created first so downstream ScrollTriggers account for pin spacing)
    if (homeHero && heroStage1 && heroStage2) {
      // Stage 1: subtle letter-by-letter fade-in on load (--motion-normal = 600ms)
      heroIntroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroWelcome) {
        heroIntroTl.fromTo(
          heroWelcome,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.1
        );
      }
      if (heroStar) {
        heroIntroTl.fromTo(
          heroStar,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.5 },
          0.25
        );
      }
      if (heroWord1Letters.length > 0 && heroWord2Letters.length > 0) {
        heroIntroTl.fromTo(
          heroWord1Letters,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.055 },
          0.28
        );
        // Slight pause between "STARR" and "BITES"
        heroIntroTl.fromTo(
          heroWord2Letters,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.055 },
          0.68
        );
      } else if (heroLetters.length > 0) {
        heroIntroTl.fromTo(
          heroLetters,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.055 },
          0.28
        );
      }
      if (heroScrollCue) {
        heroIntroTl.fromTo(
          heroScrollCue,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.05
        );
      }

      // Initial state for Stage 2 before scroll
      gsap.set(heroStage2, { opacity: 0, y: 24, pointerEvents: 'none' });
      gsap.set(heroStage1, { opacity: 1, scale: 1, y: 0, pointerEvents: 'auto' });

      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: homeHero,
          start: 'top top',
          end: '+=130%',
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const stage2Active = self.progress >= 0.45;
            heroStage1.style.pointerEvents = stage2Active ? 'none' : 'auto';
            heroStage2.style.pointerEvents = stage2Active ? 'auto' : 'none';
          },
        },
      });

      if (heroScrollCue) {
        heroScrollTl.to(
          heroScrollCue,
          { opacity: 0, y: 10, duration: 0.16, ease: 'none' },
          0
        );
      }

      heroScrollTl
        .to(
          heroStage1,
          { opacity: 0, scale: 0.94, y: -16, duration: 0.4, ease: 'power1.inOut' },
          0.04
        )
        .to(
          heroStage2,
          { opacity: 1, y: 0, duration: 0.36, ease: 'power2.out' },
          0.44
        )
        .to({}, { duration: 0.2 });
    }

    // Standalone reveals: --motion-slow (1000ms)
    standaloneReveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    // Grouped card rows: --motion-slow (1000ms) with 120ms stagger
    revealGroups.forEach((group) => {
      const children = Array.from(group.querySelectorAll<HTMLElement>('[data-reveal]'));
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: group,
            start: 'top 86%',
            once: true,
          },
        }
      );
    });

    // Subtle slow scale-in for centerpiece media (Tiiger Trail)
    scaleReveals.forEach((el) => {
      const target = el.querySelector<HTMLElement>('img, .media-slot__placeholder') ?? el;
      gsap.fromTo(
        target,
        { scale: 1.05 },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  };

  setup();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!reducedMotionQuery.matches) {
        ScrollTrigger.refresh();
      }
    });
  }

  reducedMotionQuery.addEventListener('change', setup);

  window.__starrbitesMotion = {
    stopScroll: () => lenis?.stop(),
    startScroll: () => lenis?.start(),
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion, { once: true });
} else {
  initMotion();
}
