# Entscheidungsprotokoll (EP)

Ein Entscheidungsprotokoll (EP) ist eine Möglichkeit, eine wichtige Entscheidung anzustoßen, zu debattieren und zu archivieren – zusammen mit ihrem Kontext und ihren Konsequenzen.

Inhalt:

- [Was ist ein Entscheidungsprotokoll?](#was-ist-ein-entscheidungsprotokoll)
- [Vorlage für Entscheidungsprotokolle](#vorlage-für-entscheidungsprotokolle)
- [Wie man mit Entscheidungsprotokollen beginnt](#wie-man-mit-entscheidungsprotokollen-beginnt)
- [Warum sind Entscheidungsprotokolle besser als bloße Notizen?](#warum-sind-entscheidungsprotokolle-besser-als-bloße-notizen)
- [Wie man mit Entscheidungsprotokollen und Werkzeugen beginnt](#wie-man-mit-entscheidungsprotokollen-und-werkzeugen-beginnt)
- [Skills für KI](#skills-für-ki)
- [Empfehlungen für gute Entscheidungsprotokolle](#empfehlungen-für-gute-entscheidungsprotokolle)
- [Teamarbeit-Ratschläge für Entscheidungsprotokolle](#teamarbeit-ratschläge-für-entscheidungsprotokolle)
- [Teamarbeit-Fragen zu Entscheidungsprotokollen](#teamarbeit-fragen-zu-entscheidungsprotokollen)
- [Weitere Informationen](#weitere-informationen)

Was dieses Repository enthält:

- [Leitfaden](leitfaden): was ein Entscheidungsprotokoll ist, warum Menschen es nutzen, Lebenszyklus, Governance und mehr.
- [Vorlage](vorlage): eine Kopiervorlage mit Markdown-Formatierung und Schritt-für-Schritt-Hinweisen.
- [Tutorial](tutorial): eine praktische Schritt-für-Schritt-Anleitung: Schreiben Sie Ihr erstes Entscheidungsprotokoll in unter 20 Minuten.
- [Beispiele](beispiele): ausgearbeitete Beispiele zu Entscheidungen in Strategie, Vertrieb, Marketing, Produkt, Personal, Risiko, Projekt und Technologie.
- [Checkliste](checkliste): Checklisten dazu, ob man eines schreiben sollte, wie man es gut schreibt, wie man es prüft und wie man die Praxis in einer Organisation betreibt.
- [Hilfe](hilfe): FAQ, Fehlerbehebung und ein Glossar für häufige Fragen, die Führungskräfte bei der Einführung stellen.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec): die Spezifikation dieses Repositorys: Aufbau, Inhalt, Sprachvarianten, Website und Agenten.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales): der Inhalt, ein Verzeichnis pro Sprachvariante; `en-us` ist die englische Quelle der Wahrheit.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills): Claude-Skills, die die Vorlagen und Checklisten dieses Repositorys in einem KI-Assistenten anwenden: einer zum Schreiben eines Entscheidungsprotokolls, einer zur Pflege dieses Repositorys.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io): SvelteKit-3-Quellcode für [decision-records.github.io](https://decision-records.github.io), das die obigen Skills bewirbt.

## Was ist ein Entscheidungsprotokoll?

Ein **Entscheidungsprotokoll** (EP) ist eine Möglichkeit, eine wichtige Entscheidung anzustoßen, zu debattieren und zu archivieren – zusammen mit ihrem Kontext und ihren Konsequenzen.

Ein **Entscheidungsregister** (ER) ist die Sammlung aller EPs, die für ein bestimmtes Projekt (oder eine Organisation) erstellt und gepflegt werden.

Eine **Entscheidung** ist in diesem Zusammenhang die Wahl einer Organisation, die eine wesentliche Anforderung adressiert.

Eine **wesentliche Anforderung** (WA) ist ein Bedarf eines Projekts, der eine messbare Wirkung auf das System des Projekts hat.

Alle diese Begriffe gehören zum Thema **Wissensmanagement** (WM).

Ziel dieses Dokuments ist ein schneller Überblick über Entscheidungsprotokolle.

## Entscheidungsprotokolle sind Arbeitsweisen für Organisationen

Überall dort, wo eine Wahl schwer rückgängig zu machen ist, andere Menschen betrifft oder später hinterfragt wird, verdient sie ein Entscheidungsprotokoll.

- Strategie: einen Markt betreten oder verlassen, zwischen Wachstums- und Profitabilitätshaltung wählen, eine Dreijahreswette festlegen
- Vertrieb: das Gebietsmodell ändern, ein CRM auswählen, die Vergütung umstrukturieren
- Marketing: eine Marke neu positionieren, einen Kanalmix wählen, zwischen Agentur und Inhouse-Modell entscheiden
- Produkt: das Preismodell festlegen, zwischen Selbst bauen und Kaufen wählen, ein Feature oder eine Produktlinie einstellen
- Finanzen: eine Finanzierungsstruktur wählen, eine Kapitalallokationsrichtlinie festlegen
- Personal: eine Fernarbeitsrichtlinie festlegen, Karrierestufen und Gehaltsbänder neu gestalten
- Risiko und Recht: ein bestimmtes Risiko akzeptieren, mindern oder übertragen; eine Obergrenze für die Anbieterkonzentration wählen
- Betrieb: selbst bauen oder kaufen, ein- oder auslagern, eine Liefermethodik wählen
- Öffentlichkeitsarbeit: eine Haltung in der Krisenkommunikation wählen, eine Richtlinie für den Medienkontakt festlegen
- Personalentwicklung: eine Richtlinie für Beförderung oder Weiterbildungsinvestition festlegen
- Technologie: eine Cloud-Datenbank, ein Integrationsmuster, eine Softwaremethodik wählen

Wenn Sie sich vorstellen können, dass jemand in Ihrem Team in einem Jahr fragt „Moment, warum haben wir das so gemacht?“, ist diese Entscheidung ein Kandidat für ein Entscheidungsprotokoll.

## Vorlage für Entscheidungsprotokolle

Siehe unsere [Vorlage](vorlage/index.md), die diese Hauptabschnitte verwendet:

- **Titel**: kurzer Imperativ im Präsens mit bis zu 50 Zeichen.

- **Status**: Kommentierung erbeten | vorgeschlagen | angenommen | abgelehnt | veraltet | ersetzt

- **Problem**: beschreiben Sie das Problem, das Sie angehen wollen, und lassen Sie keine Fragen offen, warum.

- **Annahmen**: beschreiben Sie Annahmen, Prämissen, projektübergreifende Anforderungen usw.

- **Einschränkungen**: halten Sie alle Einschränkungen der Umgebung fest, die diese Entscheidung mit sich bringen könnte.

- **Positionen**: listen Sie die möglichen Kandidatenoptionen als Fakten und Daten auf, nicht als Meinungen.

- **Meinungen**: vom Team und den Stakeholdern, auch von externen Beratern und Prüfern.

- **Auswahl**: erklären Sie, warum Sie eine Position gewählt haben, mit Zweck und Verantwortlichkeit.

- **Auswirkungen**: nennen Sie die Auswirkungen Ihrer Entscheidung, etwa einen Änderungsbedarf.

- **Verwandtes**: etwa Referenzen, projektübergreifende Arbeit und Folgebedarf.

## Wie man mit Entscheidungsprotokollen beginnt

Um mit Entscheidungsprotokollen zu beginnen, sprechen Sie mit Ihren Kolleginnen und Kollegen über diese Bereiche.

Entscheidungen erkennen:

- Wie dringend und wie wichtig ist die Entscheidung?

- Muss sie jetzt getroffen werden oder kann sie warten, bis mehr bekannt ist?

- Sowohl persönliche und kollektive Erfahrung als auch anerkannte Entwurfsmethoden und -praktiken können beim Erkennen von Entscheidungen helfen.

- Idealerweise führen Sie eine Entscheidungs-To-do-Liste, die die Produkt-To-do-Liste ergänzt.

Entscheidungen treffen:

- Es gibt eine Reihe von Entscheidungstechniken, sowohl allgemeine als auch softwarespezifische, etwa Dialogue Mapping.

- Gruppenentscheidungen sind ein aktives Forschungsthema.

Entscheidungen umsetzen und durchsetzen:

- Entscheidungen müssen den Stakeholdern des Systems, die es finanzieren, entwickeln und betreiben, kommuniziert und von ihnen akzeptiert werden.

- Architektonisch erkennbare Codierstile und Code-Reviews, die auf architektonische Belange und Entscheidungen achten, sind zwei verwandte Praktiken.

- Entscheidungen können bei wesentlichen Änderungen an einem System neu betrachtet werden, etwa bei der Weiterentwicklung, dem Upgrade oder der Anpassung eines Systems an veränderte Anforderungen.

Entscheidungen teilen (optional):

- Viele Entscheidungen wiederholen sich über Projekte hinweg.

- Daher können Erfahrungen mit früheren Entscheidungen, gute wie schlechte, wertvolle wiederverwendbare Werte sein, wenn man eine ausdrückliche Wissensmanagementstrategie verfolgt.

- Gruppenentscheidungen sind ein aktives Forschungsthema.

Entscheidungen dokumentieren:

- Es gibt viele Vorlagen und Werkzeuge für Entscheidungsplanung und -erfassung.

- Siehe agile Communities, z. B. die Architecture Decision Records von M. Nygard.

- Siehe traditionelle Softwareentwicklungs- und Architekturentwurfsprozesse, z. B. die von IBM UMF sowie von Tyree und Akerman bei CapitalOne vorgeschlagenen Tabellenlayouts.

Entscheidungsleitfaden:

- Die obigen Schritte sind dem Wikipedia-Eintrag zu [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) entnommen

- Es gibt eine Reihe von Entscheidungstechniken, sowohl allgemeine als auch software- und softwarearchitekturspezifische, etwa Dialogue Mapping.

## Warum sind Entscheidungsprotokolle besser als bloße Notizen?

Ein Entscheidungsprotokoll gibt freien Notizen etwas Struktur.

Eine Vorlage für Entscheidungsprotokolle fügt eine Liste abzudeckender Punkte hinzu, die als Checkliste dient.

Das wichtige Ergebnis: Teams können Entscheidungsprotokolle und Vorlagen nutzen, um die Teamarbeit zu verbessern – beide wirken als Checklisten, die dem Team helfen, alles abzudecken, und sie kommunizieren effizient und wirksam.

Die Vorteile von Entscheidungsprotokollen wachsen tendenziell mit der Teamgröße, der Projektausweitung, Integrationsmöglichkeiten, der Einbindung von Stakeholdern, der langfristigen Wartung und der Entwicklung über die Zeit.

Wir nutzen Entscheidungsprotokolle zum Beispiel mit großen Teams, über mehrere Abteilungen hinweg, mit mehreren Partnerorganisationen, in mehrjährigen Projekten und mit Millionenbudgets. Bei dieser Größe und diesem Umfang bevorzugen wir eine strukturierte Kommunikation gegenüber bloßen freien Notizen.

In der Praxis nutzen wir Entscheidungsprotokolle auch gern, weil sie mehr Beteiligung von Remote-Kolleginnen und -Kollegen, mehr asynchrone Kommunikation, eine effizientere Bewertung von Optionen und mehr Zusammenfassung im weiteren Verlauf fördern. Alle diese Aspekte helfen auch beim Einarbeiten neuer Kolleginnen und Kollegen, weil die Entscheidungen klar, vollständig, knapp und festgehalten sind.

## Wie man mit Entscheidungsprotokollen und Werkzeugen beginnt

Sie können mit Entscheidungsprotokollen und Werkzeugen auf jede beliebige Weise beginnen.

Zum Beispiel:

- Wenn Sie Google Drive und Google Docs mögen, legen Sie einen Ordner `decisions` an und ein Dokument pro Entscheidungsprotokoll.

- Wenn Sie Quellcode-Versionskontrolle mögen, legen Sie ein Verzeichnis `decisions` an und eine Textdatei pro Entscheidungsprotokoll.

- Wenn Sie Projektplanungswerkzeuge wie Atlassian Jira mögen, nutzen Sie den Planungs-Tracker des Werkzeugs.

- Wenn Sie Wikis wie MediaWiki mögen, legen Sie ein Entscheidungsprotokoll-Wiki an, mit einer Wiki-Seite pro Entscheidungsprotokoll.

## Skills für KI

Wenn Sie [Claude Code](https://claude.com/claude-code) oder einen anderen Agenten nutzen, der [Claude-Skills](https://code.claude.com/docs/en/skills) unterstützt, bietet dieses Repository zwei Skills für KI in [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill): für alle, die ein Entscheidungsprotokoll schreiben. Führt durch die Fragen, ob eine Wahl eines braucht, ob die schlanke oder die umfassende Vorlage passt, wie man es entwirft und ablegt, und die Checkliste vor der Veröffentlichung.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill): für die Pflegenden dieses Repositorys selbst: ein Beispiel ergänzen, den Beispielindex und die Querverweise konsistent halten sowie die Dateikonventionen dieses Repositorys.

Um einen zu nutzen, klonen Sie dieses Repository und kopieren den gewünschten Skill-Ordner dorthin, wo Ihr Agent Projekt-Skills lädt (bei Claude Code typischerweise `.claude/skills/<name>` in Ihrem eigenen Projekt) – bitten Sie dann Ihren Assistenten, ihn zu nutzen. Siehe [decision-records.github.io/skills](https://decision-records.github.io/skills/) für mehr und [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) für den Quellcode dieser Seite.

## Empfehlungen für gute Entscheidungsprotokolle

Merkmale eines guten Entscheidungsprotokolls:

- Zeitpunkt – Nennen Sie, wann die Entscheidung getroffen wurde

- Rationalität – Erklären Sie den Grund für die jeweilige Entscheidung.

- Unveränderliche Aufzeichnung – Die in einem bereits veröffentlichten Entscheidungsprotokoll getroffenen Entscheidungen sollten nicht verändert werden.

- Spezifität – Jedes Entscheidungsprotokoll sollte nur eine Entscheidung betreffen.

Merkmale eines guten Kontexts in einem Entscheidungsprotokoll:

- Erklären Sie die Lage und die Geschäftsprioritäten Ihrer Organisation

- Beziehen Sie Begründung und Erwägungen ein, die auf der sozialen und fachlichen Zusammensetzung Ihrer Teams beruhen.

Merkmale guter Konsequenzen in einem Entscheidungsprotokoll:

- Richtiger Ansatz – „Wir müssen anfangen, X statt Y zu tun“

- Falscher Ansatz – Erklären Sie die Entscheidung nicht anhand von „Vorteilen“ und „Nachteilen“ der jeweiligen Entscheidung

Ein neues Entscheidungsprotokoll kann an die Stelle eines früheren treten:

- Wird eine Entscheidung getroffen, die ein früheres Entscheidungsprotokoll ersetzt oder ungültig macht, legen Sie eine neue Entscheidung an und verweisen auf die alte.

## Teamarbeit-Ratschläge für Entscheidungsprotokolle

Wenn Sie erwägen, Entscheidungsprotokolle mit Ihrem Team zu nutzen, hier einige Ratschläge, die wir in der Arbeit mit vielen Teams gelernt haben.

Sie haben die Chance, Ihre Kolleginnen und Kollegen zu führen, indem Sie gemeinsam über das „Warum“ sprechen, statt das „Was“ vorzuschreiben. Entscheidungsprotokolle sind zum Beispiel eine Möglichkeit für Teams, klüger zu denken und besser zu kommunizieren; sie sind nicht wertvoll, wenn sie nur eine nachträglich erzwungene Papierkram-Anforderung sind.

Manche Teams ziehen den Namen „Entscheidungen“ der Abkürzung „Entscheidungsprotokolle“ deutlich vor. Wenn manche Teams den Verzeichnisnamen „decisions“ verwenden, geht es, als ginge ein Licht an, und das Team beginnt, mehr Informationen in das Verzeichnis zu legen, etwa Anbieterentscheidungen, Planungsentscheidungen, Terminentscheidungen usw. Alle diese Arten von Informationen können dieselbe Vorlage nutzen. Wir vermuten, dass Menschen mit Wörtern („Entscheidungen“) schneller lernen als mit Abkürzungen („Entscheidungsprotokolle“), dass Menschen motivierter sind, laufende Arbeitsdokumente zu schreiben, wenn das Wort „Protokoll“ entfällt, und dass manche Entwickler und manche Führungskräfte das Wort „Architektur“ nicht mögen.

In der Theorie ist Unveränderlichkeit ideal. In der Praxis hat Veränderlichkeit bei unseren Teams besser funktioniert. Wir fügen die neue Information mit Datumsstempel und einem Hinweis, dass die Information nach der Entscheidung eintraf, in das bestehende Entscheidungsprotokoll ein. Dieses Vorgehen führt zu einem „lebenden Dokument“, das wir alle aktualisieren können. Typische Aktualisierungen entstehen, wenn wir Informationen dank neuer Kolleginnen und Kollegen, neuer Angebote oder realer Ergebnisse unserer Nutzung erhalten oder nach nachträglichen Änderungen Dritter wie Anbieterfähigkeiten, Preismodellen, Lizenzvereinbarungen usw.

## Teamarbeit-Fragen zu Entscheidungsprotokollen

### Wer kann ein Entscheidungsprotokoll erstellen?

Betrachten Sie Bereiche wie bestimmte Personen, bestimmte Rollen, bestimmte Teams oder bestimmte Abteilungen; bedenken Sie auch, ob es Personen, Rollen, Teams oder Abteilungen gibt, die ein Entscheidungsprotokoll in Auftrag geben können, also eines anfordern, das jemand anderes verfasst.

Beispielantwort: Jede Person in unserer Organisation, die die README-Seite zu Architecture Decision Records gelesen hat, kann ein Entscheidungsprotokoll vorschlagen, das heißt, sie kann beginnen, es zu schreiben, und es mit dem Team teilen.

### Was rechtfertigt es, ein Entscheidungsprotokoll anzulegen?

Betrachten Sie Bereiche wie die Arbeitsweisen des Teams Ihrer Organisation, die Struktur Ihres Softwaresystems, die teamübergreifende Abstimmung, die langfristige Wartbarkeit, externe Schnittstellen, wem Sie nützen wollen und Ähnliches.

Beispielantwort: Wir wollen ein Entscheidungsprotokoll anlegen, wenn künftige Entwickler das „Warum“ dessen verstehen sollen, was wir tun.

### Was rechtfertigt es, kein Entscheidungsprotokoll anzulegen?

Betrachten Sie Bereiche wie Entscheidungen, die nichts mit Architektur zu tun haben oder winzig sind, etwa mit minimalem Risiko, in sich geschlossen oder nur für einen Entwickler, oder die bereits anderswo vollständig abgedeckt sind, etwa durch Standards, Richtlinien oder Dokumentation, oder die vorübergehend sind, etwa Behelfslösungen, Proofs of Concept oder Experimente.

Beispielantwort: Wir wollen auf ein Entscheidungsprotokoll verzichten, wenn eine Entscheidung in Umfang, Zeit, Risiko und Kosten begrenzt ist oder anderswo bereits abgedeckt wird.

### Wie sieht der Lebenszyklus eines Entscheidungsprotokolls aus?

Betrachten Sie Bereiche wie den Erstellungsprozess, den Recherche­prozess, den Entscheidungsprozess, den Umsetzungsprozess und den Auslaufprozess. Überlegen Sie, wie Sie den Lebenszyklus des Entscheidungsprotokolls im Zeitverlauf verfolgen, etwa wie Sie es von einem Zustand in den nächsten überführen und wie Sie dies den Stakeholdern mitteilen.

Beispielantwort: Wir wollen, dass ein Entscheidungsprotokoll fünf Lebenszyklusphasen hat: Anstoßen → Recherchieren → Bewerten → Umsetzen → Pflegen → Auslaufen lassen.

### Was sind die Kriterien für die Lebenszyklusschritte eines Entscheidungsprotokolls?

Betrachten Sie Bereiche wie Abnahmekriterien für ein Entscheidungsprotokoll, also woran Sie erkennen, dass es gut genug ist, um von einem Lebenszyklusschritt zum nächsten fortzuschreiten. Ist das Problem klar formuliert? Wurden die Alternativen betrachtet? Sind die Zielkonflikte hinreichend verstanden und dokumentiert?
Ist der gesamte relevante Kontext vorhanden? Sind alle relevanten Stakeholder eingebunden? Wurde alles Feedback eingearbeitet?

Beispielantwort: Wir wollen, dass Stakeholder über ein Entscheidungsprotokoll abstimmen, wenn das aktive Team 1) seine Recherche abgeschlossen hat, 2) seine Bewertung abgeschlossen hat, 3) den Vorschlag für das Entscheidungsprotokoll mit einer Bitte um Kommentierung und einer Frist von einer Woche an die Stakeholder veröffentlicht hat, 4) alle Stakeholder-Kommentare eingearbeitet und bearbeitet sind.

### Welche Rollen und Verantwortlichkeiten wirken mit einem Entscheidungsprotokoll zusammen?

Betrachten Sie Rollen wie Antragstellende, Recherchierende, Bewertende, Prüfende, Genehmigende, Pflegende und Ähnliche. Betrachten Sie Verantwortlichkeiten wie die Kommunikation mit Stakeholdern, die Sicherstellung der Erwartungen, das Teilen auf der Website oder im Intranet und die regelmäßige Überprüfung der Arbeit, besonders wenn relevante Änderungen eintreten.

Beispielantwort: Wir wollen, dass jedes Entscheidungsprotokoll stets eine primäre Ansprechperson, eine sekundäre Ansprechperson und ein verantwortliches Team hat; diese sind zuständig für Kommunikation, Veröffentlichung, Pflege, regelmäßige Überprüfung mindestens einmal jährlich und bei Bedarf das schließliche Auslaufenlassen.

### Wie wirkt Governance mit einem Entscheidungsprotokoll zusammen?

Betrachten Sie Bereiche wie die Arbeitsweisen Ihrer Organisation, besondere Compliance-Anforderungen etwa für rechtliche oder personelle Aspekte, und wie Sie Konsens gegenüber Konflikt und Eskalation handhaben wollen. Gibt es Bereiche, Personen oder Teams, die bei einem Entscheidungsprotokoll mehr Einfluss haben können als andere, etwa indem sie es genehmigen, darüber abstimmen oder es mit einem Veto belegen können?

Beispielantwort: Die Governance eines Entscheidungsprotokolls liegt in dieser Rangfolge: der CEO, der CTO, der Chief Legal Officer, das Team, das ein Entscheidungsprotokoll umsetzt, die sachkundigsten Fachleute im Team. Niemand sonst hat Governance, sofern sie nicht im Entscheidungsprotokoll beschrieben ist.

### Welche Prinzipien wirken mit einem Entscheidungsprotokoll zusammen?

Betrachten Sie Bereiche wie die Arbeitsweisen Ihrer Organisation, die schnelles gegenüber langsamem Vorgehen einschließen, Entscheidungskonsens gegenüber Entscheidungskonflikt, Risikopräferenzen gegenüber Sicherheitspräferenzen, öffentliche gegenüber nichtöffentlicher Diskussion und Ähnliches.

Beispielantwort: Wir nutzen die Führungsprinzipien Handlungsorientierung, widersprechen-und-festlegen, 70-%-Schätzungen sind gut genug für leicht umkehrbare, leicht isolierbare Entscheidungen, und öffentliche Arbeitsweisen mit Ausnahme vertraulicher Informationen gemäß der Vertraulichkeitsvereinbarung unserer Organisation.

## Weitere Informationen

Einführung:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Vorlagen:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Vertiefung:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/): kostenlose monatliche Lektion zur Softwarearchitektur

Werkzeuge:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Unternehmensspezifische Leitfäden:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Beispiele:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videos:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Bücher:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Siehe auch:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
