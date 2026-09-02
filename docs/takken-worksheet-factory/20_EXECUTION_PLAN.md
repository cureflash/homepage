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

Completed checkpoints through the last fully reconciled concept: business-definition; license-required; license-authority; license-disqualification; license-validity-renewal; license-transfer; license-change-closure; roster; office-signs; takkenshi-registration; takkenshi-card; exclusive-takkenshi; takkenshi-exclusive-duties; business-guarantee-deposit; business-guarantee-refund; guarantee-association; brokerage-contract-document; brokerage-price-opinion; general-brokerage; exclusive-brokerage; sole-agency-brokerage; reins-registration; brokerage-reporting; advertising-start; contract-start; false-advertising; article35-procedure; article35-items; article37-document; article35-vs-37; eight-restrictions-scope; cooling-off; earnest-money-limit; earnest-money-safeguards; damages-penalty; nonconformity-special-rule; unowned-property-sale; installment-cancellation; installment-ownership-retention; brokerage-fees; supervision-dispositions; declaration-arrival; mistake; fraud; duress; mental-reservation; fictitious-declaration; minor; adult-ward; agency; unauthorized-agency; apparent-agency; acquisitive-prescription; extinctive-prescription; property-transfer-opposability; co-ownership; mortgage; default-damages; contract-cancellation; simultaneous-performance; risk-allocation; sale-earnest; civil-nonconformity; lease-general; security-deposit; building-lease-opposability; ordinary-land-lease-term; land-lease-opposability; fixed-term-land-lease; building-lease-term; fixed-term-building-lease; heirs-order; statutory-inheritance-shares; inheritance-deliberation; inheritance-renunciation; will-effect; reserved-portion; condominium-ownership; real-estate-registration-record; city-quasi-planning-area; area-division; use-districts; city-planning-decision; city-planning-project; development-permission; development-completion; building-confirmation; roads-frontage.

Current checkpoint:
- [x] `takken-concept-roads-frontage` has 9 verified atomic knowledge items against the 2026-04-01 Building Standards Act Article 42 / 43 baseline.
- [x] `takken-q-68-001` is mapped only to `takken-k-roads-frontage-road-width-principle`.
- [x] `takken-q-68-002` is mapped only to `takken-k-roads-frontage-frontage-two-meters`.
- [x] The seven unmeasured road-category / Article 42(2) items remain explicit Phase 4.3 deficits and are not over-mapped.
- [x] Existing Phase 2/3 question text, choices, answers, explanations, source references and validation statuses remain unchanged.
- [x] Phase 4.3 remains unstarted.

Current Phase 4.2 totals: 88/113 fully reconciled concepts, 88 concepts with canonical knowledge items, 453 verified knowledge items, 106 existing verified questions mapped, 298 explicit question-coverage gaps.

Exact continuation: extract canonical knowledge items for `takken-concept-building-coverage-ratio`, using the 2026-04-01 Building Standards Act baseline and existing verified unit 69 evidence. Do not begin Phase 4.3.

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