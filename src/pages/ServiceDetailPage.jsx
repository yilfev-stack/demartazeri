import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';
import { companyInfo } from '../data/translations';

// Extended service details - Bilingual
const serviceDetails = {
  'proje-destegi': {
    tr: {
      title: 'Proje Desteği',
      description: 'Mühendislerimiz, vana kilitlerinin doğru kurulumunu ve devreye alınmasını sağlayarak istenmeyen proje gecikmelerini önler. Tesis duruşlarınızı ve revizyonlarınızı etkili bir şekilde planlamanız için destek sağlarlar. Proje ekibinizle birlikte çalışarak, vana kilitleme sistemlerinin tasarım aşamasından kurulumuna kadar tüm süreçlerde teknik destek sunuyoruz.',
      features: [
        'Proje planlama ve danışmanlık',
        'Teknik şartname hazırlama',
        'Kurulum ve devreye alma desteği',
        'Proje yönetimi ve koordinasyon',
        'Kalite kontrol ve denetim',
        'HAZOP ve SIL çalışmaları desteği'
      ],
      benefits: [
        'Proje gecikmelerini önleme',
        'Maliyet optimizasyonu',
        'Teknik risklerin azaltılması',
        'Zamanında teslim garantisi'
      ]
    },
    en: {
      title: 'Project Support',
      description: 'Our engineers prevent unwanted project delays by ensuring proper installation and commissioning of valve interlocks. They provide support for effective planning of your plant shutdowns and turnarounds. Working with your project team, we provide technical support throughout all processes from design to installation of valve interlocking systems.',
      features: [
        'Project planning and consulting',
        'Technical specification preparation',
        'Installation and commissioning support',
        'Project management and coordination',
        'Quality control and inspection',
        'HAZOP and SIL studies support'
      ],
      benefits: [
        'Prevent project delays',
        'Cost optimization',
        'Reduce technical risks',
        'On-time delivery guarantee'
      ]
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  'operasyon-bakim': {
    tr: {
      title: 'Operasyon ve Bakım',
      description: 'Vana operasyonlarınızı optimize etmek için operasyonel riskleri sınırlamaya ve insan hatasının etkilerini azaltmaya yardımcı olacak çeşitli çözümler ve programlar sunuyoruz. Düzenli bakım programları, yedek parça yönetimi ve acil müdahale hizmetleri ile vana kilitleme sistemlerinizin kesintisiz çalışmasını sağlıyoruz.',
      features: [
        'Periyodik bakım programları',
        'Yedek parça tedariki ve yönetimi',
        '7/24 Acil servis desteği',
        'Performans izleme ve raporlama',
        'Önleyici bakım planlaması',
        'Sahada teknik destek'
      ],
      benefits: [
        'Ekipman ömrünü uzatma',
        'Plansız duruşları önleme',
        'Operasyonel verimlilik artışı',
        'Toplam sahip olma maliyetini düşürme'
      ]
    },
    en: {
      title: 'Operation and Maintenance',
      description: 'We offer various solutions and programs to help limit operational risks and reduce the effects of human error to optimize your valve operations. We ensure uninterrupted operation of your valve interlocking systems with regular maintenance programs, spare parts management and emergency response services.',
      features: [
        'Periodic maintenance programs',
        'Spare parts supply and management',
        '24/7 Emergency service support',
        'Performance monitoring and reporting',
        'Preventive maintenance planning',
        'On-site technical support'
      ],
      benefits: [
        'Extend equipment life',
        'Prevent unplanned downtime',
        'Increase operational efficiency',
        'Reduce total cost of ownership'
      ]
    },
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
  },
  'yonetmelikler-standartlar': {
    tr: {
      title: 'Yönetmelikler ve Standartlar',
      description: 'Çözümlerimiz, insan hatasının olasılığını sınırlamak için tüm yaşam döngüsü aşamalarında insan performansını iyileştirmeyi amaçlar. IEC 61511, API 554 ve diğer endüstri standartlarına uygunluğu sağlamanıza yardımcı oluyoruz. Güvenlik denetimlerinizde kullanabileceğiniz dokümantasyon ve sertifikasyon desteği sunuyoruz.',
      features: [
        'Mevzuat uyumluluk danışmanlığı',
        'Risk değerlendirme hizmetleri',
        'HAZOP çalışmaları desteği',
        'Sertifikasyon ve dokümantasyon desteği',
        'Düzenleyici denetim hazırlığı',
        'IEC 61511 ve API 554 uyumluluk'
      ],
      benefits: [
        'Yasal uyumluluk garantisi',
        'Risk azaltma',
        'Ceza ve yaptırımlardan korunma',
        'İşletme güvenliğini artırma'
      ]
    },
    en: {
      title: 'Regulations and Standards',
      description: 'Our solutions aim to improve human performance at all lifecycle stages to limit the possibility of human error. We help you ensure compliance with IEC 61511, API 554 and other industry standards. We provide documentation and certification support that you can use in your safety audits.',
      features: [
        'Regulatory compliance consulting',
        'Risk assessment services',
        'HAZOP studies support',
        'Certification and documentation support',
        'Regulatory audit preparation',
        'IEC 61511 and API 554 compliance'
      ],
      benefits: [
        'Legal compliance guarantee',
        'Risk reduction',
        'Protection from penalties and sanctions',
        'Increase operational safety'
      ]
    },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
  },
  'denetim': {
    tr: {
      title: 'Denetim ve Fonksiyonel Kontroller',
      description: 'Kilitlerinizin durumunu anlamak ve arızaların kaydını tutmak çok önemlidir. Sofis vana kilit denetim programları, istenmeyen, maliyetli ve tehlikeli durumları önler. Arızanın nedenini bilmek, takip eylemini yeterince planlamanıza ve sonunda kusur sayısını azaltmanıza olanak tanır.',
      features: [
        'Kapsamlı sistem denetimleri',
        'Fonksiyonel test prosedürleri',
        'Detaylı raporlama ve dokümantasyon',
        'İyileştirme önerileri',
        'Düzenli kontrol programları',
        'Arıza analizi ve kök neden tespiti'
      ],
      benefits: [
        'Erken arıza tespiti',
        'Sistem güvenilirliğini artırma',
        'Bakım planlamasını optimize etme',
        'Uyumluluk kanıtı sağlama'
      ]
    },
    en: {
      title: 'Audit and Functional Checks',
      description: 'Understanding the condition of your interlocks and keeping track of failures is crucial. Sofis valve interlock audit programs prevent unwanted, costly and dangerous situations. Knowing the cause of failure allows you to adequately plan follow-up action and eventually reduce the number of defects.',
      features: [
        'Comprehensive system audits',
        'Functional test procedures',
        'Detailed reporting and documentation',
        'Improvement recommendations',
        'Regular inspection programs',
        'Failure analysis and root cause identification'
      ],
      benefits: [
        'Early failure detection',
        'Increase system reliability',
        'Optimize maintenance planning',
        'Provide compliance evidence'
      ]
    },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  'egitim': {
    tr: {
      title: 'Eğitim Programları',
      description: 'Sofis yapısal eğitim programları, güvenlik ihlallerini ve istenmeyen duruş sürelerini önlemeye yardımcı olur. Operatörler ve bakım ekiplerine yönelik olarak, personelinizin vana güvenlik sistemleri hakkındaki bilgisini önemli ölçüde artırır. Tesisinizde güvenlik kültürünü güçlendiriyoruz.',
      features: [
        'Operatör eğitim programları',
        'Bakım personeli eğitimi',
        'Güvenlik farkındalık seminerleri',
        'Uygulamalı atölye çalışmaları',
        'Sertifikalı eğitim programları',
        'Sahada ve uzaktan eğitim seçenekleri'
      ],
      benefits: [
        'Personel yetkinliğini artırma',
        'İnsan hatalarını azaltma',
        'Güvenlik kültürünü güçlendirme',
        'Operasyonel verimliliği artırma'
      ]
    },
    en: {
      title: 'Training Programs',
      description: 'Sofis structured training programs help prevent safety violations and unwanted downtime. For operators and maintenance teams, it significantly increases your personnel\'s knowledge of valve safety systems. We strengthen the safety culture at your facility.',
      features: [
        'Operator training programs',
        'Maintenance personnel training',
        'Safety awareness seminars',
        'Hands-on workshop sessions',
        'Certified training programs',
        'On-site and remote training options'
      ],
      benefits: [
        'Increase personnel competency',
        'Reduce human errors',
        'Strengthen safety culture',
        'Increase operational efficiency'
      ]
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80'
  }
};

// UI texts
const uiTexts = {
  tr: {
    serviceNotFound: 'Hizmet Bulunamadı',
    backToServices: 'Hizmetlere Dön',
    service: 'Hizmet',
    createServiceRequest: 'Hizmet Talebi Oluşturun',
    serviceScope: 'Hizmet Kapsamı',
    benefits: 'Faydaları',
    getInfoAbout: 'Bu Hizmet Hakkında Bilgi Alın',
    expertTeamReady: 'Uzman ekibimiz sorularınızı yanıtlamak ve size özel çözümler sunmak için hazır.',
    sendEmail: 'E-posta Gönderin',
    otherServices: 'Diğer Hizmetlerimiz',
    allServices: 'Tüm Hizmetlere Dön',
    home: 'Ana Sayfa',
    services: 'Hizmetler'
  },
  en: {
    serviceNotFound: 'Service Not Found',
    backToServices: 'Back to Services',
    service: 'Service',
    createServiceRequest: 'Create Service Request',
    serviceScope: 'Service Scope',
    benefits: 'Benefits',
    getInfoAbout: 'Get Information About This Service',
    expertTeamReady: 'Our expert team is ready to answer your questions and provide customized solutions.',
    sendEmail: 'Send Email',
    otherServices: 'Our Other Services',
    allServices: 'Back to All Services',
    home: 'Home',
    services: 'Services'
  }
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { locale } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const t = uiTexts?.[locale];
  const company = companyInfo?.[locale];
  
  // Find the service by slug
  const serviceData = serviceDetails[slug];
  const service = serviceData?.[locale]
    ? { ...serviceData[locale], image: serviceData.image }
    : null;

  if (!t || !company) {
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

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.serviceNotFound}</h1>
            <Link to={routes.services} className="text-[#00a0e3] hover:underline">{t.backToServices}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other services for related section
  const otherServices = Object.entries(serviceDetails)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...(value?.[locale] || {}), image: value.image }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Breadcrumb */}
        <section className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link to={routes.home} className="hover:text-[#00a0e3]">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link to={routes.services} className="hover:text-[#00a0e3]">{t.services}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Service Hero */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <span className="text-[#00a0e3] text-sm font-medium">{t.service}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">{service.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                
                <Link 
                  to={routes.contact} 
                  className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                >
                  {t.createServiceRequest}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features and Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.serviceScope}</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.benefits}</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#00a0e3] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-[#00a0e3]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{t.getInfoAbout}</h2>
            <p className="text-white/90 mb-6">{t.expertTeamReady}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`tel:${company.phone}`} className="inline-flex items-center px-6 py-3 bg-white text-[#00a0e3] font-semibold rounded hover:bg-gray-100 transition-colors">
                <Phone className="mr-2 w-5 h-5" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors">
                <Mail className="mr-2 w-5 h-5" />
                {t.sendEmail}
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.otherServices}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((svc) => (
                <Link key={svc.slug} to={`${routes.services}/${svc.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00a0e3] transition-colors">{svc.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{svc.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={routes.services} className="inline-flex items-center text-[#00a0e3] hover:underline">
              <ArrowLeft className="mr-2 w-5 h-5" />
              {t.allServices}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
