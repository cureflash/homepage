# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2400 PDFs
- total published physics: 3558 PDFs

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
- `電気と磁気：コンデンサー`: 120 PDFs
- `電気と磁気：電気回路`: 120 PDFs

All 2400 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1680` and `accepted-set=720`. Worksheet modes are `calculation-basic=630`, `calculation-reverse=1050`, and 180 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — electric circuits, 120 PDFs across four safe checkpoints

### 1. Resistance, resistivity and conductor geometry — 30 PDFs

- skill: `circuit-resistivity-geometry-numeric`
- relation: `R=ρl/S`
- learner-visible units: `ρ[Ω·mm²/m]`, `l[m]`, `S[mm²]`, `R[Ω]`
- 10 direct resistance, 10 reverse resistivity, 10 reverse cross-sectional-area worksheets
- existing reversible `product-over-divisor` relation is reused

### 2. Source internal resistance — 30 PDFs

- skill: `circuit-internal-resistance-numeric`
- relation for a discharging source: `E=V+rI`
- current direction is stated explicitly as current flowing from the source into the external circuit
- 10 direct emf, 10 reverse terminal-voltage, 10 reverse internal-resistance worksheets
- existing reversible `offset-product` relation is reused

### 3. Kirchhoff first law at one junction — 20 PDFs

- skill: `circuit-kirchhoff-junction-numeric`
- learner-visible topology: one current `Iin` enters a junction and `I1`, `I2` leave, so `Iin=I1+I2`
- 10 direct incoming-current and 10 reverse outgoing-current worksheets
- existing reversible `sum` relation is reused

### 4. Electric-circuit concepts — 40 PDFs

- skill: `circuit-core-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers `R=ρl/S`, conductor geometry, temperature dependence of resistivity, source internal resistance, Kirchhoff first/second laws and semiconductor scope
- finite accepted-answer sets are independently validated

## Curriculum basis

The current MEXT High School Course of Study commentary is the authority for formal `物理`. Under `電気回路`, it requires understanding the basic laws of electric circuits through experiments and specifies that temperature change of resistivity and source internal resistance are treated, with semiconductors also touched on. The implementation stays within that scope and keeps signs, current direction and junction topology learner-visible.

The existing formal-Physics curriculum plan proceeds next to `磁場中の力`. Before generation, recheck the current MEXT `電流と磁界` scope and terminology and choose only mechanically verifiable relations with current direction, magnetic-field direction, force direction and geometry visible to the learner.

## Validation and publication

- no shared formula helper changed; numerical checkpoints reuse existing `product-over-divisor`, `offset-product` and `sum` relations
- temporary branch-only candidate workflow was removed before merge
- candidate validation run `33215542390`: success
- candidate validation passed the full formal-Physics regression suite, deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, retrieval validation, positive-domain checks, 120/120 new normalized-hash uniqueness and disjointness from the published catalog, generation of all 120 candidate PDFs, 2400-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #273 merged as `bc387332dbba75bd60efec62389b1f2333229f28`, preserving concurrent main progress
- production Actions run `33215610585`: success
- every production step succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2400-row catalog/PDF validation, commit, and non-force safe push
- worksheet-catalog concurrency audit run `33215610642`: success
- publication commit: `60504c2ad730359fcc126b2ee870c7955a1db243` (`Publish 120 formal Physics electric-circuit worksheets`)
- final contract: 2400 formal-Physics rows / 2400 unique hashes; `numeric=1680`, `accepted-set=720`; calculation-basic 630, calculation-reverse 1050, retrieval forward/reverse/fill/true-false 180 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at `電気と磁気 / 磁場中の力`, following the existing curriculum plan.

1. Start from latest `main`; re-read the science factory instructions, curriculum plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT `電流と磁界` scope before selecting the first magnetic checkpoint.
3. Keep current direction, magnetic-field direction, force direction and geometry learner-visible rather than inferred by hidden generator state.
4. Add a new shared formula relation only if existing transparent helpers cannot safely represent the verified relation; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
