# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Corrected the previous unit 51 Phase 4.2 checkpoint so it conforms to the canonical concept inventory.

The prior checkpoint had staged eight verified knowledge items under `takken-concept-lease-deposit-opposability`. That concept ID does not exist in `power-concepts.js`; the canonical inventory has two separate concepts from the same source unit:

- `takken-concept-security-deposit`
- `takken-concept-building-lease-opposability`

The combined model was therefore removed rather than extended.

Six Civil Code Article 622-2 items now belong to `takken-concept-security-deposit`:

1. statutory definition of deposit/security money
2. return after lease termination plus return of the leased property
3. return after lawful assignment of the lease right
4. deduction of lease-based monetary obligations from the amount returned
5. lessor's right to apply the deposit to unpaid lease-based monetary debt
6. lessee cannot demand that the lessor make that application

Two Land and Building Lease Act Article 31 items now belong to `takken-concept-building-lease-opposability`:

1. delivery of the building gives opposability even without registration
2. the opposability applies against a person who later acquires a property right in the building

Existing verified question mappings were reconciled only where directly tested:

- `takken-q-51-001` -> `takken-k-security-deposit-return-after-end-and-return`, `takken-k-security-deposit-return-net-of-debt`
- `takken-q-51-002` -> `takken-k-building-lease-opposability-delivery-without-registration`, `takken-k-building-lease-opposability-subsequent-property-right-acquirer`

The definition, lawful-assignment return trigger, lessor application right, and lessee no-demand rule remain explicit Phase 4.3 coverage gaps.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 66/113 completed concepts
- Canonical knowledge items: 347
- Existing verified questions mapped: 73
- Explicit unmapped knowledge gaps: 252
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Start `takken-concept-ordinary-land-lease-term` from source unit `land-lease-right`.

Do not start Phase 4.3 until all 113 canonical concepts have been decomposed and existing verified-question mappings have been reconciled.

## Validation note

The unit 51 correction is structural, not a change to Phase 2/3 question content. The eight staged legal claims were preserved, but their concept IDs and knowledge IDs were normalized to the actual concept inventory.

`power-question-knowledge-map.js` now expects 73 mapped existing verified questions through unit 51 and explicitly requires both q51 mappings. Its allowed concept IDs and mapped knowledge IDs use the canonical `security-deposit` and `building-lease-opposability` identifiers.

The two replacement knowledge files enforce unique IDs, 2026/2026-04-01 metadata, verified status, statutory primary sources, and source-fact provenance limited to `u51-f1` or `u51-f2` as applicable.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
