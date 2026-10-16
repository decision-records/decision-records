# Translate a locale

Rules: [spec/locales.md](../spec/locales.md). Translate serially, one locale at
a time; do not use parallel subagents.

1. Pick the next code from `locales/locales-by-priority.md`. Source is
   `locales/en-us`.
2. Build the slug map (section, English slug, localized directory) for the 6
   sections and 25 examples. Keep product names in Latin script.
3. Translate the six section pages, the examples, and the examples index. Link
   targets must equal the translated directory names. Regenerate any table of
   contents from the translated headings.
4. Make each directory's `README.md` a symlink to its `index.md`
   (`ln -s index.md README.md`) and copy `.locale-peer-id` files from
   `locales/en-us`.
5. Write the root `index.md` (the translated README; `ln -s index.md README.md`)
   as described in [../spec/locales.md](../spec/locales.md#root-index-the-translated-readme).
   Delete `.DS_Store`.
6. Run `python3 scripts/audit-locales.py` and the other checks in
   [spec/repository.md](../spec/repository.md#verification).
7. Append the locale to `locales/index.md`.
8. Add `<language>_<region>` to `LOCALES` in `src/lib/locales.js`, sorted by
   code, and its entry to `src/lib/data/hero.js`; add the `tests/` cases that
   apply; run `pnpm run content`, `pnpm test`, and `pnpm run check`.
9. Commit, then follow [publish.md](publish.md).
