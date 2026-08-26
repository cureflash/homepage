# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: **20 newly generated units per run**
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: **51 units**
- Junior-high history generation queue: complete
- Junior-high civics generation queue: complete
- `歴史総合` generation queue: complete
- Current high-school course: `日本史探究`
- Next generation start: B `中世の日本と世界`, first worksheet `japanese-history-medieval-transition`
- Public selector remains verified-only; pending datasets must not be registered there.

## Latest completed GENERATE batch — 20 units

This run completed the required 20 sequential units: the final seven `歴史総合` worksheets followed immediately by the first thirteen `日本史探究` worksheets.

### Final 7 歴史総合

1. `history-comprehensive-massification-contemporary-issues`
2. `history-comprehensive-globalization-questions`
3. `history-comprehensive-cold-war-decolonization`
4. `history-comprehensive-high-growth-order-change`
5. `history-comprehensive-cold-war-end-regional-integration`
6. `history-comprehensive-market-information-globalization`
7. `history-comprehensive-contemporary-issues-outlook`

### First 13 日本史探究

8. `japanese-history-paleolithic-environment`
9. `japanese-history-jomon-society`
10. `japanese-history-yayoi-agriculture`
11. `japanese-history-yayoi-polities-exchange`
12. `japanese-history-kofun-yamato`
13. `japanese-history-ancient-sources-outlook`
14. `japanese-history-asuka-state-formation`
15. `japanese-history-ritsuryo-state`
16. `japanese-history-nara-government-society`
17. `japanese-history-tenpyo-culture-east-asia`
18. `japanese-history-early-heian-rule`
19. `japanese-history-sekkan-politics`
20. `japanese-history-shoen-warrior-rise`

All 20 remain `pending_factcheck`. None were added to the learner-facing selector. No independent FACTCHECK was performed.

## 日本史探究 queue

`20_EXECUTION_PLAN.md` now contains the ordered 63-unit worksheet queue for `日本史探究`, grounded in the current MEXT section structure A `原始・古代の日本と東アジア`, B `中世の日本と世界`, C `近世の日本と世界`, D `近現代の地域・日本と世界`. The first 13 A-section worksheets are generated. Continue with B item 14.

The A-section split intentionally keeps formal MEXT parent metadata while using smaller low-density worksheet units. The generated files use `formalCourse: 日本史探究` and `formalPlacement` for the corresponding A(1), A(2), or A(3) parent.

## Backlog / publication state

- Previous pending backlog: 31
- Newly generated: 20
- Current pending backlog: 51
- Verified-through marker remains `meiji-state-industrialization`
- `subjects/social/worksheets/index.html` was deliberately not changed.

## Generation-stage evidence

Primary curriculum anchor: 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』. The current commentary identifies `日本史探究` as a course building on `歴史総合`, and its A-section contains (1) 黎明期の日本列島と歴史的環境, (2) 歴史資料と原始・古代の展望, and the subsequent ancient-state/social development study. The B/C/D large-section order is preserved in the execution queue.

These sources support generation-stage placement only. Every factual sentence and any future image reuse still requires an independent later FACTCHECK batch before publication.

## Exact next run

Start at `日本史探究` B `中世の日本と世界` and target the next 20 queue items, beginning with:

1. 中世への転換：院政・武士の政治進出
2. 中世への転換：土地支配の変容
3. 歴史資料と中世の展望
4. 鎌倉幕府の成立と公武関係
5. 御家人制と土地支配
6. 宋との交流と中世経済
7. 元寇と鎌倉幕府の変容
8. 鎌倉新仏教と中世文化
9. 建武政権・南北朝内乱
10. 室町幕府と守護大名
11. 日明貿易と東アジア
12. 琉球王国と列島周辺の交流
13. 農業・商工業・流通の発達
14. 村落・都市の自立
15. 応仁の乱と戦国大名
16. 室町文化・地域文化・文化の融合
17. 近世への転換：戦国社会と統一
18. ヨーロッパ人来航と世界の結び付き
19. 歴史資料と近世の展望
20. 織豊政権と統一事業

Continue across the B→C boundary as shown; do not stop at the course subsection boundary merely because B completes.

## Generator / validation discipline

- Only explicit `terms` may become blanks.
- Seeded generation must remain deterministic.
- Explanation sheets stay low-density and A4-oriented.
- Use real historical/official source images where useful; never AI-generated historical images.
- Record generation-stage image source/license candidates, then independently recheck them before publication.
- Reconcile latest `main` before shared writes.
- Before ending every run, update `STATUS.json` and this handoff with generated unit list, backlog count, and exact next ungenerated curriculum item.
