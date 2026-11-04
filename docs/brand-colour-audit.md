# Starrbites — Brand Colour System & Accessibility Audit

**Document Version:** 2.0 (Global Colour Palette Transformation)  
**Status:** Complete & Verified  
**Scope:** Entire Starrbites Corporate Website (`starrbites.com`)

---

## 1. Approved Brand Colour Palette & Design Tokens

The website has been migrated from the legacy dark navy (`#171C56`) and pure white (`#FFFFFF`) identity to the new Sky Blue, Cloudy White, Gold, and Charcoal visual system defined centrally in `src/app/globals.css`.

| Token Role | CSS Variable | Hex Value | Primary Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Colour** | `--color-primary-sky` | `#0099FF` | Selected hero backgrounds, Vision & Mission sections, primary interactive elements, active navigation indicators, card top borders, and icon treatments |
| **Primary Background** | `--color-surface-white` | `#FDFBFF` | Main page backgrounds, editorial reading surfaces, cards, panels, and forms |
| **Soft Secondary Surface** | `--color-surface-soft` | `#F3F6FA` | Alternating section backgrounds, subtle card containers, and form wrappers |
| **Sky Tinted Surface** | `--color-surface-sky-tint` | `#E6F4FF` | Subtle sky-tinted badges and callout surfaces |
| **Premium Accent** | `--color-gold-base` | `#EDC455` | Premium CTA buttons, highlighted headline phrases (`bg-[#EDC455] text-[#242424]`), eyebrow decorative lines, and badge accents |
| **Gold Interactive Hover** | `--color-gold-hover` | `#E0B33B` | Hover state for Gold buttons and interactive pills |
| **Primary Text & Dark Surface** | `--color-text-primary` / `--color-surface-dark` | `#242424` | Primary headings, body text on Sky Blue (`#0099FF`), form labels, navigation links, occasional atmospheric dark sections, and shared footer |
| **Secondary Text** | `--color-text-secondary` | `#4A4A4A` | Body copy, subtitles, metadata, and captions on Cloudy White (`#FDFBFF`) and Soft Cloud (`#F3F6FA`) |
| **Editorial Body Text** | `--color-text-body` | `#2D2D2D` | Long-form journal article and legal text on Cloudy White (`#FDFBFF`) |
| **Surface Border** | `--color-border` | `#E2E6EC` | Card hairlines, section dividers, and table borders |
| **Form Control Border** | `--color-border-strong` | `#C8D0DA` | Input, select, and textarea boundaries |

---

## 2. WCAG 2.2 AA Contrast Verification Matrix

All foreground and background combinations have been mathematically and visually verified against WCAG 2.2 AA contrast thresholds:
- **Normal text:** `>= 4.5:1`
- **Large text (`>= 18pt` or `>= 14pt bold`):** `>= 3.0:1`
- **Meaningful UI boundaries & indicators:** `>= 3.0:1`

| Foreground | Background | Contrast Ratio | WCAG 2.2 Rating | Approved Application |
| :--- | :--- | :--- | :--- | :--- |
| Charcoal `#242424` | Cloudy White `#FDFBFF` | **15.09:1** | AAA (Normal & Large) | Primary headings, navigation, form labels, body copy |
| Charcoal `#242424` | Soft Cloud `#F3F6FA` | **14.12:1** | AAA (Normal & Large) | Section headings, card titles, form labels |
| Editorial Text `#2D2D2D` | Cloudy White `#FDFBFF` | **13.40:1** | AAA (Normal & Large) | Blog article dissertations, Privacy Policy, Terms & Conditions |
| Secondary Text `#4A4A4A` | Cloudy White `#FDFBFF` | **8.61:1** | AAA (Normal & Large) | Secondary body copy, card descriptions, metadata |
| Secondary Text `#4A4A4A` | Soft Cloud `#F3F6FA` | **8.05:1** | AAA (Normal & Large) | Secondary body copy and captions on soft surfaces |
| Charcoal `#242424` | Sky Blue `#0099FF` | **5.17:1** | AA (Normal & Large) | All headings, body text, buttons, and labels on Sky Blue `#0099FF` |
| Charcoal `#242424` | Gold `#EDC455` | **9.33:1** | AAA (Normal & Large) | Gold buttons (`variant="gold"`), highlighted headline phrases (`bg-[#EDC455] text-[#242424]`), and number badges |
| Gold `#EDC455` | Charcoal `#242424` | **9.33:1** | AAA (Normal & Large) | Eyebrows, italic headline accents, and column headers on dark Charcoal sections & Footer |
| Cloudy White `#FDFBFF` | Charcoal `#242424` | **15.09:1** | AAA (Normal & Large) | Headings, body text, and links on dark Charcoal sections & Footer |
| Sky Blue `#0099FF` | Charcoal `#242424` | **5.17:1** | AA (UI & Large) | Top borders, decorative accents, and interactive highlights on dark Charcoal |

