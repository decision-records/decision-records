# Help / FAQ

Common questions leaders raise when adopting decision records, plus a short glossary.

Contents:

* [Frequently asked questions](#frequently-asked-questions)
* [Troubleshooting](#troubleshooting)
* [Glossary](#glossary)
* [Where to go next](#where-to-go-next)

## Frequently asked questions

**How is this different from meeting minutes?**
Minutes record what was *discussed*; a decision record captures what was *decided and why*, written to stand alone without the meeting's context. Minutes are a good input to a decision record — they're rarely a substitute for one.

**How much time should this actually take?**
For a lightweight record on a decision you already understand, 15–30 minutes. The time is rarely wasted, because it's time you would otherwise spend re-explaining the same reasoning in every future conversation about the topic. Reserve comprehensive records — with cost analysis, SWOT/PEST, and multiple documented opinions — for genuinely high-stakes calls.

**Who should own our decision log?**
Someone accountable for the team or function it covers — often the same person who'd otherwise be answering "why did we do this?" from memory a year later. In larger organizations, a lightweight governance owner (e.g., Chief of Staff, Head of Strategy, or a rotating owner per function) can maintain the index without approving every individual decision.

**What if the decision-maker and the stakeholders disagree?**
Settle the *process* before the *decision*: name who has final authority up front (a person or a defined rule, like "consensus, escalate to CEO if unresolved after one week"). Record dissenting opinions in the "Opinions" section of the comprehensive template rather than erasing disagreement — a well-documented dissent is valuable if the decision is later revisited.

**What if we later find out the decision was wrong?**
That's exactly what the record is for. Write a new decision record that supersedes the old one, explain what changed (new information, changed circumstances, or a reasoning error), and link back. Being wrong isn't a reason to delete the trail — it's the reason the trail exists.

**Do we need special software for this?**
No. A folder of Markdown or Word files in a shared drive, a wiki space, or a version-controlled repository all work. Pick whatever your team already opens daily — adoption fails far more often from unfamiliar tooling than from a missing feature.

**Can an AI assistant help draft or review these?**
Yes, productively, in two ways: (1) drafting a first pass of Context and Options Considered from meeting notes or a transcript, for a human decision-maker to correct and finalize; (2) reviewing a draft against the [checklist](../checklist/index.md) to catch missing options, vague decisions, or consequences that just restate the debate. An AI assistant should never be the named decision-maker — accountability stays with a person or committee.

**Isn't this just bureaucracy?**
It becomes bureaucracy exactly when it's imposed as after-the-fact paperwork for decisions already made and announced. It stays valuable when it's used as a *thinking tool* before a decision, by the people actually making it. See [Common pitfalls](../guide/index.md#common-pitfalls) in the guide.

**How many decision records is too many?**
If people stop reading the log, you have log fatigue — you're recording decisions that were easy to reverse or affected only one person. Restrict records to choices that are genuinely hard to reverse, cross-cutting, or likely to be revisited. See the [checklist](../checklist/index.md#checklist-does-this-decision-need-a-decision-record).

**Our team dislikes the word "architecture" or "record" — does the name matter?**
Not to the mechanics. Some teams get much faster adoption just by calling the folder `decisions/` instead of `decision-records/` — the same template works under either name. Use whatever gets your team to actually write these down.

**Can one decision record apply to multiple business units?**
Yes, if the decision genuinely is shared (e.g., a company-wide vendor). But keep it to *one decision*: if two business units are actually making two different choices for two different reasons, write two records and link them as related.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Records pile up in "request for comments" forever | No deadline or no named decision-maker | Add both explicitly; default to acceptance if no objection by a stated date |
| Nobody reads the log | Too many low-stakes records; log fatigue | Apply the "does this need a record?" checklist more strictly |
| Records read like a pros/cons list, no real decision | Decision section written before the decision was actually made | Don't publish "Decision" as final until the decision-maker has truly decided |
| Team treats it as paperwork, resents writing them | Introduced top-down as a mandate, or used only after the fact to justify prior choices | Reintroduce as a tool the team chooses because it saves them time later, starting with one visibly useful example |
| Nobody can find old records | No shared, durable storage location or index | Create a single `decisions/` location with an index page listing title, status, and date |
| Decisions get silently reversed without anyone noticing | No supersede convention | When a decision changes, always write a new record with status `superseded` linking back |

## Glossary

* **Decision record (DR)** — a document capturing one significant choice, its context, options considered, the decision, and its consequences.
* **Decision log (DL)** — the full collection of decision records for a team, function, or organization.
* **Architecture decision record (ADR)** — the software-specific ancestor of this pattern, focused on technology and design choices.
* **Status** — the lifecycle stage of a decision: request for comments, proposed, accepted, rejected, deprecated, or superseded.
* **Superseded** — a decision that has been replaced by a newer one; the old record stays in the log with a link forward, rather than being deleted.
* **Significant requirement** — a need with a measurable effect on the system or organization, the kind of thing that justifies writing a decision record.
* **Knowledge management (KM)** — the broader discipline decision records belong to: capturing institutional knowledge so it outlives any one person's memory.

## Where to go next

* New to the practice? Start with the [guide](../guide/index.md).
* Ready to write one? Follow the [tutorial](../tutorial/index.md).
* Need a template to copy? See [template/index.md](../template/index.md).
* Want to see one in your domain first? Browse [examples/index.md](../examples/index.md).
* Rolling this out to a team? Use the [checklist](../checklist/index.md).
