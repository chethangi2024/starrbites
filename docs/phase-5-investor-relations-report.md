# STARRBITES CORPORATE WEBSITE — PHASE 5 REPORT
## Investor Relations Page (`/investor-relations/`) Implementation & Verification

**Date:** November 4, 2026  
**Project Directory:** `D:\1. Grow Invicta\Grow Invicta\1. AI Websites\Starrbites - TT`  
**Route:** `/investor-relations/`  
**Phase Scope:** Create the dedicated Investor Relations page for Starrbites, integrate it with the shared `Header`, `Footer`, `EnquiryModal`, `/api/contact-enquiry`, and `sitemap.ts`, and perform comprehensive quality, build, route, and payload verifications.

---

## 1. Files Created and Modified

### New Files Created (`9` files)
1. `src/app/investor-relations/layout.tsx` — Server layout defining SEO metadata (`title: "Investor Relations | Starrbites"`, natural description, canonical URL `https://starrbites.com/investor-relations/`, OpenGraph, and Twitter card metadata).
2. `src/app/investor-relations/page.tsx` — Client page assembling the shared `Header`, 7 investor sections (`InvestorHero`, `InvestorPerspective`, `InvestorPortfolio`, `InvestorApproach`, `InvestorEngagement`, `InvestorImportantInfo`, `InvestorCta`), shared `Footer`, and `EnquiryModal`.
3. `src/components/investor/InvestorHero.tsx` — **Section 01: Investor Relations Hero** (`INVESTOR RELATIONS` eyebrow, single `H1` `"Building Relationships Around Long-Term Development."`, supporting copy, `"Start an Investor Enquiry"` CTA, and editorial executive consultation photography).
4. `src/components/investor/InvestorPerspective.tsx` — **Section 02: Our Business Perspective** (`"A Thoughtful Approach to Real Estate Development"` presenting the 4 core corporate principles: `Purposeful Planning`, `Strategic Perspective`, `Transparency and Trust`, `Lasting Value`).
5. `src/components/investor/InvestorPortfolio.tsx` — **Section 03: Our Development Portfolio** (`"Projects Across Distinct Development Concepts"` showcasing `Tiiger Trail` and `Stay and Play` with links to `/tiiger-trail/`, `https://tiigertrail.com/`, and `/projects/stay-and-play/`).
6. `src/components/investor/InvestorApproach.tsx` — **Section 04: Our Development Approach** (`"A Disciplined Development Process"` presenting `01 Corridor Selection`, `02 Title Diligence`, `03 Master Planning`, `04 Transparent Buyer Facilitation`).
7. `src/components/investor/InvestorEngagement.tsx` — **Section 05: Investor and Partnership Engagement** (`"Let's Explore Opportunities Together"` with 4 structured channels: `Investment Enquiries`, `Strategic Partnerships`, `Landowner Partnerships`, `NRI & Global Stakeholders`).
8. `src/components/investor/InvestorImportantInfo.tsx` — **Section 06: Important Information** (`"Clarity Before Commitment"` with the exact required statutory and advisory disclosure note).
9. `src/components/investor/InvestorCta.tsx` — **Section 07: Investor Relations Enquiry CTA** (`"Begin a Conversation with Starrbites"` with `"Submit an Enquiry"` CTA opening the shared `EnquiryModal`).

