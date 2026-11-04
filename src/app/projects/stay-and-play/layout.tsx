import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay and Play | Starrbites",
  description:
    "Discover Stay and Play, a distinct Starrbites development conceived around active recreation, leisure stays, and thoughtfully planned community spaces.",
  alternates: {
    canonical: "https://starrbites.com/projects/stay-and-play/",
  },
  openGraph: {
    title: "Stay and Play | Starrbites",
    description:
      "A distinct Starrbites development shaped around active recreation, leisure stays, and thoughtfully planned community spaces. Register your interest for official project information.",
    url: "https://starrbites.com/projects/stay-and-play/",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay and Play | Starrbites",
    description:
      "A distinct Starrbites development shaped around active recreation, leisure stays, and thoughtfully planned community spaces.",
  },
};

export default function StayAndPlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

