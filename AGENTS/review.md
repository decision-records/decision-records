# Review a contributor's pull request

- Prose and link additions normally touch the root `README.md` or a page under
  `locales/en-us/`; the generated `locales/en-us/index.md` must match (run
  `python3 scripts/build-root-index.py`).
- New examples must include the directory, `index.md`, a `README.md` symlink,
  a `.locale-peer-id`, and an index-table row, not just a README mention.
- Check counts and lists in `spec/` and `static/llms.txt` still match.
- CI (`.github/workflows/ci.yml`) must be green.
- Check commit/PR title is a present-tense imperative phrase.
