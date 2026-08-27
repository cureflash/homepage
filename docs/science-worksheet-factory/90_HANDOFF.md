# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from latest `main`, read the science-factory control documents plus the shared worksheet-factory contracts, and resumed at `物理基礎：エネルギーとその利用`. Current MEXT guidance was rechecked before defining content. The run completed **three independent safe checkpoints totaling 120 new PDFs**, which reaches the requested per-run publication target without inventing a fourth checkpoint.

MEXT scope used for this batch: energy resources such as water, fossil fuels, nuclear, solar and wind; use of energy centered on conversion to electrical energy; qualitative nuclear-fission energy; radiation types/properties and radioactive-substance basics including half-life; examples of radiation use in medicine, industry and agriculture; and nuclear-energy issues such as safety, radioactive waste and decommissioning. Government energy/radiation references were used to keep mechanism and unit wording concrete.

### 1. 発電とエネルギー変換 — 40 PDFs

- Added `forward / reverse / fill / true-false` retrieval variants × 10 deterministic seeds, 20 problems each.
- Covers water, thermal, nuclear, solar-PV and wind generation and the central Physics Basics idea of conversion to electrical energy.
- Mechanism statements were kept basic and finite-answer: water-position energy drives a turbine/generator; fossil-fuel combustion and nuclear fission provide heat for steam/turbine generation; solar cells convert light directly to electricity; wind turns blades/generator.
- Skill: `energy-resources-and-electric-conversion`.

### 2. 放射線の種類・半減期・単位 — 40 PDFs

- Added the same four retrieval modes × 10 deterministic seeds, 20 problems each.
- Covers α, β, γ and neutron radiation, half-life, and Bq/Gy/Sv at introductory Physics Basics level.
- Facts are finite and independently recomputable from structured source fields; no ambiguous free-form explanations are accepted.
- Skill: `radiation-types-half-life-and-units`.

### 3. 放射線利用と原子力利用の課題 — 40 PDFs

- Added the same four retrieval modes × 10 deterministic seeds, 20 problems each.
- Covers medical, industrial and agricultural radiation-use examples plus the basic issues of safety assurance, radioactive-waste treatment/disposal and decommissioning.
- Avoids policy advocacy or relative-safety claims; only curriculum-aligned basic facts/issue labels are drilled.
- Skill: `radiation-use-and-nuclear-challenges`.

## Engineering / validation

- Reused the existing shared `generate_retrieval_drill` + `accepted-set` publication path; no new common formula relation or renderer change was required.
- Added `scripts/science_physics_basic_energy_use.py` and `tests/test_science_physics_basic_energy_use.py`.
- New test contract checks:
  - exactly three 40-PDF checkpoints / 120 series total;
  - 20 problems per worksheet;
  - deterministic seed regeneration;
  - independent `validate_science_problem` recomputation;
  - explicit corrupted-answer rejection for each checkpoint;
  - 120/120 normalized-hash uniqueness;
  - collision rejection against previously published accepted-set Physics Basics topics;
  - required curriculum concepts.
- Updated `scripts/publish_science_physics_basic.py` to register the new retrieval topics.
- Updated `.github/workflows/science-physics-basic-publish.yml` to include the new module/test and require exactly 870 Physics Basics rows, 870 unique hashes and `numeric=630 / accepted-set=240`.
- Implementation PR #120 merge: `9aca8d07154a60c391e44454fe87bdc5580435c8`.
- Actions run `33032268163`: **success**. Shared/topic tests, generation, post-generation tests, catalog validation, all-PDF `%PDF`/size/two-page checks, commit and latest-main safe push all succeeded.
- Publication commit: `f96d50f8de74de90b4a7b40d973d3b718450884d`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: **870**;
- total published physics: **1158**.

`物理基礎` unit counts:

- 運動の表し方: 90;
- 様々な力とその働き: 130;
- 力学的エネルギー: 170;
- 熱: 60;
- 波: 30;
- 音と振動: 190;
- 電気: 80;
- エネルギーとその利用: 120.

Publication invariants verified by Actions:

- exactly **870** Physics Basics catalog rows;
- **870 unique normalized content hashes**;
- answer types: `numeric` 630 / `accepted-set` 240;
- 20 problems per worksheet;
- every registered Physics Basics PDF passes `%PDF` header, file-size, and two-page structural checks.

The planned `物理基礎` production sequence is now complete. Representative screenshot-based visual QA remains pending; structural validation is not being treated as visual QA.

## Exact next starting point

Continue Phase 3 at formal course **`物理：平面運動・放物運動`**.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck the current MEXT `物理` scope before defining any advanced-course formula relation or worksheet family.
4. Keep `formal_course=物理` and `grade=null`; do not fabricate a fixed high-school year.
5. Begin with the simplest mechanically verifiable planar/projectile-motion relation that is explicitly curriculum-aligned. Reuse shared formula relations where mathematically exact; add a relation only with independent relation-level regression tests.
6. For every new series, independently recompute answers, verify deterministic seeds, reject normalized-hash collisions, preserve 20-problem/two-page format, and validate the complete catalog.
7. Advance up to four contiguous safe checkpoints only when the same unit/shared machinery supports it naturally; do not manufacture checkpoint count.
8. Update exact workflow/catalog totals and publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
9. Representative screenshot-based visual QA remains pending.
