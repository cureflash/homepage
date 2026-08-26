# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is independently verified through C(4) `history-comprehensive-massification-contemporary-issues`.
- Pending backlog count: **167 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

- Batch 01: 5 modern junior-high history units — `FACTCHECK_BATCH_01.md`
- Batch 02: 6 constitution / three-powers junior-high civics units — `FACTCHECK_BATCH_02.md`
- Batch 03: 8 remaining junior-high civics units — `FACTCHECK_BATCH_03.md`
- Batch 04: 7 `歴史総合` A / B units — `FACTCHECK_BATCH_04.md`
- Batch 05: 6 `歴史総合` C units — `FACTCHECK_BATCH_05.md`

Total independently verified this session: **32 units**. Pending backlog moved from **199 to 167**.

## Batch 05 — `歴史総合` C「国際秩序の変化や大衆化と私たち」

Verified and published:

1. `history-comprehensive-massification-questions` — 国際秩序の変化や大衆化への問い
2. `history-comprehensive-wwi-international-cooperation` — 第一次世界大戦と国際協調体制
3. `history-comprehensive-mass-society-participation` — 大衆社会の形成と社会参加の拡大
4. `history-comprehensive-world-depression-cooperation-crisis` — 世界恐慌と国際協調体制の動揺
5. `history-comprehensive-wwii-postwar-order` — 第二次世界大戦と戦後国際秩序
6. `history-comprehensive-massification-contemporary-issues` — 国際秩序の変化・大衆化と現代的課題

The current MEXT high-school Geography/History commentary is the curriculum authority. Specific Japanese/international chronology was independently reopened against the National Archives of Japan, NDL, MOFA Diplomatic Archives, JACAR, and the UN Treaty Collection where appropriate.

## Corrections made during Batch 05

- `massification-questions`: replaced the generated narrow list centered on total war / suffrage / mass media with MEXT's actual C(1) examples: international relations becoming closer, rise of the United States and Soviet Union, colonial independence, changes in the political/economic/social position of the masses, and changes in lifestyles.
- `wwi-international-cooperation`: aligned the unit to MEXT's treatment of total war, the League of Nations, international disarmament and postwar cooperation; independently rechecked the Washington Conference framework with MOFA material.
- `mass-society-participation`: aligned the unit to MEXT's explicit knowledge items: mass political participation and women's status, Taisho democracy and party politics, mass consumption/culture, education and mass media; reused independently checked NDL evidence for the 1925 male universal-suffrage reform.
- `world-depression-cooperation-crisis`: replaced generic claims with MEXT-supported comparison of New Deal / bloc-economy responses, fascism, and Japanese foreign-policy changes; independently rechecked Japan's 1933 League withdrawal notice with the National Archives.
- `wwii-postwar-order`: expanded the generated 1945-only treatment to MEXT's required postwar order: UN/international economic system, early Cold War and Asian developments, occupation reforms / Constitution, and the peace treaty / restoration of Japanese independence. Rechecked surrender-document chronology with JACAR, UN Charter entry into force with the UN Treaty Collection, and the 1951/1952 San Francisco Peace Treaty chronology with MOFA.
- `massification-contemporary-issues`: removed a generic “peace and human rights” summary and aligned C(4) with MEXT's explicit paired frameworks: 自由・制限、平等・格差、開発・保全、統合・分化、対立・協調. The male universal-suffrage / Peace Preservation Law contrast is retained as MEXT's own example for the 自由・制限 viewpoint.

## Publication / backlog state

- All six Batch 05 units have unit/fact/sentence `factcheckStatus: "verified"`.
- None of these six units contains an image, so no image-license decision was required.
- The public selector loads the six C units immediately after the verified A / B block.
- No D「グローバル化と私たち」 unit is public yet.
- Current pending backlog: **167**.

## Exact next social action

Continue independent FACTCHECK through the remaining six `歴史総合` D units:

1. `history-comprehensive-globalization-questions`
2. `history-comprehensive-cold-war-decolonization`
3. `history-comprehensive-high-growth-order-change`
4. `history-comprehensive-cold-war-end-regional-integration`
5. `history-comprehensive-market-information-globalization`
6. `history-comprehensive-contemporary-issues-outlook`

Completing those six finishes the generated `歴史総合` queue; the following backlog head is `japanese-history-paleolithic-environment`.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record, and image claim as untrusted until independently reopened and checked.
- Prefer the current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance, and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
