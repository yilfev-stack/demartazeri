import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TranslationNotice from '../components/TranslationNotice';

const content = {
  tr: {
    title: "Çerez Politikası",
    lastUpdated: "Son Güncelleme: Ocak 2025",
    intro: "Bu Çerez Politikası, Demart Mühendislik web sitesinin çerezleri ve benzer teknolojileri nasıl kullandığını açıklar.",
    whatAreCookies: {
      title: "Çerezler Nedir?",
      content: "Çerezler, web sitelerinin bilgisayarınıza veya mobil cihazınıza yerleştirdiği küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi tanımasına ve tercihlerinizi hatırlamasına yardımcı olur."
    },
    cookieTypes: [
      {
        icon: Shield,
        title: "Gerekli Çerezler",
        description: "Web sitesinin temel işlevlerini sağlamak için zorunlu olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmaz.",
        examples: ["Oturum yönetimi", "Güvenlik", "Temel site işlevleri"],
        canDisable: false
      },
      {
        icon: BarChart,
        title: "Analitik Çerezler",
        description: "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir.",
        examples: ["Google Analytics", "Sayfa görüntüleme istatistikleri", "Kullanıcı davranış analizi"],
        canDisable: true
      },
      {
        icon: Target,
        title: "Pazarlama Çerezler",
        description: "Size kişiselleştirilmiş reklamlar göstermek ve pazarlama kampanyalarının etkinliğini ölçmek için kullanılan çerezlerdir.",
        examples: ["Reklam hedefleme", "Sosyal medya entegrasyonu", "Pazarlama analitiği"],
        canDisable: true
      }
    ],
    howToManage: {
      title: "Çerezleri Nasıl Yönetebilirsiniz?",
      content: "Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:",
      methods: [
        "Web sitemizde çıkan çerez banner'ındaki 'Özelleştir' butonunu kullanarak",
        "Tarayıcı ayarlarınızdan çerezleri engelleyerek veya silerek",
        "Üçüncü taraf araçları kullanarak (örn: Google Analytics Opt-out)"
      ]
    },
    browserSettings: {
      title: "Tarayıcı Çerez Ayarları",
      content: "Çoğu tarayıcı, çerezleri engellemenize veya silmenize olanak tanır:",
      browsers: [
        { name: "Google Chrome", url: "chrome://settings/cookies" },
        { name: "Mozilla Firefox", url: "about:preferences#privacy" },
        { name: "Safari", url: "Tercihler > Gizlilik" },
        { name: "Microsoft Edge", url: "edge://settings/privacy" }
      ]
    },
    updates: {
      title: "Politika Güncellemeleri",
      content: "Bu Çerez Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır."
    },
    contact: {
      title: "İletişim",
      content: "Çerez politikamız hakkında sorularınız için:",
      email: "info@demart.com.tr"
    }
  },
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last Updated: January 2025",
    intro: "This Cookie Policy explains how the Demart Mühendislik website uses cookies and similar technologies.",
    whatAreCookies: {
      title: "What Are Cookies?",
      content: "Cookies are small text files that websites place on your computer or mobile device. These files help the website recognize you and remember your preferences."
    },
    cookieTypes: [
      {
        icon: Shield,
        title: "Necessary Cookies",
        description: "These cookies are essential for the basic functions of the website. The site cannot function properly without these cookies.",
        examples: ["Session management", "Security", "Basic site functions"],
        canDisable: false
      },
      {
        icon: BarChart,
        title: "Analytics Cookies",
        description: "These cookies help us understand how visitors use the site.",
        examples: ["Google Analytics", "Page view statistics", "User behavior analysis"],
        canDisable: true
      },
      {
        icon: Target,
        title: "Marketing Cookies",
        description: "These cookies are used to show you personalized ads and measure the effectiveness of marketing campaigns.",
        examples: ["Ad targeting", "Social media integration", "Marketing analytics"],
        canDisable: true
      }
    ],
    howToManage: {
      title: "How Can You Manage Cookies?",
      content: "You can manage your cookie preferences in the following ways:",
      methods: [
        "Using the 'Customize' button on the cookie banner on our website",
        "By blocking or deleting cookies from your browser settings",
        "Using third-party tools (e.g., Google Analytics Opt-out)"
      ]
    },
    browserSettings: {
      title: "Browser Cookie Settings",
      content: "Most browsers allow you to block or delete cookies:",
      browsers: [
        { name: "Google Chrome", url: "chrome://settings/cookies" },
        { name: "Mozilla Firefox", url: "about:preferences#privacy" },
        { name: "Safari", url: "Preferences > Privacy" },
        { name: "Microsoft Edge", url: "edge://settings/privacy" }
      ]
    },
    updates: {
      title: "Policy Updates",
      content: "This Cookie Policy may be updated from time to time. Changes will be posted on this page."
    },
    contact: {
      title: "Contact",
      content: "For questions about our cookie policy:",
      email: "info@demart.com.tr"
    }
  }
};

