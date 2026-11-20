# Registro decisionale (DR)

Un registro decisionale (decision record, DR) è un modo per avviare, discutere e archiviare una scelta importante, insieme al suo contesto e alle sue conseguenze.

Contenuti:

- [Che cos'è un registro decisionale?](#che-cosè-un-registro-decisionale)
- [Modello di registro decisionale](#modello-di-registro-decisionale)
- [Come iniziare a usare i registri decisionali](#come-iniziare-a-usare-i-registri-decisionali)
- [Perché i registri decisionali sono meglio dei semplici appunti?](#perché-i-registri-decisionali-sono-meglio-dei-semplici-appunti)
- [Come iniziare a usare i registri decisionali con gli strumenti](#come-iniziare-a-usare-i-registri-decisionali-con-gli-strumenti)
- [Competenze per l'IA](#competenze-per-lia)
- [Suggerimenti per scrivere buoni registri decisionali](#suggerimenti-per-scrivere-buoni-registri-decisionali)
- [Consigli sul lavoro di squadra per i registri decisionali](#consigli-sul-lavoro-di-squadra-per-i-registri-decisionali)
- [Domande sul lavoro di squadra per i registri decisionali](#domande-sul-lavoro-di-squadra-per-i-registri-decisionali)
- [Per saperne di più](#per-saperne-di-più)

Che cosa contiene questo repository:

- [guida](guida) - che cos'è un registro decisionale, perché lo si usa, ciclo di vita, governance e altro.
- [modello](modello) - modello da copiare e incollare, con formattazione markdown e suggerimenti passo passo.
- [tutorial](tutorial) - una guida pratica passo passo: scrivi il tuo primo registro decisionale in meno di 20 minuti.
- [esempi](esempi) - esempi di partenza (lavori in corso, non decisioni concluse) per decisioni di strategia, vendite, marketing, prodotto, risorse umane, rischio, progetto e tecnologia.
- [checklist](checklist): checklist per decidere se scriverne uno, scriverlo bene, rivederlo e gestire la pratica in un'intera organizzazione.
- [aiuto](aiuto) — domande frequenti, risoluzione dei problemi e un glossario per le domande comuni che i leader pongono quando adottano questa pratica.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — la specifica di questo repository: struttura, contenuti, locale, sito web e agenti.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — i contenuti, una directory per locale; `en-us` è la fonte di verità in inglese.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills che applicano i modelli e le checklist di questo repository all'interno di un assistente IA: una per scrivere un registro decisionale, una per mantenere questo repository.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — il sorgente SvelteKit 3 di [decision-records.github.io](https://decision-records.github.io), che promuove le skill sopra descritte.

## Che cos'è un registro decisionale?

Un **registro decisionale** (DR) è un modo per avviare, discutere e archiviare una scelta importante, insieme al suo contesto e alle sue conseguenze.

Un **log delle decisioni** (DL) è l'insieme di tutti i DR creati e mantenuti per un determinato progetto (o organizzazione).

Una **decisione** in questo contesto è una scelta di un'organizzazione che risponde a un requisito significativo.

Un **requisito significativo** (SR) è un'esigenza di un progetto che ha un effetto misurabile sul sistema del progetto.

Tutti questi termini rientrano nell'ambito della **gestione della conoscenza** (KM).

Lo scopo di questo documento è offrire una rapida panoramica dei registri decisionali.

## I registri decisionali sono modi di lavorare per le organizzazioni

Ovunque una scelta sia difficile da invertire, riguardi altre persone o verrà messa in discussione in seguito, merita un registro decisionale.

- Strategia: entrare in un mercato o uscirne, scegliere tra crescita e redditività, fissare una scommessa a tre anni
- Vendite: cambiare il modello territoriale, scegliere un CRM, ristrutturare la remunerazione
- Marketing: riposizionare un marchio, scegliere il mix di canali, scegliere tra agenzia e team interno
- Prodotto: definire il modello di prezzo, scegliere se sviluppare o acquistare, dismettere una funzione o una linea di prodotto
- Finanza: scegliere una struttura di finanziamento, definire una politica di allocazione del capitale
- Risorse umane: definire una politica di lavoro da remoto, ridisegnare livelli e fasce retributive
- Rischio e legale: accettare, mitigare o trasferire un rischio specifico; scegliere un limite di concentrazione sui fornitori
- Operazioni: sviluppare o acquistare, internalizzare o esternalizzare, scegliere una metodologia di consegna
- Relazioni pubbliche: scegliere un atteggiamento di comunicazione di crisi, definire una politica di rapporti con i media
- Sviluppo professionale: definire una politica di promozione o di investimento nella formazione
- Tecnologia: scegliere un fornitore cloud, un database, un pattern di integrazione, una metodologia software

Se riesci a immaginare qualcuno del tuo team che tra un anno chiede "aspetta, perché lo abbiamo fatto così?", quella decisione è una candidata per un registro decisionale.

## Modello di registro decisionale

Consulta il nostro file [modello](modello/index.md), che usa queste sezioni principali:

- **Titolo**: breve, all'imperativo presente, fino a 50 caratteri.

- **Stato**: richiesta di commenti | proposto | approvato | respinto | obsoleto | sostituito

- **Questione**: descrivi la questione che vuoi affrontare e non lasciare dubbi sul perché.

- **Presupposti**: descrivi presupposti, premesse, requisiti trasversali ai progetti, ecc.

- **Vincoli**: registra eventuali vincoli all'ambiente che questa decisione può comportare.

- **Posizioni**: elenca i candidati possibili come fatti e dati, non opinioni.

- **Opinioni**: del team e degli stakeholder, e anche di consulenti e revisori terzi.

- **Scelta**: spiega perché hai selezionato una posizione, con finalità e responsabilità.

- **Implicazioni**: indica le implicazioni della tua decisione, come l'eventuale necessità di modifiche.

- **Correlati**: ad esempio riferimenti, lavoro trasversale ai progetti e necessità successive.

## Come iniziare a usare i registri decisionali

Per iniziare a usare i registri decisionali, parla con i tuoi colleghi di queste aree.

Individuazione delle decisioni:

- Quanto è urgente e quanto è importante la decisione?

- Va presa ora o può aspettare di sapere di più?

- Sia l'esperienza personale e collettiva sia i metodi e le pratiche di progettazione riconosciuti possono aiutare a individuare le decisioni.

- Idealmente mantieni una lista di decisioni da prendere, che integri la lista delle attività del prodotto.

Presa di decisione:

- Esistono varie tecniche decisionali, sia generali sia specifiche per il software, ad esempio la mappatura del dialogo (dialogue mapping).

- Il processo decisionale di gruppo è un tema di ricerca attivo.

Attuazione e applicazione delle decisioni:

- Le decisioni devono essere comunicate e accettate dagli stakeholder del sistema che lo finanziano, lo sviluppano e lo gestiscono.

- Gli stili di codifica architetturalmente evidenti e le revisioni del codice incentrate su questioni e decisioni architetturali sono due pratiche correlate.

- Le decisioni possono essere riconsiderate quando si apportano modifiche significative a un sistema, come la sua evoluzione, il suo aggiornamento o il suo adeguamento a requisiti mutevoli.

Condivisione delle decisioni (facoltativa):

- Molte decisioni si ripetono tra i progetti.

- Quindi le esperienze con le decisioni passate, buone e cattive, possono essere risorse riutilizzabili di valore quando si adotta una strategia esplicita di gestione della conoscenza.

- Il processo decisionale di gruppo è un tema di ricerca attivo.

Documentazione delle decisioni:

- Esistono molti modelli e strumenti per pianificare e registrare le decisioni.

- Vedi le comunità agili, ad esempio gli architectural decision record di M. Nygard.

- Vedi i processi tradizionali di ingegneria del software e di progettazione architetturale, ad esempio i layout tabellari suggeriti da IBM UMF e da Tyree e Akerman di CapitalOne.

Linee guida per le decisioni:

- I passaggi sopra elencati sono tratti dalla voce di Wikipedia [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Esistono varie tecniche decisionali, sia generali sia specifiche per il software e l'architettura software, ad esempio la mappatura del dialogo.

## Perché i registri decisionali sono meglio dei semplici appunti?

Un registro decisionale aggiunge un po' di struttura agli appunti in forma libera.

Un modello di registro decisionale aggiunge un elenco di punti da trattare, che funziona come una checklist.

Il risultato importante è che i team possono usare registri e modelli decisionali per migliorare il lavoro di squadra: sia i registri decisionali sia i modelli funzionano come checklist che aiutano il team ad assicurarsi di coprire tutti gli aspetti e a comunicare in modo efficiente ed efficace.

I vantaggi dei registri decisionali tendono a crescere con le dimensioni del team, l'espansione del progetto, le opportunità di integrazione, il coinvolgimento degli stakeholder, la manutenzione a lungo termine e l'evoluzione nel tempo.

Ad esempio, usiamo i registri decisionali con team numerosi, tra più reparti, con più organizzazioni partner, su progetti pluriennali e con budget da milioni. Con queste dimensioni e questa portata, preferiamo una comunicazione strutturata agli appunti in forma libera.

In pratica ci piacciono i registri decisionali anche perché incoraggiano una maggiore partecipazione dei colleghi da remoto, più comunicazione asincrona, una valutazione più efficiente delle opzioni e più sintesi per il futuro. Tutti questi aspetti aiutano anche a inserire i nuovi colleghi perché le decisioni sono chiare, complete, concise e registrate.

## Come iniziare a usare i registri decisionali con gli strumenti

Puoi iniziare a usare i registri decisionali con gli strumenti nel modo che preferisci.

Ad esempio:

- Se ti piacciono Google Drive e Google Docs, crea una cartella `decisions` e un documento per ogni registro decisionale.

- Se ti piace il controllo di versione del codice sorgente, crea una directory `decisions` e un file di testo per ogni registro decisionale.

- Se ti piacciono gli strumenti di pianificazione dei progetti come Atlassian Jira, usa il tracker di pianificazione dello strumento.

- Se ti piacciono i wiki come MediaWiki, crea un wiki dei registri decisionali, con una pagina wiki per ogni registro decisionale.

## Competenze per l'IA

Se usi [Claude Code](https://claude.com/claude-code) o un altro agente che supporta le [Claude Skills](https://code.claude.com/docs/en/skills), questo repository include due skill per l'IA in [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — per chiunque scriva un registro decisionale. Guida a capire se una scelta ne ha bisogno, a scegliere il modello leggero o completo, alla stesura, all'archiviazione e alla checklist prima della pubblicazione.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — per i manutentori di questo repository: aggiungere un esempio svolto, mantenere coerenti l'indice degli esempi e i riferimenti incrociati, e le convenzioni sui file di questo repository.

Per usarne una, clona questo repository e copia la cartella della skill desiderata dove il tuo agente carica le skill di progetto (per Claude Code, di solito `.claude/skills/<name>` nel tuo progetto), poi chiedi al tuo assistente di usarla. Vedi [decision-records.github.io/skills](https://decision-records.github.io/skills/) per saperne di più e [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) per il sorgente di quella pagina.

## Suggerimenti per scrivere buoni registri decisionali

Caratteristiche di un buon registro decisionale:

- Momento nel tempo - Indica quando è stata presa la decisione.

- Razionalità - Spiega il motivo per cui è stata presa quella particolare decisione.

- Registro immutabile - Le decisioni di un registro decisionale già pubblicato non dovrebbero essere modificate.

- Specificità - Ogni registro decisionale dovrebbe riguardare una sola decisione.

Caratteristiche di un buon contesto in un registro decisionale:

- Spiega la situazione della tua organizzazione e le sue priorità di business.

- Includi motivazioni e considerazioni basate sulla composizione sociale e sulle competenze dei tuoi team.

Caratteristiche di buone conseguenze in un registro decisionale:

- Approccio giusto - "Dobbiamo iniziare a fare X invece di Y"

- Approccio sbagliato - Non spiegare la decisione in termini di "pro" e "contro" dell'aver preso quella particolare AD.

Un nuovo registro decisionale può prendere il posto di uno precedente:

- Quando viene presa una decisione che sostituisce o invalida un registro decisionale precedente, crea una nuova decisione e fai riferimento alla vecchia.

## Consigli sul lavoro di squadra per i registri decisionali

Se stai pensando di usare i registri decisionali con il tuo team, ecco alcuni consigli che abbiamo imparato lavorando con molti team.

Hai l'opportunità di guidare i tuoi colleghi parlando insieme del "perché", anziché imporre il "cosa". Ad esempio, i registri decisionali sono un modo per i team di pensare in modo più intelligente e comunicare meglio; non hanno valore se sono solo un obbligo burocratico imposto a posteriori.

Alcuni team preferiscono molto il nome "decisioni" all'abbreviazione "registri decisionali". Quando alcuni team usano il nome di directory "decisions", è come se si accendesse una lampadina e il team inizia a inserire più informazioni nella directory, come decisioni sui fornitori, decisioni di pianificazione, decisioni di calendario, ecc. Tutti questi tipi di informazioni possono usare lo stesso modello. Ipotizziamo che le persone imparino più in fretta con le parole ("decisioni") che con le abbreviazioni ("registri decisionali"), che siano più motivate a scrivere documenti in corso d'opera quando la parola "registro" viene rimossa, e che ad alcuni sviluppatori e manager non piaccia la parola "architettura".

In teoria l'immutabilità è l'ideale. In pratica, per i nostri team la mutabilità ha funzionato meglio. Inseriamo le nuove informazioni nel registro decisionale esistente, con una marca temporale e una nota che indica che l'informazione è arrivata dopo la decisione. Questo approccio porta a un "documento vivo" che tutti possiamo aggiornare. Gli aggiornamenti tipici avvengono quando otteniamo informazioni grazie a nuovi colleghi, nuove offerte, risultati reali del nostro utilizzo, o modifiche successive di terze parti come capacità dei fornitori, piani tariffari, contratti di licenza, ecc.

## Domande sul lavoro di squadra per i registri decisionali

### Chi può creare un registro decisionale?

Considera aree come persone specifiche, ruoli specifici, team specifici o reparti specifici; considera anche se esistono persone, ruoli, team o reparti che possono commissionare un registro decisionale, cioè richiederne uno che qualcun altro scriverà.

Esempio di risposta: Chiunque nella nostra organizzazione abbia letto la pagina README sugli architecture decision record può proporre un registro decisionale, cioè iniziare a scriverlo e condividerlo con il team.

### Che cosa giustifica la creazione di un registro decisionale?

Considera aree come i modi di lavorare dei team della tua organizzazione, la struttura del tuo sistema software, il coordinamento tra team, la manutenibilità a lungo termine, le interfacce esterne, chi vuoi che ne tragga beneficio e simili.

Esempio di risposta: Vogliamo creare un registro decisionale quando vogliamo che gli sviluppatori futuri capiscano il "perché" di ciò che facciamo.

### Che cosa giustifica il non creare un registro decisionale?

Considera aree come decisioni che non riguardano l'architettura, o che sono minime, ad esempio a rischio minimo, autonome o limitate a un singolo sviluppatore, o che sono già pienamente coperte altrove, ad esempio da standard, politiche o documentazione, o che sono temporanee, ad esempio soluzioni provvisorie, prove di concetto o esperimenti.

Esempio di risposta: Vogliamo saltare un registro decisionale quando una decisione è limitata in ambito, tempo, rischio e costo, o è già coperta altrove.

### Qual è il ciclo di vita di un registro decisionale?

Considera aree come il processo di creazione, il processo di ricerca, il processo decisionale, il processo di attuazione e il processo di dismissione. Considera come monitorare il ciclo di vita del registro decisionale nel tempo, ad esempio come far passare il registro da uno stato al successivo e come comunicarlo agli stakeholder.

Esempio di risposta: Vogliamo che un registro decisionale abbia cinque fasi del ciclo di vita: Avvio → Ricerca → Valutazione → Attuazione → Manutenzione → Dismissione.

### Quali sono i criteri per le fasi del ciclo di vita di un registro decisionale?

Considera aree come i criteri di accettazione di un registro decisionale, cioè come si fa a sapere che è abbastanza buono da passare da una fase del ciclo di vita alla successiva? Il problema è articolato con chiarezza? Le alternative sono state considerate? I compromessi sono compresi e documentati a sufficienza?
Tutto il contesto rilevante è presente? Tutti gli stakeholder rilevanti sono coinvolti? Tutto il feedback è stato recepito?

Esempio di risposta: Vogliamo che un registro decisionale sia sottoposto al voto degli stakeholder quando il team attivo ha 1) completato la ricerca, 2) completato la valutazione, 3) pubblicato la proposta di registro decisionale agli stakeholder con una richiesta di commenti e un intervallo di tempo di una settimana, 4) tutti i commenti degli stakeholder sono stati recepiti e affrontati.

### Quali ruoli e responsabilità interagiscono con un registro decisionale?

Considera ruoli come proponente, ricercatore, valutatore, revisore, approvatore, manutentore e simili. Considera responsabilità come la comunicazione con gli stakeholder, la garanzia che le aspettative siano soddisfatte, la condivisione sul sito web o sull'intranet e la revisione periodica del lavoro, soprattutto quando avvengono modifiche rilevanti.

Esempio di risposta: Vogliamo che ogni registro decisionale abbia sempre una persona di contatto primaria, una persona di contatto secondaria e un team responsabile; sono responsabili di comunicazioni, pubblicazioni, manutenzione, revisione periodica almeno una volta all'anno ed eventuale dismissione, se necessaria.

### Come interagisce la governance con un registro decisionale?

Considera aree come i modi di lavorare della tua organizzazione, eventuali esigenze di conformità particolari, ad esempio aspetti legali o di risorse umane, e come vuoi gestire consenso, conflitto ed escalation. Ci sono aree, persone o team che possono avere più influenza di altri su un registro decisionale, ad esempio poterlo approvare, votarlo o porre il veto?

Esempio di risposta: La governance di un registro decisionale segue questo ordine di priorità: il CEO, il CTO, il CLO, il team che attua un registro decisionale, gli esperti del team più informati sulla AD. Nessun altro ha governance, a meno che non sia descritto nel registro decisionale.

### Quali principi interagiscono con un registro decisionale?

Considera aree come i modi di lavorare della tua organizzazione, che includono muoversi velocemente o lentamente, consenso o conflitto sulle decisioni, preferenze di rischio o di sicurezza, discussione pubblica o privata e simili.

Esempio di risposta: Usiamo i principi di leadership bias for action, disagree-and-commit, stime al 70% sono sufficienti per decisioni facilmente reversibili e facilmente isolabili, e modi di lavorare pubblici con l'eccezione delle informazioni riservate come descritto nell'accordo di riservatezza della nostra organizzazione.

## Per saperne di più

Introduzione:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Modelli:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Approfondimenti:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - lezione mensile gratuita di architettura software

Strumenti:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Linee guida specifiche di aziende:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Esempi:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Video:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Libri:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Vedi anche:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM e-Business Reference Architecture Framework
