import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { solutions, ui } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const SolutionsPage = () => {
  const { locale, t } = useLanguage();
  const solutionList = solutions?.[locale];
  const text = ui?.[locale];
  const routes = ROUTE_MAP[locale];
  const hasSolutions = Array.isArray(solutionList) && solutionList.length > 0;
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!text ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('Həllər', 'Solutions', 'Həllər')}
                </h1>
                <p className="text-white/90 text-lg">
                  {t(
                    'Vana əməliyyat həllərimiz müəssisənizi mümkün qədər səmərəli və təhlükəsiz işlətməyə kömək edir.',
                    'Our valve operation solutions help you run your facility as efficiently and safely as possible.',
                    'Vana əməliyyat həllərimiz müəssisənizi mümkün qədər səmərəli və təhlükəsiz işlətməyə kömək edir.'
                  )}
                </p>
              </>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isTrOrAz ? 'Həllər' : 'Solutions'}
            </h1>
            <p className="text-white/90 text-lg">
              {isTrOrAz
                ? 'Vana əməliyyat həllərimiz müəssisənizi mümkün qədər səmərəli və təhlükəsiz işlətməyə kömək edir.'
                : 'Our valve operation solutions help you run your facility as efficiently and safely as possible.'}
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasSolutions ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutionList.map((solution) => (
                  <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <img src={solution.image} alt={solution.title} className="w-full h-48 md:h-full object-cover" />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">{solution.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.description}</p>
                        <Link to={solution.link} className="inline-flex items-center text-[#00a0e3] font-medium text-sm hover:underline">
                          {text?.viewSolutions}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {!text ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{text.howCanWeHelp}</h2>
                <p className="text-gray-600 mb-6">
                  {t(
                    '30 ildən artıq təcrübəmizlə ağıllı vana əməliyyatları qurmağınıza kömək edə bilərik.',
                    'With over 30 years of experience, we can help you create smart valve operations.',
                    '30 ildən artıq təcrübəmizlə ağıllı vana əməliyyatları qurmağınıza kömək edə bilərik.'
                  )}
                </p>
                <Link to={routes.contact} className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors">
                  {text.contact}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </>
            )}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{text.howCanWeHelp}</h2>
            <p className="text-gray-600 mb-6">
              {isTrOrAz
                ? '30 ildən artıq təcrübəmizlə ağıllı vana əməliyyatları qurmağınıza kömək edə bilərik.'
                : 'With over 30 years of experience, we can help you create smart valve operations.'}
            </p>
            <Link to="/iletisim" className="inline-flex items-center px-6 py-3 bg-[#00a0e3] text-white font-semibold rounded hover:bg-[#0090d0] transition-colors">
              {text.contact}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
