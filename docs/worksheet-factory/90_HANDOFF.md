# Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Identified the target repository as `cureflash/homepage` and confirmed the current static-PDF/manual-card publication model.
- Created the worksheet-factory instruction set under `docs/worksheet-factory/`.
- Defined the target architecture: structured curriculum/catalog data → deterministic problem generator → independent answer validator → printable output → generated site listing.
- Researched the current Japanese elementary, junior-high and high-school mathematics curriculum using Ministry of Education (MEXT) curriculum explanations.
- Reviewed Chibimusu Drill's public elementary/junior-high category structure as a demand/taxonomy reference only; its worksheet content/layout/problem sets are not to be copied.
- Added an explicit production map from elementary grade 1 through high-school grade 3 equivalent under `docs/worksheet-factory/curriculum/`.
- Added concrete repetition-drill targets including elementary arithmetic, junior-high algebra, high-school factorization, degree↔radian conversion, trigonometric values, exponent/log calculations, sequences, vectors, differentiation/integration, and complex-number-plane calculations.
- Clarified that high-school grade grouping is a site convenience, while worksheet metadata must retain the formal subject (`数学I/II/III/A/B/C`) because the national curriculum does not fix every subject to a single high-school year.
- Updated master instructions so every scheduled run recursively reads all curriculum Markdown plans.

## Curriculum plan tree

- `curriculum/elementary/grade-01/PLAN.md`
- `curriculum/elementary/grade-02/PLAN.md`
- `curriculum/elementary/grade-03/PLAN.md`
- `curriculum/elementary/grade-04/PLAN.md`
- `curriculum/elementary/grade-05/PLAN.md`
- `curriculum/elementary/grade-06/PLAN.md`
- `curriculum/junior-high/grade-01/PLAN.md`
- `curriculum/junior-high/grade-02/PLAN.md`
- `curriculum/junior-high/grade-03/PLAN.md`
- `curriculum/high-school/grade-01/PLAN.md`
- `curriculum/high-school/grade-02/PLAN.md`
- `curriculum/high-school/grade-03/PLAN.md`

## Implementation status

The curriculum/product map is ready. Generator/catalog implementation has not started yet, and no existing public worksheet/site behavior was changed by the curriculum-planning work.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 0:

1. inventory all current worksheet files and material links;
2. add automatic broken-link/catalog validation;
3. record stable existing worksheet URLs;
4. proceed to Phase 1 structured catalog/list generation;
5. build Phase 2 deterministic generation/answer-validation/duplicate-detection foundation;
6. only then begin bulk publication using `curriculum/elementary/grade-01/PLAN.md` and advance grade by grade.

Do not mass-produce PDFs before the catalog/generator foundation exists. The production map is now explicit, so later runs should implement the factory first and then fill it in mechanically.
