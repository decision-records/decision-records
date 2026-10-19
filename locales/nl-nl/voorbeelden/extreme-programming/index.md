# Extreme Programming

* Status: verzoek om feedback
* Datum: 2025-10-06
* Beslisser(s): Hoofd Engineering (te bevestigen)
* Eigenaar: Engineering Manager

Samenvatting: Werk in uitvoering. Dit is een vertrekpunt voor een engineeringteam dat overweegt praktijken uit Extreme Programming (XP) in te voeren, zoals test-driven development, pair programming, continue integratie en kleine releases. Het laat zien hoe een team de vraag kan formuleren, de opties kan bespreken en informatie kan verzamelen. Er wordt geen beslissing vastgelegd.

## Vraagstuk

Productteams leveren functies in grote batches op en laat gevonden defecten zijn duur: een merkbaar deel van de releases heeft na release een dringende reparatie nodig. Engineeringleiders zijn geïnteresseerd in praktijken uit Extreme Programming, een agile softwareontwikkelmethode die technische praktijken benadrukt zoals test-driven development, pair programming, continue integratie, kleine releases, refactoring en gezamenlijk eigenaarschap van code.

Deze praktijken ondersteunen elkaar, maar veranderen ook hoe engineers dagelijks werken. Ze allemaal tegelijk invoeren stuit waarschijnlijk op weerstand en wordt oppervlakkig gedaan. De vragen die moeten worden beantwoord:

* Welke problemen willen we oplossen (late defecten, trage feedback, kennis bij weinig mensen) en welke praktijken pakken die aan?
* In welke volgorde moeten praktijken worden ingevoerd en wie gaat eerst?
* Wat zouden we meten om te weten dat de praktijken helpen?
* Wat is de juiste balans tussen een gedeelde standaard en de keuze van elk team?

## Aannames

Elke aanname is iets om te toetsen.

* **Late defecten worden vooral veroorzaakt door het ontbreken van snelle geautomatiseerde feedback.** Toets: volg een steekproef van dringende reparaties terug naar waar het defect had kunnen worden ondervangen.
* **De basispraktijken (continue integratie en geautomatiseerde tests) maken de andere mogelijk.** Toets: vraag teams die de praktijken hebben geprobeerd welke van welke afhingen.
* **Engineers nemen praktijken over die ze zien werken in een team naast hen.** Toets: vraag engineers wat hen zou overtuigen en wat hen zorgen baart.
* **Het aantal dringende reparaties na release is een eerlijke maatstaf voor voortgang.** Toets: spreek af hoe dit wordt geteld en controleer dat andere maatstaven (doorlooptijd, mislukkingspercentage van wijzigingen) geen ander verhaal vertellen.

## Beperkingen

* Teams moeten functies blijven leveren terwijl ze leren, dus de output in de eerste periode zal waarschijnlijk lager zijn.
* Engineers moeten keuzevrijheid houden over hoe ze pairen en welke tools ze gebruiken.
* De bestaande build- en testinfrastructuur heeft mogelijk werk nodig voordat continue integratie nuttig is.
* Onbekend, te bevestigen: hoeveel van de codebase vandaag testbaar is en of regelgevende of klantbeperkingen de releasefrequentie beïnvloeden.

## Overwogen opties

Schat voor elke optie waarde, kosten, doorlooptijd en benodigde capaciteiten in en noteer welk bewijs het team van mening zou doen veranderen.

* **Alle praktijken tegelijk invoeren in elk team.**
  * Waarde: praktijken versterken elkaar.
  * Kostenfactoren: training; langzamere oplevering tijdens het leren; toolingwerk in alle teams tegelijk.
  * Risico's: grote verandering; teams zonder de onderliggende vaardigheden kunnen de praktijken binnen weken laten vallen.
* **De praktijken in een gekozen volgorde invoeren, team voor team.** Bijvoorbeeld eerst continue integratie en geautomatiseerde tests (de fundamenten), dan kleine releases en pair programming, dan test-driven development.
  * Waarde: elke praktijk krijgt tijd om te landen; de eerste maken de latere mogelijk; de ervaring van het eerste team stuurt de rest.
  * Kostenfactoren: coaching; tijd voor pairen en het schrijven van tests ingebouwd in de planning; infrastructuurwerk voor de pipeline.
  * Verloop in de tijd: opeenvolgend, waarbij het volgende team aansluit als het vorige zijn releasepipeline een vastgestelde periode gezond heeft gehouden.
  * Benodigde capaciteiten: een coach; een betrouwbare buildpipeline; steun van managers voor de dip in output.
  * Risico's: traag; praktijken ongelijk ingevoerd.
