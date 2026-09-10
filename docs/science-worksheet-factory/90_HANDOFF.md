# Science Worksheet Factory — handoff

Updated: 2026-09-10

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 3060 PDFs
- total published physics: 4218 PDFs

Formal `物理` now has 3060 catalog rows / 3060 unique normalized content hashes. All formal-Physics rows use `formal_course=物理`, `grade=null`, 20 problems, `difficulty=basic`, and the shared focused-series publication path. Answer types are `numeric=2140` and `accepted-set=920`. Worksheet modes are `calculation-basic=810`, `calculation-reverse=1330`, and 230 each of retrieval forward/reverse/fill/true-false.

## Completed this run — photon energy E=hν, 30 PDFs

- skill: `atomic-photon-energy-numeric`
- unit: `原子：光子とエネルギー`
- learner-visible relation: `E=hν`
- calculation convention: `h=6.63×10^-34 J·s`, `ν=a×10^14 Hz`, so `E=(6.63×a)×10^-20 J`
- 30 direct-calculation worksheets, each 20 problems
- scientific-notation exponents remain learner-visible; the shared formula generator computes the decimal coefficients
- implementation reuses the existing shared `product` relation and the existing formal-Physics publisher; no duplicate generator or publication path was introduced

The current MEXT high-school science commentary was rechecked before implementation. The formal `物理` atomic section covers the photon hypothesis/photoelectric effect and atomic spectra/energy levels, so the direct photon-energy relation is within the current scope.

## Validation and publication

- definitions: `scripts/science_physics_atomic.py`
- publisher registration: `scripts/publish_science_physics.py`
- independent validation: `tests/test_science_physics_atomic.py`
- direct answers are independently recomputed from learner-visible coefficients
- deterministic regeneration and corrupted-answer rejection passed
- all 30 new normalized hashes are unique and disjoint from the previously published formal-Physics catalog
- prospective publication produced 30 PDFs and validated a 3060-row / 3060-unique-hash catalog
- an initial post-publication regression failed because the collision test compared the newly generated atomic rows against themselves; the test was corrected at the root by excluding the current atomic IDs, matching the established AC regression pattern
- branch was reconciled with the then-latest `main` before final validation; concurrent changes were in unrelated Japanese/math files
- PR validation Actions run `34491494429`: success
- implementation PR #815 merged as `9e379fb5939bb391786ec607fc7a70253c39346c`
- production Actions run `34491599999`: success
- production passed latest-main confirmation, full formal-Physics regression, generation, post-generation validation, 3060-row catalog/PDF validation and non-force safe push
- publication commit: `567b79752109f51c3c6e9332faf4ed833dab7ec8` (`Publish 30 formal Physics photon-energy worksheets`)
- final contract: 3060 formal-Physics rows / 3060 unique hashes; `numeric=2140`, `accepted-set=920`; calculation-basic 810, calculation-reverse 1330, retrieval forward/reverse/fill/true-false 230 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` in `原子` with the next canonical progression step for the same relation: reverse calculation of frequency `ν` from photon energy `E` using `E=hν`.

Before implementation, re-check the current MEXT scope and retain only a mechanically verifiable, learner-visible formulation. Do not introduce hidden precomputed values or a second publication pipeline.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
