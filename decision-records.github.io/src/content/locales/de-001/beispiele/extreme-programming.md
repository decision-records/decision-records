# Extreme Programming

* Status: Kommentierung erbeten
* Datum: 2025-10-06
* Entscheidende: Leitung Engineering (noch zu bestätigen)
* Verantwortlich: Engineering Manager

Zusammenfassung: in Arbeit. Dies ist ein Ausgangspunkt für ein Engineering-Team, das überlegt, wie Praktiken des Extreme Programming (XP), etwa testgetriebene Entwicklung, Pair Programming, kontinuierliche Integration und kleine Releases, eingeführt werden können. Er zeigt, wie ein Team die Frage fassen, die Optionen diskutieren und Informationen sammeln kann. Er hält keine Entscheidung fest.

## Problem

Produktteams liefern Funktionen in großen Chargen, und spät gefundene Fehler sind teuer: Ein spürbarer Anteil der Releases braucht nach der Auslieferung eine dringende Korrektur. Die Engineering-Führung interessiert sich für Praktiken des Extreme Programming, einer agilen Softwareentwicklungsmethode, die technische Praktiken wie testgetriebene Entwicklung, Pair Programming, kontinuierliche Integration, kleine Releases, Refactoring und gemeinsames Eigentum am Code betont.

Diese Praktiken stützen sich gegenseitig, verändern aber auch, wie Ingenieure täglich arbeiten. Alle auf einmal zu übernehmen, stößt wahrscheinlich auf Widerstand und wird oberflächlich umgesetzt. Die zu beantwortenden Fragen:

* Welche Probleme wollen wir lösen (späte Fehler, langsames Feedback, Wissen bei wenigen), und welche Praktiken gehen sie an?
* In welcher Reihenfolge sollen die Praktiken eingeführt werden, und wer fängt an?
* Was messen wir, um zu wissen, dass die Praktiken helfen?
* Wie ist das Verhältnis zwischen gemeinsamem Standard und Wahlfreiheit der einzelnen Teams?

## Annahmen

Jede Annahme ist zu prüfen.

* **Späte Fehler entstehen vor allem durch fehlendes schnelles automatisiertes Feedback.** Prüfung: eine Stichprobe dringender Korrekturen bis dorthin zurückverfolgen, wo der Fehler hätte gefunden werden können.
* **Die grundlegenden Praktiken (kontinuierliche Integration und automatisierte Tests) machen die anderen möglich.** Prüfung: Teams, die es versucht haben, fragen, welche Praktiken von welchen abhingen.
* **Ingenieure übernehmen Praktiken, die sie in einem Nachbarteam funktionieren sehen.** Prüfung: fragen, was sie überzeugen würde und was sie beunruhigt.
* **Die Rate dringender Korrekturen nach der Auslieferung ist ein faires Maß für Fortschritt.** Prüfung: vereinbaren, wie gezählt wird, und prüfen, dass andere Kennzahlen (Durchlaufzeit von Änderungen, Änderungsfehlerrate) keine andere Geschichte erzählen.

## Einschränkungen

* Die Teams müssen weiter Funktionen liefern, während sie lernen; der Ausstoß in der ersten Zeit wird wahrscheinlich geringer sein.
* Die Ingenieure sollen die Wahl behalten, wie sie Paare bilden und welche Werkzeuge sie nutzen.
* Die bestehende Build- und Test-Infrastruktur braucht womöglich Arbeit, bevor kontinuierliche Integration nützlich ist.
* Unbekannt, zu klären: wie viel des Codes heute testbar ist und ob regulatorische oder kundenseitige Vorgaben die Release-Häufigkeit beeinflussen.

## Betrachtete Optionen

Für jede Option Nutzen, Kosten, Zeitplan und benötigte Fähigkeiten schätzen und festhalten, welche Belege das Team umstimmen würden.

* **Alle Praktiken gleichzeitig in jedem Team übernehmen.**
  * Nutzen: Die Praktiken verstärken einander.
  * Kostentreiber: Schulung; langsamere Lieferung während des Lernens; Werkzeugarbeit in allen Teams zugleich.
  * Risiken: große Änderung; Teams ohne die grundlegenden Fähigkeiten geben sie womöglich binnen Wochen auf.
* **Die Praktiken in gewählter Reihenfolge Team für Team einführen.** Etwa zuerst kontinuierliche Integration und automatisierte Tests (die Grundlagen), dann kleine Releases und Pair Programming, dann testgetriebene Entwicklung.
  * Nutzen: Jede Praxis hat Zeit, sich zu setzen; die frühen machen die späteren möglich; die Erfahrung des ersten Teams leitet die übrigen.
  * Kostentreiber: Coaching; Zeit für Pairing und Testschreiben, in die Pläne eingebaut; Infrastrukturarbeit an der Lieferkette.
  * Zeitverlauf: nacheinander, wobei das nächste Team beitritt, wenn das vorherige seine Release-Pipeline über einen festgelegten Zeitraum gesund gehalten hat.
  * Benötigte Fähigkeiten: ein Coach; eine verlässliche Build-Pipeline; Rückhalt der Führungskräfte für den Ausstoßrückgang.
  * Risiken: langsam; Praktiken werden ungleichmäßig übernommen.
