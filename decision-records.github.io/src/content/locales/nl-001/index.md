# Beslissingsdocument (DR)

Een beslissingsdocument (decision record, DR) is een manier om een belangrijke keuze te starten, te bespreken en te archiveren, samen met de context en de gevolgen ervan.

Inhoud:

- [Wat is een beslissingsdocument?](#wat-is-een-beslissingsdocument)
- [Sjabloon voor een beslissingsdocument](#sjabloon-voor-een-beslissingsdocument)
- [Hoe begin je met beslissingsdocumenten?](#hoe-begin-je-met-beslissingsdocumenten)
- [Waarom zijn beslissingsdocumenten beter dan gewone notities?](#waarom-zijn-beslissingsdocumenten-beter-dan-gewone-notities)
- [Hoe begin je met beslissingsdocumenten met tools?](#hoe-begin-je-met-beslissingsdocumenten-met-tools)
- [Vaardigheden voor AI](#vaardigheden-voor-ai)
- [Suggesties voor het schrijven van goede beslissingsdocumenten](#suggesties-voor-het-schrijven-van-goede-beslissingsdocumenten)
- [Teamwerkadvies voor beslissingsdocumenten](#teamwerkadvies-voor-beslissingsdocumenten)
- [Teamwerkvragen voor beslissingsdocumenten](#teamwerkvragen-voor-beslissingsdocumenten)
- [Meer informatie](#meer-informatie)

Wat er in deze repository staat:

- [gids](gids) - wat een beslissingsdocument is, waarom mensen ze gebruiken, de levenscyclus, governance en meer.
- [sjabloon](sjabloon) - een sjabloon om te kopiëren en te plakken, met markdown-opmaak en stapsgewijze suggesties.
- [handleiding](handleiding) - een praktische, stapsgewijze rondleiding: schrijf je eerste beslissingsdocument in minder dan 20 minuten.
- [voorbeelden](voorbeelden) - voorbeelden als vertrekpunt (werk in uitvoering, geen afgeronde beslissingen) voor beslissingen op het gebied van strategie, verkoop, marketing, product, HR, risico, projecten en technologie.
- [checklist](checklist): checklists om te bepalen of je er een moet schrijven, om het goed te doen, om het te beoordelen en om de werkwijze in een hele organisatie te laten werken.
- [hulp](hulp) — veelgestelde vragen, probleemoplossing en een woordenlijst voor vragen die leiders vaak stellen bij de invoering.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — de specificatie van deze repository: indeling, inhoud, locales, website en agents.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — de inhoud, één map per locale; `en-us` is de Engelse bron van waarheid.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills die de sjablonen en checklists van deze repository toepassen in een AI-assistent: één voor het schrijven van een beslissingsdocument, één voor het onderhouden van deze repository.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — de SvelteKit 3-broncode van [decision-records.github.io](https://decision-records.github.io), dat de bovenstaande skills promoot.

## Wat is een beslissingsdocument?

Een **beslissingsdocument** (DR) is een manier om een belangrijke keuze te starten, te bespreken en te archiveren, samen met de context en de gevolgen ervan.

Een **beslissingenlogboek** (DL) is de verzameling van alle DR's die voor een bepaald project (of een bepaalde organisatie) zijn gemaakt en worden onderhouden.

Een **beslissing** is in deze context een keuze van een organisatie die inspeelt op een significante eis.

Een **significante eis** (SR) is een behoefte van een project met een meetbaar effect op het systeem van een project.

Al deze termen vallen onder het onderwerp **kennismanagement** (KM).

Het doel van dit document is een snel overzicht van beslissingsdocumenten te geven.

## Beslissingsdocumenten zijn een werkwijze voor organisaties

Overal waar een keuze moeilijk terug te draaien is, andere mensen raakt of later ter discussie zal staan, verdient die een beslissingsdocument.

- Strategie: een markt betreden of verlaten, kiezen tussen groei en winstgevendheid, een driejarige gok vastleggen
- Verkoop: het gebiedsmodel wijzigen, een CRM kiezen, de beloning herstructureren
- Marketing: een merk herpositioneren, de kanaalmix kiezen, kiezen tussen een bureau en een eigen team
- Product: het prijsmodel bepalen, kiezen tussen zelf bouwen en kopen, een functie of productlijn uitfaseren
- Financiën: een financieringsstructuur kiezen, een beleid voor kapitaalallocatie vaststellen
- HR: een thuiswerkbeleid vaststellen, functieniveaus en salarisschalen herontwerpen
- Risico en juridisch: een specifiek risico accepteren, beperken of overdragen; een limiet voor leveranciersconcentratie kiezen
- Operatie: zelf doen of kopen, intern houden of uitbesteden, een leveringsmethodiek kiezen
- Communicatie: een houding voor crisiscommunicatie kiezen, een beleid voor mediacontact vaststellen
- Professionele ontwikkeling: een beleid voor promotie of investering in opleiding vaststellen
- Technologie: een cloudprovider, database, integratiepatroon of softwaremethodiek kiezen

Als je je kunt voorstellen dat iemand in je team over een jaar vraagt: "wacht, waarom hebben we het zo gedaan?", dan is die beslissing een kandidaat voor een beslissingsdocument.

## Sjabloon voor een beslissingsdocument

Zie ons bestand [sjabloon](sjabloon/index.md), dat deze hoofdonderdelen gebruikt:

- **Titel**: korte gebiedende wijs in de tegenwoordige tijd, maximaal 50 tekens.

- **Status**: verzoek om feedback | voorgesteld | goedgekeurd | afgewezen | verouderd | vervangen

- **Vraagstuk**: beschrijf het vraagstuk dat je wilt aanpakken en laat geen vragen open over het waarom.

- **Aannames**: beschrijf aannames, uitgangspunten, eisen over projecten heen, enzovoort.

- **Beperkingen**: leg vast welke beperkingen deze beslissing aan de omgeving kan opleggen.

- **Opties**: som de mogelijke kandidaten op als feiten en gegevens, niet als meningen.

- **Meningen**: van het team en de belanghebbenden, en ook van externe adviseurs en beoordelaars.

- **Keuze**: leg uit waarom je een optie hebt gekozen, met doel en verantwoording.

- **Gevolgen**: beschrijf de gevolgen van je beslissing, zoals de noodzaak van wijzigingen.

- **Gerelateerd**: zoals referenties, werk over projecten heen en vervolgbehoeften.

## Hoe begin je met beslissingsdocumenten?

Om met beslissingsdocumenten te beginnen, praat je met je teamgenoten over deze gebieden.

Beslissingen signaleren:

- Hoe urgent en hoe belangrijk is de beslissing?

- Moet die nu worden genomen, of kan die wachten tot er meer bekend is?

- Zowel persoonlijke en collectieve ervaring als erkende ontwerpmethoden en werkwijzen kunnen helpen bij het signaleren van beslissingen.

- Houd idealiter een takenlijst voor beslissingen bij, als aanvulling op de takenlijst van het product.

Beslissingen nemen:

- Er bestaan veel technieken voor besluitvorming, zowel algemene als softwarespecifieke, bijvoorbeeld dialogue mapping.

- Groepsbesluitvorming is een actief onderzoeksonderwerp.

Beslissingen uitvoeren en handhaven:

- Beslissingen moeten worden gecommuniceerd aan, en geaccepteerd door, de belanghebbenden van het systeem die het financieren, ontwikkelen en beheren.

- Architectuurzichtbare programmeerstijlen en code-reviews die zich richten op architectuurkwesties en -beslissingen zijn twee verwante werkwijzen.

- Beslissingen kunnen worden heroverwogen bij ingrijpende wijzigingen in een systeem, zoals het doorontwikkelen of upgraden van een systeem of het aanpassen aan veranderende eisen.

Beslissingen delen (optioneel):

- Veel beslissingen komen terug in meerdere projecten.

- Daarom kunnen ervaringen met eerdere beslissingen, zowel goede als slechte, waardevolle herbruikbare bronnen zijn bij een expliciete kennismanagementstrategie.

- Groepsbesluitvorming is een actief onderzoeksonderwerp.

Beslissingen documenteren:

- Er bestaan veel sjablonen en tools voor het plannen en vastleggen van beslissingen.

- Zie agile gemeenschappen, bijvoorbeeld de architectural decision records van M. Nygard.

- Zie traditionele softwareontwikkeling en architectuurontwerpprocessen, bijvoorbeeld de tabelindelingen voorgesteld door IBM UMF en door Tyree en Akerman van CapitalOne.

Beslissingen begeleiden:

- De bovenstaande stappen zijn overgenomen uit het Wikipedia-artikel [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Er bestaan veel technieken voor besluitvorming, zowel algemene als specifiek voor software en softwarearchitectuur, bijvoorbeeld dialogue mapping.

## Waarom zijn beslissingsdocumenten beter dan gewone notities?

Een beslissingsdocument voegt structuur toe aan notities in vrije vorm.

Een sjabloon voor beslissingsdocumenten voegt een lijst met te behandelen punten toe, die als checklist functioneert.

Het belangrijke resultaat is dat teams beslissingsdocumenten en sjablonen kunnen gebruiken om beter samen te werken: beslissingsdocumenten en sjablonen werken allebei als checklists die het team helpen alle zaken te dekken, en ze zorgen voor efficiënte en effectieve communicatie.

De voordelen van beslissingsdocumenten nemen doorgaans toe met teamgrootte, projectuitbreiding, integratiemogelijkheden, betrokkenheid van belanghebbenden, onderhoud op lange termijn en ontwikkeling in de tijd.

Wij gebruiken beslissingsdocumenten bijvoorbeeld bij grote teams, over meerdere afdelingen heen, met meerdere partnerorganisaties, bij projecten van meerdere jaren en met budgetten van miljoenen. Bij die omvang en reikwijdte geven we de voorkeur aan enige gestructureerde communicatie boven notities in vrije vorm.

In de praktijk gebruiken we beslissingsdocumenten ook graag omdat ze meer deelname van teamgenoten op afstand, meer asynchrone communicatie, een efficiëntere beoordeling van opties en meer samenvattingen voor de toekomst stimuleren. Al deze aspecten helpen ook bij het inwerken van nieuwe teamgenoten, omdat de beslissingen duidelijk, volledig, beknopt en vastgelegd zijn.

## Hoe begin je met beslissingsdocumenten met tools?

Je kunt op elke gewenste manier met tools met beslissingsdocumenten beginnen.

Bijvoorbeeld:

- Als je Google Drive en Google Docs prettig vindt, maak dan een map `decisions` en een document per beslissingsdocument.

- Als je versiebeheer van broncode prettig vindt, maak dan een map `decisions` en een tekstbestand per beslissingsdocument.

- Als je planningstools zoals Atlassian Jira prettig vindt, gebruik dan de planningstracker van de tool.

- Als je wiki's zoals MediaWiki prettig vindt, maak dan een wiki voor beslissingsdocumenten, met een wikipagina per beslissingsdocument.

## Vaardigheden voor AI

Als je [Claude Code](https://claude.com/claude-code) of een andere agent gebruikt die [Claude Skills](https://code.claude.com/docs/en/skills) ondersteunt, bevat deze repository twee skills voor AI in [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — voor iedereen die een beslissingsdocument schrijft. Loopt langs de vraag of een keuze er een nodig heeft, de keuze tussen het lichte of uitgebreide sjabloon, het opstellen, het opbergen en de checklist vóór publicatie.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — voor beheerders van deze repository zelf: een uitgewerkt voorbeeld toevoegen, de voorbeeldindex en verwijzingen consistent houden en de bestandsconventies van deze repository.

Om er een te gebruiken, kloon je deze repository en kopieer je de gewenste skillmap naar de plek waar je agent projectskills laadt (voor Claude Code meestal `.claude/skills/<name>` in je eigen project) — en vraag je je assistent hem te gebruiken. Zie [decision-records.github.io/skills](https://decision-records.github.io/skills/) voor meer en [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) voor de bron van die pagina.

## Suggesties voor het schrijven van goede beslissingsdocumenten

Kenmerken van een goed beslissingsdocument:

- Tijdstip - Geef aan wanneer de beslissing is genomen.

- Rationaliteit - Leg de reden uit voor het nemen van de specifieke beslissing.

- Onveranderlijk document - De beslissingen in een eerder gepubliceerd beslissingsdocument mogen niet worden gewijzigd.

- Specificiteit - Elk beslissingsdocument gaat over één enkele beslissing.

Kenmerken van een goede context in een beslissingsdocument:

- Leg de situatie en de zakelijke prioriteiten van je organisatie uit.

- Neem argumenten en overwegingen op die gebaseerd zijn op de sociale samenstelling en de vaardigheden van je teams.

Kenmerken van goede gevolgen in een beslissingsdocument:

- Juiste aanpak - "We moeten X gaan doen in plaats van Y"

- Verkeerde aanpak - Leg de beslissing niet uit in termen van "voordelen" en "nadelen" van de specifieke AD.

Een nieuw beslissingsdocument kan de plaats innemen van een eerder beslissingsdocument:

- Wanneer een beslissing wordt genomen die een eerder beslissingsdocument vervangt of ongeldig maakt, maak dan een nieuwe beslissing en verwijs naar de oude beslissing.

## Teamwerkadvies voor beslissingsdocumenten

Als je overweegt beslissingsdocumenten met je team te gebruiken, volgt hier advies dat we hebben geleerd door met veel teams te werken.

Je hebt de kans je teamgenoten te leiden door samen over het "waarom" te praten, in plaats van het "wat" op te leggen. Beslissingsdocumenten zijn bijvoorbeeld een manier waarop teams slimmer kunnen denken en beter kunnen communiceren; ze zijn niet waardevol als ze slechts een achteraf afgedwongen papieren verplichting zijn.

Sommige teams geven veel de voorkeur aan de naam "beslissingen" boven de afkorting "beslissingsdocumenten". Wanneer sommige teams de mapnaam "decisions" gebruiken, gaat er als het ware een lampje branden en begint het team meer informatie in de map te zetten, zoals leveranciersbeslissingen, planningsbeslissingen, roosterbeslissingen, enzovoort. Al deze soorten informatie kunnen hetzelfde sjabloon gebruiken. Wij veronderstellen dat mensen sneller leren met woorden ("beslissingen") dan met afkortingen ("beslissingsdocumenten"), dat mensen meer gemotiveerd zijn om documenten in uitvoering te schrijven als het woord "document" wegvalt, en dat sommige ontwikkelaars en managers het woord "architectuur" niet mogen.

In theorie is onveranderlijkheid ideaal. In de praktijk heeft veranderlijkheid beter gewerkt voor onze teams. We voegen nieuwe informatie toe aan het bestaande beslissingsdocument, met een datumstempel en een opmerking dat de informatie na de beslissing is binnengekomen. Zo ontstaat een "levend document" dat we allemaal kunnen bijwerken. Typische aanleidingen voor updates zijn informatie dankzij nieuwe teamgenoten, nieuw aanbod of praktijkresultaten van ons gebruik, of wijzigingen door derden achteraf, zoals mogelijkheden van leveranciers, prijsplannen en licentieovereenkomsten.

## Teamwerkvragen voor beslissingsdocumenten

### Wie kan een beslissingsdocument maken?

Denk aan gebieden zoals specifieke personen, rollen, teams of afdelingen; denk er ook aan of er personen, rollen, teams of afdelingen zijn die een beslissingsdocument kunnen laten opstellen, dat wil zeggen er een aanvragen die iemand anders schrijft.

Voorbeeldantwoord: Iedereen in onze organisatie die de README-pagina over architectural decision records heeft gelezen, kan een beslissingsdocument voorstellen, dat wil zeggen beginnen met schrijven en het delen met het team.

### Wat rechtvaardigt het opstellen van een beslissingsdocument?

Denk aan gebieden zoals de werkwijzen van de teams in je organisatie, de structuur van je softwaresysteem, coördinatie tussen teams, onderhoudbaarheid op lange termijn, externe interfaces, wie je wilt laten profiteren en dergelijke.

Voorbeeldantwoord: We willen een beslissingsdocument maken wanneer we willen dat toekomstige ontwikkelaars het "waarom" begrijpen van wat we doen.

### Wat rechtvaardigt het niet opstellen van een beslissingsdocument?

Denk aan gebieden zoals beslissingen die niet over architectuur gaan, die klein zijn (met minimaal risico, op zichzelf staand of voor één ontwikkelaar), die al volledig elders zijn gedekt (bijvoorbeeld door standaarden, beleid of documentatie) of die tijdelijk zijn (zoals workarounds, proofs of concept of experimenten).

Voorbeeldantwoord: We slaan een beslissingsdocument over wanneer een beslissing beperkt is in reikwijdte, tijd, risico en kosten, of al elders is gedekt.

### Wat is de levenscyclus van een beslissingsdocument?

Denk aan gebieden zoals het aanmaakproces, het onderzoeksproces, het besluitvormingsproces, het implementatieproces en het uitfaseringsproces. Denk na over hoe je de levenscyclus van het beslissingsdocument in de tijd volgt, bijvoorbeeld hoe je het van de ene status naar de volgende brengt en hoe je dit aan belanghebbenden communiceert.

Voorbeeldantwoord: We willen dat een beslissingsdocument vijf fasen in de levenscyclus heeft: Initiëren → Onderzoeken → Evalueren → Implementeren → Onderhouden → Uitfaseren.

### Wat zijn de criteria voor de stappen in de levenscyclus van een beslissingsdocument?

Denk aan gebieden zoals acceptatiecriteria voor een beslissingsdocument, dat wil zeggen hoe weet je dat het goed genoeg is om van de ene stap in de levenscyclus naar de volgende te gaan? Is het probleem duidelijk verwoord? Zijn de alternatieven overwogen? Zijn de afwegingen goed genoeg begrepen en gedocumenteerd?
Is alle relevante context aanwezig? Zijn alle relevante belanghebbenden betrokken? Is alle feedback verwerkt?

Voorbeeldantwoord: We willen dat belanghebbenden over een beslissingsdocument stemmen wanneer het actieve team 1) zijn onderzoek heeft afgerond, 2) zijn evaluatie heeft afgerond, 3) het voorstel voor het beslissingsdocument aan de belanghebbenden heeft gepubliceerd met een verzoek om feedback en een tijdsbestek van een week, 4) alle opmerkingen van belanghebbenden zijn verwerkt en behandeld.

### Welke rollen en verantwoordelijkheden hebben te maken met een beslissingsdocument?

Denk aan rollen zoals voorsteller, onderzoeker, evaluator, beoordelaar, goedkeurder, beheerder en dergelijke. Denk aan verantwoordelijkheden zoals communicatie met belanghebbenden, zorgen dat verwachtingen worden waargemaakt, delen op de website of het intranet en het periodiek beoordelen van het werk, vooral wanneer relevante wijzigingen optreden.

Voorbeeldantwoord: We willen dat elk beslissingsdocument altijd een primaire contactpersoon, een secundaire contactpersoon en een verantwoordelijk team heeft; zij zijn verantwoordelijk voor communicatie, publicaties, onderhoud, periodieke beoordeling minstens eens per jaar en uiteindelijke uitfasering waar nodig.

### Hoe verhoudt governance zich tot een beslissingsdocument?

Denk aan gebieden zoals de werkwijzen van je organisatie, bijzondere compliancebehoeften (bijvoorbeeld juridische of HR-aspecten) en hoe je wilt omgaan met consensus versus conflict versus escalatie. Zijn er gebieden, personen of teams die meer invloed kunnen hebben dan anderen op een beslissingsdocument, bijvoorbeeld door het te kunnen goedkeuren, erover te kunnen stemmen of er een veto over te kunnen uitspreken?

Voorbeeldantwoord: De governance van een beslissingsdocument verloopt in deze volgorde van prioriteit: de CEO, de CTO, de CLO, het team dat een beslissingsdocument implementeert, de experts in het team die het meeste weten over de AD. Niemand anders heeft governance, tenzij dat in het beslissingsdocument is beschreven.

### Welke principes hebben te maken met een beslissingsdocument?

Denk aan gebieden zoals de werkwijzen van je organisatie, waaronder snel versus langzaam handelen, consensus versus conflict bij beslissingen, voorkeuren voor risico versus veiligheid, openbare versus besloten discussie, en dergelijke.

Voorbeeldantwoord: We gebruiken de leiderschapsprincipes bias for action, disagree-and-commit, 70%-schattingen zijn goed genoeg voor gemakkelijk omkeerbare, gemakkelijk af te bakenen beslissingen, en openbare werkwijzen met uitzondering van vertrouwelijke informatie zoals beschreven in de geheimhoudingsovereenkomst van onze organisatie.

## Meer informatie

Inleiding:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Sjablonen:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Verdieping:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - gratis maandelijkse les over softwarearchitectuur

Tools:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Bedrijfsspecifieke richtlijnen:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Voorbeelden:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Video's:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Boeken:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Zie ook:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM's e-Business Reference Architecture Framework
