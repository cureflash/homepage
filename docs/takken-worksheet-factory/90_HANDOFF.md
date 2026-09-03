# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Extracted canonical atomic knowledge items for `takken-concept-provisional-replotting` without changing or mapping the existing Phase 2/3 questions.

- Added 6 verified knowledge items: designation authority, statutory designation grounds, consideration of replotting-plan standards, shift of use/profit from former land to provisional replotting, separately fixed use/profit start date, and compensation for the unusable gap.
- Sources are the Land Readjustment Act as of 2026-04-01 and official MLIT land-readjustment guidance/flow materials.
- Kept `takken-concept-provisional-replotting` separate from the next `takken-concept-replotting-disposition`; effects of the final replotting disposition are not folded into the provisional-replotting concept.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- `takken-q-76-001` has not yet been mapped; that direct evidence reconciliation is the next checkpoint.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 98/113 concepts with canonical knowledge extraction complete; 97/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 98
- Canonical knowledge items: 528
- Existing verified questions mapped: 120
- Explicit unmapped knowledge gaps: 356
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile verified `takken-q-76-001` against `takken-concept-provisional-replotting` and map only the knowledge item or items directly measured by its stem and four choices. Do not start `takken-concept-replotting-disposition` in the same checkpoint. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
