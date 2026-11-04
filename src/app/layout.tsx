import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0099FF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://starrbites.com"),
  title: "Real Estate Developer in Bangalore | Starrbites",
  description:
    "Starrbites is a Bangalore-based real-estate development company creating thoughtfully planned land and lifestyle destinations, including Tiiger Trail and Stay and Play.",
  keywords: [
    "real estate developer in bangalore",
    "Starrbites developments",
    "curated plotted developments",
    "Tiiger Trail Lepakshi",
    "Stay and Play Starrbites",
    "land due diligence karnataka",
    "NRI property investment india",
  ],
  authors: [{ name: "Starrbites Developments" }],
  openGraph: {
    title: "Real Estate Developer in Bangalore | Starrbites",
    description:
      "Building Land. Creating Legacy. Starrbites develops thoughtfully planned destinations built on clear documentation, strategic location selection, and lasting value.",
    url: "https://starrbites.com",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/architecture/hero-contemporary-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Starrbites - Real Estate Development Company in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Developer in Bangalore | Starrbites",
    description:
      "Building Land. Creating Legacy. Thoughtfully planned real-estate and land developments by Starrbites.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FDFBFF] text-[#242424] antialiased selection:bg-[#0099FF] selection:text-[#242424]">
        {children}
      </body>
    </html>
  );
}
