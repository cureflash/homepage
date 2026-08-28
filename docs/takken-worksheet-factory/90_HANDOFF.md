# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-advertising-start` using source unit `advertising-start-time` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-advertising-start.js` with three verified atomic knowledge items:

1. `takken-k-advertising-start-permit-before-advertising` — before completion of a land-development or building-construction project, advertising for the project may not begin until legally required permits/confirmations have actually been issued.
2. `takken-k-advertising-start-development-permit-building-confirmation` — representative Article 33 triggers are Urban Planning Act Article 29 development permission and Building Standards Act Article 6 confirmation; the Enforcement Order supplies additional prescribed dispositions.
3. `takken-k-advertising-start-application-not-enough` — merely applying for a required permit/confirmation is insufficient; the disposition must have occurred.

Primary authority is the current 宅地建物取引業法 Article 33 and 宅地建物取引業法施行令 Article 2-5. The canonical source unit's `u18-f1` is preserved as the source fact reference.

Existing verified `takken-q-18-001` directly tests the general rule that pre-completion advertising is restricted until the required permit etc. has been obtained, so it was mapped only to `takken-k-advertising-start-permit-before-advertising`. It does not directly test the named development-permit/building-confirmation examples or the application-versus-disposition distinction; those two items remain explicit Phase 4.3 deficits.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 24/113 concepts modeled
- Canonical knowledge items: 124
- Existing verified questions mapped: 20
- Explicit unmapped knowledge gaps: 95
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-contract-start` using source unit `contract-start-time`.

Preserve all 124 knowledge items, twenty valid mappings, and all ninety-five explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
