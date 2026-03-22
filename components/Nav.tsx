"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-espresso/10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl font-bold text-espresso tracking-wide">
          Brow Ink
        </Link>
        <a
          href="#form"
          className="bg-espresso text-cream text-sm font-semibold px-4 py-2 rounded-full hover:bg-rosegold transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
