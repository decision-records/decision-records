# ITIL 5

* Status: request for comments
* Date: 2026-09-30
* Decision-maker(s): Chief Information Officer (to be confirmed)
* Owner: Head of IT Service Management

Summary: Work in progress. This is a starting point for an IT organisation that is considering how, and in what order, to adopt ITIL 5 for IT service management. It shows how a team can frame the question, debate options, and gather information. It records no decision, and it does not restate what ITIL 5 says.

## Issue

The IT service desk and the teams around it have grown without a common way of working: incidents, requests, and changes are handled differently by different teams, and recurring incidents are seldom analysed. Leadership is interested in basing IT service management on ITIL, the widely used guidance for IT service management, in its latest version (ITIL 5), so that internal teams, suppliers, and auditors share practices and vocabulary.

ITIL 5 is new and is being released in stages, so the team must first establish what is actually available and stable. The questions to answer:

* What problem are we trying to solve, and is ITIL 5 the right way to solve it, or is the organisation better served by adopting selected practices, staying with the version it already knows, or aligning to the international standard ISO/IEC 20000-1?
* If the team proceeds, in what order, and at what pace?
* What do we need to be able to do (capabilities, tools, data) before each step?

## Assumptions

Each assumption is something to test.

* **The pain is mainly in a few practices** (for example incident, request, and change handling). Test: look at a sample of recent incidents and changes and map where time and quality are lost.
* **Practices can be adopted separately** rather than only as a package. Test: read the framework's guidance and talk to organisations that adopted it in stages.
* **The service desk can retrain while running the service.** Test: estimate the time each practice needs from staff, against the time they have.
* **Suppliers and auditors will value a common vocabulary.** Test: ask the main ones what they currently use and expect.
* **Whether ITIL 5 material is mature enough to adopt now.** Test: check what has been published and certified so far, and what is still to come.

## Constraints

* The service must keep running during any change; the service desk cannot stop to retrain.
* Tooling changes should be limited to what a step requires; a large platform change is a separate decision.
* Old and new ways of working will coexist for a time. The team should say how long that is acceptable.
* Unknown, to be confirmed: licensing and training cost models for the framework, supplier contract terms that reference a given framework, and any audit or regulatory expectations.

## Options considered

For every option the team should estimate value, costs, timeline, and capability needs, and note the evidence that would change its mind.

* **Adopt everything at once across all teams.**
  * Value: one common way of working soonest.
  * Cost drivers: training for all staff; process redesign for all practices; tooling changes; lost capacity while teams retrain; the cost of reversing a poor start.
  * Timeline shape: short plan, long recovery if it goes poorly.
  * Capabilities needed: strong change leadership and enough spare capacity to absorb the change.
* **Adopt by practice**, starting where the pain is greatest and users are most affected (commonly incident and request handling), then change, then problem analysis and continual improvement, with each phase having its own measures.
  * Value: each phase teaches the team what to change in the next; early wins are visible to users.
  * Cost drivers: a longer overall programme; running old and new practices side by side; repeated training; maintaining the exit measures.
  * Timeline shape: a sequence of phases, each long enough to see a measurable change before the next starts.
  * Capabilities needed: reliable service data (resolution time, first-time fix, share of changes causing incidents) and an owner for each practice.
* **Adopt by team**: one team adopts all practices first as a pilot, then others follow.
  * Value: a complete working example early.
  * Cost drivers: one service is split across two ways of working while the pilot runs; hand-offs between the pilot team and others become harder.
  * Risks: confuses users and suppliers; the pilot team's context may not be typical.
* **Align to ISO/IEC 20000-1 instead of, or alongside, ITIL.** A certifiable requirements standard for a service management system, which some organisations prefer for audit and supplier assurance.
  * Value: external recognition; clear requirements.
  * Cost drivers: assessment and certification effort; documentation.
  * Risks: can encourage a compliance mindset over improvement.
* **Make no framework change yet** and fix the specific pains directly. A real baseline option to cost honestly.

## Argument

Points of debate the team should expect:

* **Framework or problem?** Is the goal to adopt a framework, or to reduce repeat incidents and slow changes? Choose the option that is judged by the second.
* **Pace versus capacity.** A faster programme gets benefits sooner but takes the same people away from running the service.
* **Version risk.** Adopting something newly released brings fewer worked examples and less training material; staying with a known version is safer but may age.
* **Vocabulary versus practice.** Using the same words as suppliers is easier than changing how work is done. Which matters more?

How the team could evaluate costs and trade-offs:

1. Build a cost model in the organisation's own terms. One-time: training, process design, tooling change, consulting, backfill. Recurring: licences, process owner time, audits. Hidden: reduced throughput during transition, supplier contract changes. Give ranges, not single numbers.
2. Choose benefit measures before starting, so success is not defined afterwards: resolution time, first-time resolution, share of changes causing incidents, repeat-incident rate, user satisfaction, audit findings.
3. Estimate payback under best, likely, and worst scenarios, and test how sensitive the answer is to the assumptions the team is least sure of.
4. Score options with a weighted matrix (value, cost, speed, risk, fit with suppliers, capability needed).
5. Ask what each option does to reversibility: which can be stopped after one phase without wasting the work?

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and by when.
* Settle the criteria and their weights first.
* Gather the evidence listed above, including what is currently available for ITIL 5.
* Publish the draft for comment with a deadline, then decide and update the Status.

## Implications

If the team chooses a phased approach, it would need to:

* Publish exit measures for each phase and report against them regularly to the sponsor.
* Train staff on each practice just before its phase.
* Keep practices that are not yet in scope running as they do today, and say so.
* Delay any large service-management platform purchase until the evidence from the first phases is in.
* Decide what happens when a phase misses its measures: repeat, adjust, or stop.

## Related decisions

* [Business frameworks](../business-frameworks/): the same staged-adoption pattern applied to a different framework.
* [Choose our information technology frameworks](../information-technology-frameworks/): how ITIL fits with other frameworks the group is considering.
* Decisions not yet made: tooling; supplier contract changes; certification or not.

## Related notes

* Open items: confirm what exists today for ITIL 5; list the practices currently performed well and badly; ask the main suppliers and auditors what they expect.
* Learn more:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [IT service management](https://en.wikipedia.org/wiki/IT_service_management), [Incident management](https://en.wikipedia.org/wiki/Incident_management), [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process), [Change management](https://en.wikipedia.org/wiki/Change_management)
  * ISO: [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC 38500:2024, Governance of IT for the organisation](https://www.iso.org/standard/81684.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex)
  * Read: [PeopleCert](https://www.peoplecert.org/); [DORA](https://dora.dev/)
