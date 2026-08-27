# 宅建 Worksheet Factory — EXECUTION PLAN

This plan is subordinate to `00_MASTER_INSTRUCTIONS.md` and works with `30_QUESTION_AND_QA_SPEC.md`.

## Phase 0 — foundation

- [x] Portable implementation under `qualifications/takken/`
- [x] 2026 exam year / `2026-04-01` law cutoff
- [x] Structured unit model and shared renderer
- [x] Deterministic seeded cloze and A4 print path
- [x] Verified-only public catalog and automated validation
- [x] Canonical question-generation / solve-all QA specification

## Phase 1 — ordered unit generation

- [x] All 90 canonical unit datasets generated in fixed order.
- [x] All remain `pending_factcheck` and unpublished.

The canonical order remains units 1 through 90 as originally defined in this document; later question generation and validation must preserve unit order and must not skip units.

## Phase 2 — four-choice question generation

- [ ] Generate stable-ID four-choice questions from independently testable core facts.
- [ ] Cover every core fact in unit order without skipping.
- [ ] Store exactly four distinct choices, one proposed answer, explanation, fact/source references and `pending_validation` status.
- [ ] Run schema/reference/duplicate/answer-position checks at each safe checkpoint.
- [ ] Do not pad counts with template clones; coverage is fact-based.
- [ ] Keep all unverified questions outside production/public pools.
- [ ] When every core fact in all 90 units is covered, set `question_generation_complete: true` and `generation_complete: true`.

Progress: units 1-77 have 100% core-fact question coverage: 137 facts -> 137 `pending_validation` questions.

Question files:
- `qualifications/takken/data/pending-questions-01-07.js` — 9 questions
- `qualifications/takken/data/pending-questions-08-20.js` — 14 questions
- `qualifications/takken/data/pending-questions-21-27.js` — 14 questions
- `qualifications/takken/data/pending-questions-28-47.js` — 40 questions
- `qualifications/takken/data/pending-questions-48-67.js` — 40 questions
- `qualifications/takken/data/pending-questions-68-77.js` — 20 questions

Current next start: unit 78 `legal-restrictions-comparison`, first uncovered core fact.

## Phase 3 — solve-all independent validation

This phase starts only after Phase 2 is complete.

- [ ] Begin from the first question ID and process strictly in order.
- [ ] Hide stored answer/explanation/source references before independent solving.
- [ ] Independently determine the answer and legal basis, reopening primary/official sources when needed.
- [ ] Then compare against stored answer/explanation.
- [ ] Classify each question individually as `verified`, `needs_revision`, or `rejected`.
- [ ] Repair question/choices/answer/explanation/sources together and independently solve again before any repaired item becomes `verified`.
- [ ] Use 25-question safe checkpoints; target at most about 100 checked questions per run.
- [ ] Track checked and verified counts separately and persist the exact next question ID.
- [ ] Only after every question has been independently re-solved and all revision work is closed may `validation_complete: true` be set.

## Publication invariant

Only independently verified material may be published. `pending_factcheck`, `pending_validation`, `needs_revision`, and `rejected` content must not enter the public catalog or production question pool.
