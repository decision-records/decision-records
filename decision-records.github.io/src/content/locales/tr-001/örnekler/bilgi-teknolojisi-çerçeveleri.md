# Bilgi teknolojisi çerçevelerimizi seç

* Durum: görüş talebi
* Tarih: 2026-10-14
* Karar verici(ler): Bilgi Direktörü ve Teknoloji Direktörü (onaylanacak)
* Sahip: Teknoloji Operasyonları Başkanı

Özet: Devam eden çalışma. Bu, birkaç çerçeveyi (örneğin ITIL, Çevik Manifesto, Ekstrem Programlama ve Altı Sigma) benimsemesi istenen ve hangilerini, hangi iş için ve hangi sırayla kullanacağına karar vermesi gereken bir teknoloji grubu için başlangıç noktasıdır. Bir ekibin soruyu nasıl çerçeveleyebileceğini, seçenekleri nasıl tartışabileceğini ve bilgiyi nasıl toplayabileceğini gösterir. Hiçbir karar kaydetmez.

## Konu

Farklı liderler teknoloji grubundan hizmet yönetimi için ITIL'i, teslimat için Çevik Manifesto'yu, mühendislik için Ekstrem Programlama'yı ve kalite için Altı Sigma'yı, bazen aynı ekiplerde ve aynı dönemde benimsemesini istedi. Her talep tek başına makul, ancak birlikte örtüşüyor, farklı sözlükler kullanıyor ve insanlardan özümseyebileceklerinden daha hızlı değişmelerini istiyor.

Yanıtlanması gereken sorular:

* Her çerçeve hangi sorunu, hangi tür iş için çözüyor?
* Nerede örtüşüyor veya çelişiyorlar ve hangisi öncelik almalı?
* Bunları hangi sırayla tanıtmalıyız ve bir ekip aynı anda kaç değişikliği özümseyebilir?
* Bileşimin yardımcı olup olmadığını nasıl anlayacağız?

## Varsayımlar

Her varsayım sınanacak bir şeydir.

* **Her çerçeve, tasarlandığı iş türünde en iyi çalışır.** Sınama: kaynakları okuyun ve her çerçeveyi kullanmış kişilerle konuşun.
* **Ekipler aynı anda birkaç değil, bir yeni çerçeveyi özümseyebilir.** Sınama: ekiplere hâlihazırda hangi değişikliklerin sürdüğünü ve ne kadar kapasiteleri olduğunu sorun.
* **Destekçiler sırayı ve nedenini bilirlerse beklemeyi kabul eder.** Sınama: onlarla erkenden konuşun.
* **Çerçeveler arasında yazılı bir sınır çatışmayı azaltır.** Sınama: bir taslak hazırlayın ve gerçek çatışma örnekleriyle sınayın.

## Kısıtlar

* Grubun herhangi bir dönemde değişim kapasitesi sınırlı.
* Çerçeveler farklı sözlükler kullanıyor, bu yüzden olay, değişiklik, sürüm ve kusur gibi ortak terimler bir kez tanımlanmalı.
* Birkaç çerçevenin tam benimsenmesi yıllar sürebilir.
* Bilinmeyen, onaylanacak: mevcut uygulama, sözleşmesel veya denetim beklentileri ve halihazırda kullanılan çerçeveler.

## Değerlendirilen seçenekler

Her seçenek için değeri, maliyetleri, zaman çizelgesini ve yetenek ihtiyaçlarını tahmin edin ve ekibin fikrini hangi kanıtın değiştireceğini not edin.

* **İstenen her çerçeveyi her yerde benimse.**
  * Değer: her destekçi istediğini alır.
  * Riskler: aşırı yük; çelişen rehberlik (örneğin sabit değişiklik onaylarına karşı sürekli sürüm); hangi değişikliğin hangi sonuca yol açtığını söylemek imkânsız.
* **Tek bir çerçeveyi tek standart olarak benimse.**
  * Değer: açıklaması basit.
  * Riskler: hiçbir çerçeve hizmet operasyonlarını, ürün teslimatını, mühendislik uygulamasını ve kaliteyi eşit derecede iyi kapsamaz.
