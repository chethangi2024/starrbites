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
  themeColor: "#171C56",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://starrbites.com"),
  title: "Real Estate Developer in Bangalore | Starrbites",
  description:
    "Starrbites creates thoughtfully planned land destinations in Bangalore with verified titles, strategic location foresight, and long-term legacy value.",
  keywords: [
    "real estate developer in bangalore",
    "curated plotted developments",
    "farmland investment bangalore",
    "Tiiger Trail Lepakshi",
    "land due diligence karnataka",
    "NRI property investment india",
  ],
  authors: [{ name: "Starrbites Developments" }],
  openGraph: {
    title: "Real Estate Developer in Bangalore | Starrbites",
    description:
      "Building Land. Creating Legacy. Thoughtfully planned land destinations shaped by purposeful development and considered investment potential.",
    url: "https://starrbites.com",
    siteName: "Starrbites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/stock/architecture/hero-contemporary-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Starrbites - Thoughtfully Planned Land Destinations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Developer in Bangalore | Starrbites",
    description: "Building Land. Creating Legacy. Curated plotted developments in Bengaluru.",
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
      <body className="min-h-screen flex flex-col bg-white text-[#242424] antialiased selection:bg-[#171C56] selection:text-[#EDC455]">
        {children}
      </body>
    </html>
  );
}
