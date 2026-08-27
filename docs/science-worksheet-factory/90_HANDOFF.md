# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from latest `main`, read the science-factory control documents, all curriculum plans, and the shared worksheet-factory contracts, then resumed at formal course `物理：平面運動・放物運動`.

Current MEXT guidance was rechecked before defining the batch. The High School Course of Study Commentary for Physics states that, after the vertical falling motion covered in Physics Basics, horizontal and oblique projectile motion should be related to rectilinear motion, including velocity, acceleration and gravity, and that projectile motion can be analyzed by decomposing it into horizontal and vertical components. The first formal-Physics batch therefore isolates mechanically exact component relations for horizontal projection instead of repeating the Physics Basics free-fall series.

This run completed **three independent safe checkpoints totaling 90 new PDFs**. A fourth checkpoint was not manufactured: moving from horizontal projection to oblique projection introduces trigonometric components plus explicit sign/rounding conventions and should be designed as the next safety boundary.

### 1. 水平投射 — 水平方向の運動 — 30 PDFs

- Relation: `x = v_x t` with air resistance explicitly excluded.
- Existing shared relation: `product`.
- 10 deterministic seeds × three targets: horizontal displacement `x`, horizontal velocity `v_x`, elapsed time `t`.
- Each worksheet has 20 problems.
- Skill: `horizontal-projectile-horizontal-motion`.

### 2. 水平投射 — 鉛直方向の落下距離 — 30 PDFs

- Relation: `y = 1/2 g t^2`, using the magnitude of downward displacement and `g = 9.8 m/s^2`.
- Existing shared relation: `half-product-last-square`.
- 15 deterministic seeds × two targets: downward drop distance `y`, elapsed time `t`.
- Each worksheet has 20 problems.
- Skill: `horizontal-projectile-vertical-displacement`.

### 3. 水平投射 — 鉛直方向の速度 — 30 PDFs

- Relation: `v_y = g t`, using the magnitude of downward vertical velocity and `g = 9.8 m/s^2`.
- Existing shared relation: `product`.
- 15 deterministic seeds × two targets: downward vertical speed `v_y`, elapsed time `t`.
- Each worksheet has 20 problems.
- Skill: `horizontal-projectile-vertical-velocity`.

## Engineering / validation

- Added `scripts/science_physics_projectile.py`.
- Added `scripts/publish_science_physics.py` as the non-destructive publisher for formal-course Physics.
- Added `tests/test_science_physics_projectile.py`.
- Added `.github/workflows/science-physics-publish.yml` with latest-main guarding, generation, post-generation validation, catalog/PDF checks and safe push.
- No shared generator/relation/renderer/catalog-schema change was required.
- Dedicated test contract checks:
  - exactly three 30-PDF checkpoints / 90 series total;
  - 20 problems per worksheet;
  - deterministic seed regeneration;
  - independent answer recalculation directly from visible known values for every target direction;
  - explicit corrupted-answer rejection for every topic;
  - 90/90 normalized-hash uniqueness;
  - hash disjointness from every previously published worksheet series;
  - explicit air-resistance condition in learner-visible variable labels and descriptions;
  - `g = 9.8 m/s^2` where applicable;
  - no fixed grade metadata in topic definitions.
- Formal Physics catalog invariants require `school_level=high-school`, `formal_course=物理`, `grade=null`, `science_field=physics`, `worksheet_series=focused`, `answer_type=numeric`.
- Implementation PR #124 merge: `725df274f46ed6ac01fe7c9ab5e79615ba40b88a`.
- Actions run `33035639572`: **success**. Shared/topic tests, generation, post-generation tests, exact 90-row catalog validation, 90 unique hashes, all-PDF `%PDF`/size/two-page checks, commit and latest-main safe push all succeeded.
- Publication commit: `851d5da0a45b597496c440499f46e04b9cc0d201`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: 870;
- formal `物理`: **90**;
- total published physics: **1248**.

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 90;
- `calculation-basic`: 40;
- `calculation-reverse`: 50;
- answer type `numeric`: 90;
- 90 unique normalized content hashes.

Every registered formal-Physics PDF passes `%PDF` header, file-size greater than 1000 bytes, and two-page structural checks. Representative screenshot-based visual QA remains pending; structural validation is not treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：平面運動・放物運動`**, now at the remaining planar/projectile-motion scope after horizontal projection.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT `物理` scope before extending projectile formulas.
4. Keep `formal_course=物理` and `grade=null`; never fabricate a fixed high-school year.
5. Prefer **oblique projection** as the next design point, but first define a machine-verifiable contract for initial horizontal/vertical velocity components, allowed angles, exact or rounded trigonometric values, signs and accepted tolerances.
6. Do not disguise the same horizontal-projectile relations as new checkpoints. Add a shared relation only when the relation itself has independent regression tests.
7. For every new series, independently recompute answers from learner-visible values, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
8. Advance up to four contiguous safe checkpoints only when the same unit/shared machinery supports them naturally; do not manufacture checkpoint count.
9. Publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
10. Representative screenshot-based visual QA remains pending.
