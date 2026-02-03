import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { services, ui } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const ServicesPage = () => {
  const { locale, t } = useLanguage();
  const serviceList = services?.[locale];
  const text = ui?.[locale];
  const routes = ROUTE_MAP[locale];
  const hasServices = Array.isArray(serviceList) && serviceList.length > 0;
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!text ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('Xidmətlər', 'Services', 'Xidmətlər')}
                </h1>
                <p className="text-white/90 text-lg">
                  {t(
                    'Vana təhlükəsizlik sistemlərinizin bütövlüyünü qorumağınıza kömək edirik',
                    'We help you maintain the integrity of your valve safety systems',
                    'Vana təhlükəsizlik sistemlərinizin bütövlüyünü qorumağınıza kömək edirik'
                  )}
                </p>
              </>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isTrOrAz ? 'Xidmətlər' : 'Services'}
            </h1>
            <p className="text-white/90 text-lg">
              {isTrOrAz
                ? 'Vana təhlükəsizlik sistemlərinizin bütövlüyünü qorumağınıza kömək edirik'
                : 'We help you maintain the integrity of your valve safety systems'}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasServices ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceList.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <Link to={service.link} className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                        {t(`${service.title} sayfasına git`, `Go to ${service.title}`, `${service.title} səhifəsinə keç`)}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceList.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <Link to={service.link} className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                      {isTrOrAz ? `${service.title} sayfasına git` : `Go to ${service.title}`}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                  alt={t('Denetim ve Fonksiyonel Kontroller', 'Audit and Functional Checks', 'Audit və Funksional Yoxlamalar')}
         alt={isTrOrAz ? 'Denetim ve Fonksiyonel Kontroller' : 'Audit and Functional Checks'}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('Denetim ve Fonksiyonel Kontroller', 'Audit and Functional Checks', 'Audit və Funksional Yoxlamalar')}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(
                      'Kilitlerinizin durumunu anlamak ve arızaların kaydını tutmak çok önemlidir. Sofis vana kilit denetim programları, istenmeyen, maliyetli ve tehlikeli durumları önler. Düzenli denetimler ile sistemlerinizin güvenilirliğini koruyun ve bakım maliyetlerinizi optimize edin.',
                      'Understanding the condition of your interlocks and keeping track of failures is crucial. Sofis valve interlock audit programs prevent unwanted, costly and dangerous situations. Maintain the reliability of your systems with regular audits and optimize your maintenance costs.',
                      'Kilidlərinizin vəziyyətini anlamaq və nasazlıqların qeydini aparmaq çox vacibdir. Sofis vana kilidi audit proqramları arzuolunmaz, baha və təhlükəli halların qarşısını alır. Müntəzəm auditlərlə sistemlərinizin etibarlılığını qoruyun və bakım xərclərinizi optimallaşdırın.'
                    )}
                  </p>
                  <Link to={`${routes.services}/denetim`} className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                    {t('Denetim Hizmetleri', 'Audit Services', 'Audit Xidmətləri')}
                    {isTrOrAz ? 'Denetim ve Fonksiyonel Kontroller' : 'Audit and Functional Checks'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {isTrOrAz
                      ? 'Kilitlerinizin durumunu anlamak ve arızaların kaydını tutmak çok önemlidir. Sofis vana kilit denetim programları, istenmeyen, maliyetli ve tehlikeli durumları önler. Düzenli denetimler ile sistemlerinizin güvenilirliğini koruyun ve bakım maliyetlerinizi optimize edin.'
                      : 'Understanding the condition of your interlocks and keeping track of failures is crucial. Sofis valve interlock audit programs prevent unwanted, costly and dangerous situations. Maintain the reliability of your systems with regular audits and optimize your maintenance costs.'}
                  </p>
                  <Link to="/hizmetler/denetim" className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                    {isTrOrAz ? 'Denetim Xidmətləri' : 'Audit Services'}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                  alt={t('Eğitim Programları', 'Training Programs', 'Təlim Proqramları')}
                  alt={isTrOrAz ? 'Eğitim Programları' : 'Training Programs'}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('Təlim Proqramları', 'Training Programs', 'Təlim Proqramları')}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(
                      'Sofis yapısal eğitim programları, güvenlik ihlallerini ve istenmeyen duruş sürelerini önlemeye yardımcı olur. Operatörlerinize ve bakım ekiplerinize vana kilitleri hakkında kapsamlı eğitim vererek, tesisinizde güvenlik kültürünü güçlendiriyoruz.',
                      'Sofis structured training programs help prevent safety violations and unwanted downtime. We strengthen the safety culture at your facility by providing comprehensive training on valve interlocks to your operators and maintenance teams.',
                      'Sofis strukturlaşdırılmış təlim proqramları təhlükəsizlik pozuntularının və arzuolunmaz dayanma vaxtlarının qarşısını almağa kömək edir. Operatorlara və texniki xidmət komandalarına vana kilidləri haqqında geniş təlim verərək müəssisənizdə təhlükəsizlik mədəniyyətini gücləndiririk.'
                    )}
                  </p>
                  <Link to={`${routes.services}/egitim`} className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                    {t('Təlim Proqramları', 'Training Programs', 'Təlim Proqramları')}
                    {isTrOrAz ? 'Təlim Proqramları' : 'Training Programs'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {isTrOrAz
                      ? 'Sofis yapısal eğitim programları, güvenlik ihlallerini ve istenmeyen duruş sürelerini önlemeye yardımcı olur. Operatörlerinize ve bakım ekiplerinize vana kilitleri hakkında kapsamlı eğitim vererek, tesisinizde güvenlik kültürünü güçlendiriyoruz.'
                      : 'Sofis structured training programs help prevent safety violations and unwanted downtime. We strengthen the safety culture at your facility by providing comprehensive training on valve interlocks to your operators and maintenance teams.'}
                  </p>
                  <Link to="/hizmetler/egitim" className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                    {isTrOrAz ? 'Təlim Proqramları' : 'Training Programs'}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
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

export default ServicesPage;
