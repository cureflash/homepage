# Worksheet Factory — handoff

Updated: 2026-08-28

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` remains resolved.

All workflows that directly publish the shared worksheet catalog must use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. Preserve `tests/test_worksheet_catalog_writer_concurrency.py`, latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

The new JH2 writer `.github/workflows/math-jh2-publish.yml` is registered in that repository-wide guard.

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

Current JH2 publication: **4 skills / 12 PDFs**.

Latest completed batch:

- `monomial-multiplication` — 単項式の乗法 — 3 PDFs
- `monomial-division` — 単項式の除法 — 3 PDFs
- `polynomial-addition` — 多項式の加法 — 3 PDFs
- `polynomial-subtraction` — 多項式の減法 — 3 PDFs

Each PDF contains 20 problems. The batch preserves deterministic seeds, independent answer recomputation, problem/variant/content-hash duplicate checks, 2-page PDFs, ordinary integer numbering, same-layout red answers, catalog validation, common Factory regression, and the shared catalog-writer concurrency guard.

The first workflow attempt correctly failed because the new JH2 catalog writer was not yet present in the explicit writer allowlist. `tests/test_worksheet_catalog_writer_concurrency.py` was updated to register `math-jh2-publish.yml`, and attempt 2 passed all steps.

- successful workflow run: `33101526841` attempt 2
- publish commit: `f532ab79ec37fdd37372617583fe60f047733c00`

## Exact next starting point

Continue in **中学2年** from the first unfinished skill: **多項式×数**.

The next four candidates are:

1. 多項式×数
2. 式の四則混合
3. 式への代入
4. 連立方程式 加減法 基本

Before crossing into simultaneous equations, confirm placement/scope against current MEXT junior-high mathematics guidance. Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
