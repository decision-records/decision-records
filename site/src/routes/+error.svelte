<script lang="ts">
	import { page } from '$app/state';
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	// Handles a client-side navigation to a route that doesn't exist. GitHub
	// Pages serves static/404.html for a direct request to a missing URL —
	// this component covers the SPA-navigation case with the same content.
</script>

<svelte:head>
	<title>{page.status} — Decision Records</title>
</svelte:head>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Page not found</h1>
			<p>
				That page doesn't exist ({page.status}) — it may have moved, or the link was mistyped.
			</p>
			<p><a href="/">Back to the homepage</a> · <a href="/skills/">Browse the skills</a></p>
		</ContainerWithFixedWidth>
	</section>
</main>
