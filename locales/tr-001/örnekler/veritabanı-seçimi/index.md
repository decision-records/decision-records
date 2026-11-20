# Birincil veritabanını seç

* Durum: görüş talebi
* Tarih: 2026-03-22
* Karar verici(ler): Teknoloji Direktörü (onaylanacak)
* Sahip: Platform Mühendisliği Başkanı

Özet: Devam eden çalışma. Bu, büyüyen bir ürün için birincil veritabanını seçen bir ekip için başlangıç noktasıdır. Bu kümedeki tek teknoloji örneğidir ve mimari kararların, bu koleksiyonun başka yerlerindeki iş kararlarıyla aynı örüntüyü izlediğini gösterir. Bir ekibin soruyu nasıl çerçeveleyebileceğini, seçenekleri nasıl tartışabileceğini ve bilgiyi nasıl toplayabileceğini gösterir. Hiçbir karar kaydetmez.

## Konu

Mevcut veritabanı ölçekleme sınırlarına yaklaşıyor ve mühendislik ekibi büyümenin yakında bu sınırlara ulaşmasını bekliyor. Bir sonraki büyük ürün lansmanından önce bir yedek veya farklı bir ölçekleme yolu seçilmeli.

Yanıtlanması gereken sorular:

* Bugünkü gerçek sınırlar neler (okumalar, yazmalar, depolama, gecikme, operasyonlar) ve bunlara ne kadar hızlı yaklaşıyoruz?
* Hangi nitelikler en önemli (tutarlılık, kullanılabilirlik, gecikme, maliyet, işletilebilirlik, uyum) ve hangi sırayla?
* Elimizdekini mi ölçekleriz, yönetilen bir hizmete mi geçeriz, yoksa kendimiz bir şey mi işletiriz?
* Nasıl taşırız ve gerekirse nasıl tekrar ayrılırız?

## Varsayımlar

Her varsayım sınanacak bir şeydir.

* **Büyüme projeksiyonu gerçekçidir.** Sınama: geçmiş büyümeyle ve satış ve ürün planlarıyla karşılaştırın; yüksek ve düşük bir durumu değerlendirin.
* **Mevcut veritabanı, bir bedel karşılığında daha fazla ölçeklenebilir.** Sınama: tedarikçiye ve ekibe ne kadar boşluk kaldığını ve neye mal olduğunu sorun.
* **İş yükümüz yatay ölçeklenebilir bir tasarıma uyuyor.** Sınama: sorguları ve işlemleri inceleyin; kayıtlar arasında güçlü tutarlılık gerektiren işlemleri arayın.
* **Ekip seçilen seçeneği işletebilir.** Sınama: gereken becerileri ve kimde olduğunu listeleyin.

## Kısıtlar

* Değişiklik lansmandan önce hazır olmalı ve lansmanı aksatmayan aşamalı bir taşıma yapılmalı.
* Yinelenen maliyet onaylı bütçeye sığmalı.
* Veri koruma ve güvenlik yükümlülükleri her seçim için geçerli.
* Bilinmeyen, onaylanacak: veri hacmi, saklama gereksinimleri, bölgesel gereksinimler, diğer sistemlerle entegrasyon ve tedarikçi taahhütleri.

## Değerlendirilen seçenekler

Her seçenek için değeri, maliyetleri, zaman çizelgesini ve yetenek ihtiyaçlarını tahmin edin ve ekibin fikrini hangi kanıtın değiştireceğini not edin.

* **Mevcut veritabanını dikey olarak ölçekle** (daha büyük bir makine veya plan).
  * Değer: en düşük taşıma riski; uygulama değişikliği yok.
  * Riskler: sınırlı bir zaman kazandırır; maliyet dik biçimde artar.
* **Yönetilen, yatay ölçeklenebilir bir veritabanı hizmetine geç.**
  * Değer: ölçeklemeyi ve operasyonel işin çoğunu ortadan kaldırır; tedarikçi desteği.
  * Maliyet etkenleri: yinelenen hizmet ücretleri; taşıma; uygulama değişiklikleri; çıkış trafiği ve çıkış maliyetleri.
  * Riskler: tedarikçinin özelliklerine ve fiyatlandırmasına bağımlılık.
