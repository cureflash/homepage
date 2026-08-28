# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 2040 PDFs
- total published physics: 3198 PDFs

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

All 2040 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1400` and `accepted-set=640`. Worksheet modes are `calculation-basic=530`, `calculation-reverse=870`, and 160 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — numerical optics, 120 PDFs across four safe checkpoints

### 1. Reflection / refractive-index basics — 30 PDFs

- `light-reflection-angle-numeric`: 10 direct worksheets using reflection angle = incidence angle, with both angles explicitly measured from the boundary normal
- `light-refractive-index-speed-numeric`: 20 worksheets using `n=c/v`: 10 direct refractive-index and 10 reverse medium-speed variants
- vacuum light speed `c=3.0×10^8 m/s` is learner-visible

### 2. Snell-law algebra — 30 PDFs

- skill: `light-snell-law-sine-numeric`
- relation: `n1 sin i = n2 sin r`
- 10 direct `sin r`, 10 reverse `n2`, 10 reverse `sin i`
- incidence/refraction angles are explicitly measured from the normal
- `sin i` / `sin r` values are supplied directly; inverse trigonometric angle solving is intentionally not hidden in the generator

### 3. Young interference-fringe spacing — 30 PDFs

- skill: `light-young-fringe-spacing-numeric`
- relation: `Δx=λL/d`
- 10 direct fringe-spacing, 10 reverse screen-distance, 10 reverse slit-spacing worksheets
- `λ`, `L`, `d`, `Δx` are all expressed in mm so no unit conversion is hidden

### 4. Diffraction grating — 30 PDFs

- skill: `light-diffraction-grating-numeric`
- relation: `d sinθ=mλ`
- 10 direct wavelength, 10 reverse grating-spacing, 10 reverse `sinθ` worksheets
- `d` and `λ` are both expressed in μm, diffraction order is a positive integer, and `sinθ` is learner-visible

## Curriculum basis

The current MEXT High School Course of Study / Commentary remains the authority for formal `物理`. The light subsection covers reflection/refraction and refractive index, followed by diffraction/interference including Young interference and diffraction gratings. This run stayed within that existing curriculum placement and then completed the basic numerical light checkpoint before advancing to electricity.

## Validation and publication

- no shared formula helper changed; the new topics reuse the existing `product`, `product-over-divisor`, and `equal-products` relations
- a temporary branch-only candidate workflow was used and removed before merge
- candidate validation run `33202314892`: success
- candidate validation passed the full formal-Physics regression suite, deterministic regeneration, independent recomputation from learner-visible values, corrupted-answer rejection, physical-domain checks, 120/120 new normalized-hash uniqueness and disjointness from the published catalog, generation of all 120 candidate PDFs, 2040-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #259 merged as `f084c28fb68fc379714a41177f6efa4bf90284d4`, while preserving parallel main progress
- production Actions run `33202385235`: success
- every production step succeeded: latest-main confirmation, full regression tests, 120-PDF generation, post-generation validation, 2040-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `0673cc2ab07ad31abf6b32244df1104238a97661` (`Publish 120 formal Physics numerical optics worksheets`)
- final contract: 2040 formal-Physics rows / 2040 unique hashes; `numeric=1400`, `accepted-set=640`; calculation-basic 530, calculation-reverse 870, retrieval forward/reverse/fill/true-false 160 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at **`電気と磁気 / 電場・電位`**.

1. Start from latest `main`; re-read the science factory instructions, plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT `電場・電位` scope and terminology before selecting the first quantitative/retrieval checkpoint.
3. Define learner-visible sign/reference conventions, units, physical domains, rounding/tolerance and an independent recomputation path before numerical generation.
4. Add a new shared formula relation only if existing transparent helpers cannot represent the verified relation safely; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
