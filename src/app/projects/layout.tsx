import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Starrbites Real Estate Developments | Tiiger Trail & Stay and Play",
  description:
    "Explore Starrbites' portfolio of purposefully planned developments, including Tiiger Trail near Lepakshi off NH-44 and our upcoming recreational destination, Stay and Play.",
  alternates: {
    canonical: "https://starrbites.com/projects/",
  },
  openGraph: {
    title: "Our Projects | Developments Shaped Around Purpose | Starrbites",
    description:
      "Discover Starrbites' development portfolio: Tiiger Trail (Plotted Nature & Farm-Resort Development) and Stay and Play (Recreational & Hospitality-Led Development).",
    url: "https://starrbites.com/projects/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/landscapes/landscape-rolling-countryside.jpg",
        width: 1200,
        height: 630,
        alt: "Starrbites Projects Portfolio — Tiiger Trail & Stay and Play",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Developments Shaped Around Purpose | Starrbites",
    description:
      "Explore Starrbites' growing portfolio of land and lifestyle destinations: Tiiger Trail and Stay and Play.",
    images: ["/images/stock/landscapes/landscape-rolling-countryside.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

