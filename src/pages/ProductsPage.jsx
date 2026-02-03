import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/translations';
import TranslationNotice from '../components/TranslationNotice';

const ProductsPage = () => {
  const { locale, t } = useLanguage();
  const productData = products?.[locale];
  const hasContent = Boolean(productData);
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';

  const quickLinks = (productData.categories || []).flatMap((category) =>
    category.items.map((product) => ({
      ...product,
      categoryName: category.name,
    }))
  );

  const getAnchorId = (link, fallbackId) => {
    if (!link) return fallbackId ? `product-${fallbackId}` : undefined;
    const parts = link.split('/').filter(Boolean);
    return parts[parts.length - 1] || (fallbackId ? `product-${fallbackId}` : undefined);
  };

  const handleScroll = (anchorId) => {
    if (!anchorId) return;
    const element = document.getElementById(anchorId);
    if (element) {
      const yOffset = -120; // header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px] bg-gray-50">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {productData.pageTitle}
                </h1>
                <p className="text-white/90 max-w-3xl text-sm md:text-base">
                  {t(
                    'Sofis ürün portföyündeki tüm vana kilidi, taşınabilir aktüatör ve vana izleme çözümlerini Demart güvencesiyle tek bir sayfada keşfedin.',
                    'Explore the full Sofis portfolio of valve interlocks, portable actuators and valve monitoring solutions on one overview page, supported by Demart Engineering.',
                    'Sofis məhsul portfelindəki bütün vana kilidləri, portativ aktuatorlar və vana izləmə həllərini Demart güvəncəsi ilə bir səhifədə kəşf edin.'
                  )}
                </p>
              </>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {productData.pageTitle}
            </h1>
            <p className="text-white/90 max-w-3xl text-sm md:text-base">
              {isTrOrAz
                ? 'Sofis ürün portföyündeki tüm vana kilidi, taşınabilir aktüatör ve vana izleme çözümlerini Demart güvencesiyle tek bir sayfada keşfedin.'
                : 'Explore the full Sofis portfolio of valve interlocks, portable actuators and valve monitoring solutions on one overview page, supported by Demart Engineering.'}
            </p>
          </div>
        </section>

        {/* Products with quick links layout */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile quick links */}
            <div className="mb-8 lg:hidden">
              <QuickLinks
                products={quickLinks}
                getAnchorId={getAnchorId}
                onSelect={handleScroll}
              />
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Main content */}
              <div className="lg:col-span-3 space-y-12">
                {!hasContent ? (
                  <TranslationNotice locale={locale} />
                ) : (
                  (productData.categories || []).map((category) => (
                    <section key={category.id} className="space-y-6">
                      <header>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                          {category.name}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center">
                          {category.description}
                        </p>
                      </header>

                      <div className="space-y-6">
                        {category.items.map((product) => {
                          const anchorId = getAnchorId(product.link, product.id);
                          return (
                            <article
                              key={product.id}
                              id={anchorId}
                              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                            >
                              <div className="md:w-1/3">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-56 md:h-full object-cover"
                                />
                              </div>
                              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    {product.name}
                                  </h3>
                                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    {product.description}
                                  </p>
                                </div>
                                <div>
                                  <Link
                                    to={product.link}
                                    className="inline-flex items-center text-[#00a0e3] font-semibold text-sm md:text-base hover:underline"
                                  >
                                    {t(
                                      `${product.name} sayfasına git`,
                                      `Go to ${product.name}`,
                                      `${product.name} səhifəsinə keç`
                                    )}
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                  </Link>
                                </div>
                              <div>
                                <Link
                                  to={product.link}
                                  className="inline-flex items-center text-[#00a0e3] font-semibold text-sm md:text-base hover:underline"
                                >
                                  {isTrOrAz
                                    ? `${product.name} sayfasına git`
                                    : `Go to ${product.name}`}
                                  <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  ))
                )}
              </div>

              {/* Desktop quick links */}
              <div className="hidden lg:block lg:col-span-1 lg:pl-6">
                <div className="sticky top-32">
                  <QuickLinks
                    products={quickLinks}
                    getAnchorId={getAnchorId}
                    onSelect={handleScroll}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const QuickLinks = ({ products, getAnchorId, onSelect }) => {
  const { t } = useLanguage();
  const title = t('Hızlı Ürün Linkleri', 'Quick Product Links', 'Sürətli Məhsul Linkləri');
  const subtitle = t(
    'İlgilendiğiniz ürüne tek tıkla ulaşın.',
    'Jump directly to the product you are looking for.',
    'Maraqladığınız məhsula bir kliklə keçin.'
  );
const QuickLinks = ({ products, language, getAnchorId, onSelect }) => {
  const title = isTrOrAz ? 'Hızlı Ürün Linkləri' : 'Quick Product Links';
  const subtitle =
    isTrOrAz
      ? 'Maraqladığınız məhsula bir kliklə keçin.'
      : 'Jump directly to the product you are looking for.';

  return (
    <aside className="bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-2xl shadow-lg p-5 md:p-6">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-xs text-slate-200/80 mb-4 leading-relaxed">{subtitle}</p>
      <div className="space-y-1 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
        {products.map((product) => {
          const anchorId = getAnchorId(product.link, product.id);
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => onSelect(anchorId)}
              className="w-full text-left text-xs md:text-sm px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition flex items-center justify-between gap-2"
            >
              <span className="truncate">{product.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ProductsPage;
