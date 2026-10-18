# Skabeloner til beslutningsposter

To skabeloner, begge i almindelig markdown: kopiér den, du vil bruge, ind i en ny fil og udfyld den.

## Valg af skabelon

Brug som udgangspunkt den **lette skabelon** — de fleste beslutninger har kun brug for dens seks felter, og en side, der vokser ud over det, er som regel alligevel mere end én beslutning.

Skift til den **omfattende skabelon**, når en beslutning har høje indsatser, har flere interessenter, hvis meninger hver især tæller, eller reelt har brug for struktureret omkostnings-/SWOT-/PEST-analyse for at kunne forsvares senere. Se [tjeklisten](../tjekliste/index.md#tjekliste-kræver-denne-beslutning-en-beslutningspost) for det bredere spørgsmål om, hvorvidt en beslutning overhovedet har brug for en post, og [vejledningen](../vejledning/index.md#opbygningen-af-en-beslutningspost) for, hvordan de to skabelonernes felter svarer til hinanden.

## Let skabelon

```markdown
# Titel (kort, nutid, aktiv, op til ca. 50 tegn)

- Status: anmodning om kommentarer | foreslået | godkendt | afvist | forældet | erstattet
- Dato: ÅÅÅÅ-MM-DD
- Beslutningstager(e): [navn(e) eller rolle(r) med beføjelse til at godkende dette]
- Ejer: [hvem der vedligeholder og periodisk gennemgår denne post]

## Kontekst

Beskriv den situation og de begrænsninger, der gjorde denne beslutning nødvendig, skrevet så en læser uden erindring om mødet forstår, hvorfor spørgsmålet overhovedet opstod.

## Overvejede muligheder

Oplist de realistiske alternativer — herunder "gør ingenting", hvis det er relevant — som fakta og afvejninger, ikke som en stråmandsopstilling, der får den valgte mulighed til at se oplagt rigtig ud.

## Beslutning

Angiv valget i klart, aktivt sprog: "Vi vil gøre X." Ikke en opsummering af fordele og ulemper — en klar angivelse af, hvad der blev valgt.

## Konsekvenser

Angiv, hvad der ændrer sig som følge heraf: omkostninger, risici, opfølgende beslutninger og alt, der opgives ved ikke at vælge et alternativ. Det skal lyde som "vi gør nu X i stedet for Y", ikke som en gentagelse af fordele og ulemper ved den allerede trufne beslutning.
```

Se [gennemgangen](../gennemgang/index.md) for en fuld gennemarbejdet rundtur i denne skabelon og [eksempler/index.md](../eksempler/index.md) for færdige, udfyldte eksempler.

## Omfattende skabelon

```markdown
# Titel (kort, nutid, aktiv, op til ca. 50 tegn)

- Status: anmodning om kommentarer | foreslået | godkendt | afvist | forældet | erstattet
- Dato: ÅÅÅÅ-MM-DD
- Beslutningstager(e): [navn(e) eller rolle(r) med beføjelse til at godkende dette]
- Ejer: [hvem der vedligeholder og periodisk gennemgår denne post]

Resumé: en eller to sætninger om den nuværende position og eventuelle åbne behov.

## Problemstilling

Beskriv det problem, du vil adressere. Efterlad ingen tvivl om, hvorfor du adresserer netop dette problem nu.

Følg en minimalistisk tilgang. Adressér kun de problemer, der skal adresseres på forskellige tidspunkter i livscyklussen.

Du vil måske tilføje grupperingsoplysninger, fx tags, nøgleord, links til vidensbase osv.

## Antagelser

Beskriv eventuelle underliggende antagelser i det miljø, hvor du træffer beslutningen.

Sørg for at adressere relevante kvalitetsattributter, også kaldet tværfunktionelle krav.

Eksempler på antagelser kan vedrøre omfang, omkostning, tidsplan, teknologi, ressourcetilgængelighed, behov for servicekvalitet, serviceniveauaftaler osv.

Bemærk, at miljøbegrænsninger (såsom accepterede teknologistandarder, virksomhedsarkitektur, almindeligt anvendte mønstre osv.) kan begrænse, hvilke muligheder du overvejer.

## Begrænsninger

Notér eventuelle yderligere begrænsninger i miljøet, som denne beslutning kan medføre.

Sørg som ovenfor for at adressere relevante kvalitetsattributter, også kaldet tværfunktionelle krav.

Eksempler på begrænsninger kan vedrøre platformsvalg, leverandørvalg, hvor let beslutningen kan omgøres osv.

## Overvejede muligheder (positioner)

Oplist positionerne, dvs. de levedygtige muligheder, som du overvejer eller har overvejet.

Brug fakta og data, ikke meninger. Positionerne kan ofte kræve lange forklaringer, nogle gange endda modeller og diagrammer.

Det behøver ikke være en udtømmende liste; du vil dog ikke høre spørgsmålet "Tænkte I på...?" under en endelig gennemgang, fordi det ville føre til tab af troværdighed og anfægtelse af andre arkitekturbeslutninger.

Dette afsnit hjælper også med at sikre, at du har hørt andres meninger; at angive andre meninger eksplicit hjælper med at få deres fortalere med på din beslutning.

### Omkostningsanalyse (valgfri)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Eksempler:

- Opstart, fx opsætningsomkostninger, tid og ressourcer.

- Drift, fx support og vedligeholdelse

- Uddannelse, fx opkvalificering og forandringsledelse

- Licenser, fx kontraktaftaler og juridiske forpligtelser

- Måling af forbrug, fx båndbredde og CPU-brug

### SWOT-analyse (valgfri)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

- Styrker

- Svagheder

- Muligheder

- Trusler

### PEST-analyse (valgfri)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

- Politiske faktorer

- Økonomiske faktorer

- Sociale faktorer

- Teknologiske faktorer

Nogle teams vil gerne tilføje disse som deres egne kategorier:

- Juridiske faktorer - vi foretrækker at have dem under de politiske faktorer.

- Regulatoriske faktorer - vi foretrækker at have dem under de politiske faktorer.

- Miljøfaktorer - vi foretrækker at have dem under de økonomiske faktorer.

- Demografiske faktorer - vi foretrækker at have dem under de sociale faktorer.

### Anden analyse (tilføj dine egne ideer her)

Tilføj dine egne ideer her...

## Holdninger

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

- Fra teamet, gerne skrevet af den faktiske teamkollega.

- Fra andre interne interessenter, gerne skrevet af den faktiske interessent.

- Fra eksterne, fx tredjepartsrådgivere, evaluatorer, anmeldere osv.

For hver holdning skal du gøre klart:

- Hvem der giver holdningen

- Hvilke andre kandidater der blev overvejet

- Hvordan forfatteren vurderede kandidaterne

- Hvorfor forfatteren valgte vinderen

- Hvad der er sket siden

- Hvad du med din nuværende viden ville råde folk til at gøre anderledes

### Titel på holdning 1 (tilføj din her)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Forklar din holdning her.

### Titel på holdning 2 (tilføj din her)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Forklar din holdning her.

### Titel på holdning 3 (tilføj din her)

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Forklar din holdning her.

## Argumentation

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Forklar, hvorfor du valgte en position.

Beslutninger bør være formålsdrevne. For at vise ansvarlighed skal du eksplicit koble dine beslutninger til målene eller kravene.

Argumentationen er sandsynligvis lige så vigtig som selve beslutningen.

Det behøver ikke være en udtømmende redegørelse; du vil dog ikke høre spørgsmålet "Tænkte I på...?" under en endelig gennemgang, fordi det (som ovenfor) ville føre til tab af troværdighed og anfægtelse af andre arkitekturbeslutninger.

## Konsekvenser

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Angiv tydeligt din beslutnings konsekvenser. Det kan være meget effektivt til at opnå tilslutning og skabe en køreplan for udførelsen.

For eksempel kan en beslutning skabe behov for at træffe andre beslutninger, skabe nye krav eller ændre eksisterende krav, medføre yderligere begrænsninger i miljøet, kræve genforhandling af omfang eller tidsplan med kunder eller kræve yderligere uddannelse af personale.

## Relaterede beslutninger

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Oplist eventuelle relaterede beslutninger her.

Vi har fundet ud af, at en sporbarhedsmatrix, beslutningstræer eller metamodeller i praksis er mere nyttige. Metamodeller er nyttige til at vise komplekse relationer diagrammatisk (fx Rose-modeller).

## Relaterede krav

Resumé: forklar kort dette afsnit, og fremhæv gerne eventuelle afvigere.

Oplist eventuelle relaterede krav her.

Vi har fundet det mere bekvemt at henvise til en sporbarhedsmatrix. Du kan vurdere hver beslutnings bidrag til at opfylde hvert krav og derefter vurdere, hvor godt kravet er opfyldt på tværs af alle beslutninger. Hvis en beslutning ikke bidrager til at opfylde et krav, så træf ikke den beslutning.

## Relaterede artefakter

Oplist eventuelle relaterede artefakter her.

Eksempler er omfangsdokumenter, planlægningsdokumenter, forretningsprocesmodeller osv., som denne beslutning påvirker.

## Relaterede principper

Hvis virksomheden har et aftalt sæt principper, så sørg for, at beslutningen er i overensstemmelse med et eller flere af dem. Det hjælper med at sikre sammenhæng på tværs af domæner eller systemer.

## Relaterede noter

Fordi beslutningsprocesser kan tage betydelig tid, har vi fundet det nyttigt at registrere noter og problemstillinger, som teamet drøfter under afstemningsprocessen.
```
