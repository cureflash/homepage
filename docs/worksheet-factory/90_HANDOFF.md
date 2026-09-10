# Worksheet Factory — handoff

Updated: 2026-09-10

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` remains resolved.

All workflows that directly publish the shared worksheet catalog must use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. Preserve `tests/test_worksheet_catalog_writer_concurrency.py`, latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

The JH3 writer `.github/workflows/math-jh3-publish.yml` remains registered in that repository-wide guard.

## Current math factory state

Completed grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done
- 小学6年: done
- 中学1年: done
- 中学2年: done

The active grade is 中学3年.

## Latest completed run

中学3年の次の4 checkpointを検証・公開した。

1. `factor-difference-squares` — 和と差の積型の因数分解 — 3 variants / 3 PDFs
2. `expansion-factorization-mixed-100` — 展開・因数分解混合100問 — 3 variants / 3 PDFs
3. `square-root-basic-value` — 平方根の基本値 — 3 variants / 3 PDFs
4. `simplify-radical` — 根号の簡単化 — 3 variants / 3 PDFs

中学3年の公開範囲は現在 12 skills / 36 PDFs。

- publish commit: `5225474c2688657a9ee38f2f551604032d414199`
- validation workflow run: `34491208403` success
- PR #814: displayed-problem deduplication and bounded generation
- PR #817: direct-script validation runner repair

## Exact next starting point

Read:

- `curriculum/junior-high/grade-03/STATUS.json`
- `curriculum/junior-high/grade-03/PLAN.md`
- `curriculum/junior-high/grade-03/HANDOFF.md`

Start from 根号の乗除. If safe, continue through 根号の加減 → 分母の有理化 → 平方根四則混合 for up to four checkpoints.

Continue the deterministic generator → independent validator → displayed-problem duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
