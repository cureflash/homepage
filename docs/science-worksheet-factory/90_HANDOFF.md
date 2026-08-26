# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed Phase 3 at formal high-school course `物理基礎`, exactly at the unfinished heat-publication checkpoint. No waves/sound or later science topic was advanced.
- Reconfirmed the current MEXT high-school science commentary. `物理基礎 / 様々な物理現象とエネルギーの利用 / 熱` explicitly includes heat and temperature, heat capacity, specific heat capacity (specific heat), heat transfer, and conservation of heat quantity. The existing 60-sheet heat family remains curriculum-aligned.
- Reconciled an important stale statement from the previous handoff: the intended main-branch GitHub Actions publication run **was created**. Run `32984118839`, `Publish Physics Basics worksheets`, was created for merge commit `3aae6b7d607f1a25b88d86c2eb9a51898b554360`.
- At the end of this run, Actions run `32984118839` is still `queued` and has no jobs yet. Therefore none of its required test/generation/publication steps have actually executed.
- Re-read the current workflow and confirmed that it is designed to reconcile concurrent `main` changes safely: it checks out latest `main`, fetches and confirms `origin/main` before validation, runs shared and all Physics Basics topic tests including heat, publishes through the shared renderer/catalog path, checks exactly 450 Physics Basics rows and 450 unique hashes, validates every PDF as `%PDF`, >1000 bytes and two pages, then fetches `origin/main` again and refuses the push unless the generated commit parent is still current `origin/main`.
- Rechecked latest `main` during this run. Parallel Power TOEIC work has advanced `main`; none of it was rolled back or overwritten.
- GitHub public service status reports Actions operational, so no external incident was used as a reason to bypass the authoritative publication path. The queued run is retained rather than replaced with an unsafe historical rerun.
- Updated `STATUS.json` and this handoff to record the actual queued-run state. Published counts are deliberately unchanged.

## Heat source checkpoint already on main

The ready source family is unchanged:

- `Q = mcΔT`: 40 variants, 10 each solving `Q`, `m`, `c`, and `ΔT`;
- `Q = CΔT`: 20 variants, 10 solving `Q` and 10 solving `C`;
- 20 problems per worksheet;
- coherent SI quantities: `Q` in J, `m` in kg, `c` in J/(kg·K), `C` in J/K, `ΔT` in K;
- existing shared `product` relation only; no shared relation/validator/renderer/catalog-schema change.

The existing heat tests cover deterministic regeneration, independent direct/reverse recomputation, all six solve directions, requested answer units, 60 × 20 problem counts, and 60 unique normalized hashes among the new variants.

## Publication status — authoritative

The 60 heat PDFs are **not yet counted as published**.

Run `32984118839` exists, but while it remains queued there is no successful evidence for:

- shared/topic test execution in the publication environment;
- authoritative generation of the 60 heat PDFs;
- exact 450-row Physics Basics catalog validation;
- 450 unique normalized hashes across Physics Basics;
- PDF file/size/header/two-page checks;
- generated catalog/PDF commit and safe push to current `main`.

Do not infer publication from source readiness or from the existence of the queued workflow run.

## Current authoritative published coverage

Until run `32984118839` (or an equivalent fully validated current-main publication path) completes successfully, counts remain:

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: 390 worksheets;
- total published physics: **678 worksheets**.

`物理基礎` published unit counts remain:

- `運動の表し方`: 90;
- `様々な力とその働き`: 130;
- `力学的エネルギー`: 170;
- heat: 0 published at this checkpoint.

After successful heat publication, intended counts are `物理基礎` 450 and total physics 738.

## Exact next starting point

Continue Phase 3 at **Physics Basics heat publication**. Do not start waves yet.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve all parallel repository progress.
3. Re-check Actions run `32984118839` first.
4. If it has started/completed, inspect every job/step result and the resulting `main` commit rather than relying only on the run label.
5. Require shared `test_worksheet_factory.py` plus all Physics Basics topic tests including heat, independent recomputation, exactly 450 Physics Basics catalog rows, 450 unique content hashes, exact heat skill/unit/mode counts, and all PDF existence/size/`%PDF`/two-page checks.
6. Confirm all 60 heat PDFs and catalog rows are actually on current `main`, and that no concurrent work was overwritten.
7. Only then update counts to `物理基礎` 450 / physics 738 and advance to waves/sound -> electricity -> energy use.
8. Representative screenshot-based visual PDF QA is still pending; do not silently mark it passed.

Do not rerun an older historical Physics Basics workflow definition as a substitute, do not fabricate catalog rows/PDFs through a divergent path, and do not advance curriculum order while heat publication is unresolved.
