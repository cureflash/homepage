# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed exactly at `物理基礎：音と振動 / basic sound quantities` after the published general-wave `v = fλ` checkpoint.
- Rechecked the current MEXT high-school science commentary. `物理基礎` places `音と振動` under waves and requires relating air-column resonance to source frequency, plus understanding string vibration and sound-wave properties. The advanced `物理` commentary also explicitly states that these three items were learned in `物理基礎`, confirming the placement boundary.
- Selected the safest first sound checkpoint: basic sound-wave quantities through `v = fλ`. This stays inside sound-wave properties while leaving air-column resonance/string-specific relations for the following checkpoint.
- Implemented one new focused skill, `sound-speed-frequency-wavelength`, with three solve directions: sound-wave speed, sound frequency, and sound wavelength. Each direction has 10 deterministic seed variants, for 30 worksheets total, 20 problems per worksheet.
- Reused only the existing shared `product` relation. No shared generator, validator, renderer, catalog schema, worksheet series convention, historical Physics Basics ID prefix, or output directory was changed.
- Added dedicated tests for exactly 30 variants, deterministic regeneration, independent direct/reverse recomputation, requested answer units (`m/s`, `Hz`, `m`), per-problem shared validation, 30/30 normalized-hash uniqueness, and explicit hash disjointness from the already-published general-wave batch.
- Extended the existing Physics Basics publisher and existing `Publish Physics Basics worksheets` workflow. The workflow now includes the sound topic/test and validates the exact post-publication catalog counts.
- Implementation PR #88 merged as `e85aa666bbf71b43fe1646127412be3d0d316272`.
- The merge triggered Actions run `33008504623`. The `publish` job completed successfully. Latest-main guard, shared and every Physics Basics topic test, generation, post-generation validation/catalog checks, PDF structural validation, commit, and safe push all succeeded.
- The workflow validated exactly 510 Physics Basics catalog rows and 510 unique content hashes. Mode counts are 190 `calculation-basic` and 320 `calculation-reverse`. The new `sound-speed-frequency-wavelength` skill contributes exactly 30 rows.
- Every registered Physics Basics PDF passed `%PDF` header, size-over-1000-bytes, and `/Count 2` two-page structural checks.
- Publication commit is `0df06d1dd70a9c2c8da050630060e3a2597e0a99` (`Publish 30 Physics Basics sound worksheets`).

## Published sound checkpoint

The new authoritative output is:

- sound `v = fλ`, solve sound-wave speed `v`: 10 worksheets;
- sound `v = fλ`, solve sound frequency `f`: 10 worksheets;
- sound `v = fλ`, solve sound wavelength `λ`: 10 worksheets;
- 20 problems per worksheet;
- answer units: `m/s`, `Hz`, `m` respectively;
- existing shared `product` relation only;
- `formal_course=物理基礎`, `grade=null` for every entry;
- unit metadata: `様々な物理現象とエネルギーの利用：音と振動`.

The sound variable labels and numeric pool are separate from the general-wave batch, and the dedicated test asserts that all 30 sound content hashes are disjoint from all 30 general-wave content hashes.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **510 worksheets**;
- total published physics: **798 worksheets**.

`物理基礎` unit counts are now:

- `物体の運動とエネルギー：運動の表し方`: 90;
- `物体の運動とエネルギー：様々な力とその働き`: 130;
- `物体の運動とエネルギー：力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30;
- `様々な物理現象とエネルギーの利用：音と振動`: 30.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / 気柱共鳴`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Recheck current MEXT wording for `気柱の共鳴と音源の振動数` and a reliable educational source for the exact basic quantitative convention to drill.
4. Decide and document the simplest unambiguous resonance model before generating: open/closed pipe, fundamental versus adjacent resonance lengths, and whether end correction is explicitly ignored. Do not silently mix conventions.
5. Inspect existing shared formula relations. Prefer reuse. If a new scaled relation is actually necessary, add it only with shared regression tests and independent recomputation.
6. Build the next coherent 30–60 worksheet batch with deterministic seeds, independent answer validation, units, normalized-hash duplicate rejection, `formal_course=物理基礎`, and `grade=null`.
7. Extend the current Physics Basics publisher/workflow and update exact catalog/mode/skill/unit counts.
8. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and latest-main safe push succeed.
9. After the resonance checkpoint, remain inside `音と振動` for string vibration / remaining sound properties before advancing to electricity.
10. Representative screenshot-based visual QA of generated worksheet PDFs remains pending; structural PDF validation is passing, but do not mark visual QA as passed until a generated PDF has actually been rendered and visually inspected.

Do not jump to electricity or energy use while the defined `音と振動` coverage remains unfinished.
