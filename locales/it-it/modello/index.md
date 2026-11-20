# Modelli di registro decisionale

Due modelli, entrambi in semplice Markdown: copia quello che vuoi in un nuovo file e compilalo.

## Scegliere quale modello usare

Usa per impostazione predefinita il **modello leggero**: la maggior parte delle decisioni richiede solo i suoi sei campi, e una pagina che cresce oltre è di solito comunque più di una decisione.

Passa al **modello completo** quando una decisione ha una posta alta, ha più stakeholder le cui opinioni contano singolarmente, o ha davvero bisogno di un'analisi strutturata di costi/SWOT/PEST per difendere la scelta in seguito. Vedi la [checklist](../checklist/index.md#checklist-questa-decisione-richiede-un-registro-decisionale) per la domanda più ampia se una decisione abbia bisogno di un registro, e la [guida](../guida/index.md#anatomia-di-un-registro-decisionale) per come i campi dei due modelli si corrispondono.

## Modello leggero

```markdown
# Titolo (breve, al presente, attivo, fino a ~50 caratteri)

- Stato: richiesta di commenti | proposto | approvato | respinto | obsoleto | sostituito
- Data: AAAA-MM-GG
- Decisore/i: [nome/i o ruolo/i con l'autorità di approvare questa decisione]
- Responsabile: [chi mantiene e rivede periodicamente questo registro]

## Contesto

Descrivi la situazione e i vincoli che hanno reso necessaria questa decisione, scritti in modo che un lettore senza ricordo della riunione capisca perché la domanda sia nata.

## Opzioni considerate

Elenca le alternative realistiche (incluso "non fare nulla", se rilevante) come fatti e compromessi, non come uno schieramento di uomini di paglia che fa sembrare ovviamente corretta l'opzione scelta.

## Decisione

Enuncia la scelta in linguaggio semplice e attivo: "Faremo X." Non un riassunto di pro e contro, ma un'affermazione chiara di ciò che è stato scelto.

## Conseguenze

Indica che cosa cambia di conseguenza: costi, rischi, decisioni successive e tutto ciò a cui si rinuncia non scegliendo un'alternativa. Deve leggersi come "ora facciamo X invece di Y", non come un riepilogo di pro e contro della decisione già presa.
```

Vedi il [tutorial](../tutorial/index.md) per una guida completa svolta di questo modello e [esempi/index.md](../esempi/index.md) per esempi completi e compilati.

## Modello completo

