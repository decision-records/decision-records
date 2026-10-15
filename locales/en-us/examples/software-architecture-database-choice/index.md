# Choose the primary database

* Status: accepted
* Date: 2026-03-22
* Decision-maker(s): CTO
* Owner: Head of Platform Engineering

## Context

Our current database is approaching scaling limits under projected 12-month growth, and the engineering team needs to choose its replacement before the next major product launch. This is included here as the one technology example in this set, to show that architecture decisions follow the exact same pattern as the business examples elsewhere in this collection — the discipline is general, not domain-specific.

## Options considered

* **Vertically scale the current database.** Lowest migration risk and no application changes required, but engineering estimates this buys only 6–9 months before hitting the same limits again, given projected growth.
* **Migrate to Database A (managed, horizontally scalable).** Addresses the scaling ceiling with strong vendor support and a well-documented migration path; adds recurring managed-service cost.
* **Migrate to Database B (self-hosted, horizontally scalable).** Lower recurring cost than the managed option, but requires building in-house operational expertise the team does not currently have, and reference checks with peer companies flagged higher operational overhead than expected.

## Decision

We will migrate to Database A, the managed horizontally scalable option, prioritizing migration risk reduction and vendor support over the lower recurring cost of self-hosting.

## Consequences

* Platform Engineering will plan a phased migration with a parallel-run period before full cutover, to avoid disrupting the upcoming product launch.
* Recurring infrastructure cost increases; Finance has approved this as part of the growth investment budget.
* We give up the lower cost of the self-hosted option in exchange for avoiding the operational risk of building in-house expertise we don't currently have.
* A follow-on architecture decision will be needed on the connection-pooling and read-replica strategy once initial migration is complete.

## Related

* This decision responds to the same 12-month growth projection referenced in the current fiscal year's capacity planning; no prior database decision record exists to supersede.
