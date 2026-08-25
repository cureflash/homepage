# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Sengoku / Azuchi-Momoyama
- Active unit: Edo political system and society
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Sengoku / Azuchi-Momoyama

Independently reopened current curriculum material and authoritative government, municipal, museum, archive, temple, and exact Commons file pages. All eight study sentences and both image records were treated as untrusted before approval.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this material under `近世の日本` → `世界の動きと統一事業`.

The commentary requires understanding the background and influence of European arrivals, Oda/Toyotomi unification, contemporary foreign relations, and the development of the life culture of warriors and wealthy merchants. Its content handling explicitly calls for `検地・刀狩` when teaching Oda/Toyotomi unification policy. It also describes Momoyama culture as including a豪壮・華麗な文化 connected to the spirit and economic power of warriors and wealthy merchants.

No fixed school year is assigned in project metadata.

### Independent factual checks and corrections

All eight sentence records are now `verified`. The following wording changes were made during review.

1. 1543 firearms arrival
   - Changed the broad `ポルトガル人を乗せた船` wording to `ポルトガル人を乗せた明国船`.
   - Nishinoomote City and Kagoshima Prefecture both describe a Ming/Chinese vessel carrying Portuguese people arriving/drifting to Tanegashima in 1543.

2. 1549 Xavier
   - Kept Xavier as an `イエズス会の宣教師` and Kagoshima as the landing place.
   - Changed the final clause from an absolute `日本でキリスト教の布教を始めた` to `日本でキリスト教布教の第一歩をしるした`, matching Kagoshima Prefecture's official wording and avoiding unnecessary overstatement.

3. Nobunaga 1568
   - Verified `足利義昭を奉じて京都に入った` through Kyoto City / Kyoto Prefectural Museum material.

4. 楽市楽座
   - Avoided wording that could imply one uniform nationwide institution.
   - Final sentence says Nobunaga promoted policies generally called `楽市楽座` at places including the Azuchi castle town.
   - Omihachiman City material confirms the 1577 `安土山下町中掟書` and its `楽市` provision, and city-history material discusses the application of 楽市楽座 at Azuchi/Hachiman castle towns.

5. 1590 unification
   - Odawara City explicitly states that the 1590 surrender of the Hojo side marked completion of Hideyoshi's unification, so the junior-high wording remains supportable.

6. 太閤検地
   - Rewrote the sentence to say land area and grade were surveyed, kokudaka was fixed, and cultivators were registered in cadastral registers.
   - Nagoya City Museum, the National Tax College, and Osaka Castle Museum independently support these elements and the nationwide/unified character of the system.

7. 刀狩
   - Expanded the weapon categories so the sentence does not reduce the 1588 order to swords alone.
   - Osaka Castle Museum's original-document commentary states that the first article prohibited peasants from possessing swords, wakizashi, bows, spears, firearms, and other weapons.
   - Rekihaku independently identifies the 1588 three-article sword-hunt order and its original held by Osaka Castle.

8. 桃山文化 / 障壁画
   - Retained `豪壮・華麗` only as an important characteristic, not as the sole cultural style.
   - MEXT explicitly uses this characterization in connection with warriors and wealthy merchants.
   - Tokyo National Museum material confirms large-scale Momoyama-period gold-ground wall/screen painting and includes major works by Kano painters.

### Independent evidence retained in the unit

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
- Nishinoomote City `種子島銃（ポルトガル初伝銃）`
- Kagoshima Prefecture / Reimeikan `鉄砲とキリスト教の伝来`
- Kagoshima Prefecture `キリスト教の伝来`
- Kyoto Prefecture Kyoto Culture Museum `信長上洛～京都・織田信長入京から450年～`
- Omihachiman City material on the 1577 Azuchi castle-town rules and city-history publications
- Odawara City material on the 1590 Odawara campaign and unification
- Nagoya City Museum `豊臣秀次朱印状` / 太閤検地 explanation
- National Tax College `太閤検地`
- Osaka Castle Museum `摂津国豊島郡熊野田村検地帳`
- Osaka Castle Museum `豊臣秀吉朱印刀狩条目`
- National Museum of Japanese History khirin `刀狩令 複製`
- Tokyo National Museum Momoyama exhibition / wall-painting material

## Image verification

No AI-generated historical images are used.

### Oda Nobunaga portrait

Exact Commons file: `Odanobunaga.jpg`.

- artist field: Kano Sōshū / 狩野宗秀
- title: `Portrait of Oda Nobunaga (detail)` / `織田信長像（部分）`
- original date: 1583
- collection: Chōkō-ji / 長興寺
- Commons states the work is public domain and treats the faithful two-dimensional reproduction as public domain; the file displays Creative Commons Public Domain Mark 1.0
- project record: `verified`

The learner note now explicitly distinguishes the old artwork from its digital reproduction.

### Toyotomi Hideyoshi portrait

Exact Commons file: `Toyotomi hideyoshi.jpg`.

- Commons artist field: Kano Mitsunobu / 狩野光信
- description: part of a Hideyoshi portrait in Kōdai-ji holdings
- date: circa 1601
- Kōdai-ji Sho Museum independently identifies its Hideyoshi portrait as dated Keicho 6 (1601)
- Commons treats the faithful two-dimensional reproduction as public domain and explicitly displays Public Domain Mark 1.0
- project record: `verified`

The learner note now identifies the reproduction status explicitly.

## Publication state

`subjects/social/worksheets/data/sengoku-azuchi-momoyama.js` is fully `verified` and is now registered in `subjects/social/worksheets/index.html`.

The public selector now loads nine verified units in chronological order:

1. Jomon / Yayoi overview
2. Yayoi society / Yamatai / Himiko
3. Kofun / Yamato
4. Asuka / ritsuryo
5. Nara
6. Heian
7. Kamakura
8. Muromachi
9. Sengoku / Azuchi-Momoyama

The shared worksheet generator was not changed. Only explicit `terms` remain eligible for blanks, and seeded generation behavior remains deterministic.

## Exact next starting point

Next role is GENERATE. Work only on `Edo political system and society`, the next junior-high history queue unit.

Create the explanation-sheet data first and keep it low-density. Cover only the political/social framework needed for this unit, leaving `Edo economy / culture / foreign relations` for the following separate unit.

Likely core areas to verify before generation include:

- Tokugawa Ieyasu and the 1603 establishment of the Edo bakufu;
- bakuhan political structure without oversimplifying the relationship between shogunate and domains;
- daimyo classification and the purpose/effects of controls such as 武家諸法度 and 参勤交代;
- shogunate offices only to the level appropriate for junior-high learners;
- status/social-order treatment using current MEXT wording and avoiding outdated simplistic claims where current scholarship/curriculum is more careful;
- village organization / agriculture only where needed to explain the political-social framework, leaving detailed economic development to the next unit.

Use at least two useful non-AI historical-source images if their exact reuse terms can be documented. All new sentence and image records must remain `pending_factcheck`, and the new dataset must not be added to the public selector until the subsequent independent FACTCHECK run approves it.
