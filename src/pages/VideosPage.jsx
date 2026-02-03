import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TranslationNotice from '../components/TranslationNotice';

// Sofis YouTube Channel ID
const SOFIS_CHANNEL_ID = 'UCb6NwXGwNOg_D13XP7UJEaQ';
const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/channel/${SOFIS_CHANNEL_ID}`;

// Sofis YouTube kanalındaki tüm videolar
const defaultVideos = [
  // En yeni videolar
  {
    id: 'iDNBFRmztr0',
    title: 'Ensuring safe operations across the hydrogen value chain',
    titleTr: 'Hidrojen değer zincirinde güvenli operasyonlar',
    titleAz: 'Hidrogen dəyər zəncirində təhlükəsiz əməliyyatlar',
    description: 'Green hydrogen tube trailer refueling panel interlock solution',
    descriptionTr: 'Yeşil hidrojen tüp treyler dolum paneli kilit çözümü',
    descriptionAz: 'Yaşıl hidrogen boru treyleri dolum paneli üçün kilid həlli'
  },
  {
    id: '-s4-NPrDonI',
    title: 'Sofis products overview',
    titleTr: 'Sofis ürünlerine genel bakış',
    titleAz: 'Sofis məhsullarına ümumi baxış',
    description: 'Overview of interlocks, portable actuators, and position indicators',
    descriptionTr: 'Kilitler, taşınabilir aktüatörler ve konum göstergeleri',
    descriptionAz: 'Kilitlər, portativ aktuatorlar və mövqe göstəricilərinə ümumi baxış'
  },
  
  // Ürün videoları
  {
    id: 'i6B76q9gOTE',
    title: 'Basics of valve interlocks',
    titleTr: 'Vana kilitleri temelleri',
    titleAz: 'Vana kilidlərinin əsasları',
    description: 'Learn how valve interlocks prevent accidents during startups/shutdowns',
    descriptionTr: 'Vana kilitlerinin başlatma/kapatma sırasında kazaları nasıl önlediğini öğrenin',
    descriptionAz: 'Vana kilidlərinin işə salma/söndürmə zamanı qəzaları necə önlədiyini öyrənin'
  },
  {
    id: 'qPi9Z_GzKvs',
    title: 'How to read valve interlock sequence drawings - Basics',
    titleTr: 'Vana kilidi sıra çizimleri nasıl okunur - Temel',
    titleAz: 'Vana kilidi sıra çertyojları necə oxunur - əsaslar',
    description: 'Understanding valve interlock sequence drawings for safe operations',
    descriptionTr: 'Güvenli operasyonlar için vana kilidi sıra çizimlerini anlama',
    descriptionAz: 'Təhlükəsiz əməliyyatlar üçün vana kilidi sıra çertyojlarını anlama'
  },
  {
    id: 'SBySDtIzd6A',
    title: 'How to read valve interlock sequence drawings - Advanced',
    titleTr: 'Vana kilidi sıra çizimleri nasıl okunur - İleri',
    titleAz: 'Vana kilidi sıra çertyojları necə oxunur - qabaqcıl',
    description: 'Advanced techniques for reading valve interlock drawings',
    descriptionTr: 'Vana kilidi çizimlerini okumak için ileri teknikler',
    descriptionAz: 'Vana kilidi çertyojlarını oxumaq üçün qabaqcıl üsullar'
  },
  {
    id: '5foASQlbjzU',
    title: 'Sofis Key Management System',
    titleTr: 'Sofis Anahtar Yönetim Sistemi',
    titleAz: 'Sofis Açarların İdarəetmə Sistemi',
    description: 'Electronic key system controlling safety-critical interlocked valves',
    descriptionTr: 'Güvenlik kritik kilitli vanaları kontrol eden elektronik anahtar sistemi',
    descriptionAz: 'Təhlükəsizlik kritik kilidli vanaları idarə edən elektron açar sistemi'
  },
  {
    id: 'ixiFklfnh4c',
    title: 'Sofis Key Management System for Equinor',
    titleTr: 'Equinor için Sofis Anahtar Yönetim Sistemi',
    titleAz: 'Equinor üçün Sofis Açarların İdarəetmə Sistemi',
    description: 'Case study on key management systems',
    descriptionTr: 'Anahtar yönetim sistemleri vaka çalışması',
    descriptionAz: 'Açarların idarəetmə sistemləri üzrə nümunə araşdırma'
  },
  
  // Taşınabilir aktüatörler
  {
    id: 'BcVO9ScpObU',
    title: 'Sofis portable actuators',
    titleTr: 'Sofis taşınabilir aktüatörler',
    titleAz: 'Sofis portativ aktuatorları',
    description: 'EasiDrive and Power Wrench for easy manual valve operation',
    descriptionTr: 'Kolay manuel vana operasyonu için EasiDrive ve Power Wrench',
    descriptionAz: 'Asan manual vana əməliyyatı üçün EasiDrive və Power Wrench'
  },
  {
    id: 'ZGRvD1sTJqY',
    title: 'Power Wrench portable valve actuator',
    titleTr: 'Power Wrench taşınabilir vana aktüatörü',
    titleAz: 'Power Wrench portativ vana aktuatoru',
    description: 'Pneumatic tool reducing manual valve operating time by up to 80%',
    descriptionTr: 'Manuel vana çalıştırma süresini %80\'e kadar azaltan pnömatik alet',
    descriptionAz: 'Manual vana işlətmə müddətini 80%-ə qədər azaldan pnevmatik alət'
  },
  
  // Uygulama videoları
  {
    id: '2_Ah4y1xZ00',
    title: 'Valve interlocks at dry bulk terminals',
    titleTr: 'Kuru yük terminallerinde vana kilitleri',
    titleAz: 'Quru yük terminallarında vana kilidləri',
    description: 'Using valve interlocks to avoid contamination',
    descriptionTr: 'Kontaminasyonu önlemek için vana kilitlerinin kullanımı',
    descriptionAz: 'Kontaminasiyanın qarşısını almaq üçün vana kilidlərindən istifadə'
  },
];

const content = {
  tr: {
    pageTitle: "Videolar",
    pageDescription: "Sofis ürün tanıtımları, kurulum talimatları ve eğitim videoları",
    channelTitle: "Sofis Valve Operation",
    channelSubtitle: "Resmi YouTube Kanalı",
    seeAll: "Tüm Videoları Gör",
    loading: "Videolar yükleniyor...",
    error: "Videolar yüklenirken hata oluştu.",
    moreVideos: "Daha Fazla Video",
    moreDescription: "Sofis YouTube kanalında daha fazla eğitim videosu, kurulum kılavuzu ve uygulama örnekleri bulabilirsiniz."
  },
  en: {
    pageTitle: "Videos",
    pageDescription: "Sofis product demonstrations, installation instructions and training videos",
    channelTitle: "Sofis Valve Operation",
    channelSubtitle: "Official YouTube Channel",
    seeAll: "See All Videos",
    loading: "Loading videos...",
    error: "Error loading videos.",
    moreVideos: "More Videos",
    moreDescription: "Find more training videos, installation guides and application examples on the Sofis YouTube channel."
  },
  az: {
    pageTitle: "Videolar",
    pageDescription: "Sofis məhsul təqdimatları, quraşdırma təlimatları və təlim videoları",
    channelTitle: "Sofis Valve Operation",
    channelSubtitle: "Rəsmi YouTube Kanalı",
    seeAll: "Bütün Videoları Gör",
    loading: "Videolar yüklənir...",
    error: "Videolar yüklənərkən xəta baş verdi.",
    moreVideos: "Daha Çox Video",
    moreDescription: "Sofis YouTube kanalında daha çox təlim videosu, quraşdırma bələdçisi və tətbiq nümunələri tapa bilərsiniz."
  }
};

const VideosPage = () => {
  const { locale, t } = useLanguage();
  const text = content?.[locale];
  const videos = defaultVideos;
  const getTitle = (video) => t(video.titleTr, video.title, video.titleAz);
  const getDescription = (video) => t(video.descriptionTr, video.description, video.descriptionAz);

  if (!text) {
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
        {/* Hero */}
        <section className="bg-[#00a0e3] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {text.pageTitle}
            </h1>
            <p className="text-white/90 text-lg">
              {text.pageDescription}
            </p>
          </div>
        </section>

        {/* YouTube Channel Banner */}
        <section className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <svg className="w-10 h-10 text-red-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div>
                  <h2 className="text-white font-bold text-lg">{text.channelTitle}</h2>
                  <p className="text-gray-400 text-sm">{text.channelSubtitle}</p>
                </div>
              </div>
              <a 
                href={YOUTUBE_CHANNEL_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
              >
                {text.seeAll}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* YouTube Embed */}
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                        title={getTitle(video)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {getTitle(video)}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {getDescription(video)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            {/* More Videos CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg text-center">
              <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">{text.moreVideos}</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{text.moreDescription}</p>
              <a 
                href={YOUTUBE_CHANNEL_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Sofis YouTube
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
