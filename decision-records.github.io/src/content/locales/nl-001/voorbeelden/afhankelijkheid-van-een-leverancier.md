# Het concentratierisico bij één leverancier verkleinen

* Status: verzoek om feedback
* Datum: 2026-05-20
* Beslisser(s): COO (te bevestigen)
* Eigenaar: Hoofd Inkoop

Samenvatting: Werk in uitvoering. Dit is een vertrekpunt voor een team dat overweegt hoe het moet reageren op een sterke afhankelijkheid van één leverancier voor kritieke diensten. Het laat zien hoe een team het risico kan formuleren, de opties kan bespreken en informatie kan verzamelen. Er wordt geen beslissing vastgelegd.

## Vraagstuk

Uit een interne risicobeoordeling bleek dat een groot deel van de uitgaven voor kritieke infrastructuur naar één leverancier gaat. Die leverancier had een ongeplande storing die een klantgerichte dienst verstoorde, en zijn prijzen zijn gestegen zonder contractueel plafond. Doorgaan zoals nu laat de organisatie blootstaan aan beschikbaarheidsrisico en aan ongecontroleerde kostenstijging.

De vragen die moeten worden beantwoord:

* Hoeveel van waarvan we afhankelijk zijn is daadwerkelijk geconcentreerd, en wat gebeurt er met het bedrijf als de leverancier uitvalt of de prijzen opnieuw verhoogt?
* Hoe waarschijnlijk en hoe ernstig zijn die gebeurtenissen, en wat zijn we bereid te accepteren?
* Wat zijn de realistische manieren om het risico te verkleinen, tegen welke kosten en hoe snel?
* Hoe zou een veilige exit of terugvaloptie eruitzien?

## Aannames

Elke aanname is iets om te toetsen.

* **De storing en de prijsverhoging weerspiegelen een blijvend patroon**, geen eenmalige gebeurtenis. Toets: bekijk de incidentgeschiedenis, communicatie van de leverancier en marktprijzen.
* **Een tweede leverancier kan een deel van de kritieke werklast met aanvaardbare kwaliteit draaien.** Toets: maak een shortlist van kandidaten en voer een beperkte proef uit.
* **De primaire leverancier verbetert de voorwaarden als hij geloofwaardige alternatieven ziet.** Toets: vraag om een verlengingsvoorstel terwijl je andere opties evalueert.
* **Een gefaseerde migratie kan verstoring van de dienst voorkomen.** Toets: bekijk de technische afhankelijkheden en de contractuele beperkingen op het verplaatsen van werklast.

## Beperkingen

* De klantgerichte dienst mag tijdens een overgang niet worden verstoord.
* Contractvoorwaarden kunnen beperken hoe snel werklast kan worden verplaatst en kunnen kosten voor vertrek omvatten.
* Elke nieuwe leverancier moet met dezelfde criteria worden beoordeeld als de oorspronkelijke.
* Onbekend, te bevestigen: dataportabiliteit, gebruikte propriëtaire diensten, exitkosten en regelgevende verwachtingen over risico's van derden.

## Overwogen opties

Schat voor elke optie waarde, kosten, doorlooptijd en benodigde capaciteiten in en noteer welk bewijs het team van mening zou doen veranderen.

* **Het risico accepteren en monitoren.**
  * Waarde: geen kosten of inspanning op korte termijn.
  * Risico's: laat zowel de blootstelling aan storingen als aan prijzen bestaan; de risicobeoordeling staat dit bij de huidige concentratie mogelijk niet toe.
* **Heronderhandelen met de bestaande leverancier** over serviceniveaus, een prijsplafond en betere exitvoorwaarden; één leverancier blijven.
  * Waarde: pakt prijs en verantwoording aan.
  * Risico's: neemt het single point of failure niet weg.
* **Diversifiëren: een deel van de kritieke werklast naar een tweede leverancier verplaatsen** en het primaire contract voor de rest heronderhandelen.
  * Waarde: verkleint de concentratie; versterkt de onderhandelingspositie.
  * Kostenfactoren: leveranciersselectie; migratie-inspanning; tijdelijk dubbele exploitatiekosten; extra operationele complexiteit (twee sets procedures en vaardigheden).
  * Verloop in de tijd: gefaseerd, met controlemomenten.
* **Veerkracht opbouwen zonder tweede leverancier**: back-ups, geteste herstelprocedures en ontwerpwijzigingen die overstappen later mogelijk maken.
* **Volledig naar een andere leverancier overstappen.** Grootste verstoring; alleen te rechtvaardigen als de huidige leverancier onaanvaardbaar is.

## Argumentatie

Discussiepunten die het team kan verwachten:

* **Risicobereidheid.** Welk niveau van afhankelijkheid is aanvaardbaar? Wie beslist?
* **Kosten van veerkracht.** Redundantie heeft een doorlopende prijs; is de verzekering het waard, en voor welke diensten?
* **Complexiteit.** Twee leveranciers voegen operationele complexiteit toe. Heeft het team de vaardigheden?
* **Lock-in.** Hoeveel leunt de organisatie op de propriëtaire functies van één leverancier, en wat zou verhuizen kosten?

Hoe het team kosten en afwegingen kan beoordelen:

1. Identificeer kritieke diensten en hun afhankelijkheden. Schat voor elk de zakelijke impact van een storing van verschillende duur, als bandbreedtes.
2. Schat de kans op uitval en prijswijziging aan de hand van geschiedenis en bewijs van de leverancier, met onzekerheid.
3. Bereken de kosten van elke optie: migratie, dubbele exploitatiekosten, tooling, training, inkoop en de doorlopende complexiteit; neem exitkosten voor beide leveranciers mee.
4. Vergelijk de verwachte risicovermindering met de kosten en toets de gevoeligheid voor de kansinschattingen.
5. Definieer leidende indicatoren en triggerpunten, bijvoorbeeld een schending van het serviceniveau, een prijswijziging of een beveiligingsincident.

## Beslissing

**Nog niet besloten.** Dit is een vertrekpunt. Een team dat het gebruikt, moet deze sectie vervangen door zijn eigen beslissing.

Voorgestelde manier om tot een beslissing te komen:

* Bevestig wie beslist en welke risicobereidheid geldt.
* Spreek eerst criteria en gewichten af.
* Verzamel het bewijs hierboven en leg vast wat er is gevonden.
* Deel voor commentaar, beslis dan en werk de Status bij.

## Gevolgen

Als het team besluit te diversifiëren, zou het:

* Een leveranciersselectieproces uitvoeren met dezelfde criteria als de oorspronkelijke.
* Een gefaseerde migratie plannen die verstoring voorkomt.
* Het primaire contract tegelijkertijd heronderhandelen.
* Extra operationele complexiteit accepteren, met een draaiboek per leverancier.
* Concentratie en serviceniveauvoorwaarden regelmatig rapporteren tot het doel is bereikt.

## Gerelateerde beslissingen

* [De primaire database kiezen](../database-kiezen/): een technologische variant van dezelfde lock-invraag.
* [Zelf bouwen of kopen voor een project](../zelf-bouwen-of-kopen/): gerelateerde sourcingkeuzes.
* Beslissingen die nog niet zijn genomen: exit- en continuïteitsplan; leveranciersselectie.

## Gerelateerde notities

* Openstaande punten: som de kritieke diensten en hun leveranciers op; verzamel de incidentgeschiedenis; lees het contract op exit- en prijsvoorwaarden.
* Meer weten:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Lezen: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
