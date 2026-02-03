import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { energyTransition } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const EnergyTransitionSection = () => {
    const { locale, t } = useLanguage();
    const content = energyTransition?.[locale];
    const hasContent = Boolean(content);

    const altText = t('Enerji Dönüşümü', 'Energy Transition', 'Enerji Dönüşümü');

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!hasContent ? (
                    <TranslationNotice locale={locale} />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <img
                                src={content.image}
                                alt={altText}
                                className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {content.title}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {content.description}
                            </p>
                            <Link
                                to={content.ctaLink}
                                className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
                            >
                                {content.cta}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EnergyTransitionSection;
