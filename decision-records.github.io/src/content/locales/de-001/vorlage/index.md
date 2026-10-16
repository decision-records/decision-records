# Vorlagen für Entscheidungsprotokolle

Zwei Vorlagen, beide in reinem Markdown: Kopieren Sie die gewünschte in eine neue Datei und füllen Sie sie aus.

## Auswahl der passenden Vorlage

Verwenden Sie standardmäßig die **schlanke Vorlage** – die meisten Entscheidungen brauchen nur ihre sechs Felder, und eine Seite, die darüber hinauswächst, sind meist ohnehin mehrere Entscheidungen.

Wechseln Sie zur **umfassenden Vorlage**, wenn eine Entscheidung folgenreich ist, mehrere Stakeholder hat, deren Meinungen einzeln zählen, oder wirklich eine strukturierte Kosten-/SWOT-/PEST-Analyse braucht, um die Wahl später zu verteidigen. Die [Checkliste](../checkliste/index.md#checkliste-braucht-diese-entscheidung-ein-entscheidungsprotokoll) behandelt die weitergehende Frage, ob eine Entscheidung überhaupt ein Protokoll braucht; der [Leitfaden](../leitfaden/index.md#der-aufbau-eines-entscheidungsprotokolls) zeigt, wie die Felder beider Vorlagen einander zugeordnet sind.

## Schlanke Vorlage

```markdown
# Titel (kurz, Präsens, Aktiv, bis ca. 50 Zeichen)

- Status: Kommentierung erbeten | vorgeschlagen | angenommen | abgelehnt | veraltet | ersetzt
- Datum: JJJJ-MM-TT
- Entscheidende: [Name(n) oder Rolle(n) mit der Befugnis, dies anzunehmen]
- Verantwortlich: [wer dieses Protokoll pflegt und regelmäßig prüft]

## Kontext

Beschreiben Sie die Situation und die Einschränkungen, die diese Entscheidung notwendig machten, so geschrieben, dass jemand ohne Erinnerung an die Sitzung versteht, warum die Frage überhaupt aufkam.

## Betrachtete Optionen

Listen Sie die realistischen Alternativen auf – gegebenenfalls einschließlich „nichts tun“ – als Fakten und Zielkonflikte, nicht als Strohmann-Aufstellung, die die gewählte Option offensichtlich richtig aussehen lässt.

## Entscheidung

Nennen Sie die Wahl in klarer, aktiver Sprache: „Wir werden X tun.“ Keine Zusammenfassung von Vor- und Nachteilen, sondern eine klare Aussage darüber, was gewählt wurde.

## Konsequenzen

Nennen Sie, was sich dadurch ändert: Kosten, Risiken, Folgeentscheidungen und alles, worauf man verzichtet, weil man eine Alternative nicht gewählt hat. Es soll sich lesen wie „wir tun jetzt X statt Y“, nicht wie eine Vor-und-Nachteile-Zusammenfassung der bereits getroffenen Entscheidung.
```

Ein vollständiges Durchspiel dieser Vorlage steht im [Tutorial](../tutorial/index.md), fertig ausgefüllte Beispiele in [examples/index.md](../beispiele/index.md).

## Umfassende Vorlage

```markdown
# Titel (kurz, Präsens, Aktiv, bis ca. 50 Zeichen)

- Status: Kommentierung erbeten | vorgeschlagen | angenommen | abgelehnt | veraltet | ersetzt
- Datum: JJJJ-MM-TT
- Entscheidende: [Name(n) oder Rolle(n) mit der Befugnis, dies anzunehmen]
- Verantwortlich: [wer dieses Protokoll pflegt und regelmäßig prüft]

Zusammenfassung: ein oder zwei Sätze zur aktuellen Position und zu offenen Bedarfen.

## Problem

Beschreiben Sie das Problem, das Sie angehen wollen. Lassen Sie keine Fragen offen, warum Sie es jetzt angehen.

Verfolgen Sie einen minimalistischen Ansatz. Gehen Sie nur die Probleme an, die an den verschiedenen Punkten des Lebenszyklus angegangen werden müssen.

Eventuell möchten Sie Gruppierungsinformationen ergänzen, etwa Tags, Schlagwörter, Links zur Wissensdatenbank usw.

## Annahmen

Beschreiben Sie alle zugrunde liegenden Annahmen der Umgebung, in der Sie die Entscheidung treffen.

Gehen Sie unbedingt auf alle relevanten Qualitätsmerkmale ein, auch bereichsübergreifende Anforderungen genannt.

Beispielannahmen können Umfang, Kosten, Zeitplan, Technologie, Ressourcenverfügbarkeit, Anforderungen an die Servicequalität, Service-Level-Vereinbarungen usw. betreffen.

Beachten Sie, dass Umgebungseinschränkungen (etwa anerkannte Technologiestandards, Unternehmensarchitektur, häufig eingesetzte Muster usw.) die Optionen begrenzen können, die Sie in Betracht ziehen.

## Einschränkungen

Halten Sie alle zusätzlichen Einschränkungen der Umgebung fest, die diese Entscheidung mit sich bringen könnte.

Gehen Sie unbedingt auf alle relevanten Qualitätsmerkmale ein, auch bereichsübergreifende Anforderungen genannt, wie oben.

Beispieleinschränkungen können Plattformentscheidungen, Anbieterauswahl, die Leichtigkeit der Rücknahme der Entscheidung usw. betreffen.

## Betrachtete Optionen (Positionen)

Listen Sie die Positionen auf, also die gangbaren Optionen, die Sie erwägen oder erwogen haben.

Verwenden Sie Fakten und Daten, keine Meinungen. Die Positionen erfordern oft lange Erläuterungen, manchmal sogar Modelle und Diagramme.

Die Liste muss nicht erschöpfend sein; Sie wollen aber in einer abschließenden Prüfung nicht die Frage „Haben Sie an … gedacht?“ hören, weil das zu einem Verlust an Glaubwürdigkeit und zum Hinterfragen anderer Architekturentscheidungen führen würde.

Dieser Abschnitt trägt auch dazu bei, dass Sie die Meinungen anderer gehört haben; das ausdrückliche Benennen anderer Meinungen hilft, deren Befürworter für Ihre Entscheidung zu gewinnen.

### Kostenanalyse (optional)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Beispiele:

- Anlaufkosten, etwa Einrichtung, Zeit und Ressourcen.

- Betrieb, etwa Support und Wartung

- Schulung, etwa Qualifizierung und Veränderungsmanagement

- Lizenzierung, etwa Vertragsvereinbarungen und rechtliche Verpflichtungen

- Messung, etwa Bandbreite und CPU-Nutzung

### SWOT-Analyse (optional)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

- Stärken

- Schwächen

- Chancen

- Risiken

### PEST-Analyse (optional)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

- Politische Faktoren

- Wirtschaftliche Faktoren

- Soziale Faktoren

- Technologische Faktoren

Manche Teams ergänzen diese als eigene Kategorien:

- Rechtliche Faktoren – wir ordnen sie lieber den politischen Faktoren zu.

- Regulatorische Faktoren – wir ordnen sie lieber den politischen Faktoren zu.

- Umweltfaktoren – wir ordnen sie lieber den wirtschaftlichen Faktoren zu.

- Demografische Faktoren – wir ordnen sie lieber den sozialen Faktoren zu.

### Weitere Analysen (eigene Ideen hier ergänzen)

Eigene Ideen hier ergänzen …

## Meinungen

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

- Vom Team, idealerweise geschrieben vom jeweiligen Teammitglied selbst.

- Von anderen internen Stakeholdern, idealerweise geschrieben vom jeweiligen Stakeholder selbst.

- Von externen Personen, etwa Drittberatern, Gutachtern, Prüfern usw.

Machen Sie bei jeder Meinung deutlich:

- Wer die Meinung äußert

- Welche anderen Kandidaten betrachtet wurden,

- Wie hat die Autorin oder der Autor die Kandidaten bewertet?

- Warum hat sie oder er den Sieger gewählt?

- Was ist seither geschehen?

- Was würden Sie mit dem heutigen Wissen anderen raten, anders zu machen?

### Titel der Meinung 1 (eigene hier ergänzen)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Erläutern Sie hier Ihre Meinung.

### Titel der Meinung 2 (eigene hier ergänzen)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Erläutern Sie hier Ihre Meinung.

### Titel der Meinung 3 (eigene hier ergänzen)

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Erläutern Sie hier Ihre Meinung.

## Argumentation

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Erläutern Sie, warum Sie eine Position gewählt haben.

Entscheidungen sollten zweckorientiert sein. Um Verantwortlichkeit zu zeigen, ordnen Sie Ihre Entscheidungen ausdrücklich den Zielen oder Anforderungen zu.

Die Argumentation ist wahrscheinlich ebenso wichtig wie die Entscheidung selbst.

Sie muss nicht erschöpfend sein; Sie wollen aber in einer abschließenden Prüfung nicht die Frage „Haben Sie an … gedacht?“ hören, weil das (wie oben) zu einem Verlust an Glaubwürdigkeit und zum Hinterfragen anderer Architekturentscheidungen führen würde.

## Auswirkungen

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Nennen Sie die Auswirkungen Ihrer Entscheidung klar. Das kann sehr wirksam sein, um Zustimmung zu gewinnen und eine Roadmap für die Umsetzung zu schaffen.

Eine Entscheidung kann zum Beispiel weitere Entscheidungen erforderlich machen, neue Anforderungen schaffen oder bestehende ändern, der Umgebung zusätzliche Einschränkungen auferlegen, eine Neuverhandlung von Umfang oder Zeitplan mit Kunden erfordern oder zusätzliche Mitarbeiterschulungen nötig machen.

## Verwandte Entscheidungen

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Listen Sie hier alle verwandten Entscheidungen auf.

Wir haben festgestellt, dass in der Praxis eine Rückverfolgbarkeitsmatrix, Entscheidungsbäume oder Metamodelle nützlicher sind. Metamodelle eignen sich, um komplexe Beziehungen diagrammatisch darzustellen (etwa Rose-Modelle).

## Verwandte Anforderungen

Zusammenfassung: Erläutern Sie diesen Abschnitt kurz und heben Sie idealerweise Ausreißer hervor.

Listen Sie hier alle verwandten Anforderungen auf.

Wir fanden es praktischer, auf eine Rückverfolgbarkeitsmatrix zu verweisen. Sie können den Beitrag jeder Entscheidung zur Erfüllung jeder Anforderung bewerten und dann beurteilen, wie gut die Anforderung über alle Entscheidungen hinweg erfüllt wird. Wenn eine Entscheidung nicht zur Erfüllung einer Anforderung beiträgt, treffen Sie diese Entscheidung nicht.

## Verwandte Artefakte

Listen Sie hier alle verwandten Artefakte auf.

Beispiele sind alle Umfangsdokumente, Planungsdokumente, Geschäftsprozessmodelle usw., die von dieser Entscheidung betroffen sind.

## Verwandte Prinzipien

Wenn das Unternehmen eine vereinbarte Reihe von Prinzipien hat, stellen Sie sicher, dass die Entscheidung mit einem oder mehreren davon übereinstimmt. Das hilft, die Ausrichtung über Domänen oder Systeme hinweg zu sichern.

## Verwandte Hinweise

Da Entscheidungsprozesse viel Zeit brauchen können, haben wir es als nützlich empfunden, Hinweise und Fragen festzuhalten, die das Team während des Abstimmungsprozesses bespricht.
```
