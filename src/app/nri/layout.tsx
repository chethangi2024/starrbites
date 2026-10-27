import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRI Land Investment & Advisory | Starrbites Bangalore",
  description:
    "Explore Starrbites' approach to thoughtfully planned land destinations for global Indians. Remote documentation review, verified titles, and structured due diligence from abroad.",
  alternates: {
    canonical: "https://starrbites.com/nri/",
  },
  openGraph: {
    title: "NRI Land Investment & Advisory | Starrbites",
    description:
      "Closer to Your Roots. Clearer About Your Next Step. Thoughtfully planned plotted living in Bengaluru for overseas buyers.",
    url: "https://starrbites.com/nri/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/architecture/architecture-minimalist-pavilion.jpg",
        width: 1200,
        height: 630,
        alt: "Starrbites NRI Land Advisory & Plotted Destinations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Land Investment & Advisory | Starrbites",
    description:
      "Remote due diligence, verified project documentation, and structured land investment for global Indians.",
    images: ["/images/stock/architecture/architecture-minimalist-pavilion.jpg"],
  },
};

export default function NriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
