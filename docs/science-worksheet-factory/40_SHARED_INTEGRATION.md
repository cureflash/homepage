# Science Worksheet Factory — shared integration

Observed against latest `main` on 2026-08-25.

## Reuse path

Science must extend these existing shared components rather than create a separate engine:

- `scripts/worksheet_factory.py`: deterministic seeded generation, independent recomputation, normalized content hashing, PDF rendering, catalog emission.
- `worksheets/catalog.json`: current machine-readable worksheet catalog.
- `worksheets/index.html`: catalog-driven worksheet listing.
- `tests/test_worksheet_factory.py`: shared determinism/answer/catalog validation.
- `materials/worksheets/`: generated PDF output tree.

The current generator is math-specific only in `SKILLS`, `make_problem`, `compute_answer`, and problem text/render details. Seed handling, duplicate hashing, catalog validation, output-path validation, PDF page structure, and catalog/site flow are reusable.

## Science extension boundary

Do not fork `worksheet_factory.py` into a science-only pipeline. Extend the shared model with subject-specific generators/validators while keeping common catalog/PDF/listing behavior shared.

Science catalog entries use the common required fields and additionally require:

- `subject: "理科"`
- `science_field`: `physics`, `chemistry`, `biology`, or `earth-science`
- `worksheet_mode`: calculation/retrieval family identifier
- `formal_course` for high-school science entries (`物理基礎`, `物理`, `化学基礎`, `化学`, `生物基礎`, `生物`, `地学基礎`, `地学`)

`validate_catalog` in the shared generator now rejects science entries missing these discriminator fields and can verify that every registered output URL exists beneath the repository root.

## Existing URLs to preserve

The root site currently publishes these established worksheet URL families and they must remain valid:

- `materials/seifu-fu-100masu-kaho-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-genpo-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-joho-01.pdf` through `-05.pdf`
- `materials/mojishiki-100masu-01.pdf` through `-05.pdf`

The shared generated catalog currently also references:

- `materials/worksheets/elementary/grade-01/e1-compose-5-01.pdf`
- `materials/worksheets/elementary/grade-01/e1-compose-10-01.pdf`
- `materials/worksheets/elementary/grade-01/e1-add-10-01.pdf`
- `materials/worksheets/elementary/grade-01/e1-sub-10-01.pdf`

Science additions must not rename, replace, or shadow these paths.

## Phase-0 validation contract

Before a catalog is publishable, shared validation checks required metadata, unique worksheet IDs, unique output URLs, unique normalized content hashes, positive problem counts, science discriminator metadata, high-school formal-course metadata, and—when a repository root is supplied—existence of every registered output file.

Numerical/retrieval answer-family implementation remains Phase 1–2 work. Existing math answer recomputation remains unchanged.
