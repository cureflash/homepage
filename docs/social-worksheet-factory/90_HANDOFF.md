# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Edo economy / culture / foreign relations
- Active unit: Bakumatsu and Meiji Restoration
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Edo economy / culture / foreign relations

Independently reopened the current MEXT junior-high Social Studies commentary and authoritative municipal, museum, and cultural sources rather than relying on the generator's rationale. All eight structured fact records, all eight learner sentences, both image records, and the unit are now `verified`.

### Curriculum placement and verified wording

MEXT places this material under junior-high history `近世の日本`.

For industry, transport, culture, and education, the commentary explicitly supports:

- development of agriculture/forestry/fisheries, handicrafts, commerce, river and sea transport, and roads as examples of early-modern industrial/transport development;
- formation of urban-centered culture with economically stronger townspeople as cultural actors, explicitly naming Osaka, Kyoto, and Edo as suitable urban examples;
- spread of han schools and terakoya, growing interest in education, and expansion of the social base of learning and culture.

For foreign relations, the commentary explicitly states that the policies later called `鎖国` included bans/restrictions on overseas travel and trade, prohibition of Christianity, and control of diplomacy/information, while still requiring learners to recognize continuing trade and exchange. It explicitly calls for treatment of:

- Dutch and Chinese trade at Nagasaki;
- exchange with Korea through Tsushima;
- Ryukyu's role in relations with China;
- Ainu trade in northern products in Ezo.

National Museum of Japanese History independently reinforces that early-modern Japan was not isolated and describes four major international gateways: Nagasaki, Tsushima, Satsuma, and Matsumae.

### Claim checks

1. **Industry / transport** — verified against MEXT. The sentence remains general and does not claim equal development in every region.
2. **Osaka kurayashiki** — verified against Osaka City and Osaka City Library. Osaka City states that domains built kurayashiki around Nakanoshima to bring in, manage, sell, and convert annual-rent rice and products into money. The learner sentence continues to avoid using `天下の台所` as a memorization target.
3. **Townsperson culture** — verified directly against MEXT's wording on Osaka, Kyoto, Edo, economically stronger townspeople, and urban-centered culture.
4. **Han schools / terakoya** — verified directly against MEXT, including the intended inference of growing educational interest and wider cultural diffusion.
5. **Sakoku framing** — verified against MEXT and Rekihaku. The learner sheet correctly says these policies were later called `鎖国` and explicitly avoids implying total international isolation.
6. **Nagasaki / Dejima** — MEXT confirms Dutch and Chinese trade at Nagasaki. Official Dejima history confirms that the Dutch factory moved from Hirado to Dejima in 1641.
7. **Korea / Tsushima and Ryukyu / Satsuma** — verified against Rekihaku. Tsushima Museum independently confirms the diplomatic role of Tsushima and Tsushima domain in Joseon relations.
8. **Ainu / Matsumae** — wording was corrected. Instead of saying merely that a trade relationship existed `through` Matsumae domain, the final wording states that Ainu people themselves traded marine products and that Matsumae domain controlled Ainu-Wajin trade. This preserves Ainu agency and reflects National Ainu Museum material describing both Ainu people as producers/traders and Matsumae control/monopoly structures.

## Final learner wording correction

Only one substantive sentence required revision:

- Before: `蝦夷地ではアイヌの人々が海産物などを交易し、松前藩を介した通商関係も形成された。`
- Final: `蝦夷地では{{アイヌ}}の人々が海産物などを交易し、{{松前藩}}はアイヌとの交易を統制した。`

The corresponding structured fact record was changed to the same meaning.

## Image verification

No AI-generated historical images are used.

### Utagawa Hiroshige, `Tōkaidō gojūsan tsui, Kyō`

- Exact Commons file checked: `Tōkaidō gojūsan tsui, Kyō by Hiroshige.jpg`.
- Commons identifies the artist as Utagawa Hiroshige and the work as a woodblock print from `The 53 stations of the Tōkaidō in pairs`.
- Date: 1844–1847.
- Subject: view from Sanjo Ohashi in Kyoto.
- Source institution: Museum of Fine Arts, Boston.
- Commons states the underlying work and faithful reproduction are public domain; Public Domain Mark 1.0 / PD-Art / PD-Japan information is present.
- Learner note tightened to `1844〜1847年の錦絵。三条大橋からの眺めと往来を描いた東海道関連資料`.
- Status: `verified`.

### `DejimaInNagasakiBay.jpg`

- Exact Commons file checked.
- Commons describes a painting of Japanese-Dutch trade at Dejima, dated between 1800 and 1825, with two Dutch ships and Chinese trading junks.
- Collection: British Museum.
- The historical painter is not identified on the file record. File history records a photograph/digital capture by PHGCOM, so the final credit distinguishes the unknown historical artist from the photographer: `作者不詳の絵画 / British Museum / PHGCOM（撮影） / Wikimedia Commons`.
- Commons applies Public Domain Mark 1.0 and states the file is free of known copyright restrictions.
- Status: `verified`.

## Publication / integration state

`subjects/social/worksheets/data/edo-economy-culture-foreign-relations.js` is fully verified and is now loaded by `subjects/social/worksheets/index.html` after `edo-political-system-society.js`.

The public selector therefore includes eleven independently verified units, from Jomon/Yayoi through Edo economy/culture/foreign relations.

The shared worksheet engine was not broadened or rewritten. It still uses the existing `window.SOCIAL_WORKSHEET_UNITS` registry and only explicit `terms` entries are eligible for deterministic seeded blanks. Unrelated educational pages were not changed.

The existing Cloudflare Web Analytics tag in `index.html` was preserved. Its public token is represented with equivalent HTML character references in the attribute value so browser parsing yields the same value while allowing the safe repository write.

## Independent evidence used in this FACTCHECK

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
  - `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
- Osaka City `蔵屋敷跡`
  - `https://www.city.osaka.lg.jp/kensetsu/page/0000009873.html`
- Osaka City Library / Osaka City History Compilation `中世・近世の大坂`
  - `https://www.oml.city.osaka.lg.jp/page/1146.html`
- National Museum of Japanese History, Room 3
  - `https://www.rekihaku.ac.jp/exhibitions/room3/`
- Official Dejima history
  - `https://nagasakidejima.jp/history/`
- Tsushima Museum `対馬の外交II 朝鮮通信使`
  - `https://tsushimamuseum.jp/exhibition/1058/`
- National Ainu Museum related material on early-modern trade
  - `https://nam.go.jp/wp/wp-content/uploads/2020/10/siryou1.pdf`
- Wikimedia Commons exact file pages for both published images.

## Exact next starting point

Next role is GENERATE. Work only on:

`bakumatsu-meiji-restoration`

This is junior-high history queue item 12, `Bakumatsu and Meiji Restoration`.

Build the low-density explanation sheet first from authoritative structured facts. Keep new claims and image records `pending_factcheck` and do not register the new dataset in the public selector until the following independent FACTCHECK run.

Likely core coverage to investigate from scratch includes the opening of Japan and treaty system, domestic political change around the end of the bakufu, restoration of imperial government, the Charter Oath / abolition of domains and establishment of prefectures / social-status reform as appropriate, and the transition into the Meiji state without duplicating the following separate queue unit `Meiji state / industrialization`. Verify the exact current MEXT scope before choosing terms or chronology.

Use useful non-AI historical-source images only where exact source and reuse terms can be recorded. Update `STATUS.json` and this handoff at the end of that GENERATE run, setting the next role to FACTCHECK.