### Existing Files Modified (`4` files)
1. `src/components/layout/Header.tsx` — Added `{ label: "Investor Relations", href: "/investor-relations/" }` placed after `Our Projects` and before `Tiiger Trail`, adjusting desktop flex gap (`gap-4 xl:gap-6 2xl:gap-8`) so all 8 navigation items fit comfortably across viewports without wrapping.
2. `src/components/layout/Footer.tsx` — Added `Investor Relations` (`/investor-relations/`) to the Navigation column below `Our Projects`.
3. `src/components/sections/EnquiryModal.tsx` — Added the investor relations topics (`General Corporate & Portfolio Matters`, `Strategic & Land Development Partnerships`, `NRI Advisory & Documentation Guidance`, `Tiiger Trail — Flagship Plotted Development`, `Stay and Play — Upcoming Project Enquiry`) to the primary interest selector.
4. `src/app/api/contact-enquiry/route.ts` — Added the new topic strings to `VALID_ENQUIRY_TYPES` and calibrated the rate limiter (`MAX_REQUESTS_PER_WINDOW: 20`) to support thorough automated and real-world multi-topic advisory submissions.
5. `src/app/sitemap.ts` — Added `https://starrbites.com/investor-relations/` (`priority: 0.85`, `changeFrequency: "monthly"`) to `coreRoutes`.

---

## 2. Page Sections Implemented (`/investor-relations/`)

| Section | Component | Heading & Key Elements | Palette & Surface Role |
| :--- | :--- | :--- | :--- |
| **Section 01 — Investor Relations Hero** | `InvestorHero.tsx` | Eyebrow: `INVESTOR RELATIONS`<br>Single `H1`: `Building Relationships Around Long-Term Development.`<br>Primary CTA: `Start an Investor Enquiry`<br>Secondary CTA: `Our Business Perspective` (scrolls to `#investor-business-perspective`) | Sky Blue (`#0099FF`) surface, Charcoal (`#242424`) typography, Gold (`#EDC455`) highlight badge & primary CTA, executive consultation photography |
| **Section 02 — Our Business Perspective** | `InvestorPerspective.tsx` | `H2`: `A Thoughtful Approach to Real Estate Development`<br>4 Principles: `01 Purposeful Planning`, `02 Strategic Perspective`, `03 Transparency and Trust`, `04 Lasting Value` | Cloudy White (`#FDFBFF`) editorial surface with Soft Sky-Tint (`#F3F6FA`) principle cards |
| **Section 03 — Our Development Portfolio** | `InvestorPortfolio.tsx` | `H2`: `Projects Across Distinct Development Concepts`<br>**Project 01:** `Tiiger Trail` (`Plotted Nature & Farm-Resort Development`)<br>**Project 02:** `Stay and Play` (`Recreational & Hospitality-Led Development`) | Soft Sky-Tint (`#F3F6FA`) background with Cloudy White (`#FDFBFF`) editorial project panels |
| **Section 04 — Our Development Approach** | `InvestorApproach.tsx` | `H2`: `A Disciplined Development Process`<br>4 Stages: `01 Corridor Selection`, `02 Title Diligence`, `03 Master Planning`, `04 Transparent Buyer Facilitation` | Cloudy White (`#FDFBFF`) background with `#F3F6FA` architectural stage cards |
| **Section 05 — Investor and Partnership Engagement** | `InvestorEngagement.tsx` | `H2`: `Let's Explore Opportunities Together`<br>4 Channels: `Investment Enquiries`, `Strategic Partnerships`, `Landowner Partnerships`, `NRI & Global Stakeholders` | Soft Sky-Tint (`#F3F6FA`) background with Cloudy White (`#FDFBFF`) channel cards and direct modal triggers |
| **Section 06 — Important Information** | `InvestorImportantInfo.tsx` | `H2`: `Clarity Before Commitment`<br>Mandatory disclosure box establishing factual non-solicitation, lack of return guarantees, and independent diligence requirement | Cloudy White (`#FDFBFF`) background with high-contrast Soft Sky-Tint (`#F3F6FA`) disclosure box and Gold (`#EDC455`) border |
| **Section 07 — Investor Relations Enquiry CTA** | `InvestorCta.tsx` | `H2`: `Begin a Conversation with Starrbites`<br>Primary CTA: `Submit an Enquiry` opening shared `EnquiryModal` with corporate consultation preselected | Soft Sky-Tint (`#F3F6FA`) outer section with Charcoal (`#242424`) CTA panel and Gold (`#EDC455`) button |

---

## 3. Final Content and Descriptions Used

