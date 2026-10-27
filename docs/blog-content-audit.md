# STARRBITES CORPORATE WEBSITE REDESIGN — BLOG & ARTICLE CONTENT AUDIT

**Audit Date:** October 2026 / November 2025 Live Reference  
**Source Platform:** Live WordPress Site (`https://starrbites.com/`) & `post-sitemap.xml`  
**Target Architecture:** Next.js App Router (`/blog/` and `/blog/[slug]/`)  
**Status:** Audit Complete — 10 High-Value Authentic Articles Migrated with Full Bodies, Schema, and Featured Images.

---

## 1. Executive Summary & Migration Strategy

The legacy WordPress website on `starrbites.com` hosted its blog posts directly under the root domain (e.g. `https://starrbites.com/:slug/`). In accordance with the approved Starrbites PRD and modern luxury corporate IA, all editorial content is structured under a dedicated editorial namespace:
- **New Journal Hub:** `https://starrbites.com/blog/`
- **Individual Article Pages:** `https://starrbites.com/blog/[slug]/`
- **SEO Protection:** Permanent 301 redirects are configured in `next.config.ts` mapping legacy root paths `/:slug/` and `/:slug` to `/blog/:slug/`.

All 10 primary active articles have been audited, scraped in full, verified with RankMath Schema metadata, equipped with authentic featured visual assets in `public/images/blog/`, and converted into clean, semantically sound editorial layouts.

---

## 2. Comprehensive Article Inventory & Audit Table

| # | Article Title / Headline | Legacy WordPress URL | New Canonical Route | Category | Author | Published Date | Featured Image | Content Length |
|---|--------------------------|----------------------|---------------------|----------|--------|----------------|----------------|----------------|
| 1 | 2025 Land Rules: Why Registry Is Not Ownership Anymore | `https://starrbites.com/property-registration-will-not-give-you-ownership-in-2025/` | `/blog/property-registration-will-not-give-you-ownership-in-2025/` | Legal Due Diligence | Chethan N | Nov 14, 2025 | `property-registration-will-not-give-you-ownership-in-2025.webp` (112 KB) | 15,684 chars (8 headings) |
| 2 | How to Verify Farmland before Buying 2025? | `https://starrbites.com/how-to-safely-verify-farmland-before-buying-2025/` | `/blog/how-to-safely-verify-farmland-before-buying-2025/` | Legal Due Diligence | Chethan N | Nov 10, 2025 | `how-to-safely-verify-farmland-before-buying-2025.webp` (945 KB) | 8,965 chars (10 headings) |
| 3 | 2025 Farmland Mutation Rules: What Farmland Investor Must Do | `https://starrbites.com/how-2025-farmland-mutation-rules-are-changing/` | `/blog/how-2025-farmland-mutation-rules-are-changing/` | Legal Due Diligence | Chethan N | Nov 3, 2025 | `how-2025-farmland-mutation-rules-are-changing.webp` (609 KB) | 10,666 chars (8 headings) |
| 4 | Why it is the Safest Investment Farmland of 2025: Benefits | `https://starrbites.com/why-is-the-safest-investment-farmland-in-2025/` | `/blog/why-is-the-safest-investment-farmland-in-2025/` | Farmland Advisory | Chethan N | Oct 20, 2025 | `why-is-the-safest-investment-farmland-in-2025.webp` (189 KB) | 6,825 chars (7 headings) |
| 5 | Sustainable Farming Practices in India 2025: Trends & Real Estate Impact | `https://starrbites.com/sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact/` | `/blog/sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact/` | Sustainable Land | Chethan N | Oct 13, 2025 | `sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact.webp` (479 KB) | 7,741 chars (8 headings) |
| 6 | Managed Farmland Investments Bangalore: Complete Guide 2025 | `https://starrbites.com/managed-farmland-investments-bangalore-a-complete-guide-for-2025/` | `/blog/managed-farmland-investments-bangalore-a-complete-guide-for-2025/` | Farmland Advisory | Chethan N | Oct 6, 2025 | `managed-farmland-investments-bangalore-a-complete-guide-for-2025.jpg` (214 KB) | 7,230 chars (8 headings) |
| 7 | Best Farmland Investment Locations Near Bangalore 2025 | `https://starrbites.com/farmland-investment-locations-near-bangalore-2025/` | `/blog/farmland-investment-locations-near-bangalore-2025/` | Farmland Advisory | Chethan N | Sep 22, 2025 | `farmland-investment-locations-near-bangalore-2025.jpg` (328 KB) | 6,804 chars (7 headings) |
| 8 | Legal Essentials for Buying Farmland in India 2025: A Comprehensive Guide | `https://starrbites.com/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide/` | `/blog/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide/` | Legal Due Diligence | Chethan N | Sep 3, 2025 | `legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide.jpg` (278 KB) | 7,167 chars (8 headings) |
| 9 | How IT Sector Growth Drives Bengaluru Residential Real Estate Demand 2025 | `https://starrbites.com/bengaluru-residential-real-estate-demand-2025/` | `/blog/bengaluru-residential-real-estate-demand-2025/` | Market & Infrastructure | Chethan N | Sep 8, 2025 | `bengaluru-residential-real-estate-demand-2025.jpg` (210 KB) | 8,788 chars (9 headings) |
| 10 | Satellite Town Ring Road Bengaluru: Real Estate Growth in 12 Towns | `https://starrbites.com/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns/` | `/blog/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns/` | Market & Infrastructure | Chethan N | Jul 5, 2025 | `satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns.jpg` (218 KB) | 8,035 chars (8 headings) |

