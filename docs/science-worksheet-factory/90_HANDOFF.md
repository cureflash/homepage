# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from the latest `main`, re-read the science-factory control documents, and resumed formal course `物理：平面運動・放物運動` at the exact prior stop point: oblique-projectile maximum height. Parallel worksheet-factory updates on `main` were preserved; the implementation branch was merged rather than resetting newer repository progress.

The current MEXT High School Course of Study Commentary for Physics was rechecked. Formal `物理` places horizontal and oblique projectile motion under `様々な運動`, states that these motions can be analyzed by decomposing them into vertical and horizontal motion, and places `剛体のつり合い` immediately after `放物運動`. The three new projectile checkpoints remain inside that scope.

This run completed **three independent safe checkpoints totaling 90 new PDFs**. A fourth checkpoint was not manufactured because the natural curriculum boundary now moves from projectile motion to rigid-body equilibrium, which requires a different force/moment model.

### 1. 斜方投射 — 最高点の高さ — 30 PDFs

- Relation: `H = v0y^2 / (2g)`.
- New shared relation: `square-over-double`.
- Fixed gravity magnitude: `g = 9.8 m/s²`.
- Air resistance is explicitly excluded.
- 15 deterministic seeds × two targets: direct `H` and reverse positive `v0y`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-maximum-height`.

### 2. 斜方投射 — 同高度への全飛行時間 — 30 PDFs

- Relation: `T = 2v0y / g`.
- New shared relation: `double-quotient`.
- The learner-facing condition states that the projectile returns to the same height as the launch point and that air resistance is ignored.
- Fixed gravity magnitude: `g = 9.8 m/s²`.
- 15 deterministic seeds × two targets: direct `T` and reverse `v0y`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-same-height-flight-time`.

### 3. 斜方投射 — 同高度への水平到達距離 — 30 PDFs

- Relation: `R = v0x T`.
- Reuses the existing shared `product` relation; no unnecessary new algebraic relation was added.
- The learner-facing condition states that the projectile returns to the same height as the launch point and that air resistance is ignored.
- 10 deterministic seeds × three targets: direct `R`, reverse `v0x`, reverse `T`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-same-height-horizontal-range`.

## Shared generator change / regression contract

`scripts/science_worksheet_helpers.py` now includes two new explicit shared relations:

- `square-over-double`: `result = numerator^2 / (2 * divisor)`; direct evaluation, positive-principal numerator inversion, and divisor inversion are mechanically defined with invalid zero/negative cases rejected.
- `double-quotient`: `result = 2 * numerator / divisor`; direct evaluation and both reverse directions are mechanically defined with zero-divisor/zero-result ambiguity rejected where necessary.

`tests/test_science_formula_relations.py` independently exercises the direct and reverse calculations and invalid arity. The formal-Physics projectile test now covers **11 checkpoints / 330 worksheet series**, including:

- 20 problems per worksheet;
- deterministic seed regeneration;
- independent answer recalculation from learner-visible known values for every published target direction;
- corrupted-answer rejection;
- 330/330 normalized-hash uniqueness;
- hash disjointness from unrelated published worksheet series;
- explicit air-resistance conditions;
- explicit same-height conditions for the flight-time/range sets;
- `formal_course=物理` / `grade=null`.

## Implementation / publication

- Implementation PR #134 merge: `f6e8c642455c720cb36a0ab6d471012a39e70ec1`.
- Before PR merge, the source/relation/topic regression run passed the shared worksheet tests, relation tests, and the full 330-series projectile test. Temporary branch workflow scaffolding used only to obtain a clean runner was removed before the PR; it is not part of `main`.
- Actions run `33045145115`: **success**.
- Successful publication covered shared worksheet tests, relation regression tests, all formal-Physics projectile tests, 90-PDF generation, post-generation revalidation, exact 330-row catalog validation, 330 unique hashes, all registered formal-Physics PDF `%PDF` headers, size >1000 bytes, two-page structure, commit, and latest-main safe push.
- Publication commit: `7cdac624ecc1ba93fb6479fe10c34fad1ddc3314`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: 870;
- formal `物理`: **330**;
- total published physics: **1488**.

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330;
- answer type `numeric`: 330;
- 330 unique normalized content hashes.

Every registered formal-Physics PDF passes `%PDF` header, file-size greater than 1000 bytes, and two-page structural checks. Representative screenshot-based visual QA remains pending; structural validation is not treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：剛体のつり合い`**.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT `物理` scope. The commentary places `剛体のつり合い` immediately after `放物運動` and requires understanding the equilibrium conditions of an extended rigid body.
4. Keep `formal_course=物理` and `grade=null`.
5. Begin with the simplest mechanically verifiable force-moment model, likely a single perpendicular force and lever arm (`M = Fd`) before introducing signed sums of moments or angled forces.
6. Define learner-visible sign/rotation conventions explicitly before any clockwise/counterclockwise balance problems. Do not hide geometric assumptions in generator-only state.
7. Prefer a direct/reverse numeric checkpoint only if all targets have unique answers from learner-visible values. If a balance equation introduces multiple unknowns or ambiguous geometry, reject that mode rather than increasing PDF count.
8. For every new series, independently recompute answers, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
9. Publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
10. Representative screenshot-based visual QA remains pending.