* **Nur die einfachen Praktiken übernehmen.** Wenig Aufwand, kann aber die mit dem größten Nutzen auslassen, etwa automatisierte Tests.
* **Einen anderen Satz von Praktiken übernehmen** (etwa die in der DORA-Forschung zur Leistung der Softwarelieferung beschriebenen, wie kontinuierliche Auslieferung, trunkbasierte Entwicklung und lose gekoppelte Architektur) und XP als eine Quelle unter mehreren behandeln.
* **Nichts Neues tun** und die konkreten Fehlerursachen direkt angehen. Eine echte Vergleichsbasis.

## Argumentation

Diskussionspunkte, mit denen das Team rechnen sollte:

* **Pair Programming.** Eine Praxis, der viele Ingenieure skeptisch begegnen. Wo hilft sie (Wissensaustausch, komplexe Arbeit), und wo nicht?
* **Standardisieren oder Teams wählen lassen?** Gemeinsame Ergebnisse (weniger dringende Korrekturen, schnelleres Feedback) mit Freiheit der Teams beim Wie, oder ein strengerer Standard?
* **Qualität oder Tempo kurzfristig.** Sind die Führungskräfte bereit, geringeren Ausstoß hinzunehmen, während die Teams lernen?
* **TDD, Mittel oder Zweck?** Manche Praktiken (wie testgetriebene Entwicklung) sind selbst unter erfahrenen Praktikern umstritten. Das Team sollte entscheiden, welches Problem die Praxis löst, bevor es sie übernimmt.

Wie das Team Kosten und Zielkonflikte bewerten könnte:

1. Den derzeitigen Ansatz bewerten: Aufwand für dringende Korrekturen, durch späte Fehler verursachte Verzögerungen, Auswirkungen auf Kunden. Spannen in den eigenen Begriffen der Organisation verwenden.
2. Das Programm bewerten: Coaching, Schulung, Zeit für Pairing und Tests, Infrastruktur der Pipeline und der zeitweilige Rückgang der Lieferung.
3. Zuerst die Kennzahlen festlegen: Anteil der Releases mit dringender Korrektur, Durchlaufzeit von Änderungen, Deployment-Häufigkeit, Zeit bis zur Wiederherstellung des Dienstes (die DORA-Kennzahlen) und Rückmeldungen der Ingenieure.
4. Die Optionen im besten, wahrscheinlichen und schlechtesten Szenario vergleichen; fragen, wie sich die Antwort ändert, wenn der Nutzen später oder kleiner als erhofft eintritt.
5. Eine gewichtete Matrix und ein Pre-Mortem verwenden.

## Entscheidung

**Noch nicht entschieden.** Dies ist ein Ausgangspunkt. Ein Team, das ihn verwendet, sollte diesen Abschnitt durch seine eigene Entscheidung ersetzen.

Vorgeschlagenes Vorgehen zur Entscheidungsfindung:

* Klären, wer entscheidet und bis wann.
* Zuerst Kriterien und Gewichtung vereinbaren.
* Die oben genannten Belege sammeln und festhalten, was gefunden wurde.
* Zur Kommentierung verteilen, dann entscheiden und den Status aktualisieren.

## Auswirkungen

Wenn sich das Team für einen phasenweisen Ansatz entscheidet, müsste es:

* Einen Coach benennen und das erste Team bitten, ehrlich zu berichten, was geholfen hat und was nicht.
* Zeit für Pairing und das Schreiben von Tests in die Lieferpläne einbauen.
* In die Build- und Test-Pipeline investieren, bevor man sich auf sie verlässt.
* Eine Stoppregel vereinbaren: Hilft eine Praxis nach einem festgelegten Zeitraum nicht, kann das Team vorschlagen, sie zu beenden, und den Grund festhalten.
* Den Ingenieuren die Wahl lassen, wie sie Paare bilden und welche Werkzeuge sie nutzen; die Praktiken legen das Ergebnis fest, nicht jedes Detail, wie es erreicht wird.

## Verwandte Entscheidungen

* [Das Agile Manifest](../agiles-manifest/): die weitergehende Entscheidung über die Werte, die diese Praktiken stützen.
* [Unsere IT-Frameworks auswählen](../it-frameworks/): wie XP zu anderen Frameworks passt.
* Noch nicht getroffene Entscheidungen: Investition in Pipeline und Werkzeuge; Modell des Code-Eigentums.

## Verwandte Hinweise

* Offene Punkte: eine Stichprobe jüngerer dringender Korrekturen ziehen; Ingenieure nach ihren Vorbehalten gegen Pairing und Tests fragen; prüfen, was die Build-Pipeline heute leistet.
* Mehr erfahren:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Lesen: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
