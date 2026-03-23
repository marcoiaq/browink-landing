"use client";

import { useEffect } from "react";

export default function GHLCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://book.marktr.co/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://book.marktr.co/widget/booking/khernaXKAmPnd8fgouvl"
      style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
      scrolling="no"
      id="khernaXKAmPnd8fgouvl_1774277275740"
    />
  );
}
