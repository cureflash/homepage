# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Partially advanced `takken-concept-lease-deposit-opposability` from source unit `lease-deposit-opposability` without modifying Phase 2/3 question content or validation state.

Civil Code Article 622-2 and Land and Building Lease Act Article 31 were normalized into eight verified atomic knowledge items:

1. 敷金は、名目を問わず、賃貸借に基づく賃借人の金銭債務を担保する目的で交付される金銭である。
2. 賃貸借が終了し、かつ賃貸物の返還を受けたときは敷金返還義務が生じる。
3. 賃借人が適法に賃借権を譲渡したときも敷金返還義務が生じる。
4. 返還額は、敷金から賃貸借に基づく賃借人の金銭債務額を控除した残額である。
5. 賃借人が賃貸借に基づく金銭債務を履行しないとき、賃貸人は敷金をその弁済に充てられる。
6. 賃借人は、敷金を未払債務へ充当するよう賃貸人に請求できない。
7. 建物賃貸借は、登記がなくても建物の引渡しがあれば第三者対抗力を取得する。
8. その対抗力は、引渡し後に建物について物権を取得した者に対して生ずる。

Existing verified `takken-q-51-001` and `takken-q-51-002` were inspected, but their canonical mappings were intentionally not written in this checkpoint. `takken-q-51-001` directly tests the termination-plus-return trigger and debt deduction. `takken-q-51-002` directly tests delivery-based opposability without registration and expressly scopes the counterparty to a later property-right acquirer. The central `power-question-knowledge-map.js` therefore remains at 71 mappings and must be reconciled next before the concept is marked complete.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 64/113 completed concepts
- Canonical knowledge items staged: 347
- Existing verified questions mapped: 71
- Explicit unmapped knowledge gaps before q51 reconciliation: 256
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Finish `takken-concept-lease-deposit-opposability` by updating `qualifications/takken/data/power-question-knowledge-map.js` for existing verified `takken-q-51-001` and `takken-q-51-002` only where they directly test the staged knowledge items.

Expected direct mappings from the inspected question text:

- `takken-q-51-001` -> `takken-k-lease-deposit-opposability-return-after-end-and-return`, `takken-k-lease-deposit-opposability-return-net-of-debt`
- `takken-q-51-002` -> `takken-k-lease-deposit-opposability-delivery-without-registration`, `takken-k-lease-deposit-opposability-subsequent-property-right-acquirer`

Do not map the deposit definition, lawful-assignment return trigger, lessor unilateral application rule, or lessee no-demand rule because neither existing verified q51 question directly tests them.

After that mapping is committed and validated, mark this concept complete and advance to the next concept in inventory order. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 51 fact `u51-f1` supports the ordinary return-after-termination-and-return rule plus deduction of unpaid monetary obligations. The fuller Article 622-2 text additionally supplies the statutory deposit definition, lawful-assignment return trigger, lessor application right, and lessee no-demand rule; these four are staged with empty `sourceFactIds` because the original unit facts did not separately encode them.

Canonical unit 51 fact `u51-f2` supports delivery-based opposability of a building lease without registration against a person who later acquires a property right in the building. Existing `takken-q-51-002` expressly includes both the later-acquirer scope in the stem and the delivery-without-registration rule in its sole correct choice.

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statutory primary sources, valid `u51-f1`/`u51-f2` provenance, and the expected eight-item count.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
