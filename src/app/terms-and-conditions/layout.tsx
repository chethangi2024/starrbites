import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Starrbites Developments",
  description:
    "Review the terms and conditions governing the use of the Starrbites Developments website, including property information disclaimers and intellectual property notices.",
  alternates: {
    canonical: "https://starrbites.com/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms and Conditions | Starrbites Developments",
    description:
      "Review the terms and conditions governing the use of the Starrbites Developments website.",
    url: "https://starrbites.com/terms-and-conditions/",
    siteName: "Starrbites Developments",
    images: [
      {
        url: "/images/brand/Starrbites Blue Logo.png",
        width: 1200,
        height: 630,
        alt: "Starrbites Developments Terms and Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
