# Vägledning: beslutsposter för ledare

Den här vägledningen förklarar vad en beslutspost är, varför den spelar roll för ledare i alla verksamhetens funktioner, hur man strukturerar en och hur man driver arbetssättet väl.

Innehåll:

* [Vad är en beslutspost?](#vad-är-en-beslutspost)
* [Varför ledare, inte bara ingenjörer, bör använda beslutsposter](#varför-ledare-inte-bara-ingenjörer-bör-använda-beslutsposter)
* [Beslutsposter gäller hela verksamheten](#beslutsposter-gäller-hela-verksamheten)
* [Beslutspostens anatomi](#beslutspostens-anatomi)
* [Beslutspostens livscykel](#beslutspostens-livscykel)
* [Roller och styrning](#roller-och-styrning)
* [God praxis](#god-praxis)
* [Vanliga fallgropar](#vanliga-fallgropar)
* [Komma igång i din organisation](#komma-igång-i-din-organisation)
* [Vidare läsning](#vidare-läsning)

## Vad är en beslutspost?

En **beslutspost (DR)** fångar ett viktigt val: situationen som föranledde det, de alternativ som vägdes, valet som gjordes och de förväntade konsekvenserna. En **beslutslogg (DL)** är den löpande samlingen av alla beslutsposter för ett team, en funktion eller en organisation, i praktiken ett institutionellt minne av "varför vi gör så här".

En beslutspost är inte:

* Ett mötesprotokoll (en post över vad som *diskuterades*, inte vad som *beslutades och varför*).
* En projektplan (en post över *vad som händer härnäst*, inte *varför den här vägen valdes framför andra*).
* Ett policydokument (en post över en *stående regel*, även om en beslutspost ofta ger upphov till en).

Den ligger mellan dessa: en kort, hållbar artefakt som finns just för att resonemanget bakom ett val ska överleva mötet där det gjordes.

## Varför ledare, inte bara ingenjörer, bör använda beslutsposter

Mjukvaruteam tog till sig arbetssättet först eftersom kod är dyr att ångra och nya ingenjörer ständigt frågar "varför är det byggt så här?". Varje ledare möter exakt samma dynamik:

* **Det institutionella minnet går ut genom dörren.** När säljchefen som valde den nuvarande säljområdesmodellen slutar försvinner resonemanget med personen om det inte skrevs ner.
* **Omorganisationer och ledarbyten utlöser omprövning.** Utan en post lägger en ny ledare veckor på att diskutera om ett beslut som redan fattats noggrant, eller ännu värre, ändrar det utan att förstå varför det fanns.
* **Introduktionen går snabbare med ett "varför", inte bara ett "vad".** En nyanställd som kan läsa de senaste tolv besluten i sin funktion förstår organisationens omdöme, inte bara dess nuvarande tillstånd.
* **Att skriva ner det förbättrar själva beslutet.** Att lägga bakgrund, alternativ och avvägningar på en sida, före beslutet, avslöjar luckor och outtalade antaganden som en muntlig diskussion glider förbi.
* **Det skapar ansvarsskyldighet utan byråkrati.** En beslutspost anger vem som beslutade, när och varför, vilket skyddar både beslutsfattaren (ett dokumenterat, motiverat val) och organisationen (en tydlig ägare att återvända till om omständigheterna ändras).
* **Det skalar kommunikation över avstånd och tid.** För distansteam och asynkrona team, och för intressenter som inte var i rummet, gör en välskriven beslutspost det jobb som ett livemöte annars skulle behöva upprepa.

Inget av detta är specifikt för mjukvara. Det gäller *vilket* beslut som helst som är dyrt att ångra, påverkar fler än beslutsfattaren eller sannolikt kommer att ifrågasättas senare.

## Beslutsposter gäller hela verksamheten

Behandla "beslutspost" som en genre, inte som en avdelnings verktyg. Samma sexdelade struktur fungerar oavsett om beslutet är arkitektoniskt eller kommersiellt:

* **Strategisk beslutspost** — inträde på eller utträde ur marknader, konkurrenshållning, fleråriga satsningar.
* **Försäljningsbeslutspost** — utformning av säljområden, ersättningsplaner, val av CRM och verktyg, kanalstrategi.
* **Marknadsföringsbeslutspost** — varumärkespositionering, kanalmix, byrå eller egen organisation, prisinformation.
* **Produktbeslutspost** — prismodell, avvägningar i färdplanen, bygga eller köpa, avvecklingsbeslut.
* **Projektbeslutspost** — leveransmetodik, leverantörsval, avvägningar i omfattning.
* **Riskbeslutspost** — att acceptera, mildra, överföra eller undvika risk, och skälen.
* **HR-beslutspost** — policyförändringar (distansarbete, nivåer, lönespann), organisationsdesign.
* **Kommunikationsbeslutspost** — hållning vid krishantering, policy för talespersoner, regler för mediekontakter.
* **Beslutspost för kompetensutveckling** — utbildningssatsningar, befordringskriterier, successionsval.
* **Beslutspost för användarcentrerad design** — val av forskningsmetod, avvägningar kring tillgänglighet, UX-riktning.
* **Beslutspost för mjukvaruarkitektur/ingenjörskonst** — det ursprungliga användningsområdet: teknik-, plattforms- och designval.

Katalogen [exempel](../exempel/index.md) har utarbetade exempel inom de flesta av dessa områden. Många organisationer som inför beslutsposter för ingenjörsarbete upptäcker senare att deras strategi-, HR- eller säljteam vill ha exakt samma disciplin — ofta det "glödlampsögonblick" som team beskriver när de helt enkelt döper om arbetssättet till "beslut" i stället för "beslutsposter", vilket får mönstret att kännas hemmahörande i icke-tekniska team i stället för lånat från ingenjörskonsten.

## Beslutspostens anatomi

Två mallar finns i [mall/index.md](../mall/index.md): en **lätt** version med sex fält för vardagsbeslut och en **heltäckande** version för beslut med höga insatser och hög granskning. Båda delar samma grundlogik:

1. **Rubrik** — ett kort, aktivt påstående i presens om själva beslutet (t.ex. "Inför OKR varje kvartal", inte "Diskussion om OKR"). Sikta på under 50 tecken.
2. **Status** — var beslutet befinner sig i sitt liv: begäran om synpunkter, föreslagen, godkänd, avslagen, föråldrad eller ersatt.
3. **Bakgrund (Problem)** — situationen, krafterna och begränsningarna som gjorde beslutet nödvändigt. Skriven så att en läsare utan minne av mötet förstår varför frågan över huvud taget uppstod.
4. **Övervägda alternativ (Ståndpunkter)** — de realistiska alternativen, angivna som fakta och avvägningar, inte som en uppställning av halmgubbar som får det valda alternativet att verka självklart rätt. Om någon kan fråga "övervägde ni X?" och svaret inte finns i posten är posten ofullständig.
5. **Beslut** — valet, i enkelt, aktivt språk: "Vi kommer att göra X." Inte en sammanfattning av för- och nackdelar — ett tydligt uttalande om vad som valdes.
6. **Konsekvenser (Följder)** — vad som förändras, inklusive kostnader, risker, uppföljande beslut och allt som offras genom att inte välja ett alternativ. Bra konsekvenser lyder "vi gör nu X i stället för Y", inte som en sammanfattning av för- och nackdelar för det redan fattade beslutet.

Den heltäckande mallen lägger till fält som är användbara för beslut med högre insatser: **Antaganden**, **Begränsningar**, **Åsikter** (vem som rådde till vad och varför), **Relaterade beslut/krav/artefakter/principer** och strukturerade analysavsnitt (kostnadsanalys, SWOT, PEST) för beslut som förtjänar djupare granskning.

## Beslutspostens livscykel

En beslutspost går normalt igenom fem steg:

**Initiera → Utreda → Utvärdera → Besluta → Underhålla (→ Avveckla)**

* *Initiera* — någon identifierar att ett val är tillräckligt viktigt för att motivera en post och öppnar ett utkast.
* *Utreda* — alternativ, begränsningar och antaganden samlas in; intressenter konsulteras.
* *Utvärdera* — posten delas för synpunkter, vanligtvis med en definierad tidsram (en vecka är en vanlig standard).
* *Besluta* — beslutsfattaren (individ eller grupp, enligt din styrmodell) godkänner, avslår eller skickar tillbaka för mer arbete; statusen uppdateras i enlighet med detta.
* *Underhålla* — posten förblir lätt att hitta och ses över om omständigheterna ändras väsentligt.
* *Avveckla* — om den ersätts ändras den gamla postens status till "ersatt" och länkar till den nya. Den gamla posten raderas aldrig — den historiken är själva poängen.

## Roller och styrning

Ange för varje beslutspost:

* **Ägare / förslagsställare** — skriver posten och driver den till beslut.
* **Beslutsfattare** — personen, rollen eller kommittén med befogenhet att godkänna den. Ange detta uttryckligen per beslutstyp (t.ex. "prisändringar: produktchef; marknadsinträde: vd + styrelse").
* **Medverkande** — personer vars input väsentligt formade alternativen eller avvägningarna.
* **Ansvarig ägare framåt** — den som underhåller beslutet, ser över det periodiskt (årligen är en vanlig takt) och ansvarar för att så småningom avveckla det.

Styrningsfrågor som är värda att lösa en gång, skriftligt, för din organisation (se även [checklistan](../checklista/index.md)):

* Vem kan *föreslå* en beslutspost? (Ofta: vem som helst.)
* Vem kan *godkänna* en, och varierar det med beslutstyp eller belopps- och risktröskel?
* Vad avgör vid dödläge eller oenighet — samsyn, en utsedd godkännare eller eskalering?
* Hur föränderlig är en post efter godkännande? Många team föredrar en modell med "levande dokument": ny information läggs till med tidsstämpel i stället för att historien tyst skrivs om.

## God praxis

* **Ett beslut per post.** Motstå att slå ihop flera val i ett dokument — det blir omöjligt att referera till, ersätta eller söka i senare.
* **Håll det kärnfullt.** En sida, inte en rapport. Växer den förbi en sida är beslutet förmodligen fler än ett.
* **Skriv bakgrunden för en främling.** Anta att läsaren inte har något av mötets gemensamma sammanhang, och inte kommer att ha det om två år heller.
* **Ange beslutet i aktiv form.** "Vi kommer att migrera till X", inte "X sågs som den föredragna riktningen".
* **Förklara konsekvenser som vad som förändras, inte som för- och nackdelar.** Avvägningsdebatten hör hemma i "Övervägda alternativ"; "Konsekvenser" handlar om vad som händer härnäst.
* **Förvara posterna där teamet redan arbetar.** En versionshanterad `decisions/`-mapp, ett wikiutrymme eller en delad enhetsmapp — den bästa platsen är den som ditt team faktiskt öppnar.
* **Reservera beslutsposter för beslut som är svåra att ångra, övergripande eller sannolikt ifrågasatta senare.** Alla val behöver inte en — se [checklistan](../checklista/index.md#checklista-behöver-det-här-beslutet-en-beslutspost).
* **Ersätt, radera inte tyst.** När ett beslut ändras, skriv en ny post och länka tillbaka till den som den ersätter.

## Vanliga fallgropar

* **Att göra det till pappersarbete i efterhand.** Om en beslutspost skrivs för att motivera ett val som redan gjorts och meddelats förlorar den det mesta av sitt värde — poängen är att skärpa tänkandet *före* åtagandet, inte att producera en efterlevnadsartefakt efteråt.
* **Loggtrötthet.** Att registrera varje litet val begraver de viktiga och lär människor att sluta läsa loggen. Begränsa poster till beslut som verkligen är svåra att ångra eller har vid betydelse.
* **Att skriva för- och nackdelar i stället för ett beslut.** En post som slutar med en lista över avvägningar och inget tydligt "vi kommer att göra X" är inte en beslutspost — det är ett alternativpromemoria.
* **Ingen ansvarig ägare.** En beslutspost utan utsedd beslutsfattare eller granskare tenderar att bli inaktuell och förlorar förtroende.
* **Att behandla mallen som byråkrati i stället för en checklista.** Mallens värde är att den är en checklista för gott tänkande och god kommunikation — inte ett formulär att fylla i för sin egen skull.

## Komma igång i din organisation

1. Välj en funktion eller ett team med ett beslut som redan är omstritt eller svårt att ångra.
2. Skriv det beslutet med den [lätta mallen](../mall/index.md#lätt-mall).
3. Förankra det hos den faktiska beslutsfattaren och intressenterna; tidsbegränsa återkopplingen.
4. Förvara det någonstans varaktigt och lätt att hitta.
5. När arbetssättet väl har visat sig användbart, föreslå det som en lätt standard för teamet — inte ett mandat ovanifrån. Beslutsposter fungerar bäst som något ett team inför för att det gör det egna livet enklare, inte som påtvingat pappersarbete.

Se [handledningen](../handledning/index.md) för en fullständig genomgång.

## Vidare läsning

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — den komprimerade specifikation som den här vägledningen utvecklar.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — det fylligare källprojektet som den här vägledningen generaliserar för en affärsmässig målgrupp.
