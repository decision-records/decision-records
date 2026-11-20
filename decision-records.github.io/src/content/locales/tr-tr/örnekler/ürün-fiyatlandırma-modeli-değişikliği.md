# Kullanıma dayalı fiyatlandırma

* Durum: görüş talebi
* Tarih: 2026-04-05
* Karar verici(ler): Ürün Başkan Yardımcısı, Mali İşler Direktörü'nün görüşüyle (onaylanacak)
* Sahip: Fiyatlandırma ve Paketleme Başkanı

Özet: Devam eden çalışma. Bu, sabit kullanıcı başına fiyatlandırmadan kullanım için ücret alan bir modele ya da ikisinin karışımına geçmeyi değerlendiren bir ekip için başlangıç noktasıdır. Bir ekibin soruyu nasıl çerçeveleyebileceğini, seçenekleri nasıl tartışabileceğini ve bilgiyi nasıl toplayabileceğini gösterir. Hiçbir karar kaydetmez.

## Konu

Bir yazılım ürünü kullanıcı başına fiyatlandırılıyor. Ekip, bunun hafif kullanıcılardan aldıkları değerden fazla ücret aldığından ve böylece ayrılmalarına katkıda bulunduğundan, ürünü yoğun kullanan müşterilerden ise az ücret aldığından şüpheleniyor. Rakipler kullanıma dayalı veya hibrit fiyatlandırmaya geçiyor ve adaylar şirketin neden geçmediğini soruyor.

Yanıtlanması gereken sorular:

* Ürünün değer ölçütü nedir: hangi kullanım birimi, bir müşterinin elde ettiği değeri izler?
* Hafif ve yoğun müşteriler gerçekten düşündüğümüz gibi mi davranıyor ve hissediyor?
* Hangi fiyatlandırma modeli, planlama yapabilecek kadar öngörülebilir geliri korurken değerle en iyi eşleşir?
* Mevcut müşteriler yeni modele nasıl adil biçimde geçer?

## Varsayımlar

Her varsayım sınanacak bir şeydir.

* **Kullanım, değer için iyi bir göstergedir.** Sınama: kullanımı, bir dizi hesapta müşteri sonuçları ve memnuniyetiyle karşılaştırın.
* **Hafif kullanıcılar, fiyat çok yüksek hissettirdiği için ayrılır.** Sınama: iptal nedenlerini gözden geçirin ve ayrılmış hafif kullanıcılarla konuşun.
* **Yoğun kullanıcılar daha fazla değer için daha fazla ödeyecek.** Sınama: bir örneğe ödeme istekliliğini sorun ve fiyat değişikliklerine ne kadar duyarlı olduklarını kontrol edin.
* **Kullanımı doğru ve şeffaf biçimde ölçüp faturalayabiliriz.** Sınama: veri kalitesini kontrol edin ve müşterilere faturalarını öngörüp öngöremediklerini sorun.

## Kısıtlar

* Hiçbir mevcut müşteri önceden bildirim olmadan net bir fiyat artışıyla karşılaşmamalı.
* Satış prim planları, yeni anlaşmalar için kullanılmadan önce yeni yapıyı yansıtmalı.
* Mali İşler, kullanımla değişen gelirle başa çıkabilen tahmin modellerine ihtiyaç duyuyor.
* Bilinmeyen, onaylanacak: fiyatları sabitleyen sözleşme şartları, faturalama sisteminin neler yapabildiği ve rakip fiyatlandırma ayrıntıları.

## Değerlendirilen seçenekler

Her seçenek için değeri, maliyetleri, zaman çizelgesini ve yetenek ihtiyaçlarını tahmin edin ve ekibin fikrini hangi kanıtın değiştireceğini not edin.

* **Sabit kullanıcı başına fiyatlandırmayı koru.**
  * Değer: basit; geçiş yok.
  * Riskler: müşteri kaybı ve az ücretlendirme sorunlarını bırakır; rakipler farklı.
* **Tamamen kullanıma dayalı fiyatlandırmaya geç.**
  * Değer: fiyat değeri yakından izler; başlamak için düşük engel.
  * Maliyet etkenleri: ölçüm, faturalama ve raporlama sistemleri; fatura soruları için destek; satış değişiklikleri.
  * Riskler: gelir oynaklığı; öngörülemez faturalardan hoşlanmayan müşteriler.
* **Hibrit: temel ücret artı kullanıma dayalı ücretler.**
  * Değer: hafif ve yoğun kullanıcıları yine ele alırken, salt kullanım fiyatlandırmasından daha öngörülebilir gelir.
  * Maliyet etkenleri: yukarıdakiler, artı tasarım karmaşıklığı.
  * Zaman çizelgesi biçimi: önce yeni müşteriler; mevcut müşteriler korunmuş bir dönemden sonra geçirilir.
