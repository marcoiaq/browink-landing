import Nav from "@/components/Nav";
import GHLCalendar from "@/components/GHLCalendar";

export default function BookPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />
      <div className="pt-[68px] px-4 pb-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center py-16">
            <p className="font-cormorant italic font-light text-rosegold text-sm tracking-[0.06em] mb-4">
              ✦ Woodbridge · Vaughan
            </p>
            <span className="block w-10 h-px bg-rosegold mx-auto mb-6" />
            <h1 className="font-cormorant font-light text-4xl md:text-5xl tracking-[0.02em] text-darktext mb-3">
              Book Your Appointment
            </h1>
            <p className="font-cormorant italic text-base text-espresso/70 max-w-sm mx-auto">
              Your $30 deposit holds your spot and is fully credited toward your service.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-espresso bg-espresso text-cream text-xs flex items-center justify-center font-inter font-light">✓</div>
              <span className="font-inter font-light text-xs tracking-wide text-espresso">Info Submitted</span>
            </div>
            <div className="w-8 h-px bg-espresso/20" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-rosegold text-rosegold text-xs flex items-center justify-center font-inter font-light">2</div>
              <span className="font-inter font-light text-xs tracking-wide text-rosegold">Choose Your Time</span>
            </div>
          </div>

          {/* Calendar embed — GHL calendar, do not change */}
          <div className="border border-espresso/20 overflow-hidden mb-6">
            <GHLCalendar />
          </div>

          {/* Contact */}
          <p className="text-center font-inter font-light text-xs text-darktext/40">
            Questions?{" "}
            <a href="mailto:tinanguyen19@gmail.com" className="text-espresso hover:text-rosegold transition-colors">
              tinanguyen19@gmail.com
            </a>
          </p>

          {/* Deposit note */}
          <div className="mt-6 border-l-2 border-espresso pl-5 py-2">
            <h3 className="font-cormorant italic text-base text-espresso mb-3">About the $30 Deposit</h3>
            <div className="space-y-2">
              {[
                "100% credited toward your $197 microblading appointment",
                "Fully refundable if you cancel 48+ hours in advance",
                "Processed securely — holds your spot exclusively for you",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-rosegold text-xs mt-[0.2rem] flex-shrink-0">✦</span>
                  <span className="font-inter font-light text-xs text-darktext/65 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
