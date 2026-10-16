<script>
	import { slugToTag, isRtlSlug, NOINDEX_SLUGS } from '#lib/locales.js';

	let { data } = $props();
</script>

<svelte:head>
	{#if NOINDEX_SLUGS.includes(data.locale)}<meta name="robots" content="noindex" />{/if}
	<title>{data.title}</title>
</svelte:head>

<a class="back-link" href={data.section.hasIndex ? `/${data.locale}/${data.section.dir}/` : `/${data.locale}/`}>
	&larr; {data.section.title}
</a>

<div class="prose" lang={slugToTag(data.locale)} dir={isRtlSlug(data.locale) ? 'rtl' : 'ltr'}>
	{@html data.html}
</div>
