import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const allowedLocales = ['tr', 'en', 'az'];
const resolveLocale = (locale) => (allowedLocales.includes(locale) ? locale : 'tr');

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('demart-language');
    return resolveLocale(saved || 'tr');
  });

  const resolvedLocale = useMemo(() => resolveLocale(locale), [locale]);

  useEffect(() => {
    localStorage.setItem('demart-language', resolvedLocale);
    document.documentElement.lang = resolvedLocale;
  }, [resolvedLocale]);

  const missingTranslation = {
    tr: 'Bu sayfanın çevirisi hazırlanıyor.',
    en: 'This page translation is being prepared.',
    az: 'Bu səhifənin tərcüməsi hazırlanır.',
  };

  // TR / EN / AZ helper
  const t = (trText, enText, azText) => {
    const fallbackText = missingTranslation[resolvedLocale] ?? missingTranslation.en;

    if (resolvedLocale === 'tr') return trText ?? fallbackText;
    if (resolvedLocale === 'az') return azText ?? fallbackText;
    return enText ?? fallbackText;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale: resolvedLocale,
        language: resolvedLocale,     // uyumluluk: bazı komponentler language kullanıyor olabilir
        setLocale,                   // yeni standart: setLocale
        setLanguage: setLocale,      // uyumluluk: eski kod setLanguage kullanıyorsa bozulmasın
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
