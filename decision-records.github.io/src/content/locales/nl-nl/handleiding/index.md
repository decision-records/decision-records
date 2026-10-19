# Handleiding: schrijf je eerste beslissingsdocument

Dit is een praktische rondleiding voor een leider die nog nooit een beslissingsdocument heeft geschreven. Er wordt een realistisch zakelijk scenario gebruikt — geen softwarevoorbeeld — omdat beslissingsdocumenten een algemeen leiderschapsinstrument zijn. Aan het eind heb je een echt document geschreven en weet je hoe je de werkwijze in je team introduceert.

Geschatte tijd: 20 minuten voor deel 1, plus doorlopende oefening voor deel 2–4.

Inhoud:

* [Deel 1: schrijf een beslissingsdocument (20 minuten)](#deel-1-schrijf-een-beslissingsdocument-20-minuten)
* [Deel 2: laat het beoordelen en goedkeuren](#deel-2-laat-het-beoordelen-en-goedkeuren)
* [Deel 3: begin een beslissingenlogboek](#deel-3-begin-een-beslissingenlogboek)
* [Deel 4: stel een beoordelingsritme vast](#deel-4-stel-een-beoordelingsritme-vast)
* [Het volledige uitgewerkte scenario](#het-volledige-uitgewerkte-scenario)

## Deel 1: schrijf een beslissingsdocument (20 minuten)

Kies een echte beslissing waar je nu voor staat — bij voorkeur een die al een beetje omstreden is, zodat je de waarde meteen voelt. Als je niets bedenkt, gebruik dan het doorlopende voorbeeld van deze handleiding: **"Moeten we van salarisverwerker wisselen?"**

### Stap 1: titel (2 minuten)

Schrijf een korte, actieve titel in de tegenwoordige tijd. Geen vraag, maar een uitspraak over de uiteindelijke beslissing:

> Wissel van salarisverwerker naar [aanbieder]

Maak je geen zorgen of je het zeker weet — je kunt de titel aanpassen zodra de beslissing valt.

### Stap 2: status en metagegevens (1 minuut)

```markdown
* Status: verzoek om feedback
* Datum: 2026-08-19
* Beslisser(s): CFO
* Eigenaar: Hoofd People Operations
```

De beslisser nu al noemen — vóór het debat — voorkomt een strijd over bevoegdheid nadat meningen al zijn verhard.

### Stap 3: context (5 minuten)

Schrijf de situatie alsof je haar uitlegt aan een nieuwe medewerker zonder enige achtergrond:

> Onze huidige salarisverwerker heeft het afgelopen jaar twee aangiftetermijnen gemist,
> wat in twee staten tot boetes voor te late betaling leidde. Ons contract wordt over 60 dagen
> verlengd. Finance en People Operations zijn het erover eens dat de huidige aanbieder een risico
> is, maar verschillen van mening over de urgentie en over de vraag of een wissel dit kwartaal
> de verstoring van de open inschrijvingsperiode waard is.

Merk op dat hier nog niet voor een bepaald antwoord wordt gepleit — alleen de spelende krachten worden benoemd.

### Stap 4: overwogen opties (5 minuten)

Som de echte alternatieven op, inclusief "niets doen", met eerlijke afwegingen:

> * **Bij de huidige aanbieder blijven en de SLA's heronderhandelen** — minste verstoring, maar
>   lost de oorzaak niet op; de aanbieder reageerde niet op eerdere escalaties.
> * **Overstappen naar aanbieder B** — sterker compliance-track record, maar de implementatie
>   valt samen met de open inschrijving, wat dat proces extra risico geeft.
> * **Overstappen naar aanbieder C** — betere prijs, maar merkbaar kleiner supportteam en
>   twee referentiegesprekken leverden zorgen op over reactietijden.

Als je merkt dat je maar één echte optie en twee stromannen opschrijft, stop dan — dat is een teken dat de beslissing al informeel is genomen en het document wordt gebruikt om die te rechtvaardigen in plaats van aan te scherpen. Ga terug en vraag eerst een tweede mening over de alternatieven.

### Stap 5: beslissing (2 minuten)

Zodra de beslisser daadwerkelijk heeft besloten (dat gebeurt mogelijk niet in dezelfde sessie als stap 1–4), schrijf je het in duidelijke actieve taal:

> We stappen over naar aanbieder B, waarbij de implementatie begint nadat de open inschrijving is afgesloten.

### Stap 6: gevolgen (5 minuten)

Beschrijf wat er verandert, geen herhaling van de hierboven al behandelde afwegingen:

> * Het huidige contract moet 30 dagen voor aanvang van de nieuwe termijn worden opgezegd.
> * People Operations draait vóór de overgang een parallelle salariscyclus als test.
> * De planning van de open inschrijving is beschermd; de wissel volgt pas nadat die is afgesloten.
> * We accepteren een samengedrukte implementatieperiode in ruil voor minder compliancerisico —
>   dit is de afweging die we bewust maken.

Dat is een compleet licht beslissingsdocument. Vergelijk het met het [sjabloon](../sjabloon/index.md#licht-sjabloon) — je zou elk onderdeel moeten kunnen terugvinden.

## Deel 2: laat het beoordelen en goedkeuren

1. Deel het concept met de feitelijke belanghebbenden (hier: Finance, People Ops en iedereen die door de wissel wordt geraakt) met een duidelijke vraag en een deadline: *"Opmerkingen uiterlijk vrijdag; daarna markeer ik dit als goedgekeurd, tenzij er iets wezenlijks verandert."*
2. Leg nieuwe informatie vast als een toevoeging met datum in plaats van eerdere onderdelen stilletjes te herschrijven — zo blijft het redeneerspoor behouden.
3. Zodra de beslisser bevestigt, zet je `Status` op `goedgekeurd` en noteer je de definitieve datum.

## Deel 3: begin een beslissingenlogboek

Eén beslissingsdocument is één keer nuttig. Een **beslissingenlogboek** — de verzameling van alle documenten van je team — is eeuwig nuttig.

1. Maak een duurzame, gedeelde locatie: een map `decisions/` in de bestaande gedeelde schijf, wikiruimte of versiebeheerrepository van je team. Gebruik wat je team al dagelijks opent — de beste tool is degene die mensen daadwerkelijk gebruiken.
2. Bewaar elk nieuw document met een duidelijke, sorteerbare naam, bijvoorbeeld `2026-08-19-switch-payroll-provider.md`.
3. Houd een indexpagina bij met alle documenten met titel, status en datum — zie [voorbeelden/index.md](../voorbeelden/index.md) voor een werkend voorbeeld van dit patroon.
4. Sommige teams merken dat het woord "beslissingen" (zonder "document") de werkwijze vanzelfsprekend laat voelen in plaats van geleend van engineering — gebruik de naam waarmee je team ze daadwerkelijk gaat schrijven.

## Deel 4: stel een beoordelingsritme vast

Beslissingen verouderen. Stel een licht governanceritme in zodat het logboek betrouwbaar blijft en geen kerkhof van verouderde keuzes wordt:

* **De eigenaar per document** beoordeelt zijn eigen documenten minstens jaarlijks, of wanneer de onderliggende situatie wezenlijk verandert.
* **Wanneer een beslissing wordt teruggedraaid of vervangen**, schrijf je een nieuw document en zet je de status van het oude op `vervangen`, met een verwijzing naar de vervanger. Verwijder nooit stilletjes — de geschiedenis van *waarom we van gedachten veranderden* is vaak waardevoller dan het huidige antwoord.
* **Elk kwartaal of jaar** loop je het hele logboek door op documenten die nog op `verzoek om feedback` of `voorgesteld` staan en nooit zijn afgehandeld, en sluit je ze af of archiveer je ze expliciet.

Zie de [checklist](../checklist/index.md) voor een beknopte, herhaalbare versie van alle vier de delen hierboven.

## Het volledige uitgewerkte scenario

Zie voor een ingevuld voorbeeld van een vergelijkbare beslissing [voorbeelden/index.md](../voorbeelden/index.md) — bijvoorbeeld het voorbeeld [Zelf bouwen of kopen voor een project](../voorbeelden/zelf-bouwen-of-kopen/). Het gebruikt het uitgebreide sjabloon, waarin Gevolgen overeenkomt met de sectie Gevolgen hierboven, en het is werk in uitvoering dat laat zien hoe een team vorderingen maakt met een beslissing, geen afgerond document.
