# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Started `takken-concept-inheritance-renunciation` from source unit `inheritance-acceptance-renunciation` and completed the canonical extraction checkpoint.

Added three verified Civil Code knowledge items:

- Article 938: renunciation must be declared to the family court
- Article 939: a person who renounces is deemed never to have been an heir with respect to that succession
- Article 940: only a renouncing person who actually possesses estate property at the time of renunciation must preserve that property with the same care as their own property until handoff to an heir or estate liquidator

The Article 940 item uses the post-2023 rule applicable at the `2026-04-01` cutoff; it does not preserve the former broader continuing-management formulation.

The existing source unit directly contains only `u57-f2` for the family-court declaration. The Article 939 effect and Article 940 preservation rule are canonical statute-level expansions and intentionally have no sourceFactId.

No existing verified-question mapping was changed in this checkpoint. In particular, `takken-q-57-002` remains uniquely mapped under the completed inheritance-deliberation concept; the shared `u57-f2` source is not treated as permission to duplicate or reassign that mapping.

No Phase 2/3 question content was changed. No Phase 4.3 question generation, print generation, or app linkage was started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 74/113 completed concepts
- Canonical knowledge items: 382
- Existing verified questions mapped: 84
- Explicit unmapped knowledge gaps: 264
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile existing verified questions against the three `takken-concept-inheritance-renunciation` knowledge items. Preserve the existing unique `takken-q-57-002` mapping under inheritance-deliberation and do not infer coverage from the shared source unit. If no genuinely distinct direct question evidence exists, leave the renunciation items as Phase 4.3 deficits, complete the concept, and advance to the next Phase 4.2 concept. Keep Phase 4.3 blocked.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
