# Extreme Programming

* Status: begäran om synpunkter
* Datum: 2025-10-06
* Beslutsfattare: Chef för utveckling (att bekräfta)
* Ägare: Utvecklingschef

Sammanfattning: Pågående arbete. Detta är en startpunkt för ett utvecklingsteam som överväger hur man ska införa arbetssätt från Extreme Programming (XP), som testdriven utveckling, parprogrammering, kontinuerlig integration och små leveranser. Den visar hur ett team kan formulera frågan, diskutera alternativen och samla information. Den dokumenterar inget beslut.

## Problem

Produktteam levererar funktioner i stora omgångar, och fel som upptäcks sent är dyra: en märkbar andel leveranser kräver en akut åtgärd efter leverans. Utvecklingsledare är intresserade av arbetssätt från Extreme Programming, en agil metod för programvaruutveckling som betonar tekniska arbetssätt som testdriven utveckling, parprogrammering, kontinuerlig integration, små leveranser, refaktorering och kollektivt kodägande.

Dessa arbetssätt stödjer varandra, men de förändrar också hur ingenjörer arbetar varje dag. Att anta alla på en gång möter sannolikt motstånd och genomförs ytligt. Frågor att besvara:

* Vilka problem vill vi lösa (sena fel, långsam återkoppling, kunskap som sitter hos ett fåtal personer), och vilka arbetssätt möter dem?
* I vilken ordning bör arbetssätten införas, och vem går först?
* Vad skulle vi mäta för att veta att arbetssätten hjälper?
* Vad är rätt balans mellan en gemensam standard och varje teams val?

## Antaganden

Varje antagande är något att testa.

* **Sena fel orsakas främst av brist på snabb automatisk återkoppling.** Test: spåra ett urval akuta åtgärder tillbaka till var felet kunde ha fångats.
* **De grundläggande arbetssätten (kontinuerlig integration och automatiska tester) gör de andra möjliga.** Test: fråga team som har provat arbetssätten vilka som berodde på vilka.
* **Ingenjörer kommer att anta arbetssätt som de ser fungera i ett team bredvid dem.** Test: fråga ingenjörer vad som skulle övertyga dem och vad som oroar dem.
* **Andelen akuta åtgärder efter leverans är ett rättvist mått på framsteg.** Test: enas om hur den ska räknas, och kontrollera att andra mått (ledtid, andel misslyckade ändringar) inte berättar en annan historia.

## Begränsningar

* Teamen måste fortfarande leverera funktioner medan de lär sig, så produktionen under den första perioden blir sannolikt lägre.
* Ingenjörer bör behålla ett val om hur de parar ihop sig och vilka verktyg de använder.
* Befintlig bygg- och testinfrastruktur kan behöva arbete innan kontinuerlig integration är användbar.
* Okänt, att bekräfta: hur stor del av kodbasen som är testbar i dag, och om regulatoriska eller kundmässiga begränsningar påverkar leveransfrekvensen.

## Övervägda alternativ

För varje alternativ, uppskatta värde, kostnader, tidslinje och kompetensbehov, och notera vilka belägg som skulle ändra teamets uppfattning.

* **Anta alla arbetssätt på en gång i varje team.**
  * Värde: arbetssätten förstärker varandra.
  * Kostnadsdrivare: utbildning; långsammare leverans under inlärningen; verktygsarbete i alla team samtidigt.
  * Risker: stor förändring; team utan de underliggande färdigheterna kan överge arbetssätten inom veckor.
* **Anta arbetssätten i en vald ordning, team för team.** Till exempel kontinuerlig integration och automatiska tester först (grunden), sedan små leveranser och parprogrammering, sedan testdriven utveckling.
  * Värde: varje arbetssätt får tid att sätta sig; de tidiga gör de senare möjliga; det första teamets erfarenhet vägleder resten.
  * Kostnadsdrivare: coachning; tid för parprogrammering och testskrivning inbyggd i planerna; infrastrukturarbete för pipelinen.
  * Tidslinjens form: sekventiell, där nästa team ansluter när det föregående har hållit sin leveranspipeline frisk under en angiven period.
  * Kompetenser som krävs: en coach; en tillförlitlig byggpipeline; chefsstöd för produktionsdippen.
  * Risker: långsamt; arbetssätt antas ojämnt.
