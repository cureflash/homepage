# Power Color — HANDOFF

## Active work

Grade 2 is the active priority by explicit user override while Grade 3 remains incomplete. Grade 3 deferred state remains in `docs/power-color/91_GRADE3_DEFERRED_HANDOFF.md`; do not mark Grade 3 complete or relax its source/display gates.

## Grade 2 current checkpoint

Grade 2 runtime is 348 verified / pending 0 across twenty-nine promoted skills.

Landscape p.118 `国内外の景観色彩の事例`, p.120 `人工要素と自然要素の色彩が共存`, p.120 `大きな面積をもつ色彩`, p.120 `太陽光に影響される色彩`, p.121 `季節や時間の変化を感じさせる多様な色彩`, p.124 `配色計画`, and p.125 `色彩管理` remain source-blocked under their recorded audits. Do not reopen those routes without new explicit auditable authority.

Landscape p.123 `住宅の色彩設計プロセス` is source-resolved under `docs/power-color/audits/2026-09-03-grade2-landscape-p123-residential-process-source-audit.md`. The current AFT Grade 2 table of contents confirms the p.123 heading and following scope/order `色を測ることによる周辺環境の把握` → `配色計画` → `色彩管理`. Current Japan Paint Manufacturers Association practical training explicitly corroborates a detached-house color-design process including surrounding-environment visual color survey, consolidation of a color-design concept, a color scheme based on that concept, proposal-document/CG creation, and presentation.

Accepted p.123 boundary remains structural/nonvisual only. Do not treat the JPMA bullet list as a universal mandatory total order except for explicitly stated relations such as `コンセプトに基づいた色彩設計`. Do not infer RGB/HEX/display values, fixed hue/tone/Munsell recommendations, photograph/CG appearance, numerical measurement values, material appearance or unstated geometry.

`qualifications/color-certification/data/grade2-authoring-landscape-residential-color-design-process-0001-0012.json` contains 12 records generated pending-first and independently rechecked. Result: checked 12 / verified 12 / needs_revision 0 / rejected 0 / pending 0, A/B/C/D=3/3/3/3. Dedicated pre-promotion gate and normal Power Color regression passed in CI `33677670579`; PR #579 merged as `c3f8c298330209e19e01946ced4d1ea17e40ce3f`.

All 12 `pc2.landscape.residential_color_design_process` records are promoted record-identically into `qualifications/color-certification/data/grade2-runtime.json`, moving runtime 312 → 324 and twenty-six → twenty-seven skills. Exact-equality/full-fingerprint/shared Power TOEIC engine regression passed in Power Color CI `33678211235`; PR #582 merged as `6d64629b0bd8f5c5f305fce21f1d1d48c3a4234a`.

Landscape p.123 `色を測ることによる周辺環境の把握` is source-resolved under `docs/power-color/audits/2026-09-03-grade2-landscape-p123-surrounding-measurement-source-audit.md`. The accepted boundary is text-only: current Grade 2 scope/order, surrounding-environment survey by visual colorimetry, Munsell hue/value/chroma representation, paper/JIS Munsell comparison charts, and the distinction between quantitative color-value review and qualitative surrounding-landscape harmony. No RGB/HEX/display inference, place-specific measured values, local color-limit generalization, unstated geometry/lighting/tolerances or image-derived answers are authorized.

All 12 `pc2.landscape.surrounding_environment_measurement` records were independently rechecked and promoted record-identically. Runtime 324 → 336 and twenty-seven → twenty-eight skills. Authoring CI `33678931801` passed and PR #584 merged as `abda2407f0f9339948b12a8b9017a9f78f2b3c4c`; promotion gate `33679550547` passed and PR #586 merged as `c2aa6a4384d5a3dc7b967bf932b2486795cadbba`.

