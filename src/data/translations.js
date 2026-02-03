import { ROUTE_MAP } from './routes';

// Demart Mühendislik - Bilingual Content (TR/EN) with LOCAL IMAGES

// All images are now local - no external dependencies
export const companyInfo = {
  tr: {
    name: "DEMART",
    fullName: "Demart Mühendislik Sanayi Ticaret Limited Şirketi",
    tagline: "THE ART OF DESIGN-ENGINEERING MAINTENANCE",
    subtitle: "Sofis Türkiye Resmi Distribütörü",
    phone: "+90 (216) 000 00 00",
    email: "info@demart.com.tr",
    address: {
      street: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1",
      district: "Pendik",
      postalCode: "35852",
      city: "İstanbul",
      country: "TÜRKİYE"
    },
    fullAddress: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, İstanbul / TÜRKİYE",
    callNow: "Hemen Arayın"
  },
  en: {
    name: "DEMART",
    fullName: "Demart Mühendislik Sanayi Ticaret Limited Şirketi",
    tagline: "THE ART OF DESIGN-ENGINEERING MAINTENANCE",
    subtitle: "Official Sofis Distributor in Turkey",
    phone: "+90 (216) 000 00 00",
    email: "info@demart.com.tr",
    address: {
      street: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1",
      district: "Pendik",
      postalCode: "35852",
      city: "Istanbul",
      country: "TURKEY"
    },
    fullAddress: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, Istanbul / TURKEY",
    callNow: "Call Now"
  },
  az: {
    name: "DEMART",
    fullName: "Demart Mühendislik Sanayi Ticaret Limited Şirketi",
    tagline: "THE ART OF DESIGN-ENGINEERING MAINTENANCE",
    subtitle: "Sofis Türkiye Resmi Distribütörü",
    phone: "+90 (216) 000 00 00",
    email: "info@demart.com.tr",
    address: {
      street: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1",
      district: "Pendik",
      postalCode: "35852",
      city: "İstanbul",
      country: "TÜRKİYE"
    },
    fullAddress: "VeliBaba Mah. Ertuğrul Gazi Cad. No 82/1, 35852 Pendik, İstanbul / TÜRKİYE",
    callNow: "İndi Zəng Edin"
  }
};

const navLabels = {
  tr: {
    home: "Ana Sayfa",
    valveMaintenance: "Vana Bakım",
    products: "Ürünler",
    services: "Hizmetler",
    solutions: "Çözümler",
    applications: "Uygulamalar",
    industries: "Sektörler",
    about: "Hakkımızda",
    faq: "SSS",
    contact: "İletişim"
  },
  en: {
    home: "Home",
    valveMaintenance: "Valve Maintenance",
    products: "Products",
    services: "Services",
    solutions: "Solutions",
    applications: "Applications",
    industries: "Industries",
    about: "About Us",
    faq: "FAQ",
    contact: "Contact"
  },
  az: {
    home: "Ana Səhifə",
    valveMaintenance: "Vana Baxım",
    products: "Məhsullar",
    services: "Xidmətlər",
    solutions: "Həllər",
    applications: "Tətbiqlər",
    industries: "Sənayelər",
    about: "Haqqımızda",
    faq: "SSS",
    contact: "Əlaqə"
  }
};

export const navigation = {
  tr: [
    { key: "home", name: navLabels.tr.home, href: ROUTE_MAP.tr.home },
    { key: "valveMaintenance", name: navLabels.tr.valveMaintenance, href: ROUTE_MAP.tr.valveMaintenance },
    { key: "products", name: navLabels.tr.products, href: ROUTE_MAP.tr.products },
    { key: "services", name: navLabels.tr.services, href: ROUTE_MAP.tr.services },
    { key: "solutions", name: navLabels.tr.solutions, href: ROUTE_MAP.tr.solutions },
    { key: "applications", name: navLabels.tr.applications, href: ROUTE_MAP.tr.applications },
    { key: "industries", name: navLabels.tr.industries, href: ROUTE_MAP.tr.industries },
    { key: "about", name: navLabels.tr.about, href: ROUTE_MAP.tr.about },
    { key: "faq", name: navLabels.tr.faq, href: ROUTE_MAP.tr.faq },
    { key: "contact", name: navLabels.tr.contact, href: ROUTE_MAP.tr.contact }
  ],
  en: [
    { key: "home", name: navLabels.en.home, href: ROUTE_MAP.en.home },
    { key: "valveMaintenance", name: navLabels.en.valveMaintenance, href: ROUTE_MAP.en.valveMaintenance },
    { key: "products", name: navLabels.en.products, href: ROUTE_MAP.en.products },
    { key: "services", name: navLabels.en.services, href: ROUTE_MAP.en.services },
    { key: "solutions", name: navLabels.en.solutions, href: ROUTE_MAP.en.solutions },
    { key: "applications", name: navLabels.en.applications, href: ROUTE_MAP.en.applications },
    { key: "industries", name: navLabels.en.industries, href: ROUTE_MAP.en.industries },
    { key: "about", name: navLabels.en.about, href: ROUTE_MAP.en.about },
    { key: "faq", name: navLabels.en.faq, href: ROUTE_MAP.en.faq },
    { key: "contact", name: navLabels.en.contact, href: ROUTE_MAP.en.contact }
  ],
  az: [
    { key: "home", name: navLabels.az.home, href: ROUTE_MAP.az.home },
    { key: "valveMaintenance", name: navLabels.az.valveMaintenance, href: ROUTE_MAP.az.valveMaintenance },
    { key: "products", name: navLabels.az.products, href: ROUTE_MAP.az.products },
    { key: "services", name: navLabels.az.services, href: ROUTE_MAP.az.services },
    { key: "solutions", name: navLabels.az.solutions, href: ROUTE_MAP.az.solutions },
    { key: "applications", name: navLabels.az.applications, href: ROUTE_MAP.az.applications },
    { key: "industries", name: navLabels.az.industries, href: ROUTE_MAP.az.industries },
    { key: "about", name: navLabels.az.about, href: ROUTE_MAP.az.about },
    { key: "faq", name: navLabels.az.faq, href: ROUTE_MAP.az.faq },
    { key: "contact", name: navLabels.az.contact, href: ROUTE_MAP.az.contact },
    { name: "Home", href: "/" },
    { name: "Valve Maintenance", href: "/vana-bakim" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Applications", href: "/applications" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/hakkimizda" },
    { name: "FAQ", href: "/sss" },
    { name: "Contact", href: "/iletisim" }
  ],
  az: [
    { name: "Ana Səhifə", href: "/" },
    { name: "Vana Baxım", href: "/vana-bakim" },
    { name: "Məhsullar", href: "/mehsullar" },
    { name: "Xidmətlər", href: "/xidmetler" },
    { name: "Həllər", href: "/heller" },
    { name: "Tətbiqlər", href: "/tetbiqler" },
    { name: "Sənayelər", href: "/industries" },
    { name: "Haqqımızda", href: "/hakkimizda" },
    { name: "SSS", href: "/sss" },
    { name: "Əlaqə", href: "/iletisim" }
  ]
};

const withSlug = (base, slug) => `${base}/${slug}`;
const productImageBase = "/images/" + "products";

export const heroContent = {
  tr: {
    title: "Akıllı Vana Çözümleri",
    subtitle: "Çözümlerimiz, insanları, tesisleri ve dünyamızı koruyan güvenli, verimli ve sürdürülebilir manuel vana operasyonları sağlar.",
    cta: "Çözümlerimizi Görün",
    ctaLink: ROUTE_MAP.tr.solutions,
    backgroundImage: "/images/hero/hero-bg.jpg"
  },
  en: {
    title: "Smart Valve Solutions",
    subtitle: "Safe, efficient and sustainable manual valve operations that protect people, plants and the planet",
    cta: "View Our Solutions",
    ctaLink: ROUTE_MAP.en.solutions,
    backgroundImage: "/images/hero/hero-bg.jpg"
  },
  az: {
    title: "Ağıllı Vana Həlləri",
    subtitle: "İnsanları, müəssisələri və planetimizi qoruyan təhlükəsiz, səmərəli və dayanıqlı manual vana əməliyyatları",
    cta: "Həllərimizə Baxın",
    ctaLink: ROUTE_MAP.az.solutions,
    backgroundImage: "/images/hero/hero-bg.jpg"
  }
};

export const bulletinContent = {
  tr: {
    title: "Kritik vana operasyon süreçlerinizi nasıl iyileştireceğinizi öğrenin!",
    cta: "Bilgi Bültenimize Kaydolun"
  },
  en: {
    title: "Learn how to improve your critical valve operation processes!",
    cta: "Subscribe to Our Newsletter"
  },
  az: {
    title: "Kritik vana əməliyyat proseslərinizi necə yaxşılaşdıracağınızı öyrənin!",
    cta: "Bülletenə Abunə Olun"
  }
};

