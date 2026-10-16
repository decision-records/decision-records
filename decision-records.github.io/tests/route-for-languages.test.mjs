// Unit tests for the "/" language router rules (spec/website.md "URL scheme").
//   pnpm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { routeForLanguages as route, localeToSlug, LOCALES, LOCALE_SLUGS, SOURCE_SLUG } from '../src/lib/locales.js';

const cases = [
	// exact locale, either separator, any case
	[['en_US'], '/en-us/'],
	[['en-US'], '/en-us/'],
	[['EN_us'], '/en-us/'],
	// variants
	[['en-GB'], '/en-gb/'],
	[['en-gb-oxendict'], '/en-gb-oxendict/'],
	[['en_GB_oxendict'], '/en-gb-oxendict/'],
	// the language's international locale
	[['en'], '/en-001/'],
	[['en-AU'], '/en-001/'],
	[['en-CA'], '/en-001/'],
	// Welsh
	[['cy'], '/cy-001/'],
	[['cy-GB'], '/cy-gb/'],
	[['cy_GB'], '/cy-gb/'],
	// German
	[['de'], '/de-001/'],
	[['de-DE'], '/de-001/'],
	[['de-AT'], '/de-001/'],
	// Spanish
	[['es'], '/es-001/'],
	[['es-MX'], '/es-001/'],
	[['es-419'], '/es-001/'],
	// Chinese
	[['zh-CN'], '/zh-cn/'],
	[['zh-Hans-CN'], '/zh-cn/'],
	[['zh'], '/zh-001/'],
	[['zh-TW'], '/zh-001/'],
	[['zh-Hant'], '/zh-001/'],
	// first usable preference wins; unmatched ones are skipped
	[['xx', 'en-CA'], '/en-001/'],
	[['am', 'am-ET', 'en'], '/en-001/'],
	// nothing matches: English
	[['am-ET'], '/en-us/'],
	[['nb-NO'], '/en-us/'],
	[[], '/en-us/'],
	[[''], '/en-us/']
];

for (const [languages, expected] of cases) {
	test(`${JSON.stringify(languages)} -> ${expected}`, () => assert.equal(route(languages), expected));
}

test('every route the router can return is a real locale route', () => {
	for (const [languages] of cases) assert.ok(LOCALE_SLUGS.includes(route(languages).replaceAll('/', '')));
});

test('picker values map to unique, hyphenated slugs', () => {
	assert.equal(localeToSlug('en_US'), 'en-us');
	assert.equal(localeToSlug('cy_GB'), 'cy-gb');
	assert.equal(new Set(LOCALES.map(localeToSlug)).size, LOCALES.length);
	for (const slug of LOCALE_SLUGS) assert.match(slug, /^[a-z]{2}-[a-z0-9]{2,3}(-[a-z0-9]{5,8})?$/);
	assert.ok(LOCALE_SLUGS.includes(SOURCE_SLUG));
});
