# Bygga eller köpa i ett projekt

* Status: begäran om synpunkter
* Datum: 2026-06-01
* Beslutsfattare: COO (att bekräfta)
* Ägare: Driftchef

Sammanfattning: Pågående arbete. Detta är en startpunkt för ett team som behöver en ny förmåga, här ett kundvänt schemaläggningsverktyg, och avgör om det ska bygga det, köpa det eller göra något däremellan. Den visar hur ett team kan formulera frågan, diskutera alternativen och samla information. Den dokumenterar inget beslut.

## Problem

Ett tjänsteföretag schemalägger arbete med en manuell, kalkylbladsbaserad process som har orsakat dubbelbokningar och skadat kundrelationer. En lösning behövs inom begränsad tid, och teamet måste avgöra om man ska bygga ett verktyg internt eller köpa ett befintligt.

Frågor att besvara:

* Vad måste verktyget göra (krav), och vilka av dem är nödvändiga?
* Hur väl möter varje väg kraven, inom den tid som finns?
* Vad är den fulla kostnaden för varje väg under dess livslängd, inklusive det teamet avstår från genom att välja den?
* Vad händer om kraven ändras, eller om den valda vägen misslyckas?

## Antaganden

Varje antagande är något att testa.

* **De flesta schemaläggningsbehov är gemensamma med andra organisationer, så en befintlig produkt kan täcka dem.** Test: lista kraven och be leverantörer visa hur var och ett uppfylls.
* **De ovanliga fallen är tillräckligt få för att hanteras med en tillfällig lösning.** Test: räkna hur ofta de förekommer och skriv ner den tillfälliga lösningen för varje.
* **Interna ingenjörer kan bygga och underhålla verktyget.** Test: uppskatta insatsen tillsammans med dem som skulle göra det, och fråga vad de då inte skulle göra.
* **Leverantörernas tidplaner är realistiska.** Test: tala med referenskunder av liknande storlek, inklusive sådana vars projekt drog över.

## Begränsningar

* En lösning behövs inom en fast period.
* Andra åtagna produktinitiativ måste hålla sina tidplaner, så ingenjörskapacitet kan inte bara tas från dem.
* Verktyget hanterar kunddata, så säkerhet och integritet måste kontrolleras.
* Okänt, att bekräfta: integrationsbehov, förväntad tillväxt och vad som händer när ett leverantörsavtal tar slut.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Bygg internt.**
  * Värde: exakt passform för organisationens regler; full kontroll över färdplanen.
  * Kostnadsdrivare: design, utveckling, test, drift, support och underhåll under hela verktygets livslängd; alternativkostnaden för det ingenjörerna inte bygger i stället.
  * Tidslinjens form: ofta längre än de första uppskattningarna; värdet kommer i slutet.
  * Kompetenser som krävs: produktledning; ingenjörskonst; drift.
* **Köp en befintlig produkt.**
  * Värde: snabbare; kostnaderna sprids; drar nytta av leverantörens förbättringar.
  * Kostnadsdrivare: licenser, införande, konfiguration, utbildning, integration, administration och utträde.
  * Risker: brister mot kraven; leverantörsförändringar; inlåsning.
* **Köp en produkt och beställ skräddarsytt arbete av leverantören.** Täpper till luckor, men tillför tid och kostnad och bär leveransrisk.
* **Sätt ihop av mindre verktyg** (till exempel en lågkodsplattform eller en kombination av befintliga tjänster).
* **Förbättra den manuella processen först** med en tillfällig åtgärd, för att köpa tid för ett bättre beslut.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Passform eller snabbhet.** En perfekt passform som kommer sent kan vara sämre än en bra passform nu.
* **Kärna eller kontext?** Är schemaläggning en del av det som gör verksamheten särpräglad? Om inte brukar köp föredras.
* **Dolda kostnader.** Att bygga har löpande underhåll; att köpa har löpande licenser, integration och utträde.
* **Reversibilitet.** Vilket val är lättare att ångra om det visar sig fel?

Så kan teamet utvärdera kostnader och avvägningar:

1. Skriv krav och rangordna dem. Poängsätt varje väg mot dem och notera brister.
2. Uppskatta total ägandekostnad över en angiven horisont med organisationens egna termer: engångskostnader, återkommande kostnader, intern personaltid, integration, utbildning och utträde. Visa intervall.
3. Uppskatta kostnaden för fördröjning: effekten av varje ytterligare period av dubbelbokningar.
4. Jämför alternativen i bästa, troliga och sämsta scenario, och testa effekten av ändrade krav.
5. Använd en viktad matris (passform, snabbhet, kostnad, risk, kontroll, reversibilitet) och en pre-mortem.

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och vem som måste vara överens.
* Enas om krav och vikter först.
* Samla de belägg som nämns ovan och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet beslutar att köpa skulle det behöva:

* Utse en införandeansvarig och planera utbildning inom leverantörens tidplan.
* Dokumentera tillfälliga lösningar för fall som inte stöds, logga hur ofta de används och granska efter skarp användning.
* Definiera vad som skulle utlösa ett uppföljande beslut om skräddarsytt arbete.
* Bekräfta att ingen ingenjörskapacitet tas från åtagna initiativ.

## Relaterade beslut

* [Välja CRM-plattform](../välja-crm-plattform/): ett liknande val för ett annat system.
* [Välja databas](../välja-databas/): ett tekniskt exempel på frågorna om bygga eller köpa och inlåsning.
* [Minska beroendet av en enda leverantör](../beroende-av-en-leverantör/): beroende av en leverantör.
* Beslut som inte fattats än: skräddarsydd integration; datalagring.

## Relaterade anteckningar

* Öppna punkter: skriv och rangordna krav; be leverantörer om referenskunder; uppskatta byggarbetet tillsammans med ingenjörer.
* Läs mer:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
