"use client";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-espresso py-3 px-4 flex items-center justify-between md:hidden shadow-lg">
      <div>
        <p className="text-cream text-xs font-medium">Microblading Intro Special</p>
        <p className="text-rosegold text-sm font-bold">
          <span className="line-through text-cream/50 mr-1 font-normal">$400</span>$197 CAD
        </p>
      </div>
      <a
        href="#form"
        className="bg-rosegold text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-rosegold/90 transition-colors"
      >
        Book Now →
      </a>
    </div>
  );
}
