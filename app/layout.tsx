import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
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
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-cream text-darktext`}>
        {children}
      </body>
    </html>
  );
}
