# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, re-read the science factory control documents, all science curriculum plans, and the required shared worksheet-factory control documents. Science continues to use the shared generator/validator/PDF/catalog path rather than a competing renderer or catalog.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 / 物体の運動とエネルギー / 力学的エネルギー`. The commentary treats conversion between kinetic and potential energy and mechanical-energy conservation, and the existing curriculum verification remains that conservation is handled mainly under the no-friction/no-air-resistance condition.
- Added `scripts/science_physics_basic_conservation.py` with 30 focused mechanical-energy-conservation worksheets, all 20 problems each:
  - 10 sheets solve conserved mechanical energy `E` from later kinetic energy `K` and potential energy `U`;
  - 10 sheets solve later kinetic energy `K` from conserved mechanical energy `E` and later potential energy `U`;
  - 10 sheets solve later potential energy `U` from conserved mechanical energy `E` and later kinetic energy `K`.
- Reused the already-tested shared `sum` relation as `E = K + U`. No shared science helper, common generator relation, validator relation, PDF renderer or catalog schema change was needed.
- The learner-facing conserved-energy variable label explicitly says `摩擦・空気抵抗がないとき`, so every generated direct and reverse problem displays the relevant condition rather than relying only on worksheet metadata or description.
- Added `tests/test_science_physics_basic_conservation.py` to validate exactly 30 variants, deterministic regeneration, independent direct/reverse recomputation, 30 unique normalized hashes, the three solve directions, and presence of the no-friction/no-air-resistance condition in every learner-facing problem string.
- Extended `scripts/publish_science_physics_basic.py` to include the new conservation topic and extended `.github/workflows/science-physics-basic-publish.yml` to validate exactly 390 Physics Basics worksheets, including exactly 30 `mechanical-energy-conservation` entries and 170 total `力学的エネルギー` entries.
- Re-checked `main` immediately before integration. No parallel main advance occurred between the science branch base and merge, so the four intended source/test/workflow changes were merged without overwriting unrelated Power TOEIC or other repository work.
- PR #64 (`Add Physics Basics mechanical energy conservation worksheets`) was merged. Merge commit: `dffb0cd34350c80d36067ffd9d5d451785250d5a`.
- GitHub Actions run `32978429745` completed successfully. All steps, including latest-main confirmation, shared/topic tests, generation, post-generation catalog/output validation, and generated commit/push, succeeded.
- The Actions publication commit is `25869523c8e4e988c755e32c7c542f58f3a433a5` (`Publish 30 Physics Basics mechanical energy conservation worksheets`). It added the 30 PDFs and catalog rows to `main`.

## Changed files

Source/test/workflow changes:

- `scripts/science_physics_basic_conservation.py`
- `scripts/publish_science_physics_basic.py`
- `tests/test_science_physics_basic_conservation.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 30 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/STATUS.json`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32978429745`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- `python tests/test_science_physics_basic_forces.py` -> OK;
- `python tests/test_science_physics_basic_energy.py` -> OK;
- `python tests/test_science_physics_basic_conservation.py` -> OK;
- generation/registration of the new Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 390 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 150 `calculation-basic` + 240 `calculation-reverse` entries -> OK;
- skill count `mechanical-energy-conservation` = exactly 30 -> OK;
- unit counts are exactly 90 `運動の表し方` + 130 `様々な力とその働き` + 170 `力学的エネルギー` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 390 Physics Basics worksheets contain 20 problems and have unique normalized content hashes -> OK;
- full shared catalog validation with repository-root output checks -> OK;
- all registered Physics Basics PDFs exist, begin with `%PDF`, exceed the minimum-size check, and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used, and the answer page preserves the problem layout with answers added in red.

Representative screenshot-based worksheet PDF visual QA remains incomplete. Structural PDF validation passed. An external raw-PDF fetch for screenshot inspection was not available in this run, so do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` still needs heat, waves/sound, electricity and energy use, and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 390 worksheets.

Current published physics total: **678 worksheets**.

`物理基礎` current unit counts:

- `運動の表し方`: 90 worksheets;
- `様々な力とその働き`: 130 worksheets;
- `力学的エネルギー`: 170 worksheets.

The 170-sheet energy block now consists of work 30, work rate 20, gravitational potential energy 30, kinetic energy 30, elastic potential energy 30, and mechanical-energy conservation 30.

The first mechanics-energy production block is now coherent enough to advance in the defined production map. Do not add wording-only conservation variants merely to increase counts.

## Incomplete work / blockers

- `物理基礎` next needs heat, then waves/sound, electricity and energy use.
- Before implementing heat, re-open the current MEXT commentary and confirm the exact quantitative treatment of heat quantity, specific heat and heat capacity before choosing relation(s), units and accepted representations.
- Prefer a basic direct/reverse heat family that can be independently recomputed with the existing shared relation helpers if possible. Add a new shared relation only if a curriculum-aligned formula genuinely requires it, and then add shared regression tests before volume generation.
- Keep the first heat drills formula-understanding/substitution level; do not turn them into multi-step calorimetry or entrance-exam problems merely to increase difficulty.
- Static friction remains curriculum content, but do not treat static friction as always `μN`; distinguish variable static friction from maximum static friction if quantified later.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent worksheet-factory changes before editing and preserve parallel progress;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. re-open the current MEXT high-school science commentary for the `熱` portion of `様々な物理現象とエネルギーの利用`;
5. verify the exact treatment and units for heat quantity, specific heat and heat capacity before defining the first formula family;
6. implement a coherent 30–60-sheet basic direct/reverse heat checkpoint if the verified relation family naturally supports that volume;
7. independently recompute every answer, require deterministic regeneration and normalized-hash uniqueness, and keep the existing two-page PDF/catalog/site pipeline;
8. require Actions success before treating generated PDFs as published;
9. after a coherent heat block, continue `物理基礎` in production-map order: waves/sound -> electricity -> energy use;
10. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
