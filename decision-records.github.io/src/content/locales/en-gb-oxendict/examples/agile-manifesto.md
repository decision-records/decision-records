# Phase in the Agile Manifesto

* Status: request for comments
* Date: 2026-02-16
* Decision-maker(s): Chief Technology Officer (to be confirmed)
* Owner: Head of Delivery

Summary: Work in progress. This is a starting point for a team that is considering how to introduce the values and principles of the Agile Manifesto into how delivery teams plan and work. It shows how a team can frame the question, debate the options, and gather information. It records no decision.

## Issue

Delivery teams currently work in long, planned projects with fixed scope and hand-offs between analysis, build, and test. Releases are infrequent, and customers often receive something that no longer matches what they need. Leaders are interested in the values and principles of the Agile Manifesto: individuals and interactions, working software, customer collaboration, and responding to change.

The team is also aware that "agile transformations" often fail when ceremonies are imposed without the change underneath them. The questions to answer:

* What problems are we trying to solve, and how would we know they are solved?
* Do the manifesto's values fit our products, customers, contracts, and regulation, or only some of them?
* How do we introduce the values so that behaviour changes, not only meeting names?
* Who goes first, and what happens to teams that do not?

## Assumptions

Each assumption is something to test.

* **Shorter feedback loops would help our customers.** Test: ask customers and delivery teams how often they would want to see working software, and what stops that today.
* **Volunteer teams will adopt the values in substance.** Test: look at what volunteers actually want to change, and whether they have sponsors.
* **Our contracts and governance allow more frequent, smaller releases.** Test: check contract terms, approvals, and compliance steps for what blocks frequent delivery.
* **Working software delivered frequently is a fair measure of progress.** Test: agree on how to observe it (time from idea to customer, release frequency, customer feedback).

## Constraints

* Commitments to customers in fixed-scope contracts cannot change automatically; each will need its own conversation.
* The organization will probably run two ways of working side by side for some time.
* Teams still have to deliver while they learn.
* Unknown, to be confirmed: budget for coaching or training, and any regulatory or audit steps that assume a particular lifecycle.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and write down the evidence that would change the team's mind.

* **Mandate one agile method for every team from a fixed start date.**
  * Value: consistency and a clear signal from leadership.
  * Cost drivers: training for everyone; role changes; tool changes; time lost while teams adapt; the cost of discovering later that the method suits some teams badly.
  * Timeline shape: fast start; long tail of correcting course.
  * Risks: ceremonies without change; people who are not ready perform them without changing how they work.
* **Phase in by team, starting with volunteers.** Teams that want to try it release in short cycles, choose practices that fit them, and show results; the manifesto's values are the guide.
  * Value: real local examples; practices tied to values.
  * Cost drivers: coaching time; running two ways of working; effort to collect and share what is learned.
  * Timeline shape: waves, with later waves joining once earlier teams have run long enough to show results.
  * Capabilities needed: sponsors; a way to measure outcomes; people who can coach.
  * Risks: uneven adoption; volunteers are not typical of the whole organization.
* **Bring in an outside coaching organization to lead the change.**
  * Value: experience and speed.
  * Cost drivers: fees; the cost of dependency; the knowledge that leaves when the engagement ends.
  * Risks: capability may not stay in the company.
* **Adopt only selected practices** (for example short cycles and regular retrospectives) without adopting the wider values. Cheaper, but may leave the underlying problems unaddressed.
* **Keep the current approach** and fix specific delivery problems directly. A real baseline.

## Argument

Points of debate the team should expect:

* **Method or mindset?** The manifesto is a set of values and principles, not a specific method. Teams choose among methods (such as Scrum, Kanban, or Extreme Programming). How much choice should teams have?
* **Fixed scope versus responding to change.** How far do existing contracts and budgets constrain what teams can do?
* **Who is measured on what?** If teams are still measured on plan adherence, frequent change will feel risky.
* **Speed of rollout versus depth.** What does the team lose by going slower, and what does it risk by going faster?

How the team could evaluate costs and trade-offs:

1. Cost the options in the organization's own terms: training and coaching time, role changes, tool changes, contract renegotiation, productivity dip during transition. Show ranges rather than single figures.
2. Choose outcome measures before starting: time from idea to working software in customers' hands, release frequency, defects found after release, customer feedback, team satisfaction. Avoid counting ceremonies.
3. Compare options under best, likely, and worst scenarios, and ask which option leaves the organization best placed if it stalls.
4. Use a weighted decision matrix for value, cost, risk, speed, fit with contracts, and capability needed.
5. Run a pre-mortem: assume the change failed and write down why.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and by when.
* Agree the criteria and weights first.
* Gather the evidence listed under Assumptions and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team chooses a team-by-team approach, it would need to:

* Name a sponsor and a person who collects what volunteer teams learn.
* Say openly which teams go next, in what order, and why, so teams that move later do not feel left behind.
* Decide how to handle fixed-scope commitments when each contract comes up for renewal.
* Agree a stopping rule: if early teams show no improvement after a stated period, pause and record what was learned.
* Treat practices as a choice for each team within the manifesto's values.

## Related decisions

* [Phase in Extreme Programming](../extreme-programming/): specific engineering practices that fit agile values.
* [Choose our information technology frameworks](../information-technology-frameworks/): how agile fits with other frameworks.
* [Phase in a business framework](../business-frameworks/): the same phasing pattern applied to goal setting.
* Decisions not yet made: contract changes; coaching; tooling.

## Related notes

* Open items: list which teams have volunteered and why; check which contracts and approvals assume a fixed plan; agree outcome measures.
* Learn more:
  * Wikipedia: [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Scrum](https://en.wikipedia.org/wiki/Scrum_(project_management)), [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)), [Cynefin framework](https://en.wikipedia.org/wiki/Cynefin_framework), [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)
  * ISO: [ISO 21502:2020, Guidance on project management](https://www.iso.org/standard/74947.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Read: [Manifesto for Agile Software Development](https://agilemanifesto.org/) and its [twelve principles](https://agilemanifesto.org/principles.html); [DORA](https://dora.dev/)
