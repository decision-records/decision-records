# Esmase andmebaasi valik

* Staatus: kommentaaride küsimine
* Kuupäev: 2026-03-22
* Otsustaja(d): tehnikadirektor (CTO) (tuleb kinnitada)
* Omanik: platvormitehnika juht

Kokkuvõte: Pooleliolev töö. See on lähtepunkt meeskonnale, kes valib kasvava toote esmase andmebaasi. See on selle kogumi ainus tehnoloogianäide ja näitab, et arhitektuuriotsused järgivad sama mustrit mis ärilised otsused mujal selles kogus. See näitab, kuidas meeskond saab küsimust raamistada, võimalusi arutada ja teavet koguda. See ei talleta otsust.

## Küsimus

Praegune andmebaas läheneb oma skaleerimispiiridele ja arendusmeeskond eeldab, et kasv jõuab nende piirideni peagi. Asendaja või teistsugune skaleerimisviis tuleb valida enne järgmist suurt tootelaiendust.

Küsimused, millele tuleb vastata:

* Millised on tegelikud piirid täna (lugemised, kirjutamised, salvestus, latentsus, käitamine) ja kui kiiresti me neile läheneme?
* Millised omadused on kõige olulisemad (järjepidevus, kättesaadavus, latentsus, kulu, käitatavus, vastavus) ja mis järjekorras?
* Kas skaleerime olemasolevat, läheme üle hallatavale teenusele või käitame midagi ise?
* Kuidas me migreeriksime ja kuidas lahkuksime uuesti, kui peaksime?

## Eeldused

Iga eeldus on midagi, mida testida.

* **Kasvuprognoos on realistlik.** Test: võrdle varasema kasvu ning müügi- ja tooteplaanidega; kaalu kõrget ja madalat stsenaariumi.
* **Praegust andmebaasi saab hinna eest edasi skaleerida.** Test: küsi tarnijalt ja meeskonnalt, kui palju ruumi on veel ja mis see maksab.
* **Meie töökoormus sobib horisontaalselt skaleeritava disainiga.** Test: uuri päringuid ja tehinguid; otsi operatsioone, mis vajavad tugevat järjepidevust kirjete vahel.
* **Meeskond suudab valitud võimalust käitada.** Test: loetle vajalikud oskused ja kellel need on.

## Piirangud

* Muudatus peab olema valmis enne lansseerimist, etapiviisilise migreerimisega, mis seda ei häiri.
* Korduv kulu peab mahtuma kinnitatud eelarvesse.
* Andmekaitse ja turvalisuse kohustused kehtivad mis tahes valiku puhul.
* Teadmata, tuleb kinnitada: andmemaht, säilitusnõuded, piirkondlikud nõuded, integratsioon teiste süsteemidega ja tarnijakohustused.

## Kaalutud võimalused

Iga võimaluse puhul hinda väärtust, kulusid, ajakava ja vajalikke võimekusi ning märgi, milline tõend meeskonna meelt muudaks.

* **Skaleeri praegust andmebaasi vertikaalselt** (suurem masin või pakett).
  * Väärtus: madalaim migreerimisrisk; rakenduse muudatusi pole.
  * Riskid: ostab piiratud hulga aega; kulu tõuseb järsult.
* **Mine üle hallatud, horisontaalselt skaleeritavale andmebaasiteenusele.**
  * Väärtus: kaotab skaleerimise ja suure osa tegevustööst; tarnija tugi.
  * Kuluallikad: korduvad teenustasud; migreerimine; rakenduse muudatused; väljaminev andmeliiklus ja lahkumiskulud.
  * Riskid: sõltuvus tarnija funktsioonidest ja hindadest.
* **Mine üle ise majutatud, horisontaalselt skaleeritavale andmebaasile.**
  * Väärtus: potentsiaalselt madalam korduv kulu; rohkem kontrolli.
  * Kuluallikad: tegevusoskuste arendamine; valveringi koormus; tööriistad; uuendused.
  * Riskid: tegevuskulu võib olla oodatust suurem.
