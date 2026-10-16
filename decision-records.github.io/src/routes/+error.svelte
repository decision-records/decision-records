<script>
	import { page } from '$app/state';

	// Handles a client-side navigation to a route that doesn't exist. GitHub
	// Pages serves 404.html (the adapter's fallback) for a direct request to a
	// missing URL; this covers the in-app case with the same content.
</script>

<svelte:head>
	<title>{page.status} — Decision Records</title>
</svelte:head>

<div class="intro">
	<h1>Page not found</h1>
	<p>That page doesn't exist ({page.status}). It may have moved, or the link was mistyped.</p>
	<p><a href="/en-us/">Back to the home page</a> · <a href="/skills/">Browse the skills</a></p>
</div>
