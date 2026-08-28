# Science Worksheet Factory — handoff

Updated: 2026-08-29

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1810 PDFs
- total published physics: 2968 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 380 PDFs
- `様々な運動：万有引力`: 180 PDFs
- `様々な運動：気体分子の運動`: 270 PDFs
- `波：波の伝わり方`: 120 PDFs
- `波：音`: 80 PDFs

All 1810 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=1250` and `accepted-set=560`. Worksheet modes are `calculation-basic=450`, `calculation-reverse=800`, and 140 each of retrieval forward/reverse/fill/true-false. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — formal Physics sound, 80 PDFs

Two consecutive safe checkpoints were completed with the existing finite-answer retrieval generator. No shared formula relation changed.

### 1. Sound interference and diffraction — 40 PDFs

- skill: `sound-interference-diffraction-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- unit: `波：音`
- covers sound interference, Quincke tube, sound diffraction, the qualitative wavelength/opening-size relationship, around-corner propagation by diffraction, and sound refraction caused by spatial variation of sound speed
- finite accepted answers only; reverse shown descriptions are required to be unique

### 2. Sound Doppler-effect concepts — 40 PDFs

- skill: `sound-doppler-core-concepts`
- forward / reverse / fill / true-false × 10 deterministic variants
- unit: `波：音`
- covers the Doppler effect, approach/recession and observed frequency, source motion and wavefront/wavelength change, and the current-course emphasis on observer/source motion along the same straight line
- no numerical Doppler formula was introduced in this checkpoint

## Curriculum basis

The current MEXT High School Course of Study Commentary was rechecked before implementation. Formal `物理` explicitly lists under the sound subsection:

- `音の干渉と回折`;
- `音のドップラー効果`.

The commentary treats the Doppler effect mainly for cases where the observer and source move on the same straight line. It also connects source motion to changes in wavefront spacing/wavelength. The implementation therefore keeps this first Doppler checkpoint conceptual and same-line-oriented rather than inventing a numerical sign convention implicitly.

## Validation and publication

- candidate-only validation workflow was used temporarily on the feature branch and removed before merge
- candidate validation run `33193066003` completed successfully
- candidate validation passed all shared/formal-Physics regressions, deterministic regeneration, finite-answer independent validation, corrupted-answer rejection, reverse-retrieval uniqueness, 80/80 new normalized-hash uniqueness and disjointness from the published catalog, rendering, 1810-row prospective catalog validation, and PDF header/size/two-page checks
- implementation PR #249 merged as `d8e548440ea68b9a0358a36c1d6662730b41e4c0`
- production Actions run `33193218889` completed successfully
- every production step succeeded: latest-main confirmation, all shared/formal-Physics tests, 80-PDF generation, post-generation validation, 1810-row catalog/PDF validation, commit, and non-force safe push
- publication commit: `9320dc49ecd7b852ec524d7f9df4ee60f9bfea6c` (`Publish 80 formal Physics sound worksheets`)
- final contract: 1810 formal-Physics rows / 1810 unique hashes; `numeric=1250`, `accepted-set=560`; calculation-basic 450, calculation-reverse 800, retrieval forward/reverse/fill/true-false 140 each
- shared catalog serialization remains `worksheet-catalog-publish-v1`; the branch catalog concurrency audit also passed

## Exact next starting point

Continue formal course `物理` at **`波：音 / 音のドップラー効果の数値計算`**.

1. Start from latest `main`; re-read the science factory instructions, execution plan, STATUS and this HANDOFF, and reconcile parallel progress first.
2. Recheck the current MEXT same-line Doppler treatment before defining formulas.
3. Before numerical generation, explicitly define the direction/sign convention for source and observer motion. Do not encode approach/recession signs implicitly in a generator.
4. Keep the sound speed, source frequency, source speed and observer speed learner-visible as applicable. Define valid physical domains so denominators remain positive and basic-school problems do not silently introduce invalid/supersonic source cases.
5. Define rounding/tolerance and an independent recomputation path before adding direct or reverse numerical variants. Add a new shared formula relation only if existing transparent helpers cannot express the verified relation safely; any new relation requires its own regression tests.
6. Preserve `formal_course=物理`, `grade=null`, deterministic seeds, independent validation, corrupted-answer rejection, normalized-hash uniqueness/existing-catalog collision checks, 20-problem two-page PDFs, mixed answer-type publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
7. After the sound block is complete, continue formal `物理` in curriculum order to the light subsection rather than skipping ahead.
8. Representative screenshot-based visual QA remains pending; structural PDF QA has passed but is not a substitute for visual QA.