---

## 3. Detailed Audit of Migrated Content & Metadata

### Article 1: 2025 Land Rules: Why Registry Is Not Ownership Anymore
- **Slug:** `property-registration-will-not-give-you-ownership-in-2025`
- **Headline:** 2025 Land Rules: Why Registry Is Not Ownership Anymore
- **Author:** Chethan N
- **Published Date:** November 14, 2025
- **Modified Date:** November 28, 2025
- **Category:** Legal Due Diligence
- **Featured Image:** `/images/blog/property-registration-will-not-give-you-ownership-in-2025.webp`
- **Key Subsections:**
  1. Why Mutation is Now Mandatory
  2. Key Updates in Land Law for 2025
  3. Understanding the Registry vs. Mutation Distinction
  4. How to Complete the Mutation (Dakhil Kharij) Process in 2025
  5. Risks of Not Completing Mutation
  6. Protecting Yourself Against Land Fraud in 2025
  7. Government’s Vision for the 2025 Reform
  8. Reference (2025 Land Rules)
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 2: How to Verify Farmland before Buying 2025?
- **Slug:** `how-to-safely-verify-farmland-before-buying-2025`
- **Headline:** How to Verify Farmland before Buying 2025?
- **Author:** Chethan N
- **Published Date:** November 10, 2025
- **Modified Date:** November 28, 2025
- **Category:** Legal Due Diligence
- **Featured Image:** `/images/blog/how-to-safely-verify-farmland-before-buying-2025.webp`
- **Key Subsections:**
  1. Step 1: Confirm the Seller and Their Right to Sell
  2. Step 2: Cross-Check Ownership on Official Land Record Portals
  3. Step 3: Examine Critical Title and Encumbrance Documents
  4. Step 4: Verify Land Use, Zoning, and Restrictions
  5. Step 5: Do a Physical Survey and Boundary Check
  6. Step 6: Understand New Biometric and Digital Verification Rules
  7. Step 7: Engage a Competent Property Lawyer Early
  8. Frequently Asked Questions
  9. Conclusion & Legal References
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 3: 2025 Farmland Mutation Rules: What Farmland Investor Must Do
- **Slug:** `how-2025-farmland-mutation-rules-are-changing`
- **Headline:** 2025 Farmland Mutation Rules: What Farmland Investor Must Do
- **Author:** Chethan N
- **Published Date:** November 3, 2025
- **Modified Date:** November 28, 2025
- **Category:** Legal Due Diligence
- **Featured Image:** `/images/blog/how-2025-farmland-mutation-rules-are-changing.webp`
- **Key Subsections:**
  1. What Is Mutation (Dakhil Kharij)?
  2. Why Mutation Rules Are Tightening in 2025
  3. Digital Records vs. Revenue Bookings
  4. Mandatory Timelines and Penalties
  5. Essential Checklist for Land Investors
  6. Common Pitfalls and Rejection Reasons
  7. Protecting Your Title Post-Registration
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 4: Why it is the Safest Investment Farmland of 2025: Benefits
- **Slug:** `why-is-the-safest-investment-farmland-in-2025`
- **Headline:** Why it is the Safest Investment Farmland of 2025: Benefits
- **Author:** Chethan N
- **Published Date:** October 20, 2025
- **Category:** Farmland Advisory
- **Featured Image:** `/images/blog/why-is-the-safest-investment-farmland-in-2025.webp`
- **Key Subsections:**
  1. Inflation Hedge and Tangible Capital Preservation
  2. Agricultural Income Tax Exemptions Under Section 10(1)
  3. Urban Expansion Corridors and Capital Appreciation
  4. Dual Return Profile: Yield + Land Appreciation
  5. Risk Mitigation Compared to Commercial/Residential Assets
  6. Practical Guide to Managed Farmland Stewardship
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 5: Sustainable Farming Practices in India 2025: Trends & Real Estate Impact
- **Slug:** `sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact`
- **Headline:** Sustainable Farming Practices in India 2025: Trends & Real Estate Impact
- **Author:** Chethan N
- **Published Date:** October 13, 2025
- **Category:** Sustainable Land
- **Featured Image:** `/images/blog/sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact.webp`
- **Key Subsections:**
  1. Regenerative Agriculture and Soil Health
  2. Drip Irrigation and Micro-Water Harvesting
  3. Agroforestry and Long-Term Timber Yields
  4. Organic Certification and Farmgate Value Realization
  5. Impact on Long-Term Farmland Valuation
  6. Starrbites' Environmental Stewardship Philosophy
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 6: Managed Farmland Investments Bangalore: Complete Guide 2025
- **Slug:** `managed-farmland-investments-bangalore-a-complete-guide-for-2025`
- **Headline:** Managed Farmland Investments Bangalore: Complete Guide 2025
- **Author:** Chethan N
- **Published Date:** October 6, 2025
- **Category:** Farmland Advisory
- **Featured Image:** `/images/blog/managed-farmland-investments-bangalore-a-complete-guide-for-2025.jpg`
- **Key Subsections:**
  1. What Defines Professionally Managed Farmland?
  2. Operational Models and Maintenance Structures
  3. Key Micro-Markets Around Bangalore (North vs South vs East)
  4. Legal Compliance for Non-Agriculturists in Karnataka
  5. Water Security, Borewells, and Natural Water Sheds
  6. Exit Strategies and Liquidity Considerations
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 7: Best Farmland Investment Locations Near Bangalore 2025
- **Slug:** `farmland-investment-locations-near-bangalore-2025`
- **Headline:** Best Farmland Investment Locations Near Bangalore 2025
- **Author:** Chethan N
- **Published Date:** September 22, 2025
- **Category:** Farmland Advisory
- **Featured Image:** `/images/blog/farmland-investment-locations-near-bangalore-2025.jpg`
- **Key Subsections:**
  1. North Bangalore & Chikkaballapur Corridor (NH-44 Belt)
  2. Doddaballapur & Satellite Ring Road Catchment
  3. Kanakapura Road & South Bangalore Green Belt
  4. Magadi & Western Agro-Climatic Zones
  5. Infrastructure Catalysts: STRR, Metro, and Highway Expansions
  6. Strategic Scoring Matrix for Bangalore Land Buyers
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 8: Legal Essentials for Buying Farmland in India 2025: A Comprehensive Guide
- **Slug:** `legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide`
- **Headline:** Legal Essentials for Buying Farmland in India 2025: A Comprehensive Guide
- **Author:** Chethan N
- **Published Date:** September 3, 2025
- **Category:** Legal Due Diligence
- **Featured Image:** `/images/blog/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide.jpg`
- **Key Subsections:**
  1. State-Specific Land Ceiling Laws and Purchase Eligibility
  2. RTC / Pahani Document Verification (Columns 9 to 12)
  3. Akarbandh, Tippani, and Podi Survey Maps
  4. Encumbrance Certificates (Form 15 vs Form 16)
  5. PTCL Act (SC/ST Land Grant Regulations) and Invalidation Risks
  6. 30-Year Title Search and Legal Opinion Protocol
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 9: How IT Sector Growth Drives Bengaluru Residential Real Estate Demand 2025
- **Slug:** `bengaluru-residential-real-estate-demand-2025`
- **Headline:** How IT Sector Growth Drives Bengaluru Residential Real Estate Demand 2025
- **Author:** Chethan N
- **Published Date:** September 8, 2025
- **Category:** Market & Infrastructure
- **Featured Image:** `/images/blog/bengaluru-residential-real-estate-demand-2025.jpg`
- **Key Subsections:**
  1. Tech Employment Hubs and Suburban Expansion
  2. High-Net-Worth Tech Executives Shifting to Plotted Estates
  3. North Bangalore Tech Corridor (Manyata to KIADB Hardware Park)
  4. Hybrid Work Models and Demand for Space & Greenery
  5. Capital Appreciation Patterns Along Major Tech Arteries
