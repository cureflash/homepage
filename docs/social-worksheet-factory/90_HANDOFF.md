# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal scheduled target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 11 units
- Next generation start: junior-high civics — Elections and political participation
- Public `subjects/social/worksheets/index.html` remains verified-only; none of the pending units below were registered there.

## Completed GENERATE batch — 10 new units

This run completed the requested ten-unit throughput batch. Every new fact, learner sentence, key-point/timeline claim and image record remains `pending_factcheck`. No content from this batch is learner-facing yet.

### Junior-high history — 4 units

1. `subjects/social/worksheets/data/taisho-democracy-interwar-japan.js`
   - Taisho democracy / interwar Japan
   - core terms include 大正デモクラシー, 米騒動, 原敬, 普通選挙法, 治安維持法, 世界恐慌
   - generation-stage image candidate: `Picture_of_Takashi_Hara.jpg`

2. `subjects/social/worksheets/data/asia-pacific-war.js`
   - Asia-Pacific War
   - core terms include 満州事変, 日中戦争, 国家総動員法, 太平洋戦争, ポツダム宣言, 降伏文書
   - generation-stage image candidate: `Instrument_of_surrender_Japan.jpg`

3. `subjects/social/worksheets/data/postwar-japan.js`
   - Postwar Japan / occupation and democratic reforms
   - core terms include GHQ, 女性参政権, 農地改革, 日本国憲法, 国民主権, 基本的人権の尊重, 平和主義, サンフランシスコ平和条約
   - generation-stage image candidate: `Constitution_of_Japan_original_signatures.jpg`

4. `subjects/social/worksheets/data/contemporary-japan-cumulative-review.js`
   - Contemporary Japan and cumulative review
   - core terms include 高度経済成長, 東海道新幹線, 東京オリンピック, 公害, 沖縄返還, 石油危機
   - intentionally no external image candidate in this first generation pass; the later fact-check may add a better licensed primary/official visual if useful

### Junior-high civics — 6 units

5. `subjects/social/worksheets/data/civics-constitution-constitutionalism.js`
   - Constitution and constitutionalism
   - core terms include 公布, 施行, 国民主権, 基本的人権の尊重, 平和主義, 立憲主義, 象徴, 最高法規
   - generation-stage image candidate: Constitution original-signature photograph

6. `subjects/social/worksheets/data/civics-fundamental-human-rights.js`
   - Fundamental human rights
   - core terms include 基本的人権, 個人として尊重, 法の下の平等, 自由権, 社会権

7. `subjects/social/worksheets/data/civics-diet.js`
   - National Diet
   - core terms include 最高機関, 立法機関, 衆議院, 参議院, 内閣総理大臣の指名, 衆議院の優越
   - generation-stage image candidate: `Japanese_national_diet_building.jpg`

8. `subjects/social/worksheets/data/civics-cabinet.js`
   - Cabinet
   - core terms include 行政権, 議院内閣制, 内閣総理大臣, 連帯して責任, 内閣不信任決議
   - generation-stage image candidate: `Kantei_PM_Japan_Residence.jpg`

9. `subjects/social/worksheets/data/civics-courts.js`
   - Courts
   - core terms include 司法権, 裁判官の独立, 三審制, 違憲審査権, 最高裁判所
   - generation-stage image candidate: `Supreme_Court_of_Japan01s4s3872.jpg`

10. `subjects/social/worksheets/data/civics-separation-of-powers.js`
    - Separation of powers
    - core terms include 立法権, 行政権, 司法権, 三権分立, 内閣不信任決議, 違憲審査権

## Batch scale

Across the ten new units:

- 51 structured fact records
- 55 concise learner sentences
- 7 generation-stage image candidates
- all records are `pending_factcheck`
- no pending dataset was added to the public selector
- shared cloze behavior was not changed: only explicit `terms` entries can become blanks, so arbitrary nouns remain ineligible

## Generation-stage evidence used

These sources are only candidate evidence for later independent review. A future FACTCHECK run must reopen them from scratch and must not approve claims merely because they appear here.

### Shared curriculum / constitution

- MEXT current junior-high Social Studies commentary: `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
- House of Representatives, Constitution of Japan: `https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm`
- NDL, Birth of the Constitution of Japan / constitutional text: `https://www.ndl.go.jp/constitution/etc/j01.html`

### History

- NDL, `史料にみる日本の近代` Taisho democracy chapter and universal male suffrage / Peace Preservation Law material
- National Archives of Japan, `昭和20年`, Potsdam Declaration, Imperial Rescript on the End of the War, postwar reconstruction chronology, land reform material, and `高度成長の時代へ 1951-1972` exhibition list
- MEXT material on postwar science/technology, pollution and the oil crisis

### Civics institutions

- House of Representatives, `国会の地位` and `国会の権限`
- Prime Minister's Office, `内閣制度の概要`
- Courts in Japan, court-system overview and judicial-review explanatory material

## Image/license state

No AI-generated historical images were used. The external files selected during generation were chosen because the current file pages expose plausible reusable status such as public domain, CC BY or CC BY-SA. These are **provisional generation-stage records only**.

The later independent FACTCHECK must reopen each exact file page and verify:

- that the file depicts what the learner caption claims;
- creator / photographer / originating institution;
- exact current license or public-domain basis;
- attribution and share-alike requirements;
- whether use in Japan is supportable where a file page expresses jurisdiction-specific public-domain caution.

In particular, the Hara Takashi image currently has a Commons warning that its U.S. public-domain status may not automatically settle status outside the United States. Do not publish that image without resolving this point; replace it with a safer source if necessary.

## Accumulated unverified backlog — 11 units

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

Do not automatically fact-check these on the next scheduled run.

## Publication / validation state

`subjects/social/worksheets/index.html` was re-read after generation and still contains only verified datasets through `meiji-state-industrialization.js`. This confirms that the eleven pending units are not publicly registered.

The files were written through the GitHub contents API. A full local `node --check` over the newly created files was not available through the connector-only execution path in this run. Before publication, the later FACTCHECK batch must perform syntax/runtime validation where the environment permits, in addition to factual and license review.

## Exact next starting point

Remain in GENERATE BACKLOG mode.

Start at junior-high civics queue item 7:

1. Elections and political participation
2. Local government
3. Market economy / firms / labor
4. Money / finance
5. Public finance / taxation
6. Social security
7. International society / United Nations
8. Junior-high civics cumulative review

That exhausts the remaining eight junior-high civics generation units. To reach the normal ten-unit target in the same scheduled run, then move to high school as follows:

9. Before writing high-school content, expand `歴史総合` into an ordered unit queue grounded in the current MEXT high-school Geography/History curriculum/commentary, without assigning the formal course to a fixed school year.
10. Generate the first two `歴史総合` units from that newly recorded queue as units 9 and 10 of the batch.

Do not skip the queue-expansion step. All high-school metadata must retain the formal course name `歴史総合` separately from any convenient site grouping.

Keep all newly generated material pending and out of the public selector. Continue adding to `unverified_backlog` until the user explicitly requests a large independent FACTCHECK batch.
