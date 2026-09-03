# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Extracted and source-checked canonical knowledge for `takken-concept-registration-license-tax` without changing existing Phase 2/3 questions or beginning Phase 4.3.

- Added 10 atomic knowledge items covering taxable registrations, national-tax classification, taxpayer, real-estate value tax base, land sale transfer rate, land inheritance transfer rate, building preservation rate, building sale transfer rate, residential-house preservation reduced rate, and residential-house transfer reduced rate.
- Primary grounding is current National Tax Agency guidance explicitly marked `[令和8年4月1日現在法令等]`, including the registration-tax overview and tax-rate table.
- The land sale ownership-transfer item records the 1,000分の20 base rate and 1,000分の15 reduced rate through 2029-03-31; residential-house reduced rates are also tied to the current statutory deadlines and conditions stated by NTA.
- Existing source questions `takken-q-81-001` and `takken-q-81-002` were intentionally not mapped in this extraction checkpoint.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 104/113 concepts with canonical knowledge extraction complete; 103/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 104
- Canonical knowledge items: 580
- Existing verified questions mapped: 130
- Explicit unmapped knowledge gaps: 389
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile `takken-q-81-001` and `takken-q-81-002` against the 10 canonical `takken-concept-registration-license-tax` knowledge items. Map only knowledge directly measured by each stem and four choices. Keep all other knowledge as explicit Phase 4.3 deficits. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
