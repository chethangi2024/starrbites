import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Starrbites | Building Land. Creating Legacy | Bangalore",
  description:
    "Learn about Starrbites, a Bangalore-based real-estate development company dedicated to purposeful planning, transparent documentation, and distinct projects including Tiiger Trail and Stay and Play.",
  alternates: {
    canonical: "https://starrbites.com/about-us/",
  },
  openGraph: {
    title: "About Starrbites | Building Land. Creating Legacy",
    description:
      "Discover Starrbites' corporate philosophy, leadership team, four-phase development methodology, and growing project portfolio.",
    url: "https://starrbites.com/about-us/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/architecture/architecture-modern-facade.jpg",
        width: 1200,
        height: 630,
        alt: "About Starrbites Real Estate Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Starrbites | Building Land. Creating Legacy",
    description:
      "Discover Starrbites' approach to purposeful planning, legal due diligence, and real-estate development in Bengaluru.",
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
