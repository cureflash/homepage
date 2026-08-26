# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 21 units
- Junior-high history generation queue: complete
- Junior-high civics generation queue: complete
- Current high-school course: `歴史総合`
- Next generation start: B(1) `近代化への問い`
- Public `subjects/social/worksheets/index.html` remains verified-only; none of the pending units below are registered there.

## Completed GENERATE batch — 10 units

This batch completed the remaining eight junior-high civics units and the first two `歴史総合` units. All new content remains `pending_factcheck` and learner-facing publication was not changed.

During reconciliation, the eight civics files and the first `歴史総合` file had already reached latest `main` while `STATUS.json` was still behind. They were treated as completed generated artifacts rather than duplicated. The second `歴史総合` unit and canonical queue/state updates were then added on top of latest `main`.

### Junior-high civics — remaining 8 units

1. `subjects/social/worksheets/data/civics-elections-political-participation.js`
   - Elections and political participation
   - election principles, voting, political parties and participation

2. `subjects/social/worksheets/data/civics-local-government.js`
   - Local government
   - local autonomy, assemblies, governors/mayors and resident participation

3. `subjects/social/worksheets/data/civics-market-economy-firms-labor.js`
   - Market economy / firms / labor
   - prices, firms, households and labor-related foundations

4. `subjects/social/worksheets/data/civics-money-finance.js`
   - Money / finance
   - money functions, financial intermediation, Bank of Japan and monetary policy

5. `subjects/social/worksheets/data/civics-public-finance-taxation.js`
   - Public finance / taxation
   - revenue/expenditure, taxes, government bonds and public services

6. `subjects/social/worksheets/data/civics-social-security.js`
   - Social security
   - social insurance, public assistance, right to maintain minimum standards of wholesome and cultured living, demographic change

7. `subjects/social/worksheets/data/civics-international-society-un.js`
   - International society / United Nations
   - international cooperation, UN organs and Japan's participation

8. `subjects/social/worksheets/data/civics-cumulative-review.js`
   - Junior-high civics cumulative review
   - constitution, politics, economy, social security and international society

### High-school `歴史総合` — first 2 units

9. `subjects/social/worksheets/data/history-comprehensive-history-and-us.js`
   - formal course: `歴史総合`
   - formal placement: A `歴史の扉` (1) `歴史と私たち`
   - focuses on connections between everyday/local phenomena and Japanese/world history

10. `subjects/social/worksheets/data/history-comprehensive-characteristics-sources.js`
    - formal course: `歴史総合`
    - formal placement: A `歴史の扉` (2) `歴史の特質と資料`
    - focuses on historical sources, comparison of sources and source-based historical narration

Both high-school units intentionally omit a fixed school-year assignment. `formalCourse: 歴史総合` is stored separately from the practical site grouping.

## `歴史総合` curriculum queue established

`docs/social-worksheet-factory/20_EXECUTION_PLAN.md` now contains an explicit ordered `歴史総合` production queue grounded in the current MEXT High School Course of Study Commentary for Geography and History.

The formal large-section order is preserved:

- A `歴史の扉`
- B `近代化と私たち`
- C `国際秩序の変化や大衆化と私たち`
- D `グローバル化と私たち`

The worksheet queue splits several broad MEXT middle sections into smaller `-a/-b` production units only to keep A4 sheets low-density. Every generated dataset must retain the corresponding formal MEXT placement so this split never becomes a false curriculum structure.

MEXT evidence used to establish the queue:

- 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』
  - `https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf`
  - describes `歴史総合` as a common compulsory course examining modern/contemporary history related to present-day issues;
  - specifies the four large sections above and their order;
  - B(1) is `近代化への問い`, B(2) `結び付く世界と日本の開国`, B(3) `国民国家と明治維新`, B(4) `近代化と現代的な諸課題`.

Generation-stage evidence is not factual approval. A later FACTCHECK batch must reopen these materials independently.

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
21. `history-comprehensive-characteristics-sources`

Do not automatically fact-check this backlog on the next run.

## Publication / validation state

`subjects/social/worksheets/index.html` was re-read after reconciliation and still loads only verified datasets through `meiji-state-industrialization.js`. Pending junior-high history, civics and high-school units are therefore not publicly registered.

No AI-generated historical image was introduced in this batch. The two introductory `歴史総合` units intentionally contain no external image because their focus is historical method/source literacy rather than a particular event; future source-based worksheets may add concrete documents/images where they materially improve learning.

The connector execution path does not provide a local checkout, so a batch-wide local `node --check` was not run here. The later FACTCHECK/publication pass must perform syntax/runtime validation where available before any pending dataset is registered publicly.

## Exact next starting point

Remain in GENERATE BACKLOG mode and continue `歴史総合` from item 3 of the newly recorded queue.

Next ten targets, in order:

1. B(1) 近代化への問い
2. B(2)-a 18世紀のアジアの経済と社会
3. B(2)-b 産業革命・世界市場・中国の開港・日本の開国
4. B(3) 国民国家と明治維新
5. B(4) 近代化と現代的な諸課題
6. C(1) 国際秩序の変化や大衆化への問い
7. C(2)-a 第一次世界大戦と国際協調体制
8. C(2)-b 大衆社会の形成と社会参加の拡大
9. C(3)-a 世界恐慌・国際協調体制の動揺
10. C(3)-b 第二次世界大戦と戦後国際秩序

Every new unit must remain `pending_factcheck`, retain `formalCourse: 歴史総合`, stay out of the public selector, and be appended to the backlog. After that batch, continue with C(4) and then D in the recorded queue unless the user explicitly requests a FACTCHECK batch.
