# Vælg den primære database

* Status: anmodning om kommentarer
* Dato: 2026-03-22
* Beslutningstager(e): CTO (skal bekræftes)
* Ejer: Chef for platformsudvikling

Resumé: Igangværende arbejde. Dette er et udgangspunkt for et team, der vælger den primære database til et voksende produkt. Det er det ene teknologieksempel i dette sæt og viser, at arkitekturbeslutninger følger det samme mønster som de forretningsmæssige beslutninger andetsteds i samlingen. Det viser, hvordan et team kan formulere spørgsmålet, drøfte muligheder og indsamle information. Det registrerer ingen beslutning.

## Problemstilling

Den nuværende database nærmer sig sine skaleringsgrænser, og udviklingsteamet forventer, at væksten snart når disse grænser. En erstatning eller en anden måde at skalere på skal vælges inden den næste store produktlancering.

De spørgsmål, der skal besvares:

* Hvad er de reelle grænser i dag (læsninger, skrivninger, lager, latenstid, drift), og hvor hurtigt nærmer vi os dem?
* Hvilke egenskaber betyder mest (konsistens, tilgængelighed, latenstid, omkostning, driftbarhed, compliance), og i hvilken rækkefølge?
* Skalerer vi det, vi har, flytter vi til en administreret tjeneste, eller driver vi noget selv?
* Hvordan ville vi migrere, og hvordan ville vi forlade det igen, hvis vi skulle?

## Antagelser

Hver antagelse er noget, der skal testes.

* **Vækstprognosen er realistisk.** Test: sammenlign med tidligere vækst og med salgs- og produktplaner; overvej et højt og et lavt scenarie.
* **Den nuværende database kan skaleres videre til en pris.** Test: spørg leverandøren og teamet, hvor meget luft der er tilbage, og hvad det koster.
* **Vores arbejdsbyrde passer til et horisontalt skalerbart design.** Test: studér forespørgsler og transaktioner; led efter operationer, der kræver stærk konsistens på tværs af poster.
* **Teamet kan drive den valgte mulighed.** Test: oplist de nødvendige kompetencer og hvem der har dem.

## Begrænsninger

* Ændringen skal være klar før lanceringen, med en faseopdelt migrering, der ikke forstyrrer den.
* Tilbagevendende omkostninger skal passe til det godkendte budget.
* Forpligtelser vedrørende databeskyttelse og sikkerhed gælder for ethvert valg.
* Ukendt, skal bekræftes: datamængde, opbevaringskrav, regionale krav, integration med andre systemer og leverandørforpligtelser.

## Overvejede muligheder

For hver mulighed: estimér værdi, omkostninger, tidslinje og kompetencebehov, og notér, hvilken evidens der ville ændre teamets opfattelse.

* **Skalér den nuværende database vertikalt** (en større maskine eller plan).
  * Værdi: laveste migreringsrisiko; ingen ændringer i applikationen.
  * Risici: køber en begrænset mængde tid; omkostningen stiger stejlt.
* **Flyt til en administreret, horisontalt skalerbar databasetjeneste.**
  * Værdi: fjerner skalering og meget driftsarbejde; leverandørsupport.
  * Omkostningsfaktorer: tilbagevendende servicegebyrer; migrering; applikationsændringer; udgående datatrafik og udtrædelsesomkostninger.
  * Risici: afhængighed af leverandørens funktioner og priser.
* **Flyt til en selvhostet, horisontalt skalerbar database.**
  * Værdi: potentielt lavere tilbagevendende omkostning; mere kontrol.
  * Omkostningsfaktorer: opbygning af driftskompetencer; belastning ved vagtordning; værktøjer; opgraderinger.
  * Risici: driftsomkostningerne kan blive højere end forventet.
* **Redesign datalaget** (fx caching, læsereplikaer, partitionering eller adskillelse af arbejdsbyrder) for at forlænge den nuværende database.
* **Brug forskellige databaser til forskellige arbejdsbyrder** (polyglot persistence), til prisen af flere systemer at drive.

## Argumentation

Diskussionspunkter, som teamet bør forvente:

* **Konsistens versus tilgængelighed.** CAP-sætningen siger, at et distribueret system, der er partitioneret, ikke kan garantere begge. Hvad betyder mest for hver del af produktet? Mange arbejdsbyrder kan tolerere forsinket konsistens; nogle kan ikke.
* **Administreret versus selvhostet.** Højere serviceomkostning mod lavere driftsrisiko. Hvordan skal teamet værdisætte udviklernes tid?
* **Fastlåsning.** Hvad går tabt ved at bruge en leverandørspecifik funktion, og hvad vindes?
* **Standarder.** Hvor meget lægger vi vægt på SQL (standardiseret i ISO/IEC 9075) i forhold til en leverandørspecifik forespørgselsmodel?

Sådan kan teamet vurdere omkostninger og afvejninger:

1. Test med din egen arbejdsbyrde: lav en realistisk benchmark og mål hver kandidat under forventet og maksimal belastning, herunder fejlscenarier.
2. Estimér de samlede ejeromkostninger over en angiven horisont med organisationens egne begreber: service- eller licensgebyrer, hosting, migrering, udviklingstid, vagtordning, træning, support og udtrædelse. Vis intervaller.
3. Scor kandidater på en vægtet matrix af de egenskaber, der betyder noget (produktkvalitetsmodellen ISO/IEC 25010 tilbyder et ordforråd til det), og test følsomheden over for vægtene.
4. Estimér, hvor længe hver mulighed køber tid, og hvad det koster, når grænsen nås igen.
5. Planlæg udtrædelsen: hvordan ville data og kode flytte væk fra hvert valg?

## Beslutning

**Ikke besluttet endnu.** Dette er et udgangspunkt. Et team, der bruger det, bør erstatte dette afsnit med sin egen beslutning.

Foreslået fremgangsmåde for at nå en beslutning:

* Bekræft, hvem der beslutter, og hvem der skal høres (sikkerhed, økonomi, produkt).
* Aftal først kriterier og vægte.
* Indsaml evidensen ovenfor, herunder benchmarkresultater, og notér, hvad der blev fundet.
* Del til kommentering, beslut derefter og opdatér Status.

## Konsekvenser

Hvis teamet beslutter at migrere, ville det skulle:

* Planlægge en faseopdelt migrering med en parallelkørselsperiode før den fulde omlægning.
* Bekræfte budget til de tilbagevendende omkostninger.
* Planlægge opfølgende beslutninger, fx om connection pooling og læsereplikaer.
* Registrere den forventede udtrædelsessti.

## Relaterede beslutninger

* [Selv bygge eller købe i et projekt](../selv-bygge-eller-købe/): generel ræsonnering om bygge/købe.
* [Reducér koncentrationsrisikoen ved én leverandør](../afhængighed-af-en-leverandør/): afhængighed af én leverandør.
* Beslutninger, der endnu ikke er truffet: cache- og replikastrategi; dataopbevaring.

## Relaterede noter

* Åbne punkter: indsaml produktionsmålinger; skriv arbejdsbyrdens karakteristika ned; lav en shortlist af kandidater til en benchmark.
* Læs mere:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
