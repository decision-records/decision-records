<script lang="ts">
	// The one hand-authored page outside the locale routes (English only).
	const REPO = 'https://github.com/decision-records/decision-records';

	const skills = [
		{
			id: 'decision-records-skill',
			audience: 'For anyone writing a decision record',
			blurb:
				'Walks a person through whether a choice needs a record, choosing the lightweight or comprehensive template, drafting the core fields, filing it, and the pre-publish checklist — pointing back at this repo’s guide, tutorial, and examples for depth.'
		},
		{
			id: 'decision-records-maintainer-skill',
			audience: 'For maintainers of this repository',
			blurb:
				'Covers this repo’s own conventions: the index.md / README.md symlink pattern, the locales layout, adding a new worked example, the root README’s versioned header, and known cross-reference gaps to check before closing related work.'
		}
	];
</script>

<svelte:head>
	<title>Skills on AI</title>
</svelte:head>

<div class="intro">
	<h1>Skills on AI</h1>
	<p>
		A <a href="https://code.claude.com/docs/en/skills">Claude Skill</a> is a packaged set of instructions an AI
		assistant loads for a particular kind of task. This project ships two skills on AI, living in
		<a href={`${REPO}/tree/main/skills`}><code>skills/</code></a>
		alongside the guide, template, and examples they draw on.
	</p>
</div>

<ul class="card-grid">
	{#each skills as skill (skill.id)}
		<li class="card">
			<h2 class="card-heading"><code>{skill.id}</code></h2>
			<p><strong>{skill.audience}</strong></p>
			<p class="card-description">{skill.blurb}</p>
			<p><a href={`${REPO}/blob/main/skills/${skill.id}/SKILL.md`}>Read SKILL.md</a></p>
		</li>
	{/each}
</ul>

<div class="prose">
	<h2>Using a skill</h2>
	<ol>
		<li>Clone the repo: <code>git clone {REPO}.git</code></li>
		<li>
			Copy the skill folder you want into wherever your agent loads project skills from — for Claude Code, that's
			typically <code>.claude/skills/&lt;name&gt;</code> in your own project.
		</li>
		<li>
			Ask your assistant to use it — e.g. "use decision-records-skill to help me write a decision record about
			&hellip;".
		</li>
	</ol>
	<p>
		The skill files themselves reference the rest of this repo by relative path (its guide, template, tutorial,
		examples, and checklist under <code>locales/en-us/</code>), so keep the skill folder inside a checkout of this
		repo rather than copying <code>SKILL.md</code> alone.
	</p>
</div>

<style>
	.card-heading {
		margin: 0 0 0.5rem;
		font-size: 1.05rem;
	}
</style>
