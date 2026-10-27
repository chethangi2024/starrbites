# Starrbites Website Redesign — Project Audit Report

**Date:** October 2026  
**Auditor:** Senior Luxury Real Estate UI/UX Architect & Creative Technologist  
**Project Directory:** `D:\1. Grow Invicta\Grow Invicta\1. AI Websites\Starrbites - TT`  
**Current Live Corporate Website:** [https://starrbites.com/](https://starrbites.com/)  
**Flagship Project Website:** [https://tiigertrail.com/](https://tiigertrail.com/)  

---

## 1. Executive Summary

This project audit establishes the empirical baseline for the complete redesign and re-engineering of the **Starrbites** corporate web platform. Starrbites is a Bangalore-based land development firm specializing in curated plotted destinations and strategic land stewardship, with **Tiiger Trail** positioned as its signature flagship development.

The audit was executed without modifying or deleting any existing source files, digital assets, or briefs. It covers file system discovery, brand asset sampling, team photography cataloguing, live website content and SEO mapping, and architectural evaluation.

---

## 2. Project Directory & File System Audit

Prior to this setup phase, the workspace contained:

```
D:\1. Grow Invicta\Grow Invicta\1. AI Websites\Starrbites - TT\
├── Digital Assets\
│   ├── Logo\
│   │   ├── Starrbites Logos.png          (32.3 KB, 500 × 190 px, Format32bppArgb)
│   │   └── Starrbites White Logos.png    (28.2 KB, 500 × 190 px, Format32bppArgb)
│   └── Team\
│       ├── Ashish Bhartiya (General Manager).png   (221.3 KB, 900 × 900 px)
│       ├── Ashok (Land Acquiring & Legal).png      (828.1 KB, 900 × 900 px)
│       ├── Chethan (Digital & CRM).png             (741.2 KB, 900 × 900 px)
│       ├── K P Rupesh Kumar (Principal Advocate).png (393.4 KB, 900 × 900 px)
│       └── Sunil Yadav (Founder).png               (722.9 KB, 900 × 900 px)
├── Website Designs\
│   ├── SB DESIGN.md                      (3.7 KB - Token & UI guidelines for Starrbites)
│   └── TT DESIGN.md                      (3.5 KB - Token & UI guidelines for Tiiger Trail)
└── Starrbites PRD.docx                    (54.4 KB - Comprehensive 27-section PRD)
```

### Key Findings
1. **No Existing Application Code:** The workspace was not pre-populated with a legacy frontend build (e.g. no existing node_modules, package.json, or git repository). It is a clean repository containing master assets and documentation.
2. **Untouched Master Source:** All files in `Digital Assets` and `Website Designs` are completely intact and preserved in their native directories.
3. **Structured Directory Additions:** To prepare for the modern frontend, a web-standard `public/images/` tree has been initialized, with verified assets mirrored into `public/images/brand/`, `public/images/team/`, and categorized subdirectories under `public/images/stock/`.

---

## 3. Brand Assets & Logo Audit

### 3.1 Official Logo Files
- **`Starrbites Logos.png`**: Primary corporate logo featuring the Starrbites geometric emblem on the left and typography on the right.
  - Transparent 32-bit ARGB PNG (`500 × 190 px`).
  - Primary wordmark color: Corporate Navy (`#171C56`).
  - Emblem accent: Multitone gold gradient ranging from `#FFE672` (highlight) through `#EDC455` (mid-tone body) to `#D79221` (shadow accent).
- **`Starrbites White Logos.png`**: High-contrast monochrome inverted version.
  - Transparent 32-bit ARGB PNG (`500 × 190 px`).
  - Pure white `#FFFFFF` mark, engineered for dark navy backgrounds, full-bleed cinematic hero overlays, and deep footers.

### 3.2 Logo Proportions & Rules
- Aspect ratio is strictly `50:19` (approximately `2.63:1`).
- The logo must **never** be distorted, vertically squashed, or altered in stroke weight.
- Clear space minimum: `24px` on all sides in desktop viewports; minimum display height `42px` on desktop headers, `36px` on mobile headers.
- Never replace the official graphic mark with plain system fonts or AI-generated variations.

---

## 4. Team Assets Audit

The team directory contains verified, high-resolution portrait photographs of the core leadership and advisory team. All images are square (`900 × 900 px`), studio-lit with neutral backdrops, suitable for luxury editorial profiles.

| Name | Official Title | File | Dimensions | Intended Placement |
| :--- | :--- | :--- | :--- | :--- |
| **Sunil Yadav** | Founder | `Sunil Yadav (Founder).png` | 900 × 900 | Leadership / Founder's Statement (About Us) |
| **Ashish Bhartiya** | General Manager | `Ashish Bhartiya (General Manager).png` | 900 × 900 | Leadership Team (About Us) |
| **Ashok** | Land Acquiring & Legal | `Ashok (Land Acquiring & Legal).png` | 900 × 900 | Land Due Diligence / Advisory Team |
| **K P Rupesh Kumar** | Principal Advocate | `K P Rupesh Kumar (Principal Advocate).png` | 900 × 900 | Legal Due Diligence / Advisory Team |
| **Chethan** | Digital & CRM | `Chethan (Digital & CRM).png` | 900 × 900 | Customer Experience & Operations |

*Note: The original master photos in `Digital Assets/Team/` remain unmodified. Copies have been placed in `public/images/team/` for web integration.*

---

## 5. Live Website Audit: Starrbites Corporate (`starrbites.com`)

### 5.1 Architecture & Stack
- **CMS:** WordPress 7.1.3 + Hello Elementor Theme.
- **Page Builder:** Elementor Pro 3.26.2 + ElementsKit.
- **Performance / Server:** LiteSpeed Cache plugin, Apache/LiteSpeed web server.
- **SEO & Tracking:** RankMath SEO, Google Site Kit, Google Tag Manager (`GT-NGB743HL`).
- **Current Weaknesses:**
  - Standard WordPress/Elementor template appearance with visible widget bloat and layout shifts.
  - Reliance on generic carousels and inconsistent spacing.
  - Fragmented mobile navigation.
  - Heavy asset overhead affecting Core Web Vitals.

### 5.2 Live Navigation Structure
- **Primary Menu:**
  - Home (`/`)
  - Our Story (Dropdown): About Us (`/about-us/`), Our Team (`/our-team/`), Blog (`/blog/` with sub-links for Trends and News)
  - Project (Dropdown): Tiiger Trail – Phase I (External link to `https://tiigertrail.com/`)
  - Sustainability (`/sustainability/`)
  - NRI (`/nri/`)
  - Contact Us (`/contact-us/`)

### 5.3 Core Content & Verified Facts
- **Corporate Positioning:** Bangalore-based land developer focusing on curated plotted developments, strategic growth corridors, clear legal titles, and long-term legacy value.
- **Verified Registered Office:**
  `Starrbites – No. 194, 3rd Main, 13th Cross, RMV 2nd Stage, HIG Dollars Colony, Bengaluru, Karnataka 560094, India`
- **Verified Contact Channels:**
  - Phones: `+91 97408 06357`, `+91 88611 97979`, `+91 88674 97979`
  - Hours: 9:00 AM – 7:00 PM, 7 days a week.
  - Digital / CRM Coordinator: Chethan (`iamchethandm@gmail.com`).

---

## 6. Live Website Audit: Flagship Project (`tiigertrail.com`)

### 6.1 Positioning & Concept
- **Identity:** "Where Nature and Soul Meet" — A premium farm-resort plotted destination.
- **Location:** Situated along the Karnataka–Andhra Pradesh border corridor near Lepakshi, off the NH-44 highway.
- **Strategic Growth Drivers:**
  1. Adjacent to Lepakshi Aerospace & Defence Corridor.
  2. National Academy of Customs, Indirect Taxes & Narcotics (NACIN).
  3. Bharat Electronics Limited (BEL) Research & Expansion Zone.
  4. Kia Motors regional manufacturing hub.
  5. NH-44 Highway Infrastructure Axis.
- **Development Specs:** Certified land titles with individual mutation records, gated perimeter, planned resort amenities (clubhouse, tennis, horse riding, wellness spa, mini golf, plantation avenues).
- **Architectural Collaboration:** Pre-planned farmhouse vernacular models designed by Mayan Designs.

---

## 7. SEO Content Inventory & Migration Mapping

The current website holds existing organic search rankings for land investment, mutation guidelines, and farmland documentation in Bangalore. The redesign must preserve these URLs or provide seamless 301 redirects to ensure zero loss of organic authority.

### 7.1 Core Pages to Retain / Redesign
| Current URL | Status in Redesign | Redesign Target |
| :--- | :--- | :--- |
| `https://starrbites.com/` | Redesign | `/` (Homepage) |
| `https://starrbites.com/about-us/` | Redesign & Expand | `/about-us/` |
| `https://starrbites.com/our-team/` | Integrate into About Us | `/about-us/#leadership` (or `/our-team/` 301) |
| `https://starrbites.com/nri/` | Redesign | `/nri/` |
| `https://starrbites.com/contact-us/` | Redesign | `/contact-us/` |
| `https://starrbites.com/sustainability/`| Consolidate | Integrate into `/about-us/` and `/tiiger-trail/` |
| New Corporate Page | Add | `/tiiger-trail/` (Flagship Corporate Overview) |
| New Legal Pages | Add | `/privacy-policy/`, `/terms-and-conditions/` |
| New Utility | Add | `/thank-you/` |

### 7.2 High-Value Blog Articles (To Preserve)
The following articles represent indexed organic landing pages from the sitemap:
1. `/property-registration-will-not-give-you-ownership-in-2025/`
2. `/how-to-safely-verify-farmland-before-buying-2025/`
3. `/how-2025-farmland-mutation-rules-are-changing/`
4. `/why-is-the-safest-investment-farmland-in-2025/`
5. `/legal-checklist-for-property-buyers-in-india-verify/`
6. `/managed-farmland-investments-bangalore-a-complete-guide-for-2025/`
7. `/farmland-investment-locations-near-bangalore-2025/`
8. `/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide/`
9. `/bengaluru-residential-real-estate-demand-2025/`
10. `/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns/`

*Rule: In Phase 4 & 5, these articles will be migrated into a refined `/blog/[slug]` route with schema markup (`Article`, `BlogPosting`) and identical permalink structures.*

---

## 8. Technical Architecture Recommendation

### Evaluated Options

1. **Option A: WordPress Custom Theme / Headless WordPress**
   - *Pros:* Familiar backend editing for the existing webmaster.
   - *Cons:* Plugin dependency, PHP maintenance overhead, slower TTFB, harder to achieve bespoke 60fps GSAP animations without performance degradation.
2. **Option B (Recommended): Next.js 15 (App Router) + TypeScript + Tailwind CSS / Vanilla CSS Tokens + GSAP 3**
   - *Pros:*
     - Enterprise-grade performance (Core Web Vitals LCP < 1.8s, CLS = 0).
     - Static Site Generation (SSG) for all corporate pages and blog posts, delivering near-instant global page loads via CDN.
     - Complete control over typography, layouts, and luxury micro-interactions.
     - Direct integration with GSAP and ScrollTrigger without plugin friction.
     - Type-safe components and content schemas.
     - Simplified deployment to modern production environments (Vercel, AWS Amplify, or Node server).
   - *Recommendation:* Implement Option B. For content management, store structured markdown/MDX or JSON files locally in the project repository, allowing simple updates without code changes, with optional headless CMS hooks in Phase 5.

---

## 9. Approval Requirements Before Implementation

Before proceeding to Phase 2 (Design System code) and Phase 3 (Homepage implementation), client/creative director sign-off is required for:
1. **Typography Selection:** Playfair Display (Serif headline) paired with Inter (Sans-serif body).
2. **Primary Palette:** Dominant pure white `#FFFFFF` + Corporate Navy `#171C56` + Sampled Brand Gold `#EDC455` (with accents).
3. **Information Architecture:** Primary navigation consisting of:
   `Home | About Us | Our Flagship | NRI Investment | Insights | Contact` + CTA `Start a Conversation`.
4. **Stock Imagery Selection:** 12 curated architectural, landscape, and tactile assets downloaded in `public/images/stock/`.
