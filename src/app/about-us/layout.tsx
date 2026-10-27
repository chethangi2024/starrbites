import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Starrbites | Building Land. Creating Legacy | Bangalore",
  description:
    "Learn about Starrbites, a Bangalore-based land development firm dedicated to purposeful planning, transparent documentation, strategic growth corridors, and enduring legacy value.",
  alternates: {
    canonical: "https://starrbites.com/about-us/",
  },
  openGraph: {
    title: "About Starrbites | Building Land. Creating Legacy",
    description:
      "Purposeful planning, strategic perspective, transparency, and lasting value in curated plotted destinations across Bengaluru.",
    url: "https://starrbites.com/about-us/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/architecture/architecture-modern-facade.jpg",
        width: 1200,
        height: 630,
        alt: "About Starrbites Land Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Starrbites | Building Land. Creating Legacy",
    description:
      "Discover Starrbites' approach to purposeful planning, legal due diligence, and curated plotted living in Bengaluru.",
    images: ["/images/stock/architecture/architecture-modern-facade.jpg"],
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
