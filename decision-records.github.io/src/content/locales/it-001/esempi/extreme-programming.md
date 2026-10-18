# Extreme Programming

* Stato: richiesta di commenti
* Data: 2025-10-06
* Decisore/i: Responsabile Ingegneria (da confermare)
* Responsabile: Engineering Manager

Sintesi: Lavoro in corso. Questo è un punto di partenza per un team di ingegneria che sta valutando come introdurre pratiche dell'Extreme Programming (XP), come sviluppo guidato dai test, programmazione in coppia, integrazione continua e piccoli rilasci. Mostra come un team può formulare la questione, discutere le opzioni e raccogliere informazioni. Non registra alcuna decisione.

## Questione

I team di prodotto rilasciano funzionalità in grandi lotti, e i difetti trovati tardi sono costosi: una quota evidente dei rilasci richiede una correzione urgente dopo il rilascio. I responsabili di ingegneria sono interessati alle pratiche dell'Extreme Programming, un metodo agile di sviluppo software che enfatizza pratiche tecniche come sviluppo guidato dai test, programmazione in coppia, integrazione continua, piccoli rilasci, refactoring e proprietà collettiva del codice.

Queste pratiche si sostengono a vicenda, ma cambiano anche il modo in cui gli ingegneri lavorano ogni giorno. Adottarle tutte in una volta rischia di incontrare resistenza e di essere fatto in modo superficiale. Le domande a cui rispondere:

* Quali problemi vogliamo risolvere (difetti tardivi, feedback lento, conoscenze in poche mani) e quali pratiche li affrontano?
* In quale ordine vanno introdotte le pratiche, e chi va per primo?
* Che cosa misureremmo per sapere che le pratiche aiutano?
* Qual è il giusto equilibrio tra uno standard condiviso e la scelta di ciascun team?

## Presupposti

Ogni presupposto è qualcosa da verificare.

* **I difetti tardivi sono causati soprattutto dalla mancanza di feedback automatico rapido.** Verifica: ripercorri un campione di correzioni urgenti fino al punto in cui il difetto avrebbe potuto essere intercettato.
* **Le pratiche di base (integrazione continua e test automatici) rendono possibili le altre.** Verifica: chiedi ai team che hanno provato le pratiche quali dipendevano da quali.
* **Gli ingegneri adotteranno pratiche che vedono funzionare in un team vicino.** Verifica: chiedi agli ingegneri che cosa li convincerebbe e che cosa li preoccupa.
* **Il numero di correzioni urgenti dopo il rilascio è una misura equa del progresso.** Verifica: concorda come verrà contato e controlla che altre misure (tempo di consegna, tasso di fallimento delle modifiche) non raccontino una storia diversa.

## Vincoli

* I team devono comunque consegnare funzionalità mentre imparano, quindi la produzione nel primo periodo sarà probabilmente inferiore.
* Gli ingegneri dovrebbero mantenere una scelta su come fanno coppia e su quali strumenti usano.
* L'infrastruttura di build e test esistente potrebbe richiedere lavoro prima che l'integrazione continua sia utile.
* Sconosciuto, da confermare: quanta parte della base di codice è testabile oggi, e se vincoli normativi o dei clienti influiscono sulla frequenza dei rilasci.

## Opzioni considerate

Per ogni opzione, stima valore, costi, tempistica e competenze necessarie, e annota quali prove cambierebbero l'opinione del team.

* **Adottare tutte le pratiche in una volta in ogni team.**
  * Valore: le pratiche si rafforzano a vicenda.
  * Fattori di costo: formazione; consegna più lenta durante l'apprendimento; lavoro sugli strumenti in tutti i team contemporaneamente.
  * Rischi: grande cambiamento; i team senza le competenze di base possono abbandonare le pratiche nel giro di settimane.
* **Adottare le pratiche in un ordine scelto, team per team.** Ad esempio integrazione continua e test automatici per primi (le fondamenta), poi piccoli rilasci e programmazione in coppia, poi sviluppo guidato dai test.
  * Valore: ogni pratica ha tempo di assestarsi; le prime rendono possibili le successive; l'esperienza del primo team guida gli altri.
  * Fattori di costo: coaching; tempo per la coppia e per scrivere test incorporato nei piani; lavoro di infrastruttura per la pipeline.
  * Forma della tempistica: sequenziale, con il team successivo che si unisce quando il precedente ha mantenuto sana la sua pipeline di rilascio per un periodo dichiarato.
  * Competenze necessarie: un coach; una pipeline di build affidabile; sostegno dei manager per il calo di produzione.
  * Rischi: lento; pratiche adottate in modo disomogeneo.
