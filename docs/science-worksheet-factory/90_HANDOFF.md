# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1730 PDFs
- total published physics: 2888 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 270 PDFs
- `波：波の伝わり方`: 120 PDFs

All 1730 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1250` and `accepted-set=480`. Worksheet modes are `calculation-basic=450`, `calculation-reverse=800`, and 120 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — formal Physics waves, 120 PDFs

Three consecutive safe checkpoints were completed. The existing finite-answer retrieval generator was reused throughout; no shared formula relation changed.

### 1. Wave propagation, reflection and refraction — 40 PDFs

- skill: `wave-propagation-core-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- covers Huygens' principle, wavefronts, water-wave reflection, water-wave refraction, frequency across a boundary, wavelength/speed relation, and refractive-index meaning
- finite accepted answers only; reverse shown descriptions are required to be unique

### 2. Sinusoidal-wave expression and phase — 40 PDFs

- skill: `wave-sine-phase-core-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- covers amplitude, period, wavelength, phase, a representative `+x` travelling-wave form `y=A sin 2π(t/T-x/λ)`, same phase at separation `λ`, and opposite phase at separation `λ/2`
- no diagram-dependent inference was introduced

### 3. Water-wave interference and diffraction — 40 PDFs

- skill: `water-wave-interference-diffraction-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- covers interference, constructive path difference `mλ`, destructive path difference `(m+1/2)λ` for same-phase sources, diffraction, the wavelength/aperture-width relationship, and qualitative effects of changing source spacing/frequency
- finite accepted answers only

## Curriculum placement decision

The current MEXT High School Course of Study Commentary was rechecked before implementation. In formal `物理`, the wave block explicitly treats:

- wave propagation and representation, including Huygens' principle, water-wave reflection/refraction, sinusoidal-wave expression and phase;
- water-wave interference and diffraction.

Standing waves (`定在波` / `定常波`) are treated in `物理基礎`, so the loose previous handoff wording "wave interference / standing-wave coverage" was not followed literally. Duplicating standing-wave content into formal `物理` would conflict with the authoritative current-course placement and existing Physics-Basics coverage.

The next formal-Physics wave subsection is `音`, beginning with sound interference/diffraction and then the Doppler effect. MEXT specifies sound interference/diffraction and treats Doppler mainly for observer and source moving on the same straight line.

## Validation and publication

- implementation PR #244 merged as `1be1203a28221be048a6bf72c6404e8747434cb0`
- the branch production run failed only because that workflow intentionally checks out `main` even on branch pushes, so the new branch-only wave test file was absent; existing formal-Physics tests passed before that expected missing-file failure
- production Actions run `33188717422` completed successfully after merge
- every production step succeeded: latest-main confirmation, all shared/formal-Physics tests including the new wave tests, 120-PDF generation, post-generation validation, 1730-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `bf6a2ae370e707f187fcf71ee6bb6bb0f2c7ed9a` (`Publish 120 formal Physics wave worksheets`)
- final contract: 1730 formal-Physics rows / 1730 unique hashes; `numeric=1250`, `accepted-set=480`; calculation-basic 450, calculation-reverse 800, retrieval forward/reverse/fill/true-false 120 each
- new wave tests require deterministic regeneration, finite-answer independent validation, corrupted-answer rejection, reverse-retrieval uniqueness, 120/120 new normalized-hash uniqueness and disjointness from the existing catalog

## Shared catalog-writer safety reconciled

The Physics publisher had remained on temporary recovery concurrency group `worksheet-catalog-publish-v2` from an earlier stale JH3 writer incident. The repository-wide shared instructions and `tests/test_worksheet_catalog_writer_concurrency.py` require every authoritative catalog writer to use `worksheet-catalog-publish-v1`.

The old blocking JH3 run `33134751770` is now completed/cancelled, so the recovery split is no longer needed. This run restored the Physics publisher to `worksheet-catalog-publish-v1`. The post-merge catalog concurrency audit run `33188717453` passed, restoring one repository-wide serialized writer group without weakening latest-main checks or non-force push safety.

## Exact next starting point

Continue formal course `物理` in the wave block at **`音：音の干渉と回折`**, then **`音のドップラー効果`**.

1. Start from latest `main`; re-read the science factory instructions, execution plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT sound subsection before defining content. Keep Doppler work initially within the stated same-line source/observer treatment unless a broader case is independently justified by the curriculum source.
3. Prefer machine-verifiable finite-answer facts for sound interference/diffraction. For Doppler numerical work, define sign/direction conventions and learner-visible quantities before generating reverse formulas.
4. Reuse existing formula/retrieval relations where transparent. A new shared relation requires its own independent regression tests plus relevant Physics/Physics-Basics regressions.
5. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent recomputation/finite-set validation, corrupted-answer rejection, reverse-retrieval uniqueness, normalized-hash uniqueness and existing-catalog collision checks, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
