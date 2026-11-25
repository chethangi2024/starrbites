# StarrBites — Go-Live Checklist

Complete every item below before pointing `www.starrbites.com` and `starrbites.com` to Netlify.

## 1. Confirm with client (Claims, Copy & Scope)
- [ ] **Future NRI note:** If NRI content is added back later, first confirm Tiiger Trail's land type (FEMA: NRIs cannot buy agricultural land/farmland).
- [ ] **Projects scope:** Confirm whether Stay and Play (or any other project) is a real StarrBites project before adding.
- [ ] **Testimonials (About):** Confirm these four testimonials (Priya Nair, Rakesh Shetty, Manjunath Hegde, Ajit Sharma) are real clients who agreed to be quoted. *(Note: Manjunath Hegde's quote on the live site begins with lowercase "wanted to invest..." — confirm if typo should be corrected to "I wanted to invest...".)*
- [ ] **About copy tweak:** Changed `'near Bangalore'` to `'with connectivity to Bangalore'` because Tiiger Trail is in Sri Sathya Sai District — confirm wording.
- [ ] **About verbatim NRI phrase:** The verbatim `"What Starrbites is today"` paragraph from `starrbites.com/about-us/` mentions `"including NRIs and global buyers"` — confirm whether to keep or remove given FEMA farmland rules.
- [ ] **WhatsApp number (Contact):** Confirm WhatsApp number (`+91 88611 97979`) on Contact page.
- [ ] **Investors status & brochure:** Confirm Investors page project status (`"Phase I — pre-launch"` placeholder vs `"PHASE I NOW ACTIVE"` on `tiigertrail.com`), plot dimensions/pricing note, and direct PDF link for the Tiiger Trail `"Download brochure"` button.
- [ ] **Legal, approval & appreciation claims copied from live sites (buyer-relied wording — confirm accuracy and RERA/legal compliance):**
  - `starrbites.com/about-us/`: *"We focus on creating legally clear, well-planned, and high-appreciation land assets..."*
  - `starrbites.com/about-us/`: *"Yes, all our projects undergo thorough legal due diligence. We ensure clear titles, proper approvals, and complete transparency so you can invest with confidence and peace of mind."*
  - `starrbites.com/about-us/`: *"typically offers higher long-term appreciation, zero maintenance costs"* and *"designed to offer both lifestyle value and strong investment returns."*
  - `tiigertrail.com`: *"Individually registered farm plots featuring transparent deed documentation for secure, risk-free ownership."*
  - `tiigertrail.com`: *"offers exceptional future value and strong appreciation potential"* / *"strong potential for long-term value appreciation and future investment growth."*
  - `tiigertrail.com`: *"Pre-vetted copy of parent survey records and mutation logs"*, *"clear titled mutations"*, and *"Tiiger Trail Farmlands is fully legally registered."*
- [ ] **Confirm with client (About Sustainability):** Sustainability intentions (preserving mature trees, drainage/rainwater capture, native planting) match StarrBites' actual approach.
- [ ] **Confirm with client (Contact):** Confirm both phone numbers (`+91 88611 97979`, `+91 96204 11122`), `info@starrbites.com`, RMV 2nd Stage address, and expected reply turnaround if a specific timeframe is desired.
- [ ] **Social links added:** Replace the `#` placeholders for Instagram and LinkedIn in `src/data/site.ts` (once set, `Organization` JSON-LD `sameAs` updates automatically).

## 2. Needed from client
- [x] Higher-resolution team photos supplied (`900×900` px for all 6 members; cropped to `720×900` / `456×570` WebP in `public/media/team/`).
- [ ] Confirm K. P. Rupesh Kumar (Principal Advocate) has agreed to be listed on the Team section, and whether he is in-house or external counsel.

## 3. Media & Brand Assets
- [ ] **Real images & hero video in place:** Confirm all `.webp` images and `hero.mp4` (1080p, H.264, 8–15s, no audio, ≤ 4 MB) in `public/media/`. Keep raw/large originals in `Digital Assets/` (excluded from Git and build).
- [ ] **`CREDITS.md` completed:** Fill in the `Source URL` and `License` columns in `public/media/CREDITS.md` for every media file used.
- [ ] **Favicon & share image verified:**
  - Replace `public/brand/favicon-512x512.png` with a native high-resolution export if available.
  - Check `public/brand/og-default.jpg` (`1200×630`) in a social share debugger (OpenGraph.xyz, WhatsApp, or LinkedIn Post Inspector) on the Netlify preview URL.

## 3. Forms (Contact & Investors)
- [ ] **Formspree ID configured:** Replace `FORMSPREE_FORM_ID` in `src/pages/contact.astro` and `src/pages/investors.astro` with the live Formspree form ID(s).
- [ ] **End-to-end test passed:** Submit real test messages on both Contact and Investors on the Netlify preview URL and confirm they arrive at `info@starrbites.com` (and verify inline validation errors and success states).

## 4. Backup & DNS Safety (Before Switching Domains)
- [ ] **Old site backed up:** Take a complete backup of the existing live website (files + database) and store it safely before changing any DNS records.
- [ ] **Email records protected:** Verify existing `MX`, `SPF` (`TXT`), `DKIM`, and `DMARC` records at your DNS provider and leave them **completely untouched** when updating web `A` / `CNAME` records.

## 5. Pre-Launch QA & Post-Launch Verification
- [ ] **Staging test on Netlify URL:** Test all pages (Home, About, Projects, `/projects/tiiger-trail`, Investors, Insights, Contact, Privacy, Terms), mobile menu, About FAQ accordion, Insights filters, WhatsApp link, and 301 redirects (`/nri` → `/investors`, `/about-us/` & `/our-team/` & `/sustainability/` → `/about`, plus the 5 legacy blog URLs).
- [ ] **HTTPS enabled:** Confirm Netlify provisioned the Let's Encrypt SSL certificate and HTTPS redirection is active for both `www.starrbites.com` and `starrbites.com` (with `starrbites.com` redirecting to `https://www.starrbites.com`).
- [ ] **Lighthouse re-run on live HTTPS URL:** Run Lighthouse (mobile) on Home, About, Projects, `/projects/tiiger-trail`, Investors, Contact, and an Insights post — confirm Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] **Google Search Console:** Submit `https://www.starrbites.com/sitemap-index.xml` in Google Search Console and spot-check legacy 301 redirects.
