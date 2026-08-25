# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Muromachi period
- Active unit: Sengoku / Azuchi-Momoyama
- Next role: GENERATE
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Muromachi period

Independently reopened current MEXT curriculum commentary and authoritative Kyoto City, National Archives, National Museum of Japanese History, Ministry of Foreign Affairs, and temple materials. All seven study sentences and both image records are now `verified`.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this material in `中世の日本` → `武家政治の展開と東アジアの動き`, explicitly naming `南北朝の争乱と室町幕府` and `日明貿易`. The unit therefore remains correctly classified as junior-high history without forcing a fixed school year.

### Corrections made during independent review

1. Flower Palace chronology
   - Kyoto City sources differ between 1377 and 1378 for the beginning/establishment of Yoshimitsu's Muromachi residence.
   - The learner text now uses `1377〜1378年ごろ` rather than pretending there is one uncontested single year.
   - Kyoto City independently supports that the residence stood at Muromachi, was used for government business, and gave rise to the `室町幕府` name.

2. Shugo daimyo
   - Reworded to match MEXT's own terminology: shugo appointed by the Ashikaga shogunate who brought provincial warriors under them and strengthened rule on a province-wide scale.
   - This avoids implying that every shugo automatically became a shugo daimyo.

3. Ming trade / tally
   - The sentence now states that Japan-Ming trade was conducted under Yoshimitsu and that `勘合` were used to identify authorized trade missions.
   - The timeline keeps 1404 specifically for the arrival/use of the Ming tally rather than presenting 1404 as the only possible starting date of Japan-Ming relations or tribute diplomacy.

4. Kinkaku / Kitayama culture
   - Changed the sentence to `1397年に北山に造営を始めた山荘の舎利殿`.
   - Temple material supports the Kitayama villa, the Shariden/Kinkaku, Zen influence, and the cultural circle around Yoshimitsu.

5. Onin War
   - Reworded the effect conservatively. It now states 1467–1477 and notes that regional forces increasingly acted independently after the war, rather than saying the bakufu immediately stopped functioning.
   - This follows MEXT's caution against oversimplifying the post-Onin bakufu as having simply ceased to function.

### Verified images

No AI-generated historical images are used.

- `Yoshimitsu_Ashikaga_cropped.jpg`
  - Commons identifies it as an early-15th-century portrait of Ashikaga Yoshimitsu held by Rokuon-ji.
  - Commons marks the old work public domain and applies Public Domain Mark 1.0.
  - Project metadata now records `Public Domain Mark 1.0`.

- `Kinkaku-ji_temple_in_Kyoto.jpg`
  - Modern photograph by Geertchaos, photographed 2019-05-16.
  - Exact Commons file page: CC BY-SA 4.0, attribution and share-alike required.
  - Learner note explicitly distinguishes the present reconstructed building from the medieval original: the original Kinkaku burned in 1950 and was rebuilt afterward.

## Publication state

`subjects/social/worksheets/data/muromachi-period.js` is fully `verified` and is now loaded by `subjects/social/worksheets/index.html`.

The public selector now contains eight verified units through Muromachi. The shared generator remains unchanged: only explicit `terms` values are blank candidates, and seed/rate generation remains deterministic.

## Validation / safety notes

- Canonical implementation path remains `subjects/social/worksheets/`.
- The retired root path was not recreated or used.
- No pending Muromachi content is exposed as verified; every record in the published unit is now independently checked.
- Unrelated page metadata and Cloudflare analytics markup were preserved when updating `index.html`.

## Exact next starting point

Next role is GENERATE. Start only the `Sengoku / Azuchi-Momoyama` unit in the junior-high history queue.

Keep it distinct from the completed Muromachi unit. A low-density first sheet should likely cover the social/political transition into the Sengoku period, representative sengoku daimyo only as needed, firearms and Christianity / European contact, Oda Nobunaga, Toyotomi Hideyoshi, unification measures such as land survey and sword hunt, and Azuchi-Momoyama culture. Verify current MEXT placement before writing claims. Do not pull Edo political-system content forward into this unit.

Use at least two useful non-AI historical-source images where licensing is documentable. Keep all new sentences and images `pending_factcheck`, do not load the dataset publicly, set `next_role` to `factcheck`, and rewrite this handoff with exact independent-review targets before ending the GENERATE run.
