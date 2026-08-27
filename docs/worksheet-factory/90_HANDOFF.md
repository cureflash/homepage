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

小学5年の先頭4 checkpointを連続で完了した。

1. `decimal-times-decimal` — 小数×小数 — 3 variants / 3 PDFs
2. `decimal-div-decimal` — 小数÷小数（割り切れる） — 3 variants / 3 PDFs
3. `decimal-mixed-four` — 小数四則混合 — 3 variants / 3 PDFs
4. `list-divisors` — 約数の列挙 — 3 variants / 3 PDFs

合計 **4技能・12PDF** を公開した。

MEXTの現行小学校算数解説で、第5学年に小数の乗法・除法および整数の性質（約数・倍数）が配置されていることを確認してから実装した。

All four checkpoints use deterministic seeds, independent answer recomputation, duplicate/content-hash checks, 2-page PDFs, ordinary integer problem numbering, and answer pages that preserve the problem layout and add answers in red.

- Grade 5 workflow run: `33038004644`
- publish commit: `a166fca1f8a0c72eecb4eb957dac3f0fac371202`
- current Grade 5 publication total: **4 skills / 12 PDFs**

## Exact next starting point

Read:

- `curriculum/elementary/grade-05/STATUS.json`
- `curriculum/elementary/grade-05/PLAN.md`
- `curriculum/elementary/grade-05/HANDOFF.md`

Start with the next unfinished Grade 5 skill: **倍数の列挙**.

If safe in one run, continue through **最大公約数 → 最小公倍数 → 通分** as up to four consecutive checkpoints. Keep deterministic generation, independent answer validation, duplicate detection, 2-page printable PDFs, same-layout red answers, catalog/site validation, and Grade 5 workflow regression intact.
