# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1380 PDFs
- total published physics: 2538 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 40 PDFs

All 1380 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1060` and `accepted-set=320`. Worksheet modes are `calculation-basic=390`, `calculation-reverse=670`, and 80 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — gravitational potential energy and gas-molecular-motion entry, 110 PDFs

This run completed three consecutive safe checkpoints. A fourth checkpoint was not added because the next work changes from finite-answer gas concepts to quantitative ideal-gas state relations, which requires an explicit unit/domain/rounding contract for pressure, volume, amount of substance, gas constant and absolute temperature.

### 1. Gravitational potential energy numeric relation — 30 PDFs

- skill: `gravitational-potential-energy`
- learner-visible relation: `U = -GMm/r = (-G)mM(1/r)`
- zero reference: `U(∞)=0`
- learner-visible school constant: `G = 6.67×10^-11 N·m²/kg²`
- the signed coefficient `-G` and positive reciprocal distance `1/r (r>0)` are explicit worksheet quantities; neither the negative sign nor reciprocal-distance dependence is hidden in generator state
- 10 direct-U worksheets, 10 unknown-mass reverse worksheets, 10 reciprocal-distance reverse worksheets
- 10 deterministic seeds per mode, 20 problems per worksheet
- existing shared reversible `product` relation reused; no shared formula relation was added or changed
- independent tests require direct U to be negative and reconstructed mass / `1/r` to be positive from learner-visible values

The current NIST/CODATA 2022 recommended value is `G = 6.67430(15)×10^-11 m³ kg^-1 s^-2`; the worksheet value `6.67×10^-11 N·m²/kg²` remains an explicit deterministic school-level approximation.

### 2. Gravitational potential energy concepts — 40 PDFs

- skill: `gravitational-potential-energy-concepts`
- `forward / reverse / fill / true-false × 10 seeds`
- covers zero reference at infinite separation, negative U at finite positive r, `U=-GMm/r`, more-negative U on approach, U→0 at infinity, and magnitude `GMm/r`
- reverse retrieval source phrases are required to be unique

### 3. Gas molecular motion core concepts — 40 PDFs

- skill: `gas-molecular-motion-core-concepts`
- `forward / reverse / fill / true-false × 10 seeds`
- covers molecular collisions with container walls as the microscopic origin of pressure, ideal-gas state equation `pV=nRT`, Boyle's law, Charles's law, mean molecular kinetic energy proportional to absolute temperature, and ideal-gas internal energy proportional to absolute temperature
- reverse retrieval source phrases are required to be unique

## Validation and publication

- implementation PR #228 merged as `0d674710e2a56899f2f8036884349ef8e62d9bac`
- production Actions run `33174310948` completed successfully
- every production workflow step succeeded: latest-main confirmation, all shared/formal-Physics regressions, 110-PDF generation, post-generation validation, catalog/PDF validation, commit, and non-force safe push
- publication commit: `77febf9c0526356eac669df11f0fd674c7003293` (`Publish 110 formal Physics gravitation-energy and gas worksheets`)
- final workflow contract requires 1380 formal-Physics rows and 1380 unique hashes
- answer-type contract: `numeric=1060`, `accepted-set=320`
- unit contract: projectile 330, rigid body 200, momentum/impulse 250, circular motion/SHM 380, gravitation 180, gas molecular motion 40
- new tests cover 110 deterministic worksheet variants and require 110/110 normalized-hash uniqueness plus disjointness from the pre-existing catalog
- numeric tests independently recompute direct U, reverse mass and reverse `1/r` answers from learner-visible values and reject corrupted answers
- retrieval tests independently validate accepted answers, require unambiguous reverse mappings, and reject corrupted answers
- repository publication safety remains non-force latest-main push with formal-Physics concurrency group `worksheet-catalog-publish-v2`

A pre-merge branch-triggered run (`33174209750`) failed before generation because this publisher intentionally checks out latest `main`; at that moment `main` did not yet contain the newly referenced test file. This was not a production-content failure. The post-merge main run above executed the actual merged implementation and passed every step.

## Curriculum basis checked this run

The current MEXT high-school Course of Study commentary was rechecked. Formal `物理` explicitly includes gravitational potential energy in the universal-gravitation section. The following gas-molecular-motion section includes gas molecular motion and pressure, ideal-gas laws including Boyle/Charles and the state equation, molecular speed and mean kinetic energy in relation to pressure and absolute temperature, ideal-gas internal energy, and then gas state changes with the first law of thermodynamics.

NIST's current fundamental-constants database continues to identify the 2022 CODATA adjustment as the latest available set and gives the Newtonian constant of gravitation as `6.67430(15)×10^-11 m³ kg^-1 s^-2`.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 気体分子の運動 / 理想気体の状態方程式の数値計算`**.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Keep the current MEXT gas-molecular-motion sequence: pressure/state equation first, then molecular kinetic-energy/internal-energy relations, then state change / first-law content.
3. Before a numeric `pV=nRT` family, make units and positive domains for `p`, `V`, `n`, `R`, and absolute temperature `T` learner-visible and fix a deterministic rounding policy. Do not mix Celsius with absolute temperature unless an explicit conversion checkpoint is separately defined.
4. Prefer direct calculation and only uniquely reconstructible reverse directions. Never depend on hidden pre-rounded values.
5. Reuse existing formula relations when physically transparent. If a new shared relation is required, add dedicated independent regression tests and prove existing outputs remain valid.
6. Preserve deterministic seeds, independent recomputation from learner-visible values, corrupted-answer rejection, reverse-retrieval uniqueness, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
7. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.