```markdown
# Titolo (breve, al presente, attivo, fino a ~50 caratteri)

- Stato: richiesta di commenti | proposto | approvato | respinto | obsoleto | sostituito
- Data: AAAA-MM-GG
- Decisore/i: [nome/i o ruolo/i con l'autorità di approvare questa decisione]
- Responsabile: [chi mantiene e rivede periodicamente questo registro]

Sintesi: una o due frasi sulla posizione attuale e sulle eventuali esigenze aperte.

## Questione

Descrivi la questione che vuoi affrontare. Non lasciare dubbi sul perché affronti proprio ora questa questione.

Segui un approccio minimalista. Affronta solo le questioni che devono essere affrontate nei vari momenti del ciclo di vita.

Potresti voler aggiungere informazioni di raggruppamento, come tag, parole chiave, link alla base di conoscenza, ecc.

## Presupposti

Descrivi eventuali presupposti di fondo nell'ambiente in cui prendi la decisione.

Assicurati di affrontare gli attributi di qualità rilevanti, detti anche requisiti trasversali.

Esempi di presupposti possono riguardare ambito, costo, tempistica, tecnologia, disponibilità di risorse, esigenze di qualità del servizio, accordi sul livello di servizio e così via.

Nota che i vincoli ambientali (come standard tecnologici accettati, architettura aziendale, pattern comunemente impiegati e così via) possono limitare le opzioni che consideri.

## Vincoli

Registra eventuali vincoli aggiuntivi all'ambiente che questa decisione può comportare.

Assicurati, come sopra, di affrontare gli attributi di qualità rilevanti, detti anche requisiti trasversali.

Esempi di vincoli possono riguardare scelte di piattaforma, selezioni di fornitori, la facilità di inversione della decisione, ecc.

## Opzioni considerate (posizioni)

Elenca le posizioni, cioè le opzioni praticabili che stai considerando o hai considerato.

Usa fatti e dati, non opinioni. Le posizioni possono spesso richiedere lunghe spiegazioni, a volte persino modelli e diagrammi.

Non deve essere un elenco esaustivo; tuttavia non vuoi sentire la domanda "Hai pensato a...?" durante una revisione finale, perché porterebbe a una perdita di credibilità e alla messa in discussione di altre decisioni architetturali.

Questa sezione aiuta anche ad assicurarsi di aver ascoltato le opinioni altrui; dichiarare esplicitamente le altre opinioni aiuta a coinvolgere i loro sostenitori nella tua decisione.

### Analisi dei costi (facoltativa)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Esempi:

- Avvio, come costi di configurazione, tempo e risorse.

- Esercizio, come supporto e manutenzione

- Formazione, come aggiornamento delle competenze e gestione del cambiamento

- Licenze, come accordi contrattuali e impegni legali

- Misurazione dei consumi, come larghezza di banda e uso della CPU

### Analisi SWOT (facoltativa)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

- Punti di forza

- Punti di debolezza

- Opportunità

- Minacce

### Analisi PEST (facoltativa)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

- Fattori politici

- Fattori economici

- Fattori sociali

- Fattori tecnologici

Alcuni team amano aggiungerli come categorie a sé:

- Fattori legali - preferiamo includerli nei fattori politici.

- Fattori normativi - preferiamo includerli nei fattori politici.

- Fattori ambientali - preferiamo includerli nei fattori economici.

- Fattori demografici - preferiamo includerli nei fattori sociali.

### Altre analisi (aggiungi qui le tue idee)

Aggiungi qui le tue idee...

## Opinioni

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

- Del team, idealmente scritte dal collega stesso.

- Di altri stakeholder interni, idealmente scritte dallo stakeholder stesso.

- Di persone esterne, come consulenti terzi, valutatori, revisori, ecc.

Per ogni opinione, chiarisci:

- Chi esprime l'opinione

- Quali altri candidati sono stati considerati

- Come l'autore ha valutato i candidati

- Perché l'autore ha scelto il vincitore

- Che cosa è successo da allora

- Sapendo ciò che sai ora, che cosa consiglieresti di fare diversamente?

### Titolo dell'opinione 1 (aggiungi la tua qui)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Spiega qui la tua opinione.

### Titolo dell'opinione 2 (aggiungi la tua qui)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Spiega qui la tua opinione.

### Titolo dell'opinione 3 (aggiungi la tua qui)

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Spiega qui la tua opinione.

## Argomentazione

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Spiega perché hai selezionato una posizione.

Le decisioni dovrebbero essere guidate da uno scopo. Per dimostrare responsabilità, collega esplicitamente le tue decisioni agli obiettivi o ai requisiti.

L'argomentazione è probabilmente importante quanto la decisione stessa.

Non deve essere una trattazione esaustiva; tuttavia non vuoi sentire la domanda "Hai pensato a...?" durante una revisione finale, perché (come sopra) porterebbe a una perdita di credibilità e alla messa in discussione di altre decisioni architetturali.

## Implicazioni

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Enuncia chiaramente le implicazioni della tua decisione. Può essere molto efficace per ottenere consenso e creare una roadmap di esecuzione.

Ad esempio, una decisione può introdurre la necessità di prendere altre decisioni, creare nuovi requisiti o modificare quelli esistenti, porre ulteriori vincoli all'ambiente, richiedere di rinegoziare ambito o tempistica con i clienti, o richiedere ulteriore formazione del personale.

## Decisioni correlate

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Elenca qui eventuali decisioni correlate.

Abbiamo scoperto che in pratica sono più utili una matrice di tracciabilità, alberi decisionali o metamodelli. I metamodelli sono utili per mostrare relazioni complesse in forma di diagramma (come i modelli Rose).

## Requisiti correlati

Sintesi: spiega brevemente questa sezione e, idealmente, evidenzia eventuali valori anomali.

Elenca qui eventuali requisiti correlati.

Abbiamo trovato più comodo fare riferimento a una matrice di tracciabilità. Puoi valutare il contributo di ogni decisione al soddisfacimento di ogni requisito, e poi valutare quanto bene il requisito sia soddisfatto in tutte le decisioni. Se una decisione non contribuisce a soddisfare un requisito, non prendere quella decisione.

## Artefatti correlati

Elenca qui eventuali artefatti correlati.

Esempi sono documenti di ambito, documenti di pianificazione, modelli di processo aziendale, ecc., su cui questa decisione incide.

## Principi correlati

Se l'impresa ha un insieme di principi concordati, assicurati che la decisione sia coerente con uno o più di essi. Questo aiuta a garantire l'allineamento tra domini o sistemi.

## Note correlate

Poiché i processi decisionali possono richiedere molto tempo, abbiamo trovato utile registrare note e questioni discusse dal team durante il processo di socializzazione.
```
