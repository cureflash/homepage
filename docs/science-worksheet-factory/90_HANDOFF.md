# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1160 PDFs
- total published physics: 2318 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs

All 1160 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1000` and `accepted-set=160`. Worksheet modes are `calculation-basic=370`, `calculation-reverse=630`, and 40 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — numeric pendulum periods, 20 PDFs

This run completed two consecutive safe checkpoints and closes the planned `円運動と単振動` sequence. A third checkpoint was not added because the next curriculum item is `万有引力`, which requires a new squared-distance relation and a new unit/scale contract.

### 1. Spring-pendulum numeric period — 10 PDFs

- skill: `spring-pendulum-period-numeric`
- learner-visible formula: `T = 2π√(m/k)`
- `π=3.14` is displayed as a known value
- answers are rounded to `0.001 s`
- 10 deterministic seeds, 20 problems per worksheet
- direct period calculation only

### 2. Small-angle simple-pendulum numeric period — 10 PDFs

- skill: `simple-pendulum-period-numeric`
- learner-visible formula: `T = 2π√(l/g)`
- learner-visible scope: oscillation angle sufficiently small
- `g=9.8 m/s²` and `π=3.14` are displayed known values
- answers are rounded to `0.001 s`
- 10 deterministic seeds, 20 problems per worksheet
- direct period calculation only

### Shared relation contract

A new shared formula relation `two-pi-sqrt-ratio` implements `2π√(numerator/divisor)` for both period checkpoints.

- exactly three distinct inputs: numerator, divisor, and π
- all three inputs must be positive
- direct result is rounded to three decimal places
- inverse worksheet generation is deliberately rejected after rounding
- the independent checker recomputes the result from learner-visible values rather than trusting the generated answer

The inverse restriction is intentional: reconstructing mass, spring constant, length, gravity, or π from a displayed rounded period would amplify rounding and make the canonical answer dependent on hidden pre-rounding values.

## Validation and publication

- implementation PR #218 merged as `d18a420ccd4a4cde43c28761a32a7695b5cfe940`
- branch validation run `33166047320`, attempt 2, completed successfully
- production Actions run `33166242702` completed successfully
- every production workflow step succeeded: latest-main confirmation, all formal-Physics regressions, 20-PDF generation, post-generation validation, catalog/PDF validation, commit, and non-force safe push
- publication commit: `79de9a0a130ecf255435bd20fdcdcfb34fb31f30` (`Publish 20 formal Physics numeric pendulum period worksheets`)
- final workflow contract requires 1160 formal-Physics rows and 1160 unique hashes
- answer-type contract: `numeric=1000`, `accepted-set=160`
- unit contract: projectile 330, rigid body 200, momentum/impulse 250, circular motion/SHM 380
- SHM-period tests cover 130 deterministic worksheet variants and require 130/130 normalized-hash uniqueness plus disjointness from the pre-existing catalog
- new tests independently recompute both period formulas from visible values, enforce `π=3.14`, enforce the `0.001 s` contract and small-angle wording, reject corrupted answers, reject wrong arity/non-positive ratio inputs, and reject inverse generation
- repository publication safety remains non-force latest-main push with formal-Physics concurrency group `worksheet-catalog-publish-v2`

## Curriculum basis checked this run

The current MEXT high-school Course of Study commentary was rechecked. Formal `物理` treats uniform circular motion and simple harmonic motion together; the commentary explicitly includes displacement, velocity, acceleration and restoring force for simple harmonic motion and includes spring and simple pendulums. The current curriculum sequence then proceeds within `様々な運動` to `万有引力`, followed by gas-molecule motion. The numeric period worksheets remain inside the existing SHM scope and do not skip ahead.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 万有引力`**.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Recheck the current MEXT gravitation scope before defining the first worksheet family.
3. Prefer the most elementary uniquely checkable universal-gravitation relation first. If using `F = GmM/r²`, the squared-distance term, the positive distance domain, the value/unit of `G`, and any scientific-notation or scale policy must all be learner-visible and deterministic.
4. Do not add reverse directions until each is uniquely solvable from displayed values with a stable rounding/tolerance contract. A new shared relation must have dedicated regression tests and must not alter existing formula answers.
5. Preserve deterministic seeds, independent recomputation from learner-visible values, corrupted-answer rejection, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
6. Continue in curriculum order after gravitation; do not add a third or fourth checkpoint merely to reach the configured maximum if the new squared-distance/scale contract is not yet safe.
7. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.
