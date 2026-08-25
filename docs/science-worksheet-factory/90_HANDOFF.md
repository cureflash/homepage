# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Re-read latest `main`, every Markdown file under `docs/science-worksheet-factory/` in lexical path order, the required shared math-factory control files, and the current shared generator/tests before editing.
- Completed the Phase 2 implementation without publishing any science worksheet content.
- Added `scripts/science_worksheet_helpers.py` as a subject-specific generator helper module that plugs into the existing shared worksheet pipeline rather than duplicating catalog/PDF/site infrastructure.
- Implemented deterministic structured numerical formula drills for product and sum relations, including solving directly for the result or reversing the relation to solve for an input variable. Variable labels, units, value sets/ranges, answer tolerance, and solve target are supplied through structured specs.
- Implemented deterministic retrieval generators for forward/reverse pairs, matching, classification, true/false, fill-in, and ordering.
- Added independent science answer recomputation from problem source data. Stored generated answers and answer specifications are checked against recomputed answers rather than trusted directly.
- Integrated science problem types into the shared `scripts/worksheet_factory.py` validation, text rendering, answer rendering, normalized content hashing, and existing two-page PDF renderer.
- Kept the existing mathematics `SKILLS`, math problem generation, existing catalog IDs/URLs, and math rendering behavior intact.
- Changed normalized hashing to omit generated answer fields (`answer`, `answer_spec`) while retaining the actual problem/source structure, so science worksheets are compared by normalized problem content rather than cached answer text.
- Extended `tests/test_worksheet_factory.py` with deterministic seed checks, distinct-seed hash checks, direct/reverse formula validation, corrupted-answer rejection, all supported retrieval families, corrupted retrieval-answer rejection, and PDF-output smoke tests for both numerical and retrieval science problems.
- Updated `20_EXECUTION_PLAN.md` and marked Phase 2 items complete.

## Changed files

- `scripts/science_worksheet_helpers.py` (new)
- `scripts/worksheet_factory.py`
- `tests/test_worksheet_factory.py`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

- Re-checked latest `main` after the implementation commits. At the last reconciliation point the repository head was the science test commit and no concurrent edits to the touched files were observed.
- The new tests explicitly cover deterministic generation, independent answer recomputation, normalized duplicate hashing, retrieval families, and shared PDF rendering.
- Full local test execution could not be run because the execution container still cannot resolve `github.com`; a fresh clone failed with `Could not resolve host: github.com`.
- No GitHub Actions workflow exists in this repository for the Python worksheet test suite, so there was no remote CI run available as a substitute.
- No science worksheet/catalog entry was published in this run, so no new curriculum-placement claim was introduced.

## Current implementation status

Phase 0, Phase 1, and Phase 2 are implemented.

The shared science foundation now supports structured formula and retrieval problem generation, independent validation, normalized duplicate detection, and the same printable PDF renderer used by mathematics. Physics production can begin next, but the first actual topic must be verified against the current MEXT junior-high science curriculum immediately before publication.

## Incomplete work / blockers

- Phase 3 physics production has not started.
- The current formula helper supports product and sum relations. Add additional generic relation shapes only when an actual curriculum topic requires them; do not pre-build speculative formula types.
- Diagram-label drills remain deferred because deterministic diagram rendering/label validation is not part of the Phase 2 foundation.
- Full local test execution remains blocked by container DNS/network access. If a future run has a usable checkout, run `python tests/test_worksheet_factory.py` before or alongside the first publication batch.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 3, physics, junior-high grade 1:

1. re-read latest `main`, every science-factory Markdown file, required shared math control files, and the current generator/helper/tests/catalog before editing;
2. reconcile any concurrent math-factory changes before adding science definitions;
3. verify the current MEXT junior-high grade-1 placement for the first physics topics in `curriculum/physics/PLAN.md` before publishing them;
4. begin with the simplest mechanically robust calculation topics in the documented grade-1 order, using the shared structured formula generator and existing PDF/catalog pipeline;
5. create multiple deterministic nonduplicate variants only after independent validation succeeds;
6. register only outputs whose PDF exists and whose catalog metadata passes shared validation;
7. keep physics ahead of chemistry, biology, and earth science until the physics production map is broadly covered.

Do not skip directly to chemistry or later science fields.