* **Anta bara de enkla arbetssätten.** Låg insats, men kan hoppa över dem med störst nytta, som automatiska tester.
* **Anta en annan uppsättning arbetssätt** (till exempel de som beskrivs av DORA-forskningen om programvaruleverans, som kontinuerlig leverans, trunkbaserad utveckling och löst kopplad arkitektur) och behandla XP som en källa bland flera.
* **Gör inget nytt** och åtgärda specifika orsaker till fel direkt. Ett verkligt basfall.

## Argumentation

Diskussionspunkter som teamet bör räkna med:

* **Parprogrammering.** Ett arbetssätt som många ingenjörer är försiktiga med. Var hjälper det (kunskapsdelning, komplext arbete), och var gör det inte det?
* **Standardisera eller låta teamen välja?** Gemensamma resultat (färre akuta åtgärder, snabbare återkoppling) med teamfrihet i hur de nås, eller en striktare standard?
* **Kvalitet eller snabbhet på kort sikt.** Är ledarna villiga att acceptera lägre produktion medan teamen lär sig?
* **TDD, medel eller mål?** Vissa arbetssätt (som testdriven utveckling) debatteras även bland erfarna utövare. Teamet bör avgöra vilket problem arbetssättet adresserar innan det antas.

Så kan teamet utvärdera kostnader och avvägningar:

1. Räkna på nuvarande angreppssätt: insats som läggs på akuta åtgärder, förseningar orsakade av sena fel, kundpåverkan. Använd intervall med organisationens egna termer.
2. Räkna på programmet: coachning, utbildning, tid för parprogrammering och tester, infrastruktur för pipelinen och den tillfälliga dippen i leverans.
3. Välj mått först: andel leveranser som behöver akuta åtgärder, ledtid för ändringar, leveransfrekvens, tid att återställa tjänsten (DORA-måtten) och ingenjörernas återkoppling.
4. Jämför alternativen i bästa, troliga och sämsta scenario; fråga hur svaret ändras om nyttan visar sig senare eller blir mindre än hoppats.
5. Använd en viktad matris och en pre-mortem.

## Beslut

**Inte beslutat än.** Detta är en startpunkt. Ett team som använder den bör ersätta det här avsnittet med sitt eget beslut.

Föreslaget sätt att nå ett beslut:

* Bekräfta vem som beslutar och när.
* Enas om kriterier och vikter först.
* Samla de belägg som nämns ovan och anteckna vad som hittades.
* Dela för synpunkter, besluta sedan och uppdatera Status.

## Följder

Om teamet väljer ett stegvist angreppssätt skulle det behöva:

* Utse en coach och be det första teamet rapportera ärligt om vad som hjälpte och vad som inte gjorde det.
* Planera tid för parprogrammering och för att skriva tester i leveransplanerna.
* Investera i bygg- och testpipelinen innan man förlitar sig på den.
* Enas om en stoppregel: om ett arbetssätt inte hjälper efter en angiven period kan teamet föreslå att sluta med det och anteckna varför.
* Behålla ingenjörernas val om hur de parar ihop sig och vilka verktyg de använder; arbetssätt bör sätta resultatet, inte varje detalj i hur det nås.

## Relaterade beslut

* [Agila manifestet](../agila-manifestet/): det bredare beslutet om de värderingar som dessa arbetssätt stödjer.
* [Välja våra ramverk för informationsteknik](../ramverk-för-it/): hur XP passar med andra ramverk.
* Beslut som inte fattats än: investeringar i pipeline och verktyg; modell för kodägande.

## Relaterade anteckningar

* Öppna punkter: ta ett urval av senaste akuta åtgärder; fråga ingenjörer om deras farhågor kring parprogrammering och testning; kontrollera vad byggpipelinen kan göra i dag.
* Läs mer:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Läs: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
