<script lang="ts">
	import '../lib/styles/theme.css';
	import { ContainerWithFixedWidth, Footer, SkipLink } from 'lily-design-system-svelte-headless';
	import SiteHeader from '$lib/components/site/Header.svelte';
	import FooterNav from '$lib/components/site/FooterNav.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<div data-pagefind-ignore="all">
	<SkipLink href="#content" label="Skip to content" />
	<SiteHeader />
</div>

{@render children()}

<div data-pagefind-ignore="all">
	<Footer label="Site footer">
		<ContainerWithFixedWidth maxWidth="72rem">
			<FooterNav />
			<p class="footer-colophon">
				© {year} the decision-records contributors ·
				<a href="https://github.com/decision-records/decision-records">GitHub</a> · built with
				<a href="https://kit.svelte.dev">SvelteKit</a> and the
				<a href="https://lilydesignsystem.github.io/">Lily Design System</a>
			</p>
		</ContainerWithFixedWidth>
	</Footer>
</div>
