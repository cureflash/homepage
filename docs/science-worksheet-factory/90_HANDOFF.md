# Science Worksheet Factory — handoff

Updated: 2026-08-27

## Completed / reconciled this run

Started from latest `main`, read the science-factory control documents, and resumed at `物理基礎：音と振動 / 共振・共鳴`. Current MEXT guidance was rechecked before each content transition. The run completed three safe checkpoints totaling **120 new PDFs**.

### 1. 共振・共鳴・固有振動数 — 40 PDFs

- Added `forward / reverse / fill / true-false` retrieval variants × 10 deterministic seeds, 20 problems each.
- Limited facts to unambiguous basics: 共振、共鳴、固有振動数、共振条件、振幅との関係.
- Extended the Physics Basics publisher so formula topics remain `numeric` and retrieval topics explicitly use `accepted-set`; existing numeric worksheets were not relabeled.
- Tests cover deterministic regeneration, independent accepted-answer validation, corruption rejection, normalized-hash uniqueness, and collisions against prior sound series.
- PR #109 merge: `d625625a73db3c66683a8ce6eca13082e5726809`.
- Actions run `33029236931`: success.
- Publication commit: `714e1704351be63339e0511e52b3c9345ff2eb97`.

### 2. 物質と電気抵抗 — 40 PDFs

- Advanced to `物理基礎：電気` after the sound checkpoint was green.
- MEXT scope rechecked: conductor resistance versus length/cross-sectional area, material-dependent resistivity, free-electron current in metals, conductors/insulators.
- Added four retrieval modes × 10 seeds for 電気抵抗、抵抗率、導体、絶縁体、自由電子、導体形状と抵抗.
- Tests cover deterministic regeneration, independent validation, corruption rejection, required concepts, 40/40 unique hashes, and collision checks.
- Reconciled concurrent `main` progress instead of overwriting it.
- PR #110 merge: `f1b0d46b987655d4511b50274d94a0c4bb0fc3cd`.
- Actions run `33029450475`: success.
- Publication commit: `38d87dd321082206c3b94b05a5ca8fea4033bc1e`.

### 3. 発電・送電・電気の利用 — 40 PDFs

- MEXT scope rechecked: basic mechanisms of generation/transmission/electricity use, AC-to-DC conversion, and electromagnetic-wave use.
- Added four retrieval modes × 10 seeds for 交流・直流、変圧器、整流、高電圧送電とジュール損失、発電機の基本、電波利用.
- High-voltage transmission is stated only in the same-power basic form: higher voltage permits lower current and therefore lower resistive/Joule-heating loss.
- Tests cover deterministic regeneration, independent validation, corruption rejection, required concepts, 40/40 unique hashes, and collision checks against earlier accepted-set topics.
- PR #112 merge: `117d7c87bbfe747838a8dc0275d75184be3b0f8a`.
- Actions run `33029586427`: success.
- Publication commit: `82fdbcc3632bfb6b58918d83b49accb722c84362`.

## Current authoritative published coverage

- junior-high grade 1 physics: 48;
- junior-high grade 2 physics: 120;
- junior-high grade 3 physics: 120;
- `物理基礎`: **750**;
- total published physics: **1038**.

`物理基礎` unit counts:

- 運動の表し方: 90;
- 様々な力とその働き: 130;
- 力学的エネルギー: 170;
- 熱: 60;
- 波: 30;
- 音と振動: 190;
- 電気: 80.

Publication invariants now verified by Actions:

- exactly **750** Physics Basics catalog rows;
- **750 unique normalized content hashes**;
- answer types: `numeric` 630 / `accepted-set` 120;
- 20 problems per worksheet;
- every registered Physics Basics PDF passes `%PDF` header, file-size, and two-page structural checks.

Representative screenshot-based visual QA remains pending; structural validation is not being treated as visual QA.

## Exact next starting point

Continue Phase 3 at **`物理基礎：エネルギーとその利用`**.

1. Start from latest `main` and repeat the control-document read/reconcile sequence.
2. Preserve parallel repository progress; never reset a newer `main`.
3. Recheck current MEXT scope before defining the first energy-use checkpoint.
4. Prefer existing shared formula relations for explicit quantitative relations; otherwise use finite-answer retrieval with unambiguous accepted answers.
5. For every new series, independently validate answers, verify deterministic seeds, require normalized-hash uniqueness/collision checks, and preserve 20-problem/two-page format.
6. Update exact workflow/catalog totals and publish only after shared/topic tests, generation, post-generation validation, catalog/PDF checks, and latest-main safe push succeed.
7. Do not reopen completed sound/electricity batches unless a concrete QA defect is found.
8. Representative screenshot-based visual QA remains pending.
