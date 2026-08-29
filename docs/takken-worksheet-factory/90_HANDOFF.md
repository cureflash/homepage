# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-article35-procedure` using source units `article35-basics` and `article35-vs-37` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-article35-procedure.js` with five verified atomic knowledge items:

1. `takken-k-article35-procedure-before-contract` — 35条の重要事項説明は契約成立までの間に行う。
2. `takken-k-article35-procedure-takkenshi-explains` — 宅建業者は宅地建物取引士をして重要事項説明を行わせる。
3. `takken-k-article35-procedure-document-delivery` — 重要事項を記載した35条書面を交付して説明させる。
4. `takken-k-article35-procedure-electronic-delivery` — 相手方等の承諾を得た法定の電磁的方法による提供は書面交付に代えることができ、書面を交付したものとみなされる。
5. `takken-k-article35-procedure-card-presentation` — 宅地建物取引士は重要事項説明時に宅地建物取引士証を相手方へ提示しなければならない。

Primary authority is current 宅地建物取引業法 Article 35. The electronic-delivery item additionally uses MLIT's official notice on electronic provision of important-matters and contract documents. Canonical source facts `u21-f1`, `u21-f2`, and `u24-f1` are preserved as source fact references.

Existing verified `takken-q-21-001` directly tests pre-contract timing,宅地建物取引士 explanation, and delivery of the prescribed document, so it is mapped to those three knowledge items. Existing verified `takken-q-21-002` directly tests mandatory宅地建物取引士証 presentation and is mapped to that item. Neither question tests consent-based electronic provision, so that item remains an explicit Phase 4.3 deficit. `takken-q-24-001` was not additionally mapped because the current mapping schema assigns each existing question to one concept and the comparison unit remains available for the later `takken-concept-article35-vs-37` checkpoint.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 27/113 concepts modeled
- Canonical knowledge items: 139
- Existing verified questions mapped: 24
- Explicit unmapped knowledge gaps: 104
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-article35-items` using source unit `article35-items`.

Preserve all 139 knowledge items, twenty-four valid mappings, and all one hundred four explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
