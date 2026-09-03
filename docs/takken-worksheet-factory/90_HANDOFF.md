# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Reconciled verified `takken-q-75-002` against `takken-concept-farmland-article5` without changing the existing Phase 2/3 question.

- The question asks which provision principally applies when ownership of farmland is transferred for conversion; its choices distinguish Article 5 from Article 4, Article 3, and the National Land Use Planning Act.
- Mapped it only to `takken-k-farmland-article5-rights-transfer-conversion-scope` and `takken-k-farmland-article5-vs-article4-rights-transfer`.
- Did not map the Article 5 grazing-land scope, permit principle, permit authority, or urbanization-area notification items because the stem and choices do not directly measure them.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 97/113 concepts with canonical knowledge extraction complete; 97/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 97
- Canonical knowledge items: 522
- Existing verified questions mapped: 120
- Explicit unmapped knowledge gaps: 350
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Extract canonical knowledge items for `takken-concept-provisional-replotting` from 2026-04-01 primary law and official guidance, then reconcile only directly measured existing verified questions. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
