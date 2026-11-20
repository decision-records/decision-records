# Tutorial: scrivi il tuo primo registro decisionale

Questa è una guida pratica per un leader che non ha mai scritto un registro decisionale. Usa uno scenario aziendale realistico, non un esempio software, perché i registri decisionali sono uno strumento di leadership generale. Alla fine avrai scritto un registro vero e saprai come introdurre la pratica nel tuo team.

Tempo stimato: 20 minuti per la Parte 1, più pratica continua per le Parti 2–4.

Contenuti:

* [Parte 1: scrivi un registro decisionale (20 minuti)](#parte-1-scrivi-un-registro-decisionale-20-minuti)
* [Parte 2: fallo rivedere e approvare](#parte-2-fallo-rivedere-e-approvare)
* [Parte 3: avvia un log delle decisioni](#parte-3-avvia-un-log-delle-decisioni)
* [Parte 4: stabilisci una cadenza di revisione](#parte-4-stabilisci-una-cadenza-di-revisione)
* [Lo scenario completo svolto](#lo-scenario-completo-svolto)

## Parte 1: scrivi un registro decisionale (20 minuti)

Scegli una decisione reale che stai affrontando ora, idealmente una già un po' controversa, così senti subito il valore. Se non ti viene in mente nulla, usa l'esempio guida di questo tutorial: **"Dobbiamo cambiare fornitore per le paghe?"**

### Passo 1: titolo (2 minuti)

Scrivi un titolo breve, attivo e al presente. Non una domanda, ma un'affermazione della decisione finale:

> Passare al fornitore [Fornitore] per le paghe

Non preoccuparti di essere già sicuro: puoi cambiare il titolo quando la decisione sarà presa.

### Passo 2: stato e metadati (1 minuto)

```markdown
* Stato: richiesta di commenti
* Data: 2026-08-19
* Decisore/i: CFO
* Responsabile: Responsabile Operazioni sul personale
```

Indicare ora chi decide, prima del dibattito, evita una lite sull'autorità quando le opinioni si sono già irrigidite.

### Passo 3: contesto (5 minuti)

Scrivi la situazione come se la spiegassi a un neoassunto privo di qualsiasi contesto:

> Il nostro attuale fornitore delle paghe ha mancato due scadenze di presentazione nell'ultimo anno,
> causando sanzioni per ritardato pagamento in due stati. Il nostro contratto si rinnova tra 60 giorni.
> Finanza e Operazioni sul personale concordano che l'attuale fornitore è un rischio, ma
> sono in disaccordo sull'urgenza e sul fatto che un cambio in questo trimestre valga la
> perturbazione del periodo di iscrizione aperta.

Nota che questo non sostiene ancora una risposta particolare: enuncia solo le forze in gioco.

### Passo 4: opzioni considerate (5 minuti)

Elenca le alternative reali, incluso "non fare nulla", con compromessi onesti:

> * **Restare con l'attuale fornitore, rinegoziare gli SLA** — minima perturbazione, ma
>   non risolve la causa radice; il fornitore non ha risposto alle precedenti escalation.
> * **Passare al Fornitore B** — storico di conformità più solido, ma l'implementazione
>   si sovrappone all'iscrizione aperta, aggiungendo rischio a quel processo.
> * **Passare al Fornitore C** — prezzo migliore, ma team di assistenza sensibilmente più piccolo e
>   due chiamate di referenza hanno sollevato dubbi sui tempi di risposta.

Se ti accorgi di scrivere una sola opzione reale e due uomini di paglia, fermati: è il segno che la decisione è già stata presa informalmente e che il registro viene usato per giustificarla anziché affinarla. Torna indietro e chiedi prima un secondo parere sulle alternative.

### Passo 5: decisione (2 minuti)

Quando chi decide ha effettivamente deciso (potrebbe non avvenire nella stessa seduta dei passi 1–4), scrivila in linguaggio semplice e attivo:

> Passeremo al Fornitore B, con l'implementazione che inizierà dopo la chiusura dell'iscrizione aperta.

### Passo 6: conseguenze (5 minuti)

Indica che cosa cambia, non una ripetizione dei compromessi già trattati sopra:

> * Il contratto attuale deve essere disdetto con 30 giorni di preavviso prima dell'inizio del nuovo periodo.
> * Operazioni sul personale eseguirà un ciclo di prova di paghe parallele prima del passaggio.
> * Il calendario dell'iscrizione aperta è protetto; il cambio è programmato dopo la sua chiusura.
> * Accettiamo una finestra di implementazione compressa in cambio di una riduzione del rischio di conformità:
>   è il compromesso che scegliamo esplicitamente.

Questo è un registro decisionale leggero completo. Confrontalo con il [modello](../modello/index.md#modello-leggero): dovresti riuscire a far corrispondere ogni sezione.

## Parte 2: fallo rivedere e approvare

1. Condividi la bozza con gli stakeholder reali (qui: Finanza, Operazioni sul personale e chiunque sia toccato dal cambio) con una richiesta chiara e una scadenza: *"Commenti entro venerdì; dopo lo segnerò come approvato a meno che non cambi qualcosa di sostanziale."*
2. Registra le nuove informazioni come aggiunta datata anziché riscrivere in silenzio le sezioni precedenti: così si conserva la traccia del ragionamento.
3. Una volta che chi decide conferma, cambia `Stato` in `approvato` e registra la data finale.

## Parte 3: avvia un log delle decisioni

Un singolo registro decisionale è utile una volta. Un **log delle decisioni**, la raccolta di tutti i registri del tuo team, è utile per sempre.

1. Crea una posizione durevole e condivisa: una cartella `decisions/` nell'unità condivisa, nello spazio wiki o nel repository con controllo di versione già usati dal tuo team. Usa ciò che il tuo team apre già ogni giorno: lo strumento migliore è quello che le persone useranno davvero.
2. Archivia ogni nuovo registro con un nome chiaro e ordinabile, ad es. `2026-08-19-switch-payroll-provider.md`.
3. Mantieni una pagina indice che elenchi ogni registro con titolo, stato e data: vedi [esempi/index.md](../esempi/index.md) per un esempio funzionante di questo schema.
4. Alcuni team trovano che la parola "decisioni" (eliminando del tutto "registro") faccia sentire la pratica nativa anziché presa in prestito dall'ingegneria: usa il nome che porta il tuo team a scriverli davvero.

## Parte 4: stabilisci una cadenza di revisione

Le decisioni invecchiano. Stabilisci un ritmo di governance leggero in modo che il log resti affidabile anziché diventare un cimitero di scelte obsolete:

* **Il responsabile di ciascun registro** rivede i propri registri almeno annualmente, o quando la situazione sottostante cambia in modo sostanziale.
* **Quando una decisione viene invertita o sostituita**, scrivi un nuovo registro e imposta lo stato del vecchio su `sostituito`, rimandando alla sostituzione. Non cancellare mai in silenzio: la storia di *perché abbiamo cambiato idea* vale spesso più della risposta attuale.
* **Ogni trimestre o anno**, scorri l'intero log alla ricerca di registri ancora contrassegnati `richiesta di commenti` o `proposto` e mai risolti, e chiudili oppure archiviali esplicitamente.

Vedi la [checklist](../checklist/index.md) per una versione sintetica e ripetibile di tutte e quattro le parti sopra.

## Lo scenario completo svolto

Per un esempio compilato di una decisione paragonabile, vedi [esempi/index.md](../esempi/index.md), ad esempio l'esempio [Sviluppare o acquistare per un progetto](../esempi/sviluppare-o-acquistare/). Usa il modello completo, in cui Implicazioni corrisponde alla sezione Conseguenze sopra, ed è un lavoro in corso che mostra come un team fa progressi su una decisione, non un registro concluso.
