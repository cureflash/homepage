# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 900 PDFs
- total published physics: 2058 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 120 PDFs

All 900 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, numeric answers, 20 problems, and unique normalized content hashes. The formal-Physics publish workflow validates every registered PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — uniform circular motion, 120 PDFs

The current MEXT High School Course of Study Commentary for formal Physics was rechecked. Its circular-motion content handling explicitly includes uniform circular-motion speed, period, angular velocity, centripetal acceleration, and centripetal force, and also says to mention centrifugal force.

Four contiguous machine-verifiable checkpoints were completed, all using the existing reversible `product` relation rather than changing the shared formula solver:

1. `circular-linear-speed-angular-speed-radius` — 30 PDFs
   - `v = rω`
   - direct speed / reverse radius / reverse angular speed
   - 10 deterministic seeds per mode, 20 problems per worksheet
2. `circular-angular-displacement` — 30 PDFs
   - `θ = ωt`
   - direct angular displacement / reverse angular speed / reverse time
   - radians and rad/s are learner-visible
3. `circular-centripetal-acceleration` — 30 PDFs
   - centripetal-acceleration magnitude `a = vω`
   - direct acceleration / reverse speed / reverse angular speed
   - the acceleration is explicitly described as center-directed; the worksheet does not hide a vector sign convention
4. `circular-centripetal-force` — 30 PDFs
   - centripetal-force magnitude `F = ma`
   - direct force / reverse mass / reverse centripetal acceleration
   - the force is explicitly described as the center-directed net force

Implementation and validation:

- implementation PR #160 merged as `d43f7d25a2c497d609f6ac4bba1c6e00a6d6c868`
- publication Actions run `33075511015`: success
- publication commit: `c87bff202ee23ad339a4cb8639066fc36b967684` (`Publish 120 formal Physics circular-motion worksheets`)
- the new circular-motion test registry covers 4 checkpoints / 120 worksheet variants
- tests require deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, 120/120 normalized-hash uniqueness, and disjointness from the existing catalog
- no new shared formula relation was introduced; all four checkpoints use the existing reversible `product` contract
- final publisher validation requires `Formal Physics 900-PDF catalog validation: OK`, 900 unique hashes, numeric answer metadata, and the expected unit/skill/mode counts
- all shared worksheet tests, shared formula-relation tests, projectile tests, rigid-body tests, momentum/collision tests, circular-motion tests, catalog validation, `%PDF`, size, and two-page checks passed in the successful main publication run
- the workflow completed its latest-main parent guard and non-force push successfully

The repository-wide shared catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`; do not bypass it. Parallel non-science progress must continue to be preserved by reconciling onto latest `main` rather than force-updating or rolling back unrelated commits.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 円運動`** with the remaining **period relation**.

1. Start from latest `main`; re-read `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `STATUS.json`, and this HANDOFF, then reconcile any parallel progress.
2. Recheck current MEXT circular-motion wording. Period is explicitly in scope alongside speed, angular velocity, centripetal acceleration, and centripetal force.
3. Define the simplest one-unknown period/angular-speed relation, normally `ω = 2π/T` or an exactly equivalent formulation. Before generation, make the learner-visible π convention and numeric rounding/tolerance contract explicit so independent recomputation is unambiguous.
4. Preserve `formal_course=物理`, `grade=null`, 20 problems per worksheet, the focused two-page PDF layout, deterministic seeds, independent visible-value recomputation, corrupted-answer rejection, normalized-hash uniqueness/collision checks, complete catalog validation, and structural PDF checks.
5. Prefer an existing shared relation only if the fixed `2π` factor can be represented without hidden assumptions. Otherwise add the smallest reversible relation with direct/reverse regression tests, bad-arity/zero-denominator rejection, and independent solver validation.
6. After the period checkpoint, recheck whether the required centrifugal-force mention is better represented as finite-answer retrieval rather than forcing it into the numeric inertial-frame centripetal-force exercises. Keep inertial-frame centripetal force and rotating-frame centrifugal force explicitly distinct.
7. Once the remaining circular-motion coverage is safely complete, continue in curriculum order to single harmonic motion rather than skipping ahead.
8. Preserve `worksheet-catalog-publish-v1` serialization and non-force latest-main push safety.
9. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run reached the configured maximum of four safe contiguous checkpoints (120 PDFs), so it stops here. The next period relation has a new `2π`/rounding contract and is therefore left as the exact next checkpoint rather than being added beyond the run limit.
