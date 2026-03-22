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
              We can&apos;t wait to see you. Check your email for your appointment confirmation.
            </p>
          </div>

          {/* Next steps */}
          <div className="bg-white rounded-2xl shadow-sm border border-espresso/10 p-6 mb-6">
            <h2 className="font-playfair text-xl font-bold text-espresso mb-5">
              How to Prepare
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", text: "Check your email for your appointment confirmation" },
                { num: "2", text: "Avoid caffeine 24 hours before your appointment" },
                { num: "3", text: "Come with clean brows — no makeup on the brow area" },
                { num: "4", text: "Stop blood thinners (aspirin, ibuprofen) 48h before if possible" },
                { num: "5", text: "Questions? Text us and we'll get back to you right away" },
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

          {/* Social share */}
          <div className="bg-espresso rounded-2xl p-6 text-center text-cream mb-6">
            <h3 className="font-playfair text-lg font-bold mb-2">
              Love the idea of perfect brows?
            </h3>
            <p className="text-cream/70 text-sm mb-4">
              Share Brow Ink with a friend and help them discover their best brows too.
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("I just booked a microblading appointment at Brow Ink in Woodbridge! Check them out: browink.marktr.co")}`}
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
              ← Back to Brow Ink
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
