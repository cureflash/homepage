# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1140 PDFs
- total published physics: 2298 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 360 PDFs

All 1140 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=980` and `accepted-set=160`. Worksheet modes are `calculation-basic=350`, `calculation-reverse=630`, and 40 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — quantitative SHM and pendulum periods, 110 PDFs

This run completed three consecutive safe checkpoints, staying below the normal approximately-120-PDF target and without adding a new shared formula relation.

### 1. Simple-harmonic acceleration and displacement magnitude — 30 PDFs

- skill: `simple-harmonic-acceleration-displacement-magnitude`
- learner-visible relation: `|a| = ω²|x|`
- learner-visible direction: acceleration points toward the equilibrium position
- 10 direct acceleration-magnitude worksheets
- 10 reverse `ω²` worksheets
- 10 reverse displacement-magnitude worksheets
- existing reversible `product` relation reused
- solving directly for `ω` is deliberately omitted so the generator does not introduce an implicit square-root/root-selection contract

This is an explicit magnitude checkpoint, not a hidden replacement for the signed physical relation `a=-ω²x`.

### 2. Spring-pendulum period concepts — 40 PDFs

- skill: `spring-pendulum-period-concepts`
- answer model: finite `accepted-set` retrieval
- formats: forward / reverse / fill / true-false, 10 deterministic seeds each
- learner-visible formula: `T = 2π√(m/k)`
- covers the qualitative dependence of period on mass and spring constant
- reverse-retrieval displayed descriptions are required to map uniquely to one answer item

### 3. Small-angle simple-pendulum period concepts — 40 PDFs

- skill: `simple-pendulum-period-concepts`
- answer model: finite `accepted-set` retrieval
- formats: forward / reverse / fill / true-false, 10 deterministic seeds each
- learner-visible scope: oscillation angle sufficiently small
- learner-visible formula: `T = 2π√(l/g)`
- covers length dependence, mass independence, and gravitational-acceleration dependence
- reverse-retrieval displayed descriptions are required to map uniquely to one answer item

The two period checkpoints intentionally teach the formulas and dependencies without yet generating numerical square-root/π calculations. That numeric work remains open until a precise shared rounding/tolerance contract exists.

## Validation and publication

- implementation PR #212 merged as `b9915a4d787de8359638705eda00393757f49bdb`
- production Actions run `33161995894` completed successfully
- every workflow step succeeded: latest-main confirmation, shared/formal-Physics tests, generation, post-generation validation, catalog/PDF validation, commit, and non-force safe push
- publication commit: `09a61b0bf720fa2f23fae5296cb9d9410e8e8777` (`Publish 110 formal Physics SHM acceleration and period worksheets`)
- final workflow contract requires 1140 formal-Physics rows and 1140 unique hashes
- answer-type contract: `numeric=980`, `accepted-set=160`
- unit contract: projectile 330, rigid body 200, momentum/impulse 250, circular motion/SHM 360
- new tests require deterministic regeneration, independent visible-value recomputation for all three `|a|/ω²/|x|` directions, corrupted-answer rejection for numeric and retrieval problems, 110/110 new normalized hashes, existing-catalog collision rejection, learner-visible magnitude/direction/small-angle contracts, and unique reverse-retrieval descriptions
- repository publication safety remains non-force latest-main push with formal-Physics concurrency group `worksheet-catalog-publish-v2`

## Curriculum basis checked this run

Current MEXT high-school Course of Study materials were rechecked before implementation. In formal `物理`, simple harmonic motion treats displacement, velocity, acceleration and restoring force, and spring/simple pendulums are included in the same curriculum sequence. The new checkpoints stay within that sequence. For the simple pendulum, the worksheet explicitly restricts the period relation to sufficiently small oscillation angles.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 円運動と単振動`** with numerical period calculations for the spring pendulum and simple pendulum.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Introduce a generic, mechanically checkable relation for expressions of the form `T = 2π√(numerator/divisor)` only if it can safely serve both `T=2π√(m/k)` and `T=2π√(l/g)`.
3. Make `π` handling explicit. Fix the learner-visible numerical value or a deterministic precision policy, and define answer rounding/tolerance before publishing any numeric period worksheet.
4. Independent recomputation must use only learner-visible values and must not call the generation answer path.
5. Reverse directions involving a square root must use physically intended non-negative quantities and a unique root. Reject ambiguous or zero-denominator cases rather than silently accepting them.
6. Preserve deterministic seeds, corrupted-answer rejection, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
7. Once numeric spring/simple-pendulum periods are safely covered, close the `円運動と単振動` block and continue to the next formal-Physics curriculum item from current MEXT materials; do not add unrelated material merely to reach four checkpoints.
8. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.
