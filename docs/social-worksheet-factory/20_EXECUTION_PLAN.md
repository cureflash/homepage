# Social Studies Worksheet Factory — execution plan

## Phase 0 — foundation

- [x] Define structured sentence/cloze model.
- [x] Define non-AI historical image rule and license tracking.
- [x] Create and independently verify the first junior-high history prototype.
- [x] Establish verified-only publication.
- [x] Replace per-unit GENERATE/FACTCHECK alternation with high-volume generation backlog mode.
- [x] Raise normal generation throughput to 20 units per run.

## Throughput policy

Normal scheduled runs are GENERATE runs. Target **20 newly generated sequential units per run**. Every new unit remains `pending_factcheck`, is appended to `STATUS.json.unverified_backlog`, and stays out of the public selector. Queue planning does not count toward the 20-unit target. Independent FACTCHECK is a later explicit backlog operation.

## Completed production queues

- Junior-high history: 18-unit generation queue complete.
- Junior-high civics: 14-unit generation queue complete.
- `歴史総合`: 19-unit MEXT-aligned generation queue complete.
- `日本史探究`: 63-unit MEXT-aligned generation queue complete.
- `世界史探究`: 38-unit MEXT-aligned generation queue complete.
- `公共`: 18-unit MEXT-aligned generation queue complete.
- `倫理`: 20-unit MEXT-aligned generation queue complete.

## 日本史探究 — ordered production queue

The queue follows the current MEXT large-section order. Broad MEXT sections are split into low-density A4 worksheet units while preserving `formalCourse: 日本史探究` and parent placement metadata.

### A 原始・古代の日本と東アジア — generated

1. 旧石器時代と日本列島の環境
2. 縄文文化と定住生活
3. 弥生文化と稲作社会
4. 弥生社会の小国と東アジア交流
5. 古墳文化とヤマト政権
6. 歴史資料と原始・古代の展望
7. 飛鳥時代の国家形成
8. 律令国家の成立
9. 奈良時代の政治と社会
10. 天平文化と東アジア交流
11. 平安初期の政治と地方支配
12. 摂関政治と貴族社会
13. 荘園・公領と武士の台頭

### B 中世の日本と世界 — generated

14. 中世への転換：院政・武士の政治進出
15. 中世への転換：土地支配の変容
16. 歴史資料と中世の展望
17. 鎌倉幕府の成立と公武関係
18. 御家人制と土地支配
19. 宋との交流と中世経済
20. 元寇と鎌倉幕府の変容
21. 鎌倉新仏教と中世文化
22. 建武政権・南北朝内乱
23. 室町幕府と守護大名
24. 日明貿易と東アジア
25. 琉球王国と列島周辺の交流
26. 農業・商工業・流通の発達
27. 村落・都市の自立
28. 応仁の乱と戦国大名
29. 室町文化・地域文化・文化の融合

### C 近世の日本と世界 — generated

30. 近世への転換：戦国社会と統一
31. ヨーロッパ人来航と世界の結び付き
32. 歴史資料と近世の展望
33. 織豊政権と統一事業
34. 検地・刀狩と社会秩序
35. 江戸幕府の成立と幕藩体制
36. 大名統制と朝廷・寺社
37. 近世の対外関係と四つの口
38. 身分・村・町と近世社会
39. 農業・商品生産・交通の発達
40. 元禄文化
41. 幕府財政と享保の改革
42. 田沼政治と寛政の改革
43. 化政文化と教育・学問
44. 社会変動と天保の改革
45. ロシア・欧米船接近と海防

### D 近現代の地域・日本と世界 — generated

46. 近代への転換：開国と幕末政治
47. 明治維新と新政府
48. 近代国家形成と自由民権運動
49. 大日本帝国憲法と議会政治
50. 条約改正・日清戦争
51. 日露戦争と帝国主義
52. 近代産業・社会・文化
53. 第一次世界大戦と日本
54. 大正デモクラシーと大衆社会
55. 世界恐慌と政党政治の動揺
56. 満州事変から日中戦争
57. アジア太平洋戦争と戦時社会
58. 敗戦・占領と戦後改革
59. 冷戦・講和・国際社会復帰
60. 高度経済成長と社会変容
61. 1970年代以降の経済・政治・社会
62. 冷戦終結とグローバル化
63. 現代日本の課題を歴史的に探究する

