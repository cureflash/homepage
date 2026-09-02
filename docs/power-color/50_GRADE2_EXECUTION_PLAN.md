# Power Color — Grade 2 execution plan

Checked: 2026-09-03

## Authority and scope

Grade 2 proceeds by explicit user override while Grade 3 remains incomplete. This does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary authority:
- current Color Certification Association Grade 2 page `https://www.aft.or.jp/pages/feature/exam2`;
- current official Grade 2 text/scope material;
- current JCRI / Japan Color Enterprise first-party material where relevant.

When public first-party material confirms Grade 2 scope but does not expose the detailed nonvisual rule, an auditable professional or public-sector source may be used only when the rule is explicit and sufficiently narrow. Such sources never authorize monitor RGB/HEX or image-derived answers.

Rules:
1. Use only facts independently re-derived from explicit current authority.
2. Do not infer answers from sample-image appearance, RGB/HEX, screenshots or unstated diagram geometry.
3. Monitor-facing questions remain blocked without approved display references.
4. Reuse the shared Power TOEIC question-bank/workout/session engine only.
5. Generate pending-first, independently QA every record, then promote verified records record-identically.

## Current runtime frontier

Grade 2 runtime is 348 verified / pending 0 across twenty-nine promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Latest promoted skills:
- `pc2.interior.color_planning_principles`: 12 promoted; 192 → 204.
- `pc2.interior.zoning_classification`: 12 promoted; 204 → 216.
- `pc2.interior.element_color_roles`: 12 promoted; 216 → 228.
- `pc2.interior.style_name_inventory`: 12 promoted; 228 → 240.
- `pc2.landscape.public_nature`: 12 promoted; 240 → 252.
- `pc2.landscape.element_examples`: 12 promoted; 252 → 264.
- `pc2.landscape.color_design_harmony_role`: 12 promoted; 264 → 276.
- `pc2.landscape.regional_color_context`: 12 promoted record-identically; 276 → 288.
- `pc2.landscape.long_lifecycle_color`: 12 promoted record-identically; 288 → 300.
- `pc2.landscape.design_considerations`: 12 promoted record-identically; 300 → 312.
- `pc2.landscape.residential_color_design_process`: 12 promoted record-identically; 312 → 324.
- `pc2.landscape.surrounding_environment_measurement`: 12 promoted record-identically; 324 → 336.
- `pc2.conventional.jis_name_structure`: 12 promoted record-identically; 336 → 348.

All twenty-nine promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates. The latest promotion passed Power Color CI `33690978044`; PR #599 merged as `61508bbc0a214873d023fb3487e14affe2de3a13`.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked.
- Interior `インテリア概念の成立` p.104: source-blocked.
- Interior `インテリア空間のカラーコーディネーション` p.107: source-blocked.
- Interior `インテリアエレメントの配色の考え方と技法` p.111: source-blocked; generic p.110 role/ratio material is not accepted as a substitute.
- Landscape p.118 `国内外の景観色彩の事例`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.
- Landscape p.120 `人工要素と自然要素の色彩が共存`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-artificial-natural-source-audit.md`.
- Landscape p.120 `大きな面積をもつ色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-large-area-source-audit.md`.
- Landscape p.120 `太陽光に影響される色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-sunlight-source-audit.md`.
- Landscape p.121 `季節や時間の変化を感じさせる多様な色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p121-season-time-source-audit.md`.
- Landscape p.124 `配色計画`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p124-color-scheme-plan-source-audit.md`.
- Landscape p.125 `色彩管理`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p125-color-management-source-audit.md`.
- p.128 `和色名` individual Grade 2 subset/readings: source-blocked under `docs/power-color/audits/2026-09-03-grade2-p128-washokumei-source-audit.md`.
- p.132 `外来色名` individual Grade 2 subset/readings: source-blocked under `docs/power-color/audits/2026-09-03-grade2-p132-gairaishokumei-source-audit.md`.
- p.138 `資料・色名`: source-blocked as a distinct skill under `docs/power-color/audits/2026-09-03-grade2-p138-color-reference-source-audit.md`.
- p.142 `資料・配色イメージ手法の確立`: source-blocked as a distinct skill under `docs/power-color/audits/2026-09-03-grade2-p142-image-scheme-method-source-audit.md`.

Do not repeat those routes unless new explicit auditable authority appears.

## Landscape p.116 — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-landscape-p116-source-audit.md`.

`pc2.landscape.public_nature` remains limited to good landscape as a present-and-future common national asset and coordinated efforts by local public bodies, businesses and residents. State: 12/12 independently verified and promoted record-identically; runtime 240 → 252.

## Landscape p.117 `景観をつくる要素` — promoted

