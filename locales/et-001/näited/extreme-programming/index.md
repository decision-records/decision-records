# Extreme Programming

* Staatus: kommentaaride küsimine
* Kuupäev: 2025-10-06
* Otsustaja(d): arendusjuht (tuleb kinnitada)
* Omanik: arendusmeeskonna juht

Kokkuvõte: Pooleliolev töö. See on lähtepunkt arendusmeeskonnale, kes kaalub Extreme Programmingu (XP) tavade, nagu testidepõhine arendus, paarisprogrammeerimine, pidev integratsioon ja väikesed väljalasked, kasutuselevõttu. See näitab, kuidas meeskond saab küsimust raamistada, võimalusi arutada ja teavet koguda. See ei talleta otsust.

## Küsimus

Tootemeeskonnad tarnivad funktsioone suurte partiidena ja hilja leitud defektid on kallid: märkimisväärne osa väljalasetest vajab pärast väljalaset kiireloomulist parandust. Arendusjuhid on huvitatud Extreme Programmingu tavadest, agiilsest tarkvaraarendusmeetodist, mis rõhutab tehnilisi tavasid nagu testidepõhine arendus, paarisprogrammeerimine, pidev integratsioon, väikesed väljalasked, refaktoreerimine ja koodi ühine omandus.

Need tavad toetavad üksteist, kuid muudavad ka seda, kuidas arendajad iga päev töötavad. Kõigi korraga kasutusele võtmine kohtab tõenäoliselt vastuseisu ja tehakse pealiskaudselt. Küsimused, millele tuleb vastata:

* Milliseid probleeme tahame lahendada (hilised defektid, aeglane tagasiside, teadmised vähestel inimestel) ja millised tavad neid käsitlevad?
* Mis järjekorras tuleks tavasid kasutusele võtta ja kes läheb esimesena?
* Mida me mõõdaksime, et teada, kas tavad aitavad?
* Milline on õige tasakaal jagatud standardi ja iga meeskonna valiku vahel?

## Eeldused

Iga eeldus on midagi, mida testida.

* **Hilised defektid on põhjustatud peamiselt kiire automatiseeritud tagasiside puudumisest.** Test: jälgi kiireloomuliste parandusi valimit tagasi sinna, kus defekti oleks saanud tabada.
* **Põhitavad (pidev integratsioon ja automaattestid) teevad teised võimalikuks.** Test: küsi meeskondadelt, kes on tavasid proovinud, millised sõltusid millistest.
* **Arendajad võtavad omaks tavad, mida nad näevad kõrval olevas meeskonnas töötamas.** Test: küsi arendajatelt, mis neid veenaks ja mis neid muretsema paneb.
* **Kiireloomuliste paranduste hulk pärast väljalaset on õiglane edu mõõdik.** Test: lepi kokku, kuidas seda loetakse, ja kontrolli, et teised mõõdikud (tarneaeg, muudatuste ebaõnnestumise määr) ei räägi teist lugu.

## Piirangud

* Meeskonnad peavad õppimise ajal ikkagi funktsioone tarnima, nii et väljund esimesel perioodil on tõenäoliselt madalam.
* Arendajad peaksid säilitama valikuvabaduse selles, kuidas nad paarisprogrammeerivad ja milliseid tööriistu kasutavad.
* Olemasolev ehitus- ja testimistaristu võib vajada tööd, enne kui pidev integratsioon on kasulik.
* Teadmata, tuleb kinnitada: kui suur osa koodibaasist on täna testitav ja kas regulatiivsed või kliendipiirangud mõjutavad väljalaskesagedust.

## Kaalutud võimalused

Iga võimaluse puhul hinda väärtust, kulusid, ajakava ja vajalikke võimekusi ning märgi, milline tõend meeskonna meelt muudaks.

* **Võta kõik tavad kasutusele korraga igas meeskonnas.**
  * Väärtus: tavad tugevdavad üksteist.
  * Kuluallikad: koolitus; aeglasem tarne õppimise ajal; tööriistatöö kõigis meeskondades korraga.
  * Riskid: suur muutus; meeskonnad, kellel puuduvad aluseks olevad oskused, võivad tavad nädalate jooksul hüljata.
* **Võta tavad kasutusele valitud järjekorras, meeskond meeskonna haaval.** Näiteks pidev integratsioon ja automaattestid kõigepealt (alused), seejärel väikesed väljalasked ja paarisprogrammeerimine, seejärel testidepõhine arendus.
  * Väärtus: igale tavale jääb aega paigale sättida; varased teevad hilisemad võimalikuks; esimese meeskonna kogemus juhatab ülejäänuid.
  * Kuluallikad: juhendamine; paarimise ja testide kirjutamise aeg plaanidesse sisse ehitatud; taristutöö torujuhtme jaoks.
  * Ajakava kuju: järjestikune, kusjuures järgmine meeskond liitub, kui eelmine on oma väljalasketorujuhet kindlaksmääratud perioodi tervena hoidnud.
  * Vajalikud võimekused: juhendaja; usaldusväärne ehitustorujuhe; juhtide toetus väljundi languse suhtes.
  * Riskid: aeglane; tavad võetakse kasutusele ebaühtlaselt.
