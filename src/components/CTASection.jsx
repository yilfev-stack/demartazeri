import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ctaContent, downloadSection, videoSection } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const CTASection = () => {
  const { locale } = useLanguage();
  const cta = ctaContent?.[locale];
  const download = downloadSection?.[locale];
  const video = videoSection?.[locale];
  const hasContent = Boolean(cta && download && video);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hasContent ? (
          <TranslationNotice locale={locale} />
        ) : (
          <>
            {/* Main CTA */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
              <h2 className="text-2xl font-bold text-[#00a0e3] mb-4">
                {cta.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {cta.subtitle}
              </p>
              <Link
                to={cta.ctaLink}
                className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors"
              >
                {cta.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {video?.embedUrl && (
              <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Secondary CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to={download.ctaLink}
                className="flex items-center justify-center px-6 py-4 bg-[#1a3a52] text-white font-medium rounded hover:bg-[#2a4a62] transition-colors"
              >
                <Download className="mr-2 w-5 h-5" />
                {download.title}
              </Link>
              <Link
                to={video.ctaLink}
                className="flex items-center justify-center px-6 py-4 bg-[#1a3a52] text-white font-medium rounded hover:bg-[#2a4a62] transition-colors"
              >
                <Play className="mr-2 w-5 h-5" />
                {video.title}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CTASection;
