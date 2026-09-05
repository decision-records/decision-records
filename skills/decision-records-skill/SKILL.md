---
name: decision-records-skill
description: Draft, review, and manage decision records (DRs) — short documents that capture one significant choice, its context, the options considered, the decision, and its consequences. Use when someone wants to write a decision record or ADR, decide whether a choice is significant enough to warrant one, pick between a lightweight and a comprehensive template, walk through drafting one step by step, find a worked example close to their own domain, or check a draft before publishing it for comment.
---

# Decision records skill

Help a person write a good decision record (DR) — for any domain: strategy, sales,
marketing, product, HR, risk, project/operations, or software architecture, not
just engineering. Work through the steps below with them; don't dump the whole
repo at once. This skill lives inside the `decision-records` repo, so the paths
below (`../../guide/index.md`, etc.) are relative to this skill's own folder.

## Step 0 — Does this decision need a record?

Ask, or infer from context. Write a record if **any** of these are true:

- Reversing the decision would be costly, slow, or embarrassing.
- It affects people outside the room where it's being decided.
- Someone will plausibly ask "why did we do it this way?" a year from now.
- There are genuinely contested options with reasonable people on different sides.
- It sets a precedent other decisions will need to stay consistent with.

Skip it if the decision is cheap to reverse, affects only the decision-maker or one
self-contained team, is already covered by existing policy, or is explicitly
temporary (a pilot, workaround, or time-boxed experiment). Full checklist:
`../../checklist/index.md#checklist-does-this-decision-need-a-decision-record`.

## Step 1 — Choose lightweight or comprehensive

Default to **lightweight** — six fields, one page:

1. **Title** — short, present-tense, active ("Switch payroll provider to Provider B"),
   not a topic or a question.
2. **Status + metadata** — `Status` (request for comments | proposed | accepted |
   rejected | deprecated | superseded), `Date`, `Decision-maker(s)`, `Owner`.
3. **Context** — the situation and constraints, written for a reader with zero
   meeting background.
4. **Options considered** — the real alternatives (include "do nothing" if
   relevant) as facts and trade-offs, not a strawman lineup.
5. **Decision** — the choice in plain active voice: "We will do X."
6. **Consequences** — what changes as a result, not a rehash of the options debate.

Move to **comprehensive** — the full template at `../../template/index.md` — only
for high-stakes, multi-stakeholder decisions. It adds Assumptions, Constraints,
optional Cost/SWOT/PEST analysis, per-person Opinions, a separate Argument
section, and Related decisions/requirements/artifacts/principles/notes.

## Step 2 — Draft it

Write the six lightweight fields above in order, one to a few sentences each.
Keep the whole thing to about one page — if it's sprawling, it's probably more
than one decision; split it. For a fully worked, field-by-field walkthrough with
a realistic non-technical example, follow `../../tutorial/index.md`. For a
model close to the user's own domain, browse the table in
`../../examples/index.md` (strategy, sales, marketing, product, HR, risk,
project, and technology examples are all there).

## Step 3 — File it

Store it where the team already works — a version-controlled `decisions/`
folder, a wiki space, or a shared drive, named consistently, e.g.
`YYYY-MM-DD-short-title-slug.md`. Keep (or start) an index listing every
record's title, status, and date — see `../../examples/index.md` for the
pattern. Many teams get faster adoption calling the folder `decisions/` rather
than `decision-records/` — same template, more approachable name.

## Step 4 — Before publishing for comment

- A stranger to the discussion could read it and understand both the decision
  and why.
- No unresolved "did you consider X?" gaps.
- Status is `request for comments` or `proposed`, with an explicit comment
  deadline (e.g., "comments by Friday, then default-accepted").
- Decision-maker(s) and owner are named, not implied.

Full pre-publish and review checklists: `../../checklist/index.md`.

## Step 5 — After acceptance

- Decision-maker explicitly accepts, rejects, or sends it back — silence isn't
  acceptance. Update `Status` and the date.
- Never silently delete or rewrite a published record. If it's later reversed
  or replaced, write a **new** record and set the old one's status to
  `superseded`, linking forward.
- Name an accountable owner who reviews the record periodically (annually is a
  common cadence).

## Reference material in this repo

- `../../guide/index.md` — full leadership-oriented guide: why this matters,
  anatomy, lifecycle, governance, best practices, pitfalls.
- `../../template/index.md` — the comprehensive template.
- `../../tutorial/index.md` — hands-on walkthrough (~20 minutes).
- `../../examples/index.md` — worked examples across business functions.
- `../../checklist/index.md` — checklists for every stage, and for running the
  practice across an organization.
- `../../help/index.md` — FAQ, troubleshooting table, and glossary.
