# 宅建 Worksheet Factory — EXECUTION PLAN

This plan is subordinate to `00_MASTER_INSTRUCTIONS.md` and works with `30_QUESTION_AND_QA_SPEC.md`. Phase 4 is additionally governed by `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

## Phase 0 — foundation

- [x] Portable implementation under `qualifications/takken/`
- [x] 2026 exam year / `2026-04-01` law cutoff
- [x] Structured unit model and shared renderer
- [x] Deterministic seeded cloze and A4 print path
- [x] Verified-only public catalog and automated validation
- [x] Canonical question-generation / solve-all QA specification

## Phase 1 — ordered unit generation

- [x] All 90 canonical unit datasets generated in fixed order.
- [x] All remain unpublished until independently verified.

## Phase 2 — four-choice question generation

- [x] Generate stable-ID four-choice questions from independently testable core facts.
- [x] Cover every core fact in unit order without skipping.
- [x] Store exactly four distinct choices, one proposed answer, explanation, fact/source references and `pending_validation` status.
- [x] Run schema/reference/duplicate/answer-position checks at each safe checkpoint.
- [x] Do not pad counts with template clones; coverage is fact-based.
- [x] Keep all unverified questions outside production/public pools.
- [x] All 90 units have 100% core-fact coverage; `question_generation_complete: true` and `generation_complete: true`.

Final Phase 2 totals: **90/90 units, 163/163 core facts, 163 generated questions**.

Question files:
- `qualifications/takken/data/pending-questions-01-07.js` — 9 questions
- `qualifications/takken/data/pending-questions-08-20.js` — 14 questions
- `qualifications/takken/data/pending-questions-21-27.js` — 14 questions
- `qualifications/takken/data/pending-questions-28-47.js` — 40 questions
- `qualifications/takken/data/pending-questions-48-67.js` — 40 questions
- `qualifications/takken/data/pending-questions-68-77.js` — 20 questions
- `qualifications/takken/data/pending-questions-78-90.js` — 26 questions

## Phase 3 — solve-all independent validation

This phase is active. Questions must be processed strictly in ID/order sequence.

- [x] Begin from the first question ID and process strictly in order.
- [x] Hide stored answer/explanation/source references before independent solving.
- [x] Independently determine the answer and legal basis, reopening primary/official sources when needed.
- [x] Then compare against stored answer/explanation.
- [x] Classify each checked question individually as `verified`, `needs_revision`, or `rejected`.
- [ ] Repair question/choices/answer/explanation/sources together and independently solve again before any repaired item becomes `verified` when a defect is found.
- [ ] Continue with safe checkpoints; target 25 questions where file/content boundaries allow and at most about 100 checked questions per run.
- [x] Track checked and verified counts separately and persist the exact next question ID.
- [ ] Only after every question has been independently re-solved and all revision work is closed may `validation_complete: true` be set.

Completed Phase 3 checkpoints:
- Questions `takken-q-01-001` through `takken-q-07-001`: 9 checked / 9 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-08-001` through `takken-q-26-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-26-002` through `takken-q-27-002`: 3 checked / 3 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-28-001` through `takken-q-40-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected. This checkpoint covered宅建業法の損害賠償予定・契約不適合特約・他人物売買・割賦販売・報酬・監督処分 and民法の意思表示・錯誤・詐欺強迫・虚偽表示・制限行為能力・代理・無権代理.
- Questions `takken-q-40-002` through `takken-q-47-002`: 15 checked / 15 verified / 0 needs_revision / 0 rejected. This file-boundary checkpoint covered表見代理、取得・消滅時効、物権変動・対抗要件、共有、抵当権、債務不履行、解除、同時履行の抗弁・危険負担.
- Questions `takken-q-48-001` through `takken-q-60-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected. This checkpoint covered手付、契約不適合、賃貸借、敷金・借家対抗力、普通・定期借地、建物賃貸借・定期建物賃貸借、相続・放棄・遺留分、区分所有、不動産登記の表題部/権利部.
- Questions `takken-q-60-002` through `takken-q-72-002`: 25 checked / 25 verified / 0 needs_revision / 0 rejected. This checkpoint covered不動産登記の甲区・乙区、都市計画区域・準都市計画区域、区域区分、用途地域、都市計画決定・都市計画事業、開発許可・完了手続、建築確認、道路・接道、建ぺい率、容積率、高さ制限、防火地域・準防火地域.
- Questions `takken-q-73-001` through `takken-q-77-002`: 10 checked / 10 verified / 0 needs_revision / 0 rejected. This file-boundary checkpoint covered国土利用計画法の事後届出、農地法3条・4条・5条、土地区画整理法の仮換地・換地処分、盛土規制法.

Current Phase 3 progress: **checked 137 / verified 137 / needs_revision 0 / rejected 0 / pending 26 / next `takken-q-78-001`**.

## Phase 4 — Power宅建 knowledge / print / app integration

**BLOCKED until `validation_complete: true`. Do not begin any Phase 4 work early.** Canonical specification: `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

### 4.1 Concept inventory
- [ ] Extract exam-relevant terms, rules, institutions, numerical requirements, exceptions and comparison axes from the 90 units, verified Phase 2/3 questions and official scope.
- [ ] Normalize into exam-level `exam_concept` units; do not make isolated numbers/words standalone 50-question topics.
- [ ] Record actual concept count; initial estimate is roughly 250-300.

### 4.2 Canonical knowledge items
- [ ] Decompose each concept into atomic `knowledge_items` with stable IDs, claims, conditions, exceptions, importance, `2026-04-01` law cutoff and primary sources.
- [ ] Map existing verified questions to concepts/knowledge items instead of discarding them.

### 4.3 Fifty-question drill expansion
- [ ] Target 50 verified four-choice questions per concept, reusing verified existing questions and generating only the deficit.
- [ ] Reject superficial number/name/template swaps; diversify direct knowledge, false-statement, scenario, comparison, exception/count/combination and cross-topic forms.
- [ ] Add `concept_id`, `knowledge_refs[]`, detailed explanation, distractor explanations and primary sources.

### 4.4 Question-first QA and explanation completion
- [ ] Independently solve every newly generated question before verified status.
- [ ] Finalize `detailed_explanation` and `knowledge_refs` after QA.

### 4.5 Explanation-print generation
- [ ] Generate concept study prints only from verified question/knowledge data.
- [ ] Produce study / worksheet / answer from the same canonical knowledge data.

### 4.6 Bidirectional coverage validator
- [ ] Enforce Question -> Print 100% knowledge coverage.
- [ ] Enforce Print -> Question 100% knowledge coverage.
- [ ] Block publication on orphan questions, orphan print knowledge, unverified sources or law-version mismatches.

### 4.7 App review integration
- [ ] Expose concept / knowledge item IDs to the app question bank.
- [ ] Track performance at question and knowledge-item levels, prioritize alternate questions for the same weak item, show detailed explanations, and link to the matching explanation print.

## publication invariant

Only independently verified material may be published. `pending_factcheck`, `pending_validation`, `needs_revision`, and `rejected` content must not enter the public catalog or production question pool.