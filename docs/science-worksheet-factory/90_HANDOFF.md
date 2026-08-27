# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from the latest `main`, re-read the science-factory control documents plus the shared worksheet-factory instructions, and resumed formal course `物理：平面運動・放物運動` at the exact prior stop point: oblique-projectile vertical displacement.

The current MEXT High School Course of Study Commentary for Physics was rechecked. Formal `物理` places horizontal and oblique projectile motion under `様々な運動`, treats velocity, acceleration and gravity in those motions, and explicitly states that horizontal/oblique projectile motion can be analyzed by decomposing it into vertical and horizontal motion. The new checkpoints remain inside that scope.

This run completed **two independent safe checkpoints totaling 60 new PDFs**. It did not manufacture a third/fourth checkpoint because the next natural topic, maximum height, requires another new shared algebraic relation and is therefore the next clean safety boundary.

### 1. 斜方投射 — 鉛直変位 — 30 PDFs

- Upward-positive relation: `y = v0y t + 1/2 ay t^2`.
- Fixed signed vertical acceleration: `ay = -9.8 m/s²`.
- Air resistance is explicitly excluded in learner-facing descriptions/labels.
- New shared relation: `linear-plus-half-quadratic`.
- 15 deterministic seeds × two targets: direct `y` and reverse `v0y`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-vertical-displacement`.
- Values are chosen so the generated basic displacement range remains positive and simple.
- Time inversion is **not** exposed: solving the quadratic for `t` can produce multiple roots and would violate the one-answer worksheet contract.

### 2. 斜方投射 — 最高点到達時間 — 30 PDFs

- At the highest point `vy = 0`; with gravity magnitude `g = 9.8 m/s²`, use `v0y = g t`.
- Existing shared relation: `product`.
- Air resistance is explicitly excluded.
- 15 deterministic seeds × two targets: direct time to highest point and reverse `v0y`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-time-to-highest-point`.

## Shared generator change / regression contract

`scripts/science_worksheet_helpers.py` now includes `linear-plus-half-quadratic` as an explicit shared formula relation.

Supported operations for this relation:

- result: `result = linear_rate * time + 1/2 * acceleration * time^2`;
- reverse linear rate: `(result - 1/2 * acceleration * time^2) / time`;
- reverse acceleration: `2 * (result - linear_rate * time) / time^2`;
- reverse time: intentionally rejected because the general quadratic is not single-valued.

`tests/test_science_formula_relations.py` was added to independently test direct evaluation, reverse linear-rate calculation, reverse acceleration calculation, rejection of ambiguous time inversion, and invalid arity. The formal-Physics projectile test now covers **8 checkpoints / 240 worksheet series**, including:

- 20 problems per worksheet;
- deterministic seed regeneration;
- independent answer recalculation from learner-visible known values for every published target direction;
- corrupted-answer rejection;
- 240/240 normalized-hash uniqueness;
- hash disjointness from unrelated published worksheet series;
- explicit air-resistance conditions;
- `formal_course=物理` / no fixed grade;
- signed `ay=-9.8 m/s²` where used;
- positive/basic-range checks for the new vertical-displacement set.

## Implementation / publication

- Main implementation PR #132 merge: `b39253057c206c4611039d35fe69127e58ffa958`.
- The first Actions attempt for run `33041609705` found a test-launch issue only: the new standalone regression test lacked the repository-root `sys.path` setup used by the existing formal-Physics test.
- Test-only fix PR #133 merge: `36085fe1666fc61e36c744584ce7d208e2eb8b56`.
- Actions run `33041609705`, attempt 2: **success**.
- Successful run covered shared worksheet tests, new relation regression tests, all formal-Physics projectile tests, 60-PDF generation, post-generation revalidation, exact 240-row catalog validation, 240 unique hashes, all registered formal-Physics PDF `%PDF` headers, size >1000 bytes, two-page structure, commit, and latest-main safe push.
- Publication commit: `87c0d61dd75f3aeb880f2dceaaeff349ee5b23fa`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: 870;
- formal `物理`: **240**;
- total published physics: **1398**.

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 240;
- answer type `numeric`: 240;
- 240 unique normalized content hashes.

Every registered formal-Physics PDF passes `%PDF` header, file-size greater than 1000 bytes, and two-page structural checks. Representative screenshot-based visual QA remains pending; structural validation is not treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：平面運動・放物運動`**, after vertical displacement and time to highest point.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT `物理` scope before extending formulas.
4. Keep `formal_course=物理` and `grade=null`.
5. Next design target: **maximum height** `H = v0y^2 / (2g)` for a projectile returning to the launch-level reference framework.
6. Define a mechanically invertible shared relation such as a square-over-double relation, or an equally explicit dedicated generator/validator. Direct `H` and reverse `v0y` are the natural single-answer targets; do not invent reverse modes only to increase PDF count.
7. If that relation and tests are safe, the next likely contiguous checkpoint is same-level total flight time `T = 2v0y/g`, followed by horizontal range using previously established horizontal-component relations. Keep each checkpoint independently recomputable from learner-visible values and reject near-duplicate content.
8. For every new series, independently recompute answers, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
9. Publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
10. Representative screenshot-based visual QA remains pending.
