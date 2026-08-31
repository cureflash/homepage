# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Staged the canonical knowledge model for `takken-concept-fixed-term-land-lease` from source unit `fixed-term-land-lease`.

Borrowed Land and Building Lease Act Article 22 was decomposed into six verified atomic items:

1. the fixed-term land lease is set for 50 years or more
2. the parties may stipulate that there is no contract renewal, including renewal by claim or continued land use
3. the parties may stipulate that rebuilding does not extend the lease period
4. the parties may stipulate that the Article 13 building-purchase demand will not be exercised
5. the no-renewal etc. special agreement must be made by notarial deed or other written form
6. a qualifying electronic record is treated as written form

The new canonical file is `qualifications/takken/data/power-knowledge-items-fixed-term-land-lease.js`. All six items are `verified`, `examYear: 2026`, `lawAsOf: "2026-04-01"`, tied only to unit 53 source facts, and backed by the e-Gov Borrowed Land and Building Lease Act source.

Existing verified `takken-q-53-001` and `takken-q-53-002` were inspected but intentionally not added to the central question-knowledge map in this checkpoint. That central map and its count/knowledge/concept guards must be advanced together in the next checkpoint.

No Phase 2/3 question content was modified. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 68/113 completed concepts
- Canonical knowledge items: 358
- Existing verified questions mapped: 75
- Explicit unmapped knowledge gaps: 258
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Complete `takken-concept-fixed-term-land-lease` by updating `power-question-knowledge-map.js`.

Map verified `takken-q-53-001` only to the Article 22 items that its stem/correct choice directly tests: 50-year minimum duration, no renewal, no rebuilding extension, and no Article 13 building-purchase demand.

Map verified `takken-q-53-002` only to the written-form requirement and qualifying electronic-record equivalence that its stem/correct choice directly tests.

Advance the central known-knowledge IDs, allowed concept IDs, mapping-count guard, and unit-53 presence guards together. After validation passes, mark the concept complete and continue to the next canonical concept. Do not start Phase 4.3.

## Validation note

The 2026-04-01 primary-source model is intentionally more atomic than the legacy unit fact. `u53-f1` bundles duration plus three effects; `u53-f2` bundles written form plus electronic-record equivalence. The six-item split prevents later 50-question expansion from treating those distinct rules as a single opaque fact.

Existing `takken-q-53-001` directly exercises the four `u53-f1` items in its correct choice. Existing `takken-q-53-002` directly exercises both `u53-f2` items. Neither question should be mapped to broader Article 22 claims beyond those six items.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
