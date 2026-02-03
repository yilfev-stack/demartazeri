import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems, ui } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const NewsSection = () => {
  const { locale } = useLanguage();
  const news = newsItems?.[locale];
  const text = ui?.[locale];
  const hasNews = Array.isArray(news) && news.length > 0;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!text || !hasNews ? (
          <TranslationNotice locale={locale} />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-[#00a0e3] mb-10">
              {text.latestNews}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <article key={item.id} className="group">
                  <Link to={item.link}>
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00a0e3] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center text-[#00a0e3] font-medium text-sm">
                      {text.readBlog}
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
