import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Axcessiom — Drive With Your Smile. Control Your Car With a Wink.",
  description:
    "Face IT is the driver assistance system that lets people with disabilities control turn signals, wipers, headlights, and more — using facial expressions. No voice commands. No reaching. Just drive.",
  keywords: [
    "Face IT",
    "Axcessiom",
    "facial gesture control",
    "adaptive driving",
    "accessibility",
    "driver assistance",
    "hand controls",
    "disability driving",
    "CES 2023",
  ],
  authors: [{ name: "Axcessiom Technologies Inc." }],
  openGraph: {
    title: "Axcessiom — Face IT Driver Assistance System",
    description:
      "Control your vehicle with facial gestures. No voice commands. No reaching. Just drive.",
    url: "https://axcessiom.ca",
    siteName: "Axcessiom",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axcessiom — Face IT Driver Assistance System",
    description:
      "Control your vehicle with facial gestures. No voice commands. No reaching. Just drive.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-poppins antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
