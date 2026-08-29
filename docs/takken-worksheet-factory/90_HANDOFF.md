# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-article35-vs-37` using source unit `article35-vs-37` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-article35-vs-37.js` with five verified atomic knowledge items covering:

1. 35条重要事項説明は契約成立までの間に行うこと,
2. 37条書面は契約成立時に交付すること,
3. 35条には宅地建物取引士による法定の重要事項説明義務がある一方、37条は契約成立後の書面交付制度であること,
4. 35条説明時の宅建士・宅建士証の役割と、35条書面・37条書面双方の宅建士記名との比較,
5. 契約判断前の重要事項を示す35条書面と、成立した契約内容を明確にする37条書面の内容・目的の違い.

Primary authority is current 宅地建物取引業法 Articles 35 and 37 at the 2026-04-01 cutoff. Canonical source facts `u24-f1` and `u24-f2` are preserved as the comparison anchors.

Existing verified `takken-q-24-001` directly tests the 35条 pre-contract timing item and is mapped only to `takken-k-article35-vs-37-article35-before-contract`. Existing verified `takken-q-24-002` directly tests the 37条 post-contract timing item and is mapped only to `takken-k-article35-vs-37-article37-after-contract`. The other three knowledge items remain explicit Phase 4.3 deficits.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 30/113 concepts modeled
- Canonical knowledge items: 160
- Existing verified questions mapped: 30
- Explicit unmapped knowledge gaps: 119
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-eight-restrictions-scope` using source unit `eight-restrictions-overview`.

Preserve all 160 knowledge items, thirty valid mappings, and all one hundred nineteen explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.