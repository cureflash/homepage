# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-eight-restrictions-scope` using source unit `eight-restrictions-overview` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-eight-restrictions-scope.js` with five verified atomic knowledge items covering:

1. the self-seller scope of the buyer-protection restriction family,
2. the buyer-side scope and the broker-to-broker exclusion under Article 78(2),
3. the distinction from mere agency/brokerage and self-lease transactions,
4. the Article 37-2 through 43 regulation family,
5. the existence of multiple mandatory buyer-protection rules that invalidate adverse special terms.

Primary authority is the current 宅地建物取引業法, including Articles 37-2 through 43 and Article 78(2), at the 2026-04-01 cutoff. Canonical source facts `u25-f1` and `u25-f2` are preserved as the source-unit anchors.

Existing verified `takken-q-25-001` directly tests the regulation-family item and is mapped only to `takken-k-eight-restrictions-scope-regulation-family`. Existing verified `takken-q-25-002` directly tests the existence of buyer-adverse special-term invalidity and is mapped only to `takken-k-eight-restrictions-scope-adverse-special-terms`. The other three knowledge items remain explicit Phase 4.3 deficits.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 31/113 concepts modeled
- Canonical knowledge items: 165
- Existing verified questions mapped: 32
- Explicit unmapped knowledge gaps: 122
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-cooling-off` using source unit `cooling-off`.

Preserve all 165 knowledge items, thirty-two valid mappings, and all one hundred twenty-two explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.