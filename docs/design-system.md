# Starrbites Luxury Design System Specification

**Version:** 1.0.0  
**Status:** Approved Initial Direction  
**Aesthetic Theme:** Contemporary Architectural Luxury & Corporate Real Estate Editorial  
**WCAG Compliance:** WCAG 2.2 Level AA  

---

## 1. Visual Philosophy & Core Directive

The Starrbites digital visual identity is created to evoke the prestige, confidence, and quiet authority of an established high-end land development institution and private architectural atelier. 

### The Four Pillars of the Visual System:
1. **White Dominance:** Expansive, breathing white space (`#FFFFFF`) establishes purity, scale, clarity, and uncompromising luxury.
2. **Navy Authority:** Corporate Navy (`#171C56`) delivers institutional gravitas, stability, and legal certainty. It replaces generic black for headlines, navigation bars, and primary CTAs.
3. **Gold Precision:** Sampled directly from the official Starrbites emblem (`#EDC455`), gold is an accent of restraint. It is used exclusively for hairline dividers, micro-eyebrows, subtle indicators, and selected hover accents. It is never used in large background slabs.
4. **Editorial Asymmetry:** Rhythmic interplay of oversized serif typography, asymmetric grid offsets, wide cinematic imagery, and structured negative space mimics high-end design monographs.

---

## 2. Design Tokens: Colors

### 2.1 Color Palette
```css
:root {
  /* Core Brand Colors */
  --color-primary-navy: #171C56;
  --color-primary-navy-dark: #0F1238;
  --color-primary-navy-light: #202773;

  /* Sampled Brand Gold (From Official Logo) */
  --color-gold-base: #EDC455;
  --color-gold-light: #FFE672;
  --color-gold-muted: #9B7A2E;
  --color-gold-deep: #C88218;

  /* Surfaces & Backgrounds */
  --color-surface-white: #FFFFFF;
  --color-surface-soft: #F6F6F4;
  --color-surface-subtle: #EEEEEC;
  --color-surface-dark: #171C56;

  /* Text & Content */
  --color-text-primary: #242424;
  --color-text-secondary: #686868;
  --color-text-muted: #8E8E8E;
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: #D1D3E0;

  /* Borders & Dividers */
  --color-border-light: #E7E7E7;
  --color-border-subtle: #F0F0EF;
  --color-border-gold: rgba(237, 196, 85, 0.4);
  --color-border-navy: rgba(23, 28, 86, 0.15);

  /* Semantic Feedback */
  --color-success: #1E6B47;
  --color-error: #B3261E;
  --color-warning: #B26B00;
  --color-info: #171C56;
}
```

### 2.2 Contrast & Accessibility Audit (WCAG 2.2 AA)
- `#171C56` (Navy) on `#FFFFFF`: **14.2:1** (Passes AAA for all text sizes)
- `#242424` (Primary Text) on `#FFFFFF`: **16.4:1** (Passes AAA for all text sizes)
- `#686868` (Secondary Text) on `#FFFFFF`: **5.6:1** (Passes AA for all text sizes, AAA for large text)
- `#FFFFFF` on `#171C56` (Navy Footer/Hero): **14.2:1** (Passes AAA)
- `#EDC455` (Gold) on `#171C56` (Navy): **6.2:1** (Passes AA for text and graphic components)
- *Rule:* Avoid placing gold text on white backgrounds; on white surfaces, use gold strictly for hairline borders, icons, or eyebrow borders.

---

## 3. Typography System

### 3.1 Font Families
- **Editorial Serif (Headings, Pull Quotes, Brand Statements):**  
  `'Playfair Display', Georgia, Cambria, 'Times New Roman', serif`  
  Weights: Regular (400), SemiBold (600), Bold (700), Italic (400i).
- **Modern Sans-Serif (Body, Navigation, Forms, Metadata, UI Controls):**  
  `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`  
  Weights: Light (300), Regular (400), Medium (500), SemiBold (600).

