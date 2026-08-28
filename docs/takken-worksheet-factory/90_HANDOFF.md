# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-exclusive-takkenshi`** using source unit `takken-shi-exclusive` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-exclusive-takkenshi.js` with four verified atomic knowledge items:

1. `takken-k-exclusive-takkenshi-office-one-fifth` — a宅建業者 office must maintain adult exclusive宅地建物取引士 at a ratio of at least one-fifth of persons engaged in宅建業 at that office.
2. `takken-k-exclusive-takkenshi-adult-exclusive-status` — persons counted toward the statutory placement must be adult and exclusive宅地建物取引士 with a valid card.
3. `takken-k-exclusive-takkenshi-exclusivity-meaning` — exclusive status requires the practical elements of regular presence and exclusive engagement; incompatible outside employment/roles ordinarily defeat the required exclusivity.
4. `takken-k-exclusive-takkenshi-shortage-two-weeks` — if an existing office等 falls below the statutory placement standard, the broker must take necessary measures to restore compliance within two weeks.

Primary authority is the current 宅地建物取引業法, especially Article 31-3. Current official Kinki Regional Development Bureau guidance confirms the office staffing ratio of one exclusive宅地建物取引士 per five persons engaged in宅建業. Current Osaka guidance separately confirms the one-in-five rule and explains that exclusive宅地建物取引士 require常勤性 and専従性.

Existing verified-question evidence was reconciled conservatively. **`takken-q-10-001` maps only to `takken-k-exclusive-takkenshi-office-one-fifth`.** It directly tests the five-person-to-one staffing ratio but does not test adult/exclusive status as a separate rule, the meaning of exclusivity, or the two-week cure period. Those three therefore remain explicit Phase 4.3 deficits. The prior thirty-one deficits remain unchanged; no false coverage was introduced.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **12/113 concepts modeled**
- Canonical knowledge items: **50**
- Existing verified questions mapped: **11**
- Explicit unmapped knowledge gaps: **34**
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-takkenshi-exclusive-duties`** using source unit `takken-shi-exclusive-duties`.

Preserve all 50 knowledge items, eleven valid mappings, and all thirty-four explicit deficits. Model the宅地建物取引士 exclusive duties from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.