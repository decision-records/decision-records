#!/usr/bin/env node
// Writes static/search/<slug>.json, one search index per locale, from
// ../locales/<slug>/<section>/<dir>/index.md, plus the locale's root index.md
// (the translated README, its landing page). A locale's file contains only
// that locale's pages, which is what keeps /<slug>/?<query> from ever
// matching another locale. Reads the parent monorepo, so it runs with
// `pnpm run content` (not `build`); the generated files are committed.
//   pnpm run search-index
// See spec/locale-specific-search-picker/index.md.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const localesRoot = path.resolve(siteRoot, '..', 'locales');
const outDir = path.join(siteRoot, 'static/search');
const SOURCE = 'en-us';
const BUDGET = 1_000_000; // bytes per locale file (spec)
const SNIPPET_TEXT = 500;

const subdirs = (dir) =>
	readdirSync(dir, { withFileTypes: true })
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort();
const peerId = (dir) => {
	const f = path.join(dir, '.locale-peer-id');
	return existsSync(f) ? readFileSync(f, 'utf8').trim() : '';
};

const englishSections = ['guide', 'tutorial', 'template', 'examples', 'checklist', 'help'];
const englishSectionByPeer = new Map(
	englishSections.map((s) => [peerId(path.join(localesRoot, SOURCE, s)), s])
);

function plainText(md) {
	return md
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/```[^\n]*\n/g, '\n')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^\s{0,3}#{1,6}\s+/gm, '')
		.replace(/^\s*[-*+>]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/[|`*_~]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function headingsOf(md) {
	let fence = false;
	const out = [];
	for (const line of md.split('\n')) {
		if (line.startsWith('```')) fence = !fence;
		const m = !fence && /^#{1,6}\s+(.+?)\s*#*$/.exec(line);
		if (m) out.push(plainText(m[1]));
	}
	return out;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const slugs = readdirSync(localesRoot, { withFileTypes: true })
	.filter((e) => e.isDirectory() && /^[a-z]{2,3}-[a-z0-9]{2,3}(-[a-z0-9]{5,8})?$/.test(e.name))
	.map((e) => e.name)
	.sort();

for (const slug of slugs) {
	const localeDir = path.join(localesRoot, slug);
	const records = [];
	for (const sectionDir of subdirs(localeDir)) {
		const sectionPath = path.join(localeDir, sectionDir);
		const section = englishSectionByPeer.get(peerId(sectionPath));
		if (!section) continue;
		// A section's own index.md is a page too (the whole page for single-page sections).
		const indexFile = path.join(sectionPath, 'index.md');
		if (existsSync(indexFile)) {
			const md = readFileSync(indexFile, 'utf8');
			records.push({
				id: `${sectionDir}/`,
				title: plainText((/^#\s+(.+)$/m.exec(md) ?? [, sectionDir])[1]),
				section: sectionDir,
				kind: section,
				url: `/${slug}/${sectionDir}/`,
				headings: headingsOf(md),
				text: plainText(md)
			});
		}
		for (const dir of subdirs(sectionPath)) {
			const file = path.join(sectionPath, dir, 'index.md');
			if (!existsSync(file) || !statSync(file).isFile()) continue;
			const md = readFileSync(file, 'utf8');
			const title = plainText((/^#\s+(.+)$/m.exec(md) ?? [, dir])[1]);
			records.push({
				id: `${sectionDir}/${dir}`,
				title,
				section: sectionDir,
				kind: section,
				url: `/${slug}/${sectionDir}/${dir}/`,
				headings: headingsOf(md),
				text: plainText(md)
			});
		}
	}
	// The landing page repeats the sections' text, so index only what is unique to it:
	// the title and the intro.
	const rootFile = path.join(localeDir, 'index.md');
	if (existsSync(rootFile)) {
		const md = readFileSync(rootFile, 'utf8');
		const parts = md.split(/^(?=## )/m);
		const own = [parts[0]];
		records.push({
			id: 'index',
			title: plainText((/^#\s+(.+)$/m.exec(md) ?? [, slug])[1]),
			section: '',
			kind: 'readme',
			url: `/${slug}/`,
			headings: own.flatMap((p) => headingsOf(p)).slice(1),
			text: plainText(own.join('\n'))
		});
	}
	let json = JSON.stringify({ locale: slug, records });
	if (Buffer.byteLength(json) > BUDGET) {
		// Over budget: titles, headings, and the start of the body only.
		for (const r of records) r.text = r.text.slice(0, SNIPPET_TEXT);
		json = JSON.stringify({ locale: slug, records, truncated: true });
	}
	writeFileSync(path.join(outDir, `${slug}.json`), json);
	console.log(`${slug}: ${records.length} records, ${(Buffer.byteLength(json) / 1024).toFixed(0)} KB`);
}
