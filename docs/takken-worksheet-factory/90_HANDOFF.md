# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-takkenshi-card`** using source unit `takken-shi-card` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-takkenshi-card.js` with five verified atomic knowledge items:

1. `takken-k-takkenshi-card-registration-and-issuance` — 宅建士として業務に従事するには資格登録に加えて宅建士証の交付が必要で、取引士証は登録後の申請により交付される。
2. `takken-k-takkenshi-card-validity-five-years` — 宅建士証の有効期間は5年で、申請により更新できる。
3. `takken-k-takkenshi-card-statutory-training` — 原則として交付・更新申請前6か月以内の法定講習が必要。試験合格日から1年以内の交付申請は受講義務が免除される。
4. `takken-k-takkenshi-card-presentation-important-matters` — 35条重要事項説明時は相手方からの請求がなくても宅建士証を提示する。
5. `takken-k-takkenshi-card-presentation-on-request` — 宅建業者の業務に従事する宅建士は、取引関係者から請求があれば宅建士証を提示する。

Primary authority is the current 宅地建物取引業法. Current official Kyoto guidance confirms that card issuance follows registration, the card is valid for five years, renewal requires statutory training within the six months before expiry, and applicants within one year after examination pass are exempt from the training requirement. Current Osaka guidance confirms that the card is required when working as a宅建士 and separately explains presentation of the card when giving important-matters explanations.

Existing verified-question evidence was reconciled conservatively. **`takken-q-09-001` was not mapped to any of the five detailed card items.** It establishes only that the card system exists and that important-matters explanations are performed by宅地建物取引士; it does not directly test card issuance requirements, validity, statutory training, mandatory presentation at the explanation, or presentation on request. All five therefore remain explicit Phase 4.3 deficits. The prior twenty-six deficits remain unchanged; no false coverage was introduced.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **11/113 concepts modeled**
- Canonical knowledge items: **46**
- Existing verified questions mapped: **10**
- Explicit unmapped knowledge gaps: **31**
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-exclusive-takkenshi`** using source unit `takken-shi-exclusive`.

Preserve all 46 knowledge items, ten valid mappings, and all thirty-one explicit deficits. Model the statutory exclusive-takkenshi staffing rule from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.