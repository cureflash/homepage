# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Re-read latest `main`, the full science-factory Markdown tree, the required shared math-factory instructions/handoff, and the current shared generator/catalog/listing/tests before changing code.
- Completed Phase 1 of `20_EXECUTION_PLAN.md` without publishing science content yet.
- Generalized `scripts/worksheet_factory.py` so the shared catalog now requires `difficulty`, `worksheet_series`, and `answer_type` in addition to the existing worksheet identity/publication metadata.
- Added shared answer specifications for numerical answers (`numeric`, optional tolerance/unit) and finite accepted string sets (`accepted-set`) plus validation/matching helpers.
- Added science metadata validation for `science_field`, `worksheet_mode`, junior-high grade 1–3, and the formal high-school courses `物理基礎/物理/化学基礎/化学/生物基礎/生物/地学基礎/地学`.
- Preserved all existing mathematics worksheet IDs, URLs, content hashes, and generator behavior; existing math catalog entries were only augmented with the new shared metadata.
- Generalized `worksheets/index.html` from a math-only listing to the shared catalog view with filters for subject, school level, grade/formal course, science field, unit, and focused/mixed/review series.
- Added query-parameter entry for `?subject=理科`, and linked `subjects/science/index.html` into that shared listing. The science landing page now presents junior-high grades and high-school formal course pairs instead of fabricated high-school year placement.
- Extended `tests/test_worksheet_factory.py` with numerical-answer, accepted-answer-set, science metadata, formal-course, worksheet-series, retrieval-entry, and shared-listing checks.
- Updated `40_SHARED_INTEGRATION.md` with the Phase-1 catalog, answer, and listing contracts.
- Marked all Phase 1 items complete in `20_EXECUTION_PLAN.md`.

## Changed files

- `scripts/worksheet_factory.py`
- `worksheets/catalog.json`
- `worksheets/index.html`
- `subjects/science/index.html`
- `tests/test_worksheet_factory.py`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/40_SHARED_INTEGRATION.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

- Re-fetched the changed generator, catalog, tests, and latest repository tree from GitHub after the implementation commits and confirmed the new schema/listing changes are present on latest `main`.
- Existing worksheet IDs, URLs, and content hashes remain unchanged; only shared metadata was added to current math catalog entries.
- The latest repository tree was re-checked immediately before this handoff update; no concurrent changes were observed in the files touched by this science batch.
- A local full test execution was attempted from the execution container, but the container could not resolve `github.com`, so it could not clone the repository. This is an execution-environment network limitation, not an observed repository test failure.
- No science worksheet has been published, so no curriculum-placement verification was required for a new published topic in this run.

## Current implementation status

Phase 0 and Phase 1 are complete.

The shared pipeline now has the catalog and answer-representation layer needed for science, but Phase 2 is not complete. In particular, the repository does not yet have reusable science numerical formula generators, reusable retrieval generators, or independent science-family answer recomputation. Therefore physics production must not start yet.

## Incomplete work / blockers

- Phase 2 numerical formula-drill helpers are not implemented.
- Phase 2 retrieval helpers (`forward/reverse`, matching, classification, true/false, fill, ordering) are not implemented.
- Independent validator/recomputation logic for actual science problem families is not implemented.
- Science-specific normalized duplicate detection needs to be exercised against the future problem representations.
- Deterministic seed and printable-output tests for science generators are not implemented.
- Full local test execution remains unavailable in the current container while GitHub DNS/network access is unavailable. Continue using repository inspection and run the suite if a future execution environment has a usable checkout.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 2, first unfinished item:

1. re-read latest `main`, every Markdown file under `docs/science-worksheet-factory/`, and the required shared math-factory control files;
2. inspect the latest `scripts/worksheet_factory.py`, catalog, listing, tests, and any concurrent math-factory changes before editing;
3. implement reusable numerical formula-drill helpers in the shared generator without creating a science-only engine;
4. implement structured retrieval helpers for forward/reverse, matching, classification, true/false, fill, and ordering;
5. add independent per-family answer recomputation/validation rather than trusting generated answer fields;
6. extend normalized duplicate detection and deterministic seed tests for the new science problem structures;
7. add printable-output tests for both numerical and retrieval science worksheets;
8. only after every Phase 2 acceptance criterion is met, verify the current MEXT placement for the first physics topic and begin Phase 3 with junior-high grade 1 physics.

Do not publish physics worksheets before Phase 2 is complete.
