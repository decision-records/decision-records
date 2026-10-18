# Otsusekirjete mallid

Kaks malli, mõlemad tavalises markdownis: kopeeri soovitud mall uude faili ja täida see.

## Malli valimine

Kasuta vaikimisi **kerget malli** — enamik otsuseid vajab ainult selle kuut välja ning leht, mis kasvab sellest suuremaks, on tavaliselt niikuinii rohkem kui üks otsus.

Liigu **põhjaliku malli** juurde, kui otsusel on suur panus, sellel on mitu huvirühma, kelle arvamused loevad eraldi, või see vajab tõesti struktureeritud kulu-, SWOT- või PEST-analüüsi, et valikut hiljem kaitsta. Vaata [kontrollnimekirja](../kontrollnimekiri/index.md#kontrollnimekiri-kas-see-otsus-vajab-otsusekirjet) laiema küsimuse jaoks, kas otsus vajab üldse kirjet, ja [juhendit](../juhend/index.md#otsusekirje-ülesehitus), et näha, kuidas kahe malli väljad üksteisele vastavad.

## Kerge mall

```markdown
# Pealkiri (lühike, olevikus, aktiivne, kuni ~50 tähemärki)

- Staatus: kommentaaride küsimine | ettepandud | kinnitatud | tagasi lükatud | iganenud | asendatud
- Kuupäev: AAAA-KK-PP
- Otsustaja(d): [nimi või nimed või roll(id), kellel on volitus see kinnitada]
- Omanik: [kes seda kirjet hooldab ja perioodiliselt üle vaatab]

## Taust

Kirjelda olukorda ja piiranguid, mis tegid selle otsuse vajalikuks, kirjutatud nii, et lugeja, kes koosolekut ei mäleta, mõistab, miks küsimus üldse tekkis.

## Kaalutud võimalused

Loetle realistlikud alternatiivid — sealhulgas "ära tee midagi", kui asjakohane — faktide ja kompromissidena, mitte õlgmehe-reana, mis paneb valitud võimaluse tunduma ilmselgelt õige.

## Otsus

Esita valik selges, aktiivses keeles: "Me teeme X-i." Mitte plusside ja miinuste kokkuvõte, vaid selge väide selle kohta, mis valiti.

## Tagajärjed

Esita, mis selle tulemusena muutub: kulud, riskid, järelotsused ja kõik, millest loobutakse, kui alternatiivi ei valita. Loe see nii, et "me teeme nüüd X-i Y asemel", mitte juba tehtud otsuse plusside ja miinuste kordusena.
```

Vaata [õpetust](../õpetus/index.md) selle malli täieliku läbitöötatud läbimise jaoks ja [näited/index.md](../näited/index.md) valmis, täidetud näidete jaoks.

## Põhjalik mall

```markdown
# Pealkiri (lühike, olevikus, aktiivne, kuni ~50 tähemärki)

- Staatus: kommentaaride küsimine | ettepandud | kinnitatud | tagasi lükatud | iganenud | asendatud
- Kuupäev: AAAA-KK-PP
- Otsustaja(d): [nimi või nimed või roll(id), kellel on volitus see kinnitada]
- Omanik: [kes seda kirjet hooldab ja perioodiliselt üle vaatab]

Kokkuvõte: üks või kaks lauset praeguse seisu ja avatud vajaduste kohta.

## Küsimus

Kirjelda küsimust, mida tahad käsitleda. Ära jäta kahtlusi selle kohta, miks käsitled seda küsimust praegu.

Järgi minimalistlikku lähenemist. Käsitle ainult küsimusi, mida tuleb elutsükli eri punktides käsitleda.

Võid tahta lisada rühmitusteavet, näiteks silte, märksõnu, teadmusbaasi linke jne.

## Eeldused

Kirjelda kõiki aluseks olevaid eeldusi keskkonnas, milles otsust teed.

Käsitle kindlasti kõiki asjakohaseid kvaliteediatribuute ehk funktsioonideüleseid nõudeid.

Näited eeldustest võivad puudutada ulatust, kulu, ajakava, tehnoloogiat, ressursside kättesaadavust, teenuse kvaliteedi vajadusi, teenusetaseme lepinguid jne.

Pane tähele, et keskkonnapiirangud (näiteks aktsepteeritud tehnoloogiastandardid, ettevõtte arhitektuur, tavaliselt kasutatavad mustrid jne) võivad piirata, milliseid võimalusi kaalud.

## Piirangud

Pane kirja kõik täiendavad keskkonnapiirangud, mida see otsus võib kaasa tuua.

Käsitle nagu eespool kindlasti kõiki asjakohaseid kvaliteediatribuute ehk funktsioonideüleseid nõudeid.

Näited piirangutest võivad puudutada platvormivalikuid, tarnijate valikuid, otsuse tagasipööratavuse lihtsust jne.

## Kaalutud võimalused (positsioonid)

Loetle positsioonid, st elujõulised võimalused, mida kaalud või oled kaalunud.

Kasuta fakte ja andmeid, mitte arvamusi. Positsioonid võivad sageli vajada pikki selgitusi, mõnikord isegi mudeleid ja diagramme.

See ei pea olema ammendav loend; sa ei taha siiski lõplikul ülevaatusel kuulda küsimust "Kas mõtlesid...?", sest see viiks usaldusväärsuse kaotamiseni ja teiste arhitektuuriotsuste kahtluse alla seadmiseni.

See jaotis aitab ka tagada, et kuulsid teiste arvamusi; teiste arvamuste selgesõnaline esitamine aitab nende pooldajad sinu otsuse taha saada.

### Kuluanalüüs (valikuline)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Näited:

- Algatamine, näiteks seadistuskulud, aeg ja ressursid.

- Käitamine, näiteks tugi ja hooldus

- Koolitus, näiteks oskuste täiendamine ja muutuste juhtimine

- Litsentsimine, näiteks lepingulised kokkulepped ja juriidilised kohustused

- Kasutuse mõõtmine, näiteks ribalaius ja CPU kasutus

### SWOT-analüüs (valikuline)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

- Tugevused

- Nõrkused

- Võimalused

- Ohud

### PEST-analüüs (valikuline)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

- Poliitilised tegurid

- Majanduslikud tegurid

- Sotsiaalsed tegurid

- Tehnoloogilised tegurid

Mõned meeskonnad tahavad lisada need oma kategooriatena:

- Õiguslikud tegurid - me eelistame need paigutada poliitiliste tegurite alla.

- Regulatiivsed tegurid - me eelistame need paigutada poliitiliste tegurite alla.

- Keskkonnategurid - me eelistame need paigutada majanduslike tegurite alla.

- Demograafilised tegurid - me eelistame need paigutada sotsiaalsete tegurite alla.

### Muu analüüs (lisa siia oma ideed)

Lisa siia oma ideed...

## Arvamused

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

- Meeskonnalt, ideaalis kirjutanud tegelik meeskonnakaaslane.

- Teistelt sisemistelt huvirühmadelt, ideaalis kirjutanud tegelik huvirühma liige.

- Välistelt inimestelt, näiteks kolmanda osapoole nõustajatelt, hindajatelt, ülevaatajatelt jne.

Iga arvamuse kohta tee selgeks:

- Kes arvamust esitab

- Milliseid teisi kandidaate kaaluti

- Kuidas autor kandidaate hindas

- Miks autor võitja valis

- Mis on sellest ajast saati toimunud

- Mida sa praeguse teadmisega inimestele teisiti teha soovitaksid

### Arvamuse 1 pealkiri (lisa enda oma siia)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Selgita siin oma arvamust.

### Arvamuse 2 pealkiri (lisa enda oma siia)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Selgita siin oma arvamust.

### Arvamuse 3 pealkiri (lisa enda oma siia)

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Selgita siin oma arvamust.

## Argumentatsioon

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Selgita, miks valisid positsiooni.

Otsused peaksid olema eesmärgipõhised. Vastutuse näitamiseks seo oma otsused selgesõnaliselt eesmärkide või nõuetega.

Argumentatsioon on tõenäoliselt sama oluline kui otsus ise.

See ei pea olema ammendav kirjeldus; sa ei taha siiski lõplikul ülevaatusel kuulda küsimust "Kas mõtlesid...?", sest see viiks (nagu eespool) usaldusväärsuse kaotamiseni ja teiste arhitektuuriotsuste kahtluse alla seadmiseni.

## Tagajärjed

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Esita selgelt oma otsuse tagajärjed. See võib olla väga tõhus toetuse saamiseks ja elluviimise teekaardi loomiseks.

Näiteks võib otsus tekitada vajaduse teha muid otsuseid, luua uusi nõudeid või muuta olemasolevaid nõudeid, seada keskkonnale täiendavaid piiranguid, nõuda ulatuse või ajakava uuesti läbirääkimist klientidega või nõuda täiendavat personali koolitust.

## Seotud otsused

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Loetle siia kõik seotud otsused.

Oleme praktikas leidnud, et jälgitavusmaatriks, otsustuspuud või metamudelid on kasulikumad. Metamudelid on kasulikud keerukate seoste diagrammidena näitamiseks (näiteks Rose'i mudelid).

## Seotud nõuded

Kokkuvõte: selgita seda jaotist lühidalt ja tõsta ideaalis esile kõik erandid.

Loetle siia kõik seotud nõuded.

Oleme leidnud, et mugavam on viidata jälgitavusmaatriksile. Saad hinnata iga otsuse panust iga nõude täitmisse ja seejärel hinnata, kui hästi nõue on kõigi otsuste lõikes täidetud. Kui otsus ei aita ühtki nõuet täita, siis ära seda otsust tee.

## Seotud tooted

Loetle siia kõik seotud tooted.

Näited on kõik ulatusdokumendid, planeerimisdokumendid, ärikäitusmudelid jne, mida see otsus mõjutab.

## Seotud põhimõtted

Kui ettevõttel on kokkulepitud põhimõtete kogum, veendu, et otsus on kooskõlas ühe või mitme neist. See aitab tagada kooskõla valdkondade või süsteemide vahel.

## Seotud märkmed

Kuna otsustusprotsessid võivad võtta märkimisväärselt aega, oleme leidnud, et on kasulik jäädvustada märkmeid ja küsimusi, mida meeskond arutab ühtlustamisprotsessi käigus.
```