export const newsItems = {
  tr: [
    {
      id: 1,
      title: "Tank Dip Tahliye Vanası İçin Uzaktan Vana Operatörü ile Güvenlik ve Verimlilik Dönüşümü",
      excerpt: "Bir rafineride, sorunsuz operasyonlar ve işçi güvenliği en önemli önceliktir. Sofis, bu kritik vananın operasyonunu dönüştüren bir çözüm sunarak güvenlik, verimlilik ve güvenilirlik sağladı.",
      image: "/images/news/news-1.jpg",
      link: withSlug(ROUTE_MAP.tr.news, "tank-dip-tahliye-vanasi")
    },
    {
      id: 2,
      title: "Silo ve Terminal Yüklemesinde Doğru Ürün: Yanlış Hat Açmaları Nasıl Önlenir?",
      excerpt: "Silo ve terminal yükleme operasyonlarında operatörler zaman zaman yanlış hatlara yönelerek yanlış vanaları açabiliyordu. Sofis, bu hataları ortadan kaldıran bir çözüm sundu.",
      image: "/images/news/news-2.jpg",
      link: withSlug(ROUTE_MAP.tr.news, "kamyon-yuklemesi-hassasiyet")
    },
    {
      id: 3,
      title: "Zincirli Vana Operasyonları Operatörlerinizi Nasıl Riske Atıyor?",
      excerpt: "FlexiDrive uzaktan vana operatörü, manuel vanaların güvenli ve erişilebilir bir konumdan çalıştırılmasını sağlayan güvenli ve maliyet etkin bir alternatif sunar.",
      image: "/images/news/news-3.jpg",
      link: withSlug(ROUTE_MAP.tr.news, "zincirli-vana-riskleri")
    }
  ],
  en: [
    {
      id: 1,
      title: "Safety and Efficiency Transformation with Remote Valve Operator for Tank Bottom Drain Valve",
      excerpt: "In a refinery, seamless operations and worker safety are top priorities. Sofis delivered a solution that transformed the operation of this critical valve, ensuring safety, efficiency and reliability.",
      image: "/images/news/news-1.jpg",
      link: withSlug(ROUTE_MAP.en.news, "tank-dip-tahliye-vanasi")
    },
    {
      id: 2,
      title: "Right Product in Silo and Terminal Loading: How to Prevent Wrong Lineups?",
      excerpt: "In silo and terminal loading operations, operators could sometimes route to the wrong lines and open the wrong valves. Sofis provided a solution that eliminates these errors.",
      image: "/images/news/news-2.jpg",
      link: withSlug(ROUTE_MAP.en.news, "kamyon-yuklemesi-hassasiyet")
    },
    {
      id: 3,
      title: "How Chain Wheel Valve Operations Put Your Operators at Risk?",
      excerpt: "The FlexiDrive remote valve operator provides a safe and cost-effective alternative that allows manual valves to be operated from a safe and accessible location.",
      image: "/images/news/news-3.jpg",
      link: withSlug(ROUTE_MAP.en.news, "zincirli-vana-riskleri")
    }
  ],
  az: [
    {
      id: 1,
      title: "Tank Alt Drenaj Vanası üçün Uzaqdan Vana Operatoru ilə Təhlükəsizlik və Səmərəlilik Dönüşümü",
      excerpt: "Rafineriyada fasiləsiz əməliyyatlar və işçi təhlükəsizliyi əsas prioritetlərdir. Sofis bu kritik vananın idarəsini dəyişdirən həll təqdim edərək təhlükəsizlik, səmərəlilik və etibarlılıq təmin edib.",
      image: "/images/news/news-1.jpg",
      link: withSlug(ROUTE_MAP.az.news, "tank-dip-tahliye-vanasi")
    },
    {
      id: 2,
      title: "Silo və Terminal Yükləməsində Doğru Məhsul: Yanlış Xətt Açmalarının Qarşısını Necə Almalı?",
      excerpt: "Silo və terminal yükləmə əməliyyatlarında operatorlar bəzən yanlış xətlərə yönələrək səhv vanaları açırdılar. Sofis bu səhvləri aradan qaldıran həll təqdim etdi.",
      image: "/images/news/news-2.jpg",
      link: withSlug(ROUTE_MAP.az.news, "kamyon-yuklemesi-hassasiyet")
    },
    {
      id: 3,
      title: "Zəncirli Vana Əməliyyatları Operatorlarınızı Necə Risk Altına Alır?",
      excerpt: "FlexiDrive uzaqdan vana operatoru manual vanaların təhlükəsiz və əlçatan yerdən idarə olunmasını təmin edən təhlükəsiz və sərfəli alternativdir.",
      image: "/images/news/news-3.jpg",
      link: withSlug(ROUTE_MAP.az.news, "zincirli-vana-riskleri")
    }
  ]
};

export const ctaContent = {
  tr: {
    title: "Manuel vanaları dakikalar içinde kontrollü şekilde çalıştırın.",
    subtitle: "Yüksek tork gerektiren operasyonlarda operatör yükünü azaltın, süreç tutarlılığını artırın ve iş güvenliğini güçlendirin.",
    cta: "Daha Fazla Bilgi!",
    ctaLink: ROUTE_MAP.tr.products
  },
  en: {
    title: "Operate manual valves within minutes, with controlled effort.",
    subtitle: "Reduce operator load in high‑torque operations, improve process consistency, and strengthen workplace safety.",
    cta: "Learn More!",
    ctaLink: ROUTE_MAP.en.products
  },
  az: {
    title: "Manual vanaları dəqiqələr ərzində nəzarətli şəkildə idarə edin.",
    subtitle: "Yüksək tork tələb edən əməliyyatlarda operator yükünü azaldın, proses ardıcıllığını artırın və iş təhlükəsizliyini gücləndirin.",
    cta: "Daha Ətraflı!",
    ctaLink: ROUTE_MAP.az.products
  }
};

export const downloadSection = {
  tr: {
    title: "Ürün broşürlerini ve uygulama notlarını indirin",
    cta: "İndirme Bölümüne Git",
    ctaLink: ROUTE_MAP.tr.docs
  },
  en: {
    title: "Download product brochures and application notes",
    cta: "Go to Download Section",
    ctaLink: ROUTE_MAP.en.docs
  },
  az: {
    title: "Məhsul broşürlərini və tətbiq qeydlərini yükləyin",
    cta: "Yükləmə Bölməsinə Keçin",
    ctaLink: ROUTE_MAP.az.docs
  }
};

const videoEmbedUrl = "https://www.youtube.com/embed/-s4-NPrDonI?rel=0";

export const videoSection = {
  tr: {
    title: "Ürün, talimat ve satış sonrası destek videolarımızı izleyin",
    cta: "Videoları İzleyin",
    ctaLink: ROUTE_MAP.tr.videos,
    embedUrl: videoEmbedUrl
  },
  en: {
    title: "Watch our product, instruction and after-sales support videos",
    cta: "Watch Videos",
    ctaLink: ROUTE_MAP.en.videos,
    embedUrl: videoEmbedUrl
  },
  az: {
    title: "Məhsul, təlimat və satış sonrası dəstək videolarımıza baxın",
    cta: "Videolara Baxın",
    ctaLink: ROUTE_MAP.az.videos,
    embedUrl: videoEmbedUrl
  }
};

export const energyTransition = {
  tr: {
    title: "Yeni Nesil Enerji Altyapısı İçin Güvenli ve Verimli Vana Operasyonları",
    description: "Sofis, yeni nesil enerji altyapısında kullanılan vana kilitleri ve taşınabilir aktüatörler sağlar. Bu Sofis çözümleriyle vanaların doğru şekilde çalıştırılmasını sağlayarak kazaları önlüyor ve dünyamızı koruyoruz.",
    cta: "Daha Fazlasını Keşfedin",
    ctaLink: ROUTE_MAP.tr.solutions,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
  },
  en: {
    title: "Safe and Efficient Valve Operations for Next Generation Energy Infrastructure",
    description: "Sofis provides valve interlocks and portable actuators used in next-generation energy infrastructure. We prevent accidents and protect the planet by ensuring valves are operated correctly.",
    cta: "Discover More",
    ctaLink: ROUTE_MAP.en.solutions,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
  },
  az: {
    title: "Yeni Nəsil Enerji İnfrastrukturu üçün Təhlükəsiz və Səmərəli Vana Əməliyyatları",
    description: "Sofis, yeni nəsil enerji infrastrukturunda istifadə olunan vana kilidləri və daşınan aktuatorlar təqdim edir. Vanaların düzgün idarə olunmasını təmin etməklə qəzalardan qoruyur və planetimizi qoruyuruq.",
    cta: "Daha Çox Kəşf Edin",
    ctaLink: ROUTE_MAP.az.solutions,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
  }
};

