# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-takkenshi-registration`** using source unit `takken-shi-registration` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-takkenshi-registration.js` with four verified atomic knowledge items:

1. `takken-k-takkenshi-registration-stages-separate` — 資格試験合格、資格登録、宅地建物取引士証交付は別の手続段階。
2. `takken-k-takkenshi-registration-exam-prefecture-governor` — 新規の資格登録は、資格試験に合格した都道府県の知事へ申請する。
3. `takken-k-takkenshi-registration-experience-or-equivalent` — 原則として登録申請前10年以内の宅建業実務経験2年以上、または登録実務講習修了等の法令上の同等要件が必要。
4. `takken-k-takkenshi-registration-needed-for-practice-not-pass-validity` — 宅建士として業務に従事するには登録が必要だが、業務予定がなければ直ちに登録する義務はなく、未登録だけで試験合格が無効になるわけではない。

Primary authority is the current 宅地建物取引業法, supplemented by current official Osaka and Kyoto registration guidance. Osaka states that registration is made by the prefecture where the examination was passed and identifies the two-year recent practical-experience or registered-practical-training route. Kyoto likewise states that registration is with the governor of the examination prefecture, requires two years of practical experience or a statutory equivalent, and clarifies that non-registration does not invalidate the examination pass when the person does not plan to work as a宅建士.

Existing verified-question evidence was reconciled conservatively. **`takken-q-08-001` maps only to `takken-k-takkenshi-registration-stages-separate`.** It directly tests that the statute has separate examination, registration and宅建士証 stages, but it does not test the registration authority, the two-year/equivalent eligibility requirement, or the no-immediate-registration/pass-validity rule. Those three items remain explicit Phase 4.3 deficits. The prior twenty-three deficits remain unchanged; no false coverage was introduced.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **10/113 concepts modeled**
- Canonical knowledge items: **41**
- Existing verified questions mapped: **10**
- Explicit unmapped knowledge gaps: **26**
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-takkenshi-card`** using source unit `takken-shi-card`.

Preserve all 41 knowledge items, ten valid mappings, and all twenty-six explicit deficits. Model the宅地建物取引士証 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.