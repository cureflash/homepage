# Worksheet Factory — handoff

Updated: 2026-08-28

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` remains resolved.

All workflows that directly publish the shared worksheet catalog must use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. Preserve `tests/test_worksheet_catalog_writer_concurrency.py`, latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

## Current math factory state

Completed grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done
- 小学6年: done
- 中学1年: done

中学1年の計画済み範囲は **20 skills / 60 PDFs** で完了した。

Latest completed batch:

- `linear-equation-decimal` — 小数を含む一次方程式 — 3 PDFs
- `linear-equation-fraction` — 分数を含む一次方程式 — 3 PDFs
- `proportion-equation` — 比例式型の方程式 — 3 PDFs
- `proportional-inverse-substitution` — 比例・反比例の式への代入 — 3 PDFs

各PDFは20問。deterministic seed、independent answer recomputation、problem/variant/content-hash duplicate checks、2-page PDFs、ordinary integer numbering、same-layout red answers、catalog validation、common Factory regression、catalog-writer concurrency validationを維持した。

Publish commit: `8a3db9e099779331662d2cb43822113b658667d2`.

## Exact next starting point

The next active grade is **中学2年**.

Read only:

- `curriculum/junior-high/grade-02/STATUS.json`
- `curriculum/junior-high/grade-02/PLAN.md`
- `curriculum/junior-high/grade-02/HANDOFF.md` if present

Start from the first unfinished Grade 2 junior-high skill. The first four candidates are:

1. 単項式の乗法
2. 単項式の除法
3. 多項式の加法
4. 多項式の減法

Before publication, confirm placement against the current MEXT junior-high mathematics curriculum. Continue the deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
