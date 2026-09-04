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
- [x] Stable-ID four-choice questions generated from all independently testable core facts.
Final totals: 90/90 units, 163/163 core facts, 163 generated questions.

## Phase 3 — solve-all independent validation
COMPLETE. Final totals: checked 163 / verified 163 / needs_revision 0 / rejected 0 / pending 0 / `validation_complete: true`.

## Phase 4 — Power宅建 knowledge / print / app integration
ACTIVE. Phase 3 completion gate is satisfied. Canonical specification: `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

### 4.1 Concept inventory
- [x] Final inventory: 113 concepts in `qualifications/takken/data/power-concepts.js`.

### 4.2 Canonical knowledge items
- [x] Decompose every concept into atomic `knowledge_items` with stable IDs, claims, conditions, exceptions, importance, `2026-04-01` cutoff and primary sources.
- [x] Map existing verified questions only where they genuinely test the knowledge item; missing evidence remains a Phase 4.3 deficit.

Completed: all 113/113 concepts have canonical knowledge extraction and existing-question mapping reconciliation complete.

Final Phase 4.2 totals:
- 648 verified canonical knowledge items
- 149 existing verified questions mapped
- 432 explicit knowledge-item coverage gaps for Phase 4.3
- Existing Phase 2/3 question text, choices, answers, explanations, source references and validation statuses unchanged

Final Unit 90 checkpoint:
- [x] `takken-q-90-001` directly maps to `takken-k-five-question-exemption-normal-50-registered-45` and `takken-k-five-question-exemption-five-questions`.
- [x] `takken-q-90-002` directly maps to `takken-k-five-question-exemption-course-eligibility`, `takken-k-five-question-exemption-completion-exam-required`, and `takken-k-five-question-exemption-three-year-validity`.
- [x] Phase 4.2 is complete.

### 4.3 Fifty-question drill expansion
- [ ] Target 50 verified four-choice questions per concept, reusing verified existing questions and generating only the deficit.
- [ ] Reject superficial number/name/template swaps.

`takken-concept-business-definition` progress:
- [x] Reused 2 existing independently verified questions.
- [x] Generated first 25 new questions as `pending_validation` in `qualifications/takken/data/power-questions-business-definition.js`.
- [ ] Generate the remaining 23-question deficit to reach 50 total questions for the concept.
- [ ] Independently QA all newly generated questions before any new question becomes verified.

Exact continuation: stay on `takken-concept-business-definition` and generate the remaining 23 questions as `pending_validation`. Do not start independent QA until the concept reaches 50 total questions, and do not treat any newly generated question as verified before that later QA checkpoint.

### 4.4 Question-first QA and explanation completion
- [ ] Independently solve every newly generated question before verified status.

### 4.5 Explanation-print generation
- [ ] Generate study / worksheet / answer only from verified question/knowledge data.

### 4.6 Bidirectional coverage validator
- [ ] Enforce Question -> Print and Print -> Question 100% knowledge coverage.

### 4.7 App review integration
- [ ] Expose concept / knowledge item IDs and weak-item review linkage.

## publication invariant
Only independently verified material may be published. A verified knowledge item without a verified question mapping remains an explicit Phase 4.3 deficit and does not satisfy publication coverage.