* **Alleen de makkelijke praktijken invoeren.** Weinig inspanning, maar mogelijk worden de praktijken met het grootste voordeel overgeslagen, zoals geautomatiseerd testen.
* **Een andere set praktijken invoeren** (bijvoorbeeld die uit het DORA-onderzoek naar softwarelevering, zoals continuous delivery, trunk-based development en losjes gekoppelde architectuur) en XP als één bron onder meerdere behandelen.
* **Niets nieuws doen** en specifieke oorzaken van defecten rechtstreeks aanpakken. Een echte basislijn.

## Argumentatie

Discussiepunten die het team kan verwachten:

* **Pair programming.** Een praktijk waar veel engineers huiverig voor zijn. Waar helpt het (kennisdeling, complex werk) en waar niet?
* **Standaardiseren of teams laten kiezen?** Gedeelde uitkomsten (minder dringende reparaties, snellere feedback) met teamvrijheid in hoe ze die bereiken, of een strengere standaard?
* **Kwaliteit versus snelheid op korte termijn.** Zijn leiders bereid lagere output te accepteren terwijl teams leren?
* **TDD: middel of doel?** Sommige praktijken (zoals test-driven development) zijn zelfs onder ervaren beoefenaars omstreden. Het team moet beslissen welk probleem de praktijk aanpakt voordat het haar invoert.

Hoe het team kosten en afwegingen kan beoordelen:

1. Bereken de kosten van de huidige aanpak: inspanning voor dringende reparaties, vertragingen door late defecten, impact op klanten. Gebruik bandbreedtes in de termen van de organisatie.
2. Bereken de kosten van het programma: coaching, training, tijd voor pairen en tests, infrastructuur voor de pipeline en de tijdelijke dip in oplevering.
3. Kies eerst maatstaven: aandeel releases dat dringende reparaties nodig heeft, doorlooptijd van wijzigingen, deploymentfrequentie, tijd om de dienst te herstellen (de DORA-maatstaven) en feedback van engineers.
4. Vergelijk opties in het beste, waarschijnlijke en slechtste scenario; vraag hoe het antwoord verandert als het voordeel later of kleiner komt dan gehoopt.
5. Gebruik een gewogen matrix en een pre-mortem.

## Beslissing

**Nog niet besloten.** Dit is een vertrekpunt. Een team dat het gebruikt, moet deze sectie vervangen door zijn eigen beslissing.

Voorgestelde manier om tot een beslissing te komen:

* Bevestig wie beslist en tegen wanneer.
* Spreek eerst criteria en gewichten af.
* Verzamel het bewijs hierboven en leg vast wat er is gevonden.
* Deel voor commentaar, beslis dan en werk de Status bij.

## Gevolgen

Als het team kiest voor een gefaseerde aanpak, zou het:

* Een coach aanwijzen en het eerste team vragen eerlijk te rapporteren over wat hielp en wat niet.
* Tijd plannen voor pairen en voor het schrijven van tests in leveringsplannen.
* Investeren in de build- en testpipeline voordat erop wordt vertrouwd.
* Een stopregel afspreken: als een praktijk na een vastgestelde periode niet helpt, kan het team voorstellen haar te stoppen en vastleggen waarom.
* Engineers keuzevrijheid laten houden over hoe ze pairen en welke tools ze gebruiken; praktijken moeten de uitkomst bepalen, niet elk detail van hoe die wordt bereikt.

## Gerelateerde beslissingen

* [Het Agile Manifest](../agile-manifest/): de bredere beslissing over waarden die deze praktijken ondersteunen.
* [Onze IT-frameworks kiezen](../it-frameworks-kiezen/): hoe XP past bij andere frameworks.
* Beslissingen die nog niet zijn genomen: investering in pipeline en tooling; model voor eigenaarschap van code.

## Gerelateerde notities

* Openstaande punten: neem een steekproef van recente dringende reparaties; vraag engineers naar hun zorgen over pairen en testen; controleer wat de buildpipeline vandaag kan.
* Meer weten:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Lezen: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
