# Introduire progressivement ITIL 5

* Statut : demande de commentaires
* Date : 2026-09-30
* Décideur(s) : directeur des systèmes d'information (à confirmer)
* Propriétaire : responsable de la gestion des services informatiques

Résumé : travail en cours. Ceci est un point de départ pour une organisation informatique qui envisage comment, et dans quel ordre, adopter ITIL 5 pour la gestion des services informatiques. Il montre comment une équipe peut cadrer la question, débattre des options et recueillir des informations. Il n'enregistre aucune décision et ne reprend pas ce que dit ITIL 5.

## Problème

Le centre de services informatiques et les équipes qui l'entourent se sont développés sans manière de travailler commune : incidents, demandes et changements sont traités différemment selon les équipes, et les incidents récurrents sont rarement analysés. La direction s'intéresse à ITIL, référentiel largement utilisé pour la gestion des services informatiques, dans sa dernière version (ITIL 5), afin que les équipes internes, les fournisseurs et les auditeurs partagent pratiques et vocabulaire.

ITIL 5 est récent et publié par étapes : l'équipe doit donc d'abord établir ce qui est réellement disponible et stable. Les questions auxquelles répondre :

* Quel problème cherchons-nous à résoudre, et ITIL 5 est-il le bon moyen, ou l'organisation est-elle mieux servie en adoptant certaines pratiques, en restant sur la version qu'elle connaît ou en s'alignant sur la norme internationale ISO/IEC 20000-1 ?
* Si l'équipe poursuit, dans quel ordre et à quel rythme ?
* De quoi avons-nous besoin (capacités, outils, données) avant chaque étape ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **Les difficultés se concentrent sur quelques pratiques** (par exemple le traitement des incidents, des demandes et des changements). Vérification : examiner un échantillon d'incidents et de changements récents et repérer où l'on perd du temps et de la qualité.
* **Les pratiques peuvent être adoptées séparément** et pas seulement en bloc. Vérification : lire les orientations du référentiel et parler à des organisations qui l'ont adopté par étapes.
* **Le centre de services peut se former tout en assurant le service.** Vérification : estimer le temps que chaque pratique demande au personnel, par rapport au temps dont il dispose.
* **Les fournisseurs et les auditeurs apprécieront un vocabulaire commun.** Vérification : demander aux principaux ce qu'ils utilisent et attendent aujourd'hui.
* **Le contenu d'ITIL 5 est-il assez mûr pour être adopté maintenant ?** Vérification : voir ce qui a été publié et certifié jusqu'ici, et ce qui reste à venir.

## Contraintes

* Le service doit continuer à fonctionner pendant tout changement ; le centre de services ne peut pas s'arrêter pour se former.
* Les changements d'outils doivent se limiter à ce qu'une étape exige ; un changement de grande plateforme est une décision distincte.
* Anciennes et nouvelles manières de travailler cohabiteront un temps. L'équipe doit dire combien de temps est acceptable.
* Inconnu, à confirmer : les modèles de licence et de coût de formation du référentiel, les clauses des contrats fournisseurs qui renvoient à un référentiel donné, et les attentes éventuelles d'audit ou de réglementation.

## Options envisagées

Pour chaque option, l'équipe doit estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui lui feraient changer d'avis.

* **Tout adopter en même temps dans toutes les équipes.**
  * Valeur : une manière de travailler commune au plus vite.
  * Postes de coût : formation de tout le personnel ; refonte de tous les processus ; changements d'outils ; capacité perdue pendant que les équipes se forment ; coût d'un retour en arrière si le démarrage est mauvais.
  * Forme du calendrier : plan court, longue récupération en cas de difficulté.
  * Capacités nécessaires : un pilotage du changement solide et assez de capacité disponible pour absorber le changement.
* **Introduire par pratique**, en commençant là où la douleur est la plus forte et où les utilisateurs sont les plus touchés (souvent le traitement des incidents et des demandes), puis le changement, puis l'analyse des problèmes et l'amélioration continue, chaque phase ayant ses propres mesures.
  * Valeur : chaque phase apprend à l'équipe ce qu'il faut changer dans la suivante ; des gains précoces visibles pour les utilisateurs.
  * Postes de coût : un programme global plus long ; cohabitation des anciennes et nouvelles pratiques ; formations répétées ; entretien des mesures de sortie.
  * Forme du calendrier : une suite de phases, chacune assez longue pour voir un changement mesurable avant le début de la suivante.
  * Capacités nécessaires : des données de service fiables (délai de résolution, résolution dès le premier contact, part des changements provoquant des incidents) et un responsable pour chaque pratique.
