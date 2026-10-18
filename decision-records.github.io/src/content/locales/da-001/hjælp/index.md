# Hjælp / FAQ

Almindelige spørgsmål, som ledere stiller, når de indfører beslutningsposter, samt en kort ordliste.

Indhold:

* [Ofte stillede spørgsmål](#ofte-stillede-spørgsmål)
* [Fejlfinding](#fejlfinding)
* [Ordliste](#ordliste)
* [Hvor du kan gå hen næste gang](#hvor-du-kan-gå-hen-næste-gang)

## Ofte stillede spørgsmål

**Hvordan adskiller dette sig fra mødereferater?**
Referater optager, hvad der blev *drøftet*; en beslutningspost fastholder, hvad der blev *besluttet og hvorfor*, skrevet så den kan stå alene uden mødets kontekst. Referater er et godt input til en beslutningspost — de er sjældent en erstatning for en.

**Hvor lang tid skal det egentlig tage?**
For en let post om en beslutning, du allerede forstår: 15–30 minutter. Tiden er sjældent spildt, for det er tid, du ellers ville bruge på at forklare den samme begrundelse igen i hver fremtidig samtale om emnet. Reservér omfattende poster — med omkostningsanalyse, SWOT/PEST og flere dokumenterede holdninger — til virkelig vigtige beslutninger.

**Hvem skal eje vores beslutningslog?**
Nogen, der er ansvarlig for det team eller den funktion, den dækker — ofte den samme person, der ellers om et år skulle svare på "hvorfor gjorde vi det her?" fra hukommelsen. I større organisationer kan en let styringsejer (fx stabschef, strategichef eller en roterende ejer pr. funktion) vedligeholde indekset uden at godkende hver enkelt beslutning.

**Hvad hvis beslutningstageren og interessenterne er uenige?**
Afklar *processen* før *beslutningen*: angiv på forhånd, hvem der har sidste ord (en person eller en defineret regel, fx "konsensus, eskalér til CEO, hvis det ikke er løst efter en uge"). Registrér afvigende holdninger i afsnittet "Holdninger" i den omfattende skabelon i stedet for at udviske uenigheden — en veldokumenteret afvigende holdning er værdifuld, hvis beslutningen senere tages op igen.

**Hvad hvis vi senere opdager, at beslutningen var forkert?**
Det er netop det, posten er til for. Skriv en ny beslutningspost, der erstatter den gamle, forklar, hvad der ændrede sig (ny information, ændrede omstændigheder eller en tankefejl), og henvis tilbage. At have taget fejl er ikke en grund til at slette sporet — det er grunden til, at sporet findes.

**Har vi brug for særlig software til dette?**
Nej. En mappe med markdown- eller Word-filer på et delt drev, et wikirum eller et versionsstyret repository fungerer alle. Vælg det, dit team allerede åbner dagligt — indførelse mislykkes langt oftere på grund af ukendte værktøjer end på grund af en manglende funktion.

**Kan en AI-assistent hjælpe med at udarbejde eller gennemgå disse?**
Ja, produktivt, på to måder: (1) at udarbejde et første udkast til Kontekst og Overvejede muligheder ud fra mødenoter eller en transskription, som en menneskelig beslutningstager retter og færdiggør; (2) at gennemgå et udkast mod [tjeklisten](../tjekliste/index.md) for at opdage manglende muligheder, vage beslutninger eller konsekvenser, der blot gentager debatten. En AI-assistent bør aldrig være den udpegede beslutningstager — ansvaret forbliver hos en person eller komité.

**Er dette ikke bare bureaukrati?**
Det bliver bureaukrati netop når det pålægges som papirarbejde bagefter for beslutninger, der allerede er truffet og meddelt. Det forbliver værdifuldt, når det bruges som et *tænkeværktøj* før en beslutning af dem, der faktisk træffer den. Se [Almindelige faldgruber](../vejledning/index.md#almindelige-faldgruber) i vejledningen.

**Hvor mange beslutningsposter er for mange?**
Hvis folk holder op med at læse loggen, har du logtræthed — du registrerer beslutninger, der var nemme at omgøre eller kun påvirkede én person. Begræns poster til valg, der virkelig er svære at gøre om, går på tværs eller sandsynligvis vil blive taget op igen. Se [tjeklisten](../tjekliste/index.md#tjekliste-kræver-denne-beslutning-en-beslutningspost).

**Vores team kan ikke lide ordet "arkitektur" eller "post" — betyder navnet noget?**
Ikke for mekanikken. Nogle teams opnår meget hurtigere indførelse blot ved at kalde mappen `decisions/` i stedet for `decision-records/` — den samme skabelon virker under begge navne. Brug det, der får dit team til faktisk at skrive dem ned.

**Kan én beslutningspost gælde for flere forretningsenheder?**
Ja, hvis beslutningen reelt er fælles (fx en virksomhedsdækkende leverandør). Men hold den til *én beslutning*: hvis to forretningsenheder i virkeligheden træffer to forskellige valg af to forskellige grunde, skriv da to poster og link dem som relaterede.

## Fejlfinding

| Symptom | Sandsynlig årsag | Løsning |
|---|---|---|
| Poster hober sig for evigt op i "anmodning om kommentarer" | Ingen frist eller ingen udpeget beslutningstager | Tilføj begge eksplicit; godkend som standard, hvis der ikke er indsigelse inden en angivet dato |
| Ingen læser loggen | For mange poster med lave indsatser; logtræthed | Anvend tjeklisten "kræver dette en post?" mere strengt |
| Poster læses som en fordele/ulemper-liste uden reel beslutning | Beslutningsafsnittet skrevet, før beslutningen faktisk var truffet | Offentliggør ikke "Beslutning" som endelig, før beslutningstageren virkelig har besluttet |
| Teamet behandler det som papirarbejde og er modvillige over at skrive dem | Indført oppefra som et mandat eller kun brugt bagefter til at retfærdiggøre tidligere valg | Introducér det igen som et værktøj, teamet vælger, fordi det sparer tid senere, og start med ét synligt nyttigt eksempel |
| Ingen kan finde gamle poster | Intet delt, holdbart opbevaringssted eller indeks | Opret ét sted `decisions/` med en indeksside, der oplister titel, status og dato |
| Beslutninger omgøres i det skjulte uden at nogen lægger mærke til det | Ingen konvention for erstatning | Når en beslutning ændres, skriv altid en ny post med status `erstattet`, der linker tilbage |

## Ordliste

* **Beslutningspost (DR)** — et dokument, der fastholder ét væsentligt valg, dets kontekst, overvejede muligheder, beslutningen og dens konsekvenser.
* **Beslutningslog (DL)** — den fulde samling af beslutningsposter for et team, en funktion eller en organisation.
* **Architecture decision record (ADR)** — det softwarespecifikke forbillede for dette mønster, med fokus på valg af teknologi og design.
* **Status** — en beslutnings livscyklusfase: anmodning om kommentarer, foreslået, godkendt, afvist, forældet eller erstattet.
* **Erstattet** — en beslutning, der er blevet afløst af en nyere; den gamle post forbliver i loggen med et link fremad i stedet for at blive slettet.
* **Væsentligt krav** — et behov med en målbar effekt på systemet eller organisationen, af den slags der berettiger en beslutningspost.
* **Videnstyring (KM)** — den bredere disciplin, beslutningsposter hører under: at fastholde institutionel viden, så den overlever enhver enkelt persons hukommelse.

## Hvor du kan gå hen næste gang

* Ny med arbejdsmetoden? Begynd med [vejledningen](../vejledning/index.md).
* Klar til at skrive en? Følg [gennemgangen](../gennemgang/index.md).
* Brug for en skabelon at kopiere? Se [skabelon/index.md](../skabelon/index.md).
* Vil du først se et eksempel inden for dit område? Gennemse [eksempler/index.md](../eksempler/index.md).
* Udruller du dette til et team? Brug [tjeklisten](../tjekliste/index.md).
