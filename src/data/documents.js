// Demart Mühendislik - Döküman ve Katalog Verileri
// Dosya indirme altyapısı

export const documentCategories = [
  {
    id: 'kataloglar',
    name: 'Ürün Katalogları',
    icon: 'FileText',
    description: 'Ürünlerimizin detaylı teknik katalogları'
  },
  {
    id: 'teknik-cizimler',
    name: 'Teknik Çizimler',
    icon: 'FileImage',
    description: 'CAD çizimleri ve teknik şemalar'
  },
  {
    id: 'sertifikalar',
    name: 'Sertifikalar',
    icon: 'Award',
    description: 'ATEX, ISO ve diğer sertifikalarımız'
  },
  {
    id: 'kullanim-kilavuzlari',
    name: 'Kullanım Kılavuzları',
    icon: 'Book',
    description: 'Kurulum ve kullanım talimatları'
  },
  {
    id: 'veri-sayfalari',
    name: 'Teknik Veri Sayfaları',
    icon: 'FileSpreadsheet',
    description: 'Ürün spesifikasyonları ve datasheet\'ler'
  }
];

export const documents = [
  // Kataloglar
  {
    id: 1,
    category: 'kataloglar',
    title: 'Smith Flow Control Vana Kilitleri Kataloğu',
    description: 'SFC vana kilitleri tam ürün kataloğu - QL, GL, MOV ve SCU ürünleri',
    fileType: 'PDF',
    fileSize: '4.2 MB',
    language: 'TR',
    downloadUrl: '/documents/smith-valve-interlocks-catalog-tr.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80',
    featured: true
  },
  {
    id: 2,
    category: 'kataloglar',
    title: 'EasiDrive Taşınabilir Aktüatör Kataloğu',
    description: 'EasiDrive ürün ailesi, montaj kitleri ve aksesuarlar',
    fileType: 'PDF',
    fileSize: '3.8 MB',
    language: 'TR',
    downloadUrl: '/documents/easidrive-catalog-tr.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2017/05/portable-valve-actuator-easidrive-overview-1-1024x576.jpg',
    featured: true
  },
  {
    id: 3,
    category: 'kataloglar',
    title: 'Power Wrench Kataloğu',
    description: 'Power Wrench taşınabilir vana aktüatörü teknik detayları',
    fileType: 'PDF',
    fileSize: '2.9 MB',
    language: 'TR',
    downloadUrl: '/documents/power-wrench-catalog-tr.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2016/11/power-wrench-portable-valve-actuator-overview-1024x576.jpg',
    featured: false
  },
  {
    id: 4,
    category: 'kataloglar',
    title: 'Demart Vana Bakım Hizmetleri',
    description: 'Vana bakım, onarım ve test hizmetleri kataloğu',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    language: 'TR',
    downloadUrl: '/documents/demart-valve-maintenance-tr.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
    featured: true
  },
  
  // Teknik Çizimler
  {
    id: 5,
    category: 'teknik-cizimler',
    title: 'QL Vana Kilidi Teknik Çizimi',
    description: 'QL1 ve QL2 modelleri için boyutsal çizimler',
    fileType: 'DWG/PDF',
    fileSize: '1.2 MB',
    language: 'EN',
    downloadUrl: '/documents/ql-valve-interlock-drawing.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2023/09/smith-ql-valve-interlock-1024x576.jpg',
    featured: false
  },
  {
    id: 6,
    category: 'teknik-cizimler',
    title: 'GL Vana Kilidi Teknik Çizimi',
    description: 'GL1 ve GL2 modelleri için boyutsal çizimler',
    fileType: 'DWG/PDF',
    fileSize: '1.4 MB',
    language: 'EN',
    downloadUrl: '/documents/gl-valve-interlock-drawing.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2016/11/valve-interlock-in-the-field-1024x576.jpg',
    featured: false
  },
  
  // Sertifikalar
  {
    id: 7,
    category: 'sertifikalar',
    title: 'ATEX Sertifikası',
    description: 'Zone 1 ve Zone 2 patlayıcı ortam sertifikası',
    fileType: 'PDF',
    fileSize: '0.8 MB',
    language: 'EN',
    downloadUrl: '/documents/atex-certificate.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80',
    featured: true
  },
  {
    id: 8,
    category: 'sertifikalar',
    title: 'ISO 9001:2015 Kalite Belgesi',
    description: 'Kalite yönetim sistemi sertifikası',
    fileType: 'PDF',
    fileSize: '0.5 MB',
    language: 'TR',
    downloadUrl: '/documents/iso-9001-certificate.pdf',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    featured: false
  },
  
  // Kullanım Kılavuzları
  {
    id: 9,
    category: 'kullanim-kilavuzlari',
    title: 'EasiDrive Kurulum Kılavuzu',
    description: 'Adım adım kurulum ve devreye alma talimatları',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    language: 'TR',
    downloadUrl: '/documents/easidrive-installation-guide-tr.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2017/05/portable-valve-actuator-gun.jpg',
    featured: false
  },
  {
    id: 10,
    category: 'kullanim-kilavuzlari',
    title: 'Vana Kilidi Bakım Talimatları',
    description: 'Periyodik bakım ve sorun giderme rehberi',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    language: 'TR',
    downloadUrl: '/documents/valve-interlock-maintenance-guide-tr.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2023/10/smith-locks-valve-interlocks.jpg',
    featured: false
  },
  
  // Teknik Veri Sayfaları
  {
    id: 11,
    category: 'veri-sayfalari',
    title: 'Smith Interlocks Teknik Veri Sayfası',
    description: 'Tüm SFC ürünleri için teknik spesifikasyonlar',
    fileType: 'PDF',
    fileSize: '1.1 MB',
    language: 'EN',
    downloadUrl: '/documents/smith-interlocks-datasheet.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2023/10/smith-valve-interlocks-multi-rotation.jpg',
    featured: false
  },
  {
    id: 12,
    category: 'veri-sayfalari',
    title: 'VPI Pozisyon Göstergesi Datasheet',
    description: 'VPI teknik özellikleri ve bağlantı şemaları',
    fileType: 'PDF',
    fileSize: '0.9 MB',
    language: 'EN',
    downloadUrl: '/documents/vpi-datasheet.pdf',
    thumbnail: 'https://www.sofisglobal.com/wp-content/uploads/2016/11/valve-position-indicator-1024x576.jpg',
    featured: false
  }
];

export default { documentCategories, documents };
