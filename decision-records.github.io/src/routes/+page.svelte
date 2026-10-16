<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { routeForLanguages } from '#lib/locales.js';

	// "/" picks the visitor's language: the first browser language preference
	// that has a locale route here wins (see routeForLanguages), otherwise
	// English (en-us). The page is static, so it is prerendered with links for
	// visitors without JavaScript and for crawlers.
	onMount(() => {
		const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
		goto(routeForLanguages(languages), { replaceState: true });
	});
</script>

<svelte:head>
	<title>Decision Records (DR)</title>
	<link rel="canonical" href="https://decision-records.github.io/en-us/" />
</svelte:head>

<p>Redirecting to your language… <a href="/en-us/">Continue in English</a></p>
