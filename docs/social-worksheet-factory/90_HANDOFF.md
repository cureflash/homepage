# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Kamakura period
- Active unit: Muromachi period
- Next role: GENERATE
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Kamakura period

Independently reopened authoritative sources and treated all seven study sentences and both image records as untrusted before approval.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this content under `中世の日本` → `武家政治の成立とユーラシアの交流`. It explicitly identifies `鎌倉幕府の成立` and `元寇（モンゴル帝国の襲来）` as core material and asks students to understand the rise of warrior government, lord-vassal ties, and the spread of warrior rule.

### Factual checks and corrections

All seven records are now `verified`, but three wordings were tightened during review.

1. `守護・地頭`
   - Replaced the broad wording `全国に守護・地頭` with the more precise distinction: `諸国に守護` and `荘園や公領に地頭`.
   - Kamakura City confirms the 1185 grant and official educational material from the National Theatre distinguishes the locations/functions of shugo and jito.

2. `御成敗式目`
   - Reworded it as a standard for judgments involving gokenin rather than the vague `武士のための裁判の基準`.
   - National Archives chronology confirms 1232; Supreme Court/Judicial Research material discusses Hojo Yasutoki's purpose in establishing consistent adjudicative rules.

3. `元寇`
   - Replaced `元の軍勢` with `元・高麗などの軍勢` and clarified that the bakufu strengthened northern-Kyushu defenses and mobilized gokenin.
   - National Archives confirms the two invasions in 1274 and 1281, the combined forces, and the defensive preparations.

The other reviewed claims also passed:

- Yoritomo became Seii Taishogun in 1192.
- Kamakura City explicitly notes that current scholarship treats bakufu formation as gradual rather than equating it with one founding year.
- Gokenin / go-on / hoko terminology is supported by National Tax College, National Theatre educational material, Rekihaku material, and MEXT's requirement to understand lord-vassal ties.
- Hojo rule through the shikken position is supportable; the sentence avoids claiming that all authority shifted at one single date.
- The Jokyu Disturbance occurred in 1221; the defeat of the retired-emperor side strengthened bakufu power toward Kyoto and western Japan.
- Goseibai Shikimoku was established in 1232 under Hojo Yasutoki.
- Bun'ei campaign = 1274 and Koan campaign = 1281; together they are taught as the Mongol invasions / 元寇.

### Independent evidence retained in the unit

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
- Kamakura City history and `鎌倉殿とは`
- Kamakura City material on Hojo Masako / Jokyu Disturbance
- National Tax College `鎌倉幕府の財源`
- National Theatre / Cultural Digital Library material on shugo, jito, gokenin, go-on and hoko
- National Museum of Japanese History medieval-warrior exhibition material
- National Archives chronology, Hojo Yoshitoki document, and Japan-Mongolia historical project
- Supreme Court / Judicial Research and Training Institute material on Goseibai Shikimoku

## Image verification

No AI-generated historical images are used.

### Kamakura Daibutsu

- Exact Commons file: `Kamakura_Daibutsu_-_01.jpg`
- Caption identifies Kotoku-in's Kamakura Great Buddha.
- Photographer: Quercus acuta.
- File is explicitly CC0 1.0.
- Kotoku-in's own conservation material places the Great Buddha project in the Kamakura period; the learner caption was changed to `鎌倉時代に造立が進められた高徳院の大仏`.
- Record status: `verified`.

### Mōko Shūrai Ekotoba

- Exact Commons file: `Mōko_Shūrai_Ekotoba.jpg`.
- The file describes the pictured scene as the Bun'ei campaign, showing Takezaki Suenaga fighting Mongol forces.
- Commons treats the faithful reproduction of the old two-dimensional work as public domain and applies Public Domain Mark 1.0.
- The Agency for Cultural Affairs national cultural-property database identifies `紙本著色蒙古襲来絵詞` as a Kamakura-period National Treasure connected with the invasions of 1274 and 1281.
- Learner caption tightened to `文永の役で竹崎季長らが元軍と戦う様子を伝える絵巻資料`.
- Record status: `verified`.

## Publication state

`subjects/social/worksheets/data/kamakura-period.js` is now fully `verified` and has been added to `subjects/social/worksheets/index.html`.

The public selector therefore loads seven verified units in order:

1. Jomon / Yayoi overview
2. Yayoi society / Yamatai / Himiko
3. Kofun / Yamato
4. Asuka / ritsuryo
5. Nara
6. Heian
7. Kamakura

The shared generator contract is unchanged: only explicit `terms` entries can become blanks, and seeded generation remains deterministic.

## Exact next starting point

Next role is GENERATE. Start with `Muromachi period` from the junior-high history queue.

Create the explanation sheet data first using concise original sentences and explicit core terms. Likely core coverage should include the transition through the Kenmu Restoration / Northern and Southern Courts only as needed to explain the Muromachi bakufu, Ashikaga Takauji and shogunate structure, shugo daimyo, Ashikaga Yoshimitsu, Ming trade, and the political framework leading toward the Onin War. Keep the unit low-density and do not prematurely duplicate the later separate `Sengoku / Azuchi-Momoyama` unit.

Use at least two useful non-AI historical-source images if licensing can be independently documented. All new claims and image records must remain `pending_factcheck`; do not publish the Muromachi dataset in `index.html` until the following FACTCHECK run approves it.
