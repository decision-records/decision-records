# Välja våra ramverk för informationsteknik

* Status: begäran om synpunkter
* Datum: 2026-10-14
* Beslutsfattare: IT-chef (CIO) och teknikchef (CTO) (att bekräfta)
* Ägare: Chef för teknikdrift

Sammanfattning: Pågående arbete. Detta är en startpunkt för en teknikgrupp som ombetts anta flera ramverk (till exempel ITIL, det agila manifestet, Extreme Programming och Six Sigma) och behöver avgöra vilka som ska användas, för vilket arbete och i vilken ordning. Den visar hur ett team kan formulera frågan, diskutera alternativ och samla information. Den dokumenterar inget beslut.

## Problem

Olika ledare har bett teknikgruppen anta ITIL för tjänstehantering, det agila manifestet för leverans, Extreme Programming för utveckling och Six Sigma för kvalitet, ibland i samma team och under samma period. Varje begäran är rimlig för sig, men tillsammans överlappar de, använder olika ordförråd och ber människor förändras snabbare än de kan ta in.

Frågor att besvara:

* Vilket problem löser varje ramverk, och för vilken typ av arbete?
* Var överlappar eller konfliktar de, och vilket bör ha företräde?
* I vilken ordning bör vi införa dem, och hur många förändringar kan ett team ta in på en gång?
* Hur vet vi om kombinationen hjälper?

## Antaganden

Varje antagande är något att testa.

* **Varje ramverk fungerar bäst på den typ av arbete det utformades för.** Test: läs källorna och tala med personer som har använt varje ramverk.
* **Team kan ta in ett nytt ramverk i taget**, inte flera. Test: fråga teamen vilka förändringar som redan pågår och vilken kapacitet de har.
* **Sponsorer kommer att acceptera att vänta** om de känner till ordningen och skälet. Test: tala med dem tidigt.
* **En skriftlig gräns mellan ramverken minskar konflikter.** Test: skriv ett utkast och testa det på verkliga exempel på konflikter.

## Begränsningar

* Gruppen har begränsad kapacitet för förändring under en och samma period.
* Ramverken använder olika ordförråd, så gemensamma termer som incident, ändring, release och defekt måste definieras en gång.
* Fullt införande av flera ramverk kan ta år.
* Okänt, att bekräfta: nuvarande praxis, avtalsmässiga eller revisionsmässiga förväntningar och eventuella ramverk som redan används.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Anta varje begärt ramverk överallt.**
  * Värde: varje sponsor får det de bad om.
  * Risker: överbelastning; motstridig vägledning (till exempel fasta ändringsgodkännanden mot kontinuerlig release); omöjligt att avgöra vilken förändring som orsakade vilket resultat.
* **Anta ett ramverk som enda standard.**
  * Värde: enkelt att förklara.
  * Risker: inget enskilt ramverk täcker tjänstedrift, produktleverans, utvecklingspraxis och kvalitet lika bra.
* **Tilldela varje ramverk den typ av arbete det passar för, och inför dem ett i taget.** Till exempel ITIL-arbetssätt för att driva live-tjänster, det agila manifestets värderingar för hur leveransteam planerar och arbetar, Extreme Programming-arbetssätt för att bygga programvara och Six Sigma för processer där fel kan mätas.
  * Värde: tydligare för teamen; lättare att lära sig av.
  * Kostnadsdrivare: ett skriftligt gränsdokument; samordning; ett långt program.
* **Anta ett styrnings- eller standardparaply** som ISO/IEC 38500 (IT-styrning) eller ISO/IEC 20000-1, och låt teamen välja metoder inom det.
* **Anta inget av dem i sin helhet**; välj arbetssätt som möter gruppens uppmätta problem.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Ramverk eller resultat?** Syftet är bättre resultat för kunderna, inte att anta ramverk. Vilka resultat är viktigast?
* **Konflikter.** När vägledningen står i konflikt, vem avgör?
* **Ordning.** Vilket ska gå först: det med mest sponsortryck, eller det som stödjer de andra?
* **Ordförråd.** Gemensamma ord minskar friktion, men falsk ekvivalens döljer verkliga skillnader.

Så kan teamet utvärdera kostnader och avvägningar:

1. Lista problem och önskade resultat först, med mått (till exempel från DORA-forskning om leveransprestanda för programvara, plus tjänste- och kvalitetsmått).
2. För varje ramverk, uppskatta kostnader med organisationens egna termer: utbildning, processförändring, verktyg, förlorad tid och löpande support. Visa intervall.
3. Uppskatta varje teams förändringskapacitet och ordna så att inget team bär mer än det kan ta in.
4. Jämför alternativen i bästa, troliga och sämsta scenario; välj det som är lättast att justera om beläggen ändras.
5. Granska efter de två första ramverken och se över ordningen om beläggen tyder på en bättre.

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och vem som måste konsulteras (inklusive sponsorerna).
* Enas om kriterier och vikter först.
* Samla de belägg som nämns ovan och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet beslutar att tilldela ramverk efter typ av arbete och införa dem stegvis skulle det behöva:

* Utse en ägare för gränsdokumentet och ett sätt att lösa konflikter, med eskalering.
* Starta bara ett ramverk i ett team åt gången, och börja nästa först när det föregående har uppfyllt sina egna utgångsmått.
* Berätta för sponsorer av senare ramverk om ordningen och skälet nu.
* Definiera gemensamma termer en gång, i gränsdokumentet.
* Granska hela angreppssättet efter de två första ramverken.

## Relaterade beslut

* [Agila manifestet](../agila-manifestet/), [ITIL 5](../itil-5/), [Extreme Programming](../extreme-programming/) och [Six Sigma](../six-sigma/): besluten om vart och ett av ramverken.
* [Ramverk för verksamheten](../ramverk-för-verksamheten/): det allmänna mönstret för stegvist införande.
* Beslut som inte fattats än: verktyg; ordningen på senare ramverk.

## Relaterade anteckningar

* Öppna punkter: lista nuvarande arbetssätt; fråga sponsorer vilka resultat de vill ha; skriv ett första utkast till gränsdokument.
* Läs mer:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Läs: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
