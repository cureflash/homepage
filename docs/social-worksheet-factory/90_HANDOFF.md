# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Heian period
- Active unit: Kamakura period
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Kofun / Asuka / Nara / Heian

The four generated units were reviewed as untrusted content. MEXT's current junior-high Social Studies commentary and independent government, museum/archive, temple, municipal, and exact Wikimedia Commons file pages were reopened from scratch. Curriculum placement was confirmed at junior-high history / ancient Japan level without assigning a nationally fixed grade year.

Final state:

- 23 study sentences: `verified`
- 8 image records: `verified`
- 4 unit records: `verified`
- no AI-generated historical images are used
- the four verified datasets are now loaded by `subjects/social/worksheets/index.html`

### Kofun period and Yamato polity

File: `subjects/social/worksheets/data/kofun-yamato.js`

Verified against MEXT and Cultural Heritage Online material for ancient tombs, haniwa, the spread of Yamato political power, and migrants from the continent.

Images independently checked on their exact Commons file pages:

- `Daisenryo Kofun zenkei.JPG` — Saigen Jiro — CC0 1.0
- warrior haniwa `DSC05626.JPG` — Daderot — CC0 1.0; file identity states Tokyo National Museum, Kofun period, 6th century

### Asuka reforms and ritsuryo formation

File: `subjects/social/worksheets/data/asuka-ritsuryo.js`

Verified the 603 Crown Rank system, 604 Seventeen-Article Constitution, 607 embassy led by Ono no Imoko, Taika reform sequence, and 701 Taiho Code against MEXT, Horyuji, Nara Prefecture / Manyo Culture Center, and archaeological-report sources.

Image checks:

- `Portrait of Prince Shōtoku and Two Princes.jpg` — traditional attribution to Asa no atori / exact Commons page marks the old work and reproduction public domain, with Public Domain Mark 1.0
- Horyuji `法隆寺57.JPG` — Nekosuki — CC BY-SA 4.0

The Horyuji caption was tightened from a claim naming specific buildings to `法隆寺西院伽藍`, because that is the safer independently supported description of the photograph.

### Nara period

File: `subjects/social/worksheets/data/nara-period.js`

Verified the 710 move to Heijokyo, Chang'an-influenced planned capital, ritsuryo-state administrative center, Shomu / Todaiji, 752 Great Buddha opening, 756 treasure donation, and Tenpyo culture against MEXT, Nara City, and the Nara National Research Institute for Cultural Properties.

Image checks:

- `Todaiji-Daibutsuden-1999.jpg` — Bigjap — CC0 1.0
- `Shosin-shouso.jpg` — あずきごはん — CC BY-SA 4.0

Two image notes were corrected during review:

1. the Todaiji photo now states that the present Daibutsuden was rebuilt in 1709, avoiding an implication that the photographed building is the original Nara-period structure;
2. the Shosoin note no longer calls the whole building `校倉造`; it states that the north and south storehouses are azekura construction, matching the Imperial Household Agency explanation.

### Heian period

File: `subjects/social/worksheets/data/heian-period.js`

Verified the 794 move and naming of Heiankyo, Fujiwara regency politics, Michinaga, kana / kokufu culture, Murasaki Shikibu and Sei Shonagon, and the 1053 Phoenix Hall against MEXT, Kyoto official educational material, the National Diet Library, and Byodoin official history / architecture pages.

Image checks:

- `Murasaki Shikibu.jpg` — work by Kikuchi Yosai — old-work faithful reproduction / Public Domain Mark 1.0
- `Byodoin.jpg` — Cun Cun — CC BY-SA 4.0

## Main fact-check evidence

- MEXT current junior-high Social Studies commentary: `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
- Cultural Heritage Online: `https://bunka.nii.ac.jp/`
- Horyuji official site: `https://www.horyuji.or.jp/garan/`
- Nara Prefecture Shotoku material: `https://www.pref.nara.jp/secure/61525/05.pdf`
- Nara Manyo Culture Center: `https://manyo-hyakka.pref.nara.jp/db/detailLink?cls=db_yougo3&pkey=3`
- Nara National Research Institute / site reports: `https://sitereports.nabunken.go.jp/`
- Nara City history: `https://www.city.nara.lg.jp/soshiki/3/148230.html`
- Nara City Todaiji: `https://www.city.nara.lg.jp/site/world-heritage/88515.html`
- Imperial Household Agency Shosoin: `https://shosoin.kunaicho.go.jp/`
- Kyoto official school-trip history: `https://shugakuryoko.kyoto.travel/study/history/`
- National Diet Library classical literature material: `https://dl.ndl.go.jp/view/download/digidepo_999380_po_127.pdf?contentNo=1`
- Byodoin architecture: `https://www.byodoin.or.jp/learn/architecture/`
- Byodoin history: `https://www.byodoin.or.jp/learn/history/`

Exact Wikimedia Commons source pages, credits, and licenses remain recorded in each unit's image records and sources.

## Publication and generator state

`subjects/social/worksheets/index.html` now loads six verified datasets in production order:

1. Jomon / Yayoi overview
2. Yayoi society / Yamatai / Himiko
3. Kofun period / Yamato polity
4. Asuka reforms / ritsuryo formation
5. Nara period
6. Heian period

The concurrent site description and Cloudflare Web Analytics markup were preserved. The shared generator was not broadened; it continues to blank only terms explicitly listed in sentence `terms` arrays, with the existing deterministic seed/rate behavior.

## Exact next starting point

Next role is GENERATE. Work only on `Kamakura period`, the next junior-high history queue item.

Create or update its structured unit under `subjects/social/worksheets/data/`, build the low-density A4 explanation content first, mark only true core terms as cloze targets, use several non-AI historical-source images where useful, and record exact file source / author / license metadata. All new claims and images must remain `pending_factcheck`, must not be added to the public selector yet, and `STATUS.json.next_role` must be changed to `factcheck` before the run ends.
