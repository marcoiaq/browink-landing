"use client";

import { useEffect } from "react";

export default function GHLForm() {
  useEffect(() => {
    if (document.querySelector('script[src="https://book.marktr.co/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://book.marktr.co/js/form_embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src="https://book.marktr.co/widget/survey/y767vKIB2bpWma1lJIXR"
      style={{ border: "none", width: "100%" }}
      scrolling="no"
      id="y767vKIB2bpWma1lJIXR"
      title="survey"
    />
  );
}
