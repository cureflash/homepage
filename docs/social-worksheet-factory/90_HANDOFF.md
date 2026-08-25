# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Edo political system and society
- Active unit: Edo economy / culture / foreign relations
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Edo economy / culture / foreign relations

Created:

`subjects/social/worksheets/data/edo-economy-culture-foreign-relations.js`

The unit is intentionally low-density and is not registered in the public selector. The unit, all structured fact records, all eight learner sentences, and both image records remain `pending_factcheck`.

### Curriculum basis used only for generation

The current MEXT junior-high Social Studies commentary places this content in `近世の日本` and explicitly calls for:

- understanding the development of industry and transport;
- understanding that urban-centered chonin culture formed and that local life cultures also developed;
- attention to han schools and terakoya as part of educational diffusion;
- treatment of the bakufu's later-called `鎖国` policy without equating it with total isolation;
- Nagasaki trade with the Netherlands and China;
- exchange with Korea through Tsushima;
- the role of Ryukyu in relations with China;
- northern trade involving the Ainu in Ezo.

MEXT also states that river/sea transport and roads may be used as examples of transport development, and that Osaka, Kyoto, and Edo are appropriate examples of urban settings in which economically stronger townspeople became cultural actors.

### Structured facts and learner sentences

Eight structured fact records were added before sentence templates were written. The learner sheet has three sections and eight concise sentences.

#### 1. Industry, transport, and cities

- `商業 / 海上交通 / 街道`: industry and transport development linked production and markets.
- `大坂 / 蔵屋敷`: Osaka's storehouses handled domain rice and products and supported its development as a major commercial city.

Candidate authoritative sources used during generation:

- MEXT current Social Studies commentary.
- Osaka City page on kurayashiki remains.
- Osaka City Library / Osaka City History Compilation material on early-modern Osaka.

The sentence deliberately avoids making `天下の台所` a cloze target because Osaka City Library's reference material notes that the exact slogan's historical usage is more complicated than a simple Edo-period label.

#### 2. Chonin culture and education

- `町人 / 町人文化`: Osaka, Kyoto, and Edo as urban settings for culture supported by economically stronger townspeople.
- `藩校 / 寺子屋`: educational diffusion and the widening social base of learning/culture.

Candidate authoritative sources:

- MEXT current Social Studies commentary.
- Osaka Museum of History material on early-modern Osaka chonin culture.

No attempt was made to force a particular fixed school grade or to overload the sheet with a long list of Genroku/Kasei artists.

#### 3. Foreign relations under bakufu control

- `鎖国`: phrased as policies later called sakoku, while explicitly stating that overseas trade and exchange continued.
- `長崎 / オランダ / 中国 / 出島`: trade continued at Nagasaki; the Dutch factory moved to Dejima in 1641.
- `朝鮮 / 対馬藩 / 琉球 / 薩摩藩`: multiple diplomatic/exchange routes remained active.
- `アイヌ / 松前藩`: northern trade relationships in Ezo.

Candidate authoritative sources:

- MEXT current Social Studies commentary.
- National Museum of Japanese History, third gallery, which explicitly explains that early-modern Japan was not isolated and presents Nagasaki, Tsushima, Satsuma, and Matsumae as four international gateways.
- Official Dejima history for the 1641 Dutch-factory move and continued Dutch trade.
- Tsushima Museum material on Joseon missions and Tsushima's diplomatic role.
- National Ainu Museum material on Ainu-Wajin trade and Matsumae control.

## Historical-source images added as candidates

No AI-generated historical images were used.

### 1. Utagawa Hiroshige, `Tōkaidō gojūsan tsui, Kyō`

- Exact file: `Tōkaidō gojūsan tsui, Kyō by Hiroshige.jpg`.
- Commons identifies it as a woodblock print from the series `The 53 stations of the Tōkaidō in pairs`, published 1844–1847.
- It depicts the Sanjo Ohashi area in Kyoto and is used as a concrete visual for road travel / urban culture near the end of the Edo period.
- Source recorded by Commons: Museum of Fine Arts, Boston.
- Artist: Utagawa Hiroshige (1797–1858).
- Commons licensing identifies the work and faithful reproduction as public domain and carries Public Domain Mark 1.0 / PD-Art / PD-Japan information.
- Current record status: `pending_factcheck`.

### 2. `DejimaInNagasakiBay.jpg`

- Commons caption: painting of Japanese and Dutch trade on Dejima in Nagasaki.
- Date: between 1800 and 1825.
- Scene includes Dutch ships and Chinese trading junks.
- Collection/source: British Museum.
- Artwork creator is not identified on the Commons record; the digital file history includes a photograph/upload by PHGCOM/World Imaging, so the learner credit deliberately says `作者不詳の絵画 / British Museum / Wikimedia Commons` rather than treating the digitizer as the historical artist.
- Commons marks the underlying work public domain and applies Public Domain Mark 1.0.
- Current record status: `pending_factcheck`.

## Publication / integration state

The new dataset has NOT been added to `subjects/social/worksheets/index.html`. The public selector therefore remains limited to the ten independently verified units through `edo-political-system-society`.

The shared worksheet engine was not changed. The new unit follows the existing `window.SOCIAL_WORKSHEET_UNITS.push(unit)` contract, and only explicit entries in each sentence's `terms` array are eligible for deterministic seeded blanks.

No unrelated educational page was modified.

## Exact next starting point

Next role is FACTCHECK. Work only on:

`subjects/social/worksheets/data/edo-economy-culture-foreign-relations.js`

Treat all eight structured facts, all eight learner sentences, and both image records as untrusted. Reopen sources independently rather than accepting this generation summary.

At minimum verify:

1. whether the general industry/transport sentence accurately reflects MEXT and does not imply uniform development across all regions;
2. whether the Osaka `蔵屋敷` sentence is supportable without relying on the historically problematic `天下の台所` slogan;
3. the precise curriculum-supported scope of `町人文化`, including the choice to mention Osaka/Kyoto/Edo without forcing Genroku/Kasei labels;
4. `藩校 / 寺子屋` wording and whether `教育への関心が高まる` is supported;
5. the wording `後に鎖国と呼ばれた` and the explicit rejection of complete-isolation framing;
6. 1641 Dejima chronology and the statement that Dutch and Chinese trade continued at Nagasaki;
7. Tsushima/Korea and Satsuma/Ryukyu wording, including whether `外交関係` is the best concise term for the Ryukyu route;
8. Ainu/Matsumae wording, avoiding wording that erases Ainu agency or oversimplifies unequal trade/control relations;
9. exact identities, dates, institutions, and reuse status of both Commons image files.

If all claims can be supported after correction as needed, mark the fact records, learner sentences, image records, and unit `verified`; then add only the verified dataset to `subjects/social/worksheets/index.html`.

After successful publication, set `next_role` to `generate`, advance the active unit to `bakumatsu-meiji-restoration`, and record the exact next state here and in `STATUS.json`.
