# Science Worksheet Factory — handoff

Updated: 2026-09-11

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 3090 PDFs
- total published physics: 4248 PDFs

Formal `物理` now has 3090 catalog rows / 3090 unique normalized content hashes. All formal-Physics rows use `formal_course=物理`, `grade=null`, 20 problems, `difficulty=basic`, and the shared focused-series publication path. Answer types are `numeric=2170` and `accepted-set=920`. Worksheet modes are `calculation-basic=810`, `calculation-reverse=1360`, and 230 each of retrieval forward/reverse/fill/true-false.

## Completed this run — reverse photon frequency from E=hν, 30 PDFs

- skill: `atomic-photon-energy-numeric`
- unit: `原子：光子とエネルギー`
- learner-visible relation: `E=hν`
- calculation convention: `h=6.63×10^-34 J·s`, `ν=a×10^14 Hz`, `E=b×10^-20 J`
- added 30 reverse-calculation worksheets, each 20 problems, solving `ν` from `E` and `h`
- direct and reverse directions now total 60 worksheets for this skill/unit
- scientific-notation exponents remain learner-visible; the shared formula generator computes only the decimal coefficients
- implementation reuses the existing shared `product` relation and the existing formal-Physics publisher; no duplicate generator or publication path was introduced

The current scope check from the preceding direct `E=hν` checkpoint remains applicable because this run only reverses the same already-authorized learner-visible relation; no new physics relation was introduced.

## Validation and publication

- definitions: `scripts/science_physics_atomic.py`
- publisher registration: existing `scripts/publish_science_physics.py`
- independent validation: `tests/test_science_physics_atomic.py`
- direct answers are recomputed independently as `E = hν`
- reverse answers are recomputed independently as `ν = E/h`
- deterministic regeneration and corrupted-answer rejection passed for both directions
- all 60 current atomic normalized hashes are mutually unique and disjoint from the rest of the published formal-Physics catalog
- prospective publication produced the new reverse batch and validated a 3090-row / 3090-unique-hash formal-Physics catalog
- branch was reconciled twice with the then-latest `main`; concurrent changes were unrelated Shinkansen and math work
- final PR validation Actions run `34495082159`: success
- implementation PR #823 merged as `80d51296f6db261f1b6e20ed6007553c4d1745db`
- production Actions run `34495198974`: success
- production passed latest-main confirmation, full formal-Physics regression, generation, post-generation validation, 3090-row catalog/PDF validation and non-force safe push
- publication commit: `8c47aa7e193159b26b99f8af6a5249812d0983cc` (`Publish 30 formal Physics photon-frequency worksheets`)
- final contract: 3090 formal-Physics rows / 3090 unique hashes; `numeric=2170`, `accepted-set=920`; calculation-basic 810, calculation-reverse 1360, retrieval forward/reverse/fill/true-false 230 each
- `atomic-photon-energy-numeric`: 60 rows
- `原子：光子とエネルギー`: 60 rows
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

The Physics curriculum plan specifies the remaining atomic scope only broadly as `原子・光子・エネルギー準位など基本計算`; it does not yet name the next concrete formula after the completed direct/reverse `E=hν` pair.

Before adding another atomic calculation, re-check the current MEXT scope together with `docs/science-worksheet-factory/curriculum/physics/PLAN.md` and identify a concrete mechanically verifiable learner-visible relation that is already supported by the authoritative scope. Do not invent or silently add a new physics relation when the plan does not determine it.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
