import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo } from '../data/translations';
import TranslationNotice from '../components/TranslationNotice';

const AboutPage = () => {
  const { locale } = useLanguage();
  const company = companyInfo?.[locale];

  const t = {
    tr: {
      title: "Hakkımızda",
      aboutText1: "Demart Mühendislik, Sofis valve operation ürünlerinin Türkiye resmi distribütörüdür. Endüstriyel vana operasyonları için akıllı çözümler sunarak, insanları, tesisleri ve dünyamızı koruyoruz.",
      aboutText2: "Sofis vana kilitleri ve taşınabilir aktüatörler, dünya genelinde öncü enerji, petrokimya ve proses endüstrisi şirketleri tarafından kullanılmaktadır. Güvenli vana operasyonlarını garanti etmek ve tesis verimliliğini artırmak için kapsamlı çözümler sunuyoruz.",
      whyUs: "Neden Biz?",
      why1: "Sofis Türkiye Resmi Distribütörü",
      why2: "Uzman teknik kadro ve yerel destek",
      why3: "Hızlı teslimat ve satış sonrası hizmet",
      why4: "Proje desteği ve danışmanlık",
      why5: "Eğitim programları",
      contact: "İletişim",
      phone: "Tel",
      email: "E-posta"
    },
    en: {
      title: "About Us",
      aboutText1: "Demart Mühendislik is the official distributor of Sofis valve operation products in Turkey. We protect people, facilities and the planet by providing smart solutions for industrial valve operations.",
      aboutText2: "Sofis valve interlocks and portable actuators are used by leading energy, petrochemical and process industry companies worldwide. We offer comprehensive solutions to ensure safe valve operations and increase plant efficiency.",
      whyUs: "Why Us?",
      why1: "Official Sofis Distributor in Turkey",
      why2: "Expert technical team and local support",
      why3: "Fast delivery and after-sales service",
      why4: "Project support and consultancy",
      why5: "Training programs",
      contact: "Contact",
      phone: "Phone",
      email: "Email"
    },
    az: {
      title: "Haqqımızda",
      aboutText1: "Demart Mühendislik, Sofis vana əməliyyat məhsullarının Türkiyədə rəsmi distribütorudur. Sənaye vana əməliyyatları üçün ağıllı həllər təqdim edərək insanları, müəssisələri və planetimizi qoruyuruq.",
      aboutText2: "Sofis vana kilidləri və portativ aktuatorlar dünya üzrə aparıcı enerji, neft-kimya və proses sənayesi şirkətləri tərəfindən istifadə olunur. Təhlükəsiz vana əməliyyatlarını təmin etmək və müəssisə səmərəliliyini artırmaq üçün hərtərəfli həllər təqdim edirik.",
      whyUs: "Niyə Biz?",
      why1: "Sofis Türkiyənin rəsmi distribütoru",
      why2: "Ekspert texniki komanda və yerli dəstək",
      why3: "Sürətli çatdırılma və satış sonrası xidmət",
      why4: "Layihə dəstəyi və məsləhətçilik",
      why5: "Təlim proqramları",
      contact: "Əlaqə",
      phone: "Telefon",
      email: "E-poçt"
    }
  };

  const text = t?.[locale];
  const hasContent = Boolean(company && text);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-[#00a0e3] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {text.title}
                </h1>
                <p className="text-white/90 text-lg">
                  {company.subtitle}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {company.fullName}
                </h2>
                <p className="text-gray-600 mb-6">
                  {text.aboutText1}
                </p>
                <p className="text-gray-600 mb-6">
                  {text.aboutText2}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                  {text.whyUs}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{text.why1}</li>
                  <li>{text.why2}</li>
                  <li>{text.why3}</li>
                  <li>{text.why4}</li>
                  <li>{text.why5}</li>
                </ul>

                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {text.contact}
                  </h3>
                  <address className="not-italic text-gray-600">
                    <p className="mb-2"><strong>{company.fullName}</strong></p>
                    <p>{company.address?.street}</p>
                    <p>{company.address?.postalCode} {company.address?.district}, {company.address?.city}</p>
                    <p className="mb-4">{company.address?.country}</p>
                    {company.phone ? (
                      <p>
                        {text.phone}:{' '}
                        <a href={`tel:${company.phone}`} className="text-[#00a0e3] hover:underline">
                          {company.phone}
                        </a>
                      </p>
                    ) : null}
                    {company.email ? (
                      <p>
                        {text.email}:{' '}
                        <a href={`mailto:${company.email}`} className="text-[#00a0e3] hover:underline">
                          {company.email}
                        </a>
                      </p>
                    ) : null}
                  </address>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
