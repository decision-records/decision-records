// Fully static site: every route is prerendered at build time for GitHub Pages.
export const prerender = true;

// Directory + index.html per route (e.g. skills/index.html) — the
// proven-working pattern for GitHub Pages static hosting, rather than
// adapter-static's default flat skills.html.
export const trailingSlash = 'always';
