# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Current state

The P1 shared-catalog writer audit is resolved. Science publication may continue under the repository-wide serialization contract described below.

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 450 PDFs
- total published physics: 1608 PDFs

Formal `物理` currently has 330 PDFs in `様々な運動：平面運動と放物運動` and 120 PDFs in `様々な運動：剛体のつり合い`. All 450 formal-Physics rows use `formal_course=物理`, `grade=null`, numeric answers, and unique normalized content hashes.

## Completed science checkpoint this run — signed net moment, 30 PDFs

Added `rigid-body-signed-net-moment` as the fourth rigid-body checkpoint.

- Relation: `M_net = M_CCW - M_CW`.
- Learner-visible sign convention: counterclockwise positive, clockwise negative (`反時計回りを正、時計回りを負`).
- Reuses the existing shared `difference` relation; no new shared formula solver was introduced.
- 10 deterministic seeds × three targets: direct net moment, reverse counterclockwise moment, reverse clockwise moment.
- Each worksheet has 20 problems.
- Tests independently recompute every answer from learner-visible values, verify deterministic regeneration, reject corrupted answers, require positive/negative/zero net-moment coverage, require 120/120 rigid-body normalized hashes to be unique, and check disjointness from unrelated published series.
- The formal-Physics publication contract is now 450 catalog rows / 450 unique hashes, with all registered PDFs checked for `%PDF`, size greater than 1000 bytes, and two-page structure.

Implementation/publication:

- implementation PR #139 merge: `c951c99df15b368ee6769e767fdc45d69e6c14ee`
- publication Actions run `33052821010`: success
- publication commit: `afe873762c228ba78c25130094006f5a02e3ee85`

The current MEXT High School Course of Study Commentary for Science/Math was rechecked before implementation. Formal Physics continues through `平面内の運動と剛体のつり合い`, including finding and understanding conditions for rigid-body equilibrium.

## P1 shared `worksheets/catalog.json` writer audit — resolved

During reconciliation, a newer canonical audit override required all worksheet publishers that mutate the authoritative `worksheets/catalog.json` to use one repository-level serialization/aggregation contract before any further science publication. The already-generated signed-net-moment batch had passed all topic/shared/catalog/PDF checks and was not rolled back; instead, no further physics checkpoint was started until the shared writer race was corrected.

Repository enumeration found exactly ten enabled workflows that directly stage `worksheets/catalog.json` for publication:

- math: Grade 1, Grade 2, Grade 3, Grade 4, Grade 5
- science: JH1, JH2, JH3, Physics Basics, formal Physics

All ten now use the same GitHub Actions concurrency group:

`worksheet-catalog-publish-v1`

with `cancel-in-progress: false`. Existing latest-main/non-force safeguards remain in place. The change does not rewrite or hand-patch catalog rows and does not weaken duplicate/hash validation.

A static guard was added at `tests/test_worksheet_catalog_writer_concurrency.py`. It enumerates every direct workflow writer, requires the exact known set of ten, and fails if any writer is outside the shared group or uses a private group. `.github/workflows/worksheet-catalog-concurrency-audit.yml` runs this guard when publish workflows change.

Audit implementation/validation:

- audit PR #140 merge: `0de819077fbab3ce3d326c69a126ff59ca8bf723`
- catalog concurrency audit run `33053444720`: success
- representative formal-Physics run `33053444636`: success under the shared group
- representative Grade 4 math run `33053444726`: success under the shared group

The simultaneous merge-triggered workflow fan-out also demonstrated the intended ownership behavior: GitHub did not allow independent catalog writers to publish concurrently; pending runs were serialized/cancelled according to the shared concurrency key. A representative math and representative science publisher subsequently completed successfully under the same contract.

## Exact next starting point

Continue formal course **`物理：剛体のつり合い / 2力のモーメントのつり合い`**.

1. Start from latest `main` and re-read the canonical science instructions, STATUS, and this HANDOFF. Preserve parallel repository progress.
2. Recheck current MEXT formal-Physics scope and a reliable mechanics reference.
3. Keep `formal_course=物理` and `grade=null`.
4. Use learner-visible convention `反時計回りを正、時計回りを負` and learner-visible perpendicular lever-arm geometry. Do not hide force direction or derived geometry in generator state.
5. Begin with the simplest unique two-force balance about one pivot, e.g. `F1 d1 = F2 d2`, equivalent to signed moment sum zero.
6. Exactly one quantity may be unknown. Do not generate ambiguous force directions, non-perpendicular geometry, multiple unknowns, or multiple mathematical answers.
7. Existing relations may be reused only if they expose all learner-visible values cleanly. If a new shared invertible relation is required, add independent direct/reverse regression tests, zero/invalid-denominator rejection, bad-arity rejection, and corrupted-answer rejection before any PDF publication.
8. For every new series require deterministic seed regeneration, independent visible-value answer recomputation, normalized-hash uniqueness and collision checks against existing catalog rows, 20-problem/two-page output, complete catalog validation, and structural PDF checks.
9. Preserve the repository-wide `worksheet-catalog-publish-v1` serialization rule and non-force latest-main push safety.
10. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.

This run stops here rather than manufacturing additional checkpoints because the next natural model changes from a simple signed difference to a uniquely invertible two-product equilibrium relation and therefore needs an explicit shared formula contract before publication.
