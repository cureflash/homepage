# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed this run

- Started from latest `main`, re-read the science factory control documents and the shared worksheet-factory rules, and resumed Phase 3 at formal high-school course `物理基礎`. No later science course was advanced.
- Re-opened the current MEXT high-school science commentary for `物理基礎 / 様々な物理現象とエネルギーの利用 / 熱`. The current commentary explicitly includes heat and temperature, heat capacity, specific heat capacity (specific heat), heat transfer and conservation of heat quantity. NIST SI material was also checked for the coherent units used here: heat capacity J/K and specific heat capacity J/(kg·K).
- Added `scripts/science_physics_basic_heat.py` for the first heat checkpoint, all 20 problems per worksheet:
  - `Q = mcΔT`: 40 variants, 10 each solving `Q`, `m`, `c`, and `ΔT`;
  - `Q = CΔT`: 20 variants, 10 solving `Q` and 10 solving `C`.
- Used coherent SI quantities throughout this first family: `Q` in J, `m` in kg, `c` in J/(kg·K), `C` in J/K, and temperature difference `ΔT` in K. This keeps the family at formula-understanding/substitution level and avoids mixing a unit-conversion exercise into the first heat block.
- Reused the existing shared `product` relation for both formula families. No shared helper relation, validator, PDF renderer, or catalog schema was changed.
- Added `tests/test_science_physics_basic_heat.py`. It checks exactly 60 variants × 20 problems, deterministic regeneration, shared independent validation, 60 unique normalized hashes, all six solve directions, explicit independent arithmetic for direct/reverse forms, and requested answer units.
- Independently reproduced the new formula generation/recomputation logic outside the committed generation path during this run. Result: 60 batches, all 20 problems, and 60/60 mutually unique normalized hashes. A repository search also found no pre-existing new heat worksheet IDs.
- Extended `scripts/publish_science_physics_basic.py` to include heat, and extended `.github/workflows/science-physics-basic-publish.yml` so a successful publication must validate exactly 450 Physics Basics worksheets, 170 `calculation-basic`, 280 `calculation-reverse`, 40 `specific-heat-quantity`, 20 `heat-capacity`, 60 heat-unit entries, 450 unique content hashes, and the existing PDF existence/size/two-page checks.
- PR #68 (`Add Physics Basics heat worksheets`) was merged to `main`; merge commit `3aae6b7d607f1a25b88d86c2eb9a51898b554360`.
- Follow-up commit `8bdcad43a80b81b021cf51747bc5b828353bf4a1` only documented the deliberate `ΔT` unit convention; it did not change generation behavior.
- Reconciled against latest `main` before recording this handoff. No unrelated repository progress was rolled back.

## Publication status — important

The 60 heat PDFs are **not yet counted as published**.

The intended `Publish Physics Basics worksheets` workflow did not start for the app-authored merge/direct update. Only unrelated Pages/SEO workflows appeared for the new commits. The workflow file itself is active and contains `workflow_dispatch` plus the expected push path filters, but the connector available in this run exposes rerun operations, not a fresh workflow-dispatch operation. Re-running the previous successful Physics Basics run is not a safe substitute because that historical run uses the earlier workflow definition with the 390-sheet post-generation assertion.

Therefore this run deliberately did **not** claim success, did not advance STATUS to waves, and did not manually fabricate catalog rows or binary PDFs through a divergent publication path. The source/test/workflow checkpoint is on `main`; the authoritative generated publication checkpoint remains the previous 390-PDF state until the current workflow/equivalent validated publisher actually commits the 60 PDFs and catalog rows.

## Changed files now on main

- `scripts/science_physics_basic_heat.py`
- `tests/test_science_physics_basic_heat.py`
- `scripts/publish_science_physics_basic.py`
- `.github/workflows/science-physics-basic-publish.yml`
- `docs/science-worksheet-factory/STATUS.json`
- `docs/science-worksheet-factory/90_HANDOFF.md`

No new heat PDF or `worksheets/catalog.json` publication commit has been recorded yet.

## Validation completed before publication

Completed in this run:

- current MEXT heat scope re-check;
- SI unit re-check for heat capacity / specific heat capacity;
- deterministic formula generation design;
- independent direct/reverse arithmetic recomputation;
- 60 × 20 intended problem count;
- 60/60 unique normalized hashes among the new variants;
- no pre-existing new heat worksheet IDs found;
- no shared-generator relation change required.

Still required before publication can be declared complete:

- execute the current Physics Basics publish workflow (or equivalent current-main publication path);
- shared `test_worksheet_factory.py` plus all Physics Basics topic tests including heat must pass in the publication environment;
- generated catalog must contain exactly 450 Physics Basics entries with 450 unique hashes and exact skill/unit/mode counts encoded in the current workflow;
- all 60 heat PDFs must be generated through the authoritative renderer and pass file, size, `%PDF`, and two-page checks;
- generated PDFs and catalog must be committed/pushed to current `main` without overwriting parallel work;
- representative screenshot-based visual PDF QA remains pending, as it already was before this run.

## Current authoritative published coverage

Until the generated publication commit succeeds, published counts remain unchanged:

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: 390 worksheets;
- total published physics: **678 worksheets**.

`物理基礎` published unit counts remain:

- `運動の表し方`: 90;
- `様々な力とその働き`: 130;
- `力学的エネルギー`: 170;
- heat: 0 published in the catalog at this checkpoint, although the 60-sheet source family is ready on `main`.

After successful heat publication the intended counts are `物理基礎` 450 and total physics 738.

## Exact next starting point

Continue Phase 3 at **Physics Basics heat publication**. Do not start waves yet.

1. start from latest `main` and repeat the required science/shared control-document read sequence;
2. preserve any parallel repository progress;
3. verify the current heat source/test/workflow files are still present and unchanged or reconcile intentional parallel edits;
4. run the current Physics Basics publication workflow or an equivalent fully validated current-main publisher;
5. require all shared/topic tests, independent recomputation, exact 450-entry counts, normalized-hash uniqueness, PDF structure checks, catalog validation, and commit/push success;
6. only after the 60 heat PDFs and catalog rows are actually on `main`, update published counts to `物理基礎` 450 / physics 738;
7. then advance in production-map order to waves/sound -> electricity -> energy use;
8. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not inflate heat with wording-only duplicates, do not add multi-step calorimetry merely for volume, and do not claim publication from source readiness alone.
