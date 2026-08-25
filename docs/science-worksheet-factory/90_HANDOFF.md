# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, read the four required shared math-factory control files, and inspected the current shared generator, validator, PDF renderer, catalog and site listing before editing.
- Resumed Phase 3 at the exact handoff point: physics, junior-high grade 2. Did not advance to junior-high grade 3 or another science field.
- Re-verified current MEXT junior-high science placement before publication. The current grade-2 `電流とその利用` scope includes current and voltage in circuits, the relationship between voltage and current, electrical resistance, series/parallel circuits, combined resistance treatment, electric energy/heat, and magnetic/electromagnetic-induction content.
- Observed a concurrent update to `00_MASTER_INSTRUCTIONS.md` adding a normal scheduled-run throughput target of 30–60 new worksheets once a topic family is verified. Re-read the changed master instruction and reconciled this run to that rule instead of stopping at a tiny seed batch.
- Added `scripts/science_physics_jh2_topics.py` with a structured, content-only Ohm-law definition using `V = I × R` and three natural calculation directions:
  - direct/basic: solve voltage `V`;
  - reverse: solve current `I`;
  - reverse: solve resistance `R`.
- Used 10 deterministic seeds (`6201`–`6210`) and 20 problems per sheet, producing 30 legitimate focused worksheets: 10 direct voltage, 10 current reverse, 10 resistance reverse.
- Added `scripts/publish_science_physics_jh2.py`. It reuses the shared science formula generator, independent answer validator, normalized-content hash, common PDF renderer and common catalog validator; it does not introduce a parallel science pipeline.
- The publisher is idempotent. An existing worksheet ID is accepted only when its deterministic URL and content hash match; URL and content-hash collisions are rejected; PDFs are staged before catalog publication.
- Added `tests/test_science_physics_jh2.py` covering deterministic regeneration, all 30 distinct normalized hashes, direct/reverse Ohm-law recomputation, unit metadata (`V`, `A`, `Ω`), prompt-length guard, and corruption rejection.
- Added `.github/workflows/science-jh2-publish.yml` to run the shared tests and JH2 tests in a real checkout, publish through the shared PDF/catalog pipeline, repeat validation after generation, validate all JH2 output files, and push only after confirming the generated commit is based on current `main`.
- A prior 3-seed workflow safely published the first 9 sheets while the throughput update was being reconciled. The final 10-seed workflow then published the remaining 21 and validated the complete 30-sheet JH2 set. The final publication commit is `3e6f4c28a0ad4150bf1476d25db489bb781d22b3`.
- Updated `curriculum/physics/PLAN.md` and `20_EXECUTION_PLAN.md` with the accepted checkpoint. Phase 3 checkboxes remain open because remaining JH2 topics, JH3, 物理基礎 and 物理 are not yet broadly covered.

## Changed files

- `scripts/science_physics_jh2_topics.py` (new)
- `scripts/publish_science_physics_jh2.py` (new)
- `tests/test_science_physics_jh2.py` (new)
- `.github/workflows/science-jh2-publish.yml` (new)
- `worksheets/catalog.json`
- 30 PDFs under `materials/worksheets/science/junior-high/grade-02/physics/`:
  - `science-jh2-physics-ohms-law-basic-01.pdf` through `-10.pdf`
  - `science-jh2-physics-ohms-law-reverse-current-01.pdf` through `-10.pdf`
  - `science-jh2-physics-ohms-law-reverse-resistance-01.pdf` through `-10.pdf`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32872957724` completed successfully against the real repository checkout.

Before publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK

The final publisher run found the first 9 deterministic sheets already present from the earlier safe run and added the remaining 21. After publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK
- complete JH2 physics catalog/output validation -> OK

The final validated JH2 checkpoint contains:
- exactly 30 junior-high grade-2 physics catalog entries;
- 10 `calculation-basic` sheets;
- 20 `calculation-reverse` sheets, split between solving current and solving resistance by deterministic ID/definition;
- all entries `numeric`, `focused`, `basic`;
- 20 problems per worksheet;
- distinct normalized content hashes across all 30 generated variants;
- independent numerical recomputation rather than trusting stored answer strings;
- every registered PDF exists, begins with `%PDF`, exceeds the minimum size check, and has the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and content-hash checks.

The shared renderer remains unchanged: problem numbers are ordinary integers without decimal-looking punctuation, and the answer page repeats the problem layout with answers overlaid in red.

Screenshot-based visual QA is still not available through the current GitHub-binary-to-screenshot path. Structural PDF validation and explicit prompt-length/unit tests passed; do not claim representative visual inspection has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Published physics coverage now includes:
- junior-high grade 1: 48 worksheets with focused calculation, concept retrieval, light/sound retrieval, mixed and cumulative review;
- junior-high grade 2: 30 focused Ohm-law calculation worksheets covering `V = I × R` in all three natural solve directions.

The current science factory therefore has 78 published physics worksheets across JH1 and JH2 at this checkpoint.

## Incomplete work / blockers

- JH2 still needs the remaining verified electricity calculations: series/parallel current-voltage relationships, combined resistance, electric power, electric energy and heat quantity.
- For series/parallel content, keep the first worksheets mechanically simple and formula/rule based. Do not introduce diagram-dependent multi-step circuit puzzles as the main product.
- Unit-conversion variants should be added only where the current curriculum treatment is natural and the shared validator can represent the conversion unambiguously.
- Retrieval drills for JH2 should be limited to high-value formula/symbol/circuit-rule recall after the core calculations exist.
- Magnetic field and electromagnetic-induction content is verified as JH2 curriculum content, but quantitative worksheets should be added only when a natural basic numerical relationship is appropriate; otherwise use later retrieval practice.
- JH2 mixed/review sheets should wait until the core circuit and power/energy calculation families exist.
- Screenshot-based visual PDF QA remains pending.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent positional validation exist.
- Phase 3 calculation/retrieval/review checkboxes remain unchecked until physics has broad coverage through JH2, JH3, 物理基礎 and 物理.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 2:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent changes to the shared worksheet factory before editing;
3. re-confirm the exact MEXT treatment of series/parallel circuit current and voltage relations and combined resistance immediately before publishing the next topic family;
4. define structured calculation families for the simplest series/parallel rules and combined resistance, using shared formula generation where it fits and extending the shared generator only if a genuinely reusable relation shape is required;
5. target a coherent 30–60-sheet checkpoint across those verified JH2 electricity skills once the generator/validator shape is safe, rather than tiny cosmetic batches;
6. run shared and JH2 topic tests, duplicate detection, full catalog/output validation and real PDF generation before publication;
7. then proceed within JH2 to electric power, electric energy and heat quantity after another current-curriculum check;
8. only after JH2 core calculation families plus mixed/review coverage are sufficient should production advance to junior-high grade 3 physics;
9. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1 merely to inflate counts, and do not create entrance-exam-style circuit puzzles to increase volume.
