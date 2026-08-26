# Social Studies Worksheet Factory — execution plan

## Phase 0 — foundation

- [x] Define structured sentence/cloze model.
- [x] Define non-AI historical image rule and license tracking.
- [x] Create first junior-high history prototype unit: Jomon / Yayoi overview.
- [x] Independently fact-check and publish the first prototype.
- [x] Establish verified-only publication.
- [x] Replace per-unit GENERATE/FACTCHECK alternation with high-volume generation backlog mode.

## Throughput policy

Normal scheduled runs are GENERATE runs.

- Target: **10 newly generated units per run**.
- Preserve the production order below; crossing a field/stage boundary within a ten-unit batch is allowed when necessary.
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

The explanation sheet/data definition comes first for every unit. Cloze generation uses the same structured facts. Independent fact-check and learner-facing publication may occur later in a large backlog batch.

## Junior-high civics queue

After junior-high history generation reaches the end of its queue, continue directly into civics generation even if history has pending fact-check backlog.

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

## High-school queue

After junior-high history/civics generation coverage:

### 歴史総合

The ordered unit queue follows the current MEXT high-school Geography/History curriculum and commentary. Keep `formalCourse: "歴史総合"` separate from practical site grouping, and do not assign the course to a fixed school year.

1. A 歴史の扉（1）歴史と私たち
2. A 歴史の扉（2）歴史の特質と資料
3. B 近代化と私たち（1）近代化への問い
4. B 近代化と私たち（2）結び付く世界と日本の開国
5. B 近代化と私たち（3）国民国家と明治維新
6. B 近代化と私たち（4）近代化と現代的な諸課題
7. C 国際秩序の変化や大衆化と私たち（1）国際秩序の変化や大衆化への問い
8. C 国際秩序の変化や大衆化と私たち（2）第一次世界大戦と大衆社会
9. C 国際秩序の変化や大衆化と私たち（3）経済危機と第二次世界大戦
10. C 国際秩序の変化や大衆化と私たち（4）国際秩序の変化や大衆化と現代的な諸課題
11. D グローバル化と私たち（1）グローバル化への問い
12. D グローバル化と私たち（2）冷戦と世界経済
13. D グローバル化と私たち（3）世界秩序の変容と日本
14. D グローバル化と私たち（4）現代的な諸課題の形成と展望

Queue basis: 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』, `https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf`.

### Later high-school courses

1. 日本史探究
2. 世界史探究
3. 公共

Before high-school production, expand each formal course into an ordered unit queue grounded in current MEXT curriculum organization. Do not falsely map formal high-school courses to one fixed school year.

Later expansion of 倫理 / 政治・経済 is allowed only after the above core sequence.

## Per-unit generation acceptance criteria

A unit may enter the pending backlog only when:

- explanation sheet text uses concise original wording derived from facts, not copied textbook prose;
- core terms are explicit and render in red in study mode;
- useful non-generated historical-source images are included where appropriate;
- generation-stage image source/license metadata is recorded;
- cloze worksheet is generated from explicit core terms only;
- seeded generation remains reproducible;
- answer view maps to the explicit blank targets;
- print layout remains intentionally low-density and suitable for A4;
- the unit is clearly marked `pending_factcheck` and is not publicly registered.

## Publication acceptance criteria

A pending unit becomes publishable only after an independent FACTCHECK batch has approved every learner sentence, key-point/timeline claim, and image reuse claim. Only then may its status become `verified` and its dataset be added to the public selector.
