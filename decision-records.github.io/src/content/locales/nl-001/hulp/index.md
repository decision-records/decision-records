# Hulp / veelgestelde vragen

Veelgestelde vragen van leiders bij de invoering van beslissingsdocumenten, plus een korte woordenlijst.

Inhoud:

* [Veelgestelde vragen](#veelgestelde-vragen)
* [Probleemoplossing](#probleemoplossing)
* [Woordenlijst](#woordenlijst)
* [Waar nu naartoe](#waar-nu-naartoe)

## Veelgestelde vragen

**Hoe verschilt dit van een vergaderverslag?**
Notulen leggen vast wat er *besproken* is; een beslissingsdocument legt vast wat er *besloten is en waarom*, geschreven om zelfstandig te staan zonder de context van de vergadering. Notulen zijn een goede input voor een beslissingsdocument — ze zijn zelden een vervanging.

**Hoeveel tijd moet dit daadwerkelijk kosten?**
Voor een licht document over een beslissing die je al begrijpt: 15–30 minuten. De tijd is zelden verspild, want het is tijd die je anders zou besteden aan het steeds opnieuw uitleggen van dezelfde redenering in elk toekomstig gesprek over het onderwerp. Bewaar uitgebreide documenten — met kostenanalyse, SWOT/PEST en meerdere gedocumenteerde meningen — voor echt zwaarwegende beslissingen.

**Wie moet eigenaar zijn van ons beslissingenlogboek?**
Iemand die verantwoordelijk is voor het team of de functie die het dekt — vaak dezelfde persoon die anders een jaar later uit het hoofd moet antwoorden op "waarom deden we dit?" In grotere organisaties kan een lichte governance-eigenaar (bijvoorbeeld de Chief of Staff, het hoofd Strategie of een wisselende eigenaar per functie) de index bijhouden zonder elke afzonderlijke beslissing goed te keuren.

**Wat als de beslisser en de belanghebbenden het oneens zijn?**
Regel het *proces* vóór de *beslissing*: benoem vooraf wie het laatste woord heeft (een persoon of een vastgestelde regel, zoals "consensus, escaleren naar de CEO als het na een week niet is opgelost"). Leg afwijkende meningen vast in de sectie "Meningen" van het uitgebreide sjabloon in plaats van onenigheid uit te wissen — een goed gedocumenteerde afwijkende mening is waardevol als de beslissing later opnieuw wordt bekeken.

**Wat als we later ontdekken dat de beslissing verkeerd was?**
Daar is het document precies voor. Schrijf een nieuw beslissingsdocument dat het oude vervangt, leg uit wat er veranderd is (nieuwe informatie, veranderde omstandigheden of een denkfout) en verwijs terug. Ongelijk hebben is geen reden om het spoor te wissen — het is de reden dat het spoor bestaat.

**Hebben we hiervoor speciale software nodig?**
Nee. Een map met markdown- of Word-bestanden op een gedeelde schijf, een wikiruimte of een repository onder versiebeheer werken allemaal. Kies wat je team al dagelijks opent — invoering mislukt veel vaker door onbekende tooling dan door een ontbrekende functie.

**Kan een AI-assistent helpen bij het opstellen of beoordelen?**
Ja, productief, op twee manieren: (1) een eerste versie van Context en Overwogen opties opstellen op basis van vergadernotities of een transcript, die een menselijke beslisser corrigeert en afrondt; (2) een concept beoordelen aan de hand van de [checklist](../checklist/index.md) om ontbrekende opties, vage beslissingen of gevolgen die alleen het debat herhalen op te sporen. Een AI-assistent mag nooit de aangewezen beslisser zijn — de verantwoordelijkheid blijft bij een persoon of commissie.

**Is dit niet gewoon bureaucratie?**
Het wordt precies bureaucratie wanneer het wordt opgelegd als papierwerk achteraf voor beslissingen die al zijn genomen en aangekondigd. Het blijft waardevol wanneer het wordt gebruikt als *denkinstrument* vóór een beslissing, door de mensen die haar daadwerkelijk nemen. Zie [Veelgemaakte valkuilen](../gids/index.md#veelgemaakte-valkuilen) in de gids.

**Hoeveel beslissingsdocumenten zijn te veel?**
Als mensen het logboek niet meer lezen, heb je logboekmoeheid — je legt beslissingen vast die makkelijk terug te draaien waren of maar één persoon raakten. Beperk documenten tot keuzes die echt moeilijk terug te draaien zijn, meerdere gebieden raken of waarschijnlijk opnieuw worden bekeken. Zie de [checklist](../checklist/index.md#checklist-heeft-deze-beslissing-een-beslissingsdocument-nodig).

**Ons team houdt niet van het woord "architectuur" of "document" — maakt de naam uit?**
Niet voor de werking. Sommige teams krijgen de invoering veel sneller rond door de map simpelweg `decisions/` te noemen in plaats van `decision-records/` — hetzelfde sjabloon werkt onder beide namen. Gebruik wat je team ertoe brengt ze daadwerkelijk op te schrijven.

**Kan één beslissingsdocument voor meerdere bedrijfsonderdelen gelden?**
Ja, als de beslissing echt gedeeld is (bijvoorbeeld een bedrijfsbrede leverancier). Maar houd het bij *één beslissing*: als twee bedrijfsonderdelen in feite twee verschillende keuzes maken om twee verschillende redenen, schrijf dan twee documenten en koppel ze als gerelateerd.

## Probleemoplossing

| Symptoom | Waarschijnlijke oorzaak | Oplossing |
|---|---|---|
| Documenten stapelen zich eindeloos op in "verzoek om feedback" | Geen deadline of geen aangewezen beslisser | Voeg beide expliciet toe; ga standaard akkoord als er vóór een vermelde datum geen bezwaar is |
| Niemand leest het logboek | Te veel documenten met lage inzet; logboekmoeheid | Pas de checklist "heeft dit een document nodig?" strikter toe |
| Documenten lezen als een lijst voor- en nadelen, zonder echte beslissing | Beslissingsonderdeel geschreven voordat de beslissing daadwerkelijk was genomen | Publiceer "Beslissing" pas als definitief als de beslisser echt heeft besloten |
| Het team ziet het als papierwerk en schrijft ze met tegenzin | Van bovenaf als verplichting ingevoerd, of alleen achteraf gebruikt om eerdere keuzes te rechtvaardigen | Introduceer het opnieuw als hulpmiddel dat het team kiest omdat het later tijd bespaart, te beginnen met één zichtbaar nuttig voorbeeld |
| Niemand kan oude documenten vinden | Geen gedeelde, duurzame opslaglocatie of index | Maak één locatie `decisions/` met een indexpagina met titel, status en datum |
| Beslissingen worden stilletjes teruggedraaid zonder dat iemand het merkt | Geen conventie voor vervanging | Schrijf bij een gewijzigde beslissing altijd een nieuw document met status `vervangen` dat terugverwijst |

## Woordenlijst

* **Beslissingsdocument (DR)** — een document dat één belangrijke keuze vastlegt, met de context, de overwogen opties, de beslissing en de gevolgen.
* **Beslissingenlogboek (DL)** — de volledige verzameling beslissingsdocumenten van een team, functie of organisatie.
* **Architectural decision record (ADR)** — de softwarespecifieke voorloper van dit patroon, gericht op keuzes in technologie en ontwerp.
* **Status** — de fase in de levenscyclus van een beslissing: verzoek om feedback, voorgesteld, goedgekeurd, afgewezen, verouderd of vervangen.
* **Vervangen** — een beslissing die is vervangen door een nieuwere; het oude document blijft in het logboek met een verwijzing vooruit, in plaats van te worden verwijderd.
* **Significante eis** — een behoefte met een meetbaar effect op het systeem of de organisatie, het soort dat het schrijven van een beslissingsdocument rechtvaardigt.
* **Kennismanagement (KM)** — het bredere vakgebied waartoe beslissingsdocumenten behoren: institutionele kennis vastleggen zodat ze het geheugen van één persoon overleeft.

## Waar nu naartoe

* Nieuw met de werkwijze? Begin met de [gids](../gids/index.md).
* Klaar om er een te schrijven? Volg de [handleiding](../handleiding/index.md).
* Een sjabloon nodig om te kopiëren? Zie [sjabloon/index.md](../sjabloon/index.md).
* Eerst een voorbeeld in jouw domein zien? Blader door [voorbeelden/index.md](../voorbeelden/index.md).
* Voer je dit uit in een team? Gebruik de [checklist](../checklist/index.md).
