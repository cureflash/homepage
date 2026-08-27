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

## Phase 4 — Power宅建 knowledge / print / app integration

**Do not begin Phase 4 until Phase 2 and Phase 3 are fully complete.** The current direction must be finished first. The canonical specification for this phase is `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`.

### 4.1 Concept inventory

- [ ] Extract all exam-relevant terms, rules, institutions, numerical requirements, exceptions and comparison axes from the 90 units, verified core questions and official exam scope.
- [ ] Normalize them into exam-level `exam_concept` units rather than treating isolated words/numbers as separate 50-question topics.
- [ ] Build a canonical concept inventory with an initial expected scale of roughly 250-300 concepts; record the actual count rather than forcing the estimate.
- [ ] Assign category, importance, law cutoff and primary-source ownership.

### 4.2 Canonical knowledge items

- [ ] Decompose each exam concept into atomic `knowledge_items` for rules, conditions, actors, deadlines, numbers, exceptions and comparison points.
- [ ] Give every knowledge item a stable ID and primary-source references.
- [ ] Map existing verified Phase 2/3 questions into the new concept / knowledge graph instead of discarding them.

### 4.3 Fifty-question drill expansion

- [ ] Target 50 verified four-choice questions per exam concept.
- [ ] Reuse existing verified questions where they fit; generate only the missing questions.
- [ ] Allow deliberate content repetition for important knowledge items, but reject superficial template/number/name swaps used only to inflate count.
- [ ] Diversify direct knowledge, false-statement, scenario, comparison, exception/count/combination and cross-topic forms.
- [ ] Every question must carry `concept_id`, `knowledge_refs[]`, a detailed explanation, distractor explanations and primary-source refs.

### 4.4 Question-first QA and explanation completion

- [ ] Independently solve every newly generated question before it becomes verified.
- [ ] Finalize `detailed_explanation` and `knowledge_refs` only after QA.
- [ ] Track verified question coverage per knowledge item and ensure important items receive repeated practice.

### 4.5 Explanation-print generation

- [ ] Generate each concept's study print only from verified knowledge items actually referenced by verified questions.
- [ ] Merge duplicate explanations for readability while preserving all conditions/exceptions required by the questions.
- [ ] Generate study / worksheet / answer modes from the same canonical knowledge data.
- [ ] Add comparison tables, timelines, actor/relationship diagrams and rule/exception boxes where they improve learning.

### 4.6 Bidirectional coverage validator

- [ ] Enforce Question -> Print 100% coverage: every knowledge item required by a verified question appears in that concept's study print.
- [ ] Enforce Print -> Question 100% coverage: every testable knowledge item printed is referenced by at least one verified question.
- [ ] Permit one knowledge item to map to multiple questions; repetition is expected for important knowledge.
- [ ] Block publication on orphan questions, orphan print knowledge, unverified sources or unresolved law-version mismatches.

### 4.7 App review integration

- [ ] Expose concept / knowledge item IDs to the app question bank.
- [ ] Record performance at both question and knowledge-item level.
- [ ] Allow re-solving wrong questions and prioritizing alternate questions sharing the same weak knowledge item.
- [ ] Surface the detailed question explanation after answering and link back to the corresponding explanation-print concept.

## Publication invariant

Only independently verified material may be published. `pending_factcheck`, `pending_validation`, `needs_revision`, and `rejected` content must not enter the public catalog or production question pool.
