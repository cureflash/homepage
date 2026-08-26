# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed exactly at `物理基礎：波・音` after the published heat checkpoint.
- Rechecked the current MEXT high-school science commentary. In `物理基礎` it explicitly places `波` under `様々な物理現象とエネルギーの利用` and states that the basic quantities for a straight-travelling wave include wavelength, frequency, and propagation speed. The following subsection is `音と振動`, including air-column resonance, source frequency, string vibration, and sound-wave properties.
- Implemented the first wave batch as `v = fλ` using only the existing shared `product` relation. No shared generator, validator, renderer, catalog schema, or output format was changed.
- Added one focused skill, `wave-speed-frequency-wavelength`, with three solve directions: wave speed, frequency, and wavelength. Each direction has 10 deterministic seed variants, for 30 worksheets total, 20 problems per worksheet.
- Added dedicated tests for exactly 30 variants, deterministic regeneration, independent direct/reverse recomputation, answer units (`m/s`, `Hz`, `m`), shared relation/direction metadata, per-problem validation, and 30/30 normalized-hash uniqueness.
- Extended the existing Physics Basics publisher and existing `Publish Physics Basics worksheets` workflow rather than creating a parallel pipeline. Existing historical ID prefix and output directory were retained to preserve catalog/PDF continuity.
- Implementation PR #84 merged as `ea90bfb3c9807c3181ca90eefaee179353cda499`.
- The merge triggered Actions run `33003615994`. Every workflow step succeeded: latest-main guard, shared and all Physics Basics topic tests, generation, post-generation tests/catalog checks, PDF structural checks, commit, and safe push.
- The workflow validated exactly 480 Physics Basics catalog rows, 480 unique content hashes, 180 `calculation-basic` rows, 300 `calculation-reverse` rows, and exactly 30 rows for the new wave skill/unit. Every registered Physics Basics PDF had a `%PDF` header, size over 1000 bytes, and `/Count 2` two-page structure.
- Publication commit is `c93ad13d60af18172a094e0f1b2e7e2c6112ea0c` (`Publish 30 Physics Basics wave worksheets`).

## Published wave checkpoint

The new authoritative output is:

- `v = fλ`, solve `v`: 10 worksheets;
- `v = fλ`, solve `f`: 10 worksheets;
- `v = fλ`, solve `λ`: 10 worksheets;
- 20 problems per worksheet;
- units remain coherent SI quantities: `v` in m/s, `f` in Hz, `λ` in m;
- existing shared `product` relation only.

The generated worksheet PDF format, catalog schema, series metadata, and historical Physics Basics output location were not changed.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **480 worksheets**;
- total published physics: **768 worksheets**.

`物理基礎` unit counts are now:

- `運動の表し方`: 90;
- `様々な力とその働き`: 130;
- `力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / basic sound quantities`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve all parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Stay within the current MEXT `音と振動` scope: air-column resonance and source frequency, string vibration, and sound-wave properties; do not jump to electricity yet.
4. Inspect existing formula relations and existing junior-high sound content before selecting the next quantitative drill. Prefer reuse; add a shared relation only when unavoidable and cover it with regression tests.
5. Build the next coherent 30–60 worksheet batch with deterministic seeds, independent answer recomputation, requested units, normalized-hash duplicate rejection, `formal_course=物理基礎`, and `grade=null`.
6. Extend the current Physics Basics publisher/workflow and update exact catalog/mode/skill/unit counts.
7. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and safe latest-main push succeed.
8. Representative screenshot-based visual QA of generated worksheet PDFs remains pending. The published raw PDF could not be retrieved into the rendering environment in this run, so do not mark visual QA as passed.

Do not jump to electricity or energy use before the waves/sound checkpoint is complete.
