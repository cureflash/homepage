# Worksheet Factory — handoff

Updated: 2026-08-28

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` remains resolved.

All workflows that directly publish the shared worksheet catalog must use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. Preserve `tests/test_worksheet_catalog_writer_concurrency.py`, latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

The JH2 writer `.github/workflows/math-jh2-publish.yml` remains registered in that repository-wide guard.

## Current math factory state

Completed grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done
- 小学6年: done
- 中学1年: done

Active grade: **中学2年** — in progress.

Current JH2 publication: **8 skills / 24 PDFs**.

Latest completed batch:

- `polynomial-times-number` — 多項式×数 — 3 PDFs
- `expression-four-operations` — 式の四則混合 — 3 PDFs
- `expression-substitution` — 式への代入 — 3 PDFs
- `simultaneous-equations-elimination-basic` — 連立方程式 加減法 基本 — 3 PDFs

Each PDF contains 20 problems. The batch preserves deterministic seeds, independent answer recomputation, problem/variant/content-hash duplicate checks, 2-page PDFs, ordinary integer numbering, same-layout red answers, catalog validation, common Factory regression, and the shared catalog-writer concurrency guard. For the basic elimination worksheets, the validator solves the two equations independently from the determinant and the dedicated test substitutes the recovered x/y back into both original equations.

- successful workflow run: `33106457275`
- publish commit: `9e1208009d4caeac07f8f7fa565c06c714eaa4a8`

## Exact next starting point

Continue in **中学2年** from the first unfinished skill: **連立方程式 代入法 基本**.

The next four candidates are:

1. 代入法 基本
2. 係数をそろえる連立方程式
3. かっこを含む連立方程式
4. 小数を含む連立方程式

Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
