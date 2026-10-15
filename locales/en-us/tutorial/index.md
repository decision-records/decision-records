# Tutorial: Write Your First Decision Record

This is a hands-on walkthrough for a leader who has never written a decision record. It uses a realistic business scenario — not a software example — because decision records are a general leadership tool. By the end, you'll have written one real record and know how to introduce the practice to your team.

Estimated time: 20 minutes for Part 1, plus ongoing practice for Parts 2–4.

Contents:

* [Part 1: Write one decision record (20 minutes)](#part-1-write-one-decision-record-20-minutes)
* [Part 2: Get it reviewed and accepted](#part-2-get-it-reviewed-and-accepted)
* [Part 3: Start a decision log](#part-3-start-a-decision-log)
* [Part 4: Establish a review cadence](#part-4-establish-a-review-cadence)
* [Worked scenario in full](#worked-scenario-in-full)

## Part 1: Write one decision record (20 minutes)

Pick a real decision you're currently facing — ideally one that's already a little contested, so you feel the value immediately. If nothing comes to mind, use this tutorial's running example: **"Should we switch payroll providers?"**

### Step 1 — Title (2 minutes)

Write a short, present-tense, active title. Not a question, a statement of the eventual decision:

> Switch payroll provider to [Provider]

Don't worry about being sure yet — you can change the title once the decision lands.

### Step 2 — Status and metadata (1 minute)

```markdown
* Status: request for comments
* Date: 2026-08-19
* Decision-maker(s): CFO
* Owner: Head of People Operations
```

Naming the decision-maker now — before the debate — avoids a fight over authority after opinions have already hardened.

### Step 3 — Context (5 minutes)

Write the situation as if explaining it to a new hire with zero background:

> Our current payroll provider has missed two filing deadlines in the last year, causing
> late-payment penalties in two states. Our contract renews in 60 days. Finance and People
> Operations agree the current provider is a risk, but disagree on urgency and on whether
> a switch this quarter is worth the disruption to open enrollment.

Notice this doesn't argue for a particular answer yet — it just states the forces in play.

### Step 4 — Options considered (5 minutes)

List the real alternatives, including "do nothing," with honest trade-offs:

> * **Stay with current provider, renegotiate SLAs** — lowest disruption, but doesn't
>   fix the root cause; provider has been unresponsive to prior escalations.
> * **Switch to Provider B** — stronger compliance track record, but implementation
>   overlaps with open enrollment, adding risk to that process.
> * **Switch to Provider C** — better price, but noticeably smaller support team and
>   two reference calls raised concerns about response times.

If you catch yourself writing only one real option and two strawmen, stop — that's a sign the decision was already made informally and the record is being used to justify it rather than sharpen it. Go back and get a second opinion on the alternatives first.

### Step 5 — Decision (2 minutes)

Once the decision-maker has actually decided (this may not happen in the same sitting as steps 1–4), write it in plain active voice:

> We will switch to Provider B, with implementation starting after open enrollment closes.

### Step 6 — Consequences (5 minutes)

State what changes, not a rehash of the trade-offs already covered above:

> * Current contract must be terminated with 30 days' notice before the new term begins.
> * People Operations will run a parallel-payroll test cycle before cutover.
> * Open enrollment timeline is protected; the switch is sequenced after it closes.
> * We accept a compressed implementation window in exchange for compliance risk reduction —
>   this is the trade-off we're explicitly choosing.

That's a complete lightweight decision record. Compare it against the [template](../template/index.md#lightweight-template) — you should be able to map every section.

## Part 2: Get it reviewed and accepted

1. Share the draft with the actual stakeholders (here: Finance, People Ops, and anyone the switch affects) with a clear ask and a deadline: *"Comments by Friday; after that I'll mark this accepted unless something material changes."*
2. Capture any new information as a dated addition rather than silently rewriting earlier sections — this preserves the reasoning trail.
3. Once the decision-maker confirms, change `Status` to `accepted` and record the final date.

## Part 3: Start a decision log

A single decision record is useful once. A **decision log** — the collection of every record for your team — is useful forever.

1. Create a durable, shared location: a `decisions/` folder in your team's existing shared drive, wiki space, or version-controlled repository. Use whatever your team already opens daily — the best tool is the one people will actually use.
2. File each new record with a clear, sortable name, e.g. `2026-08-19-switch-payroll-provider.md`.
3. Keep an index page listing every record with its title, status, and date — see [examples/index.md](../examples/index.md) for a working example of this pattern.
4. Some teams find the word "decisions" (dropping "record" entirely) makes the practice feel native rather than borrowed from engineering — use whichever name gets your team to actually write these.

## Part 4: Establish a review cadence

Decisions age. Set a light governance rhythm so the log stays trustworthy rather than becoming a graveyard of stale choices:

* **Per-record owner** reviews their own records at least annually, or whenever the underlying situation materially changes.
* **When a decision is reversed or replaced**, write a new record and set the old one's status to `superseded`, linking to the replacement. Never silently delete — the history of *why we changed our mind* is often more valuable than the current answer.
* **Quarterly or annually**, skim the whole log for records still marked `request for comments` or `proposed` that never got resolved, and either close them out or archive them explicitly.

See the [checklist](../checklist/index.md) for a condensed, repeatable version of all four parts above.

## Worked scenario in full

For a complete, filled-in example built from this tutorial's scenario, see a comparable worked record in [examples/index.md](../examples/index.md) — for instance the [Build vs. buy for a project](../examples/project-build-vs-buy.md) example follows the same structure end to end, including a fully written Consequences section.
