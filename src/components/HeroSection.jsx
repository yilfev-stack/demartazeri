import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { heroContent, bulletinContent } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from './TranslationNotice';

const HeroSection = () => {
  const { locale } = useLanguage();
  const hero = heroContent?.[locale];
  const bulletin = bulletinContent?.[locale];
  const routes = ROUTE_MAP[locale];
  const hasContent = Boolean(hero && bulletin);

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={hero?.backgroundImage ? { backgroundImage: `url(${hero.backgroundImage})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a0e3]/90 to-[#00a0e3]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {!hasContent ? (
          <TranslationNotice locale={locale} />
        ) : (
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            <Link
              to={hero.ctaLink}
              className="inline-flex items-center px-8 py-4 bg-white text-[#00a0e3] font-semibold rounded hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              {hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </div>

      {/* Bulletin banner */}
      {hasContent ? (
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a3a52]/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-white text-lg">{bulletin.title}</p>
              <Link 
                to={routes.contact}
                className="px-6 py-2 bg-[#00a0e3] text-white font-medium rounded hover:bg-[#0090d0] transition-colors"
              >
                {bulletin.cta}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