const CookiePolicyPage = () => {
  const { locale, t } = useLanguage();
  const data = content?.[locale];
  const hasContent = Boolean(data);
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Cookie className="w-16 h-16 text-[#00a0e3] mx-auto mb-4" />
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {data.title}
                </h1>
                <p className="text-gray-400">{data.lastUpdated}</p>
              </>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {data.intro}
              </p>
            )}

            {/* What Are Cookies */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{data.whatAreCookies.title}</h2>
                <p className="text-gray-600">{data.whatAreCookies.content}</p>
              </div>
            )}

            {/* Cookie Types */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('İstifadə Etdiyimiz Çərəz Növləri', 'Types of Cookies We Use', 'İstifadə Etdiyimiz Çərəz Növləri')}
                </h2>
                <div className="space-y-6 mb-8">
                  {data.cookieTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${!type.canDisable ? 'bg-green-100' : 'bg-[#00a0e3]/10'}`}>
                            <IconComponent className={`w-5 h-5 ${!type.canDisable ? 'text-green-600' : 'text-[#00a0e3]'}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded ${!type.canDisable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                              {!type.canDisable ? t('Həmişə aktiv', 'Always active', 'Həmişə aktiv') : t('İstəyə bağlı', 'Optional', 'İstəyə bağlı')}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, idx) => (
                            <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {isTrOrAz ? 'İstifadə Etdiyimiz Çərəz Növləri' : 'Types of Cookies We Use'}
            </h2>
            <div className="space-y-6 mb-8">
              {data.cookieTypes.map((type, index) => {
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${!type.canDisable ? 'bg-green-100' : 'bg-[#00a0e3]/10'}`}>
                        <IconComponent className={`w-5 h-5 ${!type.canDisable ? 'text-green-600' : 'text-[#00a0e3]'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${!type.canDisable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {!type.canDisable ? (isTrOrAz ? 'Həmişə aktiv' : 'Always active') : (isTrOrAz ? 'İstəyə bağlı' : 'Optional')}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* How to Manage */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="bg-[#00a0e3]/5 rounded-lg p-6 border border-[#00a0e3]/20 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-[#00a0e3]" />
                <h2 className="text-xl font-bold text-gray-900">{data.howToManage.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{data.howToManage.content}</p>
                <ul className="space-y-2">
                  {data.howToManage.methods.map((method, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#00a0e3] rounded-full mt-2 flex-shrink-0" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Browser Settings */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{data.browserSettings.title}</h2>
                <p className="text-gray-600 mb-4">{data.browserSettings.content}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.browserSettings.browsers.map((browser, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg text-center">
                      <p className="font-medium text-gray-900 text-sm">{browser.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Updates */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{data.updates.title}</h2>
                <p className="text-gray-600">{data.updates.content}</p>
              </div>
            )}

            {/* Contact */}
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="bg-gray-900 rounded-lg p-6 text-center">
                <h2 className="text-xl font-bold text-white mb-3">{data.contact.title}</h2>
                <p className="text-gray-400 mb-4">{data.contact.content}</p>
                <a href={`mailto:${data.contact.email}`} className="text-[#00a0e3] font-semibold hover:underline">
                  {data.contact.email}
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
