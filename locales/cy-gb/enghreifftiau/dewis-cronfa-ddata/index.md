# Dewis y brif gronfa ddata

* Statws: cais am sylwadau
* Dyddiad: 2026-03-22
* Gwneuthurwr(wyr) penderfyniadau: Prif Swyddog Technoleg (i'w gadarnhau)
* Perchennog: Pennaeth Peirianneg Platfform

Crynodeb: gwaith ar y gweill. Man cychwyn yw hwn ar gyfer tîm sy'n dewis y brif gronfa ddata ar gyfer cynnyrch sy'n tyfu. Dyma'r unig enghraifft dechnolegol yn y set hon, ac mae'n dangos bod penderfyniadau pensaernïaeth yn dilyn yr un patrwm â'r penderfyniadau busnes mewn mannau eraill yn y casgliad hwn. Mae'n dangos sut y gall tîm fframio'r cwestiwn, dadlau'r dewisiadau a chasglu gwybodaeth. Nid yw'n cofnodi unrhyw benderfyniad.

## Mater

Mae'r gronfa ddata bresennol yn agosáu at ei therfynau graddio, ac mae'r tîm peirianneg yn disgwyl eu cyrraedd cyn bo hir. Rhaid dewis amnewidiad, neu ffordd arall o raddio, cyn y lansiad cynnyrch mawr nesaf.

Y cwestiynau i'w hateb:

* Beth yw'r terfynau gwirioneddol heddiw (darllen, ysgrifennu, storio, oedi, gweithredu), a pha mor gyflym yr ydym yn agosáu atynt?
* Pa rinweddau sydd bwysicaf (cysondeb, argaeledd, oedi, cost, gweithredadwyedd, cydymffurfiaeth), ac ym mha drefn?
* A ydym yn graddio'r hyn sydd gennym, yn symud i wasanaeth a reolir, neu'n gweithredu rhywbeth ein hunain?
* Sut y byddem yn mudo, a sut y byddem yn gadael eto pe bai'n rhaid?

## Rhagdybiaethau

Mae pob rhagdybiaeth yn rhywbeth i'w brofi.

* **Mae'r rhagamcan twf yn realistig.** Prawf: ei gymharu â thwf y gorffennol a chynlluniau gwerthiant a chynnyrch; ystyried achos uchel ac isel.
* **Gellir graddio'r gronfa ddata bresennol ymhellach, am bris.** Prawf: gofyn i'r cyflenwr a'r tîm faint o le sydd ar ôl a beth mae'n ei gostio.
* **Mae ein llwyth gwaith yn gweddu dyluniad y gellir ei raddio'n llorweddol.** Prawf: astudio ymholiadau a thrafodion; chwilio am weithrediadau sydd angen cysondeb cryf ar draws cofnodion.
* **Gall y tîm weithredu'r dewis a ddewiswyd.** Prawf: rhestru'r sgiliau sydd eu hangen a phwy sydd â nhw.

## Cyfyngiadau

* Rhaid i'r newid fod yn barod cyn y lansiad, gyda mudo fesul cam nad yw'n tarfu arno.
* Rhaid i'r gost gylchol ffitio o fewn y gyllideb a gymeradwywyd.
* Mae rhwymedigaethau diogelu data a diogelwch yn berthnasol i unrhyw ddewis.
* Anhysbys, i'w gadarnhau: cyfaint data, gofynion cadw, gofynion rhanbarthol, integreiddio â systemau eraill ac ymrwymiadau i gyflenwyr.

## Dewisiadau a ystyriwyd

Ar gyfer pob dewis, amcangyfrif y gwerth, y costau, yr amserlen a'r galluoedd sydd eu hangen, a nodi pa dystiolaeth fyddai'n newid meddwl y tîm.

* **Graddio'r gronfa ddata bresennol yn fertigol** (peiriant neu gynllun mwy).
  * Gwerth: y risg mudo isaf; dim newidiadau i'r cymhwysiad.
  * Risgiau: yn prynu swm cyfyngedig o amser; mae'r gost yn codi'n serth.
* **Symud i wasanaeth cronfa ddata a reolir y gellir ei raddio'n llorweddol.**
  * Gwerth: yn cael gwared â graddio a llawer o'r gwaith gweithredu; cymorth y cyflenwr.
  * Ysgogwyr cost: taliadau gwasanaeth cylchol; mudo; newidiadau i'r cymhwysiad; ffioedd tynnu data allan.
  * Risgiau: dibyniaeth ar nodweddion a phrisiau'r cyflenwr.
* **Symud i gronfa ddata hunan-letyol y gellir ei graddio'n llorweddol.**
  * Gwerth: cost gylchol a allai fod yn is; mwy o reolaeth.
  * Ysgogwyr cost: adeiladu sgiliau gweithredu; baich galwadau; offer; uwchraddio.
  * Risgiau: gall y baich gweithredu fod yn uwch na'r disgwyl.
* **Ailgynllunio'r haen data** (er enghraifft celc, copïau darllen, rhaniad neu wahanu llwythi gwaith) i ymestyn y gronfa ddata bresennol.
* **Defnyddio cronfeydd data gwahanol ar gyfer llwythi gwaith gwahanol** (dyfalbarhad amlieithog), ar gost mwy o systemau i'w gweithredu.

## Dadl

Pwyntiau dadl y dylai'r tîm eu disgwyl:

* **Cysondeb yn erbyn argaeledd.** Mae theorem CAP yn dweud na all system ddosbarthedig â rhaniad warantu'r ddau. Pa un sy'n bwysicach ar gyfer pob rhan o'r cynnyrch? Mae llawer o lwythi gwaith yn goddef cysondeb gohiriedig; nid yw rhai.
* **Wedi'i reoli neu hunan-letyol.** Cost gwasanaeth uwch yn erbyn risg gweithredol is. Sut y dylai'r tîm brisio amser y peirianwyr?
* **Cloi i mewn.** Beth a gollir drwy ddefnyddio nodwedd sy'n benodol i gyflenwr, a beth a enillir?
* **Safonau.** I ba raddau yr ydym yn dibynnu ar SQL (a safonwyd yn ISO/IEC 9075) o'i gymharu â model ymholiad sy'n benodol i gyflenwr?

Sut y gallai'r tîm werthuso costau a chyfaddawdau:

1. Profi gyda'ch llwyth gwaith eich hun: creu meincnod realistig a mesur pob ymgeisydd o dan lwyth disgwyliedig a brig, gan gynnwys senarios methiant.
2. Amcangyfrif cyfanswm cost perchnogaeth dros gyfnod penodedig yn nhermau'r sefydliad ei hun: taliadau gwasanaeth neu drwyddedau, lletya, mudo, amser peirianneg, galwadau, hyfforddiant, cymorth a gadael. Rhoi amrediadau.
3. Sgorio ymgeiswyr mewn matrics wedi'i bwysoli o'r rhinweddau sy'n bwysig (mae model ansawdd cynnyrch ISO/IEC 25010 yn cynnig geirfa ar gyfer hyn), a phrofi sensitifrwydd i'r pwysoliadau.
4. Amcangyfrif faint o amser y mae pob dewis yn ei brynu a beth mae'n ei gostio pan gyrhaeddir y terfyn eto.
5. Cynllunio ar gyfer gadael: sut y byddai data a chod yn gadael pob dewis?

## Penderfyniad

**Heb ei benderfynu eto.** Man cychwyn yw hwn. Dylai tîm sy'n ei ddefnyddio roi ei benderfyniad ei hun yn lle'r adran hon.

Ffordd awgrymedig o gyrraedd penderfyniad:

* Cadarnhau pwy sy'n penderfynu a phwy y mae'n rhaid ymgynghori ag ef (diogelwch, cyllid, cynnyrch).
* Cytuno ar y meini prawf a'r pwysoliad yn gyntaf.
* Casglu'r dystiolaeth uchod, gan gynnwys canlyniadau'r meincnod, a chofnodi'r hyn a ganfuwyd.
* Rhannu am sylwadau, yna penderfynu a diweddaru'r Statws.

## Goblygiadau

Pe bai'r tîm yn penderfynu mudo, byddai angen iddo:

* Cynllunio mudo fesul cam gyda chyfnod rhedeg cyfochrog cyn y trosglwyddo llawn.
* Cadarnhau'r gyllideb ar gyfer y costau cylchol.
* Cynllunio penderfyniadau dilynol, er enghraifft ar gronni cysylltiadau a chopïau darllen.
* Cofnodi'r llwybr gadael disgwyliedig.

## Penderfyniadau cysylltiedig

* [Adeiladu neu brynu ar gyfer prosiect](../adeiladu-neu-brynu/): rhesymu cyffredinol am adeiladu neu brynu.
* [Lleihau risg crynodiad un cyflenwr](../dibyniaeth-ar-un-cyflenwr/): dibyniaeth ar un cyflenwr.
* Penderfyniadau heb eu gwneud eto: strategaeth celc a chopïau; cadw data.

## Nodiadau cysylltiedig

* Pwyntiau agored: casglu metrigau cynhyrchu; disgrifio nodweddion y llwyth gwaith; llunio rhestr fer o ymgeiswyr ar gyfer meincnod.
* Dysgu mwy:
  * Wicipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Fideo: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
