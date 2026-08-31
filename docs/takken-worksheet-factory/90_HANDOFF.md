# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Started canonical concept `takken-concept-ordinary-land-lease-term` from source unit `land-lease-right`.

Borrowed Land and Building Lease Act Article 3 was independently checked against e-Gov and split into two atomic verified knowledge items:

1. the ordinary land lease initial term is 30 years when no longer term is agreed
2. if the contract stipulates a term longer than 30 years, that stipulated period is the initial term

The new canonical file is:

- `qualifications/takken/data/power-knowledge-items-ordinary-land-lease-term.js`

Both items carry stable IDs, `examYear: 2026`, `lawAsOf: 2026-04-01`, verified factcheck status, the e-Gov Borrowed Land and Building Lease Act source, source unit `land-lease-right`, and source fact `u52-f1`.

Existing verified `takken-q-52-001` directly tests both rules. The central `power-question-knowledge-map.js` has deliberately not yet been changed in this checkpoint, so this concept is not counted complete yet and both staged items remain explicit mapping deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 66/113 completed concepts
- Canonical knowledge items staged: 349
- Existing verified questions mapped: 73
- Explicit unmapped knowledge gaps before q52 mapping: 254
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Finish `takken-concept-ordinary-land-lease-term` by mapping verified `takken-q-52-001` only to:

- `takken-k-ordinary-land-lease-term-thirty-years`
- `takken-k-ordinary-land-lease-term-longer-contract-controls`

After that mapping passes the central validator, increment the completed concept/mapped-question counts and reduce the two temporary mapping gaps, then advance to `takken-concept-land-lease-opposability` from the same source unit.

Do not start Phase 4.3 until all 113 canonical concepts have been decomposed and existing verified-question mappings have been reconciled.

## Validation note

The legal source rule was checked against e-Gov Borrowed Land and Building Lease Act Article 3. The source unit `u52-f1` and verified `takken-q-52-001` state the same two-part rule. No Phase 2/3 question content was modified.

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statutory primary source, canonical concept ID, and source-fact provenance limited to `u52-f1`.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
