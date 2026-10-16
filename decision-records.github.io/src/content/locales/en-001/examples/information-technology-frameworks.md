# Choose our information technology frameworks

* Status: request for comments
* Date: 2026-10-14
* Decision-maker(s): Chief Information Officer and Chief Technology Officer (to be confirmed)
* Owner: Head of Technology Operations

Summary: Work in progress. This is a starting point for a technology group that has been asked to adopt several frameworks (for example ITIL, the Agile Manifesto, Extreme Programming, and Six Sigma) and needs to decide which to use, for which work, and in what order. It shows how a team can frame the question, debate options, and gather information. It records no decision.

## Issue

Different leaders have asked the technology group to adopt ITIL for service management, the Agile Manifesto for delivery, Extreme Programming for engineering, and Six Sigma for quality, sometimes in the same teams and the same period. Each request is reasonable alone, but together they overlap, use different vocabularies, and ask people to change faster than they can absorb.

The questions to answer:

* What problem does each framework solve, and for which kind of work?
* Where do they overlap or conflict, and which should take precedence?
* In what order should we introduce them, and how many changes can a team absorb at once?
* How will we know whether the combination helps?

## Assumptions

Each assumption is something to test.

* **Each framework works best on the kind of work it was designed for.** Test: read the sources and talk to people who have used each framework.
* **Teams can absorb one new framework at a time**, not several. Test: ask teams what changes are already under way and what capacity they have.
* **Sponsors will accept waiting** if they know the order and the reason. Test: talk to them early.
* **A written boundary between frameworks will reduce conflict.** Test: draft one and test it on real examples of conflict.

## Constraints

* The group has limited capacity for change in any one period.
* The frameworks use different vocabularies, so shared terms such as incident, change, release, and defect must be defined once.
* Full adoption of several frameworks could take years.
* Unknown, to be confirmed: current practice, contractual or audit expectations, and any frameworks already in use.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Adopt every requested framework everywhere.**
  * Value: each sponsor gets what they asked for.
  * Risks: overload; conflicting guidance (for example fixed change approvals against continuous release); impossible to tell which change caused which result.
* **Adopt one framework as the single standard.**
  * Value: simple to explain.
  * Risks: no one framework covers service operations, product delivery, engineering practice, and quality equally well.
* **Assign each framework to the kind of work it fits, and phase them in one at a time.** For example ITIL practices for running live services, the Agile Manifesto's values for how delivery teams plan and work, Extreme Programming practices for building software, and Six Sigma for processes where defects can be measured.
  * Value: clearer for teams; easier to learn from.
  * Cost drivers: a written boundary document; coordination; a long programme.
* **Adopt a governance or standards umbrella** such as ISO/IEC 38500 (governance of IT) or ISO/IEC 20000-1, and let teams choose methods within it.
* **Adopt none of them wholesale**; select practices that address the group's measured problems.

## Argument

Points of debate the team should expect:

* **Frameworks or outcomes?** The aim is better results for customers, not adopting frameworks. Which outcomes matter most?
* **Conflicts.** Where guidance conflicts, who decides?
* **Order.** Which should go first: the one with the most sponsor pressure, or the one that supports the others?
* **Vocabulary.** Shared words reduce friction, but false equivalence hides real differences.

How the team could evaluate costs and trade-offs:

1. List problems and desired outcomes first, with measures (for example from DORA research on software delivery performance, plus service and quality measures).
2. For each framework, estimate costs in the organisation's own terms: training, process change, tooling, time lost, and ongoing support. Show ranges.
3. Estimate the capacity for change of each team, and sequence so that no team carries more than it can absorb.
4. Compare options under best, likely, and worst scenarios; choose the one that is easiest to adjust if the evidence changes.
5. Review after the first two frameworks and revisit the order if evidence suggests a better one.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who must be consulted (including the sponsors).
* Agree criteria and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides to assign frameworks by kind of work and phase them in, it would need to:

* Name an owner for the boundary document and a way to resolve conflicts, with escalation.
* Start only one framework in a team at a time, and begin the next only when the previous has met its own exit measures.
* Tell sponsors of later frameworks the order and the reason now.
* Define shared terms once, in the boundary document.
* Review the whole approach after the first two frameworks.

## Related decisions

* [Phase in the Agile Manifesto](../agile-manifesto/), [Phase in ITIL 5](../itil-5/), [Phase in Extreme Programming](../extreme-programming/), and [Phase in Six Sigma](../six-sigma/): the decisions on each framework.
* [Phase in a business framework](../business-frameworks/): the general phasing pattern.
* Decisions not yet made: tooling; the order of later frameworks.

## Related notes

* Open items: list current practices; ask sponsors what outcomes they want; draft a first boundary document.
* Learn more:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organisation](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Read: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
