# ITIL 5

* Status: begäran om synpunkter
* Datum: 2026-09-30
* Beslutsfattare: IT-chef (CIO) (att bekräfta)
* Ägare: Chef för IT-tjänstehantering

Sammanfattning: Pågående arbete. Detta är en startpunkt för en IT-organisation som överväger hur, och i vilken ordning, ITIL 5 ska antas för IT-tjänstehantering. Den visar hur ett team kan formulera frågan, diskutera alternativ och samla information. Den dokumenterar inget beslut, och den återger inte vad ITIL 5 säger.

## Problem

IT-servicedesken och teamen runt den har vuxit utan ett gemensamt arbetssätt: incidenter, förfrågningar och ändringar hanteras olika av olika team, och återkommande incidenter analyseras sällan. Ledningen är intresserad av att basera IT-tjänstehanteringen på ITIL, den vida använda vägledningen för IT-tjänstehantering, i dess senaste version (ITIL 5), så att interna team, leverantörer och revisorer delar arbetssätt och begrepp.

ITIL 5 är nytt och släpps i etapper, så teamet måste först fastställa vad som faktiskt är tillgängligt och stabilt. Frågor att besvara:

* Vilket problem försöker vi lösa, och är ITIL 5 rätt sätt att lösa det, eller är organisationen bättre betjänad av att anta utvalda arbetssätt, stanna kvar vid den version den redan känner till eller ansluta sig till den internationella standarden ISO/IEC 20000-1?
* Om teamet går vidare, i vilken ordning och i vilken takt?
* Vad behöver vi kunna (förmågor, verktyg, data) före varje steg?

## Antaganden

Varje antagande är något att testa.

* **Smärtan finns främst i några få arbetssätt** (till exempel hantering av incidenter, förfrågningar och ändringar). Test: titta på ett urval av senaste incidenter och ändringar och kartlägg var tid och kvalitet går förlorade.
* **Arbetssätt kan antas separat** i stället för bara som ett paket. Test: läs ramverkets vägledning och tala med organisationer som antog det stegvis.
* **Servicedesken kan utbilda om sig medan den driver tjänsten.** Test: uppskatta den tid varje arbetssätt kräver av personalen, mot den tid de har.
* **Leverantörer och revisorer kommer att värdera ett gemensamt ordförråd.** Test: fråga de viktigaste vad de använder i dag och förväntar sig.
* **Om ITIL 5-materialet är moget nog att anta nu.** Test: kontrollera vad som hittills publicerats och certifierats, och vad som återstår.

## Begränsningar

* Tjänsten måste fortsätta fungera under varje förändring; servicedesken kan inte stanna för att utbilda om sig.
* Verktygsändringar bör begränsas till vad ett steg kräver; en stor plattformsändring är ett separat beslut.
* Gamla och nya arbetssätt kommer att samexistera en tid. Teamet bör ange hur länge det är acceptabelt.
* Okänt, att bekräfta: licens- och utbildningskostnadsmodeller för ramverket, leverantörsavtalsvillkor som hänvisar till ett visst ramverk och eventuella revisions- eller regulatoriska förväntningar.

## Övervägda alternativ

För varje alternativ bör teamet uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera de belägg som skulle ändra dess uppfattning.

* **Anta allt på en gång i alla team.**
  * Värde: ett gemensamt arbetssätt snabbast.
  * Kostnadsdrivare: utbildning av all personal; processomdesign för alla arbetssätt; verktygsändringar; förlorad kapacitet medan team utbildar om sig; kostnaden för att vända en dålig start.
  * Tidslinjens form: kort plan, lång återhämtning om det går dåligt.
  * Kompetenser som krävs: starkt förändringsledarskap och tillräckligt med reservkapacitet för att absorbera förändringen.
* **Anta per arbetssätt**, med start där smärtan är störst och användarna påverkas mest (vanligen hantering av incidenter och förfrågningar), sedan ändringar, sedan problemanalys och ständig förbättring, där varje fas har egna mått.
  * Värde: varje fas lär teamet vad som ska ändras i nästa; tidiga framgångar är synliga för användarna.
  * Kostnadsdrivare: ett längre övergripande program; att köra gamla och nya arbetssätt sida vid sida; upprepad utbildning; upprätthållande av utgångsmåtten.
  * Tidslinjens form: en följd av faser, var och en tillräckligt lång för att se en mätbar förändring innan nästa börjar.
  * Kompetenser som krävs: tillförlitliga tjänstedata (lösningstid, lösning vid första kontakten, andel ändringar som orsakar incidenter) och en ägare för varje arbetssätt.
