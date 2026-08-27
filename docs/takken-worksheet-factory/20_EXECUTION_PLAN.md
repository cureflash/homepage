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

**COMPLETE.** Every Phase 2 question has been independently re-solved in strict ID/order sequence.

- [x] Begin from the first question ID and process strictly in order.
- [x] Hide stored answer/explanation/source references before independent solving.
- [x] Independently determine the answer and legal basis, reopening primary/official sources when needed.
- [x] Then compare against stored answer/explanation.
- [x] Classify each checked question individually as `verified`, `needs_revision`, or `rejected`.
- [x] Repair question/choices/answer/explanation/sources together and independently solve again before any repaired item becomes `verified` when a defect is found. No unresolved defect remains at completion.
- [x] Continue with safe checkpoints; target 25 questions where file/content boundaries allow and at most about 100 checked questions per run.
- [x] Track checked and verified counts separately and persist the exact next question ID.
- [x] Only after every question has been independently re-solved and all revision work is closed may `validation_complete: true` be set.

Completed Phase 3 checkpoints:
- Questions `takken-q-01-001` through `takken-q-07-001`: 9 checked / 9 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-08-001` through `takken-q-26-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-26-002` through `takken-q-27-002`: 3 checked / 3 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-28-001` through `takken-q-40-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-40-002` through `takken-q-47-002`: 15 checked / 15 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-48-001` through `takken-q-60-001`: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-60-002` through `takken-q-72-002`: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-73-001` through `takken-q-77-002`: 10 checked / 10 verified / 0 needs_revision / 0 rejected.
- Questions `takken-q-78-001` through `takken-q-90-002`: 26 checked / 26 verified / 0 needs_revision / 0 rejected. This final checkpoint covered legal-restriction comparison, acquisition/fixed-asset/registration-license/stamp/transfer-income taxes, land-price public notice, appraisal, Housing Finance Agency/Flat35, real-estate advertising, land/building knowledge, 2026 statistics, and five-question exemption review.

Final Phase 3 totals: **checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0 / `validation_complete: true`**.

## Phase 4 — Power宅建 knowledge / print / app integration

**ACTIVE. Phase 3 completion gate is satisfied.** Canonical specification: `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

Exact next task: Phase 4.1 Concept inventory, first unchecked item. Do not skip ahead to 50-question expansion, print generation, or app integration before the concept inventory and canonical knowledge model are established.

### 4.1 Concept inventory
- [ ] Extract exam-relevant terms, rules, institutions, numerical requirements, exceptions and comparison axes from the 90 units, all 163 verified Phase 2/3 questions and official scope.
- [ ] Normalize into exam-level `exam_concept` units; do not make isolated numbers/words standalone 50-question topics.
- [ ] Record actual concept count; initial estimate is roughly 250-300, but count must follow actual extraction rather than a quota.

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
