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

Re-read latest `main` and confirmed the Phase 4 gate remains satisfied: 90/90 units generated, 163/163 questions checked and verified, pending 0, `validation_complete: true`. No open Takken PR required reconciliation before continuing.

Advanced Phase 4.2 at the exact prescribed concept **`takken-concept-license-required`**, source unit `takken-gyoho-license-required`, while preserving the prior `takken-concept-business-definition` knowledge model and mappings.

Confirmed the existing Phase 2/3 evidence question `takken-q-02-001` remains `verified`. Independently reopened the current e-Gov Real Estate Brokerage Act page and MLIT licensing guidance. MLIT states that a person intending to conduct宅地建物取引業 must obtain a license from the Minister of Land, Infrastructure, Transport and Tourism or the prefectural governor; its table also confirms that this requirement applies to both corporations and individuals.

Added one atomic verified knowledge item:

- `takken-k-license-required-general` — a person intending to conduct宅地建物取引業 must obtain the statutory宅建業免許; the condition applies irrespective of individual/corporate form, while conduct outside the statutory definition of宅地建物取引業 does not trigger this particular licensing obligation.

The item carries stable `knowledgeId`, `conceptId`, claim, conditions, exception boundary, importance, `examYear: 2026`, `lawAsOf: "2026-04-01"`, verified factcheck status, source-unit/fact traceability, and e-Gov/MLIT source metadata.

Mapped existing verified question evidence non-destructively:

- `takken-q-02-001` -> `takken-concept-license-required` -> `takken-k-license-required-general`.

Extended runtime guards so canonical knowledge can cover multiple modeled concepts without weakening invariants. Guards now reject duplicate/unknown concept or knowledge IDs, missing statute sources, wrong law versions, missing source-unit/fact traceability, unverified canonical knowledge, duplicate question mappings, unknown knowledge refs, and incomplete coverage of the modeled knowledge set.

No new 50-question drill items, no print generation, and no app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 90/90 units, 163/163 core facts, 163 generated questions
- Phase 3: complete — checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1 concept inventory: complete — 113 concepts
- Phase 4.2 knowledge items: active
- Knowledge-modeled concepts: **2/113**
- Canonical knowledge items: **4**
- Existing verified questions mapped: **3**
- Phase 4.3 fifty-question expansion: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-license-authority`** and source unit `takken-gyoho-license-authority`.

1. Reconcile latest `main` and preserve all current four knowledge items / three mappings.
2. Decompose `takken-concept-license-authority` into atomic knowledge items distinguishing one-prefecture and two-or-more-prefecture office configurations, using 2026-04-01 primary/official sources.
3. Map existing verified Phase 2/3 evidence beginning with `takken-q-03-001`.
4. Extend reference/coverage guards only as needed; do not weaken verified-only or statute-source invariants.
5. Do **not** start 50-question deficit generation yet.

## Publication invariant

Only independently verified material may enter any public or production pool. Phase 4 additions must follow the verified-only rule and the bidirectional Question <-> Print coverage requirements in `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.
