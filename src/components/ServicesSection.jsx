import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const ServicesSection = () => {
  const { locale, t } = useLanguage();

  const serviceList = services?.[locale] || [];
  const hasServices = Array.isArray(serviceList) && serviceList.length > 0;

  const sectionTitle = t(
    'Vana Güvenlik Sistemlerinizin Bütünlüğünü Korumanıza Yardımcı Oluyoruz',
    'We Help You Maintain the Integrity of Your Valve Safety Systems',
    'Vana Təhlükəsizlik Sistemlərinizin Bütövlüyünü Qorumağa Kömək Edirik'
  );

  const goToText = (title) =>
    t(
      `${title} sayfasına git`,
      `Go to ${title}`,
      `${title} səhifəsinə keç`
    );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          {sectionTitle}
        </h2>

        {!hasServices ? (
          <TranslationNotice locale={locale} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceList.map((service) => (
              <div key={service.id} className="group">
                <Link to={service.link}>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a0e3] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center text-[#00a0e3] font-medium text-sm">
                    {goToText(service.title)}
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
