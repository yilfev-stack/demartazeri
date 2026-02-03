import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems } from '../data/translations';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';

const newsDetails = {
  'tank-dip-tahliye-vanasi': {
    tr: {
      title: "Tank Dip Tahliye Vanası İçin Uzaktan Vana Operatörü ile Güvenlik ve Verimlilik Dönüşümü",
      content: `
        <p>Bir rafineride, sorunsuz operasyonlar ve işçi güvenliği en önemli önceliktir. Sofis, bu kritik vananın operasyonunu dönüştüren bir çözüm sunarak güvenlik, verimlilik ve güvenilirlik sağladı.</p>
        
        <h2>Zorluk</h2>
        <p>Tank dip tahliye vanaları genellikle tehlikeli ve zor erişilen konumlarda bulunur. Operatörler bu vanaları manuel olarak çalıştırırken önemli güvenlik riskleriyle karşı karşıya kalıyordu.</p>
        
        <h2>Çözüm</h2>
        <p>FlexiDrive uzaktan vana operatörü kullanılarak, operatörler artık güvenli bir mesafeden vanaları çalıştırabilir hale geldi. Bu sistem:</p>
        <ul>
          <li>Operatör güvenliğini önemli ölçüde artırdı</li>
          <li>Operasyon süresini %40 azalttı</li>
          <li>Bakım maliyetlerini düşürdü</li>
          <li>7/24 güvenilir çalışma sağladı</li>
        </ul>
        
        <h2>Sonuç</h2>
        <p>Müşteri, FlexiDrive sistemini tüm tank çiftliğine yaygınlaştırmaya karar verdi ve toplam 24 vanayı uzaktan kontrol sistemiyle donattı.</p>
      `,
      image: "/images/news/news-1.jpg"
    },
    en: {
      title: "Safety and Efficiency Transformation with Remote Valve Operator for Tank Bottom Drain Valve",
      content: `
        <p>In a refinery, seamless operations and worker safety are top priorities. Sofis delivered a solution that transformed the operation of this critical valve, ensuring safety, efficiency and reliability.</p>
        
        <h2>Challenge</h2>
        <p>Tank bottom drain valves are often located in hazardous and hard-to-reach locations. Operators faced significant safety risks when manually operating these valves.</p>
        
        <h2>Solution</h2>
        <p>By using the FlexiDrive remote valve operator, operators can now operate valves from a safe distance. This system:</p>
        <ul>
          <li>Significantly improved operator safety</li>
          <li>Reduced operation time by 40%</li>
          <li>Lowered maintenance costs</li>
          <li>Provided 24/7 reliable operation</li>
        </ul>
        
        <h2>Result</h2>
        <p>The customer decided to expand the FlexiDrive system across the entire tank farm, equipping a total of 24 valves with the remote control system.</p>
      `,
      image: "/images/news/news-1.jpg"
    }
  },
  'kamyon-yuklemesi-hassasiyet': {
    tr: {
      title: "Silo ve Terminal Yüklemesinde Doğru Ürün: Yanlış Hat Açmaları Nasıl Önlenir?",
      content: `
        <p>Silo ve terminal yükleme operasyonlarında operatörler zaman zaman yanlış hatlara yönelerek yanlış vanaları açabiliyordu. Sofis, bu hataları ortadan kaldıran bir çözüm sundu.</p>
        
        <h2>Problem</h2>
        <p>Oil &amp; gas terminal operasyonlarında çapraz kontaminasyon ve yanlış ürün yüklemesi ciddi sorunlara yol açabilir. Örneğin mazot yüklenecek bir kamyonun yanlışlıkla benzin hattına yönlenmesi hem güvenlik hem de ürün kalitesi açısından büyük risk taşır. Manuel vana operasyonlarında insan hatası bu riskleri artırıyordu.</p>
        
        <h2>Çözüm</h2>
        <p>Sofis vana kilit sistemi, önceden tanımlanmış bir sırayı zorunlu kılarak yalnızca doğru vanaların doğru zamanda açılmasını sağlar:</p>
        <ul>
          <li>Çapraz kontaminasyonu önler</li>
          <li>Yanlış ürün yüklemesini imkansız kılar</li>
          <li>Operatör eğitim süresini kısaltır</li>
          <li>Sigorta primlerini düşürür</li>
        </ul>
        
        <h2>Sonuç</h2>
        <p>Sistem kurulumundan bu yana sıfır yanlış yükleme olayı yaşandı ve operasyonel verimlilik %25 arttı.</p>
      `,
      image: "/images/news/news-2.jpg"
    },
    en: {
      title: "Right Product in Silo and Terminal Loading: How to Prevent Wrong Lineups?",
      content: `
        <p>In silo and terminal loading operations, operators could sometimes route to the wrong lines and open the wrong valves. Sofis provided a solution that eliminates these errors.</p>
        
        <h2>Problem</h2>
        <p>In oil &amp; gas terminal operations, cross-contamination and product misloading can lead to serious problems. For example, a truck meant to load diesel can be mistakenly routed to a gasoline line, creating major safety and product-quality risks. Human error in manual valve operations increased these risks.</p>
        
        <h2>Solution</h2>
        <p>The Sofis valve interlock system enforces a predefined sequence, ensuring only the correct valves are opened at the correct time:</p>
        <ul>
          <li>Prevents cross-contamination</li>
          <li>Makes product misloading impossible</li>
          <li>Reduces operator training time</li>
          <li>Lowers insurance premiums</li>
        </ul>
        
        <h2>Result</h2>
        <p>Since system installation, zero misloading incidents have occurred and operational efficiency increased by 25%.</p>
      `,
      image: "/images/news/news-2.jpg"
    }
  },
  'zincirli-vana-riskleri': {
    tr: {
      title: "Zincirli Vana Operasyonları Operatörlerinizi Nasıl Riske Atıyor?",
      content: `
        <p>FlexiDrive uzaktan vana operatörü, manuel vanaların güvenli ve erişilebilir bir konumdan çalıştırılmasını sağlayan güvenli ve maliyet etkin bir alternatif sunar.</p>
        
        <h2>Geleneksel Zincirli Sistemlerin Riskleri</h2>
        <p>Zincirli vana operasyon sistemleri birçok güvenlik riski taşır:</p>
        <ul>
          <li>Zincir kopması sonucu yaralanmalar</li>
          <li>Ergonomik olmayan çalışma pozisyonları</li>
          <li>Yüksek bakım maliyetleri</li>
          <li>Düşük operasyonel güvenilirlik</li>
        </ul>
        
        <h2>FlexiDrive Avantajları</h2>
        <p>FlexiDrive sistemi bu riskleri ortadan kaldırır:</p>
        <ul>
          <li>Güvenli mesafeden operasyon</li>
          <li>Ergonomik tasarım</li>
          <li>Düşük bakım gereksinimi</li>
          <li>Uzun ömürlü ve güvenilir</li>
        </ul>
        
        <h2>Sonuç</h2>
        <p>Müşterilerimiz FlexiDrive'a geçtikten sonra vana operasyonlarıyla ilgili iş kazalarında %90 azalma bildirdi.</p>
      `,
      image: "/images/news/news-3.jpg"
    },
    en: {
      title: "How Chain Wheel Valve Operations Put Your Operators at Risk?",
      content: `
        <p>The FlexiDrive remote valve operator provides a safe and cost-effective alternative that allows manual valves to be operated from a safe and accessible location.</p>
        
        <h2>Risks of Traditional Chain Systems</h2>
        <p>Chain wheel valve operation systems carry several safety risks:</p>
        <ul>
          <li>Injuries from chain breakage</li>
          <li>Non-ergonomic working positions</li>
          <li>High maintenance costs</li>
          <li>Low operational reliability</li>
        </ul>
        
        <h2>FlexiDrive Advantages</h2>
        <p>The FlexiDrive system eliminates these risks:</p>
        <ul>
          <li>Operation from a safe distance</li>
          <li>Ergonomic design</li>
          <li>Low maintenance requirements</li>
          <li>Long-lasting and reliable</li>
        </ul>
        
        <h2>Result</h2>
        <p>Our customers reported a 90% reduction in work accidents related to valve operations after switching to FlexiDrive.</p>
      `,
      image: "/images/news/news-3.jpg"
    }
  }
};

const NewsDetailPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const articleSet = newsDetails[slug];
  const article = articleSet?.[locale];
  const { language } = useLanguage();
  const isTrOrAz = language === 'tr' || language === 'az';

  
  if (!articleSet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">

              {t('Haber Bulunamadı', 'Article Not Found', 'Xəbər Tapılmadı')}
            </h1>
            <Link to={routes.news} className="text-[#00a0e3] hover:underline">
              {t('Haberlere Dön', 'Back to News', 'Xəbərlərə Qayıt')}

              {isTrOrAz ? 'Xəbər Tapılmadı' : 'Article Not Found'}
            </h1>
            <Link to="/haberler" className="text-[#00a0e3] hover:underline">
              {isTrOrAz ? 'Xəbərlərə Qayıt' : 'Back to News'}

            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[104px] flex items-center justify-center">
          <TranslationNotice locale={locale} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[104px]">
        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[400px] bg-gray-900">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                to={routes.news} 
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('Tüm Haberler', 'All News', 'Bütün Xəbərlər')}
                {isTrOrAz ? 'Bütün Xəbərlər' : 'All News'}

              </Link>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>2024</span>
              </div>
              <button className="flex items-center text-gray-500 hover:text-[#00a0e3] transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                {t('Paylaş', 'Share', 'Paylaş')}

                {isTrOrAz ? 'Paylaş' : 'Share'}

              </button>
            </div>
            
            <article 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-12 pt-8 border-t">
              <Link 
                to={routes.news}
                className="inline-flex items-center text-[#00a0e3] font-medium hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />

                {t('Tüm Haberlere Dön', 'Back to All News', 'Bütün Xəbərlərə Qayıt')}
                {isTrOrAz ? 'Bütün Xəbərlərə Qayıt' : 'Back to All News'}

              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
