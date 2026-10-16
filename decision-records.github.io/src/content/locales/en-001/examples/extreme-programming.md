# Extreme Programming

* Status: request for comments
* Date: 2025-10-06
* Decision-maker(s): Head of Engineering (to be confirmed)
* Owner: Engineering Manager

Summary: Work in progress. This is a starting point for an engineering team that is considering how to introduce practices from Extreme Programming (XP), such as test-driven development, pair programming, continuous integration, and small releases. It shows how a team can frame the question, debate the options, and gather information. It records no decision.

## Issue

Product teams ship features in large batches, and defects found late are expensive: a noticeable share of releases need an urgent fix after release. Engineering leaders are interested in practices from Extreme Programming, an agile software development method that emphasises technical practices such as test-driven development, pair programming, continuous integration, small releases, refactoring, and collective code ownership.

These practices support each other, but they also change how engineers work every day. Adopting all of them at once is likely to meet resistance and to be done superficially. The questions to answer:

* Which problems do we want to solve (late defects, slow feedback, knowledge held by a few people), and which practices address them?
* In what order should practices be introduced, and who goes first?
* What would we measure to know that the practices are helping?
* What is the right balance between a shared standard and each team's choice?

## Assumptions

Each assumption is something to test.

* **Late defects are mainly caused by lack of fast automated feedback.** Test: trace a sample of urgent fixes back to where the defect could have been caught.
* **The foundational practices (continuous integration and automated tests) make the others possible.** Test: ask teams that have tried the practices which ones depended on which.
* **Engineers will adopt practices they see working in a team beside them.** Test: ask engineers what would persuade them, and what worries them.
* **The rate of urgent fixes after release is a fair measure of progress.** Test: agree how it will be counted, and check that other measures (lead time, change failure rate) do not tell a different story.

## Constraints

* Teams still have to deliver features while they learn, so output in the first period will probably be lower.
* Engineers should keep a choice about how they pair and which tools they use.
* Existing build and test infrastructure may need work before continuous integration is useful.
* Unknown, to be confirmed: how much of the codebase is testable today, and whether regulatory or customer constraints affect release frequency.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Adopt all practices at once in every team.**
  * Value: practices reinforce each other.
  * Cost drivers: training; slower delivery during learning; tooling work across all teams at once.
  * Risks: large change; teams without the underlying skills may abandon the practices within weeks.
* **Adopt the practices in a chosen order, team by team.** For example continuous integration and automated tests first (the foundations), then small releases and pair programming, then test-driven development.
  * Value: each practice has time to settle; early ones make later ones possible; the first team's experience guides the rest.
  * Cost drivers: coaching; time for pairing and writing tests built into plans; infrastructure work for the pipeline.
  * Timeline shape: sequential, with the next team joining when the previous team has kept its release pipeline healthy for a stated period.
  * Capabilities needed: a coach; a reliable build pipeline; manager support for the dip in output.
  * Risks: slow; practices adopted unevenly.
* **Adopt only the easy practices.** Low effort, but may skip those with the largest benefit, such as automated testing.
* **Adopt a different set of practices** (for example those described by DORA research on software delivery, such as continuous delivery, trunk-based development, and loosely coupled architecture) and treat XP as one source among several.
* **Do nothing new** and address specific causes of defects directly. A real baseline.

## Argument

Points of debate the team should expect:

* **Pair programming.** A practice many engineers are wary of. Where does it help (knowledge sharing, complex work), and where does it not?
* **Standardise or let teams choose?** Shared outcomes (fewer urgent fixes, faster feedback) with team freedom in how to reach them, or a stricter standard?
* **Quality versus speed in the short term.** Are leaders willing to accept lower output while teams learn?
* **TDD, a means or an end?** Some practices (such as test-driven development) are debated even among experienced practitioners. The team should decide what problem the practice addresses before adopting it.

How the team could evaluate costs and trade-offs:

1. Cost the current approach: effort spent on urgent fixes, delays caused by late defects, customer impact. Use ranges in the organisation's own terms.
2. Cost the programme: coaching, training, time for pairing and tests, infrastructure for the pipeline, and the temporary dip in delivery.
3. Choose measures first: share of releases needing urgent fixes, lead time for changes, deployment frequency, time to restore service (the DORA measures), and engineer feedback.
4. Compare options under best, likely, and worst scenarios; ask how the answer changes if the benefit appears later or smaller than hoped.
5. Use a weighted matrix and a pre-mortem.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and by when.
* Agree criteria and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team chooses a phased approach, it would need to:

* Name a coach and ask the first team to report honestly on what helped and what did not.
* Plan time for pairing and for writing tests into delivery plans.
* Invest in the build and test pipeline before relying on it.
* Agree a stopping rule: if a practice is not helping after a stated period, the team can propose to stop it and record why.
* Keep engineers' choice about how they pair and which tools they use; practices should set the outcome, not every detail of how it is reached.

## Related decisions

* [The Agile Manifesto](../agile-manifesto/): the wider decision about values that these practices support.
* [Choose our information technology frameworks](../information-technology-frameworks/): how XP fits with other frameworks.
* Decisions not yet made: pipeline and tooling investment; code ownership model.

## Related notes

* Open items: sample recent urgent fixes; ask engineers about their concerns with pairing and testing; check what the build pipeline can do today.
* Learn more:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Read: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
