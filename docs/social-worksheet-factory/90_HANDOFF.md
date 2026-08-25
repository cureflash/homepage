# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Kamakura period
- Active unit: Muromachi period
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Muromachi period

Created `subjects/social/worksheets/data/muromachi-period.js` as the next junior-high history unit. It remains entirely `pending_factcheck` and is intentionally not loaded by the public selector yet.

### Study structure

Two sections, seven concise study sentences:

1. 南北朝と室町幕府
   - 足利尊氏 / 征夷大将軍
   - 南北朝 / 足利義満
   - 守護 / 守護大名
   - 足利義満 / 花の御所 / 室町幕府
2. 義満の時代と応仁の乱
   - 日明貿易 / 勘合 / 勘合貿易
   - 金閣 / 北山文化
   - 応仁の乱

The unit is deliberately low-density and stops at the political framework created by the Onin War. It does not expand into Sengoku daimyo, firearms, Christianity, Oda Nobunaga, Toyotomi Hideyoshi, or Azuchi-Momoyama culture, because those belong to the next separate queue unit.

The shared worksheet contract is unchanged: only explicit `terms` entries are eligible for blanks, and deterministic seed/rate behavior remains in `subjects/social/worksheets/app.js`.

## Candidate factual basis used during generation

These are generation references only. The next FACTCHECK run must independently reopen authoritative sources and treat all seven sentences as untrusted.

- MEXT current junior-high Social Studies commentary: places this under `中世の日本` → `武家政治の展開と東アジアの動き`, explicitly naming `南北朝の争乱と室町幕府` and `日明貿易`.
- Kyoto City historical chronology: 1336 Northern Court / Southern Court split, 1338 Ashikaga Takauji becoming Seii Taishogun, 1378 Yoshimitsu's Muromachi residence, 1392 reunification of the courts.
- Kyoto Kamigyo Ward `室町幕府址` and `花の御所`: relationship between Yoshimitsu's Muromachi residence, government activity there, and the name Muromachi bakufu.
- Rekihaku khirin `室町幕府管領奉書`: direct Muromachi-government document and evidence for the kanrei/shugo political structure; the page itself carries CC BY-SA 4.0 for the museum record.
- MOFA Japan-China joint historical-research material: explains the Ming trade / tally system and the use of `勘合` as proof of authorized missions/trade.
- Kyoto City outline and children's history pages: 1397 Kitayama villa / Kinkaku, cultural framing, 1404 tally-related chronology, and the 1467 Onin War.

## Image candidates

No AI-generated historical images were used.

1. `Yoshimitsu_Ashikaga_cropped.jpg`
   - historical portrait identified by the Commons page as Ashikaga Yoshimitsu, from Rokuon-ji
   - project label: `足利義満像`
   - project credit: `鹿苑寺蔵 / Wikimedia Commons`
   - Commons page marks the historical work public domain
   - status remains `pending_factcheck`; next run must independently verify identity, dating/provenance wording, and the exact public-domain basis

2. `Kinkaku-ji_temple_in_Kyoto.jpg`
   - modern photograph of Kinkaku-ji in Kyoto
   - photographer/uploader: Geertchaos
   - exact Commons file page states CC BY-SA 4.0
   - project label: `鹿苑寺（金閣寺）の金閣`
   - status remains `pending_factcheck`; next run must independently verify the exact file identity/license and whether the learner caption about Yoshimitsu/Kitayama culture is supportable from an authoritative site

## Publication state

The public `subjects/social/worksheets/index.html` is unchanged and still loads only the seven verified units through Kamakura. `muromachi-period.js` must not be registered there until the independent FACTCHECK run approves all seven sentences and both images.

## Exact next starting point

Perform an independent FACTCHECK of only `subjects/social/worksheets/data/muromachi-period.js`.

Treat every sentence and both image records as untrusted. Reopen MEXT and authoritative government/museum/temple/archive sources from scratch. Do not approve an item merely because the generation source list looks plausible.

Verify at minimum:

1. the relationship among the Kenmu government, Ashikaga Takauji's Kyoto base, 1336, and the 1338 Seii Taishogun appointment; avoid implying that a single date alone defines Muromachi bakufu formation;
2. the North/South Court wording, Yoshino/Kyoto locations, and 1392 reunification under Yoshimitsu;
3. whether `守護大名` is phrased accurately for junior-high level and does not overgeneralize all shugo;
4. the 1378 Flower Palace chronology and whether saying government conducted there explains the `室町幕府` name accurately;
5. the chronology and terminology of 日明貿易 / 勘合 / 勘合貿易, including whether the current 1404 timeline wording should be tightened to distinguish the 1403/1404 sequence;
6. 1397 Kitayama villa / Kinkaku and the characterization of Kitayama culture;
7. the causes, 1467 start, duration/effect, and wording of the Onin War without prematurely teaching the following Sengoku unit.

For both images, independently verify exact file identity, depicted subject, creator/uploader or historical provenance, license/public-domain status, attribution requirements, and educational caption. Correct or reject unsupported material.

If and only if the entire unit passes, mark the sentence/image/unit statuses `verified`, add `data/muromachi-period.js` to `subjects/social/worksheets/index.html`, set `next_role` to `generate`, and advance the queue to `Sengoku / Azuchi-Momoyama`.
