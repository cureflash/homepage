# Science Worksheet Factory — handoff

Updated: 2026-08-28

## Current state

Current authoritative published physics coverage:

- junior-high grade 1 physics: 48 PDFs
- junior-high grade 2 physics: 120 PDFs
- junior-high grade 3 physics: 120 PDFs
- `物理基礎`: 870 PDFs
- formal `物理`: 1030 PDFs
- total published physics: 2188 PDFs

Formal `物理` currently has:

- `様々な運動：平面運動と放物運動`: 330 PDFs
- `様々な運動：剛体のつり合い`: 200 PDFs
- `様々な運動：運動量と力積`: 250 PDFs
- `様々な運動：円運動と単振動`: 250 PDFs

All 1030 formal-Physics catalog rows use `formal_course=物理`, `grade=null`, 20 problems, and unique normalized content hashes. Answer types are `numeric=950` and `accepted-set=80`. The publisher validates every registered formal-Physics PDF for `%PDF`, size greater than 1000 bytes, and two-page structure.

## Completed this run — centrifugal force and simple harmonic motion, 110 PDFs

This run completed three consecutive safe checkpoints while staying below the normal approximately-120-PDF target.

### 1. Centrifugal force and reference frames — 40 PDFs

- skill: `circular-centrifugal-frame-concepts`
- answer model: finite `accepted-set` retrieval
- formats: forward / reverse / fill / true-false, 10 deterministic seeds each
- learner-visible distinction:
  - in an inertial-frame description, the net force maintaining uniform circular motion is center-directed centripetal force
  - in a frame rotating with the object, outward centrifugal force is introduced as an apparent/inertial force
  - the two are not presented as two independent real forces simultaneously acting in the same frame

This closes the required centrifugal-force mention without adding a misleading second inertial-frame numeric force formula.

### 2. Simple-harmonic core concepts — 40 PDFs

- skill: `simple-harmonic-core-concepts`
- answer model: finite `accepted-set` retrieval
- formats: forward / reverse / fill / true-false, 10 deterministic seeds each
- covers amplitude, period, speed at equilibrium/endpoints, acceleration direction, and restoring force

Pre-publication semantic QA found one ambiguity in the first draft: the reverse prompts for restoring-force direction and acceleration direction could share the same displayed description. PR #196 reworded them into unique prompts and added a regression test requiring every reverse-retrieval displayed description to map to exactly one left-hand item. Do not remove that uniqueness gate.

### 3. Spring restoring force — 30 PDFs

- skill: `simple-harmonic-spring-restoring-force`
- relation: `F = kx` for the magnitude of the restoring force
- learner-visible direction: toward the equilibrium position
- 10 direct-force worksheets, 10 reverse spring-constant worksheets, 10 reverse displacement worksheets
- existing reversible `product` relation reused; no new shared formula relation was added

### Validation and publication

- implementation PR #194 merged as `de1f2b2e4a8f18362262e4da82beab1727bfc472`
- ambiguity-fix PR #196 merged as `079b5d87f8ba3b009cb905534e27460b3b3a7f14`
- production Actions run `33143868909` completed successfully
- the run passed latest-main confirmation, shared and all formal-Physics tests, generation, post-generation validation, catalog validation, PDF structural checks, commit, and non-force safe push
- publication commit: `3345b26e51e95f05ef2ec78fd3fc2ff244e61b0c` (`Publish 110 formal Physics centrifugal and SHM worksheets`)
- final workflow contract requires 1030 formal-Physics rows, 1030 unique hashes, `numeric=950`, `accepted-set=80`, exact unit/skill/mode counts, and structural checks for all registered formal-Physics PDFs
- new tests require deterministic regeneration, independent validation, corrupted-answer rejection, 110/110 normalized-hash uniqueness, existing-catalog collision rejection, unique reverse-retrieval prompts, and independent visible-value recomputation for `F=kx`, `k=F/x`, and `x=F/k`
- repository-wide catalog serialization remains `worksheet-catalog-publish-v1` with `cancel-in-progress: false`

## Curriculum basis checked this run

Current high-school Course of Study materials were rechecked before implementation. Formal `物理` requires the circular-motion treatment to mention centrifugal force, and the following simple-harmonic-motion treatment covers displacement, velocity, acceleration, restoring force, and spring/simple pendulums. The new checkpoints remain within that sequence and do not skip ahead.

## Exact next starting point

Continue formal course **`物理：様々な運動 / 円運動と単振動`** with the quantitative simple-harmonic relation between displacement and acceleration.

1. Start from latest `main` and re-read the science factory instructions, execution plan, STATUS and this HANDOFF; reconcile parallel progress first.
2. Keep a learner-visible signed axis convention. For a relation such as `a = -ω²x`, the negative direction must not be hidden behind magnitude-only labels unless the checkpoint is deliberately and explicitly a magnitude exercise.
3. Before implementing the first quantitative SHM checkpoint, design a mechanically checkable formula relation for the squared angular-speed factor. Independent recomputation must use only learner-visible values.
4. Avoid ambiguous inverse problems. In particular, solving for `ω` introduces a square root; restrict it to the physically intended non-negative angular-speed root and make that contract explicit, or omit that reverse direction until a safe shared relation exists.
5. Preserve deterministic seeds, corrupted-answer rejection, normalized-hash uniqueness and existing-catalog collision checks, `formal_course=物理`, `grade=null`, 20-problem two-page PDFs, mixed numeric/accepted-set publisher validation, `worksheet-catalog-publish-v1`, and non-force latest-main push safety.
6. After the displacement/acceleration quantitative block is safe, continue in curriculum order to the spring-pendulum period and simple-pendulum period. Their square-root and `π` formulas require explicit rounding/tolerance contracts before publication.
7. Do not add a fourth checkpoint merely to reach the configured maximum. This run stops at 110 PDFs because the next item changes the quantitative formula/solver contract.
8. Representative screenshot-based visual QA remains pending; structural PDF QA is not a substitute for visual QA.
