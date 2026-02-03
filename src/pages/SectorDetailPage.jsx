import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, Building2, Shield, Cog } from 'lucide-react';
import { industries, products, solutions } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const SectorDetailPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP?.[locale] || ROUTE_MAP?.tr;

  const labels = {
    breadcrumbHome: t('Ana Sayfa', 'Home', 'Ana Səhifə'),
    breadcrumbIndustries: t('Sektörler', 'Industries', 'Sənayelər'),
    notFoundTitle: t('Sektör Bulunamadı', 'Industry Not Found', 'Sənaye Tapılmadı'),
    backToIndustries: t('Sektörlere Dön', 'Back to Industries', 'Sənayelərə Qayıt'),
    highlightsTitle: t(
      'Sektörünüz için öne çıkan başlıklar',
      'Highlights for your industry',
      'Sənayeniz üçün önə çıxan mövzular'
    ),
    solutionSection: t('İçin Çözümlerimiz', 'Solutions for', 'Üçün Həllərimiz'),
    productsTitle: t('Önerilen Ürünler', 'Recommended Products', 'Tövsiyə olunan Məhsullar'),
    ctaTitle: t(
      'Sektörünüz için nasıl yardımcı olabiliriz?',
      'How Can We Help Your Industry?',
      'Sənayeniz üçün necə kömək edə bilərik?'
    ),
    ctaBody: t(
      'Uzman ekibimiz sektörünüze özel çözümler sunmaya hazır.',
      'Our expert team is ready to provide industry-specific solutions.',
      'Mütəxəssis komandamız sənayenizə xüsusi həllər təqdim etməyə hazırdır.'
    ),
    ctaButton: t('İletişime Geçin', 'Contact Us', 'Əlaqə Saxlayın'),
    relatedTitle: t('Diğer Sektörler', 'Other Industries', 'Digər Sənayelər'),
    backAll: t('Tüm Sektörlere Dön', 'Back to All Industries', 'Bütün Sənayelərə Qayıt'),
    featureSafety: t('Güvenlik', 'Safety', 'Təhlükəsizlik'),
    featureSafetyDesc: t(
      'İnsan hatası riskini minimize eden güvenlik çözümleri',
      'Safety solutions that minimize human error risk',
      'İnsan xətası riskini minimuma endirən təhlükəsizlik həlləri'
    ),
    featureEfficiency: t('Verimlilik', 'Efficiency', 'Səmərəlilik'),
    featureEfficiencyDesc: t(
      'Operasyonel verimliliği artıran akıllı çözümler',
      'Smart solutions that boost operational efficiency',
      'Əməliyyat səmərəliliyini artıran ağıllı həllər'
    ),
    featureCompliance: t('Uyumluluk', 'Compliance', 'Uyğunluq'),
    featureComplianceDesc: t(
      'Endüstri standartlarına ve düzenlemelere tam uyumluluk',
      'Full compliance with industry standards and regulations',
      'Sənaye standartlarına və tənzimləmələrə tam uyğunluq'
    )
  };

  const industryList = industries?.[locale];
  const productList = products?.[locale]?.categories;
  const solutionList = solutions?.[locale];
  const hasContent = Boolean(industryList && productList && solutionList);

  const getSlugFromLink = (link) => (link ? link.split('/').pop() : '');

  // Find the sector by slug
  const sector = industryList?.find((ind) => ind.link?.endsWith(`/${slug}`));

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

  if (!sector) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{labels.notFoundTitle}</h1>
            <Link to={routes.industries} className="text-[#00a0e3] hover:underline">
              {labels.backToIndustries}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related sectors
  const relatedSectors = industryList.filter((ind) => ind.id !== sector.id).slice(0, 3);

  // Get relevant products
  const allProducts = productList.flatMap((cat) => cat.items).slice(0, 4);

  // Get relevant solutions
  const relevantSolutions = solutionList.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="relative h-[400px]">
          <img src={sector.image} alt={sector.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex items-center text-sm text-white/80 mb-4">
                <Link to={routes.home} className="hover:text-white">
                  {labels.breadcrumbHome}
                </Link>
                <span className="mx-2">/</span>
                <Link to={routes.industries} className="hover:text-white">
                  {labels.breadcrumbIndustries}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">{sector.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{sector.name}</h1>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{sector.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="w-10 h-10 text-[#00a0e3] mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{labels.featureSafety}</h3>
                  <p className="text-gray-600 text-sm">{labels.featureSafetyDesc}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Cog className="w-10 h-10 text-[#00a0e3] mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{labels.featureEfficiency}</h3>
                  <p className="text-gray-600 text-sm">{labels.featureEfficiencyDesc}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Building2 className="w-10 h-10 text-[#00a0e3] mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{labels.featureCompliance}</h3>
                  <p className="text-gray-600 text-sm">{labels.featureComplianceDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions for this sector */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {sector.name} {labels.solutionSection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relevantSolutions.map((solution) => (
                <Link
                  key={solution.id}
                  to={`${routes.solutions}/${getSlugFromLink(solution.link)}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{solution.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{labels.productsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#00a0e3]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{labels.ctaTitle}</h2>
            <p className="text-white/90 mb-6">{labels.ctaBody}</p>
            <Link
              to={routes.contact}
              className="inline-flex items-center px-6 py-3 bg-white text-[#00a0e3] font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              {labels.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Sectors */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{labels.relatedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedSectors.map((ind) => (
                <Link
                  key={ind.id}
                  to={`${routes.industries}/${getSlugFromLink(ind.link)}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img src={ind.image} alt={ind.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{ind.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={routes.industries} className="inline-flex items-center text-[#00a0e3] hover:underline">
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

export default SectorDetailPage;