* **Introduire par équipe** : une équipe adopte toutes les pratiques en premier comme pilote, puis les autres suivent.
  * Valeur : un exemple complet et fonctionnel tôt.
  * Postes de coût : un même service est scindé entre deux manières de travailler pendant le pilote ; les transmissions entre l'équipe pilote et les autres deviennent plus difficiles.
  * Risques : déroute utilisateurs et fournisseurs ; le contexte de l'équipe pilote peut ne pas être typique.
* **S'aligner sur ISO/IEC 20000-1 au lieu d'ITIL, ou en complément.** Une norme d'exigences certifiable pour un système de management des services, que certaines organisations préfèrent pour l'audit et l'assurance fournisseurs.
  * Valeur : reconnaissance externe ; exigences claires.
  * Postes de coût : effort d'évaluation et de certification ; documentation.
  * Risques : peut encourager un état d'esprit de conformité plutôt que d'amélioration.
* **Ne pas encore changer de référentiel** et traiter directement les difficultés précises. Une option de référence réelle, à chiffrer honnêtement.

## Argumentation

Points de débat à prévoir :

* **Référentiel ou problème ?** Le but est-il d'adopter un référentiel, ou de réduire les incidents récurrents et les changements lents ? Choisir l'option que l'on juge sur le second.
* **Rythme et capacité.** Un programme plus rapide apporte plus tôt ses bénéfices, mais mobilise les mêmes personnes que celles qui font tourner le service.
* **Risque de version.** Adopter quelque chose de récemment publié apporte moins d'exemples concrets et de supports de formation ; rester sur une version connue est plus sûr mais peut vieillir.
* **Vocabulaire ou pratique.** Utiliser les mêmes mots que les fournisseurs est plus facile que changer la manière de travailler. Qu'est-ce qui compte le plus ?

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Construire un modèle de coût selon les termes propres à l'organisation. Ponctuel : formation, conception de processus, changement d'outils, conseil, remplacement. Récurrent : licences, temps des responsables de processus, audits. Caché : baisse de débit pendant la transition, modifications de contrats fournisseurs. Donner des fourchettes, pas des chiffres uniques.
2. Choisir les mesures de bénéfice avant de commencer, pour ne pas définir le succès après coup : délai de résolution, résolution dès le premier contact, part des changements provoquant des incidents, taux d'incidents répétés, satisfaction des utilisateurs, constats d'audit.
3. Estimer le retour dans les scénarios optimiste, probable et pessimiste, et tester la sensibilité de la réponse aux hypothèses dont l'équipe est le moins sûre.
4. Noter les options avec une matrice pondérée (valeur, coût, rapidité, risque, adéquation avec les fournisseurs, capacités nécessaires).
5. Se demander ce que chaque option fait à la réversibilité : lesquelles peuvent être arrêtées après une phase sans perdre le travail accompli ?

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et pour quand.
* Arrêter d'abord les critères et leur pondération.
* Recueillir les éléments ci-dessus, y compris ce qui est actuellement disponible pour ITIL 5.
* Diffuser le brouillon pour commentaires avec une date limite, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe choisit une approche par phases, elle devrait :

* Publier des mesures de sortie pour chaque phase et en rendre compte régulièrement au sponsor.
* Former le personnel à chaque pratique juste avant sa phase.
* Laisser fonctionner comme aujourd'hui les pratiques qui ne sont pas encore concernées, et le dire.
* Différer tout achat important de plateforme de gestion des services jusqu'à ce que les éléments des premières phases soient disponibles.
* Décider de ce qui se passe quand une phase n'atteint pas ses mesures : répéter, ajuster ou arrêter.

## Décisions liées

* [Introduire progressivement un cadre de gestion](../cadres-de-gestion/) : le même schéma de phasage appliqué à un autre cadre.
* [Choisir nos cadres de technologies de l'information](../cadres-technologies-information/) : comment ITIL s'articule avec d'autres cadres envisagés par le groupe.
* Décisions pas encore prises : outils ; modifications des contrats fournisseurs ; certification ou non.

## Notes liées

* Points ouverts : confirmer ce qui existe aujourd'hui pour ITIL 5 ; lister les pratiques aujourd'hui bien ou mal exécutées ; demander aux principaux fournisseurs et auditeurs ce qu'ils attendent.
* En savoir plus :
  * Wikipédia : [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO : [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html)
  * Vidéo : [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Lecture : [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
