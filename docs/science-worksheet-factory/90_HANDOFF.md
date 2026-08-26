# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from the latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared worksheet implementation: `scripts/science_worksheet_helpers.py`, `scripts/science_physics_basic_motion.py`, the common Physics Basics publisher/tests/workflow, the shared catalog/validator/PDF path, and catalog-driven site integration. No duplicate science pipeline was introduced.
- Resumed Phase 3 at formal high-school course `物理基礎`. Did not advance to `物理`, chemistry, biology or earth science.
- Re-opened the current MEXT high-school science commentary for `物理基礎 (1) 物体の運動とエネルギー / 様々な力とその働き`. The commentary explicitly includes friction among the forces to be treated, force balance in a plane, and the laws of motion centered on straight-line motion. It also describes experimentally examining the relationship among mass, force and acceleration and establishing the second law of motion.
- Preserved high-school metadata: all new entries use `school_level=high-school`, `formal_course=物理基礎`, and `grade=null`.
- Generalized the shared science formula helper with a reusable `difference` relation. For ordered inputs `[first, second]`, `result = first - second`; independent recomputation supports solving for the result, first input or second input. This creates an explicit signed representation for opposing forces rather than faking force balance with an unsigned generic sum.
- Added 30 one-dimensional net-force worksheets, 20 problems each, using `F合 = F右 - F左` with **rightward explicitly defined as positive**:
  - net force from rightward/leftward forces: 10;
  - rightward force from net force/leftward force: 10;
  - leftward force from rightward force/net force: 10.
- Added 30 Newton-second-law worksheets, 20 problems each, using `F = m × a` for the resultant force in straight-line motion:
  - resultant force from mass/acceleration: 10;
  - mass from resultant force/acceleration: 10;
  - acceleration from resultant force/mass: 10.
- Did not add a coefficient-of-friction formula family in this batch. Friction is curriculum-aligned, but the exact quantitative relation and desired assumptions should be re-opened and confirmed before high-volume publication rather than inferred from scope alone.
- Expanded `tests/test_science_physics_basic.py` to validate exactly 170 Physics Basics focused variants, deterministic regeneration, 170 distinct normalized hashes, the explicit directional `difference` relation, independent direct/reverse recomputation, `F=ma`, corrupted-answer rejection, expected units, and absence of fabricated high-school grade metadata.
- Expanded `.github/workflows/science-physics-basic-publish.yml` to validate all 170 Physics Basics catalog rows/PDFs and exact skill/mode/unit counts.
- Merged the implementation through PR #12. The source merge commit is `ca225cc624e78c9dfd89318b4375f37671d1a4dd`.
- GitHub Actions run `32915592268` completed successfully. All workflow stages succeeded: latest-main check, shared tests, Physics Basics tests, generation/registration, post-generation validation, and generated-output commit.
- The workflow published all 60 new PDFs/catalog rows in commit `3019a49062e135aac02e1ac937f670f830fcc045` (`Publish 60 more Physics Basics force worksheets`).

## Changed files

Source/test/workflow changes:

- `scripts/science_worksheet_helpers.py`
- `scripts/science_physics_basic_motion.py`
- `tests/test_science_physics_basic.py`
- `.github/workflows/science-physics-basic-publish.yml`

Generated publication changes:

- `worksheets/catalog.json`
- 60 new PDFs under `materials/worksheets/science/high-school/physics-basic/motion/`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32915592268`: **success**.

The successful workflow verified:

- latest `main` matched the checked-out source before validation;
- `python tests/test_worksheet_factory.py` -> OK;
- `python tests/test_science_physics_basic.py` -> OK;
- generation/registration of the Physics Basics batch -> OK;
- post-generation shared and topic validation -> OK;
- exactly 170 `science-physics-basic-motion-*` catalog entries -> OK;
- exactly 70 `calculation-basic` + 100 `calculation-reverse` -> OK;
- skill counts: 20 displacement/average-velocity, 20 acceleration/velocity-change, 20 initial/final-velocity, 30 combined uniform-acceleration velocity, 20 free-fall velocity, 30 one-dimensional net-force, 30 Newton-second-law -> OK;
- unit counts: 90 `運動の表し方` + 80 `様々な力とその働き` -> OK;
- all entries use `school_level=high-school`, `formal_course=物理基礎`, `grade=null` -> OK;
- all 170 worksheets contain 20 problems and have unique normalized content hashes -> OK;
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
- `物理基礎`: 170 worksheets.

Current published physics total: **458 worksheets**.

`物理基礎` now has validated shared relation families `product`, `sum`, `difference`, and `offset-product`. The new `difference` relation gives a mechanically explicit signed one-dimensional force model, so a zero resultant can be used safely in later force-balance practice without hiding direction.

## Incomplete work / blockers

- `物理基礎` still needs broad coverage after the current 170 focused sheets: explicit force-balance practice, friction, work/work rate, kinetic/potential/mechanical energy, then heat, waves/sound, electricity and energy use.
- The current net-force family permits positive, zero or negative signed resultants but does not yet make a dedicated `F合 = 0` force-balance series. Such a series should be generated with an explicit zero-result constraint or as finite-answer concept retrieval, not as an ambiguous unsigned sum.
- Friction is verified as curriculum content, but the exact quantitative drill family and assumptions still need fresh source confirmation before publication.
- Free-fall still covers velocity-time only. Height relations such as `y = 1/2 gt²` need a power/square-capable independently validated relation before bulk generation.
- Keep mechanics at formula-understanding/substitution level; do not turn the high-volume target into multi-step entrance-exam mechanics.
- `物理` has not started and remains after `物理基礎` in production order.
- Screenshot-based worksheet PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. preserve `school_level=high-school`, `formal_course=物理基礎`, `grade=null`;
4. use the now-validated signed `difference` relation to add an explicit force-balance family with resultant force fixed at 0 N and/or finite-answer concept retrieval; keep direction visible in every problem;
5. re-open the MEXT commentary and an authoritative Physics Basics source before adding quantitative friction drills; define assumptions explicitly rather than silently assuming a coefficient relation;
6. after force balance/friction, continue in the curriculum map to work/work rate and energy relations, reusing shared relations or adding a new independently tested relation only when necessary;
7. target another coherent 30–60-sheet batch once the next formula/fact set is safe;
8. keep using shared validator/hash/PDF/catalog/site infrastructure and require Actions success before treating generated PDFs as published;
9. keep `物理基礎` ahead of `物理`, and all physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
