# Six Sigma

* Status: request for comments
* Date: 2026-01-19
* Decision-maker(s): Chief Operating Officer (to be confirmed)
* Owner: Head of Quality

Summary: Work in progress. This is a starting point for a team that is considering how to introduce Six Sigma, the data-driven method for reducing variation and defects, into an operation. It shows how a team can frame the question, debate the options, and gather information. It records no decision.

## Issue

An operations team handles a large volume of cases, and a meaningful share need to be redone because of errors, for example in data entry and routing. Rework costs money and time and is a leading cause of customer complaints. Leaders are interested in Six Sigma as a structured way to reduce defects, but they know that training many people at once would take staff off the line, and that the organization's data may not yet be good enough to measure defects consistently in every process.

The questions to answer:

* What is the actual size and cost of the rework problem, and how reliably can we measure it today?
* Is Six Sigma the right tool for this problem, or are simpler fixes enough?
* Where should we start, with how many trained practitioners, and what is the first project?
* How do we decide whether it is working and whether to extend it?

## Assumptions

Each assumption is something to test.

* **A small number of causes drive most of the rework.** Test: sample rework cases and classify causes; look at whether a few categories dominate.
* **We can measure defects consistently.** Test: have two people count defects in the same sample and see whether they agree; check whether the data needed exists.
* **Trained staff can run a project alongside their normal work.** Test: estimate the time a DMAIC project needs against what staff can spare.
* **Improvements will hold once the project ends.** Test: ask what controls (monitoring, ownership, standard work) will keep the gain in place.
* **The process chosen first is representative enough to teach lessons for the next one.** Test: compare the first candidate with others on volume, variability, and data quality.

## Constraints

* Training everyone at once would take many people off the line.
* Data quality may limit what can be measured in the first stage.
* Customer-facing quality commitments continue while the work is under way.
* Unknown, to be confirmed: how project savings will be validated by finance, and what training and certification route the organization prefers.

## Options considered

For each option, estimate value, costs, timeline, and capability needs, and note what evidence would change the team's mind.

* **Roll out company-wide, with belt training for managers everywhere.**
  * Value: a shared method quickly.
  * Cost drivers: training time for many managers; projects started before they can be measured; management attention.
  * Timeline shape: broad early effort, uneven results.
  * Risks: removes many managers from operations; projects without reliable baselines.
* **Adopt with a small group of trained practitioners and a single process first.** Train a small group (for example Green Belts and Black Belts), choose one high-volume process, measure the defect rate, run a project using DMAIC (define, measure, analyze, improve, control), and use the result to choose the next.
  * Value: proves value with data; builds capability where it is needed.
  * Cost drivers: training; project time; measurement systems; sponsor time.
  * Timeline shape: a first project from definition to sustained control, then extension only when the target has held for a stated period.
  * Capabilities needed: statistical skills; sponsor support; reliable data.
  * Risks: slow; benefits narrow at first.
* **Use outside consultants to run projects.**
  * Value: speed and experience.
  * Cost drivers: fees; the knowledge that leaves with them.
  * Risks: little internal capability remains.
* **Use simpler problem-solving first** (for example process mapping, root-cause analysis, and error-proofing) and add Six Sigma only if needed. Cheaper, and a good baseline to cost honestly.
* **Combine with lean methods** (known together as Lean Six Sigma) if the problem is also about flow and waiting, not only variation.

## Argument

Points of debate the team should expect:

* **Is the problem variation, or something else?** Six Sigma is strongest where a process produces results that vary and defects can be counted. Is that the case here?
* **Measurement first.** Without a trustworthy way to count defects, the method cannot work. Is investing in measurement the real first project?
* **Depth versus breadth.** A few deep projects, or a broad but shallow programme?
* **Savings claims.** How will savings be validated, and by whom, so that numbers are believed?

How the team could evaluate costs and trade-offs:

1. Estimate the cost of poor quality in the organization's own terms: rework time, delays, complaints handled, lost customers. Give ranges.
2. Estimate programme costs: training, practitioner time, measurement set-up, sponsor time, tools. Give ranges.
3. Compare options on expected benefit, certainty of benefit, time to first result, and reversibility.
4. Use a weighted decision matrix for value, cost, speed, risk, and capability left behind.
5. Run a pre-mortem on the first project and add controls to prevent each reason for failure.

## Decision

**Not yet decided.** This is a starting point. A team using it should replace this section with its own decision.

Suggested way to reach a decision:

* Confirm who decides and by when.
* Agree criteria and weights first.
* Gather the evidence listed above and record what was found.
* Share for comment, then decide and update the Status.

## Implications

If the team chooses a single-process start, it would need to:

* Name a sponsor, select the practitioners, and protect their time.
* Agree the baseline and target before the project begins, and measure them the same way before and after.
* Invest in measurement first if the data is not reliable.
* Define what "held" means (for example the target is met for a stated number of consecutive periods) before extending to other processes.
* Make sure managers outside the first project know when their process will be considered.

## Related decisions

* [Lean manufacturing](../lean-manufacturing/): a related approach to reducing waste.
* [Choose our information technology frameworks](../information-technology-frameworks/): how Six Sigma fits with other frameworks.
* [Business frameworks](../business-frameworks/): the same staged-adoption pattern for another framework.
* Decisions not yet made: how savings are validated; training route.

## Related notes

* Open items: pick candidate processes and compare them; check data availability; list who could be a sponsor.
* Learn more:
  * Wikipedia: [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [DMAIC](https://en.wikipedia.org/wiki/DMAIC), [Lean Six Sigma](https://en.wikipedia.org/wiki/Lean_Six_Sigma), [Control chart](https://en.wikipedia.org/wiki/Control_chart), [Root-cause analysis](https://en.wikipedia.org/wiki/Root-cause_analysis), [Poka-yoke](https://en.wikipedia.org/wiki/Poka-yoke)
  * ISO: [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html), [ISO 13053-2:2011, Six Sigma: Tools and techniques](https://www.iso.org/standard/52902.html), [ISO 9001:2015, Quality management systems](https://www.iso.org/standard/62085.html)
  * Video: [Six Sigma DMAIC Full Tutorial](https://www.youtube.com/watch?v=1I8CiseE3VQ) (PM Expert)
  * Read: [ASQ: Six Sigma](https://asq.org/quality-resources/six-sigma)
