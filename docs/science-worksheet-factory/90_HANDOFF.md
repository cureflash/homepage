# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Re-read latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, read the four required shared math-factory control files, and inspected the latest shared generator/validator/PDF/catalog/site implementation before editing.
- Observed concurrent mathematics work on `main` and verified that the shared worksheet infrastructure still exposes the same science integration points: shared deterministic generation, independent validation, normalized-content hashing, common PDF rendering, shared catalog and catalog-driven site listing.
- Stayed in Phase 3 and completed the next unfinished junior-high grade-1 physics step. Did not advance to chemistry, biology or earth science.
- Re-checked current MEXT junior-high science guidance before publication. The verified grade-1 scope still contains `身近な物理現象` with light/reflection/refraction/convex lenses, sound properties, and force; the new batch introduces no new curriculum facts and only recombines already verified grade-1 registries.
- Added `scripts/science_physics_jh1_mixed_review.py` to build deterministic cross-domain problem sets directly from the existing force/light/sound structured registries rather than copying facts into a new content source.
- Added 3 `mixed` worksheets. Each has 10 short fill-style retrieval items with a forced domain balance: 4 force + 3 light + 3 sound before deterministic shuffling.
- Added 3 cumulative `review` worksheets. Each has 10 items and deliberately changes retrieval direction/format across the grade-1 physics facts: forward, reverse, true/false and fill.
- Added `scripts/publish_science_physics_jh1_mixed_review.py`, which uses the shared science retrieval generator, shared independent validator, shared normalized duplicate hashing, shared PDF renderer and shared catalog validator. It is idempotent and verifies an existing ID against its deterministic URL/content hash before accepting it as already published.
- Added `tests/test_science_physics_jh1_mixed_review.py` covering deterministic regeneration, six distinct worksheet hashes, cross-domain coverage, multiple retrieval families in review, prompt-length guard and corrupted-answer rejection.
- Extended `.github/workflows/science-jh1-publish.yml` to run the new tests/publisher and then validate the entire grade-1 physics publication set.
- GitHub Actions published all 6 new PDFs and catalog entries successfully in commit `ee40861002287e6af6e49ca7a84c5e29391f74fb`.
- Junior-high grade-1 physics now has 48 published worksheets total:
  - 12 numerical focused calculation worksheets;
  - 30 focused accepted-set retrieval worksheets;
  - 3 cross-domain `mixed` retrieval worksheets;
  - 3 cumulative `review` retrieval worksheets.
- Updated `curriculum/physics/PLAN.md` and `20_EXECUTION_PLAN.md`. Phase 3 checkboxes remain open because JH2, JH3, 物理基礎 and 物理 production are still incomplete.

## Changed files

- `scripts/science_physics_jh1_mixed_review.py` (new)
- `scripts/publish_science_physics_jh1_mixed_review.py` (new)
- `tests/test_science_physics_jh1_mixed_review.py` (new)
- `.github/workflows/science-jh1-publish.yml`
- `worksheets/catalog.json`
- 6 new PDFs under `materials/worksheets/science/junior-high/grade-01/physics/`:
  - `science-jh1-physics-mixed-01.pdf` through `-03.pdf`
  - `science-jh1-physics-review-01.pdf` through `-03.pdf`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions ran against a real checkout of current `main` and completed successfully.

Before publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh1.py` -> OK
- `python tests/test_science_physics_jh1_retrieval.py` -> OK
- `python tests/test_science_physics_jh1_light_sound.py` -> OK
- `python tests/test_science_physics_jh1_mixed_review.py` -> OK

Existing JH1 publishers regenerated consistently and reported their prior batches already published. The new publisher reported:
- `published 6 junior-high grade-1 mixed/review worksheets`

After publication all five test suites passed again. The workflow then validated the complete JH1 physics catalog/output set:
- exactly 48 JH1 physics catalog entries;
- exactly 12 `numeric` entries;
- exactly 36 `accepted-set` entries;
- exactly 3 `mixed` entries and 3 `review` entries;
- all new mixed/review sheets contain 10 problems;
- every registered JH1 physics output exists;
- every PDF starts with `%PDF` and passes the minimum-size check;
- every PDF uses the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash detection.

The shared renderer still follows the mathematics factory rules: ordinary integer problem numbers and an answer page that preserves the problem layout and overlays answers in red.

Screenshot-based visual QA is still incomplete because this runtime does not currently provide a reliable path from the GitHub PDF binary to the screenshot/image renderer. Structural rendering validation passed. The new mixed/review prompts are kept to 10 items and have an explicit prompt-length test to reduce clipping risk, but that is not equivalent to visual inspection.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Junior-high grade 1 physics now has a complete first production cycle:
- focused calculation;
- focused concept retrieval;
- focused light/sound retrieval;
- cross-domain mixed retrieval;
- cumulative review.

This is sufficient to advance to junior-high grade 2 while leaving Phase 3 as a whole open.

## Incomplete work / blockers

- Junior-high grade 2 physics has not yet been produced by the science factory.
- Before JH2 publication, re-verify current MEXT placement and exact quantitative treatment of current, voltage, resistance, circuit relationships, electric power/energy/heat and magnetic/electromagnetic-induction content.
- Prioritize dense basic calculation repetition for current/voltage/resistance and Ohm's law. Add reverse-variable, unit and mixed variants only where natural.
- Do not introduce trick circuit problems or entrance-exam-style multi-step derivations as the main product.
- Keep retrieval drills limited to concepts/symbols/formula recall that support the calculations.
- Screenshot-based PDF visual QA remains pending for representative JH1 outputs.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent position/answer validation are reliable.
- Phase 3 calculation/retrieval/review checkboxes remain unchecked until physics has broad coverage through JH2, JH3, 物理基礎 and 物理.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 2:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect any new shared worksheet-factory changes from concurrent mathematics production before editing science code;
3. re-verify current MEXT JH2 placement for `電流`, especially current/voltage in circuits, resistance, electric power/energy/heat, static electricity/current and magnetic/electromagnetic-induction content;
4. define the first structured JH2 calculation topics for current, voltage, resistance and Ohm's law using simple formula-understanding/substitution problems;
5. produce multiple deterministic `basic` and `reverse` variants first; add unit/mixed variants only after the core sets are safe;
6. use the shared validator/hash/PDF/catalog/site infrastructure, run all available shared and topic tests, then publish through a real checkout/Actions path;
7. after the first JH2 batch, continue circuit-series/parallel and electric-power/energy/heat skills in the curriculum plan order;
8. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1 merely to inflate counts unless adding a legitimate nonduplicate high-use variant or shared-quality improvement.
