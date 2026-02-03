import React from 'react';

const messages = {
  tr: 'Bu sayfanın çevirisi hazırlanıyor.',
  en: 'This page translation is being prepared.',
  az: 'Bu səhifənin tərcüməsi hazırlanır.'
};

const TranslationNotice = ({ locale }) => (
  <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
    {messages[locale] || messages.en}
  </div>
);

export default TranslationNotice;
