import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const content = {
  tr: {
    pageTitle: "Müşteri Hikayeleri",
    pageSubtitle: "Dünya genelinde müşterilerimizin başarı hikayeleri ve deneyimleri",
    stories: [
      {
        id: 1,
        company: "Büyük Rafineri - Türkiye",
        industry: "Petrol & Gaz",
        title: "Tank Çiftliğinde Güvenlik Dönüşümü",
        challenge: "Tank dip tahliye vanalarının manuel operasyonu sırasında operatör güvenliği riskleri yaşanıyordu.",
        solution: "FlexiDrive uzaktan vana operatörleri kurularak operatörler güvenli mesafeden çalışabilir hale geldi.",
        result: "İş kazalarında %90 azalma, operasyon süresinde %40 iyileşme sağlandı.",
        quote: "FlexiDrive sistemi, operatörlerimizin güvenliğini önemli ölçüde artırdı. Artık tehlikeli alanlara girmeden vanaları çalıştırabiliyoruz.",
        image: "/images/placeholder.svg"
      },
      {
        id: 2,
        company: "Kimya Tesisi - Almanya",
        industry: "Kimya",
        title: "Yanlış Yükleme Önleme Sistemi",
        challenge: "Terminal operasyonlarında çapraz kontaminasyon ve yanlış ürün yüklemesi riskleri vardı.",
        solution: "Sofis vana kilit sistemi ile önceden tanımlanmış operasyon sırası zorunlu hale getirildi.",
        result: "Kurulumdan bu yana sıfır yanlış yükleme olayı, %25 verimlilik artışı.",
        quote: "Vana kilit sistemi sayesinde insan hatası kaynaklı riskleri tamamen ortadan kaldırdık.",
        image: "/images/placeholder.svg"
      },
      {
        id: 3,
        company: "Su Arıtma Tesisi - Hollanda",
        industry: "Su & Atıksu",
        title: "Kimyasal Boşaltma Güvenliği",
        challenge: "Tehlikeli kimyasalların boşaltılması sırasında hat düzenlemesi hataları yaşanıyordu.",
        solution: "Vana kilitleme sistemi ile doğru hat düzenlemeleri garanti altına alındı.",
        result: "Sıfır çapraz kontaminasyon olayı, düzenleyici uyumluluk sağlandı.",
        quote: "Sofis çözümleri ile hem operatör güvenliğini hem de çevresel uyumluluğu sağladık.",
        image: "/images/placeholder.svg"
      }
    ],
    cta: {
      title: "Sizin de başarı hikayeniz olsun",
      description: "Vana operasyonlarınızı nasıl iyileştirebileceğimizi öğrenin",
      button: "Bizimle İletişime Geçin"
    }
  },
  en: {
    pageTitle: "Customer Stories",
    pageSubtitle: "Success stories and experiences of our customers worldwide",
    stories: [
      {
        id: 1,
        company: "Major Refinery - Turkey",
        industry: "Oil & Gas",
        title: "Safety Transformation at Tank Farm",
        challenge: "Operator safety risks were experienced during manual operation of tank bottom drain valves.",
        solution: "FlexiDrive remote valve operators were installed, enabling operators to work from a safe distance.",
        result: "90% reduction in workplace accidents, 40% improvement in operation time.",
        quote: "The FlexiDrive system significantly improved the safety of our operators. We can now operate valves without entering hazardous areas.",
        image: "/images/placeholder.svg"
      },
      {
        id: 2,
        company: "Chemical Plant - Germany",
        industry: "Chemical",
        title: "Misloading Prevention System",
        challenge: "There were risks of cross-contamination and product misloading in terminal operations.",
        solution: "Predefined operation sequence was made mandatory with Sofis valve interlock system.",
        result: "Zero misloading incidents since installation, 25% efficiency increase.",
        quote: "Thanks to the valve interlock system, we completely eliminated risks from human error.",
        image: "/images/placeholder.svg"
      },
      {
        id: 3,
        company: "Water Treatment Plant - Netherlands",
        industry: "Water & Wastewater",
        title: "Chemical Offloading Safety",
        challenge: "Line-up errors occurred during hazardous chemical offloading.",
        solution: "Correct line-ups were guaranteed with valve interlocking system.",
        result: "Zero cross-contamination incidents, regulatory compliance achieved.",
        quote: "With Sofis solutions, we ensured both operator safety and environmental compliance.",
        image: "/images/placeholder.svg"
      }
    ],
    cta: {
      title: "Be our next success story",
      description: "Learn how we can improve your valve operations",
      button: "Contact Us"
    }
  },
  az: {
    pageTitle: "Müştəri Hekayələri",
    pageSubtitle: "Dünya üzrə müştərilərimizin uğur hekayələri və təcrübələri",
    stories: [
      {
        id: 1,
        company: "Böyük Rafineri - Türkiyə",
        industry: "Neft və Qaz",
        title: "Tank Sahəsində Təhlükəsizlik Dəyişimi",
        challenge: "Tank alt drenaj vanalarının manual idarəsi zamanı operator təhlükəsizliyi riskləri yaranırdı.",
        solution: "FlexiDrive uzaqdan vana operatorları quraşdırıldı və operatorlar təhlükəsiz məsafədən işləyə bildi.",
        result: "İş qəzalarında 90% azalma, əməliyyat müddətində 40% yaxşılaşma.",
        quote: "FlexiDrive sistemi operatorlarımızın təhlükəsizliyini ciddi şəkildə artırdı. İndi təhlükəli zonaya girmədən vanaları idarə edə bilirik.",
        image: "/images/placeholder.svg"
      },
      {
        id: 2,
        company: "Kimya Zavodu - Almaniya",
        industry: "Kimya",
        title: "Yanlış Yükləmənin Qarşısını Alan Sistem",
        challenge: "Terminal əməliyyatlarında çarpaz kontaminasiya və səhv məhsul yükləmə riskləri vardı.",
        solution: "Sofis vana kilidləmə sistemi ilə əvvəlcədən müəyyən edilmiş əməliyyat ardıcıllığı məcburi edildi.",
        result: "Quraşdırmadan sonra sıfır yanlış yükləmə, 25% səmərəlilik artımı.",
        quote: "Vana kilidləmə sistemi sayəsində insan xətasından doğan riskləri tam aradan qaldırdıq.",
        image: "/images/placeholder.svg"
      },
      {
        id: 3,
        company: "Su Təmizləmə Təsisi - Hollandiya",
        industry: "Su və Çirkab Su",
        title: "Kimyəvi Boşaltma Təhlükəsizliyi",
        challenge: "Təhlükəli kimyəvi maddələrin boşaldılması zamanı xətt düzülüşü xətaları olurdu.",
        solution: "Vana kilidləmə sistemi ilə düzgün xətt düzülüşləri təmin edildi.",
        result: "Sıfır çarpaz kontaminasiya, tənzimləyici uyğunluq təmin olundu.",
        quote: "Sofis həlləri ilə həm operator təhlükəsizliyini, həm də ekoloji uyğunluğu təmin etdik.",
        image: "/images/placeholder.svg"
      }
    ],
    cta: {
      title: "Sizin də uğur hekayəniz olsun",
      description: "Vana əməliyyatlarınızı necə yaxşılaşdıra biləcəyimizi öyrənin",
      button: "Bizimlə Əlaqə"
    }
  }
};

const CustomerStoriesPage = () => {
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const data = content?.[locale];

  if (!data) {
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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {data.pageTitle}
            </h1>
            <p className="text-white/90 text-lg">
              {data.pageSubtitle}
            </p>
          </div>
        </section>

        {/* Stories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {data.stories.map((story, index) => (
                <div 
                  key={story.id}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-[#00a0e3]">{story.industry}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-sm text-gray-500">{story.company}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-gray-700">
                          {t('Zorluk: ', 'Challenge: ', 'Çətinlik: ')}
                        </span>
                        <span className="text-gray-600">{story.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {t('Çözüm: ', 'Solution: ', 'Həll: ')}
                        </span>
                        <span className="text-gray-600">{story.solution}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {t('Sonuç: ', 'Result: ', 'Nəticə: ')}
                        </span>
                        <span className="text-gray-600">{story.result}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#00a0e3]">
                      <Quote className="w-6 h-6 text-[#00a0e3] mb-2" />
                      <p className="text-gray-600 italic">{story.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.cta.title}</h2>
            <p className="text-gray-600 mb-6">{data.cta.description}</p>
            <Link 
              to={routes.contact}
              className="inline-flex items-center px-8 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
            >
              {data.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStoriesPage;
