# Selv bygge eller købe i et projekt

* Status: anmodning om kommentarer
* Dato: 2026-06-01
* Beslutningstager(e): COO (skal bekræftes)
* Ejer: Driftsdirektør

Resumé: Igangværende arbejde. Dette er et udgangspunkt for et team, der har brug for en ny kapacitet, her et kundevendt planlægningsværktøj, og beslutter, om det skal bygge det, købe det eller gøre noget midt imellem. Det viser, hvordan et team kan formulere spørgsmålet, drøfte mulighederne og indsamle information. Det registrerer ingen beslutning.

## Problemstilling

En servicevirksomhed planlægger arbejde med en manuel, regnearksbaseret proces, der har forårsaget dobbeltbookinger og skadet kundeforhold. Der er brug for en løsning inden for begrænset tid, og teamet skal beslutte, om det skal bygge et værktøj internt eller købe et eksisterende.

De spørgsmål, der skal besvares:

* Hvad skal værktøjet kunne (krav), og hvilke af dem er afgørende?
* Hvor godt opfylder hver vej kravene inden for den tilgængelige tid?
* Hvad er de samlede omkostninger ved hver vej over dens levetid, herunder hvad teamet opgiver ved at vælge den?
* Hvad sker der, hvis kravene ændrer sig, eller hvis den valgte vej fejler?

## Antagelser

Hver antagelse er noget, der skal testes.

* **De fleste planlægningsbehov er fælles med andre organisationer, så et eksisterende produkt kan dække dem.** Test: oplist kravene og bed leverandører om at vise, hvordan hvert opfyldes.
* **De usædvanlige tilfælde er små nok til at kunne håndteres med en nødløsning.** Test: tæl hvor ofte de forekommer, og skriv nødløsningen ned for hver.
* **Interne udviklere kan bygge og vedligeholde værktøjet.** Test: estimér indsatsen sammen med dem, der skal gøre det, og spørg, hvad de ellers ikke ville gøre.
* **Leverandørernes tidsplaner er realistiske.** Test: tal med referencekunder af tilsvarende størrelse, herunder dem, hvis projekter løb over tid.

## Begrænsninger

* Der er brug for en løsning inden for en fast periode.
* Andre forpligtede produktinitiativer skal holde deres tidsplaner, så udviklingskapacitet ikke bare kan tages fra dem.
* Værktøjet håndterer kundedata, så sikkerhed og privatliv skal tjekkes.
* Ukendt, skal bekræftes: integrationsbehov, forventet vækst og hvad der sker ved udløbet af en leverandørkontrakt.

## Overvejede muligheder

For hver mulighed: estimér værdi, omkostninger, tidslinje og kompetencebehov, og notér, hvilken evidens der ville ændre teamets opfattelse.

* **Byg internt.**
  * Værdi: præcis pasform til organisationens regler; fuld kontrol over køreplanen.
  * Omkostningsfaktorer: design, udvikling, test, hosting, support og vedligeholdelse i værktøjets hele levetid; alternativomkostningen ved det, udviklerne ikke bygger i stedet.
  * Tidsforløb: ofte længere end de første estimater; værdien kommer til sidst.
  * Nødvendige kompetencer: produktledelse; udvikling; drift.
* **Køb et eksisterende produkt.**
  * Værdi: hurtigere; omkostninger fordelt; får gavn af leverandørens forbedringer.
  * Omkostningsfaktorer: licenser, implementering, konfiguration, træning, integration, administration og udtrædelse.
  * Risici: huller i forhold til kravene; leverandørændringer; fastlåsning.
* **Køb et produkt og bestil skræddersyet arbejde hos leverandøren.** Lukker huller, men tilføjer tid og omkostning og indebærer leveringsrisiko.
* **Sammensæt af mindre værktøjer** (fx en low-code-platform eller en kombination af eksisterende tjenester).
* **Forbedr først den manuelle proces** med en midlertidig løsning for at vinde tid til en bedre beslutning.

## Argumentation

Diskussionspunkter, som teamet bør forvente:

* **Pasform versus hastighed.** En perfekt pasform, der kommer for sent, kan være værre end en god pasform nu.
* **Kerne eller kontekst?** Er planlægning en del af det, der gør virksomheden unik? Hvis ikke, foretrækkes køb normalt.
* **Skjulte omkostninger.** At bygge har løbende vedligeholdelse; at købe har løbende licenser, integration og udtrædelse.
* **Reversibilitet.** Hvilket valg er lettere at fortryde, hvis det viser sig forkert?

Sådan kan teamet vurdere omkostninger og afvejninger:

1. Skriv krav og rangér dem. Scor hver vej mod dem og notér huller.
2. Estimér de samlede ejeromkostninger over en angiven horisont med organisationens egne begreber: engangsomkostninger, tilbagevendende omkostninger, intern medarbejdertid, integration, træning og udtrædelse. Vis intervaller.
3. Estimér omkostningen ved forsinkelse: effekten af hver yderligere periode med dobbeltbookinger.
4. Sammenlign mulighederne under bedste, sandsynlige og værste scenarie, og test effekten af kravændringer.
5. Brug en vægtet matrix (pasform, hastighed, omkostning, risiko, kontrol, reversibilitet) og en pre-mortem.

## Beslutning

**Ikke besluttet endnu.** Dette er et udgangspunkt. Et team, der bruger det, bør erstatte dette afsnit med sin egen beslutning.

Foreslået fremgangsmåde for at nå en beslutning:

* Bekræft, hvem der beslutter, og hvem der skal være enig.
* Aftal først krav og vægte.
* Indsaml evidensen ovenfor og notér, hvad der blev fundet.
* Del til kommentering, beslut derefter og opdatér Status.

## Konsekvenser

Hvis teamet beslutter at købe, ville det skulle:

* Udpege en implementeringsleder og planlægge træning inden for leverandørens tidsplan.
* Dokumentere nødløsninger for ikke-understøttede tilfælde, logge hvor ofte de bruges og gennemgå efter ibrugtagning.
* Definere, hvad der ville udløse en opfølgende beslutning om skræddersyet arbejde.
* Bekræfte, at ingen udviklingskapacitet tages fra forpligtede initiativer.

## Relaterede beslutninger

* [Vælg en CRM-platform](../valg-af-crm-platform/): et lignende valg for et andet system.
* [Vælg den primære database](../valg-af-database/): en teknologisk forekomst af spørgsmålene om bygge/købe og fastlåsning.
* [Reducér koncentrationsrisikoen ved én leverandør](../afhængighed-af-en-leverandør/): afhængighed af en leverandør.
* Beslutninger, der endnu ikke er truffet: skræddersyet integration; dataopbevaring.

## Relaterede noter

* Åbne punkter: skriv og rangér krav; bed leverandører om referencekunder; estimér byggeindsatsen med udviklere.
* Læs mere:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