* **Anta per team**: ett team antar alla arbetssätt först som pilot, därefter följer de andra.
  * Värde: ett komplett fungerande exempel tidigt.
  * Kostnadsdrivare: en tjänst delas upp på två arbetssätt medan piloten pågår; överlämningar mellan pilotteamet och andra blir svårare.
  * Risker: förvirrar användare och leverantörer; pilotteamets sammanhang kanske inte är typiskt.
* **Anpassa till ISO/IEC 20000-1 i stället för, eller vid sidan av, ITIL.** En certifierbar kravstandard för ett ledningssystem för tjänster, som vissa organisationer föredrar för revision och leverantörsgarantier.
  * Värde: extern erkännande; tydliga krav.
  * Kostnadsdrivare: bedömnings- och certifieringsinsats; dokumentation.
  * Risker: kan uppmuntra ett efterlevnadstänkande framför förbättring.
* **Gör ingen ramverksändring än** och åtgärda de specifika smärtpunkterna direkt. Ett verkligt basalternativ att räkna ärligt på.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Ramverk eller problem?** Är målet att anta ett ramverk, eller att minska upprepade incidenter och långsamma ändringar? Välj det alternativ som bedöms efter det andra.
* **Takt eller kapacitet.** Ett snabbare program ger nytta tidigare men tar samma människor från att driva tjänsten.
* **Versionsrisk.** Att anta något nylanserat ger färre utarbetade exempel och mindre utbildningsmaterial; att stanna vid en känd version är säkrare men kan åldras.
* **Ordförråd eller arbetssätt.** Att använda samma ord som leverantörerna är enklare än att ändra hur arbetet utförs. Vilket spelar störst roll?

Så kan teamet utvärdera kostnader och avvägningar:

1. Bygg en kostnadsmodell med organisationens egna termer. Engångs: utbildning, processdesign, verktygsändring, konsulting, vikarier. Återkommande: licenser, processägarens tid, revisioner. Dolda: minskad genomströmning under övergången, ändringar i leverantörsavtal. Ange intervall, inte enskilda tal.
2. Välj nyttomått innan ni börjar, så att framgång inte definieras i efterhand: lösningstid, lösning vid första kontakten, andel ändringar som orsakar incidenter, andel upprepade incidenter, användarnöjdhet, revisionsfynd.
3. Uppskatta återbetalning i bästa, troliga och sämsta scenario, och testa hur känsligt svaret är för de antaganden teamet är minst säkert på.
4. Poängsätt alternativen med en viktad matris (värde, kostnad, snabbhet, risk, passform med leverantörer, nödvändig förmåga).
5. Fråga vad varje alternativ gör med reversibiliteten: vilka kan stoppas efter en fas utan att arbetet går till spillo?

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och när.
* Reda ut kriterierna och deras vikter först.
* Samla de belägg som listas ovan, inklusive vad som för närvarande finns för ITIL 5.
* Publicera utkastet för synpunkter med en tidsfrist, besluta sedan och uppdatera Status.

## Följder

Om teamet väljer ett stegvist angreppssätt skulle det behöva:

* Publicera utgångsmått för varje fas och regelbundet rapportera mot dem till sponsorn.
* Utbilda personal i varje arbetssätt strax före dess fas.
* Låta arbetssätt som ännu inte ingår fortsätta som i dag, och säga det.
* Skjuta upp varje större inköp av en plattform för tjänstehantering tills belägg från de första faserna finns.
* Besluta vad som händer när en fas missar sina mått: upprepa, justera eller avbryta.

## Relaterade beslut

* [Ramverk för verksamheten](../ramverk-för-verksamheten/): samma mönster för stegvist införande tillämpat på ett annat ramverk.
* [Välja våra ramverk för informationsteknik](../ramverk-för-it/): hur ITIL passar med andra ramverk som gruppen överväger.
* Beslut som inte fattats än: verktyg; ändringar i leverantörsavtal; certifiering eller inte.

## Relaterade anteckningar

* Öppna punkter: bekräfta vad som finns i dag för ITIL 5; lista de arbetssätt som för närvarande utförs bra och dåligt; fråga de viktigaste leverantörerna och revisorerna vad de förväntar sig.
* Läs mer:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO: [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Läs: [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
