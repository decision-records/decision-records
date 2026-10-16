# Die primäre Datenbank auswählen

* Status: Kommentierung erbeten
* Datum: 2026-03-22
* Entscheidende: CTO (noch zu bestätigen)
* Verantwortlich: Leitung Plattform-Engineering

Zusammenfassung: in Arbeit. Dies ist ein Ausgangspunkt für ein Team, das die primäre Datenbank für ein wachsendes Produkt auswählt. Es ist das einzige technische Beispiel in dieser Sammlung und zeigt, dass Architekturentscheidungen demselben Muster folgen wie die geschäftlichen Entscheidungen im Rest dieser Sammlung. Er zeigt, wie ein Team die Frage fassen, die Optionen diskutieren und Informationen sammeln kann. Er hält keine Entscheidung fest.

## Problem

Die derzeitige Datenbank nähert sich ihren Skalierungsgrenzen, und das Engineering-Team erwartet, diese bald zu erreichen. Vor dem nächsten großen Produktstart muss ein Ersatz oder ein anderer Weg zur Skalierung gewählt werden.

Die zu beantwortenden Fragen:

* Was sind die tatsächlichen Grenzen heute (Lesen, Schreiben, Speicher, Latenz, Betrieb), und wie schnell nähern wir uns ihnen?
* Welche Eigenschaften sind am wichtigsten (Konsistenz, Verfügbarkeit, Latenz, Kosten, Betreibbarkeit, Compliance), und in welcher Reihenfolge?
* Skalieren wir das Vorhandene, wechseln wir zu einem verwalteten Dienst oder betreiben wir selbst etwas?
* Wie würden wir migrieren, und wie kämen wir wieder heraus, wenn wir müssten?

## Annahmen

Jede Annahme ist zu prüfen.

* **Die Wachstumsprognose ist realistisch.** Prüfung: mit dem bisherigen Wachstum und den Vertriebs- und Produktplänen vergleichen; einen hohen und einen niedrigen Fall betrachten.
* **Die derzeitige Datenbank lässt sich zu einem gewissen Preis weiter skalieren.** Prüfung: den Anbieter und das Team fragen, wie viel Spielraum bleibt und was er kostet.
* **Unsere Last passt zu einem horizontal skalierbaren Entwurf.** Prüfung: Abfragen und Transaktionen untersuchen; nach Operationen suchen, die starke Konsistenz über Datensätze hinweg brauchen.
* **Das Team kann die gewählte Option betreiben.** Prüfung: die erforderlichen Fähigkeiten auflisten und wer sie hat.

## Einschränkungen

* Die Änderung muss vor dem Start bereit sein, mit einer phasenweisen Migration, die ihn nicht stört.
* Die laufenden Kosten müssen ins genehmigte Budget passen.
* Datenschutz- und Sicherheitspflichten gelten für jede Wahl.
* Unbekannt, zu klären: Datenvolumen, Aufbewahrungsanforderungen, regionale Anforderungen, Integration mit anderen Systemen und Zusagen an Anbieter.

## Betrachtete Optionen

Für jede Option Nutzen, Kosten, Zeitplan und benötigte Fähigkeiten schätzen und festhalten, welche Belege das Team umstimmen würden.

* **Die derzeitige Datenbank vertikal skalieren** (größere Maschine oder größerer Tarif).
  * Nutzen: geringstes Migrationsrisiko; keine Anwendungsänderungen.
  * Risiken: verschafft nur begrenzt Zeit; die Kosten steigen steil.
* **Zu einem verwalteten, horizontal skalierbaren Datenbankdienst wechseln.**
  * Nutzen: nimmt Skalierung und viel Betriebsarbeit ab; Unterstützung durch den Anbieter.
  * Kostentreiber: laufende Dienstgebühren; Migration; Anwendungsänderungen; Gebühren für den Datenabzug.
  * Risiken: Abhängigkeit von Funktionen und Preisen des Anbieters.
* **Zu einer selbst betriebenen, horizontal skalierbaren Datenbank wechseln.**
  * Nutzen: möglicherweise geringere laufende Kosten; mehr Kontrolle.
  * Kostentreiber: Aufbau von Betriebskompetenz; Bereitschaftsdienst; Werkzeuge; Upgrades.
  * Risiken: Der Betriebsaufwand kann höher sein als erwartet.
