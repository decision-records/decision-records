#!/usr/bin/env node
// Writes static/llms.txt and static/llms.json from the en-us pages in
// src/lib/locale-pages.json and the LOCALES array in src/lib/locales.js,
// so the page lists and counts never drift from the site. Reads only files
// inside this directory (it also runs in the standalone published repo).
//   pnpm run llms
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://decision-records.github.io';
const REPO = 'https://github.com/decision-records/decision-records';
const TITLE = 'Decision Records (DR)';
const SUMMARY =
  'A guide to decision records: a way to initiate, debate, and archive an important choice, along with its context and consequences, for any part of an organization. Includes a tutorial, templates, worked examples, and checklists.';
const SOURCE = 'en-us';

const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
const english = tree[SOURCE] ?? [];

const localesSource = readFileSync(path.join(root, 'src/lib/locales.js'), 'utf8');
const localeMatch = /export const LOCALES = \[([^\]]*)\]/.exec(localesSource);
const locales = localeMatch ? [...localeMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];

// One list per section: its index page, then its sub-pages (the examples).
const sections = Object.fromEntries(
  english.map((s) => [
    s.kind,
    [
      ...(s.hasIndex ? [{ title: s.title, url: `${SITE}/${SOURCE}/${s.dir}/` }] : []),
      ...s.pages.map((p) => ({ title: p.title, url: `${SITE}/${SOURCE}/${s.dir}/${p.dir}/` }))
    ]
  ])
);
const heading = (kind) => kind.charAt(0).toUpperCase() + kind.slice(1);
const line = (p) => `- [${p.title}](${p.url})`;

const txt = [
  `# ${TITLE}`,
  '',
  `> ${SUMMARY} Source: ${REPO}`,
  '',
  ...Object.entries(sections).flatMap(([kind, pages]) => [`## ${heading(kind)}`, '', ...pages.map(line), '']),
  '## Optional',
  '',
  `- [Skills](${SITE}/skills/): Claude Skills for writing and maintaining decision records`,
  `- [Translations](${REPO}/tree/main/locales): ${locales.length} language picker entr${locales.length === 1 ? 'y' : 'ies'}`,
  `- [Source repository](${REPO}): README, specification (spec/), agent guides (AGENTS.md, AGENTS/)`,
  ''
].join('\n');

const counts = {
  sections: english.length,
  pages: english.reduce((n, s) => n + (s.hasIndex ? 1 : 0) + s.pages.length, 0),
  examples: (sections.examples ?? []).length - 1,
  locales: locales.length
};
const json = {
  name: TITLE,
  summary: SUMMARY,
  site: SITE,
  repository: REPO,
  counts,
  sections,
  skills: `${SITE}/skills/`,
  locales,
  translations: `${REPO}/tree/main/locales`
};

writeFileSync(path.join(root, 'static/llms.txt'), txt);
writeFileSync(path.join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${counts.sections} sections, ${counts.pages} pages, ${counts.examples} examples, ${counts.locales} locales).`);
