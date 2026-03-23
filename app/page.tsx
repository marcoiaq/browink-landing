import Image from "next/image";
import Nav from "@/components/Nav";
import ReviewCard from "@/components/ReviewCard";
import GHLForm from "@/components/GHLForm";
import StickyBar from "@/components/StickyBar";

const reviews = [
  {
    text: "Tina is an absolute artist. I came in with practically no brows and left looking like myself — but better. She took so much time mapping my shape and the result is so natural. It's been over a year and I still get compliments.",
    author: "Priya Sharma",
    location: "Vaughan",
  },
  {
    text: "I was terrified but Tina walked me through every single step. The numbing cream worked amazingly well — I barely felt anything. My brows look exactly like real hair strokes. Best money I've ever spent on myself.",
    author: "Amanda Ferraro",
    location: "Woodbridge",
  },
  {
    text: "I've been to a few PMU artists in the GTA and Tina is the best by far. She's so precise and really listens. My brows are perfectly symmetrical and the colour has faded so beautifully over 18 months.",
    author: "Jessica Tran",
    location: "Vaughan",
  },
  {
    text: "Life changing is not an exaggeration. I save 20 minutes every morning. Tina's studio is spotless, she's professional, and the consultation was so thorough. I felt completely confident the whole time.",
    author: "Sarah MacLeod",
    location: "Thornhill",
  },
  {
    text: "My brows are naturally sparse and uneven. After seeing Tina I finally have brows I'm proud of. She designed the perfect shape for my face and the hair strokes look 100% real. Highly recommend to anyone in Vaughan.",
    author: "Michelle Chen",
    location: "Richmond Hill",
  },
];

const faqs = [
  {
    q: "Does microblading hurt?",
    a: "We apply professional numbing cream before the procedure. Most clients describe it as a light scratching sensation — very manageable and much more comfortable than expected.",
  },
  {
    q: "How long does microblading last?",
    a: "Results typically last 1.5–3 years depending on your skin type and aftercare. A complimentary touch-up consultation at 4–6 weeks is included in your package.",
  },
  {
    q: "What is the $30 deposit for?",
    a: "The $30 deposit holds your appointment spot and is 100% credited toward your service. It is also fully refundable if you need to cancel.",
  },
  {
    q: "What's included in the $197 intro price?",
    a: "Your intro package includes a personalized brow consultation ($100 value), the full microblading treatment ($300 value), and a free aftercare kit ($20 value) — a $420 total value.",
  },
  {
    q: "Can I come in for a consultation first?",
    a: "Yes! The consultation is free. Submit the form below and Tina will reach out to answer any questions before your appointment.",
  },
  {
    q: "Who performs the procedure?",
    a: "Every treatment is performed personally by Tina Pham — a certified, licensed PMU artist with clients across Vaughan, Woodbridge, and the greater GTA since 2019.",
  },
];

