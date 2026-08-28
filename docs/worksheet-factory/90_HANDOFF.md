# Worksheet Factory — handoff

Updated: 2026-08-28

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` remains resolved.

All workflows that directly publish the shared worksheet catalog must use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. Preserve `tests/test_worksheet_catalog_writer_concurrency.py`, latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

The JH3 writer `.github/workflows/math-jh3-publish.yml` is registered in that repository-wide guard.

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

The active grade is **中学3年**.

## Latest completed run

中学3年の展開・因数分解を4 checkpoint連続で進めた。

1. `difference-of-squares-expansion` — `(a+b)(a-b)` の展開 — 3 variants / 3 PDFs
2. `factor-common-factor` — 共通因数でくくる因数分解 — 3 variants / 3 PDFs
3. `factor-x2-sum-product` — `x^2+(a+b)x+ab` 型の因数分解 — 3 variants / 3 PDFs
4. `factor-square-formula` — 平方公式型の因数分解 — 3 variants / 3 PDFs

中学3年の公開範囲は現在 **8 skills / 24 PDFs**。

- publish commit: `4f77b081a34bfe50fdcc0c86b1bcaab9f4eecb4c`

## Exact next starting point

Read:

- `curriculum/junior-high/grade-03/STATUS.json`
- `curriculum/junior-high/grade-03/PLAN.md`
- `curriculum/junior-high/grade-03/HANDOFF.md`

Start from **和と差の積型の因数分解**. If safe, continue through **展開・因数分解混合100問系 → 平方根の基本値 → 根号の簡単化** for up to four checkpoints.

Before entering square roots, verify current MEXT Grade 3 placement. Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