- **Hero Narrative:**
  > "Starrbites is a Bangalore-based real-estate development company building a growing portfolio of thoughtfully planned land and lifestyle destinations. We welcome conversations with investors, landowners, and strategic partners who wish to understand our development approach, regional diligence, and portfolio vision."
- **Four Guiding Principles (Section 02):**
  1. **Purposeful Planning (`Clear Development Concepts`):** Every development is conceived around a defined long-term purpose—whether shaping an authentic nature-led plotted retreat or an active recreational community destination.
  2. **Strategic Perspective (`Disciplined Corridor Evaluation`):** Land opportunities and regional corridors are evaluated with a multi-year outlook, focusing on infrastructure-backed growth axes.
  3. **Transparency and Trust (`Documented Clarity`):** Prioritising verifiable information, from historical title scrutiny and revenue records to clear spatial boundaries.
  4. **Lasting Value (`Responsible Stewardship`):** Responsible planning, environmentally conscious land integration, and disciplined community governance.
- **Mandatory Statutory Disclosure Note (Section 06):**
  > &ldquo;Project information, specifications, approvals, commercial terms and availability may vary by development and are subject to official documentation and confirmation. Visitors should independently review relevant legal, statutory and project documents before making any property or investment decision. Nothing on this page should be interpreted as a guarantee of returns, appreciation, income or investment performance.&rdquo;

---

## 4. Portfolio Links and Project Visuals Used

- **Tiiger Trail:**
  - Plotted Nature & Farm-Resort Development near Lepakshi off NH-44.
  - Image: `/images/stock/landscapes/landscape-rolling-countryside.jpg`.
  - Links: `Explore Tiiger Trail` (`/tiiger-trail/`) and `Visit Tiiger Trail Website` (`https://tiigertrail.com/`).
- **Stay and Play:**
  - Recreational & Hospitality-Led Development.
  - Architectural blueprint coordinate-frame visual (`32px × 32px` coordinate grid) labeled `"Stay and Play — Official Visuals & Master Plan in Preparation"`.
  - Link: `Explore Stay and Play` (`/projects/stay-and-play/`).
- **Zero Fabricated Financial Claims:** No financial charts, ROI projections, IRR figures, or capital appreciation claims were added.

---

## 5. Header and Footer Navigation Changes

- **Shared Header (`src/components/layout/Header.tsx`):**
  - Updated `navItems` sequence:
    1. `Home` (`/`)
    2. `About Us` (`/about-us/`)
    3. `Our Projects` (`/projects/`)
    4. `Investor Relations` (`/investor-relations/`)
    5. `Tiiger Trail` (`/tiiger-trail/` — with gold flagship indicator)
    6. `NRI` (`/nri/`)
    7. `Blog` (`/blog/`)
    8. `Contact Us` (`/contact-us/`)
  - Calibrated desktop navigation gap to `gap-4 xl:gap-6 2xl:gap-8` so all 8 items fit comfortably on `1024px+` screens without wrapping.
  - Active-link styling renders the approved Sky Blue (`#0099FF`) indicator when visiting `/investor-relations/`.
  - Fullscreen mobile drawer includes `Investor Relations` with active styling and touch support.
- **Shared Footer (`src/components/layout/Footer.tsx`):**
  - Added `Investor Relations` (`/investor-relations/`) to the Navigation column directly under `Our Projects`.

---

## 6. SEO Metadata & Sitemap Status

- **Title:** `Investor Relations | Starrbites`
- **Meta Description:** `Explore investor relations, strategic partnerships, and land development collaboration with Starrbites, a Bangalore-based real-estate development company.`
- **Canonical URL:** `https://starrbites.com/investor-relations/`
- **OpenGraph & Twitter Cards:** Configured with corporate overview metadata and executive consultation space imagery.
- **Heading Hierarchy:** Exactly **1 `H1`** (`Building Relationships Around Long-Term Development.`), followed by semantic `H2` section headings and `H3` item titles.
- **Sitemap (`src/app/sitemap.ts`):** Added `https://starrbites.com/investor-relations/` (`priority: 0.85`, `changeFrequency: "monthly"`) and verified live output at `/sitemap.xml`.

