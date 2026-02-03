import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TranslationNotice from '../components/TranslationNotice';

const content = {
  tr: {
    title: "Gizlilik Politikası",
    lastUpdated: "Son Güncelleme: Ocak 2025",
    intro: "Demart Mühendislik Sanayi Ticaret Limited Şirketi olarak, kişisel verilerinizin güvenliği bizim için önemlidir. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde toplanan bilgileri ve bunların nasıl kullanıldığını açıklar.",
    sections: [
      {
        icon: Database,
        title: "Toplanan Bilgiler",
        content: [
          "İletişim formu aracılığıyla gönderdiğiniz ad, e-posta adresi ve mesaj içeriği",
          "Web sitemizi ziyaret ettiğinizde otomatik olarak toplanan teknik bilgiler (IP adresi, tarayıcı türü, ziyaret edilen sayfalar)",
          "Çerezler aracılığıyla toplanan tercih ve analitik verileri"
        ]
      },
      {
        icon: Eye,
        title: "Bilgilerin Kullanım Amacı",
        content: [
          "İletişim taleplerinize yanıt vermek",
          "Web sitemizi geliştirmek ve kullanıcı deneyimini iyileştirmek",
          "Hizmetlerimiz hakkında bilgi sağlamak",
          "Yasal yükümlülüklerimizi yerine getirmek"
        ]
      },
      {
        icon: Lock,
        title: "Bilgi Güvenliği",
        content: [
          "SSL/TLS şifreleme ile veri aktarımı güvenliği",
          "Güvenli sunucularda veri depolama",
          "Yetkisiz erişime karşı koruma önlemleri",
          "Düzenli güvenlik güncellemeleri"
        ]
      },
      {
        icon: UserCheck,
        title: "Haklarınız (KVKK)",
        content: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
          "İşlenmişse buna ilişkin bilgi talep etme",
          "İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
          "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme",
          "Kişisel verilerinizin düzeltilmesini veya silinmesini isteme"
        ]
      }
    ],
    thirdParty: {
      title: "Üçüncü Taraf Hizmetler",
      content: "Web sitemiz, analitik ve performans izleme amacıyla üçüncü taraf hizmetler kullanabilir. Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır."
    },
    contact: {
      title: "İletişim",
      content: "Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:",
      email: "info@demart.com.tr",
      address: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, İstanbul, Türkiye"
    }
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 2025",
    intro: "As Demart Mühendislik Sanayi Ticaret Limited Şirketi, the security of your personal data is important to us. This Privacy Policy explains what information is collected when you visit our website and how it is used.",
    sections: [
      {
        icon: Database,
        title: "Information Collected",
        content: [
          "Name, email address and message content submitted through the contact form",
          "Technical information automatically collected when you visit our website (IP address, browser type, pages visited)",
          "Preference and analytics data collected through cookies"
        ]
      },
      {
        icon: Eye,
        title: "Purpose of Use",
        content: [
          "To respond to your contact requests",
          "To improve our website and enhance user experience",
          "To provide information about our services",
          "To fulfill our legal obligations"
        ]
      },
      {
        icon: Lock,
        title: "Information Security",
        content: [
          "Data transfer security with SSL/TLS encryption",
          "Data storage on secure servers",
          "Protection measures against unauthorized access",
          "Regular security updates"
        ]
      },
      {
        icon: UserCheck,
        title: "Your Rights (GDPR/KVKK)",
        content: [
          "Learn whether your personal data is being processed",
          "Request information if it has been processed",
          "Learn the purpose of processing and whether it is used in accordance with its purpose",
          "Know the third parties to whom your personal data has been transferred domestically or abroad",
          "Request correction or deletion of your personal data"
        ]
      }
    ],
    thirdParty: {
      title: "Third Party Services",
      content: "Our website may use third party services for analytics and performance monitoring. These services have their own privacy policies."
    },
    contact: {
      title: "Contact",
      content: "For questions about our privacy policy, you can contact us:",
      email: "info@demart.com.tr",
      address: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, Istanbul, Turkey"
    }
  },
  az: {
    title: "Məxfilik Siyasəti",
    lastUpdated: "Son Yenilənmə: Yanvar 2025",
    intro: "Demart Mühendislik Sanayi Ticaret Limited Şirketi olaraq şəxsi məlumatlarınızın təhlükəsizliyi bizim üçün önəmlidir. Bu Məxfilik Siyasəti saytımızı ziyarət etdiyinizdə toplanan məlumatları və onların necə istifadə olunduğunu izah edir.",
    sections: [
      {
        icon: Database,
        title: "Toplanan Məlumatlar",
        content: [
          "Əlaqə formu vasitəsilə göndərdiyiniz ad, e-poçt ünvanı və mesaj məzmunu",
          "Saytı ziyarət etdikdə avtomatik toplanan texniki məlumatlar (IP ünvanı, brauzer növü, ziyarət edilən səhifələr)",
          "Çerezlər vasitəsilə toplanan seçim və analitika məlumatları"
        ]
      },
      {
        icon: Eye,
        title: "İstifadə Məqsədi",
        content: [
          "Əlaqə sorğularınıza cavab vermək",
          "Saytımızı təkmilləşdirmək və istifadəçi təcrübəsini yaxşılaşdırmaq",
          "Xidmətlərimiz haqqında məlumat təmin etmək",
          "Hüquqi öhdəliklərimizi yerinə yetirmək"
        ]
      },
      {
        icon: Lock,
        title: "Məlumat Təhlükəsizliyi",
        content: [
          "SSL/TLS şifrələmə ilə məlumat ötürülməsi təhlükəsizliyi",
          "Məlumatların təhlükəsiz serverlərdə saxlanılması",
          "İcazəsiz girişə qarşı qoruyucu tədbirlər",
          "Mütəmadi təhlükəsizlik yeniləmələri"
        ]
      },
      {
        icon: UserCheck,
        title: "Hüquqlarınız",
        content: [
          "Şəxsi məlumatlarınızın işlənib-işlənmədiyini öyrənmək",
          "İşlənibsə buna dair məlumat tələb etmək",
          "İşlənmə məqsədini və həmin məqsədə uyğun istifadə olunub-olunmadığını öyrənmək",
          "Şəxsi məlumatlarınızın ölkədaxili və ya xaricdə ötürüldüyü üçüncü şəxsləri bilmək",
          "Şəxsi məlumatlarınızın düzəldilməsini və ya silinməsini tələb etmək"
        ]
      }
    ],
    thirdParty: {
      title: "Üçüncü Tərəf Xidmətlər",
      content: "Saytımız analitika və performans izləmə məqsədi ilə üçüncü tərəf xidmətlərindən istifadə edə bilər. Bu xidmətlərin öz məxfilik siyasətləri mövcuddur."
    },
    contact: {
      title: "Əlaqə",
      content: "Məxfilik siyasətimizlə bağlı suallarınız üçün bizimlə əlaqə saxlaya bilərsiniz:",
      email: "info@demart.com.tr",
      address: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, İstanbul, Türkiyə"
    }
  }
};

