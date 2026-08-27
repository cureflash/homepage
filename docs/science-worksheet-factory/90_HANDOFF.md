# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

- Started from latest `main` and resumed at `物理基礎：音と振動 / remaining sound properties and retrieval`.
- Rechecked the current MEXT high-school science commentary. Under `物理基礎` / `音と振動`, sound-wave properties explicitly include resonance, sympathetic resonance, and beats (`共振，共鳴，うなり`).
- Chose beats as the next safe numerical checkpoint because it remains mechanically recomputable with the existing shared formula engine; no new answer type or renderer was required.
- Added `scripts/science_physics_basic_beats.py` with 30 focused worksheets: 10 solve beat frequency, 10 reverse-solve the higher source frequency, and 10 reverse-solve the lower source frequency. Every worksheet has 20 deterministic problems.
- Represented the basic relation as `f_beat = f_high - f_low`, with the two source frequencies explicitly labeled and generated in ordered high/low ranges. This reuses the existing shared `difference` relation while remaining equivalent to the usual absolute frequency difference for the generated problems.
- Added `tests/test_science_physics_basic_beats.py`. Tests cover exactly 30 variants, deterministic regeneration, independent direct/reverse recomputation, ordered source frequencies, a basic 5–15 Hz beat range, answer units, 30/30 normalized-hash uniqueness, and disjointness from prior sound/string batches.
- Wired the new batch into `scripts/publish_science_physics_basic.py` and the Physics Basics publication workflow.
- Implementation PR #100 merged as `44a1edcc691d4bec957bf505203bf6528c126f75`.
- Actions run `33025448433` completed successfully. Shared/topic tests, generation, post-generation validation, catalog checks, PDF structural validation, generated commit, and safe push all succeeded.
- Publication commit is `69f170ad435cb7f4c5fa862d8a2b6cfb598dec0c` (`Publish 30 Physics Basics beat-frequency worksheets`).
- Workflow validated exactly 630 Physics Basics catalog rows, 630 unique content hashes, and every registered Physics Basics PDF for `%PDF` header, size over 1000 bytes, and two-page structure.
- Representative screenshot-based visual QA remains pending; structural checks are not being treated as visual QA.

## Published beats checkpoint

- relation: `f_beat = f_high - f_low`, with `f_high > f_low` enforced by the spec ranges;
- solve beat frequency: 10 worksheets;
- reverse-solve higher source frequency: 10 worksheets;
- reverse-solve lower source frequency: 10 worksheets;
- 20 problems per worksheet;
- answer unit: `Hz`;
- shared `difference` relation only;
- `formal_course=物理基礎`, `grade=null`;
- unit metadata: `様々な物理現象とエネルギーの利用：音と振動`;
- skill metadata: `beat-frequency`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48 worksheets;
- junior-high grade 2 physics: 120 worksheets;
- junior-high grade 3 physics: 120 worksheets;
- `物理基礎`: **630 worksheets**;
- total published physics: **918 worksheets**.

`物理基礎` unit counts:

- `物体の運動とエネルギー：運動の表し方`: 90;
- `物体の運動とエネルギー：様々な力とその働き`: 130;
- `物体の運動とエネルギー：力学的エネルギー`: 170;
- `様々な物理現象とエネルギーの利用：熱`: 60;
- `様々な物理現象とエネルギーの利用：波`: 30;
- `様々な物理現象とエネルギーの利用：音と振動`: 150.

## Exact next starting point

Continue Phase 3 at **`物理基礎：音と振動 / resonance and remaining sound-property retrieval`**.

1. Start from latest `main` and repeat the required science/shared control-document read sequence.
2. Preserve parallel repository progress and reconcile rather than overwriting a newer `main`.
3. Stay inside `音と振動`; do not advance to electricity until remaining basic sound-property coverage is complete.
4. Use the already-shared finite-answer retrieval engine (`generate_retrieval_drill`) rather than inventing a new renderer/generator unless necessary.
5. Build a small authoritative fact registry for `共振`, `共鳴`, and any remaining sound properties. Prefer only facts whose forward/reverse/fill/true-false answers are unambiguous and grade-appropriate.
6. Because retrieval answers use `accepted-set` rather than the current Physics Basics publisher's numeric-only metadata path, update the publisher so each topic selects its generator/answer type explicitly; do not globally relabel existing numeric worksheets.
7. Add independent accepted-answer recomputation tests, deterministic seed checks, normalized-hash uniqueness, and collision checks against all prior sound/wave/string/beats batches.
8. Publish only after shared/topic tests, PDF generation, catalog validation, PDF header/size/two-page checks, and latest-main safe push succeed.
9. Once sound retrieval is complete, advance in curriculum order to `物理基礎：電気`.
10. Representative screenshot-based visual QA remains pending; retry only when an actual generated PDF can be fetched and rendered.
