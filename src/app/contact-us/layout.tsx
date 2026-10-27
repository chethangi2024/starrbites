import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Starrbites Developments Bangalore",
  description:
    "Connect with Starrbites Developments. Reach our land advisory and plotted estate specialists directly at our Dollars Colony headquarters in Bengaluru, Karnataka.",
  alternates: {
    canonical: "https://starrbites.com/contact-us/",
  },
  openGraph: {
    title: "Contact Us | Starrbites Developments Bangalore",
    description:
      "Connect with Starrbites Developments. Reach our land advisory and plotted estate specialists directly at our Dollars Colony headquarters in Bengaluru, Karnataka.",
    url: "https://starrbites.com/contact-us/",
    siteName: "Starrbites Developments",
    images: [
      {
        url: "/images/brand/Starrbites Blue Logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Starrbites Developments",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Starrbites Developments Bangalore",
    description:
      "Connect with Starrbites Developments. Reach our land advisory specialists directly at our Dollars Colony office.",
    images: ["/images/brand/Starrbites Blue Logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
