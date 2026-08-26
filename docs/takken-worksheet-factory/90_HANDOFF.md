# 宅建 Worksheet Factory — HANDOFF

## Current state

The portable Takken worksheet foundation is present on `main`, and the first two normal generation batches are complete.

Canonical files:

- `docs/takken-worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/takken-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/takken-worksheet-factory/STATUS.json`
- `docs/takken-worksheet-factory/90_HANDOFF.md`

Canonical implementation:

- `qualifications/takken/`

Implemented foundation:

- portable static shell with relative paths/config separation
- shared structured unit data model
- shared `study / worksheet / answer` renderer
- deterministic seeded cloze selection from explicit `terms`
- A4 print/PDF layout and source notes
- verified-only public catalog
- automated validation at `tests/takken-worksheet-factory-validation.mjs`

## Generated backlog

Queue items 1-20 remain in:

- `qualifications/takken/data/pending-units.js`

Queue items 21-40 were added in:

- `qualifications/takken/data/pending-units-21-40.js`

All 40 units remain `pending_factcheck`. None is published. `qualifications/takken/data/public-catalog.js` is still empty and verified-only.

### Newly generated items 21-40

21. 重要事項説明・35条書面の基本
22. 35条の説明事項と取引類型
23. 37条書面の基本
24. 35条と37条の比較
25. 8種制限の全体像
26. クーリング・オフ
27. 手付額・手付金等の保全
28. 損害賠償額の予定・違約金
29. 契約不適合責任に関する特約制限
30. 自己の所有に属しない宅地建物の売買
31. 割賦販売・所有権留保等
32. 報酬額の制限
33. 監督処分・罰則
34. 意思表示の基本
35. 錯誤
36. 詐欺・強迫
37. 心裡留保・虚偽表示
38. 制限行為能力者
39. 代理
40. 無権代理・表見代理

The batch uses authoritative source candidates centered on:

- e-Gov `宅地建物取引業法`, with `occasion_date=20260401`
- 国土交通省「不動産取引における手付金等の保全について」
- e-Gov `民法`, with `occasion_date=20260401`

These are generation-stage source candidates only. They must be independently reopened during a later explicit FACTCHECK batch before publication.

## Validation state

`tests/takken-worksheet-factory-validation.mjs` has been updated to combine the original 1-20 file and the new 21-40 batch, then validate the complete sequence.

It checks:

- 2026 exam year and `2026-04-01` law cutoff
- exact sequential unit order across both pending batch files
- unique unit/fact/sentence IDs
- required metadata
- HTTPS source records and source-reference resolution
- exact `terms[]` ↔ `{{...}}` placeholder matching
- `pending_factcheck` status consistency
- no pending unit leaking into the public catalog
- renderer verified-only filtering
- deterministic seeded RNG guard
- print/PDF path guard

The local container still cannot clone GitHub because external DNS is unavailable, so do not claim the Node validation has been executed locally or in CI unless a later run actually confirms it.

## Required source baseline

Target: 2026 (令和8) 宅地建物取引士資格試験.

Use `lawAsOf: 2026-04-01` for all generated units.

Primary official source families:

- e-Gov法令検索
- 国土交通省
- 一般財団法人不動産適正取引推進機構（RETIO）
- 法務省
- 国税庁
- 総務省・自治体等

Do not trust prior-year explanations where amendments may change the result.

## Exact next start

Queue item 41:

`civil-prescription` — 時効

Normal next run should resume at item 41 and target the next 20 sequential units (41-60) if authoritative-source generation can be done safely. This will complete the remaining 権利関係 queue through `real-estate-registration`.

Every new unit must remain `pending_factcheck`, be appended to `STATUS.json.unverified_backlog`, and remain outside the public catalog.

## FACTCHECK policy

Do not fact-check the 40-unit backlog automatically. FACTCHECK remains a separate explicit operation requested by the user.
