# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Bakumatsu and Meiji Restoration
- Active unit: Meiji state / industrialization
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Meiji state / industrialization

Created `subjects/social/worksheets/data/meiji-state-industrialization.js` as the next junior-high history unit. The dataset is intentionally low-density and remains completely `pending_factcheck`; it is not loaded by the public selector.

### Curriculum boundary used during generation

Freshly reopened MEXT current junior-high Social Studies commentary places this material under `近代の日本と世界` → `明治維新と近代国家の形成`. It explicitly requires `富国強兵・殖産興業政策`, and says that the reforms under this policy should include the school system, military system, tax system, abolition of the status system and related state-building changes. It also requires the `文明開化` trend and understanding that people's lives changed greatly.

This unit therefore does not repeat the preceding verified Bakumatsu unit beyond connective context. Perry, the Ansei treaties, Taisei Hokan, Boshin War, Charter Oath and Haihan-chiken are not re-taught here. Constitutional government and later foreign policy are left for subsequent units.

### Structured content generated

Eight structured facts and eight concise learner sentences were created. All are `pending_factcheck`.

Core coverage:

1. `富国強兵` as the overall state-building direction.
2. `学制` — 1872; nationwide modern school-system policy.
3. `徴兵令` — 1873; registration / examination / selection for military service.
4. `地租改正` — 1873; tax based on land value and shift from in-kind payment to `金納`.
5. Reform of the old status system, stated cautiously as a gradual removal of legal restrictions rather than the simplistic claim that social discrimination immediately disappeared.
6. `殖産興業` and `富岡製糸場` — model mechanized silk-reeling factory established by the Meiji government, operating from 1872.
7. `新橋`–`横浜` railway — Japan's first railway full opening in 1872.
8. `文明開化` — spread of Western-derived institutions / cultural forms such as Western dress, Western-style architecture, railways and postal services.

The cloze terms remain explicit. The status-system sentence intentionally has an empty `terms` array because the historical change is important context but the generator should not force a potentially misleading shorthand such as `四民平等` into a memorization blank without independent review.

### Candidate factual evidence collected during GENERATE

These are generator references only. The next run must independently reopen authoritative sources and treat every claim as untrusted.

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`.
- National Archives `学制が公布される` — confirms the August 1872 proclamation and describes it as Japan's first modern school-system basic legislation.
- National Archives `徴兵令が発せられる` — confirms January 1873 and the details of conscription examination, selection and service, including contemporary exemptions.
- National Archives `地租改正条例が制定される` — confirms July 1873, calculation from land value, 3 percent rate at introduction, monetary payment and land-certificate holder as taxpayer.
- National Diet Library constitutional-history research material for the staged dismantling of the old class/status order, the creation of kazoku / shizoku / heimin categories and abolition of a number of inherited legal restrictions.
- Tomioka City official Tomioka Silk Mill site — describes the mill as an 1872 government-established model mechanized silk-reeling factory intended to improve raw-silk quality, production and technical training.
- National Archives `新橋・横浜間の鉄道が開通する` — confirms the 1872 full opening and opening ceremony.
- National Archives `文明開化と明治のくらし` and NDL Image Bank Meiji print material — document changes including Western dress, Western-style buildings, railway, postal system and other new practices / technologies.

### Image candidates

No AI-generated historical images were used. Both image records are `pending_factcheck` and must be independently reopened next run.

1. `Kundō shōgakkō kyōdō no zu.jpg`
   - learner label: `明治初期の小学校を描いた錦絵`
   - Commons summary identifies the work as `訓童 小學校教導之圖`, published in 1874, showing an elementary-school scene in the second year after the Gakusei proclamation.
   - author field: 肉亭夏良, presumed Kobayashi Kiyochika.
   - exact Commons page treats the two-dimensional work and faithful reproduction as public domain in Japan / United States.
   - project currently records `Public Domain (PD-Japan / PD-US)`.

2. `Tomioka Silk Mill East Cocoon Warehouse04.jpg`
   - learner label: `富岡製糸場 東置繭所`
   - Commons identifies the depicted East Cocoon Warehouse as built in 1872.
   - photograph date: 11 December 2010.
   - photographer: Hasec.
   - uploader/copyright holder explicitly released the photograph into the public domain (`PD-self`).

### Publication and generator state

The new dataset is deliberately not added to `subjects/social/worksheets/index.html`. Only independently verified units remain learner-facing.

The shared worksheet generator was not modified. Only terms explicitly listed in each sentence's `terms` array can become blanks, so the existing deterministic seed/rate behavior and arbitrary-noun protection remain intact. Unrelated educational pages were not touched.

A direct `node --check` attempt from the local execution container could not fetch the newly created GitHub file because DNS resolution for `raw.githubusercontent.com` failed. The GitHub connector successfully created and re-fetched the file, but syntax validation should be repeated in the next run if network/tooling permits.

## Exact next starting point

Next role is FACTCHECK. Work only on:

`subjects/social/worksheets/data/meiji-state-industrialization.js`

Treat all eight facts, eight learner sentences, key-point/timeline wording and both image records as untrusted. Independently reopen MEXT and authoritative sources from scratch rather than relying on the generator summary above.

At minimum verify:

1. whether `富国強兵` and `殖産興業` are used in a way consistent with the current MEXT curriculum and do not imply one single decree or start date;
2. exact date / nature of the 1872 `学制`, including whether `全国的な近代学校制度を整備する方針` is appropriately worded;
3. the 1873 `徴兵令` wording, especially avoiding a false implication that every adult male actually served;
4. the 1873 `地租改正` wording, including land-value basis, money payment and whether any detail needs qualification;
5. the status-system sentence, especially the distinction between legal reform and the persistence of social discrimination; reject any wording that overstates immediate equality;
6. the relationship between `殖産興業` and the government-established Tomioka Silk Mill, including its 1872 start of operations / model-factory purpose;
7. the distinction between temporary opening / construction milestones and the 1872 full opening of the Shimbashi–Yokohama railway;
8. the definition and examples used for `文明開化`;
9. exact image identities, date / creator fields, captions and the actual Commons reuse status for both files.

If and only if the complete unit passes independent review, mark the fact, sentence, image and unit statuses `verified`, add `data/meiji-state-industrialization.js` to the public selector, set `verified_through` to `meiji-state-industrialization`, set `next_role` to `generate`, and advance the junior-high history queue to `imperialism-sino-japanese-russo-japanese-wars`.
