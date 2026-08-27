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
- 中学2年: done

The next active grade is **中学3年**.

## Latest completed run

中学2年の最後のcheckpointを完了した。

- `linear-function-equation-from-two-points` — 2点から一次関数の式を求める — 3 variants / 3 PDFs

2点から傾き `m=(y2-y1)/(x2-x1)` と切片 `b=y1-mx1` を `Fraction` で独立再計算し、`y=mx+b` を再構成する。専用testでは再構成した式が与えた2点の両方を通ることも確認する。

中学2年の最終公開範囲は **17 skills / 51 PDFs**。

- publish commit: `befc3caee100a3dd345a4afd080f4d068fd1bac1`

## Exact next starting point

Read:

- `curriculum/junior-high/grade-03/STATUS.json`
- `curriculum/junior-high/grade-03/PLAN.md`
- `curriculum/junior-high/grade-03/HANDOFF.md` if present

Start from the first unfinished Grade 3 skill. Before implementation, verify the topic placement against the current MEXT junior-high mathematics curriculum. Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.

Do not reopen completed Grade 2 work unless a regression or audit finding requires it.
