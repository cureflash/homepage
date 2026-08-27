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

Current JH2 publication: **16 skills / 48 PDFs**.

Latest completed batch:

- `simultaneous-equations-fractions` — 分数を含む連立方程式 — 3 PDFs
- `linear-function-substitution` — 一次関数 xからyを求める代入 — 3 PDFs
- `linear-function-rate-from-two-points` — 2点から変化の割合 — 3 PDFs
- `linear-function-from-slope-intercept` — 傾きと切片から式を作る — 3 PDFs

Each PDF contains 20 problems. The batch preserves deterministic seeds, `Fraction`/determinant based independent answer recomputation, problem/variant/content-hash duplicate checks, 2-page PDFs, ordinary integer numbering, same-layout red answers, catalog validation, common Factory regression, and the shared catalog-writer concurrency guard.

MEXT「中学校学習指導要領（平成29年告示）解説 数学編」places both simultaneous linear equations and linear functions in Grade 2, so these worksheets remain within the current Grade 2 scope.

- publish commit: `b9061e8f01ef0f91709a8a7744ce3a70c352b09b`

## Exact next starting point

Continue in **中学2年** from the final unfinished planned skill: **2点から一次関数の式を求める数値練習**.

Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
