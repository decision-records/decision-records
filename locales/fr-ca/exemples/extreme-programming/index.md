# L'Extreme Programming

* Statut : demande de commentaires
* Date : 2025-10-06
* Décideur(s) : responsable de l'ingénierie (à confirmer)
* Propriétaire : responsable d'ingénierie

Résumé : travail en cours. Ceci est un point de départ pour une équipe d'ingénierie qui envisage comment introduire des pratiques de l'Extreme Programming (XP), comme le développement piloté par les tests, la programmation en binôme, l'intégration continue et les petites livraisons. Il montre comment une équipe peut cadrer la question, débattre des options et recueillir des informations. Il n'enregistre aucune décision.

## Problème

Les équipes produit livrent des fonctionnalités par gros lots, et les défauts trouvés tard coûtent cher : une part notable des versions nécessite un correctif urgent après la livraison. Les responsables de l'ingénierie s'intéressent aux pratiques de l'Extreme Programming, une méthode agile de développement logiciel qui met l'accent sur des pratiques techniques telles que le développement piloté par les tests, la programmation en binôme, l'intégration continue, les petites livraisons, le remaniement du code et la propriété collective du code.

Ces pratiques se soutiennent mutuellement, mais elles changent aussi la façon dont les ingénieurs travaillent au quotidien. Les adopter toutes d'un coup risque de rencontrer de la résistance et d'être appliqué de manière superficielle. Les questions auxquelles répondre :

* Quels problèmes voulons-nous résoudre (défauts tardifs, retours lents, savoir détenu par quelques-uns), et quelles pratiques y répondent ?
* Dans quel ordre introduire les pratiques, et qui commence ?
* Que mesurerons-nous pour savoir que les pratiques aident ?
* Quel équilibre entre norme commune et choix de chaque équipe ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **Les défauts tardifs viennent surtout du manque de retour automatisé rapide.** Vérification : remonter un échantillon de correctifs urgents jusqu'à l'endroit où le défaut aurait pu être détecté.
* **Les pratiques de base (intégration continue et tests automatisés) rendent les autres possibles.** Vérification : demander aux équipes qui ont essayé quelles pratiques dépendaient de quelles autres.
* **Les ingénieurs adopteront des pratiques qu'ils voient fonctionner dans une équipe voisine.** Vérification : leur demander ce qui les convaincrait et ce qui les inquiète.
* **Le taux de correctifs urgents après livraison est une juste mesure du progrès.** Vérification : convenir de la façon de le compter et vérifier que d'autres mesures (délai des changements, taux d'échec des changements) ne racontent pas une autre histoire.

## Contraintes

* Les équipes doivent encore livrer des fonctionnalités pendant qu'elles apprennent : la production sera probablement plus basse pendant la première période.
* Les ingénieurs doivent garder le choix de la façon de former des binômes et des outils qu'ils utilisent.
* L'infrastructure de construction et de test existante peut demander du travail avant que l'intégration continue soit utile.
* Inconnu, à confirmer : la part du code testable aujourd'hui, et les contraintes réglementaires ou clients qui touchent la fréquence des livraisons.

## Options envisagées

Pour chaque option, estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui feraient changer l'équipe d'avis.

* **Adopter toutes les pratiques en même temps dans toutes les équipes.**
  * Valeur : les pratiques se renforcent mutuellement.
  * Postes de coût : formation ; livraison ralentie pendant l'apprentissage ; travail d'outillage dans toutes les équipes à la fois.
  * Risques : changement important ; des équipes sans les compétences de base peuvent les abandonner en quelques semaines.
* **Introduire les pratiques dans un ordre choisi, équipe par équipe.** Par exemple d'abord l'intégration continue et les tests automatisés (les fondations), puis les petites livraisons et la programmation en binôme, puis le développement piloté par les tests.
  * Valeur : chaque pratique a le temps de s'installer ; les premières rendent les suivantes possibles ; l'expérience de la première équipe guide les autres.
  * Postes de coût : coaching ; temps de binômage et d'écriture de tests intégré aux plans ; travail d'infrastructure sur la chaîne de livraison.
  * Forme du calendrier : séquentiel, l'équipe suivante rejoignant quand la précédente a maintenu sa chaîne de livraison en bonne santé pendant une période définie.
  * Capacités nécessaires : un coach ; une chaîne de construction fiable ; le soutien des managers face à la baisse de production.
  * Risques : lent ; pratiques adoptées de façon inégale.
