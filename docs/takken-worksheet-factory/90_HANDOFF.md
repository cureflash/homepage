# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-installment-cancellation` using source unit `installment-sales-ownership` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-installment-cancellation.js` with six verified atomic knowledge items:

1. Scope: 宅建業法42条は、宅建業者が自ら売主となり、買主が宅建業者ではない宅地・建物の割賦販売に適用される。宅建業者相互間では78条2項により42条は適用されない。
2. Trigger: 買主の賦払金支払義務が履行されない場合に42条の解除等制限が問題となる。
3. Period: 支払遅滞を理由に解除等をするには、30日以上の相当期間を定めて催告しなければならない。
4. Form: 催告は書面で行う必要があり、口頭だけでは法定要件を満たさない。
5. Remedies: 上記書面催告後も期間内に履行がないときに限り、賦払金の支払遅滞を理由として契約を解除し、または支払時期の到来していない賦払金の支払を請求できる。
6. Special term: 42条1項に反する特約は無効である。

Primary authority is the current 宅地建物取引業法 Articles 42 and 78(2), at the 2026-04-01 cutoff. Canonical source fact `u31-f1` is preserved as the source-unit anchor.

Existing verified `takken-q-31-001` was not mapped. Its stem states only that the seller is a宅建業者自ら売主 and omits the buyer-is-not-a宅建業者 condition necessary to establish Article 42 applicability. Its Phase 2/3 verified state and contents were not changed. All six canonical knowledge items therefore remain explicit Phase 4.3 deficits. `takken-q-31-002` concerns the separate Article 43 ownership-retention concept and was not touched.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 38/113 concepts modeled
- Canonical knowledge items: 203
- Existing verified questions mapped: 35
- Explicit unmapped knowledge gaps: 156
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-installment-ownership-retention` using source unit `installment-sales-ownership`.

Preserve all 203 knowledge items, thirty-five valid mappings, and all one hundred fifty-six explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected six-item count. `power-question-knowledge-map.js` was deliberately left unchanged because existing `takken-q-31-001` does not fully establish the statutory applicability condition. No Phase 2/3 question data was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
