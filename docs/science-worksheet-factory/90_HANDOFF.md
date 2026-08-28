# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1610 PDFs
- total published physics: 2768 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 270 PDFs

All 1610 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1250` and `accepted-set=360`. Worksheet modes are `calculation-basic=450`, `calculation-reverse=800`, and 90 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — molecular energy and thermodynamics, 110 PDFs

Four consecutive safe checkpoints were completed. Existing shared `product`, `sum`, and retrieval generators were reused; no new shared formula relation was introduced.

### 1. Molecular mean kinetic energy — 10 PDFs

- skill: `molecular-mean-kinetic-energy-numeric`
- learner-visible relation: `K̄ = (3/2)k_B T`
- learner-visible exact SI constant: `k_B = 1.380649×10^-23 J/K`
- absolute temperature is in K and positive
- direct calculation only, 10 deterministic variants, 20 problems each
- reverse-temperature generation was intentionally not added because direct scientific-notation output is sufficient for this checkpoint and avoids inventing an answer-rounding inversion contract

### 2. Monatomic ideal-gas internal energy — 30 PDFs

- skill: `ideal-gas-internal-energy-numeric`
- learner-visible relation: `U = (3/2)nRT`
- `R = 8.31 J/(mol·K)` is explicit and consistent with the preceding school-calculation gas worksheets
- 10 direct-U, 10 reverse-amount and 10 reverse-absolute-temperature worksheets
- all source physical quantities are learner-visible and positive

### 3. Thermal-gas core concepts — 40 PDFs

- skill: `thermal-gas-core-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- covers mean molecular kinetic energy proportional to absolute temperature, monatomic ideal-gas internal energy, the first law, and explicit heat/work sign conventions
- reverse retrieval requires unique shown descriptions

### 4. First law of thermodynamics — 30 PDFs

- skill: `thermodynamics-first-law-numeric`
- explicit convention: `ΔU = Q + W_on`
- `Q > 0`: heat enters the gas; heat released by the gas is negative
- `W_on > 0`: external surroundings do work on the gas; work done by the gas on the surroundings is negative
- 10 direct-ΔU, 10 reverse-Q and 10 reverse-W_on worksheets
- positive and negative values are deliberately present so the sign convention is actually exercised

## Validation and publication

- implementation PR #237 merged as `39391396e02f6e10d5756aae0ab6dd45e8dee3fe`
- candidate validation run `33183903053` passed all existing formal-Physics regressions, the new thermal-gas tests, and a no-publication dry-run that rendered all 110 candidate PDFs and validated 1610 prospective rows / 1610 unique hashes / PDF header, size and two-page structure
- the first branch run of the production workflow failed only because the existing workflow intentionally checked out `main` even on branch pushes, so the new branch-only test file was absent; this was diagnosed before merge and was not a content/test failure
- production Actions run `33183993675` completed successfully after merge
- every production step succeeded: latest-main confirmation, all shared/formal-Physics tests, 110-PDF generation, post-generation validation, 1610-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `80ad5d49be641ae6f985687b083d15dfde358a0f` (`Publish 110 formal Physics thermal-gas worksheets`)
- final contract: 1610 formal-Physics rows / 1610 unique hashes; `numeric=1250`, `accepted-set=360`; calculation-basic 450, calculation-reverse 800, retrieval forward/reverse/fill/true-false 90 each
- gas-molecular-motion unit total is now 270 PDFs
- new topic tests require deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, reverse-retrieval uniqueness, 110/110 new normalized-hash uniqueness and disjointness from the existing catalog
- publication safety remains `worksheet-catalog-publish-v2` serialization and non-force latest-main push

## Curriculum / source basis checked this run

The current MEXT high-school Course of Study commentary remains the curriculum authority. The completed gas block follows the formal `物理` sequence through molecular mean kinetic energy, ideal-gas internal energy, state changes, and the first law of thermodynamics.

NIST's current fundamental-constants database identifies the 2022 CODATA recommended values as the latest available set. The Boltzmann constant is exactly `1.380649×10^-23 J/K`, so no hidden rounded constant was needed for the mean-kinetic-energy checkpoint.

## Exact next starting point

The gas-molecular-motion block is closed at this basic focused-worksheet boundary. Continue formal course `物理` in the curriculum plan with the next block, waves, beginning from **wave interference / standing-wave coverage**.

1. Start from latest `main`; re-read the science factory instructions, execution plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT formal-Physics wave placement and terminology before defining the first wave checkpoint.
3. Prefer machine-verifiable basic relations and finite-answer facts. Do not invent diagram-dependent or ambiguous interference questions before the renderer/validator can verify them deterministically.
4. Reuse existing formula/retrieval relations where transparent. A new shared relation requires its own independent regression tests plus relevant Physics/Physics-Basics regressions.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent recomputation/finite-set validation, corrupted-answer rejection, reverse-retrieval uniqueness, normalized-hash uniqueness and existing-catalog collision checks, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v2`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
