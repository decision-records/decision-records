# Beslutningspost (DR)

En beslutningspost (decision record, DR) er en måde at igangsætte, drøfte og arkivere et vigtigt valg på sammen med dets kontekst og konsekvenser.

Indhold:

- [Hvad er en beslutningspost?](#hvad-er-en-beslutningspost)
- [Skabelon til beslutningsposter](#skabelon-til-beslutningsposter)
- [Sådan kommer du i gang med beslutningsposter](#sådan-kommer-du-i-gang-med-beslutningsposter)
- [Hvorfor er beslutningsposter bedre end blot noter?](#hvorfor-er-beslutningsposter-bedre-end-blot-noter)
- [Sådan kommer du i gang med beslutningsposter med værktøjer](#sådan-kommer-du-i-gang-med-beslutningsposter-med-værktøjer)
- [Færdigheder til AI](#færdigheder-til-ai)
- [Forslag til at skrive gode beslutningsposter](#forslag-til-at-skrive-gode-beslutningsposter)
- [Råd om teamarbejde til beslutningsposter](#råd-om-teamarbejde-til-beslutningsposter)
- [Spørgsmål om teamarbejde til beslutningsposter](#spørgsmål-om-teamarbejde-til-beslutningsposter)
- [Mere information](#mere-information)

Hvad der er i dette repository:

- [vejledning](vejledning) - hvad en beslutningspost er, hvorfor folk bruger dem, livscyklus, styring og mere.
- [skabelon](skabelon) - skabelon til at kopiere og indsætte, med markdown-formatering og trinvise forslag.
- [gennemgang](gennemgang) - en praktisk, trinvis gennemgang: skriv din første beslutningspost på under 20 minutter.
- [eksempler](eksempler) - eksempler som udgangspunkt (igangværende arbejde, ikke færdige beslutninger) inden for strategi, salg, marketing, produkt, HR, risiko, projekt og teknologi.
- [tjekliste](tjekliste): tjeklister til at afgøre, om du skal skrive en, til at skrive den godt, til at gennemgå den og til at drive arbejdsmetoden i en hel organisation.
- [hjælp](hjælp) — ofte stillede spørgsmål, fejlfinding og en ordliste til almindelige spørgsmål, som ledere stiller, når de indfører dette.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — specifikationen af dette repository: opbygning, indhold, locales, websted og agenter.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — indholdet, én mappe pr. locale; `en-us` er den engelske kilde til sandhed.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills, der anvender dette repositorys skabeloner og tjeklister i en AI-assistent: én til at skrive en beslutningspost og én til at vedligeholde dette repository.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — SvelteKit 3-kilden til [decision-records.github.io](https://decision-records.github.io), som fremmer ovenstående skills.

## Hvad er en beslutningspost?

En **beslutningspost** (DR) er en måde at igangsætte, drøfte og arkivere et vigtigt valg på sammen med dets kontekst og konsekvenser.

En **beslutningslog** (DL) er samlingen af alle DR'er, der er oprettet og vedligeholdes for et bestemt projekt (eller en bestemt organisation).

En **beslutning** er i denne sammenhæng en organisations valg, der adresserer et væsentligt krav.

Et **væsentligt krav** (SR) er et projekts behov, der har en målbar effekt på et projekts system.

Alle disse begreber hører under emnet **videnstyring** (KM).

Formålet med dette dokument er at give et hurtigt overblik over beslutningsposter.

## Beslutningsposter er arbejdsmetoder for organisationer

Hvor end et valg er svært at gøre om, påvirker andre mennesker eller vil blive sat spørgsmålstegn ved senere, fortjener det en beslutningspost.

- Strategi: gå ind på eller forlade et marked, vælge mellem vækst og rentabilitet, fastlægge et treårigt væddemål
- Salg: ændre områdemodel, vælge et CRM, omstrukturere aflønning
- Marketing: ompositionere et brand, vælge kanalmix, vælge mellem bureau og intern løsning
- Produkt: fastlægge prismodel, vælge mellem selv at bygge og købe, udfase en funktion eller produktlinje
- Økonomi: vælge finansieringsstruktur, fastlægge en politik for kapitalallokering
- HR: fastlægge en politik for hjemmearbejde, gentænke lønniveauer og lønbånd
- Risiko og jura: acceptere, afbøde eller overføre en bestemt risiko; vælge en grænse for leverandørkoncentration
- Drift: selv eller købe, internt eller outsourcet, vælge leveringsmetode
- PR: vælge holdning til krisekommunikation, fastlægge en politik for mediekontakt
- Faglig udvikling: fastlægge en politik for forfremmelse eller investering i uddannelse
- Teknologi: vælge cloududbyder, database, integrationsmønster eller softwaremetode

Hvis du kan forestille dig, at en på dit team om et år spørger: "vent, hvorfor gjorde vi det sådan?", er den beslutning en kandidat til en beslutningspost.

## Skabelon til beslutningsposter

Se vores fil [skabelon](skabelon/index.md), som bruger disse hovedafsnit:

- **Titel**: kort bydemåde i nutid på op til 50 tegn.

- **Status**: anmodning om kommentarer | foreslået | godkendt | afvist | forældet | erstattet

- **Problemstilling**: beskriv det problem, du vil adressere, og efterlad ingen tvivl om hvorfor.

- **Antagelser**: beskriv antagelser, forudsætninger, krav på tværs af projekter osv.

- **Begrænsninger**: notér de begrænsninger i omgivelserne, som denne beslutning kan medføre.

- **Muligheder**: oplist de mulige kandidater som fakta og data, ikke meninger.

- **Holdninger**: fra teamet og interessenterne samt fra eksterne rådgivere og anmeldere.

- **Valg**: forklar, hvorfor du valgte en mulighed, med formål og ansvarlighed.

- **Konsekvenser**: angiv din beslutnings konsekvenser, fx behov for ændringer.

- **Relateret**: fx referencer, arbejde på tværs af projekter og opfølgende behov.

## Sådan kommer du i gang med beslutningsposter

For at komme i gang med beslutningsposter skal du tale med dine teamkolleger om disse områder.

Identifikation af beslutninger:

- Hvor presserende og hvor vigtig er beslutningen?

- Skal den træffes nu, eller kan den vente, til man ved mere?

- Både personlig og fælles erfaring samt anerkendte designmetoder og praksisser kan hjælpe med at identificere beslutninger.

- Hold gerne en opgaveliste over beslutninger, som supplerer produktets opgaveliste.

Beslutningstagning:

- Der findes en række beslutningsteknikker, både generelle og softwarespecifikke, fx dialogue mapping.

- Gruppebeslutninger er et aktivt forskningsemne.

Gennemførelse og håndhævelse af beslutninger:

- Beslutninger skal kommunikeres til og accepteres af de interessenter i systemet, som finansierer, udvikler og driver det.

- Arkitekturtydelige kodestile og kodegennemgange med fokus på arkitekturspørgsmål og -beslutninger er to beslægtede praksisser.

- Beslutninger kan genovervejes ved væsentlige ændringer af et system, fx når man videreudvikler eller opgraderer et system eller tilpasser det til ændrede krav.

Deling af beslutninger (valgfrit):

- Mange beslutninger går igen på tværs af projekter.

- Derfor kan erfaringer med tidligere beslutninger, både gode og dårlige, være værdifulde genanvendelige aktiver, når man bruger en eksplicit strategi for videnstyring.

- Gruppebeslutninger er et aktivt forskningsemne.

Dokumentation af beslutninger:

- Der findes mange skabeloner og værktøjer til planlægning og registrering af beslutninger.

- Se agile fællesskaber, fx M. Nygards architectural decision records.

- Se traditionelle softwareudviklings- og arkitekturdesignprocesser, fx de tabellayouts, som IBM UMF og Tyree og Akerman fra CapitalOne foreslår.

Vejledning om beslutninger:

- Ovenstående trin er hentet fra Wikipedia-artiklen [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Der findes en række beslutningsteknikker, både generelle og specifikke for software og softwarearkitektur, fx dialogue mapping.

## Hvorfor er beslutningsposter bedre end blot noter?

En beslutningspost tilføjer lidt struktur til noter i fri form.

En skabelon til beslutningsposter tilføjer en liste over punkter, der skal dækkes, og som fungerer som en tjekliste.

Det vigtige resultat er, at teams kan bruge beslutningsposter og skabeloner til at forbedre samarbejdet: beslutningsposter og skabeloner fungerer begge som tjeklister, der hjælper teamet med at dække alle forhold og kommunikere effektivt.

Fordelene ved beslutningsposter vokser typisk med teamstørrelse, projektudvidelse, integrationsmuligheder, interessentinddragelse, langsigtet vedligeholdelse og udvikling over tid.

Vi bruger fx beslutningsposter med store teams, på tværs af flere afdelinger, med flere partnerorganisationer, på projekter over flere år og med budgetter på millioner. Med den størrelse og det omfang foretrækker vi en vis form for struktureret kommunikation frem for noter i fri form.

I praksis kan vi også lide beslutningsposter, fordi de fremmer mere deltagelse blandt teamkolleger på afstand, mere asynkron kommunikation, mere effektiv vurdering af muligheder og mere opsummering fremover. Alle disse aspekter hjælper også med at introducere nye teamkolleger, fordi beslutningerne er klare, fuldstændige, korte og registrerede.

## Sådan kommer du i gang med beslutningsposter med værktøjer

Du kan komme i gang med beslutningsposter med værktøjer på en hvilken som helst måde.

For eksempel:

- Hvis du kan lide Google Drev og Google Docs, så opret en mappe `decisions` og et dokument pr. beslutningspost.

- Hvis du kan lide versionsstyring af kildekode, så opret en mappe `decisions` og en tekstfil pr. beslutningspost.

- Hvis du kan lide projektplanlægningsværktøjer som Atlassian Jira, så brug værktøjets planlægningssporing.

- Hvis du kan lide wikier som MediaWiki, så opret en wiki til beslutningsposter med en wikiside pr. beslutningspost.

## Færdigheder til AI

Hvis du bruger [Claude Code](https://claude.com/claude-code) eller en anden agent, der understøtter [Claude Skills](https://code.claude.com/docs/en/skills), leveres to skills til AI sammen med dette repository i [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — til alle, der skriver en beslutningspost. Guider gennem, om et valg har brug for en, valg mellem den lette og den omfattende skabelon, udarbejdelse, arkivering og tjeklisten før offentliggørelse.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — til vedligeholdere af selve dette repository: tilføje et gennemarbejdet eksempel, holde eksempelindekset og krydshenvisninger konsistente og dette repositorys filkonventioner.

For at bruge en af dem skal du klone dette repository og kopiere den ønskede skill-mappe derhen, hvor din agent indlæser projektskills (for Claude Code typisk `.claude/skills/<name>` i dit eget projekt) — og derefter bede din assistent om at bruge den. Se [decision-records.github.io/skills](https://decision-records.github.io/skills/) for mere og [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) for den sides kilde.

## Forslag til at skrive gode beslutningsposter

Kendetegn ved en god beslutningspost:

- Tidspunkt - Angiv, hvornår beslutningen blev truffet.

- Rationalitet - Forklar begrundelsen for at træffe den konkrete beslutning.

- Uforanderlig post - Beslutningerne i en tidligere offentliggjort beslutningspost bør ikke ændres.

- Specificitet - Hver beslutningspost bør handle om én enkelt beslutning.

Kendetegn ved en god kontekst i en beslutningspost:

- Forklar din organisations situation og forretningsmæssige prioriteter.

- Medtag begrundelser og overvejelser baseret på dine teams sociale sammensætning og kompetencer.

Kendetegn ved gode konsekvenser i en beslutningspost:

- Rigtig tilgang - "Vi skal begynde at gøre X i stedet for Y"

- Forkert tilgang - Forklar ikke beslutningen i form af "fordele" og "ulemper" ved den konkrete AD.

En ny beslutningspost kan træde i stedet for en tidligere beslutningspost:

- Når der træffes en beslutning, der erstatter eller ugyldiggør en tidligere beslutningspost, opret da en ny beslutning og henvis til den gamle.

## Råd om teamarbejde til beslutningsposter

Hvis du overvejer at bruge beslutningsposter med dit team, er her nogle råd, vi har lært af at arbejde med mange teams.

Du har mulighed for at lede dine teamkolleger ved at tale sammen om "hvorfor" frem for at pålægge "hvad". Beslutningsposter er fx en måde, hvorpå teams kan tænke klogere og kommunikere bedre; beslutningsposter er ikke værdifulde, hvis de blot er et påtvunget papirkrav i bagklogskabens lys.

Nogle teams foretrækker langt navnet "beslutninger" frem for forkortelsen "beslutningsposter". Når nogle teams bruger mappenavnet "decisions", er det, som om en pære tændes, og teamet begynder at lægge mere information i mappen, fx leverandørbeslutninger, planlægningsbeslutninger, tidsplansbeslutninger osv. Alle disse typer information kan bruge den samme skabelon. Vi antager, at folk lærer hurtigere med ord ("beslutninger") end med forkortelser ("beslutningsposter"), at folk er mere motiverede til at skrive igangværende dokumenter, når ordet "post" fjernes, og at nogle udviklere og ledere ikke kan lide ordet "arkitektur".

I teorien er uforanderlighed ideel. I praksis har foranderlighed fungeret bedre for vores teams. Vi indsætter ny information i den eksisterende beslutningspost med en datostempel og en note om, at oplysningen kom efter beslutningen. Denne tilgang fører til et "levende dokument", som vi alle kan opdatere. Typiske opdateringer sker, når vi får information takket være nye teamkolleger, nye tilbud eller virkelige resultater af vores brug eller efterfølgende ændringer hos tredjeparter, fx leverandørers kapaciteter, prisplaner, licensaftaler osv.

## Spørgsmål om teamarbejde til beslutningsposter

### Hvem kan oprette en beslutningspost?

Overvej områder som bestemte personer, bestemte roller, bestemte teams eller bestemte afdelinger; overvej også, om der er personer, roller, teams eller afdelinger, der kan bestille en beslutningspost, dvs. bede om en, som en anden skriver.

Eksempel på svar: Enhver i vores organisation, der har læst README-siden om architecture decision records, kan foreslå en beslutningspost, dvs. begynde at skrive den og dele den med teamet.

### Hvad berettiger til at oprette en beslutningspost?

Overvej områder som din organisations teams arbejdsmetoder, dit softwaresystems struktur, koordinering på tværs af teams, langsigtet vedligeholdelighed, eksterne grænseflader, hvem du vil gavne og lignende.

Eksempel på svar: Vi vil oprette en beslutningspost, når vi vil have fremtidige udviklere til at forstå "hvorfor" bag det, vi gør.

### Hvad berettiger til ikke at oprette en beslutningspost?

Overvej områder som beslutninger, der ikke handler om arkitektur, eller som er små, fx med minimal risiko, selvstændige eller for en enkelt udvikler, eller som allerede er fuldt dækket andetsteds, fx af standarder, politikker eller dokumentation, eller som er midlertidige, fx midlertidige løsninger, proofs of concept eller eksperimenter.

Eksempel på svar: Vi vil springe en beslutningspost over, når en beslutning er begrænset i omfang, tid, risiko og omkostning eller allerede er dækket andetsteds.

### Hvad er en beslutningspostens livscyklus?

Overvej områder som oprettelsesprocessen, undersøgelsesprocessen, beslutningsprocessen, implementeringsprocessen og udfasningsprocessen. Overvej, hvordan du følger beslutningspostens livscyklus over tid, fx hvordan du flytter beslutningsposten fra én tilstand til den næste, og hvordan du kommunikerer det til interessenterne.

Eksempel på svar: Vi vil have, at en beslutningspost har fem livscyklusfaser: Igangsætning → Undersøgelse → Vurdering → Implementering → Vedligeholdelse → Udfasning.

### Hvad er kriterierne for livscyklustrinnene i en beslutningspost?

Overvej områder som acceptkriterier for en beslutningspost, dvs. hvordan ved du, at den er god nok til at gå fra ét livscyklustrin til det næste? Er problemet klart formuleret? Er alternativerne overvejet? Er afvejningerne forstået og dokumenteret godt nok?
Er al relevant kontekst på plads? Er alle relevante interessenter involveret? Er al feedback indarbejdet?

Eksempel på svar: Vi vil have, at interessenter stemmer om en beslutningspost, når det aktive team 1) har afsluttet sin undersøgelse, 2) har afsluttet sin vurdering, 3) har offentliggjort forslaget til beslutningsposten for interessenterne med en anmodning om kommentarer og en tidsramme på en uge, 4) alle interessenters kommentarer er indarbejdet og behandlet.

### Hvilke roller og ansvarsområder berører en beslutningspost?

Overvej roller som forslagsstiller, undersøger, vurderer, anmelder, godkender, vedligeholder og lignende. Overvej ansvarsområder som kommunikation med interessenter, sikring af at forventninger indfries, deling på webstedet eller intranettet og periodisk gennemgang af arbejdet, især når relevante ændringer sker.

Eksempel på svar: Vi vil have, at hver beslutningspost altid har en primær kontaktperson, en sekundær kontaktperson og et ansvarligt team; de er ansvarlige for kommunikation, offentliggørelse, vedligeholdelse, periodisk gennemgang mindst én gang om året og eventuel udfasning efter behov.

### Hvordan hænger styring sammen med en beslutningspost?

Overvej områder som din organisations arbejdsmetoder, særlige compliancebehov, fx juridiske eller personalemæssige aspekter, og hvordan du vil håndtere konsensus versus konflikt versus eskalering. Er der områder, personer eller teams, der kan have mere indflydelse end andre på en beslutningspost, fx ved at kunne godkende den, stemme om den eller nedlægge veto?

Eksempel på svar: Styringen af en beslutningspost følger denne prioriteret rækkefølge: CEO'en, CTO'en, CLO'en, det team, der implementerer en beslutningspost, og eksperterne på teamet, som ved mest om AD'en. Ingen andre har styring, medmindre det er beskrevet i beslutningsposten.

### Hvilke principper berører en beslutningspost?

Overvej områder som din organisations arbejdsmetoder, herunder at bevæge sig hurtigt versus langsomt, beslutningskonsensus versus beslutningskonflikt, risikopræferencer versus sikkerhedspræferencer, offentlig versus privat diskussion og lignende.

Eksempel på svar: Vi bruger lederskabsprincipperne bias for action, disagree-and-commit, 70 % estimater er gode nok til nemt reversible og nemt isolerbare beslutninger samt åbne arbejdsmetoder med undtagelse af fortrolige oplysninger som beskrevet i vores organisations fortrolighedsaftale.

## Mere information

Introduktion:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Skabeloner:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Dybdegående:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - gratis månedlig lektion i softwarearkitektur

Værktøjer:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Virksomhedsspecifik vejledning:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Eksempler:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videoer:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Bøger:

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

Se også:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM's e-Business Reference Architecture Framework
