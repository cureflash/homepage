# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the required shared math-factory control files.
- Inspected the current shared generator/validator/PDF renderer (`scripts/worksheet_factory.py`), science helpers, JH2 structured topic registry/publisher/tests, shared catalog schema/data, and catalog-driven `worksheets/index.html`. No competing science pipeline was introduced.
- Resumed Phase 3 at the exact prior point: physics, junior-high grade 2, mixed/review coverage. Did not advance to chemistry, biology or earth science.
- Re-opened the current MEXT junior-high science curriculum/commentary. The present `電流とその利用` scope still includes direct/parallel circuits, electric resistance and combined resistance, electric power, electric energy and heat quantity. This run added no new formula/fact family; it recombined the already verified JH2 registry.
- Added `scripts/science_physics_jh2_mixed_review.py` with deterministic builders sourcing all numerical items from `JH2_PHYSICS_FORMULA_TOPICS`.
- Published 15 `mixed` worksheets using seeds `6301`–`6315` and 15 cumulative `review` worksheets using seeds `6351`–`6365`.
- Each new worksheet contains 20 basic numerical problems. The builders deliberately span Ohm's law direct/reverse solving, series voltage, parallel current, series combined resistance, electric power, electric energy and heat quantity.
- Each generated mixed/review sheet is tested to contain at least seven distinct source formula IDs, all five answer-unit families V/A/Ω/W/J, and Ohm-law solving for V/I/R. The new 30 hashes must be distinct from one another and from all 90 focused JH2 hashes.
- Extended the existing JH2 publisher rather than adding a separate publication pipeline. The shared independent recomputation, normalized content hashing, PDF renderer and catalog validator remain authoritative.
- Extended `tests/test_science_physics_jh2.py` with deterministic regeneration, cross-topic breadth, focused-vs-mixed/review duplicate rejection, prompt-length and corrupted-answer checks.
- Extended `.github/workflows/science-jh2-publish.yml` to include the new builder and to require exactly 120 JH2 physics entries: 90 focused + 15 mixed + 15 review.
- GitHub Actions run `32889892459` completed successfully. The generated publication commit is `8bf5e9f6728450f9f8674948e20d97c63988f71d` (`Publish 30 JH2 mixed and review worksheets`).
- Updated `curriculum/physics/PLAN.md` so JH2 is now considered to have a complete focused → mixed → review production cycle and the next production stage is junior-high grade 3.

## Changed files

- `scripts/science_physics_jh2_mixed_review.py` (new)
- `scripts/publish_science_physics_jh2.py`
- `tests/test_science_physics_jh2.py`
- `.github/workflows/science-jh2-publish.yml`
- `worksheets/catalog.json`
- 30 new PDFs under `materials/worksheets/science/junior-high/grade-02/physics/`:
  - `science-jh2-physics-electricity-mixed-01.pdf` through `-15.pdf`
  - `science-jh2-physics-electricity-review-01.pdf` through `-15.pdf`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32889892459` completed successfully against a real checkout of current `main`.

The workflow ran, before and after generation:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK
- shared catalog/output validation -> OK

The validated JH2 checkpoint now contains:
- exactly 120 junior-high grade-2 physics catalog entries;
- 90 `focused`, 15 `mixed`, 15 `review`;
- 70 `calculation-basic`, 20 `calculation-reverse`, 15 `calculation-mixed`, 15 `calculation-review`;
- 30 Ohm-law focused entries;
- 10 each for series voltage, parallel current, series combined resistance, electric power, electric energy and heat quantity;
- 30 cumulative electricity entries across mixed/review;
- all entries use independently recomputable numeric answers;
- every registered JH2 PDF exists, begins with `%PDF`, exceeds the minimum-size check and has the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash checks.

The shared renderer remains unchanged: problem numbers are plain integers without decimal-looking punctuation, and answer pages repeat the problem layout with answers added in red.

Screenshot-based visual QA remains incomplete because the GitHub connector does not expose generated PDF bytes directly to the screenshot renderer. Structural PDF checks and prompt-length tests passed; do not claim representative generated-PDF screenshot inspection has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Published physics coverage:
- junior-high grade 1: 48 worksheets, including focused calculation/retrieval plus mixed/review;
- junior-high grade 2: 120 worksheets, including 90 focused calculations plus 15 mixed and 15 review.

Current published physics total: 168 worksheets.

JH2 now has sufficient focused/mixed/review coverage to advance in the required curriculum order to junior-high grade 3.

## Incomplete work / blockers

- Junior-high grade 3 physics has not yet been produced by the science factory.
- Before publishing JH3, re-verify current MEXT placement and quantitative treatment for motion and energy: speed/average speed, force composition/decomposition, work, power, kinetic/potential/mechanical energy and energy conversion/efficiency where applicable.
- Start with simple, mechanically recomputable formula/substitution families. Do not turn the first JH3 batch into multi-step entrance-exam problems.
- Use the 30–60 worksheet throughput target once the JH3 formula registry and tests are safe.
- Magnetic field/electromagnetic-induction retrieval remains a possible later JH2 completeness enhancement, but it must not block the required production-order move to JH3 and should not be inflated into unnatural numerical drills.
- Screenshot-based PDF visual QA remains pending.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent positional validation are reliable.
- Phase 3 checkboxes remain open until JH3, `物理基礎` and `物理` have broad basic coverage.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 3:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect any concurrent changes to the shared worksheet factory before editing;
3. re-open current MEXT junior-high science guidance and verify JH3 `運動とエネルギー` scope and the exact quantitative relations suitable for repetitive worksheets;
4. define structured JH3 formula topics using the shared science formula helper rather than creating a new engine;
5. prioritize speed/average speed, work, power and mechanically safe energy calculations; add force composition/decomposition only in forms that remain unambiguous and independently checkable;
6. target a coherent 30–60 worksheet first JH3 batch after foundation tests pass, using direct/basic and reverse variants where natural;
7. extend the shared tests/publisher/workflow, generate PDFs through Actions, validate full catalog/output existence and duplicate hashes, then record the exact published checkpoint;
8. after focused JH3 skills are broad enough, add mixed/review before moving to `物理基礎`;
9. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1/JH2 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
