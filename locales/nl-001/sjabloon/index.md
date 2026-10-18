# Sjablonen voor beslissingsdocumenten

Twee sjablonen, beide in gewone markdown: kopieer het gewenste sjabloon naar een nieuw bestand en vul het in.

## Welk sjabloon kiezen

Kies standaard het **lichte sjabloon** — de meeste beslissingen hebben aan de zes velden genoeg, en een pagina die daar overheen groeit, is meestal toch meer dan één beslissing.

Stap over op het **uitgebreide sjabloon** wanneer een beslissing een hoge inzet heeft, meerdere belanghebbenden heeft van wie de mening afzonderlijk telt, of echt een gestructureerde kosten-, SWOT- of PEST-analyse nodig heeft om de keuze later te verdedigen. Zie de [checklist](../checklist/index.md#checklist-heeft-deze-beslissing-een-beslissingsdocument-nodig) voor de bredere vraag of een beslissing überhaupt een document nodig heeft, en de [gids](../gids/index.md#de-opbouw-van-een-beslissingsdocument) voor hoe de velden van de twee sjablonen op elkaar aansluiten.

## Licht sjabloon

```markdown
# Titel (kort, tegenwoordige tijd, actief, maximaal ~50 tekens)

- Status: verzoek om feedback | voorgesteld | goedgekeurd | afgewezen | verouderd | vervangen
- Datum: JJJJ-MM-DD
- Beslisser(s): [naam of namen of rol(len) met de bevoegdheid dit goed te keuren]
- Eigenaar: [wie dit document onderhoudt en periodiek beoordeelt]

## Context

Beschrijf de situatie en de beperkingen die deze beslissing noodzakelijk maakten, zo geschreven dat een lezer zonder herinnering aan de vergadering begrijpt waarom de vraag zelfs maar opkwam.

## Overwogen opties

Som de realistische alternatieven op — inclusief "niets doen" indien relevant — als feiten en afwegingen, niet als een stroman-rij die de gekozen optie vanzelfsprekend juist laat lijken.

## Beslissing

Beschrijf de keuze in duidelijke, actieve taal: "We gaan X doen." Geen samenvatting van voor- en nadelen, maar een heldere verklaring van wat er is gekozen.

## Gevolgen

Beschrijf wat er als gevolg verandert: kosten, risico's, vervolgbeslissingen en alles wat wordt opgegeven door een alternatief niet te kiezen. Het moet lezen als "we doen nu X in plaats van Y", niet als een herhaling van voor- en nadelen van de al genomen beslissing.
```

Zie de [handleiding](../handleiding/index.md) voor een volledige uitgewerkte rondleiding van dit sjabloon en [voorbeelden/index.md](../voorbeelden/index.md) voor afgeronde, ingevulde voorbeelden.

## Uitgebreid sjabloon

```markdown
# Titel (kort, tegenwoordige tijd, actief, maximaal ~50 tekens)

- Status: verzoek om feedback | voorgesteld | goedgekeurd | afgewezen | verouderd | vervangen
- Datum: JJJJ-MM-DD
- Beslisser(s): [naam of namen of rol(len) met de bevoegdheid dit goed te keuren]
- Eigenaar: [wie dit document onderhoudt en periodiek beoordeelt]

Samenvatting: een of twee zinnen over de huidige stand en eventuele openstaande behoeften.

## Vraagstuk

Beschrijf het vraagstuk dat je wilt aanpakken. Laat geen vragen open over waarom je dit vraagstuk nu aanpakt.

Volg een minimalistische aanpak. Pak alleen de vraagstukken aan die op verschillende momenten in de levenscyclus aandacht nodig hebben.

Misschien wil je groeperingsinformatie toevoegen, zoals tags, trefwoorden, links naar de kennisbank, enzovoort.

## Aannames

Beschrijf alle onderliggende aannames in de omgeving waarin je de beslissing neemt.

Behandel zeker alle relevante kwaliteitskenmerken, ook wel cross-functionele eisen genoemd.

Voorbeelden van aannames kunnen gaan over scope, kosten, planning, technologie, beschikbaarheid van middelen, behoeften aan servicekwaliteit, service-niveauovereenkomsten, enzovoort.

Merk op dat beperkingen in de omgeving (zoals geaccepteerde technologiestandaarden, enterprise-architectuur, veelgebruikte patronen, enzovoort) kunnen beperken welke opties je overweegt.

## Beperkingen

Leg alle aanvullende beperkingen vast die deze beslissing aan de omgeving kan opleggen.

Behandel zoals hierboven zeker alle relevante kwaliteitskenmerken, ook wel cross-functionele eisen genoemd.

Voorbeelden van beperkingen kunnen gaan over platformkeuzes, leveranciersselecties, de mate waarin de beslissing omkeerbaar is, enzovoort.

## Overwogen opties (posities)

Som de posities op, de haalbare opties die je overweegt of hebt overwogen.

Gebruik feiten en gegevens, geen meningen. De posities vragen vaak om lange uitleg, soms zelfs om modellen en diagrammen.

Dit hoeft geen uitputtende lijst te zijn; je wilt echter de vraag "Heb je nagedacht over...?" niet horen tijdens een eindbeoordeling, omdat dat zou leiden tot verlies van geloofwaardigheid en vraagtekens bij andere architectuurbeslissingen.

Deze sectie helpt ook te waarborgen dat je de meningen van anderen hebt gehoord; het expliciet vermelden van andere meningen helpt hun voorstanders voor je beslissing te winnen.

### Kostenanalyse (optioneel)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Voorbeelden:

- Opstarten, zoals installatiekosten, tijd en middelen.

- Exploitatie, zoals ondersteuning en onderhoud

- Opleiding, zoals bijscholing en verandermanagement

- Licenties, zoals contractuele afspraken en juridische verplichtingen

- Meting van verbruik, zoals bandbreedte en CPU-gebruik

### SWOT-analyse (optioneel)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

- Sterktes

- Zwaktes

- Kansen

- Bedreigingen

### PEST-analyse (optioneel)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

- Politieke factoren

- Economische factoren

- Sociale factoren

- Technologische factoren

Sommige teams voegen deze graag als eigen categorieën toe:

- Juridische factoren - wij brengen deze liever onder bij de politieke factoren.

- Regelgevende factoren - wij brengen deze liever onder bij de politieke factoren.

- Milieufactoren - wij brengen deze liever onder bij de economische factoren.

- Demografische factoren - wij brengen deze liever onder bij de sociale factoren.

### Overige analyse (voeg hier je eigen ideeën toe)

Voeg hier je eigen ideeën toe...

## Meningen

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

- Van het team, bij voorkeur geschreven door de teamgenoot zelf.

- Van andere interne belanghebbenden, bij voorkeur geschreven door de belanghebbende zelf.

- Van externen, zoals externe adviseurs, evaluatoren, beoordelaars, enzovoort.

Maak bij elke mening duidelijk:

- Wie de mening geeft

- Welke andere kandidaten werden overwogen

- Hoe de auteur de kandidaten heeft beoordeeld

- Waarom de auteur de winnaar heeft gekozen

- Wat er sindsdien gebeurt

- Wat je mensen, met wat je nu weet, zou adviseren anders te doen

### Titel van mening 1 (voeg de jouwe hier toe)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Leg hier je mening uit.

### Titel van mening 2 (voeg de jouwe hier toe)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Leg hier je mening uit.

### Titel van mening 3 (voeg de jouwe hier toe)

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Leg hier je mening uit.

## Argumentatie

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Leg uit waarom je een positie hebt gekozen.

Beslissingen moeten doelgericht zijn. Om verantwoording te tonen, koppel je beslissingen expliciet aan de doelstellingen of eisen.

De argumentatie is waarschijnlijk net zo belangrijk als de beslissing zelf.

Dit hoeft geen uitputtend verslag te zijn; je wilt echter de vraag "Heb je nagedacht over...?" niet horen tijdens een eindbeoordeling, omdat dat (zoals hierboven) zou leiden tot verlies van geloofwaardigheid en vraagtekens bij andere architectuurbeslissingen.

## Gevolgen

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Beschrijf duidelijk de gevolgen van je beslissing. Dit kan zeer effectief zijn om draagvlak te krijgen en een routekaart voor de uitvoering te maken.

Een beslissing kan bijvoorbeeld de noodzaak scheppen andere beslissingen te nemen, nieuwe eisen creëren of bestaande eisen wijzigen, extra beperkingen aan de omgeving opleggen, heronderhandeling van scope of planning met klanten vereisen of extra opleiding van personeel nodig maken.

## Gerelateerde beslissingen

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Som hier alle gerelateerde beslissingen op.

We hebben in de praktijk gemerkt dat een traceerbaarheidsmatrix, beslisbomen of metamodellen nuttiger zijn. Metamodellen zijn nuttig om complexe relaties diagrammatisch weer te geven (zoals Rose-modellen).

## Gerelateerde eisen

Samenvatting: leg deze sectie kort uit en benoem bij voorkeur eventuele uitschieters.

Som hier alle gerelateerde eisen op.

We vinden het handiger om naar een traceerbaarheidsmatrix te verwijzen. Je kunt de bijdrage van elke beslissing aan het voldoen aan elke eis beoordelen en daarna beoordelen hoe goed de eis over alle beslissingen heen wordt vervuld. Als een beslissing niet bijdraagt aan het voldoen aan een eis, neem die beslissing dan niet.

## Gerelateerde producten

Som hier alle gerelateerde producten op.

Voorbeelden zijn scopedocumenten, planningsdocumenten, bedrijfsprocesmodellen, enzovoort, waarop deze beslissing van invloed is.

## Gerelateerde principes

Als de onderneming een overeengekomen set principes heeft, zorg dan dat de beslissing consistent is met een of meer daarvan. Dit helpt de afstemming over domeinen of systemen heen te waarborgen.

## Gerelateerde notities

Omdat besluitvormingsprocessen veel tijd kunnen kosten, vinden we het nuttig om notities en vraagstukken vast te leggen die het team bespreekt tijdens het afstemmingsproces.
```
