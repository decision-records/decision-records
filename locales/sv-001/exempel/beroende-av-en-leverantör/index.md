# Minska beroendet av en enda leverantör

* Status: begäran om synpunkter
* Datum: 2026-05-20
* Beslutsfattare: COO (att bekräfta)
* Ägare: Inköpschef

Sammanfattning: Pågående arbete. Detta är en startpunkt för ett team som överväger hur man ska hantera ett kraftigt beroende av en leverantör för kritiska tjänster. Den visar hur ett team kan formulera risken, diskutera alternativen och samla information. Den dokumenterar inget beslut.

## Problem

En intern riskgranskning fann att en stor del av utgifterna för kritisk infrastruktur går till en enda leverantör. Leverantören hade ett oplanerat avbrott som störde en kundvänd tjänst, och dess priser har stigit utan något avtalsenligt tak. Att fortsätta som nu lämnar organisationen exponerad för risk för tillgänglighet och för okontrollerad kostnadsökning.

Frågor att besvara:

* Hur mycket av det vi är beroende av är egentligen koncentrerat, och vad händer med verksamheten om leverantören fallerar eller höjer priserna igen?
* Hur sannolika och hur allvarliga är de händelserna, och vad är vi villiga att acceptera?
* Vilka är de realistiska sätten att minska risken, till vilken kostnad och hur snabbt?
* Hur skulle en säker utträdesväg eller reservlösning se ut?

## Antaganden

Varje antagande är något att testa.

* **Avbrottet och prishöjningen speglar ett bestående mönster**, inte en engångshändelse. Test: granska incidenthistorik, leverantörens kommunikation och marknadspriser.
* **En andra leverantör kan driva en del av den kritiska arbetsbelastningen med acceptabel kvalitet.** Test: ta fram en kortlista med kandidater och kör ett begränsat test.
* **Den primära leverantören förbättrar villkoren om den ser trovärdiga alternativ.** Test: be om ett förnyelseförslag medan andra alternativ utvärderas.
* **En stegvis migrering kan undvika tjänsteavbrott.** Test: granska de tekniska beroendena och avtalets begränsningar för att flytta arbetsbelastning.

## Begränsningar

* Den kundvända tjänsten får inte störas under någon övergång.
* Avtalsvillkor kan begränsa hur snabbt arbetsbelastning kan flyttas, och kan innehålla avgifter för att lämna.
* Varje ny leverantör bör bedömas med samma kriterier som den ursprungliga.
* Okänt, att bekräfta: dataportabilitet, proprietära tjänster i bruk, utträdesavgifter och regulatoriska förväntningar på tredjepartsrisk.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Acceptera risken och övervaka.**
  * Värde: ingen kostnad eller insats på kort sikt.
  * Risker: lämnar både avbrotts- och prisexponeringen; riskgranskningen kanske inte tillåter det vid nuvarande koncentration.
* **Omförhandla med den befintliga leverantören** om servicenivåer, ett pristak och bättre utträdesvillkor; stanna kvar hos en enda leverantör.
  * Värde: adresserar pris och ansvarsskyldighet.
  * Risker: tar inte bort den enskilda felpunkten.
* **Diversifiera: flytta en del av den kritiska arbetsbelastningen till en andra leverantör** och omförhandla huvudavtalet för resten.
  * Värde: minskar koncentrationen; stärker förhandlingspositionen.
  * Kostnadsdrivare: leverantörsval; migreringsinsats; dubbla driftkostnader under en tid; ökad driftkomplexitet (två uppsättningar rutiner och kompetenser).
  * Tidslinjens form: stegvis, med kontrollpunkter.
* **Bygg motståndskraft utan en andra leverantör**: säkerhetskopior, testade återställningsrutiner och designändringar som gör det möjligt att byta senare.
* **Flytta helt till en annan leverantör.** Störst störning; motiverat bara om den nuvarande leverantören är oacceptabel.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Riskaptit.** Vilken grad av beroende är acceptabel? Vem avgör?
* **Kostnad för motståndskraft.** Redundans har ett löpande pris; är försäkringen värd det, och för vilka tjänster?
* **Komplexitet.** Två leverantörer ger ökad driftkomplexitet. Har teamet kompetensen?
* **Inlåsning.** Hur mycket förlitar sig organisationen på en leverantörs proprietära funktioner, och vad skulle det kosta att flytta?

Så kan teamet utvärdera kostnader och avvägningar:

1. Identifiera kritiska tjänster och deras beroenden. För var och en, uppskatta affärspåverkan av avbrott av olika längd, som intervall.
2. Uppskatta sannolikheten för fel och prisförändring med hjälp av historik och leverantörsbelägg, med osäkerhet.
3. Räkna på varje alternativ: migrering, dubbla driftkostnader, verktyg, utbildning, upphandling och den löpande komplexiteten; ta med utträdeskostnader för båda leverantörerna.
4. Jämför den förväntade riskminskningen mot kostnaden och testa känsligheten för sannolikhetsuppskattningarna.
5. Definiera ledande indikatorer och utlösande punkter, till exempel ett brott mot servicenivå, en prisändring eller en säkerhetshändelse.

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och vilken riskaptit som gäller.
* Enas om kriterier och vikter först.
* Samla de belägg som nämns ovan och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet beslutar att diversifiera skulle det behöva:

* Genomföra en leverantörsvalsprocess med samma kriterier som den ursprungliga.
* Planera en stegvis migrering som undviker störningar.
* Omförhandla huvudavtalet parallellt.
* Acceptera ökad driftkomplexitet, med en rutinbeskrivning för varje leverantör.
* Rapportera koncentration och servicenivåvillkor regelbundet tills målet nåtts.

## Relaterade beslut

* [Välja databas](../välja-databas/): ett tekniskt exempel på samma inlåsningsfråga.
* [Bygga eller köpa](../bygga-eller-köpa/): relaterade anskaffningsval.
* Beslut som inte fattats än: utträdes- och kontinuitetsplan; leverantörsval.

## Relaterade anteckningar

* Öppna punkter: lista de kritiska tjänsterna och deras leverantörer; samla incidenthistorik; läs avtalet för utträdes- och prisvillkor.
* Läs mer:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Läs: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
