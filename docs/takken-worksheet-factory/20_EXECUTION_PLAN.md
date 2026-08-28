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
- [x] Stable-ID four-choice questions generated from independently testable core facts.
- [x] All core facts covered in unit order without quota padding.
- [x] Four distinct choices, proposed answer, explanation, fact/source references and validation state retained.
- [x] Schema/reference/duplicate/answer-position checks enforced.
- [x] Unverified questions excluded from production/public pools.

Final Phase 2 totals: **90/90 units, 163/163 core facts, 163 generated questions**.

Question files:
- `qualifications/takken/data/pending-questions-01-07.js` — 9
- `qualifications/takken/data/pending-questions-08-20.js` — 14
- `qualifications/takken/data/pending-questions-21-27.js` — 14
- `qualifications/takken/data/pending-questions-28-47.js` — 40
- `qualifications/takken/data/pending-questions-48-67.js` — 40
- `qualifications/takken/data/pending-questions-68-77.js` — 20
- `qualifications/takken/data/pending-questions-78-90.js` — 26

## Phase 3 — solve-all independent validation

**COMPLETE.** Every Phase 2 question was independently re-solved in strict ID/order sequence before stored answer/explanation/source references were consulted.

Completed checkpoints:
- `takken-q-01-001` through `takken-q-07-001`: 9 checked / 9 verified.
- `takken-q-08-001` through `takken-q-26-001`: 25 / 25.
- `takken-q-26-002` through `takken-q-27-002`: 3 / 3.
- `takken-q-28-001` through `takken-q-40-001`: 25 / 25.
- `takken-q-40-002` through `takken-q-47-002`: 15 / 15.
- `takken-q-48-001` through `takken-q-60-001`: 25 / 25.
- `takken-q-60-002` through `takken-q-72-002`: 25 / 25.
- `takken-q-73-001` through `takken-q-77-002`: 10 / 10.
- `takken-q-78-001` through `takken-q-90-002`: 26 / 26.

Final Phase 3 totals: **checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0 / `validation_complete: true`**.

## Phase 4 — Power宅建 knowledge / print / app integration

**ACTIVE. Phase 3 completion gate is satisfied.** Canonical specification: `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

### 4.1 Concept inventory
- [x] Extract exam-relevant terms, rules, institutions, numerical requirements, exceptions and comparison axes from all 90 units, all 163 verified questions and official scope.
- [x] Normalize into exam-level `exam_concept` units; isolated numbers/words are not standalone 50-question topics.
- [x] Final inventory: **113 concepts**.

Canonical inventory: `qualifications/takken/data/power-concepts.js`.

Checkpoints: units 1-30 -> 37 concepts; 31-50 -> +27 = 64; 51-70 -> +26 = 90; 71-90 -> +23 = 113.

### 4.2 Canonical knowledge items
- [ ] Decompose every concept into atomic `knowledge_items` with stable IDs, claims, conditions, exceptions, importance, `2026-04-01` cutoff and primary sources.
- [ ] Map existing verified questions only where they genuinely test the concept/knowledge item. Missing Phase 2/3 evidence must be tracked as a deficit for Phase 4.3, not hidden by false mappings.

Canonical base data:
- `qualifications/takken/data/power-knowledge-items.js`
- `qualifications/takken/data/power-question-knowledge-map.js`

Additional knowledge shards may be used during Phase 4.2 when they preserve append-only reconciliation; STATUS must enumerate them and later consolidation must preserve IDs.

Phase 4.2 checkpoints:
- [x] `takken-concept-business-definition`: 3 verified knowledge items; 2 existing verified questions mapped.
- [x] `takken-concept-license-required`: 1 item; `takken-q-02-001` mapped.
- [x] `takken-concept-license-authority`: 2 items; `takken-q-03-001` mapped.
- [x] `takken-concept-license-disqualification`: 4 items; `takken-q-04-001` mapped; current wording uses `拘禁刑`.
- [x] `takken-concept-license-validity-renewal`: 2 items; `takken-q-05-001` / `takken-q-05-002` mapped.
- [x] `takken-concept-license-transfer`: 4 verified items; no existing Phase 2/3 question directly tests them, so all four remain explicit Phase 4.3 deficits.
- [x] `takken-concept-license-change-closure`: 7 verified items covering the 30-day roster-change notice, five statutory廃業等 notification categories/subjects/deadlines, and license-effect timing. `takken-q-06-001` maps only to the 30-day change-notice item; the other six remain explicit Phase 4.3 deficits.
- [x] `takken-concept-roster`: 7 verified items covering the statutory roster system, licensing-authority maintenance, identity entries, personnel entries, office/exclusive-takkenshi entries, other statutory entries and general inspection. `takken-q-07-001` maps only to the statutory-system item; the six detailed roster/inspection items remain explicit Phase 4.3 deficits.
- [x] `takken-concept-office-signs`: 7 verified items covering conspicuous posting at offices, continuous non-office facilities, own-subdivision sites and guide offices, guide offices used for agency/brokerage of another broker's subdivision, exhibition/event locations and place-specific prescribed forms. No existing Phase 2/3 question directly tests these detailed duties; all seven remain explicit Phase 4.3 deficits.
- [x] `takken-concept-takkenshi-registration`: 4 verified items covering the separate exam/registration/card stages, registration with the governor of the prefecture where the exam was passed, the two-year recent practical-experience/equivalent requirement, and the distinction between registration needed for practice and preservation of exam-pass validity. `takken-q-08-001` maps only to the separate-stages item; the other three remain explicit Phase 4.3 deficits.
- [x] `takken-concept-takkenshi-card`: 5 verified items covering registration plus card issuance for practice, five-year validity, statutory training and the one-year post-exam exemption, mandatory presentation during Article 35 important-matters explanation, and presentation on request by transaction parties. Existing `takken-q-09-001` does not directly test these detailed card rules, so all five remain explicit Phase 4.3 deficits.
- [x] `takken-concept-exclusive-takkenshi`: 4 verified items covering the office one-fifth staffing ratio, adult/exclusive status, the meaning of exclusivity, and the two-week cure period when an existing office等 falls below the statutory standard. `takken-q-10-001` maps only to the office one-fifth ratio; the other three remain explicit Phase 4.3 deficits.

Current Phase 4.2 totals: **12/113 modeled concepts, 50 verified knowledge items, 11 existing verified questions mapped, 34 explicit question-coverage gaps**.

**Exact continuation:** `takken-concept-takkenshi-exclusive-duties`, source unit `takken-shi-exclusive-duties`. Preserve all thirty-four explicit deficits and map existing questions only to knowledge they genuinely test. Do not start Phase 4.3 yet.

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

Only independently verified material may be published. `pending_factcheck`, `pending_validation`, `needs_revision`, and `rejected` content must not enter the public catalog or production question pool. A verified knowledge item without a verified question mapping is an explicit Phase 4.3 deficit and does not satisfy publication coverage.