#!/usr/bin/env node
// Writes static/sitemap.xml from the translated pages in
// src/lib/locale-pages.json (English is the en-us locale). URLs end in "/" to match `trailingSlash = 'always'` in src/routes/+layout.js. Reads only
// files inside this directory (it also runs in the standalone published repo).
//   pnpm run sitemap
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { NOINDEX_SLUGS } from '../src/lib/locales.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://decision-records.github.io';

// /skills/ is the one hand-authored page outside the locale routes.
const paths = ['/skills/'];
const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
for (const [slug, sections] of Object.entries(tree)) {
	if (NOINDEX_SLUGS.includes(slug)) continue;
	for (const s of sections) {
		if (s.hasIndex) paths.push(`/${slug}/${s.dir}/`);
		for (const p of s.pages) paths.push(`/${slug}/${s.dir}/${p.dir}/`);
	}
}

const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((p) => `  <url><loc>${escapeXml(SITE + encodeURI(p))}</loc></url>`),
  '</urlset>',
  ''
].join('\n');

writeFileSync(path.join(root, 'static/sitemap.xml'), xml);
console.log(`Wrote static/sitemap.xml (${paths.length} URLs).`);
