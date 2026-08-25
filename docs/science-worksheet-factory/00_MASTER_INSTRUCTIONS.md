# Science Worksheet Factory — master instructions

Purpose: continuously expand `cureflash/homepage` with free, simple repetition-practice science worksheets for junior-high and high-school learners.

## Every run

1. Read latest `main`; never work from stale contents.
2. Recursively list and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order.
3. Also read `docs/worksheet-factory/00_MASTER_INSTRUCTIONS.md`, `10_DESIGN_PRINCIPLES.md`, `20_EXECUTION_PLAN.md`, and `90_HANDOFF.md` so science reuses the math worksheet infrastructure instead of creating a competing pipeline.
4. Read current generator/catalog/site files that will be affected.
5. Resume from `90_HANDOFF.md` and the first unfinished item in `20_EXECUTION_PLAN.md`.
6. Use `curriculum/README.md` and the four subject plans as the authoritative science production map.
7. Production order is fixed unless the user changes it: physics → chemistry → biology → earth science.
8. Within each subject, advance in curriculum order: junior-high grade 1 → grade 2 → grade 3 → corresponding high-school basic course → corresponding high-school advanced course.
9. For high school, retain the formal course metadata (`物理基礎`, `物理`, `化学基礎`, `化学`, `生物基礎`, `生物`, `地学基礎`, `地学`). Do not claim these are fixed to one school year.
10. Before publishing a new topic, verify its placement against current MEXT curriculum guidance or another authoritative educational source.
11. Reuse/generalize the existing worksheet catalog, seeded generation, validation, PDF rendering, and site-listing system whenever possible. Do not maintain a separate duplicate engine for science.
12. Do not knowingly leave `main` broken. Re-check latest `main` immediately before committing and reconcile concurrent changes.
13. Commit safe completed batches with descriptive messages.
14. Before ending every run, update progress and fully rewrite `90_HANDOFF.md` with the exact next starting point.

## Calculation worksheet rule

Calculation worksheets are basic repetition drills. Prefer problems solvable by understanding the relevant formula and substituting values correctly. Do not drift into trick questions or difficult entrance-exam style derivations.

For every suitable quantitative skill, generate many deterministic, genuinely distinct variants. Examples include formula substitution, solving for another variable, unit conversion where curriculum-appropriate, and mixed basic review.

Every numerical answer must be mechanically recomputable and validated independently.

## Memorization worksheet rule

For non-calculation knowledge, quantity comes from repeated retrieval in different directions, not from copying the same question wording.

Use mechanically checkable formats such as:
- term → meaning/property;
- meaning/property → term;
- name → symbol/formula;
- symbol/formula → name;
- condition → substance/phenomenon;
- substance/phenomenon → property;
- classification;
- matching;
- fill-in-the-blank;
- true/false;
- ordering/sequence;
- labeled-diagram identification where deterministic rendering and validation are available.

For a single fact, create reverse-direction and mixed retrieval variants when educationally natural. Progress from focused single-topic drills to unit-mixed and cumulative review.

## Publication rule

A generated science worksheet is publishable only when:
- generation is deterministic from structured spec/seed;
- answer count matches problem count;
- every answer is independently validated;
- units, significant representation rules, symbols, and accepted answer forms are defined where needed;
- printable output succeeds;
- catalog metadata is complete;
- output links resolve;
- no problem-for-problem duplicate is knowingly published under another variant;
- site/catalog validation passes.

This factory is for repetition and basic knowledge retrieval, not explanatory textbooks, essays, long proofs, or difficult integrated exam problems.
