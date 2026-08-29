# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-article35-items` using source unit `article35-items` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-article35-items.js` with four verified atomic knowledge items:

1. `takken-k-article35-items-registered-rights` — 35条の説明事項には対象宅地・建物上の登記された権利の種類・内容が含まれる。
2. `takken-k-article35-items-registered-owner-name` — 登記名義人または表題部所有者の氏名・法人名称も説明事項に含まれる。
3. `takken-k-article35-items-legal-restrictions` — 都市計画法・建築基準法その他の法令に基づく政令所定の制限の概要が説明事項に含まれる。
4. `takken-k-article35-items-contract-type-dependent` — 法令上の制限は、宅地/建物および売買・交換/貸借という契約内容の別に応じて決まる。

Primary authority is current 宅地建物取引業法 Article 35. Canonical source facts `u22-f1` and `u22-f2` are preserved as source fact references.

Existing verified `takken-q-22-001` directly tests registered rights and is mapped to `takken-k-article35-items-registered-rights`. Existing verified `takken-q-22-002` directly tests statutory restrictions and is mapped to `takken-k-article35-items-legal-restrictions`. Neither question directly tests registered owner/name information or transaction-type-dependent application, so those two items remain explicit Phase 4.3 deficits.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 28/113 concepts modeled
- Canonical knowledge items: 143
- Existing verified questions mapped: 26
- Explicit unmapped knowledge gaps: 106
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-article37-document` using source units `article37-basics` and `article35-vs-37`.

Preserve all 143 knowledge items, twenty-six valid mappings, and all one hundred six explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
