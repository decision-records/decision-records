<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
</script>

<svelte:head>
	<title>Decision Records</title>
</svelte:head>

<main id="content">
	<section class="site-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Decision records (DRs)</h1>
			<p>
				A decision record is a way to initiate, debate, and archive an important choice, along
				with its context and consequences — for any part of an organization, not just
				engineering: strategy, sales, marketing, product, HR, risk, project, and technology.
			</p>
			<p>
				<a class="button" href="https://github.com/decision-records/decision-records">
					View the guide, template, and examples on GitHub
				</a>
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>Bring this practice into Claude</h2>
			<p>
				This project ships two Claude Skills so an AI assistant can apply this same discipline
				directly in your editor or terminal — one for anyone writing a decision record, one for
				maintaining this repository.
			</p>
			<p>
				<a class="promo-tile-cta" href="/skills/">See the skills <span aria-hidden="true">→</span></a>
			</p>
		</div>

		<div class="section-group">
			<h3>Explore</h3>
			<ul class="link-list">
				<li>
					<a href="https://github.com/decision-records/decision-records/tree/main/guide">Guide</a> —
					what a decision record is and why it matters, for leaders across the business.
				</li>
				<li>
					<a href="https://github.com/decision-records/decision-records/tree/main/tutorial"
						>Tutorial</a
					> — write your first decision record in under 20 minutes.
				</li>
				<li>
					<a href="https://github.com/decision-records/decision-records/tree/main/template"
						>Template</a
					> — copy-paste, with step-by-step suggestions.
				</li>
				<li>
					<a href="https://github.com/decision-records/decision-records/tree/main/examples"
						>Examples</a
					> — worked records across strategy, sales, marketing, product, HR, risk, project, and
					technology.
				</li>
				<li>
					<a href="https://github.com/decision-records/decision-records/tree/main/checklist"
						>Checklist</a
					> — for deciding whether to write one, writing it well, and reviewing it.
				</li>
			</ul>
		</div>
	</ContainerWithFixedWidth>
</main>
