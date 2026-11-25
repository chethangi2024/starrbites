---
name: starrbites-design-system
description: Design rules for the StarrBites website rebuild. Read before building or changing any page, section or component.
---

# StarrBites — Design System

## Design intent (one sentence)
A calm, editorial, light-cream land-development site with gold buttons and bronze/gold accents in the spirit of kingsmarque.in: big imagery, short confident copy, generous space, slow motion — but with StarrBites' own words, colours and layout details. It must not copy Kingsmarque's text, logo, project names or exact layouts.

## Brand
- Brand: StarrBites (land development, Bengaluru)
- Flagship project: Tiiger Trail – Phase I (links to https://tiigertrail.com)
- Audience: home buyers, land investors, NRIs / global buyers
- Tone: calm, confident, plain. Short sentences. No hype words ("best", "guaranteed returns", "No.1").
- Honesty rule: never state returns, appreciation % or approvals unless the client has supplied them. Stock photos must never be captioned as the actual project.

## Pages (6 top-level pages + project detail)
1. Home
2. About — single company-profile page (Intro, Our Journey vertical timeline, Vision/Mission/Philosophy, Founder's Note, Team, Sustainability, Testimonials, FAQ, Closing CTA)
3. Projects — `/projects` portfolio grid (Tiiger Trail – Phase I + "More destinations coming soon") and reusable `/projects/[slug]` detail template (`/projects/tiiger-trail`)
4. Investors — "Invest with StarrBites", investment opportunities (Tiiger Trail – Phase I), project status, partnership & investor enquiry form
5. Insights — blog list with filter (All / News / Guides) and post detail pages
6. Contact ("Talk to us") — form (Buy a plot / Investment / Site visit / Other), WhatsApp button, phones, email, address, map
Plus: Privacy Policy, Terms (simple text pages, linked in footer only).

## Navigation
- Desktop: logo left; Home, About, Projects, Investors, Insights, Contact; gold "Talk to us" button right.
- Mobile + optional desktop: "Menu" button opens a full-screen cream overlay menu with large navy links, a gold "Talk to us" button, and a "Close" button.
- Home hero uses a minimal transparent white header (hamburger left + "Talk to us" link right) during Stage 1 & 2, then slides in the full cream header once scrolled past the hero. Interior hero pages use transparent header (`logo-light.png` + white links) turning solid cream (`logo.png` + navy links) on scroll.

## Home page — section order
1. Hero — two-stage scroll-driven intro over muted looping video + dark overlay (Stage 1: "Welcome to / STARRBITES" + scroll cue; Stage 2: "Land that grows with you", support copy, "Explore Tiiger Trail" + "Talk to us", persistent pause button).
2. Statement — one large paragraph on land as long-term growth, lifestyle and legacy.
3. Three pillars (cards with image + "Explore more"): Invest in Land · Curated Destinations · Investors (`/investors`).
4. Featured project — Tiiger Trail – Phase I (Sri Sathya Sai District, Karnataka–Andhra Pradesh border), wide image, 3 highlights, links to `/projects/tiiger-trail` and `/projects`.
5. Project ticker — slow horizontal looping strip of project/destination names.
6. Insights — latest 3 posts.
7. Closing CTA — "Start your land journey" + "Talk to us".
8. Footer — short blurb, quick links, contact details, Instagram + LinkedIn, Privacy / Terms, © year.

## Tokens

### Colour (light cream theme matched to StarrBites logo: navy #171C56 + gold #D69F38→#FEDE6E)
- color.surface.base #FAF7F0 (cream, main background)
- color.surface.raised #F3EDE1 (deeper cream, bands, cards, and footer)
- color.surface.light #FFFFFF (occasional white panels)
- color.text.primary #171C56 (logo navy, used only as text)
- color.text.secondary #5E5A52 (warm grey)
- color.accent #E0B24C (gold — button fills and highlights)
- color.accent.hover #D69F38 (darker gold on hover)
- color.accent.onAccent #171C56 (navy text on gold buttons — never white)
- color.accent.border #8A6420 (1px bronze border on gold buttons so they stand out on cream)
- color.accent.text #8A6420 (bronze — for any gold-coloured TEXT: small labels, links, focus ring)
- color.highlight #F6E3B0 (soft gold marker behind key words, navy text on top)
- color.accent.gradient linear-gradient(90deg, #D69F38, #FEDE6E) (thin decorative lines, underlines, star accents only — never text or buttons)
- color.border.subtle rgba(23,28,86,0.12)
- color.overlay.hero linear-gradient(rgba(11,14,42,.30), rgba(11,14,42,.72)) (dark overlay on hero video/photos for white text)
Rules:
- All text/background pairs must pass WCAG AA (4.5:1 body, 3:1 large text). Never put secondary text on images without the dark overlay.
- Primary buttons: gold fill (#E0B24C), navy text (#171C56), 1px bronze border (#8A6420); hover fills with darker gold (#D69F38).
- Secondary buttons: transparent with navy text and 1px navy border (on dark heroes, white text and 1px white border).
- Never use gold (#E0B24C / #D69F38) as a text colour on cream — use bronze #8A6420 (`color.accent.text`) for gold-looking text, labels, links, and focus rings.
- Optional `.highlight` marker (`#F6E3B0` behind `#171C56` navy text) may be used on 1–2 key phrases per page (e.g. "grows with you" in the Home hero). Do not overuse it.
- Keep the hero video and page heroes with a dark overlay and white text; hero primary buttons stay gold with navy text.
- Footer uses deeper cream (#F3EDE1) with navy logo and navy/warm-grey/bronze text. Overlay menu uses cream (#FAF7F0) with navy links and a gold "Talk to us" button.

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