export const services = {
  tr: [
    {
      id: 1,
      title: "Proje Desteği",
      description: "Mühendislerimiz, vana kilitlerinin doğru kurulumunu ve devreye alınmasını sağlayarak istenmeyen proje gecikmelerini önler. Tesis duruşlarınızı ve revizyonlarınızı etkili bir şekilde planlamanız için destek sağlarlar. Proje ekibinizle birlikte çalışarak, vana kilitleme sistemlerinin tasarım aşamasından kurulumuna kadar tüm süreçlerde teknik destek sunuyoruz. HAZOP ve SIL çalışmalarınızda da uzman desteği sağlıyoruz.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      link: withSlug(ROUTE_MAP.tr.services, "proje-destegi")
    },
    {
      id: 2,
      title: "Operasyon ve Bakım",
      description: "Vana operasyonlarınızı optimize etmek için operasyonel riskleri sınırlamaya ve insan hatasının etkilerini azaltmaya yardımcı olacak çeşitli çözümler ve programlar sunuyoruz. Düzenli bakım programları, yedek parça yönetimi ve acil müdahale hizmetleri ile vana kilitleme sistemlerinizin kesintisiz çalışmasını sağlıyoruz. Sahada eğitimli teknisyenlerimiz, bakım ve onarım için 7/24 destek vermektedir.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      link: withSlug(ROUTE_MAP.tr.services, "operasyon-bakim")
    },
    {
      id: 3,
      title: "Yönetmelikler ve Standartlar",
      description: "Çözümlerimiz, insan hatasının olasılığını sınırlamak için tüm yaşam döngüsü aşamalarında insan performansını iyileştirmeyi amaçlar. IEC 61511, API 554 ve diğer endüstri standartlarına uygunluğu sağlamanıza yardımcı oluyoruz. Güvenlik denetimlerinizde kullanabileceğiniz dokümantasyon ve sertifikasyon desteği sunuyoruz. Mevzuat değişikliklerini takip ederek sistemlerinizin güncel kalmasını sağlıyoruz.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      link: withSlug(ROUTE_MAP.tr.services, "yonetmelikler-standartlar")
    }
  ],
  en: [
    {
      id: 1,
      title: "Project Support",
      description: "Our engineers prevent unwanted project delays by ensuring proper installation and commissioning of valve interlocks. They provide support for effective planning of your plant shutdowns and turnarounds. Working with your project team, we provide technical support throughout all processes from design to installation of valve interlocking systems. We also provide expert support for your HAZOP and SIL studies.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      link: withSlug(ROUTE_MAP.en.services, "proje-destegi")
    },
    {
      id: 2,
      title: "Operation and Maintenance",
      description: "We offer various solutions and programs to help limit operational risks and reduce the effects of human error to optimize your valve operations. We ensure uninterrupted operation of your valve interlocking systems with regular maintenance programs, spare parts management and emergency response services. Our trained field technicians provide 24/7 support for maintenance and repair.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      link: withSlug(ROUTE_MAP.en.services, "operasyon-bakim")
    },
    {
      id: 3,
      title: "Regulations and Standards",
      description: "Our solutions aim to improve human performance at all lifecycle stages to limit the possibility of human error. We help you ensure compliance with IEC 61511, API 554 and other industry standards. We provide documentation and certification support that you can use in your safety audits. We ensure your systems remain up-to-date by tracking regulatory changes.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      link: withSlug(ROUTE_MAP.en.services, "yonetmelikler-standartlar")
    }
  ]
};


services.az = services.tr;

