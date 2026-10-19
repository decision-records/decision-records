# Gids: beslissingsdocumenten voor leiders

Deze gids legt uit wat een beslissingsdocument is, waarom het belangrijk is voor leiders in elke bedrijfsfunctie, hoe je er een opbouwt en hoe je de werkwijze goed uitvoert.

Inhoud:

* [Wat is een beslissingsdocument?](#wat-is-een-beslissingsdocument)
* [Waarom leiders, niet alleen ontwikkelaars, beslissingsdocumenten zouden moeten gebruiken](#waarom-leiders-niet-alleen-ontwikkelaars-beslissingsdocumenten-zouden-moeten-gebruiken)
* [Beslissingsdocumenten zijn toepasbaar op elk onderdeel van het bedrijf](#beslissingsdocumenten-zijn-toepasbaar-op-elk-onderdeel-van-het-bedrijf)
* [De opbouw van een beslissingsdocument](#de-opbouw-van-een-beslissingsdocument)
* [De levenscyclus van een beslissingsdocument](#de-levenscyclus-van-een-beslissingsdocument)
* [Rollen en governance](#rollen-en-governance)
* [Best practices](#best-practices)
* [Veelgemaakte valkuilen](#veelgemaakte-valkuilen)
* [Beginnen in je organisatie](#beginnen-in-je-organisatie)
* [Verder lezen](#verder-lezen)

## Wat is een beslissingsdocument?

Een **beslissingsdocument (DR)** legt één belangrijke keuze vast: de situatie die de aanleiding was, de overwogen opties, de gemaakte keuze en de verwachte gevolgen. Een **beslissingenlogboek (DL)** is de doorlopende verzameling van alle beslissingsdocumenten van een team, functie of organisatie, in feite een institutioneel geheugen van "waarom we dingen zo doen".

Een beslissingsdocument is niet:

* Een vergadernotulen (een verslag van wat er *besproken* is, niet van wat er *besloten is en waarom*).
* Een projectplan (een verslag van *wat er hierna gebeurt*, niet van *waarom dit pad boven andere is gekozen*).
* Een beleidsdocument (een verslag van een *blijvende regel*, hoewel een beslissingsdocument er vaak een oplevert).

Het zit tussen deze in: een kort, duurzaam product dat er speciaal is zodat de redenering achter een keuze langer meegaat dan de vergadering waarin die plaatsvond.

## Waarom leiders, niet alleen ontwikkelaars, beslissingsdocumenten zouden moeten gebruiken

Softwareteams namen deze werkwijze als eerste over, omdat code duur is om terug te draaien en nieuwe ontwikkelaars voortdurend vragen "waarom is dit zo gebouwd?" Elke leider kent precies dezelfde dynamiek:

* **Institutioneel geheugen loopt de deur uit.** Wanneer een VP Sales die het huidige gebiedsmodel koos vertrekt, vertrekt de redenering mee, tenzij die is opgeschreven.
* **Reorganisaties en wisselingen in leiderschap leiden tot herhaalde discussies.** Zonder document besteedt een nieuwe leider weken aan het opnieuw bespreken van een beslissing die al zorgvuldig was genomen, of erger: draait die terug zonder te weten waarom die bestond.
* **Inwerken gaat sneller met een "waarom", niet alleen een "wat".** Een nieuwe medewerker die de laatste twaalf beslissingen van de eigen functie kan lezen, begrijpt het oordeel van de organisatie, niet alleen de huidige stand van zaken.
* **Opschrijven verbetert de beslissing zelf.** Context, opties en afwegingen op papier zetten, vóór het beslissen, brengt hiaten en onuitgesproken aannames aan het licht waar een mondelinge discussie overheen glijdt.
* **Het schept verantwoording zonder bureaucratie.** Een beslissingsdocument noemt wie wanneer en waarom heeft besloten, wat zowel de beslisser (een gedocumenteerde, beredeneerde keuze) als de organisatie (een duidelijke eigenaar om opnieuw te bekijken als de omstandigheden veranderen) beschermt.
* **Het schaalt communicatie over afstand en tijd.** Voor teams op afstand en asynchrone teams, en voor belanghebbenden die er niet bij waren, doet een goed geschreven beslissingsdocument het werk dat een live vergadering anders zou moeten herhalen.

Niets hiervan is specifiek voor software. Het geldt voor *elke* beslissing die duur is om terug te draaien, mensen buiten de beslisser raakt of waarschijnlijk later ter discussie komt te staan.

## Beslissingsdocumenten zijn toepasbaar op elk onderdeel van het bedrijf

Beschouw "beslissingsdocument" als een genre, niet als het hulpmiddel van één afdeling. Dezelfde structuur van zes onderdelen werkt of de beslissing nu architecturaal of commercieel is:

* **Strategisch beslissingsdocument** — markttoetreding of -uittreding, concurrentiehouding, meerjarige gokken.
* **Verkoopbeslissingsdocument** — gebiedsontwerp, beloningsplannen, keuzes voor CRM en tooling, kanaalstrategie.
* **Marketingbeslissingsdocument** — merkpositionering, kanaalmix, bureau versus intern, prijscommunicatie.
* **Productbeslissingsdocument** — prijsmodel, afwegingen op de roadmap, zelf bouwen of kopen, uitfaseringsbeslissingen.
* **Projectbeslissingsdocument** — leveringsmethodiek, leveranciersselectie, afwegingen over de scope.
* **Risicobeslissingsdocument** — risico's accepteren, beperken, overdragen of vermijden, en de onderbouwing.
* **HR-beslissingsdocument** — beleidswijzigingen (thuiswerken, functieniveaus, salarisschalen), organisatieontwerp.
* **Communicatiebeslissingsdocument** — houding bij crisiscommunicatie, woordvoerderbeleid, regels voor mediacontact.
* **Beslissingsdocument voor professionele ontwikkeling** — investering in opleiding, promotiecriteria, opvolgingskeuzes.
* **Beslissingsdocument voor gebruikersgericht ontwerp** — keuzes in onderzoeksmethoden, afwegingen over toegankelijkheid, UX-richting.
* **Beslissingsdocument voor softwarearchitectuur / engineering** — het oorspronkelijke toepassingsgebied: keuzes in technologie, platform en ontwerp.

De map [voorbeelden](../voorbeelden/index.md) bevat uitgewerkte voorbeelden voor de meeste van deze domeinen. Veel organisaties die beslissingsdocumenten voor engineering invoeren, ontdekken later dat hun strategie-, HR- of verkoopteams precies dezelfde discipline willen — vaak het moment waarop het kwartje valt, dat teams beschrijven die de werkwijze simpelweg "beslissingen" noemen in plaats van "beslissingsdocumenten", waardoor het patroon vanzelfsprekend aanvoelt voor niet-technische teams in plaats van geleend van engineering.

## De opbouw van een beslissingsdocument

In [sjabloon/index.md](../sjabloon/index.md) staan twee sjablonen: een **lichte** versie met zes velden voor alledaagse beslissingen en een **uitgebreide** versie voor beslissingen met hoge inzet en veel toetsing. Beide delen dezelfde kernlogica:

1. **Titel** — een korte, actieve uitspraak in de tegenwoordige tijd over de beslissing zelf (bijvoorbeeld "Voer driemaandelijkse OKR's in", niet "OKR-discussie"). Streef naar minder dan 50 tekens.
2. **Status** — waar de beslissing zich in haar leven bevindt: verzoek om feedback, voorgesteld, goedgekeurd, afgewezen, verouderd of vervangen.
3. **Context (vraagstuk)** — de situatie, krachten en beperkingen die deze beslissing noodzakelijk maakten. Zo geschreven dat een lezer zonder herinnering aan de vergadering begrijpt waarom de vraag zelfs maar opkwam.
4. **Overwogen opties (posities)** — de realistische alternatieven, weergegeven als feiten en afwegingen, niet als een stroman-rij die de gekozen optie vanzelfsprekend juist laat lijken. Als iemand kan vragen "heb je X overwogen?" en het antwoord staat niet in het document, dan is het document onvolledig.
5. **Beslissing** — de keuze, in duidelijke, actieve taal: "We gaan X doen." Geen samenvatting van voor- en nadelen, maar een heldere verklaring van wat er is gekozen.
6. **Gevolgen (implicaties)** — wat er als gevolg verandert, inclusief kosten, risico's, vervolgbeslissingen en alles wat wordt opgegeven door een alternatief niet te kiezen. Goede gevolgen lezen als "we doen nu X in plaats van Y", niet als een herhaling van voor- en nadelen van de al genomen beslissing.

Het uitgebreide sjabloon voegt velden toe die nuttig zijn bij beslissingen met hogere inzet: **aannames**, **beperkingen**, **meningen** (wie wat adviseerde en waarom), **gerelateerde beslissingen/eisen/producten/principes** en gestructureerde analysesecties (kostenanalyse, SWOT, PEST) voor beslissingen die diepere toetsing verdienen.

## De levenscyclus van een beslissingsdocument

Een beslissingsdocument doorloopt doorgaans vijf fasen:

**Initiëren → Onderzoeken → Evalueren → Beslissen → Onderhouden (→ Uitfaseren)**

* *Initiëren* — iemand constateert dat een keuze belangrijk genoeg is voor een document en opent een concept.
* *Onderzoeken* — opties, beperkingen en aannames worden verzameld; belanghebbenden worden geraadpleegd.
* *Evalueren* — het document wordt gedeeld voor commentaar, meestal met een vast tijdsbestek (een week is een gangbare standaard).
* *Beslissen* — de beslisser (persoon of groep, volgens je governancemodel) keurt goed, wijst af of stuurt het terug voor meer werk; de status wordt dienovereenkomstig bijgewerkt.
* *Onderhouden* — het document blijft vindbaar en wordt opnieuw bekeken als de omstandigheden wezenlijk veranderen.
* *Uitfaseren* — als het wordt vervangen, wordt de status van het oude document "vervangen" en verwijst het naar het nieuwe. Het oude document wordt nooit verwijderd — die geschiedenis is juist het punt.

## Rollen en governance

Noem bij elk beslissingsdocument:

* **Eigenaar / voorsteller** — schrijft het document en brengt het tot een beslissing.
* **Beslisser(s)** — de persoon, rol of commissie die bevoegd is het goed te keuren. Maak dit expliciet per beslissingstype (bijvoorbeeld "prijswijzigingen: VP Product; markttoetreding: CEO + bestuur").
* **Bijdragers** — mensen wier inbreng de opties of afwegingen wezenlijk heeft gevormd.
* **Verantwoordelijke eigenaar vanaf nu** — wie de beslissing onderhoudt, periodiek beoordeelt (jaarlijks is een gangbaar ritme) en uiteindelijk verantwoordelijk is voor het buiten gebruik stellen.

Governancevragen die de moeite waard zijn om eenmaal schriftelijk vast te leggen voor je organisatie (zie ook de [checklist](../checklist/index.md)):

* Wie kan een beslissingsdocument *voorstellen*? (Vaak: iedereen.)
* Wie kan er een *goedkeuren*, en verschilt dat per beslissingstype of per bedrags- of risicodrempel?
* Wat beslecht een patstelling of een meningsverschil: consensus, een aangewezen goedkeurder of escalatie?
* Hoe veranderlijk is een document na goedkeuring? Veel teams geven de voorkeur aan een "levend document"-model: nieuwe informatie wordt met een tijdstempel toegevoegd in plaats van stilletjes de geschiedenis te herschrijven.

## Best practices

* **Eén beslissing per document.** Weersta de neiging om meerdere keuzes in één document te bundelen — het wordt onmogelijk om ernaar te verwijzen, het te vervangen of later te doorzoeken.
* **Houd het kernachtig.** Een pagina, geen rapport. Als het langer dan een pagina wordt, is de beslissing waarschijnlijk meer dan één beslissing.
* **Schrijf de context voor een vreemde.** Ga ervan uit dat de lezer niets van de gedeelde context van de vergadering heeft en die over twee jaar ook niet zal hebben.
* **Formuleer de beslissing in de actieve vorm.** "We gaan migreren naar X", niet "X werd gezien als de voorkeursrichting."
* **Leg gevolgen uit als wat er verandert, niet als voor- en nadelen.** De discussie over afwegingen hoort bij "Overwogen opties"; "Gevolgen" gaat over wat er daarna gebeurt.
* **Bewaar documenten waar het team al werkt.** Een map `decisions/` onder versiebeheer, een wikiruimte of een map op een gedeelde schijf — de beste opslaglocatie is degene die je team daadwerkelijk zal openen.
* **Reserveer beslissingsdocumenten voor beslissingen die moeilijk terug te draaien zijn, meerdere gebieden raken of waarschijnlijk later ter discussie komen.** Niet elke keuze heeft er een nodig — zie de [checklist](../checklist/index.md#checklist-heeft-deze-beslissing-een-beslissingsdocument-nodig).
* **Vervang, verwijder niet stilletjes.** Als een beslissing verandert, schrijf dan een nieuw document en verwijs terug naar het document dat het vervangt.

## Veelgemaakte valkuilen

* **Het veranderen in papierwerk achteraf.** Als een beslissingsdocument wordt geschreven om een al genomen en aangekondigde keuze te rechtvaardigen, verliest het het grootste deel van zijn waarde — het punt is om het denken aan te scherpen *voordat* je je vastlegt, niet om achteraf een compliance-product te maken.
* **Logboekmoeheid.** Elke kleine keuze vastleggen begraaft de belangrijke en leert mensen het logboek niet meer te lezen. Beperk documenten tot beslissingen die echt moeilijk terug te draaien zijn of brede gevolgen hebben.
* **Voor- en nadelen schrijven in plaats van een beslissing.** Een document dat eindigt met een lijst afwegingen en geen duidelijk "we gaan X doen" is geen beslissingsdocument — het is een optiememo.
* **Geen verantwoordelijke eigenaar.** Een beslissingsdocument zonder aangewezen beslisser of beoordelaar raakt al snel verouderd en wordt niet meer vertrouwd.
* **Het sjabloon als bureaucratie behandelen in plaats van als checklist.** De waarde van het sjabloon is dat het een checklist is voor goed denken en goede communicatie — geen formulier dat je invult om het invullen.

## Beginnen in je organisatie

1. Kies één functie of team met een beslissing die al omstreden of moeilijk terug te draaien is.
2. Schrijf die ene beslissing uit met het [lichte sjabloon](../sjabloon/index.md#licht-sjabloon).
3. Bespreek het met de feitelijke beslisser en belanghebbenden; geef feedback een tijdsbestek.
4. Bewaar het op een duurzame en vindbare plek.
5. Zodra de werkwijze eenmaal nuttig blijkt, stel je die voor als lichte standaard voor het team — niet als een van bovenaf opgelegd mandaat. Beslissingsdocumenten werken het best als iets wat een team overneemt omdat het hun eigen leven makkelijker maakt, niet als afgedwongen papierwerk.

Zie de [handleiding](../handleiding/index.md) voor een volledige uitgewerkte rondleiding.

## Verder lezen

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — de beknopte specificatie die deze gids uitwerkt.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — het uitgebreidere bronproject dat deze gids voor een zakelijk publiek veralgemeniseert.