### 3.2 Responsive Type Scale
```css
:root {
  /* Eyebrows / Overline */
  --font-size-eyebrow: 0.75rem;     /* 12px */
  --line-height-eyebrow: 1.5;
  --letter-spacing-eyebrow: 0.16em;

  /* Body Scale */
  --font-size-caption: 0.8125rem;   /* 13px */
  --font-size-body-sm: 0.875rem;    /* 14px */
  --font-size-body: 1rem;           /* 16px */
  --font-size-body-lg: 1.125rem;    /* 18px */
  --line-height-body: 1.7;

  /* Heading Scale (Fluid clamp formulas) */
  --font-size-h4: clamp(1.15rem, 1.2vw + 0.2rem, 1.35rem);   /* 18px - 22px */
  --font-size-h3: clamp(1.35rem, 1.8vw + 0.4rem, 1.75rem);   /* 22px - 28px */
  --font-size-h2: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);    /* 28px - 40px */
  --font-size-h1: clamp(2.25rem, 3.5vw + 0.8rem, 3.5rem);    /* 36px - 56px */
  --font-size-display: clamp(2.75rem, 5vw + 1rem, 4.5rem);   /* 44px - 72px */
  
  --line-height-heading: 1.15;
  --line-height-heading-tight: 1.05;
}
```

### 3.3 Editorial Heading Usage Rules
- **Eyebrows:** All caps, tracked out (`letter-spacing: 0.16em`), font-weight 600, color: `#171C56` or `#EDC455`. Frequently paired with a preceding or adjacent 24px horizontal hairline.
- **Display & H1:** Reserved for hero milestones and section title anchors. Never hyphenated; line breaks placed intentionally for balanced rhythm.
- **Body Columns:** Constrained to a maximum reading line length of 65–75 characters (approx. 640–720px) to prevent eye fatigue.

---

## 4. Spacing, Layout & Grid Architecture

### 4.1 Spacing Scale
The spacing architecture uses an 8px base rhythm with 4px micro-increments:
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-12`: `48px`
- `space-16`: `64px`
- `space-24`: `96px`
- `space-32`: `128px`
- `space-40`: `160px`

### 4.2 Container Widths
- **Wide Editorial Canvas:** Max-width `1440px` (with `clamp(20px, 4vw, 80px)` horizontal padding).
- **Standard Layout Container:** Max-width `1280px`.
- **Focused Editorial / Reading Column:** Max-width `840px`.
- **Form / Modal Container:** Max-width `640px`.

### 4.3 12-Column Editorial Grid
- Desktop (`>= 1024px`): 12 columns, 32px gutters.
- Tablet (`768px - 1023px`): 8 columns, 24px gutters.
- Mobile (`< 768px`): 4 columns, 16px gutters.

### 4.4 Corner Radii & Borders
Luxury architecture avoids rounded bubble corners in favor of crisp, engineered precision:
- `radius-none`: `0px` (Strictly used for heroes, cards, primary buttons, input fields).
- `radius-micro`: `2px` (Subtle softens for pills/badges only).
- `radius-pill`: `9999px` (Restricted to small category tags).
- `border-hairline`: `1px solid var(--color-border-light)`.

---

## 5. Component Specifications

### 5.1 Buttons
Buttons are crafted with deliberate restraint, generous horizontal breathing room, and sharp architectural corners.

1. **Primary Button:**
   - Background: `var(--color-primary-navy)` (`#171C56`).
   - Text: `var(--color-surface-white)` (`#FFFFFF`).
   - Border: `1px solid var(--color-primary-navy)`.
   - Padding: `16px 36px` desktop, `14px 28px` mobile.
   - Typography: Inter, 14px (0.875rem), SemiBold (600), letter-spacing: `0.04em`.
   - Hover State: Background transitions smoothly to `#0F1238`, border shifts to `var(--color-gold-base)` (`#EDC455`), `transform: translateY(-1px)`.
   - Focus State: Visible outer focus ring `2px solid var(--color-primary-navy)`, offset `3px`.

2. **Secondary Button:**
   - Background: `transparent` (or `var(--color-surface-white)`).
   - Text: `var(--color-primary-navy)` (`#171C56`).
   - Border: `1px solid var(--color-primary-navy)`.
   - Padding: `16px 36px`.
   - Hover State: Background fills with `var(--color-surface-soft)` (`#F6F6F4`) or subtle navy tint; border remains navy.

