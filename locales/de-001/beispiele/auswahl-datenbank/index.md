# Die primäre Datenbank auswählen

* Status: angenommen
* Datum: 2026-03-22
* Entscheidende: CTO
* Verantwortlich: Leitung Plattform-Engineering

## Kontext

Unsere aktuelle Datenbank nähert sich unter dem prognostizierten Wachstum der nächsten 12 Monate ihren Skalierungsgrenzen, und das Engineering-Team muss vor dem nächsten großen Produktlaunch ihren Ersatz wählen. Dies ist hier als das einzige technische Beispiel dieser Sammlung aufgenommen, um zu zeigen, dass Architekturentscheidungen genau demselben Muster folgen wie die Geschäftsbeispiele an anderer Stelle – die Disziplin ist allgemein, nicht bereichsspezifisch.

## Betrachtete Optionen

* **Die aktuelle Datenbank vertikal skalieren.** Das geringste Migrationsrisiko und keine Anwendungsänderungen nötig, aber das Engineering schätzt, dass dies bei dem prognostizierten Wachstum nur 6 bis 9 Monate Aufschub bringt, bevor dieselben Grenzen erneut erreicht werden.
* **Zu Datenbank A migrieren (verwaltet, horizontal skalierbar).** Beseitigt die Skalierungsobergrenze mit starker Anbieterunterstützung und einem gut dokumentierten Migrationspfad; fügt laufende Kosten für den verwalteten Dienst hinzu.
* **Zu Datenbank B migrieren (selbst gehostet, horizontal skalierbar).** Niedrigere laufende Kosten als die verwaltete Option, erfordert aber den Aufbau interner Betriebsexpertise, die das Team derzeit nicht hat, und Referenzprüfungen bei vergleichbaren Unternehmen wiesen auf einen höheren Betriebsaufwand als erwartet hin.

## Entscheidung

Wir migrieren zu Datenbank A, der verwalteten, horizontal skalierbaren Option, und stellen die Verringerung des Migrationsrisikos und die Anbieterunterstützung über die niedrigeren laufenden Kosten des Selbsthostings.

## Konsequenzen

* Das Plattform-Engineering plant eine schrittweise Migration mit einer Parallelbetriebsphase vor der vollständigen Umstellung, um den bevorstehenden Produktlaunch nicht zu stören.
* Die laufenden Infrastrukturkosten steigen; die Finanzabteilung hat dies als Teil des Wachstumsinvestitionsbudgets genehmigt.
* Wir verzichten auf die niedrigeren Kosten der selbst gehosteten Option im Austausch dafür, das betriebliche Risiko zu vermeiden, interne Expertise aufzubauen, die wir derzeit nicht haben.
* Nach Abschluss der ersten Migration ist eine Folge-Architekturentscheidung zur Strategie für Connection-Pooling und Lese-Replikate nötig.

## Verwandtes

* Diese Entscheidung reagiert auf dieselbe 12-Monats-Wachstumsprognose, auf die in der Kapazitätsplanung des laufenden Geschäftsjahres verwiesen wird; es gibt kein früheres Entscheidungsprotokoll zur Datenbank, das ersetzt würde.
