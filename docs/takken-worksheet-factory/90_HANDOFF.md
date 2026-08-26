# 宅建 Worksheet Factory — HANDOFF

## Current state

The portable Takken worksheet foundation is now present on `main`, and the first normal generation batch has been completed.

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
- automated validation test at `tests/takken-worksheet-factory-validation.mjs`

## Generated backlog

Queue items 1-20 have been generated into `qualifications/takken/data/pending-units.js`.

They cover:

1. 宅地・建物・宅建業の定義
2. 免許が必要な取引・不要な行為
3. 国土交通大臣免許・都道府県知事免許
4. 免許の欠格事由
5. 免許の有効期間・更新
6. 免許換え・変更届・廃業等
7. 宅建業者名簿・標識等
8. 宅建士資格登録
9. 宅地建物取引士証
10. 専任の宅建士
11. 宅建士の独占業務
12. 営業保証金
13. 営業保証金の還付・不足額
14. 保証協会・弁済業務保証金
15. 媒介契約の基本
16. 一般・専任・専属専任媒介
17. 指定流通機構・業務処理状況報告
18. 広告開始時期
19. 契約締結時期
20. 誇大広告・禁止行為

All 20 units remain `pending_factcheck`. None is published. `qualifications/takken/data/public-catalog.js` remains verified-only and currently contains no units.

## Validation added

`tests/takken-worksheet-factory-validation.mjs` now checks:

- 2026 exam year and `2026-04-01` law cutoff
- sequential unit order
- unique unit/fact/sentence IDs
- required metadata
- HTTPS source records and source-reference resolution
- exact `terms[]` ↔ `{{...}}` placeholder matching
- `pending_factcheck` status consistency
- no pending unit leaking into the public catalog
- renderer verified-only filtering
- deterministic seeded RNG guard
- print/PDF path guard

The GitHub connector session could not execute a local Node checkout because the container had no external DNS access, so do not claim the test script has been executed in CI yet. The test itself is committed and should be run by the next environment with repo execution access; if an existing CI workflow covers `tests/*.mjs`, confirm that run before treating CI as green.

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

Queue item 21:

`article35-basics` — 重要事項説明・35条書面の基本

Normal next run should resume at item 21 and target the next 20 sequential units (21-40) if authoritative-source generation can be done safely. Crossing from 宅建業法 into 権利関係 is allowed to reach the target while preserving queue order.

Every new unit must remain `pending_factcheck`, be appended to `STATUS.json.unverified_backlog`, and remain outside the public catalog.

## FACTCHECK policy

Do not fact-check the 20-unit backlog automatically. FACTCHECK remains a separate explicit operation requested by the user.
