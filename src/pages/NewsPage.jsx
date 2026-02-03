import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems } from '../data/translations';
import TranslationNotice from '../components/TranslationNotice';

const NewsPage = () => {
  const { locale, t } = useLanguage();

  const news = newsItems?.[locale] || [];
  const hasNews = Array.isArray(news) && news.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasNews ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('Xəbərlər & Yeniliklər', 'News & Updates', 'Xəbərlər & Yeniliklər')}
                </h1>
                <p className="text-white/90 text-lg">
                  {t(
                    'Sofis və Demart Mühəndislikdən ən son xəbərlər və uğur hekayələri',
                    'Latest news and success stories from Sofis and Demart Engineering',
                    'Sofis və Demart Mühəndislikdən ən son xəbərlər və uğur hekayələri'
                  )}
                </p>
              </>
            ) : (
              <TranslationNotice locale={locale} />
            )}
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasNews ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <Link to={item.link}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // img fallback (kırık linklerde)
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80';
                        }}
                      />
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{item.year || '2024'}</span>
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <Link
                        to={item.link}
                        className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline"
                      >
                        {t('Davamını Oxu', 'Read More', 'Davamını Oxu')}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
