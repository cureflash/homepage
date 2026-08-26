# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use the retired root path `social-worksheets/`.
- Mode: GENERATE BACKLOG
- Normal target: 10 newly generated units per run
- Fact-check policy: manual/later batch; do not alternate automatically
- Verified learner-facing coverage remains through: Meiji state / industrialization
- Pending backlog count: 31 units
- Junior-high history generation queue: complete
- Junior-high civics generation queue: complete
- Current high-school course: `歴史総合`
- Next generation start: C(4) `国際秩序の変化や大衆化と現代的な諸課題`
- Public selector remains verified-only; none of the pending units from this or earlier backlog batches were registered.

## Completed GENERATE batch — 10 `歴史総合` units

All ten datasets were generated as low-density explanation/cloze source data and remain `pending_factcheck`. Every dataset preserves `schoolStage: high-school`, `field: history`, `formalCourse: 歴史総合`, and its formal MEXT placement instead of assigning the formal course to one fixed school year.

1. `history-comprehensive-modernization-questions`
   - B(1) `近代化への問い`
   - uses inquiry, industrialization, causation and comparison as explicit core terms

2. `history-comprehensive-18c-asia-economy-society`
   - B(2)-a worksheet-density split of `結び付く世界と日本の開国`
   - 18th-century Asian commodity production, tea/silk/cotton trade, regional and world-market connections

3. `history-comprehensive-industrial-revolution-world-market-opening`
   - B(2)-b
   - British Industrial Revolution, world market, Opium War/Chinese treaty-port opening, Perry and the Convention of Kanagawa

4. `history-comprehensive-nation-state-meiji-restoration`
   - B(3) `国民国家と明治維新`
   - nation-states, Meiji Restoration, abolition of domains, Freedom and People's Rights Movement, Meiji Constitution and Imperial Diet

5. `history-comprehensive-modernization-contemporary-issues`
   - B(4) `近代化と現代的な諸課題`
   - benefits and burdens of modernization, labor/social problems, colonial rule and links to present-day issues

6. `history-comprehensive-massification-questions`
   - C(1) `国際秩序の変化や大衆化への問い`
   - inquiry framing around total war, political participation and mass media

7. `history-comprehensive-wwi-international-cooperation`
   - C(2)-a worksheet-density split of `第一次世界大戦と大衆社会`
   - First World War, total war, League of Nations and Washington Conference/international cooperation

8. `history-comprehensive-mass-society-participation`
   - C(2)-b
   - mass society, media, social/political participation, Taisho Democracy and the 1925 Universal Manhood Suffrage Law

9. `history-comprehensive-world-depression-cooperation-crisis`
   - C(3)-a worksheet-density split of `経済危機と第二次世界大戦`
   - Great Depression, bloc economies, Nazism, Manchurian Incident and weakening international cooperation

10. `history-comprehensive-wwii-postwar-order`
    - C(3)-b
    - Second World War, Japan's acceptance of the Potsdam Declaration and the postwar international order/United Nations

## Generation-stage evidence

The batch was structured against the current MEXT High School Course of Study Commentary for Geography and History and uses generation-stage candidate references from:

- MEXT `高等学校学習指導要領（平成30年告示）解説 地理歴史編`
- National Diet Library `史料にみる日本の近代`
- Japan Center for Asian Historical Records `近代日本とアジア`
- National Archives of Japan digital modern-history exhibitions
- Diplomatic Archives of the Ministry of Foreign Affairs

These references are generation evidence only. A later FACTCHECK batch must reopen authoritative sources independently and treat every fact, sentence, key point and timeline entry as untrusted.

No AI-generated historical images were used. The inquiry-focused units intentionally contain no image. The event-focused units currently retain authoritative source pages as candidate evidence rather than embedding uncertain-license images; a later FACTCHECK/publication pass should add only exact historical image files whose identity, creator/source and reuse terms can be independently verified.

## Validation

Before GitHub writes, all ten generated JavaScript datasets passed local `node --check`. Nested source-array structure was also checked and corrected before upload. The pending datasets were not added to `subjects/social/worksheets/index.html`, so learner-facing publication remains verified-only.

## Accumulated unverified backlog — 31 units

The previous 21 pending units remain, followed by this batch:

22. `history-comprehensive-modernization-questions`
23. `history-comprehensive-18c-asia-economy-society`
24. `history-comprehensive-industrial-revolution-world-market-opening`
25. `history-comprehensive-nation-state-meiji-restoration`
26. `history-comprehensive-modernization-contemporary-issues`
27. `history-comprehensive-massification-questions`
28. `history-comprehensive-wwi-international-cooperation`
29. `history-comprehensive-mass-society-participation`
30. `history-comprehensive-world-depression-cooperation-crisis`
31. `history-comprehensive-wwii-postwar-order`

Do not automatically fact-check this backlog on the next normal run.

## Exact next starting point

Remain in GENERATE BACKLOG mode. Continue the recorded `歴史総合` queue in this order:

1. C(4) 国際秩序の変化や大衆化と現代的な諸課題
2. D(1) グローバル化への問い
3. D(2)-a 冷戦と植民地独立
4. D(2)-b 高度経済成長・国際秩序の変容
5. D(3)-a 冷戦終結・地域統合
6. D(3)-b 市場経済の変容・情報通信・グローバル化
7. D(4) 現代的な諸課題の形成と展望

Those seven units complete the current `歴史総合` generation queue. To reach the normal ten-unit target after them, first expand `日本史探究` into an ordered production queue grounded in the current MEXT curriculum/commentary, preserving its formal course structure and avoiding a false fixed-grade assignment. Then generate the first three `日本史探究` units as units 8–10 of that batch.

All new material must remain `pending_factcheck`, be appended to `unverified_backlog`, stay out of the public selector, and preserve the formal course metadata.
