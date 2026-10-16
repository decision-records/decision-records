# Reduce single-vendor concentration risk

* Status: request for comments
* Date: 2026-05-20
* Decision-maker(s): COO (to be confirmed)
* Owner: Head of Procurement

Summary: Work in progress. This is a starting point for a team that is considering how to respond to a heavy dependence on one vendor for critical services. It shows how a team can frame the risk, debate the options, and gather information. It records no decision.

## Issue

An internal risk review found that a large share of critical infrastructure spend goes to a single vendor. That vendor had an unplanned outage that disrupted a customer-facing service, and its prices have risen with no contractual cap. Continuing as is leaves the organization exposed to availability risk and to unchecked cost growth.

The questions to answer:

* How much of what we depend on is actually concentrated, and what happens to the business if the vendor fails or raises prices again?
* How likely and how severe are those events, and what are we willing to accept?
* What are the realistic ways to reduce the risk, at what cost, and how fast?
* What would a safe exit or fallback look like?

## Assumptions

Each assumption is something to test.

* **The outage and price rise reflect a lasting pattern**, not a one-off. Test: review incident history, vendor communications, and market prices.
* **A second vendor can run part of the critical workload at acceptable quality.** Test: shortlist candidates and run a limited trial.
* **The primary vendor will improve terms if it sees credible alternatives.** Test: ask for a renewal proposal while evaluating other options.
* **A phased migration can avoid service disruption.** Test: review the technical dependencies and the contract's limits on moving workload.

## Constraints

* Customer-facing service must not be disrupted during any transition.
* Contract terms may limit how quickly workload can be moved, and may include charges to leave.
* Any new vendor should be assessed using the same criteria as the original.
* Unknown, to be confirmed: data portability, proprietary services in use, exit fees, and regulatory expectations about third-party risk.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Accept the risk and monitor.**
  * Value: no near-term cost or effort.
  * Risks: leaves both outage and price exposure; the risk review may not allow it at current concentration.
* **Renegotiate with the existing vendor** for service levels, a price cap, and better exit terms; stay single-vendor.
  * Value: addresses price and accountability.
  * Risks: does not remove the single point of failure.
* **Diversify: move part of the critical workload to a second vendor** and renegotiate the primary contract for the rest.
  * Value: reduces concentration; strengthens negotiating position.
  * Cost drivers: vendor selection; migration effort; duplicate running costs for a time; added operational complexity (two sets of procedures and skills).
  * Timeline shape: phased, with checkpoints.
* **Build resilience without a second vendor**: backups, tested recovery procedures, and design changes that make switching possible later.
* **Move fully to another vendor.** Highest disruption; justified only if the current vendor is unacceptable.

## Argument

Points of debate the team should expect:

* **Risk appetite.** What level of dependence is acceptable? Who decides?
* **Cost of resilience.** Redundancy has an ongoing price; is insurance worth it, and for which services?
* **Complexity.** Two vendors add operational complexity. Does the team have the skills?
* **Lock-in.** How much does the organization rely on one vendor's proprietary features, and what would moving cost?

How the team could evaluate costs and trade-offs:

1. Identify critical services and their dependencies. For each, estimate the business impact of an outage of different lengths, as ranges.
2. Estimate the likelihood of failure and price change using history and vendor evidence, with uncertainty.
3. Cost each option: migration, duplicate running costs, tooling, training, procurement, and the ongoing complexity; include exit costs for both vendors.
4. Compare expected reduction in risk against cost, and test sensitivity to the likelihood estimates.
5. Define leading indicators and trigger points, for example a service-level breach, a price change, or a security event.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides, and the risk appetite that applies.
* Agree criteria and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides to diversify, it would need to:

* Run a vendor selection process using the same criteria as the original.
* Plan a phased migration that avoids disruption.
* Renegotiate the primary contract in parallel.
* Accept added operational complexity, with a runbook for each vendor.
* Report concentration and service-level terms regularly until the target is reached.

## Related decisions

* [Choose the primary database](../software-architecture-database-choice/): a technology instance of the same lock-in question.
* [Build vs. buy for a project](../project-build-vs-buy/): related sourcing choices.
* Decisions not yet made: exit and continuity plan; vendor selection.

## Related notes

* Open items: list the critical services and their vendors; collect incident history; read the contract for exit and price terms.
* Learn more:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Read: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
