# Extreme Programming schrittweise einführen

* Status: angenommen
* Datum: 2025-10-06
* Entscheidende: Leitung Engineering
* Verantwortlich: Engineering Manager

## Kontext

Unsere Produktteams liefern Funktionen in großen Paketen aus, und spät gefundene Fehler sind teuer: Jedes fünfte Release braucht einen Hotfix. Wir möchten Praktiken aus Extreme Programming (XP) übernehmen, etwa testgetriebene Entwicklung, Pair Programming, kontinuierliche Integration, kleine Releases und gemeinsames Eigentum am Code. Diese Praktiken stützen einander, verändern aber auch, wie Entwickler Tag für Tag arbeiten, und alle auf einmal einzuführen stößt wahrscheinlich auf Widerstand und wird oberflächlich umgesetzt.

## Betrachtete Optionen

* **Alle Praktiken auf einmal in jedem Team übernehmen.** Die Praktiken verstärken einander, aber die Veränderung ist groß, und Teams ohne die zugrunde liegenden Fähigkeiten würden sie wahrscheinlich innerhalb von Wochen wieder aufgeben.
* **Die Praktiken in einer gewählten Reihenfolge, Team für Team einführen.** Mit kontinuierlicher Integration und automatisierten Tests (den Grundlagen) beginnen, dann kleine Releases und Pair Programming, dann testgetriebene Entwicklung, wobei die Teams die Praktiken in ihrem eigenen Tempo übernehmen. Langsamer, aber jede Praktik hat Zeit, sich zu setzen, und die frühen machen die späteren erst möglich.
* **Nur die leichten Praktiken übernehmen.** Geringer Aufwand, ließe aber die Praktiken mit dem größten Nutzen aus, etwa automatisiertes Testen, und der Nutzen wäre gering.

## Entscheidung

Wir führen XP-Praktiken der Reihe nach schrittweise ein: zuerst kontinuierliche Integration und automatisierte Tests, dann kleine Releases und Pair Programming, dann testgetriebene Entwicklung. Ein Team beginnt im ersten Quartal, und jedes folgende Team schließt sich an, nachdem das vorherige Team seine Release-Pipeline einen Monat lang grün gehalten hat.

## Konsequenzen

* Der Engineering Manager coacht das erste Team, veröffentlicht, was es gelernt hat, und verfolgt den Anteil der Releases, die einen Hotfix brauchen.
* Unser Ziel ist, diesen Anteil innerhalb eines Jahres von einem von fünf auf unter einen von zwanzig zu senken.
* Teams haben Zeit für Pairing und für das Schreiben von Tests in ihre Pläne eingebaut und sollen im ersten Quartal nicht dieselbe Zahl von Funktionen liefern.
* Entwickler behalten die Wahl, wie sie paaren und welche Werkzeuge sie nutzen; die Praktiken legen das Ergebnis fest, nicht jedes Detail, wie es erreicht wird.
* Hilft eine Praktik nach zwei Quartalen nicht, kann das Team vorschlagen, sie zu beenden, und wir halten den Grund fest.

## Verwandtes

* Siehe [Das Agile Manifest schrittweise einführen](../agiles-manifest/) für die weiter gefasste Entscheidung zu den Werten, die diese Praktiken stützen.
