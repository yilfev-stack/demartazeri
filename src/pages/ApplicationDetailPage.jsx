import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { applications, products } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const ApplicationDetailPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP?.[locale] || ROUTE_MAP?.tr;

  const isTrOrAz = locale === 'tr' || locale === 'az';

  const text = {
    breadcrumbHome: isTrOrAz ? 'Ana Səhifə' : 'Home',
    breadcrumbApps: isTrOrAz ? 'Tətbiqlər' : 'Applications',
    notFoundTitle: isTrOrAz ? 'Tətbiq Tapılmadı' : 'Application Not Found',
    backToApps: isTrOrAz ? 'Tətbiqlərə Qayıt' : 'Back to Applications',
    badge: isTrOrAz ? 'Tətbiq' : 'Application',
    benefitsTitle: isTrOrAz ? 'Bu tətbiq üçün həllərimiz:' : 'Solutions for this application:',
    benefits: [
      t(
        'Vana kilitleme sistemleriyle güvenli operasyon',
        'Safe operations with valve interlocks',
        'Vana kilidləmə sistemləri ilə təhlükəsiz əməliyyat'
      ),
      t(
        'Taşınabilir aktüatörlerle hızlı vana işletme',
        'Fast valve operation with portable actuators',
        'Daşınan aktuatorlarla sürətli vana işlətmə'
      ),
      t(
        'Uzaktan vana operatörleriyle güvenli erişim',
        'Safe access with remote valve operators',
        'Uzaqdan vana operatorları ilə təhlükəsiz giriş'
      ),
      t(
        'Vana pozisyon göstergesi ile gerçek zamanlı izleme',
        'Real-time visibility with position indicators',
        'Vana pozisiya göstəriciləri ilə real vaxt izləmə'
      )
    ],
    contactCta: t('Uzman Desteği Alın', 'Get Expert Support', 'Mütəxəssis Dəstəyi Alın'),
    relatedProducts: t('İlgili Ürünler', 'Related Products', 'Əlaqəli Məhsullar'),
    relatedApps: t('Diğer Uygulamalar', 'Other Applications', 'Digər Tətbiqlər'),
    backAll: t('Tüm Uygulamalara Dön', 'Back to All Applications', 'Bütün Tətbiqlərə Qayıt')
  };

  // Find the application by slug
  const languageApplications = applications?.[locale];
  const hasContent = Array.isArray(languageApplications) && languageApplications.length > 0;

  const application = languageApplications?.find((app) => {
    const link = app?.link || '';
    return link.endsWith(`/${slug}`);
  });

  const getSlugFromLink = (link) => (link || '').split('/').pop();

  if (!hasContent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <TranslationNotice locale={locale} />
        </main>
        <Footer />
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{text.notFoundTitle}</h1>
            <Link to={routes.applications} className="text-[#00a0e3] hover:underline">
              {text.backToApps}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related applications
  const relatedApps = languageApplications
    .filter((app) => app.id !== application.id)
    .slice(0, 3);

  // Get relevant products
  const allProducts = (products?.[locale]?.categories || [])
    .flatMap((cat) => cat.items)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Breadcrumb */}
        <section className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link to={routes.home} className="hover:text-[#00a0e3]">
                {text.breadcrumbHome}
              </Link>
              <span className="mx-2">/</span>
              <Link to={routes.applications} className="hover:text-[#00a0e3]">
                {text.breadcrumbApps}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 line-clamp-1">{application.title}</span>
            </div>
          </div>
        </section>

        {/* Application Hero */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img
                  src={application.image}
                  alt={application.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div>
                <span className="text-[#00a0e3] text-sm font-medium">{text.badge}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  {application.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {application.description}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">{text.benefitsTitle}</h3>
                  <div className="space-y-3">
                    {text.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={routes.contact}
                  className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                >
                  {text.contactCta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Products */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{text.relatedProducts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allProducts.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Applications */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{text.relatedApps}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedApps.map((app) => (
                <Link
                  key={app.id}
                  to={`${routes.applications}/${getSlugFromLink(app.link)}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img src={app.image} alt={app.title} className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors leading-tight">
                      {app.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={routes.applications} className="inline-flex items-center text-[#00a0e3] hover:underline">
              <ArrowLeft className="mr-2 w-5 h-5" />
              {text.backAll}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationDetailPage;