Audit: `docs/power-color/audits/2026-09-02-grade2-landscape-p117-source-audit.md`.

`pc2.landscape.element_examples` remains limited to explicit authoritative element examples and their directly stated breadth. It is not a universal closed taxonomy and does not authorize inferred natural/artificial labels, color, material, appearance, RGB/HEX or geometry. State: 12/12 independently verified and promoted record-identically; runtime 252 → 264.

## Landscape p.117 `景観色彩における色彩設計の役割` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p117-color-design-role-source-audit.md`.

Accepted boundary for `pc2.landscape.color_design_harmony_role`:
- surrounding landscape characteristics and target scale are planning considerations;
- numerical standards provide a framework that suppresses colors with extreme discordance from surrounding landscape;
- site-appropriate landscape color planning requires consideration of harmony with surroundings;
- place and scale are relevant to landscape-harmony thinking and the color-planning process;
- numerical compliance alone is not the planning endpoint: the standards' purpose and surrounding-streetscape harmony also matter.

Do not generalize Tokyo-specific numerical values into Grade 2 facts. Do not infer RGB/HEX/display values, Munsell limits, image appearance, material recommendations, hue/tone choices or unstated geometry.

State: 12/12 independently verified and promoted record-identically; runtime 264 → 276. Post-promotion shared-engine gate passed in workflow run `33653881914`; PR #551 merged.

## Landscape p.118 `地域には地域の色がある` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-regional-color-source-audit.md`.

Accepted boundary for `pc2.landscape.regional_color_context` is conceptual/relational only:
- regions may have colors connected with things long present or accumulated there;
- traditional preserved streetscapes described by the accepted source may use regionally produced natural materials and colors nurtured by regional climate/natural environment;
- environmental-color planning may begin by learning and respecting colors long present or accumulated in a region to nurture a region-specific landscape;
- this is not a fixed locality-to-one-color lookup table.

State: 12/12 independently verified and promoted record-identically; runtime 276 → 288. Post-promotion gate passed in CI `33659280553`.

## Landscape p.118 `国内外の景観色彩の事例` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.

The current official Grade 2 material establishes the scope/order but publicly auditable material does not expose the official text's closed case-study set together with deterministic nonvisual answer rules. Do not substitute arbitrary outside cases, infer from photographs/display colors, or manufacture region-to-color mappings.

## Landscape p.120 `人工要素と自然要素の色彩が共存` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-artificial-natural-source-audit.md`.

Public corroboration confirms artificial and natural elements as legitimate landscape-analysis categories and supports the broad coexistence concept. It does not expose the official text's detailed rule set or a sufficiently rich closed example inventory. Do not manufacture a 12-question batch from heading paraphrases, arbitrary external taxonomies, image/material appearance, or inferred color properties.

## Landscape p.120 `ライフサイクルの長い色彩` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-long-lifecycle-source-audit.md`.

Accepted boundary for `pc2.landscape.long_lifecycle_color` is conceptual/relational only:
- buildings and bridges are artificial elements that can remain in place for long periods;
- surrounding harmony is prioritized over short-term fashion, novelty or individual self-assertion;
- artificial landscape colors can occupy large visual areas, so small-consumer-goods-like casual selection is not the planning model;
- outdoor long-lived artificial elements are exposed to sunlight and weather, making durability/weather resistance relevant;
- public facilities provide an independently corroborated long-duration/public-visibility premise.

Do not infer or introduce RGB/HEX/display values, monitor swatches, specific hue/tone/Munsell values, numerical lifetime/repaint cycles, material-specific color prescriptions, image appearance or unstated geometry.

State: 12/12 independently verified and promoted record-identically; runtime 288 → 300. Pre-promotion gate passed in workflow run `33661736671`; post-promotion gate passed in CI `33665241835`.

## Landscape p.120 `大きな面積をもつ色彩` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-large-area-source-audit.md`.

The official table of contents confirms the topic. Public sources confirm only generic large-scale landscape impact and general area-effect ideas. They do not expose a sufficiently rich, closed, deterministic Grade 2 landscape rule set distinct from the already-promoted long-lifecycle large-area caution. Do not turn the heading, generic area-effect prose, or the existing long-lifecycle proposition into a new 12-question skill.

## Landscape p.120 `太陽光に影響される色彩` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-sunlight-source-audit.md`.

The official table of contents confirms the topic. Public material supports broad outdoor-light variation but does not expose the official text's deterministic classifications or fixed nonvisual rules. Do not infer specific hue/brightness/chroma shifts, preferred colors, time-of-day mappings, RGB/HEX/display values or unstated illumination geometry.

## Landscape p.121 `季節や時間の変化を感じさせる多様な色彩` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p121-season-time-source-audit.md`.

