# Choose our information technology frameworks

* Status: accepted
* Date: 2026-10-14
* Decision-maker(s): Chief Information Officer and Chief Technology Officer
* Owner: Head of Technology Operations

## Context

Our technology group of 180 people has been asked by different leaders to adopt ITIL for service management, the Agile Manifesto for delivery, Extreme Programming for engineering, and Six Sigma for quality, sometimes in the same teams and in the same quarter. Each request is reasonable on its own, but together they overlap, use different vocabularies, and ask people to change how they work faster than they can absorb. We need to decide which frameworks we use, for which kinds of work, and in what order, so that teams get one coherent way of working and not four competing programs.

## Options considered

* **Adopt every requested framework everywhere.** Gives each sponsor what they asked for, but it overloads teams, produces conflicting guidance (for example, fixed change approvals versus continuous release), and makes it impossible to tell which change caused which result.
* **Adopt one framework as the single standard.** Simple to explain, but no single framework covers service operations, product delivery, engineering practice, and quality equally well, and the group would be forced to stretch one framework beyond what it was designed for.
* **Assign each framework to the kind of work it fits, and phase them in one at a time.** Use ITIL practices for running live services, the Agile Manifesto's values for how delivery teams plan and work, Extreme Programming practices for engineering teams that build software, and Six Sigma for processes where defects can be measured. Each framework is phased in separately with its own measures. Clearer for teams and easier to learn from, but it needs a written boundary between frameworks and takes about two years to complete.

## Decision

We will assign each framework to the kind of work it fits and phase them in one at a time: first Agile Manifesto values for delivery teams, then ITIL practices for live services, then Extreme Programming practices for engineering teams, then Six Sigma for measurable processes. We will keep one short document that says which framework applies to which work and what takes precedence when guidance conflicts.

## Consequences

* The Head of Technology Operations will own the framework boundary document and settle conflicts between frameworks, with escalation to the CIO and CTO.
* We will start only one framework in a team at a time, and will not start the next until the previous one has met its own exit measures; the individual decisions follow the pattern in [Phase in a business framework](../business-frameworks/).
* Sponsors of the later frameworks will wait; we will tell them the order and the reason now, so that they can plan.
* Teams will use one shared vocabulary for the terms the frameworks share, such as incident, change, release, and defect, defined in the boundary document.
* We will review the whole approach after the first two frameworks, and revisit the order if the evidence shows a different one would have served us better.

## Related

* See [Phase in the Agile Manifesto](../agile-manifesto/), [Phase in ITIL 5](../itil-5/), [Phase in Extreme Programming](../extreme-programming/), and [Phase in Six Sigma](../six-sigma/) for the decisions on each framework, and [Phase in a business framework](../business-frameworks/) for the general pattern.
