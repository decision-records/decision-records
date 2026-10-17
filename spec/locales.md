# Locales

## Codes

Every directory under `locales/` is named lowercase `<language>-<region>`,
optionally followed by `-<variant>` (e.g. `en-us`, `cy-gb`, `zh-tw`, `en-gb-oxendict`). Two-letter, region-less directories such as
`locales/en/` do not exist and must not be created. `-001` means "world" (UN
M.49), for a language-wide translation.

`en-us` is the English source of truth: edit English there, then translate.
Links to English content use `locales/en-us/`.

The picker uses `_` and mixed case instead (`en_US`, `zh_TW`, `de_001`). A
directory name is also the locale's route (`/<code>/`) and its search-index
name (`static/search/<code>.json`). Only locale directories live in `locales/`;
stray or duplicate directories fail the audit and the sync.

## The locales

| Directory and route | Picker value | Endonym (Intl) |
|---|---|---|
| `ar-001` | `ar_001` | العربية (العالم) |
| `bn-001` | `bn_001` | বাংলা |
| `cy-001` | `cy_001` | Cymraeg (Y Byd) |
| `cy-gb` | `cy_GB` | Cymraeg (Y Deyrnas Unedig) |
| `de-001` | `de_001` | Deutsch |
| `en-001` | `en_001` | English (World) |
| `en-gb` | `en_GB` | English (Great Britain) |
| `en-gb-oxendict` | `en_GB_oxendict` | English (Great Britain, Oxford spelling) |
| `en-us` | `en_US` | English (United States) |
| `es-001` | `es_001` | español (Mundo) |
| `fr-001` | `fr_001` | Français |
| `hi-001` | `hi_001` | हिन्दी |
| `hi-in` | `hi_IN` | हिन्दी (भारत) |
| `pt-001` | `pt_001` | Português |
| `ru-001` | `ru_001` | Русский |
| `ur-001` | `ur_001` | اردو |
| `zh-001` | `zh_001` | 中文（世界） |
| `zh-cn` | `zh_CN` | 中文（中国） |

`cy-001` is an exact **generated** copy of `cy-gb` (edit `cy-gb` only), the same way `en-001`, `en-gb` and `en-gb-oxendict` are **generated** from `en-us` by
`python3 scripts/build-english-variants.py` (for English a respelling: `en-001` and `en-gb`
use British spelling with -ise, `en-gb-oxendict` British spelling with Oxford
-ize). Never edit them by hand; edit `en-us`, run the script, commit the
result. The audit fails when they are stale. Their pages are `noindex` and
not in the sitemap (`NOINDEX_SLUGS` in `src/lib/locales.js`). A directory name
may carry a BCP 47 variant subtag (5 to 8 letters or digits) after the region
(`en-gb-oxendict`, picker value `en_GB_oxendict`).
Translations are added one locale at a time; see the workflow below. The
website's router and picker already support any `<language>-<region>` and the
`-001` world fallback, so adding a locale needs no code change beyond the
`LOCALES` array.

`locales/index.md` lists each locale as `* [<Endonym> (<Region>)](<code>/)`.
`locales/locales-by-priority.md` records the intended translation order.

## Translating directory names

Everything under `locales/<code>/` is translated, including directory names:
the section directories and every content directory. Slugs are lowercase,
hyphen-separated, keep Latin-script product names, and have no punctuation
other than `-`. A slug may equal the English one only when it is a product
name or a genuine cognate in that language. Link targets must match the
translated directory names exactly. Keep the English-to-local slug mapping as
a three-column TSV (section, English slug, localized directory) while
translating. Pages are matched across locales by `.locale-peer-id`, not by
name.

## Root index (the translated README)

`locales/<code>/index.md` is the locale's translation of the top-level
`README.md`, and the locale's landing page on the website; `README.md` beside
it is a symlink. The website relies on this structure:

1. `# <title>` and one intro paragraph (the hero), then the Contents list.
2. `##` sections in README order. The landing page shows six of them as cards:
   sections 1, 3, 4, 7, 8 and 9 (what is a decision record, the template, how
   to start, Claude, suggestions, teamwork advice). Keep that order when
   translating. Contents anchors are the heading slugs defined in
   [repository.md](repository.md#verification).

## Translation workflow (per locale, serial)

1. Translate every page of `locales/en-us` into `locales/<code>/`.
2. Write the root `index.md` and make each directory's `README.md` a symlink
   to its `index.md`; copy `.locale-peer-id` files from `locales/en-us`.
3. Run `python3 scripts/audit-locales.py`.
4. Append the locale to `locales/index.md`.
5. Add the code to `LOCALES` in the website's `src/lib/locales.js`, keeping the
   array sorted by code, and add its hero strings in `src/lib/data/hero.js`.
6. Run `pnpm run content`, `pnpm run check`, `pnpm test`; commit, push,
   publish the website subtree, verify.

Translate serially, never with parallel subagents. Translations are produced
without native-reader review unless stated.

## Picker labels

The endonym comes from `Intl.DisplayNames`. For `*_001` the region is dropped
(`Deutsch`); for other regions it becomes ` - ` (`English - United States`).
The first letter of each part is capitalized.

## Welsh terminology (`cy-gb`, `cy-001`)

Welsh translations follow the Welsh Government's TermCymru terminology list wherever it has an entry.
`cy-gb` is the source; `cy-001` is generated as an exact copy. Terms used throughout:

| English | Welsh |
|---|---|
| decision | penderfyniad |
| record | cofnod |
| decision record (DR) | cofnod penderfyniad (plural cofnodion penderfyniadau; "DRau") |
| decision log (DL) | log penderfyniadau |
| template | templed (pl. templedi) |
| context | cyd-destun |
| status | statws |
| consequence(s) | canlyniad(au) |
| options considered | dewisiadau a ystyriwyd |
| requirement | gofyniad |
| stakeholder | rhanddeiliad |
| criteria | meini prawf |
| teamwork | gwaith tîm |
| governance | llywodraethiant |
| lifecycle | cylch oes |
| repository | ystorfa |
| checklist | rhestr wirio |
| timestamp | stamp amser |
| request for comments / proposed / accepted / rejected | cais am sylwadau / wedi'i gynnig / wedi'i dderbyn / wedi'i wrthod |
| deprecated / superseded | anghymeradwy / wedi'i ddisodli |

Acronyms (DR, DL, OKR, SWOT, PEST, ITIL, XP) are kept; product names, code, and URLs stay in English.
Directory names are Welsh slugs (`canllaw`, `tiwtorial`, `templed`, `enghreifftiau`, `rhestr-wirio`, `cymorth`).

## Spanish terminology (`es-001`)

`es-001` is neutral international Spanish (no regional vocabulary), addressing the reader as "usted".

| English | Spanish |
|---|---|
| decision record (DR) | registro de decisiones (RD) |
| decision log (DL) | bitácora de decisiones (BD) |
| architecture decision record (ADR) | registro de decisiones de arquitectura (ADR) |
| template | plantilla |
| lightweight / comprehensive | ligera / completa |
| checklist | lista de verificación |
| stakeholder | parte interesada |
| status | estado |
| request for comments / proposed / accepted / rejected | solicitud de comentarios / propuesto / aceptado / rechazado |
| deprecated / superseded | obsoleto / sustituido |
| options considered | opciones consideradas |
| consequences | consecuencias |
| governance | gobernanza |
| SWOT | DAFO |

Acronyms (PEST, OKR, ITIL, XP) are kept; product names, code, and URLs stay in English. Directory names are
Spanish slugs without accents (`guia`, `plantilla`, `ejemplos`, `lista-de-verificacion`, `ayuda`).
