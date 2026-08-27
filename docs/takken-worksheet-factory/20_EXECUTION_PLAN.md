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

## Phase 3 — solve-all independent validation

**COMPLETE.** Every Phase 2 question has been independently re-solved in strict ID/order sequence.

Final Phase 3 totals: **checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0 / `validation_complete: true`**.

## Phase 4 — Power宅建 knowledge / print / app integration

**ACTIVE. Phase 3 completion gate is satisfied.** Canonical specification: `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

Current task: Phase 4.1 Concept inventory. Do not skip ahead to 50-question expansion, print generation, or app integration before the concept inventory and canonical knowledge model are established.

### 4.1 Concept inventory
- [~] Extract exam-relevant terms, rules, institutions, numerical requirements, exceptions and comparison axes from the 90 units, all 163 verified Phase 2/3 questions and official scope. **Checkpoint complete through canonical unit 70; 90 normalized concepts recorded. Exact continuation: unit 71 `height-restrictions`.**
- [~] Normalize into exam-level `exam_concept` units; do not make isolated numbers/words standalone 50-question topics. **Current inventory deliberately splits compound units where independent study value exists while keeping numbers/authority names inside parent concepts.**
- [ ] Record final actual concept count after all 90 units and verified-question evidence are covered; initial estimate is roughly 250-300, but count must follow actual extraction rather than a quota.

Canonical inventory file: `qualifications/takken/data/power-concepts.js`.

Phase 4.1 checkpoints:
- Units 1-30: **37 concepts** normalized and persisted.
- Units 31-50: **27 additional concepts**, cumulative **64 concepts**.
- Units 51-70: **26 additional concepts**, cumulative **90 concepts**. Splits include敷金 / 建物賃貸借の対抗力、普通借地権の存続期間 / 借地権の対抗力、法定相続人と順位 / 法定相続分、承認・放棄の熟慮期間 / 相続放棄、遺言 / 遺留分、都市計画決定主体 / 都市計画事業。

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
