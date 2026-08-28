# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1270 PDFs
- total published physics: 2428 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 110 PDFs

All 1270 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1030` and `accepted-set=240`. Worksheet modes are `calculation-basic=380`, `calculation-reverse=650`, and 60 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — gravitation and planetary motion, 110 PDFs

This run completed three consecutive safe checkpoints. A fourth checkpoint was not added because the remaining required content in the same MEXT section is gravitational potential energy, whose negative sign, zero-at-infinity reference, `1/r` dependence, and scale/rounding contract should be defined separately rather than inferred from the force worksheets.

### 1. Universal-gravitation numeric relation — 30 PDFs

- skill: `universal-gravitation-force`
- learner-visible formula: `F = Gm₁m₂/r² = Gm₁m₂(1/r²)`
- learner-visible constant: `G = 6.67e-11 N·m²/kg²`; the topic header also states `6.67×10^-11`
- `1/r²` is an explicit known/unknown quantity, so the squared-distance dependence is not hidden in generator state
- 10 direct-force worksheets, 10 unknown-mass reverse worksheets, 10 inverse-square-factor reverse worksheets
- 10 deterministic seeds per mode, 20 problems per worksheet
- existing shared reversible `product` relation reused; no shared formula relation was added or changed
- SI units are explicit for G, masses, force and `1/r²`

The current NIST/CODATA 2022 recommended value is `G = 6.67430(15)×10^-11 m³ kg^-1 s^-2`; the worksheet value `6.67×10^-11 N·m²/kg²` is an explicit school-level approximation, not a hidden constant.

### 2. Universal-gravitation core concepts — 40 PDFs

- skill: `universal-gravitation-core-concepts`
- `forward / reverse / fill / true-false × 10 seeds`
- covers attractive direction, proportionality to the product of masses, inverse-square distance dependence, school-level G value, distance-doubling `1/4`, and mass-tripling `3×`
- reverse retrieval source phrases are required to be unique

### 3. Kepler laws — 40 PDFs

- skill: `kepler-laws-core-concepts`
- `forward / reverse / fill / true-false × 10 seeds`
- covers Kepler's first, second and third laws, constant areal velocity, `T²/a³`, and the qualitative period consequence for larger orbital semimajor axis
- reverse retrieval source phrases are required to be unique

## Validation and publication

- implementation PR #223 merged as `a39547b3e5641c1b07c9ddff2b93b95754210a04`
- production Actions run `33170344520` completed successfully
- every production workflow step succeeded: latest-main confirmation, all shared/formal-Physics regressions, 110-PDF generation, post-generation validation, catalog/PDF validation, commit, and non-force safe push
- publication commit: `a0fe0107aab0d34ee3ba1b5b4c301babfc955a32` (`Publish 110 formal Physics gravitation worksheets`)
- final workflow contract requires 1270 formal-Physics rows and 1270 unique hashes
- answer-type contract: `numeric=1030`, `accepted-set=240`
- unit contract: projectile 330, rigid body 200, momentum/impulse 250, circular motion/SHM 380, gravitation 110
- gravitation tests cover 110 deterministic worksheet variants and require 110/110 normalized-hash uniqueness plus disjointness from the pre-existing catalog
- numeric tests independently recompute the direct force, reverse mass, and reverse `1/r²` answers from learner-visible values
- retrieval tests independently validate accepted answers, require unambiguous reverse mappings, and reject corrupted answers
- repository publication safety remains non-force latest-main push with formal-Physics concurrency group `worksheet-catalog-publish-v2`

## Curriculum basis checked this run

The current MEXT high-school Course of Study commentary was rechecked. In formal `物理`, the `万有引力` section includes planetary motion, the law of universal gravitation, and motion under universal gravitation. The handling notes explicitly include Kepler's laws and gravitational potential energy, with planets and artificial satellites as representative motion contexts. The current sequence then proceeds to gas-molecule motion after the gravitation section.

NIST's current fundamental-constants database also confirms that the latest available CODATA set is the 2022 adjustment and gives the Newtonian constant of gravitation as `6.67430(15)×10^-11 m³ kg^-1 s^-2`. The worksheet approximation is kept explicit and deterministic.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 万有引力 / 万有引力による位置エネルギー`**.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Keep the MEXT `万有引力` section open until gravitational potential energy is covered; do not advance to gas-molecule motion yet.
3. For a numeric `U = -GMm/r` family, make the zero reference at infinite separation, the negative sign for finite positive `r`, positive-distance domain, value/unit of G, and scientific-notation/scale policy learner-visible.
4. Prefer a direct calculation first. Add mass or reciprocal-distance reverse directions only when they are uniquely reconstructible from the displayed values without hidden pre-rounding state. Do not solve for signed/ambiguous distance.
5. If a new shared relation is required, add dedicated independent regression tests and prove existing formula outputs are unchanged. Reuse existing relations instead when that remains physically transparent.
6. Preserve deterministic seeds, independent recomputation from learner-visible values, corrupted-answer rejection, reverse-retrieval uniqueness, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
7. After gravitational potential energy closes the gravitation section, proceed in curriculum order to `様々な運動：気体分子運動・状態変化の基本数量関係`.
8. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.
