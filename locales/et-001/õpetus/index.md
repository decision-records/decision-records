# Õpetus: kirjuta oma esimene otsusekirje

See on praktiline läbimine juhile, kes pole kunagi otsusekirja kirjutanud. See kasutab realistlikku äristsenaariumi — mitte tarkvaranäidet — sest otsusekirjed on üldine juhtimisvahend. Lõpuks oled kirjutanud ühe päris kirje ja tead, kuidas tava oma meeskonnale tutvustada.

Hinnanguline aeg: 20 minutit 1. osa jaoks pluss pidev harjutamine 2.–4. osa jaoks.

Sisukord:

* [1. osa: kirjuta üks otsusekirje (20 minutit)](#1-osa-kirjuta-üks-otsusekirje-20-minutit)
* [2. osa: lase see üle vaadata ja kinnitada](#2-osa-lase-see-üle-vaadata-ja-kinnitada)
* [3. osa: alusta otsuste logi](#3-osa-alusta-otsuste-logi)
* [4. osa: kehtesta ülevaatuse rütm](#4-osa-kehtesta-ülevaatuse-rütm)
* [Täielik läbitöötatud stsenaarium](#täielik-läbitöötatud-stsenaarium)

## 1. osa: kirjuta üks otsusekirje (20 minutit)

Vali päris otsus, mille ees sa praegu seisad — ideaalis selline, mis on juba veidi vaieldav, et tunneksid väärtust kohe. Kui midagi pähe ei tule, kasuta selle õpetuse jooksvat näidet: **"Kas peaksime palgaarvestuse teenusepakkujat vahetama?"**

### 1. samm: pealkiri (2 minutit)

Kirjuta lühike, aktiivne pealkiri olevikus. Mitte küsimus, vaid väide lõpliku otsuse kohta:

> Vaheta palgaarvestuse teenusepakkuja [pakkuja] vastu

Ära muretse, kui sa pole veel kindel — saad pealkirja muuta, kui otsus langeb.

### 2. samm: staatus ja metaandmed (1 minut)

```markdown
* Staatus: kommentaaride küsimine
* Kuupäev: 2026-08-19
* Otsustaja(d): finantsdirektor
* Omanik: personalitegevuse juht
```

Otsustaja nimetamine nüüd — enne arutelu — väldib vaidlust volituse üle pärast seda, kui arvamused on juba kõvastunud.

### 3. samm: taust (5 minutit)

Kirjuta olukord nii, nagu selgitaksid seda uuele töötajale, kellel pole mingit tausta:

> Meie praegune palgaarvestuse teenusepakkuja on viimase aasta jooksul jätnud kaks esitamistähtaega
> täitmata, mis tõi kahes osariigis kaasa viivisetrahve. Meie leping pikeneb 60 päeva pärast.
> Rahandus ja personalitegevus on nõus, et praegune pakkuja on risk, kuid on eri meelt
> kiireloomulisuse osas ja selles, kas vahetus sel kvartalil on väärt avatud registreerimisperioodi
> segamist.

Pane tähele, et see ei kaitse veel kindlat vastust — see lihtsalt esitab mängus olevad jõud.

### 4. samm: kaalutud võimalused (5 minutit)

Loetle päris alternatiivid, sealhulgas "ära tee midagi", ausate kompromissidega:

> * **Jää praeguse pakkuja juurde, taasläbirääkimine SLA-de üle** — väikseim segadus, kuid
>   ei lahenda algpõhjust; pakkuja ei ole varasematele eskalatsioonidele reageerinud.
> * **Vaheta pakkuja B vastu** — tugevam vastavuse tulemuste ajalugu, kuid juurutus
>   kattub avatud registreerimisega, lisades sellele protsessile riski.
> * **Vaheta pakkuja C vastu** — parem hind, kuid märgatavalt väiksem tugimeeskond ja
>   kaks soovituskõnet tõstatasid muret reageerimisaegade pärast.

Kui märkad, et kirjutad ainult ühe päris võimaluse ja kaks õlgmeest, siis peatu — see on märk, et otsus on juba mitteametlikult tehtud ja kirjet kasutatakse selle õigustamiseks, mitte teritamiseks. Mine tagasi ja küsi kõigepealt alternatiivide kohta teist arvamust.

### 5. samm: otsus (2 minutit)

Kui otsustaja on tegelikult otsustanud (see ei pruugi juhtuda samal istumisel kui sammud 1–4), kirjuta see selges aktiivses keeles:

> Me vahetame pakkuja B vastu, juurutus algab pärast avatud registreerimise lõppu.

### 6. samm: tagajärjed (5 minutit)

Esita, mis muutub, mitte ülalpool juba käsitletud kompromisside kordus:

> * Praegune leping tuleb öelda üles 30 päeva ette enne uue perioodi algust.
> * Personalitegevus teeb enne üleminekut paralleelse palgatsükli testi.
> * Avatud registreerimise ajakava on kaitstud; vahetus järjestatakse pärast selle lõppu.
> * Aktsepteerime kokkusurutud juurutusakent vastutasuks vastavusriski vähenemise eest —
>   see on kompromiss, mille me selgesõnaliselt valime.

See on täielik kerge otsusekirje. Võrdle seda [malliga](../mall/index.md#kerge-mall) — peaksid suutma iga jaotist vastavusse viia.

## 2. osa: lase see üle vaadata ja kinnitada

1. Jaga mustandit tegelike huvirühmadega (siin: rahandus, personalitegevus ja kõik, keda vahetus mõjutab) selge palve ja tähtajaga: *"Kommentaarid reedeks; pärast seda märgin selle kinnitatuks, kui midagi olulist ei muutu."*
2. Jäädvusta uus teave kuupäevaga lisandusena, selle asemel et varasemaid jaotisi vaikselt ümber kirjutada — see säilitab põhjenduste jälje.
3. Kui otsustaja kinnitab, muuda `Staatus` väärtuseks `kinnitatud` ja märgi lõplik kuupäev.

## 3. osa: alusta otsuste logi

Üksik otsusekirje on kasulik üks kord. **Otsuste logi** — kõigi sinu meeskonna kirjete kogum — on kasulik igavesti.

1. Loo vastupidav, jagatud asukoht: kaust `decisions/` sinu meeskonna olemasolevas jagatud draivis, vikiruumis või versioonihallatud hoidlas. Kasuta seda, mida sinu meeskond juba iga päev avab — parim tööriist on see, mida inimesed tegelikult kasutavad.
2. Salvesta iga uus kirje selge, sorteeritava nimega, nt `2026-08-19-switch-payroll-provider.md`.
3. Hoia registrilehte, mis loetleb iga kirje pealkirja, staatuse ja kuupäevaga — vaata [näited/index.md](../näited/index.md) selle mustri töötava näite jaoks.
4. Mõned meeskonnad leiavad, et sõna "otsused" (sõna "kirje" täielikult ära jättes) paneb tava tunduma loomulik, mitte tehnikast laenatuna — kasuta nime, mis paneb sinu meeskonna neid tegelikult kirjutama.

## 4. osa: kehtesta ülevaatuse rütm

Otsused vananevad. Kehtesta kerge juhtimisrütm, et logi jääks usaldusväärseks ega muutuks vananenud valikute surnuaiaks:

* **Kirje omanik** vaatab oma kirjeid üle vähemalt kord aastas või kui aluseks olev olukord oluliselt muutub.
* **Kui otsus tühistatakse või asendatakse**, kirjuta uus kirje ja sea vana staatuseks `asendatud`, viidates asendajale. Ära kunagi kustuta vaikselt — lugu sellest, *miks me meelt muutsime*, on sageli väärtuslikum kui praegune vastus.
* **Kord kvartalis või aastas** kammi kogu logi läbi kirjete osas, mis on endiselt märgitud `kommentaaride küsimine` või `ettepandud` ja mida pole kunagi lahendatud, ning kas sulge need või arhiveeri selgesõnaliselt.

Vaata [kontrollnimekirja](../kontrollnimekiri/index.md) kõigi nelja ülaltoodud osa kokkusurutud ja korratava versiooni jaoks.

## Täielik läbitöötatud stsenaarium

Sarnase otsuse täidetud näite jaoks vaata [näited/index.md](../näited/index.md) — näiteks näidet [Ise arendada või osta projekti jaoks](../näited/ise-arendada-või-osta/). See kasutab põhjalikku malli, kus Tagajärjed vastavad ülaltoodud jaotisele Tagajärjed, ja see on pooleliolev töö, mis näitab, kuidas meeskond otsusega edasi liigub, mitte valmis kirje.
