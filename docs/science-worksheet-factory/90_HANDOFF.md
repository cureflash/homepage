# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from the latest `main`, re-read the science-factory control documents, and resumed formal course `物理` at the exact prior stop point: `剛体のつり合い`. Parallel worksheet-factory updates on `main` were preserved; the implementation was merged by PR rather than resetting newer repository progress.

The current MEXT High School Course of Study Commentary page for the 2018 high-school curriculum was rechecked, and the formal-Physics sequence remains in the rigid-body equilibrium portion after projectile motion. The first rigid-body batch was deliberately limited to force moments that are fully specified by learner-visible perpendicular distances. A reference mechanics source was also checked for the textbook relation that a perpendicular force gives moment magnitude `M = Fd` and that clockwise/counterclockwise moments must balance in static equilibrium.

This run completed **three independent safe checkpoints totaling 90 new PDFs**. A fourth checkpoint was not manufactured because the next natural step is signed multi-force torque equilibrium; that requires an explicit rotation-sign convention and a new uniquely-solvable balance contract rather than another isolated product drill.

### 1. 剛体 — 力のモーメント — 30 PDFs

- Relation: `M = Fd`.
- Geometry is explicit: `d` is the perpendicular distance from the pivot to the force's line of action, with the force perpendicular to the lever arm in the basic model.
- Reuses the existing shared `product` relation.
- 10 deterministic seeds × three targets: direct `M`, reverse `F`, reverse `d`.
- Each worksheet has 20 problems.
- Skill: `rigid-body-force-moment`.

### 2. 剛体 — 重力によるモーメント — 30 PDFs

- Relation: `M = mgd`.
- Fixed gravity: `g = 9.8 m/s²`.
- `d` is the perpendicular distance from the pivot to the weight's line of action.
- Reuses the existing shared `product` relation with three factors.
- 10 deterministic seeds × three targets: direct `M`, reverse mass `m`, reverse `d`.
- Each worksheet has 20 problems.
- Skill: `rigid-body-weight-moment`.

### 3. 剛体 — 偶力のモーメント — 30 PDFs

- Relation: `N = Fℓ` for two equal, parallel and oppositely directed forces.
- `ℓ` is the perpendicular distance between the two lines of action.
- Reuses the existing shared `product` relation.
- 10 deterministic seeds × three targets: direct couple moment `N`, reverse `F`, reverse `ℓ`.
- Each worksheet has 20 problems.
- Skill: `rigid-body-couple-moment`.

## Generator / validation contract

No shared formula relation was added in this run. `scripts/science_physics_rigid_body.py` defines the three new rigid-body topics and `tests/test_science_physics_rigid_body.py` independently verifies:

- exactly 3 checkpoints / 90 worksheet series;
- 20 problems per worksheet;
- deterministic seed regeneration;
- independent answer recalculation from learner-visible values for every target direction;
- corrupted-answer rejection;
- 90/90 normalized-hash uniqueness;
- hash disjointness from all unrelated published worksheet series;
- explicit perpendicular-distance / line-of-action geometry;
- fixed `g = 9.8 m/s²` for the weight-moment checkpoint;
- `formal_course=物理` / `grade=null` through publisher/catalog validation.

The formal-Physics publisher now combines the existing 330 projectile worksheets with these 90 rigid-body worksheets. The publication workflow validates **420 catalog rows / 420 unique content hashes**, answer type `numeric` for all 420, `calculation-basic=170`, `calculation-reverse=250`, and every registered formal-Physics PDF for `%PDF` header, file size greater than 1000 bytes, and two-page structure.

## Implementation / publication

- Implementation PR #136 merge: `e0062280108bd0263e9d653fbb99057cb24f3a7d`.
- Actions run `33048340278`: **success**.
- The run passed shared worksheet tests, shared formula-relation regression tests, the existing 330-series projectile tests, and the new 90-series rigid-body tests before generation.
- Publication produced 90 new formal-Physics PDFs, then reran all tests and completed exact 420-row / 420-unique-hash catalog validation plus all-PDF header/size/two-page checks.
- Latest-main safe-push guard passed.
- Publication commit: `d26669a77c47626e4cb3c9f57157ffd28606c161`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: 870;
- formal `物理`: **420**;
- total published physics: **1578**.

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330;
- `様々な運動：剛体のつり合い`: 90;
- answer type `numeric`: 420;
- 420 unique normalized content hashes.

Every registered formal-Physics PDF passes `%PDF` header, file-size greater than 1000 bytes, and two-page structural checks. Representative screenshot-based visual QA remains pending; structural validation is not treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：剛体のつり合い / 符号付きモーメントのつり合い`**.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT formal-Physics scope and a reliable mechanics reference before adding the equilibrium model.
4. Keep `formal_course=物理` and `grade=null`.
5. Define the learner-visible rotation convention first, for example counterclockwise positive and clockwise negative. The convention must appear in the problem data/description and not only in generator state.
6. Begin with the simplest unique two-force balance about one pivot, e.g. `F1 d1 = F2 d2`, or an equivalent signed-sum-zero relation. Add a shared formula relation only if existing relations cannot represent all direct/reverse targets without hiding derived values.
7. Do not generate any mode with more than one unknown, ambiguous force direction, non-perpendicular geometry, or multiple mathematical answers.
8. If a new shared relation is introduced, add independent direct/reverse regression tests and invalid-case rejection before publication.
9. For every new series, independently recompute answers, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
10. Publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
11. Representative screenshot-based visual QA remains pending.
