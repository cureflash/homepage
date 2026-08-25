# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Re-read latest `main`, every Markdown file under `docs/science-worksheet-factory/` in lexical path order, the four required shared math-factory control files, and the current shared science/math generator and tests before editing.
- Started Phase 3 at physics, junior-high grade 1; did not advance to chemistry or later fields.
- Re-verified the current MEXT junior-high science curriculum before defining publishable topics.
- Found and corrected a curriculum-map error: pressure is no longer a junior-high grade-1 physics production topic in the current curriculum. Removed it from the grade-1 plan instead of publishing stale-placement worksheets.
- Confirmed grade-1 treatment of force magnitude, spring deformation/extension and the approximate relation that a 100 g mass experiences about 1 N of gravitational force.
- Added `scripts/science_physics_topics.py` with structured, content-only definitions for two mechanically robust grade-1 calculation skills:
  - spring extension and force proportionality (`x = F × k`), direct and reverse;
  - mass and gravitational-force conversion using the junior-high approximation `100 g ≒ 1 N`, direct and reverse.
- Each definition uses three deterministic seeds and 20 problems per worksheet, giving a planned first batch of 12 nonduplicate worksheets once rendered.
- Added `scripts/publish_science_physics_jh1.py`. It uses the existing shared formula generator, independent validation, normalized duplicate hashing, shared two-page PDF renderer and shared catalog validator. It refuses ID/URL/content-hash collisions and refuses to overwrite existing PDFs.
- Added `tests/test_science_physics_jh1.py` covering deterministic regeneration, unique normalized hashes across the first batch, direct/reverse spring calculations, and the 100 g-per-newton conversion.
- Updated `curriculum/physics/PLAN.md` to match the verified current grade-1 scope and to defer unverified quantitative light/sound drills until their exact treatment is checked.
- Updated `20_EXECUTION_PLAN.md` progress log. Phase 3 checkboxes remain unchecked because no science PDF/catalog entry has been published yet.

## Changed files

- `scripts/science_physics_topics.py` (new)
- `scripts/publish_science_physics_jh1.py` (new)
- `tests/test_science_physics_jh1.py` (new)
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

- Curriculum placement was rechecked against the current MEXT junior-high science curriculum explanation before content definitions were added.
- Source definitions are limited to relation shapes already supported by the shared Phase-2 formula generator; no duplicate science rendering/catalog engine was added.
- The publisher calls shared `validate`, `normalized_hash`, `render_pdf`, and `validate_catalog`, and validates the prospective catalog before publication plus output-file existence after rendering.
- The publisher stages rendered PDFs in a temporary directory before moving them into the public output tree and does not write the catalog until every planned output has rendered and the final catalog validates.
- Full execution of `python tests/test_worksheet_factory.py` and `python tests/test_science_physics_jh1.py` could not be performed in this runtime because the container cannot resolve `github.com` to obtain a checkout. The GitHub connector can edit UTF-8 source files but cannot create/upload the binary PDF outputs required for publication.
- Therefore no science catalog entry or PDF was published in this run. This avoids registering links whose files do not exist.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 is in progress at junior-high grade 1 physics.

The first grade-1 physics batch is now defined and has a reproducible publisher, but the acceptance criterion requiring generated PDF files, executed validation and registered catalog entries is not yet satisfied.

## Incomplete work / blockers

- Execute the shared and grade-1 physics tests in a usable repository checkout.
- Run `python scripts/publish_science_physics_jh1.py` from the repository root to generate and register the first 12 PDFs only after tests pass.
- Confirm the generated PDFs visually/structurally enough to ensure science prompt text fits the shared two-column printable layout; the topic definitions deliberately use short variable labels to reduce overflow risk.
- Continue grade-1 physics only after this first batch is safely published. Do not mark the Phase 3 calculation checkbox complete after only these two skills.
- Light/sound quantitative drills remain deferred until the exact current curricular quantities and terminology are individually verified.
- Diagram-label drills remain deferred until deterministic diagram rendering/validation exists.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 1:

1. re-read latest `main`, all science-factory Markdown files, required math control files, and the current shared generator/tests/catalog;
2. reconcile any concurrent changes to the shared worksheet renderer/catalog before execution;
3. if a usable checkout is available, run `python tests/test_worksheet_factory.py` and `python tests/test_science_physics_jh1.py`;
4. if both pass, run `python scripts/publish_science_physics_jh1.py` to render the planned 12 PDFs and append their validated catalog entries;
5. validate all new URLs/output files and duplicate hashes before committing publication;
6. after the first batch is safe, continue remaining junior-high grade-1 physics retrieval/basic skills in the verified curriculum order;
7. keep physics ahead of chemistry, biology and earth science.

Do not publish pressure as a junior-high grade-1 physics worksheet.
