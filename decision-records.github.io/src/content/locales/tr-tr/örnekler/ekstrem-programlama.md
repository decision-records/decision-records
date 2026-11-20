# Ekstrem Programlama

* Durum: görüş talebi
* Tarih: 2025-10-06
* Karar verici(ler): Mühendislik Başkanı (onaylanacak)
* Sahip: Mühendislik Yöneticisi

Özet: Devam eden çalışma. Bu, test güdümlü geliştirme, çift programlama, sürekli entegrasyon ve küçük sürümler gibi Ekstrem Programlama (XP) uygulamalarını nasıl tanıtacağını değerlendiren bir mühendislik ekibi için başlangıç noktasıdır. Bir ekibin soruyu nasıl çerçeveleyebileceğini, seçenekleri nasıl tartışabileceğini ve bilgiyi nasıl toplayabileceğini gösterir. Hiçbir karar kaydetmez.

## Konu

Ürün ekipleri özellikleri büyük partiler halinde yayımlıyor ve geç bulunan kusurlar pahalıya mal oluyor: sürümlerin kayda değer bir kısmı yayımdan sonra acil düzeltme gerektiriyor. Mühendislik liderleri, test güdümlü geliştirme, çift programlama, sürekli entegrasyon, küçük sürümler, yeniden düzenleme ve ortak kod sahipliği gibi teknik uygulamaları vurgulayan çevik bir yazılım geliştirme yöntemi olan Ekstrem Programlama'nın uygulamalarıyla ilgileniyor.

Bu uygulamalar birbirini destekler, ancak mühendislerin her gün çalışma biçimini de değiştirir. Hepsini aynı anda benimsemek direnişle karşılaşabilir ve yüzeysel yapılabilir. Yanıtlanması gereken sorular:

* Hangi sorunları çözmek istiyoruz (geç kusurlar, yavaş geri bildirim, birkaç kişide kalan bilgi) ve hangi uygulamalar bunları ele alıyor?
* Uygulamalar hangi sırayla tanıtılmalı ve kim önce başlamalı?
* Uygulamaların işe yaradığını bilmek için neyi ölçerdik?
* Ortak bir standart ile her ekibin seçimi arasındaki doğru denge nedir?

## Varsayımlar

Her varsayım sınanacak bir şeydir.

* **Geç kusurlara esas olarak hızlı otomatik geri bildirim eksikliği neden oluyor.** Sınama: acil düzeltmelerden bir örneği, kusurun nerede yakalanabileceğine kadar geriye doğru izleyin.
* **Temel uygulamalar (sürekli entegrasyon ve otomatik testler) diğerlerini mümkün kılar.** Sınama: uygulamaları denemiş ekiplere hangilerinin hangilerine bağlı olduğunu sorun.
* **Mühendisler, yanlarındaki bir ekipte işe yaradığını gördükleri uygulamaları benimser.** Sınama: mühendislere onları neyin ikna edeceğini ve neyin kaygılandırdığını sorun.
* **Yayımdan sonraki acil düzeltme oranı, ilerlemenin adil bir ölçüsüdür.** Sınama: nasıl sayılacağı konusunda anlaşın ve diğer ölçütlerin (teslim süresi, değişiklik başarısızlık oranı) farklı bir hikâye anlatmadığını kontrol edin.

## Kısıtlar

* Ekipler öğrenirken özellik teslim etmeye devam etmek zorunda, bu yüzden ilk dönemdeki çıktı muhtemelen daha düşük olacak.
* Mühendisler nasıl eşleşeceklerine ve hangi araçları kullanacaklarına dair bir seçim hakkını korumalı.
* Mevcut derleme ve test altyapısının, sürekli entegrasyon yararlı olmadan önce çalışmaya ihtiyacı olabilir.
* Bilinmeyen, onaylanacak: kod tabanının bugün ne kadarının test edilebilir olduğu ve düzenleyici veya müşteri kısıtlarının sürüm sıklığını etkileyip etkilemediği.

## Değerlendirilen seçenekler

Her seçenek için değeri, maliyetleri, zaman çizelgesini ve yetenek ihtiyaçlarını tahmin edin ve ekibin fikrini hangi kanıtın değiştireceğini not edin.

* **Tüm uygulamaları her ekipte aynı anda benimse.**
  * Değer: uygulamalar birbirini pekiştirir.
  * Maliyet etkenleri: eğitim; öğrenme sırasında daha yavaş teslimat; tüm ekiplerde aynı anda araç çalışması.
  * Riskler: büyük değişim; altta yatan becerilere sahip olmayan ekipler uygulamaları haftalar içinde bırakabilir.
* **Uygulamaları seçilmiş bir sırayla, ekip ekip benimse.** Örneğin önce sürekli entegrasyon ve otomatik testler (temeller), sonra küçük sürümler ve çift programlama, ardından test güdümlü geliştirme.
  * Değer: her uygulamanın oturması için zaman var; önceki olanlar sonrakileri mümkün kılar; ilk ekibin deneyimi geri kalanına yol gösterir.
  * Maliyet etkenleri: koçluk; planlara dahil edilmiş çift çalışma ve test yazma zamanı; işlem hattı için altyapı çalışması.
  * Zaman çizelgesi biçimi: ardışık; sonraki ekip, önceki ekip sürüm işlem hattını belirtilen süre boyunca sağlıklı tuttuğunda katılır.
  * Gereken yetenekler: bir koç; güvenilir bir derleme işlem hattı; çıktıdaki düşüş için yönetici desteği.
  * Riskler: yavaş; uygulamalar düzensiz benimsenir.
