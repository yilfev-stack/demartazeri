import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { clients, clientsSection } from '../data/translations';
import TranslationNotice from './TranslationNotice';

const ClientsSection = () => {
  const { locale } = useLanguage();
  const section = clientsSection?.[locale];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst çizgi */}
        <div className="border-t border-gray-200 mb-12"></div>
        
        {!section ? (
          <TranslationNotice locale={locale} />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-[#00a0e3] text-center mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              {section.description}
            </p>
          </>
        )}
        
        {/* Client names as text */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="text-gray-400 hover:text-gray-700 font-semibold text-lg transition-all duration-300"
            >
              {client.name}
            </div>
          ))}
        </div>
        
        {/* Alt çizgi */}
        <div className="border-t border-gray-200 mt-12"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
