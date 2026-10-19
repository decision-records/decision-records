# Zelf bouwen of kopen voor een project

* Status: verzoek om feedback
* Datum: 2026-06-01
* Beslisser(s): COO (te bevestigen)
* Eigenaar: Directeur Operations

Samenvatting: Werk in uitvoering. Dit is een vertrekpunt voor een team dat een nieuwe capaciteit nodig heeft, hier een klantgerichte planningstool, en beslist of het die zelf bouwt, koopt of iets daartussenin doet. Het laat zien hoe een team de vraag kan formuleren, de opties kan bespreken en informatie kan verzamelen. Er wordt geen beslissing vastgelegd.

## Vraagstuk

Een dienstverlenend bedrijf plant werk met een handmatig, op spreadsheets gebaseerd proces dat tot dubbele boekingen en beschadigde klantrelaties heeft geleid. Er is binnen beperkte tijd een oplossing nodig en het team moet beslissen of het intern een tool bouwt of een bestaande koopt.

De vragen die moeten worden beantwoord:

* Wat moet de tool kunnen (eisen), en welke daarvan zijn essentieel?
* Hoe goed voldoet elke route aan de eisen, binnen de beschikbare tijd?
* Wat zijn de totale kosten van elke route gedurende de levensduur, inclusief wat het team opgeeft door die te kiezen?
* Wat gebeurt er als eisen veranderen, of als de gekozen route faalt?

## Aannames

Elke aanname is iets om te toetsen.

* **De meeste planningsbehoeften zijn gelijk aan die van andere organisaties, dus een bestaand product kan ze dekken.** Toets: som de eisen op en vraag leveranciers te tonen hoe elk wordt ingevuld.
* **De ongewone gevallen zijn klein genoeg om met een workaround af te handelen.** Toets: tel hoe vaak ze voorkomen en schrijf de workaround voor elk op.
* **Interne engineers kunnen de tool bouwen en onderhouden.** Toets: schat de inspanning in met de mensen die het zouden doen en vraag wat ze dan niet zouden doen.
* **De planningen van leveranciers zijn realistisch.** Toets: spreek met referentieklanten van vergelijkbare omvang, ook met klanten wier projecten uitliepen.

## Beperkingen

* Er is binnen een vaste termijn een oplossing nodig.
* Andere toegezegde productinitiatieven moeten hun planning halen, dus engineeringcapaciteit kan er niet zomaar van worden weggehaald.
* De tool verwerkt klantgegevens, dus beveiliging en privacy moeten worden gecontroleerd.
* Onbekend, te bevestigen: integratiebehoeften, verwachte groei en wat er gebeurt aan het einde van een leverancierscontract.

## Overwogen opties

Schat voor elke optie waarde, kosten, doorlooptijd en benodigde capaciteiten in en noteer welk bewijs het team van mening zou doen veranderen.

* **Intern bouwen.**
  * Waarde: exacte pasvorm met de regels van de organisatie; volledige controle over de roadmap.
  * Kostenfactoren: ontwerp, ontwikkeling, testen, hosting, support en onderhoud gedurende de hele levensduur van de tool; de alternatieve kosten van wat engineers daardoor niet bouwen.
  * Verloop in de tijd: vaak langer dan de eerste schattingen; de waarde komt aan het eind.
  * Benodigde capaciteiten: productmanagement; engineering; operations.
* **Een bestaand product kopen.**
  * Waarde: sneller; kosten gespreid; profiteert van verbeteringen van de leverancier.
  * Kostenfactoren: licenties, implementatie, configuratie, training, integratie, beheer en beëindiging.
  * Risico's: hiaten ten opzichte van de eisen; wijzigingen bij de leverancier; lock-in.
* **Een product kopen en maatwerk bij de leverancier bestellen.** Dicht hiaten, maar voegt tijd en kosten toe en brengt leveringsrisico met zich mee.
* **Samenstellen uit kleinere tools** (bijvoorbeeld een low-codeplatform of een combinatie van bestaande diensten).
* **Eerst het handmatige proces verbeteren** met een noodoplossing, om tijd te kopen voor een betere beslissing.

## Argumentatie

Discussiepunten die het team kan verwachten:

* **Pasvorm versus snelheid.** Een perfecte pasvorm die laat komt, kan slechter zijn dan nu een goede pasvorm.
* **Kern of context?** Is planning onderdeel van wat het bedrijf onderscheidend maakt? Zo niet, dan heeft kopen meestal de voorkeur.
* **Verborgen kosten.** Bouwen kent doorlopend onderhoud; kopen kent doorlopende licenties, integratie en beëindiging.
* **Omkeerbaarheid.** Welke keuze is makkelijker ongedaan te maken als ze fout blijkt?

Hoe het team kosten en afwegingen kan beoordelen:

1. Schrijf eisen en rangschik ze. Beoordeel elke route ertegen en noteer hiaten.
2. Schat de total cost of ownership over een vastgestelde horizon in eigen termen: eenmalige kosten, terugkerende kosten, interne personeelstijd, integratie, training en beëindiging. Toon bandbreedtes.
3. Schat de kosten van uitstel: het effect van elke extra periode met dubbele boekingen.
4. Vergelijk opties in het beste, waarschijnlijke en slechtste scenario en toets het effect van wijzigingen in de eisen.
5. Gebruik een gewogen matrix (pasvorm, snelheid, kosten, risico, controle, omkeerbaarheid) en een pre-mortem.

## Beslissing

**Nog niet besloten.** Dit is een vertrekpunt. Een team dat het gebruikt, moet deze sectie vervangen door zijn eigen beslissing.

Voorgestelde manier om tot een beslissing te komen:

* Bevestig wie beslist en wie het eens moet zijn.
* Spreek eerst eisen en gewichten af.
* Verzamel het bewijs hierboven en leg vast wat er is gevonden.
* Deel voor commentaar, beslis dan en werk de Status bij.

## Gevolgen

Als het team besluit te kopen, zou het:

* Een implementatieleider aanwijzen en training plannen binnen de planning van de leverancier.
* Workarounds voor niet-ondersteunde gevallen documenteren, bijhouden hoe vaak ze worden gebruikt en na ingebruikname evalueren.
* Bepalen wat een vervolgbeslissing over maatwerk zou uitlokken.
* Bevestigen dat er geen engineeringcapaciteit wordt weggehaald bij toegezegde initiatieven.

## Gerelateerde beslissingen

* [Een CRM-platform kiezen](../crm-platform-kiezen/): een vergelijkbare keuze voor een ander systeem.
* [De primaire database kiezen](../database-kiezen/): een technologische variant van de vragen over bouwen/kopen en lock-in.
* [Het concentratierisico bij één leverancier verkleinen](../afhankelijkheid-van-een-leverancier/): afhankelijkheid van een leverancier.
* Beslissingen die nog niet zijn genomen: maatwerkintegratie; gegevensbewaring.

## Gerelateerde notities

* Openstaande punten: schrijf eisen en rangschik ze; vraag leveranciers om referentieklanten; schat de bouwinspanning in met engineers.
* Meer weten:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