* **Kullanım sınırlı kademeli planlar.** İhtiyacın çoğunu karşılayabilecek daha basit bir orta yol.
* **Önce deney yap**: yeni modeli yeni müşterilerin bir alt kümesine veya bir segmente sunup karşılaştır.

## Gerekçe

Ekibin beklemesi gereken tartışma noktaları:

* **Öngörülebilirlik mi, adalet mi?** Müşteriler ve mali işler öngörülebilir faturalara değer verir; kullanım fiyatlandırması daha adil hissettirir ama değişkendir.
* **Hangi ölçüt?** Kullanıcılar, çağrılar, kayıtlar, sonuçlar? Kötü bir ölçüt yanlış davranışı yaratır.
* **Geçiş.** Mevcut koşulları koruma müşterileri korur, ancak faydaları geciktirir ve operasyonları karmaşıklaştırır.
* **Rekabet.** Rakipleri izlemek kendi başına bir neden değildir. Kanıtımız ne diyor?

Ekibin maliyetleri ve ödünleşimleri nasıl değerlendirebileceği:

1. Mevcut müşteri verilerini kullanarak her seçenek altında geliri modelleyin: her hesap yeni modelde ne öderdi? Kazananları ve kaybedenleri ve dağılımı aralıklar olarak gösterin.
2. Fiyat esnekliğini nitel olarak ve testlerle tahmin edin ve müşterilerin fatura değişikliklerine tepkisini değerlendirin.
3. Değişikliğin maliyetini hesaplayın: ölçüm, faturalama, destek, satış eğitimi, hukuki ve sözleşme değişiklikleri, tahmin araçları.
4. Seçenekleri gelir düzeyi, gelir istikrarı, müşteri adaleti, büyüme etkileri ve karmaşıklık açısından karşılaştırın; varsayımlara duyarlılığı sınayın.
5. Bir deney planlayın ve hangi sonuçların onu ölçeklemeye, ayarlamaya veya durdurmaya yol açacağını önceden tanımlayın.

## Karar

**Henüz karara bağlanmadı.** Bu bir başlangıç noktasıdır. Bunu kullanan bir ekip, bu bölümü kendi kararıyla değiştirmelidir.

Karara ulaşmak için önerilen yol:

* Kimin karar vereceğini ve kimin onay vermesi gerektiğini doğrulayın (örneğin Mali İşler).
* Önce ölçütler ve ağırlıklar üzerinde anlaşın.
* Yukarıdaki kanıtları toplayın ve bulunanları kaydedin.
* Yorum için paylaşın, ardından karar verin ve Durumu güncelleyin.

## Sonuçlar

Ekip hibrit bir modele geçmeye karar verirse şunları yapması gerekir:

* Hiç kimsenin sürpriz bir artışla karşılaşmadığını doğrulamak için mevcut her hesabı modellemek.
* Satış primlerini güncellemek ve satışı ve desteği eğitmek.
* Gelir tahminini değişimi kaldıracak şekilde gözden geçirmek.
* Risk altındaki hafif kullanımlı müşterilerle erkenden iletişime geçmek; çünkü faturalarının düştüğünü görmeleri gerekir.
* Tam aşım kademelerine ve eşiklerine ayrıca karar vermek.

## İlgili kararlar

* [Orta pazar segmentine gir](../yeni-pazara-girmek/): yeni bir segment için fiyatlandırma.
* [Markayı güvenilirlik etrafında yeniden konumlandır](../marka-yeniden-konumlandırma/): fiyat sinyalleri ve konumlandırma.
* Henüz verilmemiş kararlar: tam kullanım kademeleri; mevcut müşteriler için geçiş zaman çizelgesi.

## İlgili notlar

* Açık maddeler: değer ölçütü adaylarını tanımlayın; iptal nedenlerini gözden geçirin; faturalamanın neyi ölçebildiğini kontrol edin. Kendi faturalama, kullanım ve iptal verileriniz, herhangi bir genel makaleden daha ilgili kanıttır.
* Daha fazlasını öğrenin:
  * Vikipedi: [Pricing strategy](https://en.wikipedia.org/wiki/Pricing_strategy), [Price elasticity of demand](https://en.wikipedia.org/wiki/Price_elasticity_of_demand), [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service), [Subscription business model](https://en.wikipedia.org/wiki/Subscription_business_model), [Churn rate](https://en.wikipedia.org/wiki/Churn_rate), [Customer lifetime value](https://en.wikipedia.org/wiki/Customer_lifetime_value), [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis)
