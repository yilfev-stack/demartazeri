import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import CTASection from '../components/CTASection';
import EnergyTransitionSection from '../components/EnergyTransitionSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import ContactCTASection from '../components/ContactCTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        <HeroSection />
        <NewsSection />
        <CTASection />
        <EnergyTransitionSection />
        <ServicesSection />
        <ClientsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
