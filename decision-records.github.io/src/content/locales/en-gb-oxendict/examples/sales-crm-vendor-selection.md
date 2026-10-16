# Select a CRM platform

* Status: request for comments
* Date: 2026-02-02
* Decision-maker(s): VP Sales (to be confirmed)
* Owner: Sales Operations Manager

Summary: Work in progress. This is a starting point for a team that is considering whether to replace its customer relationship management (CRM) system and how to choose a new one. It shows how a team can frame the question, debate the options, and gather information. It records no decision.

## Issue

The current CRM was implemented several years ago and no longer supports the automation the sales process needs: representatives spend noticeable time on manual data entry that other tools automate. The contract renews soon, which creates a natural decision point. Sales Operations, Marketing, and Finance all depend on the system and need to agree on what happens next.

The questions to answer:

* What exactly is not working, and is it the tool, the data model, the process, or how people use it?
* What must a replacement do (requirements), and what would be nice to have?
* How do we compare vendors fairly, and what is the full cost of each choice?
* How do we migrate, train, and measure success?

## Assumptions

Each assumption is something to test.

* **Manual data entry is a large and avoidable burden.** Test: time a sample of representatives for a few days.
* **A modern platform would remove most of that burden.** Test: ask vendors to show the work with our own data, not a standard demo.
* **Representatives will adopt a new platform if it is well supported.** Test: involve a few representatives in evaluation and ask what would make them switch or resist.
* **Marketing and Finance integrations are achievable.** Test: ask each vendor and each reference customer how that integration works in practice.

## Constraints

* The contract renews on a known date, and notice of termination must be given in time.
* Sales Operations, Marketing, and Finance must all agree.
* Customer data must stay protected during migration and afterwards; check obligations under data protection law and the vendor's security assurances.
* Unknown, to be confirmed: data volumes and quality, number of integrations, what can be retired, and what the vendor charges for exit.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Renew the current CRM and invest in custom automation.**
  * Value: avoids migration and retraining.
  * Cost drivers: custom development and its maintenance; continued limits of the data model.
  * Risks: may treat the symptom and not the cause if the vendor has no plan to improve the underlying model.
* **Switch to a candidate platform (A).** Candidate strengths and gaps to be established through requirements, demonstrations, and reference calls.
* **Switch to another candidate platform (B).** As above; compare especially support quality during migration and integration with the finance system.
* **Choose a lighter or more focused tool** if the team's real needs are narrower than a full CRM.
* **Extend a platform the company already owns** (for example a marketing or finance platform that has CRM features) to avoid adding a system.

How to compare: write requirements first; ask vendors for a request for information, and a request for proposal for finalists; run scripted demonstrations using your own scenarios; speak to reference customers of similar size and complexity, including ones that have left the vendor.

## Argument

Points of debate the team should expect:

* **Fix or replace.** What would we need to believe for the current system to be good enough with better configuration or training?
* **Price versus support.** Lower price may mean weaker migration support or missing integrations that cost more later.
* **Breadth versus fit.** A broad platform may do more than needed; a focused one may be outgrown.
* **Timing.** The renewal date forces a decision, but rushing a migration can cost more than another term of the current system.

How the team could evaluate costs and trade-offs:

1. Estimate total cost of ownership over a stated horizon in the organization's own terms: licences; implementation and data migration; integrations; training; administration; support; exit costs; and the productivity dip during change.
2. Estimate benefit as a range: time saved per representative, better data for forecasting, fewer errors, and effects on conversion. State how each will be measured.
3. Score vendors on a weighted matrix of requirements, usability, integration, security, support, vendor stability, and cost; ask each stakeholder group to weight criteria before seeing scores.
4. Test sensitivity: which result would change if migration takes longer, adoption is slower, or benefits are smaller?
5. Run a pre-mortem on the chosen option.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who must agree.
* Agree requirements and weights before reviewing vendors.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides to switch, it would need to:

* Plan a migration with a parallel-run period and validated integrations in a test environment.
* Train all users before cutover.
* Give notice to the current vendor before the term auto-renews.
* Accept a short-term productivity dip, and agree how to know when it has ended.
* Document the final migration runbook.

## Related decisions

* [Contact relationship management](../contact-relationship-management/): the wider question of how contacts and consent are handled.
* [Enter the mid-market segment](../strategy-enter-new-market/): a new sales motion may change CRM needs.
* Decisions not yet made: integration approach; data retention rules.

## Related notes

* Open items: list requirements from sales, marketing, and finance; collect reference customers; find out exit terms of the current vendor.
* Learn more:
  * Wikipedia: [Customer relationship management](https://en.wikipedia.org/wiki/Customer_relationship_management), [Request for proposal](https://en.wikipedia.org/wiki/Request_for_proposal), [Request for information](https://en.wikipedia.org/wiki/Request_for_information), [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership), [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Data migration](https://en.wikipedia.org/wiki/Data_migration)
  * ISO: [ISO/IEC 27001:2022, Information security management systems](https://www.iso.org/standard/27001), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO 10002:2018, Complaints handling](https://www.iso.org/standard/71580.html)
  * Video: [CRM Evaluation Made Easy: 3 Steps for Finding the Right System](https://www.youtube.com/watch?v=g0Pt9-1a6RQ)
