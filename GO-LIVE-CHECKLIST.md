# StarrBites — Go-Live Checklist

Complete every item below before pointing `www.starrbites.com` and `starrbites.com` to Netlify.

## 1. Content & Client Approvals
- [ ] **Copy confirmed:** Client has reviewed and approved all copy on Home, About, Projects, NRI, Contact, Privacy Policy, and Terms of Use (including the 5 migrated Insights articles).
- [ ] **Team details updated:** Replace the 4 placeholder cards in `src/pages/about.astro` with real names, roles, and portraits (`public/media/team-1.webp` – `team-4.webp`).
- [ ] **Social links added:** Replace the `#` placeholders for Instagram and LinkedIn in `src/data/site.ts` (once set, `Organization` JSON-LD `sameAs` updates automatically).

## 2. Media & Brand Assets
- [ ] **Real images & hero video in place:** Add optimised `.webp` images and `hero.mp4` (1080p, H.264, 8–15s, no audio, ≤ 4 MB) to `public/media/`. Keep raw/large originals in `Digital Assets/` (excluded from Git and build).
- [ ] **`CREDITS.md` completed:** Fill in the `Source URL` and `License` columns in `public/media/CREDITS.md` for every media file used.
- [ ] **Favicon & share image verified:**
  - Replace `public/brand/favicon-512x512.png` with a native high-resolution export if available.
  - Check `public/brand/og-default.jpg` (`1200×630`) in a social share debugger (OpenGraph.xyz, WhatsApp, or LinkedIn Post Inspector) on the Netlify preview URL.

## 3. Contact Form
- [ ] **Formspree ID configured:** Replace `FORMSPREE_FORM_ID` in `src/pages/contact.astro` with the live Formspree form ID.
- [ ] **End-to-end test passed:** Submit a real test message on the Netlify preview URL and confirm it arrives at `info@starrbites.com` (and verify the inline validation errors and success state).

## 4. Backup & DNS Safety (Before Switching Domains)
- [ ] **Old site backed up:** Take a complete backup of the existing live website (files + database) and store it safely before changing any DNS records.
- [ ] **Email records protected:** Verify existing `MX`, `SPF` (`TXT`), `DKIM`, and `DMARC` records at your DNS provider and leave them **completely untouched** when updating web `A` / `CNAME` records.

## 5. Pre-Launch QA & Post-Launch Verification
- [ ] **Staging test on Netlify URL:** Test all pages, links (especially `https://tiigertrail.com` opening in a new tab), mobile menu, NRI FAQ accordion, Insights filters, and legacy 301 redirects on the `.netlify.app` preview URL.
- [ ] **HTTPS enabled:** Confirm Netlify provisioned the Let's Encrypt SSL certificate and HTTPS redirection is active for both `www.starrbites.com` and `starrbites.com` (with `starrbites.com` redirecting to `https://www.starrbites.com`).
- [ ] **Lighthouse re-run on live HTTPS URL:** Run Lighthouse (mobile) on Home, Projects, NRI, Contact, and an Insights post — confirm Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] **Google Search Console:** Submit `https://www.starrbites.com/sitemap-index.xml` in Google Search Console and spot-check the 5 legacy blog URLs to confirm 301 redirects resolve cleanly.
