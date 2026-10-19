// Picker locale values (sorted by code). A value is "ll_RR"; its URL slug and
// source directory under ../locales/ is the lowercase form with "_" replaced by
// "-" ("de_001" -> "de-001"). The source-of-truth locale is "en_US" (en-us).
// See spec/locale-specific-search-picker/index.md.
export const LOCALES = ['ar_001', 'bn_001', 'cy_001', 'cy_GB', 'da_001', 'de_001', 'en_001', 'en_GB', 'en_GB_oxendict', 'en_US', 'es_001', 'et_001', 'fr_001', 'hi_001', 'hi_IN', 'id_001', 'it_001', 'ja_001', 'ja_JP', 'ko_001', 'ko_KR', 'nl_001', 'nl_NL', 'pt_001', 'ru_001', 'sv_001', 'sv_SE', 'ur_001', 'vi_001', 'zh_001', 'zh_CN'];

/** English variants generated from en-us (scripts/build-english-variants.py): noindex, not in the sitemap. */
export const NOINDEX_SLUGS = ['en-001', 'en-gb', 'en-gb-oxendict'];

export const DEFAULT_LOCALE = 'en_US';

/** URL slug of the source-of-truth locale, and the router's fallback. */
export const SOURCE_SLUG = 'en-us';

/** @param {string} value picker locale value @returns {string} URL slug */
export function localeToSlug(value) {
	if (!value) return SOURCE_SLUG;
	return value.toLowerCase().replace(/_/g, '-');
}

/** Every URL slug that has a locale route, deduplicated. */
export const LOCALE_SLUGS = [...new Set(LOCALES.map(localeToSlug))];

/** BCP 47 tag for a slug ("zh-tw" -> "zh-TW", "en-gb-oxendict" -> "en-GB-oxendict"). @param {string} slug */
export function slugToTag(slug) {
	const [lang, region, ...variant] = slug.split('-');
	return [lang, region && (region.length === 2 ? region.toUpperCase() : region), ...variant].filter(Boolean).join('-');
}

const RTL = new Set(['ar', 'ur', 'he', 'fa']);
/** @param {string} slug */
export function isRtlSlug(slug) {
	return RTL.has(slug.split('-')[0]);
}

/**
 * The route to send a visitor to, from the browser's language preferences
 * (`navigator.languages`, most preferred first). Used by the "/" page.
 *
 * Per preference, the first rule that matches wins:
 *  1. the exact locale ("en_US" or "en-US" -> "en-us", "en-GB-oxendict" -> "en-gb-oxendict");
 *  2. Chinese by script or region ("zh-Hant", "zh-HK", "zh-MO" -> "zh-tw"; "zh-Hans" -> "zh-cn");
 *  3. the language's international *-001 locale ("en-AU", "en" -> "en-001");
 *  4. any locale of the same language.
 * Preferences that match nothing are skipped; with no match at all the result
 * is the source locale, "/en-us/". Rules only match locales in LOCALES.
 * See spec/website.md.
 * @param {readonly string[]} languages
 * @returns {string} a path such as "/cy-gb/" or "/en-us/"
 */
export function routeForLanguages(languages) {
	for (const raw of languages) {
		const parts = String(raw).trim().replace(/_/g, '-').toLowerCase().split('-').filter(Boolean);
		const lang = parts[0];
		if (!lang) continue;
		const script = parts.find((p, i) => i > 0 && /^[a-z]{4}$/.test(p));
		const variant = parts.find((p, i) => i > 1 && /^[a-z0-9]{5,8}$/.test(p));
		const region = parts.find((p, i) => i > 0 && /^([a-z]{2}|\d{3})$/.test(p));

		if (region && variant && LOCALE_SLUGS.includes(`${lang}-${region}-${variant}`)) return `/${lang}-${region}-${variant}/`;
		if (region && LOCALE_SLUGS.includes(`${lang}-${region}`)) return `/${lang}-${region}/`;
		if (lang === 'zh' && (script === 'hant' || region === 'hk' || region === 'mo') && LOCALE_SLUGS.includes('zh-tw')) return '/zh-tw/';
		if (lang === 'zh' && script === 'hans' && LOCALE_SLUGS.includes('zh-cn')) return '/zh-cn/';
		if (LOCALE_SLUGS.includes(`${lang}-001`)) return `/${lang}-001/`;
		const sameLanguage = LOCALE_SLUGS.find((s) => s.startsWith(`${lang}-`));
		if (sameLanguage) return `/${sameLanguage}/`;
	}
	return `/${SOURCE_SLUG}/`;
}
