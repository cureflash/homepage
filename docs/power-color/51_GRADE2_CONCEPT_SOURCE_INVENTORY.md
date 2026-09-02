# Power Color — Grade 2 concept/source inventory

Checked: 2026-09-03

## Current first-party authority

Use the current Color Certification Association Grade 2 page:
`https://www.aft.or.jp/pages/feature/exam2`

Use the current official Grade 2 text table of contents for scope/order only:
`https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf`

Current JCRI / Japan Color Enterprise sources remain authority for applicable color-system facts. Current JAFCA material remains authority for fashion trend-information publication. Current Interior Industry Association material remains authority for modern interior-professional role/scope but not for blocked historical propositions. Current MLIT Landscape Act material remains authority for the p.116 public-nature boundary. Current Mutsu City Landscape Plan remains accepted public-sector authority only for the narrow p.117 explicit element-example boundary. Current Tokyo Metropolitan Government landscape color guidance remains accepted public-sector authority for the narrow p.117 color-design-role boundary and the separately audited p.122 design-considerations boundary. Current Japan Fashion Association and Japan Civil Engineering Consultants Association material are accepted only for the narrow p.118 regional-context relationship boundary documented in the source audit. Current Color Prism landscape-color material and Itami City public-facility landscape guidance are accepted only for the narrow p.120 long-lifecycle relationship boundary documented in its source audit.

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
- Landscape p.118 `国内外の景観色彩の事例`: source-blocked.
- Landscape p.120 `人工要素と自然要素の色彩が共存`: source-blocked.
- Landscape p.120 `ライフサイクルの長い色彩`: `pc2.landscape.long_lifecycle_color` promoted record-identically; runtime 288 → 300.
- Landscape p.120 `大きな面積をもつ色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-large-area-source-audit.md`; checked public material does not expose a distinct sufficiently rich deterministic nonvisual rule set beyond adjacent/general large-area context.
- Landscape p.120 `太陽光に影響される色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p120-sunlight-source-audit.md`; checked public material supplies broad outdoor-light context but not the official-text deterministic rule set.
- Landscape p.121 `季節や時間の変化を感じさせる多様な色彩`: source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p121-season-time-source-audit.md`; checked public material confirms only broad season/time variability and does not expose the official-text deterministic rule set.
- Landscape p.122 `景観色彩設計の配慮事項`: source-resolved as `pc2.landscape.design_considerations`; 12/12 independently verified in authoring, pending promotion.
- Landscape p.123 `住宅の色彩設計プロセス`: next source-acquisition frontier after p.122 promotion.

## Landscape p.120 accepted long-lifecycle boundary — promoted

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-long-lifecycle-source-audit.md`.

`pc2.landscape.long_lifecycle_color` may use only:
- buildings and bridges as artificial elements that can remain in place for long periods;
- surrounding harmony as a planning priority over short-term fashion, novelty or individual self-assertion;
- the explicit caution that artificial landscape colors can occupy large visual areas;
- durability and weather resistance as relevant considerations for outdoor long-lived elements;
- the public-sector premise that public facilities remain for long periods and are seen by many people.

State: 12/12 independently verified, A/B/C/D=3/3/3/3, promoted record-identically; runtime 288 → 300. Post-promotion exact-equality/full-fingerprint/shared-engine coverage passed in CI `33665241835`.

## Landscape p.121 source boundary — blocked

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p121-season-time-source-audit.md`.

The official Grade 2 table of contents confirms p.121 and its order, but checked public authority does not expose a distinct sufficiently rich deterministic nonvisual rule set. Do not infer season/time-to-color mappings, fixed hue/value/chroma shifts, weather effects, RGB/HEX/display values, image appearance or unstated illumination geometry.

## Landscape p.122 accepted design-considerations boundary — authoring verified

Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p122-considerations-source-audit.md`.

`pc2.landscape.design_considerations` may use only:
- surrounding-landscape harmony;
- applicable numerical criteria together with standards intent and surrounding streetscape, not numerical compliance alone;
- individual location and relevant landscape resources as planning context;
- distant, middle and near viewpoints;
- natural/historical landscape skeleton for distant/middle views and locally accumulated place characteristics for near views;
- viewing distance, arrangement and material as explicit planning factors without inferring visual outcomes.

State: 12/12 independently verified, pending 0, A/B/C/D=3/3/3/3. Pre-promotion schema/full-fingerprint/nonvisual/shared-renderer gate and normal Power Color regression passed in CI `33674008109`; PR #572 merged as `165132c83eec5fd949e0023a9dfa9bdd62438e97`. Runtime remains 300/25 until record-identical promotion.

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
- p.120 large-area authoring must not be synthesized from the heading, generic area-effect prose, or the already-promoted long-lifecycle large-area caution.
- p.120 sunlight authoring must not infer fixed appearance changes or illumination geometry from generic outdoor-light material.
- p.121 season/time authoring must not infer fixed color mappings or appearance changes from generic landscape variability.
- p.122 design-considerations authoring does not authorize Tokyo-specific Munsell limits, fixed hue/tone choices, material appearance, image-derived judgments, RGB/HEX/display values or unstated viewing geometry.
- Keep Grade 3 source/display blockers unchanged.

## Exact next order

1. Promote the 12 verified `pc2.landscape.design_considerations` records record-identically into Grade 2 runtime, moving 300 → 312 and twenty-five → twenty-six skills.
2. Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to all twenty-six promoted skills.
3. Continue official text order at Landscape p.123 `住宅の色彩設計プロセス` only after successful promotion.
