import Image from "next/image";
import Nav from "@/components/Nav";
import ReviewCard from "@/components/ReviewCard";
import GHLForm from "@/components/GHLForm";
import StickyBar from "@/components/StickyBar";

const reviews = [
  {
    text: "Tina is absolutely incredible! My brows look so natural — everyone asks if they're real. The studio is clean, she's professional, and the results exceeded my expectations. Best investment I've ever made.",
    author: "Sarah M.",
    location: "Vaughan",
  },
  {
    text: "I was so nervous about microblading but Tina made me feel at ease immediately. She shaped my brows perfectly for my face. It's been 14 months and they still look amazing.",
    author: "Jessica T.",
    location: "Toronto",
  },
  {
    text: "Went in with barely any brows and came out with the most beautiful natural arches. Tina takes her time and really listens to what you want. 100% worth it!",
    author: "Priya K.",
    location: "Mississauga",
  },
  {
    text: "This was life-changing. I used to spend 20 mins on my brows every morning. Now they're perfect when I wake up. The studio is beautiful and Tina is so talented and kind.",
    author: "Amanda L.",
    location: "Woodbridge",
  },
  {
    text: "I've been to other PMU artists before but Tina is on another level. She uses the finest strokes that look 100% like real hair. My friends can't believe they're not real.",
    author: "Michelle C.",
    location: "Vaughan",
  },
];

const faqs = [
  {
    q: "Does microblading hurt?",
    a: "We use professional numbing cream. Most clients describe it as a light scratching sensation — very manageable.",
  },
  {
    q: "How long does it last?",
    a: "1–2 years with proper aftercare. A touch-up at 4–6 weeks is included in your package.",
  },
  {
    q: "What's the $30 deposit for?",
    a: "It holds your appointment slot and is 100% credited toward your service — fully refundable.",
  },
  {
    q: "Can I come in for a consultation first?",
    a: "Yes! Submit the form and we'll reach out to answer any questions before your appointment.",
  },
];

export default function Home() {
  return (
    <main className="bg-cream pb-24 md:pb-0">
      <Nav />

      {/* Hero */}
      <section className="pt-16 md:pt-20">
        <div className="relative bg-espresso text-cream px-4 py-14 md:py-24 text-center overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80"
              alt="Microblading brow transformation"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-rosegold text-xs font-semibold uppercase tracking-widest mb-3">
              Woodbridge & Vaughan • Est. 2019
            </p>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-4">
              Natural-Looking Brows<br />That Last 1–2 Years
            </h1>
            <p className="text-cream/80 text-base md:text-lg mb-8 max-w-md mx-auto">
              Microblading by Tina Pham — Woodbridge&apos;s Most Trusted PMU Artist
            </p>
            <a
              href="#form"
              className="inline-block bg-rosegold text-white font-bold text-base px-8 py-4 rounded-full hover:bg-rosegold/90 transition-colors shadow-lg"
            >
              Book My Appointment →
            </a>
            {/* Trust bar */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-cream/70 text-xs font-medium">
              <span>⭐ 500+ Happy Clients</span>
              <span>•</span>
              <span>5-Star Rated</span>
              <span>•</span>
              <span>Est. 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Photos */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-2">
            Real Client Transformations
          </h2>
          <p className="text-darktext/60 text-center text-sm mb-8">Before & after microblading by Tina</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://images.unsplash.com/photo-1599566147946-c19bce4ee9fd?w=600&q=80",
              "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
              "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
              "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&q=80",
              "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={src}
                  alt={`Brow transformation ${i + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-espresso/5 section-padding">
        <div className="container-max text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso mb-2">
            Watch Real Client Transformations
          </h2>
          <p className="text-darktext/60 text-sm mb-6">See the process and results firsthand</p>
          <div className="relative rounded-2xl overflow-hidden bg-espresso/10 aspect-video max-w-xl mx-auto flex items-center justify-center">
            <div className="text-center py-16 px-8">
              <div className="w-16 h-16 bg-rosegold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-espresso/60 text-sm">Client transformation video</p>
              <p className="text-espresso/40 text-xs mt-1">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-2">
            What Our Clients Say
          </h2>
          <p className="text-darktext/60 text-center text-sm mb-8">500+ happy clients and counting</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <ReviewCard key={i} text={r.text} author={r.author} location={r.location} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-espresso text-cream section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-2">
            Why Choose Brow Ink
          </h2>
          <p className="text-cream/60 text-center text-sm mb-8">Everything you need for perfect brows</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "500+ Transformations Completed",
              "Certified & Licensed PMU Artist",
              "Premium Pigments — Fade Beautifully",
              "Custom Shape Designed for YOUR Face",
              "Numbing Cream Used — Minimal Discomfort",
              "Free Touch-Up Consultation Included",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <span className="text-rosegold font-bold text-lg mt-0.5">✓</span>
                <span className="text-sm text-cream/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-br from-rosegold/10 to-espresso/5 rounded-3xl p-8 md:p-12 text-center border border-rosegold/20">
            <p className="text-rosegold text-xs font-bold uppercase tracking-widest mb-3">
              ⚡ Limited Time Offer
            </p>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-espresso mb-3">
              Microblading Intro Special
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-darktext/40 text-xl line-through">$400 CAD</span>
              <span className="text-4xl font-bold text-espresso">$197 CAD</span>
            </div>
            <p className="text-darktext/60 text-sm mb-2">3-hour appointment · Touch-up included</p>
            <div className="inline-block bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <p className="text-red-600 text-xs font-semibold">🔥 Only 3 spots available this week</p>
            </div>
            <div className="block">
              <a
                href="#form"
                className="inline-block bg-espresso text-cream font-bold text-base px-10 py-4 rounded-full hover:bg-rosegold transition-colors shadow-lg"
              >
                Claim My Spot →
              </a>
            </div>
            <p className="text-darktext/40 text-xs mt-3">Limited availability — only accepting new clients this week</p>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="form" className="section-padding bg-espresso/5">
        <div className="container-max">
          <div className="text-center mb-6">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso mb-2">
              Book Your Free Consultation
            </h2>
            <p className="text-darktext/60 text-sm max-w-sm mx-auto">
              $30 fully refundable deposit holds your spot — credited toward your service
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-espresso/10 p-4 md:p-8 max-w-xl mx-auto">
            <GHLForm />
            <div className="flex items-center justify-center gap-4 mt-4 text-darktext/40 text-xs">
              <span>🔒 Secure</span>
              <span>•</span>
              <span>No Spam</span>
              <span>•</span>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-espresso/10">
                <h3 className="font-semibold text-espresso mb-2 text-sm md:text-base">{faq.q}</h3>
                <p className="text-darktext/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-cream/60 text-center py-8 px-4 text-xs">
        <p className="font-playfair text-cream text-base mb-1">Brow Ink</p>
        <p>107 Fossil Hill Rd, Woodbridge, Vaughan, Ontario L4H 2L3</p>
        <p className="mt-1">© {new Date().getFullYear()} Brow Ink. All rights reserved.</p>
      </footer>

      <StickyBar />
    </main>
  );
}
