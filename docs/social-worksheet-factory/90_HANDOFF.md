# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Sengoku / Azuchi-Momoyama
- Active unit: Edo political system and society
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Edo political system and society

Created `subjects/social/worksheets/data/edo-political-system-society.js` as the next junior-high history unit. The unit is deliberately low-density and limited to the political/social framework; economy, culture, and foreign relations remain reserved for the next separate queue unit.

All seven study sentences, both image records, and the unit itself remain `pending_factcheck`. The dataset is intentionally not registered in `subjects/social/worksheets/index.html`, so learner-facing publication still stops at the nine verified units through Sengoku / Azuchi-Momoyama.

### Curriculum placement used for generation

MEXT current junior-high Social Studies commentary places this content under `近世の日本` → `江戸幕府の成立と対外関係` and explicitly requires learners to understand:

- establishment of the Edo bakufu and daimyo control;
- status order and rural society;
- establishment of rule by the shogunate and domains.

The commentary also asks learners to notice that the bakufu controlled daimyo while leaving daimyo responsible for politics within their domains, that people fulfilled roles within their respective statuses, that most farmers lived with the village as their social base, and that villages supported bakufu/domain finances. No exact school year has been encoded.

### Study structure

Two sections, seven concise original study sentences:

1. `江戸幕府と大名統制`
   - 徳川家康 / 征夷大将軍 / 1603
   - 幕府 / 藩
   - 武家諸法度 / 1615
   - 参勤交代 / 1635
2. `身分制と農村`
   - 武士 / 百姓 / 町人
   - 村 as the main living base for most farmers
   - 年貢 / 村請制

Only explicitly listed `terms` are cloze candidates; the shared deterministic seed/rate generator was not changed.

### Candidate factual basis used during generation

These references are candidate evidence only. The next FACTCHECK run must independently reopen authoritative sources and must not approve claims because they appear here.

- MEXT current junior-high Social Studies commentary for curriculum placement, shogunate/domain rule, status order, and village life.
- Edo-Tokyo Museum material stating that Tokugawa Ieyasu received the shogunal appointment and opened the Edo bakufu in 1603.
- National Archives of Japan `家康の内政・外交` for the 1615 Buke Shohatto and its role as fundamental rules for warrior houses / daimyo.
- National Archives digital exhibition `大名` for daimyo and domain governance context.
- Rekihaku material on daimyo processions and travel between domains and Edo.
- NDL Reference Cooperative Database material for historical regulations around daimyo attendance/processions.
- National Tax College material for village organization, annual tribute, and the village-responsibility (`村請`) system.

### Image candidates

No AI-generated historical images were used.

1. `Tokugawa_Ieyasu2.JPG`
   - exact Commons file identifies the subject as Tokugawa Ieyasu;
   - author field: Kano Tan'yū / 狩野探幽 (1602–1674);
   - source field: Osaka Castle main tower / 大阪城天守閣;
   - date field: early Edo period;
   - Commons licensing section states the work is public domain under Japanese copyright rules;
   - project status remains `pending_factcheck` until the independent review confirms file identity, source wording, and the exact reusable-license description suitable for the printed source note.

2. `Sankiko01.jpg`
   - Commons identifies it as `園部藩参勤交代行列図（1）`;
   - held by Nantan City Museum of Culture according to the file description;
   - made in 1904 and described as depicting a Sonobe-domain alternate-attendance procession around the Kaei era;
   - Commons licensing section marks the work public domain;
   - project status remains `pending_factcheck` until the next run independently confirms the provenance, file license, and whether the educational caption is sufficiently precise.

## Publication / integration state

`subjects/social/worksheets/index.html` was re-read after generation and still loads only the nine verified datasets through `sengoku-azuchi-momoyama.js`. The pending Edo dataset was not added.

No shared JavaScript, CSS, navigation, or print-layout code was modified in this run. The new file follows the existing unit object / `window.SOCIAL_WORKSHEET_UNITS.push(unit)` contract, and therefore preserves the existing explicit-term-only cloze and seeded-generation design. A browser/runtime syntax check was not available through the GitHub connector in this run; the next run should preserve this limitation in mind if it has a runnable checkout available.

## Exact next starting point

Next role is FACTCHECK. Independently review only:

`subjects/social/worksheets/data/edo-political-system-society.js`

Treat all seven study sentences and both images as untrusted. Reopen sources from scratch and verify at minimum:

1. `1603`: Ieyasu's appointment as Seii Taishogun and the wording `江戸に幕府を開いた`.
2. `幕府と藩`: ensure the sentence accurately reflects MEXT's formulation that the bakufu controlled daimyo while daimyo bore responsibility for government within their territories; avoid implying a modern federal structure or identical autonomy for all domains.
3. `1615 武家諸法度`: confirm date, promulgation context, and whether `大名が守るべき基本的な規則` is accurate enough for junior-high wording.
4. `1635 参勤交代`: distinguish pre-existing attendance practice from its formalization in the 1635 Buke Shohatto; verify the concise `江戸と領地を往復` wording and avoid false claims about every daimyo following an identical annual cycle in all periods.
5. `身分制`: confirm that `武士・百姓・町人など` and `それぞれの身分の中で職分を担った` match current curriculum wording. Do not revert to a simplistic rigid `士農工商` ranking model unless directly supportable and pedagogically required.
6. `農民と村`: confirm the MEXT wording that most farmers used villages as their living base and helped one another in agricultural work.
7. `年貢 / 村請制`: verify that villages bore collective responsibility for annual-tribute payment and that the statement about rural society supporting bakufu/domain finances is appropriately phrased.
8. `Tokugawa_Ieyasu2.JPG`: independently verify exact file identity, painter/source metadata, public-domain basis, and caption.
9. `Sankiko01.jpg`: independently verify exact file identity, Nantan City Museum holding statement, 1904 production / Kaei-era scene description, public-domain basis, and caption.

If and only if all pending material can be supported, correct wording as necessary, mark the unit/sentences/images `verified`, add `data/edo-political-system-society.js` to the public selector in chronological order, set `next_role` to `generate`, and advance the queue to `edo-economy-culture-foreign-relations`. Otherwise leave unsupported items pending and document the blocker precisely.
