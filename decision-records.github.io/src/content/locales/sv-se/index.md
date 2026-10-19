# Beslutspost (DR)

En beslutspost (DR) är ett sätt att initiera, diskutera och arkivera ett viktigt val, tillsammans med dess bakgrund och konsekvenser.

Innehåll:

- [Vad är en beslutspost?](#vad-är-en-beslutspost)
- [Mall för beslutspost](#mall-för-beslutspost)
- [Så börjar du använda beslutsposter](#så-börjar-du-använda-beslutsposter)
- [Varför är beslutsposter bättre än vanliga anteckningar?](#varför-är-beslutsposter-bättre-än-vanliga-anteckningar)
- [Så börjar du använda beslutsposter med verktyg](#så-börjar-du-använda-beslutsposter-med-verktyg)
- [Färdigheter för AI](#färdigheter-för-ai)
- [Förslag för att skriva bra beslutsposter](#förslag-för-att-skriva-bra-beslutsposter)
- [Råd om teamarbete för beslutsposter](#råd-om-teamarbete-för-beslutsposter)
- [Frågor om teamarbete för beslutsposter](#frågor-om-teamarbete-för-beslutsposter)
- [Mer information](#mer-information)

Det här finns i det här arkivet:

- [vägledning](vägledning) - vad en beslutspost är, varför man använder dem, livscykel, styrning med mera.
- [mall](mall) - mall att kopiera och klistra in, med Markdown-formatering och stegvisa förslag.
- [handledning](handledning) - en praktisk, stegvis genomgång: skriv din första beslutspost på under 20 minuter.
- [exempel](exempel) - exempel som startpunkter (pågående arbeten, inte färdiga beslut) för beslut inom strategi, försäljning, marknadsföring, produkt, HR, risk, projekt och teknik.
- [checklista](checklista): checklistor för att avgöra om man ska skriva en, skriva den väl, granska den och driva arbetssättet i hela en organisation.
- [hjälp](hjälp) — vanliga frågor, felsökning och ordlista för frågor som ledare ofta ställer när de inför detta.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — specifikationen för det här arkivet: struktur, innehåll, språkversioner, webbplats och agenter.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — innehållet, en katalog per språkversion; `en-us` är den engelska källan till sanning.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills som tillämpar det här arkivets mallar och checklistor i en AI-assistent: en för att skriva en beslutspost, en för att underhålla det här arkivet.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — SvelteKit 3-källkoden för [decision-records.github.io](https://decision-records.github.io), som marknadsför färdigheterna ovan.

## Vad är en beslutspost?

En **beslutspost** (DR) är ett sätt att initiera, diskutera och arkivera ett viktigt val, tillsammans med dess bakgrund och konsekvenser.

En **beslutslogg** (DL) är samlingen av alla DR som skapats och underhålls för ett visst projekt (eller en viss organisation).

Ett **beslut** i det här sammanhanget är en organisations val som möter ett betydande krav.

Ett **betydande krav** (SR) är ett projekts behov som har en mätbar effekt på projektets system.

Alla dessa begrepp hör till ämnet **kunskapshantering** (KM).

Målet med det här dokumentet är att ge en snabb överblick över beslutsposter.

## Beslutsposter är ett arbetssätt för organisationer

Överallt där ett val är svårt att ångra, påverkar andra eller kommer att ifrågasättas senare förtjänar det en beslutspost.

- Strategi: gå in på eller lämna en marknad, välja tillväxt eller lönsamhet, göra en treårssatsning
- Försäljning: ändra säljområdesmodell, välja CRM, omstrukturera ersättning
- Marknadsföring: ompositionera ett varumärke, välja kanalmix, välja byrå eller egen organisation
- Produkt: sätta prismodell, välja bygga eller köpa, avveckla en funktion eller produktlinje
- Ekonomi: välja finansieringsstruktur, sätta policy för kapitalallokering
- HR: sätta policy för distansarbete, utforma om nivåer och lönespann
- Risk och juridik: acceptera, mildra eller överföra en viss risk; välja en gräns för leverantörskoncentration
- Verksamhet: bygga eller köpa, ta in eller lägga ut, välja leveransmetodik
- Kommunikation: välja hållning vid krishantering, sätta policy för mediekontakter
- Kompetensutveckling: sätta policy för befordran eller utbildningssatsningar
- Teknik: välja molnleverantör, databas, integrationsmönster eller mjukvarumetodik

Om du kan föreställa dig att någon i ditt team om ett år frågar "vänta, varför gjorde vi på det här sättet?" är beslutet en kandidat för en beslutspost.

## Mall för beslutspost

Se vår fil [mall](mall/index.md), som använder dessa huvudavsnitt:

- **Rubrik**: kort imperativ i presens, upp till 50 tecken.

- **Status**: begäran om synpunkter | föreslagen | godkänd | avslagen | föråldrad | ersatt

- **Problem**: beskriv problemet du vill ta itu med och lämna inga frågor om varför.

- **Antaganden**: beskriv eventuella antaganden, förutsättningar, projektövergripande krav med mera.

- **Begränsningar**: fånga alla begränsningar som beslutet kan ställa på miljön.

- **Ståndpunkter**: lista de möjliga alternativen som fakta och data, inte åsikter.

- **Åsikter**: från teamet och intressenterna, samt från externa rådgivare och granskare.

- **Val**: förklara varför du valde en ståndpunkt, med syfte och ansvarsskyldighet.

- **Följder**: ange beslutets följder, till exempel behov av förändringar.

- **Relaterat**: till exempel referenser, projektövergripande arbete och uppföljande behov.

## Så börjar du använda beslutsposter

För att börja använda beslutsposter, prata med dina kollegor om dessa områden.

Identifiering av beslut:

- Hur brådskande och hur viktigt är beslutet?

- Måste det fattas nu, eller kan det vänta tills mer är känt?

- Både personlig och gemensam erfarenhet, liksom erkända designmetoder och arbetssätt, kan hjälpa till att identifiera beslut.

- Helst för du en beslutsbacklogg som kompletterar produktbackloggen.

Beslutsfattande:

- Det finns många tekniker för beslutsfattande, både generella och mjukvaruspecifika, till exempel dialogkartläggning.

- Gruppbeslut är ett aktivt forskningsområde.

Genomförande och efterlevnad av beslut:

- Beslut måste kommuniceras till, och accepteras av, intressenterna i systemet som finansierar, utvecklar och driver det.

- Arkitekturtydliga kodstilar och kodgranskningar som fokuserar på arkitekturfrågor och arkitekturbeslut är två relaterade arbetssätt.

- Beslut kan omprövas vid betydande förändringar av ett system, till exempel vid utveckling, uppgradering eller anpassning till förändrade krav.

Delning av beslut (valfritt):

- Många beslut återkommer i flera projekt.

- Därför kan erfarenheter av tidigare beslut, både goda och dåliga, vara värdefulla återanvändbara tillgångar när man använder en uttrycklig strategi för kunskapshantering.

- Gruppbeslut är ett aktivt forskningsområde.

Dokumentation av beslut:

- Det finns många mallar och verktyg för beslutsplanering och beslutsdokumentation.

- Se agila gemenskaper, till exempel M. Nygards arkitekturbeslutsposter.

- Se traditionella processer för programvaruutveckling och arkitekturdesign, till exempel tabelluppställningar som föreslagits av IBM UMF och av Tyree och Akerman på CapitalOne.

Vägledning för beslut:

- Stegen ovan är hämtade från Wikipedia-artikeln om [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Det finns många tekniker för beslutsfattande, både generella och sådana som är specifika för mjukvara och mjukvaruarkitektur, till exempel dialogkartläggning.

## Varför är beslutsposter bättre än vanliga anteckningar?

En beslutspost tillför en viss struktur till fria anteckningar.

En mall för beslutspost tillför en lista över punkter att täcka, som fungerar som en checklista.

Det viktiga resultatet är att team kan använda beslutsposter och mallar för att förbättra teamarbetet: både beslutsposterna och mallarna fungerar som checklistor som hjälper teamet att se till att allt täcks, och de kommunicerar effektivt.

Fördelarna med beslutsposter tenderar att växa med teamstorlek, projektutvidgning, integrationsmöjligheter, intressenters engagemang, långsiktigt underhåll och utveckling över tid.

Vi använder till exempel beslutsposter med stora team, över flera avdelningar, med flera partnerorganisationer, i fleråriga projekt och med budgetar på miljontals dollar. Vid sådan storlek och omfattning föredrar vi någon form av strukturerad kommunikation framför fria anteckningar.

I praktiken gillar vi också beslutsposter eftersom de uppmuntrar mer deltagande bland kollegor på distans, mer asynkron kommunikation, effektivare utvärdering av alternativ och mer sammanfattning framåt. Alla dessa aspekter hjälper också när nya kollegor ska introduceras, eftersom besluten är tydliga, kompletta, kortfattade och dokumenterade.

## Så börjar du använda beslutsposter med verktyg

Du kan börja använda beslutsposter med verktyg på vilket sätt du vill.

Till exempel:

- Om du gillar Google Drive och Google Docs, skapa en mapp `decisions` och ett dokument per beslutspost.

- Om du gillar versionshantering av källkod, skapa en katalog `decisions` och en textfil per beslutspost.

- Om du gillar projektplaneringsverktyg, som Atlassian Jira, använd verktygets planeringsspårare.

- Om du gillar wikis, som MediaWiki, skapa en wiki för beslutsposter med en wikisida per beslutspost.

## Färdigheter för AI

Om du använder [Claude Code](https://claude.com/claude-code) eller en annan agent som stöder [Claude Skills](https://code.claude.com/docs/en/skills) levereras det här arkivet med två färdigheter för AI i [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — för alla som skriver en beslutspost. Leder genom om ett val behöver en, att välja den lätta eller den heltäckande mallen, att skriva utkastet, arkivera det och checklistan före publicering.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — för underhållare av själva det här arkivet: att lägga till ett utarbetat exempel, hålla exempelindex och korsreferenser konsekventa samt det här arkivets filkonventioner.

För att använda en, klona det här arkivet och kopiera den färdighetsmapp du vill ha dit din agent läser in projektfärdigheter (för Claude Code vanligtvis `.claude/skills/<name>` i ditt eget projekt) — be sedan din assistent att använda den. Se [decision-records.github.io/skills](https://decision-records.github.io/skills/) för mer, och [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) för källkoden till den sidan.

## Förslag för att skriva bra beslutsposter

Egenskaper hos en bra beslutspost:

- Tidpunkt - Ange när beslutet fattades

- Rationalitet - Förklara skälet till att just det beslutet fattades.

- Oföränderlig post - Besluten i en tidigare publicerad beslutspost bör inte ändras.

- Specificitet - Varje beslutspost ska handla om ett enda beslut.

Egenskaper hos en bra bakgrund i en beslutspost:

- Förklara din organisations situation och affärsprioriteringar

- Ta med skäl och överväganden som bygger på teamens sociala sammansättning och kompetenser.

Egenskaper hos bra konsekvenser i en beslutspost:

- Rätt angreppssätt - "Vi behöver börja göra X i stället för Y"

- Fel angreppssätt - Förklara inte beslutet med "för- och nackdelar" med att ha fattat just det AD

En ny beslutspost kan ersätta en tidigare beslutspost:

- När ett beslut fattas som ersätter eller upphäver en tidigare beslutspost, skapa ett nytt beslut och hänvisa till det gamla.

## Råd om teamarbete för beslutsposter

Om du överväger att använda beslutsposter med ditt team finns här några råd som vi har lärt oss av att arbeta med många team.

Du har en möjlighet att leda dina kollegor genom att tillsammans prata om "varför" snarare än att påbjuda "vad". Beslutsposter är till exempel ett sätt för team att tänka smartare och kommunicera bättre; beslutsposter är inte värdefulla om de bara är ett påtvingat pappersarbete i efterhand.

Vissa team föredrar starkt namnet "beslut" framför förkortningen "beslutsposter". När vissa team använder katalognamnet "decisions" är det som om en glödlampa tänds, och teamet börjar lägga mer information i katalogen, till exempel leverantörsbeslut, planeringsbeslut, schemabeslut och så vidare. Alla dessa slags information kan använda samma mall. Vi har som hypotes att människor lär sig snabbare med ord ("beslut") än med förkortningar ("beslutsposter"), att människor är mer motiverade att skriva pågående dokument när ordet "post" tas bort, och att vissa utvecklare och chefer ogillar ordet "arkitektur".

I teorin är oföränderlighet idealet. I praktiken har föränderlighet fungerat bättre för våra team. Vi lägger in ny information i den befintliga beslutsposten, med datumstämpel och en anmärkning om att informationen kom efter beslutet. Det leder till ett "levande dokument" som vi alla kan uppdatera. Typiska uppdateringar sker när vi får information tack vare nya kollegor, nya erbjudanden, verkliga resultat av vår användning eller ändringar från tredje part i efterhand, som leverantörers funktioner, prisplaner, licensavtal och så vidare.

## Frågor om teamarbete för beslutsposter

### Vem kan skapa en beslutspost?

Överväg områden som särskilda personer, särskilda roller, särskilda team eller särskilda avdelningar; överväg också om det finns personer, roller, team eller avdelningar som kan beställa en beslutspost, det vill säga begära en som någon annan skriver.

Exempelsvar: Vem som helst i vår organisation som har läst README-sidan om arkitekturbeslutsposter kan föreslå en beslutspost, vilket betyder att personen kan börja skriva den och dela den med teamet.

### Vad motiverar att man skapar en beslutspost?

Överväg områden som din organisations teams arbetssätt, mjukvarusystemets struktur, samordning mellan team, långsiktig underhållbarhet, externa gränssnitt, vem du vill ska ha nytta av det och liknande.

Exempelsvar: Vi vill skapa en beslutspost när vi vill att framtida utvecklare ska förstå "varför" bakom det vi gör.

### Vad motiverar att man inte skapar en beslutspost?

Överväg områden som beslut som inte handlar om arkitektur, eller är små, som minimala risker, fristående eller med bara en utvecklare, eller som redan är fullt täckta på annat håll, som i standarder, policyer eller dokumentation, eller som är tillfälliga, som tillfälliga lösningar, koncepttester eller experiment.

Exempelsvar: Vi vill hoppa över en beslutspost när ett beslut är begränsat i omfattning, tid, risk och kostnad, eller redan täcks på annat håll.

### Vad är livscykeln för en beslutspost?

Överväg områden som skapandeprocessen, utredningsprocessen, beslutsprocessen, genomförandeprocessen och avvecklingsprocessen. Överväg hur livscykeln för beslutsposten följs över tid, till exempel hur man flyttar beslutsposten från ett tillstånd till nästa och hur detta kommuniceras till intressenterna.

Exempelsvar: Vi vill att en beslutspost ska ha fem livscykelsteg: Initiera → Utreda → Utvärdera → Genomföra → Underhålla → Avveckla.

### Vilka är kriterierna för livscykelstegen för en beslutspost?

Överväg områden som godkännandekriterier för en beslutspost, det vill säga hur vet man att den är tillräckligt bra för att gå från ett livscykelsteg till nästa? Är problemet tydligt formulerat? Har alternativen övervägts? Är avvägningarna tillräckligt väl förstådda och dokumenterade?
Finns all relevant bakgrund på plats? Är alla relevanta intressenter involverade? Har all återkoppling arbetats in?

Exempelsvar: Vi vill att en beslutspost ska röstas om av intressenterna när det aktiva teamet har 1) slutfört sin utredning, 2) slutfört sin utvärdering, 3) publicerat förslaget till beslutspost för intressenterna med en begäran om synpunkter och en tidsram på en vecka, 4) arbetat in och åtgärdat alla intressenters synpunkter.

### Vilka roller och ansvar samverkar med en beslutspost?

Överväg roller som förslagsställare, utredare, utvärderare, granskare, godkännare, underhållare och liknande. Överväg ansvar som kommunikation med intressenter, att säkerställa att förväntningar uppfylls, delning på webbplatsen eller intranätet och periodisk granskning av arbetet, särskilt när relevanta förändringar sker.

Exempelsvar: Vi vill att varje beslutspost alltid har en primär kontaktperson, en sekundär kontaktperson och ett ansvarigt team; dessa ansvarar för kommunikation, publicering, underhåll, periodisk granskning minst en gång per år och slutlig avveckling vid behov.

### Hur samverkar styrning med en beslutspost?

Överväg områden som din organisations arbetssätt, särskilda efterlevnadsbehov, till exempel juridiska eller personalrelaterade, och hur du vill hantera samsyn kontra konflikt kontra eskalering. Finns det områden, personer eller team som kan ha större inflytande än andra över en beslutspost, till exempel genom att kunna godkänna, rösta om eller lägga in veto mot den?

Exempelsvar: Styrningen av en beslutspost har denna prioritetsordning: vd, CTO, juridikchefen, teamet som genomför beslutsposten, experterna i teamet som är mest kunniga om ADD. Ingen annan har styrning om det inte beskrivs i beslutsposten.

### Vilka principer samverkar med en beslutspost?

Överväg områden som din organisations arbetssätt, inklusive att röra sig snabbt kontra långsamt, beslutssamsyn kontra beslutskonflikt, riskbenägenhet kontra säkerhetsbenägenhet, offentlig kontra privat diskussion och liknande.

Exempelsvar: Vi använder ledarskapsprinciperna benägenhet att agera, oenighet men ändå åtagande, att 70 % uppskattningar räcker för lätt ångerbara och lätt isolerbara beslut, och öppna arbetssätt med undantag för konfidentiell information enligt vår organisations sekretessavtal.

## Mer information

Introduktion:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Mallar:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Fördjupning:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - gratis månatlig lektion i mjukvaruarkitektur

Verktyg:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Företagsspecifik vägledning:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Exempel:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videor:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Poddar:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Böcker:

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

Se även:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
