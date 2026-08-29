# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-earnest-money-limit` using source unit `earnest-money-and-safeguards` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-earnest-money-limit.js` with two verified atomic knowledge items:

1. Article 39 scope: the宅建業者 is itself the seller and the buyer is not a宅建業者; broker-to-broker transactions are excluded by Article 78(2).
2. Within that scope, the seller may not receive earnest money exceeding 20% of the purchase price.

Primary authority is the current 宅地建物取引業法 Articles 39 and 78(2) at the 2026-04-01 cutoff. Canonical source fact `u27-f1` is preserved as the source-unit anchor.

Existing verified `takken-q-27-001` was deliberately not mapped. Its stem states that the宅建業者 is itself the seller and asks for the percentage cap, but does not state that the buyer is not a宅建業者. Because Article 78(2) excludes broker-to-broker transactions from Article 39, mapping that question to either canonical item would overstate what the question itself establishes. The Phase 2/3 question and its verified status were not changed; both new knowledge items remain explicit Phase 4.3 deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 33/113 concepts modeled
- Canonical knowledge items: 176
- Existing verified questions mapped: 34
- Explicit unmapped knowledge gaps: 131
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-earnest-money-safeguards` using source unit `earnest-money-and-safeguards`.

Preserve all 176 knowledge items, thirty-four valid mappings, and all one hundred thirty-one explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical schema guards in the new knowledge file enforce unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected two-item count. No Phase 2/3 question data or question-knowledge mapping file was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
