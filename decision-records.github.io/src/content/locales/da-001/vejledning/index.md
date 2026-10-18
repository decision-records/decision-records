# Vejledning: beslutningsposter for ledere

Denne vejledning forklarer, hvad en beslutningspost er, hvorfor den er vigtig for ledere i alle funktioner i en virksomhed, hvordan man opbygger en, og hvordan man driver arbejdsmetoden godt.

Indhold:

* [Hvad er en beslutningspost?](#hvad-er-en-beslutningspost)
* [Hvorfor ledere, ikke kun udviklere, bør bruge beslutningsposter](#hvorfor-ledere-ikke-kun-udviklere-bør-bruge-beslutningsposter)
* [Beslutningsposter gælder for alle dele af virksomheden](#beslutningsposter-gælder-for-alle-dele-af-virksomheden)
* [Opbygningen af en beslutningspost](#opbygningen-af-en-beslutningspost)
* [Beslutningspostens livscyklus](#beslutningspostens-livscyklus)
* [Roller og styring](#roller-og-styring)
* [Bedste praksis](#bedste-praksis)
* [Almindelige faldgruber](#almindelige-faldgruber)
* [Sådan kommer du i gang i din organisation](#sådan-kommer-du-i-gang-i-din-organisation)
* [Yderligere læsning](#yderligere-læsning)

## Hvad er en beslutningspost?

En **beslutningspost (DR)** fastholder ét væsentligt valg: den situation, der udløste det, de muligheder, der blev vejet, det valg, der blev truffet, og de forventede konsekvenser. En **beslutningslog (DL)** er den løbende samling af alle beslutningsposter for et team, en funktion eller en organisation — i praksis en institutionel hukommelse af "hvorfor vi gør tingene sådan".

En beslutningspost er ikke:

* Et mødereferat (en optegnelse over, hvad der blev *drøftet*, ikke hvad der blev *besluttet og hvorfor*).
* En projektplan (en optegnelse over, *hvad der sker nu*, ikke *hvorfor denne vej blev valgt frem for andre*).
* Et politikdokument (en optegnelse over en *gældende regel*, selvom en beslutningspost ofte afføder en).

Den ligger imellem disse: et kort, holdbart produkt, der findes netop for at begrundelsen bag et valg kan overleve det møde, hvor det blev truffet.

## Hvorfor ledere, ikke kun udviklere, bør bruge beslutningsposter

Softwareteams tog denne arbejdsmetode til sig først, fordi kode er dyr at rulle tilbage, og nye udviklere hele tiden spørger "hvorfor er det bygget sådan?" Enhver leder står over for præcis den samme dynamik:

* **Institutionel hukommelse går ud ad døren.** Når en salgsdirektør, der valgte den nuværende områdemodel, forlader virksomheden, forsvinder begrundelsen med, medmindre den blev skrevet ned.
* **Omorganiseringer og lederskift udløser genforhandling.** Uden en post bruger en ny leder uger på at gentage en diskussion om en beslutning, der allerede var truffet omhyggeligt — eller, værre, omstøder den uden at vide, hvorfor den fandtes.
* **Introduktion går hurtigere med et "hvorfor", ikke kun et "hvad".** En nyansat, der kan læse de seneste tolv beslutninger i sin funktion, forstår organisationens dømmekraft, ikke kun dens nuværende tilstand.
* **At skrive det ned forbedrer selve beslutningen.** At få kontekst, muligheder og afvejninger ned på papir — før man beslutter — afslører huller og uudtalte antagelser, som en mundtlig diskussion glider over.
* **Det skaber ansvarlighed uden bureaukrati.** En beslutningspost angiver, hvem der besluttede, hvornår og hvorfor, hvilket beskytter både beslutningstageren (et dokumenteret, begrundet valg) og organisationen (en klar ejer, der kan tage det op igen, hvis omstændighederne ændrer sig).
* **Det skalerer kommunikation på tværs af afstand og tid.** For fjern- og asynkrone teams og for interessenter, der ikke var i rummet, gør en velskrevet beslutningspost det arbejde, som et live-møde ellers skulle gentage.

Intet af dette er specifikt for software. Det gælder *enhver* beslutning, der er dyr at gøre om, påvirker andre end beslutningstageren eller sandsynligvis vil blive anfægtet senere.

## Beslutningsposter gælder for alle dele af virksomheden

Betragt "beslutningspost" som en genre, ikke som en enkelt afdelings værktøj. Den samme struktur i seks dele fungerer, uanset om beslutningen er arkitektonisk eller kommerciel:

* **Strategisk beslutningspost** — markedsindtræden/-udtræden, konkurrencemæssig holdning, flerårige væddemål.
* **Salgsbeslutningspost** — områdedesign, aflønningsplaner, valg af CRM/værktøjer, kanalstrategi.
* **Marketingbeslutningspost** — brandpositionering, kanalmix, bureau vs. internt, priskommunikation.
* **Produktbeslutningspost** — prismodel, afvejninger i køreplanen, selv bygge vs. købe, udfasningsbeslutninger.
* **Projektbeslutningspost** — leveringsmetode, leverandørvalg, afvejninger i omfang.
* **Risikobeslutningspost** — risikoaccept, afbødning, overførsel eller undgåelse og begrundelsen.
* **HR-beslutningspost** — politikændringer (hjemmearbejde, niveauer, lønbånd), organisationsdesign.
* **PR-beslutningspost** — holdning til krisekommunikation, politik for talspersoner, regler for mediekontakt.
* **Beslutningspost om faglig udvikling** — investering i uddannelse, forfremmelseskriterier, successionsvalg.
* **Beslutningspost om brugercentreret design** — valg af forskningsmetoder, afvejninger om tilgængelighed, UX-retning.
* **Beslutningspost om softwarearkitektur / engineering** — den oprindelige anvendelse: valg af teknologi, platform og design.

Mappen [eksempler](../eksempler/index.md) har gennemarbejdede eksempler inden for de fleste af disse områder. Mange organisationer, der indfører beslutningsposter til engineering, opdager senere, at deres strategi-, HR- eller salgsteams ønsker nøjagtig den samme disciplin — ofte det øjeblik, hvor der går et lys op, som teams beskriver, der blot omdøber arbejdsmetoden til "beslutninger" i stedet for "beslutningsposter", hvilket får mønstret til at føles naturligt for ikke-tekniske teams i stedet for lånt fra engineering.

## Opbygningen af en beslutningspost

To skabeloner findes i [skabelon/index.md](../skabelon/index.md): en **let** version med seks felter til hverdagsbeslutninger og en **omfattende** version til beslutninger med høje indsatser og meget granskning. Begge deler den samme kernelogik:

1. **Titel** — en kort, aktiv udtalelse i nutid om selve beslutningen (fx "Indfør kvartalsvise OKR'er", ikke "OKR-diskussion"). Sigt efter under 50 tegn.
2. **Status** — hvor beslutningen er i sit liv: anmodning om kommentarer, foreslået, godkendt, afvist, forældet eller erstattet.
3. **Kontekst (problemstilling)** — situationen, kræfterne og begrænsningerne, der gjorde denne beslutning nødvendig. Skrevet, så en læser uden erindring om mødet forstår, hvorfor spørgsmålet overhovedet opstod.
4. **Overvejede muligheder (positioner)** — de realistiske alternativer, angivet som fakta og afvejninger, ikke som en stråmandsopstilling, der får den valgte mulighed til at se oplagt rigtig ud. Hvis nogen kan spørge "overvejede I X?", og svaret ikke står i posten, er posten ufuldstændig.
5. **Beslutning** — valget i klart, aktivt sprog: "Vi vil gøre X." Ikke en opsummering af fordele og ulemper — en klar angivelse af, hvad der blev valgt.
6. **Konsekvenser (implikationer)** — hvad der ændrer sig som følge heraf, herunder omkostninger, risici, opfølgende beslutninger og alt, der opgives ved ikke at vælge et alternativ. Gode konsekvenser lyder som "vi gør nu X i stedet for Y", ikke som en gentagelse af fordele og ulemper ved den allerede trufne beslutning.

Den omfattende skabelon tilføjer felter, der er nyttige til beslutninger med højere indsatser: **antagelser**, **begrænsninger**, **holdninger** (hvem rådgav om hvad og hvorfor), **relaterede beslutninger/krav/artefakter/principper** og strukturerede analyseafsnit (omkostningsanalyse, SWOT, PEST) til beslutninger, der fortjener dybere granskning.

## Beslutningspostens livscyklus

En beslutningspost gennemløber typisk fem faser:

**Igangsætning → Undersøgelse → Vurdering → Beslutning → Vedligeholdelse (→ Udfasning)**

* *Igangsætning* — nogen identificerer, at et valg er væsentligt nok til at kræve en post, og åbner et udkast.
* *Undersøgelse* — muligheder, begrænsninger og antagelser indsamles; interessenter høres.
* *Vurdering* — posten deles til kommentering, typisk med en defineret tidsramme (en uge er en almindelig standard).
* *Beslutning* — beslutningstageren (individ eller gruppe, efter din styringsmodel) godkender, afviser eller sender den tilbage til mere arbejde; status opdateres tilsvarende.
* *Vedligeholdelse* — posten forbliver synlig og tages op igen, hvis omstændighederne ændrer sig væsentligt.
* *Udfasning* — hvis den erstattes, ændres den gamle posts status til "erstattet" og linker til den nye. Den gamle post slettes aldrig — den historik er hele pointen.

## Roller og styring

For hver beslutningspost angives:

* **Ejer / forslagsstiller** — udarbejder posten og driver den frem mod en beslutning.
* **Beslutningstager(e)** — den person, rolle eller komité, der har beføjelse til at godkende den. Angiv det eksplicit pr. beslutningstype (fx "prisændringer: produktdirektør; markedsindtræden: CEO + bestyrelse").
* **Bidragydere** — personer, hvis input væsentligt formede mulighederne eller afvejningerne.
* **Ansvarlig ejer fremover** — hvem der vedligeholder beslutningen, gennemgår den periodisk (årligt er en almindelig rytme) og er ansvarlig for til sidst at afvikle den.

Styringsspørgsmål, der er værd at afklare én gang skriftligt for din organisation (se også [tjeklisten](../tjekliste/index.md)):

* Hvem kan *foreslå* en beslutningspost? (Ofte: alle.)
* Hvem kan *godkende* en, og varierer det efter beslutningstype eller beløbs-/risikogrænse?
* Hvad bryder en pattestilling eller løser uenighed — konsensus, en udpeget godkender eller eskalering?
* Hvor foranderlig er en post efter godkendelse? Mange teams foretrækker en "levende dokument"-model: ny information tilføjes med et tidsstempel i stedet for stille at omskrive historikken.

## Bedste praksis

* **Én beslutning pr. post.** Modstå fristelsen til at samle flere valg i ét dokument — det bliver umuligt at henvise til, erstatte eller søge i senere.
* **Hold den kort og klar.** En side, ikke en rapport. Hvis den vokser ud over en side, er beslutningen sandsynligvis mere end én beslutning.
* **Skriv konteksten til en fremmed.** Antag, at læseren ikke har noget af mødets fælles kontekst og heller ikke vil have det om to år.
* **Angiv beslutningen i aktiv form.** "Vi vil migrere til X", ikke "X blev set som den foretrukne retning."
* **Forklar konsekvenser som, hvad der ændrer sig, ikke som fordele og ulemper.** Afvejningsdebatten hører hjemme under "Overvejede muligheder"; "Konsekvenser" handler om, hvad der sker derefter.
* **Opbevar poster, hvor teamet allerede arbejder.** En versionsstyret mappe `decisions/`, et wikirum eller en mappe på et delt drev — det bedste opbevaringssted er det, dit team faktisk vil åbne.
* **Forbehold beslutningsposter til beslutninger, der er svære at gøre om, går på tværs eller sandsynligvis vil blive anfægtet senere.** Ikke hvert valg har brug for en — se [tjeklisten](../tjekliste/index.md#tjekliste-kræver-denne-beslutning-en-beslutningspost).
* **Erstat, slet ikke i det skjulte.** Når en beslutning ændrer sig, skriv en ny post og henvis tilbage til den, den erstatter.

## Almindelige faldgruber

* **At gøre den til papirarbejde bagefter.** Hvis en beslutningspost skrives for at retfærdiggøre et valg, der allerede er truffet og meddelt, mister den det meste af sin værdi — pointen er at skærpe tanken *før* man forpligter sig, ikke at producere et compliance-produkt bagefter.
* **Logtræthed.** At registrere hvert mindre valg begraver de væsentlige og lærer folk at holde op med at læse loggen. Begræns poster til beslutninger, der virkelig er svære at gøre om eller har bred betydning.
* **At skrive fordele/ulemper i stedet for en beslutning.** En post, der slutter med en liste over afvejninger og intet klart "vi vil gøre X", er ikke en beslutningspost — det er et notat om muligheder.
* **Ingen ansvarlig ejer.** En beslutningspost uden udpeget beslutningstager eller anmelder har tendens til at blive forældet og holder op med at blive stolet på.
* **At behandle skabelonen som bureaukrati frem for en tjekliste.** Skabelonens værdi er, at den er en tjekliste til god tænkning og god kommunikation — ikke en formular, man udfylder for dens egen skyld.

## Sådan kommer du i gang i din organisation

1. Vælg én funktion eller ét team med en beslutning, der allerede er omstridt eller svær at gøre om.
2. Udarbejd netop den beslutning med den [lette skabelon](../skabelon/index.md#let-skabelon).
3. Drøft den med den faktiske beslutningstager og interessenterne; sæt en tidsramme for feedback.
4. Gem den et sted, der er holdbart og nemt at finde.
5. Når arbejdsmetoden én gang har vist sig nyttig, foreslå den som en let standard for teamet — ikke et mandat pålagt oppefra. Beslutningsposter fungerer bedst som noget, et team tager til sig, fordi det gør deres eget liv lettere, ikke som påtvunget papirarbejde.

Se [gennemgangen](../gennemgang/index.md) for en fuld gennemarbejdet rundtur.

## Yderligere læsning

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — den komprimerede specifikation, som denne vejledning uddyber.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — det mere omfattende kildeprojekt, som denne vejledning generaliserer til et forretningspublikum.
