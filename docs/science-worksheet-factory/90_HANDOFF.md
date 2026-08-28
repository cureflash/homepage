# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1920 PDFs
- total published physics: 3078 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 270 PDFs
- `波：波の伝わり方`: 120 PDFs
- `波：音`: 110 PDFs
- `波：光`: 80 PDFs

All 1920 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1280` and `accepted-set=640`. Worksheet modes are `calculation-basic=480`, `calculation-reverse=800`, and 160 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — Doppler numerical + light, 110 PDFs

### 1. Sound Doppler numerical calculation — 30 PDFs

- skill: `sound-doppler-numeric`
- direct observed-frequency calculation × 30 deterministic variants
- unit: `波：音`
- relation: `f_obs = f_src (c + v_o) / (c - v_s)`
- explicit convention: `v_o > 0` means observer moves toward source; `v_s > 0` means source moves toward observer
- sound speed, source frequency, observer speed and source speed are learner-visible
- generated velocity domain keeps `c+v_o > 0` and `c-v_s > 0`; current school-value pool also keeps both moving speeds subsonic
- answers are rounded to 0.1 Hz
- inverse generation is intentionally rejected because the stored observed frequency is rounded

### 2. Light propagation / reflection / refraction / dispersion / polarization — 40 PDFs

- skill: `light-propagation-core-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- unit: `波：光`
- covers vacuum light speed, reflection law, refraction, refractive index, dispersion, polarization and spectrum
- finite accepted answers only; reverse shown descriptions are unique

### 3. Light diffraction and interference — 40 PDFs

- skill: `light-diffraction-interference-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- unit: `波：光`
- covers Young's interference experiment, basic bright/dark path-difference conditions, diffraction grating, thin-film interference, optical path length and reflection phase change
- finite accepted answers only; reverse shown descriptions are unique

## Curriculum basis

The current MEXT High School Course of Study Commentary was rechecked. Formal `物理` treats the Doppler effect mainly for source and observer moving along the same straight line. The following light subsection covers light speed/wavelength, reflection, refraction, dispersion and polarization, followed by diffraction/interference including Young's experiment, diffraction gratings and thin-film interference. The implementation follows that order and keeps the first light checkpoints conceptual before numerical optics.

## Validation and publication

- a temporary branch-only candidate workflow was used for validation and removed before merge
- candidate validation run `33198300108`: success
- candidate validation passed the full formal-Physics regression suite, deterministic regeneration, manual learner-visible Doppler recomputation, domain checks, inverse-generation rejection, corrupted-answer rejection, reverse-retrieval uniqueness, 110/110 new normalized-hash uniqueness and disjointness, local generation of 110 PDFs, 1920-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #254 merged as `4ff540159f9a2918f34e8831dd6f1e5d81ac3b39`
- production Actions run `33198381138`: success
- every production step succeeded: latest-main confirmation, full regression tests, 110-PDF generation, post-generation validation, 1920-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `945ce983553d71e1150bf28248721a6206b27d0e` (`Publish 110 formal Physics Doppler and light worksheets`)
- final contract: 1920 formal-Physics rows / 1920 unique hashes; `numeric=1280`, `accepted-set=640`; calculation-basic 480, calculation-reverse 800, retrieval forward/reverse/fill/true-false 160 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`

## Exact next starting point

Continue formal course `物理` at **`波：光 / 光の反射・屈折・干渉の基本計算`**.

1. Start from latest `main`; re-read the science factory instructions, plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT light treatment before selecting the first numerical optics relation.
3. Define the learner-visible quantities, angle convention, valid domains, rounding/tolerance and an independent recomputation path before numerical generation.
4. Add a new shared formula relation only if existing transparent helpers cannot represent the verified relation safely; any shared-generator change requires regression tests.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
