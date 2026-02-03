import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import FaqSchema from "../components/FaqSchema";
import { useLanguage } from "../context/LanguageContext";
import { getAllFaqs } from "../data/faqData";
import TranslationNotice from "../components/TranslationNotice";

const FaqPage = () => {
  const { locale, t } = useLanguage();
  const faqs = getAllFaqs(locale);

  const schemaItems = faqs.flatMap((faq) => faq.items);
  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-[104px]">
        <section className="bg-gray-900 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {hasFaqs ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {t(
                    "Sıkça Sorulan Sorular",
                    "Frequently Asked Questions",
                    "Tez-tez Verilən Suallar"
                  )}
                </h1>
                <p className="mt-4 text-gray-300">
                  {t(
                    "Ürünlerimizle ilgili en sık sorulan soruların yanıtları.",
                    "Answers to the most common questions about our products.",
                    "Məhsullarımızla bağlı ən çox verilən sualların cavabları."
                  )}
                </p>
              </>
            ) : (
              <TranslationNotice locale={locale} />
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {!hasFaqs ? (
              <TranslationNotice locale={locale} />
            ) : (
              faqs.map((faq) => (
                <details
                  key={faq.slug}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {faq.image && (
                        <img
                          src={faq.image}
                          alt={faq.title}
                          className="h-12 w-12 rounded-full border border-gray-200 object-cover"
                        />
                      )}
                      <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                          {faq.title}
                        </h2>
                        <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {t("En çok sorulanlar", "Most asked", "Ən çox soruşulanlar")}
                        </div>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 text-sm font-medium text-[#00a0e3]">
                      {t("Sorular", "Questions", "Suallar")}
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#00a0e3] transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </span>
                  </summary>

                  <div className="mt-6 space-y-6">
                    {faq.scopeNote && <p className="text-gray-600">{faq.scopeNote}</p>}

                    <FaqAccordion
                      items={faq.items}
                      headingTag="h3"
                      defaultOpenAll
                      closeLabel={t("Kapat", "Close", "Bağla")}
                    />
                  </div>
                </details>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
      <FaqSchema items={schemaItems} />
    </div>
  );
};

export default FaqPage;
