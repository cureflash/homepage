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

Grade 6 is currently published through **8 skills / 24 PDFs**.

First publication batch:

- 分数×整数
- 分数×分数
- 分数÷整数
- 分数÷分数
- publish commit `3949839d4ff31a62f6438a39d4694c3fccbed871`

Second publication batch:

- 帯分数を含む乗除
- 分数・小数混合計算
- 分数四則混合
- 比を簡単にする
- publish commit `f3fae25c04e32394d397a2f2f57615e1a35d4f03`

Both batches follow deterministic seed generation, independent answer recomputation, duplicate/content-hash checks, 2-page printable PDFs, plain integer problem numbering, same-layout red answers, catalog validation, common Factory regression, and catalog-writer concurrency validation.

## Exact next starting point

Read current Grade 6:

- `curriculum/elementary/grade-06/STATUS.json`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/elementary/grade-06/HANDOFF.md`

Resume at **比の値**.

The next four planned checkpoints are:

1. 比の値
2. 比例式の欠損値計算
3. 文字を使った簡単な式への代入
4. 速さ・時間・道のりの公式代入型計算

Before each new topic, verify current MEXT placement/scope. Maintain the existing deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract. Do not reopen completed Grade 5 or earlier work unless a regression or audit finding requires it.
