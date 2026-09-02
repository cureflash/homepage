# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Extracted and independently verified canonical knowledge items for `takken-concept-city-planning-decision` from source unit `city-planning-decisions` and the 2026-04-01 Urban Planning Act baseline.

- Added six atomic knowledge items in `qualifications/takken/data/power-knowledge-items-city-planning-decision.js`.
- Article 15 is represented as the prefecture-designated-plan rule and the municipality-other-plan rule.
- Article 59 is represented as separate municipality, prefecture, national-agency, and non-governmental/private project-authority routes, preserving the distinction between authorization and approval.
- All six items use stable IDs, `examYear: 2026`, `lawAsOf: "2026-04-01"`, verified statute sources, and source fact references to `u64-f1` / `u64-f2`.
- Existing Phase 2/3 question text, choices, answers, explanations, source references and validation statuses were not changed.
- Existing `takken-q-64-001` / `takken-q-64-002` mapping was deliberately not guessed in this extraction checkpoint; direct-evidence mapping is next.
- No Phase 4.3 question generation, print generation, or app linkage was started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 82/113 fully reconciled concepts
- Concepts with canonical knowledge items: 83
- Canonical knowledge items: 422
- Existing verified questions mapped: 96
- Explicit unmapped knowledge gaps: 286
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Map verified `takken-q-64-001` / `takken-q-64-002` only to the `takken-concept-city-planning-decision` knowledge items they directly test. Leave every unmeasured knowledge item as an explicit Phase 4.3 deficit. If the mapping validator passes, mark this concept fully reconciled. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
