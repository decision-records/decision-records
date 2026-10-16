# Reduce single-vendor concentration risk

* Status: accepted
* Date: 2026-05-20
* Decision-maker(s): COO
* Owner: Head of Procurement

## Context

An internal risk review found that 70% of our critical infrastructure spend runs through a single vendor. That vendor had an unplanned multi-hour outage last quarter that disrupted our customer-facing service, and their pricing has increased 18% year over year with no contractual cap. Continuing as-is leaves us exposed to both availability risk and unchecked cost growth.

## Options considered

* **Accept the risk, do nothing differently.** No near-term cost or effort, but leaves both the outage exposure and uncapped pricing risk fully in place; the risk review explicitly flagged this as unacceptable at current concentration levels.
* **Renegotiate the existing contract for better SLAs and a pricing cap, stay single-vendor.** Addresses pricing risk and improves accountability, but does not reduce single-point-of-failure exposure to another outage.
* **Diversify: move 25% of critical workload to a second vendor over two quarters, renegotiate the primary contract for the remaining 75%.** Reduces concentration risk meaningfully while avoiding the cost and disruption of a full migration; also strengthens our renegotiating position with the primary vendor.

## Decision

We will diversify by migrating 25% of critical workload to a second vendor over the next two quarters, and renegotiate the primary vendor's contract for SLA commitments and a pricing cap on the remaining workload.

## Consequences

* Procurement will run a vendor selection process for the second vendor, using the same evaluation criteria as the original vendor selection.
* Engineering/Operations will need to plan a phased migration that avoids service disruption during the transition.
* The primary vendor's contract will be renegotiated in parallel; leverage from the diversification effort should improve renegotiation terms.
* We accept added operational complexity of managing two vendors in exchange for materially reduced outage and pricing risk.
* Head of Procurement will report concentration percentage and renegotiated SLA terms to the COO at the end of each quarter until the 25% migration is complete.

## Related

* This decision responds directly to the Q1 risk review findings; no prior decision record exists on vendor concentration to supersede.
