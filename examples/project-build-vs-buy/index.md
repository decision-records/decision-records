# Build vs. buy for a project

* Status: accepted
* Date: 2026-06-01
* Decision-maker(s): COO
* Owner: Director of Operations

## Context

We need a customer-facing scheduling tool for our services business. Our current process is manual, spreadsheet-based, and has caused three double-bookings in the last month that damaged customer relationships. We need a fix within one quarter and must decide whether to build this internally or buy an existing solution.

## Options considered

* **Build in-house.** Gives us exact fit to our specific scheduling rules and full control over the roadmap, but our engineering team estimates 3–4 months of dedicated work, which exceeds our one-quarter timeline and would pull capacity from two committed product initiatives.
* **Buy an off-the-shelf scheduling platform.** Available for implementation within 3–4 weeks; doesn't perfectly match every scheduling edge case we have, but covers roughly 90% of our documented requirements, with workarounds identified for the remaining 10%.
* **Buy a platform and commission custom integration work from the vendor.** Closes the requirements gap from the pure buy option, but adds 6–8 weeks and additional cost; two reference customers reported the vendor's custom integration timelines slipped significantly.

## Decision

We will buy the off-the-shelf scheduling platform and manage the remaining 10% of edge cases with documented manual workarounds, revisiting a custom integration only if those workarounds prove unworkable in practice.

## Consequences

* Director of Operations will lead implementation and staff training within the 3–4 week vendor timeline.
* The 10% of scheduling edge cases not natively supported will be handled by documented manual process, reviewed after one quarter of live usage.
* We give up the exact fit a custom build would provide, in exchange for solving the double-booking problem well within this quarter instead of next.
* No engineering capacity is pulled from the two committed product initiatives, since this is a buy rather than a build.
* If manual workarounds prove unworkable after one quarter, a follow-on decision will evaluate the custom-integration option.

## Related

* This decision does not affect the two committed product initiatives' timelines, which was an explicit constraint on the options considered.
