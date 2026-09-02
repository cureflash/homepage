# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-03

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope/order only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI / Japan Color Enterprise sources remain authority for applicable color-system facts. Current JAFCA material remains authority for fashion trend-information publication. Current Interior Industry Association material remains authority for modern interior-professional role/scope but not for blocked historical propositions. Current MLIT Landscape Act material remains authority for the p.116 public-nature boundary. Current Mutsu City Landscape Plan remains accepted public-sector authority only for the narrow p.117 explicit element-example boundary. Current Tokyo Metropolitan Government landscape color guidance remains accepted public-sector authority only for the narrow p.117 color-design-role boundary. Current Japan Fashion Association and Japan Civil Engineering Consultants Association material are accepted only for the narrow p.118 regional-context relationship boundary documented in the source audit. Current Color Prism landscape-color material and Itami City public-facility landscape guidance are accepted only for the narrow p.120 long-lifecycle relationship boundary documented in its source audit.

## Runtime-promoted nonvisual skills

Grade 2 runtime frontier is 300 verified / pending 0 across twenty-five promoted skills. The latest promoted landscape skills are:
- `pc2.landscape.public_nature`
- `pc2.landscape.element_examples`
- `pc2.landscape.color_design_harmony_role`
- `pc2.landscape.regional_color_context`
- `pc2.landscape.long_lifecycle_color`

All twenty-five runtime skills were promoted record-identically from independently verified authoring batches. Exact-equality/full-fingerprint/shared-engine gates cover all twenty-five skills. Latest promotion CI: `33665241835`; PR #567 merged as `0f246cc3056c51503c870f9af9fe24b3ea33c833`.

## Current official-text source frontier

- Visual Design: source-blocked.
- Media Design: three resolved/promoted text-only slices.
- Fashion: basic/trend slice promoted; p.091/p.095/p.096 remain source-blocked.
- Interior p.104: source-blocked.
- Interior p.105: both source-resolved skills promoted.
- Interior p.107 `インテリア空間のカラーコーディネーション`: source-blocked.
- Interior p.110 `インテリアエレメントの色彩分類と色彩傾向`: promoted as `pc2.interior.element_color_roles`.
- Interior p.111 `インテリアエレメントの配色の考え方と技法`: source-blocked.
- Interior p.112 `インテリアスタイル`: six-label membership-only boundary promoted as `pc2.interior.style_name_inventory`; no style-property mapping authorized.
- Landscape p.116: `pc2.landscape.public_nature` promoted.
- Landscape p.117 `景観をつくる要素`: `pc2.landscape.element_examples` promoted.
- Landscape p.117 `景観色彩における色彩設計の役割`: `pc2.landscape.color_design_harmony_role` promoted.
- Landscape p.118 `地域には地域の色がある`: `pc2.landscape.regional_color_context` promoted.
- Landscape p.118 `国内外の景観色彩の事例`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.
- Landscape p.120 `人工要素と自然要素の色彩が共存`: source-blocked for authoring under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-artificial-natural-source-audit.md`. Public evidence confirms only the broad coexistence concept, not a sufficiently rich closed deterministic Grade 2 rule set.
- Landscape p.120 `ライフサイクルの長い色彩`: `pc2.landscape.long_lifecycle_color` promoted record-identically; runtime 288 → 300.
- Landscape p.120 `大きな面積をもつ色彩`: next source-acquisition/audit frontier. Do not treat the already-promoted long-lifecycle large-area proposition as sufficient by itself for a new skill.

## Landscape p.118 accepted regional-context boundary — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-regional-color-source-audit.md`.

`pc2.landscape.regional_color_context` may use only:
- relationships between regional landscape and colors long present or accumulated in the region;
- the accepted source statement that traditional preserved streetscapes may use regionally produced natural materials and colors nurtured by regional climate/natural environment;
- the environmental-color planning method of learning and respecting colors long present or accumulated in a region when nurturing region-specific landscape;
- the distinction between contextual regional color thinking and unsupported fixed locality-to-one-color mappings.

State: 12/12 independently verified, A/B/C/D=3/3/3/3, promoted record-identically; runtime 276 → 288. Post-promotion exact-union/full-fingerprint/shared Power TOEIC engine gate passed in CI `33659280553`.

## Landscape p.120 accepted long-lifecycle boundary — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-long-lifecycle-source-audit.md`.

`pc2.landscape.long_lifecycle_color` may use only:
- buildings and bridges as artificial elements that can remain in place for long periods;
- surrounding harmony as a planning priority over short-term fashion, novelty or individual self-assertion;
- the explicit caution that artificial landscape colors can occupy large visual areas;
- durability and weather resistance as relevant considerations for outdoor long-lived elements;
- the public-sector premise that public facilities remain for long periods and are seen by many people.

State: pending-first batch created, all 12 independently re-solved, 12 verified / 0 needs_revision / 0 rejected / 0 pending, A/B/C/D=3/3/3/3. Pre-promotion ID/schema/full-fingerprint/nonvisual/shared-renderer gate and normal regression passed in CI `33661736671`; PR #563 merged as `548b14d26bee4f85570fdb56c865cbbb800ab591`. All 12 records were then promoted record-identically; runtime 288 → 300 and twenty-four → twenty-five skills. Post-promotion exact-equality/full-fingerprint/shared-engine coverage passed in CI `33665241835`; PR #567 merged as `0f246cc3056c51503c870f9af9fe24b3ea33c833`.

The first post-promotion normal CI run failed only because the dedicated authoring test retained a pre-promotion absence assertion. That stale assertion was replaced with record-identical runtime equality; no source/display/product gate was relaxed.

## Preserved exclusions

- No RGB/HEX, sampled pixels, screenshots, monitor appearance or unsourced display values.
- No answer derivation from photographs or floor-plan/map geometry.
- No unstated area-ratio or style heuristics.
- Do not import unrelated four-zone taxonomies into the p.105 three-zone Color Certification slice.
- The p.110 70/25/5 ratio is a conventional planning rule only; never infer measured proportions from an image or floor plan.
- p.111 must not reuse generic p.110 role/ratio facts as if they establish p.111 techniques.
- p.112 authorizes only the six style names; no style-to-hue, tone, material, shape, furniture, history or image mapping.
- p.117 element examples do not authorize p.117 color-design-role claims.
- p.118 regional-context material does not authorize fixed region-to-specific-color mappings.
- p.118 case studies must not be replaced with arbitrary external examples.
- p.120 artificial/natural coexistence must not be expanded into an invented closed taxonomy or image/material-color inference.
- p.120 long-lifecycle material does not authorize specific RGB/HEX, hue/tone/Munsell values, numerical lifetime/repaint cycles, material-specific prescriptions or image-derived answers.
- p.120 large-area authoring must establish a distinct rule set rather than merely restating the already-promoted long-lifecycle large-area caution.
- Keep Grade 3 source/display blockers unchanged.

## Exact next order

1. Keep p.118 `国内外の景観色彩の事例` source-blocked unless new explicit auditable authority appears.
2. Keep p.120 `人工要素と自然要素の色彩が共存` source-blocked for authoring under its audit; broad structural context may be retained but does not justify a 12-question batch.
3. Source-audit p.120 `大きな面積をもつ色彩` using current official scope/order plus explicit auditable nonvisual authority. Require a distinct sufficiently rich rule set before authoring; otherwise record it source-blocked and continue official order.
