# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Meiji state / industrialization
- Active unit: Imperialism / Sino-Japanese and Russo-Japanese wars
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Meiji state / industrialization

Independently reopened authoritative sources and treated all eight structured facts, eight learner sentences, the key-point/timeline wording, and both image records as untrusted before approval.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this material under `近代の日本と世界` → `明治維新と近代国家の形成`. It explicitly names `富国強兵・殖産興業政策` and directs schools to cover the reforms of the school, military and tax systems and the abolition of the status system. It also states that learners should notice that discrimination remained in reality despite the abolition of the status system, and that the `文明開化` trend changed society and people's lives.

### Independent checks and final wording

All eight facts and all eight learner sentences are now `verified`.

1. `富国強兵` / `殖産興業`
   - MEXT treats these as broad policies under which the new government carried out multiple reforms, not as one decree with one start date.
   - The unit wording already reflected that distinction and was retained.

2. `学制`
   - National Archives confirms August 1872 and describes the Gakusei as Japan's first basic legal framework for a modern school system.
   - The learner wording `全国的な近代学校制度を整備する方針が示された` is supportable and was retained.

3. `徴兵令`
   - National Archives confirms January 1873. Men were entered in military registers, conscription examination occurred at age 20, and only selected qualified men entered active service; exemptions also existed.
   - The worksheet deliberately does not say that every adult male actually served. Existing wording was retained.

4. `地租改正`
   - National Archives confirms the July 28, 1873 ordinance: land value formed the tax basis, the initial rate was 3 percent of land value, payment shifted from the former in-kind system to money, and the land-certificate holder was the taxpayer.
   - The concise learner sentence correctly captures the land-value basis and `金納` shift.

5. Status-system reform
   - National Diet Library material confirms the staged creation of categories including `華族・士族・平民` and the progressive removal of inherited legal restrictions.
   - MEXT specifically requires noticing that discrimination remained despite the legal abolition of the status system.
   - The structured fact and learner sentence were therefore tightened to add: `ただし、現実の社会には差別が残った。`
   - The `terms` array remains empty so the worksheet does not force a misleading memorization shorthand such as `四民平等`.

6. `殖産興業` / `富岡製糸場`
   - Tomioka City confirms that the Meiji government decided in 1870 to establish a government-run model mechanized silk-reeling factory, construction began in 1871, and the principal buildings were completed and operation started in 1872.
   - The official site also confirms the purposes of improving raw-silk quality/production and training technical instructors.
   - Existing wording was retained.

7. Shimbashi–Yokohama railway
   - National Archives confirms the September 12, 1872 opening and opening ceremony of the Shimbashi–Yokohama railway.
   - The learner wording identifies the 1872 full opening and does not confuse it with earlier temporary operation.

8. `文明開化`
   - MEXT describes the trend as social and lifestyle change under the influence of institutions and culture brought from Western countries.
   - National Archives' `文明開化と明治のくらし` exhibition documents examples including Western dress, railways and postal services; these support the examples used in the worksheet.

### Independent evidence reopened

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`, especially the pages covering `明治維新と近代国家の形成` and its content handling.
- National Archives `学制が公布される`.
- National Archives `徴兵令が発せられる`.
- National Archives `地租改正条例が制定される`.
- National Diet Library `明治憲法と日本国憲法に関する基礎的資料` for the staged status-system changes.
- Tomioka City official Tomioka Silk Mill history / site guide.
- National Archives `新橋・横浜間の鉄道が開通する`.
- National Archives `文明開化と明治のくらし`.

## Image verification

No AI-generated historical images are used.

### `Kundō shōgakkō kyōdō no zu.jpg`

- Exact Commons file reopened independently.
- Work: `訓童 小學校教導之圖`.
- Published: 1874.
- Commons describes it as a scene of an elementary school in the second year after the Gakusei proclamation.
- Creator field: 肉亭夏良, presumed Kobayashi Kiyochika.
- Commons identifies the underlying two-dimensional work as public domain in Japan and the United States and treats the faithful reproduction as public domain under its PD-Art policy.
- Project license note `Public Domain (PD-Japan / PD-US)` is retained.
- Record status: `verified`.

### `Tomioka Silk Mill East Cocoon Warehouse04.jpg`

- Exact Commons file reopened independently.
- Depicts the East Cocoon Warehouse at Tomioka Silk Mill; Commons states the building was built in 1872.
- Photograph date: 11 December 2010.
- Photographer: Hasec.
- Copyright holder explicitly released the photograph into the public domain worldwide (`PD-self`).
- Record status: `verified`.

## Publication and generator state

`subjects/social/worksheets/data/meiji-state-industrialization.js` is fully `verified` and is now loaded by `subjects/social/worksheets/index.html`.

The public selector therefore includes the verified junior-high history sequence through Meiji state / industrialization.

The shared generator itself was not changed. It continues to blank only terms explicitly listed in each sentence's `terms` array, preserving deterministic seeded blank selection and preventing arbitrary noun deletion.

Unrelated educational pages and the existing Cloudflare analytics markup were preserved.

## Exact next starting point

Next role is GENERATE. Work only on the next junior-high history queue unit:

`imperialism-sino-japanese-russo-japanese-wars`

Create a low-density explanation-sheet dataset first. Keep the unit boundary focused on imperialism, Japan's constitutional/international position as needed for context, the Sino-Japanese War, Russo-Japanese War, treaty/territorial consequences, and Korea/continental relations as required by the current curriculum. Do not prematurely absorb the later separate `Taisho democracy / interwar Japan` unit.

Collect authoritative facts from MEXT plus government archives, museums, diplomatic archives, Diet/National Archives or primary-source repositories. Use several useful non-AI historical-source images only when the exact file license can be recorded. Mark all new facts, learner sentences and image records `pending_factcheck`, do not publish the new dataset in `index.html`, then set `next_role` to `factcheck` and leave `verified_through` at `meiji-state-industrialization`.
