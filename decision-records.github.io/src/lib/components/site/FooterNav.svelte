<script lang="ts">
	const REPO = 'https://github.com/decision-records/decision-records';

	const columns = [
		{
			title: 'Learn',
			links: [
				{ label: 'Guide', href: `${REPO}/tree/main/guide` },
				{ label: 'Tutorial', href: `${REPO}/tree/main/tutorial` },
				{ label: 'Spec', href: `${REPO}/tree/main/spec` },
				{ label: 'Help / FAQ', href: `${REPO}/tree/main/help` }
			]
		},
		{
			title: 'Use',
			links: [
				{ label: 'Template', href: `${REPO}/tree/main/template` },
				{ label: 'Examples', href: `${REPO}/tree/main/examples` },
				{ label: 'Checklist', href: `${REPO}/tree/main/checklist` }
			]
		},
		{
			title: 'Claude skills',
			links: [
				{ label: 'Overview', href: '/skills/' },
				{ label: 'Skills on GitHub', href: `${REPO}/tree/main/skills` }
			]
		}
	];
</script>

<nav class="footer-nav" aria-label="Footer">
	{#each columns as column (column.title)}
		<div class="footer-nav-column">
			<h2>{column.title}</h2>
			<ul>
				{#each column.links as link (link.label)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</div>
	{/each}
</nav>
