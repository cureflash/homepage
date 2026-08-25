# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Heian period
- Active unit: Kamakura period
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Kamakura period

Created `subjects/social/worksheets/data/kamakura-period.js` as the next junior-high history unit. It is intentionally low-density and remains completely `pending_factcheck`; it is not loaded by the public selector yet.

### Study structure

Two sections, seven concise study sentences:

1. Kamakura bakufu and gokenin
   - 守護 / 地頭
   - 源頼朝 / 征夷大将軍
   - 御家人 / 御恩 / 奉公
2. Hojo regency and Mongol invasions
   - 執権
   - 承久の乱
   - 御成敗式目
   - 文永の役 / 弘安の役 / 元寇

The worksheet generator contract is unchanged: only explicit `terms` entries are eligible for blanks, and deterministic seed/rate behavior remains in the shared app.

### Candidate factual basis used during generation

These are generation references only. The next FACTCHECK run must independently reopen sources and treat every claim as untrusted.

- MEXT current junior-high Social Studies commentary for placement in medieval Japanese history and the core terms around warrior government, gokenin, Hojo rule and Mongol invasions.
- Kamakura City official history pages for Yoritomo, Kamakura as political base, the 1185 right to appoint shugo/jito, the 1192 shogun appointment, and the modern caution that bakufu formation was gradual rather than a single-year event.
- National Museum of Japanese History material for gokenin and service to the shogun.
- National Archives of Japan material for Hojo Yoshitoki and chronology entries for the Jokyu Disturbance, Goseibai Shikimoku, Bun'ei campaign, Koan campaign and the 1333 end of the Kamakura bakufu.

### Image candidates

No AI-generated images were used.

1. `Kamakura_Daibutsu_-_01.jpg`
   - depicts the Great Buddha at Kotoku-in, Kamakura
   - photographer: Quercus acuta
   - exact Commons file page states CC0 1.0
   - current project label: `鎌倉大仏`

2. `Mōko_Shūrai_Ekotoba.jpg`
   - image from the historical `蒙古襲来絵詞`
   - exact Commons file page describes it as a faithful reproduction of a public-domain two-dimensional work
   - exact Commons file page carries Public Domain Mark 1.0 / no known copyright restrictions
   - current project label: `『蒙古襲来絵詞』`

## Publication state

The public `subjects/social/worksheets/index.html` still loads only the six verified units through Heian. `kamakura-period.js` must remain unregistered there until independent fact-checking passes all seven sentences and both image records.

## Exact next starting point

Perform an independent FACTCHECK of only `subjects/social/worksheets/data/kamakura-period.js`.

Treat all seven study sentences and both image records as untrusted. Reopen authoritative sources from scratch and verify at minimum:

1. whether the 1185 wording about shugo/jito appointment authority is accurate and appropriately qualified;
2. 1192 Yoritomo appointment and the statement that bakufu formation is now treated as gradual rather than fixed to one founding year;
3. terminology and substance of 御家人 / 御恩 / 奉公;
4. the role of the Hojo regent and whether the sentence overstates a single start point for Hojo dominance;
5. 1221 Jokyu Disturbance and the consequence wording about bakufu influence over court/western Japan;
6. 1232 Goseibai Shikimoku, Hojo Yasutoki, and its characterization as a warrior judicial standard;
7. 1274 Bun'ei and 1281 Koan campaigns, the use of `元寇`, and the wording about Kyushu gokenin defense.

For both images, independently verify exact file identity, author/source, license, and whether the educational caption is supportable. Correct or reject unsupported wording. If all items pass, mark sentence/image/unit statuses `verified`, add `data/kamakura-period.js` to the public selector, set `next_role` to `generate`, and advance the queue to `Muromachi period`.
