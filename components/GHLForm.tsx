"use client";

import { useEffect } from "react";

export default function GHLForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://book.marktr.co/js/form_embed.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://book.marktr.co/widget/survey/y767vKIB2bpWma1lJIXR"
      style={{ border: "none", width: "100%", minHeight: "600px" }}
      scrolling="no"
      id="y767vKIB2bpWma1lJIXR"
      title="survey"
    />
  );
}
