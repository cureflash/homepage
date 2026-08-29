# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2640 PDFs
- total published physics: 3798 PDFs

Formal `物理` now includes `電気と磁気：電磁誘導` 120 PDFs in addition to the previously published 2520 PDFs. All 2640 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1840` and `accepted-set=800`. Worksheet modes are `calculation-basic=670`, `calculation-reverse=1170`, and 200 each of retrieval forward/reverse/fill/true-false.

## Completed this run — electromagnetic induction, 120 PDFs

### 1. Faraday average induced emf — 40 PDFs

- skill: `induction-faraday-average-emf-numeric`
- relation: `E=N|ΔΦ|/Δt`
- learner-visible quantities and units: `E[V]`, `N[巻]`, `|ΔΦ|[Wb]`, `Δt[s]`
- numerical worksheets explicitly solve magnitude only; direction/sign is not hidden in generator state
- 10 direct emf, 10 reverse turns, 10 reverse flux-change, 10 reverse time worksheets
- existing reversible `product-over-divisor` relation is reused

### 2. Perpendicular motional emf — 40 PDFs

- skill: `induction-motional-emf-perpendicular-numeric`
- relation: `E=Blv`
- learner-visible condition: magnetic field, conductor rod and velocity are mutually perpendicular
- learner-visible units: `B[T]`, `l[m]`, `v[m/s]`, `E[V]`
- 10 direct emf, 10 reverse magnetic-flux-density, 10 reverse rod-length, 10 reverse speed worksheets
- existing reversible `product` relation is reused

### 3. Electromagnetic-induction concepts — 40 PDFs

- skill: `induction-core-concepts`
- 10 each of forward, reverse, fill and true/false retrieval
- covers electromagnetic induction, Faraday's law, Lenz's law, magnetic flux/Wb, zero emf for unchanging flux, and perpendicular motional emf
- finite accepted-answer sets are independently validated

## Validation and publication

- no shared formula helper changed
- deterministic regeneration and independent recomputation from learner-visible values are covered by `tests/test_science_physics_electromagnetic_induction.py`
- corrupted numerical answers are rejected; positive physical domains and finite retrieval answer sets are checked
- all 120 new normalized hashes are unique and disjoint from the previously published catalog
- implementation PR #284 merged as `ec408c980d12705428c816688fd88f489a7c3f9a`
- production Actions run `33222741428`: success
- all production steps succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2640-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `f6a6dea9fcfb26b36ed011ba0193f29dd65dd289` (`Publish 120 formal Physics electromagnetic-induction worksheets`)
- final contract: 2640 formal-Physics rows / 2640 unique hashes; `numeric=1840`, `accepted-set=800`; calculation-basic 670, calculation-reverse 1170, retrieval forward/reverse/fill/true-false 200 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Curriculum basis and exact next starting point

The current MEXT High School Course of Study (平成30年告示) remains the authority for formal `物理`. This run stays inside the electricity-and-magnetism electromagnetic-induction sequence and keeps formula conditions, quantities and direction treatment learner-visible. The official current Course of Study and commentary are published by MEXT.

Continue formal course `物理` within `電気と磁気 / 電磁誘導`. Before advancing to the existing next major plan item `交流の基本`, recheck the current MEXT commentary and implement any remaining electromagnetic-induction subcontent only when its conditions and answers can be made explicit and independently machine-verifiable. Do not treat the whole electromagnetic-induction unit as exhausted solely because these first 120 PDFs are published.

Preserve deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety. Representative screenshot-based visual QA remains pending.
