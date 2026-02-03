import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { ROUTE_MAP } from '../data/routes';
import TranslationNotice from '../components/TranslationNotice';
import { 
  ArrowRight, CheckCircle, Wrench, Settings, Shield, Clock, 
  Gauge, Thermometer, Cog, Award, Phone, Mail, ChevronRight,
  Target, Activity, Zap, Users, FileCheck, RefreshCw,
  AlertTriangle, BarChart3, Microscope, HardHat, Play,
  Droplets, Wind, Flame, CircleDot, Box, Layers,
  ArrowDown, ChevronDown, Star, Building2, Truck
} from 'lucide-react';

const ValveMaintenancePage = () => {
  const { locale, t } = useLanguage();
  const routes = ROUTE_MAP[locale];
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({ diameter: 0, capacity: 0 });
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const copy = {
    tr: {
      badge: "Profesyonel Endüstriyel Hizmet",
      heroTitle1: "Vana Bakım",
      heroTitle2: "Mükemmelliği",
      heroDesc: "12\" çap kapasitesi ve uluslararası standartlarda test altyapısı ile Türkiye'nin güvenilir vana bakım merkezi.",
      serviceRequest: "Servis Talebi",
      exploreServices: "Hizmetleri İncele",
      maxDiameter: "Maksimum Çap",
      barCapacity: "Bar Test Kapasitesi",
      servicesTitle: "HİZMETLERİMİZ",
      servicesSubtitle: "Uzmanlaştığımız Alanlar",
      servicesDesc: "Tüm vana tiplerinde profesyonel bakım, onarım ve test hizmetleri",
      supportedBrands: "Desteklenen Markalar",
      whyUs: "Neden Biz?",
      whyUs1: "OEM eşdeğeri orijinal yedek parçalar",
      whyUs2: "Sertifikalı uzman teknisyenler",
      whyUs3: "Garanti ve teknik destek",
      testLab: "TEST LABORATUVARI",
      testTitle1: "Uluslararası",
      testTitle2: "Standartlarda Test",
      testDesc: "12\" çap ve 300 bar basınca kadar tüm vanalarınızı API 598, ISO 5208 ve EN 12266 standartlarına uygun olarak test ediyoruz.",
      appliedTests: "Uygulanan Testler",
      processTitle: "SÜREÇ",
      processSubtitle: "Bakım Sürecimiz",
      processDesc: "5 adımda profesyonel vana bakım süreci",
      ctaTitle: "Vana Bakım Hizmetlerimiz Hakkında",
      ctaDesc: "Profesyonel vana bakım, onarım ve test hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.",
      contactUs: "İletişime Geç",
      discover: "Keşfet"
    },
    en: {
      badge: "Professional Industrial Service",
      heroTitle1: "Valve Maintenance",
      heroTitle2: "Excellence",
      heroDesc: "Turkey's reliable valve maintenance center with 12\" diameter capacity and international standard testing infrastructure.",
      serviceRequest: "Service Request",
      exploreServices: "Explore Services",
      maxDiameter: "Max Diameter",
      barCapacity: "Bar Test Capacity",
      servicesTitle: "OUR SERVICES",
      servicesSubtitle: "Our Areas of Expertise",
      servicesDesc: "Professional maintenance, repair and testing services for all valve types",
      supportedBrands: "Supported Brands",
      whyUs: "Why Us?",
      whyUs1: "OEM equivalent original spare parts",
      whyUs2: "Certified expert technicians",
      whyUs3: "Warranty and technical support",
      testLab: "TEST LABORATORY",
      testTitle1: "International",
      testTitle2: "Standard Testing",
      testDesc: "We test all your valves up to 12\" diameter and 300 bar pressure in accordance with API 598, ISO 5208 and EN 12266 standards.",
      appliedTests: "Applied Tests",
      processTitle: "PROCESS",
      processSubtitle: "Our Maintenance Process",
      processDesc: "Professional valve maintenance process in 5 steps",
      ctaTitle: "About Our Valve Maintenance Services",
      ctaDesc: "Contact us for detailed information about our professional valve maintenance, repair and testing services.",
      contactUs: "Contact Us",
      discover: "Discover"
    },
    az: {
      badge: "Peşəkar Sənaye Xidməti",
      heroTitle1: "Vana Baxımı",
      heroTitle2: "Mükəmməlliyi",
      heroDesc: "12\" diametr tutumu və beynəlxalq standartlarda test infrastrukturu ilə Türkiyənin etibarlı vana baxım mərkəzi.",
      serviceRequest: "Xidmət Sorğusu",
      exploreServices: "Xidmətləri nəzərdən keçirin",
      maxDiameter: "Maksimum Diametr",
      barCapacity: "Bar Test Tutumu",
      servicesTitle: "XİDMƏTLƏRİMİZ",
      servicesSubtitle: "İxtisaslaşdığımız Sahələr",
      servicesDesc: "Bütün vana növlərində peşəkar baxım, təmir və test xidmətləri",
      supportedBrands: "Dəstəklənən Markalar",
      whyUs: "Niyə Biz?",
      whyUs1: "OEM ekvivalent orijinal ehtiyat hissələri",
      whyUs2: "Sertifikatlı mütəxəssis texniklər",
      whyUs3: "Zəmanət və texniki dəstək",
      testLab: "TEST LABORATORİYASI",
      testTitle1: "Beynəlxalq",
      testTitle2: "Standartlarda Test",
      testDesc: "12\" diametrə və 300 bar təzyiqə qədər olan bütün vanalarınızı API 598, ISO 5208 və EN 12266 standartlarına uyğun olaraq test edirik.",
      appliedTests: "Tətbiq olunan testlər",
      processTitle: "PROSES",
      processSubtitle: "Baxım Prosesimiz",
      processDesc: "5 addımda peşəkar vana baxım prosesi",
      ctaTitle: "Vana Baxım Xidmətlərimiz Haqqında",
      ctaDesc: "Peşəkar vana baxım, təmir və test xidmətlərimiz haqqında ətraflı məlumat almaq üçün bizimlə əlaqə saxlayın.",
      contactUs: "Əlaqə saxlayın",
      discover: "Kəşf et"
    }
  };

  const text = copy?.[locale];

  // Counter animation - only 2 stats now (diameter and pressure)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const targets = { diameter: 12, capacity: 300 };
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
              diameter: Math.floor(targets.diameter * easeOut),
              capacity: Math.floor(targets.capacity * easeOut)
            });
            
            if (progress < 1) requestAnimationFrame(animate);
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const serviceCategoriesByLocale = {
    tr: [
      {
        id: 'kontrol-vanalari',
        icon: Settings,
        title: 'Kontrol Vanaları',
        subtitle: 'Globe & Segment Vanalar',
        color: 'from-blue-500 to-cyan-500',
        services: [
          { name: 'Globe Kontrol Vanası Revizyonu', desc: 'Trim seti, seat, plug değişimi ve lepleme' },
          { name: 'Segment Vana Bakımı', desc: 'V-port ve ball segment vana onarımı' },
          { name: 'Cage Guided Vana Servisi', desc: 'Kafes kılavuzlu vanaların bakımı' },
          { name: 'Sızıntı Giderme', desc: 'Stem packing ve body gasket değişimi' }
        ],
        brands: ['Fisher', 'Masoneilan', 'Samson', 'Valvitalia', 'Flowserve', 'Neles']
      },
      {
        id: 'emniyet-vanalari',
        icon: Shield,
        title: 'Emniyet Vanaları',
        subtitle: 'PSV / PRV / SRV',
        color: 'from-red-500 to-orange-500',
        services: [
          { name: 'PSV/PRV Test ve Kalibrasyon', desc: 'Set basınç ayarı ve sertifikalandırma' },
          { name: 'Emniyet Vanası Revizyonu', desc: 'Tam demontaj, kontrol ve yenileme' },
          { name: 'Yay Değişimi', desc: 'Orijinal veya eşdeğer yay takımı' },
          { name: 'Acil Servis', desc: '7/24 acil müdahale hizmeti' }
        ],
        brands: ['Dresser', 'Crosby', 'Consolidated', 'Leser', 'Farris', 'Anderson Greenwood']
      },
      {
        id: 'kuresel-vanalar',
        icon: CircleDot,
        title: 'Küresel Vanalar',
        subtitle: 'Ball Valve Bakım',
        color: 'from-green-500 to-emerald-500',
        services: [
          { name: 'Ball & Seat Değişimi', desc: 'Orijinal veya OEM eşdeğeri parçalar' },
          { name: 'Gövde Onarımı', desc: 'Kaynak ve talaşlı işlem' },
          { name: 'Sızdırmazlık Yenileme', desc: 'Packing ve seal değişimi' },
          { name: 'Aktüatör Entegrasyonu', desc: 'Pnömatik/elektrik aktüatör montajı' }
        ],
        brands: ['Cameron', 'Flowserve', 'Velan', 'Kitz', 'Neles', 'Mogas']
      },
      {
        id: 'aktuatorler',
        icon: Cog,
        title: 'Aktüatörler',
        subtitle: 'Pnömatik & Elektrik',
        color: 'from-purple-500 to-pink-500',
        services: [
          { name: 'Pnömatik Aktüatör Bakımı', desc: 'Diyafram, yay ve mil onarımı' },
          { name: 'Elektrik Aktüatör Servisi', desc: 'Motor ve dişli kutusu revizyonu' },
          { name: 'Pozisyoner Kalibrasyonu', desc: 'HART/Fieldbus entegrasyonu' },
          { name: 'Yedek Parça Tedariği', desc: 'Tüm markalar için stok' }
        ],
        brands: ['Fisher', 'Rotork', 'AUMA', 'Limitorque', 'Bettis', 'EIM']
      }
    ],
    en: [
      {
        id: 'control-valves',
        icon: Settings,
        title: 'Control Valves',
        subtitle: 'Globe & Segment Valves',
        color: 'from-blue-500 to-cyan-500',
        services: [
          { name: 'Globe Control Valve Revision', desc: 'Trim set, seat, plug replacement and lapping' },
          { name: 'Segment Valve Maintenance', desc: 'V-port and ball segment valve repair' },
          { name: 'Cage Guided Valve Service', desc: 'Maintenance of cage guided valves' },
          { name: 'Leak Repair', desc: 'Stem packing and body gasket replacement' }
        ],
        brands: ['Fisher', 'Masoneilan', 'Samson', 'Valvitalia', 'Flowserve', 'Neles']
      },
      {
        id: 'safety-valves',
        icon: Shield,
        title: 'Safety Valves',
        subtitle: 'PSV / PRV / SRV',
        color: 'from-red-500 to-orange-500',
        services: [
          { name: 'PSV/PRV Test and Calibration', desc: 'Set pressure adjustment and certification' },
          { name: 'Safety Valve Revision', desc: 'Full disassembly, inspection and refurbishment' },
          { name: 'Spring Replacement', desc: 'Original or equivalent spring kit' },
          { name: 'Emergency Service', desc: '24/7 emergency response service' }
        ],
        brands: ['Dresser', 'Crosby', 'Consolidated', 'Leser', 'Farris', 'Anderson Greenwood']
      },
      {
        id: 'ball-valves',
        icon: CircleDot,
        title: 'Ball Valves',
        subtitle: 'Ball Valve Maintenance',
        color: 'from-green-500 to-emerald-500',
        services: [
          { name: 'Ball & Seat Replacement', desc: 'Original or OEM equivalent parts' },
          { name: 'Body Repair', desc: 'Welding and machining' },
          { name: 'Sealing Renewal', desc: 'Packing and seal replacement' },
          { name: 'Actuator Integration', desc: 'Pneumatic/electric actuator mounting' }
        ],
        brands: ['Cameron', 'Flowserve', 'Velan', 'Kitz', 'Neles', 'Mogas']
      },
      {
        id: 'actuators',
        icon: Cog,
        title: 'Actuators',
        subtitle: 'Pneumatic & Electric',
        color: 'from-purple-500 to-pink-500',
        services: [
          { name: 'Pneumatic Actuator Maintenance', desc: 'Diaphragm, spring and stem repair' },
          { name: 'Electric Actuator Service', desc: 'Motor and gearbox revision' },
          { name: 'Positioner Calibration', desc: 'HART/Fieldbus integration' },
          { name: 'Spare Parts Supply', desc: 'Stock for all brands' }
        ],
        brands: ['Fisher', 'Rotork', 'AUMA', 'Limitorque', 'Bettis', 'EIM']
      }
    ],
    az: [
      {
        id: 'kontrol-vanalari',
        icon: Settings,
        title: 'İdarəetmə Vanaları',
        subtitle: 'Globe və Segment Vanalar',
        color: 'from-blue-500 to-cyan-500',
        services: [
          { name: 'Globe idarəetmə vanasının reviziyası', desc: 'Trim dəsti, seat və plug dəyişimi, lapping' },
          { name: 'Segment vananın baxımı', desc: 'V-port və ball segment vananın təmiri' },
          { name: 'Kafes yönləndirməli vana servisi', desc: 'Kafes yönləndirməli vanaların baxımı' },
          { name: 'Sızdırmazlığın bərpası', desc: 'Stem packing və korpus qasketinin dəyişimi' }
        ],
        brands: ['Fisher', 'Masoneilan', 'Samson', 'Valvitalia', 'Flowserve', 'Neles']
      },
      {
        id: 'emniyet-vanalari',
        icon: Shield,
        title: 'Təhlükəsizlik Vanaları',
        subtitle: 'PSV / PRV / SRV',
        color: 'from-red-500 to-orange-500',
        services: [
          { name: 'PSV/PRV test və kalibrləmə', desc: 'Set təzyiqinin tənzimlənməsi və sertifikatlaşdırma' },
          { name: 'Təhlükəsizlik vanasının reviziyası', desc: 'Tam sökülmə, yoxlama və yeniləmə' },
          { name: 'Yay dəyişimi', desc: 'Orijinal və ya ekvivalent yay dəsti' },
          { name: 'Təcili servis', desc: '24/7 təcili müdaxilə xidməti' }
        ],
        brands: ['Dresser', 'Crosby', 'Consolidated', 'Leser', 'Farris', 'Anderson Greenwood']
      },
      {
        id: 'kuresel-vanalar',
        icon: CircleDot,
        title: 'Kürə Vanalar',
        subtitle: 'Ball Valve Baxımı',
        color: 'from-green-500 to-emerald-500',
        services: [
          { name: 'Ball və seat dəyişimi', desc: 'Orijinal və ya OEM ekvivalent hissələr' },
          { name: 'Korpus təmiri', desc: 'Qaynaq və emal' },
          { name: 'Sızdırmazlığın yenilənməsi', desc: 'Packing və seal dəyişimi' },
          { name: 'Aktuator inteqrasiyası', desc: 'Pnevmatik/elektrik aktuator montajı' }
        ],
        brands: ['Cameron', 'Flowserve', 'Velan', 'Kitz', 'Neles', 'Mogas']
      },
      {
        id: 'aktuatorler',
        icon: Cog,
        title: 'Aktuatorlar',
        subtitle: 'Pnevmatik və Elektrik',
        color: 'from-purple-500 to-pink-500',
        services: [
          { name: 'Pnevmatik aktuator baxımı', desc: 'Diafraqma, yay və mil təmiri' },
          { name: 'Elektrik aktuator servisi', desc: 'Motor və reduktorun reviziyası' },
          { name: 'Pozisioner kalibrlənməsi', desc: 'HART/Fieldbus inteqrasiyası' },
          { name: 'Ehtiyat hissə təchizatı', desc: 'Bütün markalar üçün stok' }
        ],
        brands: ['Fisher', 'Rotork', 'AUMA', 'Limitorque', 'Bettis', 'EIM']
      }
    ]
  };

  const serviceCategories = serviceCategoriesByLocale[locale];

  const testCapabilitiesByLocale = {
    tr: [
      { value: '12"', label: 'Maksimum Çap', desc: 'NPS 12 inch', icon: Gauge },
      { value: '300', label: 'Bar Basınç', desc: 'Test kapasitesi', icon: Thermometer },
      { value: '150#-2500#', label: 'Basınç Sınıfı', desc: 'Class aralığı', icon: Activity },
      { value: '7/24', label: 'Hizmet', desc: 'Acil servis', icon: Clock }
    ],
    en: [
      { value: '12"', label: 'Maximum Diameter', desc: 'NPS 12 inch', icon: Gauge },
      { value: '300', label: 'Bar Pressure', desc: 'Test capacity', icon: Thermometer },
      { value: '150#-2500#', label: 'Pressure Class', desc: 'Class range', icon: Activity },
      { value: '24/7', label: 'Service', desc: 'Emergency service', icon: Clock }
    ],
    az: [
      { value: '12"', label: 'Maksimum Diametr', desc: 'NPS 12 inch', icon: Gauge },
      { value: '300', label: 'Bar Təzyiqi', desc: 'Test tutumu', icon: Thermometer },
      { value: '150#-2500#', label: 'Təzyiq Sinfi', desc: 'Sinif aralığı', icon: Activity },
      { value: '24/7', label: 'Xidmət', desc: 'Təcili servis', icon: Clock }
    ]
  };

  const processStepsByLocale = {
    tr: [
      { step: '01', title: 'Teslim Alma', desc: 'Detaylı vana kontrolü', icon: Box },
      { step: '02', title: 'İnceleme', desc: 'Kapsamlı durum analizi', icon: Microscope },
      { step: '03', title: 'Bakım/Onarım', desc: 'Profesyonel işçilik', icon: Wrench },
      { step: '04', title: 'Test', desc: 'Uluslararası standartlarda test', icon: Activity },
      { step: '05', title: 'Teslim', desc: 'Sertifikalı teslimat', icon: Truck }
    ],
    en: [
      { step: '01', title: 'Receiving', desc: 'Detailed valve inspection', icon: Box },
      { step: '02', title: 'Inspection', desc: 'Comprehensive condition analysis', icon: Microscope },
      { step: '03', title: 'Maintenance/Repair', desc: 'Professional workmanship', icon: Wrench },
      { step: '04', title: 'Testing', desc: 'International standard testing', icon: Activity },
      { step: '05', title: 'Delivery', desc: 'Certified delivery', icon: Truck }
    ],
    az: [
      { step: '01', title: 'Qəbul', desc: 'Ətraflı vana yoxlaması', icon: Box },
      { step: '02', title: 'Yoxlama', desc: 'Əhatəli vəziyyət analizi', icon: Microscope },
      { step: '03', title: 'Baxım/Təmir', desc: 'Peşəkar işçilik', icon: Wrench },
      { step: '04', title: 'Test', desc: 'Beynəlxalq standartlarda test', icon: Activity },
      { step: '05', title: 'Təhvil', desc: 'Sertifikatlı təhvil', icon: Truck }
    ]
  };

  const appliedTestsByLocale = {
    tr: [
      'Shell Test (Gövde Basınç Testi)',
      'Seat Test (Sızdırmazlık Testi)',
      'Backseat Test',
      'Çift Yönlü Sızdırmazlık',
      'Fonksiyonel & Torque Testi',
      'API 527 / API 598 Testleri'
    ],
    en: [
      'Shell Test (Body Pressure Test)',
      'Seat Test (Leak Test)',
      'Backseat Test',
      'Bi-directional Sealing',
      'Functional & Torque Test',
      'API 527 / API 598 Tests'
    ],
    az: [
      'Shell Test (Korpus təzyiq testi)',
      'Seat Test (Sızdırmazlıq testi)',
      'Backseat Test',
      'İki istiqamətli sızdırmazlıq',
      'Funksional və tork testi',
      'API 527 / API 598 Testləri'
    ]
  };

  const testCapabilities = testCapabilitiesByLocale[locale];
  const processSteps = processStepsByLocale[locale];
  const appliedTests = appliedTestsByLocale[locale];

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
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-[104px]">
        
        {/* Hero Section */}
        <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0,160,227,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0,160,227,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00a0e3]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-white/80 text-sm">{text.badge}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                  <span className="block">{text.heroTitle1}</span>
                  <span className="block bg-gradient-to-r from-[#00a0e3] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {text.heroTitle2}
                  </span>
                </h1>
                
                <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                  {text.heroDesc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={routes.contact} 
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00a0e3] to-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00a0e3]/30 hover:scale-105"
                  >
                    {text.serviceRequest}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="#hizmetler"
                    className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                  >
                    {text.exploreServices}
                    <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
                  </a>
                </div>
              </div>
              
              {/* Right - Hero Image + Stats */}
              <div className="relative" ref={counterRef}>
                <div className="mb-6 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                  <img
                    src="/images/placeholder.svg"
                    alt={t('Vana bakım atölyesi', 'Valve maintenance workshop', 'Vana baxım emalatxanası')}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <Gauge className="w-8 h-8 text-[#00a0e3] mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-1">
                      {counters.diameter}"
                    </div>
                    <div className="text-white/50 text-sm">{text.maxDiameter}</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <Thermometer className="w-8 h-8 text-[#00a0e3] mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-1">
                      {counters.capacity}
                    </div>
                    <div className="text-white/50 text-sm">{text.barCapacity}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#hizmetler" className="flex flex-col items-center text-white/40 hover:text-white/80 transition-colors">
              <span className="text-xs mb-2">{text.discover}</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </section>

        {/* Service Categories */}
        <section id="hizmetler" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#00a0e3]/10 text-[#00a0e3] rounded-full text-sm font-semibold mb-4">
                {text.servicesTitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {text.servicesSubtitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {text.servicesDesc}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === idx
                        ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                        : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    <IconComp className="w-5 h-5 mr-2" />
                    {cat.title}
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${serviceCategories[activeTab].color}`} />
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {serviceCategories[activeTab].title}
                    </h3>
                    <p className="text-gray-500 mb-6">{serviceCategories[activeTab].subtitle}</p>
                    
                    <div className="space-y-4">
                      {serviceCategories[activeTab].services.map((service, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${serviceCategories[activeTab].color} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-sm text-gray-500">{service.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{text.supportedBrands}</h4>
                      <div className="flex flex-wrap gap-3 mb-4">
                        {serviceCategories[activeTab].brands.map((brand, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl overflow-hidden border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&q=80&auto=format&fit=crop"
                            alt="Control valve maintenance"
                            className="w-full h-24 object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&q=80&auto=format&fit=crop"
                            alt="Valve test bench"
                            className="w-full h-24 object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&q=80&auto=format&fit=crop"
                            alt="Workshop detail"
                            className="w-full h-24 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${serviceCategories[activeTab].color} text-white`}>
                      <h4 className="font-bold text-lg mb-2">{text.whyUs}</h4>
                      <ul className="space-y-2 text-white/90 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {text.whyUs1}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {text.whyUs2}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {text.whyUs3}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Capabilities */}
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a0e3]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-white/10 text-[#00a0e3] rounded-full text-sm font-semibold mb-4">
                  {text.testLab}
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  {text.testTitle1} <br/>
                  <span className="text-[#00a0e3]">{text.testTitle2}</span>
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  {text.testDesc}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {testCapabilities.map((cap, idx) => {
                    const IconComp = cap.icon;
                    return (
                      <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                        <IconComp className="w-8 h-8 text-[#00a0e3] mb-3" />
                        <div className="text-3xl font-black text-white">{cap.value}</div>
                        <div className="text-white/80 font-medium">{cap.label}</div>
                        <div className="text-white/40 text-sm">{cap.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{text.appliedTests}</h3>
                <div className="space-y-4">
                  {appliedTests.map((test, idx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <div className="w-8 h-8 bg-[#00a0e3] rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      {test}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {['API 598', 'ISO 5208', 'EN 12266', 'API 527', 'ASME B16.34'].map((std, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#00a0e3]/20 text-[#00a0e3] rounded-full text-sm font-medium">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#00a0e3]/10 text-[#00a0e3] rounded-full text-sm font-semibold mb-4">
                {text.processTitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {text.processSubtitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {text.processDesc}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {processSteps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center w-48">
                    <div className="w-12 h-12 bg-[#00a0e3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-black text-[#00a0e3] mb-2">{step.step}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00a0e3] to-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{text.ctaTitle}</h2>
            <p className="text-white/80 mb-8">{text.ctaDesc}</p>
            <Link 
              to={routes.contact} 
              className="inline-flex items-center px-8 py-4 bg-white text-[#00a0e3] font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              {text.contactUs}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ValveMaintenancePage;
