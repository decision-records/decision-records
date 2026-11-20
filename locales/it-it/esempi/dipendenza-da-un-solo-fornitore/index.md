# Ridurre il rischio di concentrazione su un solo fornitore

* Stato: richiesta di commenti
* Data: 2026-05-20
* Decisore/i: COO (da confermare)
* Responsabile: Responsabile Acquisti

Sintesi: Lavoro in corso. Questo è un punto di partenza per un team che sta valutando come rispondere a una forte dipendenza da un solo fornitore per servizi critici. Mostra come un team può formulare il rischio, discutere le opzioni e raccogliere informazioni. Non registra alcuna decisione.

## Questione

Una revisione interna dei rischi ha rilevato che una grande quota della spesa per l'infrastruttura critica va a un unico fornitore. Quel fornitore ha avuto un'interruzione non pianificata che ha disturbato un servizio rivolto ai clienti, e i suoi prezzi sono aumentati senza un tetto contrattuale. Continuare così lascia l'organizzazione esposta al rischio di disponibilità e a una crescita dei costi incontrollata.

Le domande a cui rispondere:

* Quanto di ciò da cui dipendiamo è effettivamente concentrato, e che cosa succede all'azienda se il fornitore fallisce o alza di nuovo i prezzi?
* Quanto sono probabili e gravi questi eventi, e che cosa siamo disposti ad accettare?
* Quali sono i modi realistici per ridurre il rischio, a quale costo e con quale rapidità?
* Che aspetto avrebbe un'uscita sicura o un piano di riserva?

## Presupposti

Ogni presupposto è qualcosa da verificare.

* **L'interruzione e l'aumento di prezzo riflettono uno schema duraturo**, non un evento isolato. Verifica: rivedi lo storico degli incidenti, le comunicazioni del fornitore e i prezzi di mercato.
* **Un secondo fornitore può gestire parte del carico di lavoro critico con una qualità accettabile.** Verifica: preseleziona i candidati ed esegui una prova limitata.
* **Il fornitore principale migliorerà i termini se vede alternative credibili.** Verifica: chiedi una proposta di rinnovo mentre valuti altre opzioni.
* **Una migrazione a fasi può evitare interruzioni del servizio.** Verifica: rivedi le dipendenze tecniche e i limiti contrattuali allo spostamento del carico di lavoro.

## Vincoli

* Il servizio rivolto ai clienti non deve essere interrotto durante alcuna transizione.
* I termini contrattuali possono limitare la rapidità con cui il carico di lavoro può essere spostato e possono includere costi di uscita.
* Ogni nuovo fornitore dovrebbe essere valutato con gli stessi criteri dell'originale.
* Sconosciuto, da confermare: portabilità dei dati, servizi proprietari in uso, penali di uscita e aspettative normative sul rischio di terze parti.

## Opzioni considerate

Per ogni opzione, stima valore, costi, tempistica e competenze necessarie, e annota quali prove cambierebbero l'opinione del team.

* **Accettare il rischio e monitorare.**
  * Valore: nessun costo o sforzo a breve termine.
  * Rischi: lascia sia l'esposizione alle interruzioni sia quella ai prezzi; la revisione dei rischi potrebbe non consentirlo all'attuale concentrazione.
* **Rinegoziare con il fornitore esistente** livelli di servizio, un tetto di prezzo e migliori termini di uscita; restare con un solo fornitore.
  * Valore: affronta prezzo e responsabilità.
  * Rischi: non elimina il punto singolo di guasto.
* **Diversificare: spostare parte del carico di lavoro critico su un secondo fornitore** e rinegoziare il contratto principale per il resto.
  * Valore: riduce la concentrazione; rafforza la posizione negoziale.
  * Fattori di costo: selezione del fornitore; impegno di migrazione; costi di esercizio duplicati per un periodo; maggiore complessità operativa (due insiemi di procedure e competenze).
  * Forma della tempistica: a fasi, con punti di controllo.
* **Costruire resilienza senza un secondo fornitore**: backup, procedure di ripristino testate e modifiche di progettazione che rendano possibile il passaggio in seguito.
* **Passare completamente a un altro fornitore.** Massima perturbazione; giustificato solo se il fornitore attuale è inaccettabile.

## Argomentazione

Punti di discussione che il team dovrebbe aspettarsi:

* **Propensione al rischio.** Quale livello di dipendenza è accettabile? Chi decide?
* **Costo della resilienza.** La ridondanza ha un prezzo continuo; l'assicurazione vale, e per quali servizi?
* **Complessità.** Due fornitori aggiungono complessità operativa. Il team ha le competenze?
* **Vincolo al fornitore.** Quanto si affida l'organizzazione alle funzioni proprietarie di un solo fornitore, e quanto costerebbe spostarsi?

Come il team potrebbe valutare costi e compromessi:

1. Individua i servizi critici e le loro dipendenze. Per ciascuno, stima l'impatto sul business di un'interruzione di durata diversa, come intervalli.
2. Stima la probabilità di guasto e di variazione di prezzo usando storico e prove del fornitore, con incertezza.
3. Calcola il costo di ogni opzione: migrazione, costi di esercizio duplicati, strumenti, formazione, acquisti e complessità continua; includi i costi di uscita per entrambi i fornitori.
4. Confronta la riduzione attesa del rischio con il costo e verifica la sensibilità alle stime di probabilità.
5. Definisci indicatori anticipatori e punti di attivazione, ad esempio una violazione del livello di servizio, una variazione di prezzo o un evento di sicurezza.

## Decisione

**Non ancora deciso.** Questo è un punto di partenza. Un team che lo usa dovrebbe sostituire questa sezione con la propria decisione.

Modo suggerito per arrivare a una decisione:

* Conferma chi decide e quale propensione al rischio si applica.
* Concorda prima criteri e pesi.
* Raccogli le prove sopra e registra ciò che è stato trovato.
* Condividi per i commenti, poi decidi e aggiorna lo Stato.

## Implicazioni

Se il team decide di diversificare, dovrebbe:

* Eseguire un processo di selezione del fornitore con gli stessi criteri dell'originale.
* Pianificare una migrazione a fasi che eviti interruzioni.
* Rinegoziare in parallelo il contratto principale.
* Accettare la maggiore complessità operativa, con un runbook per ciascun fornitore.
* Riferire regolarmente su concentrazione e termini dei livelli di servizio fino al raggiungimento dell'obiettivo.

## Decisioni correlate

* [Scegliere il database principale](../scelta-del-database/): un'istanza tecnologica della stessa questione del vincolo al fornitore.
* [Sviluppare o acquistare per un progetto](../sviluppare-o-acquistare/): scelte di approvvigionamento correlate.
* Decisioni non ancora prese: piano di uscita e continuità; selezione del fornitore.

## Note correlate

* Punti aperti: elenca i servizi critici e i loro fornitori; raccogli lo storico degli incidenti; leggi il contratto per i termini di uscita e di prezzo.
* Per saperne di più:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Leggi: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
