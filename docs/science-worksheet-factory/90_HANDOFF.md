# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed exactly at the unresolved `物理基礎` heat-publication checkpoint.
- Rechecked stale Actions run `32984118839`: it was still `queued` with zero jobs, while unrelated repository Actions were executing normally.
- Confirmed the expected first heat PDF was still absent from `main`, so source readiness was not miscounted as publication.
- Recovered the stuck publication path by moving only this workflow to fresh concurrency group `science-physics-basic-publish-v2`; all latest-main checkout, validation, and final parent guards were preserved.
- Recovery PR #81 was used for the workflow change. Its push triggered Actions run `32997246034`, which completed successfully.
- Run `32997246034` checked out then-current `main` (`2cc9dc2e30270c35bb81ea157792efacdfc83702`), ran shared and all Physics Basics topic tests, generated the heat batch, re-ran validation, and safely pushed publication commit `48a0f5a52e467d8879b77bf2682303557cab091c` to `main`.
- The run log explicitly reports `published 60 Physics Basics worksheets` and `Physics Basics 450-PDF catalog validation: OK`.
- The validation requires exactly 450 Physics Basics rows, 450 unique content hashes, exactly 40 `specific-heat-quantity` and 20 `heat-capacity` rows, correct course/unit metadata, and every registered PDF to begin with `%PDF`, exceed 1000 bytes, and contain `/Count 2`.
- Recovery PR #81 was then merged so the fresh concurrency group is retained on `main`; merge commit `28054f5bd5a68d690d50a572a9cd029f5f326048` includes the already-published heat commit and the workflow recovery change without rolling back parallel work.

## Published heat checkpoint

The 60 heat worksheets are now authoritative published output:

- `Q = mcΔT`: 40 variants, 10 each solving `Q`, `m`, `c`, and `ΔT`;
- `Q = CΔT`: 20 variants, 10 solving `Q` and 10 solving `C`;
- 20 problems per worksheet;
- SI quantities remain `Q` in J, `m` in kg, `c` in J/(kg·K), `C` in J/K, and `ΔT` in K;
- existing shared `product` relation only; no shared relation/validator/renderer/catalog-schema change.

The heat tests cover deterministic regeneration, independent direct/reverse recomputation, all solve directions, answer units, problem counts, and normalized-hash uniqueness. The publication workflow then repeated the full shared/topic suite after generation and validated all 450 Physics Basics catalog/PDF outputs.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **450 worksheets**;
- total published physics: **738 worksheets**.

`物理基礎` unit counts are now:

- `運動の表し方`: 90;
- `様々な力とその働き`: 130;
- `力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60.

## Exact next starting point

Continue Phase 3 at **`物理基礎：波・音`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve all parallel repository progress.
3. Re-check the current MEXT Physics Basics commentary for wave speed, frequency, wavelength, and the basic sound quantities/relationships to be drilled.
4. Inspect the existing shared formula relations before adding anything new. Prefer reuse when `v = fλ` and any selected sound relation can be represented safely; add a new shared relation only with dedicated regression tests.
5. Build the next coherent 30–60 worksheet batch in curriculum order, with deterministic seeds, independent answer recomputation, requested units, normalized-hash duplicate rejection, and `formal_course=物理基礎`, `grade=null`.
6. Extend the existing Physics Basics publisher/workflow rather than creating a parallel pipeline; update exact expected catalog counts and topic/unit counts.
7. Publish only after shared/topic tests, PDF generation, catalog validation, PDF existence/size/header/two-page checks, and safe current-main push all succeed.
8. Representative screenshot-based visual PDF QA is still pending; do not silently mark it passed.

Do not jump to electricity or energy use before the waves/sound checkpoint is complete.
