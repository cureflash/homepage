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

Completed checkpoints through the last completed concept: business-definition; license-required; license-authority; license-disqualification; license-validity-renewal; license-transfer; license-change-closure; roster; office-signs; takkenshi-registration; takkenshi-card; exclusive-takkenshi; takkenshi-exclusive-duties; business-guarantee-deposit; business-guarantee-refund; guarantee-association; brokerage-contract-document; brokerage-price-opinion; general-brokerage; exclusive-brokerage; sole-agency-brokerage; reins-registration; brokerage-reporting; advertising-start; contract-start; false-advertising; article35-procedure; article35-items; article37-document; article35-vs-37; eight-restrictions-scope; cooling-off; earnest-money-limit; earnest-money-safeguards; damages-penalty; nonconformity-special-rule; unowned-property-sale; installment-cancellation; installment-ownership-retention; brokerage-fees; supervision-dispositions; declaration-arrival; mistake; fraud; duress; mental-reservation; fictitious-declaration; minor; adult-ward; agency; unauthorized-agency; apparent-agency; acquisitive-prescription; extinctive-prescription; property-transfer-opposability; co-ownership; mortgage; default-damages; contract-cancellation; simultaneous-performance; risk-allocation; sale-earnest; civil-nonconformity; lease-general; security-deposit; building-lease-opposability; ordinary-land-lease-term; land-lease-opposability; fixed-term-land-lease; building-lease-term; fixed-term-building-lease; heirs-order; statutory-inheritance-shares; inheritance-deliberation.

Current checkpoint:
- [x] `takken-concept-inheritance-deliberation` is complete. Five Civil Code knowledge items cover the three-month period/start point, the three statutory choices, family-court period extension on request, pre-choice estate investigation, and renunciation by declaration to the family court.
- [x] `takken-q-57-001` maps only to the three-month period/start-point item and the three-options item it directly tests.
- [x] `takken-q-57-002` maps only to the family-court renunciation item it directly tests.
- [x] Period extension and pre-choice estate investigation remain explicit Phase 4.3 deficits because no existing verified question directly measures them.
- [ ] Start `takken-concept-inheritance-renunciation` from source unit `inheritance-acceptance-renunciation`; extract its canonical knowledge items without reassigning existing question mappings merely because the source unit overlaps.

Current Phase 4.2 totals: 74/113 completed concepts, 379 verified knowledge items, 84 existing verified questions mapped, 260 explicit question-coverage gaps.

Exact continuation: start `takken-concept-inheritance-renunciation` from `inheritance-acceptance-renunciation`. Build its canonical knowledge items from primary law, preserving the 2026-04-01 cutoff. Reconcile existing verified evidence only if a question is not already uniquely assigned elsewhere and directly tests the item. Keep Phase 4.3 blocked.

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
