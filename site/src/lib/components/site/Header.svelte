<script lang="ts">
	import { Header, ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import ThemePicker from './ThemePicker.svelte';
	import TextSizePicker from './TextSizePicker.svelte';
	import SharePicker from './SharePicker.svelte';
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="site-header-bar">
			<a class="brand" href="/">
				<strong>Decision Records</strong>
			</a>
			<nav class="site-header-nav" aria-label="Primary">
				<a href="/skills/">Skills</a>
				<a href="https://github.com/decision-records/decision-records">GitHub</a>
			</nav>
			<div class="site-header-controls">
				<TextSizePicker />
				<ThemePicker />
				<SharePicker />
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
