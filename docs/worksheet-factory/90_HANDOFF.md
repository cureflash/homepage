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

1. `reduce-fraction` — 約分 — 3 variants / 3 PDFs
2. `unlike-denominator-add` — 異分母分数のたし算 — 3 variants / 3 PDFs
3. `unlike-denominator-sub` — 異分母分数のひき算 — 3 variants / 3 PDFs
4. `fraction-decimal-conversion` — 分数・小数の変換 — 3 variants / 3 PDFs

合計 **4技能・12PDF** を追加公開し、小学5年は現在 **12 skills / 36 PDFs**。

MEXTの現行小学校算数解説で、第5学年に約分・通分と異分母分数の加法・減法が配置されていることを確認してから実装した。分数・小数変換は有限小数へ機械的に変換できる範囲へ限定した。

All four checkpoints use deterministic seeds, independent `Fraction`-based answer recomputation, duplicate/content-hash checks, 2-page PDFs, ordinary integer problem numbering, and answer pages that preserve the problem layout and add answers in red.

- publisher: `scripts/publish_grade5_fraction_core.py`
- test: `tests/test_grade5_fraction_core_publisher.py`
- publish commit: `fce79b0f6b7070848a7edd5448eed0c0e550cd50`
- current Grade 5 publication total: **12 skills / 36 PDFs**

## Exact next starting point

Read:

- `curriculum/elementary/grade-05/STATUS.json`
- `curriculum/elementary/grade-05/PLAN.md`
- `curriculum/elementary/grade-05/HANDOFF.md`

Start with the next unfinished Grade 5 skill: **分数計算混合（この学年までの範囲）**.

If safe in one run, continue through **百分率の基本変換（小数↔百分率） → 割合の基本数値計算 → 学年総復習計算** as up to four consecutive checkpoints. Keep deterministic generation, independent validation, duplicate detection, 2-page printable PDFs, same-layout red answers, catalog/site validation, and Grade 5 workflow regression intact. Do not introduce fraction multiplication/division before Grade 6.
