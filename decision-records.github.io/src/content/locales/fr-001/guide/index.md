# Guide : les registres de décision pour les dirigeants

Ce guide explique ce qu'est un registre de décision, pourquoi il compte pour les dirigeants de toutes les fonctions d'une entreprise, comment en structurer un et comment bien conduire cette pratique.

Sommaire :

* [Qu'est-ce qu'un registre de décision ?](#quest-ce-quun-registre-de-décision-)
* [Pourquoi les dirigeants, et pas seulement les ingénieurs, devraient utiliser des registres de décision](#pourquoi-les-dirigeants-et-pas-seulement-les-ingénieurs-devraient-utiliser-des-registres-de-décision)
* [Les registres de décision s'appliquent à toutes les parties de l'entreprise](#les-registres-de-décision-sappliquent-à-toutes-les-parties-de-lentreprise)
* [L'anatomie d'un registre de décision](#lanatomie-dun-registre-de-décision)
* [Le cycle de vie d'un registre de décision](#le-cycle-de-vie-dun-registre-de-décision)
* [Rôles et gouvernance](#rôles-et-gouvernance)
* [Bonnes pratiques](#bonnes-pratiques)
* [Pièges courants](#pièges-courants)
* [Démarrer dans votre organisation](#démarrer-dans-votre-organisation)
* [Pour aller plus loin](#pour-aller-plus-loin)

## Qu'est-ce qu'un registre de décision ?

Un **registre de décision (RD)** consigne un choix important : la situation qui l'a provoqué, les options pesées, le choix retenu et les conséquences attendues. Un **journal des décisions (JD)** est la collection continue de tous les registres de décision d'une équipe, d'une fonction ou d'une organisation, c'est-à-dire en pratique une mémoire institutionnelle du « pourquoi nous faisons les choses ainsi ».

Un registre de décision n'est pas :

* Un compte rendu de réunion (la trace de ce qui a été *discuté*, non de ce qui a été *décidé et pourquoi*).
* Un plan de projet (la trace de *ce qui se passe ensuite*, non de *pourquoi ce chemin a été choisi plutôt que d'autres*).
* Un document de politique (la trace d'une *règle permanente*, même si un registre de décision en produit souvent une).

Il se situe entre ces trois : un artefact bref et durable qui existe précisément pour que le raisonnement derrière un choix survive à la réunion où il a eu lieu.

## Pourquoi les dirigeants, et pas seulement les ingénieurs, devraient utiliser des registres de décision

Les équipes logicielles ont adopté cette pratique les premières parce que le code coûte cher à défaire et que les nouveaux ingénieurs demandent sans cesse « pourquoi est-ce construit ainsi ? ». Tout dirigeant fait face exactement à la même dynamique :

* **La mémoire institutionnelle quitte l'entreprise avec les personnes.** Quand le vice-président des ventes qui a choisi le modèle de territoires actuel part, son raisonnement part avec lui, à moins qu'il n'ait été écrit.
* **Les réorganisations et les changements de direction déclenchent de nouveaux débats.** Sans registre, un nouveau dirigeant perd des semaines à rediscuter une décision déjà prise avec soin, ou pire, l'annule sans comprendre pourquoi elle existait.
* **L'intégration est plus rapide avec un « pourquoi », pas seulement un « quoi ».** Une nouvelle recrue qui peut lire les douze dernières décisions de sa fonction comprend le jugement de l'organisation, pas seulement son état actuel.
* **Écrire améliore la décision elle-même.** Poser le contexte, les options et les arbitrages sur une page, avant de décider, fait apparaître des lacunes et des hypothèses implicites qu'une discussion orale survole.
* **Cela crée de la responsabilité sans bureaucratie.** Un registre de décision indique qui a décidé, quand et pourquoi, ce qui protège à la fois le décideur (un choix documenté et argumenté) et l'organisation (un responsable clair vers qui revenir si les circonstances changent).
* **Cela étend la communication dans l'espace et dans le temps.** Pour les équipes à distance et asynchrones, et pour les parties prenantes absentes de la salle, un registre de décision bien rédigé fait le travail qu'une réunion en direct devrait sinon répéter.

Rien de tout cela n'est propre au logiciel. C'est propre à *toute* décision coûteuse à annuler, qui touche des personnes au-delà du décideur, ou qui sera vraisemblablement contestée plus tard.

## Les registres de décision s'appliquent à toutes les parties de l'entreprise

Considérez le « registre de décision » comme un genre, pas comme l'outil d'un département. La même structure en six parties fonctionne que la décision soit architecturale ou commerciale :

* **Registre de décision de stratégie** : entrée ou sortie d'un marché, posture concurrentielle, paris pluriannuels.
* **Registre de décision commerciale** : conception des territoires, plans de rémunération, choix de CRM et d'outils, stratégie de canaux.
* **Registre de décision de marketing** : positionnement de marque, mix de canaux, agence ou équipe interne, communication tarifaire.
* **Registre de décision de produit** : modèle tarifaire, arbitrages de feuille de route, construire ou acheter, décisions d'arrêt.
* **Registre de décision de projet** : méthode de livraison, sélection de fournisseurs, arbitrages de périmètre.
* **Registre de décision de risque** : acceptation, atténuation, transfert ou évitement d'un risque, et sa justification.
* **Registre de décision de ressources humaines** : changements de politique (télétravail, niveaux, échelles de rémunération), conception de l'organisation.
* **Registre de décision de relations publiques** : posture de communication de crise, politique de porte-parole, règles de relation avec les médias.
* **Registre de décision de développement professionnel** : investissement en formation, critères de promotion, choix de succession.
* **Registre de décision de conception centrée sur l'utilisateur** : choix de méthodes de recherche, arbitrages d'accessibilité, orientation de l'expérience utilisateur.
* **Registre de décision d'architecture / d'ingénierie logicielle** : le cas d'usage d'origine : choix de technologie, de plateforme et de conception.

Le répertoire d'[exemples](../exemples/index.md) contient des modèles concrets dans la plupart de ces domaines. De nombreuses organisations qui adoptent les registres de décision pour l'ingénierie découvrent plus tard que leurs équipes de stratégie, de RH ou de vente veulent exactement la même discipline, souvent le déclic décrit par des équipes qui rebaptisent simplement la pratique « décisions » plutôt que « registres de décision », ce qui donne au modèle un air naturel pour les équipes non techniques plutôt qu'emprunté à l'ingénierie.

## L'anatomie d'un registre de décision

Deux modèles figurent dans [template/index.md](../modele/index.md) : une version **allégée** à six champs pour les décisions courantes, et une version **complète** pour les décisions à fort enjeu et très surveillées. Les deux partagent la même logique de fond :

1. **Titre** : un énoncé court, au présent et à la voix active, de la décision elle-même (par exemple « Adopter des OKR trimestriels », pas « Discussion sur les OKR »). Visez moins de 50 caractères.
2. **Statut** : où en est la décision dans sa vie : demande de commentaires, proposé, accepté, rejeté, obsolète ou remplacé.
3. **Contexte (problème)** : la situation, les forces et les contraintes qui ont rendu cette décision nécessaire. Rédigé pour qu'un lecteur sans souvenir de la réunion comprenne pourquoi la question s'est posée.
4. **Options envisagées (positions)** : les alternatives réalistes, exposées comme des faits et des arbitrages, et non comme une rangée d'hommes de paille qui rend l'option retenue manifestement correcte. Si quelqu'un peut demander « avez-vous envisagé X ? » et que la réponse n'est pas dans le registre, le registre est incomplet.
5. **Décision** : le choix, en langage simple et actif : « Nous ferons X. » Pas un résumé des avantages et inconvénients, mais un énoncé clair de ce qui a été choisi.
6. **Conséquences (implications)** : ce qui change en conséquence, y compris les coûts, les risques, les décisions de suite et tout ce à quoi on renonce en ne choisissant pas une alternative. De bonnes conséquences se lisent « nous faisons désormais X au lieu de Y », et non comme un récapitulatif des avantages et inconvénients de la décision déjà prise.

Le modèle complet ajoute des champs utiles aux décisions à plus fort enjeu : **Hypothèses**, **Contraintes**, **Avis** (qui a conseillé quoi, et pourquoi), **Décisions / exigences / artefacts / principes liés**, et des sous-sections d'analyse structurée (analyse des coûts, SWOT, PEST) pour les décisions qui méritent un examen plus approfondi.

## Le cycle de vie d'un registre de décision

Un registre de décision passe généralement par cinq étapes :

**Initier → Rechercher → Évaluer → Décider → Maintenir (→ Clôturer)**

* *Initier* : quelqu'un constate qu'un choix est assez important pour justifier un registre et ouvre un brouillon.
* *Rechercher* : on rassemble les options, les contraintes et les hypothèses ; on consulte les parties prenantes.
* *Évaluer* : le registre est partagé pour commentaires, généralement avec un délai défini (une semaine est une valeur courante).
* *Décider* : le décideur (individu ou groupe, selon votre modèle de gouvernance) accepte, rejette ou renvoie pour complément de travail ; le statut est mis à jour en conséquence.
* *Maintenir* : le registre reste repérable et est revu si les circonstances changent de manière substantielle.
* *Clôturer* : s'il est remplacé, le statut de l'ancien registre devient « remplacé » et renvoie vers le nouveau. L'ancien registre n'est jamais supprimé, cet historique est le but même.

## Rôles et gouvernance

Pour chaque registre de décision, nommez :

* **Propriétaire / proposant** : rédige le registre et le conduit jusqu'à une décision.
* **Décideur(s)** : la personne, le rôle ou le comité habilité à l'accepter. Indiquez-le explicitement par type de décision (par exemple « changements de prix : VP Produit ; entrée sur un marché : PDG + conseil »).
* **Contributeurs** : personnes dont l'apport a façonné de manière substantielle les options ou les arbitrages.
* **Responsable par la suite** : qui maintient la décision, la revoit périodiquement (une fois par an est un rythme courant) et est chargé de la retirer le moment venu.

Questions de gouvernance qu'il vaut la peine de trancher une fois, par écrit, pour votre organisation (voir aussi la [liste de contrôle](../liste-de-controle/index.md)) :

* Qui peut *proposer* un registre de décision ? (Souvent : n'importe qui.)
* Qui peut en *approuver* un, et cela varie-t-il selon le type de décision ou le seuil de montant ou de risque ?
* Qu'est-ce qui départage ou résout un désaccord : le consensus, un approbateur désigné ou l'escalade ?
* Dans quelle mesure un registre est-il modifiable après acceptation ? De nombreuses équipes préfèrent un modèle de « document vivant » : les nouvelles informations sont ajoutées avec un horodatage plutôt que de réécrire l'histoire en silence.

## Bonnes pratiques

* **Une décision par registre.** Résistez à la tentation de regrouper plusieurs choix dans un document, il devient impossible de le référencer, de le remplacer ou de le retrouver plus tard.
* **Soyez concis.** Une page, pas un rapport. Si cela dépasse une page, la décision est probablement plusieurs décisions.
* **Écrivez le contexte pour un inconnu.** Supposez que le lecteur n'a aucun contexte partagé de la réunion, et qu'il n'en aura pas davantage dans deux ans.
* **Énoncez la décision à la voix active.** « Nous migrerons vers X », et non « X a été vu comme l'orientation privilégiée ».
* **Expliquez les conséquences comme ce qui change, non comme des avantages et inconvénients.** Le débat des arbitrages appartient aux « Options envisagées » ; les « Conséquences » traitent de ce qui se passe ensuite.
* **Stockez les registres là où l'équipe travaille déjà.** Un dossier `decisions/` sous gestion de versions, un espace wiki ou un dossier de lecteur partagé : le meilleur lieu de stockage est celui que votre équipe ouvrira réellement.
* **Réservez les registres de décision aux décisions difficiles à annuler, transversales ou susceptibles d'être remises en question plus tard.** Tout choix n'en nécessite pas, voir la [liste de contrôle](../liste-de-controle/index.md#liste-de-contrôle--cette-décision-a-t-elle-besoin-dun-registre-de-décision-).
* **Remplacez, ne supprimez pas en silence.** Quand une décision change, écrivez un nouveau registre et renvoyez vers celui qu'il remplace.

## Pièges courants

* **En faire de la paperasse après coup.** Si un registre de décision est écrit pour justifier un choix déjà fait et annoncé, il perd l'essentiel de sa valeur, le but est d'affûter la réflexion *avant* de s'engager, pas de produire un artefact de conformité après.
* **La lassitude du journal.** Consigner chaque petit choix noie les choix importants et habitue les gens à ne plus lire le journal. Limitez les registres aux décisions réellement difficiles à annuler ou aux conséquences larges.
* **Écrire des avantages/inconvénients au lieu d'une décision.** Un registre qui se termine par une liste d'arbitrages et sans « nous ferons X » clair n'est pas un registre de décision, c'est une note d'options.
* **Pas de responsable.** Un registre de décision sans décideur ni réviseur nommé a tendance à devenir obsolète et à perdre la confiance.
* **Traiter le modèle comme de la bureaucratie plutôt que comme une liste de contrôle.** La valeur du modèle est d'être une liste de contrôle pour bien réfléchir et bien communiquer, pas un formulaire à remplir pour lui-même.

## Démarrer dans votre organisation

1. Choisissez une fonction ou une équipe ayant une décision déjà conflictuelle ou difficile à annuler.
2. Rédigez cette décision avec le [modèle allégé](../modele/index.md#modèle-allégé).
3. Présentez-la au décideur réel et aux parties prenantes ; fixez un délai pour les retours.
4. Stockez-la dans un lieu durable et repérable.
5. Une fois que la pratique a fait ses preuves une fois, proposez-la comme standard léger pour l'équipe, non comme un mandat imposé d'en haut. Les registres de décision fonctionnent mieux quand une équipe les adopte parce qu'ils lui facilitent la vie, et non comme une paperasse forcée.

Voir le [tutoriel](../tutoriel/index.md) pour un parcours complet commenté.

## Pour aller plus loin

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) : la spécification condensée que ce guide développe.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) : le projet source plus complet que ce guide généralise pour un public d'entreprise.
