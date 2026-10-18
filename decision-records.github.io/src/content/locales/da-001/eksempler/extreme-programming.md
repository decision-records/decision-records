# Extreme Programming

* Status: anmodning om kommentarer
* Dato: 2025-10-06
* Beslutningstager(e): Udviklingschef (skal bekræftes)
* Ejer: Udviklingsleder

Resumé: Igangværende arbejde. Dette er et udgangspunkt for et udviklingsteam, der overvejer at indføre praksisser fra Extreme Programming (XP), såsom testdreven udvikling, parprogrammering, kontinuerlig integration og små udgivelser. Det viser, hvordan et team kan formulere spørgsmålet, drøfte mulighederne og indsamle information. Det registrerer ingen beslutning.

## Problemstilling

Produktteams leverer funktioner i store partier, og fejl, der findes sent, er dyre: en mærkbar andel af udgivelserne kræver en hastende rettelse efter udgivelsen. Udviklingsledere er interesserede i praksisser fra Extreme Programming, en agil softwareudviklingsmetode, der lægger vægt på tekniske praksisser såsom testdreven udvikling, parprogrammering, kontinuerlig integration, små udgivelser, refaktorering og fælles ejerskab af kode.

Disse praksisser understøtter hinanden, men ændrer også, hvordan udviklere arbejder hver dag. At indføre dem alle på én gang vil sandsynligvis møde modstand og blive gjort overfladisk. De spørgsmål, der skal besvares:

* Hvilke problemer vil vi løse (sene fejl, langsom feedback, viden hos få personer), og hvilke praksisser adresserer dem?
* I hvilken rækkefølge skal praksisser indføres, og hvem går først?
* Hvad ville vi måle for at vide, at praksisserne hjælper?
* Hvad er den rette balance mellem en fælles standard og hvert teams valg?

## Antagelser

Hver antagelse er noget, der skal testes.

* **Sene fejl skyldes hovedsagelig manglen på hurtig automatiseret feedback.** Test: følg en stikprøve af hastende rettelser tilbage til det sted, hvor fejlen kunne være fanget.
* **De grundlæggende praksisser (kontinuerlig integration og automatiserede tests) gør de andre mulige.** Test: spørg teams, der har prøvet praksisserne, hvilke der afhang af hvilke.
* **Udviklere vil tage praksisser til sig, de ser virke i et team ved siden af.** Test: spørg udviklere, hvad der ville overbevise dem, og hvad der bekymrer dem.
* **Antallet af hastende rettelser efter udgivelse er et retfærdigt mål for fremskridt.** Test: aftal, hvordan det tælles, og tjek, at andre mål (gennemløbstid, fejlrate for ændringer) ikke fortæller en anden historie.

## Begrænsninger

* Teams skal stadig levere funktioner, mens de lærer, så outputtet i den første periode bliver sandsynligvis lavere.
* Udviklere bør bevare et valg om, hvordan de parprogrammerer, og hvilke værktøjer de bruger.
* Eksisterende bygge- og testinfrastruktur kan have brug for arbejde, før kontinuerlig integration er nyttig.
* Ukendt, skal bekræftes: hvor stor en del af kodebasen der er testbar i dag, og om regulatoriske eller kundemæssige begrænsninger påvirker udgivelsesfrekvensen.

## Overvejede muligheder

For hver mulighed: estimér værdi, omkostninger, tidslinje og kompetencebehov, og notér, hvilken evidens der ville ændre teamets opfattelse.

* **Indfør alle praksisser på én gang i hvert team.**
  * Værdi: praksisser forstærker hinanden.
  * Omkostningsfaktorer: træning; langsommere levering under læring; værktøjsarbejde på tværs af alle teams på én gang.
  * Risici: stor forandring; teams uden de underliggende færdigheder kan opgive praksisserne inden for uger.
* **Indfør praksisserne i en valgt rækkefølge, team for team.** For eksempel kontinuerlig integration og automatiserede tests først (fundamentet), derefter små udgivelser og parprogrammering, derefter testdreven udvikling.
  * Værdi: hver praksis får tid til at sætte sig; de tidlige gør de senere mulige; det første teams erfaring vejleder resten.
  * Omkostningsfaktorer: coaching; tid til parprogrammering og testskrivning indbygget i planer; infrastrukturarbejde på pipelinen.
  * Tidsforløb: sekventielt, hvor det næste team kommer til, når det forrige team har holdt sin udgivelsespipeline sund i en angivet periode.
  * Nødvendige kompetencer: en coach; en pålidelig byggepipeline; ledelsens opbakning til faldet i output.
  * Risici: langsomt; praksisser indført ujævnt.
