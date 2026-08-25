# Worksheet Factory — master instructions

Purpose: continuously expand `cureflash/homepage` with free, simple repetition-practice math worksheets from elementary school through high school.

## Every run

1. Read the latest `main`. Never work from stale file contents.
2. Read every Markdown file in `docs/worksheet-factory/` in filename order.
3. Read the current generator/catalog/site files that will be affected.
4. Resume from `90_HANDOFF.md` and the first unfinished item in `20_EXECUTION_PLAN.md`.
5. Work in the defined order. Complete as much as can be safely finished in the run; do not knowingly leave `main` broken.
6. Prefer generation from structured definitions over manually duplicating HTML or hand-authoring individual PDFs.
7. Each worksheet must have mechanically verifiable answers. Do not publish a worksheet whose answer generation/validation fails.
8. Avoid near-identical duplicate files. Variants must differ in actual problem data, not only filename/title.
9. Keep worksheets focused on repetition practice: short instructions, many problems, printable layout, separate answer page or clearly separated answers.
10. Before introducing a grade/topic, verify that the topic placement is consistent with current Japanese curriculum guidance or an authoritative educational source. Do not invent curriculum placement.
11. Preserve existing published URLs where practical. Do not remove existing materials merely to reorganize the site.
12. Run generator/catalog/site validation after every safe batch.
13. Immediately before committing, re-check latest `main` and reconcile concurrent changes.
14. Commit completed batches with descriptive messages.
15. Before ending every run, update `20_EXECUTION_PLAN.md` progress and fully rewrite `90_HANDOFF.md` with the exact next starting point.

## Publication rule

A generated worksheet is publishable only if all of the following are true:

- problem generation succeeds deterministically from its seed/spec;
- every answer can be independently recomputed by validator logic;
- problem count and answer count match;
- printable PDF generation succeeds;
- catalog metadata is complete;
- generated link resolves to an existing file;
- it is not a byte-for-byte or problem-for-problem duplicate of another published variant;
- site/catalog validation passes.

## Scope

Start with arithmetic/algebraic calculation drills. Expand in this order unless the execution plan says otherwise:

1. elementary arithmetic;
2. junior-high calculation;
3. high-school algebra/calculation;
4. only then expand to other mechanically checkable repetition exercises.

This factory is for breadth and repetition practice, not explanatory textbooks or essay-style problems.
