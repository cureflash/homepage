# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2520 PDFs
- total published physics: 3678 PDFs

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
- `電気と磁気：磁場中の力`: 120 PDFs

All 2520 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1760` and `accepted-set=760`. Worksheet modes are `calculation-basic=650`, `calculation-reverse=1110`, and 190 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — magnetic force, 120 PDFs across three safe checkpoints

### 1. Force on a straight current in a perpendicular magnetic field — 40 PDFs

- skill: `magnetic-force-wire-perpendicular-numeric`
- relation: `F=BIl`
- learner-visible condition: straight current and uniform magnetic field are perpendicular
- learner-visible units: `B[T]`, `I[A]`, `l[m]`, `F[N]`
- 10 direct force, 10 reverse magnetic-flux-density, 10 reverse current, 10 reverse wire-length worksheets
- existing reversible `product` relation is reused

### 2. Perpendicular Lorentz-force magnitude — 40 PDFs

- skill: `magnetic-force-lorentz-perpendicular-numeric`
- relation: `F=|q|vB`
- learner-visible condition: particle velocity and uniform magnetic field are perpendicular
- learner-visible units: `|q|[μC]`, `v[m/s]`, `B[T]`, `F[μN]`; `1 μC×m/s×T=1 μN` is stated
- 10 direct force, 10 reverse charge magnitude, 10 reverse speed, 10 reverse magnetic-flux-density worksheets
- existing reversible `product` relation is reused

### 3. Magnetic-force concepts — 40 PDFs

- skill: `magnetic-force-core-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers tesla, force on perpendicular/parallel currents, Lorentz force, positive/negative charge direction, parallel velocity-field zero-force condition, and `F=|q|vB`
- finite accepted-answer sets are independently validated

## Curriculum basis

The current MEXT High School Course of Study commentary is the authority for formal `物理`. Under `電流と磁界`, it requires understanding the magnetic field produced by current, the force acting on a current in a magnetic field, electromagnetic induction and electromagnetic waves. Its handling specifies quantitative treatment of the force on current and explicitly touches on Lorentz force; charged-particle motion may be observed to investigate force direction. This run stays within that scope and restricts the numerical drills to perpendicular geometry so the relation and direction assumptions remain visible rather than hidden in generator state.

The existing formal-Physics curriculum plan proceeds next to `電磁誘導`, then `交流の基本`.

## Validation and publication

- no shared formula helper changed; numerical checkpoints reuse the existing `product` relation
- all new numerical values are positive and geometry/units are learner-visible
- deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, retrieval validation, and physical-domain checks are covered by `tests/test_science_physics_magnetic_force.py`
- all 120 new normalized hashes are unique and disjoint from the previously published catalog
- concurrent main progress was detected during implementation; the five unrelated Power古典 commits were reconciled into the science branch before merge, so no progress was rolled back
- implementation PR #277 merged as `9a5784dcd65adaa795da4668cdba8ee94c371289`
- production Actions run `33219362682`: success
- every production step succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2520-row catalog/PDF validation, commit, and non-force safe push
- worksheet-catalog concurrency audit run `33219362699`: success
- publication commit: `9e4f7cf8eb3c36da99440b8a82814e6c246c7a4a` (`Publish 120 formal Physics magnetic-force worksheets`)
- final contract: 2520 formal-Physics rows / 2520 unique hashes; `numeric=1760`, `accepted-set=760`; calculation-basic 650, calculation-reverse 1110, retrieval forward/reverse/fill/true-false 190 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at `電気と磁気 / 電磁誘導`, following the existing curriculum plan.

1. Start from latest `main`; re-read the science factory instructions, curriculum plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT electromagnetic-induction scope before selecting the first checkpoint.
3. Keep magnetic-field or magnetic-flux direction, conductor/coil geometry, current direction and any sign convention learner-visible rather than inferred by hidden generator state.
4. Add a new shared formula relation only if existing transparent helpers cannot safely represent the verified relation; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
