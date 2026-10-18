# Repository

Monorepo `decision-records`. `git push origin main` pushes to three remotes
(GitHub, Codeberg, GitLab). The website is published separately via
`git subtree` (see [website.md](website.md#publishing)).

## Layout

```
README.md                         canonical English overview; locales/en-us/index.md is built from it
AGENTS.md, AGENTS/                agent rules and task guides (see agents.md)
spec/                             this specification
skills/                           Claude Code skills (see agents.md)
scripts/                          audit-locales.py, build-root-index.py, build-english-variants.py (English variants and the `cy-001` copy)
locales/index.md                  locale index; locales/README.md is a symlink to it
locales/<code>/                   one directory per locale (see locales.md)
decision-records.github.io/       website, published via git subtree (see website.md)
```

Every directory under `locales/` is named `<language>-<region>` (lowercase, a
hyphen, e.g. `en-us`, `cy-gb`, `zh-tw`); two-letter, region-less directories
such as `locales/en/` do not exist. `en-us` is the English source of truth, so
links to English content use `locales/en-us/`.

## Per-locale layout

Each locale holds the section directories (names translated per
[locales.md](locales.md)): guide, tutorial, template, examples, checklist, help.
Every content directory contains `index.md` and a `README.md` that is a
**symlink to `index.md`** (`ln -s index.md README.md`; never a copy, so the two
cannot differ). Locale directories carry `.locale-peer-id` files: opaque,
one per content directory plus section and locale roots, copied unchanged from
`locales/en-us`, never hand-edited. A new page gets one freshly generated
32-character hex id in `locales/en-us` (`openssl rand -hex 16`), copied to its
translation in every locale.

Each locale also has a root `index.md` (with a `README.md` symlink): its
translated top-level README, which is the locale's landing page on the website.
For `en-us` it is **generated** from the top-level `README.md` by
`python3 scripts/build-root-index.py`; never hand-edit it.

`locales/en-us/topics/` holds empty placeholder directories for related
concepts. It has no `.locale-peer-id`, so it is not a section and is not
published.

## Counts

| Item | Count |
|---|---|
| Sections | 6 (guide, tutorial, template, examples, checklist, help) |
| Pages (6 section indexes plus 25 examples) | 31 |
| Examples | 25 |
| Locales (hyphenated dirs, incl. `en-us`) | 26 (listed in [locales.md](locales.md)) |

## Commits

Commits are SSH-signed. Trailer: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
for Claude-assisted commits. Titles are present-tense imperative phrases.

## Delivery: automatically commit, push, publish

When an agent finishes a change, it delivers it without waiting to be asked:

1. **Verify** with the checks below that apply to the change (for site changes,
   `pnpm run check` and `pnpm run build`). If any check fails, stop: do not
   commit, and report the failure.
2. **Commit** the files belonging to the task, staged by path, signed, with
   the trailer above. Do not sweep in unrelated changes; report them instead.
3. **Push** with `git push origin main`.
4. **Publish** the website with `git subtree push` (see
   [website.md](website.md#publishing)) whenever anything under
   `decision-records.github.io/` changed in the commit.
5. **Report** the commit hash, the push result, and the subtree range. Do not
   claim the site redeployed unless it was checked.

Limits: never force-push, rewrite history, skip signing or hooks, or delete
remote branches automatically; those still require an explicit request.
If a push or publish fails, stop and report; do not retry destructively.
A user instruction to hold off (for example "don't push yet") overrides this
rule for that task.

## Verification

1. `python3 scripts/audit-locales.py` exits 0: every locale has every page of
   `en-us`, every `README.md` is a symlink to its `index.md` (the only symlinks
   allowed), no stray files, every relative link and `#fragment` resolves
   (heading slugs: letters, marks, numbers, `-` and `_` kept; spaces become `-`;
   duplicate headings get `-N`), and `locales/en-us/index.md` is current.
2. In the website directory: `pnpm run content` leaves no uncommitted changes
   (the generated files are current), `pnpm test` passes (the `/` language
   router rules), and `pnpm run check` reports 0 errors.
3. After `pnpm run build`, `pnpm run verify` crawls the prerendered pages and
   reports 0 broken links or anchors.
4. `pnpm run a11y` (after the build) runs axe-core in a browser on key pages at
   desktop and 390px width, with the phone search panel open, and checks colour
   contrast on all 45 themes: 0 violations. Set `PW_CHANNEL=chrome` to use an
   installed Chrome (CI does, so it downloads no browser).

CI (`.github/workflows/ci.yml`) runs all of these on every push to `main` and
every pull request, so a change that breaks any of them is caught before it is
published. Run them locally before committing.
