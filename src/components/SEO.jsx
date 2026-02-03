import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo, logo, social } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  article = null 
}) => {
  const { locale } = useLanguage();
  const company = companyInfo?.[locale];
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://demart.com.tr';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title ? `${title} | ${company?.name}` : `${company?.name} - ${company?.tagline}`;
  const defaultDescriptions = {
    tr: `${company?.fullName} - Sofis Türkiye Resmi Distribütörü. Vana kilitleri, taşınabilir aktüatörler, vana bakım hizmetleri. ${company?.tagline}`,
    en: `${company?.fullName} - Official Sofis distributor in Turkey. Valve interlocks, portable actuators and valve maintenance services. ${company?.tagline}`,
    az: `${company?.fullName} - Sofis Türkiyənin rəsmi distribütoru. Vana kilidləri, portativ aktuatorlar və vana baxım xidmətləri. ${company?.tagline}`
  };
  const metaDescription = description || defaultDescriptions[locale];
  const defaultImage = logo;
  const metaImage = image || defaultImage;
  const defaultKeywordsByLocale = {
    tr: 'vana kilitleri, valve interlocks, taşınabilir aktüatör, portable actuator, vana bakım, valve maintenance, Sofis, Smith Flow Control, Netherlocks, EasiDrive, Power Wrench, pozisyoner, kontrol vanası, küresel vana, kelebek vana, aktüatör, İstanbul, Türkiye, endüstriyel vana',
    en: 'valve interlocks, portable actuator, valve maintenance, Sofis, Smith Flow Control, Netherlocks, EasiDrive, Power Wrench, position indicator, control valve, ball valve, butterfly valve, actuator, Istanbul, Turkey, industrial valve',
    az: 'vana kilidləri, valve interlocks, portativ aktuator, vana baxım, Sofis, Smith Flow Control, Netherlocks, EasiDrive, Power Wrench, mövqe göstəricisi, idarəetmə klapanı, kürə klapan, kəpənək klapan, aktuator, İstanbul, Türkiyə, sənaye klapanı'
  };
  const defaultKeywords = defaultKeywordsByLocale[locale];
  const { language, locale } = useLanguage();
  const company = companyInfo[language] || companyInfo.tr;
  const isTrOrAz = language === 'tr' || language === 'az';
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://demart.com.tr';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title ? `${title} | ${company.name}` : `${company.name} - ${company.tagline}`;
  const defaultDescription = isTrOrAz
    ? `${company.fullName} - Sofis Türkiye Resmi Distribütörü. Vana kilitleri, taşınabilir aktüatörler, vana bakım hizmetleri. ${company.tagline}`
    : `${company.fullName} - Official Sofis distributor in Turkey. Valve interlocks, portable actuators and valve maintenance services. ${company.tagline}`;
  const metaDescription = description || defaultDescription;
  const defaultImage = logo;
  const metaImage = image || defaultImage;
  const defaultKeywords = isTrOrAz
    ? 'vana kilitleri, valve interlocks, taşınabilir aktüatör, portable actuator, vana bakım, valve maintenance, Sofis, Smith Flow Control, Netherlocks, EasiDrive, Power Wrench, pozisyoner, kontrol vanası, küresel vana, kelebek vana, aktüatör, İstanbul, Türkiye, endüstriyel vana'
    : 'valve interlocks, portable actuator, valve maintenance, Sofis, Smith Flow Control, Netherlocks, EasiDrive, Power Wrench, position indicator, control valve, ball valve, butterfly valve, actuator, Istanbul, Turkey, industrial valve';
  const localeTag = locale === 'en' ? 'en_US' : locale === 'az' ? 'az_AZ' : 'tr_TR';
  const languageName = locale === 'en' ? 'English' : locale === 'az' ? 'Azerbaijani' : 'Turkish';

  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.fullName,
    alternateName: company.name,
    url: siteUrl,
    logo,
    description: metaDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.district,
      addressRegion: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: 'TR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      email: company.email,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English', 'Azerbaijani']
    },
    sameAs: [
      social.linkedin,
      social.youtube
    ]
  };

  // JSON-LD for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: company.fullName,
    image: logo,
    description: metaDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.district,
      addressRegion: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9279,
      longitude: 29.2332
    },
    telephone: company.phone,
    email: company.email,
    url: siteUrl,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00'
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={company.fullName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Language */}
      <html lang={locale} />
      <meta name="language" content={languageName} />
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content={localeTag} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Article specific (for blog posts) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
        </>
      )}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#00a0e3" />
      <meta name="msapplication-TileColor" content="#00a0e3" />
    </Helmet>
  );
};

export default SEO;
