# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared generator/validator/PDF/catalog path (`scripts/science_worksheet_helpers.py`, `scripts/worksheet_factory.py`), the current Physics Basics topic definitions, publisher, tests and workflow. Science continues to use the shared pipeline; no competing renderer/catalog engine was introduced.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 (1) 物体の運動とエネルギー / 力学的エネルギー`. It states that kinetic and potential energy are understood in relation to work; potential energy includes gravitational and elastic forms; and mechanical-energy conservation is treated with conditions such as absence of friction and air resistance.
- Added reusable shared formula relation `half-product-last-square` to `scripts/science_worksheet_helpers.py`. It computes `1/2 × (linear factors) × (last input)^2`, supports direct and reverse solving, and independently recomputes reverse values. This lets `K = 1/2 mv²` use actual sampled speed `v`; no unrelated `v²` variable is introduced.
- Extended `scripts/science_physics_basic_energy.py` with 60 focused numerical worksheets, all 20 problems each:
  - gravitational potential energy `U = mgh`, with a stated zero-energy reference plane and `g = 9.8 m/s²`: 10 sheets solve `U`, 10 solve mass, 10 solve height;
  - kinetic energy `K = 1/2 mv²`: 10 sheets solve `K`, 10 solve mass, 10 solve speed.
- Extended `tests/test_science_physics_basic_energy.py` to cover exactly 110 total energy-family focused variants (the previous 50 work/work-rate sheets plus the new 60), deterministic regeneration, independent recomputation, 110 unique normalized hashes, `mgh` assumptions, the real-speed squared relation, reverse-speed square-root solving, high-school metadata discipline, and corrupted-answer rejection.
- Extended `.github/workflows/science-physics-basic-publish.yml` to validate exactly 330 Physics Basics worksheets, including 30 gravitational-potential-energy and 30 kinetic-energy sheets.
- Re-checked `main` immediately before integration. Concurrent work had changed only `batch-runner/runner.mjs`, so the science files were non-overlapping. PR #20 was merged safely.
- GitHub Actions run `32927256288` completed successfully. It generated and published all 60 new PDFs/catalog rows in commit `a84a0c68c1d6d080ed42cf4620bc75f6f4f75c98` (`Publish 60 Physics Basics potential and kinetic energy worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_worksheet_helpers.py`
- `scripts/science_physics_basic_energy.py`
- `tests/test_science_physics_basic_energy.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 60 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32927256288`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- `python tests/test_science_physics_basic_forces.py` -> OK;
- `python tests/test_science_physics_basic_energy.py` -> OK;
- generation/registration of the new Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 330 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 130 `calculation-basic` + 200 `calculation-reverse` entries -> OK;
- skill counts include exactly 30 `gravitational-potential-energy` + 30 `kinetic-energy` -> OK;
- unit counts are exactly 90 `運動の表し方` + 130 `様々な力とその働き` + 110 `力学的エネルギー` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 330 worksheets contain 20 problems and have unique normalized content hashes -> OK;
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
- `物理基礎`: 330 worksheets.

Current published physics total: **618 worksheets**.

`物理基礎` now has broad introductory motion/force/work/energy coverage: displacement/average velocity, acceleration, initial/final velocity, `v = v0 + at`, free-fall velocity, signed one-dimensional resultant force, Newton's second law, explicit zero-resultant force balance, kinetic friction, work, work rate, gravitational potential energy and kinetic energy.

## Incomplete work / blockers

- `物理基礎` still needs elastic potential energy, mechanical-energy conservation, then heat, waves/sound, electricity and energy use.
- Elastic potential energy `U = 1/2 kx²` can reuse the new `half-product-last-square` relation with actual extension `x` as the squared input. Re-verify exact course treatment and units before publication.
- Mechanical-energy conservation must explicitly state the relevant no-friction/no-air-resistance assumptions. Keep first numerical drills simple and mechanically checkable rather than multi-step entrance-exam mechanics.
- The new square-capable relation also makes free-fall height relations such as `y = 1/2 gt²` technically possible, but do not add them merely to inflate counts; add only if they fill a legitimate Physics Basics coverage gap after curriculum re-verification.
- Static friction remains curriculum content, but do not treat static friction as always `μN`; distinguish variable static friction from maximum static friction if quantified later.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. re-open the current MEXT commentary for elastic potential energy and mechanical-energy conservation;
5. use the tested shared `half-product-last-square` relation for `U = 1/2 kx²`, with actual spring extension `x` sampled and squared by the helper; produce direct/reverse forms only where the answer remains basic and unambiguous;
6. after elastic potential energy is validated, add mechanically checkable mechanical-energy-conservation/basic energy-conversion worksheets with the no-friction/no-air-resistance condition stated explicitly;
7. target another coherent 30–60-sheet batch, but do not create wording-only duplicates or multi-step entrance-exam-style mechanics;
8. keep using the shared validator/hash/PDF/catalog/site infrastructure and require Actions success before treating generated PDFs as published;
9. after the mechanics energy block is coherent, continue `物理基礎` in the production map order: heat -> waves/sound -> electricity -> energy use;
10. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
