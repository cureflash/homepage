# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2880 PDFs
- total published physics: 4038 PDFs

Formal `物理` has 2880 catalog rows / 2880 unique normalized content hashes. All formal-Physics rows use `formal_course=物理`, `grade=null`, 20 problems, `difficulty=basic`, and the shared focused-series publication path. Answer types are `numeric=2000` and `accepted-set=880`. Worksheet modes are `calculation-basic=720`, `calculation-reverse=1280`, and 220 each of retrieval forward/reverse/fill/true-false.

The previous handoff was stale at 2640 PDFs. Since then, the already-merged electromagnetic-induction follow-up was successfully published as commit `4c2483391d5d71d31a2896f072b23f34125d3092`, adding 120 PDFs: self induction 40, mutual induction 40, and induction follow-up concepts 40. This run reconciled that state before advancing.

## Completed this run — AC basics, 120 PDFs

### 1. Sinusoidal RMS voltage — 20 PDFs

- skill: `ac-sinusoidal-rms-voltage-numeric`
- unit: `電気と磁気：交流の基本`
- learner-visible relation: `Vmax=√2 Veff`
- numerical problems explicitly supply `√2≈1.414`; no hidden constant is used
- 10 direct maximum-voltage worksheets + 10 reverse RMS-voltage worksheets
- existing reversible `product` relation is reused

### 2. Pure-resistor AC Ohm law — 30 PDFs

- skill: `ac-resistor-ohm-rms-numeric`
- learner-visible relation: `Veff=Ieff R`
- learner-visible quantities and units: `Veff[V]`, `Ieff[A]`, `R[Ω]`
- 10 voltage + 10 current reverse + 10 resistance reverse worksheets
- existing reversible `product` relation is reused

### 3. Pure-resistor average power — 30 PDFs

- skill: `ac-resistor-average-power-numeric`
- learner-visible relation: `P=Veff Ieff` for a resistor-only AC circuit
- learner-visible quantities and units: `P[W]`, `Veff[V]`, `Ieff[A]`
- 10 power + 10 voltage reverse + 10 current reverse worksheets
- existing reversible `product` relation is reused

### 4. AC fundamentals — 40 PDFs

- skill: `ac-core-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers AC, period, frequency/Hz, `f=1/T`, effective value, sinusoidal maximum/effective relation, and the same-phase property of a resistor-only AC circuit
- finite accepted-answer sets are independently validated

## Curriculum basis

The current MEXT High School Course of Study commentary for formal `物理` states that electromagnetic induction includes AC generation and that the basic properties of AC circuits are also addressed. It further explicitly notes capacitor/coil reactance and the impedance of a series circuit containing a resistor, capacitor and coil. This batch therefore starts with basic AC/effective-value/resistor relationships and does not invent material outside that sequence.

## Validation and publication

- no shared formula helper changed
- new definitions: `scripts/science_physics_ac_basics.py`
- independent validation: `tests/test_science_physics_ac_basics.py`
- deterministic regeneration, independent recomputation from learner-visible values, positive-domain checks and corrupted-answer rejection are covered
- retrieval answers use finite non-empty accepted sets
- all 120 new normalized hashes are unique and disjoint from the previously published catalog
- implementation PR #292 merged as `7bd18cb04a51f7b106fdd80d56243ea91e25ce64`
- production Actions run `33228067387`: success
- production passed latest-main confirmation, full formal-Physics regression, generation, post-generation validation, 2880-row catalog/PDF validation and non-force safe push
- publication commit: `19c66228c8a70627426429071d8ac39bb708465b` (`Publish 120 formal Physics AC basics worksheets`)
- final contract: 2880 formal-Physics rows / 2880 unique hashes; `numeric=2000`, `accepted-set=880`; calculation-basic 720, calculation-reverse 1280, retrieval forward/reverse/fill/true-false 220 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` within `電気と磁気 / 交流の基本`.

Start by rechecking the current MEXT treatment of capacitor and coil reactance, then series RLC impedance. Implement only relations whose constants, frequency dependence, phase/geometry conditions and units can be made learner-visible and independently machine-verifiable. Do not advance to the `原子` production stage until the planned AC coverage is safely complete.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
