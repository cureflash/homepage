# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2280 PDFs
- total published physics: 3438 PDFs

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

All 2280 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1600` and `accepted-set=680`. Worksheet modes are `calculation-basic=600`, `calculation-reverse=1000`, and 170 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — capacitors, 120 PDFs across four safe checkpoints

### 1. Charge, capacitance and voltage — 30 PDFs

- skill: `capacitor-charge-voltage-numeric`
- relation: `Q=CV`
- learner-visible scaled units: `C[μF] × V[V] = Q[μC]`
- 10 direct charge, 10 reverse capacitance, 10 reverse voltage worksheets
- all generated electrical quantities are positive and independently recomputable from displayed values

### 2. Parallel-plate capacitance — 30 PDFs

- skill: `capacitor-parallel-plate-capacitance-numeric`
- relation: `C=ε₀S/d`
- learner-visible school scaling: `C[pF]=0.885 S[cm²]/d[mm]`, using the vacuum-permittivity approximation after unit conversion
- 10 direct capacitance, 10 reverse plate-area, 10 reverse plate-gap worksheets
- plate area and separation are always positive; no hidden topology or distance transformation is used

### 3. Stored electrostatic energy — 20 PDFs

- skill: `capacitor-stored-energy-numeric`
- relation: `U=(1/2)QV`
- learner-visible scaled units: `Q[mC] × V[V]` with visible factor `1/2`, giving `U[mJ]`
- 10 direct energy and 10 reverse charge worksheets
- existing reversible `product` relation is reused; no new shared helper was needed

### 4. Capacitor concepts — 40 PDFs

- skill: `capacitor-core-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers charging/discharging, definition `Q=CV`, plate-area and plate-gap dependence, parallel equivalent capacitance, series reciprocal relation and dielectric effects
- finite accepted-answer sets are independently validated and reverse prompts are unambiguous

## Curriculum basis

The current MEXT High School Course of Study commentary remains the authority for formal `物理`. In the electricity section it treats capacitor charge/discharge and capacitance, relates parallel-plate capacitance to plate area and separation together with electric field/potential difference, requires touching on equivalent capacitance for capacitor connections, and allows the dielectric relationship to be addressed. This run stayed within that scope.

The next curriculum block is `電気回路`. Before generation, recheck the current MEXT treatment of resistance/resistivity and temperature dependence, source internal resistance, Kirchhoff's laws, and semiconductor-related scope, then select only mechanically verifiable basic relations whose sign/topology conventions can be learner-visible.

## Validation and publication

- no shared formula helper changed; numerical checkpoints reuse existing reversible `product` and `product-over-divisor` relations
- a temporary branch-only candidate workflow was used and removed before merge
- candidate validation run `33211109947`: success
- candidate validation passed the full formal-Physics regression suite, deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, retrieval validation, physical-domain checks, 120/120 new normalized-hash uniqueness and disjointness from the published catalog, generation of all 120 candidate PDFs, 2280-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #269 merged as `9955e99e4498f71df083dac6e8b629a80bd6689c`, preserving concurrent main progress
- production Actions run `33211163499`: success
- every production step succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2280-row catalog/PDF validation, commit, and non-force safe push
- worksheet-catalog concurrency audit run `33211163494`: success
- publication commit: `0379f81a8687c11696f3c24ca497ae51d887bbc3` (`Publish 120 formal Physics capacitor worksheets`)
- final contract: 2280 formal-Physics rows / 2280 unique hashes; `numeric=1600`, `accepted-set=680`; calculation-basic 600, calculation-reverse 1000, retrieval forward/reverse/fill/true-false 170 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at **`電気と磁気 / 電気回路`**.

1. Start from latest `main`; re-read the science factory instructions, curriculum plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT circuit scope and terminology before choosing the first numerical/retrieval checkpoint.
3. Prefer transparent basic relations around resistance/resistivity, source internal resistance and Kirchhoff relationships; keep polarity, current direction and circuit topology learner-visible rather than inferred by hidden generator state.
4. Add a new shared formula relation only if existing transparent helpers cannot represent the verified relation safely; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
