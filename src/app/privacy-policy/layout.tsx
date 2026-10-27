import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Starrbites Developments",
  description:
    "Review the official Starrbites Developments Privacy Policy. Learn how we handle, store, and safeguard your personal details and advisory communications.",
  alternates: {
    canonical: "https://starrbites.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Starrbites Developments",
    description:
      "Review the official Starrbites Developments Privacy Policy. Transparent, ethical data handling for all land inquiries and advisory requests.",
    url: "https://starrbites.com/privacy-policy/",
    siteName: "Starrbites Developments",
    images: [
      {
        url: "/images/brand/Starrbites Blue Logo.png",
        width: 1200,
        height: 630,
        alt: "Starrbites Developments Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
