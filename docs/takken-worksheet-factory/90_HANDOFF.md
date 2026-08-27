# 宅建 Worksheet Factory — HANDOFF

## Current state

The ordered 90-unit curriculum generation is complete on this branch. All units remain unverified and unpublished.

Canonical docs:

- `00_MASTER_INSTRUCTIONS.md`
- `20_EXECUTION_PLAN.md`
- `30_QUESTION_AND_QA_SPEC.md`
- `STATUS.json`
- `90_HANDOFF.md`

Canonical implementation:

- `qualifications/takken/`

## Completed in this checkpoint

Generated queue items 81-90 in `qualifications/takken/data/pending-units-81-90.js`:

81. 登録免許税
82. 印紙税
83. 所得税・不動産譲渡の基礎
84. 地価公示法
85. 不動産鑑定評価の基礎
86. 住宅金融支援機構
87. 不動産広告・景品表示等
88. 土地・建物の基礎知識
89. 宅建試験の統計問題
90. 5問免除科目まとめ

Generation-stage sources were selected from official/primary sources including the National Tax Agency, Ministry of Land, Infrastructure, Transport and Tourism, Housing Finance Agency, Geospatial Information Authority of Japan, Real Estate Fair Trade Council, and RETIO. These claims remain `pending_factcheck`; source selection during generation is not independent validation.

`tests/takken-worksheet-factory-validation.mjs` now loads all five unit batches and expects 90 sequential pending units.

## Important phase correction

The old execution plan treated completion of 90 worksheet units as `generation_complete`. That is insufficient for the current explicit instruction to generate questions and then solve every question independently, because every existing unit still has `questions: []`.

Therefore the canonical workflow now distinguishes:

1. unit generation — complete, 90/90;
2. four-choice question generation — not started;
3. solve-all independent validation — must not start until question generation is complete.

`30_QUESTION_AND_QA_SPEC.md` defines the question schema and QA rules. Overall `generation_complete` remains `false` until all independently testable core facts across all 90 units are covered by stored four-choice questions in `pending_validation` state.

## Exact next start

Start Phase 2 question generation at unit 1:

`takken-gyoho-definition`

Generate stable-ID four-choice questions from its uncovered core facts first, then continue strictly in unit order. Do not start solve-all validation yet.

Question generation requirements:

- 4 distinct choices exactly
- one proposed answer
- explanation
- unit/fact/source references
- `examYear: 2026`
- `lawAsOf: "2026-04-01"`
- `validationStatus: "pending_validation"`
- duplicate/reference/answer-index checks
- no public/production exposure before independent validation

When all 90 units have 100% core-fact question coverage, set `question_generation_complete: true` and `generation_complete: true`. The following run then starts with the first question ID and independently solves every question in order without looking at stored answers first.

## Publication invariant

All 90 units and all future generated questions remain unpublished until independently verified. Never bulk-promote pending content to verified.