export const products = {
  tr: {
    pageTitle: "Ürünler",
    categories: [
      {
        id: 1,
        name: "Proses Güvenliği – Vana Kilitleri",
        description: "Vana kilitleri, operatörlerinizin doğru manuel vana prosedürlerini takip etmesini mekanik olarak zorunlu kılan güvenlik cihazlarıdır. Anahtar transfer prensibi ile çalışarak, vanaların yalnızca belirli bir sırada açılıp kapatılmasını sağlar ve böylece insan hatası kaynaklı kazaları önler.",
        items: [
          {
            id: 1,
            name: "Smith Interlocks",
            description: "Smith Flow Control (SFC) Vana Kilitleri, dünya genelinde en çok tercih edilen premium vana kilitleme çözümüdür. Shell, BP, ExxonMobil gibi global enerji devleri tarafından standart olarak belirlenen bu sistem, her bir vanaya monte edilerek hangi vanaların hangi sırada çalıştırılacağını mekanik olarak kontrol eder. Anahtar transfer prensibi sayesinde yanlış adımlar fiziksel olarak engellenir ve enerji gerektirmeden pasif güvenlik sağlar. ATEX, IECEx ve SIL sertifikalı olan Smith kilitleri, -40°C ile +120°C arasında güvenilir performans sunar.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "smith-interlocks")
          },
          {
            id: 9,
            name: "Smith QL Vana Kilitleri",
            description: "Smith QL serisi, çeyrek dönüşlü manuel vanalarda doğru işlem sırasını mekanik olarak zorunlu kılan bir kilitleme çözümüdür. Hızlı açma/kapama riskini kontrol altına alır, yanlış hat hizalaması ve yetkisiz müdahaleyi engeller. Anahtar transfer prensibi ile sahada disiplinli ve güvenli operasyon sağlar.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "smith-ql-vana-kilitleri")
          },
          {
            id: 10,
            name: "Smith GL Vana Kilitleri",
            description: "Smith GL serisi, çok dönüşlü manuel vanalarda güvenli izolasyon ve bakım prosedürlerini garanti eder. Mekanik kilitleme sayesinde operatör hatalarını önler, doğru vana sırasını zorunlu kılar. Kritik proses hatlarında güvenli devreye alma ve bakım adımlarını destekler.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "smith-gl-vana-kilitleri")
          },
          {
            id: 2,
            name: "Netherlocks Interlocks",
            description: "Netherlocks (NL) Vana Kilitleri, kompakt tasarımı ve yüksek dayanıklılığı ile öne çıkan güvenilir kilitleme çözümleridir. Çeyrek dönüşlü (kelebek, küresel) ve çok dönüşlü (sürgülü, glob) vanalar için farklı modeller sunar. Benzersiz anahtar kodlama ile yanlış vanaya müdahaleyi engeller ve bakım sırasında güvenliği artırır. IP66/IP67 koruma sınıfı ile zorlu endüstriyel ortamlarda bile kusursuz çalışır. Rafineri, kimya tesisleri ve offshore platformlarda yaygın olarak kullanılır.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "netherlocks-interlocks")
          },
          {
            id: 11,
            name: "Netherlocks NDL Çeyrek Dönüş Kilitleri",
            description: "NDL kilitleri, çeyrek dönüşlü manuel vanalarda güvenli işlem sırasını mekanik olarak garanti eder. Hızlı vana hareketlerinden doğan riskleri azaltır ve yanlış müdahaleleri engeller. Kompakt yapısı sayesinde sahada kolayca uygulanır.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "netherlocks-ndl-ceyrek-donus-kilitleri")
          },
          {
            id: 12,
            name: "Netherlocks MRL Vana Kilitleri",
            description: "MRL serisi, çok dönüşlü manuel vanalar için geliştirilmiş dayanıklı kilitleme çözümleridir. Anahtar transfer prensibi ile doğru sıralamayı zorunlu kılar, bakım ve izolasyon süreçlerinde güvenli operasyon sağlar. Zorlu endüstriyel ortamlarda uzun ömürlü performans sunar.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "netherlocks-mrl-vana-kilitleri")
          },
          {
            id: 3,
            name: "Anahtar Yönetimi",
            description: "Anahtar Yönetim Sistemleri, vana kilidi anahtarlarının merkezi ve dijital kontrolünü sağlayan akıllı kabinlerdir. RFID, PIN veya biyometrik erişim kontrolü ile yalnızca yetkili personelin anahtarlara ulaşmasını garanti eder. Tüm anahtar hareketlerini kaydederek denetim izlenebilirliği sağlar, operasyonel verimlilik metriklerini raporlar ve DCS/SCADA sistemlerine entegre olabilir. Büyük tesislerde güvenlik yönetimini dijitalleştirir, vardiyalar arası anahtar takibini standartlaştırır ve sahadaki disiplin seviyesini artırır.",
            image: `${productImageBase}/key-management.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "anahtar-yonetimi")
          },
          {
            id: 4,
            name: "Sıra Kontrolü",
            description: "Sıra Kontrol Sistemleri, birden fazla vanayı içeren karmaşık prosesleri basitleştiren mekanik veya elektronik ünitelerdir. Aynı vananın farklı aşamalarda tekrar çalıştırılması gereken durumları, ters sıralı operasyonları ve çoklu yol senaryolarını güvenle yönetir. Pig launcher/receiver sistemleri, çok adımlı izolasyon prosedürleri ve karmaşık başlatma/durdurma sekansları için idealdir. Elektrik gerektirmeden çalışabilir ve operatörün doğru sırayı atlamasını fiziksel olarak engeller, sahada güvenli işlem disiplinini güçlendirir.",
            image: `${productImageBase}/sequence-control.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "sira-kontrolu")
          }
        ]
      },
      {
        id: 2,
        name: "Tahrik Sistemleri – Taşınabilir Vana Aktüatörleri",
        description: "Taşınabilir vana aktüatörleri, manuel vanaların hızlı, güvenli ve ergonomik olarak çalıştırılmasını sağlayan portatif cihazlardır. Operatör yaralanmalarını önler, vana çalıştırma süresini %80'e kadar azaltır ve zorlu konumlardaki vanalara erişimi kolaylaştırır.",
        items: [
          {
            id: 5,
            name: "EasiDrive Taşınabilir Aktüatör",
            description: "EasiDrive, lityum-iyon batarya ile çalışan hafif ve ergonomik bir taşınabilir vana aktüatörüdür. Sadece 7.5 kg ağırlığında olup tek operatör tarafından kolayca taşınabilir. 150 Nm'ye kadar tork çıkışı sağlayarak büyük el çarklı vanaları dakikalar içinde açıp kapatır. Fiziksel zorlanmaları önler, operatör yorgunluğunu azaltır ve 8 saatten fazla kesintisiz çalışma kapasitesi sunar. Yeraltı vanaları ve ulaşılması zor konumlar için idealdir; tork limitleri sayesinde aşırı sıkma riskini azaltır ve sahada ergonomiyi iyileştirir.",
            image: `${productImageBase}/easidrive.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "easidrive")
          },
          {
            id: 6,
            name: "Power Wrench Taşınabilir Aktüatör",
            description: "Power Wrench, basınçlı hava (6-8 bar) ile çalışan yüksek torklu pnömatik vana aktüatörüdür. 2700 Nm'ye kadar tork çıkışı ile en zorlu vanaları bile kolayca çalıştırır. ATEX ve IECEx sertifikalı olup patlama riski olan tehlikeli alanlarda güvenle kullanılabilir. Sıkışmış vanalar, büyük izolasyon vanaları ve acil durum vanaları için tercih edilir. Manuel operasyona göre çalıştırma süresini %80'e kadar azaltır, kontrollü tork uygulamasıyla ekipman ömrünü uzatır ve bakım ekiplerinin iş yükünü düşürür.",
            image: `${productImageBase}/power-wrench.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "power-wrench")
          },
          {
            id: 7,
            name: "FlexiDrive Uzaktan Operatör",
            description: "FlexiDrive, esnek mil teknolojisi ile tehlikeli veya ulaşılması zor alanlardaki vanaları güvenli mesafeden çalıştırmanızı sağlayan uzaktan vana operatörüdür. 30 metreye kadar uzunlukta esnek şaft seçenekleri sunar. Yüksek sıcaklık bölgeleri, kimyasal maruz kalma riski olan alanlar ve dar erişim noktaları için idealdir. Operatörü tehlikeli bölgelerden uzak tutarak iş güvenliğini artırır. Zincir çarklı sistemlere modern ve güvenli bir alternatiftir, saha ergonomisini iyileştirir ve kontrol disiplinini güçlendirir.",
            image: `${productImageBase}/flexidrive.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "flexidrive")
          }
        ]
      },
      {
        id: 3,
        name: "Vana İzleme",
        description: "Vana pozisyon göstergeleri, manuel vanalarınızın açık/kapalı durumunu gerçek zamanlı olarak kontrol odanıza ileten akıllı sensörlerdir. Operasyonel görünürlüğü artırır, beklenmeyen pozisyon değişikliklerinde alarm verir ve proses güvenliğini destekler.",
        items: [
          {
            id: 8,
            name: "VPI Pozisyon Göstergesi",
            description: "VPI (Valve Position Indicator), manuel vanalarınızın anlık durumunu kontrol odanıza ileten yüksek performanslı pozisyon sensörüdür. 4-20mA, HART veya dijital çıkış seçenekleri ile mevcut DCS/SCADA sistemlerinize kolayca entegre olur. IP66/IP67 koruma sınıfı ve ATEX/IECEx sertifikaları ile zorlu endüstriyel ortamlarda güvenilir çalışır. Kritik izolasyon vanaları, emniyet vanaları ve uzaktan izleme gerektiren tüm manuel vanalar için standart çözümdür; yanlış varsayımları ortadan kaldırarak güvenliği artırır ve hatalı hat hizalamasını önler.",
            image: `${productImageBase}/vpi.jpg`,
            link: withSlug(ROUTE_MAP.tr.products, "vpi")
          }
        ]
      }
    ]
  },
  en: {
    pageTitle: "Products",
    categories: [
      {
        id: 1,
        name: "Process Safety – Valve Interlocks",
        description: "Valve interlocks are safety devices that mechanically enforce your operators to follow correct manual valve procedures. Working on the key transfer principle, they ensure valves can only be opened and closed in a specific sequence, thus preventing accidents caused by human error.",
        items: [
          {
            id: 1,
            name: "Smith Interlocks",
            description: "Smith Flow Control (SFC) Valve Interlocks are the world's most preferred premium valve interlocking solution. Designated as standard by global energy giants such as Shell, BP, and ExxonMobil, this system is mounted on individual valves to mechanically control which valves are operated in which sequence. The key transfer principle physically blocks incorrect steps while providing passive safety without power. ATEX, IECEx and SIL certified, Smith interlocks deliver reliable performance from -40°C to +120°C.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "smith-interlocks")
          },
          {
            id: 9,
            name: "Smith QL Valve Interlocks",
            description: "The Smith QL series mechanically enforces the correct operating sequence on manual quarter-turn valves. It controls risks caused by rapid open/close actions and prevents incorrect lineups and unauthorized intervention. The key transfer principle establishes disciplined and safe field operations.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "smith-ql-vana-kilitleri")
          },
          {
            id: 10,
            name: "Smith GL Valve Interlocks",
            description: "The Smith GL series guarantees safe isolation and maintenance procedures on manual multi-turn valves. Mechanical interlocking prevents operator errors and enforces the correct valve sequence. It supports safe commissioning and maintenance in critical process lines.",
            image: `${productImageBase}/smith-interlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "smith-gl-vana-kilitleri")
          },
          {
            id: 2,
            name: "Netherlocks Interlocks",
            description: "Netherlocks (NL) Valve Interlocks stand out with their compact design and high durability as reliable interlocking solutions. They offer different models for quarter-turn (butterfly, ball) and multi-turn (gate, globe) valves. Unique key coding prevents wrong-valve intervention and improves maintenance safety. With IP66/IP67 protection class, they work flawlessly even in harsh industrial environments. Widely used in refineries, chemical plants and offshore platforms.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "netherlocks-interlocks")
          },
          {
            id: 11,
            name: "Netherlocks NDL Quarter-Turn Interlocks",
            description: "NDL interlocks mechanically guarantee safe sequencing on manual quarter-turn valves. They reduce risks caused by rapid valve movements and prevent incorrect intervention. The compact design makes field installation easy.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "netherlocks-ndl-ceyrek-donus-kilitleri")
          },
          {
            id: 12,
            name: "Netherlocks MRL Valve Interlocks",
            description: "The MRL series provides durable interlocking solutions for manual multi-turn valves. The key transfer principle enforces the correct sequence, enabling safe maintenance and isolation operations. It delivers long service life in harsh industrial environments.",
            image: `${productImageBase}/netherlocks.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "netherlocks-mrl-vana-kilitleri")
          },
          {
            id: 3,
            name: "Key Management",
            description: "Key Management Systems are smart cabinets that provide centralized and digital control of valve interlock keys. They guarantee that only authorized personnel can access keys through RFID, PIN or biometric access control. By recording all key movements, they provide audit traceability, report operational efficiency metrics and can integrate with DCS/SCADA systems. They digitize safety management in large facilities, standardize key tracking across shifts, and strengthen field discipline.",
            image: `${productImageBase}/key-management.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "anahtar-yonetimi")
          },
          {
            id: 4,
            name: "Sequence Control",
            description: "Sequence Control Systems are mechanical or electronic units that simplify complex processes involving multiple valves. They safely manage situations where the same valve needs to be operated again at different stages, reverse sequence operations and multiple path scenarios. Ideal for pig launcher/receiver systems, multi-step isolation procedures and complex start-up/shutdown sequences. Can operate without electricity and physically blocks operators from skipping steps, reinforcing safe field discipline.",
            image: `${productImageBase}/sequence-control.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "sira-kontrolu")
          }
        ]
      },
      {
        id: 2,
        name: "Drive Systems – Portable Valve Actuators",
        description: "Portable valve actuators are portable devices that enable fast, safe and ergonomic operation of manual valves. They prevent operator injuries, reduce valve operating time by up to 80% and facilitate access to valves in difficult locations.",
        items: [
          {
            id: 5,
            name: "EasiDrive Portable Actuator",
            description: "EasiDrive is a lightweight and ergonomic portable valve actuator powered by lithium-ion battery. Weighing only 7.5 kg, it can be easily carried by a single operator. Providing up to 150 Nm torque output, it opens and closes large handwheel valves within minutes. It prevents back injuries, reduces operator fatigue and offers over 8 hours of continuous operation. Ideal for underground valves and hard-to-reach locations, with torque limits that reduce over-tightening risks and improve field ergonomics.",
            image: `${productImageBase}/easidrive.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "easidrive")
          },
          {
            id: 6,
            name: "Power Wrench Portable Actuator",
            description: "Power Wrench is a high-torque pneumatic valve actuator powered by compressed air (6-8 bar). With up to 2700 Nm torque output, it easily operates even the most difficult valves. ATEX and IECEx certified, it can be safely used in hazardous areas with explosion risk. Preferred for stuck valves, large isolation valves and emergency valves. Reduces operating time by up to 80% compared to manual operation, applies controlled torque to extend equipment life, and lowers maintenance workload.",
            image: `${productImageBase}/power-wrench.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "power-wrench")
          },
          {
            id: 7,
            name: "FlexiDrive Remote Operator",
            description: "FlexiDrive is a remote valve operator that allows you to operate valves in hazardous or hard-to-reach areas from a safe distance using flexible shaft technology. It offers flexible shaft options up to 30 meters in length. Ideal for high temperature zones, areas with chemical exposure risk and narrow access points. It increases workplace safety by keeping operators away from hazardous areas. A modern and safe alternative to chain wheel systems that improves field ergonomics and operational control.",
            image: `${productImageBase}/flexidrive.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "flexidrive")
          }
        ]
      },
      {
        id: 3,
        name: "Valve Monitoring",
        description: "Valve position indicators are smart sensors that transmit the open/closed status of your manual valves to your control room in real-time. They increase operational visibility, alarm on unexpected position changes and support process safety.",
        items: [
          {
            id: 8,
            name: "VPI Position Indicator",
            description: "VPI (Valve Position Indicator) is a high-performance position sensor that transmits the instant status of your manual valves to your control room. With 4-20mA, HART or digital output options, it easily integrates with your existing DCS/SCADA systems. With IP66/IP67 protection class and ATEX/IECEx certifications, it operates reliably in harsh industrial environments. The standard solution for critical isolation valves, safety valves and all manual valves requiring remote monitoring, eliminating incorrect assumptions and wrong lineups.",
            image: `${productImageBase}/vpi.jpg`,
            link: withSlug(ROUTE_MAP.en.products, "vpi")
          }
        ]
      }
    ]
  }
};


