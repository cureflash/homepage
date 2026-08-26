# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed at `物理基礎：音と振動 / 弦の振動`.
- Rechecked the current MEXT high-school science commentary. `物理基礎` treats string vibration and normal modes under `音と振動`; the commentary also discusses investigating string frequency and wave speed in relation to string mass and tension.
- Cross-checked the simplest boundary-condition relation against OpenStax: for a string fixed at both ends, the fundamental mode has `λ = 2L`, hence `f = v/(2L)` and equivalently `v = 2Lf`.
- Added only this simplest unambiguous model: string fixed at both ends, fundamental mode. Overtone/harmonic conventions and the tension/linear-density square-root relation were intentionally not mixed into this first checkpoint.
- Added `scripts/science_physics_basic_string.py` with 30 focused worksheets: 10 solve string-wave speed `v`, 10 reverse-solve string length `L`, and 10 reverse-solve fundamental frequency `f`. Every worksheet has 20 deterministic problems.
- Reused the existing shared `product` relation with a fixed factor 2. No shared generator, independent validator, PDF renderer, catalog schema, ID prefix, or output directory was changed.
- Added `tests/test_science_physics_basic_string.py`. Tests cover exactly 30 variants, deterministic regeneration, independent direct/reverse recomputation, requested answer units, positive ranges, 30/30 normalized-hash uniqueness, and disjointness from all prior sound batches.
- Wired the new topic into `scripts/publish_science_physics_basic.py` and updated the Physics Basics publication workflow to expect exactly 600 Physics Basics rows, 600 unique content hashes, 220 `calculation-basic`, 380 `calculation-reverse`, 30 rows for `string-fundamental-vibration`, and 120 rows in `音と振動`.
- Implementation PR #98 merged as `43d5d2df99adc07da32a70641a6941eeddf93035`.
- Actions run `33022082223` completed successfully. Latest-main guard, shared and all Physics Basics topic tests, generation, post-generation validation/catalog checks, PDF structural validation, generated commit, and safe push all succeeded.
- Publication commit is `c9a6844ddb1be7edb99744b4e512626686d9190c` (`Publish 30 Physics Basics string-vibration worksheets`).
- The workflow validated every registered Physics Basics PDF for `%PDF` header, size over 1000 bytes, and `/Count 2` two-page structure.
- Representative screenshot-based visual QA remains pending; structural checks are not being treated as visual QA.

## Published string-vibration checkpoint

- string fixed at both ends;
- fundamental mode only;
- relation: `λ = 2L`, therefore `v = 2Lf`;
- solve string-wave speed `v`: 10 worksheets;
- solve string length `L`: 10 worksheets;
- solve fundamental frequency `f`: 10 worksheets;
- 20 problems per worksheet;
- answer units: `m/s`, `m`, `Hz` respectively;
- shared `product` relation only, with fixed factor 2;
- `formal_course=物理基礎`, `grade=null`;
- unit metadata: `様々な物理現象とエネルギーの利用：音と振動`;
- skill metadata: `string-fundamental-vibration`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **600 worksheets**;
- total published physics: **888 worksheets**.

`物理基礎` unit counts:

- `物体の運動とエネルギー：運動の表し方`: 90;
- `物体の運動とエネルギー：様々な力とその働き`: 130;
- `物体の運動とエネルギー：力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30;
- `様々な物理現象とエネルギーの利用：音と振動`: 120.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / remaining sound properties and retrieval`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Stay inside `音と振動`; do not advance to electricity until the remaining basic sound-property coverage is complete.
4. Reconfirm current MEXT handling of resonance/resonance phenomena and beats before encoding finite-answer retrieval facts.
5. Prefer mechanically checkable retrieval families (`forward`, `reverse`, `fill`, `true/false`) using a small authoritative fact registry; avoid vague prose questions or ambiguous terminology.
6. Reuse the shared retrieval generator/validator where possible; add no new relation or renderer unless necessary.
7. Target a coherent 30–60 worksheet checkpoint with deterministic generation, independent accepted-answer validation, normalized-hash uniqueness, and disjointness from existing sound/string/wave batches.
8. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and latest-main safe push succeed.
9. Once sound retrieval is complete, advance in curriculum order to `物理基礎：電気`.
10. Representative screenshot-based visual QA remains pending; retry only when an actual generated PDF can be fetched and rendered.
