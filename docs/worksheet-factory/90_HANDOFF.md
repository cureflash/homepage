# Worksheet Factory — handoff

Updated: 2026-08-27

## Current factory state

The shared worksheet-factory foundation is operational and bulk publication is underway. The old note that generator/catalog implementation had not started is obsolete.

Completed active grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done

The next active grade is **小学5年**.

## Latest completed run

小学4年の最後の3 checkpointを連続で完了した。

1. `large-number-place-value` — 億・兆の位取り — 3 variants / 3 PDFs
2. `rounding-estimation` — 概数・四捨五入 — 3 variants / 3 PDFs
3. `grade4-review` — 小学4年 算数 総復習 — 3 variants / 3 PDFs

All three use deterministic seeds, independent answer recomputation, duplicate/content-hash checks, 2-page PDFs, ordinary integer problem numbering, and answer pages that preserve the problem layout and add answers in red.

Grade 4 final publication total: **19 skills / 57 PDFs**.

The Grade 4 workflow runs all existing Grade 4 publishers, publisher tests, final-checkpoint tests, and `tests/test_worksheet_factory.py`. A transient test-design failure occurred because the combined final-checkpoint test treated the just-generated nine hashes as pre-existing hashes; this was corrected by excluding the three modules' own worksheet IDs from the baseline hash set. The corrected workflow passed and published the nine PDFs.

- successful workflow run: `33034975154`
- publish commit: `353a9652607eae4e177d8fe97d1964ccb1e9113f`

## Exact next starting point

Read:

- `curriculum/elementary/grade-05/STATUS.json`
- `curriculum/elementary/grade-05/PLAN.md`
- `curriculum/elementary/grade-05/HANDOFF.md` if present

Start with the first unfinished Grade 5 skill: **小数×小数**.

Before implementation, confirm its placement and intended scope against the current MEXT elementary mathematics curriculum commentary. Then follow the existing factory contract: deterministic generation, independent answer validation, duplicate detection, 2-page printable PDF, same-layout red answers, catalog/site validation, and checkpoint tests.

Do not reopen completed Grade 4 work unless a regression or audit finding requires it. Do not cross multiple active grades within one run merely to reach a checkpoint count.
