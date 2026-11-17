# Réduire le risque de concentration sur un seul fournisseur

* Statut : demande de commentaires
* Date : 2026-05-20
* Décideur(s) : directeur des opérations (à confirmer)
* Propriétaire : responsable des achats

Résumé : travail en cours. Ceci est un point de départ pour une équipe qui envisage comment réagir à une forte dépendance envers un seul fournisseur pour des services critiques. Il montre comment une équipe peut cadrer le risque, débattre des options et recueillir des informations. Il n'enregistre aucune décision.

## Problème

Une revue interne des risques a constaté qu'une grande part des dépenses d'infrastructure critique va à un seul fournisseur. Ce fournisseur a subi une panne imprévue qui a perturbé un service destiné aux clients, et ses prix ont augmenté sans plafond contractuel. Continuer ainsi expose l'organisation à un risque de disponibilité et à une hausse incontrôlée des coûts.

Les questions auxquelles répondre :

* Quelle part de ce dont nous dépendons est réellement concentrée, et que devient l'activité si le fournisseur défaille ou augmente à nouveau ses prix ?
* Quelle est la probabilité et la gravité de ces événements, et que sommes-nous prêts à accepter ?
* Quels sont les moyens réalistes de réduire le risque, à quel coût et avec quelle rapidité ?
* À quoi ressemblerait une sortie ou une solution de repli sûre ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **La panne et la hausse de prix reflètent une tendance durable**, et non un épisode isolé. Vérification : examiner l'historique des incidents, les communications du fournisseur et les prix du marché.
* **Un second fournisseur peut faire tourner une partie de la charge critique avec une qualité acceptable.** Vérification : présélectionner des candidats et mener un essai limité.
* **Le fournisseur principal améliorera ses conditions s'il voit des alternatives crédibles.** Vérification : demander une proposition de renouvellement pendant l'évaluation d'autres options.
* **Une migration par phases peut éviter toute interruption du service.** Vérification : examiner les dépendances techniques et les limites du contrat sur le déplacement de la charge.

## Contraintes

* Le service destiné aux clients ne doit pas être perturbé pendant une transition.
* Les clauses du contrat peuvent limiter la vitesse à laquelle la charge peut être déplacée sans pénalité, et prévoir des frais de sortie.
* Tout nouveau fournisseur doit être évalué selon les mêmes critères que le premier.
* Inconnu, à confirmer : portabilité des données, services propriétaires utilisés, frais de sortie et attentes réglementaires sur le risque lié aux tiers.

## Options envisagées

Pour chaque option, estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui feraient changer l'équipe d'avis.

* **Accepter le risque et surveiller.**
  * Valeur : aucun coût ni effort à court terme.
  * Risques : laisse subsister l'exposition aux pannes et aux prix ; la revue des risques peut ne pas l'admettre au niveau de concentration actuel.
* **Renégocier avec le fournisseur actuel** les niveaux de service, un plafond de prix et de meilleures conditions de sortie ; rester mono-fournisseur.
  * Valeur : traite le prix et la responsabilité.
  * Risques : ne supprime pas le point de défaillance unique.
* **Diversifier : déplacer une partie de la charge critique vers un second fournisseur** et renégocier le contrat principal pour le reste.
  * Valeur : réduit la concentration ; renforce la position de négociation.
  * Postes de coût : sélection du fournisseur ; effort de migration ; coûts d'exploitation en double pendant un temps ; complexité opérationnelle accrue (deux jeux de procédures et de compétences).
  * Forme du calendrier : par phases, avec des points de contrôle.
* **Renforcer la résilience sans second fournisseur** : sauvegardes, procédures de reprise testées et changements de conception rendant un changement possible plus tard.
* **Basculer entièrement vers un autre fournisseur.** Perturbation la plus forte ; justifié seulement si le fournisseur actuel est inacceptable.

## Argumentation

Points de débat à prévoir :

* **Appétence au risque.** Quel niveau de dépendance est acceptable ? Qui le décide ?
* **Coût de la résilience.** La redondance a un prix récurrent ; l'assurance vaut-elle son coût, et pour quels services ?
* **Complexité.** Deux fournisseurs ajoutent de la complexité opérationnelle. L'équipe a-t-elle les compétences ?
* **Enfermement.** Dans quelle mesure l'organisation dépend-elle des fonctions propriétaires d'un fournisseur, et que coûterait un changement ?

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Identifier les services critiques et leurs dépendances. Pour chacun, estimer l'impact d'une panne de différentes durées sur l'activité, sous forme de fourchettes.
2. Estimer la probabilité de défaillance et de changement de prix à partir de l'historique et des éléments fournis par le fournisseur, en tenant compte de l'incertitude.
3. Chiffrer chaque option : migration, coûts d'exploitation en double, outillage, formation, achats et complexité durable ; inclure les coûts de sortie des deux fournisseurs.
4. Comparer la réduction attendue du risque au coût, et tester la sensibilité aux estimations de probabilité.
5. Définir des indicateurs avancés et des seuils de déclenchement, par exemple un manquement aux niveaux de service, un changement de prix ou un événement de sécurité.

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et quelle appétence au risque s'applique.
* Convenir d'abord des critères et de leur pondération.
* Recueillir les éléments ci-dessus et consigner ce qui a été trouvé.
* Diffuser pour commentaires, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe décide de diversifier, elle devrait :

* Mener un processus de sélection de fournisseur selon les mêmes critères que l'original.
* Planifier une migration par phases qui évite toute interruption.
* Renégocier le contrat principal en parallèle.
* Accepter la complexité opérationnelle accrue, avec un guide d'exploitation pour chaque fournisseur.
* Rendre compte régulièrement de la concentration et des niveaux de service jusqu'à l'atteinte de l'objectif.

## Décisions liées

* [Choisir la base de données principale](../choix-base-de-donnees/) : une instance technologique de la même question d'enfermement.
* [Construire ou acheter pour un projet](../construire-ou-acheter/) : choix d'approvisionnement voisins.
* Décisions pas encore prises : plan de sortie et de continuité ; sélection du fournisseur.

## Notes liées

* Points ouverts : lister les services critiques et leurs fournisseurs ; réunir l'historique des incidents ; lire le contrat pour les conditions de sortie et de prix.
* En savoir plus :
  * Wikipédia : [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO : [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Vidéo : [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Lecture : [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