const PrivacyPolicyPage = () => {
  const { locale, t } = useLanguage();
  const data = content?.[locale];
  const hasContent = Boolean(data);
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero */}
        <section className="bg-gray-900 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="w-16 h-16 text-[#00a0e3] mx-auto mb-4" />
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {data.title}
                </h1>
                <p className="text-gray-400">{data.lastUpdated}</p>
              </>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {data.intro}
              </p>
            )}

            {!hasContent ? (
              <TranslationNotice locale={locale} />
            ) : (
              <div className="space-y-8">
                {data.sections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#00a0e3]/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#00a0e3]" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <ul className="space-y-2">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#00a0e3] rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                {/* Third Party */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{data.thirdParty.title}</h2>
                  <p className="text-gray-600">{data.thirdParty.content}</p>
                </div>

                {/* Contact */}
                <div className="bg-[#00a0e3]/5 rounded-lg p-6 border border-[#00a0e3]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-[#00a0e3]" />
                    <h2 className="text-xl font-bold text-gray-900">{data.contact.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{data.contact.content}</p>
                  <p className="text-gray-700">
                    <strong>{t('E-posta:', 'Email:', 'E-poçt:')}</strong>{' '}
                    <a href={`mailto:${data.contact.email}`} className="text-[#00a0e3] hover:underline">{data.contact.email}</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>{t('Ünvan:', 'Address:', 'Ünvan:')}</strong> {data.contact.address}
                  </p>
                </div>
                
                <p className="text-gray-600 mb-4">{data.contact.content}</p>
                <p className="text-gray-700">
                  <strong>E-posta:</strong> <a href={`mailto:${data.contact.email}`} className="text-[#00a0e3] hover:underline">{data.contact.email}</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>{isTrOrAz ? 'Ünvan:' : 'Address:'}</strong> {data.contact.address}
                </p>

              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
