# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared worksheet implementation: `scripts/worksheet_factory.py`, `scripts/science_worksheet_helpers.py`, the Physics Basics publisher/tests/workflow, the catalog contract and catalog-driven site listing. Science continues to extend the same mathematics worksheet pipeline; no duplicate science engine was introduced.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened current MEXT high-school science material. The current curriculum/commentary places straight-line acceleration in `物理基礎 (1) 物体の運動とエネルギー / 運動の表し方` and includes falling motion under the same mechanics block. MEXT's current Physics Basics teaching material also explicitly ties straight-line acceleration to the current curriculum/commentary.
- Preserved high-school metadata: every new entry uses `school_level=high-school`, `formal_course=物理基礎`, and `grade=null`.
- Generalized the shared formula helper with a reusable `offset-product` relation. For ordered inputs `[offset, factor1, factor2, ...]`, the relation is `result = offset + product(factors)`. Independent recomputation supports solving for the result, the offset, or any multiplicative factor, with zero-denominator rejection.
- Added genuine combined uniformly accelerated motion practice using `v = v0 + a t`, rather than publishing renamed copies of the already-existing `Δv = a t` sheets.
- Added 30 new uniformly accelerated straight-motion worksheets, 20 problems each:
  - final velocity from `v0, a, t`: 10;
  - acceleration from `v0, v, t`: 10;
  - time from `v0, v, a`: 10.
- Added 20 new free-fall velocity worksheets, 20 problems each, restricted to initial velocity zero and `g = 9.8 m/s²`:
  - velocity from `g, t`: 10;
  - fall time from `v, g`: 10.
- Did not add height-of-fall formulas, multi-stage kinematics, graph interpretation, projectile motion or entrance-exam-style derivations in this batch.
- Updated `scripts/publish_science_physics_basic.py` so each topic supplies its own curriculum unit metadata while retaining the existing stable Physics Basics output path and IDs.
- Expanded `tests/test_science_physics_basic.py` to validate exactly 110 Physics Basics focused variants, deterministic regeneration, distinct normalized hashes, independent `offset-product` answers, fixed `g=9.8` in the free-fall family, corrupted-answer rejection and absence of fabricated grade metadata.
- Expanded `.github/workflows/science-physics-basic-publish.yml` to include the shared helper in its trigger set and to validate all 110 Physics Basics PDFs/catalog rows.
- GitHub Actions run `32911353976` completed successfully. It passed shared tests, Physics Basics tests, generation, post-generation validation, duplicate checks, catalog validation and two-page PDF checks, then committed the 50 new PDFs/catalog rows as `703f9912fcbd93eba282ad853ef0a7b2a9a39c45` (`Publish 50 more Physics Basics mechanics worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_worksheet_helpers.py`
- `scripts/science_physics_basic_motion.py`
- `scripts/publish_science_physics_basic.py`
- `tests/test_science_physics_basic.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 50 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32911353976`: success.

The successful workflow verified:

- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- deterministic regeneration of all 110 Physics Basics focused worksheets -> OK;
- independent recomputation of every numerical answer -> OK;
- independent `offset-product` recomputation for `v = v0 + at` -> OK;
- exactly 110 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 50 `calculation-basic` + 60 `calculation-reverse` -> OK;
- skill counts: 20 displacement/average-velocity, 20 acceleration/velocity-change, 20 initial/final-velocity, 30 combined uniform-acceleration velocity, 20 free-fall velocity -> OK;
- unit counts: 90 `運動の表し方` + 20 `様々な力とその働き` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 110 have 20 problems and unique normalized content hashes -> OK;
- full shared `validate_catalog(..., repo_root)` -> OK;
- all registered Physics Basics PDFs exist, begin with `%PDF`, exceed the minimum-size check and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used without decimal-looking punctuation, and the answer page repeats the original problem layout with answers overlaid in red.

Representative screenshot-based PDF visual QA remains incomplete. Structural PDF validation passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` is still incomplete and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 110 worksheets.

Current published physics total: **398 worksheets**.

`物理基礎` now has a validated path for the reusable relation families `product`, `sum`, and `offset-product`, including the genuine combined relation `v = v0 + at`.

## Incomplete work / blockers

- `物理基礎` still needs broad mechanics coverage beyond the current 110 sheets: force balance, equation of motion, friction, work/work rate, kinetic/potential/mechanical energy, followed later by heat, waves/sound, electricity and energy use.
- The current free-fall family deliberately covers velocity-time only. Height relations such as `y = 1/2 gt²` would require a square/power relation or another independently validated representation before bulk publication.
- Force balance should not be faked with a generic sum drill unless direction/sign conventions and the zero-net-force condition are represented explicitly and independently validated.
- Equation-of-motion drills can likely reuse the existing `product` relation for `F = ma` after the force model and sign/quantity conventions are checked against the current MEXT commentary.
- Keep the product at basic formula-understanding/substitution level. Do not turn the high-volume target into multi-step entrance-exam mechanics.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect any concurrent shared worksheet-factory changes before editing;
3. re-open the current MEXT high-school science commentary for `様々な力とその働き`, especially force balance, Newton's equation of motion and friction;
4. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
5. define a mechanically explicit force-balance representation before publishing balance drills; do not encode direction ambiguously;
6. then add basic equation-of-motion `F = ma` direct/reverse variants and friction relations only where the exact curriculum quantity relation is confirmed;
7. target another coherent 30–60-sheet batch once the force model and validators are safe;
8. keep using the shared validator/hash/PDF/catalog/site pipeline and validate generated outputs through Actions before treating them as published;
9. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