* **Võta kasutusele ainult lihtsad tavad.** Väike vaev, kuid võib jätta vahele need, millel on suurim kasu, näiteks automaattestimine.
* **Võta kasutusele teistsugune tavade kogum** (näiteks need, mida kirjeldab DORA uuring tarkvara tarne kohta, nagu pidev tarne, tüvepõhine arendus ja lõdvalt seotud arhitektuur) ja käsitle XP-d ühe allikana mitme seas.
* **Ära tee midagi uut** ja käsitle defektide konkreetseid põhjuseid otse. Tõeline lähtejoon.

## Argumentatsioon

Aruteluteemad, mida meeskond peaks ootama:

* **Paarisprogrammeerimine.** Tava, mille suhtes paljud arendajad on ettevaatlikud. Kus see aitab (teadmiste jagamine, keeruline töö) ja kus mitte?
* **Standardiseerida või lasta meeskondadel valida?** Jagatud tulemused (vähem kiireloomulisi parandusi, kiirem tagasiside) meeskonna vabadusega nende saavutamisel või rangem standard?
* **Kvaliteet versus kiirus lühiajaliselt.** Kas juhid on valmis madalamat väljundit aktsepteerima, kuni meeskonnad õpivad?
* **TDD, vahend või eesmärk?** Mõned tavad (näiteks testidepõhine arendus) on vaieldavad isegi kogenud praktikute seas. Meeskond peaks otsustama, millist probleemi tava käsitleb, enne kui seda kasutusele võtab.

Kuidas meeskond saaks kulusid ja kompromisse hinnata:

1. Arvuta praeguse lähenemise kulu: kiireloomuliste paranduste peale kulunud vaev, hiliste defektide põhjustatud viivitused, mõju klientidele. Kasuta vahemikke organisatsiooni enda terminites.
2. Arvuta programmi kulu: juhendamine, koolitus, paaritöö ja testide aeg, torujuhtme taristu ja tarne ajutine langus.
3. Vali mõõdikud kõigepealt: kiireloomulisi parandusi vajavate väljalaskete osakaal, muudatuste tarneaeg, juurutussagedus, teenuse taastamise aeg (DORA mõõdikud) ja arendajate tagasiside.
4. Võrdle võimalusi parimas, tõenäolises ja halvimas stsenaariumis; küsi, kuidas vastus muutub, kui kasu ilmneb hiljem või väiksemana, kui loodeti.
5. Kasuta kaalutud maatriksit ja pre-mortemit.

## Otsus

**Pole veel otsustatud.** See on lähtepunkt. Seda kasutav meeskond peaks selle jaotise asendama oma otsusega.

Soovitatav viis otsuseni jõuda:

* Kinnita, kes otsustab ja millal.
* Lepi kõigepealt kokku kriteeriumides ja kaaludes.
* Kogu ülaltoodud tõendid ja pane kirja, mis leiti.
* Jaga kommenteerimiseks, seejärel otsusta ja uuenda staatust.

## Tagajärjed

Kui meeskond valib etapiviisilise lähenemise, peaks ta:

* Nimetama juhendaja ja paluma esimesel meeskonnal ausalt aru anda, mis aitas ja mis mitte.
* Planeerima aega paaritööks ja testide kirjutamiseks tarneplaanidesse.
* Investeerima ehitus- ja testitorujuhtmesse enne, kui sellele tugineda.
* Leppima kokku peatamisreegli: kui tava ei aita pärast kindlaksmääratud perioodi, võib meeskond pakkuda selle lõpetamist ja kirjutada üles põhjuse.
* Säilitama arendajate valikuvabaduse selles, kuidas nad paarisprogrammeerivad ja milliseid tööriistu kasutavad; tavad peaksid seadma tulemuse, mitte iga üksikasja selle kohta, kuidas see saavutatakse.

## Seotud otsused

* [Agiilne manifest](../agiilne-manifest/): laiem otsus väärtuste kohta, mida need tavad toetavad.
* [Meie IT-raamistike valik](../it-raamistike-valik/): kuidas XP sobib teiste raamistikega.
* Otsused, mida pole veel tehtud: torujuhtme ja tööriistade investeering; koodi omandimudel.

## Seotud märkmed

* Avatud punktid: võta valim hiljutistest kiireloomulistest parandustest; küsi arendajatelt nende muredest paarimise ja testimise osas; kontrolli, mida ehitustorujuhe täna teha suudab.
* Loe lisaks:
  * Vikipeedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Loe: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
