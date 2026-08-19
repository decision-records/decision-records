# Templates

Two templates, both usable by any function of the business, not just engineering. Copy the one that fits the stakes of your decision. When unsure, start with the lightweight template — you can always expand a section if the decision turns out to be bigger than expected.

Contents:

* [Lightweight template](#lightweight-template) — for everyday decisions (aim for one page).
* [Comprehensive template](#comprehensive-template) — for high-stakes, high-scrutiny decisions (market entry, major vendor commitments, org redesigns, irreversible bets).
* [Choosing which template to use](#choosing-which-template-to-use)

## Lightweight template

Best for most decisions: a policy change, a vendor pick, a process change, a scoped strategic call.

```markdown
# Title (short, present-tense, active — e.g. "Adopt a four-day sales cycle")

* Status: request for comments | proposed | accepted | rejected | deprecated | superseded
* Date: YYYY-MM-DD
* Decision-maker(s): [name(s) or role(s)]
* Owner: [who maintains this record going forward]

## Context

What situation, pressure, or requirement made this decision necessary?
Write it so someone with zero meeting context understands why the question came up.

## Options considered

* Option A — brief description and trade-offs
* Option B — brief description and trade-offs
* Option C — brief description and trade-offs

## Decision

State the choice in one or two active-voice sentences: "We will do X."

## Consequences

What changes as a result — costs, risks, follow-on decisions, and what we give up
by not choosing the alternatives. State what we now do differently, not a pros/cons recap.

## Related

Links to related decisions, documents, or requirements.
```

## Comprehensive template

Best for decisions that are expensive to reverse, cross multiple stakeholder groups, or will face significant scrutiny later (board-level strategy, major capital allocation, org-wide policy, multi-year vendor lock-in).

```markdown
# Title (short, present-tense, active, up to ~50 characters)

* Status: request for comments | proposed | accepted | rejected | deprecated | superseded
* Date: YYYY-MM-DD
* Decision-maker(s): [name(s) or role(s) with authority to accept this]
* Owner: [who maintains and periodically reviews this record]

Summary: one or two sentences on the current position and any open needs.

## Issue

Describe the issue this decision addresses. Leave no doubt about why it matters now.
Keep to what actually needs addressing at this point in the decision's life.

## Assumptions

Underlying assumptions about the environment — scope, budget, timeline, market conditions,
resource availability, service levels, and the like.

## Constraints

Additional constraints this decision must respect — regulatory limits, vendor lock-in,
board mandates, brand guidelines, reversibility requirements.

## Options considered (Positions)

The viable alternatives, described with facts and data rather than opinion. Include enough
detail that "did you consider X?" won't come up in a later review.

### Cost analysis (optional)

Setup costs, ongoing costs, training/change-management costs, contractual/licensing
commitments, and any usage-based costs.

### SWOT analysis (optional)

Strengths, weaknesses, opportunities, threats — for the leading option(s).

### PEST analysis (optional)

Political, economic, social, and technological factors relevant to the decision.

## Opinions

Who advised what, and why. For each opinion, note who is speaking, what alternatives
they weighed, how they evaluated them, and why they landed where they did.

### [Stakeholder or advisor] — opinion

Their view, in their own words if possible.

## Argument (Decision rationale)

Why this option was selected. Map the decision explicitly to the objectives or
requirements it serves — the argument is often as important as the decision itself.

## Decision

State the choice clearly, in active voice: "We will do X."

## Implications (Consequences)

What this decision requires next — new requirements, follow-on decisions, renegotiated
scope or schedule, staff training, or changes to existing commitments.

## Related decisions

Links to decisions this supersedes, depends on, or will trigger.

## Related requirements

Requirements this decision serves or is constrained by.

## Related artifacts

Scope documents, plans, models, or other artifacts this decision affects.

## Related principles

Organizational principles or values this decision should align with.

## Related notes

Notes and open issues raised during socialization, kept for context even after the decision is made.
```

## Choosing which template to use

| Signal | Use lightweight | Use comprehensive |
|---|---|---|
| Reversibility | Easy to reverse | Hard or costly to reverse |
| Blast radius | One team | Multiple teams, the whole company, or external parties |
| Money/time at stake | Modest | Material to the budget or roadmap |
| Scrutiny expected | Low | Will likely face board, audit, or public scrutiny |
| Certainty of options | Clear favorite | Genuinely contested, needs documented advisor input |

When in doubt, start lightweight. You can always promote a record to the comprehensive format by adding sections — nothing about the lightweight template blocks that.

See [guide/index.md](../guide/index.md) for how each field is meant to be used, and [examples/index.md](../examples/index.md) for both templates filled in across real business scenarios.
