# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Started `takken-concept-inheritance-deliberation` from source unit `inheritance-acceptance-renunciation` and completed the canonical knowledge extraction checkpoint.

Added five verified Civil Code knowledge items:

- the three-month deliberation period, starting when the heir learns that succession has opened to that heir
- the three statutory choices during that period: unconditional acceptance, qualified acceptance, or renunciation
- extension of the period by the family court at the request of an interested party or the public prosecutor
- the heir may investigate the estate before acceptance or renunciation
- renunciation must be declared to the family court

Primary source is the Civil Code as applicable on `2026-04-01`, using Articles 915 and 938. The existing unit's `u57-f1` supports the period and three-choice items, while `u57-f2` supports the family-court renunciation item. The extension and estate-investigation items are canonical statute-level expansions and therefore intentionally have no sourceFactId.

No Phase 2/3 question content was changed. Existing verified `takken-q-57-001` and `takken-q-57-002` were inspected but not mapped in this checkpoint; mapping remains the exact next task so that evidence is not inferred merely from shared source facts.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 73/113 completed concepts
- Canonical knowledge items: 379
- Existing verified questions mapped: 82
- Explicit unmapped knowledge gaps: 263
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile verified `takken-q-57-001` and `takken-q-57-002` against the five `takken-concept-inheritance-deliberation` knowledge items. Map only what each question directly tests. In particular, do not credit the period-extension or pre-choice estate-investigation items unless an existing verified question directly measures them. Then complete the concept and advance to the next Phase 4.2 concept. Keep Phase 4.3 blocked.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
