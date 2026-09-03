# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Extracted canonical knowledge for `takken-concept-real-estate-acquisition-tax` without changing existing Phase 2/3 questions or beginning Phase 4.3.

- Added 10 atomic knowledge items covering the prefectural levy/taxpayer, acquisition regardless of registration or payment, inheritance non-taxation, tax base, the land one-half tax-base special rule, current tax rates, 2026-04-01 exemption thresholds, new-house deduction, long-life-quality-house deduction, and residential-land reduction.
- The 2026-04-01 cutoff was checked against the Local Tax Act and Osaka Prefecture's official page updated 2026-04-09; the post-2026-04-01 exemption thresholds and 40–240㎡ new-house floor-area requirement are recorded rather than older figures.
- Primary grounding is the Local Tax Act at the 2026-04-01 baseline plus current official Osaka Prefecture tax guidance.
- `takken-q-79-001` and `takken-q-79-002` were intentionally not mapped in this extraction checkpoint.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 102/113 concepts with canonical knowledge extraction complete; 101/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 102
- Canonical knowledge items: 561
- Existing verified questions mapped: 126
- Explicit unmapped knowledge gaps: 379
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile `takken-q-79-001` and `takken-q-79-002` against `takken-concept-real-estate-acquisition-tax`. Map only knowledge directly measured by each stem and four choices. Keep all other knowledge as explicit Phase 4.3 deficits. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
