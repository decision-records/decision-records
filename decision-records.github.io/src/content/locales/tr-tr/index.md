# Karar kaydı (DR)

Karar kaydı (decision record, DR), önemli bir seçimi bağlamı ve sonuçlarıyla birlikte başlatmanın, tartışmanın ve arşivlemenin bir yoludur.

İçindekiler:

- [Karar kaydı nedir?](#karar-kaydı-nedir)
- [Karar kaydı şablonu](#karar-kaydı-şablonu)
- [Karar kayıtlarını kullanmaya nasıl başlanır?](#karar-kayıtlarını-kullanmaya-nasıl-başlanır)
- [Karar kayıtları neden sıradan notlardan daha iyidir?](#karar-kayıtları-neden-sıradan-notlardan-daha-iyidir)
- [Karar kayıtlarını araçlarla kullanmaya nasıl başlanır?](#karar-kayıtlarını-araçlarla-kullanmaya-nasıl-başlanır)
- [Yapay zekâ becerileri](#yapay-zekâ-becerileri)
- [Karar kaydı yazmak için iyi öneriler](#karar-kaydı-yazmak-için-iyi-öneriler)
- [Karar kayıtları için ekip çalışması tavsiyeleri](#karar-kayıtları-için-ekip-çalışması-tavsiyeleri)
- [Karar kayıtları için ekip çalışması soruları](#karar-kayıtları-için-ekip-çalışması-soruları)
- [Daha fazla bilgi için](#daha-fazla-bilgi-için)

Bu depoda neler var:

- [kılavuz](kılavuz) - karar kaydının ne olduğu, insanların neden kullandığı, yaşam döngüsü, yönetişim ve daha fazlası.
- [şablon](şablon) - markdown biçimlendirmeli ve adım adım önerili, kopyalayıp yapıştırılabilir şablon.
- [eğitim](eğitim) - uygulamalı, adım adım bir anlatım: ilk karar kaydınızı 20 dakikadan kısa sürede yazın.
- [örnekler](örnekler) - strateji, satış, pazarlama, ürün, insan kaynakları, risk, proje ve teknoloji kararlarına dair başlangıç örnekleri (devam eden çalışmalar, tamamlanmış kararlar değil).
- [kontrol listesi](kontrol-listesi): bir kayıt yazıp yazmamaya karar vermek, iyi yazmak, gözden geçirmek ve uygulamayı kurum genelinde yürütmek için kontrol listeleri.
- [yardım](yardım) — bu uygulamayı benimseyen liderlerin sık sorduğu sorular için SSS, sorun giderme ve sözlük.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — bu deponun belirtimi: yerleşim, içerik, yerel ayarlar, web sitesi ve ajanlar.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — içerik, her yerel ayar için bir dizin; `en-us` İngilizce esas kaynaktır.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — bu deponun şablonlarını ve kontrol listelerini bir yapay zekâ asistanı içinde uygulayan Claude Skills: biri karar kaydı yazmak için, biri bu depoyu sürdürmek için.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — yukarıdaki becerileri tanıtan [decision-records.github.io](https://decision-records.github.io) sitesinin SvelteKit 3 kaynağı.

## Karar kaydı nedir?

**Karar kaydı** (DR), önemli bir seçimi bağlamı ve sonuçlarıyla birlikte başlatmanın, tartışmanın ve arşivlemenin bir yoludur.

**Karar günlüğü** (DL), belirli bir proje (veya kurum) için oluşturulan ve sürdürülen tüm DR'lerin toplamıdır.

Bu bağlamda **karar**, bir kurumun önemli bir gereksinimi karşılayan seçimidir.

**Önemli gereksinim** (SR), bir projenin sistemi üzerinde ölçülebilir etkisi olan proje ihtiyacıdır.

Bu terimlerin hepsi **bilgi yönetimi** (KM) konusunun içindedir.

Bu belgenin amacı, karar kayıtlarına hızlı bir genel bakış sunmaktır.

## Karar kayıtları kurumlar için çalışma biçimleridir

Bir seçimin geri alınması zorsa, başkalarını etkiliyorsa veya ileride sorgulanacaksa, bir karar kaydını hak eder.

- Strateji: Bir pazara girmek veya pazardan çıkmak, büyüme ile kârlılık arasında duruş seçmek, 3 yıllık bir bahis belirlemek
- Satış: Bölge modelini değiştirmek, bir CRM seçmek, prim yapısını yeniden kurmak
- Pazarlama: Bir markayı yeniden konumlandırmak, kanal karmasını seçmek, ajans ile şirket içi model arasında seçim yapmak
- Ürün: Fiyatlandırma modelini belirlemek, yapmak ya da satın almak arasında seçmek, bir özelliği veya ürün hattını kaldırmak
- Finans: Finansman yapısını seçmek, sermaye tahsisi politikası belirlemek
- İnsan Kaynakları: Uzaktan çalışma politikası belirlemek, kademe ve ücret bantlarını yeniden tasarlamak
- Risk ve Hukuk: Belirli bir riski kabul etmek, azaltmak veya aktarmak; tedarikçi yoğunlaşma sınırı seçmek
- Operasyonlar: Yapmak ya da satın almak, içeride ya da dışarıda yürütmek, teslimat metodolojisi seçmek
- Halkla İlişkiler: Kriz iletişimi duruşu seçmek, medya ilişkileri politikası belirlemek
- Mesleki Gelişim: Terfi veya eğitim yatırımı politikası belirlemek
- Teknoloji: Bir bulut sağlayıcısı veritabanı, bir entegrasyon deseni, bir yazılım metodolojisi seçmek

Ekibinizden birinin bir yıl sonra "dur bir dakika, bunu neden böyle yaptık?" diye sorduğunu hayal edebiliyorsanız, o karar bir karar kaydı için adaydır.

## Karar kaydı şablonu

Şu ana bölümleri kullanan [şablon](şablon/index.md) dosyamıza bakın:

- **Başlık**: en fazla 50 karakterlik, şimdiki zamanda kısa emir kipi.

- **Durum**: görüş talebi | önerildi | kabul edildi | reddedildi | kullanımdan kaldırıldı | yerini aldı

- **Konu**: ele almak istediğiniz konuyu, nedeni hakkında soru kalmayacak biçimde açıklayın.

- **Varsayımlar**: varsayımları, önkoşulları, projeler arası gereksinimleri vb. açıklayın.

- **Kısıtlar**: bu kararın ortama getirebileceği kısıtları kaydedin.

- **Konumlar**: olası aday seçenekleri görüş olarak değil, olgu ve veri olarak listeleyin.

- **Görüşler**: ekibin ve paydaşların, ayrıca üçüncü taraf danışmanların ve gözden geçirenlerin görüşleri.

- **Seçim**: bir konumu neden seçtiğinizi amaç ve hesap verebilirlikle açıklayın.

- **Sonuçlar**: kararınızın değişiklik ihtiyacı gibi sonuçlarını belirtin.

- **İlgili**: kaynaklar, projeler arası çalışmalar ve devam eden ihtiyaçlar gibi.

## Karar kayıtlarını kullanmaya nasıl başlanır?

Karar kayıtlarını kullanmaya başlamak için ekip arkadaşlarınızla şu alanları konuşun.

Kararın belirlenmesi:

- Karar ne kadar acil ve ne kadar önemli?

- Şimdi mi verilmeli, yoksa daha fazlası öğrenilene kadar beklenebilir mi?

- Hem kişisel ve ortak deneyim hem de kabul görmüş tasarım yöntemleri ve uygulamaları kararın belirlenmesine yardımcı olabilir.

- İdeal olarak, ürün yapılacaklar listesini tamamlayan bir karar yapılacaklar listesi tutun.

Karar verme:

- Hem genel hem de yazılıma özgü birçok karar verme tekniği vardır, örneğin diyalog haritalama.

- Grup karar verme, etkin bir araştırma konusudur.

Kararın uygulanması ve yaptırımı:

- Kararlar, sistemi finanse eden, geliştiren ve işleten paydaşlara iletilmeli ve onlar tarafından kabul edilmelidir.

- Mimari açıdan belirgin kodlama stilleri ve mimari kaygılara ve kararlara odaklanan kod gözden geçirmeleri iki ilgili uygulamadır.

- Kararlar, bir sistemde önemli değişiklikler yapılırken, örneğin sistem geliştirilirken, yükseltilirken veya değişen gereksinimlere uyarlanırken yeniden ele alınabilir.

Kararın paylaşılması (isteğe bağlı):

- Birçok karar projeler arasında tekrarlanır.

- Bu nedenle, geçmiş kararlara ilişkin iyi ya da kötü deneyimler, açık bir bilgi yönetimi stratejisi uygulandığında yeniden kullanılabilir değerli varlıklar olabilir.

- Grup karar verme, etkin bir araştırma konusudur.

Kararın belgelenmesi:

- Karar planlama ve karar kaydetme için birçok şablon ve araç vardır.

- Çevik topluluklara bakın, örneğin M. Nygard'ın mimari karar kayıtları.

- Geleneksel yazılım mühendisliği ve mimari tasarım süreçlerine bakın, örneğin IBM UMF'nin ve CapitalOne'dan Tyree ile Akerman'ın önerdiği tablo düzenleri.

Karar rehberliği:

- Yukarıdaki adımlar, Vikipedi'deki [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) maddesinden alınmıştır.

- Hem genel hem de yazılıma ve yazılım mimarisine özgü birçok karar verme tekniği vardır, örneğin diyalog haritalama.

## Karar kayıtları neden sıradan notlardan daha iyidir?

Karar kaydı, serbest biçimli notlara bir miktar yapı katar.

Karar kaydı şablonu, kontrol listesi işlevi gören, ele alınacak maddelerin bir listesini ekler.

Önemli sonuç şudur: ekipler karar kayıtlarını ve şablonları ekip çalışmasını iyileştirmek için kullanabilir; karar kayıtları ve şablonlar birer kontrol listesi olarak çalışır, ekibin tüm noktaları kapsadığından emin olmasına yardımcı olur ve verimli ve etkili iletişim kurulmasını sağlar.

Karar kayıtlarının avantajları; ekip büyüklüğü, proje genişlemesi, entegrasyon fırsatları, paydaş katılımı, uzun vadeli bakım ve zaman içindeki evrimle birlikte artma eğilimindedir.

Örneğin karar kayıtlarını büyük ekiplerle, birden çok departmanda, birden çok ortak kurumla, çok yıllı projelerde ve milyon dolarlık bütçelerle kullanıyoruz. Bu büyüklükte ve kapsamda, yalnızca serbest biçimli notlar yerine bir tür yapılandırılmış iletişimi tercih ediyoruz.

Uygulamada karar kayıtlarını ayrıca, uzaktaki ekip arkadaşlarının daha fazla katılımını, daha fazla eşzamansız iletişimi, seçeneklerin daha verimli değerlendirilmesini ve ileriye dönük daha fazla özetlemeyi teşvik ettikleri için seviyoruz. Kararlar açık, eksiksiz, özlü ve kayıtlı olduğundan, tüm bu yönler yeni ekip arkadaşlarının uyumuna da yardımcı olur.

## Karar kayıtlarını araçlarla kullanmaya nasıl başlanır?

Karar kayıtlarını araçlarla istediğiniz şekilde kullanmaya başlayabilirsiniz.

Örneğin:

- Google Drive ve Google Docs'u seviyorsanız, bir `decisions` klasörü ve her karar kaydı için bir belge oluşturun.

- Kaynak kod sürüm denetimini seviyorsanız, bir `decisions` dizini ve her karar kaydı için bir metin dosyası oluşturun.

- Atlassian Jira gibi proje planlama araçlarını seviyorsanız, aracın planlama izleyicisini kullanın.

- MediaWiki gibi vikileri seviyorsanız, her karar kaydı için bir viki sayfası olan bir karar kaydı vikisi oluşturun.

## Yapay zekâ becerileri

[Claude Code](https://claude.com/claude-code) veya [Claude Skills](https://code.claude.com/docs/en/skills) destekleyen başka bir ajan kullanıyorsanız, bu depo [skills](https://github.com/decision-records/decision-records/tree/main/skills) içinde yapay zekâ için iki beceri sunar:

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — karar kaydı yazan herkes için. Bir seçim için kayıt gerekip gerekmediğini, hafif ya da kapsamlı şablonun seçilmesini, taslağın hazırlanmasını, dosyalanmasını ve yayın öncesi kontrol listesini adım adım anlatır.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — bu deponun kendisini sürdürenler için: çalışılmış örnek eklemek, örnekler dizinini ve çapraz başvuruları tutarlı tutmak ve bu deponun dosya kuralları.

Birini kullanmak için bu depoyu klonlayın ve istediğiniz beceri klasörünü ajanınızın proje becerilerini yüklediği yere kopyalayın (Claude Code için genellikle kendi projenizdeki `.claude/skills/<name>`), ardından asistanınızdan onu kullanmasını isteyin. Daha fazlası için [decision-records.github.io/skills](https://decision-records.github.io/skills/) sayfasına, o sayfanın kaynağı için [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) adresine bakın.

## Karar kaydı yazmak için iyi öneriler

İyi bir karar kaydının nitelikleri:

- Zamanda bir nokta - Kararın ne zaman verildiğini belirtin

- Akılcılık - Belirli kararın neden verildiğini açıklayın.

- Değişmez kayıt - Daha önce yayımlanmış bir karar kaydında verilen kararlar değiştirilmemelidir.

- Belirginlik - Her karar kaydı tek bir karar hakkında olmalıdır.

Karar kaydındaki iyi bir bağlamın nitelikleri:

- Kurumunuzun durumunu ve iş önceliklerini açıklayın

- Ekiplerinizin sosyal yapısına ve beceri bileşimine dayalı gerekçeleri ve değerlendirmeleri ekleyin.

Karar kaydındaki iyi sonuçların nitelikleri:

- Doğru yaklaşım - "Y yerine X yapmaya başlamalıyız"

- Yanlış yaklaşım - Kararı, ilgili mimari kararın "Artıları" ve "Eksileri" üzerinden açıklamayın

Yeni bir karar kaydı, önceki bir karar kaydının yerini alabilir:

- Önceki bir karar kaydının yerini alan veya onu geçersiz kılan bir karar verildiğinde, yeni bir karar oluşturun ve eski karara başvurun.

## Karar kayıtları için ekip çalışması tavsiyeleri

Ekibinizle karar kayıtlarını kullanmayı düşünüyorsanız, birçok ekiple çalışarak öğrendiğimiz bazı tavsiyeler şunlardır.

"Ne"yi dayatmak yerine "neden"i birlikte konuşarak ekip arkadaşlarınıza liderlik etme fırsatınız var. Örneğin karar kayıtları, ekiplerin daha akıllıca düşünmesinin ve daha iyi iletişim kurmasının bir yoludur; olay olduktan sonra zorla yapılan bir kâğıt işi gereksinimiyse değerli değildir.

Bazı ekipler "karar kayıtları" kısaltması yerine "kararlar" adını çok daha fazla tercih eder. Bazı ekipler "decisions" dizin adını kullandığında sanki bir ampul yanar ve ekip dizine tedarikçi kararları, planlama kararları, zamanlama kararları gibi daha fazla bilgi koymaya başlar. Bu bilgi türlerinin hepsi aynı şablonu kullanabilir. İnsanların kısaltmalardan ("karar kayıtları") çok sözcüklerle ("kararlar") daha hızlı öğrendiğini, "kayıt" sözcüğü kaldırıldığında insanların yarım kalmış belgeleri yazmaya daha istekli olduğunu ve bazı geliştiricilerle yöneticilerin "mimari" sözcüğünden hoşlanmadığını varsayıyoruz.

Kuramda değişmezlik idealdir. Uygulamada ise değişebilirlik ekiplerimiz için daha iyi çalıştı. Yeni bilgiyi, tarih damgası ve bilginin karardan sonra geldiğini belirten bir notla mevcut karar kaydına ekliyoruz. Bu yaklaşım, hepimizin güncelleyebileceği "yaşayan bir belge" ortaya çıkarır. Tipik güncellemeler; yeni ekip arkadaşları, yeni teklifler veya kullanımlarımızın gerçek dünya sonuçları sayesinde bilgi edindiğimizde ya da tedarikçi yetenekleri, fiyat planları, lisans sözleşmeleri gibi karardan sonraki üçüncü taraf değişikliklerinde yapılır.

</div>

## Karar kayıtları için ekip çalışması soruları

### Karar kaydını kim oluşturabilir?

Belirli kişiler, belirli roller, belirli ekipler veya belirli departmanlar gibi alanları düşünün; ayrıca bir karar kaydını görevlendirebilecek, yani başkasının yazacağı bir kayıt isteyebilecek kişiler, roller, ekipler veya departmanlar olup olmadığını da düşünün.

Örnek yanıt: Kurumumuzda mimari karar kaydı README sayfasını okumuş herkes bir karar kaydı önerebilir; yani yazmaya başlayabilir ve ekiple paylaşabilir.

### Karar kaydı açmayı ne haklı kılar?

Kurumunuzun ekip çalışma biçimleri, yazılım sistemi yapınız, ekipler arası koordinasyon, uzun vadeli sürdürülebilirlik, dış arayüzler, kimin yararlanmasını istediğiniz gibi alanları düşünün.

Örnek yanıt: Gelecekteki geliştiricilerin yaptığımız şeyin "nedenini" anlamasını istediğimizde bir karar kaydı oluşturmak isteriz.

### Karar kaydı açmamayı ne haklı kılar?

Mimariyle ilgili olmayan kararlar, küçük kararlar (örneğin asgari riskli, kendi içinde kapalı veya tek geliştiricili), standartlar, politikalar veya belgelerle zaten tamamen kapsanmış kararlar ya da geçici olanlar (örneğin geçici çözümler, kavram kanıtları veya denemeler) gibi alanları düşünün.

Örnek yanıt: Bir karar kapsam, zaman, risk ve maliyet bakımından sınırlıysa veya başka yerde zaten kapsanıyorsa karar kaydını atlamak isteriz.

### Karar kaydının yaşam döngüsü nedir?

Oluşturma süreci, araştırma süreci, karar verme süreci, uygulama süreci ve sonlandırma süreci gibi alanları düşünün. Karar kaydı yaşam döngüsünü zaman içinde nasıl izleyeceğinizi, yani karar kaydını bir durumdan sonrakine nasıl taşıyacağınızı ve bunu paydaşlara nasıl ileteceğinizi de düşünün.

Örnek yanıt: Bir karar kaydının beş yaşam döngüsü aşaması olmasını istiyoruz: Başlatma → Araştırma → Değerlendirme → Uygulama → Sürdürme → Sonlandırma.

### Karar kaydının yaşam döngüsü adımları için ölçütler nelerdir?

Bir karar kaydı için kabul ölçütleri gibi alanları düşünün; yani bir yaşam döngüsü adımından sonrakine ilerlemek için yeterince iyi olduğunu nasıl bilirsiniz? Sorun açıkça ifade edilmiş mi? Alternatifler ele alındı mı? Ödünleşimler yeterince anlaşıldı ve belgelendi mi?
Tüm ilgili bağlam yerinde mi? Tüm ilgili paydaşlar dahil mi? Tüm geri bildirimler dahil edildi mi?

Örnek yanıt: Etkin ekip 1) araştırmasını tamamladığında, 2) değerlendirmesini tamamladığında, 3) karar kaydı önerisini paydaşlara görüş talebi ve bir haftalık süreyle yayımladığında, 4) tüm paydaş yorumları dahil edilip ele alındığında, karar kaydının paydaşlarca oylanmasını isteriz.

### Karar kaydıyla hangi roller ve sorumluluklar etkileşir?

Öneren, araştırmacı, değerlendirici, gözden geçiren, onaylayan, sürdüren gibi rolleri düşünün. Paydaşlarla iletişim, beklentilerin karşılandığından emin olma, web sitesinde veya kurum içi ağda paylaşma ve işi düzenli olarak, özellikle de ilgili değişiklikler olduğunda gözden geçirme gibi sorumlulukları düşünün.

Örnek yanıt: Her karar kaydının her zaman bir birincil iletişim kişisi, bir ikincil iletişim kişisi ve bir sorumlu ekibi olmasını istiyoruz; bunlar iletişimden, yayımlamadan, bakımdan, en az yılda bir kez düzenli gözden geçirmeden ve gerektiğinde nihai sonlandırmadan sorumludur.

### Yönetişim karar kaydıyla nasıl etkileşir?

Kurumunuzun çalışma biçimleri, hukuki veya insan kaynakları yönleri gibi özel uyum ihtiyaçları, uzlaşmayı, çatışmayı ve üst makama taşımayı nasıl ele almak istediğiniz gibi alanları düşünün. Bir karar kaydı konusunda başkalarından daha fazla etkisi olabilecek, örneğin onaylayabilecek, oylayabilecek veya veto edebilecek alanlar, kişiler veya ekipler var mı?

Örnek yanıt: Bir karar kaydının yönetişimi şu öncelik sırasındadır: CEO, CTO, CLO, karar kaydını uygulayan ekip, ekipte ADD konusunda en bilgili uzmanlar. Karar kaydında belirtilmedikçe kimsenin yönetişim yetkisi yoktur.

### Karar kaydıyla hangi ilkeler etkileşir?

Kurumunuzun hızlı ya da yavaş hareket etme, karar uzlaşması ya da karar çatışması, risk tercihleri ya da güvenlik tercihleri, kamusal tartışma ya da özel tartışma gibi çalışma biçimlerini düşünün.

Örnek yanıt: Eyleme yönelik eğilim, itiraz et ve bağlı kal, kolay geri alınabilir ve kolay yalıtılabilir kararlar için %70 tahminin yeterince iyi olması ve kurumumuzun gizlilik sözleşmesinde açıklanan gizli bilgiler dışında kamusal çalışma biçimleri liderlik ilkelerini kullanırız.

## Daha fazla bilgi için

Giriş:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Şablonlar:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Derinlemesine:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modelling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Sceptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - ücretsiz aylık yazılım mimarisi dersi

Araçlar:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Şirkete özgü rehberlik:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organisation](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Örnekler:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videolar:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast'ler:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Kitaplar:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Ayrıca bakın:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM'in e-Business Reference Architecture Framework çerçevesi
