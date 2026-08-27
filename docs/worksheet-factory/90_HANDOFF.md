# Worksheet Factory — handoff

Updated: 2026-08-27

## Current factory state

The shared worksheet-factory foundation is operational and bulk publication is underway.

Completed active grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done

Current active grade: **小学5年** (`in_progress`).

## Latest completed run

小学5年の次の4 checkpointを連続で完了した。

1. `list-multiples` — 倍数の列挙 — 3 variants / 3 PDFs
2. `greatest-common-divisor` — 最大公約数 — 3 variants / 3 PDFs
3. `least-common-multiple` — 最小公倍数 — 3 variants / 3 PDFs
4. `common-denominator` — 通分 — 3 variants / 3 PDFs

合計 **4技能・12PDF** を追加公開し、小学5年は現在 **8 skills / 24 PDFs**。

MEXTの現行小学校算数解説で、第5学年に倍数・約数、最大公約数・最小公倍数、分数の通分が配置されていることを確認してから実装した。

All four checkpoints use deterministic seeds, independent answer recomputation, duplicate/content-hash checks, 2-page PDFs, ordinary integer problem numbering, and answer pages that preserve the problem layout and add answers in red. The fraction checkpoint additionally verifies exact value equivalence with `Fraction` after common-denominator conversion.

- Grade 5 workflow run: `33041236859`
- publish commit: `e5b8c6adef1e38e3fb28e219e7246d2a05a75ad2`
- current Grade 5 publication total: **8 skills / 24 PDFs**

## Exact next starting point

Read:

- `curriculum/elementary/grade-05/STATUS.json`
- `curriculum/elementary/grade-05/PLAN.md`
- `curriculum/elementary/grade-05/HANDOFF.md`

Start with the next unfinished Grade 5 skill: **約分**.

If safe in one run, continue through **異分母分数のたし算 → 異分母分数のひき算 → 分数・小数の変換** as up to four consecutive checkpoints. Keep deterministic generation, independent `Fraction`-based validation, duplicate detection, 2-page printable PDFs, same-layout red answers, catalog/site validation, and Grade 5 workflow regression intact.
