# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Yayoi society / small states / Yamatai / Himiko
- Active batch: Kofun / Asuka / Nara / Heian
- Next role: FACTCHECK
- Batch size: 4 units
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Yayoi society / Yamatai / Himiko

Independently reopened authoritative sources instead of accepting the generator summary. The six pending claims were checked against MEXT current junior-high Social Studies commentary, Fukuoka City Museum, National Diet Library, Imperial Household Agency, Kyoto National Museum, and National Museum of Japanese History material.

Final state:

- all six sentence records: `verified`
- unit: `verified`
- `King of Na gold seal faces.jpg`: verified as a photograph of a Toi Museum replica by PHGCOM; Commons offers CC BY-SA 3.0 / GFDL, and this project records the CC BY-SA 3.0 route
- `Gishiwajinden.jpg`: Commons file page identifies the material as `魏志倭人伝` and marks the file CC0 1.0; provenance information remains recorded on the file page
- no AI-generated historical images are used

Two wordings were tightened during review:

1. the 239 sentence now states that Himiko sent an envoy to Wei, received the title `親魏倭王`, and was given a gold seal and bronze mirrors, matching the independently reopened sources;
2. the location sentence now says the location of Yamatai is still unsettled and that debate includes Kyushu and Kinai theories, rather than implying a resolved binary choice.

Main fact-check evidence URLs retained in the unit:

- MEXT: `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
- Fukuoka City Museum gold seal: `https://museum.city.fukuoka.jp/sp/gold/`
- Fukuoka City Museum excavation history: `https://museum.city.fukuoka.jp/archives/leaflet/414/index.html`
- NDL Yamatai material: `https://dl.ndl.go.jp/view/download/digidepo_999426_po_85.pdf?contentNo=1`
- Imperial Household Agency 2025 lecture: `https://www.kunaicho.go.jp/learn/culture/kosyo/kosho-r07.html`
- Kyoto National Museum: `https://www.kyohaku.go.jp/jp/learn/home/yomimono_data/0063/`
- Rekihaku FAQ: `https://www.rekihaku.ac.jp/contact/faq/`

## Completed GENERATE batch — four units

All new material below is deliberately `pending_factcheck`. It must not be treated as published/verified content until the next independent FACTCHECK run.

### 1. Kofun period and Yamato polity

File: `subjects/social/worksheets/data/kofun-yamato.js`

- 6 concise study sentences
- core terms include 古墳 / 前方後円墳 / 埴輪 / 大和政権 / 渡来人
- 2 image candidates:
  - `Daisenryo Kofun zenkei.JPG` — Saigen Jiro, Commons, CC0 1.0
  - warrior haniwa `DSC05626.JPG` — Daderot, Commons, CC0 1.0
- candidate fact sources: MEXT and Cultural Heritage Online

### 2. Asuka reforms and ritsuryo formation

File: `subjects/social/worksheets/data/asuka-ritsuryo.js`

- 5 concise study sentences
- core terms include 冠位十二階 / 十七条の憲法 / 小野妹子 / 遣隋使 / 中大兄皇子 / 中臣鎌足 / 大化の改新 / 大宝律令 / 律令国家
- 2 image candidates:
  - `Portrait of Prince Shōtoku and Two Princes.jpg` — Commons file marked public domain
  - Horyu-ji `法隆寺57.JPG` — Nekosuki, Commons, CC BY-SA 4.0
- candidate fact sources: MEXT, Horyu-ji, Nara Prefecture materials, Nara Manyo Culture Center, archaeological-report materials

### 3. Nara period

File: `subjects/social/worksheets/data/nara-period.js`

- 6 concise study sentences
- core terms include 平城京 / 長安 / 律令国家 / 聖武天皇 / 東大寺 / 正倉院 / 天平文化
- 2 image candidates:
  - `Todaiji-Daibutsuden-1999.jpg` — Bigjap, Commons, CC0 1.0
  - `Shosin-shouso.jpg` — あずきごはん, Commons, CC BY-SA 4.0
- candidate fact sources: MEXT and Nara City official history/cultural-property pages

### 4. Heian period

File: `subjects/social/worksheets/data/heian-period.js`

- 6 concise study sentences
- core terms include 桓武天皇 / 平安京 / 摂政 / 関白 / 摂関政治 / 藤原道長 / かな文字 / 国風文化 / 紫式部 / 源氏物語 / 清少納言 / 枕草子 / 藤原頼通 / 平等院鳳凰堂
- 2 image candidates:
  - `Murasaki Shikibu.jpg` — Kikuchi Yosai work / Commons, Public Domain Mark 1.0
  - `Byodoin.jpg` — Cun Cun, Commons, CC BY-SA 4.0
- candidate fact sources: MEXT, Kyoto official school-trip history/culture material, NDL, and Byodoin official pages

No AI-generated historical images were added in this batch.

## Tool integration and publication state

The four pending unit files are complete structured inputs for the existing generator, but they are intentionally not loaded by the public `subjects/social/worksheets/index.html` yet. The published selector currently loads only the two verified datasets:

1. Jomon / Yayoi overview — verified
2. Yayoi society / Yamatai / Himiko — verified

After the next independent fact-check approves a new unit, add its dataset script to `subjects/social/worksheets/index.html`. This preserves the factory rule that unverified study sheets are not published as learner-facing material.

A concurrent site-maintenance change added the page description and Cloudflare Web Analytics to `index.html`; those unrelated changes were preserved while reconciling latest `main`.

The shared generator behavior was not broadened. `app.js` still blanks only terms explicitly listed in each sentence's `terms` array, so arbitrary nouns cannot become blanks. Existing seed/rate behavior is unchanged.

## Exact next starting point

Perform one independent FACTCHECK batch covering only these four files:

- `subjects/social/worksheets/data/kofun-yamato.js`
- `subjects/social/worksheets/data/asuka-ritsuryo.js`
- `subjects/social/worksheets/data/nara-period.js`
- `subjects/social/worksheets/data/heian-period.js`

Treat all 23 new study sentences and all 8 image records as untrusted. Reopen MEXT and authoritative museum/archive/government/temple sources from scratch. Do not approve an item merely because its generator source list looks plausible.

For every sentence, verify dates, names, institutional terminology, causal wording, and current junior-high curriculum placement. For every image, independently verify exact file identity, whether it depicts what the label says, author/creator, source, license, and any attribution/share-alike requirement. Correct or reject unsupported wording or image use.

Only after all four units pass should their sentence/image/unit statuses become `verified`. Then register the verified datasets in `subjects/social/worksheets/index.html`, set `next_role` to `generate`, clear the active fact-check batch, and advance the queue to `Kamakura period`.