Landscape p.124 `配色計画` is source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p124-color-scheme-plan-source-audit.md`. Current public authority confirms the official scope and the practical relation that a color scheme is created from a color-design concept, but that relation is already promoted in `pc2.landscape.residential_color_design_process`. No distinct sufficiently rich deterministic nonvisual p.124 rule set is publicly auditable, so do not manufacture a duplicate 12-question batch.

Landscape p.125 `色彩管理` is source-blocked under `docs/power-color/audits/2026-09-03-grade2-landscape-p125-color-management-source-audit.md`. Current AFT material confirms the official Grade 2 scope/order and separately describes controlled color reproduction in official learning/exam materials, but public authority does not expose the detailed p.125 landscape rule set. Generic construction/paint quality-control procedures, local regulatory limits, RGB/HEX conversions, image/sample appearance, inferred tolerances/lighting/geometry, or facts already covered by p.123/p.124 are not accepted as substitutes.

p.128 `慣用色名（JISの慣用色名より）` narrow structure is source-resolved under `docs/power-color/audits/2026-09-03-grade2-p128-jis-conventional-name-structure-source-audit.md`. `pc2.conventional.jis_name_structure` contains 12 pending-first independently rechecked records, 12/12 verified with A/B/C/D=3/3/3/3, and is promoted record-identically. Runtime 336 → 348 and twenty-eight → twenty-nine skills. Exact-equality/full-fingerprint/shared Power TOEIC engine regression passed in Power Color CI `33690978044`; PR #599 merged as `61508bbc0a214873d023fb3487e14affe2de3a13`. This boundary authorizes only current AFT p.128/p.132 scope order and explicit JIS Z 8102:2001 structural definitions/classification. It does not authorize individual Grade 2 color-name membership, readings, Munsell values, RGB/HEX/display values, swatches, etymology, or Grade3→Grade2 inference.

p.128 `和色名` individual-name authoring is source-blocked under `docs/power-color/audits/2026-09-03-grade2-p128-washokumei-source-audit.md`. Current AFT authority confirms only the p.128–p.132 scope/order. Current JCRI/JSA material confirms the JIS Z 8102:2001 conventional-name framework but does not publicly expose the current Grade 2 pp.128–131 individual subset/readings. Full-JIS Japanese-name corpora and Grade 3 data therefore must not be projected into Grade 2; no individual-name questions were generated. PR #603 merged after Power Color CI `33693030915` succeeded.

p.132 `外来色名` individual-name authoring is source-blocked under `docs/power-color/audits/2026-09-03-grade2-p132-gairaishokumei-source-audit.md`. Current AFT authority confirms p.132 placement and that `資料・色名` follows at p.138. Current JCRI/JSA material confirms the JIS Z 8102:2001 conventional-name framework but does not publicly expose the current Grade 2 pp.132–137 individual foreign-name subset/readings. Historical or unofficial 2級 study lists, the full JIS corpus, and Grade 3 data are not accepted as membership authority; no individual-name questions were generated.

p.138 `資料・色名` is source-blocked as a distinct skill under `docs/power-color/audits/2026-09-03-grade2-p138-color-reference-source-audit.md`. The current official table of contents confirms its existence and placement, but public authority does not expose the current reference pages' full contents. An external/full JIS color-name table is not assumed record-identical to the official Grade 2 reference pages; no questions were generated.

p.142 `資料・配色イメージ手法の確立` is source-blocked as a distinct skill under `docs/power-color/audits/2026-09-03-grade2-p142-image-scheme-method-source-audit.md`. Current AFT/JCRI material supports color-image coordination and empirical image research generally, but public first-party authority does not expose the exact current p.142 procedure sufficiently to authorize production answers. Historical/secondary step sequences and image-derived palette properties are not accepted; no questions were generated.

Visual Design, Fashion p.091/p.095/p.096, Interior p.104, p.107 and p.111 remain source-blocked. Grade 3 remains 223 verified / pending 0 and incomplete.

## Exact next start point

The current public official Grade 2 table-of-contents frontier is exhausted after p.142. Do not mark Grade 2 complete because recorded source-blocked topics remain. Resume authoring only when new explicit auditable authority resolves a recorded blocked topic; do not repeat rejected source routes without new evidence.

Keep all Grade 3 blockers and source/display gates unchanged. Use only the shared Power TOEIC question-bank/workout/session engine.
