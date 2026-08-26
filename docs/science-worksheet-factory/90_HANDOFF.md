# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed exactly at `物理基礎：音と振動 / 気柱共鳴（開管の基本振動）`.
- Preserved concurrent unrelated progress. The implementation branch started from `main` commit `6f48b91af4533c55209bf56a4a9e357a8582412a`, which already included the concurrent Power TOEIC merge.
- Rechecked the current MEXT high-school science commentary. `物理基礎` requires relating air-column resonance to source frequency under `音と振動`, together with string vibration and sound-wave properties.
- Added the simplest open-pipe counterpart only: both ends open, fundamental resonance, end correction explicitly ignored. For this model `λ = 2L`; with `v = fλ`, the drilled relation is `v = 2Lf`.
- Reused the existing shared `product` relation with a fixed factor 2. No shared generator, independent validator, PDF renderer, catalog schema, ID prefix, or output directory was changed.
- Added 30 focused worksheets to `scripts/science_physics_basic_sound.py`: 10 solve sound speed `v`, 10 reverse-solve resonant air-column length `L`, and 10 reverse-solve source frequency `f`. Every worksheet has 20 deterministic problems.
- Extended sound tests from 60 to 90 total sound worksheets. Coverage checks deterministic regeneration, independent direct/reverse recomputation, units, explicit open-pipe assumptions, physical sound-speed range, 90/90 sound hash uniqueness, 30/30 new open-pipe hash uniqueness, disjointness from prior sound batches, and disjointness from the general-wave batch.
- Updated the Physics Basics publisher workflow to expect exactly 570 Physics Basics rows, 570 unique content hashes, 210 `calculation-basic`, 360 `calculation-reverse`, 30 rows for `open-pipe-fundamental-resonance`, and 90 rows in `音と振動`.
- Implementation PR #95 merged as `8ed7979d3f9462b3394a33bfeb6c8e0123283051`.
- Actions run `33018233979` completed successfully. Latest-main guard, shared and all Physics Basics topic tests, generation, post-generation validation/catalog checks, PDF structural validation, generated commit, and safe push all succeeded.
- Publication commit is `0f40db494776eb6b63527948f60c29d65eaa889d` (`Publish 30 Physics Basics open-pipe resonance worksheets`).
- The workflow validated every registered Physics Basics PDF for `%PDF` header, size over 1000 bytes, and `/Count 2` two-page structure.
- Representative screenshot-based visual QA remains pending; structural checks are not being treated as visual QA.

## Published open-pipe resonance checkpoint

- both ends open;
- fundamental resonance only;
- end correction ignored;
- relation: `λ = 2L`, therefore `v = 2Lf`;
- solve sound-wave speed `v`: 10 worksheets;
- solve resonant air-column length `L`: 10 worksheets;
- solve source frequency `f`: 10 worksheets;
- 20 problems per worksheet;
- answer units: `m/s`, `m`, `Hz` respectively;
- shared `product` relation only, with fixed factor 2;
- `formal_course=物理基礎`, `grade=null`;
- unit metadata: `様々な物理現象とエネルギーの利用：音と振動`;
- skill metadata: `open-pipe-fundamental-resonance`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **570 worksheets**;
- total published physics: **858 worksheets**.

`物理基礎` unit counts:

- `物体の運動とエネルギー：運動の表し方`: 90;
- `物体の運動とエネルギー：様々な力とその働き`: 130;
- `物体の運動とエネルギー：力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30;
- `様々な物理現象とエネルギーの利用：音と振動`: 90.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / 弦の振動`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Stay inside `音と振動`; do not advance to electricity yet.
4. Reconfirm the simplest curriculum-appropriate string-vibration quantities from MEXT plus a reliable physics source before implementing them.
5. Prefer a mechanically checkable fundamental-mode relation and avoid mixing overtone conventions or advanced derivations in the first batch.
6. Reuse the shared formula relations where possible; add a new shared relation only if genuinely necessary and then run all required regression tests.
7. Target a coherent 30–60 worksheet checkpoint with deterministic generation, independent answer recomputation, unit/range checks, normalized-hash uniqueness, and disjointness from prior published batches.
8. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and latest-main safe push succeed.
9. After string vibration, finish remaining basic sound properties/retrieval before advancing to electricity.
10. Representative screenshot-based visual QA remains pending; retry only when an actual generated PDF can be fetched and rendered.
