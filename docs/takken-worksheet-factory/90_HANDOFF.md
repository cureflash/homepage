# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-takkenshi-exclusive-duties`** using source unit `takken-shi-exclusive-duties` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-takkenshi-exclusive-duties.js` with three verified atomic knowledge items:

1. `takken-k-takkenshi-exclusive-duties-important-matters-explanation` — 法35条の重要事項説明は契約成立前に宅地建物取引士が行う。
2. `takken-k-takkenshi-exclusive-duties-article35-name` — 法35条の重要事項説明書には宅地建物取引士の記名が必要である。
3. `takken-k-takkenshi-exclusive-duties-article37-name` — 法37条の契約成立時書面には宅地建物取引士の記名が必要である。

Primary authority is the current 宅地建物取引業法, especially Articles 35 and 37. Current MLIT guidance on the electronic provision of important-matters and contract documents was used as official implementation guidance. The canonical wording intentionally uses `記名`, not obsolete `記名押印`: the statutory digitalization reform effective 2022-05-18 removed the seal requirement while allowing electronic provision subject to statutory conditions.

Existing verified-question evidence was reconciled conservatively. **`takken-q-11-001` directly tests all three items** because its correct choice explicitly combines important-matters explanation with naming on the Article 35 and Article 37 related documents. It is therefore mapped to all three. The prior thirty-four Phase 4.3 deficits remain unchanged; no false coverage was introduced.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **13/113 concepts modeled**
- Canonical knowledge items: **53**
- Existing verified questions mapped: **12**
- Explicit unmapped knowledge gaps: **34**
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-business-guarantee-deposit`** using source unit `business-guarantee-deposit`.

Preserve all 53 knowledge items, twelve valid mappings, and all thirty-four explicit deficits. Model the営業保証金の供託 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.