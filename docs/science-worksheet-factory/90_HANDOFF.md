# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2160 PDFs
- total published physics: 3318 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 270 PDFs
- `波：波の伝わり方`: 120 PDFs
- `波：音`: 110 PDFs
- `波：光`: 200 PDFs
- `電気と磁気：電場・電位`: 120 PDFs

All 2160 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1520` and `accepted-set=640`. Worksheet modes are `calculation-basic=570`, `calculation-reverse=950`, and 160 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — electric field and potential, 120 PDFs across four safe checkpoints

### 1. Coulomb force — 30 PDFs

- skill: `electric-coulomb-force-numeric`
- relation: `F=k|q₁q₂|/r²`
- school arithmetic is kept compact by explicitly using `F[mN]=9|q₁[μC]||q₂[μC]|(1/r²[m⁻²])`, equivalent to `k≈9.0×10^9 N·m²/C²`
- 10 direct force, 10 reverse charge-magnitude, 10 reverse `1/r²` worksheets
- force is explicitly treated as a magnitude; no hidden sign/direction inference is used

### 2. Point-charge electric field — 30 PDFs

- skill: `electric-point-charge-field-numeric`
- relation: `E=k|Q|/r²`
- explicit scaled form `E[kN/C]=9|Q[μC]|(1/r²[m⁻²])`
- 10 direct field-magnitude, 10 reverse source-charge-magnitude, 10 reverse `1/r²` worksheets
- `1/r²` is learner-visible, so squared-distance or square-root transformations are not hidden in the generator

### 3. Point-charge electric potential — 30 PDFs

- skill: `electric-point-charge-potential-numeric`
- reference is explicitly stated as potential zero at infinity
- relation: `V=kQ/r`, with visible scaled form `V[kV]=9Q[μC](1/r[m⁻¹])`
- 10 direct signed potential, 10 reverse signed source charge, 10 reverse positive `1/r` worksheets
- source-charge sign is preserved and therefore the potential sign is mechanically checkable

### 4. Electric potential energy — 30 PDFs

- skill: `electric-potential-energy-numeric`
- relation: `U=qV`
- visible unit relation `q[μC] × V[kV] = U[mJ]`
- 10 direct signed energy, 10 reverse signed charge, 10 reverse signed potential worksheets
- sign is determined solely from the learner-visible `q` and `V`

## Curriculum basis

The current MEXT High School Course of Study remains the authority for formal `物理`. In `電気と磁気 / 電気と電流`, it explicitly places `電荷と電界` and `電界と電位`, requiring understanding of the force between charges, representation of electric field, and the relationship between electric field and electric potential in connection with electrostatic potential energy. This run stayed inside that scope.

## Validation and publication

- no shared formula helper changed; all four checkpoints reuse the existing reversible `product` relation
- a temporary branch-only candidate workflow was used and removed before merge
- candidate validation run `33207015064`: success
- candidate validation passed the full formal-Physics regression suite, deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, physical-domain/sign checks, 120/120 new normalized-hash uniqueness and disjointness from the published catalog, generation of all 120 candidate PDFs, 2160-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #264 merged as `604de5191641a0988e1ce4d2103d069ed9e63288`, preserving concurrent main progress
- production Actions run `33207126974`: success
- every production step succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2160-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `80b0f28f51c09f1b4d81028177cf247e9cc34b58` (`Publish 120 formal Physics electric-field worksheets`)
- final contract: 2160 formal-Physics rows / 2160 unique hashes; `numeric=1520`, `accepted-set=640`; calculation-basic 570, calculation-reverse 950, retrieval forward/reverse/fill/true-false 160 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at **`電気と磁気 / コンデンサー`**.

1. Start from latest `main`; re-read the science factory instructions, plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT capacitor scope and terminology before selecting the first quantitative/retrieval checkpoint.
3. Define learner-visible polarity/sign conventions, units, physical domains, rounding/tolerance and an independent recomputation path before numerical generation.
4. Add a new shared formula relation only if existing transparent helpers cannot represent the verified relation safely; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
