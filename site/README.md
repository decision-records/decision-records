# decision-records.github.io

The SvelteKit source for https://decision-records.github.io — a small site that
promotes this repo's [Claude Skills](../skills) and links back to the
[guide](../guide), [template](../template), [tutorial](../tutorial),
[examples](../examples), and [checklist](../checklist).

Built with [SvelteKit](https://kit.svelte.dev) + `adapter-static`, and the
[Lily Design System](https://lilydesignsystem.github.io/)'s theme-picker,
text-size-picker, and share-picker packages — modeled on
[joelparkerhenderson.github.io](https://github.com/joelparkerhenderson/joelparkerhenderson.github.io).

## Develop

```sh
npm install
npm run dev
```

## Publish

This directory lives in the `decision-records/decision-records` monorepo, but
GitHub Pages for an org site must be served from the root of a repo named
`<org>.github.io`. Publish this subtree to that separate repo with `git
subtree`:

```sh
# One-time: add the target repo as a remote.
git remote add site-origin git@github.com:decision-records/decision-records.github.io.git

# From the repo root, after committing changes under site/:
git subtree push --prefix=site site-origin main
```

Pushing to `decision-records.github.io`'s `main` branch triggers
`.github/workflows/deploy.yml` in that repo, which builds and deploys to
GitHub Pages. Nothing needs to be built or deployed from this monorepo
directly — only the source is published.
