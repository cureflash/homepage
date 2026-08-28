# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1500 PDFs
- total published physics: 2658 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 160 PDFs

All 1500 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1180` and `accepted-set=320`. Worksheet modes are `calculation-basic=420`, `calculation-reverse=760`, and 80 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — ideal-gas numerical relations, 120 PDFs

This run completed three consecutive safe checkpoints and reached the requested approximate 120-PDF ceiling. A fourth checkpoint was not added because the next work moves from state-equation algebra to molecular kinetic energy and introduces the Boltzmann constant, scientific notation, and a new answer-rounding contract.

### 1. Ideal-gas state equation `pV=nRT` — 40 PDFs

- skill: `ideal-gas-state-equation-numeric`
- 10 direct-pressure worksheets
- 10 reverse-amount worksheets
- 10 reverse-absolute-temperature worksheets
- 10 reverse-volume worksheets
- 20 problems per worksheet
- learner-visible units: `p` in kPa, `V` in L, `n` in mol, `T` in K
- learner-visible school-calculation constant: `R = 8.31 kPa·L/(mol·K)`
- all physical quantities are positive; Celsius is not mixed into this family
- value domains were chosen so generated answers remain readable finite values and no hidden pre-rounded value is required

The current NIST/CODATA 2022 value of the molar gas constant is `8.314462618... J mol^-1 K^-1` exactly. Because `1 kPa·L = 1 J`, the worksheet value `8.31 kPa·L/(mol·K)` is an explicit school-level approximation in a numerically convenient consistent unit system.

### 2. Boyle's law — 40 PDFs

- skill: `boyle-law-numeric`
- learner-visible relation: `p₁V₁ = p₂V₂`
- same amount of gas and constant absolute temperature are explicit conditions
- 10 direct `p₂` worksheets and 10 each for reverse `p₁`, `V₁`, and `V₂`
- all pressures and volumes are positive and expressed in kPa / L

### 3. Charles's law — 40 PDFs

- skill: `charles-law-numeric`
- learner-visible relation: `V₁/T₁ = V₂/T₂`
- same amount of gas and constant pressure are explicit conditions
- 10 direct `V₂` worksheets and 10 each for reverse `V₁`, `T₂`, and `T₁`
- temperatures are absolute temperatures in K only; all values are positive

## Shared generator change

A shared reversible formula relation `product-over-divisor` was added:

`result = product(numerator factors) / divisor`

It supports direct calculation, inversion of any numerator factor, and inversion of the divisor. Invalid arity, duplicate input names, zero divisors, and zero denominators needed for inversion are rejected. A dedicated independent regression test covers the direct result and every reverse direction. Existing shared relations remain unchanged.

The three new gas families all use this same relation transparently:

- `p = nRT/V`
- `p₂ = p₁V₁/V₂`
- `V₂ = V₁T₂/T₁`

## Validation and publication

- implementation PR #233 merged as `07e612e4580be18e6780cf64572443872c97373e`
- production Actions run `33179207777` completed successfully
- every production workflow step succeeded: latest-main confirmation, all shared/formal-Physics regressions, 120-PDF generation, post-generation validation, catalog/PDF validation, commit, and non-force safe push
- publication commit: `d59250cc3ca07ab6ff9fdfac5bb5fcaa11efe0da` (`Publish 120 formal Physics ideal-gas worksheets`)
- final workflow contract requires 1500 formal-Physics rows and 1500 unique hashes
- answer-type contract: `numeric=1180`, `accepted-set=320`
- unit contract: projectile 330, rigid body 200, momentum/impulse 250, circular motion/SHM 380, gravitation 180, gas molecular motion 160
- mode contract: calculation-basic 420, calculation-reverse 760, retrieval forward/reverse/fill/true-false 80 each
- new topic tests cover 120 deterministic worksheet variants and require 120/120 normalized-hash uniqueness plus disjointness from the pre-existing catalog
- numeric tests independently recompute every direct/reverse answer from learner-visible values, require positive physical values, and reject corrupted answers
- repository publication safety remains non-force latest-main push with formal-Physics concurrency group `worksheet-catalog-publish-v2`

## Curriculum basis checked this run

The current MEXT high-school Course of Study commentary was rechecked. In formal `物理`, the gas-molecular-motion section explicitly includes gas molecular motion and pressure, the ideal-gas laws including Boyle/Charles and the ideal-gas state equation, molecular speed and mean kinetic energy in relation to pressure and absolute temperature, ideal-gas internal energy, and then gas state changes with the first law of thermodynamics.

NIST's current fundamental-constants database identifies the 2022 CODATA set as the latest available adjustment and gives the molar gas constant as `8.314462618... J mol^-1 K^-1` exactly.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 気体分子の運動 / 気体分子1個あたりの平均運動エネルギー`**.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Preserve the current MEXT order: molecular speed / mean kinetic energy and absolute temperature next, then ideal-gas internal energy, then gas state changes / first law.
3. Before a numerical mean-kinetic-energy family such as `K̄ = (3/2)k_B T`, make the Boltzmann constant, scientific-notation representation, units, positive absolute-temperature domain, and deterministic answer-rounding/tolerance policy learner-visible. Do not introduce a hidden rounded constant or hidden pre-rounded answer.
4. Prefer direct calculation first; add reverse temperature only if the displayed answer/known-value representation makes the inversion uniquely reconstructible.
5. Reuse existing formula relations only when physically transparent. A new shared relation requires dedicated independent regression tests and full formal-Physics/Physics-Basics regressions.
6. Preserve deterministic seeds, independent recomputation from learner-visible values, corrupted-answer rejection, reverse-retrieval uniqueness, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
7. Representative screenshot-based visual QA remains pending. Raw representative PDF retrieval again returned cache miss in this run; structural PDF QA passed but is not a substitute for visual QA.
