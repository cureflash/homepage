# Science Worksheet Factory — shared integration

Observed against latest `main` on 2026-08-25.

## Reuse path

Science extends these shared components rather than creating a separate engine:

- `scripts/worksheet_factory.py`: deterministic seeded generation, answer validation helpers, normalized content hashing, PDF rendering, catalog emission.
- `worksheets/catalog.json`: machine-readable worksheet catalog shared by mathematics and science.
- `worksheets/index.html`: catalog-driven listing/filter UI shared by subjects.
- `tests/test_worksheet_factory.py`: shared determinism/answer/catalog/listing validation.
- `materials/worksheets/`: generated PDF output tree.

The current elementary math problem families remain in `SKILLS`, `make_problem`, `compute_answer`, and `text_problem`. Science must add subject-specific generators behind the same pipeline rather than fork the file.

## Common catalog contract

Every catalog entry contains the existing identity/publication fields plus:

- `difficulty`
- `worksheet_series`: `focused`, `mixed`, or `review`
- `answer_type`: `numeric` or `accepted-set`

The existing mathematics entries are explicitly marked `difficulty=basic`, `worksheet_series=focused`, `answer_type=numeric`.

Science catalog entries additionally require:

- `subject: "理科"`
- `science_field`: `physics`, `chemistry`, `biology`, or `earth-science`
- `worksheet_mode`: calculation/retrieval family identifier
- junior-high `grade`: 1, 2, or 3
- `formal_course` for high-school science entries: `物理基礎`, `物理`, `化学基礎`, `化学`, `生物基礎`, `生物`, `地学基礎`, or `地学`

High-school science does not require a fabricated fixed school year; `formal_course` is authoritative.

## Answer representation

The shared generator exposes two answer specifications for future science generators:

- numeric: exact or tolerance-based numerical value, with an optional unit field;
- accepted-set: one or more finite non-empty accepted strings.

`answer_matches` validates candidates against those specifications. This is the schema/representation layer only; Phase 2 still needs generator-specific independent recomputation for actual science problem families.

## Shared listing contract

`worksheets/index.html` reads only `worksheets/catalog.json` and can filter by:

- subject;
- school level;
- grade or formal course;
- science field;
- unit;
- worksheet series.

The page also accepts `?subject=理科`, so `subjects/science/index.html` can link into the shared catalog without hand-written science worksheet cards.

## Existing URLs to preserve

The root site currently publishes these established worksheet URL families and they must remain valid:

- `materials/seifu-fu-100masu-kaho-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-genpo-01.pdf` through `-05.pdf`
- `materials/seifu-fu-100masu-joho-01.pdf` through `-05.pdf`
- `materials/mojishiki-100masu-01.pdf` through `-05.pdf`

The generated catalog also references the current elementary paths under `materials/worksheets/elementary/grade-01/`. Science additions must not rename, replace, or shadow them.

## Validation contract after Phase 1

Before a catalog is publishable, shared validation checks required metadata, supported school level, unique worksheet IDs, unique output URLs, unique normalized content hashes, positive problem counts, difficulty, worksheet series, answer type, science discriminator metadata, junior-high science grade, high-school formal course, and—when a repository root is supplied—existence of every registered output file.

Phase 2 is responsible for reusable science problem generators, independent per-family answer recomputation, normalized duplicate detection for those science problem objects, deterministic seed tests, and printable-output tests before any physics worksheet is published.
