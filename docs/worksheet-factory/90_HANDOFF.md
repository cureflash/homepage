# Worksheet Factory — handoff

Updated: 2026-08-25

## Completed this run

- Identified the target repository as `cureflash/homepage`.
- Confirmed `ひかり教材室` currently publishes worksheets through static PDF files and manually duplicated material cards in `index.html`.
- Created the worksheet-factory instruction set under `docs/worksheet-factory/`.
- Defined the target architecture: structured curriculum/catalog data → deterministic problem generator → independent answer validator → printable output → generated site listing.
- Defined ordered coverage from elementary arithmetic through junior-high and high-school calculation drills.

## Files added

- `docs/worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/worksheet-factory/10_DESIGN_PRINCIPLES.md`
- `docs/worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/worksheet-factory/30_BASELINE.md`
- `docs/worksheet-factory/90_HANDOFF.md`

## Implementation status

Implementation has not started yet. No existing worksheet/site behavior was changed in this setup run.

## Exact next starting point

Start at `20_EXECUTION_PLAN.md` Phase 0:

1. inventory all current worksheet files and material links;
2. add automatic broken-link/catalog validation;
3. record stable existing worksheet URLs;
4. then proceed to Phase 1 structured catalog/list generation.

Do not begin mass-producing elementary PDFs before Phase 1/2 establish catalog, deterministic generation, answer validation and duplicate detection. Otherwise the repository will accumulate the same manual-maintenance problem at much larger scale.
