import { useEffect } from "react";

const FaqSchema = ({ items }) => {
  useEffect(() => {
    const scriptId = "faq-schema";
    const existing = document.getElementById(scriptId);
    if (!items || items.length === 0) {
      if (existing) {
        existing.remove();
      }
      return undefined;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = existing || document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.text = JSON.stringify(schema);

    if (!existing) {
      document.head.appendChild(script);
    }

    return () => {
      const current = document.getElementById(scriptId);
      if (current) {
        current.remove();
      }
    };
  }, [items]);

  return null;
};

export default FaqSchema;
