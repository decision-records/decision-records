# Build vs. buy for a project

* Status: request for comments
* Date: 2026-06-01
* Decision-maker(s): COO (to be confirmed)
* Owner: Director of Operations

Summary: Work in progress. This is a starting point for a team that needs a new capability, here a customer-facing scheduling tool, and is deciding whether to build it, buy it, or do something in between. It shows how a team can frame the question, debate the options, and gather information. It records no decision.

## Issue

A services business schedules work with a manual, spreadsheet-based process that has caused double-bookings and damaged customer relationships. A fix is needed within a limited time, and the team must decide whether to build a tool internally or buy an existing one.

The questions to answer:

* What must the tool do (requirements), and which of those are essential?
* How well does each route meet the requirements, within the time available?
* What is the full cost of each route over its useful life, including what the team gives up by choosing it?
* What happens if requirements change, or if the chosen route fails?

## Assumptions

Each assumption is something to test.

* **Most scheduling needs are common to other organisations, so an existing product can cover them.** Test: list the requirements and ask vendors to show how each is met.
* **The unusual cases are small enough to handle by workaround.** Test: count how often they occur, and write down the workaround for each.
* **Internal engineers can build and maintain the tool.** Test: estimate the effort with the people who would do it, and ask what else they would not do.
* **Vendors' timelines are realistic.** Test: speak to reference customers of similar size, including those whose projects ran late.

## Constraints

* A fix is needed within a fixed period.
* Other committed product initiatives must keep their timelines, so engineering capacity cannot simply be taken from them.
* The tool handles customer data, so security and privacy must be checked.
* Unknown, to be confirmed: integration needs, expected growth, and what happens at the end of a vendor contract.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Build in-house.**
  * Value: exact fit to the organisation's rules; full control of the roadmap.
  * Cost drivers: design, development, testing, hosting, support and maintenance for the whole life of the tool; the opportunity cost of what engineers do not build instead.
  * Timeline shape: often longer than first estimates; value arrives at the end.
  * Capabilities needed: product management; engineering; operations.
* **Buy an existing product.**
  * Value: faster; costs spread; benefits from vendor improvements.
  * Cost drivers: licences, implementation, configuration, training, integration, administration, and exit.
  * Risks: gaps against requirements; vendor changes; lock-in.
* **Buy a product and commission custom work from the vendor.** Closes gaps, but adds time and cost, and carries delivery risk.
* **Assemble from smaller tools** (for example a low-code platform or a combination of existing services).
* **Improve the manual process first** with a stopgap, to buy time for a better decision.

## Argument

Points of debate the team should expect:

* **Fit versus speed.** A perfect fit that arrives late may be worse than a good fit now.
* **Core or context?** Is scheduling part of what makes the business distinctive? If not, buying is usually favoured.
* **Hidden costs.** Building has ongoing maintenance; buying has ongoing licences, integration, and exit.
* **Reversibility.** Which choice is easier to undo if it proves wrong?

How the team could evaluate costs and trade-offs:

1. Write requirements and rank them. Score each route against them and note gaps.
2. Estimate total cost of ownership over a stated horizon in the organisation's own terms: one-time costs, recurring costs, internal staff time, integration, training, and exit. Show ranges.
3. Estimate the cost of delay: the effect of each additional period of double-bookings.
4. Compare options under best, likely, and worst scenarios, and test the effect of requirement changes.
5. Use a weighted matrix (fit, speed, cost, risk, control, reversibility) and a pre-mortem.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who must agree.
* Agree requirements and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides to buy, it would need to:

* Name an implementation lead and plan training within the vendor's timeline.
* Document workarounds for unsupported cases, log how often they are used, and review after live use.
* Define what would trigger a follow-on decision on custom work.
* Confirm that no engineering capacity is taken from committed initiatives.

## Related decisions

* [Select a CRM platform](../sales-crm-vendor-selection/): a similar choice for a different system.
* [Choose the primary database](../software-architecture-database-choice/): a technology instance of build/buy and lock-in questions.
* [Reduce single-vendor concentration risk](../risk-single-vendor-dependency/): dependence on a vendor.
* Decisions not yet made: custom integration; data retention.

## Related notes

* Open items: write and rank requirements; ask vendors for reference customers; estimate build effort with engineers.
* Learn more:
  * Wikipedia: [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Commercial off-the-shelf](https://en.wikipedia.org/wiki/Commercial_off-the-shelf), [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing), [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost), [Decision matrix](https://en.wikipedia.org/wiki/Decision_matrix), [Pre-mortem](https://en.wikipedia.org/wiki/Pre-mortem)
  * ISO: [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html)
  * Video: [Making better build vs buy decisions](https://www.youtube.com/watch?v=sGOamUc0zM0) (Chris Bell, LeadDev)
