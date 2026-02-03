import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from './TranslationNotice';

const content = {
  tr: {
    title: "Çerez Politikası",
    description: "Web sitemizi ziyaret ettiğinizde, size daha iyi bir deneyim sunmak için çerezler kullanıyoruz. Çerezler, tercihlerinizi hatırlamamıza, site trafiğini analiz etmemize ve size kişiselleştirilmiş içerik sunmamıza yardımcı olur.",
    necessary: "Gerekli Çerezler",
    necessaryDesc: "Web sitesinin düzgün çalışması için zorunludur. Bu çerezler olmadan site çalışmaz.",
    analytics: "Analitik Çerezler",
    analyticsDesc: "Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur.",
    marketing: "Pazarlama Çerezler",
    marketingDesc: "Kişiselleştirilmiş reklamlar göstermek için kullanılır.",
    acceptAll: "Tümünü Kabul Et",
    acceptNecessary: "Sadece Gerekli",
    customize: "Özelleştir",
    savePreferences: "Tercihleri Kaydet",
    privacyPolicy: "Gizlilik Politikası",
    cookiePolicy: "Çerez Politikası",
    moreInfo: "Daha fazla bilgi için",
    and: "ve",
    readMore: "sayfalarımızı okuyun."
  },
  en: {
    title: "Cookie Policy",
    description: "When you visit our website, we use cookies to provide you with a better experience. Cookies help us remember your preferences, analyze site traffic, and provide personalized content.",
    necessary: "Necessary Cookies",
    necessaryDesc: "Required for the website to function properly. The site cannot work without these cookies.",
    analytics: "Analytics Cookies",
    analyticsDesc: "Help us understand how visitors use the site.",
    marketing: "Marketing Cookies",
    marketingDesc: "Used to show personalized advertisements.",
    acceptAll: "Accept All",
    acceptNecessary: "Necessary Only",
    customize: "Customize",
    savePreferences: "Save Preferences",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    moreInfo: "For more information, read our",
    and: "and",
    readMore: "pages."
  },
  az: {
    title: "Çerez Siyasəti",
    description: "Veb saytımızı ziyarət etdiyinizdə sizə daha yaxşı təcrübə təqdim etmək üçün çerezlərdən istifadə edirik. Çerezlər seçimlərinizi yadda saxlamağımıza, sayt trafiyini analiz etməyimizə və sizə fərdiləşdirilmiş məzmun təqdim etməyimizə kömək edir.",
    necessary: "Zəruri Çerezlər",
    necessaryDesc: "Veb saytın düzgün işləməsi üçün tələb olunur. Bu çerezlər olmadan sayt işləməz.",
    analytics: "Analitika Çerezləri",
    analyticsDesc: "Ziyarətçilərin saytı necə istifadə etdiyini anlamağa kömək edir.",
    marketing: "Marketinq Çerezləri",
    marketingDesc: "Fərdiləşdirilmiş reklamlar göstərmək üçün istifadə olunur.",
    acceptAll: "Hamısını Qəbul Et",
    acceptNecessary: "Yalnız Zəruri",
    customize: "Fərdiləşdir",
    savePreferences: "Seçimləri Yadda Saxla",
    privacyPolicy: "Məxfilik Siyasəti",
    cookiePolicy: "Çerez Siyasəti",
    moreInfo: "Daha ətraflı məlumat üçün",
    and: "və",
    readMore: "səhifələrimizi oxuyun."
  }
};

const CookieConsent = () => {
  const { locale } = useLanguage();
  const text = content?.[locale];
  const routes = ROUTE_MAP[locale];
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('demart-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { necessary: true, analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem('demart-cookie-consent', JSON.stringify(allConsent));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('demart-cookie-consent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const customConsent = { ...preferences, timestamp: Date.now() };
    localStorage.setItem('demart-cookie-consent', JSON.stringify(customConsent));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;
  if (!text) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden p-6">
          <TranslationNotice locale={locale} />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={() => {}} />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {!showSettings ? (
            /* Main Banner */
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00a0e3]/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#00a0e3]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {text.title}
                    <Shield className="w-4 h-4 text-green-600" />
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {text.description}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    {text.moreInfo}{' '}
                    <a href={routes.privacy} className="text-[#00a0e3] hover:underline">
                      {text.privacyPolicy}
                    </a>{' '}
                    {text.and}{' '}
                    <a href={routes.cookies} className="text-[#00a0e3] hover:underline">
                      {text.cookiePolicy}
                    </a>{' '}
                    {text.readMore}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 bg-[#00a0e3] text-white font-semibold rounded-lg hover:bg-[#0090d0] transition-colors"
                    >
                      {text.acceptAll}
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className="px-6 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      {text.acceptNecessary}
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      {text.customize}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#00a0e3]" />
                  {text.customize}
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{text.necessary}</h4>
                    <p className="text-sm text-gray-600">{text.necessaryDesc}</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="sr-only"
                    />
                    <div className="w-11 h-6 bg-green-500 rounded-full cursor-not-allowed">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{text.analytics}</h4>
                    <p className="text-sm text-gray-600">{text.analyticsDesc}</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className="relative"
                  >
                    <div className={`w-11 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences.analytics ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{text.marketing}</h4>
                    <p className="text-sm text-gray-600">{text.marketingDesc}</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className="relative"
                  >
                    <div className={`w-11 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences.marketing ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-2.5 bg-[#00a0e3] text-white font-semibold rounded-lg hover:bg-[#0090d0] transition-colors"
                >
                  {text.savePreferences}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  {text.acceptAll}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
