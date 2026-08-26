# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: **20 newly generated units per run**
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 51 units
- Junior-high history generation queue: complete
- Junior-high civics generation queue: complete
- `歴史総合` generation queue: complete
- Current high-school course: `日本史探究`
- `日本史探究` ordered production queue: recorded in `20_EXECUTION_PLAN.md`
- Next generation start: B(3)-a-2 `元寇とユーラシア交流` — `japanese-history-inquiry-mongol-invasions-eurasian-exchange`
- Public selector remains verified-only; pending datasets must not be registered there.

## Throughput policy — 20 units per run

The previous 10-unit target is retired. Normal scheduled runs now target **20 sequential generated worksheet units**.

Rules:

1. Resume from the first ungenerated curriculum item.
2. Generate 20 new units before ending a normal run whenever there is no genuine blocker.
3. Crossing a course or school-stage boundary is expected when needed to reach 20.
4. If the next high-school formal course does not yet have a detailed production queue, expand that queue first from current MEXT curriculum/commentary, then continue generation in the same run.
5. Queue planning does **not** count as one of the 20 worksheet units.
6. Keep every new fact, sentence, key-point/timeline claim and image record `pending_factcheck`.
7. Append new unit IDs to `STATUS.json.unverified_backlog`.
8. Do not add pending units to the public selector.
9. Do not automatically FACTCHECK; independent verification remains a later explicit batch.
10. Only a real technical/source blocker justifies stopping below 20, and the blocker must be written precisely into this handoff.

## Latest completed GENERATE batch — 20 units

The current worktree contains these newly generated units. They are all `pending_factcheck`; do not duplicate them. The seven `歴史総合` units finish that course's generation queue, followed by the first thirteen sequential `日本史探究` units.

1. 歴史総合 C(4) `国際秩序・大衆化と現代的な諸課題` — `history-comprehensive-massification-contemporary-issues`
2. 歴史総合 D(1) `グローバル化への問い` — `history-comprehensive-globalization-questions`
3. 歴史総合 D(2)-a `冷戦と植民地独立` — `history-comprehensive-cold-war-decolonization`
4. 歴史総合 D(2)-b `高度経済成長と国際秩序の変容` — `history-comprehensive-high-growth-order-transformation`
5. 歴史総合 D(3)-a `冷戦終結と地域統合` — `history-comprehensive-cold-war-end-regional-integration`
6. 歴史総合 D(3)-b `市場経済・情報通信とグローバル化` — `history-comprehensive-market-information-globalization`
7. 歴史総合 D(4) `現代的な諸課題の形成と展望` — `history-comprehensive-contemporary-issues-outlook`
8. 日本史探究 A(1)-a `旧石器文化から縄文文化へ` — `japanese-history-inquiry-paleolithic-jomon`
9. 日本史探究 A(1)-b `弥生文化と農耕社会` — `japanese-history-inquiry-yayoi-agrarian-society`
10. 日本史探究 A(2) `歴史資料と原始・古代の展望` — `japanese-history-inquiry-ancient-source-outlook`
11. 日本史探究 A(3)-a-1 `小国の形成と東アジア交流` — `japanese-history-inquiry-small-states-east-asia`
12. 日本史探究 A(3)-a-2 `古墳文化と大和政権` — `japanese-history-inquiry-kofun-yamato-polity`
13. 日本史探究 A(3)-a-3 `律令国家の形成と飛鳥文化` — `japanese-history-inquiry-ritsuryo-formation-asuka`
14. 日本史探究 A(3)-a-4 `奈良時代の国家と天平文化` — `japanese-history-inquiry-nara-state-tenpyo`
15. 日本史探究 A(3)-b-1 `平安初期の政治と東アジア` — `japanese-history-inquiry-early-heian-politics-east-asia`
16. 日本史探究 A(3)-b-2 `摂関政治と国風文化` — `japanese-history-inquiry-regency-kokufu-culture`
17. 日本史探究 A(3)-b-3 `地方支配の変化・荘園・武士` — `japanese-history-inquiry-estates-warriors`
18. 日本史探究 B(1) `中世への転換と歴史的環境` — `japanese-history-inquiry-medieval-transition`
19. 日本史探究 B(2) `歴史資料と中世の展望` — `japanese-history-inquiry-medieval-source-outlook`
20. 日本史探究 B(3)-a-1 `鎌倉幕府の成立と公武関係` — `japanese-history-inquiry-kamakura-shogunate-relations`

Generation-stage validation passed for all twenty datasets: JavaScript evaluation, required metadata, unique IDs, source-reference integrity, explicit term/template matching, pending flags for unit/key point/timeline/facts/sentences, low-density shape, deterministic seeded blank selection, and absence from the public selector. Source candidates use MEXT and other public/official institutions; exact claim and reuse verification remains deferred to FACTCHECK.

## Exact next 20-unit run

Continue at queue item 14 and generate items 14 through 33, in this exact order:

1. B(3)-a-2 元寇とユーラシア交流
2. B(3)-a-3 中世の産業・宗教・文化
3. B(3)-b-1 室町幕府と地域権力
4. B(3)-b-2 日明貿易・琉球王国・アイヌ
5. B(3)-b-3 自立する村落・都市と中世文化
6. C(1) 近世への転換と歴史的環境
7. C(2) 歴史資料と近世の展望
8. C(3)-a-1 幕藩体制と身分秩序
9. C(3)-a-2 貿易統制と近世の対外関係
10. C(3)-a-3 技術・開発・交通と学問文化
11. C(3)-b-1 産業発達と都市・農村の変化
12. C(3)-b-2 幕政改革・飢饉・一揆と国際情勢
13. C(3)-b-3 学問・教育と庶民文化
14. D(1) 近代への転換と歴史的環境
15. D(2) 歴史資料と近代の展望
16. D(3)-a-1 明治維新と国民国家の形成
17. D(3)-a-2 立憲体制・対外戦争と第一次世界大戦
18. D(3)-b-1 文明開化・産業革命と交通
19. D(3)-b-2 教育・社会問題と大衆社会
20. D(3)-c-1 恐慌・政党政治と軍部の台頭

Keep `formalCourse: 日本史探究`, preserve the formal MEXT parent placement, and do not assign the course to a fixed school year.

## Backlog expectation

Current backlog: 51 units. If the next 20-unit run completes before any explicit FACTCHECK, expected backlog becomes 71 units.

All new material remains `pending_factcheck`. Later, when the user requests FACTCHECK, independently reopen MEXT and authoritative primary/curatorial/government sources, verify exact image provenance/licenses, correct or reject unsupported claims, and publish only units that pass.

## Generator / validation discipline

- Only explicit `terms` may become blanks.
- Seeded generation must remain deterministic.
- Explanation sheets stay low-density and A4-oriented.
- Use real historical/official source images where useful; never AI-generated historical images.
- Record generation-stage image source/license candidates, then independently recheck them before publication.
- Reconcile latest `main` before shared writes.
- Before ending every run, update `STATUS.json` and this handoff with the generated unit list, backlog count and exact next ungenerated curriculum item.

## Commit state

The repository is on `main`. This sandbox exposes `.git` as read-only, so the completed changes are intentionally left uncommitted for the parent runner to commit and push safely.
