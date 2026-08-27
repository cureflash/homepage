# Worksheet Factory — handoff

Updated: 2026-08-27

## P1 shared catalog writer audit — resolved

The concurrent-writer risk on the authoritative `worksheets/catalog.json` has been corrected before Grade 6 publication resumes.

All ten enabled workflows that directly stage `worksheets/catalog.json` now share one repository-wide GitHub Actions concurrency key `worksheet-catalog-publish-v1` with `cancel-in-progress: false`.

Covered math workflows are Grade 1 through Grade 5. Covered science workflows are JH1, JH2, JH3, Physics Basics, and formal Physics. Existing latest-main / non-force publication safety is preserved; catalog rows, stable URLs, duplicate/hash validation, and generated PDFs were not hand-patched or weakened.

A static guard at `tests/test_worksheet_catalog_writer_concurrency.py` enumerates the direct catalog-writing workflows, requires the exact known writer set, and rejects any private or uncaptured concurrency group. `.github/workflows/worksheet-catalog-concurrency-audit.yml` reruns that guard when publish workflows change.

Audit validation:

- audit PR #140 merge: `0de819077fbab3ce3d326c69a126ff59ca8bf723`
- catalog concurrency audit run `33053444720`: success
- representative formal-Physics science run `33053444636`: success
- representative Grade 4 math run `33053444726`: success

The P1 audit override is therefore closed. Future worksheet publishers that write the shared catalog must remain inside `worksheet-catalog-publish-v1`; the static audit test is the repository guard against regressions.

## Current math factory state

Completed active grades:

- 小学1年: done
- 小学2年: done
- 小学3年: done
- 小学4年: done
- 小学5年: done

The next active grade is **小学6年**.

The last completed Grade 5 content batch added the final four skills: `fraction-add-sub-mixed`, `decimal-percent-conversion`, `basic-ratio-calculation`, and `grade5-review`, three PDFs each. Grade 5 is complete at 16 skills / 48 PDFs. Its final publication used workflow run `33048183296` success and publish commit `1a8294444b39fd74544c867504fa59a50630ae2c`.

## Exact next starting point

Read the current Grade 6 canonical files first:

- `curriculum/elementary/grade-06/STATUS.json`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/elementary/grade-06/HANDOFF.md` if present

Then start with the first unfinished Grade 6 skill: **分数×整数**.

Before implementation, confirm Grade 6 placement and scope against the current MEXT elementary mathematics curriculum commentary. Continue the existing factory contract: deterministic generation, independent answer validation, duplicate/content-hash detection, two-page printable PDFs, same-layout red answers, full catalog/site validation, and non-force latest-main publication. Every workflow that mutates `worksheets/catalog.json` must remain in the shared `worksheet-catalog-publish-v1` concurrency group.

Do not reopen completed Grade 5 content unless a regression requires it.
