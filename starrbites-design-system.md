---
name: starrbites-design-system
description: Design rules for the StarrBites website rebuild. Read before building or changing any page, section or component.
---

# StarrBites — Design System

## Design intent (one sentence)
A calm, editorial, dark-toned land-development site in the spirit of kingsmarque.in: big imagery, short confident copy, generous space, slow motion — but with StarrBites' own words, colours and layout details. It must not copy Kingsmarque's text, logo, project names or exact layouts.

## Brand
- Brand: StarrBites (land development, Bengaluru)
- Flagship project: Tiiger Trail – Phase I (links to https://tiigertrail.com)
- Audience: home buyers, land investors, NRIs / global buyers
- Tone: calm, confident, plain. Short sentences. No hype words ("best", "guaranteed returns", "No.1").
- Honesty rule: never state returns, appreciation % or approvals unless the client has supplied them. Stock photos must never be captioned as the actual project.

## Pages (keep it minimal — 5 pages + Contact)
1. Home
2. About — story, philosophy, team, sustainability (merged from old Sustainability page)
3. Projects — Tiiger Trail card (links out to tiigertrail.com) + "More destinations coming" placeholder
4. NRI — invest from anywhere: process steps, legal/advisory support, FAQ
5. Insights — one blog list (merges old "Latest News" and "Trends & Insights"), with a filter: All / News / Guides
6. Contact ("Talk to us") — form, phones, email, address, map
Plus: Privacy Policy, Terms (simple text pages, linked in footer only).

## Navigation
- Desktop: logo left; Home, About, Projects, NRI, Insights; "Talk to us" button right.
- Mobile + optional desktop: "Menu" button opens a full-screen overlay menu with large links and a "Close" button.
- Header is transparent over the hero, turns solid on scroll.

## Home page — section order
1. Hero — full-screen muted looping video (land / trees / aerial), dark overlay, one big headline, one line of support copy, "Explore Tiiger Trail" + "Talk to us".
2. Statement — one large paragraph on land as long-term growth, lifestyle and legacy.
3. Three pillars (cards with image + "Explore more"): Invest in Land · Curated Destinations · Invest from Anywhere (NRI).
4. Featured project — Tiiger Trail, wide image, 3 highlights (location, nature + lifestyle, long-term value), "Visit Tiiger Trail".
5. Project ticker — slow horizontal looping strip of project/destination names.
6. Insights — latest 3 posts.
7. Closing CTA — "Start your land journey" + "Talk to us".
8. Footer — short blurb, quick links, contact details, Instagram + LinkedIn, Privacy / Terms, © year.

## Tokens

### Colour (matched to the StarrBites logo: navy #171C56 + gold #D69F38→#FEDE6E)
- color.surface.base #0B0E2A (navy-black, main background)
- color.surface.raised #171C56 (logo navy — cards and panels on dark)
- color.surface.light #F4F1EA (warm off-white sections)
- color.text.primary #F2EFE8 (on dark)
- color.text.secondary #B9BCD0 (on dark)
- color.text.onLight #171C56
- color.text.onLightMuted #4A4F7A
- color.accent #E0B24C (solid gold — buttons, links on dark, focus ring on dark)
- color.accent.onAccent #0B0E2A (text on gold buttons — never white)
- color.accent.gradient linear-gradient(90deg, #D69F38, #FEDE6E) (decorative lines only — never text or buttons)
- color.border.subtle rgba(242,239,232,0.14)
- color.overlay.hero linear-gradient(rgba(11,14,42,.25), rgba(11,14,42,.70))
Rules:
- All text/background pairs must pass WCAG AA (4.5:1 body, 3:1 large text). Never put text.secondary on images without the overlay.
- Gold fails contrast on light backgrounds. On surface.light sections, links, buttons and focus rings use navy #171C56; gold only for decorative details.

### Typography (free Google Fonts)
- Headings: Cormorant Garamond 500; uppercase allowed for hero only
- Body / UI: Manrope 400/500/600
- Scale (rem, base 16px): xs .75 · sm .875 · md 1 · lg 1.125 · xl 1.5 · 2xl 2 · 3xl 3 · 4xl clamp(2.75rem, 6vw, 5.5rem)
- Body line-height 1.6; headings 1.1. Body text must never go below 16px.
- Small uppercase labels: letter-spacing .12em.

### Spacing (4px base)
space.1 4 · space.2 8 · space.3 16 · space.4 24 · space.5 40 · space.6 64 · space.7 96 · space.8 144
Section padding: space.7 desktop, space.6 mobile. Max content width 1280px; text blocks max 68ch.

### Radius / motion
- radius.sm 8px (cards, images) · radius.pill 100px (buttons)
- motion.fast 300ms · motion.normal 600ms · motion.slow 1000ms · easing cubic-bezier(.22,1,.36,1)
- Motion: fade-up on scroll, slow image zoom inside cards on hover, smooth scrolling, looping ticker.
- prefers-reduced-motion: reduce must turn off smooth scroll, ticker movement, video autoplay (show poster) and scroll animations.

## Components — required states
Every interactive component must define: default, hover, focus-visible, active, disabled, loading (where it submits), error (where it validates).
- Button: pill, accent fill or outline. Focus = 2px outline, 3px offset. Labels say the action ("Talk to us", "Visit Tiiger Trail") — never "Click here".
- Pillar / project card: image (16:10), label, title, short text, "Explore more". Whole card clickable, one link only. Titles wrap to 2 lines max, then truncate.
- Overlay menu: opens with Menu button, traps focus, closes on Esc and Close, returns focus to Menu button.
- Ticker: pauses on hover and focus; duplicated content aria-hidden.
- Contact form: name, phone, email, interest (Buying / Investing / NRI), message. Visible labels, inline errors, success message, spam honeypot. Phone accepts +91 and international.
- Insights list: card grid, filter buttons, empty state ("No posts in this category yet").
- Video hero: muted, loop, playsinline, poster image, visible pause button.

## Media rules
- Only royalty-free sources: Pexels, Unsplash, Pixabay, Mixkit, Coverr. Keep public/media/CREDITS.md with the source URL of every file.
- Subjects: open land, plotted layouts from above, trees, roads through greenery, sunrise over fields, Indian landscapes. No foreign mansions or snow.
- Video: 1080p max, H.264 MP4 + WebM, hero under 4 MB, 8–15 s loop, no audio.
- Images: WebP/AVIF, max 2400px wide, lazy-load below the hero, meaningful alt text.
- Replace stock with real Tiiger Trail drone footage when supplied.

## Responsive
Breakpoints 640 / 1024 / 1280. Pillars 3 columns → 1. Header links collapse into Menu below 1024. Hero headline uses clamp(). Test at 360px.

## Accessibility acceptance criteria
- Lighthouse Accessibility ≥ 95 on every page.
- Fully keyboard usable; focus always visible.
- Skip-to-content link is the first focusable element.
- One h1 per page; headings in order.
- All images have alt text; decorative ones alt="".
- Every text colour pair checked for contrast.

## Don't
- Don't copy Kingsmarque's wording, project names, logo or layout pixel-for-pixel.
- Don't use low-contrast text or hide focus outlines.
- Don't add font sizes or spacing outside the tokens.
- Don't claim returns, approvals or awards without client proof.

## QA checklist (end of every build step)
- [ ] Uses tokens; no raw hex in components
- [ ] All states present on interactive parts
- [ ] Works at 360, 768, 1280, 1920px
- [ ] Keyboard + reduced-motion tested
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95
- [ ] All media listed in CREDITS.md
- [ ] No broken links; Tiiger Trail links open tiigertrail.com
