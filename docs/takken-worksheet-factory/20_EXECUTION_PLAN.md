# 宅建 Worksheet Factory — EXECUTION PLAN

## Phase 0 — foundation

- [x] Define portable canonical path: `qualifications/takken/`.
- [x] Define source hierarchy and 2026-04-01 law cutoff.
- [x] Define 20-unit GENERATE backlog mode.
- [x] Define verified-only publication.
- [ ] Persist/bootstrap the Takken static-site shell under `qualifications/takken/`.
- [ ] Implement structured unit data model.
- [ ] Implement shared `study / worksheet / answer` renderer.
- [ ] Implement deterministic seeded cloze selection from explicit `terms` only.
- [ ] Implement print/PDF-safe A4 layout and source notes.
- [ ] Implement verified-only unit selector/catalog.
- [ ] Add automated validation for schema, IDs, sources, term/template matching and seed reproducibility.

Phase 0 setup work does not count toward the 20 generated-unit target. Once the minimum generator is usable, continue into the ordered content queue in the same run if safely possible.

## Throughput policy

Normal scheduled runs are GENERATE-only runs.

Target **20 newly generated sequential units per run**. Every new unit remains `pending_factcheck`, is appended to `STATUS.json.unverified_backlog`, and stays outside the public selector/catalog. Queue planning and generator maintenance do not count as generated units.

FACTCHECK is a later explicit independent operation.

## Ordered production queue

This is a practical study-site split, not an assertion that these are official RETIO chapter numbers. Preserve `officialScope` metadata against the official exam scope.

### A. 宅建業法

1. `takken-gyoho-definition` — 宅地・建物・宅建業の定義
2. `takken-gyoho-license-required` — 免許が必要な取引・不要な行為
3. `takken-gyoho-license-authority` — 国土交通大臣免許・都道府県知事免許
4. `takken-gyoho-license-disqualification` — 免許の欠格事由
5. `takken-gyoho-license-validity-renewal` — 免許の有効期間・更新
6. `takken-gyoho-license-change-closure` — 免許換え・変更届・廃業等
7. `takken-gyoho-roster-signs` — 宅建業者名簿・標識等
8. `takken-shi-registration` — 宅建士資格登録
9. `takken-shi-card` — 宅地建物取引士証
10. `takken-shi-exclusive` — 専任の宅建士
11. `takken-shi-exclusive-duties` — 宅建士の独占業務
12. `business-guarantee-deposit` — 営業保証金
13. `business-guarantee-refund` — 営業保証金の還付・不足額
14. `guarantee-association` — 保証協会・弁済業務保証金
15. `brokerage-contract-basics` — 媒介契約の基本
16. `brokerage-contract-types` — 一般・専任・専属専任媒介
17. `brokerage-reins-reporting` — 指定流通機構・業務処理状況報告
18. `advertising-start-time` — 広告開始時期
19. `contract-start-time` — 契約締結時期
20. `false-advertising-prohibited-conduct` — 誇大広告・禁止行為
21. `article35-basics` — 重要事項説明・35条書面の基本
22. `article35-items` — 35条の説明事項と取引類型
23. `article37-basics` — 37条書面の基本
24. `article35-vs-37` — 35条と37条の比較
25. `eight-restrictions-overview` — 8種制限の全体像
26. `cooling-off` — クーリング・オフ
27. `earnest-money-and-safeguards` — 手付額・手付金等の保全
28. `damages-penalty` — 損害賠償額の予定・違約金
29. `contract-nonconformity-special-rule` — 契約不適合責任に関する特約制限
30. `unowned-property-restriction` — 自己の所有に属しない宅地建物の売買
31. `installment-sales-ownership` — 割賦販売・所有権留保等
32. `brokerage-fees` — 報酬額の制限
33. `supervision-penalties` — 監督処分・罰則

### B. 権利関係

