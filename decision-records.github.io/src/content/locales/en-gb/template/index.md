# Decision record templates

Two templates, both plain Markdown: copy the one you want into a new file and fill it in.

## Choosing which template to use

Default to the **lightweight template** — most decisions need only its six fields, and a page that's growing past that is usually more than one decision anyway.

Move to the **comprehensive template** when a decision is high-stakes, has several stakeholders whose opinions matter individually, or genuinely needs structured cost/SWOT/PEST analysis to defend the choice later. See the [checklist](../checklist/index.md#checklist-does-this-decision-need-a-decision-record) for the broader question of whether a decision needs a record at all, and the [guide](../guide/index.md#the-anatomy-of-a-decision-record) for how the two templates' fields map onto each other.

## Lightweight template

```markdown
# Title (short, present-tense, active, up to ~50 characters)

- Status: request for comments | proposed | accepted | rejected | deprecated | superseded
- Date: YYYY-MM-DD
- Decision-maker(s): [name(s) or role(s) with authority to accept this]
- Owner: [who maintains and periodically reviews this record]

## Context

Describe the situation and constraints that made this decision necessary, written so a reader with no memory of the meeting understands why the question even came up.

## Options considered

List the realistic alternatives — including "do nothing" if relevant — as facts and trade-offs, not a strawman lineup that makes the chosen option look obviously correct.

## Decision

State the choice in plain, active language: "We will do X." Not a summary of pros and cons — a clear statement of what was chosen.

## Consequences

State what changes as a result: costs, risks, follow-on decisions, and anything given up by not choosing an alternative. Read as "we now do X instead of Y," not as a pros/cons recap of the decision already made.
```

See the [tutorial](../tutorial/index.md) for a full worked walkthrough of this template, and [examples/index.md](../examples/index.md) for finished, filled-in examples.

## Comprehensive template

```markdown
# Title (short, present-tense, active, up to ~50 characters)

- Status: request for comments | proposed | accepted | rejected | deprecated | superseded
- Date: YYYY-MM-DD
- Decision-maker(s): [name(s) or role(s) with authority to accept this]
- Owner: [who maintains and periodically reviews this record]

Summary: one or two sentences on the current position and any open needs.

## Issue

Describe the issue you want to address. Leave no questions about why you’re addressing this issue now.

Follow a minimalist approach. Address only the issues that need addressing at various points in the life cycle.

You may want to add some grouping information, such as tags, keywords, knowledge base links, etc.

## Assumptions

Describe any underlying assumptions in the environment in which you’re making the decision.

Be sure to address any relevant quality attributes a.k.a. cross-functional requirements.

Example assumptions may involve scope, cost, schedule, technology, resource availability, quality of service needs, service level agreements, and so on.

Note that environmental constraints (such as accepted technology standards, enterprise architecture, commonly employed patterns, and so on) might limit which options you consider.

## Constraints

Capture any additional constraints to the environment that this decision might pose.

Be sure to address any relevant quality attributes a.k.a. cross-functional requirements, as above.

Example constraints may involve platform choices, vendor selections, the ease of decision reversibility, etc.

## Options considered (Positions)

List the positions, which are the viable options that you are considering, or have considered.

Use facts and data, not opinions. The positions can often require long explanations, sometimes even models and diagrams.

This doesn't need to be an exhaustive list; however, you don’t want to hear the question "Did you think about...?" during a final review, because this would lead to loss of credibility and questioning of other architectural decisions.

This section also helps ensure that you heard others’ opinions; explicitly stating other opinions helps enroll their advocates in your decision.

### Cost analysis (optional)

Summary: briefly explain this section, and ideally highlight any outliers.

Examples:

- Initiating, such as setup costs, time, and resources.

- Operating, such as support and maintenance

- Training, such as upskilling and change management

- Licensing, such as contract agreements and legal commitments

- Metering, such as bandwidth and CPU usage

### SWOT analysis (optional)

Summary: briefly explain this section, and ideally highlight any outliers.

- Strengths

- Weaknesses

- Opportunities

- Threats

### PEST analysis (optional)

Summary: briefly explain this section, and ideally highlight any outliers.

- Political factors

- Economic factors

- Social factors

- Technological factors

Some teams like to add these as their own categories:

- Legal factors - we prefer to have these in the political factors.

- Regulatory factors - we prefer have these in the political factors.

- Environmental factors - we prefer to have these in the economic factors.

- Demographic factors - we prefer to have these in the social factors.

### Other analysis (add your own ideas here)

Add your own ideas here...

## Opinions

Summary: briefly explain this section, and ideally highlight any outliers.

- By the team, ideally written by the actual teammate.

- By other internal stakeholders, ideally written by the actual stakeholder.

- By external people, such as third-party advisors, evaluators, reviewers, etc.

For each opinion, be clear about:

- Who is providing the opinion

- What other candidates were considered,

- How did the author evaluate the candidates?

- Why did the author choose the winner?

- What is happening since then?

- Knowing what you know now, what would you advise people to do differently?

### Opinion 1 title (add yours here)

Summary: briefly explain this section, and ideally highlight any outliers.

Explain your opinion here.

### Opinion 2 title (add yours here)

Summary: briefly explain this section, and ideally highlight any outliers.

Explain your opinion here.

### Opinion 3 title (add yours here)

Summary: briefly explain this section, and ideally highlight any outliers.

Explain your opinion here.

## Argument

Summary: briefly explain this section, and ideally highlight any outliers.

Explain why you selected a position.

Decisions should be purpose-driven. To show accountability, explicitly map your decisions to the objectives or requirements.

The argument is probably as important as the decision itself.

This doesn't need to be an exhaustive write-up; however, you don’t want to hear the question "Did you think about...?" during a final review, because (as above) this would lead to loss of credibility and questioning of other architectural decisions.

## Implications

Summary: briefly explain this section, and ideally highlight any outliers.

Clearly state your decision’s implications. This can be very effective in gaining buy-in and creating a roadmap for execution.

For example, a decision might introduce a need to make other decisions, create new requirements, or modify existing requirements; pose additional constraints to the environment; require renegotiating scope or schedule with customers; or require additional staff training.

## Related decisions

Summary: briefly explain this section, and ideally highlight any outliers.

List any related decisions here.

We’ve found that in practice, a traceability matrix, decision trees, or metamodels are more useful. Metamodels are useful for showing complex relationships diagrammatically (such as Rose models).

## Related requirements

Summary: briefly explain this section, and ideally highlight any outliers.

List any related requirements here.

We’ve found it more convenient to reference a traceability matrix. You can assess each decision’s contribution to meeting each requirement, and then assess how well the requirement is met across all decisions. If a decision doesn’t contribute to meeting a requirement, then don’t make that decision.

## Related artifacts

List any related artifacts here.

Examples are any scope documents, planning documents, business process models, etc., that this decision impacts.

## Related principles

If the enterprise has an agreed-upon set of principles, make sure the decision is consistent with one or more of them. This helps ensure alignment along domains or systems.

## Related notes

Because decision-making processes can take significant time, we’ve found it useful to capture notes and issues that the team discusses during the socialization process.
```