* **Die Datenschicht umgestalten** (etwa Cache, Lese-Replikate, Partitionierung oder Trennung von Lasten), um die derzeitige Datenbank zu verlängern.
* **Verschiedene Datenbanken für verschiedene Lasten nutzen** (polyglotte Persistenz), auf Kosten von mehr zu betreibenden Systemen.

## Argumentation

Diskussionspunkte, mit denen das Team rechnen sollte:

* **Konsistenz gegen Verfügbarkeit.** Das CAP-Theorem besagt, dass ein verteiltes System mit Partitionierung nicht beides garantieren kann. Was ist für jeden Teil des Produkts wichtiger? Viele Lasten vertragen verzögerte Konsistenz; manche nicht.
* **Verwaltet gegen selbst betrieben.** Höhere Dienstkosten gegen geringeres Betriebsrisiko. Wie soll das Team die Zeit der Ingenieure bewerten?
* **Bindung.** Was verliert man durch eine herstellerspezifische Funktion, und was gewinnt man?
* **Standards.** Wie stark stützen wir uns auf SQL (genormt in ISO/IEC 9075) im Vergleich zu einem herstellerspezifischen Abfragemodell?

Wie das Team Kosten und Zielkonflikte bewerten könnte:

1. Mit der eigenen Last testen: einen realistischen Benchmark erstellen und jeden Kandidaten unter erwarteter und Spitzenlast messen, einschließlich Ausfallszenarien.
2. Die Gesamtbetriebskosten über einen festgelegten Zeitraum in den eigenen Begriffen der Organisation schätzen: Dienstgebühren oder Lizenzen, Hosting, Migration, Engineering-Zeit, Bereitschaftsdienst, Schulung, Support und Ausstieg. Spannen angeben.
3. Kandidaten in einer gewichteten Matrix der wichtigen Eigenschaften bewerten (das Produktqualitätsmodell ISO/IEC 25010 bietet dafür ein Vokabular) und die Empfindlichkeit gegenüber den Gewichten prüfen.
4. Schätzen, wie viel Zeit jede Option verschafft und was sie kostet, wenn die Grenze erneut erreicht wird.
5. Den Ausstieg planen: Wie würden Daten und Code jede Wahl wieder verlassen?

## Entscheidung

**Noch nicht entschieden.** Dies ist ein Ausgangspunkt. Ein Team, das ihn verwendet, sollte diesen Abschnitt durch seine eigene Entscheidung ersetzen.

Vorgeschlagenes Vorgehen zur Entscheidungsfindung:

* Klären, wer entscheidet und wer einbezogen werden muss (Sicherheit, Finanzen, Produkt).
* Zuerst Kriterien und Gewichtung vereinbaren.
* Die oben genannten Belege, einschließlich der Benchmark-Ergebnisse, sammeln und festhalten, was gefunden wurde.
* Zur Kommentierung verteilen, dann entscheiden und den Status aktualisieren.

## Auswirkungen

Wenn sich das Team für die Migration entscheidet, müsste es:

* Eine phasenweise Migration mit einer Parallelbetriebsphase vor der vollständigen Umstellung planen.
* Das Budget für die laufenden Kosten bestätigen.
* Spätere Entscheidungen vorsehen, etwa zu Verbindungs-Pooling und Lese-Replikaten.
* Den erwarteten Ausstiegsweg festhalten.

## Verwandte Entscheidungen

* [Selbst bauen oder kaufen für ein Projekt](../selbst-bauen-oder-kaufen/): allgemeine Überlegungen zu Bauen oder Kaufen.
* [Das Klumpenrisiko bei einem einzelnen Anbieter verringern](../abhaengigkeit-von-einem-anbieter/): die Abhängigkeit von einem einzelnen Anbieter.
* Noch nicht getroffene Entscheidungen: Cache- und Replikat-Strategie; Datenaufbewahrung.

## Verwandte Hinweise

* Offene Punkte: Produktionskennzahlen sammeln; Eigenschaften der Last beschreiben; Kandidaten für einen Benchmark in die engere Wahl nehmen.
* Mehr erfahren:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
