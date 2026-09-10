# FACTCHECK Batch 14 — 日本史探究 C(3)

## Scope

Sequentially factchecked the next five pending `日本史探究` units from the fixed queue:

1. `japanese-history-foreign-relations-four-gates`
2. `japanese-history-status-village-town-society`
3. `japanese-history-agriculture-goods-transport`
4. `japanese-history-genroku-culture`
5. `japanese-history-shogunate-finance-kyoho`

No new GENERATE work was performed. The existing pending batch remains the generation source; learner-facing files below are independent verified replacements following the established publication pattern.

## Authorities reopened independently

- 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』
  - C(3): 法・制度と身分制、貿易統制と対外関係、交通・流通、学問・文化、産業、幕府・諸藩の政策変化
  - C(3) content handling: 長崎・琉球・対馬・松前藩／アイヌを通した対外交流、村方・町方文書
- 国立歴史民俗博物館「第3展示室」
  - 長崎口・対馬口・薩摩口・松前口の四つの出入り口と各交流経路
- 国立国会図書館「東海道の難所をめぐる」
  - 東海道を皮切りとする五街道など、江戸中心の交通網整備
- 京都大学貴重資料デジタルアーカイブ「井原西鶴」
  - 上方で活動した浮世草子作者、西鶴の延宝～元禄期の文化形成への寄与
- 広島大学附属福山中・高等学校研究紀要（NDLサーチ収録）
  - 徳川吉宗の第8代将軍就任と享保の改革
- 國學院大學解説
  - 吉宗が享保の改革を進め、財政復興などの政策を行ったこと

## Corrections / verification decisions

### `japanese-history-foreign-relations-four-gates`

The generated `四つの口` model was not accepted from generation alone. MEXT directly requires the Nagasaki / Ryukyu / Tsushima / Matsumae-Ainu exchange relationships, while the National Museum of Japanese History independently identifies the four entrances as 長崎口・対馬口・薩摩口・松前口. Only after both checks was the four-gates wording promoted.

### `japanese-history-status-village-town-society`

The generated sentences about `武士・百姓・町人` having differing roles/burdens and villages having autonomous operation were not promoted verbatim. The verified unit uses MEXT's directly stated `法や制度による支配秩序の形成と身分制` and `村方・町方文書` as the learner-facing core, avoiding an unsupported simplification of early-modern status order.

### `japanese-history-agriculture-goods-transport`

The generated specific example `綿・菜種` was not promoted because this batch did not establish a sufficiently direct independent authority for that exact pairing. MEXT directly supports the spread of `商品作物` and the relation of agriculture/industry/commerce to traffic and distribution; NDL independently supports the `五街道` statement.

### `japanese-history-genroku-culture`

The generated broad period formula was narrowed to independently supported wording. MEXT supports examining early-modern culture through urban development and cultural bearers; Kyoto University independently supports Saikaku as an upper-region ukiyo-zoshi author who contributed to Enpo–Genroku cultural formation.

### `japanese-history-shogunate-finance-kyoho`

The generated `上米の制` learner sentence was not promoted because this batch did not establish a sufficiently direct independent authority for the exact statement. The verified learner text is limited to the independently supported connection between Yoshimune, the Kyoho reforms, fiscal reconstruction, and the MEXT-required perspective of policy/economic change.

## Publication / structural checks

- All five new units use `factcheckStatus: "verified"` at unit, fact, and learner-sentence levels.
- All learner `terms` map exactly to `{{...}}` placeholders.
- Every fact and sentence source ID resolves to a source declared in its unit.
- New unit/fact/sentence IDs are unique within the batch.
- All five JavaScript files pass `node --check`.
- No unit in this batch contains an image; no image-license decision is required.
- Public `index.html` loads the five units immediately after Batch 13, preserving fixed queue order.
- `STATUS.json` backlog is advanced from 125 to 120 without generating duplicate units.

## Next exact start

`japanese-history-tanuma-kansei-reforms`
