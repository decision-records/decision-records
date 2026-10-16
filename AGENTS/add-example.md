# Add a decision record example

Content rules: [spec/content.md](../spec/content.md).

1. Create `locales/en-us/examples/<slug>/index.md` with the worked example,
   a symlink `README.md -> index.md`, and a fresh `.locale-peer-id`
   (`openssl rand -hex 16 > .locale-peer-id`).
2. Add a row to the table in `locales/en-us/examples/index.md` and, if it
   deserves mention, to the examples list in the root `README.md`.
3. Update the example count (now 25) in `spec/index.md`, `spec/repository.md`,
   `spec/content.md`, `AGENTS.md`; add unusual terms to `cSpell.words` in
   `.vscode/settings.json`.
4. Run `python3 scripts/build-root-index.py`, `python3 scripts/build-english-variants.py`, `python3 scripts/audit-locales.py`,
   and `pnpm run content` in the site (regenerates `llms.txt`/`llms.json`).
