import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { navigation, companyInfo, logo, social, ui } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const nav = navigation?.[locale] || [];
  const company = companyInfo?.[locale] || {};
  const text = ui?.[locale] || {};

  const getNavLabel = (href, fallback) =>
    nav.find((item) => item.href === href)?.name || fallback;

  // Hızlı linkler - 4 sol, 4 sağ
  const linksColumn1 = [
    { name: getNavLabel(routes.home, 'Ana Sayfa'), href: routes.home },
    { name: getNavLabel(routes.products, 'Ürünler'), href: routes.products },
    { name: getNavLabel(routes.services, 'Hizmetler'), href: routes.services },
    { name: getNavLabel(routes.solutions, 'Çözümler'), href: routes.solutions },
  ];

  const linksColumn2 = [
    { name: getNavLabel(routes.applications, 'Uygulamalar'), href: routes.applications },
    { name: getNavLabel(routes.industries, 'Sektörler'), href: routes.industries },
    { name: getNavLabel(routes.faq, 'SSS'), href: routes.faq },
    { name: t('Videolar', 'Videos', 'Videolar'), href: routes.videos },
    { name: text.documentation, href: routes.docs },
  ];

  return (
    <footer className="bg-[#2d3748] border-t border-gray-700">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {text.quickLinks}
            </h3>
            <ul className="space-y-3">
              {linksColumn1.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-xs text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t('Kaynaklar', 'Resources', 'Mənbələr')}
            </h3>
            <ul className="space-y-3">
              {linksColumn2.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-xs text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t('Şirket', 'Company', 'Şirkət')}
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to={routes.about} className="text-xs text-gray-300 hover:text-white transition-colors">
                  {getNavLabel(routes.about, 'Hakkımızda')}
                </Link>
              </li>

              <li>
                <Link to={routes.news} className="text-xs text-gray-300 hover:text-white transition-colors">
                  {t('Haberler', 'News', 'Xəbərlər')}
                </Link>
              </li>

              <li>
                <Link to={routes.customerStories} className="text-xs text-gray-300 hover:text-white transition-colors">
                  {t('Müşteri Hikayeleri', 'Customer Stories', 'Müştəri Hekayələri')}
                </Link>
              </li>

              <li>
                <Link to={routes.contact} className="text-xs text-gray-300 hover:text-white transition-colors">
                  {text.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {text.contact}
            </h3>
            <address className="not-italic text-xs text-gray-300 space-y-3">
              <p>{company?.address?.street}</p>
              <p>
                {company?.address?.district}, {company?.address?.city}
              </p>
              {company?.phone ? (
                <p>
                  <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                    {company.phone}
                  </a>
                </p>
              ) : null}
              {company?.email ? (
                <p>
                  <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                    {company.email}
                  </a>
                </p>
              ) : null}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 bg-[#1a202c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Logo & Copyright */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt={company?.name || 'Demart'}
                className="h-12 w-auto object-contain bg-white p-1 rounded"
              />
              <p className="text-xs text-gray-400">
                © {currentYear} {company?.name}. {text?.allRightsReserved}.
              </p>
            </div>

            {/* Right - Links & Social */}
            <div className="flex items-center gap-6">
              <Link to={routes.privacy} className="text-xs text-gray-400 hover:text-white transition-colors">
                {t('Gizlilik', 'Privacy', 'Məxfilik')}
              </Link>
              <Link to={routes.cookies} className="text-xs text-gray-400 hover:text-white transition-colors">
                {t('Çerezler', 'Cookies', 'Çərəzlər')}
              </Link>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
