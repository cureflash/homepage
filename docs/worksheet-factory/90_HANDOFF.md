# Worksheet Factory — handoff

Updated: 2026-08-27

## Shared catalog writer safety

The former P1 concurrent-writer risk on authoritative `worksheets/catalog.json` is resolved.

All workflows that directly publish the shared worksheet catalog use repository-wide GitHub Actions concurrency group `worksheet-catalog-publish-v1` with `cancel-in-progress: false`. The static guard `tests/test_worksheet_catalog_writer_concurrency.py` protects the known writer set and rejects uncaptured/private concurrency groups.

Future worksheet publishers that write the shared catalog must remain inside this concurrency group. Preserve latest-main reconciliation, non-force pushes, catalog/hash validation, and stable URLs.

## Current math factory state

Completed grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done
- 小学6年: done

Elementary planned coverage is now complete through Grade 6.

Grade 6 final total: **15 skills / 45 PDFs**.

Latest completed batch:

- `unit-conversion-numeric` — 単位換算を含む数値練習 — 3 PDFs
- `elementary-four-operations-review` — 小学校6年間の四則総復習 — 3 PDFs
- `five-minute-calculation-challenge` — 5分間計算チャレンジ — 3 PDFs

The timed challenge uses 40 questions per PDF; the other two use 20 questions per PDF. All use deterministic seeds, independent answer recomputation, problem/variant/content-hash duplicate checks, 2-page PDFs, ordinary integer problem numbering, same-layout red answers, catalog validation, common Factory regression, and catalog-writer concurrency validation.

Grade 6 final workflow run `33070402501` succeeded. Publish commit: `13bbc66c66e2069dd1051e4f6a81ada8dc67f1d7`.

## Exact next starting point

The next active grade is **中学1年**.

Read only:

- `curriculum/junior-high/grade-01/STATUS.json`
- `curriculum/junior-high/grade-01/PLAN.md`
- `curriculum/junior-high/grade-01/HANDOFF.md` if present

Start from the first unfinished Grade 1 junior-high calculation skill. Before publishing any new topic, confirm placement against the current MEXT junior-high mathematics curriculum. Continue the same deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation contract and shared catalog-writer concurrency guard.
