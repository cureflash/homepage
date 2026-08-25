# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Read the full science-factory Markdown control tree and the required math-factory shared instructions/handoff.
- Inspected the live shared math implementation: `scripts/worksheet_factory.py`, `worksheets/catalog.json`, `worksheets/index.html`, `tests/test_worksheet_factory.py`, generated PDF paths, and the root site's existing material links.
- Confirmed that science can reuse the current seeded generation → independent answer recomputation → normalized content hash → PDF → catalog → generated listing path; no separate science-only engine is needed.
- Added `docs/science-worksheet-factory/40_SHARED_INTEGRATION.md` documenting the reuse boundary and stable URL families that science must not break.
- Extended `scripts/worksheet_factory.py` with shared catalog validation for required fields, duplicate IDs/URLs/content hashes, positive problem counts, output-file existence, science field/mode metadata, and mandatory formal course metadata for high-school science.
- Kept the existing math problem generators and answer recomputation behavior unchanged.
- Extended `tests/test_worksheet_factory.py` to validate the current catalog/output links and science metadata rejection behavior.
- Marked Phase 0 complete in `20_EXECUTION_PLAN.md`.

## Stable published paths recorded

Preserve the existing root-site worksheet families:

- `materials/seifu-fu-100masu-kaho-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-genpo-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-joho-01.pdf` through `-05.pdf`
- `materials/mojishiki-100masu-01.pdf` through `-05.pdf`

Also preserve the currently cataloged generated elementary paths under `materials/worksheets/elementary/grade-01/`.

## Validation results

- Existing generator logic and new catalog validation were reviewed against the current catalog and repository tree.
- The shared test file now exercises current catalog URL existence and science metadata guards.
- A full repository test execution could not be run in this environment because direct Git network access from the local execution container is unavailable. No test failure was observed through repository inspection, but the next run should execute the test suite if an executable checkout becomes available.

## Current implementation status

Phase 0 is complete. The shared pipeline exists and has an explicit science integration contract. No science worksheet has been published yet.

Phase 1 is next: extend the shared structured model from its current math-oriented catalog shape to explicit science schema/answer-type support, then update the catalog-driven listing so mathematics and science can be grouped independently without hand-written cards.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 1, first unfinished item:

1. re-read latest `main` and all science Markdown files, including `40_SHARED_INTEGRATION.md`;
2. inspect `scripts/worksheet_factory.py`, `worksheets/catalog.json`, `worksheets/index.html`, and tests for concurrent math changes;
3. implement explicit science metadata in the shared catalog/schema: science field, grade/course, formal high-school course, unit, skill/fact set, worksheet mode, difficulty, seed and output path while retaining existing math entries;
4. add a shared representation for numerical answers and finite accepted-answer sets without publishing physics content yet;
5. extend tests and only then proceed through the remaining Phase 1 items.

Do not begin physics production until Phases 1 and 2 provide validated shared science generation support.
