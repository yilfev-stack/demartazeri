import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Wind, Sun, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const withSlug = (base, slug) => `${base}/${slug}`;

const content = {
  tr: {
    pageTitle: "Enerji Dönüşümü",
    pageSubtitle: "Yeni nesil enerji altyapısı için güvenli ve verimli vana operasyonları",
    intro: "Sofis, yeni nesil enerji altyapısında kullanılan vana kilitleri ve taşınabilir aktüatörler sağlar. Bu Sofis çözümleriyle vanaların doğru şekilde çalıştırılmasını sağlayarak kazaları önlüyor ve dünyamızı koruyoruz.",
    sections: [
      {
        icon: "hydrogen",
        title: "Hidrojen Enerjisi",
        description: "Yeşil hidrojen üretimi ve işlenmesi gibi aşırı koşullar altında çalışırken kritik proses ekipmanlarınızı aşırı basınçtan korumanıza yardımcı oluyoruz.",
        link: withSlug(ROUTE_MAP.tr.industries, "hidrojen")
      },
      {
        icon: "carbon",
        title: "Karbon Yakalama ve Depolama",
        description: "Isı eşanjörlerinin aşırı basınçlanmasını önlemenize ve basınç tahliye vanalarının doğru çalıştırma prosedürlerini sağlamanıza yardımcı oluyoruz.",
        link: withSlug(ROUTE_MAP.tr.industries, "karbon-yakalama")
      },
      {
        icon: "wind",
        title: "Rüzgar Enerjisi",
        description: "Offshore ve onshore rüzgar türbinlerinde kullanılan vana sistemlerinin güvenli operasyonu için çözümler sunuyoruz.",
        link: ROUTE_MAP.tr.solutions
      },
      {
        icon: "solar",
        title: "Güneş Enerjisi",
        description: "Konsantre güneş enerjisi santrallerinde termal depolama sistemlerinin güvenli yönetimi için vana çözümleri sağlıyoruz.",
        link: ROUTE_MAP.tr.solutions
      }
    ],
    benefits: {
      title: "Enerji Dönüşümünde Sofis Avantajı",
      items: [
        "Sıfır emisyon hedeflerine ulaşmada kritik altyapı güvenliği",
        "Yenilenebilir enerji tesislerinde operasyonel verimlilik",
        "Yeşil hidrojen ve karbon yakalama projelerinde kanıtlanmış deneyim",
        "Uluslararası güvenlik standartlarına tam uyumluluk"
      ]
    },
    cta: {
      title: "Enerji dönüşümü projeniz için çözüm mü arıyorsunuz?",
      button: "Bizimle İletişime Geçin"
    }
  },
  en: {
    pageTitle: "Energy Transition",
    pageSubtitle: "Safe and efficient valve operations for next generation energy infrastructure",
    intro: "Sofis provides valve interlocks and portable actuators used in next-generation energy infrastructure. We prevent accidents and protect the planet by ensuring valves are operated correctly.",
    sections: [
      {
        icon: "hydrogen",
        title: "Hydrogen Energy",
        description: "We help you protect your critical process equipment from overpressure when working in extreme conditions such as green hydrogen production and processing.",
        link: withSlug(ROUTE_MAP.en.industries, "hydrogen")
      },
      {
        icon: "carbon",
        title: "Carbon Capture and Storage",
        description: "We help you prevent heat exchanger overpressurization and ensure correct operating procedures for pressure relief valves.",
        link: withSlug(ROUTE_MAP.en.industries, "carbon-capture")
      },
      {
        icon: "wind",
        title: "Wind Energy",
        description: "We provide solutions for safe operation of valve systems used in offshore and onshore wind turbines.",
        link: ROUTE_MAP.en.solutions
      },
      {
        icon: "solar",
        title: "Solar Energy",
        description: "We provide valve solutions for safe management of thermal storage systems in concentrated solar power plants.",
        link: ROUTE_MAP.en.solutions
      }
    ],
    benefits: {
      title: "Sofis Advantage in Energy Transition",
      items: [
        "Critical infrastructure safety in achieving zero emission targets",
        "Operational efficiency in renewable energy facilities",
        "Proven experience in green hydrogen and carbon capture projects",
        "Full compliance with international safety standards"
      ]
    },
    cta: {
      title: "Looking for a solution for your energy transition project?",
      button: "Contact Us"
    }
  },
  az: {
    pageTitle: "Enerji Dönüşümü",
    pageSubtitle: "Yeni nəsil enerji infrastrukturu üçün təhlükəsiz və səmərəli vana əməliyyatları",
    intro: "Sofis, yeni nəsil enerji infrastrukturunda istifadə olunan vana kilidləri və portativ aktuatorlar təqdim edir. Vanaların düzgün idarə olunmasını təmin etməklə qəzaların qarşısını alır və planetimizi qoruyuruq.",
    sections: [
      {
        icon: "hydrogen",
        title: "Hidrogen Enerjisi",
        description: "Yaşıl hidrogen istehsalı və emalı kimi ekstremal şəraitdə kritik proses avadanlıqlarınızı həddindən artıq təzyiqdən qorumağa kömək edirik.",
        link: withSlug(ROUTE_MAP.az.industries, "hidrogen")
      },
      {
        icon: "carbon",
        title: "Karbon Tutma və Saxlama",
        description: "İstilik dəyişdiricilərinin həddindən artıq təzyiqə məruz qalmasının qarşısını almağa və təzyiq boşaltma klapanlarının düzgün prosedurla işlədilməsini təmin etməyə kömək edirik.",
        link: withSlug(ROUTE_MAP.az.industries, "karbon-tutma")
      },
      {
        icon: "wind",
        title: "Külək Enerjisi",
        description: "Offshore və onshore külək turbinlərində istifadə olunan vana sistemlərinin təhlükəsiz əməliyyatı üçün həllər təqdim edirik.",
        link: ROUTE_MAP.az.solutions
      },
      {
        icon: "solar",
        title: "Günəş Enerjisi",
        description: "Konsentrat günəş enerji stansiyalarında termal saxlama sistemlərinin təhlükəsiz idarə olunması üçün vana həlləri təqdim edirik.",
        link: ROUTE_MAP.az.solutions
      }
    ],
    benefits: {
      title: "Enerji Dönüşümündə Sofis Üstünlüyü",
      items: [
        "Sıfır emissiya hədəflərinə çatmaq üçün kritik infrastruktur təhlükəsizliyi",
        "Yenilənəbilən enerji obyektlərində əməliyyat səmərəliliyi",
        "Yaşıl hidrogen və karbon tutma layihələrində təsdiqlənmiş təcrübə",
        "Beynəlxalq təhlükəsizlik standartlarına tam uyğunluq"
      ]
    },
    cta: {
      title: "Enerji dönüşümü layihəniz üçün həll axtarırsınız?",
      button: "Bizimlə Əlaqə Saxlayın"
    }
  }
};

const iconMap = {
  hydrogen: Droplets,
  carbon: Leaf,
  wind: Wind,
  solar: Sun
};

const EnergyTransitionPage = () => {
  const { locale, t } = useLanguage();
  const data = content?.[locale];
  const routes = ROUTE_MAP[locale];
  const hasContent = Boolean(data);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-600 to-[#00a0e3] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="w-16 h-16 text-white mx-auto mb-6" />
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {data.pageTitle}
                </h1>
                <p className="text-white/90 text-lg max-w-3xl mx-auto">
                  {data.pageSubtitle}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {hasContent ? (
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.intro}
              </p>
            ) : (
              <TranslationNotice locale={locale} />
            )}
          </div>
        </section>

        {/* Sections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.sections.map((section, index) => {
                  const IconComponent = iconMap[section.icon];
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {section.description}
                      </p>
                      <Link 
                        to={section.link}
                        className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline"
                      >
                        {t('Daha Ətraflı', 'Learn More', 'Daha Ətraflı')}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-8 text-center">{data.benefits.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {data.benefits.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.cta.title}</h2>
                <Link 
                  to={routes.contact}
                  className="inline-flex items-center px-8 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                >
                  {data.cta.button}
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

export default EnergyTransitionPage;
