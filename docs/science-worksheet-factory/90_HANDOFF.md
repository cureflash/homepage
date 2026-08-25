# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, read the four required shared math-factory control files, and inspected the current shared generator, science helpers, JH2 publisher/tests, catalog/PDF path and site listing before editing.
- Resumed Phase 3 at the exact handoff point: physics, junior-high grade 2. Did not advance to junior-high grade 3 or another science field.
- Re-opened the current MEXT junior-high science commentary immediately before implementation. The `電流とその利用` explanation states that electric power is current multiplied by voltage and is measured in W, electric energy is power multiplied by time and is measured in J, and generated heat quantity is also expressed in J while examining its relationship with electric power and time.
- Added three structured focused calculation families without introducing a new science problem type, answer format, relation engine or renderer:
  - electric power `P = V × I`: 10 worksheets, deterministic seeds `6251`–`6260`;
  - electric energy `E = P × t`: 10 worksheets, deterministic seeds `6261`–`6270`;
  - electric-heater heat quantity `Q = P × t`: 10 worksheets, deterministic seeds `6271`–`6280`.
- Each worksheet contains 20 basic numerical problems. Energy/heat time is deliberately limited to seconds and answers to joules in this first focused batch; no arbitrary conversion-heavy puzzle set was added merely to increase volume.
- Reused the existing shared `product` relation in `science_worksheet_helpers.py`, independent answer recomputation, normalized content hashing, common PDF renderer and shared catalog validator. The existing 60 JH2 worksheets keep their IDs, seeds and problem sets unchanged.
- Expanded `tests/test_science_physics_jh2.py` so all 90 JH2 sheets must regenerate deterministically with distinct normalized hashes. Added independent checks for `P = V × I`, `E = P × t` and `Q = P × t`, W/J units, second-based time, prompt-length constraints and corrupted-answer rejection.
- Expanded `.github/workflows/science-jh2-publish.yml` so real-checkout validation requires exactly 90 JH2 physics entries: 30 Ohm-law, 10 series-voltage, 10 parallel-current, 10 series-combined-resistance, 10 electric-power, 10 electric-energy and 10 heat-quantity sheets.
- GitHub Actions run `32884426705` completed successfully. Shared tests, JH2 tests, generation, post-generation catalog/output validation and commit/push all passed.
- The generated publication commit is `9bcbe3c6001f3d614f8921721fc9ef2a91e706f6` (`Publish 30 JH2 power energy and heat worksheets`).
- Updated `curriculum/physics/PLAN.md` to record the accepted 90-sheet JH2 focused-calculation checkpoint. Phase 3 checkboxes remain open because JH2 mixed/review work, JH3, `物理基礎` and `物理` are still incomplete.

## Changed files

- `scripts/science_physics_jh2_topics.py`
- `tests/test_science_physics_jh2.py`
- `.github/workflows/science-jh2-publish.yml`
- `worksheets/catalog.json`
- 30 new PDFs under `materials/worksheets/science/junior-high/grade-02/physics/`:
  - `science-jh2-physics-electric-power-basic-01.pdf` through `-10.pdf`
  - `science-jh2-physics-electric-energy-basic-01.pdf` through `-10.pdf`
  - `science-jh2-physics-heat-quantity-basic-01.pdf` through `-10.pdf`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32884426705` completed successfully against a real checkout of current `main`.

Before publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK

After publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK
- complete JH2 physics catalog/output validation -> OK

The validated JH2 checkpoint now contains:
- exactly 90 junior-high grade-2 physics catalog entries;
- exactly 70 `calculation-basic` and 20 `calculation-reverse` sheets;
- 30 `ohms-law` entries;
- 10 each of `series-circuit-voltage`, `parallel-circuit-current`, `series-combined-resistance`, `electric-power`, `electric-energy` and `heat-quantity`;
- all entries `numeric`, `focused`, `basic`;
- 20 problems per worksheet;
- distinct normalized problem-content hashes across all 90 generated variants;
- independent numerical recomputation rather than trusting stored answers;
- every registered PDF exists, begins with `%PDF`, exceeds the minimum-size check and has the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash checks.

The shared renderer remains unchanged: problem numbers are ordinary integers without decimal-looking punctuation, and the answer page repeats the original problem layout with answers overlaid in red.

Screenshot-based visual QA for generated PDFs remains pending because this GitHub connector path does not expose the PDF bytes directly to the screenshot renderer. Structural PDF validation and prompt-length/unit tests passed; do not claim representative generated-PDF visual inspection has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Published physics coverage now includes:
- junior-high grade 1: 48 worksheets with focused calculation, concept retrieval, light/sound retrieval, mixed and cumulative review;
- junior-high grade 2: 90 focused calculation worksheets covering Ohm's law, selected basic series/parallel circuit relationships, series combined resistance, electric power, electric energy and heat quantity.

The current science factory therefore has 138 published physics worksheets across JH1 and JH2 at this checkpoint.

## Incomplete work / blockers

- JH2 now has a broad focused calculation base but still needs legitimate `mixed` and cumulative `review` coverage before moving to JH3.
- Build mixed/review from the already verified JH2 topic registries rather than copying formulas into a separate content source. A mixed sheet should deliberately cover multiple topic families; a review sheet should broaden cumulative retrieval/calculation while remaining basic and mechanically checkable.
- High-value short retrieval may cover series-current equality, parallel-voltage equality, formula/symbol/unit recall and other current MEXT statements that support the calculation work. Do not add ambiguous free-response content simply to inflate counts.
- Time/unit-conversion variants may be added only where educationally natural and independently validated. The focused `E = P × t` and `Q = P × t` batches intentionally use seconds and joules.
- Do not make reciprocal parallel-resistance formula memorization a high-volume drill by default. The current MEXT commentary frames combined resistance through whole-circuit current and voltage.
- Magnetic field and electromagnetic-induction content is part of JH2, but add numerical drills only where a natural basic quantitative relation exists; otherwise use structured retrieval later.
- Screenshot-based generated-PDF visual QA remains pending.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent positional validation are reliable.
- Phase 3 calculation/retrieval/review checkboxes remain unchecked until physics has broad coverage through JH2, JH3, `物理基礎` and `物理`.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 2:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent changes to the shared worksheet factory before editing;
3. use the existing verified JH2 topic definitions as the source pool for a deterministic mixed/review builder; do not duplicate the science pipeline;
4. target another coherent 30–60-sheet checkpoint if the mixed/review generator, independent validation and normalized duplicate checks remain safe; a smaller batch is acceptable only for a concrete validation reason;
5. ensure mixed sheets genuinely cross multiple JH2 skills rather than being title-only variants, and ensure review sheets are cumulative without becoming entrance-exam-style multi-step circuit puzzles;
6. where useful, add finite accepted-set retrieval for core circuit relationships/formulas/units, using independently recomputable structured facts;
7. run shared and JH2 tests, independent recomputation, duplicate detection, full catalog/output validation and real PDF generation before publication;
8. only after JH2 has sufficient focused/mixed/review coverage should production advance to junior-high grade 3 physics;
9. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1 merely to inflate counts, and do not create difficult circuit puzzles or artificial unit conversions to increase volume.
