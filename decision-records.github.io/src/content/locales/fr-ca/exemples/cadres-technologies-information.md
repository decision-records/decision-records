# Choisir nos cadres de technologies de l'information

* Statut : demande de commentaires
* Date : 2026-10-14
* Décideur(s) : directeur des systèmes d'information et directeur technique (à confirmer)
* Propriétaire : responsable des opérations technologiques

Résumé : travail en cours. Ceci est un point de départ pour un groupe technologique à qui l'on a demandé d'adopter plusieurs cadres (par exemple ITIL, le Manifeste agile, l'Extreme Programming et Six Sigma) et qui doit décider lesquels utiliser, pour quel travail et dans quel ordre. Il montre comment une équipe peut cadrer la question, débattre des options et recueillir des informations. Il n'enregistre aucune décision.

## Problème

Différents dirigeants ont demandé au groupe technologique d'adopter ITIL pour la gestion des services, le Manifeste agile pour la livraison, l'Extreme Programming pour l'ingénierie et Six Sigma pour la qualité, parfois dans les mêmes équipes et à la même période. Chaque demande est raisonnable isolément, mais ensemble elles se chevauchent, utilisent des vocabulaires différents et demandent aux gens de changer plus vite qu'ils ne peuvent l'absorber.

Les questions auxquelles répondre :

* Quel problème chaque cadre résout-il, et pour quel type de travail ?
* Où se chevauchent-ils ou entrent-ils en conflit, et lequel doit primer ?
* Dans quel ordre les introduire, et combien de changements une équipe peut-elle absorber à la fois ?
* Comment saurons-nous si la combinaison aide ?

## Hypothèses

Chaque hypothèse est à vérifier.

* **Chaque cadre fonctionne le mieux sur le type de travail pour lequel il a été conçu.** Vérification : lire les sources et parler à des personnes qui ont utilisé chaque cadre.
* **Les équipes peuvent absorber un nouveau cadre à la fois**, pas plusieurs. Vérification : demander aux équipes quels changements sont déjà en cours et de quelle capacité elles disposent.
* **Les sponsors accepteront d'attendre** s'ils connaissent l'ordre et la raison. Vérification : leur parler tôt.
* **Une frontière écrite entre les cadres réduira les conflits.** Vérification : en rédiger une et la tester sur de vrais exemples de conflit.

## Contraintes

* Le groupe a une capacité de changement limitée à chaque période.
* Les cadres utilisent des vocabulaires différents : les termes communs, tels qu'incident, changement, version et défaut, doivent être définis une seule fois.
* L'adoption complète de plusieurs cadres pourrait prendre des années.
* Inconnu, à confirmer : pratiques actuelles, attentes contractuelles ou d'audit et cadres déjà en usage.

## Options envisagées

Pour chaque option, estimer la valeur, les coûts, le calendrier et les capacités nécessaires, et noter les éléments de preuve qui feraient changer l'équipe d'avis.

* **Adopter partout chaque cadre demandé.**
  * Valeur : chaque sponsor obtient ce qu'il a demandé.
  * Risques : surcharge ; consignes contradictoires (par exemple approbations de changement fixes contre livraison continue) ; impossible de dire quel changement a causé quel résultat.
* **Adopter un seul cadre comme norme unique.**
  * Valeur : simple à expliquer.
  * Risques : aucun cadre ne couvre aussi bien l'exploitation des services, la livraison de produit, la pratique d'ingénierie et la qualité.
* **Attribuer chaque cadre au type de travail auquel il convient, et les introduire progressivement un par un.** Par exemple les pratiques ITIL pour exploiter les services en production, les valeurs du Manifeste agile pour la façon dont les équipes de livraison planifient et travaillent, les pratiques de l'Extreme Programming pour construire du logiciel et Six Sigma pour les processus où les défauts peuvent être mesurés.
  * Valeur : plus clair pour les équipes ; plus facile à apprendre.
  * Postes de coût : un document de frontière écrit ; coordination ; un long programme.
* **Adopter une norme ou une gouvernance chapeau** comme l'ISO/IEC 38500 (gouvernance des technologies de l'information) ou l'ISO/IEC 20000-1, et laisser les équipes choisir leurs méthodes à l'intérieur.
* **N'en adopter aucun en bloc** ; choisir des pratiques qui répondent aux problèmes mesurés du groupe.

## Argumentation

Points de débat à prévoir :

* **Cadres ou résultats ?** Le but est de meilleurs résultats pour les clients, pas d'adopter des cadres. Quels résultats comptent le plus ?
* **Conflits.** Quand les consignes entrent en conflit, qui tranche ?
* **Ordre.** Lequel d'abord : celui qui subit le plus de pression de ses sponsors, ou celui qui soutient les autres ?
* **Vocabulaire.** Des mots communs réduisent la friction, mais une fausse équivalence masque des différences réelles.

Comment l'équipe pourrait évaluer les coûts et les arbitrages :

1. Lister d'abord les problèmes et les résultats souhaités, avec des mesures (par exemple celles de la recherche DORA sur la performance de livraison logicielle, plus des mesures de service et de qualité).
2. Pour chaque cadre, estimer les coûts selon les termes propres à l'organisation : formation, changement de processus, outillage, temps perdu et support continu. Donner des fourchettes.
3. Estimer la capacité de changement de chaque équipe et séquencer pour qu'aucune n'en porte plus qu'elle ne peut en absorber.
4. Comparer les options dans les scénarios optimiste, probable et pessimiste ; choisir celle qui est la plus facile à ajuster si les éléments changent.
5. Réexaminer après les deux premiers cadres et revoir l'ordre si les éléments suggèrent un meilleur ordre.

## Décision

**Pas encore décidé.** Ceci est un point de départ. Une équipe qui l'utilise doit remplacer cette section par sa propre décision.

Manière suggérée d'aboutir à une décision :

* Confirmer qui décide et qui doit être consulté (y compris les sponsors).
* Convenir d'abord des critères et de leur pondération.
* Recueillir les éléments ci-dessus et consigner ce qui a été trouvé.
* Diffuser pour commentaires, puis décider et mettre à jour le Statut.

## Implications

Si l'équipe décide d'attribuer les cadres par type de travail et de les introduire progressivement, elle devrait :

* Nommer un responsable du document de frontière et un moyen de trancher les conflits, avec escalade.
* Ne démarrer qu'un cadre à la fois dans une équipe, et commencer le suivant seulement quand le précédent a atteint ses propres mesures de sortie.
* Dire dès maintenant aux sponsors des cadres suivants l'ordre et la raison.
* Définir une seule fois les termes communs, dans le document de frontière.
* Réexaminer l'ensemble de l'approche après les deux premiers cadres.

## Décisions liées

* [Le Manifeste agile](../manifeste-agile/), [ITIL 5](../itil-5/), [L'Extreme Programming](../extreme-programming/) et [Six Sigma](../six-sigma/) : les décisions sur chaque cadre.
* [Cadres de gestion](../cadres-de-gestion/) : le schéma général de phasage.
* Décisions pas encore prises : outillage ; ordre des cadres ultérieurs.

## Notes liées

* Points ouverts : lister les pratiques actuelles ; demander aux sponsors quels résultats ils souhaitent ; rédiger un premier document de frontière.
* En savoir plus :
  * Wikipédia : [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO : [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Vidéo : [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Lecture : [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