* **Kendi barındırdığımız, yatay ölçeklenebilir bir veritabanına geç.**
  * Değer: potansiyel olarak daha düşük yinelenen maliyet; daha fazla denetim.
  * Maliyet etkenleri: operasyonel beceriler geliştirmek; nöbet yükü; araçlar; yükseltmeler.
  * Riskler: operasyonel yük beklenenden yüksek olabilir.
* **Veri katmanını yeniden tasarla** (örneğin önbellekleme, okuma kopyaları, bölümleme veya iş yüklerini ayırma) ve mevcut veritabanını uzat.
* **Farklı iş yükleri için farklı veritabanları kullan** (çok dilli kalıcılık), işletilecek daha fazla sistem pahasına.

## Gerekçe

Ekibin beklemesi gereken tartışma noktaları:

* **Tutarlılık mı, kullanılabilirlik mi?** CAP teoremi, bölümlenmiş bir dağıtık sistemin ikisini birden garanti edemeyeceğini söyler. Ürünün her bölümü için hangisi daha önemli? Birçok iş yükü gecikmiş tutarlılığa tahammül edebilir; bazıları edemez.
* **Yönetilen mi, kendi barındırdığımız mı?** Daha yüksek hizmet maliyeti ile daha düşük operasyonel risk. Ekip mühendislerin zamanını nasıl değerlendirmeli?
* **Bağımlılık.** Tedarikçiye özgü bir özelliği kullanarak ne kaybedilir ve ne kazanılır?
* **Standartlar.** Tedarikçiye özgü bir sorgu modeline karşı SQL'e (ISO/IEC 9075'te standartlaştırılmış) ne kadar güveniyoruz?

Ekibin maliyetleri ve ödünleşimleri nasıl değerlendirebileceği:

1. Kendi iş yükünüzle sınayın: gerçekçi bir kıyaslama oluşturun ve her adayı, hata senaryoları dahil beklenen ve zirve yük altında ölçün.
2. Belirtilen bir ufukta toplam sahip olma maliyetini kurumun kendi terimleriyle tahmin edin: hizmet veya lisans ücretleri, barındırma, taşıma, mühendislik zamanı, nöbet, eğitim, destek ve çıkış. Aralıklar gösterin.
3. Adayları önemli niteliklerden oluşan ağırlıklı bir matrisle puanlayın (ISO/IEC 25010 ürün kalitesi modeli bunun için bir sözlük sunar) ve ağırlıklara duyarlılığı sınayın.
4. Her seçeneğin ne kadar zaman kazandırdığını ve sınıra tekrar ulaşıldığında neye mal olduğunu tahmin edin.
5. Çıkış için plan yapın: veri ve kod her seçimden nasıl uzaklaşırdı?

## Karar

**Henüz karara bağlanmadı.** Bu bir başlangıç noktasıdır. Bunu kullanan bir ekip, bu bölümü kendi kararıyla değiştirmelidir.

Karara ulaşmak için önerilen yol:

* Kimin karar vereceğini ve kime danışılması gerektiğini onaylayın (güvenlik, mali işler, ürün).
* Önce ölçütler ve ağırlıklar üzerinde anlaşın.
* Kıyaslama sonuçları dahil yukarıdaki kanıtları toplayın ve bulunanları kaydedin.
* Yorum için paylaşın, ardından karar verin ve Durumu güncelleyin.

## Sonuçlar

Ekip taşımaya karar verirse şunları yapması gerekir:

* Tam geçişten önce paralel çalıştırma dönemi olan aşamalı bir taşıma planlamak.
* Yinelenen maliyetler için bütçeyi doğrulamak.
* Örneğin bağlantı havuzu ve okuma kopyaları üzerine sonraki kararları planlamak.
* Beklenen çıkış yolunu kaydetmek.

## İlgili kararlar

* [Proje için yapmak ya da satın almak](../proje-yapmak-ya-da-satın-almak/): genel yapmak/satın almak gerekçelendirmesi.
* [Tek tedarikçi yoğunlaşma riskini azalt](../tek-tedarikçi-bağımlılığı/): tek bir tedarikçiye bağımlılık.
* Henüz verilmemiş kararlar: önbellekleme ve kopya stratejisi; veri saklama.

## İlgili notlar

* Açık maddeler: üretim ölçütlerini toplayın; iş yükü özelliklerini yazın; bir kıyaslama için adayları kısa listeye alın.
* Daha fazlasını öğrenin:
  * Vikipedi: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
