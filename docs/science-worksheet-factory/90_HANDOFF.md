# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 3030 PDFs
- total published physics: 4188 PDFs

Formal `物理` has 3030 catalog rows / 3030 unique normalized content hashes. All formal-Physics rows use `formal_course=物理`, `grade=null`, 20 problems, `difficulty=basic`, and the shared focused-series publication path. Answer types are `numeric=2110` and `accepted-set=920`. Worksheet modes are `calculation-basic=780`, `calculation-reverse=1330`, and 230 each of retrieval forward/reverse/fill/true-false.

## Completed this run — direct series-RLC impedance, 30 PDFs

- skill: `ac-series-rlc-impedance-numeric`
- unit: `電気と磁気：交流の基本`
- learner-visible relation: `Z=√(R²+(XL-XC)²)`
- learner-visible quantities and units: `Z[Ω]`, `R[Ω]`, `XL[Ω]`, `XC[Ω]`
- 30 direct-calculation worksheets, each 20 problems
- answers are rounded to two decimal places
- new shared relation: `sqrt-square-plus-difference-square`
- the shared relation accepts exactly three unique nonnegative magnitude inputs and computes the square-root combination directly
- inverse generation is intentionally rejected because solving the relation backward can have ambiguous branches; no hidden precomputed intermediate and no arbitrary branch choice are used

This closes the exact numerical gap recorded in the previous handoff. The previous AC batches already covered RMS voltage, resistor AC, average power, AC concepts, coil/capacitor reactance, the signed RLC reactance difference, resonance, phase, and RLC impedance concept retrieval.

## Curriculum basis

The current MEXT High School Course of Study commentary for formal `物理` states that the basic properties of AC circuits are addressed, including capacitor and coil reactance and the impedance of a series circuit containing a resistor, capacitor and coil. The direct RLC impedance checkpoint remains within that stated scope.

The canonical Physics PLAN places `原子・光子・エネルギー準位など基本計算` immediately after `交流の基本`. With the previously identified direct RLC impedance gap now safely closed, that is the next planned production unit. Re-check the current MEXT scope before defining its first mechanically verifiable calculation checkpoint.

## Validation and publication

- shared helper change: `scripts/science_worksheet_helpers.py`
- definitions: `scripts/science_physics_ac_basics.py`
- relation regression: `tests/test_science_formula_relations.py`
- independent AC validation: `tests/test_science_physics_ac_basics.py`
- direct answers are independently recomputed from learner-visible `R`, `XL`, `XC`
- relation arity/domain checks reject malformed or negative-magnitude inputs
- inverse generation is explicitly rejected
- deterministic regeneration and corrupted-answer rejection passed
- all 30 new normalized hashes are unique and disjoint from the previously published 3000-row formal-Physics catalog
- prospective generation produced 30 PDFs and validated a 3030-row / 3030-unique-hash catalog
- prospective validation Actions run `33233248725`: success
- implementation PR #302 merged as `d335c778554489da887179f2276c30313a66c647`
- production Actions run `33233342276`: success
- production passed latest-main confirmation, full formal-Physics regression, generation, post-generation validation, 3030-row catalog/PDF validation and non-force safe push
- publication commit: `e7219630e91dbd43569ec80a35243db144d78db6` (`Publish 30 formal Physics RLC impedance worksheets`)
- catalog concurrency audit run `33233342278`: success
- final contract: 3030 formal-Physics rows / 3030 unique hashes; `numeric=2110`, `accepted-set=920`; calculation-basic 780, calculation-reverse 1330, retrieval forward/reverse/fill/true-false 230 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at `原子 / 原子・光子・エネルギー準位など基本計算`, which is the next unit in the canonical Physics PLAN after `交流の基本`.

Before implementing the first atomic-physics checkpoint, verify the exact current MEXT scope and select only basic relationships that can be independently recomputed from learner-visible values and mechanically validated. Do not create an RLC reverse series unless an explicit future specification establishes an unambiguous inverse branch.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
