# Scegliere il database principale

* Stato: richiesta di commenti
* Data: 2026-03-22
* Decisore/i: CTO (da confermare)
* Responsabile: Responsabile Platform Engineering

Sintesi: Lavoro in corso. Questo è un punto di partenza per un team che sceglie il database principale per un prodotto in crescita. È l'unico esempio tecnologico di questo insieme e mostra che le decisioni architetturali seguono lo stesso schema delle decisioni di business altrove in questa raccolta. Mostra come un team può formulare la questione, discutere le opzioni e raccogliere informazioni. Non registra alcuna decisione.

## Questione

Il database attuale si avvicina ai suoi limiti di scalabilità e il team di ingegneria si aspetta che la crescita raggiunga quei limiti a breve. Una sostituzione o un diverso modo di scalare deve essere scelto prima del prossimo grande lancio del prodotto.

Le domande a cui rispondere:

* Quali sono i limiti reali oggi (letture, scritture, archiviazione, latenza, operazioni) e quanto rapidamente ci stiamo avvicinando?
* Quali qualità contano di più (coerenza, disponibilità, latenza, costo, gestibilità, conformità) e in che ordine?
* Scaliamo ciò che abbiamo, passiamo a un servizio gestito o gestiamo qualcosa noi stessi?
* Come migreremmo, e come usciremmo di nuovo se dovessimo?

## Presupposti

Ogni presupposto è qualcosa da verificare.

* **La previsione di crescita è realistica.** Verifica: confronta con la crescita passata e con i piani di vendita e prodotto; considera uno scenario alto e uno basso.
* **Il database attuale può essere scalato ulteriormente, a un prezzo.** Verifica: chiedi al fornitore e al team quanto margine resta e quanto costa.
* **Il nostro carico di lavoro si adatta a un progetto scalabile orizzontalmente.** Verifica: studia query e transazioni; cerca operazioni che richiedono forte coerenza tra record.
* **Il team può gestire l'opzione scelta.** Verifica: elenca le competenze richieste e chi le ha.

## Vincoli

* La modifica deve essere pronta prima del lancio, con una migrazione a fasi che non lo disturbi.
* Il costo ricorrente deve rientrare nel budget approvato.
* Si applicano obblighi di protezione dei dati e sicurezza a qualsiasi scelta.
* Sconosciuto, da confermare: volume dei dati, requisiti di conservazione, requisiti regionali, integrazione con altri sistemi e impegni con i fornitori.

## Opzioni considerate

Per ogni opzione, stima valore, costi, tempistica e competenze necessarie, e annota quali prove cambierebbero l'opinione del team.

* **Scalare verticalmente il database attuale** (una macchina o un piano più grande).
  * Valore: rischio di migrazione più basso; nessuna modifica all'applicazione.
  * Rischi: compra una quantità limitata di tempo; il costo sale ripidamente.
* **Passare a un servizio di database gestito e scalabile orizzontalmente.**
  * Valore: elimina scalabilità e gran parte del lavoro operativo; assistenza del fornitore.
  * Fattori di costo: costi ricorrenti del servizio; migrazione; modifiche all'applicazione; costi di traffico in uscita e di uscita.
  * Rischi: dipendenza dalle funzioni e dai prezzi del fornitore.
* **Passare a un database scalabile orizzontalmente in hosting autonomo.**
  * Valore: costo ricorrente potenzialmente più basso; più controllo.
  * Fattori di costo: sviluppo di competenze operative; carico di reperibilità; strumenti; aggiornamenti.
  * Rischi: l'onere operativo può essere maggiore del previsto.
* **Riprogettare il livello dati** (ad esempio caching, repliche di lettura, partizionamento o separazione dei carichi) per estendere il database attuale.
* **Usare database diversi per carichi diversi** (persistenza poliglotta), al costo di più sistemi da gestire.

## Argomentazione

Punti di discussione che il team dovrebbe aspettarsi:

* **Coerenza contro disponibilità.** Il teorema CAP dice che un sistema distribuito partizionato non può garantire entrambe. Quale conta di più per ciascuna parte del prodotto? Molti carichi tollerano coerenza ritardata; alcuni no.
* **Gestito contro autogestito.** Costo di servizio più alto contro rischio operativo più basso. Come dovrebbe il team valutare il tempo degli ingegneri?
* **Vincolo al fornitore.** Che cosa si perde usando una funzione specifica di un fornitore, e che cosa si guadagna?
* **Standard.** Quanto ci affidiamo a SQL (standardizzato in ISO/IEC 9075) rispetto a un modello di query specifico di un fornitore?

Come il team potrebbe valutare costi e compromessi:

1. Testa con il tuo carico di lavoro: crea un benchmark realistico e misura ogni candidato sotto carico atteso e di picco, inclusi scenari di guasto.
2. Stima il costo totale di proprietà su un orizzonte dichiarato nei termini dell'organizzazione: costi di servizio o licenza, hosting, migrazione, tempo di ingegneria, reperibilità, formazione, assistenza e uscita. Mostra gli intervalli.
3. Valuta i candidati con una matrice ponderata delle qualità che contano (il modello di qualità del prodotto ISO/IEC 25010 offre un vocabolario) e verifica la sensibilità ai pesi.
4. Stima quanto tempo compra ciascuna opzione e quanto costa quando il limite viene raggiunto di nuovo.
5. Pianifica l'uscita: come si sposterebbero dati e codice lontano da ciascuna scelta?

## Decisione

**Non ancora deciso.** Questo è un punto di partenza. Un team che lo usa dovrebbe sostituire questa sezione con la propria decisione.

Modo suggerito per arrivare a una decisione:

* Conferma chi decide e chi deve essere consultato (sicurezza, finanza, prodotto).
* Concorda prima criteri e pesi.
* Raccogli le prove sopra, inclusi i risultati dei benchmark, e registra ciò che è stato trovato.
* Condividi per i commenti, poi decidi e aggiorna lo Stato.

## Implicazioni

Se il team decide di migrare, dovrebbe:

* Pianificare una migrazione a fasi con un periodo di esecuzione parallela prima del passaggio completo.
* Confermare il budget per i costi ricorrenti.
* Pianificare decisioni successive, ad esempio su connection pooling e repliche di lettura.
* Registrare il percorso di uscita previsto.

## Decisioni correlate

* [Sviluppare o acquistare per un progetto](../sviluppare-o-acquistare/): ragionamento generale su sviluppare/acquistare.
* [Ridurre il rischio di concentrazione su un solo fornitore](../dipendenza-da-un-solo-fornitore/): dipendenza da un solo fornitore.
* Decisioni non ancora prese: strategia di cache e repliche; conservazione dei dati.

## Note correlate

* Punti aperti: raccogli le metriche di produzione; scrivi le caratteristiche del carico di lavoro; preseleziona i candidati per un benchmark.
* Per saperne di più:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
