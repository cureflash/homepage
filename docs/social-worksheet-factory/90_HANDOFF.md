# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Meiji state / industrialization
- Active unit: Imperialism / Sino-Japanese and Russo-Japanese wars
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Imperialism / Sino-Japanese and Russo-Japanese wars

Created `subjects/social/worksheets/data/imperialism-sino-japanese-russo-japanese-wars.js` as the next junior-high history unit. The dataset is deliberately not registered in the public selector yet. Every new fact, learner sentence and image record remains `pending_factcheck`.

### Unit boundary

The unit is intentionally limited to the late-19th/early-20th-century imperialist setting and Japan's wars/continental relations through the 1910 annexation of Korea. It does not absorb the later separate `Taisho democracy / interwar Japan` unit.

Two low-density sections, eight structured facts and eight learner sentences:

1. `列強の進出と日清戦争`
   - 帝国主義
   - 1894 日清戦争
   - 1895 下関条約
   - 三国干渉
2. `日露戦争と韓国への支配拡大`
   - 1902 日英同盟
   - 1904 日露戦争
   - 1905 ポーツマス条約
   - 1910 韓国併合

The shared generator contract is unchanged: only explicit `terms` entries can become blanks, so arbitrary nouns are not blanked and seeded generation remains deterministic.

## Candidate factual basis used during GENERATE

These are generation references only. The next FACTCHECK run must independently reopen authoritative sources and treat every claim as untrusted.

### Curriculum placement

- MEXT current junior-high Social Studies curriculum/commentary places the material in `近代の日本と世界` and requires learners to understand Japan's changing international position and continental relations through the Sino-Japanese War, Russo-Japanese War and treaty revision.
- The unit uses the imperialist expansion of Western powers as context but does not turn this into a separate world-history survey.

### Candidate fact sources

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
- MEXT current junior-high Social Studies curriculum page
- National Archives of Japan `近代国家 日本の登場―日清戦争`
- National Archives learning content for the Treaty of Shimonoseki
- MOFA Diplomatic Archives `条約書にみる明治の日本外交`
- MOFA Diplomatic Archives Q&A on the Triple Intervention
- National Archives `近代国家 日本の登場―日露戦争`
- MOFA Diplomatic Archives `史料と解説―日露戦争`
- National Archives learning content for the Treaty of Portsmouth
- National Archives `韓国併合条約が結ばれる`

## Generated claims requiring independent review

Treat all eight as untrusted.

1. Whether the concise explanation of late-19th-century colonial/rights expansion is suitable for the core term `帝国主義` at current junior-high level and is correctly placed in this unit.
2. Whether the 1894 causation wording is accurate: the Korean peasant uprising/甲午農民戦争, Qing intervention, Japanese intervention, failure to withdraw, and escalation into the Sino-Japanese War.
3. Exact 1895 Treaty of Shimonoseki terms: recognition of Korean independence, Taiwan/Penghu/Liaodong cessions and the 200 million tael indemnity.
4. Exact Triple Intervention sequence: Russia/Germany/France recommendation, Japanese acceptance, and later Liaodong return to Qing.
5. Whether the 1902 Anglo-Japanese Alliance sentence appropriately relates Russian expansion in Manchuria to Japanese security policy without oversimplifying causation.
6. Russo-Japanese War wording: breakdown of negotiations over Manchuria/Korea, 1904 opening of war, and the need to avoid implying that Japanese battlefield success meant unlimited war capacity.
7. Exact 1905 Portsmouth terms, especially terminology around Japan's position in Korea, the lease rights to Port Arthur/Dalian, the Changchun-south railway interests, southern Sakhalin, and the absence of an indemnity claim in the learner sentence.
8. 1910 Korea Annexation wording and curriculum placement. Independently verify the annexation treaty's signature/effective dates and avoid euphemistic wording that obscures colonial rule.

## Image candidates

No AI-generated historical images were used.

### 1. Treaty of Shimonoseki Japanese ratification image

- File: `Treaty of Shimonoseki Nippon tennō.jpg`
- Current learner label: `日清講和条約（下関条約）の日本側批准書`
- Commons summary: dated 1895; source listed as the National Palace Museum database of Qing treaties/agreements preserved by the ROC Ministry of Foreign Affairs; author listed as the Empire of Japan government.
- GENERATE-stage license record: `Public Domain (PD-Japan-exempt; Japan Copyright Act Article 13)`.
- Next FACTCHECK must independently confirm that the specific pictured document is accurately described as the Japanese ratification/imperial-signature version and whether the project should retain exactly this license wording.

### 2. Korea Annexation Treaty original-document image

- File: `Japan–Korea Annexation Treaty 1.jpg`
- Current learner label: `韓国併合に関する条約`
- Commons summary links the image to JACAR Ref. A03020879400 / National Archives of Japan and dates it 22 August 1910.
- Current credit: Empire of Japan / Korean Empire; National Archives / JACAR; Wikimedia Commons.
- GENERATE-stage license record: `Public Domain (PD-Japan / PD-1996; Commons file-page tags)`.
- Next FACTCHECK must reopen the exact Commons file page, verify all relevant copyright tags and provenance, and verify that the selected page is pedagogically meaningful and accurately captioned.

## Publication state

The newly generated dataset is NOT loaded by `subjects/social/worksheets/index.html`. The public selector must remain verified-only until the next FACTCHECK approves all eight facts, all eight learner sentences, key-point/timeline wording and both image records.

Existing verified units, unrelated educational pages, and shared worksheet/print infrastructure were not modified.

## Validation note

The dataset was written through the GitHub contents API. A direct raw-GitHub fetch from the execution container was blocked by the current environment, so a local `node --check` could not be performed in this run. The next run should perform syntax validation if the environment permits before publication. Do not treat this transient tooling limitation as factual approval.

## Exact next starting point

Next role is FACTCHECK. Work only on:

`subjects/social/worksheets/data/imperialism-sino-japanese-russo-japanese-wars.js`

Independently reopen MEXT plus authoritative National Archives/MOFA/JACAR material from scratch. Do not use this handoff's conclusions as evidence. Verify every pending fact/sentence, the key-point/timeline claims, and both exact image file pages/licenses.

Correct or reject unsupported wording. If and only if all material passes:

1. mark the unit, eight structured facts, eight learner sentences and both image records `verified`;
2. add the dataset script to `subjects/social/worksheets/index.html` while preserving unrelated markup;
3. validate JavaScript/links/print behavior as far as available;
4. set `verified_through` to `imperialism-sino-japanese-russo-japanese-wars`;
5. set `next_role` to `generate`;
6. advance `active_unit` to `taisho-democracy-interwar-japan`;
7. update this handoff with the exact independent evidence and any corrections made.
