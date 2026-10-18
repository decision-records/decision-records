# Ise arendada või osta projekti jaoks

* Staatus: kommentaaride küsimine
* Kuupäev: 2026-06-01
* Otsustaja(d): tegevdirektor (COO) (tuleb kinnitada)
* Omanik: tegevusdirektor

Kokkuvõte: Pooleliolev töö. See on lähtepunkt meeskonnale, kes vajab uut võimekust, siin kliendile suunatud ajaplaneerimise tööriista, ja otsustab, kas see ise ehitada, osta või teha midagi vahepealset. See näitab, kuidas meeskond saab küsimust raamistada, võimalusi arutada ja teavet koguda. See ei talleta otsust.

## Küsimus

Teenindusettevõte planeerib tööd käsitsi, tabelipõhise protsessiga, mis on põhjustanud topeltbroneeringuid ja kahjustanud kliendisuhteid. Lahendus on vaja piiratud aja jooksul ning meeskond peab otsustama, kas ehitada tööriist ettevõttesiseselt või osta olemasolev.

Küsimused, millele tuleb vastata:

* Mida peab tööriist suutma (nõuded) ja millised neist on hädavajalikud?
* Kui hästi iga tee nõuetele vastab, olemasoleva aja jooksul?
* Millised on iga tee kogukulud kogu eluea jooksul, sealhulgas see, millest meeskond selle valimisega loobub?
* Mis juhtub, kui nõuded muutuvad või kui valitud tee ebaõnnestub?

## Eeldused

Iga eeldus on midagi, mida testida.

* **Enamik planeerimisvajadusi on teistele organisatsioonidele ühised, nii et olemasolev toode võib need katta.** Test: loetle nõuded ja palu tarnijatel näidata, kuidas igaüht täidetakse.
* **Ebatavalised juhtumid on piisavalt väikesed, et neid möödapääsuga lahendada.** Test: loe kokku, kui sageli need esinevad, ja kirjuta iga jaoks möödapääs üles.
* **Sisemised arendajad suudavad tööriista ehitada ja hooldada.** Test: hinda vaeva nendega, kes seda teeksid, ja küsi, mida nad siis ei teeks.
* **Tarnijate ajakavad on realistlikud.** Test: räägi sarnase suurusega viidatud klientidega, sealhulgas nendega, kelle projektid venisid.

## Piirangud

* Lahendus on vaja kindla aja jooksul.
* Teised kohustatud tooteinitsiatiivid peavad oma ajakavast kinni pidama, nii et arenduse võimekust ei saa neilt lihtsalt ära võtta.
* Tööriist käsitleb kliendiandmeid, seega tuleb kontrollida turvalisust ja privaatsust.
* Teadmata, tuleb kinnitada: integratsioonivajadused, oodatav kasv ja mis juhtub tarnijalepingu lõpus.

## Kaalutud võimalused

Iga võimaluse puhul hinda väärtust, kulusid, ajakava ja vajalikke võimekusi ning märgi, milline tõend meeskonna meelt muudaks.

* **Ehita ettevõttesiseselt.**
  * Väärtus: täpne sobivus organisatsiooni reeglitega; täielik kontroll teekaardi üle.
  * Kuluallikad: disain, arendus, testimine, majutus, tugi ja hooldus tööriista kogu eluea jooksul; alternatiivkulu sellest, mida arendajad selle asemel ei ehita.
  * Ajakava kuju: sageli pikem kui esimesed hinnangud; väärtus tuleb lõpus.
  * Vajalikud võimekused: tootejuhtimine; arendus; tegevus.
* **Osta olemasolev toode.**
  * Väärtus: kiirem; kulud jaotatud; saab kasu tarnija täiustustest.
  * Kuluallikad: litsentsid, juurutus, seadistamine, koolitus, integratsioon, haldus ja lahkumine.
  * Riskid: lüngad nõuete suhtes; tarnija muudatused; lukustumine.
* **Osta toode ja telli tarnijalt kohandatud töö.** Sulgeb lüngad, kuid lisab aega ja kulu ning toob kaasa tarnerisku.
* **Koosta väiksematest tööriistadest** (näiteks vähese koodiga platvorm või olemasolevate teenuste kombinatsioon).
* **Paranda kõigepealt käsitsi protsessi** ajutise lahendusega, et osta aega parema otsuse jaoks.

## Argumentatsioon

Aruteluteemad, mida meeskond peaks ootama:

* **Sobivus versus kiirus.** Täiuslik sobivus, mis saabub hilja, võib olla halvem kui hea sobivus praegu.
* **Tuum või kontekst?** Kas planeerimine on osa sellest, mis teeb ettevõtte eristuvaks? Kui mitte, eelistatakse tavaliselt ostmist.
* **Peidetud kulud.** Ehitamisel on pidev hooldus; ostmisel pidevad litsentsid, integratsioon ja lahkumine.
* **Tagasipööratavus.** Kumba valikut on lihtsam tagasi pöörata, kui see osutub valeks?

Kuidas meeskond saaks kulusid ja kompromisse hinnata:

1. Kirjuta nõuded ja järjesta need. Hinda iga teed nende suhtes ja märgi lüngad.
2. Hinda omamise kogukulu kindlaksmääratud horisondiks organisatsiooni enda terminites: ühekordsed kulud, korduvad kulud, sisemise töötajate aeg, integratsioon, koolitus ja lahkumine. Näita vahemikke.
3. Hinda viivitamise kulu: iga lisaperioodi mõju topeltbroneeringutega.
4. Võrdle võimalusi parimas, tõenäolises ja halvimas stsenaariumis ning testi nõuete muutuste mõju.
5. Kasuta kaalutud maatriksit (sobivus, kiirus, kulu, risk, kontroll, tagasipööratavus) ja pre-mortemit.

## Otsus

**Pole veel otsustatud.** See on lähtepunkt. Seda kasutav meeskond peaks selle jaotise asendama oma otsusega.

Soovitatav viis otsuseni jõuda:

* Kinnita, kes otsustab ja kes peab nõus olema.
* Lepi kõigepealt kokku nõuetes ja kaaludes.
* Kogu ülaltoodud tõendid ja pane kirja, mis leiti.
* Jaga kommenteerimiseks, seejärel otsusta ja uuenda staatust.

## Tagajärjed

Kui meeskond otsustab osta, peaks ta:

* Nimetama juurutuse juhi ja planeerima koolituse tarnija ajakava piires.
* Dokumenteerima möödapääsud toetamata juhtumite jaoks, logima nende kasutamise sageduse ja vaatama need üle pärast kasutuselevõttu.
* Määratlema, mis käivitaks järelotsuse kohandatud töö kohta.
* Kinnitama, et kohustatud initsiatiividelt ei võeta arenduse võimekust.

## Seotud otsused

* [CRM-platvormi valik](../crm-platvormi-valik/): sarnane valik teise süsteemi jaoks.
* [Esmase andmebaasi valik](../andmebaasi-valik/): ehitamise/ostmise ja lukustumise küsimuste tehnoloogiline juhtum.
* [Ühest tarnijast sõltuvuse riski vähendamine](../sõltuvus-ühest-tarnijast/): sõltuvus tarnijast.
* Otsused, mida pole veel tehtud: kohandatud integratsioon; andmete säilitamine.

## Seotud märkmed

* Avatud punktid: kirjuta ja järjesta nõuded; palu tarnijatelt viidatud kliente; hinda ehitamise vaeva koos arendajatega.
* Loe lisaks:
  * Vikipeedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
