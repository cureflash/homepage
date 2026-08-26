# Social Studies Worksheet Factory — execution plan

## Phase 0 — foundation

- [x] Define structured sentence/cloze model.
- [x] Define non-AI historical image rule and license tracking.
- [x] Create first junior-high history prototype unit: Jomon / Yayoi overview.
- [x] Independently fact-check and publish the first prototype.
- [x] Establish verified-only publication.
- [x] Replace per-unit GENERATE/FACTCHECK alternation with high-volume generation backlog mode.
- [x] Raise normal generation throughput to 20 units per run.

## Throughput policy

Normal scheduled runs are GENERATE runs.

- Target: **20 newly generated sequential units per run**.
- Preserve the production order below; crossing a field/course/stage boundary within a twenty-unit batch is expected when necessary.
- If a high-school course queue has not yet been expanded, define it from current MEXT curriculum/commentary and continue generating in the same run.
- Queue planning does not count toward the 20 generated-unit target.
- Every new unit remains `pending_factcheck` and is appended to `STATUS.json.unverified_backlog`.
- Pending units stay out of the public selector.
- Do not automatically fact-check after generation.
- Independent FACTCHECK is a later explicit backlog operation requested by the user or a deliberate state switch.
- When fact-checking is requested, verify as many pending units as can be safely handled in one batch and publish only those that pass.

## Junior-high history queue

1. Jomon / Yayoi overview
2. Yayoi society, small states, Yamatai / Himiko
3. Kofun period and Yamato polity
4. Asuka reforms and ritsuryo formation
5. Nara period
6. Heian period
7. Kamakura period
8. Muromachi period
9. Sengoku / Azuchi-Momoyama
10. Edo political system and society
11. Edo economy / culture / foreign relations
12. Bakumatsu and Meiji Restoration
13. Meiji state / industrialization
14. Imperialism / Sino-Japanese and Russo-Japanese wars
15. Taisho democracy / interwar Japan
16. Asia-Pacific War
17. Postwar Japan
18. Contemporary Japan and cumulative review

## Junior-high civics queue

1. Constitution and constitutionalism
2. Fundamental human rights
3. Diet
4. Cabinet
5. Courts
6. Separation of powers
7. Elections and political participation
8. Local government
9. Market economy / firms / labor
10. Money / finance
11. Public finance / taxation
12. Social security
13. International society / United Nations
14. Cumulative review

## High-school production order

1. `歴史総合`
2. `日本史探究`
3. `世界史探究`
4. `公共`

Do not falsely map a formal high-school course to one fixed school year. Store `formalCourse` separately from practical grouping.

### 歴史総合 — ordered production queue

Preserve the formal MEXT large-section order A `歴史の扉`, B `近代化と私たち`, C `国際秩序の変化や大衆化と私たち`, D `グローバル化と私たち`.

1. A(1) 歴史と私たち
2. A(2) 歴史の特質と資料
3. B(1) 近代化への問い
4. B(2)-a 18世紀のアジアの経済と社会
5. B(2)-b 産業革命・世界市場・中国の開港・日本の開国
6. B(3) 国民国家と明治維新
7. B(4) 近代化と現代的な諸課題
8. C(1) 国際秩序の変化や大衆化への問い
9. C(2)-a 第一次世界大戦と国際協調体制
10. C(2)-b 大衆社会の形成と社会参加の拡大
11. C(3)-a 世界恐慌・国際協調体制の動揺
12. C(3)-b 第二次世界大戦と戦後国際秩序
13. C(4) 国際秩序の変化や大衆化と現代的な諸課題
14. D(1) グローバル化への問い
15. D(2)-a 冷戦と植民地独立
16. D(2)-b 高度経済成長・国際秩序の変容
17. D(3)-a 冷戦終結・地域統合
18. D(3)-b 市場経済の変容・情報通信・グローバル化
19. D(4) 現代的な諸課題の形成と展望