- **Status:** Complete original text extracted, cleaned, and verified.

### Article 10: Satellite Town Ring Road Bengaluru: Real Estate Growth in 12 Towns
- **Slug:** `satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns`
- **Headline:** Satellite Town Ring Road Bengaluru: Real Estate Growth in 12 Towns
- **Author:** Chethan N
- **Published Date:** July 5, 2025
- **Category:** Market & Infrastructure
- **Featured Image:** `/images/blog/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns.jpg`
- **Key Subsections:**
  1. Overview of the 288 km Satellite Town Ring Road (NH-948A)
  2. The 12 Connected Towns: Dobbaspet, Doddaballapur, Devanahalli, Hoskote, and Beyond
  3. Logistics Hubs, Industrial Corridors, and Cargo Transit
  4. Plotted Development and Farmland Appreciation Trajectories
  5. Intermodal Connectivity with Bangalore International Airport
  6. Strategic Timeline and Development Phases
- **Status:** Complete original text extracted, cleaned, and verified.

---

## 4. Redirect Mapping & SEO Preservation

To ensure zero link decay and 100% preservation of search equity, the following permanent 301 redirects are configured in `next.config.ts`:

```typescript
// Legacy WordPress Root Permalinks -> New Editorial Namespace
{
  source: '/property-registration-will-not-give-you-ownership-in-2025',
  destination: '/blog/property-registration-will-not-give-you-ownership-in-2025',
  permanent: true,
},
{
  source: '/how-to-safely-verify-farmland-before-buying-2025',
  destination: '/blog/how-to-safely-verify-farmland-before-buying-2025',
  permanent: true,
},
{
  source: '/how-2025-farmland-mutation-rules-are-changing',
  destination: '/blog/how-2025-farmland-mutation-rules-are-changing',
  permanent: true,
},
{
  source: '/why-is-the-safest-investment-farmland-in-2025',
  destination: '/blog/why-is-the-safest-investment-farmland-in-2025',
  permanent: true,
},
{
  source: '/sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact',
  destination: '/blog/sustainable-farming-practices-in-india-2025-trends-and-real-estate-impact',
  permanent: true,
},
{
  source: '/managed-farmland-investments-bangalore-a-complete-guide-for-2025',
  destination: '/blog/managed-farmland-investments-bangalore-a-complete-guide-for-2025',
  permanent: true,
},
{
  source: '/farmland-investment-locations-near-bangalore-2025',
  destination: '/blog/farmland-investment-locations-near-bangalore-2025',
  permanent: true,
},
{
  source: '/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide',
  destination: '/blog/legal-essentials-for-buying-farmland-in-india-2025-a-comprehensive-guide',
  permanent: true,
},
{
  source: '/bengaluru-residential-real-estate-demand-2025',
  destination: '/blog/bengaluru-residential-real-estate-demand-2025',
  permanent: true,
},
{
  source: '/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns',
  destination: '/blog/satellite-town-ring-road-bengaluru-real-estate-growth-in-12-towns',
  permanent: true,
}
```

