# Guide: Decision Records for Leaders

This guide explains what a decision record is, why it matters to leaders across every function of a business, how to structure one, and how to run the practice well.

Contents:

* [What is a decision record?](#what-is-a-decision-record)
* [Why leaders — not just engineers — should use decision records](#why-leaders--not-just-engineers--should-use-decision-records)
* [Decision records apply to every part of the business](#decision-records-apply-to-every-part-of-the-business)
* [The anatomy of a decision record](#the-anatomy-of-a-decision-record)
* [The decision record lifecycle](#the-decision-record-lifecycle)
* [Roles and governance](#roles-and-governance)
* [Best practices](#best-practices)
* [Common pitfalls](#common-pitfalls)
* [Getting started in your organization](#getting-started-in-your-organization)
* [Further reading](#further-reading)

## What is a decision record?

A **decision record (DR)** captures one significant choice: the situation that prompted it, the options weighed, the choice made, and the consequences expected. A **decision log (DL)** is the running collection of every decision record for a team, function, or organization — effectively an institutional memory of "why we do things this way."

A decision record is not:

* A meeting minute (a record of what was *discussed*, not what was *decided and why*).
* A project plan (a record of *what happens next*, not *why this path was chosen over others*).
* A policy document (a record of a *standing rule*, though a decision record often produces one).

It sits between these: a short, durable artifact that exists specifically so the reasoning behind a choice outlives the meeting where it happened.

## Why leaders — not just engineers — should use decision records

Software teams adopted this practice first because code is expensive to unwind and new engineers constantly ask "why is it built this way?" Every leader faces the exact same dynamics:

* **Institutional memory walks out the door.** When a VP of Sales who chose the current territory model leaves, the reasoning leaves with them unless it was written down.
* **Reorgs and leadership changes trigger re-litigation.** Without a record, a new leader burns weeks re-debating a decision that was already carefully made — or worse, reverses it without realizing why it existed.
* **Onboarding is faster with a "why," not just a "what."** A new hire who can read the last dozen decisions in their function understands the organization's judgment, not just its current state.
* **Writing it down improves the decision itself.** Committing context, options, and trade-offs to a page — before deciding — surfaces gaps and unstated assumptions that a verbal discussion glosses over.
* **It creates accountability without bureaucracy.** A decision record names who decided, when, and why, which protects both the decision-maker (a documented, reasoned choice) and the organization (a clear owner to revisit if circumstances change).
* **It scales communication across distance and time.** For remote and asynchronous teams, and for stakeholders who weren't in the room, a well-written decision record does the work a live meeting would otherwise have to repeat.

None of this is specific to software. It's specific to *any* decision that's costly to reverse, affects people beyond the decision-maker, or will plausibly be questioned later.

## Decision records apply to every part of the business

Treat "decision record" as a genre, not a department's tool. The same six-part structure works whether the decision is architectural or commercial:

* **Strategy Decision Record** — market entry/exit, competitive posture, multi-year bets.
* **Sales Decision Record** — territory design, compensation plans, CRM/tooling choices, channel strategy.
* **Marketing Decision Record** — brand positioning, channel mix, agency vs. in-house, pricing communication.
* **Product Decision Record** — pricing model, roadmap trade-offs, build-vs-buy, sunset decisions.
* **Project Decision Record** — delivery methodology, vendor selection, scope trade-offs.
* **Risk Decision Record** — risk acceptance, mitigation, transfer, or avoidance, and the rationale.
* **Human Resources Decision Record** — policy changes (remote work, leveling, compensation bands), org design.
* **Public Relations Decision Record** — crisis communication posture, spokesperson policy, media engagement rules.
* **Professional Development Decision Record** — training investment, promotion criteria, succession choices.
* **User-Centred Design Decision Record** — research method choices, accessibility trade-offs, UX direction.
* **Software Architecture / Engineering Decision Record** — the original use case: technology, platform, and design choices.

The [examples](../examples/index.md) directory has worked samples in most of these domains. Many organizations that adopt decision records for engineering later discover their strategy, HR, or sales teams want the exact same discipline — often the light bulb moment described by teams who simply rename the practice "decisions" instead of "decision records," which makes the pattern feel native to non-technical teams instead of borrowed from engineering.

## The anatomy of a decision record

Two templates live in [template/index.md](../template/index.md): a **lightweight** six-field version for everyday decisions, and a **comprehensive** version for high-stakes, high-scrutiny decisions. Both share the same core logic:

1. **Title** — a short, present-tense, active statement of the decision itself (e.g., "Adopt quarterly OKRs," not "OKR discussion"). Aim for under 50 characters.
2. **Status** — where the decision is in its life: request for comments, proposed, accepted, rejected, deprecated, or superseded.
3. **Context (Issue)** — the situation, forces, and constraints that made this decision necessary. Written so a reader with no memory of the meeting understands why the question even came up.
4. **Options Considered (Positions)** — the realistic alternatives, stated as facts and trade-offs, not as a strawman lineup that makes the chosen option look obviously correct. If someone can ask "did you consider X?" and the answer isn't in the record, the record is incomplete.
5. **Decision** — the choice, in plain, active language: "We will do X." Not a summary of pros and cons — a clear statement of what was chosen.
6. **Consequences (Implications)** — what changes as a result, including costs, risks, follow-on decisions, and anything given up by not choosing an alternative. Good consequences read as "we now do X instead of Y," not as a pros/cons recap of the decision already made.

The comprehensive template adds fields useful for higher-stakes decisions: **Assumptions**, **Constraints**, **Opinions** (who advised what, and why), **Related decisions/requirements/artifacts/principles**, and structured analysis sub-sections (cost analysis, SWOT, PEST) for decisions that warrant deeper scrutiny.

## The decision record lifecycle

A decision record typically moves through five stages:

**Initiating → Researching → Evaluating → Deciding → Maintaining (→ Sunsetting)**

* *Initiating* — someone identifies that a choice is significant enough to warrant a record and opens a draft.
* *Researching* — options, constraints, and assumptions are gathered; stakeholders are consulted.
* *Evaluating* — the record is shared for comment, typically with a defined timebox (a week is a common default).
* *Deciding* — the decision-maker (individual or group, per your governance model) accepts, rejects, or sends it back for more work; status updates accordingly.
* *Maintaining* — the record stays discoverable and is revisited if circumstances materially change.
* *Sunsetting* — if superseded, the old record's status changes to "superseded" and links to the new one. The old record is never deleted — that history is the point.

## Roles and governance

For each decision record, name:

* **Owner / proposer** — drafts the record and drives it to a decision.
* **Decision-maker(s)** — the person, role, or committee with authority to accept it. State this explicitly per decision type (e.g., "pricing changes: VP Product; market entry: CEO + Board").
* **Contributors** — people whose input materially shaped the options or trade-offs.
* **Accountable owner going forward** — who maintains the decision, reviews it periodically (annually is a common cadence), and is responsible for eventually retiring it.

Governance questions worth settling once, in writing, for your organization (see also the [checklist](../checklist/index.md)):

* Who can *propose* a decision record? (Often: anyone.)
* Who can *approve* one, and does that vary by decision type or dollar/risk threshold?
* What breaks a tie or resolves disagreement — consensus, a named approver, or escalation?
* How mutable is a record after acceptance? Many teams favor a "living document" model: new information is appended with a timestamp rather than silently rewriting history.

## Best practices

* **One decision per record.** Resist bundling several choices into one document — it becomes impossible to reference, supersede, or search later.
* **Keep it pithy.** A page, not a report. If it's growing past a page, the decision is probably more than one decision.
* **Write the context for a stranger.** Assume the reader has none of the meeting's shared context, and won't have it in two years either.
* **State the decision in active voice.** "We will migrate to X," not "X was seen as the preferred direction."
* **Explain consequences as what changes, not as pros and cons.** The trade-off debate belongs in "Options Considered"; "Consequences" is about what happens next.
* **Store records where the team already works.** A version-controlled `decisions/` folder, a wiki space, or a shared drive folder — the best storage location is whichever one your team will actually open.
* **Reserve decision records for decisions that are hard to reverse, cross-cutting, or likely to be questioned later.** Not every choice needs one — see the [checklist](../checklist/index.md#checklist-does-this-decision-need-a-decision-record).
* **Supersede, don't silently delete.** When a decision changes, write a new record and link back to the one it replaces.

## Common pitfalls

* **Turning it into after-the-fact paperwork.** If a decision record is written to justify a choice already made and announced, it loses most of its value — the point is to sharpen thinking *before* committing, not to produce a compliance artifact after.
* **Log fatigue.** Recording every minor choice buries the significant ones and trains people to stop reading the log. Restrict records to decisions that are genuinely hard to reverse or broadly consequential.
* **Writing pros/cons instead of a decision.** A record that ends with a list of trade-offs and no clear "we will do X" isn't a decision record — it's an options memo.
* **No accountable owner.** A decision record with no named decision-maker or reviewer tends to drift out of date and stops being trusted.
* **Treating the template as bureaucracy rather than a checklist.** The value of the template is that it's a checklist for good thinking and good communication — not a form to fill in for its own sake.

## Getting started in your organization

1. Pick one function or team with a decision that's already contentious or hard to reverse.
2. Draft that one decision using the [lightweight template](../template/index.md#lightweight-template).
3. Socialize it with the actual decision-maker and stakeholders; timebox feedback.
4. Store it somewhere durable and discoverable.
5. Once the practice proves useful once, propose it as a lightweight standard for the team — not a mandate imposed top-down. Decision records work best as something a team adopts because it makes their own lives easier, not as forced paperwork.

See the [tutorial](../tutorial/index.md) for a full worked walkthrough.

## Further reading

* [spec/index.md](../spec/index.md) — the condensed specification this guide expands on.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — the fuller source project this guide generalizes for a business audience.
