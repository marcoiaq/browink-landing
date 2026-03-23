import Nav from "@/components/Nav";
import GHLCalendar from "@/components/GHLCalendar";

export default function BookPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />
      <div className="pt-20 px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center py-8">
            <p className="text-rosegold text-xs font-bold uppercase tracking-widest mb-2">
              Step 2 of 2
            </p>
            <h1 className="font-playfair text-2xl md:text-4xl font-bold text-espresso mb-3">
              You&apos;re Almost There — Pick Your Time
            </h1>
            <p className="text-darktext/60 text-sm max-w-sm mx-auto">
              Your $30 deposit is required to finalize your booking. It&apos;s fully refundable and credited toward your service.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-espresso text-cream text-xs flex items-center justify-center font-bold">✓</div>
              <span className="text-xs text-espresso font-medium">Info Submitted</span>
            </div>
            <div className="w-8 h-px bg-espresso/30" />
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-rosegold text-white text-xs flex items-center justify-center font-bold">2</div>
              <span className="text-xs text-rosegold font-semibold">Choose Your Time</span>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="bg-white rounded-2xl shadow-sm border border-espresso/10 p-2 md:p-4 mb-6">
            <GHLCalendar />
          </div>

          {/* Contact */}
          <p className="text-center text-darktext/50 text-xs">
            Questions?{" "}
            <a href="mailto:tinanguyen19@gmail.com" className="text-espresso hover:text-rosegold transition-colors underline">
              tinanguyen19@gmail.com
            </a>
          </p>

          {/* Deposit FAQ */}
          <div className="bg-espresso/5 rounded-xl p-5 border border-espresso/10 mt-4">
            <h3 className="font-semibold text-espresso text-sm mb-3">About the $30 Deposit</h3>
            <div className="space-y-2 text-xs text-darktext/70">
              <div className="flex items-start gap-2">
                <span className="text-rosegold mt-0.5">✓</span>
                <span>100% credited toward your $197 microblading appointment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rosegold mt-0.5">✓</span>
                <span>Fully refundable if you cancel 48+ hours in advance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rosegold mt-0.5">✓</span>
                <span>Processed securely</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rosegold mt-0.5">✓</span>
                <span>Holds your spot so it won&apos;t be taken by another client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
