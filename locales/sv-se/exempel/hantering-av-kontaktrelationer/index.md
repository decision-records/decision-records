# Hantering av kontaktrelationer

* Status: begäran om synpunkter
* Datum: 2026-10-12
* Beslutsfattare: Intäktschef (CRO) (att bekräfta)
* Ägare: Chef för intäktsdrift

Sammanfattning: Pågående arbete. Detta är en startpunkt för ett team som överväger hur man ska hantera kontakter och relationer med kunder, partner och leverantörer på ett gemensamt sätt, inklusive samtycke. Den visar hur ett team kan formulera frågan, diskutera alternativ och samla information. Den dokumenterar inget beslut.

## Problem

Kund- och partnerkontakter finns i enskilda inkorgar, personliga kalkylblad och flera olika verktyg. När en kundansvarig slutar försvinner relationerna med dem, och samma person har kontaktats samma dag av olika team. Organisationen kan inte heller visa var en persons samtycke till att bli kontaktad är registrerat.

Frågor att besvara:

* Vem behöver kontaktinformation, för vad, och vem äger den?
* Vilka data har vi, var, och hur bra är de?
* Vad behöver vi registrera om samtycke och preferenser, och hur besvarar vi begäranden om att se, rätta eller radera personuppgifter?
* Vilken lösning passar hela organisationen, inte bara försäljningen?

## Antaganden

Varje antagande är något att testa.

* **Kundansvariga kommer att logga interaktioner i ett gemensamt system** om det är enkelt och deras relationer förblir deras att arbeta med. Test: fråga vad de skulle behöva, och kör en provperiod.
* **Befintliga data är tillräckligt bra för att migrera** efter rensning och sammanslagning av dubbletter. Test: ta stickprov på poster och mät dubbletter och luckor.
* **Ett system kan betjäna flera team** (försäljning, support, partner, leverantörer). Test: kartlägg varje teams behov och se var de skiljer sig.
* **Samtycke kan registreras tillförlitligt** i det nya systemet. Test: definiera samtyckesmodellen tillsammans med juridik och kontrollera vad varje alternativ stödjer.

## Begränsningar

* Samtycke och kontaktpreferenser måste registreras på ett ställe, och begäranden från en person måste kunna besvaras utifrån den posten.
* Regler om vem som får se och ändra vilka poster måste vara överenskomna före migreringen.
* Migrering tar personaltid.
* Okänt, att bekräfta: de juridiska krav som gäller (till exempel GDPR), regler för lagringstid för data och avtalsvillkor för nuvarande verktyg.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Behåll den nuvarande blandningen av verktyg och kalkylblad.**
  * Värde: ingen kostnad eller förändringsinsats.
  * Risker: förlorade relationer, dubbla kontakter och oklart samtycke fortsätter.
* **Anta ett gemensamt system för hantering av kontaktrelationer för hela företaget.**
  * Värde: en post per person och organisation; gemensam historik; registrerat samtycke.
  * Kostnadsdrivare: licenser; datamigrering; integration; utbildning; administration; arbetet med att rensa data.
  * Risker: förändrade vanor; regler för åtkomst behöver utformas.
* **Lägg bara till kontakthantering i det befintliga försäljnings-CRM:et.**
  * Värde: snabbast; verktyget är känt.
  * Risker: utelämnar partner, leverantörer och team utanför försäljningen.
* **Stegvis utrullning** med start hos de team som känner smärtan mest, där andra verktyg avvecklas när deras data har flyttats.
* **Masterdataansats.** Behåll specialverktyg men skapa en enda betrodd post för varje kontakt, delad via integration.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Omfattning.** Bara kunder, eller också partner, leverantörer och andra?
* **Ägande av relationer.** Företaget, inte individen, bör hålla posten. Hur får vi människor att känna sig bekväma med detta?
* **Integritet.** Samla bara in det som behövs; registrera den rättsliga grunden, inklusive samtycke där det är tillämpligt.
* **Kostnad för att rensa data.** Ofta mer än väntat.

Så kan teamet utvärdera kostnader och avvägningar:

1. Lista de data som förvaras på varje plats, deras kvalitet och deras risker.
2. Uppskatta kostnader över en angiven horisont med organisationens termer: licenser, migrering, rensning, integration, utbildning, administration och utträde. Visa intervall.
3. Uppskatta nyttor: färre förlorade relationer, mindre dubbel kontakt, snabbare svar på dataförfrågningar, bättre rapportering.
4. Bedöm integritet och säkerhet: hantering av samtycke (ISO/IEC 29184 beskriver integritetsmeddelanden och samtycke på nätet), säkerhetskontroller (ISO/IEC 27001) och integritetsstyrning (ISO/IEC 27701).
5. Välj mått: andel kontakter med ägare och registrerat samtycke, dubbletter, tid att besvara en begäran och användning per team. Granska efter den första perioden.

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och vem som måste konsulteras (juridik, försäljning, support, partnerskap).
* Enas om kriterier och vikter först.
* Samla de belägg som nämns ovan och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet beslutar sig för ett gemensamt system skulle det behöva:

* Utse en ledare för val, migrering och regler för åtkomst.
* Registrera samtycke och kontaktpreferenser på posten och hantera begäranden utifrån den posten.
* Kontrollera användningen under den första perioden och justera processen, inte bara påminnelserna, om människor inte loggar interaktioner.
* Rensa och slå ihop dubbla kontakter under migreringen.
* Avveckla andra verktyg när data har flyttats.

## Relaterade beslut

* [Välja CRM-plattform](../välja-crm-plattform/): verktygsvalet som detta bygger på.
* Beslut som inte fattats än: datalagring; åtkomstregler; integration med andra system.

## Relaterade anteckningar

* Öppna punkter: inventera var kontakter förvaras; ta stickprov på datakvalitet; be juridik granska samtyckesfälten.
* Läs mer:
  * Wikipedia: [Customer relationship management](https://en.wikipedia.org/wiki/Customer_relationship_management), [Contact manager](https://en.wikipedia.org/wiki/Contact_manager), [Master data management](https://en.wikipedia.org/wiki/Master_data_management), [Data quality](https://en.wikipedia.org/wiki/Data_quality), [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation), [Consent](https://en.wikipedia.org/wiki/Consent)
  * ISO: [ISO/IEC 29184:2020, Online privacy notices and consent](https://www.iso.org/standard/70331.html), [ISO/IEC 27701:2025, Privacy information management systems](https://www.iso.org/standard/27701), [ISO/IEC 27001:2022, Information security management systems](https://www.iso.org/standard/27001)
  * Läs: [UK ICO: consent](https://www.ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/); [Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
