# Das Klumpenrisiko bei einem einzelnen Anbieter verringern

* Status: Kommentierung erbeten
* Datum: 2026-05-20
* Entscheidende: COO (noch zu bestätigen)
* Verantwortlich: Leitung Beschaffung

Zusammenfassung: in Arbeit. Dies ist ein Ausgangspunkt für ein Team, das überlegt, wie es auf eine starke Abhängigkeit von einem einzelnen Anbieter für kritische Dienste reagieren soll. Er zeigt, wie ein Team das Risiko fassen, die Optionen diskutieren und Informationen sammeln kann. Er hält keine Entscheidung fest.

## Problem

Eine interne Risikoprüfung stellte fest, dass ein großer Teil der Ausgaben für kritische Infrastruktur an einen einzigen Anbieter geht. Dieser Anbieter hatte einen ungeplanten Ausfall, der einen kundennahen Dienst störte, und seine Preise sind ohne vertragliche Obergrenze gestiegen. Weiterzumachen wie bisher setzt die Organisation einem Verfügbarkeitsrisiko und ungebremstem Kostenwachstum aus.

Die zu beantwortenden Fragen:

* Wie viel von dem, wovon wir abhängen, ist tatsächlich konzentriert, und was geschieht mit dem Geschäft, wenn der Anbieter ausfällt oder die Preise wieder erhöht?
* Wie wahrscheinlich und wie schwerwiegend sind diese Ereignisse, und was sind wir bereit hinzunehmen?
* Welche realistischen Wege gibt es, das Risiko zu verringern, zu welchen Kosten und wie schnell?
* Wie sähe ein sicherer Ausstieg oder eine Rückfalllösung aus?

## Annahmen

Jede Annahme ist zu prüfen.

* **Der Ausfall und die Preiserhöhung spiegeln ein dauerhaftes Muster wider**, nicht einen einmaligen Vorfall. Prüfung: Störungsverlauf, Mitteilungen des Anbieters und Marktpreise prüfen.
* **Ein zweiter Anbieter kann einen Teil der kritischen Last in akzeptabler Qualität betreiben.** Prüfung: Kandidaten in die engere Wahl nehmen und einen begrenzten Versuch fahren.
* **Der Hauptanbieter verbessert seine Bedingungen, wenn er glaubwürdige Alternativen sieht.** Prüfung: ein Verlängerungsangebot anfordern, während andere Optionen bewertet werden.
* **Eine phasenweise Migration kann Dienstunterbrechungen vermeiden.** Prüfung: die technischen Abhängigkeiten und die Grenzen des Vertrags für das Verlagern von Last prüfen.

## Einschränkungen

* Der kundennahe Dienst darf während eines Übergangs nicht gestört werden.
* Vertragsbedingungen können begrenzen, wie schnell Last ohne Vertragsstrafe verlagert werden kann, und Ausstiegsgebühren vorsehen.
* Jeder neue Anbieter muss nach denselben Kriterien bewertet werden wie der ursprüngliche.
* Unbekannt, zu klären: Datenportabilität, genutzte proprietäre Dienste, Ausstiegsgebühren und aufsichtsrechtliche Erwartungen an das Risiko durch Dritte.

## Betrachtete Optionen

Für jede Option Nutzen, Kosten, Zeitplan und benötigte Fähigkeiten schätzen und festhalten, welche Belege das Team umstimmen würden.

* **Das Risiko hinnehmen und beobachten.**
  * Nutzen: kurzfristig kein Aufwand und keine Kosten.
  * Risiken: lässt Ausfall- und Preisrisiko bestehen; die Risikoprüfung lässt das bei der heutigen Konzentration womöglich nicht zu.
* **Mit dem bisherigen Anbieter nachverhandeln**: Servicelevel, Preisobergrenze und bessere Ausstiegsbedingungen; weiter nur ein Anbieter.
  * Nutzen: geht Preis und Verantwortlichkeit an.
  * Risiken: beseitigt den Single Point of Failure nicht.
