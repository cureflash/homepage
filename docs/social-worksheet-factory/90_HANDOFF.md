# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Edo political system and society
- Active unit: Edo economy / culture / foreign relations
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Edo political system and society

Independently reopened authoritative sources and treated all seven study sentences and both image records as untrusted before approval.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this material under `近世の日本` → `江戸幕府の成立と対外関係`. It explicitly requires learners to understand `江戸幕府の成立と大名統制`, `身分制と農村の様子`, and the establishment of `幕府と藩による支配`.

The detailed commentary further states that:

- the bakufu controlled daimyo while making daimyo responsible for government within their territories;
- people fulfilled roles within their respective statuses;
- the majority of farmers used the village as their living base and helped one another in agricultural work;
- rural communities supported the economies of the bakufu and domains.

No fixed school year has been assigned.

### Factual checks and corrections

All seven sentence records are now `verified`. Three wordings were tightened during independent review.

1. `1615 武家諸法度`
   - Generator wording treated it mainly as rules for daimyo.
   - National Archives states that the 1615 Buke Shohatto was a fundamental law to be observed by the warrior houses and that it was promulgated to the assembled daimyo.
   - Final learner wording: `1615年、幕府は武家全体が守る基本法として武家諸法度を諸大名に示した。`

2. `1635 参勤交代`
   - Removed the overly simple statement that daimyo merely alternated between Edo and their domains.
   - NDL Search independently confirms a surviving Kanei Buke Shohatto copy dated 1635-06-21, and scholarly metadata identifies the Kanei law's provision regulating daimyo sankin as the institutionalization of sankin-kotai.
   - Final learner wording: `1635年の武家諸法度では大名の江戸への参勤などが規定され、参勤交代が制度化された。`

3. `村請制`
   - Tightened the sentence to match National Tax College's formulation that villages bore responsibility for paying `年貢と諸役`.
   - Final learner wording: `江戸時代には、村が年貢と諸役を納める責任を負う村請制が用いられ、農村は幕府や藩の経済を支えた。`

The remaining claims also passed independent review:

- Tokugawa Ieyasu was appointed Seii Taishogun in 1603 and opened the Edo bakufu; Edo-Tokyo Museum states this directly.
- MEXT supports the formulation that the bakufu controlled daimyo while daimyo governed their own territories, producing bakufu-domain rule.
- MEXT supports `武士・百姓・町人など` without reverting to a simplistic rigid `士農工商` hierarchy.
- MEXT explicitly supports the village as the living base for the majority of farmers and mutual aid in farm work.
- National Tax College independently confirms the mura-uke system and village-level responsibility for nengu and other dues.

### Independent evidence retained in the unit

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`, especially the detailed explanation of `江戸幕府の成立と対外関係`.
- Edo-Tokyo Museum `徳川将軍家へようこそ` for 1603 Ieyasu / Edo bakufu.
- National Archives of Japan `家康の内政・外交―武家諸法度` for the 1615 law and its character as a fundamental warrior law.
- NDL Search `武家諸法度写` dated 1635-06-21 and related NDL material on sankin-kotai institutionalization.
- National Tax College `年貢と諸役`, `見取場の年貢割付状`, and related tax-history material for mura-uke and village payment responsibility.

## Image verification

No AI-generated historical images are used.

### Tokugawa Ieyasu portrait

- Exact Commons file: `Tokugawa_Ieyasu2.JPG`.
- File description identifies the subject as Tokugawa Ieyasu.
- Date field: early Edo period.
- Source field: Osaka Castle main tower.
- Author: Kano Tan'yū / 狩野探幽 (1602–1674).
- Commons licensing section states the copyright has expired under Japanese law and marks the work public domain / PD-Japan.
- Final source note records `Public Domain (PD-Japan)`.
- Record status: `verified`.

### Sonobe-domain sankin-kotai procession

- Exact Commons file: `Sankiko01.jpg`.
- Description: `園部藩参勤交代行列図（1）`.
- File page states `南丹市文化博物館蔵`, `明治37年（1904年）制作`, and that it depicts a Sonobe-domain sankin-kotai procession around the Kaei era.
- Commons licensing section marks the work public domain / PD-Japan.
- Final source note records `Public Domain (PD-Japan)`.
- Record status: `verified`.

## Publication / integration state

`subjects/social/worksheets/data/edo-political-system-society.js` is fully `verified` and is now registered in `subjects/social/worksheets/index.html` after `sengoku-azuchi-momoyama.js`.

The public selector therefore contains ten verified junior-high history units through Edo political system and society.

The shared worksheet engine was not changed. Only explicit terms in each sentence's `terms` array can become blanks, and seeded blank selection remains deterministic. No unrelated educational page was modified.

A runnable browser checkout was not available through the GitHub connector, so no local browser/runtime print test was executed in this run. The dataset follows the already-used unit object / `window.SOCIAL_WORKSHEET_UNITS.push(unit)` contract, and the public script ordering was checked directly in `index.html`.

## Exact next starting point

Next role is GENERATE. Work only on:

`edo-economy-culture-foreign-relations`

Create the low-density A4 explanation-sheet data first, keeping it separate from the already verified political/social framework unit.

Likely core coverage should remain within the queue definition `Edo economy / culture / foreign relations` and current MEXT `近世の日本`, for example:

- agriculture, commerce, transport, and urban development;
- Osaka / Edo and merchant activity where useful;
- Genroku / Kasei-era representative culture only at a low enough density for the sheet;
- foreign-relations framework including Nagasaki trade, Korea via Tsushima, Ryukyu, and Ainu northern trade, while avoiding the obsolete oversimplification that `鎖国 = 完全な国際的孤立`.

Use concise original sentences from authoritative facts, explicit core cloze terms only, and at least two useful non-AI historical-source images where reuse metadata can be documented. Leave every new sentence, image, and the unit itself `pending_factcheck`; do not register the new dataset in `index.html` until the following independent FACTCHECK run passes it. At the end, set `next_role` to `factcheck` and preserve the exact next batch in STATUS/HANDOFF.