3. **Inverted Button (For Dark / Hero Overlays):**
   - Background: `transparent`.
   - Text: `var(--color-surface-white)` (`#FFFFFF`).
   - Border: `1px solid rgba(255, 255, 255, 0.6)`.
   - Hover State: Background becomes `var(--color-surface-white)`, text becomes `var(--color-primary-navy)`.

4. **Editorial Text Link:**
   - Display: Inline-flex with icon arrow (`→`).
   - Underline: Animated bottom hairline reveal on hover using CSS `transform-origin: left`.
   - Color: `var(--color-primary-navy)` or `var(--color-gold-deep)`.

### 5.2 Header & Navigation
- **Height:** Desktop `92px`, Mobile `68px`.
- **Hero State:** Transparent background over cinematic hero with high-contrast logo and navigation typography.
- **Scrolled State:** Seamless transition to solid `#FFFFFF` with hairline bottom divider (`1px solid #E7E7E7`) and subtle ambient shadow (`0 4px 20px rgba(0,0,0,0.03)`).
- **Navigation Links:** Inter, 14px, Medium (500), uppercase or title case with subtle 1px animated gold bottom indicator on hover/active.
- **Mobile Menu:** Full-viewport overlay (`#FFFFFF` or deep navy `#171C56`) with stagger-animated navigation links, direct telephone access, and clear close button.

### 5.3 Form Elements
- **Input Fields & Textareas:**
  - Background: `#FFFFFF`.
  - Border: `1px solid var(--color-border-light)` (`#E7E7E7`).
  - Height: `52px` for single-line inputs; padding `14px 18px`.
  - Text: `var(--color-text-primary)` (`#242424`).
  - Focus Indicator: Border shifts to `var(--color-primary-navy)` (`#171C56`), outline `1px solid var(--color-primary-navy)`.
  - Label: Placed clearly above input, 13px SemiBold, never relying purely on placeholders.
  - Error State: Border color `#B3261E` with clear error message below field.

### 5.4 Image Treatments & Aspect Ratios
- **Hero Landscape:** `16:9` or full viewport height (`min-height: 85vh; max-height: 900px`).
- **Architectural Feature:** `4:3` or `3:2`.
- **Editorial Vertical:** `3:4` or `4:5`.
- **Team Portraits:** Strictly `1:1` square (`900 × 900 px` native aspect).
- **Hover Micro-interaction:** Subtle scale from `1.00` to `1.03` over `600ms cubic-bezier(0.16, 1, 0.3, 1)` within `overflow: hidden` frame.

---

## 6. Motion Design & Animation Tokens

### 6.1 Duration Tokens
- `duration-instant`: `150ms` (Color changes, hover highlights)
- `duration-fast`: `250ms` (Buttons, dropdowns, micro-transitions)
- `duration-normal`: `450ms` (Accordions, tab shifts, modal fades)
- `duration-reveal`: `750ms` (Scroll-triggered image & text entrances)
- `duration-hero`: `1100ms` (Choreographed homepage hero sequence)

### 6.2 Easing Curves
- **Standard Luxury Ease (Enter):** `cubic-bezier(0.16, 1, 0.3, 1)` (Power3/Expo feel: fast start, long elegant settle).
- **Smooth In-Out:** `cubic-bezier(0.65, 0, 0.35, 1)`.
- **Linear:** Used strictly for infinite ticker or subtle marquee transitions.

### 6.3 Accessibility & Reduced Motion
Every animation must be wrapped with a `@media (prefers-reduced-motion: reduce)` rule or GSAP conditional check:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Quality Gates & System Rules

1. **No Unlicensed Assets:** Every image must be catalogued in `docs/image-assets.md` with verified source and usage terms.
2. **No Pure Black (#000000):** Typography must use `#242424` for soft, editorial contrast.
3. **No Uncalibrated Gold:** Do not use brassy yellows or neon ambers. Use sampled `#EDC455`.
4. **No Layout Shifts (CLS = 0):** All images and media containers must explicitly define aspect ratios.
5. **No Hover-Only Access:** All navigation and critical actions must be fully accessible via keyboard (`Tab` / `Enter` / `Space`) and touch screen.