products.az = products.tr;

export const solutions = {
  tr: [
    {
      id: 1,
      title: "Güvenli Vana Operasyonlarını Zorunlu Kılın",
      description: "Kilitli anahtar çözümleri, önceden tanımlanmış bir operasyon sırasını mekanik olarak zorunlu kılar. Vana kilitleri, operatörlerin yanlış sırada veya yanlış vanayı açmasını fiziksel olarak imkansız hale getirir. Anahtar, bir vanadan çıkarılmadan diğer vanaya takılamaz - bu sayede her adım doğru sırada tamamlanmak zorundadır. Shell, BP ve ExxonMobil gibi global enerji devleri bu sistemi standart olarak belirlemiştir. Proses güvenliğinizi insan faktöründen bağımsız hale getirin.",
      image: "/images/solutions/safe-operation.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "guvenli-vana-operasyonu")
    },
    {
      id: 2,
      title: "Manuel Vana Pozisyonlarını İzleyin",
      description: "Vana Pozisyon Göstergeleri (VPI), manuel vanalarınızın açık ve kapalı konumunu gerçek zamanlı olarak kontrol odanıza raporlar. Kritik vanaların beklenmedik şekilde konumunu değiştirmesi durumunda anında alarm verir. DCS ve SCADA sistemlerinize 4-20mA, HART veya dijital çıkışlarla kolayca entegre olur. Tesis genelinde yüzlerce vananın durumunu tek bir ekrandan izleyerek operasyonel görünürlüğünüzü maksimize edin. Plansız duruşların ve güvenlik ihlallerinin önüne geçin.",
      image: "/images/solutions/position-monitoring.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "vana-pozisyon-izleme")
    },
    {
      id: 3,
      title: "Manuel Vanaları Hızlı Çalıştırın",
      description: "Taşınabilir vana aktüatörlerimiz ile operatör verimliliğini ve konforunu artırın. Büyük el çarklı vanaların manuel çalıştırılması saatler sürebilir ve ciddi fiziksel zorlanmalara neden olabilir. EasiDrive ve Power Wrench aktüatörleri, vana çalıştırma süresini %80'e kadar azaltır. Batarya veya basınçlı hava ile çalışan bu taşınabilir cihazlar, tek operatör tarafından kolayca taşınabilir. Tesis duruşlarınızı kısaltın, iş gücü maliyetlerinizi düşürün ve çalışan sağlığını koruyun.",
      image: "/images/solutions/quick-operation.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "hizli-vana-operasyonu")
    },
    {
      id: 4,
      title: "Manuel Vanaları Uzaktan Çalıştırın",
      description: "Uzaktan vana çalıştırma sistemlerimiz ile tehlikeli veya ulaşılması zor alanlardaki vanalarınızı güvenli mesafeden kontrol edin. FlexiDrive esnek şaft sistemleri 30 metreye kadar mesafeden vana operasyonu sağlar. Yüksek sıcaklık bölgeleri, kimyasal maruz kalma riski olan alanlar, dar geçitler ve yüksek rakımlı konumlar için idealdir. Operatörlerinizi tehlikeden uzak tutarken, vana erişilebilirliğini artırın. Zincir çarklı eski sistemlere modern ve güvenli bir alternatif sunuyoruz.",
      image: "/images/solutions/remote-operation.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "uzaktan-vana-operasyonu")
    },
    {
      id: 5,
      title: "Kritik Güvenlik Sistemi Bütünlüğünü Sağlayın",
      description: "Sofis vana kilitleme sistemleri, endüstrinin IEC 61511, API 554 ve OSHA gibi katı güvenlik düzenlemelerine uymasına yardımcı olur. SIL (Safety Integrity Level) gereksinimlerini karşılayan sertifikalı çözümlerimiz, güvenlik denetimlerinde kanıt olarak kullanılabilir. Proses tehlike analizlerinizde (HAZOP) belirlenen riskleri mekanik olarak azaltır. Yasal uyumluluk cezalarından kaçının, sigorta primlerinizi düşürün ve en önemlisi çalışanlarınızı ve çevreyi koruyun.",
      image: "/images/solutions/safety-integrity.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "guvenlik-butunlugu")
    },
    {
      id: 6,
      title: "Operasyonel Verimliliği Sağlayın",
      description: "Sofis vana kilit denetim programları, istenmeyen, maliyetli ve tehlikeli durumları proaktif olarak önler. Düzenli denetimler ile kilitlerinizin durumunu değerlendirin, arızaları erken tespit edin ve bakım planlamanızı optimize edin. Dijital anahtar yönetim sistemleri ile tüm operasyonları kayıt altına alın, verimlilik metriklerini analiz edin ve sürekli iyileştirme fırsatlarını belirleyin. Plansız duruşları minimize ederek üretim kaybını önleyin ve toplam sahip olma maliyetinizi düşürün.",
      image: "/images/solutions/operational-efficiency.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "operasyonel-verimlilik")
    },
    {
      id: 7,
      title: "İnsan Hatasının Etkilerini Azaltın",
      description: "İnsan hatası, endüstriyel kazaların %80'inden fazlasının temel nedenidir. Sofis çözümleri, vana sistemlerini anlamak için operatörler ve bakım ekiplerine kapsamlı eğitim programları sunar. Ancak eğitimin ötesinde, mekanik kilitleme sistemlerimiz insan hatasını fiziksel olarak imkansız hale getirir. Yorgunluk, dikkat dağınıklığı veya deneyimsizlik gibi faktörlerden bağımsız olarak, doğru prosedürlerin her zaman takip edilmesini garanti eder. Güvenliği kişisel disipline değil, mühendislik kontrollerine bırakın.",
      image: "/images/solutions/human-error.jpg",
      link: withSlug(ROUTE_MAP.tr.solutions, "insan-hatasi-azaltma")
    }
  ],
  en: [
    {
      id: 1,
      title: "Enforce Safe Valve Operations",
      description: "Trapped key interlock solutions mechanically enforce a predefined sequence of operations. Valve interlocks make it physically impossible for operators to open the wrong valve or open valves in the wrong sequence. A key cannot be inserted into another valve without being removed from one valve - this ensures each step must be completed in the correct order. Global energy giants such as Shell, BP and ExxonMobil have designated this system as standard. Make your process safety independent of human factors.",
      image: "/images/solutions/safe-operation.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "guvenli-vana-operasyonu")
    },
    {
      id: 2,
      title: "Monitor Manual Valve Positions",
      description: "Valve Position Indicators (VPI) report the open and closed position of your manual valves to your control room in real-time. They immediately alarm if critical valves unexpectedly change position. They easily integrate with your DCS and SCADA systems via 4-20mA, HART or digital outputs. Maximize your operational visibility by monitoring the status of hundreds of valves across your facility from a single screen. Prevent unplanned shutdowns and safety violations.",
      image: "/images/solutions/position-monitoring.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "vana-pozisyon-izleme")
    },
    {
      id: 3,
      title: "Operate Manual Valves Quickly",
      description: "Increase operator efficiency and comfort with our portable valve actuators. Manual operation of large handwheel valves can take hours and cause serious back injuries. EasiDrive and Power Wrench actuators reduce valve operating time by up to 80%. These portable devices, powered by battery or compressed air, can be easily carried by a single operator. Shorten your plant shutdowns, reduce labor costs and protect employee health.",
      image: "/images/solutions/quick-operation.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "hizli-vana-operasyonu")
    },
    {
      id: 4,
      title: "Operate Manual Valves Remotely",
      description: "Control your valves in hazardous or hard-to-reach areas from a safe distance with our remote valve operating systems. FlexiDrive flexible shaft systems provide valve operation from up to 30 meters away. Ideal for high temperature zones, areas with chemical exposure risk, narrow passages and high altitude locations. Increase valve accessibility while keeping your operators away from danger. We offer a modern and safe alternative to old chain wheel systems.",
      image: "/images/solutions/remote-operation.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "uzaktan-vana-operasyonu")
    },
    {
      id: 5,
      title: "Ensure Critical Safety System Integrity",
      description: "Sofis valve interlocking systems help industry comply with strict safety regulations such as IEC 61511, API 554 and OSHA. Our certified solutions that meet SIL (Safety Integrity Level) requirements can be used as evidence in safety audits. They mechanically reduce risks identified in your process hazard analyses (HAZOP). Avoid legal compliance penalties, lower your insurance premiums and most importantly protect your employees and the environment.",
      image: "/images/solutions/safety-integrity.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "guvenlik-butunlugu")
    },
    {
      id: 6,
      title: "Ensure Operational Efficiency",
      description: "Sofis valve interlock audit programs proactively prevent unwanted, costly and dangerous situations. Assess the condition of your interlocks with regular audits, detect failures early and optimize your maintenance planning. Record all operations with digital key management systems, analyze efficiency metrics and identify continuous improvement opportunities. Minimize unplanned shutdowns to prevent production losses and reduce your total cost of ownership.",
      image: "/images/solutions/operational-efficiency.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "operasyonel-verimlilik")
    },
    {
      id: 7,
      title: "Reduce the Effects of Human Error",
      description: "Human error is the root cause of over 80% of industrial accidents. Sofis solutions offer comprehensive training programs for operators and maintenance teams to understand valve systems. But beyond training, our mechanical interlocking systems make human error physically impossible. Regardless of factors such as fatigue, distraction or inexperience, it guarantees that correct procedures are always followed. Leave safety to engineering controls, not personal discipline.",
      image: "/images/solutions/human-error.jpg",
      link: withSlug(ROUTE_MAP.en.solutions, "insan-hatasi-azaltma")
    }
  ]
};

