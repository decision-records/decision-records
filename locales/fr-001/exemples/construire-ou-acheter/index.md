# Construire ou acheter pour un projet

* Statut : demande de commentaires
* Date : 2026-06-01
* Décideur(s) : directeur des opérations (à confirmer)
* Propriétaire : directeur de l'exploitation

Résumé : travail en cours. Ceci est un point de départ pour une équipe qui a besoin d'une nouvelle capacité, ici un outil de planification destiné aux clients, et qui hésite entre le construire, l'acheter ou faire quelque chose d'intermédiaire. Il montre comment une équipe peut cadrer la question, débattre des options et recueillir des informations. Il n'enregistre aucune décision.

## Problème

Une entreprise de services planifie son travail avec un processus manuel, fondé sur des tableurs, qui a causé des doubles réservations et abîmé des relations avec des clients. Une solution est nécessaire dans un délai limité, et l'équipe doit décider s'il faut construire un outil en interne ou en acheter un existant.

Les questions auxquelles répondre :

* Que doit faire l'outil (exigences), et lesquelles sont essentielles ?
* Dans quelle mesure chaque voie répond-elle aux exigences, dans le temps disponible ?
* Quel est le coût complet de chaque voie sur sa durée de vie utile, y compris ce à quoi l'équipe renonce en la choisissant ?
* Que se passe-t-il si les exigences changent, ou si la voie choisie échoue ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **La plupart des besoins de planification sont communs à d'autres organisations, donc un produit existant peut les couvrir.** Vérification : lister les exigences et demander aux fournisseurs de montrer comment chacune est satisfaite.
* **Les cas inhabituels sont assez peu nombreux pour être traités par contournement.** Vérification : compter leur fréquence et écrire le contournement de chacun.
* **Les ingénieurs internes peuvent construire et maintenir l'outil.** Vérification : estimer l'effort avec les personnes concernées et demander ce qu'elles ne feraient pas à la place.
* **Les délais annoncés par les fournisseurs sont réalistes.** Vérification : parler à des clients de référence de taille comparable, y compris ceux dont les projets ont pris du retard.

## Contraintes

* Une solution est nécessaire dans une période fixe.
* D'autres initiatives produit engagées doivent garder leurs calendriers : on ne peut donc pas simplement prendre de la capacité d'ingénierie sur elles.
* L'outil traite des données clients : la sécurité et la confidentialité doivent être vérifiées.
* Inconnu, à confirmer : besoins d'intégration, croissance attendue, et ce qui se passe à la fin d'un contrat de fournisseur.

## Options envisagées

Pour chaque option, estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui feraient changer l'équipe d'avis.

* **Construire en interne.**
  * Valeur : adéquation exacte aux règles de l'organisation ; maîtrise complète de la feuille de route.
  * Postes de coût : conception, développement, tests, hébergement, support et maintenance pendant toute la vie de l'outil ; coût d'opportunité de ce que les ingénieurs ne construisent pas à la place.
  * Forme du calendrier : souvent plus long que les premières estimations ; la valeur arrive à la fin.
  * Capacités nécessaires : gestion de produit ; ingénierie ; exploitation.
* **Acheter un produit existant.**
  * Valeur : plus rapide ; coûts étalés ; bénéficie des améliorations du fournisseur.
  * Postes de coût : licences, mise en œuvre, configuration, formation, intégration, administration et sortie.
  * Risques : écarts par rapport aux exigences ; évolutions du fournisseur ; enfermement.
* **Acheter un produit et commander des développements spécifiques au fournisseur.** Comble les écarts, mais ajoute du temps et des coûts, et comporte un risque de livraison.
* **Assembler à partir de plus petits outils** (par exemple une plateforme à faible code ou une combinaison de services existants).
* **Améliorer d'abord le processus manuel** par une solution provisoire, pour gagner du temps en vue d'une meilleure décision.

## Argumentation

Points de débat à prévoir :

* **Adéquation ou rapidité.** Une adéquation parfaite qui arrive tard peut valoir moins qu'une bonne adéquation maintenant.
* **Cœur de métier ou contexte ?** La planification fait-elle partie de ce qui distingue l'entreprise ? Sinon, l'achat est généralement favorisé.
* **Coûts cachés.** Construire entraîne une maintenance continue ; acheter entraîne des licences, de l'intégration et une sortie.
* **Réversibilité.** Quel choix est le plus facile à défaire s'il se révèle mauvais ?

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Rédiger les exigences et les classer. Noter chaque voie par rapport à elles et relever les écarts.
2. Estimer le coût total de possession sur un horizon défini selon les termes propres à l'organisation : coûts ponctuels, coûts récurrents, temps du personnel interne, intégration, formation et sortie. Donner des fourchettes.
3. Estimer le coût du retard : l'effet de chaque période supplémentaire de doubles réservations.
4. Comparer les options dans les scénarios optimiste, probable et pessimiste, et tester l'effet de changements d'exigences.
5. Utiliser une matrice pondérée (adéquation, rapidité, coût, risque, maîtrise, réversibilité) et un pré-mortem.

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et qui doit être d'accord.
* Convenir d'abord des exigences et de la pondération.
* Recueillir les éléments ci-dessus et consigner ce qui a été trouvé.
* Diffuser pour commentaires, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe décide d'acheter, elle devrait :

* Nommer un responsable de la mise en œuvre et planifier la formation dans le délai du fournisseur.
* Documenter les contournements pour les cas non pris en charge, consigner leur fréquence d'usage et les réexaminer après usage réel.
* Définir ce qui déclencherait une décision ultérieure sur des développements spécifiques.
* Confirmer qu'aucune capacité d'ingénierie n'est prélevée sur les initiatives engagées.

## Décisions liées

* [Choisir une plateforme CRM](../choix-fournisseur-crm/) : un choix semblable pour un autre système.
* [Choisir la base de données principale](../choix-base-de-donnees/) : une instance technologique des questions de construction/achat et d'enfermement.
* [Réduire le risque de concentration sur un seul fournisseur](../dependance-fournisseur-unique/) : la dépendance à un fournisseur.
* Décisions pas encore prises : développements spécifiques d'intégration ; conservation des données.

## Notes liées

* Points ouverts : rédiger et classer les exigences ; demander aux fournisseurs des clients de référence ; estimer avec les ingénieurs l'effort de construction.
* En savoir plus :
  * Wikipédia : [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO : [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Vidéo : [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
