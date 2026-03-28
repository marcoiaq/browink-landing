"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/92 backdrop-blur-sm border-b border-rosegold/10">
      <div className="container-max px-4 md:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="font-cormorant font-light text-xl tracking-[0.08em] text-espresso">
          Brow Ink Co.
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#gallery" className="font-inter text-[0.72rem] tracking-[0.15em] uppercase text-darktext/60 hover:text-darktext transition-colors">
            Gallery
          </a>
          <a href="/#services" className="font-inter text-[0.72rem] tracking-[0.15em] uppercase text-darktext/60 hover:text-darktext transition-colors">
            Services
          </a>
          <a href="/#form" className="btn-espresso">Book $197</a>
        </div>
        <a href="/#form" className="md:hidden btn-espresso text-[0.65rem] px-4 py-2">Book $197</a>
      </div>
    </nav>
  );
}
