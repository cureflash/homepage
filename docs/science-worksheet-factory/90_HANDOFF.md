# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 780 PDFs
- total published physics: 1938 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs

All 780 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, numeric answers, 20 problems, and unique normalized content hashes. The formal-Physics publish workflow validates every registered PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — full momentum conservation and collision follow-up, 100 PDFs

The current MEXT High School Course of Study Commentary for formal Physics was rechecked. It requires momentum/impulse and momentum conservation, then collision and mechanical-energy change; its content-handling note explicitly includes the coefficient of restitution. The same current MEXT material states that the following circular-motion section covers uniform circular-motion speed, period, angular speed, centripetal acceleration, and centripetal force, with centrifugal force also mentioned.

Three contiguous machine-verifiable checkpoints were completed:

1. `momentum-conservation-two-body-velocity` — 40 PDFs
   - full one-dimensional relation `m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂`
   - exactly one unknown velocity in each problem
   - direct `v₂` plus reverse `u₁`, `u₂`, or `v₁`
   - right-positive/left-negative direction is learner-visible
   - external-force impulse being negligible is learner-visible
   - no hidden initial-at-rest assumption; velocity pools intentionally exclude zero
   - new shared reversible relation `two-body-momentum-conservation`
   - mass inversion is intentionally unsupported; masses must be positive and arity must be exactly five unique inputs
2. `collision-coefficient-of-restitution` — 30 PDFs
   - `相対離れる速さ = e × 相対近づく速さ`, `0≦e≦1`
   - direct separation relative speed / reverse coefficient / reverse approach relative speed
   - relative approach/separation speeds are learner-visible positive magnitudes to avoid hidden sign ambiguity
   - existing reversible `product` relation reused
3. `collision-kinetic-energy-loss` — 30 PDFs
   - `K減少 = K前 - K後` for the two-body total kinetic energy before and after collision
   - direct energy decrease / reverse initial total kinetic energy / reverse final total kinetic energy
   - generated ranges guarantee a positive loss in this basic checkpoint
   - learner-facing description explicitly distinguishes momentum conservation from kinetic-energy conservation
   - existing reversible `difference` relation reused

Implementation and validation:

- the first checkpoint was merged by PR #151; formal-Physics Actions run `33070787706` succeeded
- first publication commit: `8bdf22487195a8474e48f14dea31d2dc0afc0a1e` (`Publish 40 formal Physics two-body momentum worksheets`)
- the two collision checkpoints were merged by PR #155 after repeated latest-main reconciliation with concurrent non-science updates; merge commit: `3a246e16745fcd921546c4ca5d6ad816fa396626`
- collision publication Actions run `33071405515`: success
- final publication commit: `f1038fc5a2eb05702057eb47a0b4c8657caf51d2` (`Publish 60 formal Physics collision worksheets`)
- the momentum/collision test registry now covers 8 checkpoints / 250 worksheet variants
- tests require deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, valid restitution bounds, positive collision-energy decrease for that checkpoint, 250/250 normalized-hash uniqueness, and collision disjointness from the existing catalog
- the new shared two-body relation has direct/reverse regression tests plus bad-arity, mass-inversion, and zero/nonpositive-mass rejection
- final publisher validation reported `Formal Physics 780-PDF catalog validation: OK`
- all shared worksheet tests, shared formula-relation tests, projectile tests, rigid-body tests, momentum/collision tests, catalog validation, `%PDF`, size, and two-page checks passed
- the final workflow generated 60 collision PDFs and completed its latest-main parent guard and non-force push successfully

The repository-wide shared catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`; do not bypass it. Concurrent Grade 6, Power Classics, and Power TOEIC work was preserved by reconciling onto the latest `main` rather than force-updating or rolling back unrelated commits.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 円運動`**.

1. Start from latest `main`; re-read `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `STATUS.json`, and this HANDOFF, then reconcile any parallel progress.
2. Recheck the current MEXT circular-motion wording before implementation. Current MEXT scope explicitly includes uniform circular-motion speed, period, angular speed, centripetal acceleration, and centripetal force; centrifugal force is also mentioned.
3. Start with the simplest one-unknown quantitative checkpoint among the basic circular-motion quantities. Prefer a relation among speed, radius, angular speed, or period that can be expressed with an existing shared relation or a small independently tested reversible relation.
4. Preserve `formal_course=物理`, `grade=null`, 20 problems per worksheet, and the current focused PDF layout.
5. Keep all frame, direction, radius, and uniform-motion assumptions learner-visible. Do not mix inertial-frame centripetal force and rotating-frame centrifugal force in the first checkpoint.
6. If a new shared relation is necessary, add direct/reverse regression tests, invalid/zero-denominator and bad-arity rejection where applicable, and independent solver validation before publication.
7. Require deterministic seed regeneration, independent answer recomputation from learner-visible values, corrupted-answer rejection, normalized-hash uniqueness and collision checks against the existing catalog, complete catalog validation, and structural PDF checks.
8. Preserve `worksheet-catalog-publish-v1` serialization and non-force latest-main push safety.
9. Continue to later circular-motion checkpoints in the same run only while the same verified solver assumptions remain clear; do not create a fourth checkpoint merely to meet throughput.
10. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run stops after three safe checkpoints (100 PDFs). The momentum/collision block is now closed at a natural curriculum boundary; the next step changes to uniform circular-motion quantities and force/direction conventions, so stopping here is deliberate rather than a throughput limitation.
