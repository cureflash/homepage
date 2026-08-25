# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared worksheet implementation, including `scripts/worksheet_factory.py`, `scripts/science_worksheet_helpers.py`, the current JH3 publisher/tests/workflow, `worksheets/catalog.json` contract, shared PDF renderer and catalog-driven site listing. Science still extends the shared mathematics pipeline; no duplicate science engine was introduced.
- Resumed Phase 3 at the next required stage, the formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science curriculum/commentary and confirmed that `物理基礎` includes `(1) 物体の運動とエネルギー` and, within `(ア) 運動の表し方`, straight-line motion and straight-line acceleration. The first batch therefore stays within one-dimensional introductory motion quantities.
- Preserved high-school metadata correctly: every new entry uses `school_level=high-school`, `formal_course=物理基礎`, and `grade=null`. No fixed high-school year was invented.
- Added `scripts/science_physics_basic_motion.py` with three structured motion relation families that can use the existing shared `product` / `sum` helpers without extending the formula engine:
  - displacement / average velocity: `Δx = v平均 × t`;
  - acceleration / velocity change: `Δv = a × t`;
  - initial / final velocity: `v = v0 + Δv`.
- Published 60 focused numerical worksheets, 20 problems each:
  - displacement from average velocity and time: 10;
  - average velocity from displacement and time: 10;
  - acceleration from velocity change and time: 10;
  - velocity change from acceleration and time: 10;
  - final velocity from initial velocity and velocity change: 10;
  - initial velocity from final velocity and velocity change: 10.
- Kept the questions deliberately introductory: straight-line motion and same-positive-direction velocity changes. Signed-vector cases, graphs, multi-stage kinematics and entrance-exam-style derivations are not mixed into this first batch.
- Added `scripts/publish_science_physics_basic.py`, reusing the shared independent validator, normalized-content hash, PDF renderer and catalog validator. The publisher is idempotent and refuses mismatched existing IDs, URLs or hashes.
- Added `tests/test_science_physics_basic.py` covering exact 60-sheet generation, deterministic regeneration, independent numerical-answer validation, 60 distinct normalized hashes, expected SI units, corrupted-answer rejection and absence of fabricated grade metadata.
- Added `.github/workflows/science-physics-basic-publish.yml` to run shared/topic tests before generation and again after publication, validate all 60 catalog rows/PDFs, and commit generated outputs only from a current `main` parent.
- The first workflow attempt failed only because the new standalone test had not inserted the repository root into `sys.path`. Updated it to the same import-path pattern used by the existing JH3 tests. No worksheet/formula defect was involved.
- GitHub Actions run `32906657781` then completed successfully and produced publication commit `0473d105e3f0e9859d21f3ae251f5efd8aa307ca` (`Publish first 60 Physics Basics motion worksheets`).

## Changed files

- `scripts/science_physics_basic_motion.py` (new)
- `scripts/publish_science_physics_basic.py` (new)
- `tests/test_science_physics_basic.py` (new)
- `.github/workflows/science-physics-basic-publish.yml` (new)
- `worksheets/catalog.json`
- 60 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32906657781` completed successfully after the import-path correction.

The successful run verified:

- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- deterministic regeneration of all 60 worksheets -> OK;
- independent recomputation of every numerical answer -> OK;
- exactly 60 new `science-physics-basic-motion-*` catalog entries -> OK;
- all 60 use `school_level=high-school` -> OK;
- all 60 use `formal_course=物理基礎` -> OK;
- all 60 keep `grade=null` -> OK;
- exactly 30 `calculation-basic` + 30 `calculation-reverse` -> OK;
- exactly 20 worksheets for each of the three motion skill families -> OK;
- all 60 have 20 problems -> OK;
- all 60 normalized content hashes are distinct -> OK;
- full shared `validate_catalog(..., repo_root)` across the repository -> OK;
- all registered new PDFs exist, begin with `%PDF`, exceed the minimum-size check and contain the expected two-page structure -> OK.

The shared renderer remains authoritative: ordinary integer problem numbers are used without decimal-looking punctuation, and the answer page repeats the problem layout with answers overlaid in red.

Representative screenshot-based PDF visual QA remains incomplete. Structural PDF validation passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` is only partly covered and advanced `物理` has not started.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets;
- `物理基礎`: 60 worksheets.

Current published physics total: **348 worksheets**.

The first `物理基礎` motion batch now establishes high-school course metadata and a validated publication path without assigning a false grade.

## Incomplete work / blockers

- `物理基礎` still needs broad coverage beyond this first motion batch: uniformly accelerated motion as a combined relation, falling motion, force balance/equation of motion/friction, work and mechanical energy, heat, waves/sound, electricity and energy use.
- The current shared formula helper supports `product` and `sum`. A direct combined uniformly accelerated relation such as `v = v0 + a t`, displacement relations involving multiple terms, kinetic energy and other later formulas may require a genuinely new relation type or a carefully structured topic-specific generator. Add such support only with independent recomputation tests before bulk publication.
- Keep the main product at basic formula-understanding/substitution level. Do not turn the high-volume target into multi-step entrance-exam mechanics.
- `物理` has not started and must remain after `物理基礎` in production order.
- Magnetic-field/electromagnetic-induction retrieval remains a possible later JH2 completeness enhancement, but it must not interrupt forward physics production.
- Screenshot-based PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. re-open the current MEXT high-school science commentary for the next exact quantity relations;
4. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
5. continue `運動の表し方` with genuine uniformly accelerated straight-motion practice. Prefer introducing and independently testing the direct relation `v = v0 + a t` (or an equally explicit validated representation) rather than duplicating the already published `Δv = a t` sheets under new titles;
6. after that foundation is safe, continue in curriculum order to falling motion, then force balance / equation of motion / friction;
7. target another coherent 30–60-sheet batch once the new relation(s) and validator are safe;
8. keep using the shared validator/hash/PDF/catalog/site pipeline and validate generated outputs through Actions before treating them as published;
9. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