* **Yalnızca kolay uygulamaları benimse.** Düşük çaba, ancak otomatik test gibi en büyük faydası olanları atlayabilir.
* **Farklı bir uygulama kümesi benimse** (örneğin yazılım teslimatına ilişkin DORA araştırmasının tanımladıkları: sürekli teslimat, gövde tabanlı geliştirme ve gevşek bağlı mimari) ve XP'yi birkaç kaynaktan biri olarak ele al.
* **Yeni bir şey yapma** ve kusurların belirli nedenlerini doğrudan ele al. Gerçek bir referans noktası.

## Gerekçe

Ekibin beklemesi gereken tartışma noktaları:

* **Çift programlama.** Birçok mühendisin çekindiği bir uygulama. Nerede yardımcı olur (bilgi paylaşımı, karmaşık işler) ve nerede olmaz?
* **Standartlaştırmak mı, ekiplerin seçmesine izin vermek mi?** Ortak sonuçlar (daha az acil düzeltme, daha hızlı geri bildirim) ve bunlara ulaşma biçiminde ekip özgürlüğü mü, yoksa daha katı bir standart mı?
* **Kısa vadede kalite mi, hız mı?** Liderler ekipler öğrenirken daha düşük çıktıyı kabul etmeye istekli mi?
* **TDD bir araç mı, amaç mı?** Bazı uygulamalar (test güdümlü geliştirme gibi) deneyimli uygulayıcılar arasında bile tartışılır. Ekip, bir uygulamayı benimsemeden önce onun hangi sorunu ele aldığına karar vermeli.

Ekibin maliyetleri ve ödünleşimleri nasıl değerlendirebileceği:

1. Mevcut yaklaşımın maliyetini hesaplayın: acil düzeltmelere harcanan çaba, geç kusurların neden olduğu gecikmeler, müşteri etkisi. Kurumun kendi terimleriyle aralıklar kullanın.
2. Programın maliyetini hesaplayın: koçluk, eğitim, çift çalışma ve testler için zaman, işlem hattı için altyapı ve teslimattaki geçici düşüş.
3. Önce ölçütleri seçin: acil düzeltme gerektiren sürümlerin payı, değişiklikler için teslim süresi, dağıtım sıklığı, hizmeti geri yükleme süresi (DORA ölçütleri) ve mühendis geri bildirimi.
4. Seçenekleri en iyi, olası ve en kötü senaryolarda karşılaştırın; fayda beklenenden geç veya küçük ortaya çıkarsa yanıtın nasıl değiştiğini sorun.
5. Ağırlıklı bir matris ve bir ölüm öncesi analizi kullanın.

## Karar

**Henüz karara bağlanmadı.** Bu bir başlangıç noktasıdır. Bunu kullanan bir ekip, bu bölümü kendi kararıyla değiştirmelidir.

Karara ulaşmak için önerilen yol:

* Kimin ne zamana kadar karar vereceğini onaylayın.
* Önce ölçütler ve ağırlıklar üzerinde anlaşın.
* Yukarıdaki kanıtları toplayın ve bulunanları kaydedin.
* Yorum için paylaşın, ardından karar verin ve Durumu güncelleyin.

## Sonuçlar

Ekip aşamalı bir yaklaşım seçerse şunları yapması gerekir:

* Bir koç belirlemek ve ilk ekipten neyin işe yaradığını ve neyin yaramadığını dürüstçe bildirmesini istemek.
* Çift çalışma ve test yazma için zamanı teslimat planlarına dahil etmek.
* Derleme ve test işlem hattına, ona güvenmeden önce yatırım yapmak.
* Bir durdurma kuralı üzerinde anlaşmak: bir uygulama belirtilen sürenin ardından yardımcı olmuyorsa ekip onu bırakmayı önerebilir ve nedenini kaydeder.
* Mühendislerin nasıl eşleşeceklerine ve hangi araçları kullanacaklarına dair seçimini korumak; uygulamalar sonucu belirlemeli, ona nasıl ulaşıldığının her ayrıntısını değil.

## İlgili kararlar

* [Çevik Manifesto](../çevik-manifesto/): bu uygulamaların desteklediği değerlere ilişkin daha geniş karar.
* [Bilgi teknolojisi çerçevelerimizi seç](../bilgi-teknolojisi-çerçeveleri/): XP'nin diğer çerçevelerle nasıl uyum sağladığı.
* Henüz verilmemiş kararlar: işlem hattı ve araç yatırımı; kod sahipliği modeli.

## İlgili notlar

* Açık maddeler: son acil düzeltmelerden örnek alın; mühendislere çift çalışma ve testlerle ilgili kaygılarını sorun; derleme işlem hattının bugün neler yapabildiğini kontrol edin.
* Daha fazlasını öğrenin:
  * Vikipedi: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Okuyun: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
