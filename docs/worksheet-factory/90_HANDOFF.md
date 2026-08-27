# Worksheet Factory — handoff

Updated: 2026-08-27

## AUDIT OVERRIDE — P1 concurrent catalog writer

**Severity:** P1 — fix before further worksheet publication.

**Audit evidence:** the enabled standalone science worksheet worker and the enabled GitHub time-routing worker's normal math route both run at the top of the hour during ordinary math hours. Both projects publish into the same repository and mutate the same authoritative `worksheets/catalog.json`. Science's publication workflow performs a latest-main safe push, while math publication workflows also regenerate and commit the shared catalog. Even when non-force Git prevents silent loss, two concurrent writers to one canonical catalog create a recurring race: one run can validate against a catalog snapshot that becomes stale before its publish commit, causing push failures/retries or requiring reconcile after generation.

**Files / ownership boundary:** `worksheets/catalog.json`; `.github/workflows/grade*-publish.yml`; science publication workflows that also update the catalog; `docs/worksheet-factory/90_HANDOFF.md`; `docs/science-worksheet-factory/90_HANDOFF.md`.

**Required correction:** before publishing new Grade 6 PDFs, make catalog publication safe under simultaneous math/science activity. Prefer a repository-level serialization mechanism or a catalog architecture in which independently owned track fragments are generated separately and an aggregate catalog is produced deterministically. If the chosen correction is workflow serialization, it must cover every workflow that writes `worksheets/catalog.json`, not only Grade 6. Do not rely only on "fetch latest main immediately before push" as the ownership model.

**Do not:** do not force-push; do not overwrite a newer catalog; do not disable duplicate/hash validation; do not move science or math entries into hand-maintained catalog patches; do not reopen completed Grade 5 content except as required to validate the shared publication fix.

**Acceptance criteria:**

1. There is one explicit serialization/aggregation contract for all writers of `worksheets/catalog.json`.
2. Two representative math/science publication workflows cannot concurrently publish from independent stale catalog snapshots.
3. Existing catalog rows and stable URLs survive the change unchanged.
4. Catalog validation, duplicate/hash checks, PDF existence checks, and relevant Grade 5/science regressions remain green.
5. A repository search identifies no remaining publication workflow that writes the shared catalog outside the chosen serialization/aggregation contract.

**Tests / searches required:** enumerate every `.github/workflows/*` and publisher that writes `worksheets/catalog.json`; run the shared worksheet-factory validation plus one representative math workflow and one representative science workflow under the new contract; verify non-force latest-main behavior remains intact.

**Resume after audit fix:** continue with小学6年の first unfinished skill **分数×整数** and the existing deterministic generation / independent answer validation / duplicate detection / two-page red-answer publication contract.

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

The AUDIT OVERRIDE above supersedes normal Grade 6 publication until the shared catalog-writer race is corrected. After that correction:

Read:

- `curriculum/elementary/grade-06/STATUS.json`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/elementary/grade-06/HANDOFF.md` if present

Start with the first unfinished Grade 6 skill: **分数×整数**.

Before implementation, confirm Grade 6 placement and scope against the current MEXT elementary mathematics curriculum commentary. Then continue with the existing factory contract: deterministic generation, independent answer validation, duplicate detection, 2-page printable PDF, same-layout red answers, catalog/site validation, and a Grade 6 checkpoint workflow.

Do not reopen completed Grade 5 work unless a regression or audit finding requires it.
