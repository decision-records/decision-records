# Aide / FAQ

Questions courantes que posent les dirigeants lors de l'adoption des registres de décision, plus un court glossaire.

Sommaire :

* [Foire aux questions](#foire-aux-questions)
* [Dépannage](#dépannage)
* [Glossaire](#glossaire)
* [Où aller ensuite](#où-aller-ensuite)

## Foire aux questions

**En quoi est-ce différent d'un compte rendu de réunion ?**
Un compte rendu consigne ce qui a été *discuté* ; un registre de décision saisit ce qui a été *décidé et pourquoi*, écrit pour se suffire sans le contexte de la réunion. Les comptes rendus sont une bonne matière première pour un registre de décision, mais ils le remplacent rarement.

**Combien de temps cela doit-il réellement prendre ?**
Pour un registre allégé sur une décision que vous comprenez déjà, 15 à 30 minutes. Ce temps est rarement perdu, car c'est le temps que vous passeriez sinon à réexpliquer le même raisonnement à chaque conversation future sur le sujet. Réservez les registres complets, avec analyse des coûts, SWOT/PEST et plusieurs avis documentés, aux décisions vraiment à fort enjeu.

**Qui devrait être responsable de notre journal des décisions ?**
Quelqu'un qui répond de l'équipe ou de la fonction qu'il couvre, souvent la même personne qui répondrait sinon de mémoire à « pourquoi avons-nous fait cela ? » un an plus tard. Dans les grandes organisations, un responsable de gouvernance léger (par exemple un chef de cabinet, un responsable de la stratégie ou un responsable tournant par fonction) peut tenir l'index sans approuver chaque décision individuelle.

**Et si le décideur et les parties prenantes ne sont pas d'accord ?**
Réglez le *processus* avant la *décision* : nommez à l'avance qui a l'autorité finale (une personne ou une règle définie, comme « consensus, escalade au PDG si non résolu après une semaine »). Consignez les avis divergents dans la section « Avis » du modèle complet plutôt que d'effacer le désaccord, une dissidence bien documentée est précieuse si la décision est réexaminée plus tard.

**Et si nous découvrons plus tard que la décision était mauvaise ?**
C'est exactement à quoi sert le registre. Rédigez un nouveau registre de décision qui remplace l'ancien, expliquez ce qui a changé (nouvelle information, circonstances modifiées ou erreur de raisonnement) et renvoyez vers l'ancien. Avoir eu tort n'est pas une raison d'effacer la trace, c'est la raison d'être de la trace.

**Avons-nous besoin d'un logiciel particulier pour cela ?**
Non. Un dossier de fichiers Markdown ou Word sur un lecteur partagé, un espace wiki ou un dépôt sous gestion de versions fonctionnent tous. Choisissez ce que votre équipe ouvre déjà chaque jour, l'adoption échoue bien plus souvent à cause d'outils inconnus que d'une fonctionnalité manquante.

**Un assistant d'IA peut-il aider à les rédiger ou à les relire ?**
Oui, de façon productive, de deux manières : (1) rédiger un premier jet du contexte et des options envisagées à partir de notes de réunion ou d'une transcription, qu'un décideur humain corrige et finalise ; (2) relire un brouillon avec la [liste de contrôle](../liste-de-controle/index.md) pour repérer des options manquantes, des décisions floues ou des conséquences qui ne font que reprendre le débat. Un assistant d'IA ne devrait jamais être le décideur nommé, la responsabilité reste à une personne ou à un comité.

**N'est-ce pas simplement de la bureaucratie ?**
Cela devient de la bureaucratie précisément quand c'est imposé comme paperasse après coup pour des décisions déjà prises et annoncées. Cela garde sa valeur quand c'est utilisé comme *outil de réflexion* avant une décision, par les personnes qui la prennent réellement. Voir les [pièges courants](../guide/index.md#pièges-courants) dans le guide.

**À partir de combien de registres de décision y en a-t-il trop ?**
Si les gens cessent de lire le journal, vous avez de la lassitude : vous consignez des décisions faciles à annuler ou qui ne concernaient qu'une personne. Limitez les registres aux choix réellement difficiles à annuler, transversaux ou susceptibles d'être revisités. Voir la [liste de contrôle](../liste-de-controle/index.md#liste-de-contrôle--cette-décision-a-t-elle-besoin-dun-registre-de-décision-).

**Notre équipe n'aime pas le mot « architecture » ou « registre », le nom compte-t-il ?**
Pas pour la mécanique. Certaines équipes obtiennent une adoption bien plus rapide en appelant simplement le dossier `decisions/` plutôt que `decision-records/`, le même modèle fonctionne sous l'un ou l'autre nom. Utilisez ce qui amène votre équipe à les écrire réellement.

**Un registre de décision peut-il s'appliquer à plusieurs unités d'activité ?**
Oui, si la décision est réellement partagée (par exemple un fournisseur pour toute l'entreprise). Mais restez à *une seule décision* : si deux unités d'activité font en réalité deux choix différents pour deux raisons différentes, rédigez deux registres et reliez-les comme liés.

## Dépannage

| Symptôme | Cause probable | Remède |
|---|---|---|
| Les registres s'accumulent indéfiniment en « demande de commentaires » | Pas d'échéance ou pas de décideur nommé | Ajoutez les deux explicitement ; acceptez par défaut en l'absence d'objection à une date indiquée |
| Personne ne lit le journal | Trop de registres à faible enjeu ; lassitude | Appliquez plus strictement la liste de contrôle « cela nécessite-t-il un registre ? » |
| Les registres se lisent comme une liste d'avantages/inconvénients, sans vraie décision | La section Décision a été écrite avant que la décision soit réellement prise | Ne publiez pas « Décision » comme définitive tant que le décideur n'a pas réellement décidé |
| L'équipe y voit de la paperasse et rechigne à les écrire | Introduit d'en haut comme un mandat, ou utilisé seulement après coup pour justifier des choix antérieurs | Réintroduisez-le comme un outil que l'équipe choisit parce qu'il lui fait gagner du temps plus tard, en commençant par un exemple visiblement utile |
| Personne ne retrouve les anciens registres | Pas de lieu de stockage partagé et durable ni d'index | Créez un lieu unique `decisions/` avec une page d'index listant titre, statut et date |
| Des décisions sont annulées en silence sans que personne s'en aperçoive | Pas de convention de remplacement | Quand une décision change, écrivez toujours un nouveau registre au statut `remplacé` avec un lien en retour |

## Glossaire

* **Registre de décision (RD)** : un document consignant un choix important, son contexte, les options envisagées, la décision et ses conséquences.
* **Journal des décisions (JD)** : la collection complète des registres de décision d'une équipe, d'une fonction ou d'une organisation.
* **Registre de décision d'architecture (ADR)** : l'ancêtre de ce modèle propre au logiciel, centré sur les choix de technologie et de conception.
* **Statut** : l'étape du cycle de vie d'une décision : demande de commentaires, proposé, accepté, rejeté, obsolète ou remplacé.
* **Remplacé** : une décision supplantée par une plus récente ; l'ancien registre reste dans le journal avec un lien vers l'avant, au lieu d'être supprimé.
* **Exigence significative** : un besoin ayant un effet mesurable sur le système ou l'organisation, le genre de chose qui justifie la rédaction d'un registre de décision.
* **Gestion des connaissances (GC)** : la discipline plus large à laquelle appartiennent les registres de décision : saisir la connaissance institutionnelle pour qu'elle survive à la mémoire de n'importe quelle personne.

## Où aller ensuite

* Nouveau dans la pratique ? Commencez par le [guide](../guide/index.md).
* Prêt à en écrire un ? Suivez le [tutoriel](../tutoriel/index.md).
* Besoin d'un modèle à copier ? Voir [template/index.md](../modele/index.md).
* Envie d'en voir d'abord un dans votre domaine ? Parcourez [examples/index.md](../exemples/index.md).
* Vous le déployez dans une équipe ? Utilisez la [liste de contrôle](../liste-de-controle/index.md).
