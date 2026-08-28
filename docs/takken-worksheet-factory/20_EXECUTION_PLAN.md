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
- [ ] Decompose every concept into atomic `knowledge_items` with stable IDs, claims, conditions, exceptions, importance, `2026-04-01` cutoff and primary sources.
- [ ] Map existing verified questions only where they genuinely test the knowledge item; missing evidence remains a Phase 4.3 deficit.

Completed checkpoints through this run: business-definition; license-required; license-authority; license-disqualification; license-validity-renewal; license-transfer; license-change-closure; roster; office-signs; takkenshi-registration; takkenshi-card; exclusive-takkenshi; takkenshi-exclusive-duties; business-guarantee-deposit; business-guarantee-refund; guarantee-association; brokerage-contract-document; brokerage-price-opinion; general-brokerage; exclusive-brokerage; sole-agency-brokerage; reins-registration; brokerage-reporting; advertising-start.

Latest checkpoint:
- [x] `takken-concept-advertising-start`: 3 verified items. Article 33 bars advertising for a pre-completion development/building project until the legally required permit/confirmation disposition has actually occurred; representative triggers include Urban Planning Act Article 29 development permission and Building Standards Act Article 6 confirmation; application alone is not enough. Existing `takken-q-18-001` directly tests only the general permit-before-advertising rule and is mapped only to that item. The other two items remain explicit Phase 4.3 deficits.

Current Phase 4.2 totals: 24/113 modeled concepts, 124 verified knowledge items, 20 existing verified questions mapped, 95 explicit question-coverage gaps.

Exact continuation: `takken-concept-contract-start`, source unit `contract-start-time`. Preserve all ninety-five explicit deficits and map existing verified questions only to knowledge they genuinely test. Do not start Phase 4.3 yet.

### 4.3 Fifty-question drill expansion
- [ ] Target 50 verified four-choice questions per concept, reusing verified existing questions and generating only the deficit.
- [ ] Reject superficial number/name/template swaps.

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