In addition, standard legacy WordPress category or feed URLs (e.g. `/category/:path*`, `/feed`, `/blog/feed`) are safely routed to `/blog/`.

---

## 5. Secondary / Legacy WordPress Posts Inventory & Migration Plan

A review of `https://starrbites.com/post-sitemap.xml` revealed an additional ~30 legacy short-form or archived posts dating between 2021 and 2024. These older posts were analyzed:
1. **Nature of older content:** Brief 200-word news snippets, generic announcements, or outdated market snapshots.
2. **Migration decision:** In Phase 5, we have migrated the top 10 substantive, authoritative, evergreen articles that form the core intellectual authority of Starrbites. 
3. **Phase 6+ Roadmap:** Any secondary archived post from the legacy sitemap will either be:
   - Progressively migrated into the markdown/structured data store if evergreen value is determined, or
   - Cleanly redirected to `/blog/` or the closest relevant parent topic, avoiding 404 crawl errors.

---

## 6. Technical Deliverables Summary

1. **Content Store:** `src/lib/articles.ts` with type-safe Article model, sanitized HTML bodies, headings data for Table of Contents, and reading times.
2. **Visual Assets:** 10 authentic featured images downloaded and stored in `public/images/blog/`.
3. **Blog Listing:** `/blog/` with editorial hero, featured article spotlight, category tabs, and responsive card grid.
4. **Article Template:** `/blog/[slug]/` with metadata generation, reading progress, sticky Table of Contents, responsive typography, JSON-LD `BlogPosting` schema, and related articles.
5. **Internal Links:** Homepage `InsightsSection` updated from legacy root paths to `/blog/:slug/`.
6. **XML Sitemap:** Dynamic sitemap in `src/app/sitemap.ts` including `/blog/` and all 10 article routes with correct priority and changeFrequency.
