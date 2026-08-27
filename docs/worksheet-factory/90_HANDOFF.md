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

Current JH2 publication: **12 skills / 36 PDFs**.

Latest completed batch:

- `simultaneous-equations-substitution-basic` — 連立方程式 代入法 基本 — 3 PDFs
- `simultaneous-equations-align-coefficients` — 係数をそろえる連立方程式 — 3 PDFs
- `simultaneous-equations-parentheses` — かっこを含む連立方程式 — 3 PDFs
- `simultaneous-equations-decimals` — 小数を含む連立方程式 — 3 PDFs

Each PDF contains 20 problems. The batch preserves deterministic seeds, determinant / `Fraction` based independent answer recomputation, problem/variant/content-hash duplicate checks, 2-page PDFs, ordinary integer numbering, same-layout red answers, catalog validation, common Factory regression, and the shared catalog-writer concurrency guard.

The current MEXT junior-high mathematics guidance places simultaneous linear equations in Grade 2 and requires solving simple simultaneous linear equations. The four worksheets are therefore treated as method/representation variants within that Grade 2 scope.

- publish commit: `6ad3f5ba9175a36451cf0ea5c3e69cb54b269d13`

## Exact next starting point

Continue in **中学2年** from the first unfinished skill: **分数を含む連立方程式**.

The next four candidates are:

1. 分数を含む連立方程式
2. 一次関数 xからyを求める代入
3. 2点から変化の割合を求める
4. 傾きと切片から式を作る基本練習

Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
