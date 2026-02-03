import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';
import FaqSchema from '../components/FaqSchema';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Shield, AlertTriangle, Clock, Award,
  Lock, Repeat, Wrench, ThumbsUp, Database, BarChart, Users, FileText,
  GitBranch, RotateCcw, Layers, CheckSquare, Zap, Heart, DollarSign, Battery,
  Move, ShieldCheck, Compass, Settings, Monitor, Bell, Activity, Maximize,
  Phone, Mail, Download, Play, ChevronRight, Star, Building2, Cog
} from 'lucide-react';
import { productDetails } from '../data/productDetails';
import { products, companyInfo } from '../data/translations';
import { getFaqBySlug } from '../data/faqData';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

// UI Texts for both languages
const uiTexts = {
  tr: {
    allProducts: "Tüm Ürünler",
    productNotFound: "Ürün Bulunamadı",
    backToProducts: "Ürünlere Dön",
    getQuote: "Teklif Alın",
    viewDetails: "Detayları İnceleyin",
    whyProduct: "Neden",
    keyBenefits: "Operasyonlarınızı dönüştürecek temel avantajlar",
    productVariants: "Ürün Çeşitleri",
    solutionsForEveryNeed: "Her ihtiyaca uygun çözümler",
    getDetailedInfo: "Detaylı Bilgi Alın",
    components: "Bileşenler",
    highQualityParts: "Yüksek kaliteli parçalardan oluşan eksiksiz sistem",
    mountingKits: "Montaj ve Reaksiyon Kit Konfigürasyonları",
    mountingKitsDesc: "Tercih ettiğiniz kiti seçmek için önce vananızın yükselen mili olup olmadığını kontrol edin.",
    customersSay: "Müşterilerimiz Ne Diyor?",
    technicalSpecs: "Teknik Özellikler",
    applicationAreas: "Uygulama Alanları",
    gallery: "Galeri",
    trustedByLeaders: "Dünya genelinde lider şirketler tarafından tercih edilmektedir",
    getInfoAbout: "Hakkında Bilgi Alın",
    expertTeamReady: "Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümü sunmak için hazır.",
    requestQuote: "Teklif Talep Edin",
    callNow: "Hemen Arayın",
    requestFreeDemo: "Ücretsiz Demo Talep Edin",
    faqTitle: "Sıkça Sorulan Sorular"
  },
  en: {
    allProducts: "All Products",
    productNotFound: "Product Not Found",
    backToProducts: "Back to Products",
    getQuote: "Get Quote",
    viewDetails: "View Details",
    whyProduct: "Why",
    keyBenefits: "Key benefits to transform your operations",
    productVariants: "Product Variants",
    solutionsForEveryNeed: "Solutions for every need",
    getDetailedInfo: "Get Detailed Info",
    components: "Components",
    highQualityParts: "Complete system made of high-quality parts",
    mountingKits: "Mounting and Reaction Kit Configurations",
    mountingKitsDesc: "First check if your valve has a rising stem to choose your preferred kit.",
    customersSay: "What Our Customers Say?",
    technicalSpecs: "Technical Specifications",
    applicationAreas: "Application Areas",
    gallery: "Gallery",
    trustedByLeaders: "Trusted by leading companies worldwide",
    getInfoAbout: "Get Information About",
    expertTeamReady: "Our expert team is ready to provide the most suitable solution for your needs.",
    requestQuote: "Request Quote",
    callNow: "Call Now",
    requestFreeDemo: "Request Free Demo",
    faqTitle: "Frequently Asked Questions"
  }
};

