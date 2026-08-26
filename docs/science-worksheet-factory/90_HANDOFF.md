# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared generator/validator/PDF/catalog path (`scripts/science_worksheet_helpers.py`, `scripts/worksheet_factory.py`), the current Physics Basics structured topic files, publisher, tests and workflow. Science continues to use the shared pipeline; no competing renderer/catalog engine was introduced.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 (1) 物体の運動とエネルギー / 力学的エネルギー`. It states that kinetic and potential energy are to be understood in relation to work, and that mechanical-energy conservation is treated with attention to conditions such as the absence of friction and air resistance.
- Added `scripts/science_physics_basic_energy.py` with 50 focused numerical worksheet variants, all 20 problems each, using only the already independently validated shared `product` relation:
  - work `W = Fd`, with force and displacement explicitly parallel and in the same direction: 10 sheets solve work, 10 solve force, 10 solve displacement;
  - work rate `P = W/t` represented as `W = Pt`: 10 sheets solve work rate, 10 solve time.
- Added `tests/test_science_physics_basic_energy.py` covering exactly 50 variants, deterministic regeneration, independent recomputation, 50 distinct normalized hashes, explicit parallel-force/displacement assumptions, expected units, absence of fabricated high-school grade metadata, and corrupted-answer rejection.
- Extended `scripts/publish_science_physics_basic.py` to merge the new structured energy topics into the existing Physics Basics publisher.
- Extended `.github/workflows/science-physics-basic-publish.yml` to run the new tests and validate the complete Physics Basics publication set as exactly 270 focused numerical worksheets.
- GitHub Actions run `32923104503` completed successfully. It generated and published all 50 new PDFs/catalog rows in commit `5646a6bcedfc72e796ba969545362555facc1578` (`Publish 50 Physics Basics work and power worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_physics_basic_energy.py` (new)
- `tests/test_science_physics_basic_energy.py` (new)
- `scripts/publish_science_physics_basic.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 50 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32923104503`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- `python tests/test_science_physics_basic_forces.py` -> OK;
- `python tests/test_science_physics_basic_energy.py` -> OK;
- generation/registration of the new Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 270 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 110 `calculation-basic` + 160 `calculation-reverse` entries -> OK;
- new skill counts are exactly 30 `work-parallel-force-displacement` + 20 `work-rate` -> OK;
- unit counts are exactly 90 `運動の表し方` + 130 `様々な力とその働き` + 50 `力学的エネルギー` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 270 worksheets contain 20 problems and have unique normalized content hashes -> OK;
- full shared catalog validation with repository-root output checks -> OK;
- all registered Physics Basics PDFs exist, begin with `%PDF`, exceed the minimum-size check, and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used and the answer page preserves the problem layout with answers added in red.

Representative screenshot-based worksheet PDF visual QA remains incomplete. Structural PDF validation passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` is still incomplete and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 270 worksheets.

Current published physics total: **558 worksheets**.

`物理基礎` now has broad introductory motion/force/work coverage: displacement/average velocity, acceleration, initial/final velocity, `v = v0 + at`, free-fall velocity, signed one-dimensional resultant force, Newton's second law, explicit zero-resultant force balance, kinetic friction, work and work rate.

## Incomplete work / blockers

- `物理基礎` still needs kinetic energy, gravitational/elastic potential energy, mechanical-energy conservation, then heat, waves/sound, electricity and energy use.
- Gravitational potential energy `U = mgh` can be represented naturally by the existing multi-input `product` relation after exact course treatment and assumptions are re-verified.
- Kinetic energy `K = 1/2 mv²` should not be faked by sampling an unrelated `v²` variable. Add a reusable independently recomputed square/scaled-product relation first, with generation and corruption tests, before bulk publication.
- Mechanical-energy conservation must state the relevant no-friction/no-air-resistance assumptions and should be generated only after the component energy relations are validated.
- Static friction remains curriculum content, but do not treat static friction as always `μN`; distinguish variable static friction from maximum static friction if quantified later.
- Free-fall height relations such as `y = 1/2 gt²` also depend on the same square-capable helper and remain deferred until that helper is safe.
- Keep mechanics at formula-understanding/substitution level rather than multi-step entrance-exam mechanics.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. re-open the current MEXT commentary for kinetic energy, gravitational/elastic potential energy and mechanical-energy conservation;
5. add gravitational potential energy with the existing multi-input `product` relation only if the statement/units/assumptions are unambiguous;
6. design a reusable square/scaled-product formula relation for `1/2 mv²` (and later `1/2 gt²`) with generation-side and independent-validator implementations plus dedicated tests; do not encode `v²` as an unrelated sampled variable;
7. once the new relation is proven, mass-produce kinetic-energy variants and then mechanically checkable mechanical-energy conservation/basic energy-conversion variants, targeting another coherent 30–60-sheet batch;
8. keep using the shared validator/hash/PDF/catalog/site infrastructure and require Actions success before treating generated PDFs as published;
9. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
