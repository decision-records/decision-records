# Otsusekirje (DR)

Otsusekirje (decision record, DR) on viis algatada, arutada ja arhiveerida oluline valik koos selle konteksti ja tagajärgedega.

Sisukord:

- [Mis on otsusekirje?](#mis-on-otsusekirje)
- [Otsusekirje mall](#otsusekirje-mall)
- [Kuidas otsusekirjeid kasutama hakata](#kuidas-otsusekirjeid-kasutama-hakata)
- [Miks on otsusekirjed paremad kui lihtsalt märkmed?](#miks-on-otsusekirjed-paremad-kui-lihtsalt-märkmed)
- [Kuidas hakata otsusekirjeid tööriistadega kasutama](#kuidas-hakata-otsusekirjeid-tööriistadega-kasutama)
- [Oskused tehisintellektile](#oskused-tehisintellektile)
- [Soovitusi heade otsusekirjete kirjutamiseks](#soovitusi-heade-otsusekirjete-kirjutamiseks)
- [Meeskonnatöö nõuanded otsusekirjete jaoks](#meeskonnatöö-nõuanded-otsusekirjete-jaoks)
- [Meeskonnatöö küsimused otsusekirjete jaoks](#meeskonnatöö-küsimused-otsusekirjete-jaoks)
- [Lisateave](#lisateave)

Mida see hoidla sisaldab:

- [juhend](juhend) - mis on otsusekirje, miks seda kasutatakse, elutsükkel, juhtimine ja palju muud.
- [mall](mall) - kopeeritav ja kleebitav mall markdown-vormingu ja samm-sammuliste soovitustega.
- [õpetus](õpetus) - praktiline samm-sammuline läbimine: kirjuta oma esimene otsusekirje vähem kui 20 minutiga.
- [näited](näited) - lähtepunktiks mõeldud näited (pooleliolev töö, mitte valmis otsused) strateegia, müügi, turunduse, toote, personali, riski, projektide ja tehnoloogia valdkonnast.
- [kontrollnimekiri](kontrollnimekiri): kontrollnimekirjad selle otsustamiseks, kas kirjutada, kuidas hästi kirjutada, kuidas üle vaadata ja kuidas tava kogu organisatsioonis ellu viia.
- [abi](abi) — korduma kippuvad küsimused, tõrkeotsing ja sõnastik küsimuste jaoks, mida juhid selle kasutuselevõtul esitavad.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — selle hoidla spetsifikatsioon: ülesehitus, sisu, lokaadid, veebisait ja agendid.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — sisu, üks kaust lokaadi kohta; `en-us` on inglise keelne tõeallikas.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills, mis rakendavad selle hoidla malle ja kontrollnimekirju tehisintellekti assistendis: üks otsusekirja kirjutamiseks, teine selle hoidla haldamiseks.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — SvelteKit 3 lähtekood saidile [decision-records.github.io](https://decision-records.github.io), mis tutvustab ülaltoodud skille.

## Mis on otsusekirje?

**Otsusekirje** (DR) on viis algatada, arutada ja arhiveerida oluline valik koos selle konteksti ja tagajärgedega.

**Otsuste logi** (DL) on kõigi konkreetse projekti (või organisatsiooni) jaoks loodud ja hooldatavate otsusekirjete kogum.

**Otsus** tähendab selles kontekstis organisatsiooni valikut, mis käsitleb olulist nõuet.

**Oluline nõue** (SR) on projekti vajadus, millel on mõõdetav mõju projekti süsteemile.

Kõik need mõisted kuuluvad **teadmuse juhtimise** (KM) valdkonda.

Selle dokumendi eesmärk on anda kiire ülevaade otsusekirjetest.

## Otsusekirjed on organisatsioonide töövõtted

Kus iganes on valikut raske tagasi pöörata, see mõjutab teisi inimesi või seatakse hiljem kahtluse alla, väärib see otsusekirjet.

- Strateegia: turule sisenemine või sealt lahkumine, kasv versus kasumlikkus, kolmeaastane panus
- Müük: territooriumimudeli muutmine, CRM-i valik, tasustamise ümberkorraldamine
- Turundus: brändi ümberpositsioneerimine, kanalite segu valik, agentuur versus oma meeskond
- Toode: hinnamudeli kehtestamine, ise arendamine versus ostmine, funktsiooni või tootesarja lõpetamine
- Rahandus: rahastamisstruktuuri valik, kapitali jaotamise poliitika kehtestamine
- Personal: kaugtöö poliitika kehtestamine, ametitasemete ja palgavahemike ümberkujundamine
- Risk ja õigus: konkreetse riski aktsepteerimine, leevendamine või üleandmine; tarnija kontsentratsioonipiiri valik
- Tegevus: ise tegemine või ostmine, ettevõttesiseselt hoidmine või allhange, tarnemetoodika valik
- Avalikud suhted: kriisikommunikatsiooni hoiaku valik, meediaga suhtlemise poliitika kehtestamine
- Professionaalne areng: edutamise või koolitusse investeerimise poliitika kehtestamine
- Tehnoloogia: pilveteenuse pakkuja, andmebaasi, integratsioonimustri või tarkvarametoodika valik

Kui suudad ette kujutada, et keegi sinu meeskonnast küsib aasta pärast: "oota, miks me nii tegime?", on see otsus otsusekirje kandidaat.

## Otsusekirje mall

Vaata meie faili [mall](mall/index.md), mis kasutab neid põhiosi:

- **Pealkiri**: lühike käskiv kõneviis olevikus kuni 50 tähemärki.

- **Staatus**: kommentaaride küsimine | ettepandud | kinnitatud | tagasi lükatud | iganenud | asendatud

- **Küsimus**: kirjelda küsimust, mida tahad käsitleda, ja ära jäta kahtlusi selle kohta, miks.

- **Eeldused**: kirjelda eeldusi, lähtepunkte, projektideüleseid nõudeid jne.

- **Piirangud**: pane kirja piirangud keskkonnale, mida see otsus võib kaasa tuua.

- **Võimalused**: loetle võimalikud kandidaadid faktide ja andmetena, mitte arvamustena.

- **Arvamused**: meeskonna ja huvirühmade ning ka kolmandate osapoolte nõustajate ja hindajate omad.

- **Valik**: selgita, miks valisid ühe võimaluse, eesmärgi ja vastutusega.

- **Tagajärjed**: esita otsuse tagajärjed, näiteks muudatuste vajadus.

- **Seotud**: näiteks viited, projektideülene töö ja järgnevad vajadused.

## Kuidas otsusekirjeid kasutama hakata

Otsusekirjete kasutamise alustamiseks räägi oma meeskonnakaaslastega nendest valdkondadest.

Otsuste tuvastamine:

- Kui kiireloomuline ja kui oluline otsus on?

- Kas see tuleb teha praegu või saab oodata, kuni teatakse rohkem?

- Nii isiklik ja ühine kogemus kui ka tunnustatud kavandamismeetodid ja tavad aitavad otsuseid tuvastada.

- Ideaalis pea otsuste ülesandenimekirja, mis täiendab toote ülesandenimekirja.

Otsuste tegemine:

- On olemas mitmeid otsustustehnikaid, nii üldiseid kui ka tarkvaraspetsiifilisi, näiteks dialoogikaardistus (dialogue mapping).

- Grupiotsuste tegemine on aktiivne uurimisteema.

Otsuste elluviimine ja jõustamine:

- Otsustest tuleb teavitada süsteemi huvirühmi, kes seda rahastavad, arendavad ja käitavad, ning nad peavad need heaks kiitma.

- Arhitektuuriliselt nähtavad kodeerimisstiilid ja koodiülevaatused, mis keskenduvad arhitektuurilistele küsimustele ja otsustele, on kaks seotud tava.

- Otsuseid saab uuesti kaaluda süsteemi oluliste muudatuste korral, näiteks süsteemi edasiarendamisel, uuendamisel või muutuvate nõuetega kohandamisel.

Otsuste jagamine (valikuline):

- Paljud otsused korduvad projektide vahel.

- Seetõttu võivad varasemate otsuste kogemused, nii head kui halvad, olla väärtuslikud korduvkasutatavad varad, kui kasutatakse selget teadmuse juhtimise strateegiat.

- Grupiotsuste tegemine on aktiivne uurimisteema.

Otsuste dokumenteerimine:

- Otsuste planeerimiseks ja jäädvustamiseks on olemas palju malle ja tööriistu.

- Vaata agiilseid kogukondi, näiteks M. Nygardi architectural decision records.

- Vaata traditsioonilisi tarkvaratehnika ja arhitektuurikavandamise protsesse, näiteks IBM UMF-i ning CapitalOne'i Tyree ja Akermani pakutud tabelipaigutusi.

Otsuste juhised:

- Ülaltoodud sammud on võetud Vikipeedia artiklist [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- On olemas mitmeid otsustustehnikaid, nii üldiseid kui ka tarkvara- ja tarkvaraarhitektuuri-spetsiifilisi, näiteks dialoogikaardistus.

## Miks on otsusekirjed paremad kui lihtsalt märkmed?

Otsusekirje lisab vabas vormis märkmetele veidi struktuuri.

Otsusekirje mall lisab käsitletavate punktide loendi, mis toimib kontrollnimekirjana.

Oluline tulemus on see, et meeskonnad saavad kasutada otsusekirjeid ja malle meeskonnatöö parandamiseks: nii otsusekirjed kui ka mallid toimivad kontrollnimekirjadena, mis aitavad meeskonnal katta kõik aspektid ning suhelda tõhusalt ja tulemuslikult.

Otsusekirjete eelised kasvavad tavaliselt koos meeskonna suuruse, projekti laienemise, integratsioonivõimaluste, huvirühmade kaasatuse, pikaajalise hoolduse ja aja jooksul arenemisega.

Näiteks kasutame otsusekirjeid suurte meeskondadega, mitme osakonna vahel, mitme partnerorganisatsiooniga, mitmeaastastes projektides ja miljonite eurode suuruste eelarvetega. Sellise suuruse ja ulatuse juures eelistame teatud struktureeritud suhtlust vabas vormis märkmetele.

Praktikas meeldivad meile otsusekirjed ka seetõttu, et need soodustavad kaugtööl olevate meeskonnakaaslaste suuremat osalust, rohkem asünkroonset suhtlust, tõhusamat võimaluste hindamist ja rohkem kokkuvõtteid edaspidiseks. Kõik need aspektid aitavad ka uusi meeskonnakaaslasi sisse elada, sest otsused on selged, täielikud, lühikesed ja talletatud.

## Kuidas hakata otsusekirjeid tööriistadega kasutama

Võid otsusekirjete kasutamist tööriistadega alustada mis tahes viisil.

Näiteks:

- Kui sulle meeldivad Google Drive ja Google Docs, loo kaust `decisions` ja üks dokument otsusekirje kohta.

- Kui sulle meeldib lähtekoodi versioonihaldus, loo kataloog `decisions` ja üks tekstifail otsusekirje kohta.

- Kui sulle meeldivad projektiplaneerimise tööriistad nagu Atlassian Jira, kasuta tööriista planeerimisjälgijat.

- Kui sulle meeldivad vikid nagu MediaWiki, loo otsusekirjete viki ja üks vikileht otsusekirje kohta.

## Oskused tehisintellektile

Kui kasutad [Claude Code'i](https://claude.com/claude-code) või mõnda muud agenti, mis toetab [Claude Skills](https://code.claude.com/docs/en/skills), sisaldab see hoidla kahte tehisintellekti oskust kaustas [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — igaühele, kes kirjutab otsusekirja. Juhatab läbi küsimuse, kas valik vajab seda, kerge või põhjaliku malli valiku, koostamise, arhiveerimise ja avaldamiseelse kontrollnimekirja.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — selle hoidla enda haldajatele: lisada läbitöötatud näide, hoida näidete register ja ristviited järjepidevad ning selle hoidla failikonventsioonid.

Ühe kasutamiseks klooni see hoidla ja kopeeri soovitud skilli kaust sinna, kust sinu agent projekti skille laadib (Claude Code'i puhul tavaliselt `.claude/skills/<name>` sinu enda projektis) — ja palu oma assistendil seda kasutada. Vaata lisaks [decision-records.github.io/skills](https://decision-records.github.io/skills/) ja selle lehe lähtekoodi jaoks [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io).

## Soovitusi heade otsusekirjete kirjutamiseks

Hea otsusekirje tunnused:

- Ajahetk - Märgi, millal otsus tehti.

- Ratsionaalsus - Selgita konkreetse otsuse tegemise põhjust.

- Muutumatu kirje - Varem avaldatud otsusekirjes tehtud otsuseid ei tohiks muuta.

- Täpsus - Iga otsusekirje peaks käsitlema ühte otsust.

Hea konteksti tunnused otsusekirjes:

- Selgita oma organisatsiooni olukorda ja ärilisi prioriteete.

- Lisa põhjendused ja kaalutlused, mis põhinevad su meeskondade sotsiaalsel ja oskuslikul koosseisul.

Heade tagajärgede tunnused otsusekirjes:

- Õige lähenemine - "Me peame hakkama tegema X-i Y asemel"

- Vale lähenemine - Ära selgita otsust konkreetse AD tegemise "plusside" ja "miinuste" kaudu.

Uus otsusekirje võib asendada varasema otsusekirje:

- Kui tehakse otsus, mis asendab või muudab kehtetuks varasema otsusekirje, loo uus otsus ja viita vanale otsusele.

## Meeskonnatöö nõuanded otsusekirjete jaoks

Kui kaalud otsusekirjete kasutamist oma meeskonnaga, siin on nõuandeid, mida oleme õppinud paljude meeskondadega töötades.

Sul on võimalus oma meeskonnakaaslasi juhtida, rääkides koos "miks"-ist, selle asemel et "mida" ette kirjutada. Näiteks on otsusekirjed viis, kuidas meeskonnad saavad targemini mõelda ja paremini suhelda; otsusekirjed pole väärtuslikud, kui need on vaid tagantjärele pealesunnitud paberimajandus.

Mõned meeskonnad eelistavad tugevalt nime "otsused" lühendi "otsusekirjed" asemel. Kui mõned meeskonnad kasutavad kataloogi nime "decisions", on see nagu lamp süttiks ja meeskond hakkab kausta panema rohkem teavet, näiteks tarnijaotsuseid, planeerimisotsuseid, ajakavaotsuseid jne. Kõigi nende teaviketüüpide jaoks sobib sama mall. Oletame, et inimesed õpivad kiiremini sõnadega ("otsused") kui lühenditega ("otsusekirjed"), et inimesed on motiveeritumad kirjutama pooleliolevaid dokumente, kui sõna "kirje" kaob, ja et mõnele arendajale ning juhile ei meeldi sõna "arhitektuur".

Teoorias on muutumatus ideaalne. Praktikas on muudetavus meie meeskondade jaoks paremini töötanud. Lisame uue teabe olemasolevasse otsusekirjesse kuupäevatempli ja märkusega, et teave saabus pärast otsust. Selline lähenemine viib "elava dokumendini", mida me kõik saame uuendada. Tüüpilised uuendused tulevad siis, kui saame teavet tänu uutele meeskonnakaaslastele, uutele pakkumistele või meie kasutuse tegelikele tulemustele, või tagantjärele kolmandate osapoolte muudatuste tõttu, näiteks tarnijate võimekus, hinnakavad, litsentsilepingud jne.

## Meeskonnatöö küsimused otsusekirjete jaoks

### Kes saab otsusekirja luua?

Kaalu valdkondi nagu konkreetsed inimesed, konkreetsed rollid, konkreetsed meeskonnad või konkreetsed osakonnad; kaalu ka seda, kas on inimesi, rolle, meeskondi või osakondi, kes saavad otsusekirja tellida, st paluda sellist, mille kirjutab keegi teine.

Näidisvastus: Igaüks meie organisatsioonis, kes on lugenud arhitektuuriotsuste kirje README lehte, võib otsusekirja ette panna, st hakata seda kirjutama ja meeskonnaga jagada.

### Mis õigustab otsusekirje koostamist?

Kaalu valdkondi nagu su organisatsiooni meeskondade töövõtted, su tarkvarasüsteemi struktuur, meeskondadevaheline koordineerimine, pikaajaline hooldatavus, välisliidesed, kellele tahad kasu tuua ja muu sarnane.

Näidisvastus: Tahame luua otsusekirje, kui tahame, et tulevased arendajad mõistaksid meie tegevuse "miks".

### Mis õigustab otsusekirje mitte koostamist?

Kaalu valdkondi nagu otsused, mis ei puuduta arhitektuuri või on väikesed, näiteks minimaalse riskiga, iseseisvad või ühe arendaja piires, või mis on juba mujal täielikult kaetud, näiteks standardite, poliitikate või dokumentatsiooniga, või mis on ajutised, näiteks lahendused möödapääsuks, kontseptsiooni tõestused või katsed.

Näidisvastus: Jätame otsusekirje vahele, kui otsus on piiratud ulatuse, aja, riski ja kuluga või on juba mujal kaetud.

### Mis on otsusekirje elutsükkel?

Kaalu valdkondi nagu loomisprotsess, uurimisprotsess, otsustusprotsess, elluviimisprotsess ja lõpetamisprotsess. Kaalu, kuidas otsusekirje elutsüklit aja jooksul jälgida, näiteks kuidas liigutada otsusekirjet ühest olekust järgmisesse ja kuidas sellest huvirühmi teavitada.

Näidisvastus: Tahame, et otsusekirjel oleks viis elutsükli etappi: Algatamine → Uurimine → Hindamine → Elluviimine → Hooldamine → Lõpetamine.

### Millised on otsusekirje elutsükli etappide kriteeriumid?

Kaalu valdkondi nagu otsusekirje vastuvõtukriteeriumid, st kuidas tead, et see on piisavalt hea, et liikuda ühest elutsükli etapist järgmisse? Kas probleem on selgelt sõnastatud? Kas alternatiive on kaalutud? Kas kompromisse on piisavalt mõistetud ja dokumenteeritud?
Kas kogu asjakohane kontekst on olemas? Kas kõik asjakohased huvirühmad on kaasatud? Kas kogu tagasiside on arvesse võetud?

Näidisvastus: Tahame, et huvirühmad hääletaksid otsusekirja üle, kui aktiivne meeskond on 1) lõpetanud oma uurimise, 2) lõpetanud oma hindamise, 3) avaldanud otsusekirja ettepaneku huvirühmadele kommentaaride küsimisega ja ühe nädala ajaraamiga, 4) kõik huvirühmade kommentaarid on arvesse võetud ja käsitletud.

### Millised rollid ja vastutused otsusekirjega seotud on?

Kaalu selliseid rolle nagu ettepanekute tegija, uurija, hindaja, ülevaataja, kinnitaja, hooldaja ja muu sarnane. Kaalu selliseid vastutusi nagu suhtlus huvirühmadega, ootuste täitmise tagamine, jagamine veebisaidil või sisevõrgus ning töö perioodiline ülevaatamine, eriti kui toimuvad asjakohased muudatused.

Näidisvastus: Tahame, et igal otsusekirjel oleks alati peamine kontaktisik, teisene kontaktisik ja vastutav meeskond; nemad vastutavad suhtluse, avaldamise, hoolduse, vähemalt kord aastas toimuva perioodilise ülevaatuse ja vajaduse korral lõpuks lõpetamise eest.

### Kuidas juhtimine otsusekirjega seotud on?

Kaalu valdkondi nagu su organisatsiooni töövõtted, erilised vastavusvajadused, näiteks õiguslikud või personaliaspektid, ning kuidas tahad käsitleda konsensust versus konflikti versus eskaleerimist. Kas on valdkondi, inimesi või meeskondi, kellel võib otsusekirja suhtes olla suurem mõju kui teistel, näiteks õigus seda kinnitada, selle üle hääletada või sellele veto panna?

Näidisvastus: Otsusekirja juhtimine toimub selles prioriteetsusjärjekorras: tegevjuht, tehnikadirektor, juristidirektor, otsusekirja elluviiv meeskond, meeskonna eksperdid, kes teavad AD-st kõige rohkem. Kellelgi teisel pole juhtimisõigust, kui see pole otsusekirjas kirjeldatud.

### Millised põhimõtted otsusekirjega seotud on?

Kaalu valdkondi nagu su organisatsiooni töövõtted, sealhulgas kiiresti versus aeglaselt liikumine, otsuste konsensus versus otsuste konflikt, riskieelistused versus ohutuseelistused, avalik versus privaatne arutelu ja muu sarnane.

Näidisvastus: Kasutame juhtimispõhimõtteid bias for action, disagree-and-commit, 70% hinnangud on piisavalt head hõlpsasti tagasipööratavate ja hõlpsasti isoleeritavate otsuste jaoks ning avalikud töövõtted, välja arvatud konfidentsiaalne teave, nagu on kirjeldatud meie organisatsiooni konfidentsiaalsuslepingus.

## Lisateave

Sissejuhatus:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Mallid:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Põhjalikult:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - tasuta igakuine tarkvaraarhitektuuri õppetund

Tööriistad:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Ettevõttespetsiifilised juhised:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Näited:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videod:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcastid:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Raamatud:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Vaata ka:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM-i e-Business Reference Architecture Framework
