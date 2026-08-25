# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Re-read latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, read the four required shared math-factory control files, and inspected the current shared generator/catalog/PDF/site/test implementation before editing.
- Stayed in Phase 3, physics, junior-high grade 1. Did not advance to chemistry or later fields.
- Re-verified current MEXT junior-high grade-1 light and sound placement immediately before publication. Confirmed the current treatment of:
  - reflection and refraction, including incident angle = reflection angle and qualitative incident/refracted-angle relationships;
  - total internal reflection;
  - convex-lens focal point and real/virtual images, including the enlarged virtual image when the object is inside the focal point;
  - white light being separated into colors by a prism;
  - sound arising from vibration and travelling through matter such as air as a wave;
  - loudness being related to amplitude and pitch being related to frequency.
- Added `scripts/science_physics_jh1_light_sound_topics.py` as content-only structured definitions. No separate science renderer, validator, catalog, or site pipeline was introduced.
- Added 18 deterministic focused retrieval worksheets:
  - light: forward 3 + reverse 3 + fill 3;
  - sound: forward 3 + reverse 3 + fill 3.
- Each new light/sound worksheet has 10 problems rather than 20. This is deliberate: the shared PDF renderer places the first 10 problems in the first column and the next 10 in the second column. Keeping these text-heavy prompts to 10 lets them use the available page width without creating a competing renderer or risking obvious cross-column collision.
- Added `scripts/publish_science_physics_jh1_light_sound.py`, which uses the shared retrieval generator, independent science validator, normalized duplicate hash, shared PDF renderer and shared catalog validator. It is idempotent and rejects ID/URL/content mismatches or duplicate hashes.
- Added `tests/test_science_physics_jh1_light_sound.py` covering deterministic regeneration, all 18 hashes being distinct, answer corruption rejection, required fact coverage and concise prompt length.
- Extended `.github/workflows/science-jh1-publish.yml` so the real repository checkout validates existing calculation/force batches, publishes light/sound, re-runs all tests, validates the complete catalog/output set, and commits only generated changes.
- GitHub Actions successfully published the 18 PDFs and catalog entries in commit `63a5c45ab5b9e1d29038fb19f178b7013f33914e`.
- Junior-high grade-1 physics now has 42 published worksheets total:
  - 12 numerical calculation worksheets;
  - 30 accepted-answer retrieval worksheets.
- Updated `curriculum/physics/PLAN.md` and `20_EXECUTION_PLAN.md` with the new published coverage. Phase 3 checkboxes remain open because JH1 mixed/review and all later physics stages are still incomplete.

## Changed files

- `scripts/science_physics_jh1_light_sound_topics.py` (new)
- `scripts/publish_science_physics_jh1_light_sound.py` (new)
- `tests/test_science_physics_jh1_light_sound.py` (new)
- `.github/workflows/science-jh1-publish.yml`
- `worksheets/catalog.json`
- 18 new PDFs under `materials/worksheets/science/junior-high/grade-01/physics/`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

The publication workflow ran against a real checkout of current `main` and completed successfully.

Before publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh1.py` -> OK
- `python tests/test_science_physics_jh1_retrieval.py` -> OK
- `python tests/test_science_physics_jh1_light_sound.py` -> OK

Existing publishers regenerated consistently and reported the earlier calculation and force-retrieval batches already published. The new publisher then reported:
- `published 18 junior-high grade-1 light/sound worksheets`

After publication all four test suites passed again. The workflow then validated the complete JH1 physics catalog/output set:
- exactly 42 JH1 physics entries;
- exactly 12 `numeric` entries;
- exactly 30 `accepted-set` entries;
- exactly 18 light/sound entries;
- every light/sound entry has 10 problems;
- every registered PDF exists;
- every PDF starts with a PDF header and passes the minimum-size check;
- every PDF has the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash checks.

The shared renderer remains the same renderer used by mathematics: problem numbers are plain integers and answer pages repeat the problem layout with red answer overlays.

A representative new PDF was successfully fetched through the GitHub connector, confirming the generated file exists and is a normal two-page ReportLab PDF. However, the available environment could not hand the GitHub binary through to the local image renderer or web PDF screenshot path, so screenshot-based visual QA of the new light/sound PDFs is still not complete. Do not claim that clipping/overlap has been visually inspected. The 10-problem layout choice and prompt-length test reduce the known horizontal-overflow risk, but are not a substitute for image inspection.

Concurrent repository work was observed while this run was active. `main` was rechecked before progress-document updates; the concurrent changes were outside the science factory and did not conflict with the science files.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress at junior-high grade 1 physics.

Published JH1 physics coverage now includes:
- spring extension / force proportionality, direct and reverse;
- mass <-> gravitational-force conversion using `100 g ≒ 1 N`, direct and reverse;
- force unit/concepts, mass vs weight, measurement instruments, force's three elements and two-force balance;
- reflection/refraction, total internal reflection, convex-lens focal point and real/virtual images, white light/prism basics;
- sound generation/transmission, amplitude/loudness and frequency/pitch relationships.

The core focused JH1 light + sound + force coverage now exists, so mixed/review work is the next legitimate production step before advancing to JH2.

## Incomplete work / blockers

- Junior-high grade-1 mixed/review worksheets combining light, sound and force have not yet been produced.
- Do not create mixed/review sheets by merely concatenating titles or duplicating identical problem sets. Mix structured facts from the existing verified registries with deterministic seeds and independently validated answers.
- The light/sound batch deliberately did not invent extra numerical formulas. Add a JH1 light/sound numerical drill only when the current curriculum supports a natural basic quantitative relation and the worksheet remains formula/substitution-level.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent position/answer validation are reliable.
- Screenshot-based PDF visual QA remains pending because the current runtime could not transfer the GitHub PDF binary into the image-rendering path. Structural validation passed; visual validation remains a separate unfinished check.
- Phase 3 broad calculation/retrieval/review checkboxes must remain unchecked until the physics production map has broad coverage through JH1, JH2, JH3, 物理基礎 and 物理.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 1:

1. start from latest `main` and repeat the required Markdown/shared-infrastructure read sequence;
2. build a structured JH1 mixed/review fact pool from the already verified light, sound and force registries;
3. publish legitimate deterministic `mixed` and then cumulative `review` variants, using several seeds, independent answer validation, normalized duplicate detection and the shared PDF/catalog pipeline;
4. keep text-heavy mixed sheets within a layout that is demonstrably printable; if screenshot-capable PDF access becomes available, visually inspect representative new and existing JH1 PDFs before expanding further;
5. once JH1 focused + mixed/review coverage is safe, advance to junior-high grade 2 physics;
6. immediately before JH2 publication, re-verify current MEXT placement for current, voltage, resistance, circuit rules, electric power/energy/heat and related magnetic content;
7. prioritize simple calculation repetition for current/voltage/resistance and Ohm's law, then natural reverse/unit/mixed variants;
8. keep physics ahead of chemistry, biology and earth science.

Do not publish pressure as a junior-high grade-1 physics worksheet.