The current official Grade 2 table of contents confirms this topic and its position before p.122. Checked public-sector landscape material supports only broad season/time variability and surrounding-context propositions; it does not expose the official-text classifications, a closed example inventory, or deterministic mappings suitable for a distinct skill. Do not infer season/time→color mappings, fixed hue/value/chroma shifts, weather effects, RGB/HEX/display values, image appearance or unstated illumination geometry.

## Landscape p.122 `景観色彩設計の配慮事項` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p122-considerations-source-audit.md`.

Accepted boundary for `pc2.landscape.design_considerations` is conceptual/nonvisual only:
- surrounding-landscape harmony;
- applicable numerical criteria are not by themselves the planning endpoint; standards intent and surrounding streetscape also matter;
- individual location and relevant landscape resources should be understood before planning;
- distant, middle and near viewpoints are explicit planning viewpoints;
- distant/middle views relate to natural/historical landscape skeleton, while near views relate to locally accumulated place characteristics;
- viewing distance, arrangement and material are explicit planning factors, without inferring their visual outcomes.

Do not generalize Tokyo-specific numerical/Munsell criteria, infer RGB/HEX/display values, material appearance, fixed hue/tone choices, photograph-derived judgments or unstated geometry.

State: `qualifications/color-certification/data/grade2-authoring-landscape-design-considerations-0001-0012.json` contains 12 records generated pending-first and independently rechecked. 12/12 verified, pending 0, A/B/C/D=3/3/3/3. Pre-promotion schema/full-fingerprint/nonvisual/shared-renderer gate and normal Power Color regression passed in workflow run `33674008109`; PR #572 merged as `165132c83eec5fd949e0023a9dfa9bdd62438e97`. All 12 records were then promoted record-identically; runtime 300 → 312 and twenty-five → twenty-six skills. Post-promotion exact-equality/full-fingerprint/shared Power TOEIC engine gate passed in Power Color CI `33676939840`; PR #577 merged as `f7661343ba41b9c00cdc9edb2035ce8b86c90f72`.

## Landscape p.123 `住宅の色彩設計プロセス` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p123-residential-process-source-audit.md`.

Accepted boundary for `pc2.landscape.residential_color_design_process` is structural/nonvisual only:
- the current official Grade 2 scope includes `住宅の色彩設計プロセス` p.123;
- the official scope then places `色を測ることによる周辺環境の把握` p.123, `配色計画` p.124, and `色彩管理` p.125;
- current JPMA practical training explicitly includes a detached-house color-design exercise and actual surrounding-environment color survey (`視感測色`);
- the practical process explicitly includes consolidating a color-design concept;
- a color scheme is explicitly developed based on that concept;
- proposal-document creation, color-scheme CG creation, presentation and instructor evaluation are explicit practical activities.

Do not treat the JPMA bullet list as proof of a universal mandatory total order except where a relation is explicit. Do not infer RGB/HEX/display values, fixed hue/tone/Munsell recommendations, photograph or CG appearance, numerical measurement values, material appearance, unstated geometry, or detailed content of `色彩管理` beyond its confirmed official inclusion/order.

State: `qualifications/color-certification/data/grade2-authoring-landscape-residential-color-design-process-0001-0012.json` contains 12 records generated pending-first and independently rechecked. 12/12 verified, pending 0, A/B/C/D=3/3/3/3. Dedicated schema/full-fingerprint/source/nonvisual/shared-renderer pre-promotion gate and normal Power Color regression passed in workflow run `33677670579`; PR #579 merged as `c3f8c298330209e19e01946ced4d1ea17e40ce3f`. All 12 records were then promoted record-identically; runtime 312 → 324 and twenty-six → twenty-seven skills. Post-promotion exact-equality/full-fingerprint/shared Power TOEIC engine gate passed in Power Color CI `33678211235`; PR #582 merged as `6d64629b0bd8f5c5f305fce21f1d1d48c3a4234a`.

## Landscape p.123 `色を測ることによる周辺環境の把握` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p123-surrounding-measurement-source-audit.md`.

Accepted boundary for `pc2.landscape.surrounding_environment_measurement` is text-only/nonvisual:
- the current official Grade 2 scope includes understanding surrounding-environment color by measuring color;
- current professional training explicitly describes actual surrounding-environment color investigation as visual colorimetry (`視感測色`);
- landscape review may use quantitative Munsell values while separately evaluating qualitative harmony with surrounding landscape;
- Munsell representation uses hue, value/lightness and chroma (`色相・明度・彩度`);
- standardized physical/JIS color charts based on the Munsell system support visual comparison.