### Enforced Accessibility Guardrails
1. **No white text on Sky Blue `#0099FF` for normal text:** White (`#FDFBFF`) on `#0099FF` is `2.91:1` (below the `4.5:1` AA threshold). Every Sky Blue section, hero, banner, and primary button uses **Charcoal `#242424`** text (`5.17:1` contrast).
2. **No unbacked Gold `#EDC455` text on light or Sky Blue backgrounds:** Gold (`#EDC455`) on `#FDFBFF` (`1.62:1`) is never used for readable text on light surfaces. On light or Sky Blue backgrounds, Gold is used strictly as a solid pill highlight behind Charcoal text (`bg-[#EDC455] text-[#242424]` — `9.33:1`), a decorative line/border, or an icon badge fill. Unbacked Gold text is used only on dark Charcoal `#242424` (`9.33:1`).

---

## 3. Comprehensive Page & Component Audit

Every page, section, and shared component across the website was inspected and updated:

### 1. Shared Layout & UI Primitives
- **`src/app/globals.css` & `src/app/layout.tsx`:** Updated root CSS variables, `viewport.themeColor` (`#0099FF`), selection styling, focus rings, `.editorial-card`, and `.article-body` typography rules.
- **`src/components/ui/Button.tsx`:** Updated all variants (`primary` Sky Blue `#0099FF` with `#242424` text; `secondary` Cloudy White `#FDFBFF` with `#242424` text/border; `gold` `#EDC455` with `#242424` text; `charcoal` `#242424` with `#FDFBFF` text; `inverted` `#FDFBFF` outline for dark Charcoal sections).
- **`src/components/ui/SectionEyebrow.tsx`:** Updated eyebrow themes (`charcoal`/`navy`/`gold-dark` render `#242424` text with `#EDC455` line; `gold` renders `#EDC455` on dark `#242424`; `white` renders `#FDFBFF` on dark `#242424`).
- **`src/components/layout/Header.tsx`:** Updated sticky header to Cloudy White `#FDFBFF/95` (with transparent dark state on `/tiiger-trail/`), active nav indicator in Sky Blue `#0099FF`, and mobile navigation drawer in Charcoal `#242424` with `#FDFBFF` text and `#EDC455`/`#0099FF` accents.
- **`src/components/layout/Footer.tsx`:** Updated master corporate footer to Charcoal `#242424` with `#0099FF` top border, `#EDC455` column headers, and `#FDFBFF` links.
- **`src/components/sections/EnquiryModal.tsx`:** Updated consultation modal to Cloudy White `#FDFBFF` with `border-t-4 border-[#0099FF]`, Charcoal `#242424` typography, and Sky Blue `#0099FF` primary submit CTA.

### 2. Homepage (`/`) — All 11 Sections
1. **`HeroSection.tsx`:** Sky Blue `#0099FF` hero with Charcoal `#242424` headline, Gold `#EDC455` highlight on *"Creating Legacy."*, Gold & Secondary CTAs, and verified trust markers.
2. **`BrandIntroSection.tsx`:** Cloudy White `#FDFBFF` background, Charcoal `#242424` headings, `#4A4A4A` body copy, and `#0099FF`/`#EDC455` trust borders.
3. **`PhilosophySection.tsx`:** Soft Cloud `#F3F6FA` background with Cloudy White `#FDFBFF` cards, Sky Blue `#0099FF` hover borders and indicator dots, and Gold `#EDC455` divider bars.
4. **`FlagshipSection.tsx`:** Charcoal `#242424` atmospheric showcase with Cloudy White `#FDFBFF` specifications card (`border-t-4 border-[#0099FF]`), `#242424` card headings, and `#0099FF`/`#EDC455` icon badges.
5. **`JourneySection.tsx`:** Cloudy White `#FDFBFF` section with `#F3F6FA` timeline cards (`border-t-4 border-[#0099FF]`), Gold `#EDC455` era badges, and Charcoal `#242424` headings.
6. **`VisionSection.tsx`:** Sky Blue `#0099FF` section with Cloudy White `#FDFBFF` Vision & Mission cards, Charcoal `#242424` statements, and Gold `#EDC455` accents.
7. **`AudienceSection.tsx`:** Cloudy White `#FDFBFF` section with Sky Blue `#0099FF` active tab (`text-[#242424]`) and `#F3F6FA` detail panel.
8. **`NriSection.tsx`:** Soft Cloud `#F3F6FA` section with Cloudy White `#FDFBFF` pillar cards, Sky Blue `#0099FF` icon badges, and Charcoal `#242424` text.
9. **`InsightsSection.tsx`:** Cloudy White `#FDFBFF` section with `#F3F6FA` article cards, Sky Blue `#0099FF` category border, and Charcoal `#242424` headings.
10. **`EnquirySection.tsx`:** Soft Cloud `#F3F6FA` section with Cloudy White `#FDFBFF` form card (`border-t-4 border-[#0099FF]`), Charcoal `#242424` labels, and Sky Blue `#0099FF` submit button.
11. **`Footer.tsx`:** Charcoal `#242424` master footer.

