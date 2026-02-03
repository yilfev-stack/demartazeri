import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { solutions, products } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const SolutionDetailPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const labels = {
    breadcrumbHome: t('Ana Sayfa', 'Home', 'Ana Səhifə'),
    breadcrumbSolutions: t('Çözümler', 'Solutions', 'Həllər'),
    notFoundTitle: t('Çözüm Bulunamadı', 'Solution Not Found', 'Həll Tapılmadı'),
    backToSolutions: t('Çözümlere Dön', 'Back to Solutions', 'Həllərə Qayıt'),
    badge: t('Çözüm', 'Solution', 'Həll'),
    benefitsTitle: t('Bu çözümün faydaları:', 'Benefits of this solution:', 'Bu həllin üstünlükləri:'),
    benefitItems: [
      t('İnsan hatası riskini minimize eder', 'Minimizes the risk of human error', 'İnsan xətası riskini minimuma endirir'),
      t('Operasyonel güvenliği artırır', 'Improves operational safety', 'Əməliyyat təhlükəsizliyini artırır'),
      t('Mevzuat uyumluluğu sağlar', 'Ensures regulatory compliance', 'Normativ uyğunluğu təmin edir'),
      t('Bakım ve işletme maliyetlerini azaltır', 'Reduces maintenance and operating costs', 'Baxım və istismar xərclərini azaldır')
    ],
    cta: t('Detay Talep Edin', 'Request Details', 'Ətraflı Məlumat Alın'),
    relatedProducts: t('Bu Çözüm için Ürünlerimiz', 'Products for This Solution', 'Bu Həll üçün Məhsullarımız'),
    relatedSolutions: t('Diğer Çözümler', 'Other Solutions', 'Digər Həllər'),
    backAll: t('Tüm Çözümlere Dön', 'Back to All Solutions', 'Bütün Həllərə Qayıt')
  };

  const solutionList = solutions?.[locale];
  const productList = products?.[locale]?.categories;
  const hasContent = Boolean(solutionList && productList);

  // Find the solution by slug

  const solution = solutionList?.find(sol => sol.link.endsWith(`/${slug}`));
  const getSlugFromLink = (link) => link.split('/').pop();

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

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{labels.notFoundTitle}</h1>
            <Link to={routes.solutions} className="text-[#00a0e3] hover:underline">{labels.backToSolutions}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related solutions
  const relatedSolutions = solutionList.filter(sol => sol.id !== solution.id).slice(0, 3);

  // Get relevant products
  const allProducts = productList.flatMap(cat => cat.items).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Breadcrumb */}
        <section className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link to={routes.home} className="hover:text-[#00a0e3]">{labels.breadcrumbHome}</Link>
              <span className="mx-2">/</span>
              <Link to={routes.solutions} className="hover:text-[#00a0e3]">{labels.breadcrumbSolutions}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 line-clamp-1">{solution.title}</span>
            </div>
          </div>
        </section>

        {/* Solution Hero */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <span className="text-[#00a0e3] text-sm font-medium">{labels.badge}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">{solution.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{solution.description}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">{labels.benefitsTitle}</h3>
                  <div className="space-y-3">
                    {labels.benefitItems.map((item) => (
                      <div key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={routes.contact} 
                  className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                >
                  {labels.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{labels.relatedProducts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allProducts.map((item) => (
                <Link key={item.id} to={item.link} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{labels.relatedSolutions}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedSolutions.map((sol) => (
                <Link key={sol.id} to={`${routes.solutions}/${getSlugFromLink(sol.link)}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <img src={sol.image} alt={sol.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">{sol.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{sol.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={routes.solutions} className="inline-flex items-center text-[#00a0e3] hover:underline">
              <ArrowLeft className="mr-2 w-5 h-5" />
              {labels.backAll}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionDetailPage;