const iconMap = {
  Shield, AlertTriangle, Clock, Award, Lock, Repeat, Wrench, ThumbsUp,
  Database, BarChart, Users, FileText, GitBranch, RotateCcw, Layers,
  CheckSquare, Zap, Heart, DollarSign, Battery, Move, ShieldCheck,
  Compass, Settings, Monitor, Bell, Activity, Maximize, CheckCircle,
  Building2, Cog
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const uiText = uiTexts?.[locale];
  const company = companyInfo?.[locale];
  const productCategories = products?.[locale]?.categories;
  const closeLabel = t('Kapat', 'Close', 'Bağla');
  const [isVisible, setIsVisible] = useState({});
  const [activeImage, setActiveImage] = useState(0);
  
  // Get detailed product data with language support
  const productData = productDetails[slug];
  const faqData = getFaqBySlug(slug, locale);
  
  // Combine base data with language-specific content
  const localizedProductData = productData?.[locale];
  const product = localizedProductData ? {
    ...productData,
    ...localizedProductData,
    gallery: productData.gallery,
    references: productData.references,
    heroImage: productData.heroImage
  } : null;
  
  // Fallback to basic product data if detailed not found
  let basicProduct = null;
  
  if (!product && productCategories) {
    for (const cat of productCategories) {
      const found = cat.items.find(item => item.link === `${routes.products}/${slug}`);
      if (found) {
        basicProduct = found;
        break;
      }
    }
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [product]);

  if (!uiText || !company || !productCategories) {
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

  if (!product && !basicProduct) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{uiText.productNotFound}</h1>
            <Link to={routes.products} className="text-[#00a0e3] hover:underline">{uiText.backToProducts}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // If we only have basic product data, show simplified version
  if (!product && basicProduct) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px]">
          <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to={routes.products} className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {uiText.backToProducts}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{basicProduct.name}</h1>
              <p className="text-xl text-white/80 max-w-2xl">{basicProduct.description}</p>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <img src={basicProduct.image} alt={basicProduct.name} className="w-full rounded-2xl shadow-2xl" />
            </div>
          </section>
          {faqData && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center gap-4">
                  {faqData.image && (
                    <img
                      src={faqData.image}
                      alt={faqData.title || uiText.faqTitle}
                      className="h-12 w-12 rounded-full border border-gray-200 object-cover"
                    />
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {uiText.faqTitle}
                  </h2>
                </div>
                {faqData.scopeNote && (
                  <p className="text-gray-600 mb-6">{faqData.scopeNote}</p>
                )}
                <FaqAccordion
                  items={faqData.items}
                  defaultOpenAll
                  closeLabel={closeLabel}
                />
              </div>
            </section>
          )}
        </main>
        <Footer />
        {faqData && <FaqSchema items={faqData.items} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[104px]">
        
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={product.heroImage} 
              alt={product.name}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <Link 
              to={routes.products} 
              className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-all duration-300 hover:translate-x-[-4px]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {uiText.allProducts}
            </Link>
            
            <div className="max-w-4xl">
              <p className="text-[#00a0e3] font-medium mb-4 tracking-wide uppercase animate-fade-in">
                {product.tagline}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
                {product.heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Link 
                  to={routes.contact} 
                  className="inline-flex items-center px-8 py-4 bg-[#00a0e3] text-white font-semibold rounded-full hover:bg-[#0090d0] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00a0e3]/30"
                >
                  {uiText.getQuote}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="#detaylar" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  {uiText.viewDetails}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll-down" />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="detaylar" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="intro-section"
              className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible['intro-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {product.introduction.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.introduction.content}
                </p>
                <Link 
                  to={routes.contact}
                  className="inline-flex items-center text-[#00a0e3] font-semibold hover:underline"
                >
                  {uiText.requestFreeDemo}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={product.introduction.image} 
                  alt={product.introduction.title}
                  className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00a0e3]/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Card Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              id="benefits-title"
              className={`animate-on-scroll text-center mb-16 transition-all duration-1000 ${isVisible['benefits-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {uiText.whyProduct} {product.name.split(' ')[0]}?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {uiText.keyBenefits}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || CheckCircle;
                return (
                  <div 
                    key={index}
                    id={`benefit-${index}`}
                    className={`animate-on-scroll bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible[`benefit-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-[#00a0e3]/10 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-[#00a0e3]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products/Variants Section */}
        {product.products && product.products.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div 
                id="products-title"
                className={`animate-on-scroll text-center mb-16 transition-all duration-1000 ${isVisible['products-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {uiText.productVariants}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {uiText.solutionsForEveryNeed}
                </p>
              </div>

              <div className="space-y-16">
                {product.products.map((item, index) => (
                  <div 
                    key={index}
                    id={`product-item-${index}`}
                    className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible[`product-item-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="rounded-2xl shadow-lg w-full transform hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h3>
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      <p className="text-gray-500 mb-6">{item.details}</p>
                      <Link 
                        to={routes.contact}
                        className="inline-flex items-center text-[#00a0e3] font-semibold hover:underline"
                      >
                        {uiText.getDetailedInfo}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Components Section (for products like Power Wrench) */}
        {product.components && product.components.length > 0 && (
          <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{uiText.components}</h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  {uiText.highQualityParts}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.components.map((component, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <img 
                      src={component.image} 
                      alt={component.name}
                      className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <h3 className="text-xl font-bold mb-2">{component.name}</h3>
                    <p className="text-white/70">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mounting Kits (for EasiDrive) */}
        {product.mountingKits && product.mountingKits.length > 0 && (
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {uiText.mountingKits}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {uiText.mountingKitsDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.mountingKits.map((kit, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <img 
                      src={kit.image} 
                      alt={kit.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{kit.name}</h3>
                      <p className="text-gray-600 text-sm">{kit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {product.testimonials && product.testimonials.length > 0 && (
          <section className="py-24 bg-[#00a0e3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {uiText.customersSay}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white text-lg mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white font-bold">{testimonial.author}</p>
                      <p className="text-white/70 text-sm">{testimonial.title}</p>
                      <p className="text-white/70 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specifications Section */}
        {product.specifications && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    {uiText.technicalSpecs}
                  </h2>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-4 border-b border-gray-200"
                      >
                        <span className="text-gray-600 font-medium">{key}</span>
                        <span className="text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                {product.applications && (
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                      {uiText.applicationAreas}
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {product.applications.map((app, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <CheckCircle className="w-6 h-6 text-[#00a0e3] mr-4 flex-shrink-0" />
                          <span className="text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {product.gallery && product.gallery.length > 1 && (
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                {uiText.gallery}
              </h2>
              
              <div className="mb-8">
                <img 
                  src={product.gallery[activeImage]} 
                  alt={`${product.name} - ${activeImage + 1}`}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="flex gap-4 justify-center overflow-x-auto pb-4">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${activeImage === index ? 'ring-4 ring-[#00a0e3] scale-105' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* References Section */}
        {product.references && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 mb-8 text-lg">
                {uiText.trustedByLeaders}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {product.references.map((ref, index) => (
                  <span key={index} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqData && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-center gap-4">
                {faqData.image && (
                  <img
                    src={faqData.image}
                    alt={faqData.title || uiText.faqTitle}
                    className="h-12 w-12 rounded-full border border-gray-200 object-cover"
                  />
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {uiText.faqTitle}
                </h2>
              </div>
              {faqData.scopeNote && (
                <p className="text-gray-600 mb-6">{faqData.scopeNote}</p>
              )}
              <FaqAccordion
                items={faqData.items}
                defaultOpenAll
                closeLabel={closeLabel}
              />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {product.name} {uiText.getInfoAbout}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {uiText.expertTeamReady}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to={routes.contact}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00a0e3] text-white font-semibold rounded-full hover:bg-[#0090d0] transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                {uiText.requestQuote}
              </Link>
              <a 
                href={`tel:${company.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                {uiText.callNow}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      {faqData && <FaqSchema items={faqData.items} />}

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes scroll-down {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
