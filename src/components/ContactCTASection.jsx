import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactCta, companyInfo } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const ContactCTASection = () => {
  const { locale, t } = useLanguage();
  const cta = contactCta?.[locale];
  const company = companyInfo?.[locale];
  const hasContent = Boolean(cta);

  const orText = t('veya', 'or', 'və ya');
  const callText = t('Bizi şimdi arayın:', 'Call us now:', 'Bizi indi zəng edin:');

  if (!hasContent) {
    return <TranslationNotice locale={locale} />;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {cta.title}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={cta.ctaLink}
            className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
          >
            {cta.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <span className="text-gray-500">{orText}</span>

          {company?.phone ? (
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center text-[#00a0e3] font-semibold hover:underline"
            >
              <Phone className="mr-2 w-5 h-5" />
              {callText} {company.phone}
            </a>
          ) : (
            <span className="inline-flex items-center text-[#00a0e3] font-semibold">
              <Phone className="mr-2 w-5 h-5" />
              {callText}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
