# 宅建 Worksheet Factory — HANDOFF

## Current state

The portable Takken worksheet foundation is present on `main`, and four normal generation batches are now prepared through queue item 80.

Canonical files:

- `docs/takken-worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/takken-worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/takken-worksheet-factory/STATUS.json`
- `docs/takken-worksheet-factory/90_HANDOFF.md`

Canonical implementation:

- `qualifications/takken/`

Implemented foundation:

- portable static shell with relative paths/config separation
- shared structured unit data model
- shared `study / worksheet / answer` renderer
- deterministic seeded cloze selection from explicit `terms`
- A4 print/PDF layout and source notes
- verified-only public catalog
- automated validation at `tests/takken-worksheet-factory-validation.mjs`

## Generated backlog

Queue items 1-20:

- `qualifications/takken/data/pending-units.js`

Queue items 21-40:

- `qualifications/takken/data/pending-units-21-40.js`

Queue items 41-60:

- `qualifications/takken/data/pending-units-41-60.js`

Queue items 61-80:

- `qualifications/takken/data/pending-units-61-80.js`

All 80 units remain `pending_factcheck`. None is published. `qualifications/takken/data/public-catalog.js` remains verified-only.

### Newly generated items 61-80

61. 都市計画区域・準都市計画区域
62. 市街化区域・市街化調整区域等
63. 用途地域・地域地区
64. 都市計画の決定・都市計画事業
65. 開発許可が必要な場合
66. 開発許可・工事完了等
67. 建築確認
68. 建築基準法上の道路・接道義務
69. 建ぺい率
70. 容積率
71. 高さ制限・斜線・日影等
72. 防火地域・準防火地域
73. 国土利用計画法の土地取引届出
74. 農地法3条
75. 農地法4条・5条
76. 土地区画整理法
77. 宅地造成及び特定盛土等規制法
78. 法令上の制限・許可届出比較
79. 不動産取得税
80. 固定資産税

This completes the ordered `法令上の制限` generation queue and starts `税・その他`.

Generation-stage source candidates used for 61-80 are centered on e-Gov versions as of `2026-04-01` of:

- 都市計画法
- 建築基準法
- 国土利用計画法
- 農地法
- 土地区画整理法
- 宅地造成及び特定盛土等規制法
- 地方税法

These are generation-stage source candidates only. Every substantive claim must be independently reopened during later solve-all/factcheck before publication.

## Content design notes for 61-80

The generated wording intentionally keeps pending material conservative. It emphasizes stable statutory structure and defers edge-case matrices to independent validation. Particular future QA attention should be given to:

- planning authority details and exceptions in unit 64
- 2025/2026 Building Standards Act confirmation scope changes in unit 67
- road definition exceptions and Article 43 exceptions in unit 68
- building coverage / floor-area-ratio special cases in units 69-70
- exact applicability by use district for height controls in unit 71
- National Land Use Planning Act area thresholds in unit 73
- Agricultural Land Act permission/notification exceptions in units 74-75
- legal effects and timing around provisional replotting / replotting disposition in unit 76
- current Embankment Regulation Act terminology and delegated authority in unit 77
- tax exemptions, special measures, standard tax rates and assessment bases in units 79-80

Do not interpret the conservative generation wording as completed legal review.

## Validation state

`tests/takken-worksheet-factory-validation.mjs` is updated to load all four pending batch files and expect exactly 80 sequential pending units.

It checks:

- 2026 exam year and `2026-04-01` law cutoff
- exact sequential unit order through 80
- exact total pending count of 80
- unique unit/fact/sentence IDs
- required metadata
- HTTPS source records and source-reference resolution
- exact `terms[]` ↔ `{{...}}` placeholder matching
- `pending_factcheck` status consistency
- no pending unit leaking into the public catalog
- renderer verified-only filtering
- deterministic seeded RNG guard
- print/PDF path guard

The current runtime still cannot resolve `github.com` from the local container, so repository clone and local Node execution were not possible. Do not claim the Node validation has executed successfully; CI should be checked after PR creation.

## Exact next start

Queue item 81:

`registration-license-tax` — 登録免許税

The next generation run should resume at item 81 and generate the remaining 10 sequential items through item 90 if authoritative generation is safe:

81. 登録免許税
82. 印紙税
83. 所得税・不動産譲渡の基礎
84. 地価公示法
85. 不動産鑑定評価の基礎
86. 住宅金融支援機構
87. 不動産広告・景品表示等
88. 土地・建物の基礎知識
89. 宅建試験の統計問題
90. 5問免除科目まとめ

After item 90, set `generation_complete: true`. Under the current scheduled instruction, the following run then starts the independent solve-all validation from the first generated item/problem and proceeds in order without skipping. Because the existing worksheet unit data currently has `questions: []`, do not falsely claim question-bank validation is possible until the canonical question-generation representation is actually populated; reconcile that schema requirement before marking solve-all complete.

## Publication / validation policy

All pending units remain unpublished. Validation must independently reopen primary/official sources and must not trust generation-stage answers or explanations. Only independently verified material may enter the public catalog.
