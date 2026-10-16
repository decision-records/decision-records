# Content

Source of truth for content is `locales/en-us`. Every other locale is a
translation of it, never the reverse. The top-level `README.md` is the
canonical English overview; `locales/en-us/index.md` is built from it.

## Sections (6)

| Directory | What it is |
|---|---|
| `guide` | What a decision record is, why people use them, lifecycle, governance, pitfalls |
| `tutorial` | Hands-on walkthrough: write a first decision record in under 20 minutes |
| `template` | The copy-paste templates (lightweight and comprehensive) and how to choose |
| `examples` | Worked, filled-in records across business functions |
| `checklist` | Checklists for deciding, writing, reviewing, and running the practice |
| `help` | FAQ, troubleshooting, glossary |

Each section directory has an `index.md`. `guide`, `tutorial`, `template`,
`checklist` and `help` are single pages (the section index is the page).
`examples` has an index plus one directory per example.

## Examples (25)

The set is whatever directories exist under `locales/en-us/examples/`:
agile-manifesto, business-frameworks, contact-relationship-management, extreme-programming, health-economics, hr-remote-work-policy, hybrid-working-choices, information-technology-frameworks, itil-5, lean-manufacturing, marketing-brand-repositioning, product-business-versus-service-business, product-pricing-model-change, project-build-vs-buy, project-portfolio-management, public-value, risk-single-vendor-dependency, sales-crm-vendor-selection, six-sigma, software-architecture-database-choice, strategy-enter-new-market, target-operating-model, ways-of-working, workplace-planning-management, workplace-reasonable-adjustments.

Each example is `# Title`, a Status/Date/Decision-maker(s)/Owner list, then
`## Context`, `## Options considered`, `## Decision`, `## Consequences`, and
optionally `## Related`. Adding or removing an example requires updating the
examples index table, every translated index, the counts in this spec and
`AGENTS.md`, and running `pnpm run content` in the website (regenerates
`llms.txt`/`llms.json`).

## Writing rules

- Product, tool, and company names stay in Latin script in every locale.
- Code blocks, URLs, and file names inside code are not translated.
- Heading text is translated; a table of contents must link to the slugs of
  its own translated headings.
- Do not invent facts, versions, or links absent from the English source.
- Relative links between pages use directory form (`../template/index.md#anchor`,
  `project-build-vs-buy/`); the site rewrites them to routes.
- The top-level `README.md` keeps its metadata comment block; bump `version`
  (semver) and `updated` (UTC, ISO 8601) on a material edit.
