import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Received | Starrbites Developments",
  description:
    "Thank you for contacting Starrbites Developments. Your advisory inquiry has been received by our client desk.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
