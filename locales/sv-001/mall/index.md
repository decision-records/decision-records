# Mallar för beslutsposter

Två mallar, båda i ren Markdown: kopiera den du vill ha till en ny fil och fyll i den.

## Välja vilken mall som ska användas

Utgå från den **lätta mallen** — de flesta beslut behöver bara dess sex fält, och en sida som växer förbi det är oftast fler än ett beslut ändå.

Gå över till den **heltäckande mallen** när ett beslut har höga insatser, har flera intressenter vars åsikter var och en spelar roll, eller verkligen behöver strukturerad kostnads-, SWOT- eller PEST-analys för att kunna försvaras senare. Se [checklistan](../checklista/index.md#checklista-behöver-det-här-beslutet-en-beslutspost) för den bredare frågan om ett beslut över huvud taget behöver en post, och [vägledningen](../vägledning/index.md#beslutspostens-anatomi) för hur de två mallarnas fält motsvarar varandra.

## Lätt mall

```markdown
# Rubrik (kort, presens, aktiv, upp till ca 50 tecken)

- Status: begäran om synpunkter | föreslagen | godkänd | avslagen | föråldrad | ersatt
- Datum: ÅÅÅÅ-MM-DD
- Beslutsfattare: [namn eller roller med befogenhet att godkänna detta]
- Ägare: [vem som underhåller och periodiskt ser över denna post]

## Bakgrund

Beskriv situationen och begränsningarna som gjorde beslutet nödvändigt, skrivet så att en läsare utan minne av mötet förstår varför frågan över huvud taget uppstod.

## Övervägda alternativ

Lista de realistiska alternativen — inklusive "gör ingenting" om det är relevant — som fakta och avvägningar, inte en uppställning av halmgubbar som får det valda alternativet att verka självklart rätt.

## Beslut

Ange valet i enkelt, aktivt språk: "Vi kommer att göra X." Inte en sammanfattning av för- och nackdelar — ett tydligt uttalande om vad som valdes.

## Konsekvenser

Ange vad som förändras till följd av detta: kostnader, risker, uppföljande beslut och allt som offras genom att inte välja ett alternativ. Läs det som "vi gör nu X i stället för Y", inte som en sammanfattning av för- och nackdelar för det redan fattade beslutet.
```

Se [handledningen](../handledning/index.md) för en fullständig genomgång av den här mallen, och [exempel/index.md](../exempel/index.md) för färdiga, ifyllda exempel.

## Heltäckande mall

```markdown
# Rubrik (kort, presens, aktiv, upp till ca 50 tecken)

- Status: begäran om synpunkter | föreslagen | godkänd | avslagen | föråldrad | ersatt
- Datum: ÅÅÅÅ-MM-DD
- Beslutsfattare: [namn eller roller med befogenhet att godkänna detta]
- Ägare: [vem som underhåller och periodiskt ser över denna post]

Sammanfattning: en eller två meningar om den nuvarande ståndpunkten och eventuella öppna behov.

## Problem

Beskriv problemet du vill ta itu med. Lämna inga frågor om varför du tar itu med det här problemet just nu.

Följ ett minimalistiskt förhållningssätt. Ta bara upp de problem som behöver åtgärdas vid olika tidpunkter i livscykeln.

Du kanske vill lägga till viss grupperingsinformation, som taggar, nyckelord, länkar till kunskapsbas och så vidare.

## Antaganden

Beskriv eventuella underliggande antaganden om miljön där du fattar beslutet.

Se till att ta upp alla relevanta kvalitetsegenskaper, även kallade tvärfunktionella krav.

Exempel på antaganden kan gälla omfattning, kostnad, tidplan, teknik, tillgång på resurser, behov av tjänstekvalitet, servicenivåavtal och så vidare.

Observera att miljöns begränsningar (som accepterade tekniska standarder, verksamhetsarkitektur, vanligt förekommande mönster och så vidare) kan begränsa vilka alternativ du överväger.

## Begränsningar

Fånga alla ytterligare begränsningar för miljön som det här beslutet kan innebära.

Se till att ta upp alla relevanta kvalitetsegenskaper, även kallade tvärfunktionella krav, som ovan.

Exempel på begränsningar kan gälla plattformsval, leverantörsval, hur lätt beslutet är att ångra och så vidare.

## Övervägda alternativ (Ståndpunkter)

Lista ståndpunkterna, det vill säga de gångbara alternativ som du överväger eller har övervägt.

Använd fakta och data, inte åsikter. Ståndpunkterna kan ofta kräva långa förklaringar, ibland till och med modeller och diagram.

Listan behöver inte vara uttömmande; men du vill inte höra frågan "Tänkte du på...?" under en slutgranskning, eftersom det leder till förlorad trovärdighet och ifrågasättande av andra arkitekturbeslut.

Det här avsnittet hjälper också till att säkerställa att du har hört andras åsikter; att uttryckligen ange andra åsikter hjälper till att få deras förespråkare med på ditt beslut.

### Kostnadsanalys (valfri)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Exempel:

- Införande, till exempel uppstartskostnader, tid och resurser.

- Drift, till exempel support och underhåll

- Utbildning, till exempel kompetenshöjning och förändringsledning

- Licensiering, till exempel avtalsöverenskommelser och juridiska åtaganden

- Mätning av användning, till exempel bandbredd och CPU-användning

### SWOT-analys (valfri)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

- Styrkor

- Svagheter

- Möjligheter

- Hot

### PEST-analys (valfri)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

- Politiska faktorer

- Ekonomiska faktorer

- Sociala faktorer

- Tekniska faktorer

Vissa team gillar att lägga till dessa som egna kategorier:

- Juridiska faktorer - vi föredrar att ha dessa under politiska faktorer.

- Regulatoriska faktorer - vi föredrar att ha dessa under politiska faktorer.

- Miljöfaktorer - vi föredrar att ha dessa under ekonomiska faktorer.

- Demografiska faktorer - vi föredrar att ha dessa under sociala faktorer.

### Annan analys (lägg till egna idéer här)

Lägg till egna idéer här...

## Åsikter

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

- Av teamet, helst skrivna av den faktiska kollegan.

- Av andra interna intressenter, helst skrivna av den faktiska intressenten.

- Av externa personer, som tredjepartsrådgivare, utvärderare, granskare och så vidare.

För varje åsikt, var tydlig med:

- Vem som framför åsikten

- Vilka andra kandidater som övervägdes,

- Hur utvärderade skribenten kandidaterna?

- Varför valde skribenten vinnaren?

- Vad har hänt sedan dess?

- Med vad du vet nu, vad skulle du råda människor att göra annorlunda?

### Rubrik för åsikt 1 (lägg till din här)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Förklara din åsikt här.

### Rubrik för åsikt 2 (lägg till din här)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Förklara din åsikt här.

### Rubrik för åsikt 3 (lägg till din här)

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Förklara din åsikt här.

## Argumentation

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Förklara varför du valde en ståndpunkt.

Beslut ska vara målstyrda. För att visa ansvarsskyldighet, koppla uttryckligen dina beslut till målen eller kraven.

Argumentationen är sannolikt lika viktig som själva beslutet.

Det behöver inte vara en uttömmande redogörelse; men du vill inte höra frågan "Tänkte du på...?" under en slutgranskning, eftersom (som ovan) det leder till förlorad trovärdighet och ifrågasättande av andra arkitekturbeslut.

## Följder

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Ange tydligt ditt besluts följder. Det kan vara mycket effektivt för att få acceptans och skapa en färdplan för genomförandet.

Till exempel kan ett beslut skapa ett behov av att fatta andra beslut, skapa nya krav eller ändra befintliga krav; ställa ytterligare begränsningar på miljön; kräva omförhandling av omfattning eller tidplan med kunder; eller kräva ytterligare utbildning av personal.

## Relaterade beslut

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Lista eventuella relaterade beslut här.

Vi har i praktiken funnit att en spårbarhetsmatris, beslutsträd eller metamodeller är mer användbara. Metamodeller är användbara för att visa komplexa samband diagrammatiskt (som Rose-modeller).

## Relaterade krav

Sammanfattning: förklara kort det här avsnittet och lyft helst fram eventuella avvikelser.

Lista eventuella relaterade krav här.

Vi har funnit det bekvämare att hänvisa till en spårbarhetsmatris. Du kan bedöma varje besluts bidrag till att uppfylla varje krav, och sedan bedöma hur väl kravet uppfylls över alla beslut. Om ett beslut inte bidrar till att uppfylla ett krav, fatta då inte det beslutet.

## Relaterade artefakter

Lista eventuella relaterade artefakter här.

Exempel är omfattningsdokument, planeringsdokument, affärsprocessmodeller och så vidare som det här beslutet påverkar.

## Relaterade principer

Om företaget har en överenskommen uppsättning principer, se till att beslutet är förenligt med en eller flera av dem. Det hjälper till att säkerställa samordning mellan domäner eller system.

## Relaterade anteckningar

Eftersom beslutsprocesser kan ta betydande tid har vi funnit det användbart att fånga anteckningar och frågor som teamet diskuterar under förankringsprocessen.
```