* **Adopter seulement les pratiques faciles.** Peu d'effort, mais peut laisser de côté celles qui apportent le plus de bénéfice, comme les tests automatisés.
* **Adopter un autre ensemble de pratiques** (par exemple celles décrites par la recherche DORA sur la performance de livraison logicielle, telles que la livraison continue, le développement sur tronc commun et l'architecture faiblement couplée) et considérer XP comme une source parmi d'autres.
* **Ne rien faire de nouveau** et traiter directement les causes précises des défauts. Une vraie option de référence.

## Argumentation

Points de débat à prévoir :

* **La programmation en binôme.** Une pratique dont beaucoup d'ingénieurs se méfient. Où aide-t-elle (partage de connaissances, travail complexe), et où non ?
* **Normaliser ou laisser les équipes choisir ?** Des résultats communs (moins de correctifs urgents, retours plus rapides) avec liberté des équipes sur le comment, ou une norme plus stricte ?
* **Qualité ou vitesse à court terme.** Les dirigeants sont-ils prêts à accepter une production plus basse pendant que les équipes apprennent ?
* **Le TDD, un moyen ou une fin ?** Certaines pratiques (comme le développement piloté par les tests) sont débattues même entre praticiens expérimentés. L'équipe doit décider quel problème la pratique résout avant de l'adopter.

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Chiffrer l'approche actuelle : effort passé sur les correctifs urgents, retards causés par les défauts tardifs, impact sur les clients. Utiliser des fourchettes selon les termes propres à l'organisation.
2. Chiffrer le programme : coaching, formation, temps de binômage et de tests, infrastructure de la chaîne, et baisse temporaire de la livraison.
3. Choisir d'abord les mesures : part des versions nécessitant un correctif urgent, délai de mise en production d'un changement, fréquence de déploiement, temps de rétablissement du service (les mesures DORA), et retours des ingénieurs.
4. Comparer les options dans les scénarios optimiste, probable et pessimiste ; se demander comment la réponse change si le bénéfice arrive plus tard ou plus petit qu'espéré.
5. Utiliser une matrice pondérée et un pré-mortem.

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et pour quand.
* Convenir d'abord des critères et de leur pondération.
* Recueillir les éléments ci-dessus et consigner ce qui a été trouvé.
* Diffuser pour commentaires, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe choisit une approche par phases, elle devrait :

* Nommer un coach et demander à la première équipe de rendre compte honnêtement de ce qui a aidé et de ce qui n'a pas aidé.
* Prévoir dans les plans de livraison le temps de binômage et d'écriture de tests.
* Investir dans la chaîne de construction et de test avant de s'y fier.
* Convenir d'une règle d'arrêt : si une pratique n'aide pas après une période définie, l'équipe peut proposer de l'arrêter et consigner pourquoi.
* Laisser aux ingénieurs le choix de la façon de former des binômes et des outils ; les pratiques fixent le résultat, pas chaque détail de la manière de l'atteindre.

## Décisions liées

* [Le Manifeste agile](../manifeste-agile/) : la décision plus large sur les valeurs que ces pratiques soutiennent.
* [Choisir nos cadres de technologies de l'information](../cadres-technologies-information/) : comment XP s'articule avec d'autres cadres.
* Décisions pas encore prises : investissement dans la chaîne et l'outillage ; modèle de propriété du code.

## Notes liées

* Points ouverts : échantillonner les correctifs urgents récents ; interroger les ingénieurs sur leurs réserves envers le binômage et les tests ; vérifier ce que la chaîne de construction sait faire aujourd'hui.
* En savoir plus :
  * Wikipédia : [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO : [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Vidéo : [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Lecture : [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
