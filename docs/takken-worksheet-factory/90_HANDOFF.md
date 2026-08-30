# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed `takken-concept-risk-allocation` from source unit `risk-simultaneous-performance` without modifying Phase 2/3 question content or validation state.

The risk-allocation knowledge model contains three verified atomic knowledge items based on Civil Code Article 536:

1. 当事者双方の責めに帰することができない事由による履行不能では、債権者は反対給付の履行を拒むことができる。
2. 債権者の責めに帰すべき事由による履行不能では、債権者は反対給付の履行を拒むことができない。
3. その債権者帰責の履行不能で、債務者が自己の債務を免れたことにより利益を得たときは、その利益を債権者に償還しなければならない。

Canonical `takken-q-47-002` directly tests only the first rule and is mapped only to `takken-k-risk-allocation-no-fault-refuse-counter-performance`. The creditor-fault rule and benefit-reimbursement rule remain explicit Phase 4.3 coverage deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 61/113 concepts modeled
- Canonical knowledge items: 322
- Existing verified questions mapped: 65
- Explicit unmapped knowledge gaps: 240
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-sale-earnest` using source unit `sale-earnest`.

Preserve all 322 knowledge items, sixty-five current mappings, and all two hundred forty explicit deficits. Existing verified `takken-q-48-001` and `takken-q-48-002` may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 47 fact `u47-f2` directly supports Civil Code Article 536(1)'s no-fault impossibility rule. Article 536(2)'s creditor-attributable impossibility rule and benefit-reimbursement rule are separate atomic rules supported directly by the Civil Code statute and intentionally have no fabricated sourceFactId.

Existing `takken-q-47-002` asks only whether a creditor may refuse counter-performance when the obligation became impossible for reasons attributable to neither party. It does not directly test the creditor-fault or reimbursement rules, so only the first knowledge item is mapped.

The risk-allocation knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, Civil Code statute sourcing, valid `u47-f2` provenance where present, and the expected three-item count. The question-knowledge map now contains 65 verified source-question mappings through `takken-q-47-002`.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