Do not infer RGB/HEX/display values, monitor swatches, place-specific measured values, local color limits, fixed palette recommendations, image appearance, unstated observation geometry/lighting/tolerances, or numerical-compliance-equals-harmony claims.

State: 12/12 independently verified and promoted record-identically; runtime 324 → 336 and twenty-seven → twenty-eight skills. Authoring CI `33678931801` passed; PR #584 merged as `abda2407f0f9339948b12a8b9017a9f78f2b3c4c`. Promotion run `33679550547` passed; PR #586 merged as `c2aa6a4384d5a3dc7b967bf932b2486795cadbba`.

## Landscape p.124 `配色計画` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p124-color-scheme-plan-source-audit.md`.

Current public authority confirms the p.124 scope and current JPMA practice explicitly links a color-design concept to creation of a color-scheme proposal. That relation is already contained in the promoted p.123 residential-process skill. Checked public landscape material does not expose a distinct sufficiently rich closed p.124 nonvisual rule set. Do not duplicate the concept→scheme relation, infer fixed palettes/hue/tone/Munsell/RGB/HEX values, use image appearance, or generalize local regulatory limits.

## Landscape p.125 `色彩管理` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p125-color-management-source-audit.md`.

Current public authority confirms the official Grade 2 p.125 scope/order but does not expose the detailed landscape color-management rule set or a distinct sufficiently rich deterministic nonvisual boundary. Generic construction/paint quality-control procedures, local regulatory limits, RGB/HEX/display conversions, image/sample appearance, inferred tolerances/lighting/geometry, and facts already represented by p.123/p.124 are not accepted as substitutes.

## p.128 `慣用色名（JISの慣用色名より）` — structure promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-p128-jis-conventional-name-structure-source-audit.md`.

`pc2.conventional.jis_name_structure` is limited to current AFT p.128/p.132 scope order and explicit JIS Z 8102:2001 structure: systematic versus conventional names and chromatic/achromatic systematic-name subdivision. Individual Grade 2 name membership, readings, Munsell values, RGB/HEX/display values, swatches, etymology and Grade3→Grade2 inference remain unauthorized. State: 12/12 independently verified and promoted record-identically; runtime 336 → 348 and twenty-eight → twenty-nine skills. Power Color CI `33690978044` passed; PR #599 merged as `61508bbc0a214873d023fb3487e14affe2de3a13`.

## p.128 `和色名` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-p128-washokumei-source-audit.md`.

Current AFT authority confirms the p.128–p.132 scope/order, while current JCRI/JSA material confirms the JIS Z 8102:2001 conventional-name framework. No current explicit auditable public authority exposes the Grade 2 pp.128–131 individual Japanese-name subset/readings. Do not project the full JIS corpus or Grade 3 records into Grade 2, and do not infer readings, Munsell values, RGB/HEX/display values or swatch appearance. No questions were generated. PR #603 merged after Power Color CI `33693030915` succeeded.

## p.132 `外来色名` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-p132-gairaishokumei-source-audit.md`.

Current AFT authority confirms p.132 placement and p.138 as the following reference section. Current JCRI/JSA material confirms the JIS Z 8102:2001 conventional-name framework but does not publicly expose the current Grade 2 pp.132–137 individual foreign-name subset/readings. Historical or unofficial Grade 2 study lists, the full JIS corpus, and Grade 3 records are not accepted as membership authority. Do not infer readings, etymologies, Munsell values, RGB/HEX/display values or swatch appearance. No questions were generated.

## p.138 `資料・色名` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-p138-color-reference-source-audit.md`.

Current official material confirms the reference section's existence and placement but does not publicly expose the current p.138 reference pages or a closed deterministic nonvisual rule set. An external JIS color-name table is not assumed record-identical to the official Grade 2 pages. Do not manufacture questions from the heading or duplicate `pc2.conventional.jis_name_structure`. No questions were generated.

## p.142 `資料・配色イメージ手法の確立` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-p142-image-scheme-method-source-audit.md`.

Current AFT/JCRI material supports color-image coordination and empirical color-image research generally, but public first-party authority does not expose the exact current p.142 establishment procedure sufficiently to authorize production answers. Historical/secondary step sequences are not promoted as current official facts. Do not infer palette appearance, hue/tone ranges, area ratios, RGB/HEX/display values or duplicate `pc2.image.image_scheme_keywords`. No questions were generated.

## Exact next start point

The current public official Grade 2 table-of-contents frontier is exhausted after p.142. Grade 2 remains incomplete because recorded source-blocked topics remain. Do not repeat a blocked source route without new explicit auditable authority. Further authoring may resume only at a recorded blocked topic for which new authority establishes a sufficiently explicit deterministic boundary.

Keep all Grade 3 blockers and source/display gates unchanged.