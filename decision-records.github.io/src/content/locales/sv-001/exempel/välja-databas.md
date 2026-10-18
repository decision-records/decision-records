# Välja primär databas

* Status: begäran om synpunkter
* Datum: 2026-03-22
* Beslutsfattare: CTO (att bekräfta)
* Ägare: Chef för plattformsutveckling

Sammanfattning: Pågående arbete. Detta är en startpunkt för ett team som väljer primär databas för en växande produkt. Det är det enda tekniska exemplet i den här uppsättningen, och visar att arkitekturbeslut följer samma mönster som affärsbesluten på andra ställen i samlingen. Den visar hur ett team kan formulera frågan, diskutera alternativ och samla information. Den dokumenterar inget beslut.

## Problem

Den nuvarande databasen närmar sig sina skalningsgränser, och utvecklingsteamet räknar med att tillväxten snart når dessa gränser. En ersättare eller ett annat sätt att skala måste väljas före nästa stora produktlansering.

Frågor att besvara:

* Vilka är de verkliga gränserna i dag (läsningar, skrivningar, lagring, latens, drift), och hur snabbt närmar vi oss dem?
* Vilka egenskaper är viktigast (konsistens, tillgänglighet, latens, kostnad, driftbarhet, efterlevnad), och i vilken ordning?
* Skalar vi det vi har, går vi över till en hanterad tjänst eller driver vi något själva?
* Hur skulle vi migrera, och hur skulle vi lämna det igen om vi måste?

## Antaganden

Varje antagande är något att testa.

* **Tillväxtprognosen är realistisk.** Test: jämför med tidigare tillväxt och med försäljnings- och produktplaner; överväg ett högt och ett lågt fall.
* **Den nuvarande databasen kan skalas vidare, till ett pris.** Test: fråga leverantören och teamet hur mycket marginal som återstår och vad det kostar.
* **Vår arbetsbelastning passar en horisontellt skalbar design.** Test: studera frågor och transaktioner; leta efter operationer som kräver stark konsistens mellan poster.
* **Teamet kan driva det valda alternativet.** Test: lista de kompetenser som krävs och vem som har dem.

## Begränsningar

* Förändringen måste vara klar före lanseringen, med en stegvis migrering som inte stör den.
* Återkommande kostnad måste rymmas inom den godkända budgeten.
* Skyldigheter kring dataskydd och säkerhet gäller för varje val.
* Okänt, att bekräfta: datamängd, krav på lagringstid, regionala krav, integration med andra system och leverantörsåtaganden.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Skala den nuvarande databasen vertikalt** (en större maskin eller plan).
  * Värde: lägsta migreringsrisk; inga applikationsändringar.
  * Risker: köper bara en begränsad tid; kostnaden stiger kraftigt.
* **Flytta till en hanterad, horisontellt skalbar databastjänst.**
  * Värde: tar bort skalning och mycket driftarbete; leverantörens support.
  * Kostnadsdrivare: återkommande tjänsteavgifter; migrering; applikationsändringar; utgående dataöverföring och utträdeskostnader.
  * Risker: beroende av leverantörens funktioner och priser.
* **Flytta till en egendriven, horisontellt skalbar databas.**
  * Värde: potentiellt lägre återkommande kostnad; mer kontroll.
  * Kostnadsdrivare: att bygga upp driftkompetens; jourbelastning; verktyg; uppgraderingar.
  * Risker: driftoverheaden kan bli högre än väntat.
* **Designa om datalagret** (till exempel cachning, läsrepliker, partitionering eller uppdelning av arbetsbelastningar) för att förlänga den nuvarande databasen.
* **Använd olika databaser för olika arbetsbelastningar** (polyglott persistens), till priset av fler system att driva.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Konsistens eller tillgänglighet.** CAP-teoremet säger att ett distribuerat system som partitioneras inte kan garantera båda. Vilket är viktigast för varje del av produkten? Många arbetsbelastningar tål fördröjd konsistens; vissa gör det inte.
* **Hanterad eller egendriven.** Högre tjänstekostnad mot lägre driftrisk. Hur ska teamet värdera ingenjörernas tid?
* **Inlåsning.** Vad förloras genom att använda en leverantörsspecifik funktion, och vad vinns?
* **Standarder.** Hur mycket förlitar vi oss på SQL (standardiserat i ISO/IEC 9075) jämfört med en leverantörsspecifik frågemodell?

Så kan teamet utvärdera kostnader och avvägningar:

1. Testa med din egen arbetsbelastning: skapa ett realistiskt prestandatest och mät varje kandidat under förväntad last och toppbelastning, inklusive felscenarier.
2. Uppskatta total ägandekostnad över en angiven horisont med organisationens egna termer: tjänste- eller licensavgifter, drift, migrering, ingenjörstid, jour, utbildning, support och utträde. Visa intervall.
3. Poängsätt kandidaterna i en viktad matris över de egenskaper som spelar roll (produktkvalitetsmodellen ISO/IEC 25010 erbjuder ett ordförråd för detta) och testa känsligheten för vikterna.
4. Uppskatta hur länge varje alternativ räcker, och vad det kostar när gränsen nås igen.
5. Planera för utträde: hur skulle data och kod flytta bort från varje val?

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och vem som måste konsulteras (säkerhet, ekonomi, produkt).
* Enas om kriterier och vikter först.
* Samla de belägg som nämns ovan, inklusive resultat från prestandatest, och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet beslutar att migrera skulle det behöva:

* Planera en stegvis migrering med en period av parallellkörning före full övergång.
* Bekräfta budget för de återkommande kostnaderna.
* Planera uppföljande beslut, till exempel om anslutningspoolning och läsrepliker.
* Anteckna den förväntade utträdesvägen.

## Relaterade beslut

* [Bygga eller köpa](../bygga-eller-köpa/): allmänt resonemang om att bygga eller köpa.
* [Minska beroendet av en enda leverantör](../beroende-av-en-leverantör/): beroende av en enda leverantör.
* Beslut som inte fattats än: strategi för cache och repliker; datalagring.

## Relaterade anteckningar

* Öppna punkter: samla produktionsmått; skriv ner arbetsbelastningens egenskaper; ta fram en kortlista med kandidater för ett prestandatest.
* Läs mer:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