### 3. About Us (`/about-us/`) — All 9 Sections
- Updated `AboutHero.tsx`, `AboutStory.tsx`, `AboutPhilosophy.tsx`, `AboutApproach.tsx`, `AboutVision.tsx`, `AboutJourney.tsx`, `AboutAudience.tsx`, `AboutFlagship.tsx`, and `AboutCta.tsx` to alternate between Soft Cloud `#F3F6FA`, Cloudy White `#FDFBFF`, Sky Blue `#0099FF` (`AboutVision` & `AboutCta`), and Charcoal `#242424` (`AboutFlagship`).

### 4. Tiiger Trail (`/tiiger-trail/`) — All 8 Sections
- Updated `FlagshipHero.tsx` (Charcoal `#242424` cinematic hero with `#FDFBFF` text and `#EDC455`/`#0099FF` spec bar), `FlagshipStory.tsx` (`#FDFBFF`), `FlagshipLocation.tsx` (Sky Blue `#0099FF` section with `#FDFBFF` institutional card), `FlagshipPhilosophy.tsx` (`#FDFBFF` with `#F3F6FA` cards), `FlagshipVisuals.tsx` (`#F3F6FA` with `#FDFBFF` gallery cards), `FlagshipAudience.tsx` (`#FDFBFF`), `FlagshipTrust.tsx` (`#F3F6FA`), and `FlagshipCta.tsx` (Sky Blue `#0099FF` closing section with `#242424` text and Gold `#EDC455` highlight).

### 5. NRI Page (`/nri/`) — All 8 Sections, Form & FAQ
- Updated `NriHero.tsx` (Sky Blue `#0099FF` hero with Charcoal `#242424` text and Gold `#EDC455` highlight), `NriExploreIntro.tsx` (`#FDFBFF`), `NriFlagshipFeature.tsx` (`#F3F6FA` with `#242424` feature card), `NriProcess.tsx` (`#FDFBFF`), `NriDueDiligence.tsx` (`#F3F6FA`), `NriEnquiryForm.tsx` (`#FDFBFF` with `#F3F6FA` form card and distinguishable validation/success/error states), `NriFaq.tsx` (`#F3F6FA` with `#FDFBFF` accordions and `#0099FF` active state), and `NriCta.tsx` (Sky Blue `#0099FF` closing section).

### 6. Blog Listing (`/blog/`) & All 10 Article Pages (`/blog/[slug]/`)
- Updated `BlogHero.tsx` (Sky Blue `#0099FF` hero with Charcoal `#242424` text and Gold `#EDC455` highlight on *"Place"*), `FeaturedArticleSpotlight.tsx` (`#FDFBFF`), `JournalArticleGrid.tsx` (`#F3F6FA` with `#0099FF` active filter tabs and `#FDFBFF` cards), `JournalCta.tsx` (Sky Blue `#0099FF` CTA section), and `ArticleDetailClient.tsx` (`#FDFBFF` reading surface, `#0099FF` reading progress bar, `#F3F6FA` sticky TOC, `#242424` Land Counsel box, and `.article-body` styles for all 10 articles).

### 7. Contact Us (`/contact-us/`) — All 5 Sections
- Updated `ContactHero.tsx` (Sky Blue `#0099FF` hero with Charcoal `#242424` text and Gold `#EDC455` highlight on *"Starts With"*), `ContactInfoGrid.tsx` (`#F3F6FA` with `#FDFBFF` directory cards and map panel), `ContactFormSection.tsx` (`#FDFBFF` with `#F3F6FA` form card), `ContactNextSteps.tsx` (`#F3F6FA`), and `ContactExploreStarrbites.tsx` (Sky Blue `#0099FF` portfolio grid with `#FDFBFF` cards).

### 8. Legal & Utility Pages
- Updated `src/app/privacy-policy/page.tsx`, `src/app/terms-and-conditions/page.tsx`, and `src/app/thank-you/page.tsx` to use Cloudy White `#FDFBFF`, Soft Cloud `#F3F6FA`, Sky Blue `#0099FF` accents, Gold `#EDC455` badges, and Charcoal `#242424` / `#2D2D2D` typography.

---

## 4. Technical & Responsive Quality Assurance

- **Codebase Audit:** Verified zero remaining instances of `#171C56`, `#0F1238`, `#0A0D28`, `#202773`, `#8B6C20`, `#C88218`, `#F6F6F4`, `#E7E7E7`, or unmigrated `bg-white` across all 78 files in `src/`.
- **Responsive Viewports Verified:** `320px`, `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px`, and `1920px` — no layout shifts, horizontal overflow, or visual regressions.
- **Functionality Preserved:** GSAP scroll/entrance animations, reduced-motion support, mobile navigation drawer, consultation modal, FAQ accordions, category filters, and API form endpoints (`/api/contact-enquiry`, `/api/nri-enquiry`) remain 100% intact.
- **Remaining Issues:** None.

