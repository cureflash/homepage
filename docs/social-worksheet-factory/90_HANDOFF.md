# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Muromachi period
- Active unit: Sengoku / Azuchi-Momoyama
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Sengoku / Azuchi-Momoyama

Created `subjects/social/worksheets/data/sengoku-azuchi-momoyama.js` as the next junior-high history unit. It is intentionally low-density and remains entirely `pending_factcheck`. It has NOT been added to the public `subjects/social/worksheets/index.html`.

### Curriculum placement checked before generation

Current MEXT junior-high Social Studies commentary places this content in `近世の日本` → `世界の動きと統一事業`. It explicitly requires understanding:

- the background and impact of European arrivals;
- Oda/Toyotomi unification;
- the purpose of unification-government policies;
- land surveys and sword hunts;
- the cultural development around warriors and wealthy townspeople.

The commentary explicitly names `織田・豊臣による統一事業` and requires treatment of `検地・刀狩`. No fixed school year was assigned.

## Generated study structure

Two sections, eight concise study sentences:

### 1. European contact and Oda Nobunaga

- 1543 firearms / 種子島
- 1549 Francis Xavier / Christianity
- Oda Nobunaga and the 1568 Kyoto entry
- 楽市楽座 and commercial policy

### 2. Toyotomi Hideyoshi and unification / Momoyama culture

- Hideyoshi continuing the unification project and the 1590 Odawara campaign
- 太閤検地
- 1588 刀狩
- 桃山文化 / 障壁画

Core terms are explicit in each `terms` array, so the existing generator will blank only those terms. No arbitrary noun blanking was introduced.

## Candidate factual basis used during generation

These are GENERATE references only. The next FACTCHECK run must independently reopen sources and treat every sentence as untrusted.

- MEXT current junior-high Social Studies commentary for current placement and the required treatment of European arrivals, Oda/Toyotomi unification, land surveys, sword hunt and culture.
- Nishinoomote City / Tanegashima historical-cultural-property pages for the 1543 firearms arrival.
- Kagoshima Prefecture history pages for Xavier's 1549 landing and the beginning of Christian missionary activity in Japan.
- Nagoya City Museum for Nobunaga's expansion, commercial policy, and Hideyoshi succeeding the unification effort.
- Omihachiman City historical landscape materials for Azuchi Castle construction and the 1577 Azuchi castle-town `楽市` provisions.
- Odawara City for the 1590 Odawara campaign and Hideyoshi's nationwide unification.
- National Diet Library Search / linked historical materials for `太閤検地` and the 1588 `豊臣秀吉刀狩條書`.
- Kyoto National Museum and Tokyo National Museum material for large-scale Momoyama wall paintings and the cultural context of castles / major temples.

## New image candidates

No AI-generated historical images were used.

### 1. Oda Nobunaga portrait

- file: `Odanobunaga.jpg`
- exact Commons page identifies the work as `Portrait of Oda Nobunaga (detail)` / `織田信長像（部分）`
- artist: Kano Sōshū / 狩野宗秀
- original work dated 1583
- collection: Chōkō-ji / 長興寺
- Commons states the work is public domain in Japan; the file is tagged with the Public Domain Mark route
- project currently records `Public Domain Mark 1.0`
- status remains `pending_factcheck`

### 2. Toyotomi Hideyoshi portrait

- file: `Toyotomi hideyoshi.jpg`
- exact Commons page identifies it as part of a Hideyoshi portrait held by Kōdai-ji / 高台寺
- artist field identifies Kanō Mitsunobu / 狩野光信
- circa 1601
- Commons treats the faithful reproduction of the old two-dimensional work as public domain and explicitly displays Public Domain Mark 1.0
- project currently records `Public Domain Mark 1.0`
- status remains `pending_factcheck`

## Publication state

The public worksheet selector remains unchanged and contains only the eight verified units through Muromachi. `sengoku-azuchi-momoyama.js` must not be registered publicly until every sentence and both images independently pass FACTCHECK.

The shared generator and print infrastructure were not changed in this run. The canonical path remains `subjects/social/worksheets/`; the retired root path was not used or recreated.

## Exact next starting point

Perform an independent FACTCHECK of only:

`subjects/social/worksheets/data/sengoku-azuchi-momoyama.js`

Treat all eight sentence records and both image records as untrusted. Reopen authoritative sources from scratch rather than accepting this generation summary.

Verify at minimum:

1. MEXT current curriculum placement under `近世の日本` / `世界の動きと統一事業` and whether each chosen core term is appropriate for junior-high scope.
2. 1543 wording: whether `ポルトガル人を乗せた船が種子島に来航` is sufficiently precise; distinguish the ship's broader context from the Portuguese passengers and avoid overstating a simple Portuguese-ship narrative.
3. 1549 Xavier: landing location/date, Jesuit status, and whether `日本でキリスト教の布教を始めた` is appropriately phrased.
4. Nobunaga 1568: whether the wording `足利義昭を奉じて京都に入った` is supported and pedagogically precise.
5. `楽市楽座`: confirm the policy wording and avoid implying a single uniform nationwide institution; verify the Azuchi castle-town evidence and the broader commercial-policy characterization.
6. 1590 Odawara campaign: verify that the learner-level statement that nationwide unification was achieved after the campaign is supportable.
7. `太閤検地`: independently verify the description of measured area / yield / cultivators and whether the wording overcompresses a long-running policy.
8. 1588 `刀狩`: verify date, scope, actual weapon categories, and avoid overstating complete disarmament of all peasants.
9. `桃山文化` / `障壁画`: verify that the sentence fairly characterizes the period and that `豪壮・華麗` is not presented as the only cultural style.
10. Both Commons image records: exact file identity, work/artist/collection/date, public-domain basis, Public Domain Mark metadata, and whether the captions distinguish old artwork from its modern digital reproduction correctly.

Correct or reject unsupported wording. Only after all eight sentences and two images pass should the unit/image/sentence statuses become `verified`, the dataset be added to the public selector, `verified_through` advance to `sengoku-azuchi-momoyama`, and `next_role` return to `generate` for `Edo political system and society`.
