# Choisir la base de données principale

* Statut : demande de commentaires
* Date : 2026-03-22
* Décideur(s) : directeur technique (à confirmer)
* Propriétaire : responsable de l'ingénierie de plateforme

Résumé : travail en cours. Ceci est un point de départ pour une équipe qui choisit la base de données principale d'un produit en croissance. C'est le seul exemple technologique de cet ensemble, et il montre que les décisions d'architecture suivent le même schéma que les décisions d'entreprise ailleurs dans cette collection. Il montre comment une équipe peut cadrer la question, débattre des options et recueillir des informations. Il n'enregistre aucune décision.

## Problème

La base de données actuelle approche de ses limites de montée en charge, et l'équipe d'ingénierie s'attend à les atteindre avant longtemps. Un remplacement, ou une autre manière de monter en charge, doit être choisi avant le prochain lancement majeur du produit.

Les questions auxquelles répondre :

* Quelles sont les limites réelles aujourd'hui (lectures, écritures, stockage, latence, exploitation), et à quelle vitesse les approchons-nous ?
* Quelles qualités comptent le plus (cohérence, disponibilité, latence, coût, exploitabilité, conformité), et dans quel ordre ?
* Faut-il faire monter en charge l'existant, passer à un service géré ou exploiter quelque chose nous-mêmes ?
* Comment migrerions-nous, et comment en sortirions-nous si nous le devions ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **La projection de croissance est réaliste.** Vérification : la comparer à la croissance passée et aux plans de vente et de produit ; envisager un cas haut et un cas bas.
* **La base actuelle peut encore monter en charge, à un certain prix.** Vérification : demander au fournisseur et à l'équipe quelle marge reste et ce qu'elle coûte.
* **Notre charge de travail convient à une conception évolutive horizontalement.** Vérification : étudier les requêtes et les transactions ; repérer les opérations qui exigent une forte cohérence entre enregistrements.
* **L'équipe peut exploiter l'option choisie.** Vérification : lister les compétences requises et qui les possède.

## Contraintes

* Le changement doit être prêt avant le lancement, avec une migration par phases qui ne le perturbe pas.
* Le coût récurrent doit tenir dans le budget approuvé.
* Les obligations de protection des données et de sécurité s'appliquent à tout choix.
* Inconnu, à confirmer : volume de données, exigences de conservation, exigences régionales, intégration avec d'autres systèmes et engagements envers les fournisseurs.

## Options envisagées

Pour chaque option, estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui feraient changer l'équipe d'avis.

* **Faire monter en charge la base actuelle verticalement** (une machine ou une formule plus grande).
  * Valeur : risque de migration le plus faible ; aucun changement d'application.
  * Risques : gagne un temps limité ; le coût monte brutalement.
* **Passer à un service de base de données géré et évolutif horizontalement.**
  * Valeur : supprime la montée en charge et une grande part du travail d'exploitation ; support du fournisseur.
  * Postes de coût : redevances récurrentes du service ; migration ; changements d'application ; frais de sortie des données.
  * Risques : dépendance envers les fonctions et les prix du fournisseur.
* **Passer à une base de données auto-hébergée et évolutive horizontalement.**
  * Valeur : coût récurrent potentiellement plus bas ; plus de maîtrise.
  * Postes de coût : construction de compétences d'exploitation ; charge d'astreinte ; outillage ; mises à niveau.
  * Risques : la charge d'exploitation peut être plus élevée que prévu.
* **Repenser la couche de données** (par exemple cache, réplicas en lecture, partitionnement ou séparation des charges) pour prolonger la base actuelle.
* **Utiliser des bases différentes pour des charges différentes** (persistance polyglotte), au prix de plus de systèmes à exploiter.

## Argumentation

Points de débat à prévoir :

* **Cohérence ou disponibilité.** Le théorème CAP dit qu'un système réparti partitionné ne peut garantir les deux. Lequel compte le plus pour chaque partie du produit ? Beaucoup de charges tolèrent une cohérence différée ; certaines non.
* **Géré ou auto-hébergé.** Coût de service plus élevé contre risque d'exploitation plus faible. Comment l'équipe doit-elle valoriser le temps des ingénieurs ?
* **Enfermement.** Que perd-on à utiliser une fonction propre à un fournisseur, et que gagne-t-on ?
* **Normes.** Dans quelle mesure s'appuie-t-on sur SQL (normalisé par l'ISO/IEC 9075) plutôt que sur un modèle de requêtes propre à un fournisseur ?

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Tester avec sa propre charge : créer un test de performance réaliste et mesurer chaque candidat sous charge attendue et de pointe, y compris dans des scénarios de panne.
2. Estimer le coût total de possession sur un horizon défini selon les termes propres à l'organisation : redevances de service ou licences, hébergement, migration, temps d'ingénierie, astreinte, formation, support et sortie. Donner des fourchettes.
3. Noter les candidats sur une matrice pondérée des qualités qui comptent (le modèle de qualité du produit ISO/IEC 25010 offre un vocabulaire pour cela), et tester la sensibilité aux pondérations.
4. Estimer le temps que gagne chaque option et ce qu'elle coûte quand la limite sera de nouveau atteinte.
5. Prévoir la sortie : comment les données et le code quitteraient-ils chaque choix ?

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et qui doit être consulté (sécurité, finance, produit).
* Convenir d'abord des critères et de leur pondération.
* Recueillir les éléments ci-dessus, y compris les résultats du test de performance, et consigner ce qui a été trouvé.
* Diffuser pour commentaires, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe décide de migrer, elle devrait :

* Planifier une migration par phases avec une période de fonctionnement en parallèle avant la bascule complète.
* Confirmer le budget des coûts récurrents.
* Prévoir des décisions ultérieures, par exemple sur le regroupement de connexions et les réplicas en lecture.
* Consigner le chemin de sortie prévu.

## Décisions liées

* [Construire ou acheter pour un projet](../construire-ou-acheter/) : raisonnement général de construction ou d'achat.
* [Réduire le risque de concentration sur un seul fournisseur](../dependance-fournisseur-unique/) : la dépendance à un seul fournisseur.
* Décisions pas encore prises : stratégie de cache et de réplicas ; conservation des données.

## Notes liées

* Points ouverts : recueillir des mesures de production ; décrire les caractéristiques de la charge ; présélectionner des candidats pour un test de performance.
* En savoir plus :
  * Wikipédia : [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO : [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Vidéo : [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
