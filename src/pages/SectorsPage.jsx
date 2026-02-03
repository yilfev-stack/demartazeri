import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { industries, clients, clientsSection, ui } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const SectorsPage = () => {
  const { locale, t } = useLanguage();

  const routes = ROUTE_MAP?.[locale] || ROUTE_MAP?.tr;
  const industryList = industries?.[locale];
  const clientSection = clientsSection?.[locale];
  const text = ui?.[locale];

  const hasContent = Boolean(industryList && clientSection && text);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('Sektörler', 'Industries', 'Sənayelər')}
                </h1>
                <p className="text-white/90 text-lg">
                  {t(
                    'Sofis ürünleri proses ve enerji, kimya, EPC yüklenicileri, tank depolama, su endüstrisi ve yenilenebilir enerji sektörlerindeki şirketler tarafından kullanılır.',
                    'Sofis products are used by companies in process & energy, chemical, EPC contractors, tank storage, water industry and renewable energy sectors.',
                    'Sofis məhsulları proses və enerji, kimya, EPC podratçıları, tank saxlama, su sənayesi və bərpa olunan enerji sektorundakı şirkətlər tərəfindən istifadə olunur.'
                  )}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Industries */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industryList.map((industry) => (
                  <div
                    key={industry.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {industry.description}
                      </p>
                      <Link
                        to={industry.link}
                        className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline"
                      >
                        {t(
                          `${industry.name} sayfasına git`,
                          `Go to ${industry.name}`,
                          `${industry.name} səhifəsinə keç`
                        )}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* References */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Üst çizgi */}
            <div className="border-t border-gray-200 mb-10"></div>

            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {text.references}
                </h2>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  {clientSection.description}
                </p>
              </>
            )}

            <div className="flex flex-wrap justify-center items-center gap-8">
              {clients.map((client, index) => (
                <div key={index} className="text-gray-500 font-semibold text-sm">
                  {client.name}
                </div>
              ))}
            </div>

            {/* Alt çizgi */}
            <div className="border-t border-gray-200 mt-10"></div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  {t(
                    'Sektörünüz için çözümlerimiz hakkında daha fazla bilgi alın',
                    'Learn more about our solutions for your industry',
                    'Sənayeniz üçün həllərimiz barədə daha çox məlumat alın'
                  )}
                </p>

                <Link
                  to={routes.contact}
                  className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                >
                  {t('Bizimle İletişime Geçin', 'Contact Us', 'Bizimlə Əlaqə')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SectorsPage;
