# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-earnest-money-safeguards` using source unit `earnest-money-and-safeguards` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-earnest-money-safeguards.js` with seven verified atomic knowledge items:

1. Scope:宅建業者が自ら売主となり、買主が宅建業者ではない売買が41条・41条の2の対象。
2. 保全措置が必要な場合は措置後でなければ手付金等を受領できず、措置がなければ買主は支払いを拒める。
3. 工事完了前は累計が代金5%以下かつ1,000万円以下なら金額基準で保全措置不要。
4. 工事完了後は累計が代金10%以下かつ1,000万円以下なら金額基準で保全措置不要。
5. 買主への所有権移転登記等が済んでいる場合の保全措置不要。
6. 工事完了前で必要な保全方法は保証措置または保険措置。
7. 工事完了後では保証・保険に加えて指定保管機関による保管措置を利用できる。

Primary authority is the current 宅地建物取引業法 Articles 41, 41-2 and 78(2), plus the Ministry of Land, Infrastructure, Transport and Tourism guidance on earnest-money safeguards, at the 2026-04-01 cutoff. Canonical source fact `u27-f2` is preserved as the source-unit anchor.

Existing verified `takken-q-27-002` directly tests only the unfinished/completed exemption thresholds, so it is mapped to those two knowledge items. It does not establish the statutory scope, pre-receipt/payment-refusal rule, registration exemption, or available safeguard methods; those five items remain explicit Phase 4.3 deficits. `takken-q-27-001` and its prior non-mapping were not changed.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 34/113 concepts modeled
- Canonical knowledge items: 183
- Existing verified questions mapped: 35
- Explicit unmapped knowledge gaps: 136
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-damages-penalty` using source unit `damages-penalty`.

Preserve all 183 knowledge items, thirty-five valid mappings, and all one hundred thirty-six explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical schema guards in the new knowledge file enforce unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected seven-item count. The question-knowledge map preserves its explicit ID/concept whitelists and now expects 35 valid mappings, including verified `takken-q-27-002` only for the two threshold knowledge items. No Phase 2/3 question data was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
