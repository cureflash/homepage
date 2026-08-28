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

Re-read latest `main` and confirmed the Phase 4 gate remains satisfied: 90/90 units generated, 163/163 questions checked and verified, pending 0, `validation_complete: true`. The latest `main` contained newer non-Takken commits after the previous Takken checkpoint, so this implementation branch was created from the then-current `main` (`4313386d4512b169043d057f04443b8ce2adf6d0`) rather than from the previous Takken merge SHA. The canonical Takken STATUS/HANDOFF still pointed to `takken-concept-license-validity-renewal`, so no parallel Takken work was duplicated or rolled back.

Advanced Phase 4.2 at the exact prescribed concept **`takken-concept-license-validity-renewal`**, source unit `takken-gyoho-license-validity-renewal`, while preserving all prior knowledge items and mappings.

Confirmed existing Phase 2/3 evidence questions `takken-q-05-001` and `takken-q-05-002` remain `verified`. Rechecked 2026-04-01 authority: 宅地建物取引業法3条2項 provides a five-year license term, and current official prefectural licensing guidance states that a licensee continuing business after expiry must file the renewal application from 90 days before the expiry date through 30 days before it.

Added two atomic verified knowledge items:

- `takken-k-license-validity-five-years` — 宅地建物取引業法3条1項の免許の有効期間は5年。
- `takken-k-license-renewal-application-window` — 有効期間満了後も引き続き宅建業を営む場合、更新申請は満了日の90日前から30日前まで。

Each item carries stable `knowledgeId`, `conceptId`, claim, conditions, exceptions, importance, `examYear: 2026`, `lawAsOf: "2026-04-01"`, verified factcheck status, source-unit/fact traceability, and statute plus official-guidance source metadata.

Mapped existing verified question evidence non-destructively:

- `takken-q-05-001` -> `takken-concept-license-validity-renewal` -> `takken-k-license-validity-five-years`.
- `takken-q-05-002` -> `takken-concept-license-validity-renewal` -> `takken-k-license-renewal-application-window`.

Extended runtime guards for this modeled concept. Guards continue to reject duplicate/unknown concept or knowledge IDs, missing statute sources, wrong law versions, missing source-unit/fact traceability, unverified canonical knowledge, duplicate question mappings, unknown knowledge refs, and incomplete coverage of the currently modeled knowledge set.

No new 50-question drill items, no print generation, and no app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 90/90 units, 163/163 core facts, 163 generated questions
- Phase 3: complete — checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1 concept inventory: complete — 113 concepts
- Phase 4.2 knowledge items: active
- Knowledge-modeled concepts: **5/113**
- Canonical knowledge items: **12**
- Existing verified questions mapped: **7**
- Phase 4.3 fifty-question expansion: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-license-transfer`** and source unit `takken-gyoho-license-change-closure`.

1. Reconcile latest `main` and preserve all twelve current knowledge items / seven mappings.
2. Establish atomic verified knowledge items for the situations in which a宅建業者 must obtain an **免許換え**, including the relevant change in office-location/authority classification and the effect of the new license, using 2026-04-01 primary/official sources.
3. Map existing verified Phase 2/3 evidence from the source unit without rewriting or discarding it.
4. Extend reference/coverage guards only as needed; do not weaken verified-only or statute-source invariants.
5. Do **not** start 50-question deficit generation yet.

## Publication invariant

Only independently verified material may enter any public or production pool. Phase 4 additions must follow the verified-only rule and the bidirectional Question <-> Print coverage requirements in `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.
