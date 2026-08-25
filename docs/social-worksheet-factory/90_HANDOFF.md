# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Bakumatsu and Meiji Restoration
- Active unit: Meiji state / industrialization
- Next role: GENERATE
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed FACTCHECK — Bakumatsu and Meiji Restoration

Independently reopened authoritative sources and treated all eight facts, eight learner sentences, timeline/key-point wording, and both image records as untrusted before approval.

### Curriculum placement

MEXT current junior-high Social Studies commentary places this content under `近代の日本と世界` → `明治維新と近代国家の形成`. It explicitly requires `開国とその影響` and connects it to the movement leading to the Meiji Restoration. The same section places `廃藩置県` among reforms under the new government's policies. This unit therefore remains within the junior-high history stage without assigning it to a fixed school year.

### Independent factual verification and corrections

All eight facts and learner sentences are now `verified`. Several wordings were tightened:

1. **1853 Perry arrival**
   - National Archives confirms Perry was commander of the U.S. East India Squadron and arrived off Uraga with four ships: Susquehanna, Mississippi, Plymouth, and Saratoga.
   - The presidential letter was actually handed to the bakufu representatives at Kurihama on 14 July 1853, so the sentence now distinguishes `浦賀沖に来航` from `久里浜で国書を渡した`.

2. **1854 Treaty of Peace and Amity**
   - National Archives and JACAR confirm Shimoda and Hakodate were opened under the treaty.
   - The learner sentence now explicitly says that this treaty did **not** yet contain provisions for bilateral commerce, preventing `開国` from being read as full commercial opening in 1854.

3. **1858 Treaty of Amity and Commerce**
   - National Archives confirms provisions for treaty ports/markets, tariffs, and consular jurisdiction.
   - National Archives' treaty-revision materials explicitly characterize the Ansei treaties as recognizing consular jurisdiction for foreign countries and denying Japan tariff autonomy. The sentence therefore retains `領事裁判権` and `関税自主権` as core terms and frames their later removal/recovery as treaty-revision issues.

4. **Satsuma / Choshu**
   - Replaced the vague causal wording with the independently confirmed chronology: the Satsuma–Choshu alliance was established in 1866, followed by stronger anti-bakufu / overthrow movements. This avoids implying that one simple cause directly ended the bakufu.

5. **1867 Taisei Hokan and Restoration of Imperial Rule**
   - National Archives confirms Tokugawa Yoshinobu's Taisei Hokan in October 1867 and the Restoration of Imperial Rule proclamation on 9 December 1867.

6. **Boshin War**
   - National Archives identifies the Battle of Toba-Fushimi in January 1868 as the beginning of the Boshin War and its Bakumatsu chronology records the surrender of Enomoto Takeaki's side at Hakodate in 1869 as the end of the war.
   - The learner sentence now says `箱館で旧幕府軍が降伏` rather than the looser `箱館での降伏`.

7. **Charter Oath**
   - National Archives confirms the Charter Oath was issued on 14 March 1868 as the new government's fundamental policy.
   - The concise learner paraphrase about opening deliberation and seeking knowledge from the world remains supportable and does not reproduce protected textbook prose.

8. **Haihan-chiken**
   - National Archives confirms the 14 July 1871 abolition of domains and establishment of prefectures. Former domain governors were dismissed; centrally appointed prefectural governors, later `県令`, administered the prefectures.
   - The final sentence explicitly says `府知事・県知事（のち県令）` to match the archive's wording.

### Main independent evidence reopened

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
- National Archives `激動幕末―黒船と開国`
- National Archives `激動幕末―五ヶ国条約并税則`
- National Archives `近代国家 日本の登場―条約改正交渉`
- National Archives `激動幕末―年表`
- National Archives `王政復古の大号令が発せられる`
- National Archives `五箇条の御誓文が発せられる`
- National Archives `日本のあゆみ 年表`
- National Archives pamphlet entry `藩ヲ廃シ県ヲ置ク`
- JACAR original treaty / Charter Oath metadata where appropriate

## Image verification

No AI-generated historical images are used.

### Perry meeting Japanese commissioners

Exact file:
`Commo. Perry meeting the imperial Commissioners at Yokuhama ... LCCN95507967.jpg`

Independently verified from the exact Commons file page:

- date: 1856
- medium: color lithograph
- source: Library of Congress, LCCN 95507967
- title states Perry meeting Japanese commissioners at Yokohama
- plate is from the published narrative of Perry's expedition
- Commons states no known restrictions on publication and identifies the work as public domain / Public Domain Mark
- credit now records `W.T. Petris / Sarony & Co. / Library of Congress / Wikimedia Commons` so the named artist/source information is not collapsed into only the lithography firm
- image status: `verified`

### Charter Oath in `太政官日誌`

Exact file: `5jo1.gif`

Independently verified from the exact Commons file page:

- depicts the five articles of the Charter Oath published in the Japanese government's official journal
- source field: `慶應四年戊辰三月 太政官日誌 第五`
- Commons date field: 1876
- author: Government of Japan
- exact file page marks it public domain and Public Domain Mark 1.0
- image status: `verified`

## Publication state

`subjects/social/worksheets/data/bakumatsu-meiji-restoration.js` is fully `verified` and is now loaded by the public `subjects/social/worksheets/index.html` after the two Edo units.

The public selector therefore contains twelve verified junior-high history units through Bakumatsu / Meiji Restoration.

The shared worksheet generator was not changed. Only terms explicitly listed in a sentence's `terms` array can become blanks; deterministic seed/rate behavior remains unchanged. Unrelated educational pages and Cloudflare analytics markup in `index.html` were preserved.

## Exact next starting point

Next role is GENERATE. Work only on junior-high history unit:

`meiji-state-industrialization`

Create the low-density explanation-sheet data first. Keep the boundary with the verified Bakumatsu unit: do not re-teach Perry, the treaties, Taisei Hokan, Boshin War, Charter Oath, or Haihan-chiken except for brief connective context.

Likely core coverage, subject to fresh authoritative research during GENERATE, should include the main state-building reforms and social/economic transformation required by the current MEXT commentary: school system / education, conscription, land-tax reform, abolition of status restrictions where pedagogically appropriate, civilization and enlightenment, industrial promotion / `殖産興業`, and the early development of transport/communications and modern industry. Keep constitutional government and later foreign policy within their appropriate later units rather than overloading this sheet.

Use concise original sentences, structured facts, explicit core cloze terms only, and at least two useful non-AI historical-source images if exact file identities and reuse metadata can be recorded. All new content must remain `pending_factcheck`; do not add the new dataset to the public selector until the following FACTCHECK run approves it.
