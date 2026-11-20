# Karar kaydı şablonları

İki şablon var, ikisi de düz Markdown: istediğinizi yeni bir dosyaya kopyalayın ve doldurun.

## Hangi şablonun kullanılacağını seçmek

Varsayılan olarak **hafif şablonu** kullanın; çoğu karar yalnızca onun altı alanına ihtiyaç duyar ve bunun ötesine büyüyen bir sayfa genellikle zaten birden fazla karardır.

Karar yüksek riskliyse, görüşleri tek tek önem taşıyan birkaç paydaş varsa veya seçimi sonradan savunmak için gerçekten yapılandırılmış maliyet/SWOT/PEST analizi gerekiyorsa **kapsamlı şablona** geçin. Bir kararın kayda ihtiyacı olup olmadığına dair daha geniş soru için [kontrol listesine](../kontrol-listesi/index.md#kontrol-listesi-bu-karar-bir-karar-kaydı-gerektiriyor-mu), iki şablonun alanlarının birbirine nasıl karşılık geldiği için [kılavuza](../kılavuz/index.md#karar-kaydının-anatomisi) bakın.

## Hafif şablon

```markdown
# Başlık (kısa, şimdiki zamanda, etken, en fazla ~50 karakter)

- Durum: görüş talebi | önerildi | kabul edildi | reddedildi | kullanımdan kaldırıldı | yerini aldı
- Tarih: YYYY-AA-GG
- Karar verici(ler): [bunu kabul etme yetkisine sahip ad(lar) veya rol(ler)]
- Sahip: [bu kaydı kimin sürdürdüğü ve düzenli olarak gözden geçirdiği]

## Bağlam

Bu kararı gerekli kılan durumu ve kısıtları, toplantıyı hatırlamayan bir okuyucu sorunun neden ortaya çıktığını anlayacak şekilde açıklayın.

## Değerlendirilen seçenekler

Gerçekçi alternatifleri (ilgiliyse "hiçbir şey yapmamak" dahil) olgular ve ödünleşimler olarak sıralayın; seçilen seçeneği apaçık doğru gösteren bir samanadam dizisi olarak değil.

## Karar

Seçimi sade ve etken bir dille belirtin: "X'i yapacağız." Artıların ve eksilerin özeti değil, neyin seçildiğinin net bir ifadesi.

## Sonuçlar

Bunun sonucunda nelerin değiştiğini belirtin: maliyetler, riskler, sonraki kararlar ve bir alternatifi seçmeyerek vazgeçilen her şey. Zaten verilmiş kararın artı/eksi özeti olarak değil, "artık Y yerine X yapıyoruz" şeklinde okunmalıdır.
```

Bu şablonun tam bir uygulamalı anlatımı için [eğitime](../eğitim/index.md), tamamlanmış ve doldurulmuş örnekler için [örnekler/index.md](../örnekler/index.md) sayfasına bakın.

## Kapsamlı şablon

```markdown
# Başlık (kısa, şimdiki zamanda, etken, en fazla ~50 karakter)

- Durum: görüş talebi | önerildi | kabul edildi | reddedildi | kullanımdan kaldırıldı | yerini aldı
- Tarih: YYYY-AA-GG
- Karar verici(ler): [bunu kabul etme yetkisine sahip ad(lar) veya rol(ler)]
- Sahip: [bu kaydı kimin sürdürdüğü ve düzenli olarak gözden geçirdiği]

Özet: mevcut konum ve açık ihtiyaçlar hakkında bir veya iki cümle.

## Konu

Ele almak istediğiniz konuyu açıklayın. Bu konuyu neden şimdi ele aldığınız hakkında soru bırakmayın.

Asgari bir yaklaşım izleyin. Yalnızca yaşam döngüsünün çeşitli noktalarında ele alınması gereken konulara değinin.

Etiketler, anahtar sözcükler, bilgi tabanı bağlantıları gibi bazı gruplama bilgileri eklemek isteyebilirsiniz.

## Varsayımlar

Kararı verdiğiniz ortamdaki temel varsayımları açıklayın.

İlgili tüm kalite özelliklerine, diğer adıyla işlevler arası gereksinimlere değindiğinizden emin olun.

Örnek varsayımlar kapsam, maliyet, takvim, teknoloji, kaynak kullanılabilirliği, hizmet kalitesi ihtiyaçları, hizmet düzeyi sözleşmeleri vb. ile ilgili olabilir.

Ortamsal kısıtların (kabul edilmiş teknoloji standartları, kurumsal mimari, yaygın kullanılan desenler vb.) hangi seçenekleri değerlendireceğinizi sınırlayabileceğini unutmayın.

## Kısıtlar

Bu kararın ortama getirebileceği ek kısıtları kaydedin.

Yukarıdaki gibi, ilgili tüm kalite özelliklerine, diğer adıyla işlevler arası gereksinimlere değindiğinizden emin olun.

Örnek kısıtlar platform seçimleri, tedarikçi seçimleri, kararın geri alınabilirliğinin kolaylığı vb. ile ilgili olabilir.

## Değerlendirilen seçenekler (Konumlar)

Konumları, yani değerlendirmekte olduğunuz veya değerlendirdiğiniz uygulanabilir seçenekleri sıralayın.

Görüş değil, olgu ve veri kullanın. Konumlar çoğu zaman uzun açıklamalar, hatta bazen modeller ve diyagramlar gerektirebilir.

Bunun kapsamlı bir liste olması gerekmez; ancak son gözden geçirmede "... düşündünüz mü?" sorusunu duymak istemezsiniz, çünkü bu güvenilirlik kaybına ve diğer mimari kararların sorgulanmasına yol açar.

Bu bölüm ayrıca başkalarının görüşlerini duyduğunuzdan emin olmanıza yardımcı olur; diğer görüşleri açıkça belirtmek, savunucularını kararınıza ortak etmeye yarar.

### Maliyet analizi (isteğe bağlı)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Örnekler:

- Başlangıç: kurulum maliyetleri, zaman ve kaynaklar gibi.

- İşletme: destek ve bakım gibi

- Eğitim: beceri geliştirme ve değişim yönetimi gibi

- Lisanslama: sözleşme anlaşmaları ve yasal taahhütler gibi

- Ölçümleme: bant genişliği ve CPU kullanımı gibi

### SWOT analizi (isteğe bağlı)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

- Güçlü yönler

- Zayıf yönler

- Fırsatlar

- Tehditler

### PEST analizi (isteğe bağlı)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

- Politik etkenler

- Ekonomik etkenler

- Sosyal etkenler

- Teknolojik etkenler

Bazı ekipler bunları kendi kategorileri olarak eklemeyi sever:

- Hukuki etkenler - bunları politik etkenlerin içinde tutmayı tercih ediyoruz.

- Düzenleyici etkenler - bunları politik etkenlerin içinde tutmayı tercih ediyoruz.

- Çevresel etkenler - bunları ekonomik etkenlerin içinde tutmayı tercih ediyoruz.

- Demografik etkenler - bunları sosyal etkenlerin içinde tutmayı tercih ediyoruz.

### Diğer analizler (kendi fikirlerinizi buraya ekleyin)

Kendi fikirlerinizi buraya ekleyin...

## Görüşler

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

- Ekip tarafından, ideal olarak ekip arkadaşının kendisi tarafından yazılmış.

- Diğer iç paydaşlar tarafından, ideal olarak paydaşın kendisi tarafından yazılmış.

- Üçüncü taraf danışmanlar, değerlendiriciler, gözden geçirenler gibi dış kişiler tarafından.

Her görüş için şunları açıkça belirtin:

- Görüşü kimin sunduğu

- Başka hangi adayların değerlendirildiği,

- Yazarın adayları nasıl değerlendirdiği?

- Yazarın kazananı neden seçtiği?

- O zamandan beri neler olduğu?

- Şimdi bildiklerinizi bilerek, insanlara neyi farklı yapmalarını tavsiye ederdiniz?

### Görüş 1 başlığı (kendinizinkini buraya ekleyin)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Görüşünüzü buraya açıklayın.

### Görüş 2 başlığı (kendinizinkini buraya ekleyin)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Görüşünüzü buraya açıklayın.

### Görüş 3 başlığı (kendinizinkini buraya ekleyin)

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Görüşünüzü buraya açıklayın.

## Gerekçe

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Bir konumu neden seçtiğinizi açıklayın.

Kararlar amaç odaklı olmalıdır. Hesap verebilirliği göstermek için kararlarınızı hedeflerle veya gereksinimlerle açıkça eşleştirin.

Gerekçe, muhtemelen kararın kendisi kadar önemlidir.

Bunun kapsamlı bir yazı olması gerekmez; ancak son gözden geçirmede "... düşündünüz mü?" sorusunu duymak istemezsiniz, çünkü (yukarıdaki gibi) bu güvenilirlik kaybına ve diğer mimari kararların sorgulanmasına yol açar.

## Sonuçlar

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

Kararınızın sonuçlarını açıkça belirtin. Bu, destek kazanmada ve uygulama için bir yol haritası oluşturmada çok etkili olabilir.

Örneğin bir karar, başka kararlar alma ihtiyacı doğurabilir, yeni gereksinimler oluşturabilir veya mevcut gereksinimleri değiştirebilir; ortama ek kısıtlar getirebilir; müşterilerle kapsamın veya takvimin yeniden müzakere edilmesini ya da ek personel eğitimini gerektirebilir.

## İlgili kararlar

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

İlgili kararları buraya listeleyin.

Uygulamada izlenebilirlik matrisinin, karar ağaçlarının veya meta modellerin daha yararlı olduğunu gördük. Meta modeller, karmaşık ilişkileri diyagram olarak göstermek için yararlıdır (Rose modelleri gibi).

## İlgili gereksinimler

Özet: bu bölümü kısaca açıklayın ve ideal olarak uç değerleri vurgulayın.

İlgili gereksinimleri buraya listeleyin.

Bir izlenebilirlik matrisine başvurmayı daha kullanışlı bulduk. Her kararın her gereksinimin karşılanmasına katkısını değerlendirebilir, ardından gereksinimin tüm kararlar boyunca ne kadar iyi karşılandığını değerlendirebilirsiniz. Bir karar bir gereksinimin karşılanmasına katkıda bulunmuyorsa, o kararı vermeyin.

## İlgili çıktılar

İlgili çıktıları buraya listeleyin.

Örnekler, bu kararın etkilediği kapsam belgeleri, planlama belgeleri, iş süreci modelleri vb.dir.

## İlgili ilkeler

Kurumun üzerinde uzlaşılmış bir ilkeler kümesi varsa, kararın bunlardan bir veya daha fazlasıyla tutarlı olduğundan emin olun. Bu, alanlar veya sistemler arasında uyumun sağlanmasına yardımcı olur.

## İlgili notlar

Karar verme süreçleri hatırı sayılır zaman alabileceğinden, ekibin sosyalleştirme sürecinde tartıştığı notları ve konuları kaydetmeyi yararlı bulduk.
```
