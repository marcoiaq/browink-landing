import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brow Ink — Microblading by Tina Pham | Woodbridge, Vaughan",
  description:
    "Get natural-looking brows that last 1–2 years. Microblading by certified PMU artist Tina Pham in Woodbridge, Vaughan. Intro pricing from $197. Book your consultation today.",
  keywords:
    "microblading Woodbridge, microblading Vaughan, PMU artist Ontario, brow tattooing, permanent makeup Vaughan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-darktext">{children}</body>
    </html>
  );
}
