import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import { navigation, companyInfo, social } from '../data/translations';
import SEOHead from './SEOHead';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const { locale, setLocale, t } = useLanguage();

  const routes = ROUTE_MAP?.[locale] || ROUTE_MAP?.tr;

  const nav = useMemo(() => navigation?.[locale] || [], [locale]);
  const company = useMemo(() => companyInfo?.[locale] || {}, [locale]);
  const phoneHref = company?.phone ? `tel:${company.phone}` : '#';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü açıkken route değişirse otomatik kapat
  useEffect(() => {
    setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const langButtons = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'az', label: 'AZ' },
  ];

  return (
    <>
      <SEOHead />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        {/* Top bar */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 text-sm">
              {/* Social */}
              <div className="flex items-center space-x-4">
                {social?.linkedin ? (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0077b5] transition-colors"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                ) : null}

                {social?.youtube ? (
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition-colors"
                    aria-label="YouTube"
                  >
                    YouTube
                  </a>
                ) : null}
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 rounded bg-white border border-gray-300 p-0.5 text-xs font-semibold">
                {langButtons.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLocale(item.code)}
                    aria-pressed={locale === item.code}
                    className={`px-2 py-1 rounded transition-all ${
                      locale === item.code
                        ? 'bg-[#00a0e3] text-white'
                        : 'text-gray-600 hover:bg-[#00a0e3] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <Link to={routes.home} className="flex items-center gap-2 font-bold text-gray-900">
                <span className="text-[#00a0e3]">DEMART</span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-6">
                {nav.map((item) => (
                  <Link
                    key={item.key || item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.href ? 'text-[#00a0e3]' : 'text-gray-700 hover:text-[#00a0e3]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Docs (bazı projelerde nav içinde yok diye ayrıca ekliyorum) */}
                {routes?.docs ? (
                  <Link
                    to={routes.docs}
                    className={`text-sm font-medium transition-colors inline-flex items-center ${
                      location.pathname === routes.docs ? 'text-[#00a0e3]' : 'text-gray-700 hover:text-[#00a0e3]'
                    }`}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {t('Dokümantasyon', 'Docs', 'Sənədlər')}
                  </Link>
                ) : null}
              </nav>

              {/* Desktop right */}
              <div className="hidden lg:flex items-center gap-4">
                {company?.phone ? (
                  <a href={phoneHref} className="inline-flex items-center text-sm font-semibold text-[#00a0e3]">
                    <Phone className="w-4 h-4 mr-2" />
                    {company.phone}
                  </a>
                ) : null}

                <Link
                  to={routes.contact}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-[#00a0e3] text-white text-sm font-semibold hover:bg-[#0090d0] transition-colors"
                >
                  {t('İletişim', 'Contact', 'Əlaqə')}
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#00a0e3]"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="space-y-1">
                  {nav.map((item) => (
                    <Link
                      key={item.key || item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'bg-[#00a0e3] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {routes?.docs ? (
                    <Link
                      to={routes.docs}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors flex items-center ${
                        location.pathname === routes.docs
                          ? 'bg-[#00a0e3] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {t('Dokümantasyon Merkezi', 'Documentation Center', 'Dokümantasiya Mərkəzi')}
                    </Link>
                  ) : null}

                  <Link
                    to={routes.contact}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === routes.contact
                        ? 'bg-[#00a0e3] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {t('İletişim', 'Contact', 'Əlaqə')}
                  </Link>

                  {company?.phone ? (
                    <a
                      href={phoneHref}
                      className="block px-4 py-3 rounded-lg text-[#00a0e3] font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <span className="inline-flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {company.phone}
                      </span>
                    </a>
                  ) : null}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