* **Kujunda andmekiht ümber** (näiteks vahemällu salvestamine, lugemiskoopiad, osadeks jagamine või töökoormuste eraldamine), et praegust andmebaasi pikendada.
* **Kasuta erinevate töökoormuste jaoks erinevaid andmebaase** (polüglotpüsivus), käitatavate süsteemide arvu suurenemise hinnaga.

## Argumentatsioon

Aruteluteemad, mida meeskond peaks ootama:

* **Järjepidevus versus kättesaadavus.** CAP-teoreem ütleb, et osadeks jaotatud hajussüsteem ei saa garanteerida mõlemat. Kumb on toote iga osa jaoks olulisem? Paljud töökoormused taluvad viivitatud järjepidevust; mõned mitte.
* **Hallatud versus ise majutatud.** Kõrgem teenuse kulu vs madalam tegevusrisk. Kuidas peaks meeskond arendajate aega väärtustama?
* **Lukustumine.** Mis läheb kaotsi tarnijaspetsiifilise funktsiooni kasutamisega ja mis võidetakse?
* **Standardid.** Kui palju tugineme SQL-ile (standardiseeritud ISO/IEC 9075-s) võrreldes tarnijaspetsiifilise päringumudeliga?

Kuidas meeskond saaks kulusid ja kompromisse hinnata:

1. Testi oma töökoormusega: loo realistlik võrdlustest ja mõõda iga kandidaati oodatava ja tipukoormuse all, sealhulgas rikkestsenaariumides.
2. Hinda omamise kogukulu kindlaksmääratud horisondiks organisatsiooni enda terminites: teenuse- või litsentsitasud, majutus, migreerimine, arendusaeg, valveteenistus, koolitus, tugi ja lahkumine. Näita vahemikke.
3. Hinda kandidaate kaalutud maatriksiga omaduste põhjal, mis loevad (toote kvaliteedi mudel ISO/IEC 25010 pakub selleks sõnavara), ja testi tundlikkust kaalude suhtes.
4. Hinda, kui kaua iga võimalus aega ostab ja mis see maksab, kui piir jälle saavutatakse.
5. Planeeri väljumine: kuidas andmed ja kood iga valiku juurest ära liiguksid?

## Otsus

**Pole veel otsustatud.** See on lähtepunkt. Seda kasutav meeskond peaks selle jaotise asendama oma otsusega.

Soovitatav viis otsuseni jõuda:

* Kinnita, kes otsustab ja keda tuleb konsulteerida (turvalisus, rahandus, toode).
* Lepi kõigepealt kokku kriteeriumides ja kaaludes.
* Kogu ülaltoodud tõendid, sealhulgas võrdlustesti tulemused, ja pane kirja, mis leiti.
* Jaga kommenteerimiseks, seejärel otsusta ja uuenda staatust.

## Tagajärjed

Kui meeskond otsustab migreerida, peaks ta:

* Planeerima etapiviisilise migreerimise paralleelkäituse perioodiga enne täielikku üleminekut.
* Kinnitama eelarve korduvate kulude jaoks.
* Planeerima järelotsused, näiteks ühenduste kogumi (connection pooling) ja lugemiskoopiate kohta.
* Talletama oodatava väljumistee.

## Seotud otsused

* [Ise arendada või osta projekti jaoks](../ise-arendada-või-osta/): üldine ehitamise/ostmise arutlus.
* [Ühest tarnijast sõltuvuse riski vähendamine](../sõltuvus-ühest-tarnijast/): sõltuvus ühest tarnijast.
* Otsused, mida pole veel tehtud: vahemälu ja koopiate strateegia; andmete säilitamine.

## Seotud märkmed

* Avatud punktid: kogu tootmismõõdikud; kirjuta üles töökoormuse omadused; tee võrdlustesti jaoks kandidaatide lühinimekiri.
* Loe lisaks:
  * Vikipeedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
