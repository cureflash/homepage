# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal scheduled target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 21 units
- Next generation start: high-school `歴史総合` — B 近代化と私たち（1）近代化への問い
- Public `subjects/social/worksheets/index.html` remains verified-only; none of the pending units were registered there.

## Completed GENERATE batch — 10 units

This run completed the eight remaining junior-high civics units, expanded the current MEXT `歴史総合` course structure into a fixed ordered queue, and generated the first two units from that queue. Every new fact and learner-facing claim remains `pending_factcheck`; none is public.

### Junior-high civics — 8 units

1. `subjects/social/worksheets/data/civics-elections-political-participation.js`
   - elections, voting principles, electoral systems and political participation
2. `subjects/social/worksheets/data/civics-local-government.js`
   - local public bodies, ordinances, mayors/governors and direct requests
3. `subjects/social/worksheets/data/civics-market-economy-firms-labor.js`
   - demand and supply, market economy, competition law and labor rights
4. `subjects/social/worksheets/data/civics-money-finance.js`
   - money, financial intermediation, the Bank of Japan and monetary policy
5. `subjects/social/worksheets/data/civics-public-finance-taxation.js`
   - public finance, revenue/expenditure, government bonds and taxation
6. `subjects/social/worksheets/data/civics-social-security.js`
   - social insurance, public assistance, the right to maintain minimum standards of wholesome and cultured living, and population aging
7. `subjects/social/worksheets/data/civics-international-society-un.js`
   - the United Nations, General Assembly, Security Council and international cooperation
8. `subjects/social/worksheets/data/civics-cumulative-review.js`
   - cumulative review across constitutional government, politics, economics, social security and international society

### High-school History Comprehensive — 2 units

9. `subjects/social/worksheets/data/history-comprehensive-history-and-us.js`
   - formal course: `歴史総合`
   - curriculum item: A 歴史の扉（1）歴史と私たち
   - retains `formalCourse: "歴史総合"` separately from `practicalGradeGroup`
10. `subjects/social/worksheets/data/history-comprehensive-history-and-sources.js`
    - formal course: `歴史総合`
    - curriculum item: A 歴史の扉（2）歴史の特質と資料
    - focuses on the relationship between historical sources and historical narratives

No external images were added. These institutional and introductory units were kept intentionally low-density, and no image was included merely to fill space.

## Batch scale and validation

Across the ten generated units:

- 49 structured fact records
- 58 concise learner sentences
- 0 image records
- all unit, fact and sentence statuses are `pending_factcheck`
- all sentence source references resolve to a source record in the same unit
- every cloze term maps to an explicit `{{term}}` placeholder
- all ten JavaScript files pass `node --check`
- the public selector loads 13 datasets, and all 13 are `verified`
- no pending dataset was added to the public selector

The shared cloze implementation was unchanged. Seeded selection therefore continues to use the existing deterministic generator, and only explicit `terms` entries are eligible as blanks.

## Generation-stage evidence used

The generation pass used current curriculum material and primary/official sources. These records are candidate evidence only; a future FACTCHECK batch must reopen each source independently and must not approve a claim merely because it is cited here.

### Curriculum

- MEXT, current junior-high Social Studies commentary: `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
- MEXT, current high-school Geography/History commentary: `https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf`

The `歴史総合` queue in `20_EXECUTION_PLAN.md` now follows all 14 current curriculum subitems in order: A(1)–A(2), B(1)–B(4), C(1)–C(4), and D(1)–D(4). The first two are generated; the exact next item is B(1).

### Civics institutions and law

- Constitution text from the House of Representatives
- election and local-government material from the Ministry of Internal Affairs and Communications
- Local Autonomy Act, Labor Standards Act and Public Assistance Act from e-Gov
- competition material from the Japan Fair Trade Commission
- monetary-policy and central-bank material from the Bank of Japan
- financial education from the Financial Services Agency
- budget and taxation material from the Ministry of Finance and National Tax Agency
- social-security material from the Ministry of Health, Labour and Welfare
- United Nations material from the Ministry of Foreign Affairs and the United Nations

All recorded source URLs were probed during generation. Official pages that reject automated requests with HTTP 403 remain provisional records and must be opened manually during independent fact-checking; this generation run did not treat URL reachability as factual approval.

## Accumulated unverified backlog — 21 units

1. `imperialism-sino-japanese-russo-japanese-wars`
2. `taisho-democracy-interwar-japan`
3. `asia-pacific-war`
4. `postwar-japan`
5. `contemporary-japan-cumulative-review`
6. `constitution-constitutionalism`
7. `fundamental-human-rights`
8. `diet`
9. `cabinet`
10. `courts`
11. `separation-of-powers`
12. `elections-political-participation`
13. `local-government`
14. `market-economy-firms-labor`
15. `money-finance`
16. `public-finance-taxation`
17. `social-security`
18. `international-society-un`
19. `civics-cumulative-review`
20. `history-comprehensive-history-and-us`
21. `history-comprehensive-history-and-sources`

Do not automatically fact-check this backlog on the next scheduled run.

## Exact next starting point

Remain in GENERATE BACKLOG mode and continue the recorded `歴史総合` queue at item 3:

1. B 近代化と私たち（1）近代化への問い
2. B 近代化と私たち（2）結び付く世界と日本の開国
3. B 近代化と私たち（3）国民国家と明治維新
4. B 近代化と私たち（4）近代化と現代的な諸課題
5. C 国際秩序の変化や大衆化と私たち（1）国際秩序の変化や大衆化への問い
6. C 国際秩序の変化や大衆化と私たち（2）第一次世界大戦と大衆社会
7. C 国際秩序の変化や大衆化と私たち（3）経済危機と第二次世界大戦
8. C 国際秩序の変化や大衆化と私たち（4）国際秩序の変化や大衆化と現代的な諸課題
9. D グローバル化と私たち（1）グローバル化への問い
10. D グローバル化と私たち（2）冷戦と世界経済

That is the next normal ten-unit batch. Keep all newly generated material pending and outside the public selector. After that batch, continue with D(3) and D(4), then expand `日本史探究` from the current MEXT curriculum before generating it. Keep the formal course name separate from any practical site grouping and do not assign it to a fixed school year.
