# Hjälp / vanliga frågor

Vanliga frågor som ledare ställer när de inför beslutsposter, plus en kort ordlista.

Innehåll:

* [Vanliga frågor](#vanliga-frågor)
* [Felsökning](#felsökning)
* [Ordlista](#ordlista)
* [Vart du går härnäst](#vart-du-går-härnäst)

## Vanliga frågor

**Hur skiljer sig detta från mötesprotokoll?**
Protokoll anger vad som *diskuterades*; en beslutspost fångar vad som *beslutades och varför*, skriven för att stå på egna ben utan mötets sammanhang. Protokoll är en bra indata till en beslutspost — de är sällan en ersättning.

**Hur lång tid ska det här egentligen ta?**
För en lätt post om ett beslut du redan förstår, 15–30 minuter. Tiden är sällan bortkastad, eftersom det är tid du annars skulle lägga på att förklara samma resonemang på nytt i varje framtida samtal om ämnet. Spara heltäckande poster — med kostnadsanalys, SWOT/PEST och flera dokumenterade åsikter — för verkligt avgörande beslut.

**Vem ska äga vår beslutslogg?**
Någon som ansvarar för det team eller den funktion den täcker — ofta samma person som annars skulle svara på "varför gjorde vi så här?" ur minnet ett år senare. I större organisationer kan en lätt styrningsägare (t.ex. stabschef, strategichef eller en roterande ägare per funktion) underhålla indexet utan att godkänna varje enskilt beslut.

**Vad händer om beslutsfattaren och intressenterna är oeniga?**
Lös *processen* före *beslutet*: ange i förväg vem som har sista ordet (en person eller en definierad regel, som "samsyn, eskalera till vd om olöst efter en vecka"). Anteckna avvikande åsikter i avsnittet "Åsikter" i den heltäckande mallen i stället för att sudda ut oenigheten — en väldokumenterad avvikande mening är värdefull om beslutet senare omprövas.

**Vad om vi senare får veta att beslutet var fel?**
Det är precis det posten är till för. Skriv en ny beslutspost som ersätter den gamla, förklara vad som ändrats (ny information, ändrade omständigheter eller ett resonemangsfel) och länka tillbaka. Att ha haft fel är ingen anledning att radera spåret — det är anledningen till att spåret finns.

**Behöver vi särskild programvara för detta?**
Nej. En mapp med Markdown- eller Word-filer på en delad enhet, ett wikiutrymme eller ett versionshanterat arkiv fungerar alla. Välj det ditt team redan öppnar dagligen — införande misslyckas långt oftare på grund av obekanta verktyg än på grund av en saknad funktion.

**Kan en AI-assistent hjälpa till att utarbeta eller granska dessa?**
Ja, på ett produktivt sätt, på två vis: (1) att göra ett första utkast av Bakgrund och Övervägda alternativ utifrån mötesanteckningar eller en transkription, som en mänsklig beslutsfattare rättar och slutför; (2) att granska ett utkast mot [checklistan](../checklista/index.md) för att fånga saknade alternativ, vaga beslut eller konsekvenser som bara upprepar debatten. En AI-assistent ska aldrig vara den namngivna beslutsfattaren — ansvarsskyldigheten stannar hos en person eller en kommitté.

**Är det här inte bara byråkrati?**
Det blir byråkrati precis när det påtvingas som pappersarbete i efterhand för beslut som redan fattats och meddelats. Det förblir värdefullt när det används som ett *tänkeverktyg* före ett beslut, av dem som faktiskt fattar det. Se [Vanliga fallgropar](../vägledning/index.md#vanliga-fallgropar) i vägledningen.

**Hur många beslutsposter är för många?**
Om folk slutar läsa loggen har du loggtrötthet — du dokumenterar beslut som var lätta att ångra eller bara påverkade en person. Begränsa posterna till val som verkligen är svåra att ångra, övergripande eller sannolikt omprövade. Se [checklistan](../checklista/index.md#checklista-behöver-det-här-beslutet-en-beslutspost).

**Vårt team ogillar ordet "arkitektur" eller "post" — spelar namnet roll?**
Inte för mekaniken. Vissa team får mycket snabbare införande bara genom att kalla mappen `decisions/` i stället för `decision-records/` — samma mall fungerar under båda namnen. Använd det som får ditt team att faktiskt skriva ner dem.

**Kan en beslutspost gälla flera affärsenheter?**
Ja, om beslutet verkligen är gemensamt (t.ex. en företagsövergripande leverantör). Men håll det till *ett beslut*: om två affärsenheter egentligen gör två olika val av två olika skäl, skriv två poster och länka dem som relaterade.

## Felsökning

| Symptom | Trolig orsak | Åtgärd |
|---|---|---|
| Poster hopar sig i "begäran om synpunkter" för evigt | Ingen tidsfrist eller ingen namngiven beslutsfattare | Lägg till båda uttryckligen; godkänn som standard om ingen invänder före ett angivet datum |
| Ingen läser loggen | För många poster med låga insatser; loggtrötthet | Tillämpa checklistan "behöver detta en post?" striktare |
| Poster läses som en lista över för- och nackdelar, inget verkligt beslut | Beslutsavsnittet skrevs innan beslutet faktiskt fattats | Publicera inte "Beslut" som slutgiltigt förrän beslutsfattaren verkligen har bestämt sig |
| Teamet ser det som pappersarbete och ogillar att skriva dem | Infört ovanifrån som ett mandat, eller bara använt i efterhand för att motivera tidigare val | Återinför som ett verktyg teamet väljer för att det sparar tid senare, med början i ett synligt användbart exempel |
| Ingen hittar gamla poster | Ingen delad, varaktig förvaringsplats eller index | Skapa en enda `decisions/`-plats med en indexsida som listar rubrik, status och datum |
| Beslut ändras tyst utan att någon märker det | Ingen konvention för ersättning | När ett beslut ändras, skriv alltid en ny post med status `ersatt` som länkar tillbaka |

## Ordlista

* **Beslutspost (DR)** — ett dokument som fångar ett viktigt val, dess bakgrund, övervägda alternativ, beslutet och dess konsekvenser.
* **Beslutslogg (DL)** — hela samlingen av beslutsposter för ett team, en funktion eller en organisation.
* **Arkitekturbeslutspost (ADR)** — den mjukvaruspecifika föregångaren till det här mönstret, med fokus på teknik- och designval.
* **Status** — ett besluts livscykelsteg: begäran om synpunkter, föreslagen, godkänd, avslagen, föråldrad eller ersatt.
* **Ersatt** — ett beslut som har ersatts av ett nyare; den gamla posten stannar kvar i loggen med en länk framåt, i stället för att raderas.
* **Betydande krav** — ett behov med mätbar effekt på systemet eller organisationen, den sorts sak som motiverar att skriva en beslutspost.
* **Kunskapshantering (KM)** — den bredare disciplin som beslutsposter hör till: att fånga institutionell kunskap så att den överlever en enskild persons minne.

## Vart du går härnäst

* Ny på arbetssättet? Börja med [vägledningen](../vägledning/index.md).
* Redo att skriva en? Följ [handledningen](../handledning/index.md).
* Behöver du en mall att kopiera? Se [mall/index.md](../mall/index.md).
* Vill du se en inom ditt område först? Bläddra i [exempel/index.md](../exempel/index.md).
* Rullar du ut detta i ett team? Använd [checklistan](../checklista/index.md).
