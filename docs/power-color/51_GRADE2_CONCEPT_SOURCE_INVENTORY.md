# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-03

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope/order only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI / Japan Color Enterprise sources remain authority for applicable color-system facts. Current JAFCA material remains authority for fashion trend-information publication. Current Interior Industry Association material remains authority for modern interior-professional role/scope but not for blocked historical propositions. Current MLIT Landscape Act material remains authority for the p.116 public-nature boundary. Current Mutsu City Landscape Plan remains accepted public-sector authority only for the narrow p.117 explicit element-example boundary. Current Tokyo Metropolitan Government landscape color guidance remains accepted public-sector authority only for the narrow p.117 color-design-role boundary. Current Japan Fashion Association and Japan Civil Engineering Consultants Association material are accepted only for the narrow p.118 regional-context relationship boundary documented in the source audit.

## Runtime-promoted nonvisual skills

Grade 2 runtime frontier is 276 verified / pending 0 across twenty-three promoted skills. The latest promotions are:
- `pc2.interior.color_planning_principles`
- `pc2.interior.zoning_classification`
- `pc2.interior.element_color_roles`
- `pc2.interior.style_name_inventory`
- `pc2.landscape.public_nature`
- `pc2.landscape.element_examples`
- `pc2.landscape.color_design_harmony_role`

All were promoted record-identically from independently verified authoring batches. Exact-equality/full-fingerprint/shared-engine gates cover all twenty-three promoted skills.

`pc2.landscape.regional_color_context` is separately source-resolved and authoring-verified but not yet promoted: 12/12 verified, pending 0, A/B/C/D=3/3/3/3; dedicated gate passed in workflow run `33654743141`, PR #553 merged.

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
- Landscape p.116 `景観とは / 景観にかかわる近年の動向 / 景観の公共性`: narrow public-nature boundary promoted as `pc2.landscape.public_nature`.
- Landscape p.117 `景観をつくる要素`: narrow explicit element-example/breadth boundary promoted as `pc2.landscape.element_examples`.
- Landscape p.117 `景観色彩における色彩設計の役割`: narrow surrounding-harmony/context/numerical-standard boundary promoted as `pc2.landscape.color_design_harmony_role`.
- Landscape p.118 `地域には地域の色がある`: narrow regional-context boundary source-resolved and 12-question authoring batch independently verified; runtime promotion pending.
- Landscape p.118 `国内外の景観色彩の事例`: next source-acquisition checkpoint after successful promotion.

## Landscape p.118 accepted regional-context boundary — authoring verified

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-regional-color-source-audit.md`.

`pc2.landscape.regional_color_context` may use only:
- relationships between regional landscape and colors long present or accumulated in the region;
- the accepted source statement that traditional preserved streetscapes may use regionally produced natural materials and colors nurtured by regional climate/natural environment;
- the environmental-color planning method of learning and respecting colors long present or accumulated in a region when nurturing region-specific landscape;
- the distinction between contextual regional color thinking and unsupported fixed locality-to-one-color mappings.

State:
- 12 pending-first records created;
- all 12 independently re-solved before proposed-answer comparison;
- 12 verified / 0 needs_revision / 0 rejected / 0 pending;
- A/B/C/D = 3/3/3/3;
- dedicated ID/full-fingerprint/source/nonvisual/shared-renderer gate and normal regression passed in workflow run `33654743141`; PR #553 merged;
- runtime promotion still pending.

Do not infer specific locality colors, RGB/HEX/display values, monitor appearance, hue/tone/Munsell values, image appearance, material appearance, or unstated geometry.

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
- Keep Grade 3 source/display blockers unchanged.

## Exact next order

1. Promote all 12 verified `pc2.landscape.regional_color_context` records record-identically into `grade2-runtime.json`; runtime 276 → 288 and twenty-three → twenty-four skills.
2. Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage and require full Power Color CI.
3. Continue to p.118 `国内外の景観色彩の事例` and source-acquire an explicit deterministic nonvisual boundary before authoring anything.
