# 宅建 Worksheet Factory — HANDOFF

## Current state

Initial factory specification has been created. No Takken worksheet unit has been generated yet.

Canonical files:

- `docs/takken-worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/takken-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/takken-worksheet-factory/STATUS.json`
- `docs/takken-worksheet-factory/90_HANDOFF.md`

Canonical implementation target:

- `qualifications/takken/`

## Required source baseline

The current target is the 2026 (令和8)宅地建物取引士資格試験.

RETIO states that the exam is 50-question multiple choice and that the governing law is the law in force as of the exam year's April 1. For 2026 content, use `lawAsOf: 2026-04-01`.

Primary official source families:

- e-Gov法令検索
- 国土交通省
- 一般財団法人不動産適正取引推進機構（RETIO）
- 法務省
- 国税庁
- 総務省・自治体等（地方税等）

Do not trust prior-year exam explanations where legal amendments may have changed the result.

## Next run

1. Pull/read latest `main` and all four canonical files.
2. Inspect whether `qualifications/takken/` already exists due to parallel work.
3. If absent, bootstrap a portable static-site shell there; do not hardcode host/domain/root paths.
4. Implement the minimum structured worksheet generator before hand-authoring repeated pages:
   - shared unit schema
   - `study / worksheet / answer`
   - explicit `{{term}}` / `terms[]` mapping
   - deterministic seed-based blanks
   - A4 print layout
   - source notes
   - verified-only selector/catalog
   - validation tests
5. Once the minimum generator is usable, start execution-plan item 1 and continue sequentially toward the normal 20-unit GENERATE target.
6. Every generated unit stays `pending_factcheck` and unpublished.
7. Update `STATUS.json` and this HANDOFF to exact post-run state.

## Generation policy reminder

Normal scheduled runs do **not** fact-check the backlog merely because it exists. Generate sequential units, accumulate `unverified_backlog`, and leave independent FACTCHECK for explicit instruction.

## Publication policy reminder

Only `verified` units may appear in the learner-facing selector/catalog. `pending_factcheck` data can exist in Git but must remain inaccessible from normal public navigation.

## First content start

Queue item 1:

`takken-gyoho-definition` — 宅地・建物・宅建業の定義

Then continue through items 2–20 during the first normal generation batch if the generator foundation is ready and authoritative source verification at GENERATE-stage is sufficient to create safe pending material.
