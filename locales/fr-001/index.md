# Registre de décision (RD)

Un registre de décision (RD) est un moyen de lancer, débattre et archiver un choix important, avec son contexte et ses conséquences.

Sommaire :

- [Qu'est-ce qu'un registre de décision ?](#quest-ce-quun-registre-de-décision-)
- [Modèle de registre de décision](#modèle-de-registre-de-décision)
- [Comment commencer à utiliser des registres de décision](#comment-commencer-à-utiliser-des-registres-de-décision)
- [Pourquoi les registres de décision valent-ils mieux que de simples notes ?](#pourquoi-les-registres-de-décision-valent-ils-mieux-que-de-simples-notes-)
- [Comment commencer à utiliser des registres de décision avec des outils](#comment-commencer-à-utiliser-des-registres-de-décision-avec-des-outils)
- [Compétences pour l'IA](#compétences-pour-lia)
- [Suggestions pour rédiger de bons registres de décision](#suggestions-pour-rédiger-de-bons-registres-de-décision)
- [Conseils de travail d'équipe pour les registres de décision](#conseils-de-travail-déquipe-pour-les-registres-de-décision)
- [Questions de travail d'équipe pour les registres de décision](#questions-de-travail-déquipe-pour-les-registres-de-décision)
- [Pour en savoir plus](#pour-en-savoir-plus)

Ce que contient ce dépôt :

- [guide](guide) : ce qu'est un registre de décision, pourquoi on les utilise, cycle de vie, gouvernance et plus encore.
- [modèle](modele) : modèle à copier-coller avec mise en forme Markdown et suggestions pas à pas.
- [tutoriel](tutoriel) : un parcours pratique, pas à pas : rédigez votre premier registre de décision en moins de 20 minutes.
- [exemples](exemples) : exemples travaillés de décisions de stratégie, de ventes, de marketing, de produit, de RH, de risque, de projet et de technologie.
- [liste de contrôle](liste-de-controle) : listes de contrôle pour décider s'il faut en rédiger un, bien l'écrire, le relire et conduire la pratique dans une organisation.
- [aide](aide) : FAQ, dépannage et glossaire pour les questions courantes des dirigeants lors de l'adoption.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) : la spécification de ce dépôt : structure, contenu, versions linguistiques, site web et agents.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) : le contenu, un répertoire par version linguistique ; `en-us` est la source de vérité en anglais.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) : des compétences Claude qui appliquent les modèles et listes de contrôle de ce dépôt dans un assistant d'IA : une pour rédiger un registre de décision, une pour maintenir ce dépôt.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) : code source SvelteKit 3 de [decision-records.github.io](https://decision-records.github.io), qui promeut les compétences ci-dessus.

## Qu'est-ce qu'un registre de décision ?

Un **registre de décision** (RD) est un moyen de lancer, débattre et archiver un choix important, avec son contexte et ses conséquences.

Un **journal des décisions** (JD) est la collection de tous les RD créés et tenus pour un projet (ou une organisation) donné.

Une **décision** dans ce contexte est le choix d'une organisation qui répond à une exigence significative.

Une **exigence significative** (ES) est un besoin d'un projet qui a un effet mesurable sur le système du projet.

Tous ces termes relèvent du sujet de la **gestion des connaissances** (GC).

L'objectif de ce document est de donner un aperçu rapide des registres de décision.

## Les registres de décision sont des modes de travail pour les organisations

Partout où un choix est difficile à annuler, touche d'autres personnes ou sera remis en cause plus tard, il mérite un registre de décision.

- Stratégie : entrer sur un marché ou en sortir, choisir une posture de croissance ou de rentabilité, fixer un pari à 3 ans
- Ventes : changer le modèle de territoires, choisir un CRM, restructurer la rémunération
- Marketing : repositionner une marque, choisir un mix de canaux, choisir entre agence et modèle interne
- Produit : fixer le modèle tarifaire, choisir entre construire et acheter, arrêter une fonctionnalité ou une gamme
- Finance : choisir une structure de financement, fixer une politique d'allocation du capital
- Ressources humaines : fixer une politique de télétravail, repenser les niveaux et les échelles de rémunération
- Risque et juridique : accepter, atténuer ou transférer un risque précis ; choisir une limite de concentration de fournisseurs
- Opérations : construire ou acheter, internaliser ou externaliser, choisir une méthode de livraison
- Relations publiques : choisir une posture de communication de crise, fixer une politique d'engagement avec les médias
- Développement professionnel : fixer une politique de promotion ou d'investissement en formation
- Technologie : choisir une base de données chez un fournisseur cloud, un modèle d'intégration, une méthode logicielle

Si vous pouvez imaginer quelqu'un de votre équipe demander dans un an « attendez, pourquoi avons-nous fait ainsi ? », cette décision est candidate à un registre de décision.

## Modèle de registre de décision

Voir notre fichier de [modèle](modele/index.md) qui utilise ces grandes sections :

- **Titre** : impératif court au présent, jusqu'à 50 caractères.

- **Statut** : demande de commentaires | proposé | accepté | rejeté | obsolète | remplacé

- **Problème** : décrivez le problème que vous voulez traiter, sans laisser de question sur le pourquoi.

- **Hypothèses** : décrivez toute hypothèse, prémisse, exigence inter-projets, etc.

- **Contraintes** : consignez toute contrainte sur l'environnement que cette décision pourrait imposer.

- **Positions** : listez les options candidates possibles comme des faits et des données, non des opinions.

- **Avis** : de l'équipe et des parties prenantes, et aussi de conseillers et réviseurs tiers.

- **Sélection** : expliquez pourquoi vous avez choisi une position, avec but et responsabilité.

- **Implications** : énoncez les implications de votre décision, comme tout besoin de changements.

- **Liés** : par exemple références, travail inter-projets et besoins de suite.

## Comment commencer à utiliser des registres de décision

Pour commencer à utiliser des registres de décision, parlez avec vos coéquipiers de ces domaines.

Identification des décisions :

- Quelle est l'urgence et l'importance de la décision ?

- Doit-elle être prise maintenant, ou peut-elle attendre d'en savoir plus ?

- L'expérience personnelle et collective, ainsi que des méthodes et pratiques de conception reconnues, peuvent aider à identifier les décisions.

- Idéalement, tenez une liste de décisions à prendre, qui complète la liste de tâches du produit.

Prise de décision :

- Il existe un certain nombre de techniques de prise de décision, générales et propres au logiciel, par exemple la cartographie du dialogue.

- La prise de décision en groupe est un sujet de recherche actif.

Mise en œuvre et application des décisions :

- Les décisions doivent être communiquées aux parties prenantes du système qui le financent, le développent et l'exploitent, et acceptées par elles.

- Les styles de codage architecturalement évidents et les revues de code axées sur les préoccupations et décisions architecturales sont deux pratiques apparentées.

- Les décisions peuvent être reconsidérées lors de changements importants d'un système, comme son évolution, sa mise à niveau ou son ajustement à des exigences changeantes.

Partage des décisions (facultatif) :

- De nombreuses décisions se répètent d'un projet à l'autre.

- Par conséquent, l'expérience des décisions passées, bonnes et mauvaises, peut être un actif réutilisable précieux quand on emploie une stratégie explicite de gestion des connaissances.

- La prise de décision en groupe est un sujet de recherche actif.

Documentation des décisions :

- De nombreux modèles et outils existent pour planifier et consigner les décisions.

- Voir les communautés agiles, par exemple les registres de décision d'architecture de M. Nygard.

- Voir les processus traditionnels d'ingénierie logicielle et de conception d'architecture, par exemple les mises en page de tableaux suggérées par IBM UMF et par Tyree et Akerman de CapitalOne.

Orientation sur les décisions :

- Les étapes ci-dessus sont reprises de l'entrée Wikipédia sur [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Il existe un certain nombre de techniques de prise de décision, générales et propres au logiciel et à l'architecture logicielle, par exemple la cartographie du dialogue.

## Pourquoi les registres de décision valent-ils mieux que de simples notes ?

Un registre de décision ajoute de la structure à des notes libres.

Un modèle de registre de décision ajoute une liste d'éléments à couvrir, qui fait office de liste de contrôle.

Le résultat important est que les équipes peuvent utiliser les registres de décision et les modèles pour améliorer le travail d'équipe : les registres de décision et les modèles fonctionnent tous deux comme des listes de contrôle qui aident l'équipe à couvrir tous les aspects, et ils communiquent de manière efficace et efficiente.

Les avantages des registres de décision tendent à croître avec la taille de l'équipe, l'expansion du projet, les possibilités d'intégration, l'implication des parties prenantes, la maintenance à long terme et l'évolution dans le temps.

Par exemple, nous utilisons des registres de décision avec de grandes équipes, dans plusieurs départements, avec plusieurs organisations partenaires, sur des projets pluriannuels et avec des budgets de plusieurs millions. À cette taille et à cette portée, nous préférons une forme de communication structurée à de simples notes libres.

En pratique, nous aimons aussi les registres de décision parce qu'ils encouragent davantage de participation des coéquipiers à distance, plus de communication asynchrone, une évaluation plus efficace des options et plus de synthèse par la suite. Tous ces aspects aident aussi à intégrer de nouveaux coéquipiers, car les décisions sont claires, complètes, succinctes et consignées.

## Comment commencer à utiliser des registres de décision avec des outils

Vous pouvez commencer à utiliser des registres de décision avec des outils comme vous le voulez.

Par exemple :

- Si vous aimez Google Drive et Google Docs, créez un dossier `decisions` et un document par registre de décision.

- Si vous aimez la gestion de versions du code source, créez un répertoire `decisions` et un fichier texte par registre de décision.

- Si vous aimez les outils de planification de projet, comme Atlassian Jira, utilisez le suivi de planification de l'outil.

- Si vous aimez les wikis, comme MediaWiki, créez un wiki de registres de décision, avec une page wiki par registre de décision.

## Compétences pour l'IA

Si vous utilisez [Claude Code](https://claude.com/claude-code) ou un autre agent qui prend en charge les [compétences Claude](https://code.claude.com/docs/en/skills), ce dépôt propose deux compétences pour l'IA dans [skills](https://github.com/decision-records/decision-records/tree/main/skills) :

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) : pour toute personne rédigeant un registre de décision. Guide sur la question de savoir si un choix en nécessite un, le choix entre le modèle allégé et complet, la rédaction, le classement et la liste de contrôle avant publication.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) : pour les mainteneurs de ce dépôt lui-même : ajouter un exemple, maintenir la cohérence de l'index des exemples et des renvois, et les conventions de fichiers de ce dépôt.

Pour en utiliser une, clonez ce dépôt et copiez le dossier de la compétence voulue là où votre agent charge les compétences de projet (pour Claude Code, généralement `.claude/skills/<name>` dans votre propre projet), puis demandez à votre assistant de l'utiliser. Voir [decision-records.github.io/skills](https://decision-records.github.io/skills/) pour en savoir plus, et [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) pour le code source de cette page.

## Suggestions pour rédiger de bons registres de décision

Caractéristiques d'un bon registre de décision :

- Point dans le temps : indiquez quand la décision a été prise

- Rationalité : expliquez la raison de la décision précise.

- Registre immuable : les décisions prises dans un registre de décision déjà publié ne doivent pas être modifiées.

- Spécificité : chaque registre de décision doit porter sur une seule décision.

Caractéristiques d'un bon contexte dans un registre de décision :

- Expliquez la situation de votre organisation et ses priorités d'activité

- Incluez la justification et les considérations fondées sur la composition sociale et les compétences de vos équipes.

Caractéristiques de bonnes conséquences dans un registre de décision :

- Bonne approche : « Nous devons commencer à faire X au lieu de Y »

- Mauvaise approche : n'expliquez pas la décision en termes d'« avantages » et d'« inconvénients » d'avoir pris cette décision précise

Un nouveau registre de décision peut prendre la place d'un registre précédent :

- Quand une décision remplace ou invalide un registre de décision précédent, créez une nouvelle décision et référencez l'ancienne.

## Conseils de travail d'équipe pour les registres de décision

Si vous envisagez d'utiliser des registres de décision avec votre équipe, voici quelques conseils appris en travaillant avec de nombreuses équipes.

Vous avez l'occasion de guider vos coéquipiers en parlant ensemble du « pourquoi », plutôt qu'en imposant le « quoi ». Par exemple, les registres de décision sont un moyen pour les équipes de penser plus intelligemment et de mieux communiquer ; les registres de décision n'ont pas de valeur s'ils ne sont qu'une exigence de paperasse imposée après coup.

Certaines équipes préfèrent nettement le nom « décisions » à l'abréviation « registres de décision ». Quand certaines équipes utilisent le nom de répertoire « decisions », c'est comme si une ampoule s'allumait, et l'équipe se met à y verser plus d'informations, comme des décisions de fournisseurs, de planification, de calendrier, etc. Tous ces types d'informations peuvent utiliser le même modèle. Nous supposons que les gens apprennent plus vite avec des mots (« décisions ») qu'avec des abréviations (« registres de décision »), qu'ils sont plus motivés pour écrire des documents de travail en cours quand le mot « registre » disparaît, et aussi que certains développeurs et certains managers n'aiment pas le mot « architecture ».

En théorie, l'immuabilité est idéale. En pratique, la mutabilité a mieux fonctionné pour nos équipes. Nous insérons la nouvelle information dans le registre de décision existant, avec un horodatage et une note indiquant que l'information est arrivée après la décision. Cette approche mène à un « document vivant » que nous pouvons tous mettre à jour. Les mises à jour typiques surviennent quand nous obtenons des informations grâce à de nouveaux coéquipiers, de nouvelles offres ou des résultats réels de nos usages, ou après des changements ultérieurs de tiers comme les capacités des fournisseurs, les plans tarifaires, les accords de licence, etc.

## Questions de travail d'équipe pour les registres de décision

### Qui peut créer un registre de décision ?

Envisagez des domaines comme des personnes précises, des rôles précis, des équipes précises ou des départements précis ; envisagez aussi s'il y a des personnes, rôles, équipes ou départements qui peuvent commanditer un registre de décision, c'est-à-dire en demander un que quelqu'un d'autre rédigera.

Exemple de réponse : toute personne de notre organisation ayant lu la page README du registre de décision d'architecture peut proposer un registre de décision, c'est-à-dire qu'elle peut commencer à le rédiger et le partager avec l'équipe.

### Qu'est-ce qui justifie de lancer un registre de décision ?

Envisagez des domaines comme les modes de travail d'équipe de votre organisation, la structure de votre système logiciel, la coordination entre équipes, la maintenabilité à long terme, les interfaces externes, qui vous voulez faire bénéficier, et ainsi de suite.

Exemple de réponse : nous voulons créer un registre de décision quand nous voulons que les futurs développeurs comprennent le « pourquoi » de ce que nous faisons.

### Qu'est-ce qui justifie de ne pas lancer un registre de décision ?

Envisagez des domaines comme les décisions qui ne portent pas sur l'architecture, ou qui sont minuscules, par exemple à risque minimal, autonomes ou d'un seul développeur, ou déjà entièrement couvertes ailleurs, par exemple par des normes, des politiques ou de la documentation, ou temporaires, comme des contournements, des preuves de concept ou des expériences.

Exemple de réponse : nous voulons nous passer d'un registre de décision quand une décision est limitée en portée, en temps, en risque et en coût, ou déjà couverte ailleurs.

### Quel est le cycle de vie d'un registre de décision ?

Envisagez des domaines comme le processus de création, le processus de recherche, le processus de décision, le processus de mise en œuvre et le processus de clôture. Envisagez comment suivre le cycle de vie du registre de décision dans le temps, par exemple comment le faire passer d'un état au suivant, et aussi comment le communiquer aux parties prenantes.

Exemple de réponse : nous voulons qu'un registre de décision ait cinq étapes de cycle de vie : Initier → Rechercher → Évaluer → Mettre en œuvre → Maintenir → Clôturer.

### Quels sont les critères des étapes du cycle de vie d'un registre de décision ?

Envisagez des domaines comme les critères d'acceptation d'un registre de décision, c'est-à-dire comment savez-vous qu'il est assez bon pour passer d'une étape du cycle de vie à la suivante ? Le problème est-il clairement formulé ? Les alternatives ont-elles été envisagées ? Les arbitrages sont-ils suffisamment compris et documentés ?
Tout le contexte pertinent est-il en place ? Toutes les parties prenantes concernées sont-elles impliquées ? Tous les retours ont-ils été intégrés ?

Exemple de réponse : nous voulons qu'un registre de décision soit soumis au vote des parties prenantes quand l'équipe active a 1) terminé sa recherche, 2) terminé son évaluation, 3) publié la proposition de registre de décision aux parties prenantes avec une demande de commentaires et un délai d'une semaine, 4) intégré et traité tous les commentaires des parties prenantes.

### Quels rôles et quelles responsabilités interagissent avec un registre de décision ?

Envisagez des rôles comme proposant, chercheur, évaluateur, réviseur, approbateur, mainteneur et ainsi de suite. Envisagez des responsabilités comme la communication avec les parties prenantes, l'assurance que les attentes sont satisfaites, le partage sur le site web ou l'intranet, et la revue périodique du travail et surtout quand des changements pertinents surviennent.

Exemple de réponse : nous voulons que chaque registre de décision ait toujours une personne de contact principale, une personne de contact secondaire et une équipe responsable ; ceux-ci sont responsables des communications, des publications, de la maintenance, de la revue périodique au moins une fois par an et de la clôture éventuelle au besoin.

### Comment la gouvernance interagit-elle avec un registre de décision ?

Envisagez des domaines comme les modes de travail de votre organisation, tout besoin particulier de conformité, par exemple sur les aspects juridiques ou de ressources humaines, la manière dont vous voulez traiter consensus, conflit et escalade. Y a-t-il des domaines, des personnes ou des équipes pouvant avoir plus d'influence que d'autres sur un registre de décision, par exemple pouvoir l'approuver, voter dessus ou y opposer son veto ?

Exemple de réponse : la gouvernance d'un registre de décision suit cet ordre de priorité : le PDG, le directeur technique, le directeur juridique, l'équipe qui met en œuvre un registre de décision, les experts de l'équipe les plus compétents sur le registre. Personne d'autre n'a de gouvernance sauf mention dans le registre de décision.

### Quels principes interagissent avec un registre de décision ?

Envisagez des domaines comme les modes de travail de votre organisation, qui incluent aller vite ou lentement, le consensus de décision ou le conflit de décision, les préférences de risque ou de sécurité, la discussion publique ou privée, et ainsi de suite.

Exemple de réponse : nous appliquons les principes de leadership que sont le biais pour l'action, le désaccord suivi d'engagement, le fait que des estimations à 70 % suffisent pour des décisions facilement réversibles et facilement isolables, et des modes de travail publics à l'exception des informations confidentielles telles que décrites dans l'accord de confidentialité de notre organisation.

## Pour en savoir plus

Introduction :

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Modèles :

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Approfondissement :

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) : leçon mensuelle gratuite d'architecture logicielle

Outils :

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Conseils propres à des entreprises :

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Exemples :

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Vidéos :

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts :

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Livres:

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

Voir aussi:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
