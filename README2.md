# Decision Records

A **decision record (DR)** is a short, structured document that captures one significant choice, why it was made, what alternatives were rejected, and what it means going forward.

Decision records started in software architecture (as "architecture decision records" or ADRs), but the pattern has nothing to do with code. Any leader who makes choices that other people will later need to understand — strategic, financial, commercial, organizational, or technical — can use the same lightweight discipline. This repository treats decision records as a general-purpose leadership tool, not a developer tool that leaders occasionally borrow.

**Who this is for:** business leaders, technology leaders, and strategy leaders — CEOs, COOs, CFOs, CTOs, VPs and directors of sales, marketing, product, HR, operations, risk, and strategy, and anyone who leads a team, a function, or an initiative and wants their choices to survive their own memory, staff turnover, and the next reorg.

## Why this matters

Every leader eventually hits the same failure mode: a choice was made two years ago, the people who made it have moved on, and no one can reconstruct *why*. The team either repeats a failed experiment, reverses a decision that was actually correct for reasons now lost, or spends a week in archaeology before it can move forward. A decision record is the cheapest insurance against that failure — usually a single page, written at the moment of the decision, while the reasoning is still cheap to write down and expensive to lose.

## Decision records are for all of business, not just engineering

Wherever a choice is hard to reverse, affects other people, or will be questioned later, it deserves a decision record:

| Domain | Example decisions |
|---|---|
| Strategy | Enter or exit a market, choose a growth vs. profitability posture, set a 3-year bet |
| Sales | Change territory model, select a CRM, restructure compensation |
| Marketing | Reposition a brand, choose a channel mix, pick an agency vs. in-house model |
| Product | Set pricing model, choose build-vs-buy, sunset a feature or product line |
| Finance | Choose a financing structure, set a capital allocation policy |
| HR / People | Set a remote-work policy, redesign leveling and compensation bands |
| Risk & Legal | Accept, mitigate, or transfer a specific risk; choose a vendor concentration limit |
| Operations / Project | Build vs. buy, insource vs. outsource, choose a delivery methodology |
| Public Relations | Choose a crisis communication posture, set a media engagement policy |
| Professional Development | Set a promotion or training investment policy |
| Technology / Architecture | Choose a database, a cloud provider, an integration pattern |

If you can imagine someone on your team asking "wait, why did we do it this way?" a year from now, that decision is a candidate for a decision record.

## What's in this repository

- **[spec/index.md](spec/index.md)** — the condensed specification: template fields, core benefits, best practices.
- **[guide/index.md](guide/index.md)** — the full guide: what a decision record is, why leaders use them, the anatomy of a record, lifecycle, governance, and pitfalls to avoid.
- **[tutorial/index.md](tutorial/index.md)** — a hands-on, step-by-step walkthrough: write your first decision record in about 20 minutes, then roll the practice out to a team.
- **[template/index.md](template/index.md)** — copy-paste templates: a lightweight version for everyday decisions and a comprehensive version for high-stakes ones.
- **[examples/index.md](examples/index.md)** — worked examples across strategy, sales, marketing, product, HR, risk, project, and technology decisions.
- **[checklist/index.md](checklist/index.md)** — checklists for deciding whether to write one, writing it well, reviewing it, and running the practice across an organization.
- **[help/index.md](help/index.md)** — FAQ, troubleshooting, and a glossary for common questions leaders raise when adopting this.

## Quick start

1. Read the [guide](guide/index.md) (10 minutes).
2. Copy the [lightweight template](template/index.md#lightweight-template) into your next hard decision.
3. Skim an [example](examples/index.md) close to your domain.
4. Use the [checklist](checklist/index.md#checklist-does-this-decision-need-a-decision-record) to decide if the decision is worth recording.
5. Store it somewhere your team already looks — a shared drive folder, a wiki page, or a `decisions/` folder next to your other work.

## Source material

This repository builds on and generalizes two prior works by the same author: the condensed [specification](spec/index.md) here, and the fuller [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) project, which itself draws on the software architecture decision record (ADR) tradition (Michael Nygard, adr.github.io, ThoughtWorks, AWS, and others — see the guide's further reading).