* **Her çerçeveyi uyduğu iş türüne ata ve bunları birer birer aşamalı devreye al.** Örneğin canlı hizmetleri yürütmek için ITIL uygulamaları, teslimat ekiplerinin planlama ve çalışma biçimi için Çevik Manifesto'nun değerleri, yazılım geliştirmek için Ekstrem Programlama uygulamaları ve kusurların ölçülebildiği süreçler için Altı Sigma.
  * Değer: ekipler için daha net; öğrenmesi daha kolay.
  * Maliyet etkenleri: yazılı bir sınır belgesi; koordinasyon; uzun bir program.
* **ISO/IEC 38500 (BT yönetişimi) veya ISO/IEC 20000-1 gibi bir yönetişim veya standartlar şemsiyesi benimse** ve ekiplerin bunun içinde yöntem seçmesine izin ver.
* **Hiçbirini topyekûn benimseme**; grubun ölçülmüş sorunlarını ele alan uygulamaları seç.

## Gerekçe

Ekibin beklemesi gereken tartışma noktaları:

* **Çerçeveler mi, sonuçlar mı?** Amaç müşteriler için daha iyi sonuçlardır, çerçeve benimsemek değil. Hangi sonuçlar en önemli?
* **Çatışmalar.** Rehberlik çatıştığında kim karar verir?
* **Sıra.** Hangisi önce gitmeli: en çok destekçi baskısı olan mı, yoksa diğerlerini destekleyen mi?
* **Sözlük.** Ortak sözcükler sürtünmeyi azaltır, ancak sahte denklik gerçek farklılıkları gizler.

Ekibin maliyetleri ve ödünleşimleri nasıl değerlendirebileceği:

1. Önce sorunları ve istenen sonuçları ölçütleriyle listeleyin (örneğin yazılım teslimat performansına ilişkin DORA araştırmasından, ayrıca hizmet ve kalite ölçütlerinden).
2. Her çerçeve için maliyetleri kurumun kendi terimleriyle tahmin edin: eğitim, süreç değişikliği, araçlar, kaybedilen zaman ve süregelen destek. Aralıklar gösterin.
3. Her ekibin değişim kapasitesini tahmin edin ve hiçbir ekibin özümseyebileceğinden fazlasını taşımayacağı şekilde sıralayın.
4. Seçenekleri en iyi, olası ve en kötü senaryolarda karşılaştırın; kanıt değişirse ayarlaması en kolay olanı seçin.
5. İlk iki çerçeveden sonra gözden geçirin ve kanıt daha iyi bir sıra öneriyorsa sırayı yeniden ele alın.

## Karar

**Henüz karara bağlanmadı.** Bu bir başlangıç noktasıdır. Bunu kullanan bir ekip, bu bölümü kendi kararıyla değiştirmelidir.

Karara ulaşmak için önerilen yol:

* Kimin karar vereceğini ve kime danışılması gerektiğini onaylayın (destekçiler dahil).
* Önce ölçütler ve ağırlıklar üzerinde anlaşın.
* Yukarıdaki kanıtları toplayın ve bulunanları kaydedin.
* Yorum için paylaşın, ardından karar verin ve Durumu güncelleyin.

## Sonuçlar

Ekip çerçeveleri iş türüne göre atamaya ve aşamalı devreye almaya karar verirse şunları yapması gerekir:

* Sınır belgesi için bir sahip belirlemek ve üst makama taşımalı bir çatışma çözme yolu belirlemek.
* Bir ekipte aynı anda yalnızca bir çerçeveyi başlatmak ve sonrakine ancak öncekinin kendi çıkış ölçütlerini karşıladığında geçmek.
* Sonraki çerçevelerin destekçilerine sırayı ve nedenini şimdiden söylemek.
* Ortak terimleri sınır belgesinde bir kez tanımlamak.
* İlk iki çerçeveden sonra yaklaşımın tamamını gözden geçirmek.

## İlgili kararlar

* [Çevik Manifesto](../çevik-manifesto/), [ITIL 5](../itil-5/), [Ekstrem Programlama](../ekstrem-programlama/) ve [Altı Sigma](../altı-sigma/): her çerçeveye ilişkin kararlar.
* [İş çerçeveleri](../iş-çerçeveleri/): genel aşamalı benimseme örüntüsü.
* Henüz verilmemiş kararlar: araçlar; sonraki çerçevelerin sırası.

## İlgili notlar

* Açık maddeler: mevcut uygulamaları listeleyin; destekçilere hangi sonuçları istediklerini sorun; ilk sınır belgesini taslak haline getirin.
* Daha fazlasını öğrenin:
  * Vikipedi: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organisation](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Okuyun: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
