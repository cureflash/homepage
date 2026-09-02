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

Grade 2 runtime is 300 verified / pending 0 across twenty-five promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

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

All twenty-five promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates. The latest promotion passed Power Color CI run `33665241835`; PR #567 merged as `0f246cc3056c51503c870f9af9fe24b3ea33c833`.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked.
- Interior `インテリア概念の成立` p.104: source-blocked.
- Interior `インテリア空間のカラーコーディネーション` p.107: source-blocked.
- Interior `インテリアエレメントの配色の考え方と技法` p.111: source-blocked; generic p.110 role/ratio material is not accepted as a substitute.
- Landscape p.118 `国内外の景観色彩の事例`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.
- Landscape p.120 `人工要素と自然要素の色彩が共存`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-artificial-natural-source-audit.md`.
- Landscape p.120 `大きな面積をもつ色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-large-area-source-audit.md`; public authority does not expose a distinct sufficiently rich deterministic nonvisual rule set beyond adjacent/general large-area context.
- Landscape p.120 `太陽光に影響される色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-sunlight-source-audit.md`; broad outdoor-light context is insufficient to define the official-text deterministic rule set.

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

## Exact next start point

Continue current official text order at Landscape p.121 `季節や時間の変化を感じさせる多様な色彩`. Acquire a distinct auditable deterministic nonvisual source boundary before authoring. If public authority does not expose a sufficiently rich rule set, record the topic source-blocked rather than manufacturing a batch.

Keep all Grade 3 blockers and source/display gates unchanged.
