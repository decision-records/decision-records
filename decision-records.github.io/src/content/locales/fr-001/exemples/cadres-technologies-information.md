# Choisir nos cadres de technologies de l'information

* Statut : accepté
* Date : 2026-10-14
* Décideur(s) : directeur des systèmes d'information et directeur technique
* Propriétaire : responsable des opérations technologiques

## Contexte

Différents dirigeants ont demandé à notre groupe technologique de 180 personnes d'adopter ITIL pour la gestion des services, le Manifeste agile pour la livraison, l'Extreme Programming pour l'ingénierie et Six Sigma pour la qualité, parfois dans les mêmes équipes et dans le même trimestre. Chaque demande est raisonnable isolément, mais ensemble elles se chevauchent, utilisent des vocabulaires différents et demandent aux gens de changer leur manière de travailler plus vite qu'ils ne peuvent l'absorber. Nous devons décider quels cadres nous utilisons, pour quels types de travail et dans quel ordre, afin que les équipes aient une seule manière de travailler cohérente et non quatre programmes concurrents.

## Options envisagées

* **Adopter partout tous les cadres demandés.** Donne à chaque promoteur ce qu'il a demandé, mais surcharge les équipes, produit des consignes contradictoires (par exemple approbations de changement fixes contre livraison continue) et rend impossible de dire quel changement a causé quel résultat.
* **Adopter un seul cadre comme norme unique.** Simple à expliquer, mais aucun cadre isolé ne couvre aussi bien les opérations de service, la livraison de produit, la pratique d'ingénierie et la qualité, et le groupe serait forcé d'étirer un cadre au-delà de ce pour quoi il a été conçu.
* **Attribuer chaque cadre au type de travail auquel il convient, et les introduire progressivement un par un.** Utiliser les pratiques ITIL pour exploiter les services en production, les valeurs du Manifeste agile pour la façon dont les équipes de livraison planifient et travaillent, les pratiques de l'Extreme Programming pour les équipes d'ingénierie qui construisent du logiciel, et Six Sigma pour les processus où les défauts peuvent être mesurés. Chaque cadre est introduit séparément avec ses propres indicateurs. Plus clair pour les équipes et plus facile à apprendre, mais demande une frontière écrite entre les cadres et prend environ deux ans.

## Décision

Nous attribuerons chaque cadre au type de travail auquel il convient et les introduirons progressivement un par un : d'abord les valeurs du Manifeste agile pour les équipes de livraison, puis les pratiques ITIL pour les services en production, puis les pratiques de l'Extreme Programming pour les équipes d'ingénierie, puis Six Sigma pour les processus mesurables. Nous tiendrons un court document unique qui dit quel cadre s'applique à quel travail et ce qui prévaut quand les consignes entrent en conflit.

## Conséquences

* Le responsable des opérations technologiques sera responsable du document de frontière des cadres et tranchera les conflits entre cadres, avec escalade au DSI et au directeur technique.
* Nous ne démarrerons qu'un cadre à la fois dans une équipe et ne commencerons le suivant que lorsque le précédent aura atteint ses propres indicateurs de sortie ; les décisions individuelles suivent le modèle de [Introduire progressivement un cadre de gestion](../cadres-de-gestion/).
* Les promoteurs des cadres suivants attendront ; nous leur dirons dès maintenant l'ordre et la raison pour qu'ils puissent planifier.
* Les équipes utiliseront un vocabulaire commun pour les termes que partagent les cadres, tels qu'incident, changement, version et défaut, définis dans le document de frontière.
* Nous réexaminerons l'ensemble de l'approche après les deux premiers cadres, et reverrons l'ordre si les preuves montrent qu'un autre nous aurait mieux servis.

## Liés

* Voir [Introduire progressivement le Manifeste agile](../manifeste-agile/), [Introduire progressivement ITIL 5](../itil-5/), [Introduire progressivement l'Extreme Programming](../extreme-programming/) et [Introduire progressivement Six Sigma](../six-sigma/) pour les décisions sur chaque cadre, et [Introduire progressivement un cadre de gestion](../cadres-de-gestion/) pour le modèle général.
