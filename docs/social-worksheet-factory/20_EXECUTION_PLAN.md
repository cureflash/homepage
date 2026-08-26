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

Production order after junior-high history/civics generation coverage:

1. 歴史総合
2. 日本史探究
3. 世界史探究
4. 公共

Do not falsely map a formal high-school course to one fixed school year. Store `formalCourse` separately from any practical site grouping.

### 歴史総合 — ordered production queue

This queue follows the current MEXT High School Course of Study Commentary for Geography and History. Preserve the four formal large sections and their order: A `歴史の扉`, B `近代化と私たち`, C `国際秩序の変化や大衆化と私たち`, D `グローバル化と私たち`.

- [x] A(1) 歴史と私たち — generated / pending fact-check
- [x] A(2) 歴史の特質と資料 — generated / pending fact-check
- [x] B(1) 近代化への問い — generated / pending fact-check
- [x] B(2)-a 18世紀のアジアの経済と社会 — generated / pending fact-check
- [x] B(2)-b 産業革命・世界市場・中国の開港・日本の開国 — generated / pending fact-check
- [x] B(3) 国民国家と明治維新 — generated / pending fact-check
- [x] B(4) 近代化と現代的な諸課題 — generated / pending fact-check
- [x] C(1) 国際秩序の変化や大衆化への問い — generated / pending fact-check
- [x] C(2)-a 第一次世界大戦と国際協調体制 — generated / pending fact-check
- [x] C(2)-b 大衆社会の形成と社会参加の拡大 — generated / pending fact-check
- [x] C(3)-a 世界恐慌・国際協調体制の動揺 — generated / pending fact-check
- [x] C(3)-b 第二次世界大戦と戦後国際秩序 — generated / pending fact-check
- [ ] C(4) 国際秩序の変化や大衆化と現代的な諸課題 — exact next generation start
- [ ] D(1) グローバル化への問い
- [ ] D(2)-a 冷戦と植民地独立
- [ ] D(2)-b 高度経済成長・国際秩序の変容
- [ ] D(3)-a 冷戦終結・地域統合
- [ ] D(3)-b 市場経済の変容・情報通信・グローバル化
- [ ] D(4) 現代的な諸課題の形成と展望

The split of some MEXT middle sections into `-a/-b` production units is only a worksheet-density decision. Keep the formal MEXT large/middle-section metadata on every dataset so the curriculum structure is never obscured.

### 日本史探究 / 世界史探究 / 公共

Before production reaches each formal course, expand it into an ordered unit queue grounded in the current MEXT curriculum/commentary, just as above. Do not infer a fixed grade assignment.

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
