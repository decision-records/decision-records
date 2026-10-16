# Choisir la base de données principale

* Statut : accepté
* Date : 2026-03-22
* Décideur(s) : directeur technique
* Propriétaire : responsable de l'ingénierie de plateforme

## Contexte

Notre base de données actuelle approche de ses limites de montée en charge avec la croissance prévue sur 12 mois, et l'équipe d'ingénierie doit choisir son remplaçant avant le prochain grand lancement de produit. Elle est incluse ici comme l'unique exemple technologique de cet ensemble, pour montrer que les décisions d'architecture suivent exactement le même modèle que les exemples d'entreprise ailleurs dans cette collection : la discipline est générale, pas propre à un domaine.

## Options envisagées

* **Faire évoluer verticalement la base de données actuelle.** Le risque de migration le plus faible et aucun changement d'application requis, mais l'ingénierie estime que cela ne donne que 6 à 9 mois avant de retrouver les mêmes limites, vu la croissance prévue.
* **Migrer vers la base de données A (gérée, extensible horizontalement).** Traite le plafond de montée en charge avec un solide support de l'éditeur et un parcours de migration bien documenté ; ajoute un coût récurrent de service géré.
* **Migrer vers la base de données B (auto-hébergée, extensible horizontalement).** Coût récurrent inférieur à l'option gérée, mais exige de bâtir une expertise d'exploitation interne que l'équipe n'a pas actuellement, et des vérifications de référence auprès d'entreprises homologues ont signalé une charge d'exploitation supérieure aux attentes.

## Décision

Nous migrerons vers la base de données A, l'option gérée et extensible horizontalement, en privilégiant la réduction du risque de migration et le support de l'éditeur sur le coût récurrent plus faible de l'auto-hébergement.

## Conséquences

* L'ingénierie de plateforme planifiera une migration par phases avec une période d'exécution en parallèle avant la bascule complète, pour ne pas perturber le prochain lancement de produit.
* Le coût d'infrastructure récurrent augmente ; la Finance l'a approuvé dans le cadre du budget d'investissement de croissance.
* Nous renonçons au coût plus faible de l'option auto-hébergée en échange d'éviter le risque opérationnel de bâtir une expertise interne que nous n'avons pas actuellement.
* Une décision d'architecture de suite sera nécessaire sur la stratégie de regroupement de connexions et de réplicas en lecture une fois la migration initiale terminée.

## Liés

* Cette décision répond à la même projection de croissance sur 12 mois que celle citée dans la planification de capacité de l'exercice en cours ; aucun registre de décision antérieur sur les bases de données n'existe à remplacer.
