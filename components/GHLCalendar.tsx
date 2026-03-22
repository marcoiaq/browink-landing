"use client";

import Script from "next/script";

export default function GHLCalendar() {
  return (
    <div className="w-full">
      <iframe
        src="https://link.msgsndr.com/widget/booking/khernaXKAmPnd8fgouvl"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
        scrolling="no"
        id="msgsndr-booking"
        allow="camera; microphone; autoplay; payment"
        title="Book Your Microblading Appointment"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
