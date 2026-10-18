# Gennemgang: skriv din første beslutningspost

Dette er en praktisk gennemgang for en leder, der aldrig har skrevet en beslutningspost. Den bruger et realistisk forretningsscenarie — ikke et softwareeksempel — fordi beslutningsposter er et generelt lederskabsværktøj. Til sidst har du skrevet én rigtig post og ved, hvordan du introducerer arbejdsmetoden for dit team.

Anslået tid: 20 minutter til del 1 plus løbende øvelse til del 2–4.

Indhold:

* [Del 1: Skriv en beslutningspost (20 minutter)](#del-1-skriv-en-beslutningspost-20-minutter)
* [Del 2: Få den gennemgået og godkendt](#del-2-få-den-gennemgået-og-godkendt)
* [Del 3: Start en beslutningslog](#del-3-start-en-beslutningslog)
* [Del 4: Fastlæg en gennemgangsrytme](#del-4-fastlæg-en-gennemgangsrytme)
* [Det fulde gennemarbejdede scenarie](#det-fulde-gennemarbejdede-scenarie)

## Del 1: Skriv en beslutningspost (20 minutter)

Vælg en reel beslutning, du står over for lige nu — gerne en, der allerede er lidt omstridt, så du mærker værdien med det samme. Hvis du ikke kommer i tanke om noget, så brug denne gennemgangs gennemgående eksempel: **"Skal vi skifte lønudbetaler?"**

### Trin 1: Titel (2 minutter)

Skriv en kort, aktiv titel i nutid. Ikke et spørgsmål, men en udtalelse om den endelige beslutning:

> Skift lønudbetaler til [udbyder]

Bare rolig, hvis du endnu ikke er sikker — du kan ændre titlen, når beslutningen falder.

### Trin 2: Status og metadata (1 minut)

```markdown
* Status: anmodning om kommentarer
* Dato: 2026-08-19
* Beslutningstager(e): CFO
* Ejer: Chef for People Operations
```

At nævne beslutningstageren nu — før debatten — undgår en strid om beføjelser, efter at holdningerne allerede er stivnet.

### Trin 3: Kontekst (5 minutter)

Skriv situationen, som om du forklarede den til en nyansat uden nogen baggrund:

> Vores nuværende lønudbetaler har det seneste år overskredet to indberetningsfrister,
> hvilket gav bøder for for sen betaling i to stater. Vores kontrakt fornyes om 60 dage.
> Økonomi og People Operations er enige om, at den nuværende udbyder er en risiko, men
> uenige om hastværket og om, hvorvidt et skifte dette kvartal er forstyrrelsen af
> den åbne tilmeldingsperiode værd.

Bemærk, at dette endnu ikke argumenterer for et bestemt svar — det angiver blot de kræfter, der er i spil.

### Trin 4: Overvejede muligheder (5 minutter)

Oplist de reelle alternativer, herunder "gør ingenting", med ærlige afvejninger:

> * **Bliv hos nuværende udbyder, genforhandl SLA'erne** — mindst forstyrrelse, men løser
>   ikke grundårsagen; udbyderen har ikke reageret på tidligere eskaleringer.
> * **Skift til udbyder B** — stærkere compliance-track record, men implementeringen
>   overlapper med den åbne tilmelding, hvilket øger risikoen for den proces.
> * **Skift til udbyder C** — bedre pris, men et mærkbart mindre supportteam, og
>   to referencesamtaler gav anledning til bekymring om svartider.

Hvis du opdager, at du kun skriver én reel mulighed og to stråmænd, så stop — det er et tegn på, at beslutningen allerede er truffet uformelt, og at posten bruges til at retfærdiggøre den frem for at skærpe den. Gå tilbage og få først en second opinion på alternativerne.

### Trin 5: Beslutning (2 minutter)

Når beslutningstageren faktisk har besluttet (det sker måske ikke i samme omgang som trin 1–4), skriv det i klart, aktivt sprog:

> Vi skifter til udbyder B, og implementeringen begynder, når den åbne tilmelding er afsluttet.

### Trin 6: Konsekvenser (5 minutter)

Angiv, hvad der ændrer sig, ikke en gentagelse af de afvejninger, der allerede er dækket ovenfor:

> * Den nuværende kontrakt skal opsiges med 30 dages varsel, før den nye periode begynder.
> * People Operations kører en parallel lønkørselstest før omlægningen.
> * Tidsplanen for den åbne tilmelding er beskyttet; skiftet lægges efter, den er afsluttet.
> * Vi accepterer et sammenpresset implementeringsvindue til gengæld for lavere compliancerisiko —
>   det er den afvejning, vi eksplicit vælger.

Det er en komplet let beslutningspost. Sammenlign den med [skabelonen](../skabelon/index.md#let-skabelon) — du burde kunne afbilde hvert afsnit.

## Del 2: Få den gennemgået og godkendt

1. Del udkastet med de faktiske interessenter (her: Økonomi, People Ops og alle, som skiftet berører) med en klar anmodning og en frist: *"Kommentarer senest fredag; derefter markerer jeg dette som godkendt, medmindre noget væsentligt ændrer sig."*
2. Notér ny information som en tilføjelse med dato i stedet for stille at omskrive tidligere afsnit — det bevarer begrundelsessporet.
3. Når beslutningstageren bekræfter, ændr `Status` til `godkendt` og notér den endelige dato.

## Del 3: Start en beslutningslog

En enkelt beslutningspost er nyttig én gang. En **beslutningslog** — samlingen af alle poster for dit team — er nyttig for evigt.

1. Opret et holdbart, delt sted: en mappe `decisions/` på dit teams eksisterende delte drev, wikirum eller versionsstyrede repository. Brug det, dit team allerede åbner dagligt — det bedste værktøj er det, folk faktisk vil bruge.
2. Arkivér hver ny post med et klart, sorterbart navn, fx `2026-08-19-switch-payroll-provider.md`.
3. Hold en indeksside, der oplister hver post med titel, status og dato — se [eksempler/index.md](../eksempler/index.md) for et fungerende eksempel på dette mønster.
4. Nogle teams oplever, at ordet "beslutninger" (uden "post") får arbejdsmetoden til at føles naturlig frem for lånt fra engineering — brug det navn, der får dit team til faktisk at skrive dem.

## Del 4: Fastlæg en gennemgangsrytme

Beslutninger forældes. Fastlæg en let styringsrytme, så loggen forbliver pålidelig og ikke bliver en kirkegård af forældede valg:

* **Ejeren af den enkelte post** gennemgår sine egne poster mindst årligt eller når den underliggende situation ændrer sig væsentligt.
* **Når en beslutning omstødes eller erstattes**, skriv en ny post og sæt den gamles status til `erstattet` med et link til erstatningen. Slet aldrig i det skjulte — historikken om *hvorfor vi skiftede mening* er ofte mere værdifuld end det nuværende svar.
* **Kvartalsvis eller årligt** skimmer du hele loggen for poster, der stadig er markeret `anmodning om kommentarer` eller `foreslået` og aldrig blev afklaret, og enten lukker dem eller arkiverer dem eksplicit.

Se [tjeklisten](../tjekliste/index.md) for en komprimeret, gentagelig version af alle fire dele ovenfor.

## Det fulde gennemarbejdede scenarie

For et udfyldt eksempel på en sammenlignelig beslutning, se [eksempler/index.md](../eksempler/index.md) — fx eksemplet [Selv bygge eller købe i et projekt](../eksempler/selv-bygge-eller-købe/). Det bruger den omfattende skabelon, hvor Konsekvenser svarer til afsnittet Konsekvenser ovenfor, og det er igangværende arbejde, der viser, hvordan et team gør fremskridt med en beslutning, ikke en færdig post.