* **Adottare solo le pratiche facili.** Poco sforzo, ma può saltare quelle con il beneficio maggiore, come i test automatici.
* **Adottare un diverso insieme di pratiche** (ad esempio quelle descritte dalla ricerca DORA sulla consegna del software, come continuous delivery, trunk-based development e architettura a basso accoppiamento) e trattare XP come una fonte tra tante.
* **Non fare nulla di nuovo** e affrontare direttamente cause specifiche dei difetti. Una vera linea di base.

## Argomentazione

Punti di discussione che il team dovrebbe aspettarsi:

* **Programmazione in coppia.** Una pratica di cui molti ingegneri diffidano. Dove aiuta (condivisione delle conoscenze, lavoro complesso) e dove no?
* **Standardizzare o lasciar scegliere ai team?** Risultati condivisi (meno correzioni urgenti, feedback più rapido) con libertà dei team nel come raggiungerli, o uno standard più rigido?
* **Qualità contro velocità nel breve termine.** I leader sono disposti ad accettare una produzione inferiore mentre i team imparano?
* **TDD, mezzo o fine?** Alcune pratiche (come lo sviluppo guidato dai test) sono dibattute anche tra professionisti esperti. Il team dovrebbe decidere quale problema affronta la pratica prima di adottarla.

Come il team potrebbe valutare costi e compromessi:

1. Calcola il costo dell'approccio attuale: sforzo speso in correzioni urgenti, ritardi causati da difetti tardivi, impatto sui clienti. Usa intervalli nei termini dell'organizzazione.
2. Calcola il costo del programma: coaching, formazione, tempo per coppia e test, infrastruttura per la pipeline e il calo temporaneo della consegna.
3. Scegli prima le misure: quota di rilasci che richiedono correzioni urgenti, tempo di consegna delle modifiche, frequenza di deployment, tempo di ripristino del servizio (le misure DORA) e feedback degli ingegneri.
4. Confronta le opzioni nello scenario migliore, probabile e peggiore; chiedi come cambia la risposta se il beneficio appare più tardi o minore di quanto sperato.
5. Usa una matrice ponderata e un pre-mortem.

## Decisione

**Non ancora deciso.** Questo è un punto di partenza. Un team che lo usa dovrebbe sostituire questa sezione con la propria decisione.

Modo suggerito per arrivare a una decisione:

* Conferma chi decide e entro quando.
* Concorda prima criteri e pesi.
* Raccogli le prove sopra e registra ciò che è stato trovato.
* Condividi per i commenti, poi decidi e aggiorna lo Stato.

## Implicazioni

Se il team sceglie un approccio a fasi, dovrebbe:

* Nominare un coach e chiedere al primo team di riferire onestamente su ciò che ha aiutato e ciò che no.
* Pianificare tempo per la coppia e per scrivere test nei piani di consegna.
* Investire nella pipeline di build e test prima di affidarvisi.
* Concordare una regola di arresto: se una pratica non aiuta dopo un periodo dichiarato, il team può proporre di fermarla e registrarne il motivo.
* Mantenere la scelta degli ingegneri su come fanno coppia e su quali strumenti usano; le pratiche dovrebbero fissare il risultato, non ogni dettaglio di come lo si raggiunge.

## Decisioni correlate

* [Il Manifesto Agile](../manifesto-agile/): la decisione più ampia sui valori che queste pratiche sostengono.
* [Scegliere i nostri framework per l'information technology](../scelta-dei-framework-it/): come XP si inserisce con altri framework.
* Decisioni non ancora prese: investimento in pipeline e strumenti; modello di proprietà del codice.

## Note correlate

* Punti aperti: campiona le correzioni urgenti recenti; chiedi agli ingegneri le loro preoccupazioni su coppia e test; verifica che cosa la pipeline di build può fare oggi.
* Per saperne di più:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Leggi: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
