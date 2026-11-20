# Scegliere i nostri framework per l'information technology

* Stato: richiesta di commenti
* Data: 2026-10-14
* Decisore/i: Chief Information Officer e Chief Technology Officer (da confermare)
* Responsabile: Responsabile Technology Operations

Sintesi: Lavoro in corso. Questo è un punto di partenza per un gruppo tecnologico a cui è stato chiesto di adottare diversi framework (ad esempio ITIL, il Manifesto Agile, Extreme Programming e Six Sigma) e che deve decidere quali usare, per quale lavoro e in quale ordine. Mostra come un team può formulare la questione, discutere le opzioni e raccogliere informazioni. Non registra alcuna decisione.

## Questione

Leader diversi hanno chiesto al gruppo tecnologico di adottare ITIL per la gestione dei servizi, il Manifesto Agile per la consegna, Extreme Programming per l'ingegneria e Six Sigma per la qualità, talvolta negli stessi team e nello stesso periodo. Ogni richiesta è ragionevole da sola, ma insieme si sovrappongono, usano vocabolari diversi e chiedono alle persone di cambiare più in fretta di quanto riescano ad assorbire.

Le domande a cui rispondere:

* Quale problema risolve ciascun framework, e per quale tipo di lavoro?
* Dove si sovrappongono o confliggono, e quale dovrebbe avere la precedenza?
* In quale ordine dovremmo introdurli, e quanti cambiamenti può assorbire un team in una volta?
* Come sapremo se la combinazione aiuta?

## Presupposti

Ogni presupposto è qualcosa da verificare.

* **Ogni framework funziona meglio per il tipo di lavoro per cui è stato progettato.** Verifica: leggi le fonti e parla con persone che hanno usato ciascun framework.
* **I team possono assorbire un nuovo framework alla volta**, non più d'uno. Verifica: chiedi ai team quali cambiamenti sono già in corso e quale capacità hanno.
* **Gli sponsor accetteranno di attendere** se conoscono l'ordine e il motivo. Verifica: parla con loro presto.
* **Un confine scritto tra i framework ridurrà i conflitti.** Verifica: redigine uno e mettilo alla prova su esempi reali di conflitto.

## Vincoli

* Il gruppo ha una capacità di cambiamento limitata in ogni periodo.
* I framework usano vocabolari diversi, quindi termini condivisi come incidente, modifica, rilascio e difetto vanno definiti una volta sola.
* L'adozione completa di più framework potrebbe richiedere anni.
* Sconosciuto, da confermare: pratica attuale, aspettative contrattuali o di audit ed eventuali framework già in uso.

## Opzioni considerate

Per ogni opzione, stima valore, costi, tempistica e competenze necessarie, e annota quali prove cambierebbero l'opinione del team.

* **Adottare ogni framework richiesto ovunque.**
  * Valore: ogni sponsor ottiene ciò che ha chiesto.
  * Rischi: sovraccarico; indicazioni contrastanti (ad esempio approvazioni fisse delle modifiche contro rilascio continuo); impossibile capire quale modifica abbia causato quale risultato.
* **Adottare un framework come unico standard.**
  * Valore: semplice da spiegare.
  * Rischi: nessun singolo framework copre ugualmente bene operazioni di servizio, consegna del prodotto, pratica di ingegneria e qualità.
* **Assegnare ogni framework al tipo di lavoro a cui si adatta e introdurli a fasi, uno alla volta.** Ad esempio pratiche ITIL per gestire servizi live, i valori del Manifesto Agile per come i team di consegna pianificano e lavorano, pratiche di Extreme Programming per costruire software e Six Sigma per processi in cui i difetti si possono misurare.
  * Valore: più chiaro per i team; più facile da cui imparare.
  * Fattori di costo: un documento scritto dei confini; coordinamento; un programma lungo.
* **Adottare un ombrello di governance o standard** come ISO/IEC 38500 (governance dell'IT) o ISO/IEC 20000-1, e lasciare che i team scelgano i metodi al suo interno.
* **Non adottarne nessuno integralmente**; selezionare pratiche che affrontano i problemi misurati del gruppo.

## Argomentazione

Punti di discussione che il team dovrebbe aspettarsi:

* **Framework o risultati?** L'obiettivo è ottenere risultati migliori per i clienti, non adottare framework. Quali risultati contano di più?
* **Conflitti.** Dove le indicazioni confliggono, chi decide?
* **Ordine.** Quale per primo: quello con più pressione degli sponsor, o quello che sostiene gli altri?
* **Vocabolario.** Parole condivise riducono l'attrito, ma una falsa equivalenza nasconde differenze reali.

Come il team potrebbe valutare costi e compromessi:

1. Elenca prima problemi e risultati desiderati, con misure (ad esempio dalla ricerca DORA sulle prestazioni di consegna del software, più misure di servizio e qualità).
2. Per ogni framework, stima i costi nei termini dell'organizzazione: formazione, cambiamento di processo, strumenti, tempo perso e supporto continuo. Mostra gli intervalli.
3. Stima la capacità di cambiamento di ciascun team e ordina in modo che nessun team porti più di quanto possa assorbire.
4. Confronta le opzioni nello scenario migliore, probabile e peggiore; scegli quella più facile da adeguare se le prove cambiano.
5. Rivedi dopo i primi due framework e riconsidera l'ordine se le prove suggeriscono uno migliore.

## Decisione

**Non ancora deciso.** Questo è un punto di partenza. Un team che lo usa dovrebbe sostituire questa sezione con la propria decisione.

Modo suggerito per arrivare a una decisione:

* Conferma chi decide e chi deve essere consultato (inclusi gli sponsor).
* Concorda prima criteri e pesi.
* Raccogli le prove sopra e registra ciò che è stato trovato.
* Condividi per i commenti, poi decidi e aggiorna lo Stato.

## Implicazioni

Se il team decide di assegnare i framework per tipo di lavoro e introdurli a fasi, dovrebbe:

* Nominare un responsabile del documento dei confini e un modo per risolvere i conflitti, con escalation.
* Avviare un solo framework alla volta in un team, e iniziare il successivo solo quando il precedente ha raggiunto le proprie misure di uscita.
* Dire fin da ora agli sponsor dei framework successivi l'ordine e il motivo.
* Definire i termini condivisi una volta sola, nel documento dei confini.
* Rivedere l'intero approccio dopo i primi due framework.

## Decisioni correlate

* [Il Manifesto Agile](../manifesto-agile/), [ITIL 5](../itil-5/), [Extreme Programming](../extreme-programming/) e [Six Sigma](../six-sigma/): le decisioni su ciascun framework.
* [Framework aziendali](../framework-aziendali/): lo schema generale di adozione a fasi.
* Decisioni non ancora prese: strumenti; l'ordine dei framework successivi.

## Note correlate

* Punti aperti: elenca le pratiche attuali; chiedi agli sponsor quali risultati vogliono; redigi una prima bozza del documento dei confini.
* Per saperne di più:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Leggi: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
