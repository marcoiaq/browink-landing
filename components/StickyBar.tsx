"use client";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-espresso/96 backdrop-blur-sm py-3 px-5 flex items-center justify-between md:hidden">
      <div>
        <p className="font-inter font-light text-cream/60 text-[0.65rem] tracking-[0.1em] uppercase">Intro Special</p>
        <p className="font-cormorant font-light text-cream text-lg leading-tight">
          <span className="line-through text-cream/30 text-sm mr-1">$400</span>$197
        </p>
      </div>
      <a
        href="#form"
        className="btn-cream text-[0.65rem] px-4 py-2"
      >
        Book Now
      </a>
    </div>
  );
}
