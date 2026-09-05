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

### 4.3 Fifty-question drill expansion
- [ ] Target 50 verified four-choice questions per concept, reusing verified existing questions and generating only the deficit.
- [ ] Reject superficial number/name/template swaps.

`takken-concept-business-definition` progress:
- [x] Reused 2 existing independently verified questions.
- [x] Generated 48 new questions; total concept representation is 50/50.
- [x] Independently QA'd `takken-power-q-business-definition-001`–`025`.
- [x] Repaired `013` from unspecified `土地` to `宅地` so the stem unambiguously falls within the statutory subject matter, then re-solved it successfully.
- [x] Promoted `001`–`025` to `verified` after QA.
- [x] Independently QA'd `takken-power-q-business-definition-026`–`048` against the statutory transaction categories.
- [x] Promoted `026`–`048` to `verified`; no repairs were required in this checkpoint.
- [x] Completed this concept at 50/50 represented questions, with all 48 generated questions independently verified.

`takken-concept-license-required` progress:
- [x] Reused 1 existing independently verified question (`takken-q-02-001`).
- [x] Calculated deficit: 49 new questions required for 50 total represented questions.
- [x] Generated first 25-question checkpoint as `takken-power-q-license-required-001`–`025`.
- [x] Generated remaining 24 questions as `takken-power-q-license-required-026`–`049`.
- [x] Reached 50/50 represented questions: 1 reused verified + 49 generated.
- [x] Independently QA'd `takken-power-q-license-required-001`–`025`; all 25 passed without revision and are now `verified`.
- [x] Independently QA'd `takken-power-q-license-required-026`–`049`; all 24 passed without revision or rejection and are now `verified`.
- [x] Completed this concept at 50/50 represented questions, with all 49 generated questions independently verified.

`takken-concept-license-authority` progress:
- [x] Reused 1 existing independently verified question (`takken-q-03-001`).
- [x] Canonical scope confirmed as the 2 knowledge items for multi-prefecture minister authority and single-prefecture governor authority.
- [x] Calculated deficit: 49 new questions required for 50 total represented questions.
- [x] Generated first 25-question checkpoint as `takken-power-q-license-authority-001`–`025`.
- [x] Generated remaining 24 questions as `takken-power-q-license-authority-026`–`049`.
- [x] Reached 50/50 represented questions: 1 reused verified + 49 generated.
- [x] Independently QA'd `takken-power-q-license-authority-001`–`025`; all 25 passed without revision or rejection and are now `verified`.
- [x] Independently QA'd `takken-power-q-license-authority-026`–`049`; all 24 passed without revision or rejection and are now `verified`.
- [x] Completed this concept at 50/50 represented questions, with all 49 generated questions independently verified.

`takken-concept-license-disqualification` progress:
- [x] Reused 1 existing independently verified question (`takken-q-04-001`).
- [x] Canonical scope confirmed as 4 knowledge items: qualifying cancellation and five-year period; hearing-publication/closure avoidance and five-year period; qualifying criminal sentences and five-year period; misconduct within the five years before application.
- [x] Calculated deficit: 49 new questions required for 50 total represented questions.
- [x] Generated first 25-question checkpoint as `takken-power-q-license-disqualification-001`–`025`, all `pending_validation`.
- [x] Generated remaining 24 questions as `takken-power-q-license-disqualification-026`–`049`, all `pending_validation`.
- [x] Reached 50/50 represented questions: 1 reused verified + 49 generated pending QA.
- [ ] Independently QA `takken-power-q-license-disqualification-001`–`025` before promotion.
- [ ] Independently QA `takken-power-q-license-disqualification-026`–`049` before promotion.

Exact continuation: independently solve `takken-power-q-license-disqualification-001`–`025` from the stems and four choices before consulting saved answers/explanations/source refs. Repair and re-solve any defect before `verified` promotion. Do not mark un-QA questions verified.

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
