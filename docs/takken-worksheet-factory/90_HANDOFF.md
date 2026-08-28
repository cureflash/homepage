# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-brokerage-price-opinion` using source unit `brokerage-contract-basics` and the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-brokerage-price-opinion.js` with two verified atomic knowledge items:

1. `takken-k-brokerage-price-opinion-basis-required` — when a宅建業者 states an opinion on the sale price or exchange valuation in connection with a brokerage contract, the basis for that opinion must be made clear.
2. `takken-k-brokerage-price-opinion-sale-and-exchange` — the rule covers both an opinion on sale price and an opinion on exchange valuation; it is not limited to sale price.

Primary authority is current 宅地建物取引業法 Article 34-2(2). Existing `takken-q-15-001` tests only the general Article 34-2 brokerage-document delivery rule and does not test a price/valuation opinion or the basis-disclosure duty. `takken-q-16-001` concerns the three-month period for exclusive brokerage types and likewise does not test this concept. Therefore no existing Phase 2/3 question was mapped to these two items. Both remain explicit Phase 4.3 deficits; the prior sixty-nine deficits are preserved.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 18/113 concepts modeled
- Canonical knowledge items: 94
- Existing verified questions mapped: 16
- Explicit unmapped knowledge gaps: 71
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-general-brokerage` using source unit `brokerage-contract-types`.

Preserve all 94 knowledge items, sixteen valid mappings, and all seventy-one explicit deficits. Map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
