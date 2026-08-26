# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from current `main`, re-read the science factory control documents and curriculum production map, and re-read the required shared worksheet-factory control documents. Science continues to use the shared generator/validator/PDF/catalog path rather than a competing renderer or catalog.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 (1) 物体の運動とエネルギー / 力学的エネルギー`. It explicitly includes both gravitational and elastic potential energy and treats mechanical-energy conservation mainly in cases without friction or air resistance.
- Reused the already-tested shared `half-product-last-square` relation for `U = 1/2 kx²`; no shared generator relation or renderer change was needed in this checkpoint.
- Extended `scripts/science_physics_basic_energy.py` with 30 focused elastic-potential-energy worksheets, all 20 problems each:
  - 10 sheets solve elastic potential energy `U` from spring constant `k` and extension/compression magnitude `x`;
  - 10 sheets solve spring constant `k` from `U` and `x`;
  - 10 sheets solve extension/compression magnitude `x` from `U` and `k` using the square-root reverse relation.
- The elastic-energy definition uses the actual extension/compression magnitude `x` in metres and `k` in `N/m`; the helper squares `x`. No unrelated `x²` variable is sampled.
- Extended `tests/test_science_physics_basic_energy.py` to validate exactly 140 focused energy-family variants, deterministic regeneration, independent direct and reverse recomputation, 140 unique normalized hashes, the elastic-energy formula/units, reverse-extension square-root solving, and corrupted-answer rejection.
- Extended `.github/workflows/science-physics-basic-publish.yml` to validate exactly 360 Physics Basics worksheets, including exactly 30 `elastic-potential-energy` entries and 140 total `力学的エネルギー` entries.
- Parallel repository work advanced `main` during this run. The science branch was rebuilt on the then-latest `main` with only the three intended science files, so unrelated Power TOEIC and other concurrent progress was preserved.
- PR #55 (`Add Physics Basics elastic potential energy worksheets`) was merged. Merge commit: `f7902303141ea5bc20648986a90230bee69e1808`.
- GitHub Actions run `32972632796` completed successfully and generated/published the 30 PDFs plus catalog rows in commit `0d454d17f41f21e082cde474cfe29f721f6e563d` (`Publish 30 Physics Basics elastic potential energy worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_physics_basic_energy.py`
- `tests/test_science_physics_basic_energy.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 30 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/STATUS.json`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32972632796`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- `python tests/test_science_physics_basic_forces.py` -> OK;
- `python tests/test_science_physics_basic_energy.py` -> OK;
- generation/registration of the new Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 360 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 140 `calculation-basic` + 220 `calculation-reverse` entries -> OK;
- skill count `elastic-potential-energy` = exactly 30 -> OK;
- unit counts are exactly 90 `運動の表し方` + 130 `様々な力とその働き` + 140 `力学的エネルギー` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 360 Physics Basics worksheets contain 20 problems and have unique normalized content hashes -> OK;
- full shared catalog validation with repository-root output checks -> OK;
- all registered Physics Basics PDFs exist, begin with `%PDF`, exceed the minimum-size check, and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used, and the answer page preserves the problem layout with answers added in red.

Representative screenshot-based worksheet PDF visual QA remains incomplete. Structural PDF validation passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` is still incomplete and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 360 worksheets.

Current published physics total: **648 worksheets**.

`物理基礎` current unit counts:

- `運動の表し方`: 90 worksheets;
- `様々な力とその働き`: 130 worksheets;
- `力学的エネルギー`: 140 worksheets.

The 140-sheet energy block currently consists of work 30, work rate 20, gravitational potential energy 30, kinetic energy 30, and elastic potential energy 30.

## Incomplete work / blockers

- `物理基礎` still needs mechanical-energy conservation, then heat, waves/sound, electricity and energy use.
- Mechanical-energy-conservation worksheets must explicitly state the relevant no-friction/no-air-resistance condition. Keep the first numerical drills simple and mechanically checkable rather than multi-step entrance-exam mechanics.
- A natural first conservation family should use already-verified energy quantities and avoid introducing a new ambiguous formula relation merely to increase counts. Direct energy-conversion / missing-energy forms are preferable if they can be independently recomputed and rendered clearly.
- The square-capable relation also makes other formulas technically possible, but do not add them solely to inflate counts; add only curriculum-aligned coverage gaps after re-verification.
- Static friction remains curriculum content, but do not treat static friction as always `μN`; distinguish variable static friction from maximum static friction if quantified later.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent worksheet-factory changes before editing and preserve parallel progress;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. re-open the current MEXT commentary for mechanical-energy conservation;
5. add a coherent mechanically checkable conservation/basic energy-conversion family with the no-friction/no-air-resistance condition stated explicitly in the learner-facing wording;
6. use only basic direct/reverse forms whose answers can be independently recomputed; avoid multi-step entrance-exam-style mechanics and wording-only duplicates;
7. target a coherent 30–60-sheet checkpoint if the verified problem family supports that volume;
8. keep using the shared validator/hash/PDF/catalog/site infrastructure and require Actions success before treating generated PDFs as published;
9. once the mechanics energy block is coherent, continue `物理基礎` in production-map order: heat -> waves/sound -> electricity -> energy use;
10. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
