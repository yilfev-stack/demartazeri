import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';
import { 
  FileText, FileImage, Award, Book, FileSpreadsheet, 
  Download, Search, Filter, ChevronRight, ExternalLink,
  Globe, Star
} from 'lucide-react';

const iconMap = {
  FileText,
  FileImage,
  Award,
  Book,
  FileSpreadsheet
};

const DocumentationPage = () => {
  const { locale } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const company = companyInfo?.[locale];
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const t = {
    tr: {
      title: "Dokümantasyon Merkezi",
      subtitle: "Ürün katalogları, teknik çizimler, sertifikalar ve kullanım kılavuzları",
      searchPlaceholder: "Döküman ara...",
      featured: "Öne Çıkan Dökümanlar",
      categories: "Kategoriler",
      allDocs: "Tüm Dökümanlar",
      docsFound: "döküman bulundu",
      requestDownload: "Talep Et / İndir",
      noDocsTitle: "Döküman Bulunamadı",
      noDocsDesc: "Arama kriterlerinize uygun döküman bulunamadı.",
      ctaTitle: "Aradığınız Dökümanı Bulamadınız mı?",
      ctaDesc: "Özel teknik döküman talepleri için bizimle iletişime geçin.",
      contact: "İletişime Geçin",
      docRequest: "Döküman Talebi",
      requestBody: "Merhaba,\n\nAşağıdaki dökümanı talep ediyorum:\n\nDöküman: {title}\nKategori: {category}\n\nLütfen benimle iletişime geçin.\n\nTeşekkürler."
    },
    en: {
      title: "Documentation Center",
      subtitle: "Product catalogs, technical drawings, certificates and user manuals",
      searchPlaceholder: "Search documents...",
      featured: "Featured Documents",
      categories: "Categories",
      allDocs: "All Documents",
      docsFound: "documents found",
      requestDownload: "Request / Download",
      noDocsTitle: "No Documents Found",
      noDocsDesc: "No documents match your search criteria.",
      ctaTitle: "Can't Find the Document You're Looking For?",
      ctaDesc: "Contact us for special technical document requests.",
      contact: "Contact Us",
      docRequest: "Document Request",
      requestBody: "Hello,\n\nI am requesting the following document:\n\nDocument: {title}\nCategory: {category}\n\nPlease contact me.\n\nThank you."
    },
    az: {
      title: "Dokümantasiya Mərkəzi",
      subtitle: "Məhsul kataloqları, texniki cizgilər, sertifikatlar və istifadəçi bələdçiləri",
      searchPlaceholder: "Sənəd axtarın...",
      featured: "Seçilmiş Sənədlər",
      categories: "Kateqoriyalar",
      allDocs: "Bütün Sənədlər",
      docsFound: "sənəd tapıldı",
      requestDownload: "Tələb Et / Yüklə",
      noDocsTitle: "Sənəd Tapılmadı",
      noDocsDesc: "Axtarış kriteriyalarınıza uyğun sənəd tapılmadı.",
      ctaTitle: "Axtardığınız Sənədi Tapmadınız?",
      ctaDesc: "Xüsusi texniki sənəd tələbləri üçün bizimlə əlaqə saxlayın.",
      contact: "Bizimlə Əlaqə",
      docRequest: "Sənəd Tələbi",
      requestBody: "Salam,\n\nAşağıdakı sənədi tələb edirəm:\n\nSənəd: {title}\nKateqoriya: {category}\n\nZəhmət olmasa mənimlə əlaqə saxlayın.\n\nTəşəkkürlər."
    }
  };

  const text = t?.[locale];

  const documentCategoriesByLocale = {
    tr: [
      { id: 'catalog', name: 'Ürün Katalogları', icon: 'Book' },
      { id: 'technical', name: 'Teknik Çizimler', icon: 'FileImage' },
      { id: 'certificate', name: 'Sertifikalar', icon: 'Award' },
      { id: 'manual', name: 'Kullanım Kılavuzları', icon: 'FileText' },
      { id: 'datasheet', name: 'Datasheetler', icon: 'FileSpreadsheet' }
    ],
    en: [
      { id: 'catalog', name: 'Product Catalogs', icon: 'Book' },
      { id: 'technical', name: 'Technical Drawings', icon: 'FileImage' },
      { id: 'certificate', name: 'Certificates', icon: 'Award' },
      { id: 'manual', name: 'User Manuals', icon: 'FileText' },
      { id: 'datasheet', name: 'Datasheets', icon: 'FileSpreadsheet' }
    ],
    az: [
      { id: 'catalog', name: 'Məhsul Kataloqları', icon: 'Book' },
      { id: 'technical', name: 'Texniki Çizgilər', icon: 'FileImage' },
      { id: 'certificate', name: 'Sertifikatlar', icon: 'Award' },
      { id: 'manual', name: 'İstifadəçi Bələdçiləri', icon: 'FileText' },
      { id: 'datasheet', name: 'Datasheetlər', icon: 'FileSpreadsheet' }
    ]
  };

  const documentsByLocale = {
    tr: [
      { id: 1, title: 'Sofis Vana Kilitleri Genel Kataloğu', category: 'catalog', fileType: 'PDF', fileSize: '8.5 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-1.jpg', description: 'Tüm Sofis vana kilitleri ürün hattı', featured: true },
      { id: 2, title: 'EasiDrive Taşınabilir Aktüatör', category: 'catalog', fileType: 'PDF', fileSize: '3.2 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-2.jpg', description: 'EasiDrive taşınabilir vana aktüatörü teknik detaylar', featured: true },
      { id: 3, title: 'FlexiDrive Uzaktan Vana Operatörü', category: 'catalog', fileType: 'PDF', fileSize: '2.8 MB', language: 'TR/EN', thumbnail: '/images/products/flexidrive.jpg', description: 'FlexiDrive uzaktan vana işletme sistemi', featured: true },
      { id: 4, title: 'VPI Pozisyon Göstergesi Kataloğu', category: 'catalog', fileType: 'PDF', fileSize: '1.9 MB', language: 'TR/EN', thumbnail: '/images/products/vpi.jpg', description: 'Vana pozisyon göstergeleri ürün serisi', featured: true },
      { id: 5, title: 'Smith Interlock Teknik Çizimleri', category: 'technical', fileType: 'PDF', fileSize: '12.3 MB', language: 'EN', thumbnail: '/images/docs/technical.jpg', description: 'CAD formatında teknik çizimler' },
      { id: 6, title: 'ATEX/IECEx Sertifikası', category: 'certificate', fileType: 'PDF', fileSize: '450 KB', language: 'EN', thumbnail: '/images/docs/certificate-1.jpg', description: 'Patlayıcı ortam sertifikası' },
      { id: 7, title: 'ISO 9001:2015 Kalite Sertifikası', category: 'certificate', fileType: 'PDF', fileSize: '320 KB', language: 'EN', thumbnail: '/images/docs/certificate-2.jpg', description: 'Kalite yönetim sistemi sertifikası' },
      { id: 8, title: 'Vana Kilidi Kurulum Kılavuzu', category: 'manual', fileType: 'PDF', fileSize: '5.6 MB', language: 'TR', thumbnail: '/images/docs/manual.jpg', description: 'Adım adım kurulum talimatları' }
    ],
    en: [
      { id: 1, title: 'Sofis Valve Interlocks General Catalog', category: 'catalog', fileType: 'PDF', fileSize: '8.5 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-1.jpg', description: 'Complete Sofis valve interlocks product range', featured: true },
      { id: 2, title: 'EasiDrive Portable Actuator', category: 'catalog', fileType: 'PDF', fileSize: '3.2 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-2.jpg', description: 'EasiDrive portable valve actuator technical details', featured: true },
      { id: 3, title: 'FlexiDrive Remote Valve Operator', category: 'catalog', fileType: 'PDF', fileSize: '2.8 MB', language: 'TR/EN', thumbnail: '/images/products/flexidrive.jpg', description: 'FlexiDrive remote valve operation system', featured: true },
      { id: 4, title: 'VPI Position Indicator Catalog', category: 'catalog', fileType: 'PDF', fileSize: '1.9 MB', language: 'TR/EN', thumbnail: '/images/products/vpi.jpg', description: 'Valve position indicator product series', featured: true },
      { id: 5, title: 'Smith Interlock Technical Drawings', category: 'technical', fileType: 'PDF', fileSize: '12.3 MB', language: 'EN', thumbnail: '/images/docs/technical.jpg', description: 'Technical drawings in CAD format' },
      { id: 6, title: 'ATEX/IECEx Certificate', category: 'certificate', fileType: 'PDF', fileSize: '450 KB', language: 'EN', thumbnail: '/images/docs/certificate-1.jpg', description: 'Explosive atmosphere certificate' },
      { id: 7, title: 'ISO 9001:2015 Quality Certificate', category: 'certificate', fileType: 'PDF', fileSize: '320 KB', language: 'EN', thumbnail: '/images/docs/certificate-2.jpg', description: 'Quality management system certificate' },
      { id: 8, title: 'Valve Interlock Installation Guide', category: 'manual', fileType: 'PDF', fileSize: '5.6 MB', language: 'TR', thumbnail: '/images/docs/manual.jpg', description: 'Step by step installation instructions' }
    ],
    az: [
      { id: 1, title: 'Sofis Vana Kilidləri Ümumi Kataloqu', category: 'catalog', fileType: 'PDF', fileSize: '8.5 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-1.jpg', description: 'Bütün Sofis vana kilidləri məhsul xətti', featured: true },
      { id: 2, title: 'EasiDrive Daşınan Aktuator', category: 'catalog', fileType: 'PDF', fileSize: '3.2 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-2.jpg', description: 'EasiDrive daşınan vana aktuatoru texniki detallar', featured: true },
      { id: 3, title: 'FlexiDrive Uzaqdan Vana Operatoru', category: 'catalog', fileType: 'PDF', fileSize: '2.8 MB', language: 'TR/EN', thumbnail: '/images/products/flexidrive.jpg', description: 'FlexiDrive uzaqdan vana işlətmə sistemi', featured: true },
      { id: 4, title: 'VPI Pozisiya Göstəricisi Kataloqu', category: 'catalog', fileType: 'PDF', fileSize: '1.9 MB', language: 'TR/EN', thumbnail: '/images/products/vpi.jpg', description: 'Vana pozisiya göstəriciləri məhsul seriyası', featured: true },
      { id: 5, title: 'Smith Interlock Texniki Çizgiləri', category: 'technical', fileType: 'PDF', fileSize: '12.3 MB', language: 'EN', thumbnail: '/images/docs/technical.jpg', description: 'CAD formatında texniki çizgilər' },
      { id: 6, title: 'ATEX/IECEx Sertifikatı', category: 'certificate', fileType: 'PDF', fileSize: '450 KB', language: 'EN', thumbnail: '/images/docs/certificate-1.jpg', description: 'Partlayıcı mühit sertifikatı' },
      { id: 7, title: 'ISO 9001:2015 Keyfiyyət Sertifikatı', category: 'certificate', fileType: 'PDF', fileSize: '320 KB', language: 'EN', thumbnail: '/images/docs/certificate-2.jpg', description: 'Keyfiyyət idarəetmə sistemi sertifikatı' },
      { id: 8, title: 'Vana Kilidi Quraşdırma Bələdçisi', category: 'manual', fileType: 'PDF', fileSize: '5.6 MB', language: 'TR', thumbnail: '/images/docs/manual.jpg', description: 'Addım-addım quraşdırma təlimatları' }
    ]
  };

  const documentCategories = documentCategoriesByLocale[locale];
  const documents = documentsByLocale[locale];
  const hasContent = Boolean(text && documentCategories && documents && company);
  const documentCategories = isTrOrAz ? [
    { id: 'catalog', name: 'Məhsul Kataloqları', icon: 'Book' },
    { id: 'technical', name: 'Texniki Çizgilər', icon: 'FileImage' },
    { id: 'certificate', name: 'Sertifikatlar', icon: 'Award' },
    { id: 'manual', name: 'İstifadəçi Bələdçiləri', icon: 'FileText' },
    { id: 'datasheet', name: 'Datasheetlər', icon: 'FileSpreadsheet' }
  ] : [
    { id: 'catalog', name: 'Product Catalogs', icon: 'Book' },
    { id: 'technical', name: 'Technical Drawings', icon: 'FileImage' },
    { id: 'certificate', name: 'Certificates', icon: 'Award' },
    { id: 'manual', name: 'User Manuals', icon: 'FileText' },
    { id: 'datasheet', name: 'Datasheets', icon: 'FileSpreadsheet' }
  ];

  const documents = isTrOrAz ? [
    { id: 1, title: 'Sofis Vana Kilidləri Ümumi Kataloqu', category: 'catalog', fileType: 'PDF', fileSize: '8.5 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-1.jpg', description: 'Bütün Sofis vana kilidləri məhsul xətti', featured: true },
    { id: 2, title: 'EasiDrive Daşınan Aktuator', category: 'catalog', fileType: 'PDF', fileSize: '3.2 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-2.jpg', description: 'EasiDrive daşınan vana aktuatoru texniki detallar', featured: true },
    { id: 3, title: 'FlexiDrive Uzaqdan Vana Operatoru', category: 'catalog', fileType: 'PDF', fileSize: '2.8 MB', language: 'TR/EN', thumbnail: '/images/products/flexidrive.jpg', description: 'FlexiDrive uzaqdan vana işlətmə sistemi', featured: true },
    { id: 4, title: 'VPI Pozisiya Göstəricisi Kataloqu', category: 'catalog', fileType: 'PDF', fileSize: '1.9 MB', language: 'TR/EN', thumbnail: '/images/products/vpi.jpg', description: 'Vana pozisiya göstəriciləri məhsul seriyası', featured: true },
    { id: 5, title: 'Smith Interlock Texniki Çizgiləri', category: 'technical', fileType: 'PDF', fileSize: '12.3 MB', language: 'EN', thumbnail: '/images/docs/technical.jpg', description: 'CAD formatında texniki çizgilər' },
    { id: 6, title: 'ATEX/IECEx Sertifikatı', category: 'certificate', fileType: 'PDF', fileSize: '450 KB', language: 'EN', thumbnail: '/images/docs/certificate-1.jpg', description: 'Partlayıcı mühit sertifikatı' },
    { id: 7, title: 'ISO 9001:2015 Keyfiyyət Sertifikatı', category: 'certificate', fileType: 'PDF', fileSize: '320 KB', language: 'EN', thumbnail: '/images/docs/certificate-2.jpg', description: 'Keyfiyyət idarəetmə sistemi sertifikatı' },
    { id: 8, title: 'Vana Kilidi Quraşdırma Bələdçisi', category: 'manual', fileType: 'PDF', fileSize: '5.6 MB', language: 'TR', thumbnail: '/images/docs/manual.jpg', description: 'Addım-addım quraşdırma təlimatları' }
  ] : [
    { id: 1, title: 'Sofis Valve Interlocks General Catalog', category: 'catalog', fileType: 'PDF', fileSize: '8.5 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-1.jpg', description: 'Complete Sofis valve interlocks product range', featured: true },
    { id: 2, title: 'EasiDrive Portable Actuator', category: 'catalog', fileType: 'PDF', fileSize: '3.2 MB', language: 'TR/EN', thumbnail: '/images/docs/catalog-2.jpg', description: 'EasiDrive portable valve actuator technical details', featured: true },
    { id: 3, title: 'FlexiDrive Remote Valve Operator', category: 'catalog', fileType: 'PDF', fileSize: '2.8 MB', language: 'TR/EN', thumbnail: '/images/products/flexidrive.jpg', description: 'FlexiDrive remote valve operation system', featured: true },
    { id: 4, title: 'VPI Position Indicator Catalog', category: 'catalog', fileType: 'PDF', fileSize: '1.9 MB', language: 'TR/EN', thumbnail: '/images/products/vpi.jpg', description: 'Valve position indicator product series', featured: true },
    { id: 5, title: 'Smith Interlock Technical Drawings', category: 'technical', fileType: 'PDF', fileSize: '12.3 MB', language: 'EN', thumbnail: '/images/docs/technical.jpg', description: 'Technical drawings in CAD format' },
    { id: 6, title: 'ATEX/IECEx Certificate', category: 'certificate', fileType: 'PDF', fileSize: '450 KB', language: 'EN', thumbnail: '/images/docs/certificate-1.jpg', description: 'Explosive atmosphere certificate' },
    { id: 7, title: 'ISO 9001:2015 Quality Certificate', category: 'certificate', fileType: 'PDF', fileSize: '320 KB', language: 'EN', thumbnail: '/images/docs/certificate-2.jpg', description: 'Quality management system certificate' },
    { id: 8, title: 'Valve Interlock Installation Guide', category: 'manual', fileType: 'PDF', fileSize: '5.6 MB', language: 'TR', thumbnail: '/images/docs/manual.jpg', description: 'Step by step installation instructions' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredDocs = documents.filter(doc => doc.featured);

  const handleDownload = (doc) => {
    const categoryName = documentCategories.find(c => c.id === doc.category)?.name || '';
    const subject = encodeURIComponent(`${text.docRequest}: ${doc.title}`);
    const body = encodeURIComponent(
      text.requestBody.replace('{title}', doc.title).replace('{category}', categoryName)
    );
  const fallbackEmail = 'info@demart.com.tr';
  const email = company?.email || fallbackEmail;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  if (!hasContent) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <TranslationNotice locale={locale} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-[104px]">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {text.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                {text.subtitle}
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={text.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Documents */}
        {featuredDocs.length > 0 && searchTerm === '' && activeCategory === 'all' && (
          <section className="py-12 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">{text.featured}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredDocs.map((doc) => (
                  <div 
                    key={doc.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    onClick={() => handleDownload(doc)}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={doc.thumbnail} 
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-[#00a0e3] text-white text-xs font-medium rounded">
                        {doc.fileType}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#00a0e3] transition-colors line-clamp-2">
                        {doc.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{doc.fileSize}</span>
                        <span className="flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {doc.language}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter & Documents */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar - Categories */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    {text.categories}
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === 'all' 
                            ? 'bg-[#00a0e3] text-white' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {text.allDocs}
                      </button>
                    </li>
                    {documentCategories.map((cat) => {
                      const IconComponent = iconMap[cat.icon] || FileText;
                      return (
                        <li key={cat.id}>
                          <button
                            onClick={() => setActiveCategory(cat.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center ${
                              activeCategory === cat.id 
                                ? 'bg-[#00a0e3] text-white' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-2" />
                            {cat.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Documents Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600">
                    {filteredDocuments.length} {text.docsFound}
                  </p>
                </div>

                {filteredDocuments.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDocuments.map((doc) => {
                      const category = documentCategories.find(c => c.id === doc.category);
                      
                      return (
                        <div 
                          key={doc.id}
                          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="flex">
                            <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                              <img 
                                src={doc.thumbnail} 
                                alt={doc.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 p-4 flex flex-col">
                              <div className="flex items-start justify-between mb-2">
                                <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                  <IconComponent className="w-3 h-3 mr-1" />
                                  {category?.name}
                                </span>
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                  <span>{doc.fileType}</span>
                                  <span>•</span>
                                  <span>{doc.fileSize}</span>
                                </div>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#00a0e3] transition-colors">
                                {doc.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
                                {doc.description}
                              </p>
                              <button
                                onClick={() => handleDownload(doc)}
                                className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline"
                              >
                                <Download className="w-4 h-4 mr-1" />
                                {text.requestDownload}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{text.noDocsTitle}</h3>
                    <p className="text-gray-600">{text.noDocsDesc}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#00a0e3]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {text.ctaTitle}
            </h2>
            <p className="text-white/90 mb-6">
              {text.ctaDesc}
            </p>
            <Link 
              to={routes.contact}
              className="inline-flex items-center px-6 py-3 bg-white text-[#00a0e3] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              {text.contact}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
