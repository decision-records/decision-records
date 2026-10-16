# Unsere IT-Frameworks auswählen

* Status: Kommentierung erbeten
* Datum: 2026-10-14
* Entscheidende: Chief Information Officer und Chief Technology Officer (noch zu bestätigen)
* Verantwortlich: Leitung Technologiebetrieb

Zusammenfassung: in Arbeit. Dies ist ein Ausgangspunkt für eine Technologiegruppe, die gebeten wurde, mehrere Frameworks zu übernehmen (etwa ITIL, das Agile Manifest, Extreme Programming und Six Sigma), und entscheiden muss, welche sie für welche Arbeit und in welcher Reihenfolge nutzt. Er zeigt, wie ein Team die Frage fassen, die Optionen diskutieren und Informationen sammeln kann. Er hält keine Entscheidung fest.

## Problem

Verschiedene Führungskräfte haben die Technologiegruppe gebeten, ITIL für das Servicemanagement, das Agile Manifest für die Lieferung, Extreme Programming für das Engineering und Six Sigma für die Qualität zu übernehmen, manchmal in denselben Teams und im selben Zeitraum. Jede Bitte ist für sich vernünftig, aber zusammen überlappen sie sich, nutzen unterschiedliche Vokabulare und verlangen von den Menschen, sich schneller zu ändern, als sie es verarbeiten können.

Die zu beantwortenden Fragen:

* Welches Problem löst jedes Framework, und für welche Art von Arbeit?
* Wo überschneiden sie sich oder widersprechen einander, und was soll Vorrang haben?
* In welcher Reihenfolge führen wir sie ein, und wie viele Änderungen kann ein Team gleichzeitig verkraften?
* Woran erkennen wir, ob die Kombination hilft?

## Annahmen

Jede Annahme ist zu prüfen.

* **Jedes Framework funktioniert am besten bei der Art von Arbeit, für die es entworfen wurde.** Prüfung: die Quellen lesen und mit Menschen sprechen, die jedes Framework genutzt haben.
* **Teams können ein neues Framework nach dem anderen verkraften**, nicht mehrere zugleich. Prüfung: Teams fragen, welche Änderungen bereits laufen und welche Kapazität sie haben.
* **Sponsoren akzeptieren das Warten**, wenn sie Reihenfolge und Grund kennen. Prüfung: früh mit ihnen sprechen.
* **Eine schriftliche Grenze zwischen den Frameworks verringert Konflikte.** Prüfung: eine entwerfen und an echten Konfliktbeispielen testen.

## Einschränkungen

* Die Gruppe hat in jedem Zeitraum nur begrenzte Veränderungskapazität.
* Die Frameworks nutzen unterschiedliche Vokabulare, daher müssen gemeinsame Begriffe wie Störung, Änderung, Release und Fehler einmal definiert werden.
* Die vollständige Einführung mehrerer Frameworks könnte Jahre dauern.
* Unbekannt, zu klären: aktuelle Praxis, vertragliche oder Prüfungserwartungen und bereits genutzte Frameworks.

## Betrachtete Optionen

Für jede Option Nutzen, Kosten, Zeitplan und benötigte Fähigkeiten schätzen und festhalten, welche Belege das Team umstimmen würden.

* **Jedes angefragte Framework überall übernehmen.**
  * Nutzen: Jeder Sponsor bekommt, was er verlangt hat.
  * Risiken: Überlastung; widersprüchliche Vorgaben (etwa feste Änderungsfreigaben gegen kontinuierliche Auslieferung); unmöglich zu sagen, welche Änderung welches Ergebnis verursacht hat.
* **Ein Framework als einzigen Standard übernehmen.**
  * Nutzen: einfach zu erklären.
  * Risiken: Kein einzelnes Framework deckt Serviceoperationen, Produktlieferung, Ingenieurspraxis und Qualität gleich gut ab.
* **Jedes Framework der Art von Arbeit zuordnen, zu der es passt, und sie nacheinander schrittweise einführen.** Etwa ITIL-Praktiken für den Betrieb produktiver Dienste, die Werte des Agilen Manifests dafür, wie Lieferteams planen und arbeiten, Praktiken des Extreme Programming für das Bauen von Software und Six Sigma für Prozesse, in denen Fehler messbar sind.
  * Nutzen: klarer für die Teams; leichter zu lernen.
  * Kostentreiber: ein schriftliches Grenzdokument; Koordination; ein langes Programm.
