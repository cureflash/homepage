# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, then read the four required shared math-factory control files.
- Inspected the current shared worksheet implementation: `scripts/worksheet_factory.py`, `scripts/science_worksheet_helpers.py`, the JH2 topic/publisher/test/workflow pattern, shared catalog contract, PDF renderer, duplicate hashing and catalog-driven `worksheets/index.html`. Science continues to extend the shared math infrastructure; no competing pipeline was introduced.
- Resumed Phase 3 at the exact previous point: physics, junior-high grade 3. Did not advance to `物理基礎`, chemistry, biology or earth science.
- Re-opened the current MEXT junior-high science curriculum commentary and verified JH3 `運動とエネルギー`. The quantitative relations suitable for dense basic repetition are speed, work as force magnitude multiplied by distance moved in the force direction, and work rate as work per unit time.
- Deliberately did **not** publish JH3 formula drills for potential energy `mgh`, kinetic energy `1/2 mv²`, or mechanical-energy calculations. The current junior-high commentary treats the dependence of potential/kinetic energy on height, mass and speed mainly through experimental regularities; those high-school formulas are therefore not treated as fixed JH3 formulas in this factory without stronger authoritative support.
- Added `scripts/science_physics_jh3_topics.py` using only the existing shared `product` formula relation. It defines four verified topic families and six focused modes:
  - speed: solve for speed, 10 sheets;
  - speed reverse: solve for distance, 10 sheets;
  - average speed: solve from total distance / total time, 10 sheets;
  - work: solve `W = F × d`, 10 sheets;
  - work reverse: solve for force, 10 sheets;
  - work rate: solve work rate from work / time, 10 sheets.
- Added `scripts/publish_science_physics_jh3.py`, reusing the shared independent validator, normalized content hash, PDF renderer and catalog validator. It is idempotent for already-published IDs and rejects URL/content-hash collisions.
- Added `tests/test_science_physics_jh3.py` covering deterministic regeneration, 60 distinct worksheet hashes, 20 problems per sheet, independent numerical relations, units, prompt-length guard, deliberate exclusion of premature energy-formula topics and corrupted-answer rejection.
- Added `.github/workflows/science-jh3-publish.yml` to run shared/JH3 tests before and after generation, validate the complete JH3 catalog/output set and publish the batch only from a current `main` parent.
- GitHub Actions run `32895969454` completed successfully.
- The generated publication commit is `6eb2d70edb7d074e580e9e3d5a0193d9e9e98b50` (`Publish 60 JH3 speed and work worksheets`).
- Updated `curriculum/physics/PLAN.md` to record the 60-sheet focused checkpoint and the reason high-school kinetic/potential-energy formulas are not being backported into JH3.

## Changed files

- `scripts/science_physics_jh3_topics.py` (new)
- `scripts/publish_science_physics_jh3.py` (new)
- `tests/test_science_physics_jh3.py` (new)
- `.github/workflows/science-jh3-publish.yml` (new)
- `worksheets/catalog.json`
- 60 new PDFs under `materials/worksheets/science/junior-high/grade-03/physics/`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32895969454` completed successfully against a real checkout of current `main`.

The workflow ran before and after generation:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh3.py` -> OK
- full shared catalog/output validation -> OK

The validated JH3 checkpoint contains exactly 60 physics catalog entries:
- 40 `calculation-basic`;
- 20 `calculation-reverse`;
- 20 speed entries (10 speed + 10 distance reverse);
- 10 average-speed entries;
- 20 mechanical-work entries (10 work + 10 force reverse);
- 10 mechanical-power/work-rate entries;
- all 60 are `focused`, `numeric`, `difficulty=basic`;
- each has 20 problems;
- every numerical answer is independently recomputable;
- all worksheet content hashes are distinct;
- every registered JH3 PDF exists, starts with `%PDF`, exceeds the minimum-size check and contains the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash rejection.

The shared renderer remains authoritative: problem numbers use ordinary integers without decimal-looking punctuation, and the answer page repeats the original problem layout with answers overlaid in red.

Representative generated-PDF screenshot QA is still incomplete because the GitHub connector does not provide a direct generated-PDF binary path to the screenshot renderer. Structural PDF checks and prompt-length tests passed; do not claim visual screenshot inspection of the generated JH3 PDFs has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Published physics coverage:
- junior-high grade 1: 48 worksheets, focused calculation/retrieval plus mixed/review;
- junior-high grade 2: 120 worksheets, 90 focused + 15 mixed + 15 review;
- junior-high grade 3: 60 focused calculation worksheets for speed/average speed/work/work rate.

Current published physics total: **228 worksheets**.

JH3 now has a broad first focused-calculation checkpoint, but it does not yet have its mixed/review cycle or the mechanically checkable concept retrieval needed for the rest of `運動とエネルギー`. Do not advance to `物理基礎` yet.

## Incomplete work / blockers

- JH3 `mixed` and cumulative `review` have not yet been published.
- Next numerical mixed/review must draw only from the verified speed, average-speed, work and work-rate registries unless a new quantitative relation is independently verified first.
- Add mechanically checkable retrieval where educationally natural for equal-speed straight motion, force composition/decomposition, force and motion, potential/kinetic energy qualitative dependencies, energy conversion and mechanical-energy conservation. Avoid ambiguous free text.
- Do not introduce `mgh` or `1/2 mv²` as JH3 formula drills merely to increase worksheet count; keep those for `物理基礎` unless current authoritative JH guidance explicitly warrants otherwise.
- Force composition/decomposition should use deterministic numeric or finite-answer forms only if independent validation remains straightforward; diagram-heavy positional exercises remain deferred.
- Magnetic field/electromagnetic-induction retrieval remains a possible later JH2 completeness enhancement, but must not interrupt the required forward physics production order.
- Screenshot-based PDF visual QA remains pending.
- Phase 3 checkboxes remain open until JH3 is completed through focused/mixed/review and `物理基礎` / `物理` have broad basic coverage.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 3:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. reuse `JH3_PHYSICS_FORMULA_TOPICS` to build a genuine cross-topic numerical `mixed` and cumulative `review` family spanning speed, average speed, distance reverse, work, force reverse and work rate;
4. target another coherent 30–60 worksheets if deterministic breadth/duplicate tests remain safe;
5. independently verify and define a finite-answer retrieval registry for the remaining JH3 concepts: equal-speed motion, force composition/decomposition, force and motion, qualitative potential/kinetic-energy dependencies, energy conversion and mechanical-energy conservation;
6. keep `mgh` and `1/2 mv²` out of JH3 unless new authoritative evidence explicitly supports their use there;
7. extend the existing JH3 publisher/tests/workflow rather than creating another engine, then validate all JH3 PDFs/catalog hashes through Actions;
8. once JH3 focused → mixed → review and necessary concept retrieval are broad enough, advance to formal high-school course `物理基礎`;
9. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1/JH2 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
