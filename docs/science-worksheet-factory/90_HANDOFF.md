# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 3000 PDFs
- total published physics: 4158 PDFs

Formal `物理` has 3000 catalog rows / 3000 unique normalized content hashes. All formal-Physics rows use `formal_course=物理`, `grade=null`, 20 problems, `difficulty=basic`, and the shared focused-series publication path. Answer types are `numeric=2080` and `accepted-set=920`. Worksheet modes are `calculation-basic=750`, `calculation-reverse=1330`, and 230 each of retrieval forward/reverse/fill/true-false.

## Completed this run — AC reactance and series-RLC foundations, 120 PDFs

### 1. Coil reactance — 30 PDFs

- skill: `ac-inductive-reactance-numeric`
- unit: `電気と磁気：交流の基本`
- learner-visible relation: `XL=ωL=2πfL`
- numerical problems explicitly supply `2π≈6.28`
- learner-visible quantities and units: `XL[Ω]`, `f[Hz]`, `L[H]`
- 10 direct reactance + 10 reverse frequency + 10 reverse inductance worksheets
- existing reversible `product` relation is reused

### 2. Capacitor reactance — 20 PDFs

- skill: `ac-capacitive-reactance-numeric`
- learner-visible relation: `XC=1/(ωC)`
- problems explicitly supply the combined learner-visible quantity `ωC[1/Ω]`; no hidden frequency/capacitance calculation is performed
- 10 direct reactance + 10 reverse `ωC` worksheets
- existing reversible `product-over-divisor` relation is reused

### 3. Series-RLC reactance difference — 30 PDFs

- skill: `ac-series-rlc-reactance-difference-numeric`
- learner-visible relation: `X=XL-XC`
- `X>0` is identified as inductive and `X<0` as capacitive
- learner-visible quantities and units: `X[Ω]`, `XL[Ω]`, `XC[Ω]`
- 10 direct net-reactance + 10 reverse XL + 10 reverse XC worksheets
- existing reversible `difference` relation is reused

### 4. Reactance / series-RLC concepts — 40 PDFs

- skill: `ac-reactance-rlc-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers `XL=ωL=2πfL`, `XC=1/(ωC)=1/(2πfC)`, frequency dependence, coil/capacitor phase relations, series-RLC impedance `Z=√(R²+(XL-XC)²)`, and resonance `XL=XC`, `Z=R`
- finite accepted-answer sets are independently validated

## Curriculum basis

The current MEXT High School Course of Study commentary for formal `物理` explicitly states that the basic properties of AC circuits are addressed, including capacitor and coil reactance and the impedance of a series circuit containing a resistor, capacitor and coil. This batch remains within that scope.

## Validation and publication

- no shared formula helper changed
- definitions: `scripts/science_physics_ac_basics.py`
- independent validation: `tests/test_science_physics_ac_basics.py`
- deterministic regeneration, independent recomputation from learner-visible values, domain checks and corrupted-answer rejection are covered
- retrieval answers use finite non-empty accepted sets
- all 120 new normalized hashes are unique and disjoint from the previously published catalog
- implementation PR #297 merged as `da8efe62766f5ada090be2abe7f65062b30e2069`
- production Actions run `33230501725`: success
- production passed latest-main confirmation, full formal-Physics regression, generation, post-generation validation, 3000-row catalog/PDF validation and non-force safe push
- publication commit: `232e5941702db187740726967cf6f8d624a257c0` (`Publish 120 formal Physics AC reactance worksheets`)
- final contract: 3000 formal-Physics rows / 3000 unique hashes; `numeric=2080`, `accepted-set=920`; calculation-basic 750, calculation-reverse 1330, retrieval forward/reverse/fill/true-false 230 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` within `電気と磁気 / 交流の基本`.

The next numerical gap is direct series-RLC impedance `Z=√(R²+(XL-XC)²)`. The existing shared formula relations do not directly express this square-root combination, so add a new general relation only after testing its forward computation, valid domains, independently recomputed visible-value answers, reverse policy, and corrupted-answer rejection. Do not fake the formula by precomputing a hidden intermediate value, and do not advance to the `原子` production stage until the planned AC coverage is safely complete.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
