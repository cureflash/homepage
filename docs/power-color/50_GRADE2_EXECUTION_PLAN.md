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

Grade 2 runtime is 288 verified / pending 0 across twenty-four promoted skills. Grade 3 remains 223 verified / pending 0 and incomplete.

Latest promoted skills:
- `pc2.interior.color_planning_principles`: 12 promoted; 192 → 204.
- `pc2.interior.zoning_classification`: 12 promoted; 204 → 216.
- `pc2.interior.element_color_roles`: 12 promoted; 216 → 228.
- `pc2.interior.style_name_inventory`: 12 promoted; 228 → 240.
- `pc2.landscape.public_nature`: 12 promoted; 240 → 252.
- `pc2.landscape.element_examples`: 12 promoted; 252 → 264.
- `pc2.landscape.color_design_harmony_role`: 12 promoted; 264 → 276.
- `pc2.landscape.regional_color_context`: 12 promoted record-identically; 276 → 288.

All twenty-four promoted skills are covered by exact-equality/full-fingerprint/shared-engine gates. The latest promotion passed Power Color CI run `33659280553`; PR #560 merged as `5e1cf1ed51f4c94b9cbee8465eabdb754ae05702`.

## Preserved blocked topics

- Visual Design: scope-confirmed, but no sufficiently explicit public nonvisual rule found.
- Fashion `ファッションの分類` p.091, `ファッションの配色` p.095, `ファッションにおける配色の事例` p.096: source-blocked.
- Interior `インテリア概念の成立` p.104: source-blocked.
- Interior `インテリア空間のカラーコーディネーション` p.107: source-blocked.
- Interior `インテリアエレメントの配色の考え方と技法` p.111: source-blocked; generic p.110 role/ratio material is not accepted as a substitute.
- Landscape p.118 `国内外の景観色彩の事例`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`; current public official material does not expose a closed official-text example set with deterministic nonvisual answer rules.

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

State:
- [x] current AFT Grade 2 scope/order rechecked;
- [x] deterministic nonvisual boundary source-resolved against current Tokyo Metropolitan Government landscape color guidance;
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before proposed-answer comparison;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] dedicated nonvisual/full-fingerprint/shared-renderer pre-promotion gate and normal regression passed in workflow run `33648021940`;
- [x] promoted record-identically; runtime 264 → 276 and twenty-two → twenty-three skills;
- [x] post-promotion exact-equality/full-fingerprint/shared Power TOEIC engine gate passed in workflow run `33653881914`; PR #551 merged.

## Landscape p.118 `地域には地域の色がある` — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-regional-color-source-audit.md`.

Accepted boundary for `pc2.landscape.regional_color_context` is conceptual/relational only:
- regions may have colors connected with things long present or accumulated there;
- traditional preserved streetscapes described by the accepted source may use regionally produced natural materials and colors nurtured by regional climate/natural environment;
- environmental-color planning may begin by learning and respecting colors long present or accumulated in a region to nurture a region-specific landscape;
- this is not a fixed locality-to-one-color lookup table.

Do not infer or introduce RGB/HEX/display values, monitor swatches, specific region-to-color mappings, hue/tone/Munsell values, image appearance, material appearance, or unstated geometry.

State:
- [x] current AFT Grade 2 scope/order rechecked;
- [x] deterministic nonvisual regional-context boundary source-resolved against auditable Japan Fashion Association and Japan Civil Engineering Consultants Association material;
- [x] pending-first 12 created;
- [x] independently re-solved all 12 before proposed-answer comparison;
- [x] 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- [x] A/B/C/D = 3/3/3/3;
- [x] dedicated ID/full-fingerprint/source/nonvisual/shared-renderer authoring gate and normal Power Color regression passed in workflow run `33654743141`; PR #553 merged as `e5aac280779d58f891889978bb9f4b6e4740e20f`;
- [x] promoted all 12 records record-identically; runtime 276 → 288 and twenty-three → twenty-four skills;
- [x] post-promotion exact-equality/full-fingerprint/shared Power TOEIC engine coverage passed in workflow run `33659280553`; PR #560 merged as `5e1cf1ed51f4c94b9cbee8465eabdb754ae05702`.

## Landscape p.118 `国内外の景観色彩の事例` — source-blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.

The current official Grade 2 material establishes the scope/order but the publicly auditable material does not expose the official text's closed case-study set together with deterministic nonvisual answer rules. Do not substitute arbitrary outside cases, infer from photographs/display colors, or manufacture region-to-color mappings. Revisit only if new explicit auditable authority appears.

## Exact next start point

Continue official text order to Landscape p.120 `人工要素と自然要素の色彩が共存`. Source-acquire an explicit deterministic nonvisual rule boundary before authoring anything. If the boundary cannot be established, record a source blocker and continue in official-text order without guessing.

Keep all Grade 3 blockers and source/display gates unchanged.
