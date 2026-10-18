# Vælg vores it-rammeværker

* Status: anmodning om kommentarer
* Dato: 2026-10-14
* Beslutningstager(e): Chief Information Officer og Chief Technology Officer (skal bekræftes)
* Ejer: Chef for teknologidrift

Resumé: Igangværende arbejde. Dette er et udgangspunkt for en teknologigruppe, der er blevet bedt om at indføre flere rammeværker (fx ITIL, det agile manifest, Extreme Programming og Six Sigma) og skal afgøre, hvilke der skal bruges, til hvilket arbejde og i hvilken rækkefølge. Det viser, hvordan et team kan formulere spørgsmålet, drøfte muligheder og indsamle information. Det registrerer ingen beslutning.

## Problemstilling

Forskellige ledere har bedt teknologigruppen om at indføre ITIL til servicestyring, det agile manifest til levering, Extreme Programming til udvikling og Six Sigma til kvalitet, nogle gange i de samme teams og i samme periode. Hver anmodning er rimelig alene, men tilsammen overlapper de, bruger forskellige ordforråd og beder folk ændre sig hurtigere, end de kan nå at optage.

De spørgsmål, der skal besvares:

* Hvilket problem løser hvert rammeværk, og for hvilken slags arbejde?
* Hvor overlapper eller konflikter de, og hvilket bør have forrang?
* I hvilken rækkefølge bør vi indføre dem, og hvor mange ændringer kan et team optage på én gang?
* Hvordan ved vi, om kombinationen hjælper?

## Antagelser

Hver antagelse er noget, der skal testes.

* **Hvert rammeværk virker bedst på den slags arbejde, det blev designet til.** Test: læs kilderne og tal med folk, der har brugt hvert rammeværk.
* **Teams kan optage ét nyt rammeværk ad gangen,** ikke flere. Test: spørg teams, hvilke ændringer der allerede er i gang, og hvilken kapacitet de har.
* **Sponsorer vil acceptere at vente,** hvis de kender rækkefølgen og grunden. Test: tal med dem tidligt.
* **En skriftlig grænse mellem rammeværker vil reducere konflikter.** Test: udarbejd en og test den på reelle eksempler på konflikter.

## Begrænsninger

* Gruppen har begrænset kapacitet til forandring i en given periode.
* Rammeværkerne bruger forskellige ordforråd, så fælles begreber som hændelse, ændring, udgivelse og fejl skal defineres én gang.
* Fuld indførelse af flere rammeværker kan tage år.
* Ukendt, skal bekræftes: nuværende praksis, kontraktlige eller revisionsmæssige forventninger og eventuelle rammeværker, der allerede er i brug.

## Overvejede muligheder

For hver mulighed: estimér værdi, omkostninger, tidslinje og kompetencebehov, og notér, hvilken evidens der ville ændre teamets opfattelse.

* **Indfør hvert ønsket rammeværk overalt.**
  * Værdi: hver sponsor får det, de bad om.
  * Risici: overbelastning; modstridende vejledning (fx faste ændringsgodkendelser mod kontinuerlig udgivelse); umuligt at afgøre, hvilken ændring der forårsagede hvilket resultat.
* **Indfør ét rammeværk som eneste standard.**
  * Værdi: enkelt at forklare.
  * Risici: intet enkelt rammeværk dækker serviceoperationer, produktlevering, udviklingspraksis og kvalitet lige godt.
* **Tildel hvert rammeværk den slags arbejde, det passer til, og indfør dem ét ad gangen.** For eksempel ITIL-praksisser til drift af live-tjenester, det agile manifests værdier til, hvordan leveringsteams planlægger og arbejder, Extreme Programming-praksisser til at bygge software og Six Sigma til processer, hvor fejl kan måles.
  * Værdi: klarere for teams; lettere at lære af.
  * Omkostningsfaktorer: et skriftligt grænsedokument; koordinering; et langt program.
* **Vedtag en styrings- eller standardparaply** som ISO/IEC 38500 (IT-styring) eller ISO/IEC 20000-1, og lad teams vælge metoder inden for den.
* **Indfør ingen af dem fuldt ud;** vælg praksisser, der adresserer gruppens målte problemer.

## Argumentation

Diskussionspunkter, som teamet bør forvente:

* **Rammeværker eller resultater?** Målet er bedre resultater for kunderne, ikke at indføre rammeværker. Hvilke resultater betyder mest?
* **Konflikter.** Hvor vejledning er i konflikt, hvem afgør?
* **Rækkefølge.** Hvilket skal først: det med mest sponsorpres eller det, der understøtter de andre?
* **Ordforråd.** Fælles ord reducerer friktion, men falsk ækvivalens skjuler reelle forskelle.

Sådan kan teamet vurdere omkostninger og afvejninger:

1. Oplist først problemer og ønskede resultater med mål (fx fra DORA-forskning i softwareleveringspræstation plus service- og kvalitetsmål).
2. Estimér for hvert rammeværk omkostningerne med organisationens egne begreber: træning, procesændring, værktøjer, tabt tid og løbende support. Vis intervaller.
3. Estimér hvert teams kapacitet til forandring, og planlæg rækkefølgen, så intet team bærer mere, end det kan optage.
4. Sammenlign muligheder under bedste, sandsynlige og værste scenarie; vælg den, der er lettest at justere, hvis evidensen ændrer sig.
5. Gennemgå efter de to første rammeværker og tag rækkefølgen op igen, hvis evidensen tyder på en bedre.

## Beslutning

**Ikke besluttet endnu.** Dette er et udgangspunkt. Et team, der bruger det, bør erstatte dette afsnit med sin egen beslutning.

Foreslået fremgangsmåde for at nå en beslutning:

* Bekræft, hvem der beslutter, og hvem der skal høres (herunder sponsorerne).
* Aftal først kriterier og vægte.
* Indsaml evidensen ovenfor og notér, hvad der blev fundet.
* Del til kommentering, beslut derefter og opdatér Status.

## Konsekvenser

Hvis teamet beslutter at tildele rammeværker efter arbejdstype og indføre dem trinvist, ville det skulle:

* Udpege en ejer af grænsedokumentet og en måde at løse konflikter på, med eskalering.
* Kun starte ét rammeværk ad gangen i et team og først begynde på det næste, når det forrige har opfyldt sine egne exitmål.
* Fortælle sponsorer af senere rammeværker rækkefølgen og grunden nu.
* Definere fælles begreber én gang, i grænsedokumentet.
* Gennemgå hele tilgangen efter de to første rammeværker.

## Relaterede beslutninger

* [Det agile manifest](../agile-manifest/), [ITIL 5](../itil-5/), [Extreme Programming](../extreme-programming/) og [Six Sigma](../six-sigma/): beslutningerne om hvert af rammeværkerne.
* [Forretningsrammeværker](../forretningsrammeværker/): det generelle mønster for trinvis indførelse.
* Beslutninger, der endnu ikke er truffet: værktøjer; rækkefølgen af senere rammeværker.

## Relaterede noter

* Åbne punkter: oplist nuværende praksisser; spørg sponsorer, hvilke resultater de ønsker; udarbejd et første udkast til grænsedokument.
* Læs mere:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Læs: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
