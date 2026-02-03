import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { companyInfo } from '../data/translations';
import TranslationNotice from '../components/TranslationNotice';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const { locale, t } = useLanguage();
  const company = companyInfo?.[locale] || companyInfo?.tr || {};

  const copy = {
    tr: {
      title: 'Bilgi Talebi',
      subtitle: 'Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.',
      contactInfo: 'İletişim Bilgileri',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      sendMessage: 'Mesaj Gönderin',
      formDesc: 'Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapacağız.',
      name: 'Ad Soyad',
      emailLabel: 'E-posta Adresi',
      companyLabel: 'Şirket (Opsiyonel)',
      phoneLabel: 'Telefon (Opsiyonel)',
      message: 'Mesajınız',
      send: 'Gönder',
      directContact: 'Doğrudan İletişim',
      directContactDesc: 'Formu kullanmak yerine doğrudan e-posta veya telefon ile de bize ulaşabilirsiniz.'
    },
    en: {
      title: 'Information Request',
      subtitle: 'Contact us with your questions, we are happy to help you.',
      contactInfo: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      sendMessage: 'Send a Message',
      formDesc: 'Fill out the form below and we will get back to you as soon as possible.',
      name: 'Full Name',
      emailLabel: 'Email Address',
      companyLabel: 'Company (Optional)',
      phoneLabel: 'Phone (Optional)',
      message: 'Your Message',
      send: 'Send',
      directContact: 'Direct Contact',
      directContactDesc: 'You can also reach us directly via email or phone instead of using the form.'
    },
    az: {
      title: 'Məlumat Sorğusu',
      subtitle: 'Suallarınız üçün bizimlə əlaqə saxlayın, sizə kömək etməkdən məmnun olarıq.',
      contactInfo: 'Əlaqə Məlumatları',
      address: 'Ünvan',
      phone: 'Telefon',
      email: 'E-poçt',
      sendMessage: 'Mesaj Göndərin',
      formDesc: 'Aşağıdakı formu doldurun, ən qısa zamanda sizə geri dönüş edəcəyik.',
      name: 'Ad Soyad',
      emailLabel: 'E-poçt Ünvanı',
      companyLabel: 'Şirkət (İstəyə bağlı)',
      phoneLabel: 'Telefon (İstəyə bağlı)',
      message: 'Mesajınız',
      send: 'Göndər',
      directContact: 'Birbaşa Əlaqə',
      directContactDesc: 'Formdan istifadə etmək əvəzinə bizimlə birbaşa e-poçt və ya telefonla əlaqə saxlaya bilərsiniz.'
    }
  };

  const text = copy?.[locale] || copy.tr;

  // En azından company objesi var; adres/telefon/email alanları opsiyonel olabilir.
  const hasContent = Boolean(text);

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
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{text.title}</h1>
                <p className="text-white/90 text-lg">{text.subtitle}</p>
              </>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                {!hasContent ? (
                  <TranslationNotice locale={locale} />
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{text.contactInfo}</h2>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 text-[#00a0e3] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{text.address}</h3>
                          <p className="text-gray-600">
                            {company.address?.street ? (
                              <>
                                {company.address.street}
                                <br />
                              </>
                            ) : null}
                            {company.address?.postalCode || company.address?.district || company.address?.city ? (
                              <>
                                {company.address?.postalCode ? `${company.address.postalCode} ` : ''}
                                {company.address?.district ? `${company.address.district}, ` : ''}
                                {company.address?.city || ''}
                                <br />
                              </>
                            ) : null}
                            {company.address?.country || ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-[#00a0e3] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{text.phone}</h3>
                          {company.phone ? (
                            <a href={`tel:${company.phone}`} className="text-gray-600 hover:text-[#00a0e3]">
                              {company.phone}
                            </a>
                          ) : (
                            <p className="text-gray-500 text-sm">—</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="w-6 h-6 text-[#00a0e3] mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{text.email}</h3>
                          {company.email ? (
                            <a href={`mailto:${company.email}`} className="text-gray-600 hover:text-[#00a0e3]">
                              {company.email}
                            </a>
                          ) : (
                            <p className="text-gray-500 text-sm">—</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact Box */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                      <h3 className="font-semibold text-gray-900 mb-2">{text.directContact}</h3>
                      <p className="text-gray-600 text-sm mb-4">{text.directContactDesc}</p>
                      <div className="flex flex-wrap gap-3">
                        {company.email ? (
                          <a
                            href={`mailto:${company.email}`}
                            className="inline-flex items-center px-4 py-2 bg-[#00a0e3] text-white text-sm font-medium rounded hover:bg-[#0090d0] transition-colors"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            {company.email}
                          </a>
                        ) : null}

                        {company.phone ? (
                          <a
                            href={`tel:${company.phone}`}
                            className="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {company.phone}
                          </a>
                        ) : null}
                      </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-8">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.8972371257086!2d29.2395!3d40.8756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzMyLjIiTiAyOcKwMTQnMjIuMiJF!5e0!3m2!1str!2str!4v1234567890"
                        width="100%"
                        height="250"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t('Demart Mühendislik Konumu', 'Demart Engineering Location', 'Demart Mühəndislik Konumu')}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Contact Form - Web3Forms */}
              <div>
                {!hasContent ? (
                  <TranslationNotice locale={locale} />
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{text.sendMessage}</h2>
                    <p className="text-gray-600 mb-6">{text.formDesc}</p>

                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                      <input type="hidden" name="access_key" value="68a12e74-90d2-47c8-838d-3925648340cb" />
                      <input type="hidden" name="subject" value="Demart Web Sitesi - Yeni İletişim Formu" />
                      <input type="hidden" name="from_name" value="Demart Website" />

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{text.name} *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{text.emailLabel} *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{text.companyLabel}</label>
                          <input
                            type="text"
                            name="company"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{text.phoneLabel}</label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{text.message} *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-[#00a0e3] text-white font-semibold rounded-lg hover:bg-[#0090d0] transition-colors flex items-center justify-center"
                      >
                        {text.send}
                        <Send className="ml-2 w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
