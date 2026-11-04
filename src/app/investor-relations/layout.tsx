import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Starrbites",
  description:
    "Explore investor relations, strategic partnerships, and land development collaboration with Starrbites, a Bangalore-based real-estate development company.",
  alternates: {
    canonical: "https://starrbites.com/investor-relations/",
  },
  openGraph: {
    title: "Investor Relations | Starrbites",
    description:
      "Building relationships around long-term development. Information and advisory channels for investors, landowners, and strategic partners.",
    url: "https://starrbites.com/investor-relations/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/editorial/editorial-leadership-space.jpg",
        width: 1200,
        height: 630,
        alt: "Starrbites Corporate & Investor Relations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations | Starrbites",
    description:
      "Building relationships around long-term development. Connect with the Starrbites corporate advisory team.",
    images: ["/images/stock/editorial/editorial-leadership-space.jpg"],
  },
};

export default function InvestorRelationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

