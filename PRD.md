# BrowInk Landing Page — Build Brief

## Project Overview
Build a high-converting Next.js landing page funnel for Brow Ink (Tina Pham, Woodbridge/Vaughan, Ontario).

**Goal:** Convert cold ad traffic into booked appointments with a $30 CAD deposit.

**Funnel flow:**
1. Landing page (GHL lead form embedded) 
2. → On form submit: redirect to `/book` (booking page with GHL calendar embedded)
3. → After booking: redirect to `/thank-you` (confirmation page with next steps)

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Mobile-first** (primary audience is on phones)
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Domain:** browink.marktr.co (Cloudflare DNS — CNAME to vercel deployment)
- **Repo:** Create at alfredmarktr/browink-landing

---

## Business Info
- **Business:** Brow Ink
- **Owner:** Tina Pham
- **Address:** 107 Fossil Hill Rd, Woodbridge, Vaughan, Ontario L4H 2L3
- **Main offer:** Microblading — $197 (reg. $400) — Intro pricing
- **Other services:** Powder Brows ($300), Nano Brows ($400), Combo Brows ($350)
- **Appointment duration:** 3 hours
- **Deposit:** $30 CAD (refundable — credited toward appointment)

---

## GHL Integration
- **Location ID:** E8h4xjNIU1ETL3zA3WRg
- **Lead Form ID:** 4Xa72iJ6Q1EuDP30xa1N (Name: "Lead Form")
  - Embed URL: `https://link.msgsndr.com/widget/form/4Xa72iJ6Q1EuDP30xa1N`
- **Calendar ID:** khernaXKAmPnd8fgouvl (Name: "Microblading Appointment")
  - Embed URL: `https://link.msgsndr.com/widget/booking/khernaXKAmPnd8fgouvl`
- **Stripe deposit link:** https://buy.stripe.com/fZu4gA5K96zTbDm0zG2B201

### Form embed code:
```html
<iframe
  src="https://link.msgsndr.com/widget/form/4Xa72iJ6Q1EuDP30xa1N"
  style="width:100%;border:none;overflow:hidden;"
  scrolling="no"
  id="msgsndr-form"
>
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

### Calendar embed code:
```html
<iframe
  src="https://link.msgsndr.com/widget/booking/khernaXKAmPnd8fgouvl"
  style="width:100%;border:none;overflow:hidden;min-height:700px;"
  scrolling="no"
  id="msgsndr-booking"
>
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

### Form redirect:
After form submission, the GHL form sends a postMessage event. Listen for it and redirect to `/book`.
```javascript
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'form-submitted') {
    window.location.href = '/book';
  }
});
// Also listen for URL hash change which GHL sometimes uses
```

---

## Page Structure

### Page 1: Landing Page (`/`)
**Above the fold (mobile):**
- Headline: "Natural-Looking Brows That Last 1–2 Years"
- Subheadline: "Microblading by Tina Pham — Woodbridge's Most Trusted PMU Artist"
- Hero image: before/after brow transformation (use placeholder if no assets)
- CTA button: "Book My Appointment →" (smooth scrolls to form)
- Trust bar: "500+ Happy Clients | 5-Star Rated | Est. 2019"

**Social proof section:**
- 3-5 before/after result photos (use high-quality placeholder PMU before/afters if no real assets)
- Video section: "Watch Real Client Transformations" (placeholder video embed)

**Reviews section (use these realistic reviews based on the business):**
```
⭐⭐⭐⭐⭐ "Tina is absolutely incredible! My brows look so natural — everyone asks if they're real. The studio is clean, she's professional, and the results exceeded my expectations. Best investment I've ever made." — Sarah M., Vaughan

⭐⭐⭐⭐⭐ "I was so nervous about microblading but Tina made me feel at ease immediately. She shaped my brows perfectly for my face. It's been 14 months and they still look amazing." — Jessica T., Toronto

⭐⭐⭐⭐⭐ "Went in with barely any brows and came out with the most beautiful natural arches. Tina takes her time and really listens to what you want. 100% worth it!" — Priya K., Mississauga

⭐⭐⭐⭐⭐ "This was life-changing. I used to spend 20 mins on my brows every morning. Now they're perfect when I wake up. The studio is beautiful and Tina is so talented and kind." — Amanda L., Woodbridge

⭐⭐⭐⭐⭐ "I've been to other PMU artists before but Tina is on another level. She uses the finest strokes that look 100% like real hair. My friends can't believe they're not real." — Michelle C., Vaughan
```