solutions.az = solutions.tr;


export const industries = {
  tr: [
    {
      id: 1,
      name: "Enerji ve Proses",
      description:
        "Rafineri, petrokimya ve enerji santrallerinde tek bir yanlış vana hareketi; milyonlarca liralık duruşa ve güvenlik olaylarına neden olabilir. Sofis çözümleriyle kritik izinli operasyonları mekanik olarak kilitleyerek, üretim sürenizi uzatır ve bakım duruşlarını daha öngörülebilir hale getirirsiniz.",
      image: "/images/industries/energy-process.jpg",
      link: "/industries/enerji-proses"
    },
    {
      id: 2,
      name: "Tank Depolama",
      description:
        "Tank çiftliklerinde yanlış vana hattı, yanlış tank dolumu ve taşma riskini beraberinde getirir. Vana kilitleri ve uzaktan operatör çözümleriyle yükleme/boşaltma operasyonlarını güvenli adımlara böler, hem operatörü hem de çevreyi korursunuz.",
      image: "/images/industries/tank-storage.jpg",
      link: "/industries/tank-depolama"
    },
    {
      id: 3,
      name: "Su ve Atıksu",
      description:
        "İçme suyu ve atıksu tesislerinde kimyasal dozaj, hat geçişleri ve bakım operasyonları hassasiyet ister. Sofis çözümleri, doğru vana hattı düzenini zorunlu kılarak hem su kalitesini hem de operatör güvenliğini korumanıza yardımcı olur.",
      image: "/images/industries/water.jpg",
      link: "/industries/su-atiksu"
    },
    {
      id: 4,
      name: "EPC Projeleri",
      description:
        "Büyük projelerde vana kilit kapsamının sonradan eklenmesi pahalı ve zordur. Demart olarak EPC ekipleriyle tasarım aşamasında çalışarak Sofis çözümlerini P&ID’lere entegre eder, şantiyede hatasız montaj ve devreye alma sağlarız.",
      image: "/images/industries/epc.jpg",
      link: "/industries/epc-projeleri"
    },
    {
      id: 5,
      name: "Hidrojen",
      description:
        "Yeşil hidrojen üretimi ve taşınması, yüksek basınç ve yanıcılık nedeniyle ekstra güvenlik ister. Vana kilitleri ve izleme çözümleriyle kritik hatlarda yanlış operasyon riskini azaltır, yeni nesil enerji projelerinizde güvenliği ilk günden tasarlarsınız.",
      image: "/images/industries/hydrogen.jpg",
      link: "/industries/hidrojen"
    },
    {
      id: 6,
      name: "Karbon Yakalama",
      description:
        "Karbon yakalama, taşıma ve depolama hatlarında yanlış vana hattı; ısı eşanjörlerinde aşırı basınç ve proses dengesizliği yaratabilir. Sofis çözümleri ile kritik devreye alma ve devreden çıkarma adımlarını kilitleyerek bu riskleri kontrol altına alırsınız.",
      image: "/images/industries/carbon-capture.jpg",
      link: "/industries/karbon-yakalama"
    },
    {
      id: 7,
      name: "Kimya",
      description:
        "Kimya tesislerinde birden fazla ham madde, reaktör ve yardımcı sistem aynı anda devrededir. Sofis ürünleri, bu karmaşık yapıda manuel vana operasyonlarını standartlaştırarak insan hatasını azaltır ve proses güvenliğinizi güçlendirir.",
      image: "/images/industries/chemical.jpg",
      link: "/industries/kimya"
    },
    {
      id: 8,
      name: "Denizcilik ve FPSO",
      description:
        "Gemi ve FPSO’larda sınırlı alan, zor erişilen vanalar ve zorlu hava koşulları standardın bir parçasıdır. Uzaktan operatörler ve kilit çözümleri sayesinde güverte altındaki ve yüksek konumdaki vanaları güvenli bir noktadan çalıştırarak, denizde de karadaki kadar kontrollü operasyon sağlarsınız.",
      image: "/images/industries/marine.jpg",
      link: "/sektorler/denizcilik-fpso"
    }
  ],
  en: [
    {
      id: 1,
      name: "Energy and Process",
      description:
        "In refineries, petrochemical plants and power stations, a single wrong valve operation can lead to millions in lost production and serious safety incidents. With Sofis solutions you mechanically lock critical permitted operations, extending asset life and making shutdowns more predictable.",
      image: "/images/industries/energy-process.jpg",
      link: "/industries/enerji-proses"
    },
    {
      id: 2,
      name: "Tank Storage",
      description:
        "In tank farms, an incorrect valve line-up can result in filling the wrong tank or causing an overflow. Valve interlocks and remote operators break loading and unloading into safe, verifiable steps, protecting both operators and the environment.",
      image: "/images/industries/tank-storage.jpg",
      link: "/industries/tank-depolama"
    },
    {
      id: 3,
      name: "Water and Wastewater",
      description:
        "Drinking water and wastewater plants require precise control of chemical dosing, line changes and maintenance operations. Sofis solutions enforce the correct valve line-up so you can protect water quality while keeping your operators safe.",
      image: "/images/industries/water.jpg",
      link: "/industries/su-atiksu"
    },
    {
      id: 4,
      name: "EPC Projects",
      description:
        "Adding valve interlock scope late in a project is costly and complex. Working with EPC teams at the design stage, Demart integrates Sofis solutions into the P&IDs and ensures flawless installation and commissioning on site.",
      image: "/images/industries/epc.jpg",
      link: "/industries/epc-projeleri"
    },
    {
      id: 5,
      name: "Hydrogen",
      description:
        "Green hydrogen production and transportation involve high pressures and flammable media that demand extra safety. With valve interlocks and monitoring solutions you reduce the risk of incorrect operations on critical lines and build safety into your new energy projects from day one.",
      image: "/images/industries/hydrogen.jpg",
      link: "/industries/hidrojen"
    },
    {
      id: 6,
      name: "Carbon Capture",
      description:
        "In carbon capture, transport and storage systems, an incorrect line-up can overpressure heat exchangers and destabilize the process. Sofis solutions lock in the correct start-up and shutdown steps so you keep these emerging assets under tight control.",
      image: "/images/industries/carbon-capture.jpg",
      link: "/industries/karbon-yakalama"
    },
    {
      id: 7,
      name: "Chemical",
      description:
        "Chemical plants run multiple feed streams, reactors and utility systems simultaneously. Sofis products standardize manual valve operations in this complex environment, reducing human error and strengthening your overall process safety.",
      image: "/images/industries/chemical.jpg",
      link: "/industries/kimya"
    },
    {
      id: 8,
      name: "Marine and FPSO",
      description:
        "On ships and FPSOs, limited space, hard-to-reach valves and harsh conditions are part of daily reality. Remote operators and valve interlocks allow you to operate valves in confined or exposed areas from safe locations, delivering the same level of control offshore as you have onshore.",
      image: "/images/industries/marine.jpg",
      link: "/industries/denizcilik-fpso"
    }
  ]
};

industries.az = industries.tr;


