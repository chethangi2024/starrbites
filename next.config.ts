import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
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
      },
      {
        source: '/category/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
