# Modèles de registre de décision

Deux modèles, tous deux en Markdown simple : copiez celui que vous voulez dans un nouveau fichier et remplissez-le.

## Choisir le modèle à utiliser

Utilisez par défaut le **modèle allégé** : la plupart des décisions n'ont besoin que de ses six champs, et une page qui dépasse cela correspond de toute façon généralement à plus d'une décision.

Passez au **modèle complet** quand une décision est à fort enjeu, compte plusieurs parties prenantes dont l'avis importe individuellement, ou nécessite réellement une analyse structurée des coûts / SWOT / PEST pour défendre le choix plus tard. Voir la [liste de contrôle](../liste-de-controle/index.md#liste-de-contrôle--cette-décision-a-t-elle-besoin-dun-registre-de-décision-) pour la question plus large de savoir si une décision a besoin d'un registre, et le [guide](../guide/index.md#lanatomie-dun-registre-de-décision) pour la correspondance entre les champs des deux modèles.

## Modèle allégé

```markdown
# Titre (court, au présent, à la voix active, environ 50 caractères au plus)

- Statut : demande de commentaires | proposé | accepté | rejeté | obsolète | remplacé
- Date : AAAA-MM-JJ
- Décideur(s) : [nom(s) ou rôle(s) habilité(s) à l'accepter]
- Propriétaire : [qui maintient et revoit périodiquement ce registre]

## Contexte

Décrivez la situation et les contraintes qui ont rendu cette décision nécessaire, rédigées pour qu'un lecteur sans souvenir de la réunion comprenne pourquoi la question s'est posée.

## Options envisagées

Listez les alternatives réalistes, y compris « ne rien faire » le cas échéant, comme des faits et des arbitrages, et non comme une rangée d'hommes de paille qui rend l'option retenue manifestement correcte.

## Décision

Énoncez le choix en langage simple et actif : « Nous ferons X. » Pas un résumé des avantages et inconvénients, mais un énoncé clair de ce qui a été choisi.

## Conséquences

Dites ce qui change en conséquence : coûts, risques, décisions de suite et tout ce à quoi on renonce en ne choisissant pas une alternative. Que cela se lise « nous faisons désormais X au lieu de Y », et non comme un récapitulatif des avantages et inconvénients de la décision déjà prise.
```

Voir le [tutoriel](../tutoriel/index.md) pour un parcours complet de ce modèle, et [examples/index.md](../exemples/index.md) pour des exemples terminés et remplis.

## Modèle complet

```markdown
# Titre (court, au présent, à la voix active, environ 50 caractères au plus)

- Statut : demande de commentaires | proposé | accepté | rejeté | obsolète | remplacé
- Date : AAAA-MM-JJ
- Décideur(s) : [nom(s) ou rôle(s) habilité(s) à l'accepter]
- Propriétaire : [qui maintient et revoit périodiquement ce registre]

Résumé : une ou deux phrases sur la position actuelle et les besoins encore ouverts.

## Problème

Décrivez le problème que vous voulez traiter. Ne laissez aucune question sur la raison pour laquelle vous le traitez maintenant.

Adoptez une approche minimaliste. Ne traitez que les problèmes qui doivent l'être aux différents moments du cycle de vie.

Vous pouvez vouloir ajouter des informations de regroupement, comme des étiquettes, des mots-clés, des liens vers la base de connaissances, etc.

## Hypothèses

Décrivez les hypothèses sous-jacentes de l'environnement dans lequel vous prenez la décision.

Veillez à traiter tout attribut de qualité pertinent, aussi appelé exigence transversale.

Les hypothèses types peuvent concerner le périmètre, le coût, le calendrier, la technologie, la disponibilité des ressources, les besoins de qualité de service, les accords de niveau de service, etc.

Notez que les contraintes d'environnement (comme les normes technologiques acceptées, l'architecture d'entreprise, les modèles couramment employés, etc.) peuvent limiter les options que vous envisagez.

## Contraintes

Consignez toute contrainte supplémentaire sur l'environnement que cette décision pourrait imposer.

Veillez à traiter tout attribut de qualité pertinent, aussi appelé exigence transversale, comme ci-dessus.

Les contraintes types peuvent concerner les choix de plateforme, la sélection de fournisseurs, la facilité à revenir sur la décision, etc.

## Options envisagées (positions)

Listez les positions, c'est-à-dire les options viables que vous envisagez ou avez envisagées.

Utilisez des faits et des données, pas des opinions. Les positions demandent souvent de longues explications, parfois même des modèles et des schémas.

La liste n'a pas à être exhaustive ; en revanche, vous ne voulez pas entendre la question « Avez-vous pensé à... ? » lors d'une revue finale, car cela entraînerait une perte de crédibilité et la remise en cause d'autres décisions d'architecture.

Cette section aide aussi à s'assurer que vous avez entendu les avis des autres ; énoncer explicitement d'autres avis aide à rallier leurs défenseurs à votre décision.

### Analyse des coûts (facultatif)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Exemples :

- Lancement, comme les coûts de mise en place, le temps et les ressources.

- Exploitation, comme le support et la maintenance

- Formation, comme la montée en compétences et la conduite du changement

- Licences, comme les accords contractuels et les engagements juridiques

- Mesure, comme la bande passante et l'usage du processeur

### Analyse SWOT (facultatif)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

- Forces

- Faiblesses

- Opportunités

- Menaces

### Analyse PEST (facultatif)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

- Facteurs politiques

- Facteurs économiques

- Facteurs sociaux

- Facteurs technologiques

Certaines équipes aiment ajouter celles-ci comme catégories à part entière :

- Facteurs juridiques : nous préférons les inclure dans les facteurs politiques.

- Facteurs réglementaires : nous préférons les inclure dans les facteurs politiques.

- Facteurs environnementaux : nous préférons les inclure dans les facteurs économiques.

- Facteurs démographiques : nous préférons les inclure dans les facteurs sociaux.

### Autres analyses (ajoutez vos propres idées ici)

Ajoutez vos propres idées ici...

## Avis

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

- De l'équipe, idéalement rédigés par le coéquipier lui-même.

- D'autres parties prenantes internes, idéalement rédigés par la partie prenante elle-même.

- De personnes externes, comme des conseillers, évaluateurs ou réviseurs tiers, etc.

Pour chaque avis, précisez :

- Qui donne l'avis

- Quels autres candidats ont été envisagés,

- Comment l'auteur a-t-il évalué les candidats ?

- Pourquoi l'auteur a-t-il choisi le vainqueur ?

- Que s'est-il passé depuis ?

- Sachant ce que vous savez maintenant, que conseilleriez-vous de faire autrement ?

### Titre de l'avis 1 (ajoutez le vôtre ici)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Expliquez votre avis ici.

### Titre de l'avis 2 (ajoutez le vôtre ici)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Expliquez votre avis ici.

### Titre de l'avis 3 (ajoutez le vôtre ici)

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Expliquez votre avis ici.

## Argumentation

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Expliquez pourquoi vous avez choisi une position.

Les décisions doivent être guidées par un but. Pour montrer votre responsabilité, reliez explicitement vos décisions aux objectifs ou aux exigences.

L'argumentation est probablement aussi importante que la décision elle-même.

Elle n'a pas à être exhaustive ; en revanche, vous ne voulez pas entendre la question « Avez-vous pensé à... ? » lors d'une revue finale, car (comme plus haut) cela entraînerait une perte de crédibilité et la remise en cause d'autres décisions d'architecture.

## Implications

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Énoncez clairement les implications de votre décision. Cela peut être très efficace pour obtenir l'adhésion et créer une feuille de route d'exécution.

Par exemple, une décision peut introduire le besoin de prendre d'autres décisions, créer de nouvelles exigences ou modifier des exigences existantes ; imposer des contraintes supplémentaires à l'environnement ; exiger de renégocier le périmètre ou le calendrier avec les clients ; ou nécessiter une formation supplémentaire du personnel.

## Décisions liées

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Listez ici toute décision liée.

Nous avons constaté qu'en pratique une matrice de traçabilité, des arbres de décision ou des métamodèles sont plus utiles. Les métamodèles sont utiles pour montrer sous forme de schéma des relations complexes (comme les modèles Rose).

## Exigences liées

Résumé : expliquez brièvement cette section et, idéalement, soulignez les valeurs atypiques.

Listez ici toute exigence liée.

Nous avons trouvé plus pratique de faire référence à une matrice de traçabilité. Vous pouvez évaluer la contribution de chaque décision à la satisfaction de chaque exigence, puis évaluer dans quelle mesure l'exigence est satisfaite par l'ensemble des décisions. Si une décision ne contribue à satisfaire aucune exigence, ne prenez pas cette décision.

## Artefacts liés

Listez ici tout artefact lié.

Les exemples sont tout document de périmètre, document de planification, modèle de processus métier, etc., sur lesquels cette décision a un effet.

## Principes liés

Si l'entreprise dispose d'un ensemble de principes convenus, veillez à ce que la décision soit cohérente avec un ou plusieurs d'entre eux. Cela aide à garantir l'alignement entre domaines ou systèmes.

## Notes liées

Comme les processus de décision peuvent prendre beaucoup de temps, nous avons trouvé utile de consigner les notes et les problèmes que l'équipe discute pendant le processus de concertation.
```
