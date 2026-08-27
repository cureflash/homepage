# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 920 PDFs
- total published physics: 2078 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 140 PDFs

All 920 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, numeric answers, 20 problems, and unique normalized content hashes. The publisher validates every registered PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — circular-motion period, 20 PDFs

The remaining uniform-circular-motion period checkpoint is now published:

- `circular-period-angular-speed` — 20 PDFs
  - relation: `ω = 2π/T`
  - learner-visible convention: `π = 3.14`
  - 10 direct angular-speed worksheets and 10 reverse-period worksheets
  - 20 problems per worksheet
  - deterministic seeds 7471–7480

Implementation deliberately reuses the existing reversible `double-quotient` relation. The fixed value `π=3.14` is represented as an explicit learner-visible known variable with a one-value domain, so no hidden constant or ambiguous rounding convention is required. No shared formula relation was added.

Validation and publication:

- implementation PR #164 merged as `ab21c0d7f56e6c2286439af6270aecd60106801b`
- publication Actions run `33080346570` attempt 1 generated and fully validated the 20 PDFs but correctly refused the final push because unrelated parallel work advanced `main`
- the failed attempt had already passed shared tests, all formal-Physics topic tests, generation, post-generation tests, and `Formal Physics 920-PDF catalog validation: OK`; only the latest-main parent guard failed
- the failed jobs were rerun from latest `main`; attempt 2 completed successfully
- publication commit: `8cc9faf699312fbfdef6a26a3abbaa2c4e149fc1` (`Publish 20 formal Physics circular-period worksheets`)
- the new period tests require deterministic regeneration, independent recomputation solely from learner-visible values, exact learner-visible `π=3.14`, corrupted-answer rejection, 20/20 normalized-hash uniqueness, and disjointness from the existing catalog
- final workflow validation requires 920 formal-Physics rows, 920 unique hashes, `numeric=920`, expected skill/unit/mode counts, and structural checks for every registered formal-Physics PDF
- repository-wide catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`

The concurrent-main failure/retry demonstrates the intended non-force publication safety. Do not weaken or bypass that guard.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 円運動`** with the required **centrifugal-force mention** before moving to single harmonic motion.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Recheck current MEXT wording: uniform circular motion covers speed, period, angular velocity, centripetal acceleration and centripetal force, and the content handling also requires mentioning centrifugal force.
3. Prefer finite-answer retrieval for centrifugal force rather than introducing a misleading second numeric force formula into the inertial-frame exercises.
4. Keep the frame distinction explicit and learner-visible: centripetal force is the real center-directed net force in an inertial-frame description; centrifugal force is an apparent/inertial force used in a rotating-frame description. Do not present them as two simultaneously acting physical forces in the same frame.
5. If a deterministic finite-answer fact set can be made unambiguous, implement the smallest focused checkpoint using the existing accepted-answer retrieval infrastructure, with independent answer validation, corrupted-answer rejection, deterministic seeds, normalized-hash uniqueness/collision checks, catalog validation and structural PDF checks.
6. A retrieval checkpoint changes the active formal-Physics publisher from its current all-numeric 920-row contract. Update answer-type expectations carefully and add regression coverage rather than weakening validation.
7. After centrifugal force safely closes circular motion, continue in curriculum order to **single harmonic motion**. Do not skip ahead.
8. Preserve `formal_course=物理`, `grade=null`, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
9. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run stops after one 20-PDF checkpoint even though the configured maximum is four. The next item changes both the answer model (numeric → finite accepted-answer retrieval) and the physical reference-frame contract, so it is a legitimate safety boundary rather than a throughput quota shortfall.
