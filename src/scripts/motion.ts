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

  const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  const teardown = () => {
    if (tickerCallback) {
      gsap.ticker.remove(tickerCallback);
      tickerCallback = null;
    }
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    revealElements.forEach((el) => {
      gsap.set(el, { clearProps: 'opacity,transform' });
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

    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
  };

  setup();

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
