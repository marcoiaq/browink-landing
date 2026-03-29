import Link from "next/link";
import Nav from "@/components/Nav";

export default function ThankYouPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />
      <div className="pt-20 px-4 pb-12">
        <div className="max-w-lg mx-auto">
          {/* Hero */}
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-rosegold/15 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-4xl">🎉</span>
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-espresso mb-3">
              You&apos;re Booked!
            </h1>
            <p className="text-darktext/60 text-base">
              We cannot wait to see you! Check your email for your appointment confirmation.
            </p>
          </div>

          {/* Next steps */}
          <div className="bg-white rounded-2xl shadow-sm border border-espresso/10 p-6 mb-6">
            <h2 className="font-playfair text-xl font-bold text-espresso mb-5">
              How to Prepare
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", text: "Check your email for your appointment confirmation — remember, appointments must be scheduled at least 48 hours in advance" },
                { num: "2", text: "Avoid caffeine and alcohol 24 hours before your appointment" },
                { num: "3", text: "Come with clean brows — no makeup on the brow area" },
                { num: "4", text: "Avoid blood thinners (aspirin, ibuprofen) 48 hours before if possible" },
                { num: "5", text: "Questions? Email tinanguyen19@gmail.com — Tina will get back to you quickly" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rosegold text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <p className="text-darktext/80 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-espresso/5 rounded-2xl p-6 mb-6 border border-espresso/10">
            <h3 className="font-playfair text-base font-bold text-espresso mb-3">Where to Find Us</h3>
            <p className="text-darktext/80 text-sm mb-1">107 Fossil Hill Road</p>
            <p className="text-darktext/80 text-sm mb-3">Woodbridge, ON L4H 2L3</p>
            <p className="text-darktext/60 text-xs mb-3">5 min from Vaughan Mills</p>
            <a
              href="https://maps.google.com/?q=107+Fossil+Hill+Road+Woodbridge+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-rosegold hover:text-espresso transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Social share */}
          <div className="bg-espresso rounded-2xl p-6 text-center text-cream mb-6">
            <h3 className="font-playfair text-lg font-bold mb-2">
              Love the idea of perfect brows?
            </h3>
            <p className="text-cream/70 text-sm mb-4">
              Share Brow Ink Co. with a friend and help them discover their best brows too.
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("I just booked a microblading appointment at Brow Ink Co. in Woodbridge! Check them out: browink.co")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rosegold text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-rosegold/90 transition-colors"
            >
              Share with a Friend →
            </a>
          </div>

          {/* Back home */}
          <div className="text-center">
            <Link href="/" className="text-espresso/50 text-sm hover:text-espresso transition-colors">
              ← Back to Brow Ink Co.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
