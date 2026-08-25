# Worksheet Factory — master instructions

Purpose: continuously expand `cureflash/homepage` with free, simple repetition-practice math worksheets from elementary school through high school.

## Every run

1. Read the latest `main`. Never work from stale file contents.
2. Read this file and `10_DESIGN_PRINCIPLES.md`.
3. Scan grade folders under `docs/worksheet-factory/curriculum/` in elementary → junior-high → high-school order. Read only `STATUS.json` until the first grade whose status is not `done` is found.
4. For that active grade only, read its `PLAN.md`, `HANDOFF.md`, and `STATUS.json`, plus generator/catalog/site files that will be affected.
5. Do not read completed grades' `HANDOFF.md` files.
6. Work only on the active grade. Resume from its handoff and first unfinished plan item.
7. Prefer generation from structured definitions over manually duplicating HTML or hand-authoring individual PDFs.
8. Each worksheet must have mechanically verifiable answers. Do not publish a worksheet whose answer generation/validation fails.
9. Avoid near-identical duplicate files. Variants must differ in actual problem data, not only filename/title.
10. Keep worksheets focused on repetition practice: short instructions, many problems, printable layout, problem page first and answer page second.
11. Problem numbers must not look like decimals. Never format them as `01.`, `02.` etc. Use ordinary integers such as `1`, `2`, and separate the number from the expression by layout/spacing rather than a decimal-point-like period.
12. The answer page must preserve the original problem layout and add the answers in red. Do not replace it with an answer-only list.
13. Before introducing a grade/topic, verify that the topic placement is consistent with current Japanese curriculum guidance or an authoritative educational source.
14. For high school, store the formal subject (`数学I`, `数学II`, `数学III`, `数学A`, `数学B`, `数学C`) separately from convenient site grade grouping.
15. Preserve existing published URLs where practical and unrelated tools/pages.
16. Run generator/catalog/site validation after every safe batch.
17. Immediately before committing, re-check latest `main` and reconcile concurrent changes.
18. Commit completed batches with descriptive messages.
19. Before ending every run, update the active grade's `HANDOFF.md` and `STATUS.json`. Use `in_progress` until all acceptance criteria for that grade are met, then set `done`.
20. If every grade is `done`, identify the most recently updated grade from status/handoff metadata, read only that handoff plus shared instructions, and perform legitimate nonduplicate expansion or factory/navigation maintenance.

## Publication rule

A generated worksheet is publishable only if all of the following are true:

- problem generation succeeds deterministically from its seed/spec;
- every answer can be independently recomputed by validator logic;
- problem count and answer count match;
- printable PDF generation succeeds;
- problem numbering follows the non-decimal-looking numbering rule;
- the answer page reproduces the problem layout and adds answers in red;
- catalog metadata is complete;
- generated link resolves to an existing file;
- it is not a byte-for-byte or problem-for-problem duplicate of another published variant;
- site/catalog validation passes.

## Scope

1. elementary arithmetic;
2. junior-high calculation;
3. high-school algebra/calculation;
4. only then other mechanically checkable repetition exercises.

This factory is for breadth and repetition practice, not explanatory textbooks or essay-style problems.
