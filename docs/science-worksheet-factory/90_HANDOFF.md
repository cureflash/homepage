# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main`, read the science/shared worksheet-factory control documents and curriculum plans, and resumed exactly at `物理基礎：音と振動 / 気柱共鳴`.
- Preserved concurrent unrelated repository progress. The implementation branch started from `main` commit `1993118b04f776ffefad20431c0c1764c171670f` (a Power TOEIC merge), rechecked `main` immediately before merge, and did not overwrite or rewind that work.
- Rechecked the current MEXT high-school science commentary. `物理基礎` requires relating air-column resonance to source frequency under `音と振動`, together with string vibration and sound-wave properties.
- Chose one unambiguous first air-column model instead of mixing conventions: a tube closed at one end, fundamental resonance only, with end correction explicitly ignored. For this model `λ = 4L`; with `v = fλ`, the drilled relation is `v = 4Lf`.
- Reused the existing shared `product` relation by representing the fixed closed-pipe factor as a constant input equal to 4. No shared generator, independent validator, PDF renderer, catalog schema, ID prefix, output directory, or worksheet-series convention was changed.
- Added 30 focused worksheets to `scripts/science_physics_basic_sound.py`: 10 solve sound speed `v`, 10 reverse-solve resonant air-column length `L`, and 10 reverse-solve source frequency `f`. Every worksheet has 20 deterministic problems.
- Numerical pools keep the implied sound speed in a basic physical range of 320–360 m/s. Catalog descriptions explicitly say that the tube is closed at one end, the fundamental mode is used, and end correction is ignored.
- Extended the dedicated sound tests from 30 to 60 total sound worksheets. New coverage checks deterministic regeneration, independent direct/reverse recomputation, units, closed-pipe factor/model assumptions, physical speed range, 60/60 sound hash uniqueness, 30/30 new air-column hash uniqueness, disjointness from the previous sound-quantity batch, and disjointness from the general-wave batch.
- Extended the existing `Publish Physics Basics worksheets` workflow to expect exactly 540 Physics Basics rows, 540 unique content hashes, 200 `calculation-basic`, 340 `calculation-reverse`, 30 rows for `closed-pipe-fundamental-resonance`, and 60 rows in the `音と振動` unit.
- Implementation PR #92 merged as `c24365629bc50933b06f23f562c88bf933fed2ee`.
- The merge triggered Actions run `33014145202`. The `publish` job completed successfully. Latest-main guard, shared and every Physics Basics topic test, generation, post-generation validation/catalog checks, PDF structural validation, generated commit, and safe push all succeeded.
- Publication commit is `bbed311f929fd5b58a283038f24bf21d6cf3bf75` (`Publish 30 Physics Basics air-column resonance worksheets`).
- The workflow validated every registered Physics Basics PDF for `%PDF` header, size over 1000 bytes, and `/Count 2` two-page structure.
- Attempted representative visual QA of a newly published PDF, but the public raw PDF could not be fetched by the available renderer in this environment. Screenshot-based visual QA therefore remains pending and is not marked passed.

## Published air-column resonance checkpoint

The authoritative new output is:

- closed pipe, fundamental resonance, end correction ignored;
- relation: `λ = 4L`, therefore `v = 4Lf`;
- solve sound-wave speed `v`: 10 worksheets;
- solve resonant air-column length `L`: 10 worksheets;
- solve source frequency `f`: 10 worksheets;
- 20 problems per worksheet;
- answer units: `m/s`, `m`, `Hz` respectively;
- shared `product` relation only, with fixed factor 4;
- `formal_course=物理基礎`, `grade=null` for every entry;
- unit metadata: `様々な物理現象とエネルギーの利用：音と振動`;
- skill metadata: `closed-pipe-fundamental-resonance`.

The open-pipe formula and overtones are deliberately not mixed into this batch. That prevents learners from having to infer which boundary-condition convention is intended.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **540 worksheets**;
- total published physics: **828 worksheets**.

`物理基礎` unit counts are now:

- `物体の運動とエネルギー：運動の表し方`: 90;
- `物体の運動とエネルギー：様々な力とその働き`: 130;
- `物体の運動とエネルギー：力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30;
- `様々な物理現象とエネルギーの利用：音と振動`: 60.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / 気柱共鳴（開管の基本振動）`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Stay inside `音と振動`; do not advance to electricity yet.
4. Reconfirm the open-pipe fundamental convention from a reliable source. Use the simplest model: both ends open, fundamental resonance, end correction explicitly ignored, `λ = 2L`, hence `v = 2Lf`.
5. Prefer the same existing shared `product` relation with a fixed factor 2; do not add a new shared relation unless genuinely necessary.
6. Build a coherent 30-sheet counterpart when it remains nonduplicate and mechanically clean: sound-speed direct, air-column-length reverse, and source-frequency reverse, 10 deterministic variants each, 20 problems each.
7. Add tests asserting the open-pipe assumptions explicitly and checking deterministic regeneration, independent recomputation, units, physical ranges, unique hashes, and disjointness from closed-pipe/general sound/wave batches.
8. Extend the existing Physics Basics publisher/workflow and update exact catalog/mode/skill/unit counts. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and latest-main safe push succeed.
9. After open-pipe resonance, continue `音と振動` with string vibration and then remaining basic sound properties/retrieval where answers remain unambiguous. Only after this unit is sufficiently covered should production advance to electricity.
10. Representative screenshot-based visual QA of generated worksheet PDFs remains pending. Retry only when an actual generated PDF can be fetched and rendered; structural checks alone do not count as visual QA.

Do not jump to electricity or energy use while the defined `音と振動` coverage remains unfinished.
