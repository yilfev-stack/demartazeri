export const faqContent = {
  tr: {
    products: {
      "mechanical-valve-interlock-manual-multi-turn": {
        title: "Mechanical Valve Interlock – Manual Multi-Turn Vanalar",
        image: "/images/placeholder.svg",
        scopeNote:
          "Bu SSS yalnızca DCS veya otomasyon tarafından kontrol edilmeyen, manuel olarak çalıştırılan multi-turn vanalar (gate, globe vb.) içindir. Aktüatörlü veya otomasyonlu vanalar kapsam dışıdır.",
        items: [
          {
            question: "Bu sistem hangi tip vanalar için tasarlanmıştır?",
            answer:
              "Mechanical Valve Interlock sistemleri, DCS veya başka bir otomasyon sistemi tarafından kontrol edilmeyen, manuel olarak çalıştırılan çok turlu vanalar (gate vana, globe vana vb.) için tasarlanmıştır. Operatör tarafından elle yapılan vana operasyonlarını fiziksel olarak kontrol altına alır.",
          },
          {
            question: "Bu sistem neyi önlemek için kullanılır?",
            answer:
              "Bu sistem, manuel vanaların yanlış sırayla, yetkisiz veya kasıtlı olarak açılmasını ya da kapatılmasını önlemek amacıyla kullanılır. Otomasyon olmadığı için tamamen operatöre bağlı olan vana hareketleri, mekanik kilitleme ile zorunlu bir güvenlik disiplinine bağlanır.",
          },
          {
            question: "DCS veya otomasyon varken neden buna ihtiyaç duyulur?",
            answer:
              "Birçok tesiste manuel vanalar DCS sistemine bağlı değildir, saha personeli tarafından doğrudan çalıştırılır ve otomasyon mantığının dışında kalır. Bu nedenle DCS, bu vanaların gerçek konumunu kontrol edemez veya zorlayamaz. Mechanical Valve Interlock, otomasyonun erişemediği bu noktada son güvenlik bariyerini oluşturur.",
          },
          {
            question: "Kullanılmazsa ne gibi riskler oluşur?",
            answer:
              "Bu sistem olmadığında manuel vanalarda operatör hatası, yetkisiz müdahale ve kasıtlı sabotaj kontrolsüz vana hareketlerine yol açabilir. Bu da basınç altında açılan hatlar, tehlikeli akışkan salınımı, ekipman hasarı ve ciddi iş kazaları anlamına gelir.",
          },
          {
            question: "İnsan hatasını ve kötü niyeti nasıl engeller?",
            answer:
              "Sistem, doğru işlem sırası tamamlanmadan manuel vananın mekanik olarak hareket ettirilmesini engeller. Anahtar olmadan vana çevrilemez. Böylece hem insan hatası hem de bilinçli yanlış müdahale ortadan kaldırılır.",
          },
          {
            question: "Bakım ve arıza sırasında neden kritik öneme sahiptir?",
            answer:
              "Bakım sırasında manuel bir vananın yanlışlıkla veya bilinçli olarak açılması personelin doğrudan tehlikeye girmesine, basınçlı veya toksik akışkan çıkışına ve ağır yaralanmalara veya can kaybına neden olabilir. Mechanical Valve Interlock, bakım süresince manuel vananın yetkisiz kişiler tarafından kesinlikle çalıştırılamamasını garanti eder.",
          },
          {
            question: "Sabotaj riskine karşı gerçekten koruma sağlar mı?",
            answer:
              "Evet. Bu sistemler, manuel vanalara yönelik sabotaj riskine karşı pasif ama son derece etkili bir güvenlik katmanı oluşturur. Elektrik, yazılım veya uzaktan erişim gerektirmediği için DCS veya IT altyapısı üzerinden by-pass edilemez.",
          },
          {
            question: "Bu sistem otomasyonlu vanalar için mi kullanılır?",
            answer:
              "Hayır. Mechanical Valve Interlock sistemleri aktüatörlü veya DCS kontrollü vanalar için değil, manuel olarak çalıştırılan vanalar için tasarlanmıştır. Amaç, otomasyon dışı kalan kritik vana operasyonlarını güvenli hale getirmektir.",
          },
          {
            question: "Neden sadece prosedürler ve eğitim yeterli değildir?",
            answer:
              "Manuel vanalar tamamen insan faktörüne bağlıdır. Prosedürler ihlal edilebilir, eğitimli personel dahi hata yapabilir veya kasıtlı olarak yanlış işlem gerçekleştirebilir. Mechanical Valve Interlock, güvenliği kişilere değil mekanizmaya bağlar.",
          },
          {
            question: "Bu sistem otomasyonu tamamlar mı?",
            answer:
              "Evet. Mechanical Valve Interlock sistemleri, otomasyonun kontrol edemediği manuel vanalarda güvenliği sağlar ve böylece tesis genelindeki güvenlik zincirini tamamlar.",
          },
        ],
      },
      "mechanical-valve-interlock-manual-quarter-turn": {
        title: "Mechanical Valve Interlock – Manual Quarter-Turn Vanalar",
        image: "/images/placeholder.svg",
        scopeNote:
          "Bu SSS yalnızca DCS veya otomasyon tarafından kontrol edilmeyen, manuel olarak çalıştırılan quarter-turn vanalar (ball, butterfly vb.) içindir. Aktüatörlü veya otomasyonlu vanalar kapsam dışıdır.",
        items: [
          {
            question: "Bu sistem hangi tip vanalar için tasarlanmıştır?",
            answer:
              "Mechanical Valve Interlock sistemleri, manuel olarak çalıştırılan quarter-turn vanalar (ball vana, butterfly vana vb.) için tasarlanmıştır. Bu vanalar genellikle DCS veya ESD sistemleri tarafından fiziksel olarak kontrol edilemez ve saha personelinin manuel müdahalesine açıktır.",
          },
          {
            question: "Quarter-turn vanalar neden özel bir risk oluşturur?",
            answer:
              "Quarter-turn vanalar tek bir kol hareketiyle tamamen açılıp kapanabilir. Bu da yanlışlıkla yapılan bir hareketin veya yetkisiz bir müdahalenin anında ve geri dönüşü olmayan sonuçlar doğurmasına neden olabilir. Mechanical Valve Interlock, bu ani riski mekanik olarak kontrol altına alır.",
          },
          {
            question: "Bu sistem neyi önlemek için kullanılır?",
            answer:
              "Bu sistem, manuel quarter-turn vanaların yanlış zamanda, yanlış konumda, yetkisiz kişiler tarafından veya kasıtlı sabotaj amacıyla çevrilmesini fiziksel olarak engellemek için kullanılır. Doğru anahtar olmadan vana kolu hareket ettirilemez.",
          },
          {
            question: "DCS varken neden bu sisteme ihtiyaç duyulur?",
            answer:
              "Birçok tesiste quarter-turn vanalar DCS’ye sinyal vermez, açık/kapalı durumu varsayım üzerinden kabul edilir ve acil durumlarda manuel müdahaleye açıktır. DCS bu vanaların gerçek saha hareketini engelleyemez. Mechanical Valve Interlock, otomasyonun erişemediği bu noktada son ve fiziksel güvenlik bariyeridir.",
          },
          {
            question: "İnsan hatasını ve kötü niyeti nasıl engeller?",
            answer:
              "Sistem, vana kolunun yalnızca doğru anahtar serbest bırakıldığında hareket etmesine izin verir. Böylece dalgınlık, acele, prosedür ihlali veya bilinçli yanlış müdahale vana operasyonuna etki edemez.",
          },
          {
            question: "Bakım ve proses değişimi sırasında neden kritiktir?",
            answer:
              "Bakım veya proses geçişleri sırasında quarter-turn bir vananın yanlışlıkla açılması basınçlı akışkan çıkışına, tehlikeli gaz salınımına ve personelin doğrudan risk altına girmesine neden olabilir. Mechanical Valve Interlock, bu vananın bakım süresince kesin olarak güvenli konumda kalmasını sağlar.",
          },
          {
            question: "Sabotaj riskine karşı gerçekten etkili midir?",
            answer:
              "Evet. Mechanical Valve Interlock sistemleri, manuel quarter-turn vanalar için sabotaja karşı pasif ama son derece güçlü bir güvenlik önlemidir. Elektrik, yazılım veya uzaktan erişim gerektirmediği için IT veya DCS üzerinden devre dışı bırakılamaz.",
          },
          {
            question: "Bu sistem aktüatörlü veya otomasyonlu vanalar için mi kullanılır?",
            answer:
              "Hayır. Bu sistemler aktüatörlü veya DCS kontrollü vanalar için değil, manuel olarak çalıştırılan quarter-turn vanalar için tasarlanmıştır. Amaç, otomasyon dışında kalan manuel riskleri kontrol altına almaktır.",
          },
          {
            question: "Neden prosedür ve eğitim tek başına yeterli değildir?",
            answer:
              "Quarter-turn vanalarda hata payı çok düşüktür. Tek bir yanlış hareket prosedürleri, eğitimi ve tecrübeyi anlamsız hale getirebilir. Mechanical Valve Interlock, güvenliği kişilere değil fiziksel kilitlemeye bağlar.",
          },
          {
            question: "Bu sistem tesis güvenliğini nasıl tamamlar?",
            answer:
              "Mechanical Valve Interlock sistemleri, DCS’nin kontrol edemediği manuel quarter-turn vanalarda güvenliği sağlar ve böylece tesis genelindeki güvenlik zincirinde kritik bir boşluğu kapatır.",
          },
        ],
      },
      "key-exchange-unit": {
        title: "Key Exchange Unit – Anahtar Transfer Ünitesi",
        image: "/images/placeholder.svg",
        scopeNote:
          "Key Exchange Unit, DCS veya otomasyon sistemlerinden bağımsız olarak, manuel vanalar, kapaklar ve ekipmanlar arasında doğru işlem sırasını mekanik olarak zorunlu kılmak için kullanılır.",
        items: [
          {
            question: "Key Exchange Unit ne işe yarar?",
            answer:
              "Key Exchange Unit, birden fazla ekipman veya vananın belirli bir işlem sırasına göre çalıştırılmasını zorunlu kılan mekanik bir güvenlik sistemidir. Yanlış sırayla yapılan işlemleri fiziksel olarak imkânsız hale getirir.",
          },
          {
            question: "Bu sistem hangi riski ortadan kaldırır?",
            answer:
              "Yanlış işlem sırası, aynı anda yapılmaması gereken operasyonlar ve prosedür atlamaları ciddi kazalara yol açabilir. Key Exchange Unit, bu riskleri insan inisiyatifine bırakmadan mekanik olarak kontrol altına alır.",
          },
          {
            question: "Neden sadece prosedürlere güvenmek yeterli değildir?",
            answer:
              "Prosedürler unutulabilir, yanlış yorumlanabilir veya bilinçli olarak ihlal edilebilir. Key Exchange Unit, doğru anahtar serbest bırakılmadan bir sonraki adımın yapılamamasını sağlayarak güvenliği prosedürden bağımsız hale getirir.",
          },
          {
            question: "DCS varken neden Key Exchange Unit kullanılır?",
            answer:
              "Birçok manuel vana ve ekipman DCS tarafından fiziksel olarak kontrol edilemez. DCS yalnızca izleme yapabilir. Key Exchange Unit, otomasyonun erişemediği bu noktalarda işlem sırasını mekanik olarak garanti eder.",
          },
          {
            question: "İnsan hatasını ve sabotajı nasıl engeller?",
            answer:
              "Sistem, yalnızca doğru anahtar doğru zamanda serbest bırakıldığında ilerlemeye izin verir. Yetkisiz, yanlış veya kasıtlı müdahaleler mekanik olarak bloke edilir.",
          },
          {
            question: "Bakım ve operasyon sırasında neden kritiktir?",
            answer:
              "Bakım sırasında izole edilmemiş bir ekipmanın devreye alınması veya operasyon esnasında yanlış bir adım atılması ciddi yaralanmalara ve tesis duruşlarına neden olabilir. Key Exchange Unit, güvenli adımlar tamamlanmadan bir sonraki işlemi mümkün kılmaz.",
          },
          {
            question: "Hangi ekipmanlarla birlikte kullanılır?",
            answer:
              "Key Exchange Unit; manuel vanalar, valve interlock’lar, kapaklar, hatch’ler, manhole’lar ve benzeri ekipmanlarla birlikte çalışarak bütüncül bir mekanik güvenlik zinciri oluşturur.",
          },
          {
            question: "Bu sistem otomasyonun yerini alır mı?",
            answer:
              "Hayır. Key Exchange Unit otomasyonun alternatifi değildir. Otomasyonun kontrol edemediği manuel ve saha operasyonlarında güvenliği tamamlayan pasif bir güvenlik katmanıdır.",
          },
          {
            question: "Sabotaja karşı gerçekten etkili midir?",
            answer:
              "Evet. Elektrik, yazılım veya uzaktan erişime bağlı olmadığı için dış müdahaleye kapalıdır. Doğru anahtar olmadan işlem yapılamaz ve sistem by-pass edilemez.",
          },
          {
            question: "Key Exchange Unit tesis güvenliğini nasıl etkiler?",
            answer:
              "Key Exchange Unit, tüm kritik işlemleri doğru sıraya bağlayarak insan hatası, yetkisiz müdahale ve sabotaj risklerini azaltır; tesis genelinde sürdürülebilir ve denetlenebilir bir güvenlik disiplini sağlar.",
          },
        ],
      },
      "key-management": {
        title: "Key Management – Anahtar Yönetim Sistemleri",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "Key Management neyi kontrol eder?",
            answer:
              "Key Management sistemleri, interlock ve kilitleme sistemlerinde kullanılan anahtarların kimde, nerede ve hangi aşamada olduğunu kontrol altına almak için kullanılır.",
          },
          {
            question: "Anahtarlar kontrol edilmezse ne gibi riskler oluşur?",
            answer:
              "Kaybolan, çoğaltılan veya yanlış elde bulunan anahtarlar yetkisiz vana operasyonlarına, prosedür ihlallerine ve ciddi güvenlik açıklarına yol açabilir.",
          },
          {
            question: "Bu sistem insan hatasını nasıl azaltır?",
            answer:
              "Anahtarların yalnızca yetkili kişiler tarafından ve tanımlı alanlarda kullanılmasını sağlayarak kontrolsüz erişimi ortadan kaldırır.",
          },
          {
            question: "Sabotaj riskine karşı etkili midir?",
            answer:
              "Evet. Anahtarların izinsiz kullanımını ve dolaşımını engelleyerek kasıtlı müdahaleleri önler.",
          },
          {
            question: "Hangi sistemlerle birlikte kullanılır?",
            answer:
              "Valve interlock’lar, key exchange unit’ler ve sequence control sistemleriyle birlikte çalışarak bütüncül güvenlik sağlar.",
          },
        ],
      },
      "sequence-control": {
        title: "Sequence Control – Proses Bazlı Kilitleme",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "Sequence Control neyi sağlar?",
            answer:
              "Sequence Control, birden fazla ekipmanın yalnızca doğru işlem sırasıyla çalıştırılmasını zorunlu kılan mekanik güvenlik sistemidir.",
          },
          {
            question: "Yanlış sıra neden tehlikelidir?",
            answer:
              "Yanlış sırayla yapılan işlemler basınç altında açılan hatlara, tehlikeli akışkan salınımına ve ekipman hasarına neden olabilir.",
          },
          {
            question: "Bu sistem otomasyona alternatif midir?",
            answer:
              "Hayır. Otomasyonun kontrol edemediği manuel işlemlerde güvenliği tamamlar.",
          },
          {
            question: "İnsan hatasını nasıl ortadan kaldırır?",
            answer:
              "Doğru anahtar serbest bırakılmadan bir sonraki adımın yapılmasını fiziksel olarak engeller.",
          },
          {
            question: "Nerelerde kullanılır?",
            answer:
              "Proses tesisleri, tank hatları, pig sistemleri, bakım senaryoları ve yüksek riskli operasyonlarda kullanılır.",
          },
        ],
      },
      "easidrive-portable-actuator": {
        title: "EasiDrive Portable Actuator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "EasiDrive ne için kullanılır?",
            answer:
              "EasiDrive, manuel vanaların uzaktan ve güvenli şekilde çalıştırılmasını sağlayan taşınabilir bir aktüatördür.",
          },
          {
            question: "Hangi riski azaltır?",
            answer:
              "Zor erişilen, yüksek veya tehlikeli alanlardaki manuel vana operasyonlarından kaynaklanan iş kazası riskini azaltır.",
          },
          {
            question: "Sürekli monte edilir mi?",
            answer:
              "Hayır. Taşınabilir yapısı sayesinde ihtiyaç duyulan vanalarda geçici olarak kullanılır.",
          },
          {
            question: "İnsan gücüne kıyasla avantajı nedir?",
            answer:
              "Operatör zorlanmasını, kontrolsüz tork uygulamasını ve ani vana hareketlerini önler.",
          },
          {
            question: "Nerelerde tercih edilir?",
            answer:
              "Rafineri, enerji santrali ve endüstriyel tesislerde güvenli vana operasyonu için kullanılır.",
          },
        ],
      },
      "flexidrive-remote-operator": {
        title: "FlexiDrive Remote Operator – Uzaktan Vana Çalıştırma Sistemi",
        image: "/images/placeholder.svg",
        scopeNote:
          "FlexiDrive, manuel vanaların doğrudan saha üzerinde çalıştırılmasının riskli veya zor olduğu durumlarda, vananın uzaktan ve kontrollü şekilde çalıştırılmasını sağlar.",
        items: [
          {
            question: "FlexiDrive ne işe yarar?",
            answer:
              "FlexiDrive, manuel vanaların uzaktan çalıştırılmasını sağlayan bir sistemdir. Operatörün vanaya fiziksel olarak yaklaşmadan güvenli bir noktadan vana operasyonu yapmasına imkân tanır.",
          },
          {
            question: "Hangi durumlarda FlexiDrive kullanılır?",
            answer:
              "Yüksek sıcaklık, basınç, gaz riski bulunan alanlarda veya erişimi zor noktalardaki manuel vanaların güvenli şekilde çalıştırılması gerektiğinde kullanılır.",
          },
          {
            question: "Bu sistem hangi riski azaltır?",
            answer:
              "Operatörün tehlikeli bölgeye girmesinden kaynaklanan iş kazası riskini ve ani vana hareketlerinden doğabilecek kontrol kaybını azaltır.",
          },
          {
            question: "Manuel vana olmasına rağmen neden uzaktan çalıştırma gerekir?",
            answer:
              "Bazı manuel vanalar konum, çevresel şartlar veya proses riski nedeniyle doğrudan müdahaleye uygun değildir. FlexiDrive, bu vanaların manuel karakterini koruyarak operasyonu güvenli mesafeden yapmayı sağlar.",
          },
          {
            question: "Sürekli monte edilen bir sistem midir?",
            answer:
              "Evet. FlexiDrive, vana üzerine sabitlenen bir uzaktan çalıştırma sistemidir ve sürekli kullanıma uygundur.",
          },
          {
            question: "İnsan hatasını nasıl azaltır?",
            answer:
              "Kontrollü ve yönlendirilmiş hareket sağlayarak ani, sert veya yanlış vana hareketlerini önler ve operatörün işlem üzerinde tam kontrol sağlamasına yardımcı olur.",
          },
          {
            question: "Otomasyon sistemlerinin yerini alır mı?",
            answer:
              "Hayır. FlexiDrive otomasyonun alternatifi değildir. Manuel vanaların uzaktan ve daha güvenli şekilde çalıştırılmasını sağlayarak operasyonel güvenliği tamamlar.",
          },
          {
            question: "Hangi tesislerde tercih edilir?",
            answer:
              "Rafineri, petrokimya, enerji santralleri ve yüksek riskli endüstriyel tesislerde manuel vana operasyonlarının güvenli hale getirilmesi için tercih edilir.",
          },
        ],
      },
      "power-wrench-portable-actuator": {
        title: "Power Wrench Portable Actuator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "Power Wrench ne sağlar?",
            answer:
              "Power Wrench, yüksek tork gerektiren manuel vana operasyonlarını kontrollü ve güvenli hale getirir.",
          },
          {
            question: "Tork kontrolü neden önemlidir?",
            answer:
              "Aşırı veya yetersiz tork vana hasarına ve proses güvenliği risklerine yol açabilir.",
          },
          {
            question: "Manuel kullanımdan farkı nedir?",
            answer:
              "Sabit ve kontrollü tork uygulayarak yarım açma veya kilitlenme riskini azaltır.",
          },
          {
            question: "Kimler için uygundur?",
            answer:
              "Büyük çaplı vanalarla çalışan bakım ve operasyon ekipleri için uygundur.",
          },
          {
            question: "Hangi tesislerde kullanılır?",
            answer:
              "Ağır sanayi, enerji ve proses tesislerinde tercih edilir.",
          },
        ],
      },
      "vpi-position-indicator": {
        title: "VPI – Valve Position Indicator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "VPI tam olarak ne yapar?",
            answer:
              "VPI, manuel multi-turn vanaların (özellikle gate/globe gibi) açık/kapalı konuma ulaştığını algılar ve bu bilgiyi DCS/kontrol odasına sinyal olarak iletir. Böylece manuel vanalar da kontrol sistemi tarafında görünür hale gelir.",
          },
          {
            question: "Bu bilgi neden kritiktir?",
            answer:
              "Manuel vanalarda en büyük risk, açık sanılanın kapalı veya kapalı sanılanın açık olmasıdır. Yanlış varsayım; hatalı hat hizalamasına, ürün kontaminasyonuna, emniyetsiz çalışma şartlarına ve ciddi proses kazalarına kadar gidebilir. VPI bu kör noktayı ortadan kaldırır.",
          },
          {
            question: "VPI interlock gibi fiziksel olarak engeller mi?",
            answer:
              "Hayır. VPI’nin görevi kilitlemek değil, manuel vananın durumunu güvenilir şekilde doğrulayıp DCS’ye bildirmektir. Yani yanlış işlem yapmayı mekanik olarak engelleyen ürün interlock’tur; VPI ise yanlış varsayımı ortadan kaldıran üründür. Bu ikisi birlikte kullanıldığında güvenlik katmanı güçlenir.",
          },
          {
            question: "DCS varken neden ayrıca VPI gerekir?",
            answer:
              "Çünkü birçok tesiste manuel vanalar DCS tarafından fiziksel olarak kumanda edilemez; çoğu zaman kontrol odası vananın gerçek pozisyonunu tahmin eder veya sahadan sözlü teyide güvenilir. VPI, manuel varlıklardan gerçek zamanlı pozisyon geri bildirimi sağlayarak bu boşluğu kapatır.",
          },
          {
            question: "VPI hangi vana tiplerinde kullanılır?",
            answer:
              "VPI özellikle manuel multi-turn vanalar için konum geri bildirimi vermek üzere tasarlanmıştır (gate/globe vb.).",
          },
          {
            question: "VPI hangi riski doğrudan azaltır?",
            answer:
              "Yanlış hat hizalaması nedeniyle emniyetsiz başlatma, yanlış vana konumu nedeniyle ürün kontaminasyonu ve bakım/izolasyon aşamasında gerçek pozisyonun bilinmemesi risklerini azaltır. VPI, manuel vana operasyonlarının kontrol odasında izlenmesini sağlayarak bu riskleri ciddi şekilde düşürür.",
          },
          {
            question: "Montaj için vanada kaynak/delik/modifikasyon gerekir mi?",
            answer:
              "Standart yaklaşım, VPI’nin üniversal bir braket ile sahada, vanaya büyük modifikasyon gerektirmeden monte edilebilmesidir. Proje/uygulamaya göre adaptasyon gerekebilir.",
          },
          {
            question: "Ayarları değişirse ne olur, sürekli kalibrasyon ister mi?",
            answer:
              "VPI’nin açık/kapalı konum ayarı yapıldıktan sonra normalde periyodik sürekli ayar ihtiyacı hedeflenmez; vana end-stop’ları değişirse sahada hızlı reset/yeniden ayar yapılabilmesi amaçlanır.",
          },
          {
            question: "Sabotaj veya yetkisiz müdahalede VPI’nin rolü nedir?",
            answer:
              "VPI tek başına bir kilit değildir; ancak kontrol odasına gerçek zamanlı konum bilgisi vererek sahada yapılacak yetkisiz veya şüpheli vana hareketlerinin gözden kaçmasını zorlaştırır. Kritik hatlarda en güçlü çözüm, VPI ile interlock kombinasyonudur.",
          },
          {
            question: "VPI neyin yerine geçmez?",
            answer:
              "VPI; interlock’un yerine geçmez, otomasyon/aktüatörün yerine geçmez. VPI’nin işi, manuel vanaların gerçek konumunu kontrol odasına güvenilir şekilde taşımaktır.",
          },
        ],
      },
    },
  },
  en: {
    products: {
      "mechanical-valve-interlock-manual-multi-turn": {
        title: "Mechanical Valve Interlock – Manual Multi-Turn Valves",
        image: "/images/placeholder.svg",
        scopeNote:
          "This FAQ is only for manual multi-turn valves (gate, globe, etc.) that are not controlled by DCS or automation. Actuated or automated valves are out of scope.",
        items: [
          {
            question: "What types of valves is this system designed for?",
            answer:
              "Mechanical Valve Interlock systems are designed for manual multi-turn valves (gate valves, globe valves, etc.) that are not controlled by DCS or other automation systems. They physically control manual valve operations performed by operators.",
          },
          {
            question: "What is this system used to prevent?",
            answer:
              "This system is used to prevent manual valves from being opened or closed in the wrong sequence, without authorization, or intentionally. Since there is no automation, valve movements that depend entirely on the operator are tied to a mandatory safety discipline through mechanical interlocking.",
          },
          {
            question: "Why is it needed when DCS or automation exists?",
            answer:
              "In many plants, manual valves are not connected to the DCS, are operated directly by field personnel, and remain outside the automation logic. Therefore, the DCS cannot control or enforce the actual position of these valves. Mechanical Valve Interlock provides the final safety barrier where automation cannot reach.",
          },
          {
            question: "What risks arise if it is not used?",
            answer:
              "Without this system, operator error, unauthorized intervention, and intentional sabotage on manual valves can lead to uncontrolled valve movements. This means pressurized lines being opened, release of hazardous fluids, equipment damage, and serious workplace accidents.",
          },
          {
            question: "How does it prevent human error and malicious intent?",
            answer:
              "The system prevents the manual valve from being moved mechanically until the correct operating sequence is completed. Without the key, the valve cannot be turned. This eliminates both human error and deliberate incorrect intervention.",
          },
          {
            question: "Why is it critical during maintenance and failure events?",
            answer:
              "During maintenance, accidental or intentional opening of a manual valve can directly endanger personnel, cause the release of pressurized or toxic fluids, and lead to severe injuries or loss of life. Mechanical Valve Interlock guarantees that the manual valve cannot be operated by unauthorized people during maintenance.",
          },
          {
            question: "Does it really protect against sabotage risk?",
            answer:
              "Yes. These systems provide a passive but highly effective security layer against sabotage risks on manual valves. Because they do not require electricity, software, or remote access, they cannot be bypassed through DCS or IT infrastructure.",
          },
          {
            question: "Is this system used for automated valves?",
            answer:
              "No. Mechanical Valve Interlock systems are designed for manual valves, not actuated or DCS-controlled valves. The goal is to secure critical valve operations that remain outside automation.",
          },
          {
            question: "Why are procedures and training alone not sufficient?",
            answer:
              "Manual valves are entirely dependent on the human factor. Procedures can be violated, trained personnel can make mistakes, or intentional incorrect actions can occur. Mechanical Valve Interlock ties safety to the mechanism rather than to individuals.",
          },
          {
            question: "Does this system complement automation?",
            answer:
              "Yes. Mechanical Valve Interlock systems provide safety for manual valves that automation cannot control, completing the safety chain across the facility.",
          },
        ],
      },
      "mechanical-valve-interlock-manual-quarter-turn": {
        title: "Mechanical Valve Interlock – Manual Quarter-Turn Valves",
        image: "/images/placeholder.svg",
        scopeNote:
          "This FAQ is only for manual quarter-turn valves (ball, butterfly, etc.) that are not controlled by DCS or automation. Actuated or automated valves are out of scope.",
        items: [
          {
            question: "What types of valves is this system designed for?",
            answer:
              "Mechanical Valve Interlock systems are designed for manual quarter-turn valves (ball valves, butterfly valves, etc.). These valves generally cannot be physically controlled by DCS or ESD systems and are open to manual intervention by field personnel.",
          },
          {
            question: "Why do quarter-turn valves pose a special risk?",
            answer:
              "Quarter-turn valves can be fully opened or closed with a single lever movement. This means an accidental action or unauthorized intervention can cause immediate and irreversible consequences. Mechanical Valve Interlock mechanically controls this sudden risk.",
          },
          {
            question: "What is this system used to prevent?",
            answer:
              "This system is used to physically prevent manual quarter-turn valves from being turned at the wrong time, in the wrong position, by unauthorized persons, or for intentional sabotage. Without the correct key, the valve lever cannot be moved.",
          },
          {
            question: "Why is this system needed when DCS exists?",
            answer:
              "In many plants, quarter-turn valves do not signal the DCS, their open/closed status is assumed, and they are exposed to manual intervention during emergencies. The DCS cannot prevent the actual field movement of these valves. Mechanical Valve Interlock is the final and physical safety barrier where automation cannot reach.",
          },
          {
            question: "How does it prevent human error and malicious intent?",
            answer:
              "The system only allows the valve lever to move when the correct key is released. This means distraction, haste, procedure violations, or deliberate incorrect intervention cannot affect valve operations.",
          },
          {
            question: "Why is it critical during maintenance and process changes?",
            answer:
              "During maintenance or process transitions, accidental opening of a quarter-turn valve can cause pressurized fluid release, dangerous gas emissions, and put personnel directly at risk. Mechanical Valve Interlock ensures the valve remains in a safe position throughout maintenance.",
          },
          {
            question: "Is it truly effective against sabotage risk?",
            answer:
              "Yes. Mechanical Valve Interlock systems are a passive but extremely strong security measure against sabotage for manual quarter-turn valves. Because they do not require electricity, software, or remote access, they cannot be disabled through IT or DCS.",
          },
          {
            question: "Is this system used for actuated or automated valves?",
            answer:
              "No. These systems are designed for manual quarter-turn valves, not actuated or DCS-controlled valves. The goal is to control manual risks that remain outside automation.",
          },
          {
            question: "Why are procedures and training alone not sufficient?",
            answer:
              "With quarter-turn valves, the margin for error is very low. A single wrong movement can render procedures, training, and experience meaningless. Mechanical Valve Interlock ties safety to physical locking rather than to individuals.",
          },
          {
            question: "How does this system complete plant safety?",
            answer:
              "Mechanical Valve Interlock systems provide safety for manual quarter-turn valves that the DCS cannot control, closing a critical gap in the facility-wide safety chain.",
          },
        ],
      },
      "key-exchange-unit": {
        title: "Key Exchange Unit – Key Transfer Unit",
        image: "/images/placeholder.svg",
        scopeNote:
          "Key Exchange Unit is used to mechanically enforce the correct operating sequence between manual valves, covers, and equipment, independently of DCS or automation systems.",
        items: [
          {
            question: "What does a Key Exchange Unit do?",
            answer:
              "A Key Exchange Unit is a mechanical safety system that forces multiple pieces of equipment or valves to be operated in a defined sequence. It physically makes out-of-sequence operations impossible.",
          },
          {
            question: "Which risk does this system eliminate?",
            answer:
              "Incorrect operating sequences, simultaneous operations that should not occur, and skipped procedures can lead to serious accidents. Key Exchange Unit mechanically controls these risks without relying on human initiative.",
          },
          {
            question: "Why is it not enough to rely only on procedures?",
            answer:
              "Procedures can be forgotten, misinterpreted, or deliberately violated. Key Exchange Unit makes safety independent of procedures by ensuring the next step cannot occur until the correct key is released.",
          },
          {
            question: "Why is Key Exchange Unit used when DCS exists?",
            answer:
              "Many manual valves and equipment cannot be physically controlled by DCS. DCS can only monitor. Key Exchange Unit mechanically guarantees the operating sequence at these points where automation cannot reach.",
          },
          {
            question: "How does it prevent human error and sabotage?",
            answer:
              "The system only allows progression when the correct key is released at the correct time. Unauthorized, incorrect, or deliberate interventions are mechanically blocked.",
          },
          {
            question: "Why is it critical during maintenance and operations?",
            answer:
              "Energizing non-isolated equipment during maintenance or taking the wrong step during operations can cause serious injuries and plant shutdowns. Key Exchange Unit does not allow the next operation until safe steps are completed.",
          },
          {
            question: "Which equipment is it used with?",
            answer:
              "Key Exchange Unit works with manual valves, valve interlocks, covers, hatches, manholes, and similar equipment to create a comprehensive mechanical safety chain.",
          },
          {
            question: "Does this system replace automation?",
            answer:
              "No. Key Exchange Unit is not an alternative to automation. It is a passive safety layer that completes safety for manual and field operations that automation cannot control.",
          },
          {
            question: "Is it really effective against sabotage?",
            answer:
              "Yes. Because it does not depend on electricity, software, or remote access, it is closed to external interference. Operations cannot be performed without the correct key and the system cannot be bypassed.",
          },
          {
            question: "How does Key Exchange Unit affect plant safety?",
            answer:
              "Key Exchange Unit ties all critical operations to the correct sequence, reducing human error, unauthorized intervention, and sabotage risks; it provides a sustainable and auditable safety discipline across the facility.",
          },
        ],
      },
      "key-management": {
        title: "Key Management Systems",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "What does Key Management control?",
            answer:
              "Key Management systems are used to control who has the keys used in interlock and locking systems, where they are, and at which stage they are.",
          },
          {
            question: "What risks arise if keys are not controlled?",
            answer:
              "Lost, duplicated, or wrongly held keys can lead to unauthorized valve operations, procedure violations, and serious security gaps.",
          },
          {
            question: "How does this system reduce human error?",
            answer:
              "By ensuring keys are used only by authorized people and in defined areas, it eliminates uncontrolled access.",
          },
          {
            question: "Is it effective against sabotage risk?",
            answer:
              "Yes. By preventing unauthorized use and circulation of keys, it prevents intentional interventions.",
          },
          {
            question: "Which systems does it work with?",
            answer:
              "It works with valve interlocks, key exchange units, and sequence control systems to provide comprehensive safety.",
          },
        ],
      },
      "sequence-control": {
        title: "Sequence Control Systems",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "What does Sequence Control provide?",
            answer:
              "Sequence Control is a mechanical safety system that enforces multiple pieces of equipment to operate only in the correct sequence.",
          },
          {
            question: "Why is an incorrect sequence dangerous?",
            answer:
              "Operations performed in the wrong sequence can lead to pressurized lines being opened, hazardous fluid releases, and equipment damage.",
          },
          {
            question: "Is this system an alternative to automation?",
            answer:
              "No. It completes safety in manual operations that automation cannot control.",
          },
          {
            question: "How does it eliminate human error?",
            answer:
              "It physically prevents the next step from being performed until the correct key is released.",
          },
          {
            question: "Where is it used?",
            answer:
              "It is used in process plants, tank lines, pig systems, maintenance scenarios, and high-risk operations.",
          },
        ],
      },
      "easidrive-portable-actuator": {
        title: "EasiDrive Portable Actuator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "What is EasiDrive used for?",
            answer:
              "EasiDrive is a portable actuator that enables manual valves to be operated remotely and safely.",
          },
          {
            question: "Which risk does it reduce?",
            answer:
              "It reduces the risk of workplace accidents caused by manual valve operations in hard-to-reach, high, or hazardous areas.",
          },
          {
            question: "Is it permanently mounted?",
            answer:
              "No. Thanks to its portable design, it is used temporarily on valves as needed.",
          },
          {
            question: "What is its advantage compared to human effort?",
            answer:
              "It prevents operator strain, uncontrolled torque application, and sudden valve movements.",
          },
          {
            question: "Where is it preferred?",
            answer:
              "It is used for safe valve operations in refineries, power plants, and industrial facilities.",
          },
        ],
      },
      "flexidrive-remote-operator": {
        title: "FlexiDrive Remote Operator – Remote Valve Operating System",
        image: "/images/placeholder.svg",
        scopeNote:
          "FlexiDrive enables the valve to be operated remotely and in a controlled manner when directly operating manual valves on site is risky or difficult.",
        items: [
          {
            question: "What does FlexiDrive do?",
            answer:
              "FlexiDrive is a system that enables manual valves to be operated remotely. It allows the operator to perform valve operations from a safe point without physically approaching the valve.",
          },
          {
            question: "In which situations is FlexiDrive used?",
            answer:
              "It is used when manual valves in areas with high temperature, pressure, or gas risk, or in hard-to-access points, need to be operated safely.",
          },
          {
            question: "Which risk does this system reduce?",
            answer:
              "It reduces the risk of workplace accidents caused by the operator entering a hazardous area and the loss of control that can arise from sudden valve movements.",
          },
          {
            question: "Why is remote operation needed even though the valve is manual?",
            answer:
              "Some manual valves are not suitable for direct intervention due to location, environmental conditions, or process risk. FlexiDrive preserves the manual character of these valves while enabling operation from a safe distance.",
          },
          {
            question: "Is it a permanently mounted system?",
            answer:
              "Yes. FlexiDrive is a remote operating system fixed onto the valve and is suitable for continuous use.",
          },
          {
            question: "How does it reduce human error?",
            answer:
              "By providing controlled and guided movement, it prevents sudden, harsh, or incorrect valve movements and helps the operator maintain full control over the operation.",
          },
          {
            question: "Does it replace automation systems?",
            answer:
              "No. FlexiDrive is not an alternative to automation. It complements operational safety by enabling manual valves to be operated remotely and more safely.",
          },
          {
            question: "Which facilities prefer it?",
            answer:
              "It is preferred to make manual valve operations safe in refineries, petrochemical plants, power plants, and high-risk industrial facilities.",
          },
        ],
      },
      "power-wrench-portable-actuator": {
        title: "Power Wrench Portable Actuator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "What does Power Wrench provide?",
            answer:
              "Power Wrench makes manual valve operations that require high torque controlled and safe.",
          },
          {
            question: "Why is torque control important?",
            answer:
              "Excessive or insufficient torque can lead to valve damage and process safety risks.",
          },
          {
            question: "What is the difference from manual operation?",
            answer:
              "It reduces the risk of partial opening or jamming by applying steady and controlled torque.",
          },
          {
            question: "Who is it suitable for?",
            answer:
              "It is suitable for maintenance and operations teams working with large-diameter valves.",
          },
          {
            question: "Which facilities use it?",
            answer:
              "It is preferred in heavy industry, energy, and process facilities.",
          },
        ],
      },
      "vpi-position-indicator": {
        title: "VPI – Valve Position Indicator",
        image: "/images/placeholder.svg",
        items: [
          {
            question: "What exactly does VPI do?",
            answer:
              "VPI detects when manual multi-turn valves (especially gate/globe types) reach the open/closed position and sends this information as a signal to the DCS/control room. This makes manual valves visible on the control system side.",
          },
          {
            question: "Why is this information critical?",
            answer:
              "The biggest risk with manual valves is assuming open when closed or closed when open. Wrong assumptions can lead to incorrect lineups, product contamination, unsafe operating conditions, and serious process incidents. VPI eliminates this blind spot.",
          },
          {
            question: "Does VPI physically prevent operations like an interlock?",
            answer:
              "No. VPI’s role is not to lock but to verify the manual valve position reliably and report it to the DCS. The product that mechanically prevents wrong operations is the interlock; VPI is the product that removes wrong assumptions. When used together, the safety layer is strengthened.",
          },
          {
            question: "Why is VPI needed if there is a DCS?",
            answer:
              "In many facilities, manual valves cannot be physically controlled by the DCS; the control room often estimates the real position or relies on verbal confirmation from the field. VPI closes this gap by providing real-time position feedback from manual assets.",
          },
          {
            question: "Which valve types is VPI used on?",
            answer:
              "VPI is designed to provide position feedback especially for manual multi-turn valves (gate/globe, etc.).",
          },
          {
            question: "Which risk does VPI directly reduce?",
            answer:
              "It reduces unsafe start-ups due to incorrect lineups, product contamination due to wrong valve positions, and uncertainty of true position during maintenance/isolation. By enabling control-room visibility of manual operations, VPI significantly lowers these risks.",
          },
          {
            question: "Does installation require welding/drilling/modification on the valve?",
            answer:
              "The standard approach is to mount VPI in the field with a universal bracket without major valve modifications. Adaptation may be required depending on the project or application.",
          },
          {
            question: "What happens if settings change; does it need continuous calibration?",
            answer:
              "After the open/closed setting is made, periodic continuous adjustment is not intended; if valve end-stops change, the system is designed to allow quick reset/re-adjustment in the field.",
          },
          {
            question: "What is VPI’s role against sabotage or unauthorized intervention?",
            answer:
              "VPI is not a lock by itself, but by providing real-time position information to the control room, it makes unauthorized or suspicious valve movements harder to miss. For critical lines, the strongest solution is the VPI + interlock combination.",
          },
          {
            question: "What does VPI not replace?",
            answer:
              "VPI does not replace an interlock and does not replace automation/actuation. Its job is to reliably carry the true position of manual valves to the control room.",
          },
        ],
      },
    },
  },
};

