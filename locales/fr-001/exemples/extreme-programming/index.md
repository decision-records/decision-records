# Introduire progressivement l'Extreme Programming

* Statut : accepté
* Date : 2025-10-06
* Décideur(s) : responsable de l'ingénierie
* Propriétaire : responsable d'ingénierie

## Contexte

Nos équipes produit livrent des fonctionnalités par gros lots, et les défauts trouvés tard coûtent cher : une version sur cinq nécessite un correctif urgent. Nous voulons adopter des pratiques de l'Extreme Programming (XP), comme le développement piloté par les tests, la programmation en binôme, l'intégration continue, les petites livraisons et la propriété collective du code. Ces pratiques se soutiennent mutuellement, mais elles changent aussi la façon dont les ingénieurs travaillent au quotidien, et les adopter toutes d'un coup risque de rencontrer de la résistance et d'être appliqué de manière superficielle.

## Options envisagées

* **Adopter toutes les pratiques en même temps dans toutes les équipes.** Les pratiques se renforcent mutuellement, mais le changement est important, et les équipes sans les compétences de base les abandonneraient probablement en quelques semaines.
* **Introduire les pratiques dans un ordre choisi, équipe par équipe.** Commencer par l'intégration continue et les tests automatisés (les fondations), puis les petites livraisons et la programmation en binôme, puis le développement piloté par les tests, les équipes adoptant les pratiques à leur rythme. Plus lent, mais chaque pratique a le temps de s'installer, et les premières rendent les suivantes possibles.
* **Adopter seulement les pratiques faciles.** Peu d'effort, mais cela laisserait de côté les pratiques qui apportent le plus de bénéfice, comme les tests automatisés, et le bénéfice serait faible.

## Décision

Nous introduirons progressivement les pratiques XP dans l'ordre : d'abord l'intégration continue et les tests automatisés, puis les petites livraisons et la programmation en binôme, puis le développement piloté par les tests. Une équipe commence au premier trimestre, et chaque équipe suivante la rejoint après que l'équipe précédente a maintenu son pipeline de livraison au vert pendant un mois.

## Conséquences

* Le responsable d'ingénierie accompagnera la première équipe, publiera ce qu'elle a appris et suivra la part des versions nécessitant un correctif urgent.
* Notre objectif est de faire passer cette part d'une version sur cinq à moins d'une sur vingt en un an.
* Les équipes auront du temps pour le binômage et l'écriture de tests intégré à leurs plans, et ne seront pas censées livrer le même nombre de fonctionnalités au premier trimestre.
* Les ingénieurs gardent le choix de la façon de former des binômes et des outils qu'ils utilisent ; les pratiques fixent le résultat, pas chaque détail de la manière dont il est atteint.
* Si une pratique n'aide pas après deux trimestres, l'équipe peut proposer de l'arrêter, et nous consignerons la raison.

## Liés

* Voir [Introduire progressivement le Manifeste agile](../manifeste-agile/) pour la décision plus large sur les valeurs que ces pratiques soutiennent.
