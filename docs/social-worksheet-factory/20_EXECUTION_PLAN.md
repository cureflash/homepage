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

### D 諸地域の結合・変容

20. 諸地域の結合・変容への問い — generated
21. 産業革命と世界市場 — generated
22. アメリカ独立とフランス革命 — generated
23. 国民国家と19世紀ヨーロッパ — generated
24. ラテンアメリカ諸国の独立 — generated
25. アジア諸地域と欧米列強の進出 — generated
26. 帝国主義と列強の世界分割 — generated
27. アジア・アフリカの民族運動 — generated
28. 第一次世界大戦と総力戦 — generated
29. ロシア革命と戦間期の国際秩序 — generated
30. 世界恐慌とファシズム — generated
31. 第二次世界大戦と諸地域の変容

### E 地球世界の課題

32. 国際機構の形成と平和への模索
33. 冷戦と脱植民地化
34. 高度経済成長と南北問題
35. 冷戦終結と地域統合
36. 経済のグローバル化と格差の是正
37. 科学技術の高度化と知識基盤社会
38. 地球世界の課題を歴史的に探究する

**Next start:** queue item 31, `world-history-wwii-regional-transformation`.

## High-school production order after 世界史探究

1. `公共`

Before reaching `公共`, expand its detailed ordered queue from the current MEXT curriculum/commentary; queue planning does not count as generated units. Later expansion of 倫理 / 政治・経済 is allowed only after the core sequence.

## Per-unit generation acceptance criteria

A unit may enter the pending backlog only when explanation text is concise original wording; core terms are explicit; cloze generation uses only those terms; seeded generation remains reproducible; answer mapping is explicit; A4 density is controlled; image sources/licenses are recorded when used; and the unit remains `pending_factcheck` and unpublished.

## Publication acceptance criteria

A pending unit becomes publishable only after an independent FACTCHECK batch approves every learner sentence, fact, key-point/timeline claim, and image reuse claim. Only then may its status become `verified` and its dataset be added to the public selector.
