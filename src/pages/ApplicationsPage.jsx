import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { applications, ui } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const ApplicationsPage = () => {
  const { locale, t } = useLanguage();

  const routes = ROUTE_MAP?.[locale] || ROUTE_MAP?.tr;
  const appList = applications?.[locale] || [];
  const text = ui?.[locale] || {};
  const hasApps = Array.isArray(appList) && appList.length > 0;

  const [activeApp, setActiveApp] = useState(null);

  const galleryImages = useMemo(
    () => [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg'
    ],
    []
  );

  const closeLabel = t('Bağla', 'Close', 'Bağla');

  const getSlugFromLink = (link) => (link || '').split('/').pop();
  const openPreview = (app) => setActiveApp(app);
  const closePreview = () => setActiveApp(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasApps ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('Uygulamalar', 'Applications', 'Tətbiqlər')}
                </h1>
                <p className="text-white/90 text-lg">
                  {t(
                    'Sofis ürünleri ve çözümleri, güvenli vana operasyonları sağlamak ve verimliliği artırmak için birçok uygulamada kullanılır.',
                    'Sofis products and solutions are used in many applications to ensure safe valve operations and increase efficiency.',
                    'Sofis məhsulları və həlləri təhlükəsiz vana əməliyyatlarını təmin etmək və səmərəliliyi artırmaq üçün bir çox tətbiqdə istifadə olunur.'
                  )}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Applications */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#00a0e3] font-semibold">
                  {t(
                    'Kritik prosesler için uygulama senaryoları',
                    'Application scenarios for critical processes',
                    'Kritik proseslər üçün tətbiq ssenariləri'
                  )}
                </p>
                <p className="text-gray-700 text-sm md:text-base max-w-2xl mt-1">
                  {t(
                    'Aşağıdaki uygulama örnekleri, Sofis çözümlerinin sahada hangi riskleri ortadan kaldırdığını ve proseslerinizi nasıl koruduğunu gösterir.',
                    'The application examples below show which real-world risks Sofis solutions eliminate in the field and how they protect your processes.',
                    'Aşağıdakı tətbiq nümunələri Sofis həllərinin real sahədə hansı riskləri aradan qaldırdığını və proseslərinizi necə qoruduğunu göstərir.'
                  )}
                </p>
              </div>
            </div>

            {!hasApps ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appList.map((app) => (
                  <div
                    key={app.id}
                    className="relative bg-white rounded-xl shadow-sm overflow-hidden group border border-gray-100 hover:border-[#00a0e3]/40 hover:shadow-xl transition-all duration-200"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-5 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#00a0e3]/80">
                          {t('Uygulama', 'Application', 'Tətbiq')}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          #{app.id.toString().padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#00a0e3] transition-colors">
                        {app.title}
                      </h3>

                      <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed line-clamp-4">
                        {app.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                        <Link
                          to={`${routes.applications}/${getSlugFromLink(app.link)}`}
                          className="inline-flex items-center text-[#00a0e3] font-medium text-xs md:text-sm hover:underline"
                        >
                          {text?.viewApplications || t('Detay', 'Details', 'Detallar')}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => openPreview(app)}
                          className="inline-flex items-center text-gray-500 text-xs md:text-sm hover:text-[#00a0e3]"
                        >
                          {t('Önizleme', 'Preview', 'Önizləmə')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Preview Modal */}
            {activeApp && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 px-4 py-8">
                <div className="relative w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl max-h-[90vh]">
                  <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#00a0e3] font-semibold">
                        {t('Uygulama Önizlemesi', 'Application Preview', 'Tətbiq Önizləməsi')}
                      </p>
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {activeApp.title}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={closePreview}
                      className="rounded-full border border-gray-200 p-2 text-gray-500 hover:text-gray-900"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <img
                        src={activeApp.image}
                        alt={activeApp.title}
                        className="h-56 w-full rounded-xl object-cover"
                      />
                      <img
                        src={galleryImages[(activeApp.id - 1) % galleryImages.length]}
                        alt={activeApp.title}
                        className="h-40 w-full rounded-xl object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {activeApp.description}
                      </p>

                      <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600 space-y-2">
                        <p className="font-semibold text-gray-900">
                          {t('Bu uygulamada sağlanan faydalar', 'Benefits delivered', 'Bu tətbiqdə əldə olunan faydalar')}
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>{t('Operasyon güvenliğini standartlaştırır', 'Standardizes operational safety', 'Əməliyyat təhlükəsizliyini standartlaşdırır')}</li>
                          <li>{t('Yanlış vana sıralamasını önler', 'Prevents incorrect valve sequencing', 'Yanlış vana ardıcıllığını önləyir')}</li>
                          <li>{t('Saha personeli riskini azaltır', 'Reduces field personnel risk', 'Saha personalı riskini azaldır')}</li>
                          <li>{t('Duruş sürelerini kısaltır', 'Shortens plant shutdowns', 'Müəssisə dayanma müddətlərini qısaldır')}</li>
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          to={activeApp.link}
                          className="inline-flex items-center rounded-full bg-[#00a0e3] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0090d0]"
                        >
                          {t('Detayları Gör', 'View Details', 'Ətraflı Bax')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={closePreview}
                          className="inline-flex items-center rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-gray-900"
                        >
                          {closeLabel}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end border-t border-gray-100 px-6 py-4">
                    <button
                      type="button"
                      onClick={closePreview}
                      className="inline-flex items-center rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-gray-900"
                    >
                      {closeLabel}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationsPage;