* **Indfør kun de nemme praksisser.** Lav indsats, men kan springe dem med størst gavn over, såsom automatiseret test.
* **Indfør et andet sæt praksisser** (fx dem, som DORA-forskningen om softwarelevering beskriver, såsom continuous delivery, trunk-based development og løst koblet arkitektur) og behandl XP som én kilde blandt flere.
* **Gør intet nyt** og adressér konkrete årsager til fejl direkte. En reel baseline.

## Argumentation

Diskussionspunkter, som teamet bør forvente:

* **Parprogrammering.** En praksis, mange udviklere er skeptiske over for. Hvor hjælper den (vidensdeling, komplekst arbejde), og hvor gør den ikke?
* **Standardisér eller lad teams vælge?** Fælles resultater (færre hastende rettelser, hurtigere feedback) med teamfrihed i, hvordan de nås, eller en strengere standard?
* **Kvalitet versus hastighed på kort sigt.** Er ledere villige til at acceptere lavere output, mens teams lærer?
* **TDD, middel eller mål?** Nogle praksisser (såsom testdreven udvikling) diskuteres selv blandt erfarne praktikere. Teamet bør afgøre, hvilket problem praksissen adresserer, før den indføres.

Sådan kan teamet vurdere omkostninger og afvejninger:

1. Beregn omkostningen ved den nuværende tilgang: indsats brugt på hastende rettelser, forsinkelser forårsaget af sene fejl, kundepåvirkning. Brug intervaller med organisationens egne begreber.
2. Beregn omkostningen ved programmet: coaching, træning, tid til parprogrammering og tests, infrastruktur til pipelinen og det midlertidige fald i levering.
3. Vælg først mål: andel af udgivelser, der kræver hastende rettelser, gennemløbstid for ændringer, deployeringsfrekvens, tid til at genoprette tjenesten (DORA-målene) og udvikleres feedback.
4. Sammenlign muligheder under bedste, sandsynlige og værste scenarie; spørg, hvordan svaret ændrer sig, hvis gavnen viser sig senere eller mindre end håbet.
5. Brug en vægtet matrix og en pre-mortem.

## Beslutning

**Ikke besluttet endnu.** Dette er et udgangspunkt. Et team, der bruger det, bør erstatte dette afsnit med sin egen beslutning.

Foreslået fremgangsmåde for at nå en beslutning:

* Bekræft, hvem der beslutter, og inden hvornår.
* Aftal først kriterier og vægte.
* Indsaml evidensen ovenfor og notér, hvad der blev fundet.
* Del til kommentering, beslut derefter og opdatér Status.

## Konsekvenser

Hvis teamet vælger en faseopdelt tilgang, ville det skulle:

* Udpege en coach og bede det første team om ærligt at rapportere, hvad der hjalp, og hvad der ikke gjorde.
* Planlægge tid til parprogrammering og til at skrive tests ind i leveringsplaner.
* Investere i bygge- og testpipelinen, før man stoler på den.
* Aftale en stopregel: hvis en praksis ikke hjælper efter en angivet periode, kan teamet foreslå at stoppe den og notere hvorfor.
* Bevare udvikleres valg om, hvordan de parprogrammerer, og hvilke værktøjer de bruger; praksisser bør fastsætte resultatet, ikke hver detalje i, hvordan det nås.

## Relaterede beslutninger

* [Det agile manifest](../agile-manifest/): den bredere beslutning om værdier, som disse praksisser understøtter.
* [Vælg vores it-rammeværker](../valg-af-it-rammeværker/): hvordan XP passer med andre rammeværker.
* Beslutninger, der endnu ikke er truffet: investering i pipeline og værktøjer; model for kodeejerskab.

## Relaterede noter

* Åbne punkter: tag stikprøver af nylige hastende rettelser; spørg udviklere om deres bekymringer ved parprogrammering og test; tjek, hvad byggepipelinen kan i dag.
* Læs mere:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Læs: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