export const applications = {
  tr: [
    {
      id: 1,
      title: "Basınç Tahliye Vanalarının Güvenli İzolasyonu",
      description:
        "Tahliye vanaları, proses ekipmanınızı aşırı basınçtan koruyan son savunma hattıdır. Bakım veya kalibrasyon için devre dışı alındıklarında bile sisteminizin koruma altında kalması gerekir. Sofis çözümleriyle yedek tahliye vanasına geçiş sıranıza kilit koyar, yanlış vana kombinasyonlarını fiziksel olarak imkânsız hale getirirsiniz. Böylece operatör prosedüre uymasa bile ekipmanınız ve tesisiniz korunur.",
      image: "/images/applications/pressure-relief.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "basinc-tahliye-vanalari")
    },
    {
      id: 2,
      title: "Güvenli Pompa Başlatma Operasyonları",
      description:
        "Pompalar, tesisinizin kalbi gibidir; yanlış vana hattı ile başlatıldıklarında ciddi mekanik hasar, sızıntı ve duruşa neden olabilirler. Sofis vana kilitleri, pompa devreye alınmadan önce emiş, deşarj ve bypass hatlarının doğru sırayla açılmasını zorunlu kılar. Operatör, yanlış vanayı açsa bile sistem buna izin vermez, böylece pompa ve prosesiniz ilk seferde doğru şekilde çalışır.",
      image: "/images/applications/pump-start.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "pompa-baslatma")
    },
    {
      id: 3,
      title: "Büyük Manuel Vanaların Güvenli Çalıştırılması",
      description:
        "Büyük el çarklı vanaların elle çevrilmesi hem zaman alıcı hem de operatör sağlığı için risklidir. Ağır vanaları zorlayarak çevirmek, sırt ve omuz zorlanmalarına ve hatalı pozisyonlamaya yol açabilir. Taşınabilir aktüatör çözümlerimizle bu vanalar dakikalar içinde, kontrollü torkla ve minimum eforla çalıştırılır. Böylece hem iş güvenliği artar hem de bakım ve operasyon süreleri kısalır.",
      image: "/images/applications/large-valves.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "buyuk-vanalar")
    },
    {
      id: 4,
      title: "Isı Eşanjörlerinin Aşırı Basınçlanmasını Önleme",
      description:
        "Paralel bağlı ısı eşanjörleri arasında geçiş yaparken, yanlış vana kombinasyonları boru demetlerinde aşırı basınç ve ciddi hasar oluşturabilir. Sofis kilit sistemleri, devreden çıkan eşanjör ile devreye giren eşanjörün vanaları arasında güvenli bir anahtar sırası kurar. Operatör yalnızca doğru sırayı takip ettiğinde anahtar serbest kalır ve proses kesintisiz, güvenli şekilde devam eder.",
      image: "/images/applications/heat-exchangers.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "isi-esanjoru")
    },
    {
      id: 5,
      title: "Ulaşılması Zor Vanaları Çalıştırma",
      description:
        "Merdivenle çıkılan platformlar, çukurlar veya tavan arasındaki vanalar hem erişim hem de güvenlik açısından risklidir. FlexiDrive gibi uzaktan operatör çözümleriyle, bu vanaların el çarkları güvenli bir noktaya taşınır ve operatörünüz zeminden ayrılmadan vanayı kullanır. Böylece düşme, sıkışma ve kimyasal maruziyet riskleri önemli ölçüde azalır.",
      image: "/images/applications/hard-to-reach.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "ulasimi-zor-vanalar")
    },
    {
      id: 6,
      title: "Kimyasal Boşaltma Sırasında Güvenli Hat Düzenlemeleri",
      description:
        "Tankerden tesise kimyasal boşaltırken yapılacak tek bir hatalı vana hareketi, yanlış tankın dolmasına veya kimyasal karışmasına neden olabilir. Vana kilitleme sistemlerimiz, hortum bağlantısından boşaltma hattına kadar tüm adımları belirli bir sıraya bağlı kılar. Operatör, yalnızca doğru hat düzenini kurduğunda anahtarlar serbest kalır ve kimyasal güvenle transfer edilir.",
      image: "/images/applications/chemical-offload.jpg",
      link: withSlug(ROUTE_MAP.tr.applications, "kimyasal-bosaltma")
    },
    {
      id: 7,
      title: "Güvenli Hammadde Saflaştırma Prosesleri",
      description:
        "Etilen çatlatma gibi proseslerde besleme hattının yanlış hat düzeniyle devreye alınması, ekipman hasarı ve patlama riski oluşturur. Sofis çözümleri, kurutma ve eleme ünitelerine giden hatlardaki vanaları birbirine kilitleyerek operatörün yanlış hattı açmasını engeller. Böylece rejenerasyon ve saflaştırma adımları her zaman güvenli sırada gerçekleşir.",
      image: "https://images.unsplash.com/photo-1581092917852-2d3a7e9a1f5b?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "hammadde-saflastirma")
    },
    {
      id: 8,
      title: "Pigleme Öncesi Korozyon İzleme Problarının Çıkarılması",
      description:
        "Pigleme işlemi öncesinde korozyon kuponu veya izleme problarının hatta bırakılması, pigin sıkışmasına ve boru hattı hasarına yol açabilir. Kilitli vana çözümleri, pig gönderme hattındaki valfleri ve prob sökme noktalarını birbirine bağlayarak yanlış sırayı engeller. Böylece prob güvenle çıkarılmadan pig operasyona başlayamaz.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "korozyon-izleme")
    },
    {
      id: 9,
      title: "Radyasyon Kaynaklarına Maruziyeti Azaltma",
      description:
        "Seviye ve yoğunluk ölçümünde kullanılan gama kaynakları, yanlış hat düzeni veya yanlış erişim nedeniyle operatörleri gereksiz radyasyona maruz bırakabilir. Vana kilitleri ve erişim kilitleriyle, bakım veya değişim sırasında doğru ekranlama adımlarını zorunlu kılarak radyasyon riskini kontrol altına alırsınız.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "radyasyon-korunma")
    },
    {
      id: 10,
      title: "Güvenli Pigleme Operasyonları",
      description:
        "Pigleme; akışı iyileştirirken aynı zamanda yüksek basınç, açılan kapaklar ve hareketli ekipman nedeniyle risklidir. Sofis sıra kontrol üniteleri, pig gönderme ve alma istasyonundaki tüm vanaları ve kör flanşları belirli bir kilit dizisine bağlar. Operatör yanlış sırada hareket etmeye kalktığında anahtar kilitli kalır ve pigleme sadece güvenli sırayla yapılabilir.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "pigleme")
    },
    {
      id: 11,
      title: "Dar Alanlarda Manuel Vanaların Güvenli Çalıştırılması",
      description:
        "Kuyu, tünel veya menhol gibi kapalı hacimlerde bulunan vanalara inmek; oksijen düşüklüğü, gaz birikmesi ve kurtarma zorluğu nedeniyle ciddi risk taşır. Uzaktan vana operatörleri ve kilitleme çözümleri sayesinde bu vanalar, kapalı alana girmeden yüzeyden çalıştırılabilir. Böylece kapalı alan giriş sayısını azaltır ve iş güvenliği kültürünüzü güçlendirirsiniz.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "dar-alanlar")
    },
    {
      id: 12,
      title: "Vana Operasyonlarında İnsan Performansını İyileştirme",
      description:
        "Vana operasyonlarında hataların büyük kısmı, karmaşık prosedürleri ezbere uygulamaya çalışan yorgun operatörlerden kaynaklanır. Sofis çözümleri, net görsel etiketleme, eğitim ve mekanik kilitleme ile operatörün üzerinden prosedür yükünü alır. Böylece hem insan hatasını azaltır hem de yeni personelin sisteme daha hızlı uyum sağlamasını sağlarsınız.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8d?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.tr.applications, "insan-performansi")
    }
  ],
  en: [
    {
      id: 1,
      title: "Safe Isolation of Pressure Relief Valves",
      description:
        "Pressure relief valves are the last safety barrier protecting your equipment against overpressure. Even when a valve is taken out of service for maintenance or calibration, your system must remain protected. With Sofis solutions you lock the switchover sequence to the spare PRV, making incorrect valve combinations physically impossible. This ensures your plant remains protected even if the operator makes a mistake.",
      image: "/images/applications/pressure-relief.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "basinc-tahliye-vanalari")
    },
    {
      id: 2,
      title: "Guaranteing Safe Pump Start-Up Operations",
      description:
        "Pumps are the heart of your process; starting them against the wrong valve line-up can cause severe mechanical damage, leaks and downtime. Sofis valve interlocks enforce the correct sequence for suction, discharge and bypass valves before the pump is started. Even if the operator tries to open the wrong valve, the system will not allow it, so your pump and process start up right the first time.",
      image: "/images/applications/pump-start.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "pompa-baslatma")
    },
    {
      id: 3,
      title: "Safe Operation of Large Manual Valves",
      description:
        "Operating large handwheel valves manually is time-consuming and physically demanding, often leading to back and shoulder injuries as well as incorrect valve positioning. Our portable actuator solutions allow these valves to be operated within minutes with controlled torque and minimal effort. This improves safety for your operators while significantly reducing shutdown and maintenance durations.",
      image: "/images/applications/large-valves.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "buyuk-vanalar")
    },
    {
      id: 4,
      title: "Preventing Over-Pressurisation of Heat Exchangers",
      description:
        "When switching between parallel heat exchangers, an incorrect valve combination can cause tube bundle overpressure and serious damage. Sofis interlock systems create a safe key sequence between the valves of the exchanger going offline and the one coming online. The operator can only complete the switchover when the correct sequence is followed, keeping your process running safely and continuously.",
      image: "/images/applications/heat-exchangers.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "isi-esanjoru")
    },
    {
      id: 5,
      title: "Operating Hard-to-Reach Valves",
      description:
        "Valves located high on structures, in pits or above pipe racks are difficult and sometimes dangerous to access. Solutions such as FlexiDrive remote operators bring the handwheel down to a safe working location so your operator can remain on the floor. This greatly reduces the risk of falls, entrapment and chemical exposure while maintaining full control over the valve.",
      image: "/images/applications/hard-to-reach.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "ulasimi-zor-vanalar")
    },
    {
      id: 6,
      title: "Safe Line-Ups During Chemical Offloading",
      description:
        "During chemical offloading from road tankers, a single wrong valve operation can result in filling the wrong tank or mixing incompatible chemicals. Our valve interlock solutions connect all critical valves and hose connections in a defined sequence. Only when the correct line-up is established will the keys be released, ensuring that hazardous chemicals are always transferred to the right destination.",
      image: "/images/applications/chemical-offload.jpg",
      link: withSlug(ROUTE_MAP.en.applications, "kimyasal-bosaltma")
    },
    {
      id: 7,
      title: "Guaranteing Safe Feedstock Purification Processes",
      description:
        "In processes such as ethylene cracking, bringing the wrong line-up into service during regeneration can damage equipment and create explosion risks. Sofis solutions interlock the valves feeding dryers and sieves so that operators cannot open the wrong combination. As a result, regeneration and purification steps always take place in a safe and verified sequence.",
      image: "https://images.unsplash.com/photo-1581092917852-2d3a7e9a1f5b?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "hammadde-saflastirma")
    },
    {
      id: 8,
      title: "Removing Corrosion Monitoring Probes Before Pigging",
      description:
        "If corrosion coupons or monitoring probes are left in the line before pigging, the pig can get stuck and severely damage the pipeline. Interlocked valve solutions tie together the valves on the pig launcher and the probe removal point, preventing the pig from being launched until the probe has been safely removed. This keeps both your pigging tools and pipeline assets protected.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "korozyon-izleme")
    },
    {
      id: 9,
      title: "Reducing Exposure to Radiation Sources",
      description:
        "Gamma sources used for level and density measurement can expose personnel to unnecessary radiation if access and line-ups are not properly controlled. With a combination of valve and access interlocks, you can enforce the correct shielding and isolation steps during maintenance or source replacement. This allows you to keep radiation risks under control and comply with strict safety regulations.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "radyasyon-korunma")
    },
    {
      id: 10,
      title: "Guaranteeing Safe Pigging Operations",
      description:
        "Pigging improves flow and reduces operating costs, but it is also a high-risk activity involving pressure, opening closures and moving equipment. Sofis sequence control units interlock all valves and closures on the pig launcher and receiver in a defined key sequence. If the operator attempts to deviate from this sequence, the key remains trapped and the operation cannot proceed, ensuring pigging is always carried out safely.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "pigleme")
    },
    {
      id: 11,
      title: "Safe Operation of Valves in Confined Spaces",
      description:
        "Valves installed in pits, tunnels or manholes pose serious risks due to low oxygen, gas accumulation and difficult rescue conditions. Remote valve operators and interlocks allow these valves to be operated from outside the confined space, eliminating the need for frequent entries. This reduces the number of confined space permits and significantly improves your safety culture.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "dar-alanlar")
    },
    {
      id: 12,
      title: "Improving Human Performance in Valve Operations",
      description:
        "Most mistakes in valve operations are made by tired operators trying to remember complex procedures. Sofis solutions combine clear visual labelling, training and mechanical interlocking to take the procedural burden off the operator. This not only reduces human error but also helps new personnel adapt quickly to your valve operating philosophy.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8d?w=800&q=80&auto=format&fit=crop",
      link: withSlug(ROUTE_MAP.en.applications, "insan-performansi")
    }
  ]
};