* **Diversifizieren: einen Teil der kritischen Last zu einem zweiten Anbieter verlagern** und den Hauptvertrag für den Rest nachverhandeln.
  * Nutzen: verringert die Konzentration; stärkt die Verhandlungsposition.
  * Kostentreiber: Anbieterauswahl; Migrationsaufwand; doppelte Betriebskosten eine Zeit lang; höhere betriebliche Komplexität (zwei Verfahrensbestände und Kompetenzprofile).
  * Zeitverlauf: in Phasen, mit Kontrollpunkten.
* **Resilienz ohne zweiten Anbieter aufbauen**: Sicherungen, erprobte Wiederherstellungsverfahren und Konstruktionsänderungen, die einen späteren Wechsel möglich machen.
* **Vollständig zu einem anderen Anbieter wechseln.** Die größte Störung; nur gerechtfertigt, wenn der derzeitige Anbieter unannehmbar ist.

## Argumentation

Diskussionspunkte, mit denen das Team rechnen sollte:

* **Risikoappetit.** Welches Maß an Abhängigkeit ist akzeptabel? Wer entscheidet das?
* **Kosten der Resilienz.** Redundanz hat einen laufenden Preis; lohnt sich die Absicherung, und für welche Dienste?
* **Komplexität.** Zwei Anbieter erhöhen die betriebliche Komplexität. Hat das Team die Fähigkeiten?
* **Bindung.** Wie stark hängt die Organisation von den proprietären Funktionen eines Anbieters ab, und was würde ein Wechsel kosten?

Wie das Team Kosten und Zielkonflikte bewerten könnte:

1. Die kritischen Dienste und ihre Abhängigkeiten ermitteln. Für jeden die geschäftliche Wirkung eines Ausfalls unterschiedlicher Dauer als Spannen schätzen.
2. Die Wahrscheinlichkeit von Ausfall und Preisänderung anhand von Verlauf und Belegen des Anbieters schätzen, mit der Unsicherheit.
3. Jede Option bewerten: Migration, doppelte Betriebskosten, Werkzeuge, Schulung, Beschaffung und laufende Komplexität; die Ausstiegskosten beider Anbieter einbeziehen.
4. Die erwartete Risikominderung mit den Kosten vergleichen und die Empfindlichkeit gegenüber den Wahrscheinlichkeitsschätzungen prüfen.
5. Frühindikatoren und Auslöser festlegen, etwa eine Verletzung von Servicelevels, eine Preisänderung oder ein Sicherheitsereignis.

## Entscheidung

**Noch nicht entschieden.** Dies ist ein Ausgangspunkt. Ein Team, das ihn verwendet, sollte diesen Abschnitt durch seine eigene Entscheidung ersetzen.

Vorgeschlagenes Vorgehen zur Entscheidungsfindung:

* Klären, wer entscheidet und welcher Risikoappetit gilt.
* Zuerst Kriterien und Gewichtung vereinbaren.
* Die oben genannten Belege sammeln und festhalten, was gefunden wurde.
* Zur Kommentierung verteilen, dann entscheiden und den Status aktualisieren.

## Auswirkungen

Wenn sich das Team für Diversifizierung entscheidet, müsste es:

* Einen Anbieterauswahlprozess mit denselben Kriterien wie beim ursprünglichen durchführen.
* Eine phasenweise Migration planen, die Unterbrechungen vermeidet.
* Den Hauptvertrag parallel nachverhandeln.
* Die höhere betriebliche Komplexität hinnehmen, mit einem Betriebshandbuch für jeden Anbieter.
* Konzentration und Servicelevel-Bedingungen regelmäßig berichten, bis das Ziel erreicht ist.

## Verwandte Entscheidungen

* [Die primäre Datenbank auswählen](../auswahl-datenbank/): eine technische Ausprägung derselben Bindungsfrage.
* [Selbst bauen oder kaufen für ein Projekt](../selbst-bauen-oder-kaufen/): verwandte Beschaffungsentscheidungen.
* Noch nicht getroffene Entscheidungen: Ausstiegs- und Kontinuitätsplan; Anbieterauswahl.

## Verwandte Hinweise

* Offene Punkte: die kritischen Dienste und ihre Anbieter auflisten; den Störungsverlauf sammeln; den Vertrag auf Ausstiegs- und Preisbedingungen lesen.
* Mehr erfahren:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Lesen: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
