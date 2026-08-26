# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 31 units
- Current high-school course: `歴史総合`
- Generated through: C(3)-b `第二次世界大戦と戦後国際秩序`
- Exact next generation start: C(4) `国際秩序の変化や大衆化と現代的な諸課題`
- Public `subjects/social/worksheets/index.html` remains verified-only.

## Completed GENERATE batch — 10 units

All files below retain `formalCourse: 歴史総合`, separate formal section/subsection metadata, and the worksheet-density-only `productionUnit`. Every fact, learner sentence and timeline entry remains `pending_factcheck`; none was added to the public selector.

1. `subjects/social/worksheets/data/history-comprehensive-modernization-questions.js`
   - B(1) `近代化への問い`
   - compares sources about transport, industry, participation, education, labor/family and migration to form historical questions

2. `subjects/social/worksheets/data/history-comprehensive-asia-economy-society-18c.js`
   - B(2)-a under formal B(2) `結び付く世界と日本の開国`
   - production, circulation, managed trade and Asian/interregional trade in the 18th century

3. `subjects/social/worksheets/data/history-comprehensive-industrial-revolution-world-market-openings.js`
   - B(2)-b under formal B(2)
   - Industrial Revolution, transport, world markets, China's opening and Japan's opening

4. `subjects/social/worksheets/data/history-comprehensive-nation-state-meiji-restoration.js`
   - B(3) `国民国家と明治維新`
   - constitutional systems, nation-states, Meiji state formation and imperialism

5. `subjects/social/worksheets/data/history-comprehensive-modernization-contemporary-issues.js`
   - B(4) `近代化と現代的な諸課題`
   - uses the paired MEXT perspectives such as freedom/restriction and equality/disparity

6. `subjects/social/worksheets/data/history-comprehensive-international-order-mass-society-questions.js`
   - C(1) `国際秩序の変化や大衆化への問い`
   - forms questions from international-relations, participation, media and lifestyle evidence

7. `subjects/social/worksheets/data/history-comprehensive-wwi-international-cooperation.js`
   - C(2)-a under formal C(2) `第一次世界大戦と大衆社会`
   - total war, the postwar settlement, League of Nations and Washington system

8. `subjects/social/worksheets/data/history-comprehensive-mass-society-social-participation.js`
   - C(2)-b under formal C(2)
   - political participation, social movements, mass consumption and mass media

9. `subjects/social/worksheets/data/history-comprehensive-great-depression-order-crisis.js`
   - C(3)-a under formal C(3) `経済危機と第二次世界大戦`
   - Great Depression, differing state responses, fascism and weakening international cooperation

10. `subjects/social/worksheets/data/history-comprehensive-wwii-postwar-order.js`
    - C(3)-b under formal C(3)
    - global total war, civilian suffering, United Nations, Cold War, occupation reforms and Japan's restored independence

## Generation evidence and validation

The generation-stage curriculum/content basis was reopened from authoritative public sources:

- 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』
  - `https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf`
- 国立国会図書館『史料にみる日本の近代』chapters 1–5
  - `https://www.ndl.go.jp/modern/index.html`

Generation evidence is not factual approval. A later explicit FACTCHECK batch must independently reopen sources and verify every pending claim.

Local validation completed successfully:

- `node --check` passed for every `history-comprehensive-*.js` dataset, including all 10 new files.
- A VM-based contract check loaded the 10 new files and validated 10 units / 111 fact-and-sentence records.
- All new unit/fact/sentence/timeline statuses are `pending_factcheck`.
- All cloze markers exactly match their explicit `terms` arrays.
- All referenced source IDs resolve inside their unit; no unit/item ID duplicates were found in the batch.
- The public selector contains none of the 10 new files.

No image was added. These low-density overview/question sheets do not require an image to meet their learning purpose, and no provisional license record was introduced.

## Accumulated unverified backlog — 31 units

The prior 21 units remain pending. This batch appended, in order:

1. `history-comprehensive-modernization-questions`
2. `history-comprehensive-asia-economy-society-18c`
3. `history-comprehensive-industrial-revolution-world-market-openings`
4. `history-comprehensive-nation-state-meiji-restoration`
5. `history-comprehensive-modernization-contemporary-issues`
6. `history-comprehensive-international-order-mass-society-questions`
7. `history-comprehensive-wwi-international-cooperation`
8. `history-comprehensive-mass-society-social-participation`
9. `history-comprehensive-great-depression-order-crisis`
10. `history-comprehensive-wwii-postwar-order`

Do not automatically fact-check this backlog on the next run.

## Exact next starting point

Remain in GENERATE BACKLOG mode. Start from item 13 of the recorded `歴史総合` queue:

1. C(4) 国際秩序の変化や大衆化と現代的な諸課題
2. D(1) グローバル化への問い
3. D(2)-a 冷戦と植民地独立
4. D(2)-b 高度経済成長・国際秩序の変容
5. D(3)-a 冷戦終結・地域統合
6. D(3)-b 市場経済の変容・情報通信・グローバル化
7. D(4) 現代的な諸課題の形成と展望

These are the seven remaining `歴史総合` production units. Because `generation_batch_target` remains 10, the next run must expand the ordered `日本史探究` queue from the current MEXT curriculum/commentary before crossing courses, then continue with only the first three units of that newly recorded queue. Do not infer those three units before the queue is grounded and written into `20_EXECUTION_PLAN.md`.

Every new unit must remain `pending_factcheck`, stay out of the public selector, and be appended to the backlog.

## Commit blocker

The requested local commit could not be created in this execution profile. `git add` failed with:

`fatal: Unable to create '/home/hikaru0816tsc/homepage/.git/index.lock': Read-only file system`

All 13 intended files remain intact in the working tree: the 10 new datasets plus `20_EXECUTION_PLAN.md`, `90_HANDOFF.md`, and `STATUS.json`. No unrelated file was changed or discarded. Once `.git` is writable, stage exactly those 13 files, rerun the recorded checks, and commit the batch before pushing.