## 世界史探究 — ordered production queue

This queue follows the current MEXT `A 世界史へのまなざし` → `B 諸地域の歴史的特質の形成` → `C 諸地域の交流・再編` → `D 諸地域の結合・変容` → `E 地球世界の課題` structure. Broad middle items are split into low-density worksheet units without treating this practical split as an official MEXT sub-item numbering.

### A 世界史へのまなざし — generated

1. 地球環境から見る人類の歴史
2. 日常生活から見る世界の歴史

### B 諸地域の歴史的特質の形成 — generated

3. 諸地域の歴史的特質への問い
4. 農耕・牧畜と古代文明
5. オリエント文明
6. インダス文明
7. 中華文明
8. 東アジアと中央ユーラシア
9. 南アジアと東南アジアの歴史的特質
10. 西アジアと地中海周辺の歴史的特質

### C 諸地域の交流・再編 — generated

11. 諸地域の交流・再編への問い
12. イスラーム世界の拡大と交易
13. モンゴル帝国とユーラシア交流
14. 海域アジアの交易ネットワーク
15. 明・清と東アジアの再編
16. オスマン・サファヴィー・ムガル帝国
17. ルネサンスと宗教改革
18. 大航海時代と大西洋世界
19. 主権国家体制と国際関係

### D 諸地域の結合・変容 — generated

20. 諸地域の結合・変容への問い
21. 産業革命と世界市場
22. アメリカ独立とフランス革命
23. 国民国家と19世紀ヨーロッパ
24. ラテンアメリカ諸国の独立
25. アジア諸地域と欧米列強の進出
26. 帝国主義と列強の世界分割
27. アジア・アフリカの民族運動
28. 第一次世界大戦と総力戦
29. ロシア革命と戦間期の国際秩序
30. 世界恐慌とファシズム
31. 第二次世界大戦と諸地域の変容

### E 地球世界の課題 — generated

32. 国際機構の形成と平和への模索
33. 冷戦と脱植民地化
34. 高度経済成長と南北問題
35. 冷戦終結と地域統合
36. 経済のグローバル化と格差の是正
37. 科学技術の高度化と知識基盤社会
38. 地球世界の課題を歴史的に探究する

## 公共 — ordered production queue

This practical queue follows the current MEXT `A 公共の扉` → `B 自立した主体としてよりよい社会の形成に参画する私たち` → `C 持続可能な社会づくりの主体となる私たち` structure. The B section preserves the curriculum's progression across law, politics/international society, and economy while splitting it into low-density worksheet units.

### A 公共の扉 — generated

1. 公共的な空間を作る私たち — `public-public-space-and-us`
2. 個人の尊厳・自主自律・多様性 — `public-dignity-autonomy-diversity`
3. 幸福・正義・公正 — `public-happiness-justice-fairness`
4. 公共的な空間の基本原理 — `public-basic-principles`

### B 自立した主体としてよりよい社会の形成に参画する私たち — generated

5. 法や規範の意義と役割 — `public-law-norms`
6. 契約と消費者の権利・責任 — `public-contracts-consumer-rights`
7. 司法参加の意義 — `public-judicial-participation`
8. 政治参加と公正な世論の形成 — `public-political-participation-public-opinion`
9. 地方自治 — `public-local-government`
10. 国家主権と領土 — `public-sovereignty-territory`
11. 安全保障・防衛と国際貢献 — `public-security-defense-international-contribution`
12. 職業選択・雇用と労働問題 — `public-career-employment-labor`
13. 財政及び租税の役割 — `public-public-finance-taxation`
14. 少子高齢社会と社会保障 — `public-social-security`
15. 市場経済の機能と限界 — `public-market-economy-function-limits`
16. 金融の働き — `public-finance-money`
17. 経済のグローバル化と相互依存 — `public-economic-globalization-interdependence`

### C 持続可能な社会づくりの主体となる私たち — generated

18. 持続可能な社会づくりの課題探究 — `public-sustainable-society-inquiry`

## 倫理 — ordered production queue

This practical queue follows the current MEXT `A 現代に生きる自己の課題と人間としての在り方生き方` → `B 現代の諸課題と倫理` structure. It splits MEXT's conceptual clusters into low-density worksheet units; the numbering is a factory queue, not official MEXT sub-item numbering.

