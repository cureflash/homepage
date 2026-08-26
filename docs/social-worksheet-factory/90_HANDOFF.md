# Social Studies Worksheet Factory — handoff

## Current state

- Canonical implementation path: `subjects/social/worksheets/`
- Never recreate or use retired `social-worksheets/`.
- GENERATE scope defined by `00_MASTER_INSTRUCTIONS.md` is **complete**.
- FACTCHECK is manual batch work only.
- Junior-high generated coverage is fully independently verified.
- High-school `歴史総合` is now independently verified through `history-comprehensive-modernization-contemporary-issues` (A「歴史の扉」 and B「近代化と私たち」 through B(4)).
- Pending backlog count: **173 units**.
- Public selector remains verified-only.

## FACTCHECK progress this session

- Batch 01: 5 modern junior-high history units — `FACTCHECK_BATCH_01.md`
- Batch 02: 6 constitution / three-powers junior-high civics units — `FACTCHECK_BATCH_02.md`
- Batch 03: 8 remaining junior-high civics units — `FACTCHECK_BATCH_03.md`
- Batch 04: 7 opening `歴史総合` units — `FACTCHECK_BATCH_04.md`

Total independently verified this session: **26 units**. Pending backlog moved from **199 to 173**.

## Batch 04 — `歴史総合` A and B

Verified and published:

1. `history-comprehensive-history-and-us` — 歴史総合：歴史と私たち
2. `history-comprehensive-characteristics-sources` — 歴史総合：歴史の特質と資料
3. `history-comprehensive-modernization-questions` — 近代化への問い
4. `history-comprehensive-18c-asia-economy-society` — 18世紀のアジアの経済と社会
5. `history-comprehensive-industrial-revolution-world-market-opening` — 産業革命・世界市場・中国の開港・日本の開国
6. `history-comprehensive-nation-state-meiji-restoration` — 国民国家と明治維新
7. `history-comprehensive-modernization-contemporary-issues` — 近代化と現代的な諸課題

The current MEXT high-school Geography/History commentary is the curriculum authority. Specific historical chronology was independently reopened against JACAR, the National Diet Library, and the National Archives of Japan where appropriate.

## Corrections made during Batch 04

- `history-comprehensive-history-and-us`: removed generation-stage pseudo-definitions of “時間的な推移” / “空間的な結び付き” and aligned the learner wording with MEXT's actual requirement to connect everyday/local phenomena with Japanese, surrounding-region, and world history and to use temporal/spatial comparison and relation.
- `history-comprehensive-characteristics-sources`: narrowed the core A(2) source examples to MEXT's `遺物・文書・図像など`; retained source-criticism guidance only where the same MEXT commentary explicitly discusses date, creator, background, intention, multiple-source comparison, and source limitations.
- `history-comprehensive-modernization-questions`: replaced the generated category list containing `植民` and vague `交通や情報` with MEXT's actual B(1) examples: 交通と貿易、産業と人口、権利意識と政治参加や国民の義務、学校教育、労働と家族、移民.
- `history-comprehensive-18c-asia-economy-society`: removed the unsupported generation claim that Qing population growth was the defining fact. Replaced it with MEXT-supported Chinese handicraft/transport/finance/urban-commerce development, Japanese nationwide distribution and commodity production, and European demand for Chinese porcelain / Indian cotton textiles. Removed the unsupported claim that those products themselves were “the premise” of world-market formation.
- `history-comprehensive-industrial-revolution-world-market-opening`: aligned industrialization with MEXT's British cotton-industry mechanization plus railway/steamship/telegraph development; independently checked the 1842 Nanjing Treaty five ports with JACAR and the 1853/1854 Perry–Treaty of Peace and Amity chronology with NDL.
- `history-comprehensive-nation-state-meiji-restoration`: independently checked the 1871 abolition of domains, the Freedom and People's Rights movement's national-assembly / constitution demands, the 1889 Meiji Constitution, and the 1890 first Imperial Diet using National Archives / NDL material.
- `history-comprehensive-modernization-contemporary-issues`: removed a generated grab-bag of unsupported examples and aligned the unit with MEXT's stated framework: 自由・制限、平等・格差、開発・保全、統合・分化、対立・協調 and the relationship between imperialism/colonial transformation and modern issues.

## Publication / backlog state

- All seven Batch 04 units have unit/fact/sentence `factcheckStatus: "verified"`.
- Batch 04 contains no images, so no new image-license publication decision was required.
- `subjects/social/worksheets/index.html` loads these seven units immediately after the verified junior-high civics coverage.
- No unit after `history-comprehensive-modernization-contemporary-issues` is learner-facing.
- Current pending backlog: **173**.

## Exact next social action

Continue independent FACTCHECK from:

1. `history-comprehensive-massification-questions`
2. `history-comprehensive-wwi-international-cooperation`
3. `history-comprehensive-mass-society-participation`
4. `history-comprehensive-world-depression-cooperation-crisis`
5. `history-comprehensive-wwii-postwar-order`
6. `history-comprehensive-massification-contemporary-issues`
7. `history-comprehensive-globalization-questions`
8. `history-comprehensive-cold-war-decolonization`
9. `history-comprehensive-high-growth-order-change`
10. `history-comprehensive-cold-war-end-regional-integration`
11. `history-comprehensive-market-information-globalization`
12. `history-comprehensive-contemporary-issues-outlook`

These are the remaining `歴史総合` queue. Continue sequentially only when FACTCHECK is explicitly requested. GENERATE is finished; do not invent additional generation work.

## Factcheck discipline retained

- Treat every pending fact, learner sentence, key point/timeline claim, source record, and image claim as untrusted until independently reopened and checked.
- Prefer the current MEXT commentary for formal curriculum placement and official/primary archives or institutions for specific historical facts.
- Correct or reject unsupported wording rather than preserving generated text for convenience.
- Verify exact image identity, provenance, and reuse terms before learner-facing publication.
- Only verified units may be added to the public selector and removed from `unverified_backlog`.
- Reconcile latest `main` before shared writes and never roll back parallel progress.
