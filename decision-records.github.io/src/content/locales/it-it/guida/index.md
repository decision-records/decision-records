# Guida: i registri decisionali per i leader

Questa guida spiega che cos'è un registro decisionale, perché è importante per i leader di ogni funzione aziendale, come strutturarne uno e come gestire bene la pratica.

Contenuti:

* [Che cos'è un registro decisionale?](#che-cosè-un-registro-decisionale)
* [Perché i leader, non solo gli sviluppatori, dovrebbero usare i registri decisionali](#perché-i-leader-non-solo-gli-sviluppatori-dovrebbero-usare-i-registri-decisionali)
* [I registri decisionali valgono per ogni parte dell'azienda](#i-registri-decisionali-valgono-per-ogni-parte-dellazienda)
* [Anatomia di un registro decisionale](#anatomia-di-un-registro-decisionale)
* [Il ciclo di vita del registro decisionale](#il-ciclo-di-vita-del-registro-decisionale)
* [Ruoli e governance](#ruoli-e-governance)
* [Buone pratiche](#buone-pratiche)
* [Errori comuni](#errori-comuni)
* [Come iniziare nella tua organizzazione](#come-iniziare-nella-tua-organizzazione)
* [Letture di approfondimento](#letture-di-approfondimento)

## Che cos'è un registro decisionale?

Un **registro decisionale (DR)** cattura una singola scelta significativa: la situazione che l'ha provocata, le opzioni valutate, la scelta fatta e le conseguenze attese. Un **log delle decisioni (DL)** è la raccolta continuativa di tutti i registri decisionali di un team, di una funzione o di un'organizzazione: in sostanza una memoria istituzionale del "perché facciamo le cose così".

Un registro decisionale non è:

* Un verbale di riunione (una registrazione di ciò che è stato *discusso*, non di ciò che è stato *deciso e perché*).
* Un piano di progetto (una registrazione di *che cosa accade dopo*, non del *perché è stata scelta questa strada rispetto ad altre*).
* Un documento di policy (una registrazione di una *regola permanente*, anche se spesso un registro decisionale ne produce una).

Si colloca tra questi: un artefatto breve e durevole che esiste proprio perché il ragionamento dietro una scelta sopravviva alla riunione in cui è avvenuta.

## Perché i leader, non solo gli sviluppatori, dovrebbero usare i registri decisionali

I team software hanno adottato per primi questa pratica perché il codice è costoso da disfare e i nuovi ingegneri chiedono continuamente "perché è costruito così?" Ogni leader affronta esattamente le stesse dinamiche:

* **La memoria istituzionale esce dalla porta.** Quando un direttore vendite che ha scelto l'attuale modello territoriale se ne va, il ragionamento se ne va con lui, a meno che non sia stato scritto.
* **Riorganizzazioni e cambi di leadership innescano nuove discussioni.** Senza un registro, un nuovo leader brucia settimane a ridiscutere una decisione già presa con cura, o peggio la ribalta senza rendersi conto del perché esistesse.
* **L'inserimento è più rapido con un "perché", non solo un "cosa".** Un neoassunto che può leggere le ultime dodici decisioni della sua funzione comprende il giudizio dell'organizzazione, non solo il suo stato attuale.
* **Metterlo per iscritto migliora la decisione stessa.** Mettere su una pagina contesto, opzioni e compromessi, prima di decidere, fa emergere lacune e presupposti non dichiarati che una discussione verbale sorvola.
* **Crea responsabilità senza burocrazia.** Un registro decisionale indica chi ha deciso, quando e perché, il che protegge sia chi decide (una scelta documentata e motivata) sia l'organizzazione (un responsabile chiaro da riconsultare se le circostanze cambiano).
* **Scala la comunicazione nello spazio e nel tempo.** Per i team remoti e asincroni, e per gli stakeholder che non erano nella stanza, un registro decisionale ben scritto fa il lavoro che una riunione dal vivo dovrebbe altrimenti ripetere.

Niente di tutto ciò è specifico del software. È specifico di *qualsiasi* decisione che sia costosa da invertire, che riguardi persone oltre a chi decide o che verosimilmente sarà messa in discussione in seguito.

## I registri decisionali valgono per ogni parte dell'azienda

Tratta il "registro decisionale" come un genere, non come lo strumento di un reparto. La stessa struttura in sei parti funziona sia che la decisione sia architetturale sia commerciale:

* **Registro decisionale strategico** — ingresso/uscita da un mercato, postura competitiva, scommesse pluriennali.
* **Registro decisionale di vendita** — progettazione dei territori, piani di remunerazione, scelte di CRM/strumenti, strategia dei canali.
* **Registro decisionale di marketing** — posizionamento del marchio, mix di canali, agenzia o interno, comunicazione dei prezzi.
* **Registro decisionale di prodotto** — modello di prezzo, compromessi della roadmap, sviluppare o acquistare, decisioni di dismissione.
* **Registro decisionale di progetto** — metodologia di consegna, selezione dei fornitori, compromessi di ambito.
* **Registro decisionale di rischio** — accettazione, mitigazione, trasferimento o elusione del rischio, e relativa motivazione.
* **Registro decisionale delle risorse umane** — modifiche alle policy (lavoro da remoto, livelli, fasce retributive), progettazione organizzativa.
* **Registro decisionale delle relazioni pubbliche** — postura di comunicazione di crisi, policy sui portavoce, regole di rapporto con i media.
* **Registro decisionale di sviluppo professionale** — investimenti in formazione, criteri di promozione, scelte di successione.
* **Registro decisionale di progettazione centrata sull'utente** — scelte di metodo di ricerca, compromessi di accessibilità, direzione UX.
* **Registro decisionale di architettura software / ingegneria** — il caso d'uso originario: scelte di tecnologia, piattaforma e progettazione.

La directory [esempi](../esempi/index.md) contiene esempi svolti nella maggior parte di questi ambiti. Molte organizzazioni che adottano i registri decisionali per l'ingegneria scoprono poi che i loro team di strategia, risorse umane o vendite vogliono esattamente la stessa disciplina, spesso il momento di illuminazione descritto dai team che chiamano semplicemente la pratica "decisioni" invece di "registri decisionali", cosa che fa sentire lo schema nativo per i team non tecnici invece che preso in prestito dall'ingegneria.

## Anatomia di un registro decisionale

In [modello/index.md](../modello/index.md) ci sono due modelli: una versione **leggera** a sei campi per le decisioni quotidiane e una versione **completa** per le decisioni ad alto rischio e sotto grande scrutinio. Entrambe condividono la stessa logica di fondo:

1. **Titolo** — un'affermazione breve, attiva e al presente sulla decisione stessa (ad es. "Adottare OKR trimestrali", non "Discussione sugli OKR"). Punta a meno di 50 caratteri.
2. **Stato** — a che punto della sua vita si trova la decisione: richiesta di commenti, proposto, approvato, respinto, obsoleto o sostituito.
3. **Contesto (questione)** — la situazione, le forze e i vincoli che hanno reso necessaria questa decisione. Scritto in modo che un lettore senza ricordo della riunione capisca perché la domanda sia nata.
4. **Opzioni considerate (posizioni)** — le alternative realistiche, enunciate come fatti e compromessi, non come uno schieramento di uomini di paglia che fa sembrare ovviamente corretta l'opzione scelta. Se qualcuno può chiedere "hai considerato X?" e la risposta non è nel registro, il registro è incompleto.
5. **Decisione** — la scelta, in linguaggio semplice e attivo: "Faremo X." Non un riassunto di pro e contro, ma un'affermazione chiara di ciò che è stato scelto.
6. **Conseguenze (implicazioni)** — che cosa cambia di conseguenza, inclusi costi, rischi, decisioni successive e tutto ciò a cui si rinuncia non scegliendo un'alternativa. Buone conseguenze si leggono come "ora facciamo X invece di Y", non come un riepilogo di pro e contro della decisione già presa.

Il modello completo aggiunge campi utili per decisioni a rischio più alto: **presupposti**, **vincoli**, **opinioni** (chi ha consigliato che cosa e perché), **decisioni/requisiti/artefatti/principi correlati** e sottosezioni di analisi strutturata (analisi dei costi, SWOT, PEST) per le decisioni che meritano un esame più approfondito.

## Il ciclo di vita del registro decisionale

Un registro decisionale attraversa tipicamente cinque fasi:

**Avvio → Ricerca → Valutazione → Decisione → Manutenzione (→ Dismissione)**

* *Avvio* — qualcuno identifica che una scelta è abbastanza significativa da meritare un registro e apre una bozza.
* *Ricerca* — si raccolgono opzioni, vincoli e presupposti; si consultano gli stakeholder.
* *Valutazione* — il registro viene condiviso per i commenti, tipicamente con un intervallo di tempo definito (una settimana è un'impostazione predefinita comune).
* *Decisione* — chi decide (individuo o gruppo, secondo il tuo modello di governance) accetta, respinge o rimanda per ulteriore lavoro; lo stato si aggiorna di conseguenza.
* *Manutenzione* — il registro resta reperibile e viene riesaminato se le circostanze cambiano in modo sostanziale.
* *Dismissione* — se sostituito, lo stato del vecchio registro diventa "sostituito" e rimanda al nuovo. Il vecchio registro non viene mai cancellato: quella cronologia è il punto.

## Ruoli e governance

Per ogni registro decisionale, indica:

* **Responsabile / proponente** — redige il registro e lo porta a una decisione.
* **Decisore/i** — la persona, il ruolo o il comitato con l'autorità di approvarlo. Indicalo esplicitamente per tipo di decisione (ad es. "variazioni di prezzo: VP Prodotto; ingresso in un mercato: CEO + consiglio").
* **Contributori** — persone il cui contributo ha plasmato in modo sostanziale le opzioni o i compromessi.
* **Responsabile futuro** — chi mantiene la decisione, la rivede periodicamente (annualmente è una cadenza comune) ed è responsabile di ritirarla alla fine.

Domande di governance che vale la pena risolvere una volta, per iscritto, per la tua organizzazione (vedi anche la [checklist](../checklist/index.md)):

* Chi può *proporre* un registro decisionale? (Spesso: chiunque.)
* Chi può *approvarne* uno, e varia a seconda del tipo di decisione o della soglia di importo/rischio?
* Che cosa rompe uno stallo o risolve un disaccordo: consenso, un approvatore designato o escalation?
* Quanto è modificabile un registro dopo l'approvazione? Molti team preferiscono un modello di "documento vivo": le nuove informazioni vengono aggiunte con una marca temporale anziché riscrivere silenziosamente la storia.

## Buone pratiche

* **Una decisione per registro.** Resisti alla tentazione di raggruppare più scelte in un solo documento: diventa impossibile farvi riferimento, sostituirlo o cercarlo in seguito.
* **Sii conciso.** Una pagina, non un rapporto. Se supera una pagina, la decisione è probabilmente più di una decisione.
* **Scrivi il contesto per un estraneo.** Presumi che il lettore non abbia alcun contesto condiviso della riunione e che non lo avrà nemmeno fra due anni.
* **Enuncia la decisione in forma attiva.** "Migreremo a X", non "X è stata vista come direzione preferita."
* **Spiega le conseguenze come ciò che cambia, non come pro e contro.** Il dibattito sui compromessi appartiene a "Opzioni considerate"; "Conseguenze" riguarda ciò che accade dopo.
* **Conserva i registri dove il team già lavora.** Una cartella `decisions/` sotto controllo di versione, uno spazio wiki o una cartella di un'unità condivisa: la posizione migliore è quella che il tuo team aprirà davvero.
* **Riserva i registri decisionali alle decisioni difficili da invertire, trasversali o che probabilmente saranno messe in discussione in seguito.** Non ogni scelta ne ha bisogno: vedi la [checklist](../checklist/index.md#checklist-questa-decisione-richiede-un-registro-decisionale).
* **Sostituisci, non cancellare in silenzio.** Quando una decisione cambia, scrivi un nuovo registro e rimanda a quello che sostituisce.

## Errori comuni

* **Trasformarlo in burocrazia a posteriori.** Se un registro decisionale è scritto per giustificare una scelta già fatta e annunciata, perde gran parte del suo valore: il punto è affinare il pensiero *prima* di impegnarsi, non produrre un artefatto di conformità dopo.
* **Stanchezza da log.** Registrare ogni scelta minore seppellisce quelle significative e abitua le persone a smettere di leggere il log. Limita i registri alle decisioni davvero difficili da invertire o di ampia portata.
* **Scrivere pro e contro invece di una decisione.** Un registro che termina con un elenco di compromessi e nessun chiaro "faremo X" non è un registro decisionale: è un memo di opzioni.
* **Nessun responsabile.** Un registro decisionale senza decisore o revisore designato tende a diventare obsoleto e a non essere più considerato affidabile.
* **Trattare il modello come burocrazia anziché come checklist.** Il valore del modello è che è una checklist per pensare e comunicare bene, non un modulo da compilare fine a se stesso.

## Come iniziare nella tua organizzazione

1. Scegli una funzione o un team con una decisione già controversa o difficile da invertire.
2. Redigi quella decisione usando il [modello leggero](../modello/index.md#modello-leggero).
3. Condividila con chi decide davvero e con gli stakeholder; fissa un limite di tempo per il feedback.
4. Conservala in un posto durevole e reperibile.
5. Una volta che la pratica si è dimostrata utile una volta, proponila come standard leggero per il team, non come mandato imposto dall'alto. I registri decisionali funzionano meglio come qualcosa che un team adotta perché rende più facile la propria vita, non come burocrazia imposta.

Vedi il [tutorial](../tutorial/index.md) per una guida completa svolta.

## Letture di approfondimento

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — la specifica sintetica che questa guida sviluppa.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — il progetto sorgente più ampio che questa guida generalizza per un pubblico aziendale.