The `-a/-b` splits are worksheet-density choices. Retain formal MEXT placement metadata in every dataset.

### 日本史探究 — ordered production queue

This queue follows the current MEXT High School Course of Study Commentary order A → B → C → D. The `-a/-b` and numbered splits are worksheet-density choices; every dataset must retain its formal MEXT parent in `formalSection`, `formalSubsection`, and `formalPlacement`.

1. A(1)-a 旧石器文化から縄文文化へ
2. A(1)-b 弥生文化と農耕社会
3. A(2) 歴史資料と原始・古代の展望
4. A(3)-a-1 小国の形成と東アジア交流
5. A(3)-a-2 古墳文化と大和政権
6. A(3)-a-3 律令国家の形成と飛鳥文化
7. A(3)-a-4 奈良時代の国家と天平文化
8. A(3)-b-1 平安初期の政治と東アジア
9. A(3)-b-2 摂関政治と国風文化
10. A(3)-b-3 地方支配の変化・荘園・武士
11. B(1) 中世への転換と歴史的環境
12. B(2) 歴史資料と中世の展望
13. B(3)-a-1 鎌倉幕府の成立と公武関係
14. B(3)-a-2 元寇とユーラシア交流
15. B(3)-a-3 中世の産業・宗教・文化
16. B(3)-b-1 室町幕府と地域権力
17. B(3)-b-2 日明貿易・琉球王国・アイヌ
18. B(3)-b-3 自立する村落・都市と中世文化
19. C(1) 近世への転換と歴史的環境
20. C(2) 歴史資料と近世の展望
21. C(3)-a-1 幕藩体制と身分秩序
22. C(3)-a-2 貿易統制と近世の対外関係
23. C(3)-a-3 技術・開発・交通と学問文化
24. C(3)-b-1 産業発達と都市・農村の変化
25. C(3)-b-2 幕政改革・飢饉・一揆と国際情勢
26. C(3)-b-3 学問・教育と庶民文化
27. D(1) 近代への転換と歴史的環境
28. D(2) 歴史資料と近代の展望
29. D(3)-a-1 明治維新と国民国家の形成
30. D(3)-a-2 立憲体制・対外戦争と第一次世界大戦
31. D(3)-b-1 文明開化・産業革命と交通
32. D(3)-b-2 教育・社会問題と大衆社会
33. D(3)-c-1 恐慌・政党政治と軍部の台頭
34. D(3)-c-2 戦時体制と第二次世界大戦
35. D(3)-d-1 占領・戦後改革と日本国憲法
36. D(3)-d-2 独立回復・経済復興と高度経済成長
37. D(3)-d-3 国際化・情報化と現代日本
38. D(3)-e 近現代の画期と構造の総括
39. D(4) 現代の日本の課題の探究

### 世界史探究 / 公共

Before production reaches each remaining formal course, expand it into an ordered unit queue grounded in the current MEXT curriculum/commentary. This queue-definition work is mandatory but does not count as one of the 20 worksheet units for the run. Then continue generating until the run reaches 20 units or a real blocker occurs.

Later expansion of 倫理 / 政治・経済 is allowed only after the core sequence above.

## Per-unit generation acceptance criteria

A unit may enter the pending backlog only when:

- explanation-sheet text uses concise original wording derived from facts, not copied textbook prose;
- core terms are explicit and can render red in study mode;
- useful non-generated source images are included where they materially help;
- generation-stage image source/license metadata is recorded;
- cloze generation uses explicit core terms only;
- seeded generation remains reproducible;
- answer view maps to the explicit blank targets;
- A4 information density remains controlled;
- the unit is clearly `pending_factcheck` and is not publicly registered.

## Publication acceptance criteria

A pending unit becomes publishable only after an independent FACTCHECK batch approves every learner sentence, fact, key-point/timeline claim, and image reuse claim. Only then may its status become `verified` and its dataset be added to the public selector.
