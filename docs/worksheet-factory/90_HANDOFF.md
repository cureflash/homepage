# Worksheet Factory — handoff

Updated: 2026-08-27

## Current factory state

The shared worksheet-factory foundation is operational and bulk publication is underway.

Completed active grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done

The next active grade is **小学6年**.

## Latest completed run

小学5年の最後の4 checkpointを連続で完了した。

1. `fraction-add-sub-mixed` — 分数計算混合 — 3 variants / 3 PDFs
2. `decimal-percent-conversion` — 小数・百分率の変換 — 3 variants / 3 PDFs
3. `basic-ratio-calculation` — 割合の基本数値計算 — 3 variants / 3 PDFs
4. `grade5-review` — 小学5年 算数 総復習 — 3 variants / 3 PDFs

合計 **4技能・12PDF** を追加公開し、小学5年は **16 skills / 48 PDFs** で計画済み範囲を完了した。

MEXTの現行小学校学習指導要領解説・算数編で、第5学年に割合・百分率を用いた表し方と割合を求める内容が配置されていることを確認した。分数計算混合は第5学年の加法・減法だけに限定し、分数乗除は小学6年へ送った。

All four checkpoints use deterministic seeds, independent `Fraction`-based answer recomputation, duplicate/content-hash checks, 2-page PDFs, ordinary integer problem numbering, and answer pages that preserve the problem layout and add answers in red.

- publisher: `scripts/publish_grade5_final_four.py`
- test: `tests/test_grade5_final_four_publisher.py`
- workflow run: `33048183296` success
- publish commit: `1a8294444b39fd74544c867504fa59a50630ae2c`
- final Grade 5 publication total: **16 skills / 48 PDFs**

## Exact next starting point

Read:

- `curriculum/elementary/grade-06/STATUS.json`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/elementary/grade-06/HANDOFF.md` if present

Start with the first unfinished Grade 6 skill: **分数×整数**.

Before implementation, confirm Grade 6 placement and scope against the current MEXT elementary mathematics curriculum commentary. Then continue with the existing factory contract: deterministic generation, independent answer validation, duplicate detection, 2-page printable PDF, same-layout red answers, catalog/site validation, and a Grade 6 checkpoint workflow.

Do not reopen completed Grade 5 work unless a regression or audit finding requires it.