34. `civil-intent-general` — 意思表示の基本
35. `civil-mistake` — 錯誤
36. `civil-fraud-duress` — 詐欺・強迫
37. `civil-fictitious-declaration` — 心裡留保・虚偽表示
38. `civil-limited-capacity` — 制限行為能力者
39. `civil-agency` — 代理
40. `civil-unauthorized-agency` — 無権代理・表見代理
41. `civil-prescription` — 時効
42. `property-rights-opposability` — 物権変動・対抗要件
43. `co-ownership` — 共有
44. `mortgage` — 抵当権
45. `default-damages` — 債務不履行・損害賠償
46. `contract-cancellation` — 契約解除
47. `risk-simultaneous-performance` — 危険負担・同時履行の抗弁
48. `sale-earnest` — 売買・手付
49. `contract-nonconformity-civil` — 民法上の契約不適合責任
50. `lease-general` — 賃貸借
51. `lease-deposit-opposability` — 敷金・賃借権の対抗関係
52. `land-lease-right` — 借地権
53. `fixed-term-land-lease` — 定期借地権等
54. `building-lease-right` — 借家権
55. `fixed-term-building-lease` — 定期建物賃貸借
56. `inheritance-heirs-shares` — 相続人・法定相続分
57. `inheritance-acceptance-renunciation` — 相続の承認・放棄
58. `will-reserved-portion` — 遺言・遺留分
59. `condominium-law` — 区分所有法
60. `real-estate-registration` — 不動産登記法

### C. 法令上の制限

61. `city-planning-area` — 都市計画区域・準都市計画区域
62. `area-division` — 市街化区域・市街化調整区域等
63. `use-districts` — 用途地域・地域地区
64. `city-planning-decisions` — 都市計画の決定・都市計画事業
65. `development-permission-required` — 開発許可が必要な場合
66. `development-permission-procedure` — 開発許可・工事完了等
67. `building-confirmation` — 建築確認
68. `roads-frontage` — 建築基準法上の道路・接道義務
69. `building-coverage-ratio` — 建ぺい率
70. `floor-area-ratio` — 容積率
71. `height-restrictions` — 高さ制限・斜線・日影等
72. `fire-prevention-zones` — 防火地域・準防火地域
73. `national-land-use-notification` — 国土利用計画法の土地取引届出
74. `farmland-act-article3` — 農地法3条
75. `farmland-act-articles4-5` — 農地法4条・5条
76. `land-readjustment` — 土地区画整理法
77. `embankment-regulation` — 宅地造成及び特定盛土等規制法
78. `legal-restrictions-comparison` — 法令上の制限・許可届出比較

### D. 税・その他

79. `real-estate-acquisition-tax` — 不動産取得税
80. `fixed-asset-tax` — 固定資産税
81. `registration-license-tax` — 登録免許税
82. `stamp-tax` — 印紙税
83. `income-tax-real-estate-transfer` — 所得税・不動産譲渡の基礎
84. `land-price-public-notice` — 地価公示法
85. `real-estate-appraisal` — 不動産鑑定評価の基礎
86. `housing-finance-agency` — 住宅金融支援機構
87. `fair-competition-advertising` — 不動産広告・景品表示等
88. `land-building-knowledge` — 土地・建物の基礎知識
89. `statistics` — 宅建試験の統計問題
90. `five-question-exemption-review` — 5問免除科目まとめ

## Per-unit GENERATE acceptance criteria

A generated unit may enter `pending_factcheck` only when all of the following are true:

- `examYear: 2026` and `lawAsOf: "2026-04-01"` are present.
- Category/chapter/order metadata are present.
- Each important rule is decomposed into independently checkable `facts`.
- Each fact records authoritative source candidates.
- Learner text is original and concise.
- Explicit `terms` correspond exactly to `{{...}}` targets in templates.
- Typical exam traps are represented without inventing rules.
- Seeded blank generation is reproducible.
- No unverified unit is in public selector/catalog.
- Syntax/schema tests pass.

## FACTCHECK acceptance criteria

A unit may become `verified` only after independent re-opening of primary/official sources confirms all substantive claims as of 2026-04-01 and all generated question answers are uniquely correct.

## After queue completion

When all 90 units have been generated:

1. Do not invent a new queue silently.
2. Set `generation_complete: true` in STATUS.
3. Keep pending backlog unpublished.
4. Record completion in HANDOFF.
5. Wait for explicit instruction to run FACTCHECK, expand curriculum, generate one-question drills/four-choice questions, or start a new qualification.