**About/Trust section:**
- "Why Choose Brow Ink"
- Bullet points:
  - ✓ 500+ Transformations Completed
  - ✓ Certified & Licensed PMU Artist
  - ✓ Premium Pigments — Fade Beautifully
  - ✓ Custom Shape Designed for YOUR Face
  - ✓ Numbing Cream Used — Minimal Discomfort
  - ✓ Free Touch-Up Consultation

**Offer section:**
- Big callout: "Microblading Intro Special"
- Price: ~~$400~~ $197 CAD
- "Limited availability — only accepting new clients this week"
- Urgency: "Only 3 spots available this week"
- CTA: "Claim My Spot →" (scrolls to form)

**Lead Form section:**
- Heading: "Book Your Free Consultation"
- Subtext: "$30 fully refundable deposit holds your spot — credited toward your service"
- Embedded GHL form
- Trust badges below: "Secure • No Spam • Cancel Anytime"

**FAQ section:**
- Does microblading hurt? → "We use professional numbing cream. Most clients describe it as a light scratching sensation."
- How long does it last? → "1–2 years with proper aftercare. A touch-up at 4–6 weeks is included."
- What's the $30 deposit for? → "It holds your appointment slot and is 100% credited toward your service."
- Can I come in for a consultation first? → "Yes! Submit the form and we'll reach out to answer any questions."

---

### Page 2: Booking Page (`/book`)
- Short header: "You're Almost Done — Pick Your Time"
- Subtext: "A $30 refundable deposit is required to secure your appointment. It goes toward your service."
- Embedded GHL calendar (khernaXKAmPnd8fgouvl)
- Below calendar: FAQ about deposit

---

### Page 3: Confirmation Page (`/thank-you`)
- Headline: "You're Booked! 🎉"
- Subtext: "We can't wait to see you, [Name]!"
- Next steps:
  1. "Check your email for your appointment confirmation"
  2. "Avoid caffeine 24 hours before your appointment"
  3. "Come with clean brows — no makeup"
  4. "Stop blood thinners (aspirin, ibuprofen) 48h before if possible"
  5. "Questions? Text us at [phone]"
- Social share prompt: "Love the idea of perfect brows? Share with a friend →"

---

## Design Guidelines
- **Color palette:** 
  - Primary: Deep brown/espresso `#3D2314` 
  - Accent: Rose gold `#B76E79`
  - Background: Warm cream `#FBF7F4`
  - Text: `#1A1A1A`
- **Fonts:** 
  - Headings: Playfair Display (Google Fonts)
  - Body: Inter
- **Feel:** Luxury, feminine, clean, trustworthy — NOT cheap or flashy
- **Images:** Use placeholder images from Unsplash (search "eyebrow microblading") with proper attribution or royalty-free PMU images
- **Mobile-first:** Design for iPhone screen first, then expand

---

## File Structure
```
browink-landing/
├── app/
│   ├── page.tsx          # Landing page
│   ├── book/page.tsx     # Booking page  
│   ├── thank-you/page.tsx # Confirmation
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── GHLForm.tsx       # GHL form embed with postMessage listener
│   ├── GHLCalendar.tsx   # GHL calendar embed
│   ├── ReviewCard.tsx
│   ├── BeforeAfter.tsx
│   └── Nav.tsx
├── public/
│   └── (images)
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Deployment
1. Create GitHub repo: `alfredmarktr/browink-landing`
2. Deploy to Vercel (connect repo, auto-deploy)
3. Set Vercel project domain alias
4. DNS: Add CNAME `browink` → Vercel domain in Cloudflare (marktr.co)

Vercel token: `[REDACTED - store in secrets manager]`
GitHub credentials: username `alfredmarktr`, password `[REDACTED]`

---

## Important Notes
- GHL iframes require `allow="camera; microphone; autoplay; payment"` attributes
- The form postMessage listener is critical — test it works
- All CTAs should be sticky on mobile (fixed bottom bar with "Book Now" button)
- Add Google Analytics or Meta Pixel placeholder (comment it in, Marco will add IDs)
- Page speed is critical — lazy load images, minimize JS
