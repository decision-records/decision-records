---
name: decision-records-maintainer-skill
description: Maintain the decision-records repository itself — add or edit worked examples, keep the examples index and cross-references consistent, follow the repo's index.md/README.md symlink and header conventions, and audit for known content gaps. Use when changing this repo's own docs or structure (not when using the repo's templates to write someone else's decision record — see decision-records-skill for that).
---

# Decision-records maintainer skill

For work on the `decision-records` repo itself: its structure, cross-links, and
conventions. If the task is instead "help me write a decision record," use
`decision-records-skill` — it applies this repo's templates to a real decision
rather than maintaining the repo.

## Repo map

| Directory | Content |
|---|---|
| `guide/` | Leadership-oriented explainer: what/why/anatomy/lifecycle/governance/pitfalls |
| `template/` | The copy-paste template (currently: one comprehensive template only — see "Known gap" below) |
| `tutorial/` | Hands-on walkthrough, non-technical running example |
| `examples/` | Worked, filled-in records across business functions, one per subfolder |
| `checklist/` | Repeatable checklists for each stage of the practice |
| `help/` | FAQ, troubleshooting table, glossary |
| `spec/` | Condensed specification (template fields, benefits, best practices) |
| `topics/` | Placeholder subfolders for related concepts (REMAP, DRL, IBIS, QOC, IBM e-Business RAF) — currently empty; the root README's "See also" list points at these names but they have no content yet |

## File and symlink convention

Every section directory holds its real content in `index.md`, with `README.md`
as a **symlink to `index.md`** (so GitHub renders the same content whether
someone opens the folder or the README). Same pattern one level deeper for each
`examples/<slug>/`. When adding a new directory or example:

```sh
ln -s index.md README.md
```

Do not create `README.md` as a separate real file in these subdirectories — that
would fork the content from what `index.md` says.

## Adding a new worked example

1. Create `examples/<domain-slug>/index.md` following the shape every existing
   example uses:
   - `# Title` (present-tense, active)
   - Bulleted `Status` / `Date` / `Decision-maker(s)` / `Owner`
   - `## Context`
   - `## Options considered` (each option as a fact + trade-off, not a strawman)
   - `## Decision` (plain active voice)
   - `## Consequences` (what changes, not a pros/cons rehash)
   - Optional `## Related`
2. Symlink `examples/<domain-slug>/README.md -> index.md`.
3. Add a row to the table in `examples/index.md`: link text, domain, `Lightweight`
   or `Comprehensive` (whichever the example actually matches), and status.
4. If the example introduces uncommon proper nouns or terms, add them to
   `cSpell.words` in `.vscode/settings.json` so the editor spell-checker stays
   quiet (existing list: Akerman, commentable, evalation, Nygard, Nygard's,
   Sluiter, stackoverflow, thinkrelevance, thoughtworks, utdallas).

## Root README.md header

`README.md` opens with an HTML comment metadata block:

```html
<!--
* browser: decision-record
* tracker: fc94c9c34370b9b2f36270aac1deca20
* version: 3.0.0
* updated: 2026-08-19T17:28:37Z
* contact: Joel Parker Henderson (http://joelparkerhenderson.com)
* options: commentable
-->
```

When making a material edit to `README.md`, bump `version` (semver) and set
`updated` to the current UTC timestamp in the same ISO 8601 form. Leave
`browser`, `tracker`, and `contact` alone unless told otherwise.

## Known cross-reference gap — check before closing related work

`guide/index.md`, `tutorial/index.md`, `checklist/index.md`, and `examples/index.md`
all link to `template/index.md#lightweight-template` and
`template/index.md#choosing-which-template-to-use`, but `template/index.md`
currently defines neither heading — it holds only the comprehensive template.
If you're touching any of those four files, or `template/index.md` itself,
either:

- add a `## Lightweight template` section and a `## Choosing which template to
  use` section to `template/index.md`, matching the six-field structure the
  other docs already describe (see `decision-records-skill`'s Step 1 for that
  shape), or
- update the four referencing links so they don't point at anchors that don't
  exist.

Don't assume this has already been fixed — re-check with
`grep -rn 'template/index.md#' .` from the repo root.

## Other conventions

- `CONTRIBUTING.md` and `CITATION.cff` both list `joel@joelparkerhenderson.com`
  as the contact — keep any new contact info consistent with these rather than
  introducing a third address.
- `origin` pushes to three mirrors (GitHub, Codeberg, GitLab) but only fetches
  from GitHub — a plain `git push` updates all three; don't assume a GitHub-only
  remote.
- Prefer extending an existing directory's `index.md` over adding new
  top-level directories; the top-level README's contents list and nav have to
  stay in sync with whatever directories exist.
