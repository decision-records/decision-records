# Adopt contact relationship management

* Status: request for comments
* Date: 2026-10-12
* Decision-maker(s): Chief Revenue Officer (to be confirmed)
* Owner: Head of Revenue Operations

Summary: Work in progress. This is a starting point for a team that is considering how to manage contacts and relationships with customers, partners, and suppliers in one shared way, including consent. It shows how a team can frame the question, debate options, and gather information. It records no decision.

## Issue

Customer and partner contacts are held in individual inboxes, personal spreadsheets, and several different tools. When an account manager leaves, their relationships leave too, and the same person has been contacted on the same day by different teams. The organization also cannot show where a person's consent to be contacted is recorded.

The questions to answer:

* Who needs contact information, for what, and who owns it?
* What data do we hold, where, and how good is it?
* What do we need to record about consent and preferences, and how do we answer requests to see, correct, or delete personal data?
* Which solution fits the whole organization, not only sales?

## Assumptions

Each assumption is something to test.

* **Account managers will log interactions in a shared system** if it is easy and their relationships stay theirs to work. Test: ask them what they would need, and run a trial.
* **Existing data is good enough to migrate** after cleaning and merging duplicates. Test: sample records and measure duplicates and gaps.
* **One system can serve several teams** (sales, support, partners, suppliers). Test: map each team's needs and see where they differ.
* **Consent can be recorded reliably** in the new system. Test: define the consent model with Legal and check what each option supports.

## Constraints

* Consent and contact preferences must be recorded in one place, and requests from a person must be answerable from that record.
* Rules on who may see and change which records must be agreed before migration.
* Migration takes staff time.
* Unknown, to be confirmed: the legal requirements that apply (for example the GDPR), data retention rules, and contract terms of current tools.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Keep the current mix of tools and spreadsheets.**
  * Value: no cost or change effort.
  * Risks: lost relationships, duplicate contact, and unclear consent continue.
* **Adopt one shared contact relationship management system for the whole company.**
  * Value: one record per person and organization; shared history; recorded consent.
  * Cost drivers: licences; data migration; integration; training; administration; the effort of cleaning data.
  * Risks: change in habits; rules for access need design.
* **Add contact management to the existing sales CRM only.**
  * Value: quickest; the tool is known.
  * Risks: leaves out partners, suppliers, and non-sales teams.
* **Phased rollout** starting with the teams that feel the pain most, retiring other tools once their data has moved.
* **Master data approach.** Keep specialist tools but create one trusted record of each contact, shared through integration.

## Argument

Points of debate the team should expect:

* **Scope.** Customers only, or also partners, suppliers, and others?
* **Ownership of relationships.** The company, not the individual, should hold the record. How do we make people comfortable with this?
* **Privacy.** Collect only what is needed; record the lawful basis, including consent where it applies.
* **Cost of cleaning data.** Often more than expected.

How the team could evaluate costs and trade-offs:

1. List the data held in each place, its quality, and its risks.
2. Estimate costs over a stated horizon in the organization's terms: licences, migration, cleaning, integration, training, administration, and exit. Show ranges.
3. Estimate benefits: fewer lost relationships, less duplicate contact, faster answers to data requests, better reporting.
4. Assess privacy and security: consent handling (ISO/IEC 29184 describes online notices and consent), security controls (ISO/IEC 27001), and privacy management (ISO/IEC 27701).
5. Choose measures: share of contacts with owner and consent recorded, duplicates, time to answer a request, and usage by teams. Review after the first period.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who must be consulted (Legal, Sales, Support, Partnerships).
* Agree criteria and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides on one shared system, it would need to:

* Name a lead for selection, migration, and rules for access.
* Record consent and contact preferences on the record, and handle requests from that record.
* Check usage in the first period and adjust the process, not only the reminders, if people do not log interactions.
* Clean and merge duplicate contacts during migration.
* Retire other tools once data has moved.

## Related decisions

* [Select a CRM platform](../sales-crm-vendor-selection/): the choice of tool this builds on.
* Decisions not yet made: data retention; access rules; integration with other systems.

## Related notes

* Open items: inventory where contacts are held; sample data quality; ask Legal to review consent fields.
* Learn more:
  * Wikipedia: [Customer relationship management](https://en.wikipedia.org/wiki/Customer_relationship_management), [Contact manager](https://en.wikipedia.org/wiki/Contact_manager), [Master data management](https://en.wikipedia.org/wiki/Master_data_management), [Data quality](https://en.wikipedia.org/wiki/Data_quality), [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation), [Consent](https://en.wikipedia.org/wiki/Consent)
  * ISO: [ISO/IEC 29184:2020, Online privacy notices and consent](https://www.iso.org/standard/70331.html), [ISO/IEC 27701:2025, Privacy information management systems](https://www.iso.org/standard/27701), [ISO/IEC 27001:2022, Information security management systems](https://www.iso.org/standard/27001)
  * Read: [UK ICO: consent](https://www.ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/); [Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