* **Eine Norm oder Governance als Dach übernehmen**, etwa ISO/IEC 38500 (Governance der IT) oder ISO/IEC 20000-1, und die Teams innerhalb davon Methoden wählen lassen.
* **Keines im Ganzen übernehmen**; Praktiken auswählen, die die gemessenen Probleme der Gruppe angehen.

## Argumentation

Diskussionspunkte, mit denen das Team rechnen sollte:

* **Frameworks oder Ergebnisse?** Das Ziel sind bessere Ergebnisse für Kunden, nicht die Übernahme von Frameworks. Welche Ergebnisse zählen am meisten?
* **Konflikte.** Wo Vorgaben widersprüchlich sind, wer entscheidet?
* **Reihenfolge.** Welches zuerst: das mit dem größten Druck seiner Sponsoren oder das, das die anderen stützt?
* **Vokabular.** Gemeinsame Wörter verringern Reibung, aber falsche Gleichsetzung verdeckt echte Unterschiede.

Wie das Team Kosten und Zielkonflikte bewerten könnte:

1. Zuerst Probleme und gewünschte Ergebnisse mit Kennzahlen auflisten (etwa aus der DORA-Forschung zur Leistung der Softwarelieferung, dazu Service- und Qualitätskennzahlen).
2. Für jedes Framework die Kosten in den eigenen Begriffen der Organisation schätzen: Schulung, Prozessänderung, Werkzeuge, verlorene Zeit und laufende Unterstützung. Spannen angeben.
3. Die Veränderungskapazität jedes Teams schätzen und so staffeln, dass kein Team mehr trägt, als es verkraften kann.
4. Die Optionen im besten, wahrscheinlichen und schlechtesten Szenario vergleichen; die wählen, die sich am leichtesten anpassen lässt, wenn sich die Belege ändern.
5. Nach den ersten beiden Frameworks überprüfen und die Reihenfolge neu bedenken, wenn die Belege eine bessere nahelegen.

## Entscheidung

**Noch nicht entschieden.** Dies ist ein Ausgangspunkt. Ein Team, das ihn verwendet, sollte diesen Abschnitt durch seine eigene Entscheidung ersetzen.

Vorgeschlagenes Vorgehen zur Entscheidungsfindung:

* Klären, wer entscheidet und wer einbezogen werden muss (einschließlich der Sponsoren).
* Zuerst Kriterien und Gewichtung vereinbaren.
* Die oben genannten Belege sammeln und festhalten, was gefunden wurde.
* Zur Kommentierung verteilen, dann entscheiden und den Status aktualisieren.

## Auswirkungen

Wenn sich das Team dafür entscheidet, Frameworks nach Art der Arbeit zuzuordnen und schrittweise einzuführen, müsste es:

* Eine verantwortliche Person für das Grenzdokument und einen Weg zur Konfliktlösung mit Eskalation benennen.
* In einem Team jeweils nur ein Framework starten und das nächste erst beginnen, wenn das vorherige seine eigenen Abschlusskennzahlen erreicht hat.
* Den Sponsoren der späteren Frameworks schon jetzt Reihenfolge und Grund sagen.
* Gemeinsame Begriffe einmal im Grenzdokument definieren.
* Den gesamten Ansatz nach den ersten beiden Frameworks überprüfen.

## Verwandte Entscheidungen

* [Das Agile Manifest schrittweise einführen](../agiles-manifest/), [ITIL 5 schrittweise einführen](../itil-5/), [Extreme Programming schrittweise einführen](../extreme-programming/) und [Six Sigma schrittweise einführen](../six-sigma/): die Entscheidungen zu den einzelnen Frameworks.
* [Ein Geschäfts-Framework schrittweise einführen](../geschaeftsframeworks/): das allgemeine Phasenmuster.
* Noch nicht getroffene Entscheidungen: Werkzeuge; die Reihenfolge der späteren Frameworks.

## Verwandte Hinweise

* Offene Punkte: aktuelle Praktiken auflisten; Sponsoren fragen, welche Ergebnisse sie wollen; ein erstes Grenzdokument entwerfen.
* Mehr erfahren:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Lesen: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
