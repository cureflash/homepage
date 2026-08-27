# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 680 PDFs
- total published physics: 1838 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 150 PDFs

All 680 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, numeric answers, 20 problems, and unique normalized content hashes. The formal-Physics publish workflow validates every registered PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — basic momentum conservation, 60 PDFs

The current MEXT High School Course of Study Commentary for formal Physics was rechecked. It explicitly places momentum conservation under `運動量` and states that collisions or divisions of bodies are used to understand the law of conservation of momentum. The next curriculum topic after this area is collision and mechanical energy.

Two contiguous machine-verifiable checkpoints were added:

1. `momentum-conservation-total-before-after` — 30 PDFs
   - learner-visible conservation `P前=P後`
   - uses `P前=p₁前+p₂前`
   - direct final total momentum / reverse either initial body momentum
   - shared reversible `sum` relation reused
2. `momentum-conservation-final-object` — 30 PDFs
   - `p₂後=P前-p₁後` with `P前=P後`
   - direct one final-body momentum / reverse initial total / reverse the other final-body momentum
   - shared reversible `difference` relation reused

Both checkpoints are restricted to one-dimensional two-body collisions. Right is explicitly positive and left negative. The learner-facing descriptions state that the impulse of external forces can be neglected; no rest condition or sign convention is hidden in generator state.

Implementation and validation:

- implementation PR #148 merge commit: `491e567e5503823afae3596e3bd9c7405061ead9`
- no new shared formula relation was needed; existing `sum` and `difference` were sufficient
- each checkpoint uses 10 deterministic seeds × 3 modes, 20 problems per worksheet
- momentum/impulse tests now cover 5 checkpoints / 150 worksheet variants
- tests independently recompute every answer from learner-visible values, require deterministic regeneration, reject corrupted answers, require positive and negative signed results, require 150/150 momentum-family normalized hashes to be unique, and require disjointness from the existing catalog
- publisher/workflow contract increased from 620 to 680 formal-Physics rows and from 90 to 150 rows in `様々な運動：運動量と力積`
- the first publication run attempt stopped only because the new test required exact text `P前=P後` while the displayed formula had spaces; the learner-visible formula was normalized by commit `eb882668dd0b2e44894feb0cc664fa3271941680`
- publication commit: `4b10c1549283d8051013fd8f6f1eb01c3ebd055f`
- Actions run `33066240727`, attempt 2: success
- the successful validation reported `Formal Physics 680-PDF catalog validation: OK`; all shared worksheet tests, formula relations, projectile, rigid-body, momentum tests, catalog validation, `%PDF`, size, and two-page checks passed
- the attempt-2 publisher reported no generated changes because the fixed latest `main` already contained the publication commit; it still revalidated the complete 680-PDF state successfully

The repository-wide shared catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`; do not bypass it.

## Exact next starting point

Continue formal course **`物理：運動量と力積 / 運動量保存`** at the full mass-and-velocity form.

1. Start from latest `main`; re-read `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `STATUS.json`, and this HANDOFF, then reconcile any parallel progress.
2. Recheck the current MEXT wording before implementation.
3. Design the simplest one-dimensional two-body relation `m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂` with exactly one unknown velocity.
4. Keep `formal_course=物理`, `grade=null`, right-positive/left-negative direction, and the condition that external impulse is negligible learner-visible.
5. Any initial-at-rest assumption must be explicit in the problem; do not hide it only in generator state.
6. Add a new shared reversible relation only if the full equation cannot be represented safely by existing relations. If added, require direct/reverse regression, invalid/zero-denominator rejection, bad-arity rejection, and independent solver validation.
7. Require deterministic seed regeneration, independent answer recomputation from visible values, corrupted-answer rejection, normalized-hash uniqueness and collision checks against the existing catalog, 20-problem/two-page output, complete catalog validation, and structural PDF checks.
8. Preserve `worksheet-catalog-publish-v1` serialization and non-force latest-main push safety.
9. If this full conservation checkpoint becomes stable, nearby collision/separation variants may follow in the same run only when the same verified solver contract can be reused without hidden assumptions.
10. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run stops after two new checkpoints (60 PDFs). The next step changes from direct manipulation of already-computed momenta to the full four mass/velocity momentum equation and may require a new reversible solver contract, so it is a deliberate safety boundary rather than a throughput limit.
