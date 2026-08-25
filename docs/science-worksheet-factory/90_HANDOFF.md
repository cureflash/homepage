# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Re-read latest `main`, every Markdown file under `docs/science-worksheet-factory/` in lexical path order, the four required shared math-factory control files, and the current shared generator/catalog/PDF/test implementation before continuing.
- Stayed in Phase 3, physics, junior-high grade 1. Did not advance to chemistry or later fields.
- Reconfirmed that the first calculation batch belongs in current junior-high grade-1 `力の働き`, and kept pressure excluded from grade-1 production.
- Fixed the first calculation publisher so rerunning it is idempotent: an already-published worksheet is accepted only when its ID, URL and normalized content hash still match the deterministic regeneration.
- Added a reproducible GitHub Actions publication path in `.github/workflows/science-jh1-publish.yml`. It checks out real latest `main`, installs ReportLab, runs shared/science tests, regenerates expected content, validates the catalog/PDF outputs, and commits only genuinely new generated files.
- Published the first 12 junior-high grade-1 physics calculation worksheets:
  - spring extension / force proportionality: basic 3 + reverse 3;
  - `100 g ≒ 1 N` mass / gravitational-force conversion: basic 3 + reverse 3.
- Added structured retrieval content for current grade-1 force basics: newton (N), the approximate meaning of 1 N, mass vs weight, balance vs spring scale, the three elements of force, and the three conditions for two forces to balance.
- Added `tests/test_science_physics_jh1_retrieval.py` with deterministic regeneration, distinct full-set hashes, corruption rejection and required-fact coverage checks.
- Added `scripts/publish_science_physics_jh1_retrieval.py`, using the existing shared retrieval generator, independent validator, normalized duplicate hash, two-page PDF renderer and catalog validator.
- Published 12 retrieval worksheets:
  - forward / 用語→内容: 3;
  - reverse / 内容→用語: 3;
  - true/false / 正誤: 3;
  - fill / 穴埋め: 3.
- Junior-high grade-1 physics now has 24 published worksheets total: 12 numerical calculation sheets and 12 finite accepted-answer retrieval sheets.
- Updated `curriculum/physics/PLAN.md` and `20_EXECUTION_PLAN.md` with the published coverage. Phase 3 checkboxes remain open because junior-high grade 1 light/sound and later physics stages are still incomplete.

## Changed files

- `.github/workflows/science-jh1-publish.yml`
- `scripts/science_physics_topics.py`
- `scripts/publish_science_physics_jh1.py`
- `scripts/publish_science_physics_jh1_retrieval.py`
- `tests/test_science_physics_jh1_retrieval.py`
- `worksheets/catalog.json`
- 12 new calculation PDFs under `materials/worksheets/science/junior-high/grade-01/physics/`
- 12 new retrieval PDFs under the same directory
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions ran against a real checkout of the current repository and completed successfully.

Before publication:
- `python tests/test_worksheet_factory.py` → OK
- `python tests/test_science_physics_jh1.py` → OK
- `python tests/test_science_physics_jh1_retrieval.py` → OK

The calculation publisher reported that the existing 12 calculation sheets regenerated consistently and were already published. The retrieval publisher then generated 12 new sheets.

After publication the workflow repeated all three test suites and validated the entire grade-1 physics catalog/output set:
- exactly 24 junior-high grade-1 physics entries;
- exactly 12 `numeric` entries;
- exactly 12 `accepted-set` entries;
- every registered output file exists;
- every output begins with a PDF header and exceeds the minimum size check;
- every output has the shared two-page problem/answer PDF structure;
- shared catalog validation passes, including duplicate ID/URL/content-hash detection.

The successful Actions publication commit for the retrieval batch is `89b788596bc018336578f364104d934a05769179`.

The shared PDF renderer is the same current renderer used by mathematics, so problem numbering remains plain `1`, `2`, ... rather than `01.`-style decimal-looking labels, and the answer page uses the same problem layout with red answer overlays.

A browser screenshot-based visual inspection of the generated PDFs could not be completed through the available web PDF viewer because the newly published GitHub Pages/raw PDF URL was not retrievable by that viewer in this run. Structural PDF validation and the shared renderer tests passed; visual QA should be repeated when a screenshot-capable published URL is reachable. Do not claim that visual inspection has already passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 is in progress at junior-high grade 1 physics.

Published junior-high grade-1 physics coverage now includes:
- spring extension / force proportionality calculation;
- mass ↔ gravitational-force conversion using `100 g ≒ 1 N`;
- force-unit/concept recall;
- mass vs weight;
- measurement instruments;
- force's magnitude/direction/point of application;
- conditions for two forces to balance.

The GitHub Actions path removes the previous binary-PDF/checkout blocker and can be reused for subsequent safe science batches.

## Incomplete work / blockers

- Junior-high grade-1 light and sound basic retrieval coverage is not yet produced.
- Do not invent light/sound calculation formulas merely to increase worksheet count. Add numerical drills only where the current curriculum explicitly supports a natural quantitative relationship at this stage.
- Focused force calculation/retrieval exists, but mixed and cumulative-review JH1 physics sheets should wait until light/sound core coverage exists.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent validation are reliable.
- Browser screenshot-based PDF visual QA remains pending because the available web PDF viewer could not retrieve the new public PDF URL during this run.
- Phase 3 broad calculation/retrieval/review checkboxes must remain unchecked until the physics production map is broadly covered through junior high and high school.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 1:

1. re-read latest `main`, all science-factory Markdown files, required math control files, and current shared generator/tests/catalog;
2. verify the exact current MEXT junior-high grade-1 scope and terminology for light and sound immediately before defining new fact sets;
3. add structured, unambiguous light retrieval facts first: reflection/refraction and convex-lens image basics that can be mechanically checked without diagrams where possible;
4. add structured sound retrieval facts: source vibration, transmission, amplitude and loudness, frequency and pitch, using only current grade-1 terminology;
5. generate multiple deterministic forward/reverse/fill/true-false variants where natural, run the shared and topic-specific tests, and publish through the idempotent Actions pipeline;
6. after light/sound core coverage exists, create a junior-high grade-1 mixed/review set covering light + sound + force;
7. then advance to junior-high grade 2 physics and prioritize electrical calculations such as current/voltage/resistance and Ohm's law after current curriculum verification;
8. keep physics ahead of chemistry, biology and earth science.

Do not publish pressure as a junior-high grade-1 physics worksheet.
