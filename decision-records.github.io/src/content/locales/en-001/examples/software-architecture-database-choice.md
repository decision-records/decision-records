# Choose the primary database

* Status: request for comments
* Date: 2026-03-22
* Decision-maker(s): CTO (to be confirmed)
* Owner: Head of Platform Engineering

Summary: Work in progress. This is a starting point for a team that is choosing the primary database for a growing product. It is the one technology example in this set, and shows that architecture decisions follow the same pattern as the business decisions elsewhere in this collection. It shows how a team can frame the question, debate options, and gather information. It records no decision.

## Issue

The current database is approaching its scaling limits, and the engineering team expects growth to reach those limits before long. A replacement or a different way of scaling must be chosen before the next major product launch.

The questions to answer:

* What are the real limits today (reads, writes, storage, latency, operations), and how fast are we approaching them?
* Which qualities matter most (consistency, availability, latency, cost, operability, compliance), and in what order?
* Do we scale what we have, move to a managed service, or run something ourselves?
* How would we migrate, and how would we leave again if we had to?

## Assumptions

Each assumption is something to test.

* **The growth projection is realistic.** Test: compare with past growth and with sales and product plans; consider a high and a low case.
* **The current database can be scaled further, at a price.** Test: ask the vendor and the team how much headroom remains and what it costs.
* **Our workload fits a horizontally scalable design.** Test: study queries and transactions; look for operations that need strong consistency across records.
* **The team can operate the chosen option.** Test: list the skills required and who has them.

## Constraints

* The change must be ready before the launch, with a phased migration that does not disturb it.
* Recurring cost must fit the approved budget.
* Data protection and security obligations apply to any choice.
* Unknown, to be confirmed: data volume, retention requirements, regional requirements, integration with other systems, and vendor commitments.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Scale the current database vertically** (a larger machine or plan).
  * Value: lowest migration risk; no application changes.
  * Risks: buys a limited amount of time; cost rises steeply.
* **Move to a managed, horizontally scalable database service.**
  * Value: removes scaling and much operational work; vendor support.
  * Cost drivers: recurring service charges; migration; application changes; egress and exit costs.
  * Risks: dependence on the vendor's features and pricing.
* **Move to a self-hosted, horizontally scalable database.**
  * Value: potentially lower recurring cost; more control.
  * Cost drivers: building operational skills; on-call load; tooling; upgrades.
  * Risks: operational overhead may be higher than expected.
* **Redesign the data layer** (for example caching, read replicas, partitioning, or separating workloads) to extend the current database.
* **Use different databases for different workloads** (polyglot persistence), at the cost of more systems to run.

## Argument

Points of debate the team should expect:

* **Consistency versus availability.** The CAP theorem says a distributed system that is partitioned cannot guarantee both. Which matters more for each part of the product? Many workloads can tolerate delayed consistency; some cannot.
* **Managed versus self-hosted.** Higher service cost against lower operational risk. How should the team value the engineers' time?
* **Lock-in.** What is lost by using a vendor-specific feature, and what is gained?
* **Standards.** How much do we rely on SQL (standardised in ISO/IEC 9075) versus a vendor-specific query model?

How the team could evaluate costs and trade-offs:

1. Test with your own workload: create a realistic benchmark and measure each candidate under expected and peak load, including failure scenarios.
2. Estimate total cost of ownership over a stated horizon in the organisation's own terms: service or licence charges, hosting, migration, engineering time, on-call, training, support, and exit. Show ranges.
3. Score candidates on a weighted matrix of the qualities that matter (the ISO/IEC 25010 product quality model offers a vocabulary for this), and test sensitivity to the weights.
4. Estimate how long each option buys, and what it costs when the limit is reached again.
5. Plan for exit: how would data and code move away from each choice?

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who must be consulted (security, finance, product).
* Agree criteria and weights first.
* Gather the evidence above, including benchmark results, and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides to migrate, it would need to:

* Plan a phased migration with a parallel-run period before full cutover.
* Confirm budget for the recurring costs.
* Plan follow-on decisions, for example on connection pooling and read replicas.
* Record the expected exit path.

## Related decisions

* [Build vs. buy for a project](../project-build-vs-buy/): general build/buy reasoning.
* [Reduce single-vendor concentration risk](../risk-single-vendor-dependency/): dependence on one vendor.
* Decisions not yet made: caching and replica strategy; data retention.

## Related notes

* Open items: collect production metrics; write down workload characteristics; shortlist candidates for a benchmark.
* Learn more:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
