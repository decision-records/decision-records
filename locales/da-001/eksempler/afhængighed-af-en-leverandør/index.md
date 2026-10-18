# Reducér koncentrationsrisikoen ved én leverandør

* Status: anmodning om kommentarer
* Dato: 2026-05-20
* Beslutningstager(e): COO (skal bekræftes)
* Ejer: Indkøbschef

Resumé: Igangværende arbejde. Dette er et udgangspunkt for et team, der overvejer, hvordan det skal reagere på en kraftig afhængighed af én leverandør til kritiske tjenester. Det viser, hvordan et team kan formulere risikoen, drøfte mulighederne og indsamle information. Det registrerer ingen beslutning.

## Problemstilling

En intern risikogennemgang fandt, at en stor andel af udgifterne til kritisk infrastruktur går til en enkelt leverandør. Leverandøren havde et uplanlagt nedbrud, der forstyrrede en kundevendt tjeneste, og dens priser er steget uden et kontraktligt loft. At fortsætte som nu efterlader organisationen eksponeret for tilgængelighedsrisiko og ukontrolleret omkostningsvækst.

De spørgsmål, der skal besvares:

* Hvor stor en del af det, vi afhænger af, er faktisk koncentreret, og hvad sker der med virksomheden, hvis leverandøren fejler eller hæver priserne igen?
* Hvor sandsynlige og hvor alvorlige er disse hændelser, og hvad er vi villige til at acceptere?
* Hvad er de realistiske måder at reducere risikoen på, til hvilken pris og hvor hurtigt?
* Hvordan ville en sikker udtrædelse eller nødløsning se ud?

## Antagelser

Hver antagelse er noget, der skal testes.

* **Nedbruddet og prisstigningen afspejler et vedvarende mønster,** ikke en enkeltstående hændelse. Test: gennemgå hændelseshistorik, leverandørkommunikation og markedspriser.
* **En anden leverandør kan køre en del af den kritiske arbejdsbyrde med acceptabel kvalitet.** Test: lav en shortlist af kandidater og kør en begrænset prøve.
* **Den primære leverandør vil forbedre vilkårene, hvis den ser troværdige alternativer.** Test: bed om et fornyelsestilbud, mens du evaluerer andre muligheder.
* **En faseopdelt migrering kan undgå serviceforstyrrelse.** Test: gennemgå de tekniske afhængigheder og kontraktens begrænsninger for flytning af arbejdsbyrde.

## Begrænsninger

* Den kundevendte tjeneste må ikke forstyrres under nogen overgang.
* Kontraktvilkår kan begrænse, hvor hurtigt arbejdsbyrde kan flyttes, og kan omfatte gebyrer for at forlade.
* Enhver ny leverandør bør vurderes efter samme kriterier som den oprindelige.
* Ukendt, skal bekræftes: dataportabilitet, anvendte proprietære tjenester, udtrædelsesgebyrer og regulatoriske forventninger til tredjepartsrisiko.

## Overvejede muligheder

For hver mulighed: estimér værdi, omkostninger, tidslinje og kompetencebehov, og notér, hvilken evidens der ville ændre teamets opfattelse.

* **Accepter risikoen og overvåg.**
  * Værdi: ingen omkostning eller indsats på kort sigt.
  * Risici: efterlader både nedbruds- og priseksponering; risikogennemgangen tillader det måske ikke ved den nuværende koncentration.
* **Genforhandl med den eksisterende leverandør** om serviceniveauer, et prisloft og bedre udtrædelsesvilkår; forbliv med én leverandør.
  * Værdi: adresserer pris og ansvarlighed.
  * Risici: fjerner ikke det enkelte fejlpunkt.
* **Diversificér: flyt en del af den kritiske arbejdsbyrde til en anden leverandør** og genforhandl hovedkontrakten for resten.
  * Værdi: reducerer koncentrationen; styrker forhandlingspositionen.
  * Omkostningsfaktorer: leverandørvalg; migreringsindsats; dobbelte driftsomkostninger i en periode; øget driftskompleksitet (to sæt procedurer og kompetencer).
  * Tidsforløb: faseopdelt, med kontrolpunkter.
* **Byg robusthed uden en anden leverandør:** sikkerhedskopier, afprøvede gendannelsesprocedurer og designændringer, der gør det muligt at skifte senere.
* **Flyt helt til en anden leverandør.** Størst forstyrrelse; kun berettiget, hvis den nuværende leverandør er uacceptabel.

## Argumentation

Diskussionspunkter, som teamet bør forvente:

* **Risikovilje.** Hvilket niveau af afhængighed er acceptabelt? Hvem beslutter?
* **Robusthedens pris.** Redundans har en løbende pris; er forsikringen det værd, og for hvilke tjenester?
* **Kompleksitet.** To leverandører tilføjer driftskompleksitet. Har teamet kompetencerne?
* **Fastlåsning.** Hvor meget er organisationen afhængig af én leverandørs proprietære funktioner, og hvad ville det koste at flytte?

Sådan kan teamet vurdere omkostninger og afvejninger:

1. Identificér kritiske tjenester og deres afhængigheder. Estimér for hver den forretningsmæssige effekt af nedbrud af forskellig længde som intervaller.
2. Estimér sandsynligheden for fejl og prisændring ud fra historik og leverandørevidens, med usikkerhed.
3. Beregn omkostningerne ved hver mulighed: migrering, dobbelte driftsomkostninger, værktøjer, træning, indkøb og den løbende kompleksitet; medtag udtrædelsesomkostninger for begge leverandører.
4. Sammenlign den forventede risikoreduktion med omkostningen, og test følsomheden over for sandsynlighedsestimaterne.
5. Definér ledende indikatorer og udløsende punkter, fx et brud på serviceniveauet, en prisændring eller en sikkerhedshændelse.

## Beslutning

**Ikke besluttet endnu.** Dette er et udgangspunkt. Et team, der bruger det, bør erstatte dette afsnit med sin egen beslutning.

Foreslået fremgangsmåde for at nå en beslutning:

* Bekræft, hvem der beslutter, og hvilken risikovilje der gælder.
* Aftal først kriterier og vægte.
* Indsaml evidensen ovenfor og notér, hvad der blev fundet.
* Del til kommentering, beslut derefter og opdatér Status.

## Konsekvenser

Hvis teamet beslutter at diversificere, ville det skulle:

* Gennemføre en leverandørvalgsproces med samme kriterier som den oprindelige.
* Planlægge en faseopdelt migrering, der undgår forstyrrelse.
* Genforhandle hovedkontrakten parallelt.
* Acceptere øget driftskompleksitet med en vejledning for hver leverandør.
* Rapportere koncentration og serviceniveauvilkår regelmæssigt, indtil målet er nået.

## Relaterede beslutninger

* [Vælg den primære database](../valg-af-database/): en teknologisk forekomst af det samme fastlåsningsspørgsmål.
* [Selv bygge eller købe i et projekt](../selv-bygge-eller-købe/): beslægtede sourcingvalg.
* Beslutninger, der endnu ikke er truffet: udtrædelses- og kontinuitetsplan; leverandørvalg.

## Relaterede noter

* Åbne punkter: oplist de kritiske tjenester og deres leverandører; indsaml hændelseshistorik; læs kontrakten for udtrædelses- og prisvilkår.
* Læs mere:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Læs: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
