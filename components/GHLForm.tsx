"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function GHLForm() {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "form-submitted") {
        router.push("/book");
      }
      // Some GHL versions send different event types
      if (e.data && (e.data.event === "form-submitted" || e.data.formSubmitted)) {
        router.push("/book");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <div className="w-full">
      <iframe
        src="https://link.msgsndr.com/widget/form/4Xa72iJ6Q1EuDP30xa1N"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "480px" }}
        scrolling="no"
        id="msgsndr-form"
        allow="camera; microphone; autoplay; payment"
        title="Book Your Free Consultation"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
