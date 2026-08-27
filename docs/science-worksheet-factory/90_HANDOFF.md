# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from latest `main`, re-read the science-factory control state and formal-Physics projectile implementation, then resumed at `物理：平面運動・放物運動` after the horizontal-projectile batch.

Current MEXT High School Course of Study Commentary for Physics was rechecked. It places both horizontal and oblique projectile motion in formal course `物理` and explicitly describes analysis by decomposing the motion into horizontal and vertical components. This run therefore continued with the first mechanically exact oblique-projection relations instead of moving to another unit.

This run completed **three independent safe checkpoints totaling 90 new PDFs**. A fourth checkpoint was intentionally not manufactured because the next relation, vertical displacement `y = v0y t - 1/2 g t^2`, introduces a new mixed linear-plus-quadratic relation that is not currently supported by the shared formula solver.

### 1. 斜方投射 — 初速度の水平成分 — 30 PDFs

- Relation: `v0x = v0 cos(theta)` with air resistance excluded.
- Existing shared relation: `product`.
- Trigonometric ratio is learner-visible and limited to values corresponding to 30°, 45°, 60°: `0.5`, `sqrt(2)/2`, `sqrt(3)/2` as numeric values.
- 10 deterministic seeds × three targets: `v0x`, `v0`, `cos(theta)`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-initial-horizontal-component`.

### 2. 斜方投射 — 初速度の鉛直成分 — 30 PDFs

- Relation: `v0y = v0 sin(theta)` with air resistance excluded.
- Existing shared relation: `product`.
- Same learner-visible 30°/45°/60° trigonometric-ratio set.
- 10 deterministic seeds × three targets: `v0y`, `v0`, `sin(theta)`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-initial-vertical-component`.

### 3. 斜方投射 — 鉛直速度 — 30 PDFs

- Relation: `vy = v0y + ay t`, with upward-positive sign convention and `ay = -9.8 m/s²`.
- Existing shared relation: `offset-product`.
- Air resistance is explicitly excluded.
- 10 deterministic seeds × three targets: `vy`, `v0y`, `t`.
- Each worksheet has 20 problems.
- Skill: `oblique-projectile-vertical-velocity`.

## Engineering / validation

- Updated `scripts/science_physics_projectile.py`.
- Updated `tests/test_science_physics_projectile.py`.
- Updated `.github/workflows/science-physics-publish.yml`.
- No shared generator/relation/renderer/catalog-schema change was required.
- Dedicated test contract now covers all six formal-Physics projectile checkpoints / 180 worksheet series and checks:
  - 20 problems per worksheet;
  - deterministic seed regeneration;
  - independent answer recalculation directly from learner-visible known values for every target direction;
  - corrupted-answer rejection for every topic;
  - 180/180 normalized-hash uniqueness;
  - hash disjointness from every unrelated previously published worksheet series;
  - explicit air-resistance condition;
  - fixed upward-positive sign convention and `ay = -9.8 m/s²` for the new vertical-velocity series;
  - no fixed grade metadata.
- Implementation PR #128 merge: `0d53b4ca0aed02cf506ac7007278bdb3ec584255`.
- Actions run `33038368676`: **success**. Shared/topic tests, generation, post-generation tests, exact 180-row catalog validation, 180 unique hashes, all-PDF `%PDF`/size/two-page checks, commit and latest-main safe push all succeeded.
- Publication commit: `383c30b1a97aafed1a247ae99876dc3c4d9c1129`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: 870;
- formal `物理`: **180**;
- total published physics: **1338**.

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 180;
- answer type `numeric`: 180;
- 180 unique normalized content hashes.

Every registered formal-Physics PDF passes `%PDF` header, file-size greater than 1000 bytes, and two-page structural checks. Representative screenshot-based visual QA remains pending; structural validation is not treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：平面運動・放物運動`**, now after the initial oblique-projectile component/vertical-velocity batch.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT `物理` scope before extending formulas.
4. Keep `formal_course=物理` and `grade=null`; never fabricate a fixed high-school year.
5. Next design target: **oblique-projectile vertical displacement** `y = v0y t - 1/2 g t^2` (or equivalent upward-positive form).
6. Because that relation mixes a linear term and a squared term, first define a mechanically invertible shared relation or a dedicated generator/validator with independent regression tests. Do not encode hidden constants or silently round learner-visible values.
7. Once that foundation is safe, likely contiguous checkpoints are highest-point time/height, total flight time for same-level landing, and horizontal range, but only if each is independently recomputable from visible values and does not duplicate earlier component drills.
8. For every new series, independently recompute answers, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
9. Publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
10. Representative screenshot-based visual QA remains pending.
