# De primaire database kiezen

* Status: verzoek om feedback
* Datum: 2026-03-22
* Beslisser(s): CTO (te bevestigen)
* Eigenaar: Hoofd Platform Engineering

Samenvatting: Werk in uitvoering. Dit is een vertrekpunt voor een team dat de primaire database kiest voor een groeiend product. Het is het enige technologievoorbeeld in deze set en laat zien dat architectuurbeslissingen hetzelfde patroon volgen als de zakelijke beslissingen elders in deze verzameling. Het laat zien hoe een team de vraag kan formuleren, opties kan bespreken en informatie kan verzamelen. Er wordt geen beslissing vastgelegd.

## Vraagstuk

De huidige database nadert zijn schaalgrenzen en het engineeringteam verwacht dat de groei die grenzen binnenkort bereikt. Vóór de volgende grote productlancering moet een vervanger of een andere manier van schalen worden gekozen.

De vragen die moeten worden beantwoord:

* Wat zijn vandaag de echte grenzen (lezen, schrijven, opslag, latentie, beheer) en hoe snel naderen we ze?
* Welke eigenschappen zijn het belangrijkst (consistentie, beschikbaarheid, latentie, kosten, beheerbaarheid, compliance) en in welke volgorde?
* Schalen we wat we hebben, stappen we over op een beheerde dienst of draaien we iets zelf?
* Hoe zouden we migreren, en hoe zouden we weer vertrekken als dat nodig was?

## Aannames

Elke aanname is iets om te toetsen.

* **De groeiprognose is realistisch.** Toets: vergelijk met eerdere groei en met verkoop- en productplannen; overweeg een hoog en een laag scenario.
* **De huidige database kan tegen een prijs verder worden geschaald.** Toets: vraag de leverancier en het team hoeveel ruimte er nog is en wat het kost.
* **Onze werklast past bij een horizontaal schaalbaar ontwerp.** Toets: bestudeer queries en transacties; zoek bewerkingen die sterke consistentie over records heen nodig hebben.
* **Het team kan de gekozen optie beheren.** Toets: som de vereiste vaardigheden op en wie ze heeft.

## Beperkingen

* De wijziging moet vóór de lancering klaar zijn, met een gefaseerde migratie die de lancering niet verstoort.
* Terugkerende kosten moeten passen in het goedgekeurde budget.
* Voor elke keuze gelden verplichtingen op het gebied van gegevensbescherming en beveiliging.
* Onbekend, te bevestigen: gegevensvolume, bewaareisen, regionale eisen, integratie met andere systemen en verplichtingen aan leveranciers.

## Overwogen opties

Schat voor elke optie waarde, kosten, doorlooptijd en benodigde capaciteiten in en noteer welk bewijs het team van mening zou doen veranderen.

* **De huidige database verticaal schalen** (een grotere machine of een groter abonnement).
  * Waarde: laagste migratierisico; geen wijzigingen in de applicatie.
  * Risico's: koopt een beperkte hoeveelheid tijd; de kosten stijgen steil.
* **Overstappen naar een beheerde, horizontaal schaalbare databasedienst.**
  * Waarde: neemt schaling en veel operationeel werk weg; ondersteuning van de leverancier.
  * Kostenfactoren: terugkerende servicekosten; migratie; applicatiewijzigingen; kosten voor data-uitgaand verkeer en beëindiging.
  * Risico's: afhankelijkheid van de functies en prijzen van de leverancier.
* **Overstappen naar een zelf gehoste, horizontaal schaalbare database.**
  * Waarde: mogelijk lagere terugkerende kosten; meer controle.
  * Kostenfactoren: operationele vaardigheden opbouwen; belasting door bereikbaarheidsdiensten; tooling; upgrades.
  * Risico's: operationele overhead kan hoger uitvallen dan verwacht.
* **De datalaag herontwerpen** (bijvoorbeeld caching, leesreplica's, partitionering of het scheiden van werklasten) om de huidige database te verlengen.
* **Verschillende databases voor verschillende werklasten gebruiken** (polyglot persistence), ten koste van meer systemen om te draaien.

## Argumentatie

Discussiepunten die het team kan verwachten:

* **Consistentie versus beschikbaarheid.** Volgens het CAP-theorema kan een gedistribueerd systeem dat is gepartitioneerd niet beide garanderen. Wat is belangrijker voor elk deel van het product? Veel werklasten verdragen vertraagde consistentie; sommige niet.
* **Beheerd versus zelf gehost.** Hogere servicekosten tegenover lager operationeel risico. Hoe moet het team de tijd van engineers waarderen?
* **Lock-in.** Wat gaat er verloren door een leveranciersspecifieke functie te gebruiken, en wat wordt er gewonnen?
* **Standaarden.** Hoeveel leunen we op SQL (gestandaardiseerd in ISO/IEC 9075) tegenover een leveranciersspecifiek querymodel?

Hoe het team kosten en afwegingen kan beoordelen:

1. Test met je eigen werklast: maak een realistische benchmark en meet elke kandidaat onder verwachte en piekbelasting, inclusief storingsscenario's.
2. Schat de total cost of ownership over een vastgestelde horizon in eigen termen: service- of licentiekosten, hosting, migratie, engineeringtijd, bereikbaarheidsdienst, training, support en beëindiging. Toon bandbreedtes.
3. Beoordeel kandidaten met een gewogen matrix van de eigenschappen die ertoe doen (het kwaliteitsmodel ISO/IEC 25010 biedt hiervoor een vocabulaire) en toets de gevoeligheid voor de gewichten.
4. Schat in hoe lang elke optie tijd koopt en wat het kost als de grens opnieuw wordt bereikt.
5. Plan de exit: hoe zouden gegevens en code bij elke keuze kunnen verhuizen?

## Beslissing

**Nog niet besloten.** Dit is een vertrekpunt. Een team dat het gebruikt, moet deze sectie vervangen door zijn eigen beslissing.

Voorgestelde manier om tot een beslissing te komen:

* Bevestig wie beslist en wie moet worden geraadpleegd (security, finance, product).
* Spreek eerst criteria en gewichten af.
* Verzamel het bewijs hierboven, inclusief benchmarkresultaten, en leg vast wat er is gevonden.
* Deel voor commentaar, beslis dan en werk de Status bij.

## Gevolgen

Als het team besluit te migreren, zou het:

* Een gefaseerde migratie plannen met een periode van parallel draaien vóór de volledige overgang.
* Budget bevestigen voor de terugkerende kosten.
* Vervolgbeslissingen plannen, bijvoorbeeld over connection pooling en leesreplica's.
* De verwachte exitroute vastleggen.

## Gerelateerde beslissingen

* [Zelf bouwen of kopen voor een project](../zelf-bouwen-of-kopen/): algemene redenering over bouwen/kopen.
* [Het concentratierisico bij één leverancier verkleinen](../afhankelijkheid-van-een-leverancier/): afhankelijkheid van één leverancier.
* Beslissingen die nog niet zijn genomen: cache- en replicastrategie; gegevensbewaring.

## Gerelateerde notities

* Openstaande punten: verzamel productiemetrieken; schrijf de kenmerken van de werklast op; maak een shortlist van kandidaten voor een benchmark.
* Meer weten:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
