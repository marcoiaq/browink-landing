import Image from "next/image";
import GHLForm from "@/components/GHLForm";
import StickyBar from "@/components/StickyBar";
import FadeIn from "@/components/FadeIn";

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

const galleryImages = [
  "/images/combo_4.png",
  "/images/micro_2.png",
  "/images/micro_3.png",
  "/images/combo_1.png",
  "/images/combo_2.png",
];

export default function Home() {
  return (
    <main className="bg-cream pb-24 md:pb-0">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/92 backdrop-blur-sm border-b border-rosegold/10">
        <div className="container-max px-4 md:px-8 h-[68px] flex items-center justify-between">
          <a href="/" className="font-cormorant font-light text-xl tracking-[0.08em] text-espresso">
            Brow Ink Co.
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#gallery" className="font-inter text-[0.72rem] tracking-[0.15em] uppercase text-darktext/60 hover:text-darktext transition-colors">Before &amp; After</a>
            <a href="#services" className="font-inter text-[0.72rem] tracking-[0.15em] uppercase text-darktext/60 hover:text-darktext transition-colors">The Treatment</a>
            <a href="#form" className="btn-espresso">Book $197</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-[68px] min-h-screen flex flex-col md:flex-row">

        {/* LEFT — mobile: full-bleed overlay; desktop: clean copy panel */}
        {/* Mobile */}
        <div className="relative md:hidden flex-1 text-cream px-5 py-20 text-center overflow-hidden min-h-screen flex flex-col justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/creative_3.png"
              alt="Microblading results by Tina Pham"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-espresso/65" />
          </div>
          <div className="relative z-10">
            <p className="font-cormorant font-light italic text-rosegold text-sm tracking-[0.06em] mb-4 drop-shadow-lg">
              ✦ Woodbridge · Vaughan
            </p>
            <span className="rule-rosegold mx-auto mb-6 block" />
            <h1 className="font-cormorant font-light text-4xl leading-tight tracking-[0.02em] mb-5 text-cream drop-shadow-lg">
              Wake Up <em className="italic text-rosegold">Flawless</em><br />Every Morning
            </h1>
            <p className="font-cormorant italic text-lg text-cream/85 mb-8 max-w-xs mx-auto leading-relaxed">
              Microblading by Tina Pham — Vaughan&apos;s trusted PMU artist since 2019
            </p>
            <a id="form-cta" href="#form" className="btn-cream">Claim $197 Offer</a>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-cream/70">
              {[["500+", "Happy Clients"], ["5★", "Rated"], ["Free", "Consultation"]].map(([v, l], i) => (
                <div key={i} className="text-center">
                  <p className="font-cormorant font-light text-xl text-cream">{v}</p>
                  <p className="font-inter text-[0.6rem] tracking-[0.1em] uppercase">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop left panel */}
        <div className="hidden md:flex flex-1 flex-col justify-center px-16 xl:px-24 py-20">
          <FadeIn delay={0}>
            <p className="font-cormorant italic font-light text-rosegold text-sm tracking-[0.06em] mb-4">
              ✦ Woodbridge · Vaughan
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <span className="rule-rosegold mb-6 block" />
          </FadeIn>
          <FadeIn delay={160}>
            <h1 className="font-cormorant font-light text-6xl xl:text-7xl leading-[1.08] tracking-[0.02em] text-darktext mb-6">
              Wake Up{" "}
              <em className="italic text-rosegold">Flawless</em>
              <br />Every Morning
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="font-cormorant italic font-normal text-xl text-espresso/80 mb-10 max-w-md leading-relaxed">
              Microblading by Tina Pham — Vaughan&apos;s trusted PMU artist since 2019
            </p>
          </FadeIn>
          <FadeIn delay={320}>
            <div className="mb-12">
              <a href="#form" className="btn-espresso">Claim $197 Offer</a>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex gap-6 items-center">
              {[["500+", "Happy Clients"], ["5★", "Rated"], ["Free", "Consultation"]].map(([v, l], i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-7 bg-rosegold/25" />}
                  <div>
                    <p className="font-cormorant font-light text-xl text-espresso leading-tight">{v}</p>
                    <p className="font-inter font-light text-[0.62rem] tracking-[0.1em] uppercase text-darktext/50">{l}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Desktop right — image with left-edge gradient */}
        <div className="hidden md:block flex-1 relative">
          <Image
            src="/images/creative_3.png"
            alt="Microblading results by Tina Pham"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Left-edge gradient fade into background */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: "200px",
              background: "linear-gradient(to right, #FAFAF8 0%, rgba(250,250,248,0.6) 50%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="section-padding">
        <div className="container-max px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-cormorant italic font-light text-4xl md:text-5xl tracking-[0.02em] text-darktext inline-block pb-3 border-b border-rosegold">
                Before &amp; After
              </h2>
              <p className="font-inter font-light text-sm text-darktext/50 mt-4 tracking-wide">
                Every result is by Tina Pham
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="gallery-wrap relative overflow-hidden rounded-sm aspect-[4/5]">
                  <Image
                    src={src}
                    alt="Brow result by Tina Pham"
                    fill
                    className="object-cover gallery-img"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section className="bg-lightsection section-padding">
        <div className="container-narrow px-4 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
              See the Transformation
            </h2>
            <p className="font-cormorant italic font-normal text-base text-espresso/70 mb-8">
              Combination brows by Tina Pham — air blend technique
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative overflow-hidden rounded-sm max-w-xl mx-auto" style={{ boxShadow: "0 8px 40px rgba(61,35,20,0.1)" }}>
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
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="services" className="section-padding">
        <div className="container-max px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
                The Treatment
              </h2>
              <p className="font-cormorant italic text-base text-espresso/70">
                Three steps to your most effortless brows
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Consultation",
                desc: "A $30 deposit holds your spot — fully credited toward your service. Tina maps your perfect brow shape personally.",
              },
              {
                num: "02",
                title: "Artistry",
                desc: "Using ultra-fine hair strokes, Tina creates dimension and definition that blends seamlessly with your natural brows.",
              },
              {
                num: "03",
                title: "Aftercare",
                desc: "Leave with flawless, natural hair-stroke brows lasting 1.5–3 years. A free touch-up at 4–6 weeks is included.",
              },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 120}>
                <div className="relative pt-2">
                  {/* Decorative number */}
                  <span
                    className="font-cormorant font-light absolute select-none pointer-events-none"
                    style={{
                      fontSize: "6.5rem",
                      lineHeight: 1,
                      color: "rgba(183,110,121,0.1)",
                      top: "-1.25rem",
                      left: "-0.5rem",
                    }}
                  >
                    {step.num}
                  </span>
                  <div className="relative z-10 pt-14">
                    <h3 className="font-cormorant italic text-2xl text-espresso mb-3">{step.title}</h3>
                    <p className="font-inter font-light text-sm leading-[1.8] text-darktext/65">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BROW INK ─── */}
      <section className="bg-lightsection section-padding">
        <div className="container-max px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left */}
            <FadeIn>
              <div>
                <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
                  Why Brow Ink Co.
                </h2>
                <p className="font-cormorant italic text-base text-rosegold mb-10">
                  The standard for brow artistry in Woodbridge &amp; Vaughan
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "500+ Transformations Completed",
                    "Certified & Licensed PMU Artist — Tina Pham",
                    "Premium Pigments — Fade Beautifully Over Time",
                    "Custom Shape Designed for YOUR Face",
                    "Numbing Cream — Minimal Discomfort",
                    "Free Touch-Up Consultation at 4–6 Weeks",
                    "Free Aftercare Kit Included ($20 value)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-rosegold text-xs mt-[0.3rem] flex-shrink-0">✦</span>
                      <span className="font-inter font-light text-sm leading-[1.7] text-darktext">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right — gallery collage */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-2">
                {["/images/combo_3.png", "/images/combo_4.png", "/images/creative_1.png", "/images/creative_2.png"].map((src, i) => (
                  <div key={i} className="gallery-wrap relative overflow-hidden rounded-sm aspect-square">
                    <Image
                      src={src}
                      alt="Brow result"
                      fill
                      className="object-cover gallery-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── OFFER ─── */}
      <section className="bg-lightsection section-padding">
        <div className="container-narrow px-4 md:px-8 text-center">
          <FadeIn>
            <p className="font-inter font-light text-[0.7rem] tracking-[0.2em] uppercase text-rosegold mb-4">
              Limited Intro Offer
            </p>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
              Microblading Intro Special
            </h2>
            <p className="font-cormorant italic text-base text-espresso/75 mb-10">
              Everything included for your best brows
            </p>
          </FadeIn>

          {/* Price */}
          <FadeIn delay={100}>
            <p className="font-inter font-light text-sm text-darktext/40 line-through mb-1">Reg. $400</p>
            <p
              className="font-cormorant font-light text-darktext"
              style={{ fontSize: "6rem", lineHeight: 1 }}
            >
              $197
            </p>
            <p className="font-inter font-light text-xs text-darktext/40 mb-10 mt-1">CAD · 3-hr appointment</p>
          </FadeIn>

          {/* Included items */}
          <FadeIn delay={180}>
            <ul className="max-w-xs mx-auto text-left space-y-3 mb-10">
              {[
                "Personalized Brow Consultation ($100 value)",
                "Full Microblading Treatment ($300 value)",
                "Free Aftercare Kit ($20 value)",
                "Complimentary Touch-Up at 4–6 Weeks",
                "$30 refundable deposit holds your spot",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-espresso/40 font-light mt-px flex-shrink-0">—</span>
                  <span className="font-inter font-light text-sm leading-[1.8] text-darktext/70">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={240}>
            <a href="#form" className="btn-espresso">Claim My Spot — $197</a>
          </FadeIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding">
        <div className="container-max px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
                Client Stories
              </h2>
              <p className="font-inter font-light text-xs tracking-[0.1em] uppercase text-darktext/40 mt-2">
                500+ happy clients across Vaughan &amp; the GTA
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-lightsection p-8" style={{ boxShadow: "0 4px 30px rgba(61,35,20,0.05)" }}>
                  {/* Stars */}
                  <p className="text-rosegold text-sm mb-4 tracking-wider">★★★★★</p>
                  {/* Review text */}
                  <p className="font-inter font-light italic text-sm leading-[1.8] text-darktext/75 mb-5">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {/* Name */}
                  <p
                    className="font-cormorant text-espresso tracking-[0.1em] uppercase"
                    style={{ fontVariant: "small-caps", fontSize: "0.85rem" }}
                  >
                    {r.author}
                    <span className="font-inter font-light text-[0.65rem] text-darktext/40 ml-2 tracking-wide normal-case" style={{ fontVariant: "normal" }}>
                      · {r.location}
                    </span>
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section id="form" className="section-padding bg-cream">
        <div className="container-narrow px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext mb-2">
                Claim Your $197 Offer
              </h2>
              <p className="font-cormorant italic text-base text-espresso/70">
                Fill in your details below — we&apos;ll be in touch within 24 hours
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="max-w-xl mx-auto">
              <GHLForm />
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 text-darktext/30 text-xs font-inter font-light">
              <span>🔒 Secure</span>
              <span>·</span>
              <span>No Spam</span>
              <span>·</span>
              <span>Cancel Anytime</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-lightsection">
        <div className="container-narrow px-4 md:px-8 max-w-2xl">
          <FadeIn>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl tracking-[0.02em] text-darktext text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="border-l-2 border-espresso pl-5 py-1">
                  <h3 className="font-cormorant italic text-lg text-espresso mb-1">{faq.q}</h3>
                  <p className="font-inter font-light text-sm leading-[1.8] text-darktext/65">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-rosegold/20 py-12 px-4 text-center bg-cream">
        <p className="font-cormorant font-light text-xl text-espresso tracking-[0.08em] mb-3">Brow Ink Co.</p>
        <p className="font-inter font-light text-xs text-darktext/40 mb-1">107 Fossil Hill Road, Woodbridge, ON L4H 2L3 · 5 min from Vaughan Mills</p>
        <p className="font-inter font-light text-xs text-darktext/40 mb-2">
          Mon–Fri: 9:30–10:30am &amp; 5:30–8pm · Sun: 11am–6pm
        </p>
        <p className="font-inter font-light text-xs text-darktext/40 mb-4">
          <a href="mailto:tinanguyen19@gmail.com" className="hover:text-rosegold transition-colors">tinanguyen19@gmail.com</a>
          {" · "}
          <a href="https://www.instagram.com/browink.co" target="_blank" rel="noopener noreferrer" className="hover:text-rosegold transition-colors">@browink.co</a>
        </p>
        <p className="font-inter font-light text-[0.65rem] text-darktext/25 tracking-widest uppercase">
          ✦ Woodbridge · Vaughan · GTA
        </p>
        <p className="font-inter font-light text-[0.65rem] text-darktext/25 mt-1">
          © {new Date().getFullYear()} Brow Ink Co. All rights reserved.
        </p>
      </footer>

      <StickyBar />
    </main>
  );
}
