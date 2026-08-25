# Science Worksheet Factory — handoff

Updated: 2026-08-26

## Completed this run

- Started from latest `main`, recursively listed and read every Markdown file under `docs/science-worksheet-factory/` in lexical path order, and read the four required shared math-factory control files.
- Re-inspected the shared worksheet implementation (`scripts/worksheet_factory.py`, `scripts/science_worksheet_helpers.py`, current JH3 publisher/tests/workflow, shared catalog/PDF path). Science still extends the shared mathematics pipeline; no duplicate engine was introduced.
- Resumed Phase 3 at junior-high grade 3 exactly as instructed. Did not advance to chemistry, biology or earth science.
- Re-opened the current MEXT junior-high science commentary and independently confirmed that JH3 `運動とエネルギー` includes force composition/decomposition, equal-speed straight motion when no force acts, work/work rate, qualitative potential/kinetic-energy relationships, mutual conversion of position/kinetic energy, and conservation of total mechanical energy when frictional effects are absent.
- Kept high-school energy formulas `mgh` and `1/2 mv²` out of JH3. JH3 retrieval uses only finite-answer conceptual relationships supported by the current curriculum.
- Added `scripts/science_physics_jh3_mixed_review.py` with 15 deterministic numerical `mixed` sheets and 15 deterministic numerical `review` sheets. Each sheet has 20 problems and spans all six already verified JH3 calculation modes: speed, distance reverse, average speed, work, force reverse and work rate.
- Added `scripts/science_physics_jh3_retrieval.py` with finite-answer concept registries and 30 focused retrieval sheets: 10 forward, 10 reverse and 10 fill. Each retrieval sheet has 10 short items and covers equal-speed motion/inertia, force composition/decomposition, work/work rate, potential energy, kinetic energy, mechanical energy and mechanical-energy conservation.
- Extended the existing `scripts/publish_science_physics_jh3.py` rather than creating a second publisher. Existing 60 focused numerical sheets remain idempotent and unchanged; only missing entries/PDFs are added.
- Extended `tests/test_science_physics_jh3.py` to validate deterministic regeneration, independent numerical/retrieval answers, hash uniqueness against the original focused set, mixed/review breadth, units, prompt length, corruption rejection and continued exclusion of premature high-school energy formulas.
- Extended `.github/workflows/science-jh3-publish.yml` so the full JH3 checkpoint is validated as exactly 120 catalog entries: 90 focused, 15 mixed, 15 review; 90 numeric and 30 accepted-set.
- GitHub Actions completed generation and produced commit `9ba516695d147db0fe3a24a8fc6e9ddcac8bb767` (`Publish JH3 mixed review and concept worksheets`). The commit added the 60 new PDFs and their catalog entries after the workflow's shared/JH3 tests and full catalog/output checks passed.

## Changed files

- `scripts/science_physics_jh3_mixed_review.py` (new)
- `scripts/science_physics_jh3_retrieval.py` (new)
- `scripts/publish_science_physics_jh3.py`
- `tests/test_science_physics_jh3.py`
- `.github/workflows/science-jh3-publish.yml`
- `worksheets/catalog.json`
- 60 new PDFs under `materials/worksheets/science/junior-high/grade-03/physics/`
- `docs/science-worksheet-factory/curriculum/physics/PLAN.md`
- `docs/science-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/science-worksheet-factory/90_HANDOFF.md`

## Validation results

The JH3 publish workflow validated the implementation before and after generation:

- `python tests/test_worksheet_factory.py` -> OK
- `python tests/test_science_physics_jh3.py` -> OK
- full shared `validate_catalog(..., repo_root)` -> OK
- exactly 120 JH3 physics catalog entries -> OK
- worksheet-series counts: 90 focused / 15 mixed / 15 review -> OK
- answer-type counts: 90 numeric / 30 accepted-set -> OK
- modes: 40 calculation-basic / 20 calculation-reverse / 15 calculation-mixed / 15 calculation-review / 10 retrieval-forward / 10 retrieval-reverse / 10 retrieval-fill -> OK
- all numerical sheets contain 20 problems; retrieval sheets contain 10 -> OK
- all registered PDFs exist, begin with `%PDF`, exceed the minimum-size check and contain the expected two-page problem/answer structure -> OK
- duplicate IDs, URLs and normalized content hashes are rejected by the shared catalog validator -> OK

The shared renderer remains authoritative: ordinary integer problem numbers are used without decimal-looking punctuation, and the answer page repeats the original problem layout with answers overlaid in red.

Representative screenshot-based PDF visual QA is still incomplete because this runtime does not expose a direct generated GitHub PDF binary to the screenshot renderer. Structural PDF validation and prompt-length guards passed; do not claim screenshot QA has passed.

## Current implementation status

Phase 0, Phase 1 and Phase 2 are complete. Phase 3 remains in progress because `物理基礎` and `物理` are not yet broadly covered.

Published physics coverage:

- junior-high grade 1: 48 worksheets;
- junior-high grade 2: 120 worksheets;
- junior-high grade 3: 120 worksheets.

Current published physics total: **288 worksheets**.

Junior-high physics now has a complete first production cycle through grade 3. JH3 contains focused numerical practice, cross-topic mixed practice, cumulative review and finite-answer concept retrieval. It is now appropriate to advance to the formal high-school course `物理基礎`.

## Incomplete work / blockers

- `物理基礎` has not yet been produced by the science factory.
- Before publishing `物理基礎`, independently re-verify current MEXT course placement and exact quantitative treatment of motion, acceleration, free fall, forces, equation of motion, work/energy, heat, waves, electricity and energy utilization.
- Preserve `formal_course: 物理基礎`; do not assign it to a fixed high-school year.
- Start with dense, mechanically validated calculation families where formulas are explicit and unambiguous. Prefer motion/acceleration/basic mechanics first in the order recorded by `curriculum/physics/PLAN.md`.
- Reuse the shared `product` / `sum` relations where sufficient. Extend the shared science helper only when a genuinely new formula relation is required and independently test that relation before bulk publication.
- Keep difficult entrance-exam multi-step mechanics out of the main product; these are basic formula-understanding/substitution drills.
- Magnetic-field/electromagnetic-induction retrieval remains a possible later JH2 completeness enhancement, but it must not interrupt the forward physics production order.
- Screenshot-based PDF visual QA remains pending.

## Exact next starting point

Continue Phase 3, physics, formal high-school course `物理基礎`:

1. start from latest `main` and repeat the required science-Markdown/shared-math read sequence;
2. inspect concurrent shared worksheet-factory changes before editing;
3. reopen the current MEXT high-school science commentary and verify the `物理基礎` scope and formulas before defining content;
4. retain `school_level=high-school` and `formal_course=物理基礎`; do not fabricate a fixed grade;
5. begin with the first coherent mechanics calculation families from the production plan—position/displacement/speed/average velocity, acceleration and basic uniformly accelerated motion—using structured deterministic specs and independent recomputation;
6. target roughly 30–60 legitimate worksheets once the formula set and validator are safe, then continue through falling motion, forces/equation of motion, work/energy, heat, waves and electricity in curriculum order;
7. use the shared validator/hash/PDF/catalog/site pipeline and validate all new outputs through Actions before publication;
8. keep physics ahead of chemistry, biology and earth science.

Do not return to JH1–JH3 merely to inflate counts unless fixing a real defect or adding a clearly legitimate high-use nonduplicate family.
