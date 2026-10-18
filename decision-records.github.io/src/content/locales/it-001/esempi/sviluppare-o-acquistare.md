# Sviluppare o acquistare per un progetto

* Stato: richiesta di commenti
* Data: 2026-06-01
* Decisore/i: COO (da confermare)
* Responsabile: Direttore Operazioni

Sintesi: Lavoro in corso. Questo è un punto di partenza per un team che ha bisogno di una nuova capacità, qui uno strumento di pianificazione rivolto ai clienti, e sta decidendo se svilupparlo, acquistarlo o fare qualcosa a metà strada. Mostra come un team può formulare la questione, discutere le opzioni e raccogliere informazioni. Non registra alcuna decisione.

## Questione

Un'azienda di servizi pianifica il lavoro con un processo manuale basato su fogli di calcolo che ha causato doppie prenotazioni e danneggiato i rapporti con i clienti. Serve una soluzione in tempi limitati e il team deve decidere se sviluppare uno strumento internamente o acquistarne uno esistente.

Le domande a cui rispondere:

* Che cosa deve fare lo strumento (requisiti), e quali di questi sono essenziali?
* Quanto bene ciascuna strada soddisfa i requisiti, nel tempo disponibile?
* Qual è il costo totale di ciascuna strada nell'arco della sua vita utile, incluso ciò a cui il team rinuncia scegliendola?
* Che cosa succede se i requisiti cambiano, o se la strada scelta fallisce?

## Presupposti

Ogni presupposto è qualcosa da verificare.

* **La maggior parte delle esigenze di pianificazione è comune ad altre organizzazioni, quindi un prodotto esistente può coprirle.** Verifica: elenca i requisiti e chiedi ai fornitori di mostrare come ciascuno è soddisfatto.
* **I casi insoliti sono abbastanza pochi da essere gestiti con una soluzione alternativa.** Verifica: conta quanto spesso si verificano e scrivi la soluzione alternativa per ciascuno.
* **Gli ingegneri interni possono costruire e mantenere lo strumento.** Verifica: stima l'impegno con le persone che lo farebbero e chiedi che cos'altro non farebbero.
* **I tempi dei fornitori sono realistici.** Verifica: parla con clienti di riferimento di dimensioni simili, inclusi quelli i cui progetti hanno subito ritardi.

## Vincoli

* Serve una soluzione entro un periodo fisso.
* Le altre iniziative di prodotto già impegnate devono rispettare le loro tempistiche, quindi la capacità di ingegneria non può semplicemente essere sottratta a esse.
* Lo strumento gestisce dati dei clienti, quindi vanno verificate sicurezza e privacy.
* Sconosciuto, da confermare: esigenze di integrazione, crescita prevista e che cosa succede alla fine di un contratto con il fornitore.

## Opzioni considerate

Per ogni opzione, stima valore, costi, tempistica e competenze necessarie, e annota quali prove cambierebbero l'opinione del team.

* **Sviluppare internamente.**
  * Valore: adattamento esatto alle regole dell'organizzazione; pieno controllo della roadmap.
  * Fattori di costo: progettazione, sviluppo, test, hosting, assistenza e manutenzione per tutta la vita dello strumento; il costo opportunità di ciò che gli ingegneri non costruiscono invece.
  * Forma della tempistica: spesso più lunga delle stime iniziali; il valore arriva alla fine.
  * Competenze necessarie: gestione del prodotto; ingegneria; operazioni.
* **Acquistare un prodotto esistente.**
  * Valore: più rapido; costi distribuiti; beneficia dei miglioramenti del fornitore.
  * Fattori di costo: licenze, implementazione, configurazione, formazione, integrazione, amministrazione e uscita.
  * Rischi: lacune rispetto ai requisiti; modifiche del fornitore; vincolo al fornitore.
* **Acquistare un prodotto e commissionare lavoro personalizzato al fornitore.** Colma le lacune, ma aggiunge tempo e costo e comporta rischio di consegna.
* **Assemblare da strumenti più piccoli** (ad esempio una piattaforma low-code o una combinazione di servizi esistenti).
* **Migliorare prima il processo manuale** con una soluzione tampone, per guadagnare tempo per una decisione migliore.

## Argomentazione

Punti di discussione che il team dovrebbe aspettarsi:

* **Adattamento contro velocità.** Un adattamento perfetto che arriva tardi può essere peggio di un buon adattamento adesso.
* **Nucleo o contesto?** La pianificazione fa parte di ciò che rende distintiva l'azienda? In caso contrario, di solito si preferisce acquistare.
* **Costi nascosti.** Sviluppare comporta manutenzione continua; acquistare comporta licenze, integrazione e uscita continue.
* **Reversibilità.** Quale scelta è più facile da annullare se si rivela sbagliata?

Come il team potrebbe valutare costi e compromessi:

1. Scrivi i requisiti e classificali. Valuta ciascuna strada rispetto a essi e annota le lacune.
2. Stima il costo totale di proprietà su un orizzonte dichiarato nei termini dell'organizzazione: costi una tantum, costi ricorrenti, tempo del personale interno, integrazione, formazione e uscita. Mostra gli intervalli.
3. Stima il costo del ritardo: l'effetto di ogni periodo aggiuntivo di doppie prenotazioni.
4. Confronta le opzioni nello scenario migliore, probabile e peggiore, e verifica l'effetto delle modifiche ai requisiti.
5. Usa una matrice ponderata (adattamento, velocità, costo, rischio, controllo, reversibilità) e un pre-mortem.

## Decisione

**Non ancora deciso.** Questo è un punto di partenza. Un team che lo usa dovrebbe sostituire questa sezione con la propria decisione.

Modo suggerito per arrivare a una decisione:

* Conferma chi decide e chi deve essere d'accordo.
* Concorda prima requisiti e pesi.
* Raccogli le prove sopra e registra ciò che è stato trovato.
* Condividi per i commenti, poi decidi e aggiorna lo Stato.

## Implicazioni

Se il team decide di acquistare, dovrebbe:

* Nominare un responsabile dell'implementazione e pianificare la formazione entro i tempi del fornitore.
* Documentare le soluzioni alternative per i casi non supportati, registrare quanto spesso vengono usate e rivedere dopo l'uso reale.
* Definire che cosa farebbe scattare una decisione successiva sul lavoro personalizzato.
* Confermare che nessuna capacità di ingegneria venga sottratta a iniziative già impegnate.

## Decisioni correlate

* [Scegliere una piattaforma CRM](../scelta-della-piattaforma-crm/): una scelta simile per un sistema diverso.
* [Scegliere il database principale](../scelta-del-database/): un'istanza tecnologica delle questioni di sviluppare/acquistare e vincolo al fornitore.
* [Ridurre il rischio di concentrazione su un solo fornitore](../dipendenza-da-un-solo-fornitore/): dipendenza da un fornitore.
* Decisioni non ancora prese: integrazione personalizzata; conservazione dei dati.

## Note correlate

* Punti aperti: scrivi e classifica i requisiti; chiedi ai fornitori clienti di riferimento; stima l'impegno di sviluppo con gli ingegneri.
* Per saperne di più:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
