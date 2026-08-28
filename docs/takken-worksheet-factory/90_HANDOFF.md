# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-sole-agency-brokerage` using source units `brokerage-contract-types` and `brokerage-reins-reporting` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-sole-agency-brokerage.js` with seven verified atomic knowledge items:

1. `takken-k-sole-agency-brokerage-other-brokers-prohibited` — the client may not concurrently appoint another broker for the same sale/exchange.
2. `takken-k-sole-agency-brokerage-self-found-transaction-prohibited` — unlike ordinary exclusive brokerage, a self-found transaction is not permitted.
3. `takken-k-sole-agency-brokerage-period-three-month-cap` — the statutory period may not exceed three months.
4. `takken-k-sole-agency-brokerage-renewal-client-request` — renewal requires a request from the client.
5. `takken-k-sole-agency-brokerage-renewal-three-month-cap` — the renewed period is also capped at three months.
6. `takken-k-sole-agency-brokerage-reins-five-days` — REINS registration is required within five days.
7. `takken-k-sole-agency-brokerage-report-one-week` — processing status must be reported to the client at least once every week.

Primary authorities are the current 宅地建物取引業法 Article 34-2 and the Ministry of Land, Infrastructure, Transport and Tourism's standard brokerage agreement notice, applied at the 2026-04-01 exam-law cutoff.

Existing `takken-q-17-002` directly tests the five-day REINS deadline and one-week reporting frequency and is mapped only to those two knowledge items. No mapping was manufactured for the other-broker restriction, self-found transaction prohibition, three-month period cap, renewal-request rule, or renewed-period cap; those five items remain Phase 4.3 deficits.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 21/113 concepts modeled
- Canonical knowledge items: 114
- Existing verified questions mapped: 19
- Explicit unmapped knowledge gaps: 86
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-reins-registration` using source unit `brokerage-reins-reporting`.

Preserve all 114 knowledge items, nineteen valid mappings, and all eighty-six explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