export default function Home() {
  return (
    <main className="bg-cream pb-24 md:pb-0">
      <Nav />

      {/* Hero */}
      <section className="pt-16 md:pt-20">
        <div className="relative text-cream px-4 py-20 md:py-36 text-center overflow-hidden">
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/creative_3.png"
              alt="Microblading results by Tina Pham"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Light dark overlay so text reads clearly */}
            <div className="absolute inset-0 bg-espresso/55" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-rosegold text-xs font-semibold uppercase tracking-widest mb-3 drop-shadow">
              Woodbridge &amp; Vaughan · Est. 2019
            </p>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
              Wake Up With Perfect<br />Brows Every Morning
            </h1>
            <p className="text-cream/90 text-base md:text-lg mb-8 max-w-md mx-auto drop-shadow">
              Microblading by Tina Pham — Vaughan&apos;s trusted PMU artist since 2019
            </p>
            <a
              href="#form"
              className="inline-block bg-rosegold text-white font-bold text-base px-8 py-4 rounded-full hover:bg-rosegold/90 transition-colors shadow-xl"
            >
              Book My $197 Intro Appointment →
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-cream/80 text-xs font-medium">
              <span>500+ Happy Clients</span>
              <span>·</span>
              <span>5★ Rated</span>
              <span>·</span>
              <span>Free Consultation Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Photos */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-2">
            Real Results. Real Clients.
          </h2>
          <p className="text-darktext/60 text-center text-sm mb-8">Every result is by Tina Pham</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "/images/micro_1.png",
              "/images/micro_2.png",
              "/images/micro_3.png",
              "/images/combo_1.png",
              "/images/combo_2.png",
              "/images/combo_3.png",
            ].map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={src}
                    alt="Brow result by Tina Pham"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-espresso/5 section-padding">
        <div className="container-max text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso mb-2">
            See the Transformation
          </h2>
          <p className="text-darktext/60 text-sm mb-6">Combination brows by Tina Pham — air blend technique</p>
          <div className="relative rounded-2xl overflow-hidden max-w-xl mx-auto shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
              src="/promo.mp4"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-2">
            How It Works
          </h2>
          <p className="text-darktext/60 text-center text-sm mb-10">Three simple steps to your perfect brows</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                num: "1",
                title: "Book your $197 intro appointment",
                desc: "A $30 deposit holds your spot — fully credited toward your service.",
              },
              {
                num: "2",
                title: "Come in for your free consultation",
                desc: "Tina personally maps your perfect brow shape for your face.",
              },
              {
                num: "3",
                title: "Leave with flawless brows",
                desc: "Natural hair-stroke results that last 1.5–3 years.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-rosegold text-white font-playfair font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-semibold text-espresso mb-2 text-sm md:text-base">{step.title}</h3>
                <p className="text-darktext/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-espresso text-cream section-padding">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-2">
            Why Brow Ink Co.
          </h2>
          <p className="text-cream/60 text-center text-sm mb-8">Everything included for your best brows</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "500+ Transformations Completed",
              "Certified & Licensed PMU Artist — Tina Pham",
              "Premium Pigments — Fade Beautifully Over Time",
              "Custom Shape Designed for YOUR Face",
              "Numbing Cream — Minimal Discomfort",
              "Free Touch-Up Consultation at 4–6 Weeks",
              "Free Aftercare Kit Included ($20 value)",
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
              ⚡ Limited Time Intro Offer
            </p>
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-espresso mb-6">
              Microblading Intro Special
            </h2>
            <div className="bg-white/60 rounded-2xl p-5 mb-6 max-w-sm mx-auto text-left space-y-2">
              <div className="flex justify-between text-sm text-darktext/70">
                <span>Personalized Brow Consultation</span>
                <span>$100</span>
              </div>
              <div className="flex justify-between text-sm text-darktext/70">
                <span>Microblading Treatment</span>
                <span>$300</span>
              </div>
              <div className="flex justify-between text-sm text-darktext/70">
                <span>Free Aftercare Kit</span>
                <span>$20</span>
              </div>
              <div className="border-t border-espresso/15 pt-2 flex justify-between text-sm font-semibold text-espresso">
                <span>Total Value</span>
                <span>$420</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="text-darktext/40 text-2xl line-through">$400</span>
              <span className="text-5xl font-bold text-espresso">$197</span>
              <span className="text-darktext/60 text-sm self-end mb-2">CAD</span>
            </div>
            <p className="text-darktext/60 text-sm mb-2">3-hour appointment · Aftercare kit included</p>
            <div className="inline-block bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <p className="text-red-600 text-xs font-semibold">🔥 Only 3 spots left this week</p>
            </div>
            <div className="block">
              <a
                href="#form"
                className="inline-block bg-espresso text-cream font-bold text-base px-10 py-4 rounded-full hover:bg-rosegold transition-colors shadow-lg"
              >
                Claim My Spot for $197 →
              </a>
            </div>
            <p className="text-darktext/40 text-xs mt-4">Limited availability — $30 deposit holds your spot</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-espresso/5">
        <div className="container-max">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso text-center mb-2">
            What Our Clients Say
          </h2>
          <p className="text-darktext/60 text-center text-sm mb-8">500+ happy clients across Vaughan &amp; the GTA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <ReviewCard key={i} text={r.text} author={r.author} location={r.location} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="form" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-6">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-espresso mb-2">
              Book Your $197 Intro Appointment
            </h2>
            <p className="text-darktext/60 text-sm max-w-sm mx-auto">
              $30 fully refundable deposit holds your spot — credited toward your service
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-espresso/10 p-4 md:p-8 max-w-xl mx-auto">
            <GHLForm />
            <div className="flex items-center justify-center gap-4 mt-4 text-darktext/40 text-xs">
              <span>🔒 Secure</span>
              <span>·</span>
              <span>No Spam</span>
              <span>·</span>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-espresso/5">
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
      <footer className="bg-espresso text-cream/60 text-center py-10 px-4 text-xs">
        <p className="font-playfair text-cream text-lg mb-1">BROW INK CO.</p>
        <p className="mb-1">107 Fossil Hill Road, Woodbridge, ON L4H 2L3</p>
        <p className="mb-1">5 min from Vaughan Mills</p>
        <p className="mb-1">
          Mon–Fri: 9:30–10:30am &amp; 5:30–8pm · Sun: 11am–6pm
        </p>
        <p className="mb-3">
          <a href="mailto:tinanguyen19@gmail.com" className="hover:text-rosegold transition-colors">
            tinanguyen19@gmail.com
          </a>
          {" · "}
          <a
            href="https://www.instagram.com/browink.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rosegold transition-colors"
          >
            @browink.co
          </a>
        </p>
        <p>© {new Date().getFullYear()} Brow Ink Co. All rights reserved.</p>
      </footer>

      <StickyBar />
    </main>
  );
}