faqContent.az = { products: {} };
faqContent.az = faqContent.tr;

export const getFaqBySlug = (slug, language = "tr") => {
  const langData = faqContent[language];
  if (!langData) {
    return null;
  }
  const fallbackMap = {
    "smith-interlocks": "mechanical-valve-interlock-manual-multi-turn",
    "netherlocks-interlocks": "mechanical-valve-interlock-manual-quarter-turn",
    flexidrive: "flexidrive-remote-operator",
    "anahtar-yonetimi": "key-exchange-unit",
    "sira-kontrolu": "sequence-control",
    easidrive: "easidrive-portable-actuator",
    "power-wrench": "power-wrench-portable-actuator",
    vpi: "vpi-position-indicator",
    "smith-gl-vana-kilitleri": "mechanical-valve-interlock-manual-multi-turn",
    "netherlocks-mrl-vana-kilitleri": "mechanical-valve-interlock-manual-multi-turn",
    "smith-ql-vana-kilitleri": "mechanical-valve-interlock-manual-quarter-turn",
    "netherlocks-ndl-ceyrek-donus-kilitleri":
      "mechanical-valve-interlock-manual-quarter-turn",
  };
  const resolvedSlug = langData.products[slug]
    ? slug
    : fallbackMap[slug];
  return resolvedSlug ? langData.products[resolvedSlug] : null;
};

export const getAllFaqs = (language = "tr") => {
  const langData = faqContent[language];
  if (!langData) {
    return [];
  }
  return Object.entries(langData.products).map(([slug, data]) => ({
    slug,
    ...data,
  }));
};
