import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const REDIRECT_PATHS = new Set([
  '/blog/',
  '/latest-news/',
  '/latest-trends-insights/',
  '/property-registration-will-not-give-you-ownership-in-2025/',
  '/why-is-the-safest-investment-farmland-in-2025/',
  '/bengaluru-residential-real-estate-demand-2025/',
  '/how-to-safely-verify-farmland-before-buying-2025/',
  '/how-2025-farmland-mutation-rules-are-changing/',
  '/404/',
]);

export default defineConfig({
  output: 'static',
  site: 'https://www.starrbites.com',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
        return !REDIRECT_PATHS.has(normalized);
      },
    }),
  ],
  redirects: {
    '/blog': '/insights',
    '/latest-news': '/insights',
    '/latest-trends-insights': '/insights',
    '/property-registration-will-not-give-you-ownership-in-2025':
      '/insights/property-registration-will-not-give-you-ownership-in-2025',
    '/why-is-the-safest-investment-farmland-in-2025':
      '/insights/why-is-the-safest-investment-farmland-in-2025',
    '/bengaluru-residential-real-estate-demand-2025':
      '/insights/bengaluru-residential-real-estate-demand-2025',
    '/how-to-safely-verify-farmland-before-buying-2025':
      '/insights/how-to-safely-verify-farmland-before-buying-2025',
    '/how-2025-farmland-mutation-rules-are-changing':
      '/insights/how-2025-farmland-mutation-rules-are-changing',
  },
});
