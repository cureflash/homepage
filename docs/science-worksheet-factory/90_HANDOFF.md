# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared worksheet implementation: `scripts/science_worksheet_helpers.py`, the existing Physics Basics structured topic registry/publisher/tests/workflow, the common catalog/validator/PDF renderer, and catalog-driven site integration. No duplicate science pipeline was introduced.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 (1) 物体の運動とエネルギー / 様々な力とその働き`. It explicitly includes normal force, static friction, kinetic friction, force balance and the laws of motion. The MEXT commentary does not itself state a friction-coefficient formula, so quantitative kinetic-friction work was not inferred from MEXT wording alone.
- Separately checked current Tokyo Shoseki `物理基礎` material and confirmed the standard quantitative relation `F動 = μ'N` for kinetic friction. The generated drills therefore use **given kinetic-friction coefficient and given normal force**; they do not silently assume `N = mg`.
- Added `scripts/science_physics_basic_forces.py` as a structured-topic extension that plugs into the existing shared publisher and shared formula helper. No new renderer or validator family was needed.
- Added 20 explicit one-dimensional force-balance worksheets, 20 problems each:
  - 10 sheets solve for the leftward force;
  - 10 sheets solve for the rightward force;
  - every problem states opposing right/left directions and fixes the resultant at exactly `0 N`.
- Added 30 kinetic-friction worksheets, 20 problems each, using `F動 = μ'N`:
  - 10 sheets solve for kinetic friction;
  - 10 sheets solve for the kinetic-friction coefficient;
  - 10 sheets solve for the normal force.
- Reused only already validated shared relations (`sum` for the explicit zero-resultant balance representation and `product` for kinetic friction). Independent recomputation remains in `science_worksheet_helpers.py`.
- Added `tests/test_science_physics_basic_forces.py` covering exactly 50 variants, deterministic regeneration, independent answers, 50 distinct normalized hashes, explicit zero-resultant/direction constraints, kinetic-friction assumptions, no fabricated high-school grade metadata, and corrupted-answer rejection.
- Extended `.github/workflows/science-physics-basic-publish.yml` so the full Physics Basics set is validated as exactly 220 focused numerical worksheets after publication.
- Merged source changes through PR #13. Merge commit: `126c52c7e320a8e61dc810a74dcf4c5d0444b9ca`.
- GitHub Actions run `32919557638` completed successfully. The workflow generated and published all 50 new PDFs/catalog rows in commit `fd5008b6fa1bc776b14f3eb2d0c0c97901d9d4e9` (`Publish 50 Physics Basics balance and friction worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_physics_basic_forces.py` (new)
- `scripts/publish_science_physics_basic.py`
- `tests/test_science_physics_basic_forces.py` (new)
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 50 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32919557638`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- `python tests/test_science_physics_basic_forces.py` -> OK;
- generation/registration of the Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 220 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 90 `calculation-basic` + 130 `calculation-reverse` -> OK;
- existing skill counts remained unchanged and new counts are exactly 20 `opposed-force-balance` + 30 `kinetic-friction` -> OK;
- unit counts are exactly 90 `運動の表し方` + 130 `様々な力とその働き` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 220 worksheets contain 20 problems and have unique normalized content hashes -> OK;
- full shared catalog validation with repository-root output checks -> OK;
- all registered Physics Basics PDFs exist, begin with `%PDF`, exceed the minimum-size check, and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used without decimal-looking punctuation, and the answer page preserves the original problem layout with answers added in red.

Representative screenshot-based worksheet PDF visual QA remains incomplete. Structural PDF validation passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` is still incomplete and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 220 worksheets.

Current published physics total: **508 worksheets**.

`物理基礎` now has broad introductory motion/force coverage including displacement/average velocity, acceleration, initial/final velocity, `v = v0 + at`, free-fall velocity, signed one-dimensional resultant force, Newton's second law, explicit zero-resultant force balance, and kinetic friction.

## Incomplete work / blockers

- `物理基礎` still needs broad coverage after the current 220 focused sheets: work/work rate, kinetic/potential/mechanical energy, then heat, waves/sound, electricity and energy use.
- Static friction is curriculum content, but high-volume quantitative worksheets should not be added by treating static friction as always equal to `μN`; the distinction between variable static friction and maximum static friction must remain explicit if that topic is later quantified.
- Free-fall still covers velocity-time only. Height relations such as `y = 1/2 gt²` need a square/power-capable independently validated relation before bulk generation.
- Kinetic/potential energy relations will likely require either a new independently validated scaled-product/power relation or carefully structured equivalent relations; do not encode them through misleading one-off arithmetic.
- Keep mechanics at formula-understanding/substitution level; do not turn the high-volume target into multi-step entrance-exam mechanics.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. re-open the current MEXT commentary for `仕事と力学的エネルギー` before publication;
5. add work `W = Fd` and work rate `P = W/t` basic/reverse families using existing shared relations where the problem statement keeps force and displacement parallel and assumptions explicit;
6. then verify the exact Physics Basics treatment of gravitational potential energy, kinetic energy and mechanical-energy conservation; add a reusable independently tested relation for coefficients/squares only if the shared helper genuinely needs one;
7. target another coherent 30–60-sheet batch once those relations are safe, rather than stopping at a tiny pilot set;
8. keep using the shared validator/hash/PDF/catalog/site infrastructure and require Actions success before treating generated PDFs as published;
9. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
