import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Starrbites Journal | Perspectives on Land, Place & Possibility",
  description:
    "Authoritative intelligence on land documentation, legal due diligence, title verification, farmland stewardship, and North Bangalore infrastructure corridors from Starrbites Developments.",
  alternates: {
    canonical: "https://starrbites.com/blog/",
  },
  openGraph: {
    title: "The Starrbites Journal | Perspectives on Land, Place & Possibility",
    description:
      "Authoritative intelligence on land documentation, legal due diligence, title verification, farmland stewardship, and North Bangalore infrastructure corridors.",
    url: "https://starrbites.com/blog/",
    siteName: "Starrbites Developments",
    images: [
      {
        url: "/images/blog/property-registration-will-not-give-you-ownership-in-2025.webp",
        width: 1200,
        height: 630,
        alt: "The Starrbites Journal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Starrbites Journal | Perspectives on Land, Place & Possibility",
    description:
      "Authoritative intelligence on land documentation, legal due diligence, and farmland stewardship.",
    images: ["/images/blog/property-registration-will-not-give-you-ownership-in-2025.webp"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
