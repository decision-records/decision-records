# Aiuto / FAQ

Domande comuni che i leader pongono quando adottano i registri decisionali, più un breve glossario.

Contenuti:

* [Domande frequenti](#domande-frequenti)
* [Risoluzione dei problemi](#risoluzione-dei-problemi)
* [Glossario](#glossario)
* [Dove andare dopo](#dove-andare-dopo)

## Domande frequenti

**In che cosa differisce dai verbali di riunione?**
I verbali registrano ciò che è stato *discusso*; un registro decisionale cattura ciò che è stato *deciso e perché*, scritto per reggersi da solo senza il contesto della riunione. I verbali sono un buon input per un registro decisionale, ma raramente un suo sostituto.

**Quanto tempo dovrebbe richiedere davvero?**
Per un registro leggero su una decisione che già comprendi, 15–30 minuti. Il tempo raramente è sprecato, perché è tempo che altrimenti spenderesti a rispiegare lo stesso ragionamento in ogni conversazione futura sull'argomento. Riserva i registri completi, con analisi dei costi, SWOT/PEST e più opinioni documentate, alle decisioni davvero ad alta posta.

**Chi dovrebbe essere responsabile del nostro log delle decisioni?**
Qualcuno responsabile del team o della funzione che copre, spesso la stessa persona che altrimenti risponderebbe a memoria a "perché l'abbiamo fatto?" un anno dopo. Nelle organizzazioni più grandi, un responsabile di governance leggero (ad es. Chief of Staff, responsabile della strategia o un responsabile a rotazione per funzione) può mantenere l'indice senza approvare ogni singola decisione.

**E se chi decide e gli stakeholder non sono d'accordo?**
Risolvi il *processo* prima della *decisione*: indica in anticipo chi ha l'ultima parola (una persona o una regola definita, come "consenso, escalation al CEO se non risolto dopo una settimana"). Registra le opinioni dissenzienti nella sezione "Opinioni" del modello completo anziché cancellare il disaccordo: un dissenso ben documentato è prezioso se la decisione viene riesaminata in seguito.

**E se più avanti scopriamo che la decisione era sbagliata?**
È esattamente per questo che esiste il registro. Scrivi un nuovo registro decisionale che sostituisce il vecchio, spiega che cosa è cambiato (nuove informazioni, mutate circostanze o un errore di ragionamento) e rimanda indietro. Aver sbagliato non è un motivo per cancellare la traccia: è il motivo per cui la traccia esiste.

**Serve un software speciale?**
No. Una cartella di file Markdown o Word in un'unità condivisa, uno spazio wiki o un repository con controllo di versione vanno tutti bene. Scegli ciò che il tuo team apre già ogni giorno: l'adozione fallisce molto più spesso per strumenti poco familiari che per una funzione mancante.

**Un assistente IA può aiutare a redigerli o rivederli?**
Sì, in modo produttivo, in due modi: (1) redigere una prima bozza di Contesto e Opzioni considerate a partire da appunti di riunione o da una trascrizione, che un decisore umano corregge e finalizza; (2) rivedere una bozza rispetto alla [checklist](../checklist/index.md) per individuare opzioni mancanti, decisioni vaghe o conseguenze che ripetono solo il dibattito. Un assistente IA non dovrebbe mai essere il decisore designato: la responsabilità resta a una persona o a un comitato.

**Non è solo burocrazia?**
Diventa burocrazia esattamente quando viene imposta come carta a posteriori per decisioni già prese e annunciate. Resta di valore quando è usata come *strumento di pensiero* prima di una decisione, da chi la prende davvero. Vedi [Errori comuni](../guida/index.md#errori-comuni) nella guida.

**Quanti registri decisionali sono troppi?**
Se le persone smettono di leggere il log, hai stanchezza da log: stai registrando decisioni facili da invertire o che riguardavano una sola persona. Limita i registri alle scelte davvero difficili da invertire, trasversali o che probabilmente saranno riviste. Vedi la [checklist](../checklist/index.md#checklist-questa-decisione-richiede-un-registro-decisionale).

**Al nostro team non piace la parola "architettura" o "registro": il nome conta?**
Non per la meccanica. Alcuni team ottengono un'adozione molto più rapida semplicemente chiamando la cartella `decisions/` invece di `decision-records/`: lo stesso modello funziona con entrambi i nomi. Usa ciò che porta il tuo team a metterle davvero per iscritto.

**Un registro decisionale può valere per più unità di business?**
Sì, se la decisione è davvero condivisa (ad es. un fornitore a livello aziendale). Ma mantienilo a *una sola decisione*: se due unità di business stanno in realtà facendo due scelte diverse per due motivi diversi, scrivi due registri e collegali come correlati.

## Risoluzione dei problemi

| Sintomo | Causa probabile | Soluzione |
|---|---|---|
| I registri si accumulano per sempre in "richiesta di commenti" | Nessuna scadenza o nessun decisore designato | Aggiungi entrambi esplicitamente; approva per default se non ci sono obiezioni entro una data dichiarata |
| Nessuno legge il log | Troppi registri a bassa posta; stanchezza da log | Applica più rigorosamente la checklist "serve un registro?" |
| I registri si leggono come un elenco di pro e contro, senza una vera decisione | Sezione Decisione scritta prima che la decisione fosse davvero presa | Non pubblicare "Decisione" come definitiva finché chi decide non ha davvero deciso |
| Il team lo tratta come burocrazia e scrive i registri a malincuore | Introdotto dall'alto come obbligo, o usato solo a posteriori per giustificare scelte precedenti | Reintroducilo come strumento che il team sceglie perché fa risparmiare tempo dopo, partendo da un esempio visibilmente utile |
| Nessuno trova i vecchi registri | Nessuna posizione di archiviazione condivisa e durevole né indice | Crea un'unica posizione `decisions/` con una pagina indice che elenca titolo, stato e data |
| Le decisioni vengono invertite in silenzio senza che nessuno se ne accorga | Nessuna convenzione di sostituzione | Quando una decisione cambia, scrivi sempre un nuovo registro con stato `sostituito` che rimandi indietro |

## Glossario

* **Registro decisionale (DR)** — un documento che cattura una scelta significativa, il suo contesto, le opzioni considerate, la decisione e le sue conseguenze.
* **Log delle decisioni (DL)** — la raccolta completa dei registri decisionali di un team, di una funzione o di un'organizzazione.
* **Architecture decision record (ADR)** — il predecessore specifico del software di questo schema, incentrato su scelte di tecnologia e progettazione.
* **Stato** — la fase del ciclo di vita di una decisione: richiesta di commenti, proposto, approvato, respinto, obsoleto o sostituito.
* **Sostituito** — una decisione che è stata rimpiazzata da una più recente; il vecchio registro resta nel log con un rimando in avanti, anziché essere cancellato.
* **Requisito significativo** — un'esigenza con un effetto misurabile sul sistema o sull'organizzazione, del tipo che giustifica la scrittura di un registro decisionale.
* **Gestione della conoscenza (KM)** — la disciplina più ampia a cui appartengono i registri decisionali: catturare la conoscenza istituzionale perché sopravviva alla memoria di una sola persona.

## Dove andare dopo

* Nuovo alla pratica? Inizia dalla [guida](../guida/index.md).
* Pronto a scriverne uno? Segui il [tutorial](../tutorial/index.md).
* Ti serve un modello da copiare? Vedi [modello/index.md](../modello/index.md).
* Vuoi prima vederne uno nel tuo ambito? Sfoglia [esempi/index.md](../esempi/index.md).
* Lo stai introducendo in un team? Usa la [checklist](../checklist/index.md).
