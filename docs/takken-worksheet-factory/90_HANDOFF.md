# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163 current questions have been independently checked and verified; `pending_validation` is zero and `validation_complete: true`.

Phase 4 Power宅建 knowledge / print / app integration is active. Phase 4.1 Concept inventory is complete across all 90 canonical units with **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not skip ahead to 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question mapping are established concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.
Canonical Phase 4 concept inventory: `qualifications/takken/data/power-concepts.js`.
Canonical Phase 4 knowledge items: `qualifications/takken/data/power-knowledge-items.js`.
Canonical existing-question mapping: `qualifications/takken/data/power-question-knowledge-map.js`.

## Completed in this run

Re-read latest `main` and confirmed the Phase 4 gate remains satisfied: 90/90 units generated, 163/163 questions checked and verified, pending 0, `validation_complete: true`. Later non-Takken commits existed on `main`, so the implementation branch was created from current `main` rather than from the previous Takken merge SHA; no Takken work had advanced past `takken-concept-license-authority`, so no duplicate implementation was needed.

Advanced Phase 4.2 at the exact prescribed concept **`takken-concept-license-disqualification`**, source unit `takken-gyoho-license-disqualification`, while preserving all prior knowledge items and mappings.

Confirmed existing Phase 2/3 evidence question `takken-q-04-001` remains `verified`. Reopened the current e-Gov宅地建物取引業法 and official MLIT licensing guidance. e-Gov shows a current-law revision with **令和8年4月1日施行** and Article 5 now uses the post-2025 criminal-law terminology **拘禁刑**. The canonical unit `u04-f1` is intentionally scoped to the representative five-year restrictions, so this checkpoint decomposes that source fact rather than importing unrelated Article 5 grounds that the existing unit did not teach.

Added four atomic verified knowledge items:

- `takken-k-license-disqualification-cancellation-five-years` — specified Article 66(1)(8)/(9) cancellation -> five years from cancellation.
- `takken-k-license-disqualification-hearing-closure-five-years` — specified closure/abolition after cancellation-hearing public notice -> five years from the filing, subject to the statutory reasonable-cause exception.
- `takken-k-license-disqualification-criminal-sentence-five-years` — custodial sentence or the specified statutory fine categories -> five years after execution ends or can no longer be enforced; not every fine automatically qualifies.
- `takken-k-license-disqualification-misconduct-prior-five-years` — real-estate-business fraud or markedly improper conduct within the five years before the license application.

Each item carries stable `knowledgeId`, `conceptId`, claim, conditions, exceptions, importance, `examYear: 2026`, `lawAsOf: "2026-04-01"`, verified factcheck status, source-unit/fact traceability, and e-Gov/MLIT source metadata.

Mapped existing verified question evidence non-destructively:

- `takken-q-04-001` -> `takken-concept-license-disqualification` -> the four source-fact-derived five-year knowledge items. The verified question tests the shared five-year欠格事由 rule and its stored explanation expressly identifies cancellation, punishment and misconduct as the representative categories.

Extended runtime guards for this modeled concept. Guards continue to reject duplicate/unknown concept or knowledge IDs, missing statute sources, wrong law versions, missing source-unit/fact traceability, unverified canonical knowledge, duplicate question mappings, unknown knowledge refs, and incomplete coverage of the currently modeled knowledge set.

No new 50-question drill items, no print generation, and no app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 90/90 units, 163/163 core facts, 163 generated questions
- Phase 3: complete — checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1 concept inventory: complete — 113 concepts
- Phase 4.2 knowledge items: active
- Knowledge-modeled concepts: **4/113**
- Canonical knowledge items: **10**
- Existing verified questions mapped: **5**
- Phase 4.3 fifty-question expansion: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-license-validity-renewal`** and source unit `takken-gyoho-license-validity-renewal`.

1. Reconcile latest `main` and preserve all ten current knowledge items / five mappings.
2. Establish atomic items for the **5-year license validity** and the **renewal application period from 90 days before expiry through 30 days before expiry**, using 2026-04-01 primary/official sources.
3. Map existing verified Phase 2/3 questions `takken-q-05-001` and `takken-q-05-002`.
4. Extend reference/coverage guards only as needed; do not weaken verified-only or statute-source invariants.
5. Do **not** start 50-question deficit generation yet.

## Publication invariant

Only independently verified material may enter any public or production pool. Phase 4 additions must follow the verified-only rule and the bidirectional Question <-> Print coverage requirements in `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.
