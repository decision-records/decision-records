# Adopt project portfolio management

* Status: request for comments
* Date: 2026-10-05
* Decision-maker(s): Executive team (to be confirmed)
* Owner: Head of the Project Management Office

Summary: Work in progress. This is a starting point for a team that is considering how to decide, across the whole organization, which projects to start, continue, or stop. It shows how a team can frame the question, debate options, and gather information. It records no decision.

## Issue

An organization runs many active projects across several departments, and each department approves, staffs, and reports on its own. Leaders cannot see the total demand on shared people, such as data engineers who are named on projects whose combined requests exceed their capacity. Projects stall waiting for the same few people, and low-value projects survive because no one compares them with the alternatives.

The questions to answer:

* What are all the projects, what do they cost, and what do they need from shared people?
* What criteria should decide which projects to start, continue, or stop?
* Who decides, how often, and with what authority?
* How much central process is helpful, and how much becomes a bottleneck?

## Assumptions

Each assumption is something to test.

* **Capacity conflicts are the main reason projects stall.** Test: map named people to projects and compare demand with capacity.
* **Departments will supply reliable data.** Test: ask for a sample and check how consistent it is.
* **The executive team will stop projects when the evidence says so.** Test: look at past decisions to stop projects; ask the team about its appetite.
* **Larger projects account for most of the demand on shared people.** Test: sort projects by size and requests.

## Constraints

* Smaller projects should stay under departmental control, so the central process does not become a bottleneck.
* The scoring criteria must be agreed and published in good time.
* Departments will feel a loss of independence; the benefits must be clear to them.
* Unknown, to be confirmed: a sensible size threshold, existing project data, and tooling.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Keep departmental decisions.**
  * Value: no new process; local autonomy.
  * Risks: capacity conflicts and lack of comparison remain.
* **A central portfolio office approves every project.**
  * Value: one view and consistent criteria.
  * Risks: a bottleneck; resistance from departments.
* **Portfolio management with a light central process.** A shared list of projects above a set size, common scoring criteria (strategic fit, value, cost, risk, and capacity needed), and a regular executive review to start, continue, or stop projects.
  * Value: one view; deliberate trade-offs without routing small work through a central team.
  * Cost drivers: data collection; the office's time; executive time for reviews.
  * Capabilities needed: reliable data; a decision-making meeting that actually decides.
* **Capacity-first approach.** Manage the scarce shared resources (such as the data engineers) first, and extend portfolio rules only if needed. This draws on ideas from the theory of constraints.
* **Adopt a portfolio tool first** and let the process follow. Risky if the process is unclear.

## Argument

Points of debate the team should expect:

* **Control versus agility.** How much central oversight is worth the delay?
* **What counts as value?** Financial return, strategic fit, risk reduction, regulatory necessity, and benefits that are hard to quantify.
* **Stopping projects.** People find it hard to stop projects already begun; sunk cost is not a reason to continue.
* **Fairness.** How does the scoring avoid favouring the loudest department?

How the team could evaluate costs and trade-offs:

1. Build a first portfolio list and estimate demand by role against capacity, to see how severe the conflict is.
2. Estimate the cost of the current approach in delays, rework, and low-value work.
3. Estimate the cost of the process: the office, data effort, review time, and tools.
4. Test the scoring criteria on past projects: would they have chosen differently, and was that better?
5. Choose measures: share of projects delivered on time, projects stopped early, utilization of shared teams, and benefits realized. Review after a few cycles.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and who is consulted.
* Agree criteria and weights first.
* Gather the evidence above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team decides on a light central process, it would need to:

* Name an owner of the portfolio list and a schedule of reviews.
* Publish scoring criteria and the size threshold.
* Ask departments to register projects and capacity by role.
* Commit the executive team to decide at reviews, including stopping projects, and to record reasons.
* Review the process after a few cycles.

## Related decisions

* [Adopt a target operating model](../target-operating-model/): how the portfolio fits shared services and customer-aligned teams.
* [Phase in a business framework](../business-frameworks/): goal setting that portfolio choices can link to.
* Decisions not yet made: tooling; the benefits tracking approach.

## Related notes

* Open items: compile an initial project list; map people to projects; draft scoring criteria.
* Learn more:
  * Wikipedia: [Project portfolio management](https://en.wikipedia.org/wiki/Project_portfolio_management), [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management), [Resource management](https://en.wikipedia.org/wiki/Resource_management), [Portfolio optimization](https://en.wikipedia.org/wiki/Portfolio_optimization), [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints), [Project governance](https://en.wikipedia.org/wiki/Project_governance)
  * ISO: [ISO 21504:2022, Guidance on portfolio management](https://www.iso.org/standard/82867.html), [ISO 21502:2020, Guidance on project management](https://www.iso.org/standard/74947.html)
  * Video: [Project Portfolio Management - Simplified](https://www.youtube.com/watch?v=ZQdfSgTRe1g) (Acuity PPM)
  * Read: [PMI: The Standard for Portfolio Management](https://www.pmi.org/standards/for-portfolio-management)
