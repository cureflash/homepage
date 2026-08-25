# Science Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this setup run

- Created `docs/science-worksheet-factory/` as the instruction/curriculum control area for science worksheets.
- Explicitly made the science effort depend on/reuse the existing math worksheet factory architecture instead of creating a second unrelated generator/catalog pipeline.
- Fixed production order as physics → chemistry → biology → earth science.
- Fixed within-subject order as junior-high grade 1 → grade 2 → grade 3 → corresponding high-school basic course → corresponding high-school advanced course.
- Limited scope to junior-high and high-school.
- Defined calculation difficulty as basic formula-understanding/substitution level and prioritized high-volume validated variants.
- Defined memorization production as multi-direction retrieval: forward/reverse, pair, classification, true/false, fill, order, mixed and cumulative review.
- Added curriculum production plans for physics, chemistry, biology and earth science.
- Recorded MEXT junior-high and high-school science curriculum explanations as primary authoritative references.

## Current implementation status

Instruction and curriculum planning are ready. Science-specific catalog/generator implementation has not started.

The mathematics worksheet factory is also still building its shared foundation. Science should inspect latest `main` every run and extend/generalize whichever shared catalog/generator/validator/PDF/site components actually exist at that time.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 0:

1. inspect the latest math worksheet factory implementation and documentation;
2. identify reusable/shared schema and generator components;
3. extend the shared model for science metadata and answer types;
4. build generic numerical formula-drill and retrieval-drill helpers;
5. validate deterministic generation, answers, duplicate detection and printable output;
6. begin physics production only after the shared foundation is safe;
7. within physics, start with junior-high grade 1 and advance in the defined order.

Before every commit, fetch/reconcile latest `main` because the math worksheet scheduler may be changing the same repository.