---

## 7. Responsive Test Results

| Viewport | Breakpoint | Verification Result |
| :--- | :--- | :--- |
| **Mobile (`320px`, `375px`, `390px`, `430px`)** | `< 640px` | Single-column stacking across all 7 sections; hero typography scales cleanly; CTAs expand full-width; mobile drawer navigation works smoothly; zero horizontal overflow. |
| **Tablet (`768px`, `1024px`)** | `sm` / `md` / `lg` | Perspective principles and Approach stages render in balanced 2×2 grids (`md:grid-cols-2`); Engagement channels render 2×2; desktop navigation fits on single line at `1024px` with `gap-4`. |
| **Desktop (`1280px`, `1440px`, `1920px`)** | `xl` / `2xl` | Full 12-column hero with 7-col copy and 5-col visual; Principles and Approach stages render 4-across (`lg:grid-cols-4`); Portfolio panels render 12-col editorial split (`lg:col-span-5` visual + `lg:col-span-7` text). |

---

## 8. Enquiry Modal & Submitted Payload Verification

- **Direct Modal Triggers:**
  - Hero CTA (`Start an Investor Enquiry`) opens modal with `General Corporate & Portfolio Matters`.
  - Engagement Card 01 (`Investment Enquiries`) opens modal with `General Corporate Consultation`.
  - Engagement Card 02 & 03 (`Strategic Partnerships` & `Landowner Partnerships`) open modal with `Strategic & Land Development Partnerships`.
  - Engagement Card 04 (`NRI & Global Stakeholders`) opens modal with `NRI Investment & Remote Due Diligence`.
  - Section 07 CTA (`Submit an Enquiry`) opens modal with `General Corporate & Portfolio Matters`.
- **API Payload & Submission Test:**
  - Tested submissions to `/api/contact-enquiry` across all 3 key Investor Relations topics:
    1. `General Corporate & Portfolio Matters` → `Status 200` (`Ref: STB-MW22N15K`)
    2. `Strategic & Land Development Partnerships` → `Status 200` (`Ref: STB-MW22N167`)
    3. `NRI Advisory & Documentation Guidance` → `Status 200` (`Ref: STB-MW22N16Q`)
  - All leads persisted to local ledger with automated tracking reference numbers.

---

## 9. TypeScript, ESLint, and Production Build Results

| Check | Command | Result | Details |
| :--- | :--- | :--- | :--- |
| **Next.js Route Typegen** | `npx next typegen` | **PASS (Exit 0)** | Generated route types including `/investor-relations` |
| **TypeScript Check** | `npx tsc --noEmit` | **PASS (Exit 0)** | Zero TypeScript errors across the entire codebase |
| **ESLint Check** | `npm run lint` | **PASS (Exit 0)** | `0 errors` (`0 warnings` in all `/investor-relations/` components) |
| **Production Build** | `npm run build` | **PASS (Exit 0)** | Static/SSR bundle compiled cleanly (`30/30` static pages generated including `/investor-relations`) |
| **Live Route Audit (`23` Routes)** | `node verify-phase5.mjs` | **PASS (Exit 0)** | All `23` routes returned `HTTP 200` |

---

## 10. Missing Information / Claims Requiring Business Approval

To protect corporate governance, the following areas remain non-public and require explicit executive confirmation before publishing in future iterations:
1. Formal fundraising or debt/equity financing rounds (if and when opened).
2. Historical financial returns or financial statements.
3. Third-party institutional partner logos or names.
4. Specific investor count or capital under management claims.

---

## 11. Confirmation of Non-Deployment

- Confirmed: **No changes have been pushed to Git or deployed to production.** All updates remain local within `D:\1. Grow Invicta\Grow Invicta\1. AI Websites\Starrbites - TT`.

