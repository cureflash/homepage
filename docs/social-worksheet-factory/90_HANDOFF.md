# Social Studies Worksheet Factory — handoff

## Current state

- Active stage: junior-high
- Active field: history
- Verified through: Edo economy / culture / foreign relations
- Active unit: Bakumatsu and Meiji Restoration
- Next role: FACTCHECK
- Batch size: 1 unit
- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.

## Completed GENERATE — Bakumatsu and Meiji Restoration

Created `subjects/social/worksheets/data/bakumatsu-meiji-restoration.js` as the next junior-high history unit. It is intentionally low-density and remains completely `pending_factcheck`; it has not been added to the public selector.

### Curriculum boundary used for generation

The current MEXT junior-high Social Studies commentary places this material under `近代の日本と世界` → `明治維新と近代国家の形成`. It explicitly requires treatment of `開国とその影響` and says the opening of Japan and its political/social effects should be connected to the movement that produced the Meiji Restoration. The same section also lists `廃藩置県` among reforms to be handled under the new government's policies.

To avoid duplicating the following queue unit `Meiji state / industrialization`, this generated sheet stops after the early central-government framework represented by `廃藩置県`. It does not yet teach the school system, conscription, land-tax reform, industrialization, civilization/enlightenment, constitutional government, or later foreign policy as main sentence targets.

### Study structure

Three sections, eight concise study sentences, with matching structured `facts` records:

1. **Black ships and opening of Japan**
   - 1853: ペリー / 浦賀
   - 1854: 日米和親条約 / 下田 / 箱館
   - 1858: 日米修好通商条約 / 領事裁判権 / 関税自主権
2. **End of the bakufu**
   - 薩摩藩 / 長州藩 cooperation and growing anti-bakufu movement
   - 1867: 徳川慶喜 / 大政奉還 / 王政復古の大号令
   - 1868–1869: 戊辰戦争
3. **Early new-government framework**
   - 1868: 五箇条の御誓文
   - 1871: 廃藩置県

Every new fact record, learner sentence, image record, and the unit itself is `pending_factcheck`.

The cloze contract is unchanged. Only entries explicitly listed in each sentence's `terms` array can become blanks; arbitrary nouns are not blanked. Existing deterministic seed/rate behavior remains in the shared app.

## Generation sources — candidate evidence only

The following sources were opened during GENERATE to build candidate facts. The next FACTCHECK run must independently reopen authoritative sources from scratch and must not approve wording merely because these sources are listed here.

- MEXT `中学校学習指導要領（平成29年告示）解説 社会編`
  - `https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf`
  - relevant current commentary: `明治維新と近代国家の形成`, including `開国とその影響` and `廃藩置県`
- National Archives of Japan `激動幕末―黒船と開国`
  - `https://www.archives.go.jp/exhibition/digital/bakumatsu/contents/category03.html`
- National Archives of Japan `激動幕末―五ヶ国条約并税則`
  - `https://www.archives.go.jp/exhibition/digital/bakumatsu/contents/20.html`
- National Archives of Japan `近代国家 日本の登場―条約改正交渉`
  - `https://www.archives.go.jp/exhibition/digital/modean_state/contents/negotiation/index.html`
- National Archives of Japan `激動幕末―年表`
  - `https://www.archives.go.jp/exhibition/digital/bakumatsu/history.html`
- National Archives of Japan `王政復古の大号令が発せられる`
  - `https://www.archives.go.jp/ayumi/kobetsu/k03_1867_01.html`
- National Archives of Japan `五箇条の御誓文が発せられる`
  - `https://www.archives.go.jp/ayumi/kobetsu/m01_1868_02.html`
- JACAR `五ヶ条ノ御誓文`
  - `https://www.jacar.archives.go.jp/das/meta/A14110269100`
- National Archives of Japan `日本のあゆみ 年表`
  - `https://www.archives.go.jp/ayumi/table.html`
- National Archives pamphlet material for `廃藩置県`
  - `https://www.archives.go.jp/publication/pamphlet/pamphlet.pdf`

## New image candidates

No AI-generated historical images were used.

### 1. Perry meeting Japanese commissioners at Yokohama

File page:
`https://commons.wikimedia.org/wiki/File:Commo._Perry_meeting_the_imperial_Commissioners_at_Yokuhama_-_from_nature_by_W.T._Petris_%3B_Lith._of_Sarony_%26_Co.%2C_New_York._LCCN95507967.jpg`

Generation-time metadata recorded:

- 1856 color lithograph.
- Commons source: Library of Congress, LCCN 95507967.
- Commons lists Sarony & Co. as author and notes that the plate appeared in the published narrative of Perry's expedition.
- Commons marks the work Public Domain and applies Public Domain Mark 1.0 / no known publication restrictions.
- Current learner caption: `1856年刊行のペリー遠征記に収められた、横浜での会見場面を描く石版画`.
- Status remains `pending_factcheck`; the next run must independently verify exact depiction, title/creator metadata, and license.

### 2. Charter Oath in the government journal

File page:
`https://commons.wikimedia.org/wiki/File:5jo1.gif`

Generation-time metadata recorded:

- Image identified by Commons as the five articles of the Charter Oath published in the Japanese government's official journal.
- Commons date/source fields identify a 1876 issue of `慶應四年戊辰三月 太政官日誌 第五` and author `Government of Japan`.
- Commons marks the work Public Domain and applies Public Domain Mark 1.0.
- Current learner caption: `1876年発行の『太政官日誌』に掲載された五箇条の御誓文`.
- Status remains `pending_factcheck`; the next run must independently verify that this exact file and caption are appropriate for publication.

## Publication / validation state

- `subjects/social/worksheets/data/bakumatsu-meiji-restoration.js` exists on `main`.
- Local `node --check` passed for the generated JavaScript before the repository write.
- The public `subjects/social/worksheets/index.html` was deliberately not changed; only independently verified units remain learner-facing.
- The shared worksheet engine and unrelated educational pages were not modified.

## Exact next starting point

Next role is FACTCHECK. Work only on:

`subjects/social/worksheets/data/bakumatsu-meiji-restoration.js`

Treat all eight structured facts, all eight learner sentences, the timeline/key-point wording, and both image records as untrusted. Independently reopen MEXT and authoritative archive/government/primary sources from scratch. Do not rely on the generator's conclusions above.

At minimum verify:

1. 1853 Perry chronology, rank, four-ship wording, Uraga/Kurihama distinction, and what was handed to the bakufu;
2. 1854 Treaty of Peace and Amity, exact ports and whether the learner wording `開国へ進んだ` is appropriately framed;
3. 1858 Treaty of Amity and Commerce, exact treaty provisions, consular jurisdiction terminology, and whether `関税自主権` is pedagogically and historically precise in this sentence;
4. whether the Satsuma/Choshu cooperation sentence is sufficiently evidenced and not an oversimplified causal explanation of the fall of the bakufu;
5. 1867 Taisei Hokan and Restoration of Imperial Rule chronology/terminology;
6. start/end framing of the Boshin War and the 1869 Hakodate surrender wording;
7. date, character, and learner paraphrase of the Charter Oath;
8. 1871 Haihan-chiken and the wording about centrally appointed prefectural governors;
9. MEXT curriculum placement and the boundary with the following `Meiji state / industrialization` unit;
10. exact identity, historical description, creator/source, and actual file license for both image candidates.

Correct or reject unsupported wording. If and only if all included material passes, mark facts/sentences/images/unit `verified`, add the dataset to the public selector, set `verified_through` to `bakumatsu-meiji-restoration`, set `next_role` to `generate`, and advance the active unit to `meiji-state-industrialization`.