### A 現代に生きる自己の課題と人間としての在り方生き方 — generated

1. 心の在り方と自己形成 — `ethics-mind-individuality-emotion`
2. 認知と発達 — `ethics-cognition-development`
3. 幸福と愛 — `ethics-happiness-love`
4. 徳とよく生きること — `ethics-virtue-good-life`
5. 宗教の意義 — `ethics-religion-meaning`
6. 芸術の意義 — `ethics-art-meaning`
7. 善と正義 — `ethics-good-justice`
8. 義務と責任 — `ethics-duty-responsibility`
9. 真理と知 — `ethics-truth-knowledge`
10. 存在と世界 — `ethics-existence-world`
11. 先哲の原典を読む — `ethics-reading-primary-thought-sources`
12. 日本の風土と人間観 — `ethics-japan-climate-human-view`
13. 日本の宗教観と外来思想の受容 — `ethics-japan-religion-foreign-thought`
14. 国際社会に生きる日本人としての自覚 — `ethics-japanese-identity-global-society`

### B 現代の諸課題と倫理 — generated

15. 生命と倫理 — `ethics-life-bioethics`
16. 自然・環境と倫理 — `ethics-nature-environment`
17. 科学技術と倫理 — `ethics-science-technology`
18. 福祉と倫理 — `ethics-welfare`
19. 文化・宗教と共生 — `ethics-culture-religion-coexistence`
20. 平和と倫理 — `ethics-peace`

## 政治・経済 — ordered production queue

This practical queue follows the current MEXT `A 現代日本における政治・経済の諸課題` → `B グローバル化する国際社会の諸課題` structure. The split expands the concepts explicitly listed in the commentary into low-density worksheets; numbering is internal factory numbering, not official MEXT sub-item numbering.

### A 現代日本における政治・経済の諸課題

1. 政治と法の意義・機能 — `political-economy-politics-law` — generated
2. 基本的人権と法の支配 — `political-economy-rights-rule-of-law` — generated
3. 権利と義務・私法 — `political-economy-rights-obligations-private-law` — generated
4. 議会制民主主義と政治機構 — `political-economy-parliamentary-democracy` — generated
5. 選挙・政党と政治参加 — `political-economy-elections-parties-participation` — generated
6. 地方自治 — `political-economy-local-autonomy` — generated
7. 経済活動と市場 — `political-economy-market-economic-activity` — generated
8. 経済主体と経済循環 — `political-economy-economic-actors-circular-flow` — generated
9. 国民経済の大きさと経済成長 — `political-economy-gdp-economic-growth` — generated
10. 物価と景気変動 — `political-economy-prices-business-cycle` — generated
11. 財政と租税 — `political-economy-fiscal-tax` — generated
12. 金融の働きと仕組み — `political-economy-finance-system` — generated
13. 市場の機能と限界 — `political-economy-market-failure-environment-consumer` — generated
14. 現代日本の政治・経済課題を探究する — `political-economy-domestic-issues-inquiry` — generated

### B グローバル化する国際社会の諸課題

15. 国際社会の変遷と国際法 — `political-economy-international-society-law`
16. 人権・国家主権・領土 — `political-economy-human-rights-sovereignty-territory`
17. 国際連合と国際機構 — `political-economy-un-international-organizations`
18. 安全保障・防衛と国際貢献 — `political-economy-security-defense-contribution`
19. 貿易の現状と意義 — `political-economy-trade`
20. 為替相場と国際収支 — `political-economy-exchange-balance-payments`
21. 国際協調と国際経済機関 — `political-economy-international-cooperation-economic-institutions`
22. グローバル化する国際社会の課題探究 — `political-economy-global-issues-inquiry`

**Next start:** queue item 15, `political-economy-international-society-law`.

## Per-unit generation acceptance criteria

A unit may enter the pending backlog only when explanation text is concise original wording; core terms are explicit; cloze generation uses only those terms; seeded generation remains reproducible; answer mapping is explicit; A4 density is controlled; image sources/licenses are recorded when used; and the unit remains `pending_factcheck` and unpublished.

## Publication acceptance criteria

A pending unit becomes publishable only after an independent FACTCHECK batch approves every learner sentence, fact, key-point/timeline claim, and image reuse claim. Only then may its status become `verified` and its dataset be added to the public selector.