applications.az = applications.tr;


export const clients = [
  { name: "Dow" },
  { name: "Vopak" },
  { name: "Technip" },
  { name: "Total" },
  { name: "ExxonMobil" },
  { name: "Shell" },
  { name: "BASF" },
  { name: "BP" },
  { name: "Linde" },
  { name: "EDF" },
  { name: "SBM" },
  { name: "Fluor" },
  { name: "Oiltanking" },
  { name: "Saudi Aramco" },
  { name: "Petronas" },
  { name: "Air Liquide" },
  { name: "Sabic" }
];

export const contactCta = {
  tr: {
    title: "Demart ile iş yapmak çok kolay!",
    description: "Vana operasyonlarınızı optimize etmek için bilgi ve uzmanlığımızdan faydalanın.",
    cta: "Bize Ulaşın",
    ctaLink: ROUTE_MAP.tr.contact
  },
  en: {
    title: "Doing business with Demart is easy!",
    description: "Benefit from our knowledge and expertise to optimize your valve operations.",
    cta: "Contact Us",
    ctaLink: ROUTE_MAP.en.contact
  },
  az: {
    title: "Demart ilə işləmək çox asandır!",
    description: "Vana əməliyyatlarınızı optimallaşdırmaq üçün bilik və təcrübəmizdən yararlanın.",
    cta: "Bizimlə Əlaqə",
    ctaLink: ROUTE_MAP.az.contact
  }
};

export const clientsSection = {
  tr: {
    title: "Kimler İçin Çalışıyoruz?",
    description: "Sofis ürünleri, güvenli vana operasyonlarını garanti etmek için dünya genelinde önde gelen şirketler tarafından kullanılmaktadır."
  },
  en: {
    title: "Who Do We Work For?",
    description: "Sofis products are used by leading companies worldwide to ensure safe valve operations."
  },
  az: {
    title: "Kimlər üçün işləyirik?",
    description: "Sofis məhsulları təhlükəsiz vana əməliyyatlarını təmin etmək üçün dünyanın aparıcı şirkətləri tərəfindən istifadə olunur."
  }
};

export const ui = {
  tr: {
    readBlog: "Blog Yazısını Oku",
    latestNews: "Son Haberlerimiz",
    quickLinks: "Hızlı Linkler",
    contact: "İletişim",
    documentation: "Dokümantasyon Merkezi",
    allRightsReserved: "Tüm hakları saklıdır",
    copyright: "Copyright",
    goToPage: "sayfasına git",
    learnMore: "Daha Fazla Bilgi",
    viewSolutions: "Çözümlere Git",
    viewApplications: "Uygulamaya Git",
    viewIndustry: "Sektöre Git",
    references: "Referanslarımız",
    howCanWeHelp: "Size Nasıl Yardımcı Olabiliriz?",
    downloadBrochures: "Ürün broşürlerini ve uygulama notlarını indirin",
    goToDownloads: "İndirme Bölümüne Git",
    watchVideos: "Videoları İzleyin",
    valveMaintenance: "Vana Bakım"
  },
  en: {
    readBlog: "Read Blog Post",
    latestNews: "Our Latest News",
    quickLinks: "Quick Links",
    contact: "Contact",
    documentation: "Documentation Center",
    allRightsReserved: "All rights reserved",
    copyright: "Copyright",
    goToPage: "Go to page",
    learnMore: "Learn More",
    viewSolutions: "View Solutions",
    viewApplications: "View Application",
    viewIndustry: "View Industry",
    references: "Our References",
    howCanWeHelp: "How Can We Help You?",
    downloadBrochures: "Download product brochures and application notes",
    goToDownloads: "Go to Download Section",
    watchVideos: "Watch Videos",
    valveMaintenance: "Valve Maintenance"
  },
  az: {
    readBlog: "Bloq Yazısını Oxu",
    latestNews: "Son Xəbərlərimiz",
    quickLinks: "Sürətli Keçidlər",
    contact: "Əlaqə",
    documentation: "Dokümantasiya Mərkəzi",
    allRightsReserved: "Bütün hüquqlar qorunur",
    copyright: "Copyright",
    goToPage: "səhifəsinə keç",
    learnMore: "Daha Ətraflı",
    viewSolutions: "Həllərə Baxın",
    viewApplications: "Tətbiqə Baxın",
    viewIndustry: "Sənayeyə Baxın",
    references: "Referanslarımız",
    howCanWeHelp: "Sizə Necə Kömək Edə Bilərik?",
    downloadBrochures: "Məhsul broşürlərini və tətbiq qeydlərini yükləyin",
    goToDownloads: "Yükləmə Bölməsinə Keçin",
    watchVideos: "Videolara Baxın",
    valveMaintenance: "Vana Baxım"
  }
};

// Social links (same for both languages)
export const social = {
  linkedin: "https://www.linkedin.com/company/demartengineering",
  youtube: "https://www.youtube.com/channel/UCb6NwXGwNOg_D13XP7UJEaQ"
};

// LOCAL LOGO - no external dependency
export const logo = "/images/brand/logo.jpg";
