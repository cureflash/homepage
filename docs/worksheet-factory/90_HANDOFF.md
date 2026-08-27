# Worksheet Factory — handoff

Updated: 2026-08-27

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` is resolved.

All workflows that directly publish the shared worksheet catalog use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. The static guard `tests/test_worksheet_catalog_writer_concurrency.py` protects the known writer set and rejects uncaptured/private concurrency groups. Grade 6 publisher workflow is included in this guard.

Future worksheet publishers that write the shared catalog must remain inside this concurrency group. Preserve latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

## Current math factory state

Completed grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done

Active grade: **小学6年**.

Grade 6 is currently published through **12 skills / 36 PDFs**.

Publication batches:

- 分数×整数 / 分数×分数 / 分数÷整数 / 分数÷分数 — publish `3949839d4ff31a62f6438a39d4694c3fccbed871`
- 帯分数を含む乗除 / 分数・小数混合計算 / 分数四則混合 / 比を簡単にする — publish `f3fae25c04e32394d397a2f2f57615e1a35d4f03`
- 比の値 / 比例式の欠損値計算 / 文字式への代入 / 速さ・時間・道のりの公式代入 — publish `ee9c3b1094c20f057908b1465494efc4da7588e4`

All batches follow deterministic seed generation, independent answer recomputation, duplicate/content-hash checks, 2-page printable PDFs, plain integer problem numbering, same-layout red answers, catalog validation, common Factory regression, and catalog-writer concurrency validation.

The latest batch was checked against the current MEXT elementary mathematics commentary: Grade 6 explicitly covers ratio and ratio value, use of letters such as `a` and `x` in expressions, and speed.

## Exact next starting point

Read current Grade 6:

- `curriculum/elementary/grade-06/STATUS.json`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/elementary/grade-06/HANDOFF.md`

The remaining planned Grade 6 checkpoints are:

1. 単位換算を含む数値練習
2. 小学校6年間の四則総復習
3. 5分間計算チャレンジ型の総合セット

Next run may complete up to these three checkpoints within the same active grade. If all acceptance criteria pass, mark Grade 6 `done` and move the following run to junior-high Grade 1. Maintain the existing deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
