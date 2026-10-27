import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiiger Trail | The Starrbites Flagship Destination | North Bangalore",
  description:
    "Explore Tiiger Trail, Starrbites' signature nature-led plotted destination near Lepakshi off the NH-44 corridor. Thoughtful master planning, certified titles, and enduring land legacy.",
  alternates: {
    canonical: "https://starrbites.com/tiiger-trail/",
  },
  openGraph: {
    title: "Tiiger Trail | The Starrbites Flagship Destination",
    description:
      "Space to Grow. Land to Belong. Curated plotted living near Lepakshi along the North Bangalore infrastructure corridor.",
    url: "https://starrbites.com/tiiger-trail/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/landscapes/landscape-foggy-green-hills.jpg",
        width: 1200,
        height: 630,
        alt: "Tiiger Trail - The Starrbites Flagship Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiiger Trail | The Starrbites Flagship Destination",
    description:
      "Space to Grow. Land to Belong. Nature-led plotted retreat by Starrbites in the North Bangalore corridor.",
    images: ["/images/stock/landscapes/landscape-foggy-green-hills.jpg"],
  },
};

export default function TiigerTrailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
