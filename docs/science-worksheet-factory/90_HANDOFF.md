# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 620 PDFs
- total published physics: 1778 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 90 PDFs

All 620 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, numeric answers, 20 problems, and unique normalized content hashes. The formal-Physics publish workflow validates every registered PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Reconciliation completed this run

The previous STATUS/HANDOFF was stale relative to `main`. Do not regenerate these checkpoints:

- PR #143 had already added/published `rigid-body-two-force-moment-balance`: 4 one-unknown modes × 10 seeds = 40 PDFs using shared reversible `equal-products`, with learner-visible `F₁d₁ = F₂d₂`, CCW-positive/CW-negative convention, independent recomputation, corrupted-answer rejection, deterministic regeneration, and hash collision checks. Publication commit: `3a8998a9b85e6e0647f2b9fb9c3ab646be3ab75e`.
- PR #144 had already added/published `rigid-body-two-mass-center-of-gravity`: 4 modes × 10 seeds = 40 PDFs using the same validated `equal-products` relation and massless-rod model `m₁d₁ = m₂d₂`. Publication commit: `c1e96fab75fe0e722fc7bef27df9604d2ac39d38`.

Those 80 PDFs moved formal `物理` from 450 to 530 before the new momentum work below.

## Completed this run — momentum and impulse, 90 PDFs

Current MEXT High School Course of Study Commentary for formal Physics was rechecked. The curriculum explicitly treats momentum and impulse, states that momentum and impulse are vectors, and states that change in momentum equals impulse. Momentum conservation is the next natural checkpoint.

Three contiguous machine-verifiable checkpoints were added:

1. `momentum-one-dimensional` — 30 PDFs
   - `p = mv`
   - direct momentum / reverse mass / reverse velocity
   - right positive, left negative explicitly shown to the learner
2. `impulse-one-dimensional` — 30 PDFs
   - `J = FΔt`
   - direct impulse / reverse force / reverse duration
   - right positive, left negative explicitly shown
3. `momentum-change-from-impulse` — 30 PDFs
   - `Δp = FΔt`
   - directly reinforces that impulse equals momentum change
   - direct momentum change / reverse force / reverse duration

Implementation details:

- PR #145 merge commit: `b350c6315ec93cffee726b19077c14997b116398`
- no shared formula relation was added; all three checkpoints reuse the existing reversible `product`
- each checkpoint uses 10 deterministic seeds × 3 modes, 20 problems per worksheet
- tests independently recompute answers from learner-visible values, require deterministic regeneration, reject corrupted answers, require both positive and negative signed results, require 90/90 new normalized hashes to be unique, and require disjointness from the existing catalog
- publisher/workflow contract increased from 530 to 620 formal-Physics rows and 620 unique hashes
- publication Actions run `33063263309`: success
- publication commit: `ae51ee300bb376c24eb873bb93d592de169b050e`
- the successful run covered shared worksheet tests, formula-relation regression, projectile tests, rigid-body tests, momentum tests, PDF generation, post-generation revalidation, complete catalog validation, PDF header/size/two-page checks, and latest-main safe push

The repository-wide shared catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`; do not bypass it.

## Exact next starting point

Continue formal course **`物理：運動量と力積 / 運動量保存`**.

1. Start from latest `main`; re-read `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `STATUS.json`, and this HANDOFF, then reconcile any parallel progress.
2. Recheck the current MEXT formal-Physics wording and a reliable mechanics reference before implementation.
3. Keep `formal_course=物理`, `grade=null`, and one-dimensional learner-visible sign convention for the first conservation checkpoint.
4. Begin with the simplest two-body collision or separation model whose total momentum before and after is equal. Exactly one quantity may be unknown.
5. Any initial-at-rest condition, direction convention, or mass/velocity assumption must be learner-visible; never hide it only in generator state.
6. Do not force momentum conservation into the existing `product` relation. If the chosen model needs a new sum/equality relation, implement an explicit invertible contract and add independent direct/reverse regression tests, zero/invalid-denominator rejection, bad-arity rejection, and corrupted-answer rejection.
7. Require deterministic seed regeneration, independent answer recomputation from visible values, normalized-hash uniqueness and collision checks against the existing catalog, 20-problem/two-page output, complete catalog validation, and structural PDF checks.
8. Preserve `worksheet-catalog-publish-v1` serialization and non-force latest-main push safety.
9. After basic momentum conservation, continue only if a nearby checkpoint can reuse the same mechanically verified relation safely. Do not manufacture a fourth checkpoint for count alone.
10. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run stops after three new checkpoints (90 PDFs) because the next natural topic changes from a single reversible product to equality of total momentum before and after and therefore deserves its own explicit solver/validation boundary.
