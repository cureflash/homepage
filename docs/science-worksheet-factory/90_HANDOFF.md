# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, read the four required shared math-factory control files, and inspected the current shared generator, science helpers, publisher, tests, catalog/PDF path and Actions workflow before editing.
- Resumed Phase 3 at the exact handoff point: physics, junior-high grade 2. Did not advance to junior-high grade 3 or another science field.
- Re-verified the current MEXT `電流とその利用` treatment immediately before publication. The current guidance explicitly supports the basic circuit relationships used here: current is equal where a circuit does not branch; at a branch the sum of incoming currents equals the sum of outgoing currents; in a series circuit the voltages across the resistors add to the total voltage; in a parallel circuit the branch voltages are equal. It also calls for treatment of combined resistance for two resistors.
- Added three structured JH2 calculation families without introducing a new science problem type, answer format or renderer:
  - series-circuit voltage: `V全体 = V1 + V2`, 10 worksheets using deterministic seeds `6221`–`6230`;
  - parallel-circuit current: `I全体 = I1 + I2`, 10 worksheets using deterministic seeds `6231`–`6240`;
  - series combined resistance: `R全体 = R1 + R2`, 10 worksheets using deterministic seeds `6241`–`6250`.
- Each new worksheet contains 20 basic numerical problems. The 30 existing Ohm-law worksheets remain unchanged with their original IDs, seeds and problem sets.
- Reused the existing shared `sum` relation in `science_worksheet_helpers.py`, the shared independent answer validator, normalized content hashing, common PDF renderer and shared catalog validator. No parallel science pipeline was created.
- Generalized `scripts/publish_science_physics_jh2.py` so a topic may provide its own deterministic seed sequence while existing topics continue to use the original shared JH2 seed sequence.
- Expanded `tests/test_science_physics_jh2.py` to validate deterministic regeneration and distinct normalized hashes across all 60 JH2 physics sheets, independently recompute all old and new formula families, check output units and prompt length, and reject corrupted answers.
- Expanded `.github/workflows/science-jh2-publish.yml` so the real-checkout validation requires exactly 60 JH2 physics entries: 30 Ohm-law, 10 series-voltage, 10 parallel-current and 10 series-combined-resistance sheets.
- GitHub Actions run `32878756300` completed successfully. Every workflow step passed, including latest-main confirmation, shared tests, JH2 tests, generation, post-generation catalog/output validation and commit/push.
- The generated publication commit is `31c4abfdceec0890aa1f0ac9c908b0197bd8b870` (`Publish 30 more junior-high grade 2 circuit worksheets`).
- Updated `curriculum/physics/PLAN.md` and `20_EXECUTION_PLAN.md` with this accepted checkpoint. Phase 3 checkboxes remain open because JH2 power/energy/review work and later physics stages are still incomplete.

## Changed files

- `scripts/science_physics_jh2_topics.py`
- `scripts/publish_science_physics_jh2.py`
- `tests/test_science_physics_jh2.py`
- `.github/workflows/science-jh2-publish.yml`
- `worksheets/catalog.json`
- 30 new PDFs under `materials/worksheets/science/junior-high/grade-02/physics/`:
  - `science-jh2-physics-series-voltage-basic-01.pdf` through `-10.pdf`
  - `science-jh2-physics-parallel-current-basic-01.pdf` through `-10.pdf`
  - `science-jh2-physics-series-resistance-basic-01.pdf` through `-10.pdf`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

GitHub Actions run `32878756300` completed successfully against the real repository checkout.

Before publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK

After publication:
- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh2.py` -> OK
- complete JH2 physics catalog/output validation -> OK

The final validated JH2 checkpoint contains:
- exactly 60 junior-high grade-2 physics catalog entries;
- exactly 40 `calculation-basic` sheets and 20 `calculation-reverse` sheets;
- exactly 30 `ohms-law`, 10 `series-circuit-voltage`, 10 `parallel-circuit-current` and 10 `series-combined-resistance` entries;
- all entries `numeric`, `focused`, `basic`;
- 20 problems per worksheet;
- distinct normalized problem-content hashes across all 60 generated variants;
- independent numerical recomputation rather than trusting stored answers;
- every registered PDF exists, begins with `%PDF`, exceeds the minimum-size check and has the expected shared two-page problem/answer structure;
- shared catalog validation passes, including duplicate ID, URL and normalized-content-hash checks.

The shared renderer remains unchanged: problem numbers are ordinary integers without decimal-looking punctuation, and the answer page repeats the problem layout with answers overlaid in red.

Screenshot-based visual QA is still not available through the current GitHub-binary-to-screenshot path. Structural PDF validation and prompt-length/unit tests passed; do not claim representative visual inspection has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress.

Published physics coverage now includes:
- junior-high grade 1: 48 worksheets with focused calculation, concept retrieval, light/sound retrieval, mixed and cumulative review;
- junior-high grade 2: 60 focused calculation worksheets consisting of 30 Ohm-law sheets plus 30 basic circuit/combined-resistance sheets.

The current science factory therefore has 108 published physics worksheets across JH1 and JH2 at this checkpoint.

## Incomplete work / blockers

- JH2 still needs electric power, electric energy and heat-quantity calculation families.
- Current MEXT guidance explicitly gives electric power as the product of current and voltage, measured in W, and treats electric energy as power multiplied by time, measured in J. It also treats generated heat quantity in J and its relationship with electric power and time. Re-open the current source immediately before implementing the exact worksheet formula/unit set.
- Add time/unit-conversion variants only where the curriculum treatment is natural and the validator can represent them without ambiguity. Do not create arbitrary conversion-heavy puzzles simply to increase sheet count.
- After the core power/energy/heat families exist, add high-value JH2 mixed/review sheets combining Ohm's law, basic circuit rules and power/energy calculations.
- Retrieval drills may later cover high-value circuit-rule/formula recall, including series-current equality and parallel-voltage equality, but calculations remain the priority.
- Do not make reciprocal parallel-resistance formula memorization a high-volume drill by default. The current MEXT commentary frames combined resistance through considering the whole-circuit current and voltage; use a more direct representation or retrieval treatment only if appropriate.
- Magnetic field and electromagnetic-induction content is part of JH2, but add numerical drills only where there is a natural basic quantitative relationship; otherwise use retrieval practice later.
- Screenshot-based PDF visual QA remains pending.
- Diagram-label exercises remain deferred until deterministic diagram rendering and independent positional validation exist.
- Phase 3 calculation/retrieval/review checkboxes remain unchecked until physics has broad coverage through JH2, JH3, `物理基礎` and `物理`.

## Exact next starting point

Continue Phase 3, physics, junior-high grade 2:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent changes to the shared worksheet factory before editing;
3. re-open the current MEXT electricity/energy section and confirm the exact JH2 treatment of electric power, electric energy, heat quantity and permitted time/unit handling;
4. define structured calculation families for electric power (`P = V × I`) and electric energy (`E = P × t`), then define heat-quantity drills only to the extent supported unambiguously by the current curriculum source;
5. target another coherent 30–60-sheet checkpoint once the formula/unit definitions and validator behavior are safe, rather than a tiny cosmetic batch;
6. run shared and JH2 tests, independent recomputation, duplicate detection, full catalog/output validation and real PDF generation before publication;
7. once the JH2 core calculation set is complete, add legitimate `mixed` and cumulative `review` sheets from the verified topic registries;
8. only after JH2 has sufficient focused/mixed/review coverage should production advance to junior-high grade 3 physics;
9. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1 merely to inflate counts, and do not create entrance-exam-style circuit puzzles to increase volume.
