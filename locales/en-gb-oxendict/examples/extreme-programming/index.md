# Phase in Extreme Programming

* Status: accepted
* Date: 2025-10-06
* Decision-maker(s): Head of Engineering
* Owner: Engineering Manager

## Context

Our product teams ship features in large batches, and defects found late are expensive: one in five releases needs a hotfix. We want to adopt practices from Extreme Programming (XP), such as test-driven development, pair programming, continuous integration, small releases, and collective code ownership. These practices support each other, but they also change how engineers work day to day, and adopting all of them at once is likely to meet resistance and to be done superficially.

## Options considered

* **Adopt all of the practices at once in every team.** The practices reinforce one another, but the change is large, and teams without the underlying skills would likely abandon them within weeks.
* **Phase in the practices in a chosen order, team by team.** Start with continuous integration and automated tests (the foundations), then small releases and pair programming, then test-driven development, with the teams adopting the practices at their own pace. Slower, but each practice has time to settle, and the early ones make the later ones possible.
* **Adopt only the practices that are easy.** Low effort, but it would skip the practices that give the largest benefit, such as automated testing, and the benefit would be small.

## Decision

We will phase in XP practices in order: continuous integration and automated tests first, then small releases and pair programming, then test-driven development. One team begins in the first quarter, and each following team joins after the previous team has kept its release pipeline passing for a month.

## Consequences

* The Engineering Manager will coach the first team, publish what it learned, and track the share of releases that need a hotfix.
* Our target is to bring that share from one in five to below one in twenty within a year.
* Teams will have time for pairing and for writing tests built into their plans, and will not be expected to deliver the same number of features in the first quarter.
* Engineers keep a choice about how they pair and what tools they use; the practices set the outcome, not every detail of how it is reached.
* If a practice is not helping after two quarters, the team can propose to stop it, and we will record the reason.

## Related

* See [Phase in the Agile Manifesto](../agile-manifesto/) for the wider decision on values that these practices support.
